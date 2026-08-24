<?php
session_start();
if (!isset($_SESSION['unohs']) || $_SESSION['unohs'] == null) {
    header("location:index.php?msg=unauthorized");
    exit;
}

include "conn.php";
date_default_timezone_set("Asia/Kolkata");

// --------------------
//  ACCEPT / REJECT LOGIC
// --------------------
if (isset($_GET['action']) && isset($_GET['id'])) {

    $id = intval($_GET['id']);
    $action = $_GET['action'];

    // Fetch original request first
    $req = $conn->query("SELECT user_id, amount FROM upi_withdraw_requests WHERE id='$id'");
    $reqData = mysqli_fetch_assoc($req);

    if ($reqData) {
        $user_id = $reqData['user_id'];
        $amount = $reqData['amount'];

        if ($action == "accept") {

            $sql = "UPDATE upi_withdraw_requests SET status='Success' WHERE id='$id'";

        } elseif ($action == "reject") {

            // ------ Return Balance to User ------
            $conn->query("UPDATE shonu_kaichila SET motta = motta + $amount WHERE balakedara = '$user_id'");

            $sql = "UPDATE upi_withdraw_requests SET status='Rejected' WHERE id='$id'";
        }

        if ($conn->query($sql)) {
            echo "<script>alert('Updated Successfully'); window.location='manage_upiw.php';</script>";
        } else {
            echo "<script>alert('Database Error: " . mysqli_error($conn) . "');</script>";
        }
    }
}

// --------------------
//  FILTER + SEARCH
// --------------------
$search = $_GET['search'] ?? "";
$status = $_GET['status'] ?? "All";

$where = "WHERE 1=1";

if ($search) {
    $search = mysqli_real_escape_string($conn, $search);
    $where .= " AND (user_id LIKE '%$search%' OR mobile LIKE '%$search%' OR upi_id LIKE '%$search%')";
}

if ($status != "All") {
    $where .= " AND status='$status'";
}

$data = $conn->query("SELECT * FROM upi_withdraw_requests $where ORDER BY id DESC");

?>

<!DOCTYPE html>
<html>
<head>
<title>Manage UPI Withdrawals</title>

<!-- GOOGLE ICONS -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<style>
body {
    font-family: Arial, sans-serif;
    background: #f5f7fa;
    margin: 0;
}

.header {
    background: #222;
    padding: 15px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header h2 {
    margin: 0;
}

.back-btn {
    background: #ff9800;
    padding: 8px 15px;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    font-weight: bold;
}

.container {
    padding: 20px;
}

.table-box {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    background: #009688;
    color: white;
}

th, td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.filter-box {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
}

input[type=text] {
    padding: 8px;
    width: 250px;
    border: 1px solid #888;
    border-radius: 5px;
}

select {
    padding: 8px;
    border-radius: 5px;
}

button {
    padding: 6px 14px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}

.accept {
    background: green;
    color: white;
}
.reject {
    background: red;
    color: white;
}
.status {
    padding: 5px 10px;
    border-radius: 5px;
}
.Pending { background: orange; color:white; }
.Success { background: green; color:white; }
.Rejected { background: red; color:white; }
</style>
</head>

<body>

<div class="header">
    <h2><span class="material-icons">account_balance_wallet</span> Manage UPI Withdrawals</h2>
    <a class="back-btn" href="dashboard.php"><span class="material-icons">arrow_back</span> Back</a>
</div>

<div class="container">

<div class="filter-box">
    <form method="GET">
        <input type="text" name="search" placeholder="Search UID / Mobile / UPI" value="<?= $search ?>">
        <select name="status">
            <option <?= $status=="All"?"selected":"" ?>>All</option>
            <option <?= $status=="Pending"?"selected":"" ?>>Pending</option>
            <option <?= $status=="Success"?"selected":"" ?>>Success</option>
            <option <?= $status=="Rejected"?"selected":"" ?>>Rejected</option>
        </select>
        <button style="background:#2196F3;color:white;">Search</button>
    </form>
</div>

<div class="table-box">
<table>
<tr>
    <th>ID</th>
    <th>User ID</th>
    <th>Name</th>
    <th>Mobile</th>
    <th>UPI ID</th>
    <th>Amount</th>
    <th>Bid</th>
    <th>Status</th>
    <th>Action</th>
</tr>

<?php while ($row = mysqli_fetch_assoc($data)) { ?>
<tr>
    <td><?= $row['id'] ?></td>
    <td><?= $row['user_id'] ?></td>
    <td><?= $row['user_name'] ?></td>
    <td><?= $row['mobile'] ?></td>
    <td><?= $row['upi_id'] ?></td>
    <td>₹<?= $row['amount'] ?></td>
    <td><?= $row['bid'] ?></td>

    <td><span class="status <?= $row['status'] ?>"><?= $row['status'] ?></span></td>

    <td>
        <?php if ($row['status'] == "Pending") { ?>

            <a href="manage_upiw.php?action=accept&id=<?= $row['id'] ?>">
                <button class="accept"><span class="material-icons">check</span></button>
            </a>

            <a href="manage_upiw.php?action=reject&id=<?= $row['id'] ?>">
                <button class="reject"><span class="material-icons">close</span></button>
            </a>

        <?php } else { ?>
            <b><?= $row['status'] ?></b>
        <?php } ?>
    </td>

</tr>
<?php } ?>

</table>
</div>

</div>

</body>
</html>
