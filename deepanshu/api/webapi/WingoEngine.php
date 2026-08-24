<?php
/**
 * WinGo Universal Game Engine & Zero-Cron Dispatcher
 * Compatible with PHP 7.4, 8.0, 8.1, 8.2, 8.3
 */

date_default_timezone_set("Asia/Kolkata");

class WingoEngine {

    /**
     * Resolve game configuration for In999 typeId
     */
    public static function getConfig($typeId) {
        $tid = (int)$typeId;
        switch ($tid) {
            case 1:
                return [
                    'typeId'      => 1,
                    'name'        => 'Win 1 minute',
                    'interval'    => 60,
                    'intervalM'   => 1,
                    'gameCode'    => '10001',
                    'periodTable' => 'gelluonduhogu',
                    'resultTable' => 'gellaluhogiondu_phalitansa',
                    'betTable'    => 'bajikattuttate',
                ];
            case 2:
                return [
                    'typeId'      => 2,
                    'name'        => 'Win 3 minute',
                    'interval'    => 180,
                    'intervalM'   => 3,
                    'gameCode'    => '10002',
                    'periodTable' => 'gelluonduhogu_drei',
                    'resultTable' => 'gellaluhogiondu_phalitansa_drei',
                    'betTable'    => 'bajikattuttate_drei',
                ];
            case 3:
                return [
                    'typeId'      => 3,
                    'name'        => 'Win 5 minute',
                    'interval'    => 300,
                    'intervalM'   => 5,
                    'gameCode'    => '10003',
                    'periodTable' => 'gelluonduhogu_funf',
                    'resultTable' => 'gellaluhogiondu_phalitansa_funf',
                    'betTable'    => 'bajikattuttate_funf',
                ];
            case 4:
            case 30:
            case 0:
            case 5:
            default:
                return [
                    'typeId'      => 4,
                    'name'        => 'Win 30s',
                    'interval'    => 30,
                    'intervalM'   => 0.5,
                    'gameCode'    => '10005',
                    'periodTable' => 'gelluonduhogu_zehn',
                    'resultTable' => 'gellaluhogiondu_phalitansa_zehn',
                    'betTable'    => 'bajikattuttate_zehn',
                ];
        }
    }

    /**
     * Compute current active issue matching AR-Lottery sequence from UTC midnight
     */
    public static function getCurrentIssue($typeId) {
        $cfg = self::getConfig($typeId);
        $interval = $cfg['interval'];
        $now = time();

        // Calculate sequence based on UTC midnight
        $utcMidnight = strtotime(gmdate('Y-m-d 00:00:00', $now));
        $secondsToday = $now - $utcMidnight;
        $dateStr = gmdate('Ymd', $now);

        $seq = intval($secondsToday / $interval) + 1;
        $issueNumber = $dateStr . $cfg['gameCode'] . sprintf("%04d", $seq);

        $startTs = $utcMidnight + ($seq - 1) * $interval;
        $endTs = $utcMidnight + $seq * $interval;
        $secondsLeft = max(0, $endTs - $now);

        return [
            'typeId'       => $cfg['typeId'],
            'issueNumber'  => $issueNumber,
            'startTime'    => date('Y-m-d H:i:s', $startTs),
            'endTime'      => date('Y-m-d H:i:s', $endTs),
            'serviceTime'  => date('Y-m-d H:i:s', $now),
            'intervalM'    => $cfg['intervalM'],
            'secondsLeft'  => $secondsLeft,
            'isLocked'     => ($secondsLeft <= 5),
            'startTs'      => $startTs,
            'endTs'        => $endTs,
            'seq'          => $seq,
            'cfg'          => $cfg,
        ];
    }

    /**
     * Compute previous issue number
     */
    public static function getPreviousIssue($typeId) {
        $cfg = self::getConfig($typeId);
        $interval = $cfg['interval'];
        $now = time();

        $utcMidnight = strtotime(gmdate('Y-m-d 00:00:00', $now));
        $secondsToday = $now - $utcMidnight;
        $dateStr = gmdate('Ymd', $now);

        $seq = intval($secondsToday / $interval) + 1;

        if ($seq > 1) {
            return $dateStr . $cfg['gameCode'] . sprintf("%04d", $seq - 1);
        } else {
            $prevDay = gmdate('Ymd', $now - 86400);
            $maxSeq = intval(86400 / $interval);
            return $prevDay . $cfg['gameCode'] . sprintf("%04d", $maxSeq);
        }
    }

    /**
     * Determine official WinGo color from 0-9 number
     */
    public static function getColorForNumber($num) {
        $n = (int)$num;
        if ($n === 0) return 'red,violet';
        if ($n === 5) return 'green,violet';
        if (in_array($n, [1, 3, 7, 9])) return 'green';
        if (in_array($n, [2, 4, 6, 8])) return 'red';
        return 'green';
    }

    /**
     * Calculate payout multiplier based on user bet (ojana) and draw number
     */
    public static function calculateMultiplier($ojana, $number) {
        $n = (int)$number;
        $oj = is_numeric($ojana) ? (int)$ojana : -1;

        // Exact number (0-9) -> 9x
        if ($oj >= 0 && $oj <= 9) {
            return ($oj === $n) ? 9.0 : 0.0;
        }

        // Color Bets:
        // 10 = Red
        if ($oj === 10 || $ojana === 'red') {
            if (in_array($n, [2, 4, 6, 8])) return 2.0;
            if ($n === 0) return 1.5; // Half-violet rule
            return 0.0;
        }

        // 11 = Green
        if ($oj === 11 || $ojana === 'green') {
            if (in_array($n, [1, 3, 7, 9])) return 2.0;
            if ($n === 5) return 1.5; // Half-violet rule
            return 0.0;
        }

        // 12 = Violet (0 or 5)
        if ($oj === 12 || $ojana === 'violet') {
            if ($n === 0 || $n === 5) return 4.5;
            return 0.0;
        }

        // 13 = Big (5, 6, 7, 8, 9)
        if ($oj === 13 || $ojana === 'big') {
            return ($n >= 5 && $n <= 9) ? 2.0 : 0.0;
        }

        // 14 = Small (0, 1, 2, 3, 4)
        if ($oj === 14 || $ojana === 'small') {
            return ($n >= 0 && $n <= 4) ? 2.0 : 0.0;
        }

        return 0.0;
    }

    /**
     * Settle single draw result into DB and settle all bets atomically
     */
    public static function settleDrawResult($conn, $typeId, $issueNumber, $number, $premium = null, $color = null) {
        if (!$conn || empty($issueNumber)) return false;

        $cfg = self::getConfig($typeId);
        $resultTable = $cfg['resultTable'];
        $betTable = $cfg['betTable'];

        $num = (int)$number;
        if (empty($color)) {
            $color = self::getColorForNumber($num);
        }
        if (empty($premium)) {
            $premium = (string)(rand(1000, 9999) * 10 + $num);
        }

        $nowStr = date('Y-m-d H:i:s');

        // 1. Insert result into result table if not exists
        $stmtCheck = mysqli_query($conn, "SELECT kalaparichaya FROM `$resultTable` WHERE kalaparichaya = '$issueNumber' LIMIT 1");
        if ($stmtCheck && mysqli_num_rows($stmtCheck) == 0) {
            $insertSql = "INSERT INTO `$resultTable` (`kalaparichaya`, `bele`, `phalitansa`, `banna`, `phalitansadaprakara`, `dinankavannuracisi`) 
                          VALUES ('$issueNumber', '$premium', '$num', '$color', 'auto', '$nowStr')";
            mysqli_query($conn, $insertSql);
        }

        // 2. Fetch pending bets for this issue
        $betQuery = mysqli_query($conn, "SELECT parichaya, byabaharkarta, ojana, menge, wettanzahl, ketebida, sesabida 
                                         FROM `$betTable` 
                                         WHERE kalaparichaya = '$issueNumber' AND (ergebnis IS NULL OR ergebnis = '')");

        if ($betQuery && mysqli_num_rows($betQuery) > 0) {
            while ($bet = mysqli_fetch_assoc($betQuery)) {
                $betId = (int)$bet['parichaya'];
                $userId = (int)$bet['byabaharkarta'];
                $ojana = $bet['ojana'];
                $netAmount = (float)$bet['sesabida']; // Amount after 2% fee

                $multiplier = self::calculateMultiplier($ojana, $num);

                if ($multiplier > 0) {
                    $winAmount = round($netAmount * $multiplier, 2);
                    // Update bet as WON
                    mysqli_query($conn, "UPDATE `$betTable` SET 
                        `phalaphala` = 'gagner', 
                        `sesabida` = '$winAmount', 
                        `ergebnis` = '$num', 
                        `zufallig` = '$premium', 
                        `tiarikala` = '$nowStr' 
                        WHERE `parichaya` = '$betId'");

                    // Credit user wallet
                    mysqli_query($conn, "UPDATE `shonu_kaichila` SET `motta` = `motta` + '$winAmount' WHERE `balakedara` = '$userId'");
                } else {
                    // Update bet as LOST
                    mysqli_query($conn, "UPDATE `$betTable` SET 
                        `phalaphala` = 'perte', 
                        `sesabida` = 0, 
                        `ergebnis` = '$num', 
                        `zufallig` = '$premium', 
                        `tiarikala` = '$nowStr' 
                        WHERE `parichaya` = '$betId'");
                }
            }
        }

        // Ensure any remaining bets for this issue have result recorded
        mysqli_query($conn, "UPDATE `$betTable` SET `ergebnis` = '$num', `zufallig` = '$premium' WHERE `kalaparichaya` = '$issueNumber' AND (`ergebnis` IS NULL OR `ergebnis` = '')");

        return true;
    }

    /**
     * Automatic on-demand settlement and active period assurance (Zero-Cron Engine)
     */
    public static function autoSettleAndEnsureActive($conn, $typeId) {
        $cur = self::getCurrentIssue($typeId);
        $cfg = $cur['cfg'];
        $periodTable = $cfg['periodTable'];
        $resultTable = $cfg['resultTable'];

        if ($conn) {
            // 1. Ensure current issue is present in period table
            $checkPeriod = mysqli_query($conn, "SELECT atadaaidi FROM `$periodTable` ORDER BY kramasankhye DESC LIMIT 1");
            $lastPeriod = ($checkPeriod && mysqli_num_rows($checkPeriod) > 0) ? mysqli_fetch_assoc($checkPeriod)['atadaaidi'] : null;

            if ($lastPeriod !== $cur['issueNumber']) {
                $curIssue = $cur['issueNumber'];
                $startTime = $cur['startTime'];
                mysqli_query($conn, "INSERT INTO `$periodTable` (`atadaaidi`, `dinankavannuracisi`) VALUES ('$curIssue', '$startTime')");
            }

            // 2. Check if previous issue needs settlement
            $prevIssue = self::getPreviousIssue($typeId);
            $checkResult = mysqli_query($conn, "SELECT phalitansa FROM `$resultTable` WHERE kalaparichaya = '$prevIssue' LIMIT 1");

            if ($checkResult && mysqli_num_rows($checkResult) == 0) {
                // Check if admin set manual number
                $manualQuery = mysqli_query($conn, "SELECT sankhye FROM `hastacalita_phalitansa` WHERE sthiti = '1' LIMIT 1");
                if ($manualQuery && mysqli_num_rows($manualQuery) > 0) {
                    $mRow = mysqli_fetch_assoc($manualQuery);
                    $winNum = (int)$mRow['sankhye'];
                } else {
                    // Deterministic pseudo-random number matching game + issue
                    $hash = md5($typeId . '_' . $prevIssue);
                    $winNum = hexdec(substr($hash, 0, 4)) % 10;
                }

                $premium = (string)(rand(1000, 9999) * 10 + $winNum);
                $color = self::getColorForNumber($winNum);

                self::settleDrawResult($conn, $typeId, $prevIssue, $winNum, $premium, $color);
            }
        }

        return $cur;
    }
}
