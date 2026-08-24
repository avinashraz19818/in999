var Sn = Object.defineProperty;
var jn = (e, s, t) => s in e ? Sn(e, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : e[s] = t;
var wt = (e, s, t) => (jn(e, typeof s != "symbol" ? s + "" : s, t),
t);
import {r as S, m as $n, n as r, o as Bt, p as Gn, q as _s, t as Ne, u as Fe, S as Ln, v as In, w as pe, x as kn, y as He, z as Pe, A as be, B as $, C as et, D as Tn, E as Rn, F as ue, G as xt, H as Ot, I as Ie, J as ze, K as zs, M as Mt, N as ke, O as Xs, P as Wt, Q as Ut, R as De, T as st, U as Cn, V as Pn, W as Dn, X as tt, Y as Nt, Z as En, $ as Bn, a0 as Ve, a1 as ut, a2 as xn, a3 as nt, a4 as On, a5 as es, a6 as Mn, a7 as Wn, a8 as bt, a9 as at, aa as Un, ab as ye, ac as Rs, ad as os, ae as ps, af as vt, ag as rs, ah as Nn, ai as Vn, aj as us, ak as Fn, al as Hn, am as qn, an as Kn} from "./common.modules-af1f85b9.js";
import {M as zn, _ as Xn, a as Jn, b as Yn, c as Qn, d as Zn, e as ea, f as sa, g as ta, h as na, i as aa, j as oa} from "./page-turntable-assets-d6267459.js";
import {s as pa} from "./native/index-2c2af617.js";
import ca from "./en-8dc3e88f.js";
const ia = "/assets/png/withdrawHistory-fb2bafcf.png"
  , ga = "/assets/png/widthdrawBlue-80197e64.png"
  , ra = "/assets/png/usdt-6c465007.png"
  , la = "/assets/png/usdt-40311708.png"
  , da = "/assets/png/trx-8c63cfbf.png"
  , wa = "/assets/png/transf_amount-e9c0217c.png"
  , ua = "/assets/png/tip-0498e3f9.png"
  , ba = "/assets/png/thirdPartyLogo-5dc96e22.png"
  , va = "/assets/png/succeed-83674414.png"
  , ma = "/assets/png/slot_wallet-0f74ba62.png"
  , ya = "/assets/png/selectupi-a393f4a3.png"
  , fa = "/assets/png/saveWallet-ce287b90.png"
  , Aa = "/assets/png/safety-ba393abc.png"
  , ha = "/assets/png/recharge_usdt-d87aea5b.png"
  , _a = "/assets/png/rechargeIcon-e515aee4.png"
  , Sa = "/assets/png/rechargeHistory-b5a853c0.png"
  , ja = "/assets/png/quickpay2-ceb1387d.png"
  , $a = "/assets/png/hint-c6828dc5.png"
  , Ga = "/assets/png/gift-55dc786a.png"
  , La = "/assets/png/balance-e39ce400.png"
  , Ia = "/assets/png/ar-TotalAssetsBg-3e718d2b.png"
  , ka = "/assets/png/TotalAssetsBg-73bf379c.png"
  , Ta = "/assets/svg/Ar_Gift-f96ba611.svg"
  , Ra = "/assets/svg/ArPayBackground-8c36eecc.svg"
  , Ca = "/assets/svg/wallet-f122fa1c.svg"
  , Pa = "/assets/svg/promotion-f9fa0f41.svg"
  , Da = "/assets/svg/main-97914712.svg"
  , Ea = "/assets/svg/home-7c1d2a9a.svg"
  , Ba = "/assets/svg/chat-9dcf7b71.svg"
  , xa = "/assets/svg/activity-f339e668.svg"
  , Oa = "/assets/svg/redhomeN-36a3ba15.svg"
  , Ma = "/assets/png/xosoCity-45b22f6c.png"
  , Wa = "/assets/svg/weeklyType9-dfbfa5f5.svg"
  , Ua = "/assets/svg/weeklyType8-d34a0143.svg"
  , Na = "/assets/svg/weeklyType7-9b8179b3.svg"
  , Va = "/assets/svg/weeklyType6-17da4c31.svg"
  , Fa = "/assets/svg/weeklyType5-fc8ad507.svg"
  , Ha = "/assets/svg/weeklyType4-99a51307.svg"
  , qa = "/assets/svg/weeklyType3-e6ab7d85.svg"
  , Ka = "/assets/svg/weeklyType2-29588ce0.svg"
  , za = "/assets/svg/weeklyType12-34fde9d7.svg"
  , Xa = "/assets/svg/weeklyType11-25f842c6.svg"
  , Ja = "/assets/svg/weeklyType10-07c4e868.svg"
  , Ya = "/assets/svg/weeklyType1-5e9f2d00.svg"
  , Qa = "/assets/png/warning2-9b67d247.png"
  , Za = "/assets/png/wallet-3f0340b6.png"
  , eo = "/assets/png/ticketstar-1284c928.png"
  , so = "/assets/png/tabBarBg-0d05851f.png"
  , to = "/assets/png/superjackpotHome-72bbeb43.png"
  , no = "/assets/png/succeed-83674414.png"
  , ao = "/assets/png/searchIcon-6e1f8e9b.png"
  , oo = "/assets/png/rule-8e1a88b1.png"
  , po = "/assets/png/right_arrow-a0e7f40b.png"
  , co = "/assets/svg/playactive-34625475.svg"
  , io = "/assets/svg/play-d1d7d017.svg"
  , go = "/assets/png/palybg-97711462.png"
  , ro = "/assets/svg/notify-01faa459.svg"
  , lo = "/assets/png/icon-question-de9a9185.png"
  , wo = "/assets/svg/hot-fd77f154.svg"
  , uo = "/assets/png/headerBg-c5504bca.png"
  , bo = "/assets/svg/greenNotify-afbc4a21.svg"
  , vo = "/assets/png/empty-4ac9a431.png"
  , mo = "/assets/png/daman-lottery_background-2c86d0eb.png"
  , yo = "/assets/png/copy-1441e76c.png"
  , fo = "/assets/png/bookicon-91d16b45.png"
  , Ao = "/assets/png/before_cire-0951deab.png"
  , ho = "/assets/svg/anbg-2e633fe1.svg"
  , _o = "/assets/png/activityIcon1-67076a48.png"
  , So = "/assets/png/Triangle-480e975e.png"
  , jo = "/assets/png/wallet-1215d27d.png"
  , $o = "/assets/png/u2-c803ae0d.png"
  , Go = "/assets/png/u1-261d82ac.png"
  , Lo = "/assets/png/trucktick-4f43261f.png"
  , Io = "/assets/png/team_port-ffd653b5.png"
  , ko = "/assets/png/team_partner-6d5611d5.png"
  , To = "/assets/png/subordinate-5ce6775d.png"
  , Ro = "/assets/png/shuoming-3285244e.png"
  , Co = "/assets/png/serverbg-97d6004f.png"
  , Po = "/assets/png/server-b7c71127.png"
  , Do = "/assets/png/searchIcon1-c3f810ad.png"
  , Eo = "/assets/png/roundIcon-d4d5ea8b.png"
  , Bo = "/assets/png/rebateRatio-7a0e4b1b.png"
  , xo = "/assets/png/promotionbg-13880556.png"
  , Oo = "/assets/png/poster-b3c0368e.png"
  , Mo = "/assets/png/money-4426537a.png"
  , Wo = "/assets/png/lv-450d4246.png"
  , Uo = "/assets/png/invite_reg-ad4ab463.png"
  , No = "/assets/png/groupSubordinate-0c376eee.png"
  , Vo = "/assets/png/extraBonus-ab106fcb.png"
  , Fo = "/assets/png/directSubordinate-b2d764c2.png"
  , Ho = "/assets/png/copy_code-5db2cfe6.png"
  , qo = "/assets/png/commission-1a0e795f.png"
  , Ko = "/assets/png/bg1-d6d02e9f.png"
  , zo = "/assets/png/bank-1227ae77.png"
  , Xo = "/assets/png/withdrawHistory-12d183a9.png"
  , Jo = "/assets/png/wallets-7cd3c0b8.png"
  , Yo = "/assets/png/wallet-21113a47.png"
  , Qo = "/assets/png/wallet1-8be3e605.png"
  , Zo = "/assets/png/wallet-34507dfa.png"
  , e1 = "/assets/png/versionUpdate-8bb131c1.png"
  , s1 = "/assets/png/verify-81c529c8.png"
  , t1 = "/assets/png/vault-a933a89f.png"
  , n1 = "/assets/png/trianglered-7f8dfe98.png"
  , a1 = "/assets/png/tradeHistory-76a3492f.png"
  , o1 = "/assets/png/super_no-2a5dd75e.png"
  , p1 = "/assets/png/statsIcon-bd106515.png"
  , c1 = "/assets/png/settingCenter-779783db.png"
  , i1 = "/assets/png/serviceCenter-ed250156.png"
  , g1 = "/assets/png/ruleicon-81461832.png"
  , r1 = "/assets/png/riskProtocal-ed984a2b.png"
  , l1 = "/assets/png/refresh-9e7836ef.png"
  , d1 = "/assets/png/privacyIcon-3e14c648.png"
  , w1 = "/assets/png/pointsSmallIncon-01ccfa9c.png"
  , u1 = "/assets/png/points-2f9295d8.png"
  , b1 = "/assets/png/phoneactive-d3ea66d4.png"
  , v1 = "/assets/png/phone-8279bf85.png"
  , m1 = "/assets/png/password-c2d8d12b.png"
  , y1 = "/assets/png/otheractive-cddf4a7d.png"
  , f1 = "/assets/png/other-53f673ed.png"
  , A1 = "/assets/png/orderIcon-db434836.png"
  , h1 = "/assets/png/notifyIcon-6c47f5ee.png"
  , _1 = "/assets/png/notificationIcon-cf50c38b.png"
  , S1 = "/assets/png/notificationCenter-7c9bf6f3.png"
  , j1 = "/assets/png/mylottery-59fde5b3.png"
  , $1 = "/assets/png/myWithdrawHistory-7d6690a5.png"
  , G1 = "/assets/png/moonBar-f80ac733.png"
  , L1 = "/assets/svg/messageReadAll-e3d5ba37.svg"
  , I1 = "/assets/svg/messageIconRed-fbce48b4.svg"
  , k1 = "/assets/svg/messageIconIsRead-77730fad.svg"
  , T1 = "/assets/svg/messageGarbage-1774102f.svg"
  , R1 = "/assets/png/love2-83aaa90e.png"
  , C1 = "/assets/png/love-96f89b45.png"
  , P1 = "/assets/png/languageIcon-4c117d4d.png"
  , D1 = "/assets/png/kBg-d1dd7b40.png"
  , E1 = "/assets/svg/inviterule-c8d78199.svg"
  , B1 = "/assets/svg/inviterecord-610ce16f.svg"
  , x1 = "/assets/png/invitation-2f57cad4.png"
  , O1 = "/assets/png/iconservr-dafbd4f0.png"
  , M1 = "/assets/png/iconservr-r-73b0dd64.png"
  , W1 = "/assets/png/iconSlots-dc0d52e9.png"
  , U1 = "/assets/png/iconRealPerson-d6a539c2.png"
  , N1 = "/assets/png/iconPhysics-57f83ec6.png"
  , V1 = "/assets/png/iconMiniGame-edfd2dbe.png"
  , F1 = "/assets/png/loterry-13b4d059.png"
  , H1 = "/assets/png/iconFishing-467fb1f6.png"
  , q1 = "/assets/png/iconElectric-76d8f78d.png"
  , K1 = "/assets/png/iconChess-13aafe08.png"
  , z1 = "/assets/png/gverifyDownload-271370b1.png"
  , X1 = "/assets/png/guide-4c5e16b0.png"
  , J1 = "/assets/png/googleVerifyBg-c131459b.png"
  , Y1 = "/assets/png/googleValidation-90c05cd9.png"
  , Q1 = "/assets/png/googleKey-4c7f16a7.png"
  , Z1 = "/assets/png/gold-4a60a059.png"
  , ep = "/assets/png/giftIcon-17a26471.png"
  , sp = "/assets/png/gift-0e49be1a.png"
  , tp = "/assets/png/gameStatsSteps-fde7a66f.png"
  , np = "/assets/png/gRecord-5912132e.png"
  , ap = "/assets/png/forgetpassword-3dde2500.png"
  , op = "/assets/png/feedbackImg-b7a3bd03.png"
  , pp = "/assets/png/eyeVisible-09720f5f.png"
  , cp = "/assets/png/eyeInvisible-821d9d16.png"
  , ip = "/assets/png/emailactive-12a419a4.png"
  , gp = "/assets/png/email-d1eb3456.png"
  , rp = "/assets/png/editPswIcon-91edaf22.png"
  , lp = "/assets/png/editPhoneIcon-db913345.png"
  , dp = "/assets/png/diamond-4c4156d6.png"
  , wp = "/assets/png/dialogNickname-29ce49ed.png"
  , up = "/assets/png/customerBg-660c5552.png"
  , bp = "/assets/png/customer-4afe1e50.png"
  , vp = "/assets/png/crown-23f0278c.png"
  , mp = "/assets/png/cps-2a059ec1.png"
  , yp = "/assets/png/copyIcon-2aed1c84.png"
  , fp = "/assets/png/chessStepIcon-6ca76235.png"
  , Ap = "/assets/png/cellphone-834e6951.png"
  , hp = "/assets/png/betResultStep-e17a42d5.png"
  , _p = "/assets/png/betInfoStep-7b7e5e57.png"
  , Sp = "/assets/png/betHistory-41216dfa.png"
  , jp = "/assets/png/avatar-2f23f3bd.png"
  , $p = "/assets/png/aboutBg-4bc986ee.png"
  , Gp = "/assets/png/about-f4c85138.png"
  , Lp = "/assets/png/VipIcon-3c72b1cc.png"
  , Ip = "/assets/png/Vector-fb350715.png"
  , kp = "/assets/png/TotalAssetsBg-81d648d4.png"
  , Tp = "/assets/png/StrongBoxRecordBg-fbad8a74.png"
  , Rp = "/assets/png/EmailIcon-4cb8279d.png"
  , Cp = "/assets/png/CStype7-dea3a1e2.png"
  , Pp = "/assets/png/CStype6-3823ff6e.png"
  , Dp = "/assets/png/CStype5-6b3a66e3.png"
  , Ep = "/assets/png/CStype2-d7b94bf8.png"
  , Bp = "/assets/png/CStype3-7588d980.png"
  , xp = "/assets/png/CStype2-d7b94bf8.png"
  , Op = "/assets/png/CStype1-44df01f2.png"
  , Mp = "/assets/png/winning_bg-2e4b55b4.png"
  , Wp = "/assets/png/wingoissue-6a9eab2e.png"
  , Up = "/assets/png/wingoPreSaleBg-245c187a.png"
  , Np = "/assets/png/walletbg-f5c62a26.png"
  , Vp = "/assets/png/wallet-3f0340b6.png"
  , Fp = "/assets/png/trxbg-dfc0114e.png"
  , Hp = "/assets/png/time_a-3460e16a.png"
  , qp = "/assets/png/time-5d4e96a3.png"
  , Kp = "/assets/svg/public3Wallet-cf2b1924.svg"
  , zp = "/assets/svg/noticeBarSpeaker-bbc4b014.svg"
  , Xp = "/assets/svg/noticeBarHot-8f8e5309.svg"
  , Jp = "/assets/svg/messageIcon-b4acc92c.svg"
  , Yp = "/assets/png/logout-f985cd3f.png"
  , Qp = "/assets/png/icon_sevice-9f0c8455.png"
  , Zp = "/assets/png/bj-0907ace0.png"
  , ec = "/assets/png/bgActive-6dd9d9ec.png"
  , sc = "/assets/png/bg-70e2d0c9.png"
  , tc = "/assets/svg/arrow-right-ebaad91e.svg"
  , nc = "/assets/png/all2-3a99e9f9.png"
  , ac = "/assets/png/all-da76a7fc.png"
  , oc = "/assets/png/stage-f0b7a560.png"
  , pc = "/assets/png/notify-9d47d091.png"
  , cc = "/assets/svg/right-a82d0dc8.svg"
  , ic = "/assets/svg/left-32c2aab3.svg"
  , gc = "/assets/svg/backButton-6151ff48.svg"
  , rc = "/assets/png/Side_Close-0584241b.png"
  , lc = "/assets/png/upload_icon-774d5de1.png"
  , dc = "/assets/svg/rulehead-e7d9fd2b.svg"
  , wc = "/assets/png/agree-a-95c84913.png"
  , uc = "/assets/png/turntable_icon-04916ea0.png"
  , bc = "/assets/png/turntable-b345db9e.png"
  , vc = "/assets/png/third_bg-dfa325e7.png"
  , mc = "/assets/png/third_bg-dfa325e7.png"
  , yc = "/assets/svg/redhomeN-b92376ea.svg"
  , fc = "/assets/svg/messageActive-a6757d78.svg"
  , Ac = "/assets/png/lottery_bg-1edd950a.png"
  , hc = "/assets/png/icon_sevice-9f0c8455.png"
  , _c = "/assets/png/hot_bg-cdfcf84a.png"
  , Sc = "/assets/png/game_mini_bg-c04fcbbd.png"
  , jc = "/assets/png/fish_bg-bf0b060b.png"
  , $c = "/assets/png/electronic_bg-3178ba77.png"
  , Gc = "/assets/svg/changlong-fd1e448e.svg"
  , Lc = "/assets/png/headerBg-c5504bca.png"
  , Ic = "/assets/png/head-e5e097e3.png"
  , kc = "/assets/png/dualArrow-e40dcf78.png"
  , Tc = "/assets/png/bg-302d9773.png"
  , Rc = "/assets/svg/active_b-4a60eef5.svg"
  , Cc = "/assets/png/videoActive-67d99b5e.png"
  , Pc = "/assets/png/video-b54edeaa.png"
  , Dc = "/assets/png/tabActive-796a5254.png"
  , Ec = "/assets/png/tab-97a30bc0.png"
  , Bc = "/assets/png/sportActive-0b279689.png"
  , xc = "/assets/png/sport-47088d84.png"
  , Oc = "/assets/png/slotActive-aeb13ec9.png"
  , Mc = "/assets/png/slot-0ae7daf0.png"
  , Wc = "/assets/png/popularActive-c4010b84.png"
  , Uc = "/assets/png/popular-05b5a660.png"
  , Nc = "/assets/png/num6-1cc40321.png"
  , Vc = "/assets/png/num5-7962f058.png"
  , Fc = "/assets/png/num4-6bed6212.png"
  , Hc = "/assets/png/num3-52bb404d.png"
  , qc = "/assets/png/num2-96e175aa.png"
  , Kc = "/assets/png/num1-9f16525b.png"
  , zc = "/assets/png/n6-b68c6bb6.png"
  , Xc = "/assets/png/n5-09b70e91.png"
  , Jc = "/assets/png/n4-9d453819.png"
  , Yc = "/assets/png/n3-1432a6bd.png"
  , Qc = "/assets/png/n2-447499dc.png"
  , Zc = "/assets/png/n1-584b8878.png"
  , ei = "/assets/png/lotteryActive-eda604f1.png"
  , si = "/assets/png/lottery-af7c0f05.png"
  , ti = "/assets/png/flashActive-447f35a6.png"
  , ni = "/assets/png/flash-a975ad53.png"
  , ai = "/assets/png/fishActive-b00d1575.png"
  , oi = "/assets/png/fish-407305dc.png"
  , pi = "/assets/png/chessActive-0cdeb29e.png"
  , ci = "/assets/png/chess-cfba644a.png"
  , ii = "/assets/png/bgActive-a1b5932b.png"
  , gi = "/assets/png/bg-f5ff3553.png"
  , ri = "/assets/png/allActive-f17fb22d.png"
  , li = "/assets/png/all-27493840.png"
  , di = "/assets/png/bg2-78c2b28b.png"
  , wi = "/assets/png/8-99f019b4.png"
  , ui = "/assets/png/6-d6ee4bdd.png"
  , bi = "/assets/png/5-f026eff3.png"
  , vi = "/assets/png/4-d37103ef.png"
  , mi = "/assets/png/3-6bb1e3bd.png"
  , yi = "/assets/png/21-b48d886d.png"
  , fi = "/assets/png/10-e1104eb3.png"
  , Ai = "/assets/png/1-4618686f.png"
  , hi = "/assets/png/wave_icon-41753b97.png"
  , _i = "/assets/png/wave-9300da3f.png"
  , Si = "/assets/png/slot_wallet-0f74ba62.png"
  , ji = "/assets/png/kbz_icon-1ab461b7.png"
  , $i = "/assets/png/kbz-b7b75d71.png"
  , Gi = "/assets/png/bank-bf085d1b.png"
  , Li = "/assets/png/appeal-645c7205.png"
  , Ii = "/assets/png/rule-r-ee114f98.png"
  , ki = "/assets/png/weal5-50bb1128.png"
  , Ti = "/assets/png/weal4-e90ef388.png"
  , Ri = "/assets/png/weal3-35c69f13.png"
  , Ci = "/assets/png/5-5e6a64b1.png"
  , Pi = "/assets/png/4-e53b4da2.png"
  , Di = "/assets/png/3-99bbc2d4.png"
  , Ei = "/assets/png/2-0a41a908.png"
  , Bi = "/assets/png/1-fd9896f4.png"
  , xi = "/assets/png/super_4-e095e427.png"
  , Oi = "/assets/png/super_3-bcede2ec.png"
  , Mi = "/assets/png/super_2-8adb978d.png"
  , Wi = "/assets/png/super_1-03f23e59.png"
  , Ui = "/assets/png/welfare5-8b250748.png"
  , Ni = "/assets/png/welfare4-5642a4c8.png"
  , Vi = "/assets/png/welfare3-bfb05d5e.png"
  , Fi = "/assets/png/welfare2-cf757d28.png"
  , Hi = "/assets/png/welfare1-eee87ee1.png"
  , qi = "/assets/png/Circle-2-30e26c59.png"
  , Ki = "/assets/png/Circle-1-f9156ecb.png"
  , zi = "/assets/png/9-b2e01899.png"
  , Xi = "/assets/png/8-b0ebfa02.png"
  , Ji = "/assets/png/7-1deed869.png"
  , Yi = "/assets/png/6-57560368.png"
  , Qi = "/assets/png/5-309a53a6.png"
  , Zi = "/assets/png/4-addcca26.png"
  , e2 = "/assets/png/3-772507f8.png"
  , s2 = "/assets/png/2-5381bc14.png"
  , t2 = "/assets/png/10-ad370b50.png"
  , n2 = "/assets/png/1-793a027d.png"
  , a2 = "/assets/png/0-9eed23ad.png"
  , o2 = "/assets/png/vector-bd73ff80.png"
  , p2 = "/assets/svg/turntableTitle-4aa693e3.svg"
  , c2 = "/assets/png/turntable-b345db9e.png"
  , i2 = "/assets/svg/frame-2e8ded2f.svg"
  , g2 = "/assets/svg/activityRule-f57c0f0c.svg"
  , r2 = "/assets/svg/activityIntro-502032ec.svg"
  , l2 = "/assets/svg/activityDetail-0772222d.svg"
  , d2 = "/assets/png/verified-07adefdd.png"
  , w2 = "/assets/png/redeemdBg-11a66dae.png"
  , u2 = "/assets/png/redDiamondSm-e70ad689.png"
  , b2 = "/assets/png/pointsIcon-0920a82f.png"
  , v2 = "/assets/png/point_2-53ee0279.png"
  , m2 = "/assets/png/point_1-337335f6.png"
  , y2 = "/assets/png/plus-c6759b9a.png"
  , f2 = "/assets/png/orderItemDetail-75e9d064.png"
  , A2 = "/assets/png/minus-5a9596f2.png"
  , h2 = "/assets/png/luckyNumber-9462541a.png"
  , _2 = "/assets/png/lotteryReceiver-a6053ba3.png"
  , S2 = "/assets/png/lotteryContact-1841aa7f.png"
  , j2 = "/assets/png/headerBodyBg-ed92106e.png"
  , $2 = "/assets/png/edit-46999709.png"
  , G2 = "/assets/svg/wallet-f122fa1c.svg"
  , L2 = "/assets/png/tabBarBg-f310cbcd.png"
  , I2 = "/assets/svg/promotion-f9fa0f41.svg"
  , k2 = "/assets/svg/main-97914712.svg"
  , T2 = "/assets/svg/home-7c1d2a9a.svg"
  , R2 = "/assets/svg/chat-9dcf7b71.svg"
  , C2 = "/assets/svg/activity-f339e668.svg"
  , P2 = "/assets/png/welfareBG-af1a5ac0.png"
  , D2 = "/assets/png/wallet1-8be3e605.png"
  , E2 = "/assets/png/weal3-35c69f13.png"
  , B2 = "/assets/png/succeed-c582cb6c.png"
  , x2 = "/assets/png/4-e53b4da2.png"
  , O2 = "/assets/png/love2-83aaa90e.png"
  , M2 = "/assets/png/love-96f89b45.png"
  , W2 = "/assets/png/insurance1-44b507bb.png"
  , U2 = "/assets/png/insurance-43faf0ad.png"
  , N2 = "/assets/png/gold-4a60a059.png"
  , V2 = "/assets/png/1-fd9896f4.png"
  , F2 = "/assets/png/diamond-4c4156d6.png"
  , H2 = "/assets/png/crown-23f0278c.png"
  , q2 = "/assets/png/bottomBg-861932c6.png"
  , K2 = "/assets/png/2-0a41a908.png"
  , z2 = "/assets/png/MonthlyReward-fd9dde00.png"
  , X2 = "/assets/png/wallets-3e2d0ead.png"
  , J2 = "/assets/png/serverIcon-fc4bf5f3.png"
  , Y2 = "/assets/png/hint-c6828dc5.png"
  , Q2 = "/assets/svg/copy-41d23b56.svg"
  , Z2 = "/assets/png/ar_success-c7e602bd.png"
  , eg = "/assets/png/ar_appeal-e1838ecf.png"
  , sg = "/assets/png/ar2-3da2c295.png"
  , tg = "/assets/png/ar1-f6f111ad.png"
  , ng = "/assets/png/YGG-dbeb9403.png"
  , ag = "/assets/png/Wickets9-3ce2811c.png"
  , og = "/assets/png/WM_Video-6de833fe.png"
  , pg = "/assets/png/V8Card-e97485c2.png"
  , cg = "/assets/png/TB-b6321468.png"
  , ig = "/assets/png/TB-b6321468.png"
  , gg = "/assets/png/SaBa-bc2e31c6.png"
  , rg = "/assets/png/SEXY_Video-52b1e739.png"
  , lg = "/assets/png/PP-797b732c.png"
  , dg = "/assets/png/PG-b671cf40.png"
  , wg = "/assets/png/MG-ac952b9a.png"
  , ug = "/assets/png/Lottery-3e32dad3.png"
  , bg = "/assets/png/JILI-c52436c6.png"
  , vg = "/assets/png/JDB-8735518a.png"
  , mg = "/assets/png/IM-51c9ea33.png"
  , yg = "/assets/png/HB-d5e5192c.png"
  , fg = "/assets/png/EVOPlay-4b83bbe2.png"
  , Ag = "/assets/png/EVOPlay-4b83bbe2.png"
  , hg = "/assets/png/EVOPlay-4b83bbe2.png"
  , _g = "/assets/png/DG-43b70b54.png"
  , Sg = "/assets/png/Card365-14ee9d36.png"
  , jg = "/assets/png/CQ9-a679c82e.png"
  , $g = "/assets/png/CMD-df6e06ac.png"
  , Gg = "/assets/png/BetSoft-1ada89f3.png"
  , Lg = "/assets/svg/Ar_Gift-f96ba611.svg"
  , Ig = "/assets/svg/ArPayBackground-8c36eecc.svg"
  , kg = "/assets/png/AG-4e3ef3a2.png"
  , Tg = "/assets/png/AG-4e3ef3a2.png"
  , Rg = "/assets/png/searchIcon1-c3f810ad.png"
  , Cg = "/assets/png/searchIcon-6e1f8e9b.png"
  , Pg = "/assets/png/wallet-18e38105.png"
  , Dg = "/assets/png/u2-c803ae0d.png"
  , Eg = "/assets/png/u1-261d82ac.png"
  , Bg = "/assets/png/team_port-ffd653b5.png"
  , xg = "/assets/png/team_partner-f023435e.png"
  , Og = "/assets/png/teamPartnerBg-bf3ba57d.png"
  , Mg = "/assets/png/subordinate-5ce6775d.png"
  , Wg = "/assets/png/serverbg-79bf9bd1.png"
  , Ug = "/assets/png/server-6757d18e.png"
  , Ng = "/assets/png/searchIcon-61d6fcda.png"
  , Vg = "/assets/png/receive-e2f14e8e.png"
  , Fg = "/assets/png/rebateRatio-b326349c.png"
  , Hg = "/assets/png/rank-3-78762525.png"
  , qg = "/assets/png/rank-2-65f89b5b.png"
  , Kg = "/assets/png/rank-1-9932f847.png"
  , zg = "/assets/png/promotionbg-1203267e.png"
  , Xg = "/assets/png/money-4426537a.png"
  , Jg = "/assets/png/invite_reg-ad4ab463.png"
  , Yg = "/assets/png/invite-34c1cf8c.png"
  , Qg = "/assets/png/invitation-7d30dab1.png"
  , Zg = "/assets/png/group-3c65c582.png"
  , er = "/assets/png/direct-1fc4b88b.png"
  , sr = "/assets/png/crown-9fdb1c80.png"
  , tr = "/assets/png/copy_code-5db2cfe6.png"
  , nr = "/assets/png/commission-4d02b206.png"
  , ar = "/assets/png/verify-81c529c8.png"
  , or = "/assets/png/password-c2d8d12b.png"
  , pr = "/assets/png/leftArrow-e7e5cbbb.png"
  , cr = "/assets/png/invitation-2f57cad4.png"
  , ir = "/assets/png/iconservr-dafbd4f0.png"
  , gr = "/assets/png/iconservr-r-73b0dd64.png"
  , rr = "/assets/png/googleIcon-666ff85e.png"
  , lr = "/assets/png/eyeVisible-09720f5f.png"
  , dr = "/assets/png/eyeInvisible-821d9d16.png"
  , wr = "/assets/png/dl_bg-b06086b6.png"
  , ur = "/assets/png/cellphone-834e6951.png"
  , br = "/assets/png/zh-441403d8.png"
  , vr = "/assets/png/vi-7e276113.png"
  , mr = "/assets/png/th-dab4368e.png"
  , yr = "/assets/png/rus-3e998552.png"
  , fr = "/assets/png/pk-076f0344.png"
  , Ar = "/assets/png/ph-f374fde7.png"
  , hr = "/assets/png/my-2cbaca53.png"
  , _r = "/assets/png/md-8f32f4c5.png"
  , Sr = "/assets/png/korea-9ace4c53.png"
  , jr = "/assets/png/japan-09a3697b.png"
  , $r = "/assets/png/id-028d0842.png"
  , Gr = "/assets/png/hd-796a1d34.png"
  , Lr = "/assets/png/en-4c6eba8e.png"
  , Ir = "/assets/png/bra-42104755.png"
  , kr = "/assets/png/bd-de258be1.png"
  , Tr = "/assets/png/ar-c17e831d.png"
  , Rr = "/assets/png/tabBarBg-0d05851f.png"
  , Cr = "/assets/png/promotionBg-8f7ec356.png"
  , Pr = "/assets/png/logo-e3b68b06.png"
  , Dr = "/assets/png/gameDefault-91e9c0e8.png"
  , Er = "/assets/png/empty-4ac9a431.png"
  , Br = "/assets/png/avatar-2f23f3bd.png"
  , xr = "/assets/png/avatar-2f23f3bd.png"
  , Or = "/assets/png/All-8c681a92.png"
  , Mr = "/assets/png/win-d581733a.png"
  , Wr = "/assets/png/u18-7146ab6f.png"
  , Ur = "/assets/png/turntable_icon-9b14cf81.png"
  , Nr = "/assets/png/tg_bg-8a7ff21e.png"
  , Vr = "/assets/svg/search-e8c2aae9.svg"
  , Fr = "/assets/png/reward_bg-e5a247a8.png"
  , Hr = "/assets/png/rewardCenter-f8f2277a.png"
  , qr = "/assets/png/public3MsgIcon-d1b8dfd9.png"
  , Kr = "/assets/png/promp_right-94f38012.png"
  , zr = "/assets/png/promp_left-1734be37.png"
  , Xr = "/assets/png/promp_bg-0019cb3c.png"
  , Jr = "/assets/png/profit-56d94e8f.png"
  , Yr = "/assets/png/p3morewg-ec659679.png"
  , Qr = "/assets/png/p3morebg-63bb449f.png"
  , Zr = "/assets/png/p3ar037morebg-dc9e39c6.png"
  , e6 = "/assets/png/notice-ddf69f91.png"
  , s6 = "/assets/png/minGame-037ea1c2.png"
  , t6 = "/assets/png/luck_bg-2a1100a6.png"
  , n6 = "/assets/png/loteria-0ccd41c5.png"
  , a6 = "/assets/png/fullscreen-36cb1d31.png"
  , o6 = "/assets/png/exitfullscreen-d4d55411.png"
  , p6 = "/assets/png/changlong_icon-e1589540.png"
  , c6 = "/assets/png/changlong_bg-22ec113c.png"
  , i6 = "/assets/jpg/changlong51_bg-04233e9c.jpg"
  , g6 = "/assets/png/banner-8c41464a.png"
  , r6 = "/assets/svg/backButton-eadf8686.svg"
  , l6 = "/assets/png/award-8b8981e3.png"
  , d6 = "/assets/png/avatar-fb4c2506.png"
  , w6 = "/assets/png/ar-notice-fa2dbf0f.png"
  , u6 = "/assets/svg/Group20225-a3b6092b.svg"
  , b6 = "/assets/svg/Go-ebc6176d.svg"
  , v6 = "/assets/png/DailyProfitRankStage-aa468a0a.png"
  , m6 = "/assets/png/winning-6264c04c.png"
  , y6 = "/assets/png/video-0216ce19.png"
  , f6 = "/assets/png/sport-f0fdc902.png"
  , A6 = "/assets/png/slot-f8b85cfb.png"
  , h6 = "/assets/png/profit-56d94e8f.png"
  , _6 = "/assets/png/platformList-5db5d715.png"
  , S6 = "/assets/png/no3-95e1b4d0.png"
  , j6 = "/assets/png/no2-1683c744.png"
  , $6 = "/assets/png/no1-5c6f8e80.png"
  , G6 = "/assets/png/loteria-0ccd41c5.png"
  , L6 = "/assets/png/flash-be6ad48f.png"
  , I6 = "/assets/png/fish-57b49990.png"
  , k6 = "/assets/png/clicksTopList-dfac71d9.png"
  , T6 = "/assets/png/chess-11735038.png"
  , R6 = "/assets/png/bigaward-de883c64.png"
  , C6 = "/assets/png/All-8c681a92.png"
  , P6 = "/assets/png/ios3-034b2b78.png"
  , D6 = "/assets/png/ios2-1d128e50.png"
  , E6 = "/assets/png/ios1-1b6326e4.png"
  , B6 = "/assets/png/empty-5b08f2be.png"
  , x6 = "/assets/png/banner-40720f78.png"
  , O6 = "/assets/png/zs-1fe6152b.png"
  , M6 = "/assets/png/withdrawHistory-12d183a9.png"
  , W6 = "/assets/png/widthdrawBlue-dac03272.png"
  , U6 = "/assets/png/wallets-7cd3c0b8.png"
  , N6 = "/assets/png/wallet-34507dfa.png"
  , V6 = "/assets/png/vip9-a30a9d27.png"
  , F6 = "/assets/png/vip8-23c72cf0.png"
  , H6 = "/assets/png/vip7-48005ca9.png"
  , q6 = "/assets/png/vip6-0a2158b6.png"
  , K6 = "/assets/png/vip5-28139224.png"
  , z6 = "/assets/png/vip4-9dc1e9f4.png"
  , X6 = "/assets/png/vip3-30c8484b.png"
  , J6 = "/assets/png/vip2-6839e741.png"
  , Y6 = "/assets/png/vip10-61bb0cf3.png"
  , Q6 = "/assets/png/vip1-cde9e3a4.png"
  , Z6 = "/assets/png/versionUpdate-8bb131c1.png"
  , el = "/assets/png/vaultSmallIcon-e6fe7f42.png"
  , sl = "/assets/png/vault-a933a89f.png"
  , tl = "/assets/png/uploadCamera-3c808634.png"
  , nl = "/assets/svg/unfinish-43bc1495.svg"
  , al = "/assets/png/trianglered-7f8dfe98.png"
  , ol = "/assets/png/transferOutIcon-7cd86afa.png"
  , pl = "/assets/png/transferInIcon-617ec06e.png"
  , cl = "/assets/png/tradeHistoryShadow-3f93353a.png"
  , il = "/assets/png/tradeHistory-76a3492f.png"
  , gl = "/assets/png/tipIcon-99ead69b.png"
  , rl = "/assets/png/support-b4aad3ad.png"
  , ll = "/assets/png/super_no-2a5dd75e.png"
  , dl = "/assets/png/superJackpotRulebg-36ed2436.png"
  , wl = "/assets/png/superJackpot-989b63c6.png"
  , ul = "/assets/png/superIcon-d7856c8e.png"
  , bl = "/assets/png/sugguesions-5dc75ee8.png"
  , vl = "/assets/png/suggestionCenter-2e6f0b8e.png"
  , ml = "/assets/png/statsIcon-bd106515.png"
  , yl = "/assets/png/sliderNum-d6954c48.png"
  , fl = "/assets/png/settings-47d1ea95.png"
  , Al = "/assets/png/settingCenter-779783db.png"
  , hl = "/assets/png/serviceCenter-ed250156.png"
  , _l = "/assets/png/safetyIcon-baadff1a.png"
  , Sl = "/assets/png/riskProtocal-ed984a2b.png"
  , jl = "/assets/svg/righticon-84e23970.svg"
  , $l = "/assets/png/redPacketShadow-d70c1569.png"
  , Gl = "/assets/png/redPacket-54dec964.png"
  , Ll = "/assets/png/recordIcon-76fb149e.png"
  , Il = "/assets/png/rechargeIcon-378e1d8b.png"
  , kl = "/assets/png/rechargeHistory-1bf08347.png"
  , Tl = "/assets/png/pswLock-addf8de4.png"
  , Rl = "/assets/png/productOrders-00f3fe5e.png"
  , Cl = "/assets/png/privacyIcon-3e14c648.png"
  , Pl = "/assets/png/pointsSmallIncon-01ccfa9c.png"
  , Dl = "/assets/png/points-2f9295d8.png"
  , El = "/assets/png/orderIcon-db434836.png"
  , Bl = "/assets/png/numberBG-5096ec20.png"
  , xl = "/assets/png/notifyIcon-6c47f5ee.png"
  , Ol = "/assets/png/notificationIcon-cf50c38b.png"
  , Ml = "/assets/png/notificationCenter-7c9bf6f3.png"
  , Wl = "/assets/png/notification-64e0c068.png"
  , Ul = "/assets/png/nextIcon-4b99d075.png"
  , Nl = "/assets/png/mylottery-59fde5b3.png"
  , Vl = "/assets/png/mycoins_bg-122d7eeb.png"
  , Fl = "/assets/png/myWithdrawHistory-7d6690a5.png"
  , Hl = "/assets/png/myCoin-b5faa55b.png"
  , ql = "/assets/png/moonBar-f80ac733.png"
  , Kl = "/assets/svg/messageIconIsRead-51ac6097.svg"
  , zl = "/assets/png/lotteryIcon-8d282d74.png"
  , Xl = "/assets/png/lotteryHistory-21ada1bc.png"
  , Jl = "/assets/png/loterry-13b4d059.png"
  , Yl = "/assets/png/logout-f985cd3f.png"
  , Ql = "/assets/png/laundryIcon-9cc9dbdc.png"
  , Zl = "/assets/png/languageSwitch-8cd33ff0.png"
  , e5 = "/assets/png/languageIcon-4c117d4d.png"
  , s5 = "/assets/png/kBg-80f2d8f2.png"
  , t5 = "/assets/png/inviteIcon-4f339df5.png"
  , n5 = "/assets/png/invitation_icon-3daf26e8.png"
  , a5 = "/assets/png/invitation_bg-611f71ab.png"
  , o5 = "/assets/png/invitationBonus-9a3437fe.png"
  , p5 = "/assets/png/incomeIcon-9f284d02.png"
  , c5 = "/assets/png/iconSlots-dc0d52e9.png"
  , i5 = "/assets/png/iconRealPerson-d6a539c2.png"
  , g5 = "/assets/png/iconPhysics-57f83ec6.png"
  , r5 = "/assets/png/iconMiniGame-edfd2dbe.png"
  , l5 = "/assets/png/loterry-13b4d059.png"
  , d5 = "/assets/png/iconFishing-467fb1f6.png"
  , w5 = "/assets/png/iconElectric-76d8f78d.png"
  , u5 = "/assets/png/iconChess-13aafe08.png"
  , b5 = "/assets/png/gverifyDownload-271370b1.png"
  , v5 = "/assets/png/guide-4c5e16b0.png"
  , m5 = "/assets/png/googleVerifyBg-09a89098.png"
  , y5 = "/assets/png/googleValidation-90c05cd9.png"
  , f5 = "/assets/png/googleKey-4c7f16a7.png"
  , A5 = "/assets/png/giftIcon-17a26471.png"
  , h5 = "/assets/png/giftFolder-cbeb2e6d.png"
  , _5 = "/assets/png/gift-a8f321e1.png"
  , S5 = "/assets/png/gameStatsSteps-fde7a66f.png"
  , j5 = "/assets/png/feedbackImg-e53f6c28.png"
  , $5 = "/assets/png/exchangeIcon-5e23ad00.png"
  , G5 = "/assets/png/editPswIcon-91edaf22.png"
  , L5 = "/assets/png/editPhoneIcon-db913345.png"
  , I5 = "/assets/png/editPencil-c89ee923.png"
  , k5 = "/assets/png/dropDown-4a665e37.png"
  , T5 = "/assets/png/down-0f316969.png"
  , R5 = "/assets/png/dialogNickname-29ce49ed.png"
  , C5 = "/assets/png/customerBg-1b796fd9.png"
  , P5 = "/assets/png/cps-2a059ec1.png"
  , D5 = "/assets/png/copyIcon-2aed1c84.png"
  , E5 = "/assets/png/copy-3a78d902.png"
  , B5 = "/assets/png/close_B-9c82ae89.png"
  , x5 = "/assets/png/close-00101b6c.png"
  , O5 = "/assets/png/clearIcon-f9b53fa8.png"
  , M5 = "/assets/png/clear-736506a4.png"
  , W5 = "/assets/png/chessStepIcon-6ca76235.png"
  , U5 = "/assets/png/bindemailsuccess-d485300b.png"
  , N5 = "/assets/png/betSportStep-93571708.png"
  , V5 = "/assets/png/betSixInfoStep-397d1357.png"
  , F5 = "/assets/png/betResultStep-e17a42d5.png"
  , H5 = "/assets/png/betInfoStep-7b7e5e57.png"
  , q5 = "/assets/png/betHistoryShadow-5178f41c.png"
  , K5 = "/assets/png/betHistory-41216dfa.png"
  , z5 = "/assets/png/balanceIcon-e9285cc0.png"
  , X5 = "/assets/png/ar_invitation_bg-477970e1.png"
  , J5 = "/assets/png/aboutCenter-51580ee5.png"
  , Y5 = "/assets/png/aboutBg-2e4b25ca.png"
  , Q5 = "/assets/png/about-f4c85138.png"
  , Z5 = "/assets/png/VipIcon-3c72b1cc.png"
  , e0 = "/assets/png/TotalAssetsBg-62cc4d81.png"
  , s0 = "/assets/png/Subtract-306729d4.png"
  , t0 = "/assets/png/StrongBoxRecordBg-2e6f73e2.png"
  , n0 = "/assets/png/MyCoinsBanner2-208f6260.png"
  , a0 = "/assets/png/MyCoinsBanner-41979ddc.png"
  , o0 = "/assets/png/GoogleTip-e9f496ce.png"
  , p0 = "/assets/png/GoogleSubtract-9efeb309.png"
  , c0 = "/assets/png/GooglePolygon-3adc99cc.png"
  , i0 = "/assets/png/EmailIcon-4cb8279d.png"
  , g0 = "/assets/png/CStype7-dea3a1e2.png"
  , r0 = "/assets/png/CStype6-3823ff6e.png"
  , l0 = "/assets/png/CStype5-6b3a66e3.png"
  , d0 = "/assets/png/CStype2-d7b94bf8.png"
  , w0 = "/assets/png/CStype3-7588d980.png"
  , u0 = "/assets/png/CStype2-d7b94bf8.png"
  , b0 = "/assets/png/CStype1-44df01f2.png"
  , v0 = "/assets/png/10-1523b3a4.png"
  , m0 = "/assets/png/wheel-548c81f2.png"
  , y0 = "/assets/png/vector-dc489162.png"
  , f0 = "/assets/png/upload_icon-774d5de1.png"
  , A0 = "/assets/png/upload_add-36760b1b.png"
  , h0 = "/assets/png/switch-a7abebe0.png"
  , _0 = "/assets/png/newmissingviebg-0d3c6b98.png"
  , S0 = "/assets/png/newmissingbg-b08ac203.png"
  , j0 = "/assets/png/missningLBg-ca049a47.png"
  , $0 = "/assets/png/missningBg-c1f02bcd.png"
  , G0 = "/assets/png/missingviebg-f283c7c1.png"
  , L0 = "/assets/png/close-84ce5e6a.png"
  , I0 = "/assets/png/ar_wallet-62a42389.png"
  , k0 = "/assets/svg/wg_wallet_select-1fe1b01b.svg"
  , T0 = "/assets/svg/wg_wallet-7cfff496.svg"
  , R0 = "/assets/svg/wg_promotion_select-1fc6bd30.svg"
  , C0 = "/assets/svg/wg_promotion-fedb34aa.svg"
  , P0 = "/assets/svg/wg_main_select-53a4a373.svg"
  , D0 = "/assets/svg/wg_main-ad710ef8.svg"
  , E0 = "/assets/svg/wg_home_select-825bffc6.svg"
  , B0 = "/assets/svg/wg_home-125c34b8.svg"
  , x0 = "/assets/svg/wg_activity_select-b71e7cda.svg"
  , O0 = "/assets/svg/wg_activity-64171805.svg"
  , M0 = "/assets/svg/weeklyType9-b1df920a.svg"
  , W0 = "/assets/svg/weeklyType8-398941ee.svg"
  , U0 = "/assets/svg/weeklyType7-0e05c641.svg"
  , N0 = "/assets/svg/weeklyType6-13276020.svg"
  , V0 = "/assets/svg/weeklyType5-9f9da223.svg"
  , F0 = "/assets/svg/weeklyType4-b7a2150d.svg"
  , H0 = "/assets/svg/weeklyType3-a67b564e.svg"
  , q0 = "/assets/svg/weeklyType2-29588ce0.svg"
  , K0 = "/assets/svg/weeklyType12-1a4edd96.svg"
  , z0 = "/assets/svg/weeklyType11-c78c8c14.svg"
  , X0 = "/assets/svg/weeklyType10-ffc2610d.svg"
  , J0 = "/assets/svg/weeklyType1-5e9f2d00.svg"
  , Y0 = "/assets/svg/watchCollection-3c13bdd4.svg"
  , Q0 = "/assets/svg/warningTriangle-e6bc881f.svg"
  , Z0 = "/assets/svg/wallet_game-bf4b19cc.svg"
  , e7 = "/assets/svg/wallet2-2f604c27.svg"
  , s7 = "/assets/svg/wallet1-4e34a48a.svg"
  , t7 = "/assets/svg/wallet-7a07b8d9.svg"
  , n7 = "/assets/svg/voice-4afb7225.svg"
  , a7 = "/assets/svg/vipRebateDark-d8d5b947.svg"
  , o7 = "/assets/svg/vipRebateDark-d8d5b947.svg"
  , p7 = "/assets/svg/video-9680cab0.svg"
  , c7 = "/assets/svg/versionUpdate-4d58e50c.svg"
  , i7 = "/assets/svg/verify-861d392f.svg"
  , g7 = "/assets/svg/user-8d7be8a2.svg"
  , r7 = "/assets/svg/usdtLogo3-79cbb70e.svg"
  , l7 = "/assets/svg/usdt4-5de80bc0.svg"
  , d7 = "/assets/svg/usdt3-b83c7e2f.svg"
  , w7 = "/assets/svg/usdt2-25ac6784.svg"
  , u7 = "/assets/svg/usdt1-1fb4d52f.svg"
  , b7 = "/assets/svg/uploadIcon-0c1ff6df.svg"
  , v7 = "/assets/svg/upi-515b0fe7.svg"
  , m7 = "/assets/svg/trxquestion-1261884c.svg"
  , y7 = "/assets/svg/trxGame-5628ebd5.svg"
  , f7 = "/assets/svg/transf_amount-3b64035f.svg"
  , A7 = "/assets/svg/ticket-83ce51ef.svg"
  , h7 = "/assets/svg/super_no-a1171d96.svg"
  , _7 = "/assets/svg/super_1-a1ca5f41.svg"
  , S7 = "/assets/svg/superJackpotRule-628c5489.svg"
  , j7 = "/assets/svg/success-5afd18c5.svg"
  , $7 = "/assets/svg/subtract-ca63ef68.svg"
  , G7 = "/assets/svg/sport-c184ce12.svg"
  , L7 = "/assets/svg/slot-e068d026.svg"
  , I7 = "/assets/svg/shuoming-28a767ea.svg"
  , k7 = "/assets/svg/share-7fec718f.svg"
  , T7 = "/assets/svg/serverTicket1-fc70c589.svg"
  , R7 = "/assets/svg/serverTicket-aeec50ef.svg"
  , C7 = "/assets/svg/serverIcon-be57d168.svg"
  , P7 = "/assets/svg/searchBtn-e27be358.svg"
  , D7 = "/assets/svg/saveWallet-8aaed3ac.svg"
  , E7 = "/assets/svg/safeIcon-da400b44.svg"
  , B7 = "/assets/svg/ruleHead-e09fed55.svg"
  , x7 = "/assets/svg/round-0ce5c8ef.svg"
  , O7 = "/assets/svg/rightTriangle-e9af3603.svg"
  , M7 = "/assets/svg/rightCircle-c9275550.svg"
  , W7 = "/assets/svg/resultanbg-bfa48a61.svg"
  , U7 = "/assets/svg/refreshBalance-32999105.svg"
  , N7 = "/assets/svg/recordFilter-93552a82.svg"
  , V7 = "/assets/svg/receivedSuccessfuly-92023998.svg"
  , F7 = "/assets/svg/rebateRealTime-983876f5.svg"
  , H7 = "/assets/svg/rebate-d0917c09.svg"
  , q7 = "/assets/svg/raja_wallet_a-9e5ed0bd.svg"
  , K7 = "/assets/svg/raja_wallet-5fca7944.svg"
  , z7 = "/assets/svg/raja_profile_a-f68d105b.svg"
  , X7 = "/assets/svg/raja_profile-b98383be.svg"
  , J7 = "/assets/svg/raja_games_a-f455f666.svg"
  , Y7 = "/assets/svg/raja_games-bff71f50.svg"
  , Q7 = "/assets/svg/raja_affiliate_a-0c4418e2.svg"
  , Z7 = "/assets/svg/raja_affiliate-a659cad9.svg"
  , e4 = "/assets/svg/raja_activity_a-2dd02c6f.svg"
  , s4 = "/assets/svg/raja_activity-7f6b398a.svg"
  , t4 = "/assets/svg/quickpay2-f7c5319b.svg"
  , n4 = "/assets/svg/promotionData-cb994829.svg"
  , a4 = "/assets/svg/promotion2-a7e16b78.svg"
  , o4 = "/assets/svg/promotion-f9fa0f41.svg"
  , p4 = "/assets/svg/pointRule-b4400e39.svg"
  , c4 = "/assets/svg/pointRecord-348a4230.svg"
  , i4 = "/assets/svg/pointPlus-d38d6889.svg"
  , g4 = "/assets/svg/pointMinus-70a54fd7.svg"
  , r4 = "/assets/svg/pointFrame-0eeaff3a.svg"
  , l4 = "/assets/svg/pointDetail-196961c6.svg"
  , d4 = "/assets/svg/pointCopy-e98cedff.svg"
  , w4 = "/assets/svg/pointCancel-a29a1b5d.svg"
  , u4 = "/assets/svg/point-7e4c60af.svg"
  , b4 = "/assets/svg/pix-af4f458a.svg"
  , v4 = "/assets/svg/pink_wallet-8378b60c.svg"
  , m4 = "/assets/svg/pink_promotion-02232563.svg"
  , y4 = "/assets/svg/pink_main-009590de.svg"
  , f4 = "/assets/svg/pink_home-74b13766.svg"
  , A4 = "/assets/svg/pink_activity-469d00bb.svg"
  , h4 = "/assets/svg/phonepe-b65662a3.svg"
  , _4 = "/assets/svg/phone-b2be2236.svg"
  , S4 = "/assets/svg/paytm-684dd108.svg"
  , j4 = "/assets/svg/p5_wallet-c87002a8.svg"
  , $4 = "/assets/svg/p5_sel_wallet-ae6b04e8.svg"
  , G4 = "/assets/svg/p5_sel_promotion-d128cb74.svg"
  , L4 = "/assets/svg/p5_sel_main-1639abdb.svg"
  , I4 = "/assets/svg/p5_sel_home-5a2fd3bc.svg"
  , k4 = "/assets/svg/p5_sel_activity-cf81ee7b.svg"
  , T4 = "/assets/svg/p5_promotion-58912dc0.svg"
  , R4 = "/assets/svg/p5_main-2c5f8270.svg"
  , C4 = "/assets/svg/p5_home-0ed49f01.svg"
  , P4 = "/assets/svg/p5_activity-1b801a87.svg"
  , D4 = "/assets/svg/p4_wallet-cc6cd93b.svg"
  , E4 = "/assets/svg/p4_promotion-395e5b4d.svg"
  , B4 = "/assets/svg/p4_main-a7644f1f.svg"
  , x4 = "/assets/svg/p4_home-a0faddc8.svg"
  , O4 = "/assets/svg/p4_activity-1f4912d2.svg"
  , M4 = "/assets/svg/p3more-ec5338ea.svg"
  , W4 = "/assets/svg/p3a_r-866bd1db.svg"
  , U4 = "/assets/svg/p3a_l-adbaa408.svg"
  , N4 = "/assets/svg/p3_wallet_a-f88457f0.svg"
  , V4 = "/assets/svg/p3_wallet-b8483d21.svg"
  , F4 = "/assets/svg/p3_promotion_a-fdca5a3b.svg"
  , H4 = "/assets/svg/p3_promotion-1805747a.svg"
  , q4 = "/assets/svg/p3_main_a-3c6f39ce.svg"
  , K4 = "/assets/svg/p3_main-960fd86b.svg"
  , z4 = "/assets/svg/p3_home_a-9f25e8df.svg"
  , X4 = "/assets/svg/p3_home-28a3017c.svg"
  , J4 = "/assets/svg/p3_activity_a-9263c724.svg"
  , Y4 = "/assets/svg/p3_activity-ae17491d.svg"
  , Q4 = "/assets/svg/p3Service-ddcc2a87.svg"
  , Z4 = "/assets/svg/p3Notification-ff68e8d9.svg"
  , e3 = "/assets/svg/p3Language-29d11a60.svg"
  , s3 = "/assets/svg/p3Guide-cd25d087.svg"
  , t3 = "/assets/svg/p3Down-34c5d076.svg"
  , n3 = "/assets/svg/p3About-074d0e19.svg"
  , a3 = "/assets/svg/output-1085a817.svg"
  , o3 = "/assets/svg/odds-1389d45f.svg"
  , p3 = "/assets/svg/oddBg-872dd8d0.svg"
  , c3 = "/assets/svg/notificationIcon-b1767775.svg"
  , i3 = "/assets/svg/noticeBarSpeaker-67d04c84.svg"
  , g3 = "/assets/svg/nbg-dba06970.svg"
  , r3 = "/assets/svg/navInfomation-8fd65a81.svg"
  , l3 = "/assets/svg/name-103dae21.svg"
  , d3 = "/assets/svg/more-1a36a308.svg"
  , w3 = "/assets/svg/mobikwik-c5c189f8.svg"
  , u3 = "/assets/svg/messageIconRed-c0a41c97.svg"
  , b3 = "/assets/svg/messageGarbage-4526389c.svg"
  , v3 = "/assets/svg/message-357bf84e.svg"
  , m3 = "/assets/svg/menuSlots-2d07516d.svg"
  , y3 = "/assets/svg/menuOriginals-592962de.svg"
  , f3 = "/assets/svg/menuMore-f365922e.svg"
  , A3 = "/assets/svg/menuLottery-2184805a.svg"
  , h3 = "/assets/svg/menuHome-7fda8a2d.svg"
  , _3 = "/assets/svg/maintenace-f00bbd49.svg"
  , S3 = "/assets/svg/main-d91db78d.svg"
  , j3 = "/assets/svg/lottyWallet-72bc8cd5.svg"
  , $3 = "/assets/svg/lottery-78c78fe7.svg"
  , G3 = "/assets/svg/invitation-af07c32d.svg"
  , L3 = "/assets/svg/income-34ad403e.svg"
  , I3 = "/assets/svg/ifscCode-9d6c6171.svg"
  , k3 = "/assets/svg/iconservr-r-cdafc128.svg"
  , T3 = "/assets/svg/icon_recommend-660115a9.svg"
  , R3 = "/assets/svg/icon_hot-2533ab7c.svg"
  , C3 = "/assets/svg/icon_customer3-ac6f07f9.svg"
  , P3 = "/assets/svg/icon_addwallet-b32e50be.svg"
  , D3 = "/assets/svg/howpay-c8432281.svg"
  , E3 = "/assets/svg/hotIcon-2a2eff6d.svg"
  , B3 = "/assets/svg/hot-07666551.svg"
  , x3 = "/assets/svg/home-b6b5be37.svg"
  , O3 = "/assets/svg/historyHead-0c425c92.svg"
  , M3 = "/assets/svg/hint-8d786626.svg"
  , W3 = "/assets/svg/googleValidation-21d063eb.svg"
  , U3 = "/assets/svg/giftHistory-29667ab5.svg"
  , N3 = "/assets/svg/game_moneyb-e3ecf708.svg"
  , V3 = "/assets/svg/game_money-02732a4a.svg"
  , F3 = "/assets/svg/freeCharge-c4ad2383.svg"
  , H3 = "/assets/svg/flash-5013d62b.svg"
  , q3 = "/assets/svg/fish-b78ebd1b.svg"
  , K3 = "/assets/svg/eye-af3b59e2.svg"
  , z3 = "/assets/svg/errorTip-b80a8dd6.svg"
  , X3 = "/assets/svg/empty-c95cc29f.svg"
  , J3 = "/assets/svg/email-d7e38c1a.svg"
  , Y3 = "/assets/svg/editPswIcon-cf9c20ab.svg"
  , Q3 = "/assets/svg/editMain-9fe11da9.svg"
  , Z3 = "/assets/svg/edit-eb779d07.svg"
  , e8 = "/assets/svg/dropDown-09a28d14.svg"
  , s8 = "/assets/svg/downArrow-d426e3e5.svg"
  , t8 = "/assets/svg/down1-90e985fa.svg"
  , n8 = "/assets/svg/down-72538d4a.svg"
  , a8 = "/assets/svg/diamond-be343d70.svg"
  , o8 = "/assets/svg/dialogNickname-a8c17e3d.svg"
  , p8 = "/assets/svg/detail-9be86e43.svg"
  , c8 = "/assets/svg/deleteMain-1351fccf.svg"
  , i8 = "/assets/svg/customer_b-564c3361.svg"
  , g8 = "/assets/svg/customer_2-79c0e09d.svg"
  , r8 = "/assets/svg/customerPublic-b00601a2.svg"
  , l8 = "/assets/svg/customer1-f8fb310c.svg"
  , d8 = "/assets/svg/copy4d-d61fec20.svg"
  , w8 = "/assets/svg/copy-80b11fc8.svg"
  , u8 = "/assets/svg/close-d5633c35.svg"
  , b8 = "/assets/svg/clock_b-736bec10.svg"
  , v8 = "/assets/svg/chess-ae13cf1a.svg"
  , m8 = "/assets/svg/chat-fd5f6e5e.svg"
  , y8 = "/assets/svg/changlong-c2fc4344.svg"
  , f8 = "/assets/svg/cart-b4720cfe.svg"
  , A8 = "/assets/svg/bookicon-fbe6f9df.svg"
  , h8 = "/assets/svg/bankWave-5f5eea7a.svg"
  , _8 = "/assets/svg/bankTitle-e810765f.svg"
  , S8 = "/assets/svg/bankName-666e40a1.svg"
  , j8 = "/assets/svg/bankKbz-4a61f0ed.svg"
  , $8 = "/assets/svg/bankHeader-faf02b34.svg"
  , G8 = "/assets/svg/bankCard-01518866.svg"
  , L8 = "/assets/svg/bank-65d0bafd.svg"
  , I8 = "/assets/svg/arrLeft-b63410c6.svg"
  , k8 = "/assets/svg/arpay2-67283522.svg"
  , T8 = "/assets/svg/arpay1-a882c077.svg"
  , R8 = "/assets/svg/anbg-2e633fe1.svg"
  , C8 = "/assets/svg/all-80f1cb08.svg"
  , P8 = "/assets/svg/airtel-fe52045b.svg"
  , D8 = "/assets/svg/address-cbc0d6ed.svg"
  , E8 = "/assets/svg/add_icon-0bf8e0a2.svg"
  , B8 = "/assets/svg/activityWallet-80acb83e.svg"
  , x8 = "/assets/svg/activityNote-08aa936d.svg"
  , O8 = "/assets/svg/activity-7ad3454c.svg"
  , M8 = "/assets/svg/act_notic-39eebfbe.svg"
  , W8 = "/assets/svg/actNewGift-89651888.svg"
  , U8 = "/assets/svg/ac_private-b572dccd.svg"
  , N8 = "/assets/svg/ac_fast-16333417.svg"
  , V8 = "/assets/svg/ac_download-22ed1fe6.svg"
  , F8 = "/assets/svg/ac_down-7a07e6b4.svg"
  , H8 = "/assets/svg/SearchTrx-4d7b8c73.svg"
  , q8 = "/assets/svg/Rectan-7483e473.svg"
  , K8 = "/assets/svg/Line-5603a544.svg"
  , z8 = "/assets/svg/Language-0ddf2df5.svg"
  , X8 = "/assets/svg/Circle2-4a7036bc.svg"
  , J8 = "/assets/svg/Circle1-f250e52a.svg"
  , Y8 = "/assets/svg/ArPayBackground-8c36eecc.svg"
  , Q8 = "/assets/jpg/vsImg-3c03c603.jpg"
  , Z8 = "/assets/png/video1-b0611412.png"
  , e9 = "/assets/png/updateImg-53f2ece8.png"
  , s9 = "/assets/png/step-c410dfd3.png"
  , t9 = "/assets/png/load-f0b3a6b2.png"
  , n9 = "/assets/png/supportService-d43dcf95.png"
  , a9 = "/assets/png/invite_wheel-bb332472.png"
  , o9 = "/assets/svg/active_b-4a60eef5.svg"
  , p9 = "/assets/svg/active-0d7a3379.svg"
  , c9 = "/assets/png/t7_wallet_a-cef528ab.png"
  , i9 = "/assets/png/t7_wallet-d97dffcc.png"
  , g9 = "/assets/png/t7_main_a-0e96c746.png"
  , r9 = "/assets/png/t7_main-3aa44dbd.png"
  , l9 = "/assets/png/t7_index_a-0d829fc5.png"
  , d9 = "/assets/png/t7_index-bbfe6c9d.png"
  , w9 = "/assets/png/t7_home_a-3279f3a0.png"
  , u9 = "/assets/png/t7_home-f769f73b.png"
  , b9 = "/assets/png/t7_activity_a-2620d96d.png"
  , v9 = "/assets/png/t7_activity-180585b5.png"
  , m9 = "/assets/png/home-2f6314ef.png"
  , y9 = "/assets/png/wallet_active-2f3966f0.png"
  , f9 = "/assets/png/wallet-476a2be3.png"
  , A9 = "/assets/png/promotion-9815b01f.png"
  , h9 = "/assets/png/promotion-9815b01f.png"
  , _9 = "/assets/png/main_active-7dd05d14.png"
  , S9 = "/assets/png/main-2381edd7.png"
  , j9 = "/assets/png/home_active-b99ae49a.png"
  , $9 = "/assets/png/home-3dbf9889.png"
  , G9 = "/assets/png/activity_active-82e1a493.png"
  , L9 = "/assets/png/activity-b59cf520.png"
  , I9 = "/assets/png/weal5-50bb1128.png"
  , k9 = "/assets/png/weal4-e90ef388.png"
  , T9 = "/assets/png/weal3-35c69f13.png"
  , R9 = "/assets/png/5-5e6a64b1.png"
  , C9 = "/assets/png/4-e53b4da2.png"
  , P9 = "/assets/png/3-99bbc2d4.png"
  , D9 = "/assets/png/2-0a41a908.png"
  , E9 = "/assets/png/1-fd9896f4.png"
  , B9 = "/assets/png/welfare5-8b250748.png"
  , x9 = "/assets/png/welfare4-5642a4c8.png"
  , O9 = "/assets/png/welfare3-bfb05d5e.png"
  , M9 = "/assets/png/welfare2-cf757d28.png"
  , W9 = "/assets/png/welfare1-eee87ee1.png"
  , U9 = "/assets/png/ununlocked-b5a4c7d0.png"
  , N9 = "/assets/png/HaveReached-bd0aadbf.png"
  , V9 = "/assets/png/9-5a25583e.png"
  , F9 = "/assets/png/8-fc7f2447.png"
  , H9 = "/assets/png/7-907655eb.png"
  , q9 = "/assets/png/6-4ee4b170.png"
  , K9 = "/assets/png/5-5e49bae2.png"
  , z9 = "/assets/png/4-3c5b4bba.png"
  , X9 = "/assets/png/3-fb0c8c43.png"
  , J9 = "/assets/png/2-c9b115fb.png"
  , Y9 = "/assets/png/10-b06f6562.png"
  , Q9 = "/assets/png/1-953c5909.png"
  , Z9 = "/assets/png/0-78e1ab02.png"
  , ed = "/assets/png/9-b2e01899.png"
  , sd = "/assets/png/8-b0ebfa02.png"
  , td = "/assets/png/7-1deed869.png"
  , nd = "/assets/png/6-57560368.png"
  , ad = "/assets/png/5-309a53a6.png"
  , od = "/assets/png/4-addcca26.png"
  , pd = "/assets/png/3-772507f8.png"
  , cd = "/assets/png/2-5381bc14.png"
  , id = "/assets/png/10-ad370b50.png"
  , gd = "/assets/png/1-793a027d.png"
  , rd = "/assets/png/0-9eed23ad.png"
  , ld = "/assets/png/thirdPartyLogo-5dc96e22.png"
  , dd = "/assets/png/fast-bea6c34e.png"
  , wd = "/assets/png/explain-61635961.png"
  , ud = "/assets/png/QRCode-1d54cefc.png"
  , bd = "/assets/png/₫-396b89cd.png"
  , vd = "/assets/png/฿-035fd09c.png"
  , md = "/assets/png/unchecked-b7a5ea77.png"
  , yd = "/assets/png/succeed-83674414.png"
  , fd = "/assets/png/safety-ba393abc.png"
  , Ad = "/assets/png/refresh-fd17e6f1.png"
  , hd = "/assets/png/pwd-5bc62bd2.png"
  , _d = "/assets/png/momo-d6d50cc9.png"
  , Sd = "/assets/png/line-0198e433.png"
  , jd = "/assets/png/recordIcon-76fb149e.png"
  , $d = "/assets/png/fail-c3ca10bd.png"
  , Gd = "/assets/png/delete-a072841b.png"
  , Ld = "/assets/png/clear-85410d7e.png"
  , Id = "/assets/png/checked-017891c4.png"
  , kd = "/assets/png/bg2-78c2b28b.png"
  , Td = "/assets/png/bg1-3474c7fd.png"
  , Rd = "/assets/png/bankLogo1-e5dc8d25.png"
  , Cd = "/assets/png/balance-e39ce400.png"
  , Pd = "/assets/png/add-1ad7f3f5.png"
  , Dd = "/assets/png/E-wallet-472b7b97.png"
  , Ed = "/assets/png/1-bcd21d34.png"
  , Bd = "/assets/png/wallettobank-8f644b04.png"
  , xd = "/assets/png/wait-106199bd.png"
  , Od = "/assets/png/usdt-40311708.png"
  , Md = "/assets/png/upt_tip-60751f49.png"
  , Wd = "/assets/png/upi_recharge-a5d50b78.png"
  , Ud = "/assets/png/unit_icon-702f654a.png"
  , Nd = "/assets/png/unit_active-e9ec8145.png"
  , Vd = "/assets/png/trx-8c63cfbf.png"
  , Fd = "/assets/png/transf_amount-e9c0217c.png"
  , Hd = "/assets/png/tip-0498e3f9.png"
  , qd = "/assets/png/timeout-fef473aa.png"
  , Kd = "/assets/png/hicon2-147f9796.png"
  , zd = "/assets/png/shuoming-3285244e.png"
  , Xd = "/assets/png/3_a-c660a4ba.png"
  , Jd = "/assets/png/3-5d3eefed.png"
  , Yd = "/assets/png/2_a-290b2514.png"
  , Qd = "/assets/png/2-bd839975.png"
  , Zd = "/assets/png/setup2_active-bd15058f.png"
  , ew = "/assets/png/setup2-666d3e9e.png"
  , sw = "/assets/png/setup1-53816735.png"
  , tw = "/assets/png/saveWallet-ce287b90.png"
  , nw = "/assets/png/sanjiao-9752d7ef.png"
  , aw = "/assets/png/refresh-8e0efe26.png"
  , ow = "/assets/png/quickpay2-ceb1387d.png"
  , pw = "/assets/png/quickpay-a4794d89.png"
  , cw = "/assets/png/qrcode_active-ddfcec2b.png"
  , iw = "/assets/png/qrcode-15987603.png"
  , gw = "/assets/png/point-83b0da08.png"
  , rw = "/assets/png/phone_pe-0d512159.png"
  , lw = "/assets/png/paytm-312bb62a.png"
  , dw = "/assets/png/other_bank-17a0345c.png"
  , ww = "/assets/png/onlinepay_active-fec6a8d1.png"
  , uw = "/assets/png/onlinepay2-c62a95ae.png"
  , bw = "/assets/png/onlinepay-64a4dce3.png"
  , vw = "/assets/png/online_active-e5c995a2.png"
  , mw = "/assets/png/moneyicon-cf7109c0.png"
  , yw = "/assets/png/mainChain-f736e2b7.png"
  , fw = "/assets/png/left_arrow-6c6e3cc6.png"
  , Aw = "/assets/png/google_pay-c9a23353.png"
  , hw = "/assets/png/gift-55dc786a.png"
  , _w = "/assets/png/fail-5e44a4cc.png"
  , Sw = "/assets/png/ewallet-59af22d2.png"
  , jw = "/assets/png/eth-f22e240a.png"
  , $w = "/assets/png/detail_upi_icon-813ff1e1.png"
  , Gw = "/assets/png/copy1-88343644.png"
  , Lw = "/assets/png/copy-08e6ee0a.png"
  , Iw = "/assets/png/coin-8fd63dfb.png"
  , kw = "/assets/png/close-32ada670.png"
  , Tw = "/assets/png/clean-82487515.png"
  , Rw = "/assets/png/cip-7ed1a634.png"
  , Cw = "/assets/png/chongzhi-08739a3a.png"
  , Pw = "/assets/png/cancel-0e9b3ff4.png"
  , Dw = "/assets/png/banktobank-401dbdc7.png"
  , Ew = "/assets/png/bank_card_active-d8f133c8.png"
  , Bw = "/assets/png/bank_card-b0e23f81.png"
  , xw = "/assets/png/1_a-c3c7a041.png"
  , Ow = "/assets/png/appeal-6e70b57c.png"
  , Mw = "/assets/png/hicon14-c2c6ca62.png"
  , Ww = "/assets/png/C2Chelp-f5be328c.png"
  , Uw = "/assets/png/lv-450d4246.png"
  , Nw = "/assets/png/Lv7-fa9f063a.png"
  , Vw = "/assets/png/Lv6-3fc5204d.png"
  , Fw = "/assets/png/Lv5-98a2cbb8.png"
  , Hw = "/assets/png/Lv4-c0e4f354.png"
  , qw = "/assets/png/Lv3-d91fd9c0.png"
  , Kw = "/assets/png/Lv2-fabf9d77.png"
  , zw = "/assets/png/Lv1-cb6d787f.png"
  , Xw = "/assets/png/Lv0-c3baf0ba.png"
  , Jw = "/assets/png/wallet-1215d27d.png"
  , Yw = "/assets/png/groupSubordinate-0c376eee.png"
  , Qw = "/assets/png/extraBonus-ab106fcb.png"
  , Zw = "/assets/png/directSubordinate-b2d764c2.png"
  , eu = "/assets/png/trucktick-4f43261f.png"
  , su = "/assets/png/poster-ce19704f.png"
  , tu = "/assets/png/logo-3c92e42a.png"
  , nu = "/assets/png/bg1-d6d02e9f.png"
  , au = "/assets/png/bank-1227ae77.png"
  , ou = "/assets/png/line-f156af68.png"
  , pu = "/assets/png/bg-79ecb3d8.png"
  , cu = "/assets/png/betInfoStep-2e2a875e.png"
  , iu = "/assets/png/roundIcon-d4d5ea8b.png"
  , gu = "/assets/png/box-83de4bc1.png"
  , ru = "/assets/png/banner-bf01ff6f.png"
  , lu = "/assets/png/tip-789290d9.png"
  , du = "/assets/png/phoneactive-d3ea66d4.png"
  , wu = "/assets/png/phone-8279bf85.png"
  , uu = "/assets/png/otheractive-cddf4a7d.png"
  , bu = "/assets/png/other-53f673ed.png"
  , vu = "/assets/png/forgetpassword-3dde2500.png"
  , mu = "/assets/png/emailnumber-ad15a7cf.png"
  , yu = "/assets/png/emailactive-12a419a4.png"
  , fu = "/assets/png/email-d1eb3456.png"
  , Au = "/assets/png/customer-4afe1e50.png"
  , hu = "/assets/png/totalIncomeBg-e5f99b03.png"
  , _u = "/assets/png/heroImg-00649ceb.png"
  , Su = "/assets/png/stage-f0b7a560.png"
  , ju = "/assets/png/place3-d9b0be38.png"
  , $u = "/assets/png/place2-8189be28.png"
  , Gu = "/assets/png/place1-fe39c3f3.png"
  , Lu = "/assets/png/crown3-2ca02146.png"
  , Iu = "/assets/png/crown2-c8aced52.png"
  , ku = "/assets/png/crown1-3912fd85.png"
  , Tu = "/assets/png/border3-cfec4a7d.png"
  , Ru = "/assets/png/border2-7a806be7.png"
  , Cu = "/assets/png/border1-3b6518ec.png"
  , Pu = "/assets/png/headerBg-6185d182.png"
  , Du = "/assets/svg/home2-44a54115.svg"
  , Eu = "/assets/svg/home1-14aaac97.svg"
  , Bu = "/assets/png/winning-95b658e2.png"
  , xu = "/assets/png/video_icon-cc36dc64.png"
  , Ou = "/assets/png/video-df6e9105.png"
  , Mu = "/assets/png/sport_icon-5fa3a056.png"
  , Wu = "/assets/png/sport-a002c6a7.png"
  , Uu = "/assets/png/slot_icon-f4f0d9cb.png"
  , Nu = "/assets/png/slot-73bd6272.png"
  , Vu = "/assets/png/rank_icon-3b73da86.png"
  , Fu = "/assets/png/popular_icon-11c3835a.png"
  , Hu = "/assets/png/popular-e09a3eaa.png"
  , qu = "/assets/png/notice-8d53455c.png"
  , Ku = "/assets/png/message-e4ac94dd.png"
  , zu = "/assets/png/lottery_icon-cff3f9b5.png"
  , Xu = "/assets/png/lottery-7fc02cc0.png"
  , Ju = "/assets/png/flash_icon-5e612315.png"
  , Yu = "/assets/png/flash-2500d79a.png"
  , Qu = "/assets/png/fish_icon-72048363.png"
  , Zu = "/assets/png/fish-ec1b1df0.png"
  , eb = "/assets/png/download-14b53559.png"
  , sb = "/assets/png/crown3-28a5889c.png"
  , tb = "/assets/png/crown2-f9ce3eee.png"
  , nb = "/assets/png/crown1-6889b8e0.png"
  , ab = "/assets/png/chess_icon-703b3232.png"
  , ob = "/assets/png/chess-f4b12afc.png"
  , pb = "/assets/png/SMG_wildfireWins-a93edd26.png"
  , cb = "/assets/png/SMG_777Surge-78d7229c.png"
  , ib = "/assets/png/SMG_10000Wishes-407d0b9b.png"
  , gb = "/assets/png/Lottery_WinGo-d07ef527.png"
  , rb = "/assets/png/DailyProfitRankStage-a33ced55.png"
  , lb = "/assets/png/98-d5fe7f97.png"
  , db = "/assets/png/9014-4d56c8d3.png"
  , wb = "/assets/png/9013-577bb997.png"
  , ub = "/assets/png/800-faa50496.png"
  , bb = "/assets/png/51-d4515e78.png"
  , vb = "/assets/png/42-f285c15c.png"
  , mb = "/assets/png/223-b5171aac.png"
  , yb = "/assets/png/14025-01483774.png"
  , fb = "/assets/png/109-41a5c231.png"
  , Ab = "/assets/png/103-a93816e3.png"
  , hb = "/assets/png/100-49ef7186.png"
  , _b = "/assets/png/wingo4-c325a189.png"
  , Sb = "/assets/png/wingo30-05de796d.png"
  , jb = "/assets/png/wingo3-af2ecabf.png"
  , $b = "/assets/png/wingo2-7620426f.png"
  , Gb = "/assets/png/wingo1-26adecc4.png"
  , Lb = "/assets/png/trx16-27318f43.png"
  , Ib = "/assets/png/trx15-5500af52.png"
  , kb = "/assets/png/trx14-af832a85.png"
  , Tb = "/assets/png/trx13-30f132be.png"
  , Rb = "/assets/png/rule-r-ee114f98.png"
  , Cb = "/assets/png/k39-707408c6.png"
  , Pb = "/assets/png/k312-126dcbfe.png"
  , Db = "/assets/png/k311-2acf4e28.png"
  , Eb = "/assets/png/k310-1fc41fc4.png"
  , Bb = "/assets/png/d58-b02f0617.png"
  , xb = "/assets/png/d57-59e91e51.png"
  , Ob = "/assets/png/d56-381350f2.png"
  , Mb = "/assets/png/d55-92bf4299.png"
  , Wb = "/assets/png/XOSO_bg-57f7c4c7.png"
  , Ub = "/assets/png/XOSO_bg-57f7c4c7.png"
  , Nb = "/assets/png/4D_bg-721dba75.png"
  , Vb = "/assets/png/VideoWinGo23-18cf27a4.png"
  , Fb = "/assets/png/Bingo18_bg-11bddcb5.png"
  , Hb = "/assets/png/Motorace17-57066db3.png"
  , qb = "/assets/png/MotoRace_bg-6e64cdd9.png"
  , Kb = "/assets/png/4D_bg-721dba75.png"
  , zb = "/assets/png/XOSO_bg-57f7c4c7.png"
  , Xb = "/assets/png/Bingo18_bg-11bddcb5.png"
  , Jb = "/assets/png/5D_bg-23f2c875.png"
  , Yb = "/assets/png/4D_bg-721dba75.png"
  , Qb = "/assets/png/wingo-7fed1973.png"
  , Zb = "/assets/png/trx-6b43aee9.png"
  , ev = "/assets/png/top3-31e06806.png"
  , sv = "/assets/png/top2-40f62dc7.png"
  , tv = "/assets/png/top1-573e2e29.png"
  , nv = "/assets/svg/search_icon-4452570e.svg"
  , av = "/assets/svg/message-8d1fb933.svg"
  , ov = "/assets/png/k3-a4a42715.png"
  , pv = "/assets/png/5d-f8ff113e.png"
  , cv = "/assets/png/videoActive-eb4fe331.png"
  , iv = "/assets/png/video-727f5ef5.png"
  , gv = "/assets/png/sportActive-0235eeda.png"
  , rv = "/assets/png/sport-3c47e41a.png"
  , lv = "/assets/png/slotActive-b5921bd5.png"
  , dv = "/assets/png/slot-a9a2f416.png"
  , wv = "/assets/png/popularActive-168afcaa.png"
  , uv = "/assets/png/popular-40beb97d.png"
  , bv = "/assets/png/lotteryActive-c43af489.png"
  , vv = "/assets/png/lottery-49847eb7.png"
  , mv = "/assets/png/flashActive-ef7a14b3.png"
  , yv = "/assets/png/flash-77bbc5d6.png"
  , fv = "/assets/png/fishActive-aca8b68b.png"
  , Av = "/assets/png/fish-2be0a575.png"
  , hv = "/assets/png/chessActive-53643ac1.png"
  , _v = "/assets/png/chess-9a2d9c33.png"
  , Sv = "/assets/png/bgOld-d9a87831.png"
  , jv = "/assets/png/bgActiveOld-0e6f6732.png"
  , $v = "/assets/png/bgActive-805fae0e.png"
  , Gv = "/assets/png/bg-edc23a85.png"
  , Lv = "/assets/png/wingo4-28f9f7a1.png"
  , Iv = "/assets/png/wingo30-9c517bee.png"
  , kv = "/assets/png/wingo3-05d3e6ea.png"
  , Tv = "/assets/png/wingo2-dd243989.png"
  , Rv = "/assets/png/wingo1-95a2bed1.png"
  , Cv = "/assets/png/trx16.-7edf79f0.png"
  , Pv = "/assets/png/trx15-9d9b9826.png"
  , Dv = "/assets/png/trx14-805c6f39.png"
  , Ev = "/assets/png/trx13-4af16a04.png"
  , Bv = "/assets/png/motorace17-e17a943e.png"
  , xv = "/assets/png/k39-1772e3d7.png"
  , Ov = "/assets/png/k312-3c769658.png"
  , Mv = "/assets/png/k311-48ce8940.png"
  , Wv = "/assets/png/k310-b950a44d.png"
  , Uv = "/assets/png/d58-9eb03eba.png"
  , Nv = "/assets/png/d57-63123506.png"
  , Vv = "/assets/png/d56-c1f819a4.png"
  , Fv = "/assets/png/d55-dccd8584.png"
  , Hv = "/assets/png/VideoWinGo23-18cf27a4.png"
  , qv = "/assets/png/videoActive-67d99b5e.png"
  , Kv = "/assets/png/video-b54edeaa.png"
  , zv = "/assets/png/tabActive-796a5254.png"
  , Xv = "/assets/png/tab-97a30bc0.png"
  , Jv = "/assets/png/sportActive-0b279689.png"
  , Yv = "/assets/png/sport-47088d84.png"
  , Qv = "/assets/png/slotActive-aeb13ec9.png"
  , Zv = "/assets/png/slot-0ae7daf0.png"
  , em = "/assets/png/popularActive-c4010b84.png"
  , sm = "/assets/png/popular-05b5a660.png"
  , tm = "/assets/png/lotteryActive-eda604f1.png"
  , nm = "/assets/png/lottery-af7c0f05.png"
  , am = "/assets/png/flashActive-447f35a6.png"
  , om = "/assets/png/flash-a975ad53.png"
  , pm = "/assets/png/fishActive-b00d1575.png"
  , cm = "/assets/png/fish-407305dc.png"
  , im = "/assets/png/chessActive-0cdeb29e.png"
  , gm = "/assets/png/chess-cfba644a.png"
  , rm = "/assets/png/bgActive-a1b5932b.png"
  , lm = "/assets/png/bg-f5ff3553.png"
  , dm = "/assets/png/allActive-f17fb22d.png"
  , wm = "/assets/png/all-27493840.png"
  , um = "/assets/png/trans-84086e2c.png"
  , bm = "/assets/png/ar-trans-d6480440.png"
  , vm = "/assets/png/icon-9f3018f6.png"
  , mm = "/assets/svg/close-f63083a1.svg"
  , ym = "/assets/png/Grouptip-2ccf91bd.png"
  , fm = "/assets/png/Group-74b890b6.png"
  , Am = "/assets/png/zs-829e90cb.png"
  , hm = "/assets/png/wallet-21113a47.png"
  , _m = "/assets/png/superjackpotHome-72bbeb43.png"
  , Sm = "/assets/png/ruleicon-81461832.png"
  , jm = "/assets/png/right-d32ab2b2.png"
  , $m = "/assets/png/promptImg-c78d672b.png"
  , Gm = "/assets/png/Vector-fb350715.png"
  , Lm = "/assets/png/7-0fc3263c.png"
  , Im = "/assets/png/6-d33a01cc.png"
  , km = "/assets/png/5-f2ccf58e.png"
  , Tm = "/assets/png/47-e0443e1b.png"
  , Rm = "/assets/png/46-fe864510.png"
  , Cm = "/assets/png/45-87bd29b0.png"
  , Pm = "/assets/png/44-149b0454.png"
  , Dm = "/assets/png/42-6d6e29b4.png"
  , Em = "/assets/png/41-d065665b.png"
  , Bm = "/assets/png/4-334172a0.png"
  , xm = "/assets/png/38-12492e70.png"
  , Om = "/assets/png/37-57f766cb.png"
  , Mm = "/assets/png/35-e05f12c6.png"
  , Wm = "/assets/png/30-d5d51a19.png"
  , Um = "/assets/png/3-6318b052.png"
  , Nm = "/assets/png/29-1825e402.png"
  , Vm = "/assets/png/27-9188478b.png"
  , Fm = "/assets/png/26-5206d38e.png"
  , Hm = "/assets/png/24-83cbd6ce.png"
  , qm = "/assets/png/23-83a407d7.png"
  , Km = "/assets/png/22-24343d89.png"
  , zm = "/assets/png/21-d4ee3b73.png"
  , Xm = "/assets/png/20-1f5d984e.png"
  , Jm = "/assets/png/2-79d63988.png"
  , Ym = "/assets/png/19-2b8a5fc5.png"
  , Qm = "/assets/png/18-bf50e74e.png"
  , Zm = "/assets/png/16-2bd4085f.png"
  , ey = "/assets/png/16-2bd4085f.png"
  , sy = "/assets/png/10-8f61ca77.png"
  , ty = "/assets/png/10-8f61ca77.png"
  , ny = "/assets/png/10-8f61ca77.png"
  , ay = "/assets/png/1-40ae7baf.png"
  , oy = "/assets/png/-1-9e458c2f.png"
  , py = "/assets/png/9-6d772f2c.png"
  , cy = "/assets/png/8-ea087ede.png"
  , iy = "/assets/png/7-00479cfa.png"
  , gy = "/assets/png/6-7c7f5203.png"
  , ry = "/assets/png/5-ab77b716.png"
  , ly = "/assets/png/4-12a0d0c5.png"
  , dy = "/assets/png/3-abfcc056.png"
  , wy = "/assets/png/20-a58f23bf.png"
  , uy = "/assets/png/2-58c8a9bc.png"
  , by = "/assets/png/19-2ac9fd83.png"
  , vy = "/assets/png/18-52955242.png"
  , my = "/assets/png/17-bedde42f.png"
  , yy = "/assets/png/16-cf8e1441.png"
  , fy = "/assets/png/15-80f41fc6.png"
  , Ay = "/assets/png/14-a397ff6b.png"
  , hy = "/assets/png/13-5676d43f.png"
  , _y = "/assets/png/12-ae12c679.png"
  , Sy = "/assets/png/11-925c456e.png"
  , jy = "/assets/png/10-29a6603e.png"
  , $y = "/assets/png/1-a6662edb.png"
  , Gy = "/assets/png/yellow_wallet_a-302b691b.png"
  , Ly = "/assets/png/yellow_wallet-af4b65a8.png"
  , Iy = "/assets/png/yellow_promotion_a-0f612093.png"
  , ky = "/assets/png/yellow_promotion-992842e5.png"
  , Ty = "/assets/png/yellow_main_a-66656fc5.png"
  , Ry = "/assets/png/yellow_main-6b8ccc07.png"
  , Cy = "/assets/png/yellow_home-5ffdd667.png"
  , Py = "/assets/png/yellow_activity_a-c2ae8f1e.png"
  , Dy = "/assets/png/yellow_activity-19e1e2fa.png"
  , Ey = "/assets/png/t6_wallet_a-60eb81d6.png"
  , By = "/assets/png/t6_wallet-3ae41933.png"
  , xy = "/assets/png/t6_promotion_a-923d9ced.png"
  , Oy = "/assets/png/t6_promotion-a029ef45.png"
  , My = "/assets/png/t6_main_a-a7e8e1b6.png"
  , Wy = "/assets/png/t6_main-bad84e0d.png"
  , Uy = "/assets/png/t6_home-0a6ae2d5.png"
  , Ny = "/assets/png/t6_activity_a-9c24c442.png"
  , Vy = "/assets/png/t6_activity-5e528f8c.png"
  , Fy = "/assets/png/ar064_home_a-096fef13.png"
  , Hy = "/assets/png/ar064_home-6b4a1a6e.png"
  , qy = "/assets/svg/refresh-3190250f.svg"
  , Ky = "/assets/svg/eventDescriptionArrow-066bda60.svg"
  , zy = "/assets/svg/activityRulesBackground-56922e78.svg"
  , Xy = "/assets/svg/activityRule-f8647ffa.svg"
  , Jy = "/assets/svg/activityIntro-c5605f68.svg"
  , Yy = "/assets/svg/activityDetail-2f380353.svg"
  , Qy = "/assets/svg/YGG-3f392b65.svg"
  , Zy = "/assets/svg/Wickets9-c50ab38e.svg"
  , ef = "/assets/svg/WM-e5af54e9.svg"
  , sf = "/assets/svg/WM-e5af54e9.svg"
  , tf = "/assets/svg/V8Card-e8353e10.svg"
  , nf = "/assets/svg/TURBO-b170661a.svg"
  , af = "/assets/svg/TB-93b9e905.svg"
  , of = "/assets/svg/TB-93b9e905.svg"
  , pf = "/assets/svg/Spribe2-1611e073.svg"
  , cf = "/assets/svg/SaBa-c44e31c5.svg"
  , gf = "/assets/svg/SPRIBE-91dc1aa2.svg"
  , rf = "/assets/svg/SEXY-2e7ccc1f.svg"
  , lf = "/assets/svg/SEXY-2e7ccc1f.svg"
  , df = "/assets/svg/PP-a8ca2442.svg"
  , wf = "/assets/svg/PG-d146cfd9.svg"
  , uf = "/assets/svg/Marbles-26a1b145.svg"
  , bf = "/assets/svg/MG-c47f35b2.svg"
  , vf = "/assets/svg/MG-c47f35b2.svg"
  , mf = "/assets/svg/MG-c47f35b2.svg"
  , yf = "/assets/svg/Lottery-5c867ee2.svg"
  , ff = "/assets/svg/KoolBet-2f4756ba.svg"
  , Af = "/assets/svg/JOKER-c3c5b85c.svg"
  , hf = "/assets/svg/JILI-c3c73ec3.svg"
  , _f = "/assets/svg/JDB-f559aaf1.svg"
  , Sf = "/assets/svg/INOUT-4d0f70e4.svg"
  , jf = "/assets/svg/IM-1b9edcb5.svg"
  , $f = "/assets/svg/Hacksaw-1998152d.svg"
  , Gf = "/assets/svg/HackMD-87635545.svg"
  , Lf = "/assets/svg/HB-eda7191c.svg"
  , If = "/assets/svg/G9-74334569.svg"
  , kf = "/assets/svg/EVO-8660b402.svg"
  , Tf = "/assets/svg/EVOPlay-2e42b068.svg"
  , Rf = "/assets/svg/EVOPlay-2e42b068.svg"
  , Cf = "/assets/svg/EVO-8660b402.svg"
  , Pf = "/assets/svg/DG-e8c970a3.svg"
  , Df = "/assets/svg/Card365-e9d8b120.svg"
  , Ef = "/assets/svg/CQ9-a1f1cb32.svg"
  , Bf = "/assets/svg/CMD-bd4a302b.svg"
  , xf = "/assets/svg/BetSoft-45faea5a.svg"
  , Of = "/assets/svg/BGAMING-2b333128.svg"
  , Mf = "/assets/svg/BB-a5502b5c.svg"
  , Wf = "/assets/svg/AG-c6b60f18.svg"
  , Uf = "/assets/svg/AG-c6b60f18.svg"
  , Nf = "/assets/svg/AG-c6b60f18.svg"
  , Vf = "/assets/svg/AG-c6b60f18.svg"
  , Ff = "/assets/svg/AG-c6b60f18.svg"
  , Hf = "/assets/svg/winningStar-0bc4df15.svg"
  , qf = "/assets/svg/rule-a0733c44.svg"
  , Kf = "/assets/svg/team_port-aaa6f267.svg"
  , zf = "/assets/svg/team_partner-3967e6ea.svg"
  , Xf = "/assets/svg/teamSubordinates-72f4f360.svg"
  , Jf = "/assets/svg/subordinate-cd303caa.svg"
  , Yf = "/assets/svg/server-dcdbd327.svg"
  , Qf = "/assets/svg/rebateRatio-626dfee2.svg"
  , Zf = "/assets/svg/invite_reg-0d5bf08a.svg"
  , eA = "/assets/svg/directSubordinates-bc3b87d9.svg"
  , sA = "/assets/svg/copy_Code-f822e0c9.svg"
  , tA = "/assets/svg/commission-35156794.svg"
  , nA = "/assets/svg/widthdrawBlue-0fb27f01.svg"
  , aA = "/assets/svg/weal5-713bc934.svg"
  , oA = "/assets/svg/weal4-6191b04f.svg"
  , pA = "/assets/svg/weal3-d0a80d47.svg"
  , cA = "/assets/svg/wallets-fce84a97.svg"
  , iA = "/assets/svg/versionUpdateIcon-ae496f55.svg"
  , gA = "/assets/svg/vault-f4db1df7.svg"
  , rA = "/assets/svg/tradeHistory-76ac5f74.svg"
  , lA = "/assets/svg/tournament-9aa75b4c.svg"
  , dA = "/assets/svg/statsIcon-40666e36.svg"
  , wA = "/assets/svg/rechargeIcon-8b8d4941.svg"
  , uA = "/assets/svg/rechargeHistory-0358f4f6.svg"
  , bA = "/assets/svg/productCode-31b20fde.svg"
  , vA = "/assets/svg/pointsSmallIncon-1a0c72cd.svg"
  , mA = "/assets/svg/points-991658be.svg"
  , yA = "/assets/svg/notification-ff3fc155.svg"
  , fA = "/assets/svg/myWithdrawHistory-efe8c62b.svg"
  , AA = "/assets/svg/myDraw-91b58c40.svg"
  , hA = "/assets/svg/messageIcon-01f5dfe1.svg"
  , _A = "/assets/svg/love-71889dd9.svg"
  , SA = "/assets/svg/logout-677a32e0.svg"
  , jA = "/assets/svg/language-e3fac31a.svg"
  , $A = "/assets/svg/googleIcon-3d4e0215.svg"
  , GA = "/assets/svg/gifts-2783922e.svg"
  , LA = "/assets/svg/editIcon-e800b134.svg"
  , IA = "/assets/svg/diamond-8d804cb6.svg"
  , kA = "/assets/svg/crown-73887708.svg"
  , TA = "/assets/svg/betHistory-f5bf1043.svg"
  , RA = "/assets/svg/VipIcon-51586113.svg"
  , CA = "/assets/svg/ar14-winner-2f20069c.svg"
  , PA = "/assets/svg/91-withdraw_btn-c8a3085c.svg"
  , DA = "/assets/svg/91-winner-6f08206a.svg"
  , EA = "/assets/svg/91-vip-89f5c0cb.svg"
  , BA = "/assets/svg/91-up-408e58dd.svg"
  , xA = "/assets/svg/91-turntable-1ce82349.svg"
  , OA = "/assets/svg/91-top1-7ad9614c.svg"
  , MA = "/assets/svg/91-refresh-40139477.svg"
  , WA = "/assets/svg/91-recharge_btn-ff2482b8.svg"
  , UA = "/assets/svg/91-rank_bg-f3e6dccd.svg"
  , NA = "/assets/svg/91-rank-5ffc5506.svg"
  , VA = "/assets/svg/91-point-263142f0.svg"
  , FA = "/assets/svg/91-notice-32c01c22.svg"
  , HA = "/assets/svg/91-message_notice-5721dd52.svg"
  , qA = "/assets/svg/91-homeDown-5219b41b.svg"
  , KA = "/assets/svg/91-gold-856a95a9.svg"
  , zA = "/assets/svg/91-down-06370c5e.svg"
  , XA = "/assets/png/PhonePe-f7836c64.png"
  , JA = "/assets/png/Paytm-0c047809.png"
  , YA = "/assets/svg/fail-6b2f4d89.svg"
  , QA = "/assets/svg/fail-6b2f4d89.svg"
  , ZA = "/assets/png/PhonePe_bg_active-5779a9e3.png"
  , eh = "/assets/png/PhonePe_bg-2f145b10.png"
  , sh = "/assets/svg/PhonePe-6781c2ba.svg"
  , th = "/assets/png/PhonePe-97d4116a.png"
  , nh = "/assets/png/Paytm_bg_active-e698feef.png"
  , ah = "/assets/png/Paytm_bg-8911757e.png"
  , oh = "/assets/svg/Paytm-73b1277a.svg"
  , ph = "/assets/png/Paytm-3c297cfb.png"
  , ch = "/assets/svg/Other_Bank-e4ec4bfe.svg"
  , ih = "/assets/png/Other Bank-a9d5b66b.png"
  , gh = "/assets/png/Mobikwik-e1dbd222.png"
  , rh = "/assets/svg/GooglePay-281f2143.svg"
  , lh = "/assets/png/GooglePay-a55fa0b8.png"
  , dh = "/assets/png/s4-58596644.png"
  , wh = "/assets/png/s3-488e17f4.png"
  , uh = "/assets/png/s2-19d8a96d.png"
  , bh = "/assets/png/s1-873d5cc5.png"
  , vh = "/assets/png/zp-e42d4a86.png"
  , mh = "/assets/png/turntable-4464ae2e.png"
  , yh = "/assets/png/money-37bf3bca.png"
  , fh = "/assets/png/btn-25f23fd7.png"
  , Ah = "/assets/png/bg-9bfd9862.png"
  , hh = "/assets/png/head-41715561.png"
  , _h = "/assets/png/box-72df0f73.png"
  , Sh = "/assets/png/bg-03736905.png"
  , jh = "/assets/png/superJackpot-ecb648b4.png"
  , $h = "/assets/png/memberGift-a0182789.png"
  , Gh = "/assets/png/invitationBonus-aa7acbd3.png"
  , Lh = "/assets/png/activityReward-66772619.png"
  , Ih = "/assets/png/BettingRebate-17d35455.png"
  , kh = "/assets/png/verified-07adefdd.png"
  , Th = "/assets/png/treasure-393407c9.png"
  , Rh = "/assets/png/ticket-50e7f4ff.png"
  , Ch = "/assets/png/successfullyReceived-ba114e61.png"
  , Ph = "/assets/png/successfullyParticipatedBottom-9b3834ed.png"
  , Dh = "/assets/png/successfullyParticipatedBg-6f009b48.png"
  , Eh = "/assets/png/statusBg-219ad07d.png"
  , Bh = "/assets/png/rule-175064b1.png"
  , xh = "/assets/png/redeemdBg-11a66dae.png"
  , Oh = "/assets/png/redDiamondSm-e70ad689.png"
  , Mh = "/assets/png/redDiamond-7d6eb86a.png"
  , Wh = "/assets/png/recycleBin-33f39c36.png"
  , Uh = "/assets/png/recordHeaderBg-935ceaef.png"
  , Nh = "/assets/png/record-d4db04fc.png"
  , Vh = "/assets/png/pointsIcon-0920a82f.png"
  , Fh = "/assets/png/plus-c6759b9a.png"
  , Hh = "/assets/png/output-5e44ebb9.png"
  , qh = "/assets/png/orderSentImg-b8e3ec85.png"
  , Kh = "/assets/png/orderSent-1bf577ad.png"
  , zh = "/assets/png/orderPendingImg-55a169f3.png"
  , Xh = "/assets/png/orderPending-800494a8.png"
  , Jh = "/assets/png/orderItemDetail-75e9d064.png"
  , Yh = "/assets/png/orderCompletedImg-33bbe180.png"
  , Qh = "/assets/png/orderCompleted-9097de24.png"
  , Zh = "/assets/png/orderCanceledImg-60b942d7.png"
  , e_ = "/assets/png/orderCanceled-24ddf61e.png"
  , s_ = "/assets/png/orderCancelWarn-ac58c333.png"
  , t_ = "/assets/png/orderCancelSuccess-88db2a4b.png"
  , n_ = "/assets/png/notice-79006469.png"
  , a_ = "/assets/png/minus-5a9596f2.png"
  , o_ = "/assets/png/luckyNumber-161bd253.png"
  , p_ = "/assets/png/lotteryReceiver-a6053ba3.png"
  , c_ = "/assets/png/lotteryContact-1841aa7f.png"
  , i_ = "/assets/png/loading-adf3b1e5.png"
  , g_ = "/assets/png/iphone14-a3ffcac4.png"
  , r_ = "/assets/png/income-ac0d3d36.png"
  , l_ = "/assets/png/headerBodyBg-d4a7290f.png"
  , d_ = "/assets/png/headerBg-e508f7ee.png"
  , w_ = "/assets/png/forbhidden-37936b1e.png"
  , u_ = "/assets/png/empty-4ac9a431.png"
  , b_ = "/assets/png/editDefault-64fbf1a8.png"
  , v_ = "/assets/png/edit-46999709.png"
  , m_ = "/assets/png/dropdownWhite-578a632a.png"
  , y_ = "/assets/png/dropdownRed-3af49045.png"
  , f_ = "/assets/png/dropdown-322823a1.png"
  , A_ = "/assets/png/diamond-2cbec887.png"
  , h_ = "/assets/png/copy-d55c13ec.png"
  , __ = "/assets/png/confirm-a33ad5f4.png"
  , S_ = "/assets/png/coin-cb038c55.png"
  , j_ = "/assets/png/close-862c6a4d.png"
  , $_ = "/assets/png/claimRuleBg-24465825.png"
  , G_ = "/assets/png/cart-cbe8676b.png"
  , L_ = "/assets/png/addAddress-ed8b5c2b.png"
  , I_ = "/assets/png/day7BgActive-0b574f89.png"
  , k_ = "/assets/png/day7Bg-c8619dfc.png"
  , T_ = "/assets/png/coin-294b6998.png"
  , R_ = "/assets/png/ar-headerBg-9e0606dd.png"
  , C_ = "/assets/png/Unsigned-6fd1c78f.png"
  , P_ = "/assets/png/Signed-dd8900d1.png"
  , D_ = "/assets/png/SignInTop-2fa51663.png"
  , E_ = "/assets/png/3-f5a58c12.png"
  , B_ = "/assets/png/2-0c408958.png"
  , x_ = "/assets/png/1-dcdd0031.png"
  , O_ = "/assets/png/taskIcon5-de1c9e45.png"
  , M_ = "/assets/png/taskIcon4-61254c95.png"
  , W_ = "/assets/png/taskIcon3-dd14a0b4.png"
  , U_ = "/assets/png/taskIcon2-12ec2ce1.png"
  , N_ = "/assets/png/taskIcon1-4d9fdca3.png"
  , V_ = "/assets/png/stepperIcon-2e9ee5c5.png"
  , F_ = "/assets/png/signInBanner-ff4a210f.png"
  , H_ = "/assets/png/amountIcon-b2c8faab.png"
  , q_ = "/assets/png/present-f428559f.png"
  , K_ = "/assets/png/new-10c0e083.png"
  , z_ = "/assets/png/giftRedeem-bb2f7a92.png"
  , X_ = "/assets/png/friends-4ef5392a.png"
  , J_ = "/assets/png/dualArrow-64025a0e.png"
  , Y_ = "/assets/png/confirmationReceived-bb857841.png"
  , Q_ = "/assets/png/close-32ada670.png"
  , Z_ = "/assets/png/award_bg-8e278a3d.png"
  , eS = "/assets/png/awardRecord-5114e1d9.png"
  , sS = "/assets/png/awardImg-8d1a549e.png"
  , tS = "/assets/png/ar_award_bg-39b9ad3c.png"
  , nS = "/assets/png/amountIcon-b2c8faab.png"
  , aS = "/assets/png/activityIcon5-bed22bcc.png"
  , oS = "/assets/png/activityIcon4-4b3e3dac.png"
  , pS = "/assets/png/activityIcon3-2aeac4f4.png"
  , cS = "/assets/png/activityIcon2-65587a73.png"
  , iS = "/assets/png/activityIcon1-67076a48.png"
  , gS = "/assets/png/PointsMallBanner-29c85912.png"
  , rS = "/assets/png/claimRuleBg-24465825.png"
  , lS = "/assets/png/DailyTaskBanner-4d2c6dee.png"
  , dS = "/assets/png/DailyCheckInBanner-4da72087.png"
  , wS = "/assets/png/activityAttendance-e4704306.png"
  , uS = "/assets/png/9-63365227.png"
  , bS = "/assets/png/8-8cbed392.png"
  , vS = "/assets/png/7-a50aebe0.png"
  , mS = "/assets/png/6-05959c7c.png"
  , yS = "/assets/png/5-89e9b349.png"
  , fS = "/assets/png/4-a4cfd018.png"
  , AS = "/assets/png/3-9cf04b7e.png"
  , hS = "/assets/png/2-fcf77958.png"
  , _S = "/assets/png/10-0eaf39a0.png"
  , SS = "/assets/png/1-1fca7935.png"
  , jS = "/assets/png/2-5df32e87.png"
  , $S = "/assets/png/1-d951dc6d.png"
  , GS = "/assets/png/bg9-74d6723d.png"
  , LS = "/assets/png/bg8-8bdc102c.png"
  , IS = "/assets/png/bg7-535312da.png"
  , kS = "/assets/png/bg6-8b5d1b4f.png"
  , TS = "/assets/png/bg5-e2132369.png"
  , RS = "/assets/png/bg4-c3caf0f8.png"
  , CS = "/assets/png/bg3-96f1cdae.png"
  , PS = "/assets/png/bg2-ee7fbf5e.png"
  , DS = "/assets/png/bg10-76abb4b7.png"
  , ES = "/assets/png/bg1-7ff97a99.png"
  , BS = "/assets/png/6-d6ee4bdd.png"
  , xS = "/assets/png/8-99f019b4.png"
  , OS = "/assets/png/8-99f019b4.png"
  , MS = "/assets/png/6-d6ee4bdd.png"
  , WS = "/assets/png/5-f026eff3.png"
  , US = "/assets/png/4_ns-6c3ac287.png"
  , NS = "/assets/png/4-d37103ef.png"
  , VS = "/assets/png/3-6bb1e3bd.png"
  , FS = "/assets/png/10-e1104eb3.png"
  , HS = "/assets/png/1-bcd21d34.png"
  , qS = "/assets/png/moonBar-f80ac733.png"
  , KS = "/assets/png/bc-b4a87488.png"
  , zS = "/assets/png/all_NS-596a51c1.png"
  , XS = "/assets/png/all-27648518.png"
  , JS = "/assets/png/8-99f019b4.png"
  , YS = "/assets/png/8-99f019b4.png"
  , QS = "/assets/png/6-d6ee4bdd.png"
  , ZS = "/assets/png/6-d6ee4bdd.png"
  , ej = "/assets/png/5-f026eff3.png"
  , sj = "/assets/png/5-f026eff3.png"
  , tj = "/assets/png/4-d37103ef.png"
  , nj = "/assets/png/4-d37103ef.png"
  , aj = "/assets/png/3-7b95b50c.png"
  , oj = "/assets/png/3_1-797ff1cd.png"
  , pj = "/assets/png/3-7b95b50c.png"
  , cj = "/assets/png/20-be90e252.png"
  , ij = "/assets/png/20-be90e252.png"
  , gj = "/assets/png/1_NS-4e2a71d4.png"
  , rj = "/assets/png/10-e1104eb3.png"
  , lj = "/assets/png/10-e1104eb3.png"
  , dj = "/assets/png/1-126f6627.png"
  , wj = "/assets/png/searchIcon2-5a357de6.png"
  , uj = "/assets/png/phone-4120fa0b.png"
  , bj = "/assets/png/name-9e22293f.png"
  , vj = "/assets/png/ifscCode-c4c5dd87.png"
  , mj = "/assets/png/email-f5b70317.png"
  , yj = "/assets/png/bankLogo-a5a69eb5.png"
  , fj = "/assets/png/bankHeader2-8f70dbe2.png"
  , Aj = "/assets/png/bankHeader1-3318d52b.png"
  , hj = "/assets/png/bankCard-72696d64.png"
  , _j = "/assets/png/bank-c41d01a9.png"
  , Sj = "/assets/png/address-e900da4b.png"
  , jj = "/assets/png/5-f026eff3.png"
  , $j = "/assets/png/3-6bb1e3bd.png"
  , Gj = "/assets/png/21-b48d886d.png"
  , Lj = "/assets/png/1-4618686f.png"
  , Ij = "/assets/png/usdtLogo3-44838497.png"
  , kj = "/assets/png/usdt-6c465007.png"
  , Tj = "/assets/png/scan-2448efda.png"
  , Rj = "/assets/png/network-5814d749.png"
  , Cj = "/assets/png/bankHeader-8061c85e.png"
  , Pj = "/assets/png/anotherNamer-abd9d35b.png"
  , Dj = "/assets/png/address-827477cf.png"
  , Ej = "/assets/png/wrong_1-b1d69653.png"
  , Bj = "/assets/png/wrong-b3102a79.png"
  , xj = "/assets/png/video1-b0611412.png"
  , Oj = "/assets/png/uploadVideo-c98adde0.png"
  , Mj = "/assets/png/updateImg-53f2ece8.png"
  , Wj = "/assets/png/upiline-0a62bd1b.png"
  , Uj = "/assets/png/upi-3f9883de.png"
  , Nj = "/assets/png/uAmount-41b6d3de.png"
  , Vj = "/assets/png/successicon-14b4ca02.png"
  , Fj = "/assets/png/seleteBank-495c5570.png"
  , Hj = "/assets/png/selectupi-a393f4a3.png"
  , qj = "/assets/png/safety-9f888a05.png"
  , Kj = "/assets/png/hicon8-a0b773c0.png"
  , zj = "/assets/png/hicon7-17c43b53.png"
  , Xj = "/assets/png/hicon6-9e8572bd.png"
  , Jj = "/assets/png/hicon5-5edd50a0.png"
  , Yj = "/assets/png/cancel-0e9b3ff4.png"
  , Qj = "/assets/png/hicon3-88832321.png"
  , Zj = "/assets/png/hicon2-147f9796.png"
  , e$ = "/assets/png/hicon14-c2c6ca62.png"
  , s$ = "/assets/png/appeal-6e70b57c.png"
  , t$ = "/assets/png/hicon0-f77ed8cd.png"
  , n$ = "/assets/png/delBtn-a22f4a2e.png"
  , a$ = "/assets/png/copy-icon-fead2b7d.png"
  , o$ = "/assets/png/confirmA-1de2c8e9.png"
  , p$ = "/assets/png/c2clogo_a-38a8cfbe.png"
  , c$ = "/assets/png/c2clogo-e9e3330b.png"
  , i$ = "/assets/png/bg11-8d5da6a8.png"
  , g$ = "/assets/png/bank-11ec3a19.png"
  , r$ = "/assets/png/appeal-645c7205.png"
  , l$ = "/assets/png/add-1ad7f3f5.png"
  , d$ = "/assets/png/CancelW-5d1e136e.png"
  , w$ = "/assets/png/4-f425c40c.png"
  , u$ = "/assets/png/3-21c2fbaa.png"
  , b$ = "/assets/png/2-79ed5c4e.png"
  , v$ = "/assets/png/1-bfa3f309.png"
  , m$ = "/assets/png/wallet-94251531.png"
  , y$ = "/assets/png/momo-5cf8e802.png"
  , f$ = "/assets/png/cards-b2779342.png"
  , A$ = "/assets/png/bankHeader-56d506ba.png"
  , h$ = "/assets/png/wave_icon-41753b97.png"
  , _$ = "/assets/png/wave-9300da3f.png"
  , S$ = "/assets/png/slot_wallet-0f74ba62.png"
  , j$ = "/assets/png/kbz_icon-1ab461b7.png"
  , $$ = "/assets/png/kbz-b7b75d71.png"
  , G$ = "/assets/png/bank-bf085d1b.png"
  , L$ = "/assets/png/appeal-645c7205.png"
  , I$ = "/assets/png/icon-wg-b65da4c5.png"
  , k$ = "/assets/png/icon-k3-dabf0a83.png"
  , T$ = "/assets/png/icon-5d-dadd282e.png"
  , R$ = "/assets/png/trend_go-7405456e.png"
  , C$ = "/assets/png/trend3-2a1b1d6f.png"
  , P$ = "/assets/png/trend2-db817e06.png"
  , D$ = "/assets/png/trend1-e90c2f20.png"
  , E$ = "/assets/png/top_3-d324faac.png"
  , B$ = "/assets/png/top_2-7d8a7364.png"
  , x$ = "/assets/png/top_1-4e868024.png"
  , O$ = "/assets/png/rule_tip-5d3f81b0.png"
  , M$ = "/assets/png/rule_dice_6-fc323f22.png"
  , W$ = "/assets/png/rule_dice_5-58830c67.png"
  , U$ = "/assets/png/rule_dice_4-34353cc2.png"
  , N$ = "/assets/png/rule_dice_3-5d32ae31.png"
  , V$ = "/assets/png/rule_dice_2-aeca7e3d.png"
  , F$ = "/assets/png/rule_dice_1-0f7cd7df.png"
  , H$ = "/assets/png/rule_bg-50b5b9c0.png"
  , q$ = "/assets/png/record_icon-fca8b0d0.png"
  , K$ = "/assets/png/record-5001454f.png"
  , z$ = "/assets/png/lock_money-47931447.png"
  , X$ = "/assets/png/icon-0d01ace2.png"
  , J$ = "/assets/png/hot_top-db35cb37.png"
  , Y$ = "/assets/png/hot_bg-52030c8d.png"
  , Q$ = "/assets/png/hidden_money-4d2f0151.png"
  , Z$ = "/assets/png/dice_6-3734f323.png"
  , eG = "/assets/png/dice_5-a11110ab.png"
  , sG = "/assets/png/dice_4-3537b074.png"
  , tG = "/assets/png/dice_3-c91e0c1c.png"
  , nG = "/assets/png/dice_2-38383685.png"
  , aG = "/assets/png/dice_1-3eb8e22b.png"
  , oG = "/assets/png/count_icon-841b89c6.png"
  , pG = "/assets/png/binguo_tip-5bf2ec89.png"
  , cG = "/assets/png/binguo_time-92498640.png"
  , iG = "/assets/png/bet_tip-6d4dd4c6.png"
  , gG = "/assets/png/add-af733118.png"
  , rG = "/assets/png/wingoissue-0c200440.png"
  , lG = "/assets/png/voice-62dbf38c.png"
  , dG = "/assets/png/voice-off-633f5ccc.png"
  , wG = "/assets/png/time_a-f83ed4c7.png"
  , uG = "/assets/png/time-5d4e96a3.png"
  , bG = "/assets/png/rule-r-ee114f98.png"
  , vG = "/assets/png/refireshIcon-2bc1b49f.png"
  , mG = "/assets/png/n9-a20f6f42.png"
  , yG = "/assets/png/n8-d4d951a4.png"
  , fG = "/assets/png/n7-5961a17f.png"
  , AG = "/assets/png/n6-a56e0b9a.png"
  , hG = "/assets/png/n5-49d0e9c5.png"
  , _G = "/assets/png/n4-cb84933b.png"
  , SG = "/assets/png/n3-f92c313f.png"
  , jG = "/assets/png/n2-c2913607.png"
  , $G = "/assets/png/n1-dfccbff5.png"
  , GG = "/assets/png/n0-30bd92d1.png"
  , LG = "/assets/png/kefu-b361c42f.png"
  , IG = "/assets/png/headlogo-56515a97.png"
  , kG = "/assets/png/copy-b4cb4c54.png"
  , TG = "/assets/png/bcakIcon-b7c1d288.png"
  , RG = "/assets/png/agree-b-47b8f86d.png"
  , CG = "/assets/png/agree-a-95c84913.png"
  , PG = "/assets/png/PreSaleBg-3af872d3.png"
  , DG = "/assets/png/wallet-34507dfa.png"
  , EG = "/assets/png/tip-c41c0609.png"
  , BG = "/assets/png/ticketstar-1284c928.png"
  , xG = "/assets/png/success-6974caeb.png"
  , OG = "/assets/png/right-21052d0b.png"
  , MG = "/assets/png/right-border-2bf0f766.png"
  , WG = "/assets/png/notwinning-7e54c381.png"
  , UG = "/assets/png/middle-79bf238e.png"
  , NG = "/assets/png/left-a0d125ca.png"
  , VG = "/assets/png/left-border-2a4f160e.png"
  , FG = "/assets/png/fail-2d46961d.png"
  , HG = "/assets/png/detail-fadc6b56.png"
  , qG = "/assets/png/close-862c6a4d.png"
  , KG = "/assets/png/bg5-71cd6b43.png"
  , zG = "/assets/png/bg4-200f47b7.png"
  , XG = "/assets/png/bg3-90fd24c7.png"
  , JG = "/assets/png/bg2-6bb5d543.png"
  , YG = "/assets/png/bg1-c7e3c3ac.png"
  , QG = "/assets/png/arrowbottom-4eb91cbc.png"
  , ZG = "/assets/png/WalletBg-eedd378a.png"
  , eL = "/assets/png/Star-0eff667a.png"
  , sL = "/assets/png/trxbg-83ff5c79.png"
  , tL = "/assets/png/timeb-be86798b.png"
  , nL = "/assets/png/timea-bf684535.png"
  , aL = "/assets/png/prizeF-46aeece0.png"
  , oL = "/assets/png/prizeE-90087f02.png"
  , pL = "/assets/png/prizeD-46a95e2f.png"
  , cL = "/assets/png/prizeC-bbf8b83c.png"
  , iL = "/assets/png/prizeB-6c3c2497.png"
  , gL = "/assets/png/prizeA-7217212f.png"
  , rL = "/assets/png/prize9-63d3f3f8.png"
  , lL = "/assets/png/prize8-3ffac79f.png"
  , dL = "/assets/png/prize7-ca1d24be.png"
  , wL = "/assets/png/prize6-57181440.png"
  , uL = "/assets/png/prize5-82f7fa61.png"
  , bL = "/assets/png/prize4-5a5999aa.png"
  , vL = "/assets/png/prize3-6700769f.png"
  , mL = "/assets/png/prize2-28af3286.png"
  , yL = "/assets/png/prize1-fe15d69b.png"
  , fL = "/assets/png/prize0-96a81e16.png"
  , AL = "/assets/png/numF-956f8923.png"
  , hL = "/assets/png/numE-f70da99f.png"
  , _L = "/assets/png/numD-06e782e9.png"
  , SL = "/assets/png/numC-8d88d857.png"
  , jL = "/assets/png/numB-cad56304.png"
  , $L = "/assets/png/numA-594afa89.png"
  , GL = "/assets/png/num9-310d63e2.png"
  , LL = "/assets/png/num8-41b2260f.png"
  , IL = "/assets/png/num7-05973970.png"
  , kL = "/assets/png/num6-0cbd3b10.png"
  , TL = "/assets/png/num5-fd2837e8.png"
  , RL = "/assets/png/num4-5f2d81c5.png"
  , CL = "/assets/png/num3-8254ed13.png"
  , PL = "/assets/png/num2-b18f079a.png"
  , DL = "/assets/png/num1-fdab1e12.png"
  , EL = "/assets/png/num0-d3a30585.png"
  , BL = "/assets/png/icon-tip-e132c927.png"
  , xL = "/assets/png/redBall-fd34b99e.png"
  , OL = "/assets/png/n7-039e2d7d.png"
  , ML = "/assets/png/n6-b68c6bb6.png"
  , WL = "/assets/png/n5-09b70e91.png"
  , UL = "/assets/png/n4-9d453819.png"
  , NL = "/assets/png/n3-1432a6bd.png"
  , VL = "/assets/png/n2-447499dc.png"
  , FL = "/assets/png/n1-584b8878.png"
  , HL = "/assets/png/greenBall-b7685130.png"
  , qL = "/assets/png/bitactive-b01fa131.png"
  , KL = "/assets/png/success-6974caeb.png"
  , zL = "/assets/png/fail-2d46961d.png"
  , XL = "/assets/svg/arr-right-2572fbc2.svg"
  , JL = "/assets/svg/arr-left-bfe1fd7a.svg"
  , YL = "/assets/png/7-50491f4f.png"
  , QL = "/assets/png/6-b1fffa2b.png"
  , ZL = "/assets/png/5-ef576d76.png"
  , eI = "/assets/png/47-d9f572e1.png"
  , sI = "/assets/png/46-ee02ed2b.png"
  , tI = "/assets/png/45-9eed2c7e.png"
  , nI = "/assets/png/44-620d40cf.png"
  , aI = "/assets/png/42-27e3aa92.png"
  , oI = "/assets/png/41-008fda31.png"
  , pI = "/assets/png/4-d8ce028d.png"
  , cI = "/assets/png/38-c4435bda.png"
  , iI = "/assets/png/37-625a5b41.png"
  , gI = "/assets/png/35-eb86dc8e.png"
  , rI = "/assets/png/30-dc94dbb3.png"
  , lI = "/assets/png/3-b264c177.png"
  , dI = "/assets/png/29-8910dd13.png"
  , wI = "/assets/png/27-4ed9e7d3.png"
  , uI = "/assets/png/26-443407d9.png"
  , bI = "/assets/png/24-2c3f7f15.png"
  , vI = "/assets/png/23-74b469e3.png"
  , mI = "/assets/png/22-c8d16d9d.png"
  , yI = "/assets/png/21-445197ac.png"
  , fI = "/assets/png/20-3b709e93.png"
  , AI = "/assets/png/2-acd018d8.png"
  , hI = "/assets/png/19-b7ea3a3f.png"
  , _I = "/assets/png/18-133c9219.png"
  , SI = "/assets/png/16-77372c1e.png"
  , jI = "/assets/png/16-77372c1e.png"
  , $I = "/assets/png/10-a32c3070.png"
  , GI = "/assets/png/10-a32c3070.png"
  , LI = "/assets/png/10-a32c3070.png"
  , II = "/assets/png/1-f340a485.png"
  , kI = "/assets/png/-1-eebe8111.png"
  , TI = "/assets/svg/usdtLogo3-fbb03d0f.svg"
  , RI = "/assets/svg/5-6a5dff94.svg"
  , CI = "/assets/svg/1-4bc64f9f.svg"
  , PI = "/assets/svg/settingCenter-53b41281.svg"
  , DI = "/assets/svg/serviceCenter-5bf2bdc4.svg"
  , EI = "/assets/svg/notificationCenter-c0c5489b.svg"
  , BI = "/assets/svg/guide-427cd2dc.svg"
  , xI = "/assets/svg/feedback-26930985.svg"
  , OI = "/assets/svg/about-c0360497.svg"
  , MI = "/assets/svg/riskProtocal-8b37dc30.svg"
  , WI = "/assets/svg/privacyIcon-c8c614d1.svg"
  , UI = "/assets/png/3-324d5d80.png"
  , NI = "/assets/png/2-ced006d4.png"
  , VI = "/assets/png/1-4ba1bded.png"
  , FI = "/assets/png/3-8f116542.png"
  , HI = "/assets/png/2-d2d7df31.png"
  , qI = "/assets/png/1-46f75933.png"
  , KI = "/assets/png/3-403de67f.png"
  , zI = "/assets/png/2-8d541aa8.png"
  , XI = "/assets/png/1-32494215.png"
  , JI = "/assets/png/3-538e7785.png"
  , YI = "/assets/png/2-5b749f7c.png"
  , QI = "/assets/png/1-cbbab055.png"
  , ZI = "/assets/png/3-135d1209.png"
  , ek = "/assets/png/2-56c65cac.png"
  , sk = "/assets/png/1-1d1a5d31.png"
  , tk = "/assets/png/0-6ae0fe8d.png"
  , nk = "/assets/png/2-4468ebef.png"
  , ak = "/assets/png/1-c4fc5e42.png"
  , ok = "/assets/png/0-6ae0fe8d.png"
  , pk = "/assets/png/4-d7dc1f2c.png"
  , ck = "/assets/png/0-6ae0fe8d.png"
  , ik = "/assets/png/2-4468ebef.png"
  , gk = "/assets/png/1-c4fc5e42.png"
  , rk = "/assets/png/0-6ae0fe8d.png"
  , lk = "/assets/png/3_a-c660a4ba.png"
  , dk = "/assets/png/3-5d3eefed.png"
  , wk = "/assets/png/3_a-9cfda764.png"
  , uk = "/assets/png/3-53264d1a.png"
  , bk = "/assets/png/2_a-30530371.png"
  , vk = "/assets/png/2-e4cd29e8.png"
  , mk = "/assets/png/1-7f0714b7.png"
  , yk = "/assets/png/1-e146eac4.png"
  , fk = "/assets/png/4-ad3ed5fc.png"
  , Ak = "/assets/png/4-ad3ed5fc.png"
  , hk = "/assets/png/3_a-c660a4ba.png"
  , _k = "/assets/png/3-5d3eefed.png"
  , Sk = "/assets/png/2_a-290b2514.png"
  , jk = "/assets/png/2-bd839975.png"
  , $k = "/assets/png/1_a-c3c7a041.png"
  , Gk = "/assets/png/1-a2189950.png"
  , Lk = "/assets/png/4-80aab9b6.png"
  , Ik = "/assets/png/3-b1060d1a.png"
  , kk = "/assets/png/2-9316f0a9.png"
  , Tk = "/assets/png/1-7f0714b7.png"
  , Ss = {
    MAINCOLOR: "yellow1Style",
    "../assets/yellow1Style/icons/wallet/withdrawHistory.png": ia.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/widthdrawBlue.png": ga.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/usdt1.png": ra.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/usdt.png": la.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/trx.png": da.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/transf_amount.png": wa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/tip.png": ua.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/thirdPartyLogo.png": ba.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/succeed.png": va.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/slot_wallet.png": ma.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/selectupi.png": ya.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/saveWallet.png": fa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/safety.png": Aa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/recharge_usdt.png": ha.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/rechargeIcon.png": _a.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/rechargeHistory.png": Sa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/quickpay2.png": ja.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/hint.png": $a.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/gift.png": Ga.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/balance.png": La.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/ar-TotalAssetsBg.png": Ia.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/TotalAssetsBg.png": ka.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/Ar_Gift.svg": Ta.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/ArPayBackground.svg": Ra.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/tabBarIcons/wallet.svg": Ca.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/tabBarIcons/promotion.svg": Pa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/tabBarIcons/main.svg": Da.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/tabBarIcons/home.svg": Ea.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/tabBarIcons/chat.svg": Ba.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/tabBarIcons/activity.svg": xa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/redHome/redhomeN.svg": Oa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/xosoCity.png": Ma.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType9.svg": Wa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType8.svg": Ua.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType7.svg": Na.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType6.svg": Va.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType5.svg": Fa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType4.svg": Ha.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType3.svg": qa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType2.svg": Ka.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType12.svg": za.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType11.svg": Xa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType10.svg": Ja.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/weeklyType1.svg": Ya.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/warning2.png": Qa.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/wallet.png": Za.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/ticketstar.png": eo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/tabBarBg.png": so.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/superjackpotHome.png": to.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/succeed.png": no.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/searchIcon.png": ao.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/rule.png": oo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/right_arrow.png": po.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/playactive.svg": co.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/play.svg": io.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/palybg.png": go.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/notify.svg": ro.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/icon-question.png": lo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/hot.svg": wo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/headerBg.png": uo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/greenNotify.svg": bo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/empty.png": vo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/daman-lottery_background.png": mo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/copy.png": yo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/bookicon.png": fo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/before_cire.png": Ao.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/anbg.svg": ho.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/activityIcon1.png": _o.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/public/Triangle.png": So.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/wallet.png": jo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/u2.png": $o.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/u1.png": Go.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/trucktick.png": Lo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/team_port.png": Io.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/team_partner.png": ko.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/subordinate.png": To.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/shuoming.png": Ro.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/serverbg.png": Co.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/server.png": Po.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/searchIcon1.png": Do.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/roundIcon.png": Eo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/rebateRatio.png": Bo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/promotionbg.png": xo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/poster.png": Oo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/money.png": Mo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/lv.png": Wo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/invite_reg.png": Uo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/groupSubordinate.png": No.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/extraBonus.png": Vo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/directSubordinate.png": Fo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/copy_code.png": Ho.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/commission.png": qo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/bg1.png": Ko.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/promotion/bank.png": zo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/withdrawHistory.png": Xo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/wallets.png": Jo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/wallet2.png": Yo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/wallet1.png": Qo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/wallet.png": Zo.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/versionUpdate.png": e1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/verify.png": s1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/vault.png": t1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/trianglered.png": n1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/tradeHistory.png": a1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/super_no.png": o1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/statsIcon.png": p1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/settingCenter.png": c1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/serviceCenter.png": i1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/ruleicon.png": g1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/riskProtocal.png": r1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/refresh.png": l1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/privacyIcon.png": d1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/pointsSmallIncon.png": w1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/points.png": u1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/phoneactive.png": b1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/phone.png": v1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/password.png": m1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/otheractive.png": y1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/other.png": f1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/orderIcon.png": A1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/notifyIcon.png": h1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/notificationIcon.png": _1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/notificationCenter.png": S1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/mylottery.png": j1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/myWithdrawHistory.png": $1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/moonBar.png": G1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/messageReadAll.svg": L1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/messageIconRed.svg": I1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/messageIconIsRead.svg": k1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/messageGarbage.svg": T1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/love2.png": R1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/love.png": C1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/languageIcon.png": P1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/kBg.png": D1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/inviterule.svg": E1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/inviterecord.svg": B1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/invitation.png": x1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconservr.png": O1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconservr-r.png": M1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconSlots.png": W1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconRealPerson.png": U1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconPhysics.png": N1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconMiniGame.png": V1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconLottery.png": F1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconFishing.png": H1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconElectric.png": q1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/iconChess.png": K1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/gverifyDownload.png": z1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/guide.png": X1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/googleVerifyBg.png": J1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/googleValidation.png": Y1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/googleKey.png": Q1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/gold.png": Z1.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/giftIcon.png": ep.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/gift.png": sp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/gameStatsSteps.png": tp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/gRecord.png": np.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/forgetpassword.png": ap.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/feedbackImg.png": op.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/eyeVisible.png": pp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/eyeInvisible.png": cp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/emailactive.png": ip.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/email.png": gp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/editPswIcon.png": rp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/editPhoneIcon.png": lp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/diamond.png": dp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/dialogNickname.png": wp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/customerBg.png": up.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/customer.png": bp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/crown.png": vp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/cps.png": mp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/copyIcon.png": yp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/chessStepIcon.png": fp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/cellphone.png": Ap.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/betResultStep.png": hp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/betInfoStep.png": _p.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/betHistory.png": Sp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/avatar1.png": jp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/aboutBg.png": $p.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/about.png": Gp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/VipIcon.png": Lp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/Vector.png": Ip.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/TotalAssetsBg.png": kp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/StrongBoxRecordBg.png": Tp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/EmailIcon.png": Rp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/CStype7.png": Cp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/CStype6.png": Pp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/CStype5.png": Dp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/CStype4.png": Ep.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/CStype3.png": Bp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/CStype2.png": xp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/CStype1.png": Op.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/winning_bg.png": Mp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/wingoissue.png": Wp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/wingoPreSaleBg.png": Up.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/walletbg.png": Np.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/wallet.png": Vp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/trxbg.png": Fp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/time_a.png": Hp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/time.png": qp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/public3Wallet.svg": Kp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/noticeBarSpeaker.svg": zp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/noticeBarHot.svg": Xp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/messageIcon.svg": Jp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/logout.png": Yp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/icon_sevice.png": Qp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/bj.png": Zp.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/bgActive.png": ec.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/bg.png": sc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/arrow-right.svg": tc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/all2.png": nc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/all.png": ac.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/home/DailyProfitRankStage.png": oc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/goldWHome/notify.png": pc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/goGame/right.svg": cc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/goGame/left.svg": ic.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/goGame/backButton.svg": gc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/goGame/Side_Close.png": rc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/common/upload_icon.png": lc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/common/rulehead.svg": dc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/common/agree-a.png": wc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/turntable_icon.png": uc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/turntable.png": bc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/third_bg.png": vc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/third_bg-1.png": mc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/redhomeN.svg": yc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/messageActive.svg": fc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/lottery_bg.png": Ac.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/icon_sevice.png": hc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/hot_bg.png": _c.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/game_mini_bg.png": Sc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/fish_bg.png": jc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/electronic_bg.png": $c.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/blueHome/changlong.svg": Gc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/headerBg.png": Lc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/head.png": Ic.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/dualArrow.png": kc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/bg.png": Tc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/active_b.svg": Rc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/videoActive.png": Cc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/video.png": Pc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/tabActive.png": Dc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/tab.png": Ec.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/sportActive.png": Bc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/sport.png": xc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/slotActive.png": Oc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/slot.png": Mc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/popularActive.png": Wc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/popular.png": Uc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/num6.png": Nc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/num5.png": Vc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/num4.png": Fc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/num3.png": Hc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/num2.png": qc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/num1.png": Kc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/n6.png": zc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/n5.png": Xc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/n4.png": Jc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/n3.png": Yc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/n2.png": Qc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/n1.png": Zc.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/lotteryActive.png": ei.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/lottery.png": si.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/flashActive.png": ti.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/flash.png": ni.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/fishActive.png": ai.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/fish.png": oi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/chessActive.png": pi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/chess.png": ci.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/bgActive.png": ii.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/bg.png": gi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/allActive.png": ri.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/AllGames/all.png": li.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/bg2.png": di.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/8.png": wi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/6.png": ui.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/5.png": bi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/4.png": vi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/3.png": mi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/21.png": yi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/10.png": fi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/withdrawType/1.png": Ai.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/detail/wave_icon.png": hi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/detail/wave.png": _i.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/detail/slot_wallet.png": Si.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/detail/kbz_icon.png": ji.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/detail/kbz.png": $i.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/detail/bank.png": Gi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/wallet/detail/appeal.png": Li.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/lottery/k3/rule-r.png": Ii.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/weal/weal5.png": ki.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/weal/weal4.png": Ti.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/weal/weal3.png": Ri.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/weal/5.png": Ci.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/weal/4.png": Pi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/weal/3.png": Di.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/weal/2.png": Ei.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/weal/1.png": Bi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/superJackpot/super_4.png": xi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/superJackpot/super_3.png": Oi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/superJackpot/super_2.png": Mi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/superJackpot/super_1.png": Wi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/myWelfare/welfare5.png": Ui.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/myWelfare/welfare4.png": Ni.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/myWelfare/welfare3.png": Vi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/myWelfare/welfare2.png": Fi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/myWelfare/welfare1.png": Hi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/Circle-2.png": qi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/Circle-1.png": Ki.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/9.png": zi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/8.png": Xi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/7.png": Ji.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/6.png": Yi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/5.png": Qi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/4.png": Zi.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/3.png": e2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/2.png": s2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/10.png": t2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/1.png": n2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/RebateDetails/0.png": a2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/main/Laundry/vector.png": o2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/Turntable/turntableTitle.svg": p2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/Turntable/turntable.png": c2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/Turntable/frame.svg": i2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/Turntable/activityRule.svg": g2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/Turntable/activityIntro.svg": r2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/Turntable/activityDetail.svg": l2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/verified.png": d2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/redeemdBg.png": w2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/redDiamondSm.png": u2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/pointsIcon.png": b2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/point_2.png": v2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/point_1.png": m2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/plus.png": y2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/orderItemDetail.png": f2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/minus.png": A2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/luckyNumber.png": h2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/lotteryReceiver.png": _2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/lotteryContact.png": S2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/headerBodyBg.png": j2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/yellow1Style/icons/activity/PointMall/edit.png": $2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/wallet.svg": G2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/tabBarBg.png": L2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/promotion.svg": I2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/main.svg": k2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/home.svg": T2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/chat.svg": R2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/activity.svg": C2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/welfareBG.png": P2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/wallet1.png": D2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/wallet.png": E2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/succeed.png": B2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/safeBox.png": x2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/love2.png": O2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/love.png": M2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/insurance1.png": W2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/insurance.png": U2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/gold.png": N2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/giftBag.png": V2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/diamond.png": F2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/crown.png": H2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/bottomBg.png": q2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/award.png": K2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/MonthlyReward.png": z2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/wallets.png": X2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/serverIcon.png": J2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/hint.png": Y2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/copy.svg": Q2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ar_success.png": Z2.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ar_appeal.png": eg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ar2.png": sg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ar1.png": tg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/YGG.png": ng.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/Wickets9.png": ag.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/WM_Video.png": og.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/V8Card.png": pg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/TB_Chess.png": cg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/TB.png": ig.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/SaBa.png": gg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/SEXY_Video.png": rg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/PP.png": lg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/PG.png": dg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/MG.png": wg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/Lottery.png": ug.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/JILI.png": bg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/JDB.png": vg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/IM.png": mg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/HB.png": yg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/EVO_Video.png": fg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/EVO_Electronic.png": Ag.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/EVOPlay.png": hg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/DG.png": _g.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/Card365.png": Sg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/CQ9.png": jg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/CMD.png": $g.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/BetSoft.png": Gg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/Ar_Gift.svg": Lg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/ArPayBackground.svg": Ig.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/AG_Video.png": kg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/AG.png": Tg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/searchBarIcons/searchIcon1.png": Rg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/searchBarIcons/searchIcon.png": Cg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/wallet.png": Pg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/u2.png": Dg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/u1.png": Eg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/team_port.png": Bg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/team_partner.png": xg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/teamPartnerBg.png": Og.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/subordinate.png": Mg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/serverbg.png": Wg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/server.png": Ug.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/searchIcon.png": Ng.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/receive.png": Vg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rebateRatio.png": Fg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rank-3.png": Hg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rank-2.png": qg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rank-1.png": Kg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/promotionbg.png": zg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/money.png": Xg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/invite_reg.png": Jg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/invite.png": Yg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/invitation.png": Qg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/group.png": Zg.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/direct.png": er.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/crown.png": sr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/copy_code.png": tr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/commission.png": nr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/verify.png": ar.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/password.png": or.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/leftArrow.png": pr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/invitation.png": cr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/iconservr.png": ir.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/iconservr-r.png": gr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/googleIcon.png": rr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/eyeVisible.png": lr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/eyeInvisible.png": dr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/dl_bg.png": wr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/cellphone.png": ur.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/zh.png": br.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/vi.png": vr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/th.png": mr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/rus.png": yr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/pk.png": fr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/ph.png": Ar.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/my.png": hr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/md.png": _r.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/korea.png": Sr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/japan.png": jr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/id.png": $r.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/hd.png": Gr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/en.png": Lr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/bra.png": Ir.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/bd.png": kr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/languages/ar.png": Tr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/tabBarBg.png": Rr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/promotionBg.png": Cr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/logo.png": Pr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/gameDefault.png": Dr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/empty.png": Er.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/avatar1.png": Br.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/avatar.png": xr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/All.png": Or.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/win.png": Mr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/u18.png": Wr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/turntable_icon.png": Ur.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/tg_bg.png": Nr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/search.svg": Vr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/reward_bg.png": Fr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/rewardCenter.png": Hr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/public3MsgIcon.png": qr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/promp_right.png": Kr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/promp_left.png": zr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/promp_bg.png": Xr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/profit.png": Jr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/p3morewg.png": Yr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/p3morebg.png": Qr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/p3ar037morebg.png": Zr.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/notice.png": e6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/minGame.png": s6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/luck_bg.png": t6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/loteria.png": n6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/fullscreen.png": a6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/exitfullscreen.png": o6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/changlong_icon.png": p6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/changlong_bg.png": c6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/changlong51_bg.jpg": i6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/banner.png": g6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/backButton.svg": r6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/award.png": l6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/avatar.png": d6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/ar-notice.png": w6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/Group20225.svg": u6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/Go.svg": b6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/DailyProfitRankStage.png": v6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/winning.png": m6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/video.png": y6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/sport.png": f6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/slot.png": A6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/profit.png": h6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/platformList.png": _6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/no3.png": S6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/no2.png": j6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/no1.png": $6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/lottery.png": G6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/flash.png": L6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/fish.png": I6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/clicksTopList.png": k6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/chess.png": T6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/bigaward.png": R6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/electronic/all.png": C6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/ios3.png": P6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/ios2.png": D6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/ios1.png": E6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/empty.png": B6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/download/banner.png": x6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/zs.png": O6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/withdrawHistory.png": M6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/widthdrawBlue.png": W6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/wallets.png": U6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/wallet.png": N6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip9.png": V6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip8.png": F6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip7.png": H6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip6.png": q6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip5.png": K6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip4.png": z6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip3.png": X6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip2.png": J6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip10.png": Y6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vip1.png": Q6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/versionUpdate.png": Z6.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vaultSmallIcon.png": el.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/vault.png": sl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/uploadCamera.png": tl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/unfinish.svg": nl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/trianglered.png": al.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/transferOutIcon.png": ol.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/transferInIcon.png": pl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/tradeHistoryShadow.png": cl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/tradeHistory.png": il.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/tipIcon.png": gl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/support.png": rl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/super_no.png": ll.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/superJackpotRulebg.png": dl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/superJackpot.png": wl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/superIcon.png": ul.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/sugguesions.png": bl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/suggestionCenter.png": vl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/statsIcon.png": ml.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/sliderNum.png": yl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/settings.png": fl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/settingCenter.png": Al.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/serviceCenter.png": hl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/safetyIcon.png": _l.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/riskProtocal.png": Sl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/righticon.svg": jl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/redPacketShadow.png": $l.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/redPacket.png": Gl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/recordIcon.png": Ll.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/rechargeIcon.png": Il.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/rechargeHistory.png": kl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/pswLock.png": Tl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/productOrders.png": Rl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/privacyIcon.png": Cl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/pointsSmallIncon.png": Pl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/points.png": Dl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/orderIcon.png": El.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/numberBG.png": Bl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/notifyIcon.png": xl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/notificationIcon.png": Ol.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/notificationCenter.png": Ml.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/notification.png": Wl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/nextIcon.png": Ul.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/mylottery.png": Nl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/mycoins_bg.png": Vl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/myWithdrawHistory.png": Fl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/myCoin.png": Hl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/moonBar.png": ql.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/messageIconIsRead.svg": Kl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/lotteryIcon.png": zl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/lotteryHistory.png": Xl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/loterry.png": Jl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/logout.png": Yl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/laundryIcon.png": Ql.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/languageSwitch.png": Zl.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/languageIcon.png": e5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/kBg.png": s5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/inviteIcon.png": t5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/invitation_icon.png": n5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/invitation_bg.png": a5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/invitationBonus.png": o5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/incomeIcon.png": p5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconSlots.png": c5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconRealPerson.png": i5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconPhysics.png": g5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconMiniGame.png": r5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconLottery.png": l5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconFishing.png": d5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconElectric.png": w5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/iconChess.png": u5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/gverifyDownload.png": b5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/guide.png": v5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/googleVerifyBg.png": m5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/googleValidation.png": y5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/googleKey.png": f5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/giftIcon.png": A5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/giftFolder.png": h5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/gift.png": _5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/gameStatsSteps.png": S5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/feedbackImg.png": j5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/exchangeIcon.png": $5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/editPswIcon.png": G5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/editPhoneIcon.png": L5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/editPencil.png": I5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/dropDown.png": k5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/down.png": T5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/dialogNickname.png": R5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/customerBg.png": C5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/cps.png": P5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/copyIcon.png": D5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/copy.png": E5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/close_B.png": B5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/close.png": x5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/clearIcon.png": O5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/clear.png": M5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/chessStepIcon.png": W5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/bindemailsuccess.png": U5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/betSportStep.png": N5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/betSixInfoStep.png": V5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/betResultStep.png": F5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/betInfoStep.png": H5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/betHistoryShadow.png": q5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/betHistory.png": K5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/balanceIcon.png": z5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/ar_invitation_bg.png": X5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/aboutCenter.png": J5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/aboutBg.png": Y5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/about.png": Q5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/VipIcon.png": Z5.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/TotalAssetsBg.png": e0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Subtract.png": s0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/StrongBoxRecordBg.png": t0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/MyCoinsBanner2.png": n0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/MyCoinsBanner.png": a0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/GoogleTip.png": o0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/GoogleSubtract.png": p0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/GooglePolygon.png": c0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/EmailIcon.png": i0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype7.png": g0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype6.png": r0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype5.png": l0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype4.png": d0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype3.png": w0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype2.png": u0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/CStype1.png": b0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/10.png": v0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/wheel.png": m0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/vector.png": y0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/upload_icon.png": f0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/upload_add.png": A0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/switch.png": h0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/newmissingviebg.png": _0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/newmissingbg.png": S0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/missningLBg.png": j0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/missningBg.png": $0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/missingviebg.png": G0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/close.png": L0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/ar_wallet.png": I0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_wallet_select.svg": k0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_wallet.svg": T0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_promotion_select.svg": R0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_promotion.svg": C0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_main_select.svg": P0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_main.svg": D0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_home_select.svg": E0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_home.svg": B0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_activity_select.svg": x0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wg_activity.svg": O0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType9.svg": M0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType8.svg": W0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType7.svg": U0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType6.svg": N0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType5.svg": V0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType4.svg": F0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType3.svg": H0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType2.svg": q0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType12.svg": K0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType11.svg": z0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType10.svg": X0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/weeklyType1.svg": J0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/watchCollection.svg": Y0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/warningTriangle.svg": Q0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet_game.svg": Z0.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet2.svg": e7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet1.svg": s7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet.svg": t7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/voice.svg": n7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/vipRebateLight.svg": a7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/vipRebateDark.svg": o7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/video.svg": p7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/versionUpdate.svg": c7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/verify.svg": i7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/user.svg": g7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdtLogo3.svg": r7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdt4.svg": l7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdt3.svg": d7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdt2.svg": w7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/usdt1.svg": u7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/uploadIcon.svg": b7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/upi.svg": v7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/trxquestion.svg": m7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/trxGame.svg": y7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/transf_amount.svg": f7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ticket.svg": A7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/super_no.svg": h7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/super_1.svg": _7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/superJackpotRule.svg": S7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/success.svg": j7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/subtract.svg": $7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/sport.svg": G7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/slot.svg": L7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/shuoming.svg": I7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/share.svg": k7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/serverTicket1.svg": T7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/serverTicket.svg": R7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/serverIcon.svg": C7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/searchBtn.svg": P7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/saveWallet.svg": D7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/safeIcon.svg": E7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ruleHead.svg": B7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/round.svg": x7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/rightTriangle.svg": O7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/rightCircle.svg": M7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/resultanbg.svg": W7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/refreshBalance.svg": U7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/recordFilter.svg": N7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/receivedSuccessfuly.svg": V7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/rebateRealTime.svg": F7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/rebate.svg": H7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_wallet_a.svg": q7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_wallet.svg": K7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_profile_a.svg": z7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_profile.svg": X7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_games_a.svg": J7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_games.svg": Y7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_affiliate_a.svg": Q7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_affiliate.svg": Z7.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_activity_a.svg": e4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/raja_activity.svg": s4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/quickpay2.svg": t4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/promotionData.svg": n4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/promotion2.svg": a4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/promotion.svg": o4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointRule.svg": p4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointRecord.svg": c4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointPlus.svg": i4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointMinus.svg": g4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointFrame.svg": r4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointDetail.svg": l4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointCopy.svg": d4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pointCancel.svg": w4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/point.svg": u4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pix.svg": b4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_wallet.svg": v4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_promotion.svg": m4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_main.svg": y4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_home.svg": f4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/pink_activity.svg": A4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/phonepe.svg": h4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/phone.svg": _4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/paytm.svg": S4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_wallet.svg": j4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_sel_wallet.svg": $4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_sel_promotion.svg": G4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_sel_main.svg": L4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_sel_home.svg": I4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_sel_activity.svg": k4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_promotion.svg": T4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_main.svg": R4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_home.svg": C4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p5_activity.svg": P4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_wallet.svg": D4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_promotion.svg": E4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_main.svg": B4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_home.svg": x4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p4_activity.svg": O4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3more.svg": M4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3a_r.svg": W4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3a_l.svg": U4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_wallet_a.svg": N4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_wallet.svg": V4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_promotion_a.svg": F4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_promotion.svg": H4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_main_a.svg": q4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_main.svg": K4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_home_a.svg": z4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_home.svg": X4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_activity_a.svg": J4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3_activity.svg": Y4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Service.svg": Q4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Notification.svg": Z4.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Language.svg": e3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Guide.svg": s3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3Down.svg": t3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/p3About.svg": n3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/output.svg": a3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/odds.svg": o3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/oddBg.svg": p3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/notificationIcon.svg": c3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/noticeBarSpeaker.svg": i3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/nbg.svg": g3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/navInfomation.svg": r3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/name.svg": l3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/more.svg": d3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/mobikwik.svg": w3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/messageIconRed.svg": u3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/messageGarbage.svg": b3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/message.svg": v3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuSlots.svg": m3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuOriginals.svg": y3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuMore.svg": f3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuLottery.svg": A3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/menuHome.svg": h3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/maintenace.svg": _3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/main.svg": S3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/lottyWallet.svg": j3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/lottery.svg": $3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/invitation.svg": G3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/income.svg": L3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ifscCode.svg": I3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/iconservr-r.svg": k3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/icon_recommend.svg": T3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/icon_hot.svg": R3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/icon_customer3.svg": C3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/icon_addwallet.svg": P3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/howpay.svg": D3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/hotIcon.svg": E3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/hot.svg": B3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/home.svg": x3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/historyHead.svg": O3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/hint.svg": M3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/googleValidation.svg": W3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/giftHistory.svg": U3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_moneyb.svg": N3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_money.svg": V3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/freeCharge.svg": F3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/flash.svg": H3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/fish.svg": q3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/eye.svg": K3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/errorTip.svg": z3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/empty.svg": X3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/email.svg": J3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/editPswIcon.svg": Y3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/editMain.svg": Q3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/edit.svg": Z3.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/dropDown.svg": e8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/downArrow.svg": s8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/down1.svg": t8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/down.svg": n8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/diamond.svg": a8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/dialogNickname.svg": o8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/detail.svg": p8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/deleteMain.svg": c8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/customer_b.svg": i8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/customer_2.svg": g8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/customerPublic.svg": r8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/customer1.svg": l8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/copy4d.svg": d8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/copy.svg": w8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/close.svg": u8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/clock_b.svg": b8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/chess.svg": v8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/chat.svg": m8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/changlong.svg": y8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/cart.svg": f8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bookicon.svg": A8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankWave.svg": h8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankTitle.svg": _8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankName.svg": S8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankKbz.svg": j8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankHeader.svg": $8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bankCard.svg": G8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/bank.svg": L8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/arrLeft.svg": I8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/arpay2.svg": k8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/arpay1.svg": T8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/anbg.svg": R8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/all.svg": C8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/airtel.svg": P8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/address.svg": D8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/add_icon.svg": E8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/activityWallet.svg": B8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/activityNote.svg": x8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/activity.svg": O8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/act_notic.svg": M8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/actNewGift.svg": W8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ac_private.svg": U8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ac_fast.svg": N8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ac_download.svg": V8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ac_down.svg": F8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/SearchTrx.svg": H8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Rectan.svg": q8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Line.svg": K8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Language.svg": z8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Circle2.svg": X8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Circle1.svg": J8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/ArPayBackground.svg": Y8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/vsImg.jpg": Q8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/video1.png": Z8.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/updateImg.png": e9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/step.png": s9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/load.png": t9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/supportService.png": n9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/invite_wheel.png": a9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/active_b.svg": o9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/active.svg": p9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_wallet_a.png": c9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_wallet.png": i9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_main_a.png": g9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_main.png": r9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_index_a.png": l9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_index.png": d9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_home_a.png": w9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_home.png": u9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_activity_a.png": b9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/t7_activity.png": v9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/p5bgTabBar/home.png": m9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/wallet_active.png": y9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/wallet.png": f9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/promotion_active.png": A9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/promotion.png": h9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/main_active.png": _9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/main.png": S9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/home_active.png": j9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/home.png": $9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/activity_active.png": G9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/tabBarIcons/okwin/activity.png": L9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/weal5.png": I9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/weal4.png": k9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/weal3.png": T9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/5.png": R9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/4.png": C9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/3.png": P9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/2.png": D9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/weal/1.png": E9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/myWelfare/welfare5.png": B9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/myWelfare/welfare4.png": x9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/myWelfare/welfare3.png": O9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/myWelfare/welfare2.png": M9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/myWelfare/welfare1.png": W9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/ununlocked.png": U9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/HaveReached.png": N9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/9.png": V9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/8.png": F9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/7.png": H9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/6.png": q9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/5.png": K9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/4.png": z9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/3.png": X9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/2.png": J9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/10.png": Y9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/1.png": Q9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/grade/0.png": Z9.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/9.png": ed.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/8.png": sd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/7.png": td.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/6.png": nd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/5.png": ad.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/4.png": od.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/3.png": pd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/2.png": cd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/10.png": id.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/1.png": gd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/RebateDetails/0.png": rd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/tobePay/thirdPartyLogo.png": ld.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/tobePay/fast.png": dd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/tobePay/explain.png": wd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/tobePay/QRCode.png": ud.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/₫.png": bd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/฿.png": vd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/unchecked.png": md.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/succeed.png": yd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/safety.png": fd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/refresh.png": Ad.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/pwd.png": hd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/momo.png": _d.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/line.png": Sd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/historyHead.png": jd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/fail.png": $d.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/delete.png": Gd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/clear.png": Ld.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/checked.png": Id.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bg2.png": kd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bg1.png": Td.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankLogo1.png": Rd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/balance.png": Cd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/add.png": Pd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/E-wallet.png": Dd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/BankCard.png": Ed.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/wallettobank.png": Bd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/wait.png": xd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/usdt.png": Od.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/upt_tip.png": Md.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/upi_recharge.png": Wd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/unit_icon.png": Ud.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/unit_active.png": Nd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/trx.png": Vd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/transf_amount.png": Fd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/tip.png": Hd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/timeout.png": qd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/success.png": Kd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/shuoming.png": zd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/setup4_active.png": Xd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/setup4.png": Jd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/setup3_active.png": Yd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/setup3.png": Qd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/setup2_active.png": Zd.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/setup2.png": ew.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/setup1.png": sw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/saveWallet.png": tw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/sanjiao.png": nw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/refresh.png": aw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/quickpay2.png": ow.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/quickpay.png": pw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/qrcode_active.png": cw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/qrcode.png": iw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/point.png": gw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/phone_pe.png": rw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/paytm.png": lw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/other_bank.png": dw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/onlinepay_active.png": ww.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/onlinepay2.png": uw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/onlinepay.png": bw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/online_active.png": vw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/moneyicon.png": mw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/mainChain.png": yw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/left_arrow.png": fw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/google_pay.png": Aw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/gift.png": hw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/fail.png": _w.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/ewallet.png": Sw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/eth.png": jw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/detail_upi_icon.png": $w.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/copy1.png": Gw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/copy.png": Lw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/coin.png": Iw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/close.png": kw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/clean.png": Tw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/cip.png": Rw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/chongzhi.png": Cw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/cancel.png": Pw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/banktobank.png": Dw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/bank_card_active.png": Ew.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/bank_card.png": Bw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/appeal_state.png": xw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/appeal.png": Ow.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/amount_error.png": Mw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/C2Chelp.png": Ww.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/lv.png": Uw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/Lv7.png": Nw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/Lv6.png": Vw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/Lv5.png": Fw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/Lv4.png": Hw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/Lv3.png": qw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/Lv2.png": Kw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/Lv1.png": zw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rule/Lv0.png": Xw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rankList/wallet.png": Jw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rankList/groupSubordinate.png": Yw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rankList/extraBonus.png": Qw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/rankList/directSubordinate.png": Zw.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/promotionShare/trucktick.png": eu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/promotionShare/poster.png": su.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/promotionShare/logo.png": tu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/promotionShare/bg1.png": nu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/promotionShare/bank.png": au.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/commission/line.png": ou.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/commission/bg.png": pu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/commission/betInfoStep.png": cu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/TeamReport/roundIcon.png": iu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/TeamPartner/box.png": gu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/promotion/TeamPartner/banner.png": ru.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/tip.png": lu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/phoneactive.png": du.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/phone.png": wu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/otheractive.png": uu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/other.png": bu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/forgetpassword.png": vu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/emailnumber.png": mu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/emailactive.png": yu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/email.png": fu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/login/newlogin/customer.png": Au.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/promotion/totalIncomeBg.png": hu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/promotion/heroImg.png": _u.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/stage.png": Su.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/place3.png": ju.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/place2.png": $u.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/place1.png": Gu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/crown3.png": Lu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/crown2.png": Iu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/crown1.png": ku.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/border3.png": Tu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/border2.png": Ru.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/DailyProfitRank/border1.png": Cu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/images/main/headerBg.png": Pu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwin2/home2.svg": Du.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwin2/home1.svg": Eu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/winning.png": Bu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/video_icon.png": xu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/video.png": Ou.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/sport_icon.png": Mu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/sport.png": Wu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/slot_icon.png": Uu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/slot.png": Nu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/rank_icon.png": Vu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/popular_icon.png": Fu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/popular.png": Hu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/notice.png": qu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/message.png": Ku.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/lottery_icon.png": zu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/lottery.png": Xu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/flash_icon.png": Ju.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/flash.png": Yu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/fish_icon.png": Qu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/fish.png": Zu.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/download.png": eb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/crown3.png": sb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/crown2.png": tb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/crown1.png": nb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/chess_icon.png": ab.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/chess.png": ob.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/SMG_wildfireWins.png": pb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/SMG_777Surge.png": cb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/SMG_10000Wishes.png": ib.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/Lottery_WinGo.png": gb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/DailyProfitRankStage.png": rb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/98.png": lb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/9014.png": db.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/9013.png": wb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/800.png": ub.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/51.png": bb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/42.png": vb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/223.png": mb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/14025.png": yb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/109.png": fb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/103.png": Ab.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/okwinHome/100.png": hb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/wingo4.png": _b.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/wingo30.png": Sb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/wingo3.png": jb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/wingo2.png": $b.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/wingo1.png": Gb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/trx16.png": Lb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/trx15.png": Ib.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/trx14.png": kb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/trx13.png": Tb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/rule-r.png": Rb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/k39.png": Cb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/k312.png": Pb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/k311.png": Db.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/k310.png": Eb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/d58.png": Bb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/d57.png": xb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/d56.png": Ob.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/d55.png": Mb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/XOSO_bg.png": Wb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/Win Go_bg.png": Ub.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/VideoWinGo_bg.png": Nb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/VideoWinGo23.png": Vb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/Trx Win Go_bg.png": Fb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/Motorace17.png": Hb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/MotoRace_bg.png": qb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/K3_bg.png": Kb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/FXOSO_bg.png": zb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/Bingo18_bg.png": Xb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/5D_bg.png": Jb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/lottery/4D_bg.png": Yb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/wingo.png": Qb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/trx.png": Zb.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/top3.png": ev.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/top2.png": sv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/top1.png": tv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/search_icon.svg": nv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/message.svg": av.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/k3.png": ov.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/icons/5d.png": pv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/videoActive.png": cv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/video.png": iv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/sportActive.png": gv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/sport.png": rv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/slotActive.png": lv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/slot.png": dv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/popularActive.png": wv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/popular.png": uv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/lotteryActive.png": bv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/lottery.png": vv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/flashActive.png": mv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/flash.png": yv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/fishActive.png": fv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/fish.png": Av.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/chessActive.png": hv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/chess.png": _v.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/bgOld.png": Sv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/bgActiveOld.png": jv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/bgActive.png": $v.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/gameListIcons/bg.png": Gv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/wingo4.png": Lv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/wingo30.png": Iv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/wingo3.png": kv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/wingo2.png": Tv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/wingo1.png": Rv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/trx16..png": Cv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/trx15.png": Pv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/trx14.png": Dv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/trx13.png": Ev.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/motorace17.png": Bv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/k39.png": xv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/k312.png": Ov.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/k311.png": Mv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/k310.png": Wv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/d58.png": Uv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/d57.png": Nv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/d56.png": Vv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/d55.png": Fv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/bigMumbai/VideoWinGo23.png": Hv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/videoActive.png": qv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/video.png": Kv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/tabActive.png": zv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/tab.png": Xv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/sportActive.png": Jv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/sport.png": Yv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/slotActive.png": Qv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/slot.png": Zv.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/popularActive.png": em.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/popular.png": sm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/lotteryActive.png": tm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/lottery.png": nm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/flashActive.png": am.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/flash.png": om.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/fishActive.png": pm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/fish.png": cm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/chessActive.png": im.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/chess.png": gm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/bgActive.png": rm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/bg.png": lm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/allActive.png": dm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllGames/all.png": wm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/transAction/trans.png": um.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/transAction/ar-trans.png": bm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Super/icon.png": vm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Super/close.svg": mm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Super/Grouptip.png": ym.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Super/Group.png": fm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/zs.png": Am.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/wallet.png": hm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/superjackpotHome.png": _m.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/ruleicon.png": Sm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/right.png": jm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/promptImg.png": $m.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Laundry/Vector.png": Gm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/7.png": Lm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/6.png": Im.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/5.png": km.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/47.png": Tm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/46.png": Rm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/45.png": Cm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/44.png": Pm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/42.png": Dm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/41.png": Em.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/4.png": Bm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/38.png": xm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/37.png": Om.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/35.png": Mm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/30.png": Wm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/3.png": Um.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/29.png": Nm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/27.png": Vm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/26.png": Fm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/24.png": Hm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/23.png": qm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/22.png": Km.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/21.png": zm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/20.png": Xm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/2.png": Jm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/19.png": Ym.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/18.png": Qm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/17.png": Zm.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/16.png": ey.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/12.png": sy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/11.png": ty.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/10.png": ny.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/1.png": ay.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/-1.png": oy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/9.png": py.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/8.png": cy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/7.png": iy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/6.png": gy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/5.png": ry.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/4.png": ly.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/3.png": dy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/20.png": wy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/2.png": uy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/19.png": by.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/18.png": vy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/17.png": my.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/16.png": yy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/15.png": fy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/14.png": Ay.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/13.png": hy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/12.png": _y.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/11.png": Sy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/10.png": jy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/Avatar/1.png": $y.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_wallet_a.png": Gy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_wallet.png": Ly.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_promotion_a.png": Iy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_promotion.png": ky.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_main_a.png": Ty.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_main.png": Ry.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_home.png": Cy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_activity_a.png": Py.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/yellow_activity.png": Dy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_wallet_a.png": Ey.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_wallet.png": By.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_promotion_a.png": xy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_promotion.png": Oy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_main_a.png": My.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_main.png": Wy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_home.png": Uy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_activity_a.png": Ny.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/t6_activity.png": Vy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/ar064_home_a.png": Fy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/common/tabbar/ar064_home.png": Hy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/TurnTable/refresh.svg": qy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/TurnTable/eventDescriptionArrow.svg": Ky.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/TurnTable/activityRulesBackground.svg": zy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/TurnTable/activityRule.svg": Xy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/TurnTable/activityIntro.svg": Jy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/TurnTable/activityDetail.svg": Yy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/YGG.svg": Qy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Wickets9.svg": Zy.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/WM_Video.svg": ef.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/WM.svg": sf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/V8Card.svg": tf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/TURBO.svg": nf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/TB_Chess.svg": af.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/TB.svg": of.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Spribe2.svg": pf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/SaBa.svg": cf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/SPRIBE.svg": gf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/SEXY_Video.svg": rf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/SEXY.svg": lf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/PP.svg": df.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/PG.svg": wf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Marbles.svg": uf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/MG_Video.svg": bf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/MG_Fish.svg": vf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/MG.svg": mf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Lottery.svg": yf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/KoolBet.svg": ff.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/JOKER.svg": Af.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/JILI.svg": hf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/JDB.svg": _f.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/INOUT.svg": Sf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/IM.svg": jf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Hacksaw.svg": $f.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/HackMD.svg": Gf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/HB.svg": Lf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/G9.svg": If.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/EVO_Video.svg": kf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/EVO_Electronic.svg": Tf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/EVOPlay.svg": Rf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/EVO.svg": Cf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/DG.svg": Pf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/Card365.svg": Df.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/CQ9.svg": Ef.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/CMD.svg": Bf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/BetSoft.svg": xf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/BGAMING.svg": Of.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/BB.svg": Mf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/AG_Video.svg": Wf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/AG_Sport.svg": Uf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/AG_Fish.svg": Nf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/AG_Electronic.svg": Vf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/game_logo/AG.svg": Ff.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/SuperJackpot/winningStar.svg": Hf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/SuperJackpot/rule.svg": qf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/team_port.svg": Kf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/team_partner.svg": zf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/teamSubordinates.svg": Xf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/subordinate.svg": Jf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/server.svg": Yf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/rebateRatio.svg": Qf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/invite_reg.svg": Zf.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/directSubordinates.svg": eA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/copy_Code.svg": sA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Promotion/commission.svg": tA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/widthdrawBlue.svg": nA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/weal5.svg": aA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/weal4.svg": oA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/weal3.svg": pA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/wallets.svg": cA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/versionUpdateIcon.svg": iA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/vault.svg": gA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/tradeHistory.svg": rA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/tournament.svg": lA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/statsIcon.svg": dA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/rechargeIcon.svg": wA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/rechargeHistory.svg": uA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/productCode.svg": bA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/pointsSmallIncon.svg": vA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/points.svg": mA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/notification.svg": yA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/myWithdrawHistory.svg": fA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/myDraw.svg": AA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/messageIcon.svg": hA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/love.svg": _A.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/logout.svg": SA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/language.svg": jA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/googleIcon.svg": $A.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/gifts.svg": GA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/editIcon.svg": LA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/diamond.svg": IA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/crown.svg": kA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/betHistory.svg": TA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/VipIcon.svg": RA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/ar14-winner.svg": CA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-withdraw_btn.svg": PA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-winner.svg": DA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-vip.svg": EA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-up.svg": BA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-turntable.svg": xA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-top1.svg": OA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-refresh.svg": MA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-recharge_btn.svg": WA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-rank_bg.svg": UA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-rank.svg": NA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-point.svg": VA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-notice.svg": FA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-message_notice.svg": HA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-homeDown.svg": qA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-gold.svg": KA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/91club/91-down.svg": zA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/swipe/PhonePe.png": XA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/swipe/Paytm.png": JA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/success.svg": YA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/fail.svg": QA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/PhonePe_bg_active.png": ZA.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/PhonePe_bg.png": eh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/PhonePe.svg": sh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/PhonePe.png": th.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Paytm_bg_active.png": nh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Paytm_bg.png": ah.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Paytm.svg": oh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Paytm.png": ph.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Other_Bank.svg": ch.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Other Bank.png": ih.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/Mobikwik.png": gh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/GooglePay.svg": rh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/icon/GooglePay.png": lh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/bank/s4.png": dh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/bank/s3.png": wh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/bank/s2.png": uh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/bank/s1.png": bh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Turntable/zp.png": vh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Turntable/turntable.png": mh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Turntable/money.png": yh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Turntable/btn.png": fh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Turntable/bg.png": Ah.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/MemberPackage/head.png": hh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/MemberPackage/box.png": _h.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/MemberPackage/bg.png": Sh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Home/superJackpot.png": jh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Home/memberGift.png": $h.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Home/invitationBonus.png": Gh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Home/activityReward.png": Lh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Home/BettingRebate.png": Ih.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/verified.png": kh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/treasure.png": Th.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/ticket.png": Rh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/successfullyReceived.png": Ch.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/successfullyParticipatedBottom.png": Ph.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/successfullyParticipatedBg.png": Dh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/statusBg.png": Eh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/rule.png": Bh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/redeemdBg.png": xh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/redDiamondSm.png": Oh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/redDiamond.png": Mh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/recycleBin.png": Wh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/recordHeaderBg.png": Uh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/record.png": Nh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/pointsIcon.png": Vh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/plus.png": Fh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/output.png": Hh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderSentImg.png": qh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderSent.png": Kh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderPendingImg.png": zh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderPending.png": Xh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderItemDetail.png": Jh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderCompletedImg.png": Yh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderCompleted.png": Qh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderCanceledImg.png": Zh.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderCanceled.png": e_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderCancelWarn.png": s_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/orderCancelSuccess.png": t_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/notice.png": n_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/minus.png": a_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/luckyNumber.png": o_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/lotteryReceiver.png": p_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/lotteryContact.png": c_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/loading.png": i_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/iphone14.png": g_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/income.png": r_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/headerBodyBg.png": l_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/headerBg.png": d_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/forbhidden.png": w_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/empty.png": u_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/editDefault.png": b_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/edit.png": v_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/dropdownWhite.png": m_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/dropdownRed.png": y_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/dropdown.png": f_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/diamond.png": A_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/copy.png": h_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/confirm.png": __.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/coin.png": S_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/close.png": j_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/claimRuleBg.png": $_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/cart.png": G_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/PointMall/addAddress.png": L_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailySignIn/day7BgActive.png": I_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailySignIn/day7Bg.png": k_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailySignIn/coin.png": T_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailySignIn/ar-headerBg.png": R_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailySignIn/Unsigned.png": C_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailySignIn/Signed.png": P_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailySignIn/SignInTop.png": D_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Championship/3.png": E_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Championship/2.png": B_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Championship/1.png": x_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/taskIcon5.png": O_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/taskIcon4.png": M_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/taskIcon3.png": W_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/taskIcon2.png": U_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/taskIcon1.png": N_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/stepperIcon.png": V_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/signInBanner.png": F_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/recordIcon.png": H_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/present.png": q_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/new.png": K_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/giftRedeem.png": z_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/friends.png": X_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/dualArrow.png": J_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/confirmationReceived.png": Y_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/close.png": Q_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/award_bg.png": Z_.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/awardRecord.png": eS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/awardImg.png": sS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/ar_award_bg.png": tS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/amountIcon.png": nS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/activityIcon5.png": aS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/activityIcon4.png": oS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/activityIcon3.png": pS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/activityIcon2.png": cS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/activityIcon1.png": iS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/PointsMallBanner.png": gS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/DailyTaskHero.png": rS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/DailyTaskBanner.png": lS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/DailyTask/DailyCheckInBanner.png": dS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/activity/Attendance/activityAttendance.png": wS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/9.png": uS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/8.png": bS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/7.png": vS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/6.png": mS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/5.png": yS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/4.png": fS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/3.png": AS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/2.png": hS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/10.png": _S.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/logo/1.png": SS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/crown/2.png": jS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/crown/1.png": $S.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg9.png": GS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg8.png": LS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg7.png": IS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg6.png": kS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg5.png": TS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg4.png": RS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg3.png": CS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg2.png": PS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg10.png": DS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/vip/swiper/bg/bg1.png": ES.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/WavePay.png": BS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/KBZpay.png": xS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/8.png": OS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/6.png": MS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/5.png": WS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/4_ns.png": US.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/4.png": NS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/3.png": VS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/10.png": FS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawType/1.png": HS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/moonBar.png": qS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/bc.png": KS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/all_NS.png": zS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/all.png": XS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/8_NS.png": JS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/8.png": YS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/6_NS.png": QS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/6.png": ZS.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/5_NS.png": ej.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/5.png": sj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/4_NS.png": tj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/4.png": nj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/3_NS.png": aj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/3_1.png": oj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/3.png": pj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/20_NS.png": cj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/20.png": ij.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/1_NS.png": gj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/10_NS.png": rj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/10.png": lj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/1.png": dj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/searchIcon2.png": wj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/phone.png": uj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/name.png": bj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/ifscCode.png": vj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/email.png": mj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/bankLogo.png": yj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/bankHeader2.png": fj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/bankHeader1.png": Aj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/bankCard.png": hj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/bank.png": _j.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/address.png": Sj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/5.png": jj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/3.png": $j.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/21.png": Gj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/bankCard/1.png": Lj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/USDT/usdtLogo3.png": Ij.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/USDT/usdt.png": kj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/USDT/scan.png": Tj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/USDT/network.png": Rj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/USDT/bankHeader.png": Cj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/USDT/anotherNamer.png": Pj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/USDT/address.png": Dj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/wrong_1.png": Ej.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/wrong.png": Bj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/uploadVideo1.png": xj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/uploadVideo.png": Oj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/uploadImg1.png": Mj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/upiline.png": Wj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/upi.png": Uj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/uAmount.png": Nj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/successicon.png": Vj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/seleteBank.png": Fj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/selectupi.png": Hj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/safety.png": qj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon8.png": Kj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon7.png": zj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon6.png": Xj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon5.png": Jj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon4.png": Yj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon3.png": Qj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon2.png": Zj.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon14.png": e$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon1.png": s$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/hicon0.png": t$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/delBtn.png": n$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/copy-icon.png": a$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/confirmA.png": o$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/c2clogo_a.png": p$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/c2clogo.png": c$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/bg11.png": i$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/bank.png": g$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/appeal.png": r$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/add.png": l$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/CancelW.png": d$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/4.png": w$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/3.png": u$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/2.png": b$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/1.png": v$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/EWallet/wallet.png": m$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/EWallet/momo.png": y$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/EWallet/cards.png": f$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/EWallet/bankHeader.png": A$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/detail/wave_icon.png": h$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/detail/wave.png": _$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/detail/slot_wallet.png": S$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/detail/kbz_icon.png": j$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/detail/kbz.png": $$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/detail/bank.png": G$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/detail/appeal.png": L$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/changlong/icon-wg.png": I$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/changlong/icon-k3.png": k$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/changlong/icon-5d.png": T$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/trend_go.png": R$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/trend3.png": C$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/trend2.png": P$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/trend1.png": D$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/top_3.png": E$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/top_2.png": B$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/top_1.png": x$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/rule_tip.png": O$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_6.png": M$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_5.png": W$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_4.png": U$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_3.png": N$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_2.png": V$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/rule_dice_1.png": F$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/rule_bg.png": H$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/record_icon.png": q$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/record.png": K$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/lock_money.png": z$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/icon.png": X$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/hot_top.png": J$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/hot_bg.png": Y$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/hidden_money.png": Q$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/dice_6.png": Z$.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/dice_5.png": eG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/dice_4.png": sG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/dice_3.png": tG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/dice_2.png": nG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/dice_1.png": aG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/count_icon.png": oG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/binguo_tip.png": pG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/binguo_time.png": cG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/bet_tip.png": iG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/binguo/add.png": gG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/wingoissue.png": rG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/voice.png": lG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/voice-off.png": dG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/time_a.png": wG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/time.png": uG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/rule-r.png": bG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/refireshIcon.png": vG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n9.png": mG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n8.png": yG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n7.png": fG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n6.png": AG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n5.png": hG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n4.png": _G.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n3.png": SG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n2.png": jG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n1.png": $G.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/n0.png": GG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/kefu.png": LG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/headlogo.png": IG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/copy.png": kG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/bcakIcon.png": TG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/agree-b.png": RG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/agree-a.png": CG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinGo/PreSaleBg.png": PG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/wallet.png": DG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/tip.png": EG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/ticketstar.png": BG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/success.png": xG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/right.png": OG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/right-border.png": MG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/notwinning.png": WG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/middle.png": UG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/left.png": NG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/left-border.png": VG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/fail.png": FG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/detail.png": HG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/close.png": qG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg5.png": KG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg4.png": zG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg3.png": XG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg2.png": JG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/bg1.png": YG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/arrowbottom.png": QG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/WalletBg.png": ZG.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/NewVietnam/Star.png": eL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/trxbg.png": sL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/timeb.png": tL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/timea.png": nL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeF.png": aL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeE.png": oL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeD.png": pL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeC.png": cL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeB.png": iL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prizeA.png": gL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize9.png": rL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize8.png": lL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize7.png": dL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize6.png": wL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize5.png": uL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize4.png": bL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize3.png": vL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize2.png": mL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize1.png": yL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/prize0.png": fL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/numF.png": AL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/numE.png": hL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/numD.png": _L.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/numC.png": SL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/numB.png": jL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/numA.png": $L.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num9.png": GL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num8.png": LL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num7.png": IL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num6.png": kL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num5.png": TL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num4.png": RL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num3.png": CL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num2.png": PL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num1.png": DL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/num0.png": EL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/WinTrx/icon-tip.png": BL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/redBall.png": xL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/n7.png": OL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/n6.png": ML.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/n5.png": WL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/n4.png": UL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/n3.png": NL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/n2.png": VL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/n1.png": FL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/greenBall.png": HL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/K3/bitactive.png": qL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/4D/success.png": KL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/4D/fail.png": zL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/4D/arr-right.svg": XL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/home/AllLotteryGames/4D/arr-left.svg": JL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/7.png": YL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/6.png": QL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/5.png": ZL.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/47.png": eI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/46.png": sI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/45.png": tI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/44.png": nI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/42.png": aI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/41.png": oI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/4.png": pI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/38.png": cI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/37.png": iI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/35.png": gI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/30.png": rI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/3.png": lI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/29.png": dI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/27.png": wI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/26.png": uI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/24.png": bI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/23.png": vI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/22.png": mI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/21.png": yI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/20.png": fI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/2.png": AI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/19.png": hI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/18.png": _I.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/17.png": SI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/16.png": jI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/12.png": $I.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/11.png": GI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/10.png": LI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/1.png": II.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/main/BetRecord/acitve/-1.png": kI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet/withdrawType/usdtLogo3.svg": TI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet/withdrawType/5.svg": RI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/wallet/withdrawType/1.svg": CI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/ServiceCenter/settingCenter.svg": PI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/ServiceCenter/serviceCenter.svg": DI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/ServiceCenter/notificationCenter.svg": EI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/ServiceCenter/guide.svg": BI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/ServiceCenter/feedback.svg": xI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/ServiceCenter/about.svg": OI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/AboutUs/riskProtocal.svg": MI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/svg/Account/AboutUs/privacyIcon.svg": WI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/phonepe/3.png": UI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/phonepe/2.png": NI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/phonepe/1.png": VI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/mobikwik/3.png": FI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/mobikwik/2.png": HI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/mobikwik/1.png": qI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/paytm/3.png": KI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/paytm/2.png": zI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/paytm/1.png": XI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/freeCharge/3.png": JI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/freeCharge/2.png": YI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/freeCharge/1.png": QI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/airtel/3.png": ZI.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/airtel/2.png": ek.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/arupi/kycbank/airtel/1.png": sk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/state/3.png": tk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/state/2.png": nk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/state/1.png": ak.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/withdrawHistory/state/0.png": ok.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/rechargeRecords/state/4.png": pk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/rechargeRecords/state/3.png": ck.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/rechargeRecords/state/2.png": ik.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/rechargeRecords/state/1.png": gk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/recharge/rechargeRecords/state/0.png": rk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/other/4_a.png": lk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/other/4.png": dk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/other/3_a.png": wk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/other/3.png": uk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/other/2_a.png": bk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/other/2.png": vk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/other/1_a.png": mk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/other/1.png": yk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/3/4_a.png": fk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/3/4.png": Ak.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/3/3_a.png": hk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/3/3.png": _k.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/3/2_a.png": Sk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/3/2.png": jk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/3/1_a.png": $k.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/3/1.png": Gk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/11/4.png": Lk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/11/3.png": Ik.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/11/2.png": kk.replace(/\.(jpg|png)$/, ".webp"),
    "../assets/icons/wallet/withdraw/c2c/progress/11/1.png": Tk.replace(/\.(jpg|png)$/, ".webp")
};
let Vt = {};
const Ft = e => {
    Vt = {
        RechargeState: [{
            key: e("all"),
            value: -1
        }, {
            key: e("titleToBePaid"),
            value: 0
        }, {
            key: e("completed"),
            value: 1
        }, {
            key: e("rechargeState4"),
            value: 2
        }],
        RechargeC2CState: [{
            key: e("payments"),
            value: 0
        }, {
            key: e("c2cState1"),
            value: 1
        }, {
            key: e("c2cState3"),
            value: 3
        }, {
            key: e("timeOut"),
            value: 7
        }, {
            key: e("c2cState4"),
            value: 4
        }, {
            key: e("rechargeState4"),
            value: 5
        }, {
            key: e("cancelled"),
            value: 6
        }],
        WithdrawState: [{
            key: e("withdrawStatem1"),
            value: -1
        }, {
            key: e("withdrawState0"),
            value: 0
        }, {
            key: e("rechargeState2"),
            value: 1
        }, {
            key: e("withdrawState2"),
            value: 2
        }, {
            key: e("withdrawing"),
            value: 3
        }],
        C2cState: [{
            key: e("withdrawStatem1"),
            value: -1
        }, {
            key: e("c2cState0"),
            value: 0
        }, {
            key: e("c2cState1"),
            value: 1
        }, {
            key: e("c2cState2"),
            value: 2
        }, {
            key: e("c2cState3"),
            value: 3
        }, {
            key: e("c2cState4"),
            value: 4
        }, {
            key: e("c2cTip9"),
            value: 5
        }, {
            key: e("c2cState6"),
            value: 6
        }, {
            key: e("c2cState7"),
            value: 7
        }, {
            key: e("c2cState8"),
            value: 8
        }, {
            key: e("c2cState9"),
            value: 9
        }],
        RecharegeStatus: [{
            key: e("rechargeState0"),
            value: 0
        }, {
            key: e("rechargeState1"),
            value: 1
        }, {
            key: e("rechargeState2"),
            value: 2
        }, {
            key: e("rechargeState3"),
            value: 3
        }, {
            key: e("rechargeState4"),
            value: 4
        }],
        RechargeType: [{
            key: e("code9200"),
            value: 1
        }, {
            key: e("code9201"),
            value: 2
        }, {
            key: e("code9206"),
            value: 9
        }, {
            key: "USDT",
            value: 11
        }, {
            key: "KBZ",
            value: 13
        }, {
            key: "Wave",
            value: 14
        }, {
            key: "TRX",
            value: 16
        }],
        transMoneyTypes: [{
            key: e("all"),
            value: 0
        }, {
            key: e("withdrawalReduce"),
            value: 1
        }, {
            key: e("gameTransOut"),
            value: 2
        }, {
            key: e("gameTransIn"),
            value: 3
        }, {
            key: e("betReduce"),
            value: 4
        }, {
            key: e("jackpotIncre"),
            value: 5
        }, {
            key: e("agencyCommis"),
            value: 6
        }, {
            key: e("manualAccess"),
            value: 7
        }],
        usdtMainNetwork: [{
            key: "USDT-TRC20111",
            value: 1
        }, {
            key: "USDT-TRC20222",
            value: 2
        }],
        EWalletType: [{
            key: "MOMO1",
            value: 1
        }, {
            key: "MOMO2",
            value: 2
        }],
        levelTypes: [{
            key: e("all"),
            value: -1
        }, {
            key: e("downlevel", [1]),
            value: 1
        }, {
            key: e("downlevel", [2]),
            value: 2
        }, {
            key: e("downlevel", [3]),
            value: 3
        }, {
            key: e("downlevel", [4]),
            value: 4
        }, {
            key: e("downlevel", [5]),
            value: 5
        }, {
            key: e("downlevel", [6]),
            value: 6
        }],
        bettingResult: [{
            key: e("bettingResultState1"),
            value: 2
        }, {
            key: e("bettingResultState2"),
            value: 1
        }, {
            key: e("bettingResultState3"),
            value: 0
        }],
        bettingOrderStatus: [{
            key: e("unsettled"),
            value: 0
        }, {
            key: e("settled"),
            value: 1
        }, {
            key: e("invalidbet"),
            value: 2
        }],
        WStateCorrelationT: [{
            value: 0,
            key: e("stateTips1")
        }, {
            value: 1,
            key: e("stateTips2")
        }, {
            value: 2,
            key: e("stateTips3")
        }, {
            value: 3,
            key: e("stateTips4")
        }],
        RStateCorrelationT: [{
            key: e("RStateTips1"),
            value: 1
        }, {
            key: e("RStateTips2"),
            value: 2
        }],
        gameSelectType: [{
            key: "0",
            value: "0"
        }, {
            key: "1",
            value: "1"
        }, {
            key: "2",
            value: "2"
        }, {
            key: "3",
            value: "3"
        }, {
            key: "4",
            value: "4"
        }, {
            key: "5",
            value: "5"
        }, {
            key: "6",
            value: "6"
        }, {
            key: "7",
            value: "7"
        }, {
            key: "8",
            value: "8"
        }, {
            key: "9",
            value: "9"
        }, {
            key: "10",
            value: "10"
        }, {
            key: "11",
            value: "11"
        }, {
            key: "12",
            value: "12"
        }, {
            key: "13",
            value: "13"
        }, {
            key: "14",
            value: "14"
        }, {
            key: "15",
            value: "15"
        }, {
            key: "16",
            value: "16"
        }, {
            key: "17",
            value: "17"
        }, {
            key: "18",
            value: "18"
        }, {
            key: e("numbersUnmatch"),
            value: "ABC"
        }, {
            key: e("numbersMatch"),
            value: "AAA"
        }, {
            key: "22",
            value: "22"
        }, {
            key: "33",
            value: "33"
        }, {
            key: "44",
            value: "44"
        }, {
            key: "55",
            value: "55"
        }, {
            key: "66",
            value: "66"
        }, {
            key: "111",
            value: "111"
        }, {
            key: "222",
            value: "222"
        }, {
            key: "333",
            value: "333"
        }, {
            key: "444",
            value: "444"
        }, {
            key: "555",
            value: "555"
        }, {
            key: "666",
            value: "666"
        }, {
            key: e("small"),
            value: "L"
        }, {
            key: e("big"),
            value: "H"
        }, {
            key: e("odd"),
            value: "O"
        }, {
            key: e("k3Even"),
            value: "E"
        }, {
            key: e("GTBig"),
            value: "big"
        }, {
            key: e("GTSmall"),
            value: "small"
        }, {
            key: e("GTRed"),
            value: "red"
        }, {
            key: e("GTGreen"),
            value: "green"
        }, {
            key: e("GTPurple"),
            value: "violet"
        }, {
            key: "O",
            value: e("GTOdd")
        }, {
            key: "E",
            value: e("GTEven")
        }, {
            key: "L",
            value: e("GTSmall")
        }, {
            key: "H",
            value: e("GTBig")
        }],
        gameAllName: [{
            key: e("sabaSport"),
            value: 14
        }, {
            key: e("cmdSport"),
            value: 8
        }, {
            key: e("agSport"),
            value: 13
        }, {
            key: e("imSport"),
            value: 15
        }, {
            key: e("dgLive"),
            value: 7
        }, {
            key: e("agLive"),
            value: 10
        }, {
            key: e("evoLive"),
            value: 16
        }, {
            key: e("chess365"),
            value: 19
        }, {
            key: e("chessv8"),
            value: 21
        }, {
            key: e("sexyLive"),
            value: 27
        }, {
            key: e("wmLive"),
            value: 26
        }, {
            key: e("wicketsSport"),
            value: 25
        }, {
            key: e("wicketsSport"),
            value: 25
        }, {
            key: "WM" + e("code9306"),
            value: 26
        }, {
            key: "SEXY" + e("code9306"),
            value: 27
        }, {
            key: "BG" + e("code9304"),
            value: 28
        }, {
            key: "BetSoft" + e("code9304"),
            value: 29
        }, {
            key: "YGG" + e("code9304"),
            value: 30
        }, {
            key: "JOKER" + e("code9304"),
            value: 31
        }, {
            key: "PlayNgo" + e("code9304"),
            value: 32
        }, {
            key: "Hacksaw" + e("code9304"),
            value: 33
        }, {
            key: "HackMD" + e("code9304"),
            value: 34
        }, {
            key: "Marbles" + e("code9304"),
            value: 35
        }, {
            key: "Spribe2" + e("code9304"),
            value: 36
        }, {
            key: "MG" + e("code9303"),
            value: 37
        }, {
            key: "MG" + e("code9306"),
            value: 38
        }],
        languageCodes: [{
            value: "en",
            key: 0
        }, {
            value: "id",
            key: 1
        }, {
            value: "vi",
            key: 2
        }, {
            value: "bra",
            key: 3
        }, {
            value: "tha",
            key: 4
        }, {
            value: "th",
            key: 4
        }, {
            value: "zh",
            key: 5
        }, {
            value: "zh-CN",
            key: 5
        }, {
            value: "tw",
            key: 6
        }, {
            value: "md",
            key: 7
        }, {
            value: "bd",
            key: 8
        }, {
            value: "hd",
            key: 9
        }, {
            value: "my",
            key: 10
        }, {
            value: "pk",
            key: 11
        }, {
            value: "ar",
            key: 12
        }, {
            value: "ta",
            key: 13
        }, {
            value: "te",
            key: 14
        }],
        StatusType: [{
            key: e("enableStatus"),
            value: 1
        }, {
            key: e("disabledStatus"),
            value: 0
        }],
        RegionType: [{
            key: e("north"),
            value: "北部"
        }, {
            key: e("central"),
            value: "中央"
        }, {
            key: e("south"),
            value: "南部"
        }],
        gameType: [{
            key: e("lotteryType1"),
            value: 1
        }, {
            key: e("lotteryType2"),
            value: 2
        }, {
            key: e("lotteryType3"),
            value: 3
        }, {
            key: e("lotteryType4"),
            value: 4
        }, {
            key: e("lotteryType5"),
            value: 5
        }],
        gameTabList: [{
            name: e("all"),
            img: "all",
            codeType: -1
        }, {
            name: e("lottery"),
            img: "lottery",
            codeType: 3
        }, {
            name: e("live"),
            img: "video",
            codeType: 1
        }, {
            name: e("chess"),
            img: "chess",
            codeType: 4
        }, {
            name: e("electric"),
            img: "slot",
            codeType: 0
        }],
        VipType: [{
            key: e("receiveSuccess"),
            value: 1
        }, {
            key: e("receiveSuccess"),
            value: 2
        }, {
            key: e("vipcondition"),
            value: 3
        }, {
            key: e("vipcondition"),
            value: 4
        }, {
            key: e("vipTip8"),
            value: 5
        }, {
            key: e("vipTip9"),
            value: 6
        }, {
            key: e("vipTip16"),
            value: 7
        }, {
            key: e("vipTip16"),
            value: 8
        }]
    }
}
  , Rk = (e, s) => {
    const t = e[s];
    return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise( (n, a) => {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + s)))
    }
    )
}
;
let Ck = localStorage.getItem("language") || "en"
  , Js = S({
    en: ca
});
const Te = $n({
    legacy: !1,
    locale: Ck,
    fallbackLocale: "en",
    globalInjection: !0,
    warnHtmlMessage: !1,
    messages: Js.value,
    silentTranslationWarn: !0,
    datetimeFormats: {
        zh: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            },
            long: {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long"
            }
        },
        en: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        rus: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        vi: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        my: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        id: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        hd: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        th: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        md: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        bra: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        bd: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        pk: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        ar: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        ta: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        te: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        }
    }
})
  , Pk = async e => {
    let s = e;
    const t = {
        pk: "pak",
        bd: "bdt",
        th: "tha"
    };
    if (t[e] && (e = t[e]),
    !Js.value[s]) {
        const n = await Rk(Object.assign({
            "./modules/ar.ts": () => r( () => import("./ar-7b41e690.js"), []),
            "./modules/bdt.ts": () => r( () => import("./bdt-ce8e1c1c.js"), []),
            "./modules/bra.ts": () => r( () => import("./bra-e343a299.js"), []),
            "./modules/en.ts": () => r( () => import("./en-8dc3e88f.js"), []),
            "./modules/hd.ts": () => r( () => import("./hd-3f9ce8e4.js"), []),
            "./modules/id.ts": () => r( () => import("./id-d5562ba7.js"), []),
            "./modules/md.ts": () => r( () => import("./md-4258cc4b.js"), []),
            "./modules/my.ts": () => r( () => import("./my-0df20562.js"), []),
            "./modules/pak.ts": () => r( () => import("./pak-81a72f53.js"), []),
            "./modules/ph.ts": () => r( () => import("./ph-1b8a31f6.js"), []),
            "./modules/rus.ts": () => r( () => import("./rus-9845e029.js"), []),
            "./modules/ta.ts": () => r( () => import("./ta-795dc496.js"), []),
            "./modules/te.ts": () => r( () => import("./te-514e83e5.js"), []),
            "./modules/tha.ts": () => r( () => import("./tha-4a47893c.js"), []),
            "./modules/vi.ts": () => r( () => import("./vi-581486b3.js"), []),
            "./modules/zh.ts": () => r( () => import("./zh-25a83295.js"), [])
        }), `./modules/${e}.ts`);
        Js.value[s] = n.default,
        Te.global.setLocaleMessage(s, n.default)
    }
}
;
Ft(Te.global.t);
const Dk = async e => {
    const s = e || zt();
    await Pk(s),
    Te.global.locale.value = s,
    pa(s),
    Ft(Te.global.t)
}
  , mt = e => typeof e == "function"
  , Ek = e => e !== null && typeof e == "object"
  , PP = e => Ek(e) && mt(e.then) && mt(e.catch)
  , DP = e => e != null
  , EP = () => {}
  , Bk = e => e.stopPropagation();
function BP(e, s) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(),
    s && Bk(e)
}
function xP(e) {
    const s = {};
    return e !== void 0 && (s.zIndex = +e),
    s
}
const xk = typeof window < "u"
  , Ht = navigator.userAgent.toLowerCase()
  , qt = xk && /ios|iphone|ipad|ipod/.test(Ht)
  , Ok = /mobi|android|iphone/.test(Ht)
  , Ye = !Ok;
function OP() {
    !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.clearCache.postMessage(null)
}
function $e() {
    var e, s, t;
    return !!((s = (e = window.webkit) == null ? void 0 : e.messageHandlers) != null && s.callNativeMethod || window.external && ((t = window.external) != null && t.callNativeMethod))
}
function Mk() {
    var e, s, t;
    return !!((s = (e = window.webkit) == null ? void 0 : e.messageHandlers) != null && s.callAnalysisEvents || window.external && ((t = window.external) != null && t.callAnalysisEvents))
}
function Wk(e, s) {
    qt ? window.webkit.messageHandlers.callAnalysisEvents.postMessage({
        type: e,
        data: s
    }) : window.external.callAnalysisEvents(JSON.stringify({
        type: e,
        data: s
    }))
}
function js(e, s) {
    qt ? window.webkit.messageHandlers.callNativeMethod.postMessage({
        type: e,
        data: s
    }) : window.external.callNativeMethod(JSON.stringify({
        type: e,
        data: s
    }))
}
function ts(e, s) {
    !e || !s.url || ($e() || (window.location.href = s.url),
    js(e, s))
}
function Uk(e) {
    var s;
    try {
        if (window.external && ((s = window.external) != null && s.dataFromNative))
            return window.external.dataFromNative(JSON.stringify({
                data: {
                    type: e
                }
            }))
    } catch (t) {
        console.error("Error calling dataFromNative:", t)
    }
    return null
}
function yt(e, s, t) {
    var n;
    try {
        if (window.external && ((n = window.external) != null && n.dataFromNative))
            return window.external.dataFromNative(JSON.stringify({
                data: {
                    type: e,
                    event: s,
                    value: t
                }
            }))
    } catch (a) {
        console.error("Error calling dataFromNative:", a)
    }
    return null
}
const Nk = async () => {
    var e;
    try {
        const {Capacitor: s} = await r( () => import("./common.modules-af1f85b9.js").then(t => t.cv), ["assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css"]);
        return ((e = s.getPlatform) == null ? void 0 : e.call(s)) === "android"
    } catch {
        return !1
    }
}
  , Vk = async () => {
    var e;
    try {
        const {Capacitor: s} = await r( () => import("./common.modules-af1f85b9.js").then(t => t.cv), ["assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css"]);
        return ((e = s.getPlatform) == null ? void 0 : e.call(s)) === "ios"
    } catch {
        return !1
    }
}
  , Fk = async () => {
    var e;
    try {
        const {Capacitor: s} = await r( () => import("./common.modules-af1f85b9.js").then(t => t.cv), ["assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css"]);
        return ((e = s.isNativePlatform) == null ? void 0 : e.call(s)) || !1
    } catch {
        return !1
    }
}
  , Hk = async () => {
    try {
        const {Capacitor: e} = await r( () => import("./common.modules-af1f85b9.js").then(s => s.cv), ["assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css"]);
        return e
    } catch {
        return console.error("Capacitor is not available in this environment."),
        null
    }
}
  , qk = Object.freeze(Object.defineProperty({
    __proto__: null,
    getCapacitor: Hk,
    isAndroid: Nk,
    isIOS: Vk,
    isNativePlatform: Fk
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Kk = Bt("AdjustPlugin")
  , zk = Bt("DeviceInfo")
  , Xk = Object.freeze(Object.defineProperty({
    __proto__: null,
    AdjustPlugin: Kk,
    DeviceInfoPlugin: zk
}, Symbol.toStringTag, {
    value: "Module"
}));
Gn({
    duration: 3500
});
function Jk() {
    const e = _s;
    return {
        text: e,
        success: e,
        error: e,
        loading: Ne
    }
}
const {text: ys} = Jk();
let Z = {};
function Ee() {
    var e;
    return (e = window == null ? void 0 : window.NativeBridge) != null && e.getInfoString && (Z = JSON.parse((window == null ? void 0 : window.NativeBridge.getInfoString()) || "{}")),
    Z
}
function Yk() {
    var e;
    return JSON.parse((Z == null ? void 0 : Z.eventList) || ((e = Ee()) == null ? void 0 : e.eventList) || "[]") || []
}
function Qk() {
    var e;
    return (Z == null ? void 0 : Z.invitationCode) || ((e = Ee()) == null ? void 0 : e.invitationCode) || ""
}
function Zk() {
    var e;
    return (Z == null ? void 0 : Z.appId) || ((e = Ee()) == null ? void 0 : e.appId) || ""
}
function eT() {
    var e;
    return (Z == null ? void 0 : Z.deviceId) || ((e = Ee()) == null ? void 0 : e.deviceId) || ""
}
function sT() {
    var e;
    return !!(Z != null && Z.launcher || (e = Ee()) != null && e.launcher)
}
function tT() {
    return (Z.isValidPwd || Ee().isValidPwd) && JSON.parse(Z.isValidPwd || Ee().isValidPwd || "false") || !1
}
function nT() {
    var s;
    const e = (Z == null ? void 0 : Z.apkType) || ((s = Ee()) == null ? void 0 : s.apkType) || "";
    return e ? e === "full_apk" : !1
}
function aT() {
    var s;
    const e = (Z == null ? void 0 : Z.apkType) || ((s = Ee()) == null ? void 0 : s.apkType) || "";
    return e ? e === "quick_apk" : !1
}
function oT(e) {
    var s;
    if ((s = window == null ? void 0 : window.NativeBridge) != null && s.openExternalPage) {
        if (!e) {
            ys("Please provide valid parameters.");
            return
        }
        if (!e.url) {
            ys("Please provide a valid URL.");
            return
        }
        if (!e.returnType) {
            ys("Please provide a valid return type.");
            return
        }
        window == null || window.NativeBridge.openExternalPage(typeof e == "string" ? e : JSON.stringify(e))
    }
}
function pT(e) {
    var s;
    if ((s = window == null ? void 0 : window.NativeBridge) != null && s.openExternalUrl) {
        if (!e || !/^[a-zA-Z]+:\/\//.test(e)) {
            ys("Please provide a valid URL.");
            return
        }
        window == null || window.NativeBridge.openExternalUrl(e)
    }
}
const cT = Object.freeze(Object.defineProperty({
    __proto__: null,
    getDataFromBridge: Ee,
    getDeviceId: eT,
    getEventList: Yk,
    getInvitationCode: Qk,
    getPackId: Zk,
    isEmbeddedApk: aT,
    isFullapk: nT,
    isLauncher: sT,
    isValidPwd: tT,
    openExternalPage: oT,
    openExternalUrl: pT
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ue = {
    ...qk,
    ...Xk,
    ...cT
}
  , iT = Te.global.t;
function gT(e) {
    return e.then(s => [null, s]).catch(s => [s, null])
}
const MP = () => (navigator.language ? navigator.language : navigator.browserLanguage).toLowerCase().slice(0, 2)
  , WP = (e, s) => e == "zh-CN" || e == "zh" ? s != null && s.includes(e) ? "zh-CN" : "en" : e == "bn" ? s != null && s.includes("bdt") ? "bdt" : "en" : e == "pt-br" ? s != null && s.includes("bra") ? "bra" : "en" : s != null && s.toLowerCase().includes(e.split("-")[0]) ? e.split("-")[0] : "en"
  , UP = (e, s, t=!0) => {
    let n = null;
    return function(...a) {
        n || (n = setTimeout( () => {
            !t && e.apply(this, arguments),
            n = null
        }
        , s),
        t && e.apply(this, a))
    }
}
  , NP = e => {
    if (!e)
        return;
    const s = document.createElement("input");
    s.setAttribute("readonly", "readonly"),
    s.setAttribute("value", e.toLocaleString()),
    document.body.appendChild(s),
    s.select(),
    document.execCommand("Copy"),
    document.body.removeChild(s),
    In.showSuccessToast(iT("copySuccess"))
}
  , ss = (e, s, t="png", n="icons") => Ss[`../assets/${Ss.MAINCOLOR}/${n}/${e}/${s}.${t}`] || ""
  , Kt = (e, s, t="png", n="icons") => (e === "languages" && (s === "ta" || s === "te") && (s = "hd"),
Ss[`../assets/${n}/${e}/${s}.${t}`] || "")
  , rT = (e, s) => {
    var n;
    return (n = e.find(a => a.value === s)) == null ? void 0 : n.key
}
  , VP = (e, s) => {
    var t;
    return (t = e.find(n => n.type === s)) == null ? void 0 : t.typeName
}
  , FP = () => {
    const e = document.querySelector("meta[name=viewport]");
    if (e !== null) {
        let s = e.getAttribute("content")
          , t = /maximum\-scale=[0-9\.]+/g;
        t.test(s) ? s = s.replace(t, "maximum-scale=1.0") : s = [s, "maximum-scale=1.0"].join(", "),
        e.setAttribute("content", s)
    }
}
  , HP = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  , qP = () => ({
    today: {
        start: pe().startOf("day").unix(),
        end: pe().endOf("day").unix()
    },
    yesterday: {
        start: pe().subtract(1, "days").startOf("day").unix(),
        end: pe().subtract(1, "days").endOf("day").unix()
    },
    tomorrow: {
        start: pe().subtract(-1, "days").startOf("day").unix(),
        end: pe().subtract(-1, "days").endOf("day").unix()
    },
    last7days: {
        start: pe().subtract(1, "weeks").startOf("day").unix(),
        end: pe().subtract(1, "days").endOf("day").unix()
    },
    thisMonth: {
        start: pe().startOf("months").unix(),
        end: pe().endOf("day").unix()
    },
    lastMonth: {
        start: pe().subtract(1, "months").startOf("month").unix(),
        end: pe().subtract(1, "months").endOf("month").unix()
    }
})
  , KP = (e="", s="", t="", n="-") => [e.toString(), s.toString(), t.toString()].join(n)
  , zP = e => {
    let s = (e == null ? void 0 : e.time) || ""
      , t = (e == null ? void 0 : e.status) || 1
      , n = (e == null ? void 0 : e.format) || "YYYY-MM-DD HH:mm:ss"
      , a = {
        key: "",
        value: []
    };
    function c() {
        return s ? pe(s) : pe()
    }
    let i, l;
    switch (t) {
    case 1:
        n = "YYYY-MM-DD",
        i = c().format(n),
        l = i.split("-");
        break;
    case 2:
        n = "HH:mm:ss",
        i = c().format(n),
        l = i.split(":");
        break;
    case 3:
        n = "YYYY-MM",
        i = c().format(n),
        l = i.split("-");
        break;
    default:
        i = c().format(n);
        let g = i.split(" ")
          , w = g[0].split("-")
          , d = g[1].split(":");
        l = [...w, ...d];
        break
    }
    return a = {
        key: i,
        value: l
    },
    a
}
  , XP = e => {
    const s = new Date(2022,0,1)
      , t = new Date;
    return e == -1 && t.setTime(t.getTime() - 24 * 60 * 60 * 1e3),
    {
        minDate: s,
        maxDate: t
    }
}
  , JP = () => ({
    minDate: new Date(1970,0,1),
    maxDate: new Date
})
  , zt = () => localStorage.getItem("language") || "en";
function lT(e) {
    let s = e === "ar" ? "ar" : "en"
      , t = e === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = s,
    document.documentElement.dir = t
}
const Xt = () => {
    const e = rT(Vt.languageCodes, localStorage.getItem("language") || "en");
    return e === void 0 ? 0 : e
}
  , YP = (e, s, t) => {
    if (e) {
        let n = e.toString();
        if (t == 1) {
            let c = parseFloat(n).toFixed(2);
            c.charAt(c.length - 1) == "0" && (s = 1)
        }
        let a = n.indexOf(".");
        return a !== -1 ? n = n.substring(0, s + a + 1) : n = n.substring(0),
        parseFloat(n).toFixed(s)
    }
}
  , QP = e => {
    if (!e)
        return 0;
    let s = "";
    return e > 1e6 ? (e /= 1e6,
    s = "M") : e > 1e3 && (e /= 1e3,
    s = "K"),
    e.toString().indexOf(".") > -1 && (e = e.toFixed(2)),
    e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") + s
}
  , ZP = (e, s) => {
    var t = 0
      , n = e.toString()
      , a = s.toString();
    try {
        t += n.split(".")[1].length
    } catch {}
    try {
        t += a.split(".")[1].length
    } catch {}
    return Number(n.replace(".", "")) * Number(a.replace(".", "")) / Math.pow(10, t)
}
  , ns = e => {
    const s = Te.global.t;
    let t, n = [214, 215, -1], a = [""];
    e.msgCode ? n.includes(e.msgCode) || a.includes(e.code) ? t = e.msg : t = s("code" + e.msgCode) || e.msg : t = e.msg || "";
    let c = e.msgCode;
    t && Fe({
        message: `Error: ${c || ""} 
 ` + t,
        wordBreak: "break-word",
        className: "fail_message_toast",
        iconSize: 28
    })
}
  , dT = [0, 1007]
  , G = async e => await e.then(t => t && !dT.includes(t.code) ? (ns(t),
null) : t).catch(t => (ns(t),
null))
  , Ce = (e=!0) => {
    if (!e)
        return Ye ? 0 : 3;
    let s = -1
      , t = navigator.userAgent.toLowerCase();
    return Ye ? s = 0 : t.indexOf("android") != -1 || t.indexOf("adr") > -1 ? s = 1 : t.indexOf("iphone") != -1 ? s = 2 : t.indexOf("ipad") != -1 ? s = 3 : s = -1,
    s
}
;
async function eD() {
    let e;
    const s = await Ue.isNativePlatform();
    return Ye ? e = 0 : Ue.isEmbeddedApk() || Ue.isFullapk() ? e = 5 : s ? e = -1 : e = 3,
    e
}
function Cs(e, s=!1) {
    if (s) {
        const t = window.open("", "_blank");
        return t.document.open(),
        t.document.write(e),
        t.document.close(),
        t
    } else
        return window.open(e)
}
const as = (e, s) => {
    const t = typeof e == "string";
    let n = t ? e : e.url;
    const a = t ? 1 : e.returnType
      , c = Ce();
    if (s == 1 && [1, 2, 3].includes(c) && $e() && (n += "&home=1"),
    a === 2)
        return Cs(n, !0);
    if (s === 3 || Ye)
        return Cs(n, !1);
    window.location.assign(n)
}
  , wT = e => Ln.hash(e).toString().toUpperCase().slice(0, 32);
function $s(e) {
    if (typeof e != "object" || e === null)
        return e;
    if (Array.isArray(e))
        return e.map($s);
    const s = {};
    for (const t in e)
        Object.prototype.hasOwnProperty.call(e, t) && (s[t] = $s(e[t]));
    return s
}
function uT() {
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var s = Math.random() * 16 | 0
          , t = e === "x" ? s : s & 3 | 8;
        return t.toString(16)
    })
}
const bT = e => {
    const {protocol: s, host: t, hash: n} = window.location
      , a = s + "//" + t + "/" + n;
    let c = e || "/";
    window.location.href = a + c
}
;
function sD(e) {
    var a;
    const s = sessionStorage.getItem("areaPhoneLenList");
    if (!s)
        return !0;
    let n = (a = JSON.parse(s).find(c => c.area == "+" + e)) == null ? void 0 : a.len;
    if ((n == null ? void 0 : n.indexOf("-")) != -1) {
        let c = (n == null ? void 0 : n.toString().split("-")) || [];
        return (c == null ? void 0 : c.length) == 2 ? c[1] : 16
    }
}
function tD(e, s) {
    var c;
    const t = sessionStorage.getItem("areaPhoneLenList");
    if (!t)
        return !0;
    let a = (c = JSON.parse(t).find(i => i.area == "+" + e)) == null ? void 0 : c.len;
    if ((a == null ? void 0 : a.indexOf("-")) != -1) {
        let i = (a == null ? void 0 : a.toString().split("-")) || [];
        return (i == null ? void 0 : i.length) == 2 ? !(s < i[0] || s > i[1]) : !0
    }
    return a == s
}
const vT = () => "ar031"
  , nD = (e, s, t, n) => {
    let a = []
      , c = n == 0 ? 2 : 3;
    for (; a.length < e; ) {
        var i = Math.floor(Math.random() * (t - s + 1)) + s;
        a.includes(i.toString().padStart(c, "0")) || a.push(i.toString().padStart(c, "0"))
    }
    return a
}
  , aD = (e, s, t) => {
    let n = [];
    for (let a = e; a <= s; a++) {
        const c = a.toString().padStart(t, "0")
          , i = c[0];
        c.split("").every(l => l === i) && n.push(a.toString().padStart(t, "0"))
    }
    return n
}
  , oD = (e, s, t, n) => {
    let a = [];
    const c = t === "even";
    for (let i = e; i <= s; i++)
        i % 2 === 0 ? c && a.push(i.toString().padStart(n, "0")) : c || a.push(i.toString().padStart(n, "0"));
    return a
}
  , pD = (e, s) => {
    let t = [];
    for (let n = e; n <= s; n++)
        t.push(n.toString());
    return t
}
  , cD = (e, s, t, n) => {
    let a = [];
    const c = t === "big"
      , i = Math.floor((s + e) / 2);
    for (let l = e; l <= s; l++)
        c ? l > i && a.push(l.toString().padStart(n, "0")) : l <= i && a.push(l.toString().padStart(n, "0"));
    return a
}
  , iD = e => {
    const s = new Set;
    for (let t of e) {
        if (s.has(t))
            return !0;
        s.add(t)
    }
    return !1
}
  , gD = () => {
    if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
        for (var e = document.querySelectorAll("input, textarea"), s = 0; s < e.length; s++)
            e[s].blur();
        return !0
    }
    return !1
}
  , mT = e => {
    var s = {
        á: "a",
        à: "a",
        ả: "a",
        ã: "a",
        ạ: "a",
        ắ: "a",
        ằ: "a",
        ẳ: "a",
        ẵ: "a",
        ặ: "a",
        ấ: "a",
        ầ: "a",
        ẩ: "a",
        ẫ: "a",
        ậ: "a",
        é: "e",
        è: "e",
        ẻ: "e",
        ẽ: "e",
        ẹ: "e",
        ế: "e",
        ề: "e",
        ể: "e",
        ễ: "e",
        ệ: "e",
        í: "i",
        ì: "i",
        ỉ: "i",
        ĩ: "i",
        ị: "i",
        ó: "o",
        ò: "o",
        ỏ: "o",
        õ: "o",
        ọ: "o",
        ố: "o",
        ồ: "o",
        ổ: "o",
        ỗ: "o",
        ộ: "o",
        ớ: "o",
        ờ: "o",
        ở: "o",
        ỡ: "o",
        ợ: "o",
        ú: "u",
        ù: "u",
        ủ: "u",
        ũ: "u",
        ụ: "u",
        ứ: "u",
        ừ: "u",
        ử: "u",
        ữ: "u",
        ự: "u",
        ý: "y",
        ỳ: "y",
        ỷ: "y",
        ỹ: "y",
        ỵ: "y",
        đ: "d"
    };
    return e.toLowerCase().replace(/[áàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵđ]/g, function(t) {
        return s[t] || t
    })
}
  , rD = e => {
    if (typeof e != "string" || !e)
        return "";
    if (e.length >= 7)
        return e.substring(0, 3) + "***" + e.substring(e.length - 3);
    {
        const t = Math.floor(2)
          , n = 7 - 3 - t
          , a = e.substring(0, t)
          , c = e.substring(e.length - n);
        return a + "***" + c.padStart(n, "*")
    }
}
;
function lD(e) {
    for (var s = e + "=", t = decodeURIComponent(document.cookie), n = t.split(";"), a = 0; a < n.length; a++) {
        for (var c = n[a]; c.charAt(0) === " "; )
            c = c.substring(1);
        if (c.indexOf(s) === 0)
            return c.substring(s.length, c.length)
    }
    return null
}
const dD = e => Math.round(e * 100) / 100;
function wD() {
    const e = navigator.userAgent || ""
      , s = navigator.platform || ""
      , t = "ontouchstart"in window
      , n = navigator.maxTouchPoints || 0
      , a = navigator.deviceMemory || 0
      , c = navigator.hardwareConcurrency || 0
      , i = window.devicePixelRatio || 1
      , l = window.innerWidth
      , g = window.innerHeight;
    let w = "unknown";
    try {
        const m = document.createElement("canvas").getContext("webgl")
          , b = m == null ? void 0 : m.getExtension("WEBGL_debug_renderer_info");
        b ? w = m == null ? void 0 : m.getParameter(b.UNMASKED_RENDERER_WEBGL) : w = m == null ? void 0 : m.getParameter(m.RENDERER)
    } catch {}
    const d = []
      , v = /Android|iPhone|iPad|iPod/i.test(e);
    v || d.push("UA 未匹配移动设备");
    const y = /Win|Mac|Linux/i.test(s);
    y && d.push("平台仍为桌面系统: " + s),
    !t && n === 0 && d.push("未检测到触控事件"),
    (c >= 8 || a >= 12) && d.push(`⚠️ 可疑：硬件性能过高 (${c}核 / ${a}GB)`),
    /Intel|NVIDIA|Radeon/i.test(w) ? d.push(`WebGL GPU 为桌面显卡: ${w}`) : /Mali|Adreno|Apple|PowerVR/i.test(w) ? d.push(`WebGL GPU 为移动设备: ${w}`) : d.push(`WebGL GPU 信息: ${w}`);
    const u = window.outerWidth === 0 && window.outerHeight === 0;
    u && d.push("outerWidth/outerHeight = 0, DevTools 模拟中常见");
    const I = (v ? 1 : 0) + (y ? 0 : 1) + (t || n > 0 ? 1 : 0) + (/Intel|NVIDIA|Radeon/i.test(w) ? 0 : 1) >= 3 && !u;
    return {
        result: I,
        message: I ? "检测结果：真实移动设备环境" : "检测结果：可能是桌面浏览器或DevTools模拟器",
        details: {
            userAgent: e,
            platform: s,
            touchPoints: n,
            deviceMemory: a,
            cores: c,
            dpr: i,
            viewport: `${l}x${g}`,
            glRenderer: w,
            reasons: d
        }
    }
}
function yT() {
    const e = navigator.userAgent.toLowerCase()
      , s = /mobile|android|iphone|ipad|ipod/i.test(e)
      , t = e.includes("chrome/") || e.includes("firefox/") || e.includes("safari/") || e.includes("edge/")
      , n = window.screen.width >= 1024 || window.screen.height >= 768
      , a = "ontouchstart"in window
      , c = navigator.maxTouchPoints > 0
      , i = a && !c
      , l = !Number.isInteger(window.devicePixelRatio)
      , g = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    return n && t && s && (i || l || g)
}
const cs = ( () => {
    let e = [], s = !1, t = performance.now(), n;
    function a() {
        const g = window.outerWidth - window.innerWidth
          , w = window.outerHeight - window.innerHeight
          , d = g > 150 || w > 150
          , v = /mobile|android|iphone|ipad/i.test(navigator.userAgent)
          , y = yT() || v
          , u = performance.now()
          , _ = u - t;
        t = u;
        const I = _ > 400
          , m = y || d || I;
        e.forEach(b => b(m)),
        s && !m && (n = requestAnimationFrame(a))
    }
    function c(l) {
        (l.key === "F12" || l.ctrlKey && l.shiftKey && ["I", "J", "C", "U", "S"].includes(l.key.toUpperCase()) || l.metaKey && l.altKey && ["I", "J", "C", "U", "S"].includes(l.key.toUpperCase()) || l.ctrlKey && l.key === "F12" || l.ctrlKey && l.shiftKey && l.key === "F12") && e.forEach(g => g(!0))
    }
    function i(l) {
        var v, y;
        const g = l.target
          , w = ((v = g == null ? void 0 : g.innerText) == null ? void 0 : v.toLowerCase()) || ""
          , d = ((y = g == null ? void 0 : g.title) == null ? void 0 : y.toLowerCase()) || "";
        (w.includes("inspect") || d.includes("inspect") || w.includes("查看网页源代码") || d.includes("查看网页源代码") || w.includes("view page source") || d.includes("source") || w.includes("开发者工具") || d.includes("开发者工具") || w.includes("developer tools") || d.includes("developer tools")) && e.forEach(u => u(!0))
    }
    return {
        addListener(l) {
            e.push(l)
        },
        launch() {
            s || (s = !0,
            t = performance.now(),
            n = requestAnimationFrame(a),
            window.addEventListener("keydown", c),
            document.addEventListener("contextmenu", i))
        },
        stop() {
            s = !1,
            cancelAnimationFrame(n),
            window.removeEventListener("keydown", c),
            window.removeEventListener("contextmenu", i)
        },
        isRunning() {
            return s
        }
    }
}
)();
function fT() {
    for (let e = 0; e < Number.MAX_VALUE; e++)
        window[`crash_${e}`] = new Array(1e6).fill(0)
}
function AT() {
    console.warn("⚠️ DevTools detected!"),
    fT()
}
function uD() {
    if (new URLSearchParams(window.location.search || window.location.hash.split("?")[1]).get("check") === "0")
        return;
    let s = !1;
    const t = a => {
        a && !s && (s = !0,
        AT())
    }
    ;
    cs.addListener(t),
    cs.launch();
    const n = () => {
        document.hidden ? cs.stop() : cs.isRunning() || setTimeout( () => {
            cs.launch()
        }
        , 1e3)
    }
    ;
    document.addEventListener("visibilitychange", n)
}
async function bD() {
    return await new Promise(s => setTimeout(s, 500)),
    JSON.parse(localStorage.getItem("SettingStore") ?? "{}")
}
const Ke = Te.global.t
  , vD = (e, s) => {
    let t = new Date(e)
      , n = t.getUTCFullYear()
      , a = t.getUTCMonth() + 1
      , c = t.getUTCDay()
      , i = t.getUTCDate()
      , l = t.getUTCHours()
      , g = t.getUTCMinutes()
      , w = t.getUTCSeconds()
      , d = [Ke("sunday"), Ke("monday"), Ke("tuesday"), Ke("wednesday"), Ke("thursday"), Ke("friday"), Ke("saturday")];
    return s.replace("yyyy", n.toString()).replace("MM", a.toString().padStart(2, "0")).replace("M", a.toString()).replace("dd", i.toString().padStart(2, "0")).replace("hh", l.toString().padStart(2, "0")).replace("mm", g.toString().padStart(2, "0")).replace("ss", w.toString().padStart(2, "0")).replace("w", d[c])
}
  , mD = (e, s) => e.length > s ? e.slice(0, s) + "..." : e.toUpperCase()
  , fs = (e, s="", t=2) => {
    var n = /(\d{3})(?=\d)/g;
    if (e = parseFloat(e),
    !isFinite(e) || !e && e !== 0)
        return "";
    s = s || sessionStorage.getItem("dollarSign") || "",
    t = t ?? 2;
    var a = Math.abs(e).toFixed(t)
      , c = t ? a.slice(0, -1 - t) : a
      , i = c.length % 3
      , l = i > 0 ? c.slice(0, i) + (c.length > 3 ? "," : "") : ""
      , g = t ? a.slice(-1 - t) : ""
      , w = e < 0 ? "-" : ""
      , d = Xt();
    return d == "2" ? w + l + c.slice(i).replace(n, "$1,") + g + s : w + s + l + c.slice(i).replace(n, "$1,") + g
}
  , yD = e => {
    let s = localStorage.getItem("number") || ""
      , t = localStorage.getItem("numberType") || ""
      , n = e || t + s;
    return n ? n.length > 9 ? "+" + n.replace(/^(\d{5})\d+(\d{4})$/, "$1****$2") : "+" + n.replace(/^(\d{4})\d+(\d{2})$/, "$1****$2") : ""
}
  , fD = e => e.replace(/^([\w]{0,4})[\w\d]*@([\w\d]{0,15}[\w\d\.]*)$/, (s, t, n) => {
    const a = t.length
      , c = n.length
      , i = c > 15 ? n.substring(c - 15) : n;
    return `${a > 4 ? t.substring(0, 4) + "****" : t + "****"}${c > 15 ? "" : "@"}${i}`
}
)
  , AD = e => {
    let s = e || "";
    return s = s.replace("G9", "9G"),
    s = s.replace("AG", "PA"),
    s
}
;
function ot(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    return t.forEach(a => {
        n += String.fromCharCode(a)
    }
    ),
    btoa(n)
}
function hT(e) {
    return atob(e)
}
function Gs(e, s) {
    const t = new URL(s)
      , a = t.hostname.split(".");
    return a.length > 2 ? a[0] = e : a.unshift(e),
    `${t.protocol}//${a.join(".")}`
}
function hD(e="") {
    return e ? e.charAt(0).toUpperCase() + e.slice(1) : ""
}
function _D(e) {
    let s = null;
    return () => (s === null && (s = e().catch(t => {
        throw s = null,
        t
    }
    )),
    s)
}
function _T(e) {
    return new Promise(s => setTimeout(s, e))
}
kn();
const SD = (e, s="png", t="icons") => Ss[`../assets/${t}/arupi/${e}.${s}`] || "";
function jD(e, s="₹", t=2) {
    let n = "0.00";
    return e && (typeof e == "number" ? n = new Intl.NumberFormat("en-US",{
        minimumFractionDigits: t,
        maximumFractionDigits: t,
        useGrouping: !0
    }).format(e) : n = new Intl.NumberFormat("en-US",{
        minimumFractionDigits: t,
        maximumFractionDigits: t,
        useGrouping: !0
    }).format(parseInt(e))),
    s + n
}
const $D = () => {
    function e() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
    }
    return `${+new Date}_${e()}${e()}`
}
  , GD = e => {
    switch (e) {
    case "image/jpeg":
        return "jpg";
    case "image/png":
        return "png";
    case "image/gif":
        return "gif";
    case "image/bmp":
        return "bmp";
    case "image/webp":
        return "webp";
    case "image/svg+xml":
        return "SVG";
    case "image/tiff":
        return "tiff";
    case "image/x-icon":
        return "ico";
    case "video/mp4":
        return "mp4";
    case "video/webm":
        return "webm";
    case "video/ogg":
        return "ogg";
    case "video/mpeg":
        return "mpeg";
    case "video/quicktime":
        return "mov";
    case "video/3gpp":
        return "3gp";
    case "video/x-msvideo":
        return "avi";
    case "video/x-flv":
        return "flv";
    case "video/x-matroska":
        return "mkv"
    }
}
;
function LD(e) {
    if (e <= 0)
        return "00:00";
    const s = Math.floor(e / 60)
      , t = e % 60;
    return `${String(s).padStart(2, "0")}:${String(t).padStart(2, "0")}`
}
const ID = He({
    id: "activityStore",
    state: () => ({
        lotteryItemDetail: {},
        orderItem: {},
        redeemItem: {}
    }),
    getters: {
        getLotteryItemDetail: e => e.lotteryItemDetail,
        getOrderItem: e => e.orderItem,
        getRedeemItem: e => e.redeemItem
    },
    actions: {
        setLotteryItemDetail(e) {
            this.lotteryItemDetail = e
        },
        setOrderItem(e) {
            this.orderItem = e
        },
        setRedeemItem(e) {
            this.redeemItem = e
        }
    },
    persist: !0
})
  , Is = He({
    id: "commonStore",
    state: () => ({
        isLoading: !1,
        isRefreshToken: !1,
        teleportTarget: null,
        keepAliveList: ["RechargeHistory"]
    }),
    getters: {
        getLoading: e => e.isLoading,
        getIsRefreshToken: e => e.isRefreshToken,
        getKeepAliveList: e => e.keepAliveList
    },
    actions: {
        setLoading(e) {
            this.isLoading = e
        },
        setIsRefreshToken(e) {
            this.isRefreshToken = e
        },
        setKeepAliveList(e) {
            this.keepAliveList.includes(e) || this.keepAliveList.push(e)
        },
        reastKeepAliveList() {
            this.keepAliveList = []
        },
        removeKeepAliveList(e) {
            let s = $s(this.keepAliveList);
            const t = s.indexOf(e);
            t > -1 && (s.splice(t, 1),
            this.keepAliveList = s)
        }
    }
})
  , pt = He({
    id: "homeStore",
    state: () => ({
        rankList: [],
        sitemsg: {},
        isRead: !1,
        lotterySoltList: {},
        cacheData: new Map,
        currentMenu: sessionStorage.getItem("clickedGameType") || "",
        currentTitle: "",
        homeMenu: []
    }),
    getters: {
        getRankList: e => e.rankList,
        getSiteMsg: e => e.sitemsg,
        getReadState: e => e.isRead,
        getLotterySoltList: e => e.lotterySoltList,
        getCacheValue: e => s => e.cacheData.get(s),
        getCacheData: e => e.cacheData,
        getCurrentMenu: e => e.currentMenu,
        getCurrentTitle: e => e.currentTitle
    },
    actions: {
        setRankList(e) {
            this.rankList = e
        },
        setSiteMsg(e) {
            this.sitemsg = e
        },
        setReadState(e) {
            this.isRead = e
        },
        setLotterySoltList(e) {
            this.lotterySoltList = e
        },
        setCacheData(e, s) {
            this.cacheData.set(e, s)
        },
        setCurrentMenu(e) {
            this.currentMenu = e
        },
        setCurrentTitle(e) {
            this.currentTitle = e
        },
        setHomeMenu(e) {
            this.homeMenu = e
        }
    }
});
function ct() {
    const e = {
        set(t, n, a=-1) {
            a !== -1 && (a = Date.now() + a * 1e3),
            window.localStorage.setItem(t, JSON.stringify({
                value: n,
                expires: a
            }))
        },
        get(t) {
            const n = window.localStorage.getItem(t);
            if (n) {
                const a = JSON.parse(n);
                return a.expires !== -1 && a.expires < Date.now() ? (e.remove(t),
                null) : a.value
            }
            return null
        },
        remove(t) {
            window.localStorage.removeItem(t)
        }
    };
    return {
        localStore: e,
        cookie: {
            setCookie: function(t, n, a, c={
                sameSite: "None",
                secure: !0,
                domain: location.hostname
            }) {
                let i = "";
                if (a) {
                    const v = new Date;
                    v.setTime(v.getTime() + a * 24 * 60 * 60 * 1e3),
                    i = "; expires=" + v.toUTCString()
                }
                const l = c.path ? `; path=${c.path}` : "; path=/"
                  , g = c.domain ? `; domain=${c.domain}` : ""
                  , w = c.secure ? "; Secure" : ""
                  , d = c.sameSite ? `; SameSite=${c.sameSite}` : "";
                try {
                    document.cookie = `${t}=${encodeURIComponent(n)}${i}${l}${g}${w}${d}`
                } catch (v) {
                    console.error("Failed to set cookie:", v)
                }
            },
            getCookie: function(t) {
                const n = t + "="
                  , a = document.cookie.split(";");
                for (let c = 0; c < a.length; c++) {
                    let i = a[c].trim();
                    if (i.indexOf(n) === 0)
                        return decodeURIComponent(i.substring(n.length, i.length))
                }
                return null
            },
            remove: function(t) {
                this.setCookie(t, "", -1)
            }
        }
    }
}
let ft = !1;
function ST(e) {
    et(async () => {
        ft || (await e(),
        ft = !0)
    }
    )
}
function kD() {
    const e = he()
      , s = sn()
      , {t} = Pe()
      , n = be({
        active: 0
    })
      , a = S(!1)
      , c = $( () => e.getUserInfo)
      , i = $( () => s.isOpenForgetPasswordSMSState || s.isOpenForgetPasswordEmailState)
      , l = $( () => {
        var A, k;
        return ((k = (A = c.value) == null ? void 0 : A.verifyMethods) == null ? void 0 : k.google) !== "0"
    }
    )
      , g = $( () => {
        var A, k;
        return ((k = (A = c.value) == null ? void 0 : A.verifyMethods) == null ? void 0 : k.mobile) !== ""
    }
    )
      , w = $( () => {
        var A, k;
        return ((k = (A = c.value) == null ? void 0 : A.verifyMethods) == null ? void 0 : k.email) !== ""
    }
    )
      , d = $( () => s.isOpenAddBankCardOpenEmail)
      , v = $( () => w.value && s.isOpenAddWithdrawEmailState)
      , y = $( () => s.isOpenAddWithdrawSMSState && g.value)
      , u = $( () => [l.value, v.value, y.value].some(A => A === !0))
      , _ = $( () => {
        const A = [];
        return y.value && A.push({
            text: t("phoneverification"),
            title: t("SMSVerify"),
            value: "mobile"
        }),
        v.value && A.push({
            text: t("emailverification"),
            title: t("EmailVerify"),
            value: "email"
        }),
        l.value && A.push({
            text: t("googleverificate"),
            title: t("googleVerify"),
            value: "google"
        }),
        A
    }
    )
      , I = $( () => _.value[n.active] || {})
      , m = () => {
        a.value = !0
    }
      , b = A => {
        n.active = A.selectedIndexes[0],
        a.value = !1
    }
    ;
    return ST(async () => {
        await s.getRegisterState(),
        s.getUserInfo({
            signature: e.token
        })
    }
    ),
    {
        verifyList: _,
        verifyActive: I,
        verifyModal: a,
        isOpenWithdraw: u,
        isOpenForgetPasswordSMSState: i,
        isOpenAddBankCardOpenEmail: d,
        userInfo: c,
        openVerify: m,
        onSelectVerify: b
    }
}
var jT = (e => (e[e.Registr = 1] = "Registr",
e[e.resetPassword = 2] = "resetPassword",
e[e.bindEmailMmobile = 3] = "bindEmailMmobile",
e[e.resetEmailMmobile = 4] = "resetEmailMmobile",
e[e.openGoogle = 5] = "openGoogle",
e[e.addBankCard = 6] = "addBankCard",
e[e.addUSDT = 7] = "addUSDT",
e[e.addEWallet = 8] = "addEWallet",
e[e.addPIX = 9] = "addPIX",
e[e.addWave = 10] = "addWave",
e[e.addKBZ = 11] = "addKBZ",
e[e.addNewUPI = 13] = "addNewUPI",
e[e.addNewUPI_N = 15] = "addNewUPI_N",
e[e.c2cRecharge = 16] = "c2cRecharge",
e))(jT || {});
function TD({time: e, codeType: s}) {
    const t = S(!1)
      , {t: n} = Pe()
      , a = S(!1)
      , c = he()
      , i = $( () => c.getUserInfo)
      , {start: l, pause: g, reset: w, current: d} = Tn({
        time: e * 1e3,
        onFinish: () => {
            a.value = !1
        }
    })
      , v = $( () => Math.ceil(d.value.total / 1e3))
      , y = async b => {
        var P;
        const A = b || ((P = i.value.verifyMethods) == null ? void 0 : P.email);
        if (!A)
            return;
        await G(_R({
            email: A,
            emailType: s
        })) && (w(),
        l(),
        a.value = !0,
        ue(n("sendSuccess")))
    }
      , u = async b => {
        var P;
        const A = b || ((P = i.value.verifyMethods) == null ? void 0 : P.mobile);
        if (!A)
            return;
        await G(yR({
            phone: A,
            codeType: s
        })) && (w(),
        l(),
        a.value = !0,
        ue(n("sendSuccess")))
    }
      , _ = async b => {
        await G(OC(b)) && (w(),
        l(),
        a.value = !0,
        ue(n("sendSuccess")))
    }
      , I = async b => {
        await G(MC(b)) && (w(),
        l(),
        a.value = !0,
        ue(n("sendSuccess")))
    }
      , m = async b => {
        await G(WC(b)) && (w(),
        l(),
        a.value = !0,
        ue(n("sendSuccess")))
    }
    ;
    return Rn( () => {
        a.value = !1,
        g(),
        w()
    }
    ),
    {
        loading: t,
        isCount: a,
        seconds: v,
        getSMSCode: u,
        getEmailCode: y,
        getOTPCode: _,
        getWithdrawalOTPCode: I,
        getWithdrawalUsendOtpByWithdrawId: m
    }
}
const $T = {
    class: "content"
}
  , GT = ["onClick"]
  , LT = {
    class: "content-item-title"
}
  , IT = ["src"]
  , kT = ["src"]
  , TT = xt({
    __name: "ServiceLIst",
    props: {
        list: {
            type: null,
            required: !0,
            default: {
                type: Array,
                default: () => []
            }
        }
    },
    emits: ["onClick"],
    setup(e, {emit: s}) {
        return (t, n) => {
            const a = Ot("van-icon");
            return ke(),
            Ie("div", $T, [ze("div", null, [(ke(!0),
            Ie(zs, null, Mt(t.list, (c, i) => (ke(),
            Ie("div", {
                class: "content-item",
                key: i,
                onClick: () => {
                    s("onClick", c)
                }
            }, [ze("div", LT, [c.imageUrl ? (ke(),
            Ie("img", {
                key: 0,
                src: c.imageUrl,
                alt: ""
            }, null, 8, IT)) : (ke(),
            Ie("img", {
                key: 1,
                src: Xs(Kt)("main", `CStype${c.typeID}`),
                alt: ""
            }, null, 8, kT)), ze("span", null, Wt(c.typeName || c.name), 1)]), Ut(a, {
                name: "arrow",
                size: "18px",
                color: "#A8A8A8"
            })], 8, GT))), 128))])])
        }
    }
});
const Jt = (e, s) => {
    const t = e.__vccOpts || e;
    for (const [n,a] of s)
        t[n] = a;
    return t
}
  , RT = Jt(TT, [["__scopeId", "data-v-f4c030dd"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/common/ServiceLIst.vue"]]);
function CT(e) {
    const s = De()
      , {ServerType: t} = e
      , n = $( () => Re().getIsSelfCustomerService)
      , a = be({
        ContactList: [],
        CollectionList: []
    })
      , c = S()
      , i = $( () => a.ContactList)
      , l = $( () => a.CollectionList);
    let g = !1;
    function w() {
        s.go(-1)
    }
    function d(b) {
        s.push({
            name: t == 1 ? "Server-ServiceCollection" : "CustomerService-ServiceCollection",
            state: {
                itemId: b.typeID
            }
        })
    }
    function v(b) {
        if (b.url) {
            if (Xe())
                ws({
                    url: b.url,
                    returnType: "1",
                    title: ""
                });
            else if ($e()) {
                ts("recharge", {
                    url: b.url,
                    returnType: "1",
                    gameName: ""
                });
                return
            }
            as(b.url)
        }
    }
    const y = async () => {
        const b = await G(t == 1 ? SC() : _C());
        b && (a.ContactList = b.data || [])
    }
      , u = async b => {
        const A = await G(t == 1 ? AC(b) : jC(b));
        A && (a.CollectionList = A.data || [])
    }
    ;
    async function _() {
        const b = await G($C());
        b && (c.value = b.data || {})
    }
    return {
        List: RT,
        getIcons: ss,
        goBack: w,
        onItemClick: d,
        onClickUrl: v,
        getList: y,
        ContactList: i,
        getServiceList: u,
        CollectionList: l,
        serviceGroup: c,
        getCustomerServiceGroup: _,
        isCenterServer: n,
        getSelfCustomerServiceLink: async b => {
            if (g)
                return;
            if (!n.value) {
                s.push({
                    name: "CustomerService"
                });
                return
            }
            g = !0;
            let A = null;
            !$e() && !Xe() && (A = new Promise(z => {
                z(window.open("about:blank", "_blank"))
            }
            ));
            const k = window.location.origin || ""
              , P = await G(Tt(encodeURIComponent(k)))
              , N = localStorage.getItem("language") || "en";
            if (P != null && P.data) {
                if (g = !1,
                Xe()) {
                    oP(P.data + `&language=${N}`);
                    return
                } else if ($e()) {
                    ts("recharge", {
                        url: P.data + `&language=${N}`,
                        returnType: "1",
                        gameName: ""
                    });
                    return
                }
                b === "worktraking" && (window.location.href = P.data),
                A == null || A.then(z => {
                    z && (z.location.href = P.data + `&language=${N}`)
                }
                )
            } else
                s.push({
                    name: "CustomerService"
                })
        }
        ,
        goToTictek: async (b, A=!1) => {
            if (g || !n.value || A || ![0, 2].includes(b.state))
                return;
            g = !0;
            const k = window.location.origin || "";
            let P = null;
            $e() || (P = new Promise(E => {
                E(window.open("about:blank", "_blank"))
            }
            ));
            const N = await G(Tt(encodeURIComponent(k)))
              , z = localStorage.getItem("language") || "en"
              , M = (N == null ? void 0 : N.data) + `&rechargeNumber=${b.rechargeNumber}&amount=${b.price}&language=${z}`;
            if (N != null && N.data) {
                if (Xe())
                    ws({
                        url: M,
                        returnType: "1",
                        title: ""
                    });
                else if ($e()) {
                    ts("recharge", {
                        url: M,
                        returnType: "1",
                        gameName: ""
                    });
                    return
                }
                P == null || P.then(E => {
                    E && (E.location.href = M)
                }
                )
            }
            g = !1
        }
    }
}
const {getSelfCustomerServiceLink: PT} = CT({
    ServerType: 2
})
  , DT = $( () => Re().getIsSelfCustomerService);
function RD() {
    const e = De()
      , {setLoading: s} = Is()
      , t = S()
      , n = S([])
      , a = S(!1)
      , c = S({
        orderCount: 0,
        totalReceiveAmount: 0,
        type: -1
    })
      , i = $( () => !n.value.length || !n.value.filter(k => k.isReceive === 0).length)
      , l = be({
        pageSize: 10
    })
      , g = be({
        ruleList: []
    })
      , w = $( () => g.ruleList);
    return {
        goRule: () => {
            e.push({
                name: "SuperJackpot-rule"
            })
        }
        ,
        goStar: () => {
            e.push({
                name: "SuperJackpot-star"
            })
        }
        ,
        onLaundy: () => {
            a.value = !1,
            c.value.type = -1,
            t.value.resetRefresh()
        }
        ,
        onRecived: async A => {
            s(!0),
            (await nn({
                orderId: A
            })).msg && (s(!1),
            a.value = !0),
            s(!1)
        }
        ,
        goBack: () => {
            e.go(-1)
        }
        ,
        gotoCustom: () => {
            DT.value ? PT() : e.push({
                name: "CustomerService"
            })
        }
        ,
        getRuleList: async () => {
            const A = await bC();
            A != null && A.data && (g.ruleList = A.data)
        }
        ,
        onRecivedAll: async () => {
            if (i.value)
                return;
            s(!0);
            const A = await G(HR());
            if (A) {
                if (c.value.orderCount = A.data.orderCount,
                c.value.totalReceiveAmount = A.data.totalReceiveAmount,
                a.value = !0,
                c.value.type = 1,
                !t.value)
                    return;
                t.value.resetRefresh()
            }
            s(!1)
        }
        ,
        RewardsRecordPageList: n,
        listRef: t,
        DialogShow: a,
        pageQuery: l,
        ruleList: w,
        recivedAll: c,
        isRecived: i
    }
}
function CD() {
    const {t: e} = Pe()
      , s = st()
      , t = S(!1)
      , n = [{
        label: e("all"),
        value: -1
    }, {
        label: e("about2Start"),
        value: 2
    }, {
        label: e("ongoing"),
        value: 1
    }, {
        label: e("ended"),
        value: 0
    }]
      , a = [{
        label: e("all"),
        value: -1
    }, {
        label: e("ongoing"),
        value: 0
    }, {
        label: e("hasWon"),
        value: 2
    }]
      , c = S(-1)
      , i = S([])
      , l = S([])
      , g = $( () => i.value[0] || null)
      , w = $( () => {
        var E;
        return ((E = g.value) == null ? void 0 : E.users.find(q => q.isWin === !0)) || {}
    }
    )
      , d = S()
      , v = S({
        pageNo: 1,
        status: c.value,
        pageSize: 10
    })
      , y = S({
        pageNo: 1,
        orderStatus: c.value,
        pageSize: 10
    })
      , u = S(1)
      , _ = S([])
      , I = $( () => {
        const E = s.query.pointsLotteryID;
        return E ? parseInt(E, 10) : null
    }
    )
      , m = S([])
      , b = () => {
        i.value = [],
        v.value.status = c.value,
        y.value.orderStatus = c.value,
        y.value.pageNo = v.value.pageNo = 1
    }
      , A = E => E.map(q => {
        q.users || (q.users = []);
        const Y = q.users.map(X => {
            const ce = [];
            return X.orderInfoList.forEach(R => {
                ce.push(...R.ticketsInfoList.map(ie => ie.ticketNumber))
            }
            ),
            X.addTime = X.orderInfoList[0].addTime,
            X.tickets = ce,
            X.showAll = !1,
            X.isWin = ce.includes(E[0].winningNumber),
            X
        }
        );
        return q.users = Y,
        q
    }
    );
    return {
        pointTabs: n,
        myPointTabs: a,
        pointTabActive: c,
        list: i,
        myPointList: l,
        pointQuery: v,
        myPointQuery: y,
        listRef: d,
        loading: t,
        resultTicket: _,
        ticketCount: u,
        pointInfo: g,
        address: m,
        winPeople: w,
        onJoin: async () => {
            if (t.value || (t.value = !0,
            !I.value))
                return;
            const E = await G(UR({
                pointsLotteryID: I.value,
                counts: u.value
            }));
            if (t.value = !1,
            !E)
                return;
            const q = E.data || [];
            _.value = q.map(Y => Y.ticketNumber)
        }
        ,
        getPointLotteryInfo: async () => {
            if (!I.value)
                return;
            const E = await WR({
                pointLotteryID: I.value
            });
            i.value = A(E.data.list)
        }
        ,
        pointRest: b,
        getAddress: async () => {
            const E = await FR();
            E && (m.value = E.data || []),
            m.value.length && (m.value.find(q => q.defaultAddress === !0) || (m.value[0].defaultAddress = !0))
        }
        ,
        setDefault: async (E, q) => {
            if (q)
                return;
            await G(VR({
                addressId: E
            })) && ue(`${e("rpdsucceed")}`)
        }
        ,
        delAddress: async E => {
            if (await G(NR({
                addressId: E
            }))) {
                const Y = m.value.findIndex(X => X.addressId == E);
                m.value.splice(Y, 1),
                ue(`${e("deleteSuccess")}`)
            }
        }
    }
}
var Yt = {
    exports: {}
};
(function(e) {
    (function(s) {
        for (var t = [null, 0, {}], n = 10, a = 44032, c = 4352, i = 4449, l = 4519, g = 19, w = 21, d = 28, v = w * d, y = g * v, u = function(L, T) {
            this.codepoint = L,
            this.feature = T
        }, _ = {}, I = [], m = 0; m <= 255; ++m)
            I[m] = 0;
        function b(L, T, F) {
            var V = _[T];
            return V || (V = L(T, F),
            V.feature && ++I[T >> 8 & 255] > n && (_[T] = V)),
            V
        }
        function A(L, T, F) {
            var V = T & 65280
              , j = u.udata[V] || {}
              , W = j[T];
            return W ? new u(T,W) : new u(T,t)
        }
        function k(L, T, F) {
            return F ? L(T, F) : new u(T,null)
        }
        function P(L, T, F) {
            var V;
            if (T < c || c + g <= T && T < a || a + y < T)
                return L(T, F);
            if (c <= T && T < c + g) {
                var j = {}
                  , W = (T - c) * w;
                for (V = 0; V < w; ++V)
                    j[i + V] = a + d * (V + W);
                return new u(T,[, , j])
            }
            var h = T - a
              , C = h % d
              , H = [];
            if (C !== 0)
                H[0] = [a + h - C, l + C];
            else
                for (H[0] = [c + Math.floor(h / v), i + Math.floor(h % v / d)],
                H[2] = {},
                V = 1; V < d; ++V)
                    H[2][l + V] = T + V;
            return new u(T,H)
        }
        function N(L, T, F) {
            return T < 60 || 13311 < T && T < 42607 ? new u(T,t) : L(T, F)
        }
        var z = [N, b, k, P, A];
        u.fromCharCode = z.reduceRight(function(L, T) {
            return function(F, V) {
                return T(L, F, V)
            }
        }, null),
        u.isHighSurrogate = function(L) {
            return L >= 55296 && L <= 56319
        }
        ,
        u.isLowSurrogate = function(L) {
            return L >= 56320 && L <= 57343
        }
        ,
        u.prototype.prepFeature = function() {
            this.feature || (this.feature = u.fromCharCode(this.codepoint, !0).feature)
        }
        ,
        u.prototype.toString = function() {
            if (this.codepoint < 65536)
                return String.fromCharCode(this.codepoint);
            var L = this.codepoint - 65536;
            return String.fromCharCode(Math.floor(L / 1024) + 55296, L % 1024 + 56320)
        }
        ,
        u.prototype.getDecomp = function() {
            return this.prepFeature(),
            this.feature[0] || null
        }
        ,
        u.prototype.isCompatibility = function() {
            return this.prepFeature(),
            !!this.feature[1] && this.feature[1] & 256
        }
        ,
        u.prototype.isExclude = function() {
            return this.prepFeature(),
            !!this.feature[1] && this.feature[1] & 512
        }
        ,
        u.prototype.getCanonicalClass = function() {
            return this.prepFeature(),
            this.feature[1] ? this.feature[1] & 255 : 0
        }
        ,
        u.prototype.getComposite = function(L) {
            if (this.prepFeature(),
            !this.feature[2])
                return null;
            var T = this.feature[2][L.codepoint];
            return T ? u.fromCharCode(T) : null
        }
        ;
        var M = function(L) {
            this.str = L,
            this.cursor = 0
        };
        M.prototype.next = function() {
            if (this.str && this.cursor < this.str.length) {
                var L = this.str.charCodeAt(this.cursor++), T;
                return u.isHighSurrogate(L) && this.cursor < this.str.length && u.isLowSurrogate(T = this.str.charCodeAt(this.cursor)) && (L = (L - 55296) * 1024 + (T - 56320) + 65536,
                ++this.cursor),
                u.fromCharCode(L)
            } else
                return this.str = null,
                null
        }
        ;
        var E = function(L, T) {
            this.it = L,
            this.canonical = T,
            this.resBuf = []
        };
        E.prototype.next = function() {
            function L(F, V) {
                var j = V.getDecomp();
                if (j && !(F && V.isCompatibility())) {
                    for (var W = [], h = 0; h < j.length; ++h) {
                        var C = L(F, u.fromCharCode(j[h]));
                        W = W.concat(C)
                    }
                    return W
                } else
                    return [V]
            }
            if (this.resBuf.length === 0) {
                var T = this.it.next();
                if (!T)
                    return null;
                this.resBuf = L(this.canonical, T)
            }
            return this.resBuf.shift()
        }
        ;
        var q = function(L) {
            this.it = L,
            this.resBuf = []
        };
        q.prototype.next = function() {
            var L;
            if (this.resBuf.length === 0)
                do {
                    var T = this.it.next();
                    if (!T)
                        break;
                    L = T.getCanonicalClass();
                    var F = this.resBuf.length;
                    if (L !== 0)
                        for (; F > 0; --F) {
                            var V = this.resBuf[F - 1]
                              , j = V.getCanonicalClass();
                            if (j <= L)
                                break
                        }
                    this.resBuf.splice(F, 0, T)
                } while (L !== 0);
            return this.resBuf.shift()
        }
        ;
        var Y = function(L) {
            this.it = L,
            this.procBuf = [],
            this.resBuf = [],
            this.lastClass = null
        };
        Y.prototype.next = function() {
            for (; this.resBuf.length === 0; ) {
                var L = this.it.next();
                if (!L) {
                    this.resBuf = this.procBuf,
                    this.procBuf = [];
                    break
                }
                if (this.procBuf.length === 0)
                    this.lastClass = L.getCanonicalClass(),
                    this.procBuf.push(L);
                else {
                    var T = this.procBuf[0]
                      , F = T.getComposite(L)
                      , V = L.getCanonicalClass();
                    F && (this.lastClass < V || this.lastClass === 0) ? this.procBuf[0] = F : (V === 0 && (this.resBuf = this.procBuf,
                    this.procBuf = []),
                    this.lastClass = V,
                    this.procBuf.push(L))
                }
            }
            return this.resBuf.shift()
        }
        ;
        var X = function(L, T) {
            switch (L) {
            case "NFD":
                return new q(new E(new M(T),!0));
            case "NFKD":
                return new q(new E(new M(T),!1));
            case "NFC":
                return new Y(new q(new E(new M(T),!0)));
            case "NFKC":
                return new Y(new q(new E(new M(T),!1)))
            }
            throw L + " is invalid"
        }
          , ce = function(L, T) {
            for (var F = X(L, T), V = "", j; j = F.next(); )
                V += j.toString();
            return V
        };
        function R(L) {
            return ce("NFD", L)
        }
        function ie(L) {
            return ce("NFKD", L)
        }
        function Se(L) {
            return ce("NFC", L)
        }
        function Be(L) {
            return ce("NFKC", L)
        }
        u.udata = {
            0: {
                60: [, , {
                    824: 8814
                }],
                61: [, , {
                    824: 8800
                }],
                62: [, , {
                    824: 8815
                }],
                65: [, , {
                    768: 192,
                    769: 193,
                    770: 194,
                    771: 195,
                    772: 256,
                    774: 258,
                    775: 550,
                    776: 196,
                    777: 7842,
                    778: 197,
                    780: 461,
                    783: 512,
                    785: 514,
                    803: 7840,
                    805: 7680,
                    808: 260
                }],
                66: [, , {
                    775: 7682,
                    803: 7684,
                    817: 7686
                }],
                67: [, , {
                    769: 262,
                    770: 264,
                    775: 266,
                    780: 268,
                    807: 199
                }],
                68: [, , {
                    775: 7690,
                    780: 270,
                    803: 7692,
                    807: 7696,
                    813: 7698,
                    817: 7694
                }],
                69: [, , {
                    768: 200,
                    769: 201,
                    770: 202,
                    771: 7868,
                    772: 274,
                    774: 276,
                    775: 278,
                    776: 203,
                    777: 7866,
                    780: 282,
                    783: 516,
                    785: 518,
                    803: 7864,
                    807: 552,
                    808: 280,
                    813: 7704,
                    816: 7706
                }],
                70: [, , {
                    775: 7710
                }],
                71: [, , {
                    769: 500,
                    770: 284,
                    772: 7712,
                    774: 286,
                    775: 288,
                    780: 486,
                    807: 290
                }],
                72: [, , {
                    770: 292,
                    775: 7714,
                    776: 7718,
                    780: 542,
                    803: 7716,
                    807: 7720,
                    814: 7722
                }],
                73: [, , {
                    768: 204,
                    769: 205,
                    770: 206,
                    771: 296,
                    772: 298,
                    774: 300,
                    775: 304,
                    776: 207,
                    777: 7880,
                    780: 463,
                    783: 520,
                    785: 522,
                    803: 7882,
                    808: 302,
                    816: 7724
                }],
                74: [, , {
                    770: 308
                }],
                75: [, , {
                    769: 7728,
                    780: 488,
                    803: 7730,
                    807: 310,
                    817: 7732
                }],
                76: [, , {
                    769: 313,
                    780: 317,
                    803: 7734,
                    807: 315,
                    813: 7740,
                    817: 7738
                }],
                77: [, , {
                    769: 7742,
                    775: 7744,
                    803: 7746
                }],
                78: [, , {
                    768: 504,
                    769: 323,
                    771: 209,
                    775: 7748,
                    780: 327,
                    803: 7750,
                    807: 325,
                    813: 7754,
                    817: 7752
                }],
                79: [, , {
                    768: 210,
                    769: 211,
                    770: 212,
                    771: 213,
                    772: 332,
                    774: 334,
                    775: 558,
                    776: 214,
                    777: 7886,
                    779: 336,
                    780: 465,
                    783: 524,
                    785: 526,
                    795: 416,
                    803: 7884,
                    808: 490
                }],
                80: [, , {
                    769: 7764,
                    775: 7766
                }],
                82: [, , {
                    769: 340,
                    775: 7768,
                    780: 344,
                    783: 528,
                    785: 530,
                    803: 7770,
                    807: 342,
                    817: 7774
                }],
                83: [, , {
                    769: 346,
                    770: 348,
                    775: 7776,
                    780: 352,
                    803: 7778,
                    806: 536,
                    807: 350
                }],
                84: [, , {
                    775: 7786,
                    780: 356,
                    803: 7788,
                    806: 538,
                    807: 354,
                    813: 7792,
                    817: 7790
                }],
                85: [, , {
                    768: 217,
                    769: 218,
                    770: 219,
                    771: 360,
                    772: 362,
                    774: 364,
                    776: 220,
                    777: 7910,
                    778: 366,
                    779: 368,
                    780: 467,
                    783: 532,
                    785: 534,
                    795: 431,
                    803: 7908,
                    804: 7794,
                    808: 370,
                    813: 7798,
                    816: 7796
                }],
                86: [, , {
                    771: 7804,
                    803: 7806
                }],
                87: [, , {
                    768: 7808,
                    769: 7810,
                    770: 372,
                    775: 7814,
                    776: 7812,
                    803: 7816
                }],
                88: [, , {
                    775: 7818,
                    776: 7820
                }],
                89: [, , {
                    768: 7922,
                    769: 221,
                    770: 374,
                    771: 7928,
                    772: 562,
                    775: 7822,
                    776: 376,
                    777: 7926,
                    803: 7924
                }],
                90: [, , {
                    769: 377,
                    770: 7824,
                    775: 379,
                    780: 381,
                    803: 7826,
                    817: 7828
                }],
                97: [, , {
                    768: 224,
                    769: 225,
                    770: 226,
                    771: 227,
                    772: 257,
                    774: 259,
                    775: 551,
                    776: 228,
                    777: 7843,
                    778: 229,
                    780: 462,
                    783: 513,
                    785: 515,
                    803: 7841,
                    805: 7681,
                    808: 261
                }],
                98: [, , {
                    775: 7683,
                    803: 7685,
                    817: 7687
                }],
                99: [, , {
                    769: 263,
                    770: 265,
                    775: 267,
                    780: 269,
                    807: 231
                }],
                100: [, , {
                    775: 7691,
                    780: 271,
                    803: 7693,
                    807: 7697,
                    813: 7699,
                    817: 7695
                }],
                101: [, , {
                    768: 232,
                    769: 233,
                    770: 234,
                    771: 7869,
                    772: 275,
                    774: 277,
                    775: 279,
                    776: 235,
                    777: 7867,
                    780: 283,
                    783: 517,
                    785: 519,
                    803: 7865,
                    807: 553,
                    808: 281,
                    813: 7705,
                    816: 7707
                }],
                102: [, , {
                    775: 7711
                }],
                103: [, , {
                    769: 501,
                    770: 285,
                    772: 7713,
                    774: 287,
                    775: 289,
                    780: 487,
                    807: 291
                }],
                104: [, , {
                    770: 293,
                    775: 7715,
                    776: 7719,
                    780: 543,
                    803: 7717,
                    807: 7721,
                    814: 7723,
                    817: 7830
                }],
                105: [, , {
                    768: 236,
                    769: 237,
                    770: 238,
                    771: 297,
                    772: 299,
                    774: 301,
                    776: 239,
                    777: 7881,
                    780: 464,
                    783: 521,
                    785: 523,
                    803: 7883,
                    808: 303,
                    816: 7725
                }],
                106: [, , {
                    770: 309,
                    780: 496
                }],
                107: [, , {
                    769: 7729,
                    780: 489,
                    803: 7731,
                    807: 311,
                    817: 7733
                }],
                108: [, , {
                    769: 314,
                    780: 318,
                    803: 7735,
                    807: 316,
                    813: 7741,
                    817: 7739
                }],
                109: [, , {
                    769: 7743,
                    775: 7745,
                    803: 7747
                }],
                110: [, , {
                    768: 505,
                    769: 324,
                    771: 241,
                    775: 7749,
                    780: 328,
                    803: 7751,
                    807: 326,
                    813: 7755,
                    817: 7753
                }],
                111: [, , {
                    768: 242,
                    769: 243,
                    770: 244,
                    771: 245,
                    772: 333,
                    774: 335,
                    775: 559,
                    776: 246,
                    777: 7887,
                    779: 337,
                    780: 466,
                    783: 525,
                    785: 527,
                    795: 417,
                    803: 7885,
                    808: 491
                }],
                112: [, , {
                    769: 7765,
                    775: 7767
                }],
                114: [, , {
                    769: 341,
                    775: 7769,
                    780: 345,
                    783: 529,
                    785: 531,
                    803: 7771,
                    807: 343,
                    817: 7775
                }],
                115: [, , {
                    769: 347,
                    770: 349,
                    775: 7777,
                    780: 353,
                    803: 7779,
                    806: 537,
                    807: 351
                }],
                116: [, , {
                    775: 7787,
                    776: 7831,
                    780: 357,
                    803: 7789,
                    806: 539,
                    807: 355,
                    813: 7793,
                    817: 7791
                }],
                117: [, , {
                    768: 249,
                    769: 250,
                    770: 251,
                    771: 361,
                    772: 363,
                    774: 365,
                    776: 252,
                    777: 7911,
                    778: 367,
                    779: 369,
                    780: 468,
                    783: 533,
                    785: 535,
                    795: 432,
                    803: 7909,
                    804: 7795,
                    808: 371,
                    813: 7799,
                    816: 7797
                }],
                118: [, , {
                    771: 7805,
                    803: 7807
                }],
                119: [, , {
                    768: 7809,
                    769: 7811,
                    770: 373,
                    775: 7815,
                    776: 7813,
                    778: 7832,
                    803: 7817
                }],
                120: [, , {
                    775: 7819,
                    776: 7821
                }],
                121: [, , {
                    768: 7923,
                    769: 253,
                    770: 375,
                    771: 7929,
                    772: 563,
                    775: 7823,
                    776: 255,
                    777: 7927,
                    778: 7833,
                    803: 7925
                }],
                122: [, , {
                    769: 378,
                    770: 7825,
                    775: 380,
                    780: 382,
                    803: 7827,
                    817: 7829
                }],
                160: [[32], 256],
                168: [[32, 776], 256, {
                    768: 8173,
                    769: 901,
                    834: 8129
                }],
                170: [[97], 256],
                175: [[32, 772], 256],
                178: [[50], 256],
                179: [[51], 256],
                180: [[32, 769], 256],
                181: [[956], 256],
                184: [[32, 807], 256],
                185: [[49], 256],
                186: [[111], 256],
                188: [[49, 8260, 52], 256],
                189: [[49, 8260, 50], 256],
                190: [[51, 8260, 52], 256],
                192: [[65, 768]],
                193: [[65, 769]],
                194: [[65, 770], , {
                    768: 7846,
                    769: 7844,
                    771: 7850,
                    777: 7848
                }],
                195: [[65, 771]],
                196: [[65, 776], , {
                    772: 478
                }],
                197: [[65, 778], , {
                    769: 506
                }],
                198: [, , {
                    769: 508,
                    772: 482
                }],
                199: [[67, 807], , {
                    769: 7688
                }],
                200: [[69, 768]],
                201: [[69, 769]],
                202: [[69, 770], , {
                    768: 7872,
                    769: 7870,
                    771: 7876,
                    777: 7874
                }],
                203: [[69, 776]],
                204: [[73, 768]],
                205: [[73, 769]],
                206: [[73, 770]],
                207: [[73, 776], , {
                    769: 7726
                }],
                209: [[78, 771]],
                210: [[79, 768]],
                211: [[79, 769]],
                212: [[79, 770], , {
                    768: 7890,
                    769: 7888,
                    771: 7894,
                    777: 7892
                }],
                213: [[79, 771], , {
                    769: 7756,
                    772: 556,
                    776: 7758
                }],
                214: [[79, 776], , {
                    772: 554
                }],
                216: [, , {
                    769: 510
                }],
                217: [[85, 768]],
                218: [[85, 769]],
                219: [[85, 770]],
                220: [[85, 776], , {
                    768: 475,
                    769: 471,
                    772: 469,
                    780: 473
                }],
                221: [[89, 769]],
                224: [[97, 768]],
                225: [[97, 769]],
                226: [[97, 770], , {
                    768: 7847,
                    769: 7845,
                    771: 7851,
                    777: 7849
                }],
                227: [[97, 771]],
                228: [[97, 776], , {
                    772: 479
                }],
                229: [[97, 778], , {
                    769: 507
                }],
                230: [, , {
                    769: 509,
                    772: 483
                }],
                231: [[99, 807], , {
                    769: 7689
                }],
                232: [[101, 768]],
                233: [[101, 769]],
                234: [[101, 770], , {
                    768: 7873,
                    769: 7871,
                    771: 7877,
                    777: 7875
                }],
                235: [[101, 776]],
                236: [[105, 768]],
                237: [[105, 769]],
                238: [[105, 770]],
                239: [[105, 776], , {
                    769: 7727
                }],
                241: [[110, 771]],
                242: [[111, 768]],
                243: [[111, 769]],
                244: [[111, 770], , {
                    768: 7891,
                    769: 7889,
                    771: 7895,
                    777: 7893
                }],
                245: [[111, 771], , {
                    769: 7757,
                    772: 557,
                    776: 7759
                }],
                246: [[111, 776], , {
                    772: 555
                }],
                248: [, , {
                    769: 511
                }],
                249: [[117, 768]],
                250: [[117, 769]],
                251: [[117, 770]],
                252: [[117, 776], , {
                    768: 476,
                    769: 472,
                    772: 470,
                    780: 474
                }],
                253: [[121, 769]],
                255: [[121, 776]]
            },
            256: {
                256: [[65, 772]],
                257: [[97, 772]],
                258: [[65, 774], , {
                    768: 7856,
                    769: 7854,
                    771: 7860,
                    777: 7858
                }],
                259: [[97, 774], , {
                    768: 7857,
                    769: 7855,
                    771: 7861,
                    777: 7859
                }],
                260: [[65, 808]],
                261: [[97, 808]],
                262: [[67, 769]],
                263: [[99, 769]],
                264: [[67, 770]],
                265: [[99, 770]],
                266: [[67, 775]],
                267: [[99, 775]],
                268: [[67, 780]],
                269: [[99, 780]],
                270: [[68, 780]],
                271: [[100, 780]],
                274: [[69, 772], , {
                    768: 7700,
                    769: 7702
                }],
                275: [[101, 772], , {
                    768: 7701,
                    769: 7703
                }],
                276: [[69, 774]],
                277: [[101, 774]],
                278: [[69, 775]],
                279: [[101, 775]],
                280: [[69, 808]],
                281: [[101, 808]],
                282: [[69, 780]],
                283: [[101, 780]],
                284: [[71, 770]],
                285: [[103, 770]],
                286: [[71, 774]],
                287: [[103, 774]],
                288: [[71, 775]],
                289: [[103, 775]],
                290: [[71, 807]],
                291: [[103, 807]],
                292: [[72, 770]],
                293: [[104, 770]],
                296: [[73, 771]],
                297: [[105, 771]],
                298: [[73, 772]],
                299: [[105, 772]],
                300: [[73, 774]],
                301: [[105, 774]],
                302: [[73, 808]],
                303: [[105, 808]],
                304: [[73, 775]],
                306: [[73, 74], 256],
                307: [[105, 106], 256],
                308: [[74, 770]],
                309: [[106, 770]],
                310: [[75, 807]],
                311: [[107, 807]],
                313: [[76, 769]],
                314: [[108, 769]],
                315: [[76, 807]],
                316: [[108, 807]],
                317: [[76, 780]],
                318: [[108, 780]],
                319: [[76, 183], 256],
                320: [[108, 183], 256],
                323: [[78, 769]],
                324: [[110, 769]],
                325: [[78, 807]],
                326: [[110, 807]],
                327: [[78, 780]],
                328: [[110, 780]],
                329: [[700, 110], 256],
                332: [[79, 772], , {
                    768: 7760,
                    769: 7762
                }],
                333: [[111, 772], , {
                    768: 7761,
                    769: 7763
                }],
                334: [[79, 774]],
                335: [[111, 774]],
                336: [[79, 779]],
                337: [[111, 779]],
                340: [[82, 769]],
                341: [[114, 769]],
                342: [[82, 807]],
                343: [[114, 807]],
                344: [[82, 780]],
                345: [[114, 780]],
                346: [[83, 769], , {
                    775: 7780
                }],
                347: [[115, 769], , {
                    775: 7781
                }],
                348: [[83, 770]],
                349: [[115, 770]],
                350: [[83, 807]],
                351: [[115, 807]],
                352: [[83, 780], , {
                    775: 7782
                }],
                353: [[115, 780], , {
                    775: 7783
                }],
                354: [[84, 807]],
                355: [[116, 807]],
                356: [[84, 780]],
                357: [[116, 780]],
                360: [[85, 771], , {
                    769: 7800
                }],
                361: [[117, 771], , {
                    769: 7801
                }],
                362: [[85, 772], , {
                    776: 7802
                }],
                363: [[117, 772], , {
                    776: 7803
                }],
                364: [[85, 774]],
                365: [[117, 774]],
                366: [[85, 778]],
                367: [[117, 778]],
                368: [[85, 779]],
                369: [[117, 779]],
                370: [[85, 808]],
                371: [[117, 808]],
                372: [[87, 770]],
                373: [[119, 770]],
                374: [[89, 770]],
                375: [[121, 770]],
                376: [[89, 776]],
                377: [[90, 769]],
                378: [[122, 769]],
                379: [[90, 775]],
                380: [[122, 775]],
                381: [[90, 780]],
                382: [[122, 780]],
                383: [[115], 256, {
                    775: 7835
                }],
                416: [[79, 795], , {
                    768: 7900,
                    769: 7898,
                    771: 7904,
                    777: 7902,
                    803: 7906
                }],
                417: [[111, 795], , {
                    768: 7901,
                    769: 7899,
                    771: 7905,
                    777: 7903,
                    803: 7907
                }],
                431: [[85, 795], , {
                    768: 7914,
                    769: 7912,
                    771: 7918,
                    777: 7916,
                    803: 7920
                }],
                432: [[117, 795], , {
                    768: 7915,
                    769: 7913,
                    771: 7919,
                    777: 7917,
                    803: 7921
                }],
                439: [, , {
                    780: 494
                }],
                452: [[68, 381], 256],
                453: [[68, 382], 256],
                454: [[100, 382], 256],
                455: [[76, 74], 256],
                456: [[76, 106], 256],
                457: [[108, 106], 256],
                458: [[78, 74], 256],
                459: [[78, 106], 256],
                460: [[110, 106], 256],
                461: [[65, 780]],
                462: [[97, 780]],
                463: [[73, 780]],
                464: [[105, 780]],
                465: [[79, 780]],
                466: [[111, 780]],
                467: [[85, 780]],
                468: [[117, 780]],
                469: [[220, 772]],
                470: [[252, 772]],
                471: [[220, 769]],
                472: [[252, 769]],
                473: [[220, 780]],
                474: [[252, 780]],
                475: [[220, 768]],
                476: [[252, 768]],
                478: [[196, 772]],
                479: [[228, 772]],
                480: [[550, 772]],
                481: [[551, 772]],
                482: [[198, 772]],
                483: [[230, 772]],
                486: [[71, 780]],
                487: [[103, 780]],
                488: [[75, 780]],
                489: [[107, 780]],
                490: [[79, 808], , {
                    772: 492
                }],
                491: [[111, 808], , {
                    772: 493
                }],
                492: [[490, 772]],
                493: [[491, 772]],
                494: [[439, 780]],
                495: [[658, 780]],
                496: [[106, 780]],
                497: [[68, 90], 256],
                498: [[68, 122], 256],
                499: [[100, 122], 256],
                500: [[71, 769]],
                501: [[103, 769]],
                504: [[78, 768]],
                505: [[110, 768]],
                506: [[197, 769]],
                507: [[229, 769]],
                508: [[198, 769]],
                509: [[230, 769]],
                510: [[216, 769]],
                511: [[248, 769]],
                66045: [, 220]
            },
            512: {
                512: [[65, 783]],
                513: [[97, 783]],
                514: [[65, 785]],
                515: [[97, 785]],
                516: [[69, 783]],
                517: [[101, 783]],
                518: [[69, 785]],
                519: [[101, 785]],
                520: [[73, 783]],
                521: [[105, 783]],
                522: [[73, 785]],
                523: [[105, 785]],
                524: [[79, 783]],
                525: [[111, 783]],
                526: [[79, 785]],
                527: [[111, 785]],
                528: [[82, 783]],
                529: [[114, 783]],
                530: [[82, 785]],
                531: [[114, 785]],
                532: [[85, 783]],
                533: [[117, 783]],
                534: [[85, 785]],
                535: [[117, 785]],
                536: [[83, 806]],
                537: [[115, 806]],
                538: [[84, 806]],
                539: [[116, 806]],
                542: [[72, 780]],
                543: [[104, 780]],
                550: [[65, 775], , {
                    772: 480
                }],
                551: [[97, 775], , {
                    772: 481
                }],
                552: [[69, 807], , {
                    774: 7708
                }],
                553: [[101, 807], , {
                    774: 7709
                }],
                554: [[214, 772]],
                555: [[246, 772]],
                556: [[213, 772]],
                557: [[245, 772]],
                558: [[79, 775], , {
                    772: 560
                }],
                559: [[111, 775], , {
                    772: 561
                }],
                560: [[558, 772]],
                561: [[559, 772]],
                562: [[89, 772]],
                563: [[121, 772]],
                658: [, , {
                    780: 495
                }],
                688: [[104], 256],
                689: [[614], 256],
                690: [[106], 256],
                691: [[114], 256],
                692: [[633], 256],
                693: [[635], 256],
                694: [[641], 256],
                695: [[119], 256],
                696: [[121], 256],
                728: [[32, 774], 256],
                729: [[32, 775], 256],
                730: [[32, 778], 256],
                731: [[32, 808], 256],
                732: [[32, 771], 256],
                733: [[32, 779], 256],
                736: [[611], 256],
                737: [[108], 256],
                738: [[115], 256],
                739: [[120], 256],
                740: [[661], 256],
                66272: [, 220]
            },
            768: {
                768: [, 230],
                769: [, 230],
                770: [, 230],
                771: [, 230],
                772: [, 230],
                773: [, 230],
                774: [, 230],
                775: [, 230],
                776: [, 230, {
                    769: 836
                }],
                777: [, 230],
                778: [, 230],
                779: [, 230],
                780: [, 230],
                781: [, 230],
                782: [, 230],
                783: [, 230],
                784: [, 230],
                785: [, 230],
                786: [, 230],
                787: [, 230],
                788: [, 230],
                789: [, 232],
                790: [, 220],
                791: [, 220],
                792: [, 220],
                793: [, 220],
                794: [, 232],
                795: [, 216],
                796: [, 220],
                797: [, 220],
                798: [, 220],
                799: [, 220],
                800: [, 220],
                801: [, 202],
                802: [, 202],
                803: [, 220],
                804: [, 220],
                805: [, 220],
                806: [, 220],
                807: [, 202],
                808: [, 202],
                809: [, 220],
                810: [, 220],
                811: [, 220],
                812: [, 220],
                813: [, 220],
                814: [, 220],
                815: [, 220],
                816: [, 220],
                817: [, 220],
                818: [, 220],
                819: [, 220],
                820: [, 1],
                821: [, 1],
                822: [, 1],
                823: [, 1],
                824: [, 1],
                825: [, 220],
                826: [, 220],
                827: [, 220],
                828: [, 220],
                829: [, 230],
                830: [, 230],
                831: [, 230],
                832: [[768], 230],
                833: [[769], 230],
                834: [, 230],
                835: [[787], 230],
                836: [[776, 769], 230],
                837: [, 240],
                838: [, 230],
                839: [, 220],
                840: [, 220],
                841: [, 220],
                842: [, 230],
                843: [, 230],
                844: [, 230],
                845: [, 220],
                846: [, 220],
                848: [, 230],
                849: [, 230],
                850: [, 230],
                851: [, 220],
                852: [, 220],
                853: [, 220],
                854: [, 220],
                855: [, 230],
                856: [, 232],
                857: [, 220],
                858: [, 220],
                859: [, 230],
                860: [, 233],
                861: [, 234],
                862: [, 234],
                863: [, 233],
                864: [, 234],
                865: [, 234],
                866: [, 233],
                867: [, 230],
                868: [, 230],
                869: [, 230],
                870: [, 230],
                871: [, 230],
                872: [, 230],
                873: [, 230],
                874: [, 230],
                875: [, 230],
                876: [, 230],
                877: [, 230],
                878: [, 230],
                879: [, 230],
                884: [[697]],
                890: [[32, 837], 256],
                894: [[59]],
                900: [[32, 769], 256],
                901: [[168, 769]],
                902: [[913, 769]],
                903: [[183]],
                904: [[917, 769]],
                905: [[919, 769]],
                906: [[921, 769]],
                908: [[927, 769]],
                910: [[933, 769]],
                911: [[937, 769]],
                912: [[970, 769]],
                913: [, , {
                    768: 8122,
                    769: 902,
                    772: 8121,
                    774: 8120,
                    787: 7944,
                    788: 7945,
                    837: 8124
                }],
                917: [, , {
                    768: 8136,
                    769: 904,
                    787: 7960,
                    788: 7961
                }],
                919: [, , {
                    768: 8138,
                    769: 905,
                    787: 7976,
                    788: 7977,
                    837: 8140
                }],
                921: [, , {
                    768: 8154,
                    769: 906,
                    772: 8153,
                    774: 8152,
                    776: 938,
                    787: 7992,
                    788: 7993
                }],
                927: [, , {
                    768: 8184,
                    769: 908,
                    787: 8008,
                    788: 8009
                }],
                929: [, , {
                    788: 8172
                }],
                933: [, , {
                    768: 8170,
                    769: 910,
                    772: 8169,
                    774: 8168,
                    776: 939,
                    788: 8025
                }],
                937: [, , {
                    768: 8186,
                    769: 911,
                    787: 8040,
                    788: 8041,
                    837: 8188
                }],
                938: [[921, 776]],
                939: [[933, 776]],
                940: [[945, 769], , {
                    837: 8116
                }],
                941: [[949, 769]],
                942: [[951, 769], , {
                    837: 8132
                }],
                943: [[953, 769]],
                944: [[971, 769]],
                945: [, , {
                    768: 8048,
                    769: 940,
                    772: 8113,
                    774: 8112,
                    787: 7936,
                    788: 7937,
                    834: 8118,
                    837: 8115
                }],
                949: [, , {
                    768: 8050,
                    769: 941,
                    787: 7952,
                    788: 7953
                }],
                951: [, , {
                    768: 8052,
                    769: 942,
                    787: 7968,
                    788: 7969,
                    834: 8134,
                    837: 8131
                }],
                953: [, , {
                    768: 8054,
                    769: 943,
                    772: 8145,
                    774: 8144,
                    776: 970,
                    787: 7984,
                    788: 7985,
                    834: 8150
                }],
                959: [, , {
                    768: 8056,
                    769: 972,
                    787: 8e3,
                    788: 8001
                }],
                961: [, , {
                    787: 8164,
                    788: 8165
                }],
                965: [, , {
                    768: 8058,
                    769: 973,
                    772: 8161,
                    774: 8160,
                    776: 971,
                    787: 8016,
                    788: 8017,
                    834: 8166
                }],
                969: [, , {
                    768: 8060,
                    769: 974,
                    787: 8032,
                    788: 8033,
                    834: 8182,
                    837: 8179
                }],
                970: [[953, 776], , {
                    768: 8146,
                    769: 912,
                    834: 8151
                }],
                971: [[965, 776], , {
                    768: 8162,
                    769: 944,
                    834: 8167
                }],
                972: [[959, 769]],
                973: [[965, 769]],
                974: [[969, 769], , {
                    837: 8180
                }],
                976: [[946], 256],
                977: [[952], 256],
                978: [[933], 256, {
                    769: 979,
                    776: 980
                }],
                979: [[978, 769]],
                980: [[978, 776]],
                981: [[966], 256],
                982: [[960], 256],
                1008: [[954], 256],
                1009: [[961], 256],
                1010: [[962], 256],
                1012: [[920], 256],
                1013: [[949], 256],
                1017: [[931], 256],
                66422: [, 230],
                66423: [, 230],
                66424: [, 230],
                66425: [, 230],
                66426: [, 230]
            },
            1024: {
                1024: [[1045, 768]],
                1025: [[1045, 776]],
                1027: [[1043, 769]],
                1030: [, , {
                    776: 1031
                }],
                1031: [[1030, 776]],
                1036: [[1050, 769]],
                1037: [[1048, 768]],
                1038: [[1059, 774]],
                1040: [, , {
                    774: 1232,
                    776: 1234
                }],
                1043: [, , {
                    769: 1027
                }],
                1045: [, , {
                    768: 1024,
                    774: 1238,
                    776: 1025
                }],
                1046: [, , {
                    774: 1217,
                    776: 1244
                }],
                1047: [, , {
                    776: 1246
                }],
                1048: [, , {
                    768: 1037,
                    772: 1250,
                    774: 1049,
                    776: 1252
                }],
                1049: [[1048, 774]],
                1050: [, , {
                    769: 1036
                }],
                1054: [, , {
                    776: 1254
                }],
                1059: [, , {
                    772: 1262,
                    774: 1038,
                    776: 1264,
                    779: 1266
                }],
                1063: [, , {
                    776: 1268
                }],
                1067: [, , {
                    776: 1272
                }],
                1069: [, , {
                    776: 1260
                }],
                1072: [, , {
                    774: 1233,
                    776: 1235
                }],
                1075: [, , {
                    769: 1107
                }],
                1077: [, , {
                    768: 1104,
                    774: 1239,
                    776: 1105
                }],
                1078: [, , {
                    774: 1218,
                    776: 1245
                }],
                1079: [, , {
                    776: 1247
                }],
                1080: [, , {
                    768: 1117,
                    772: 1251,
                    774: 1081,
                    776: 1253
                }],
                1081: [[1080, 774]],
                1082: [, , {
                    769: 1116
                }],
                1086: [, , {
                    776: 1255
                }],
                1091: [, , {
                    772: 1263,
                    774: 1118,
                    776: 1265,
                    779: 1267
                }],
                1095: [, , {
                    776: 1269
                }],
                1099: [, , {
                    776: 1273
                }],
                1101: [, , {
                    776: 1261
                }],
                1104: [[1077, 768]],
                1105: [[1077, 776]],
                1107: [[1075, 769]],
                1110: [, , {
                    776: 1111
                }],
                1111: [[1110, 776]],
                1116: [[1082, 769]],
                1117: [[1080, 768]],
                1118: [[1091, 774]],
                1140: [, , {
                    783: 1142
                }],
                1141: [, , {
                    783: 1143
                }],
                1142: [[1140, 783]],
                1143: [[1141, 783]],
                1155: [, 230],
                1156: [, 230],
                1157: [, 230],
                1158: [, 230],
                1159: [, 230],
                1217: [[1046, 774]],
                1218: [[1078, 774]],
                1232: [[1040, 774]],
                1233: [[1072, 774]],
                1234: [[1040, 776]],
                1235: [[1072, 776]],
                1238: [[1045, 774]],
                1239: [[1077, 774]],
                1240: [, , {
                    776: 1242
                }],
                1241: [, , {
                    776: 1243
                }],
                1242: [[1240, 776]],
                1243: [[1241, 776]],
                1244: [[1046, 776]],
                1245: [[1078, 776]],
                1246: [[1047, 776]],
                1247: [[1079, 776]],
                1250: [[1048, 772]],
                1251: [[1080, 772]],
                1252: [[1048, 776]],
                1253: [[1080, 776]],
                1254: [[1054, 776]],
                1255: [[1086, 776]],
                1256: [, , {
                    776: 1258
                }],
                1257: [, , {
                    776: 1259
                }],
                1258: [[1256, 776]],
                1259: [[1257, 776]],
                1260: [[1069, 776]],
                1261: [[1101, 776]],
                1262: [[1059, 772]],
                1263: [[1091, 772]],
                1264: [[1059, 776]],
                1265: [[1091, 776]],
                1266: [[1059, 779]],
                1267: [[1091, 779]],
                1268: [[1063, 776]],
                1269: [[1095, 776]],
                1272: [[1067, 776]],
                1273: [[1099, 776]]
            },
            1280: {
                1415: [[1381, 1410], 256],
                1425: [, 220],
                1426: [, 230],
                1427: [, 230],
                1428: [, 230],
                1429: [, 230],
                1430: [, 220],
                1431: [, 230],
                1432: [, 230],
                1433: [, 230],
                1434: [, 222],
                1435: [, 220],
                1436: [, 230],
                1437: [, 230],
                1438: [, 230],
                1439: [, 230],
                1440: [, 230],
                1441: [, 230],
                1442: [, 220],
                1443: [, 220],
                1444: [, 220],
                1445: [, 220],
                1446: [, 220],
                1447: [, 220],
                1448: [, 230],
                1449: [, 230],
                1450: [, 220],
                1451: [, 230],
                1452: [, 230],
                1453: [, 222],
                1454: [, 228],
                1455: [, 230],
                1456: [, 10],
                1457: [, 11],
                1458: [, 12],
                1459: [, 13],
                1460: [, 14],
                1461: [, 15],
                1462: [, 16],
                1463: [, 17],
                1464: [, 18],
                1465: [, 19],
                1466: [, 19],
                1467: [, 20],
                1468: [, 21],
                1469: [, 22],
                1471: [, 23],
                1473: [, 24],
                1474: [, 25],
                1476: [, 230],
                1477: [, 220],
                1479: [, 18]
            },
            1536: {
                1552: [, 230],
                1553: [, 230],
                1554: [, 230],
                1555: [, 230],
                1556: [, 230],
                1557: [, 230],
                1558: [, 230],
                1559: [, 230],
                1560: [, 30],
                1561: [, 31],
                1562: [, 32],
                1570: [[1575, 1619]],
                1571: [[1575, 1620]],
                1572: [[1608, 1620]],
                1573: [[1575, 1621]],
                1574: [[1610, 1620]],
                1575: [, , {
                    1619: 1570,
                    1620: 1571,
                    1621: 1573
                }],
                1608: [, , {
                    1620: 1572
                }],
                1610: [, , {
                    1620: 1574
                }],
                1611: [, 27],
                1612: [, 28],
                1613: [, 29],
                1614: [, 30],
                1615: [, 31],
                1616: [, 32],
                1617: [, 33],
                1618: [, 34],
                1619: [, 230],
                1620: [, 230],
                1621: [, 220],
                1622: [, 220],
                1623: [, 230],
                1624: [, 230],
                1625: [, 230],
                1626: [, 230],
                1627: [, 230],
                1628: [, 220],
                1629: [, 230],
                1630: [, 230],
                1631: [, 220],
                1648: [, 35],
                1653: [[1575, 1652], 256],
                1654: [[1608, 1652], 256],
                1655: [[1735, 1652], 256],
                1656: [[1610, 1652], 256],
                1728: [[1749, 1620]],
                1729: [, , {
                    1620: 1730
                }],
                1730: [[1729, 1620]],
                1746: [, , {
                    1620: 1747
                }],
                1747: [[1746, 1620]],
                1749: [, , {
                    1620: 1728
                }],
                1750: [, 230],
                1751: [, 230],
                1752: [, 230],
                1753: [, 230],
                1754: [, 230],
                1755: [, 230],
                1756: [, 230],
                1759: [, 230],
                1760: [, 230],
                1761: [, 230],
                1762: [, 230],
                1763: [, 220],
                1764: [, 230],
                1767: [, 230],
                1768: [, 230],
                1770: [, 220],
                1771: [, 230],
                1772: [, 230],
                1773: [, 220]
            },
            1792: {
                1809: [, 36],
                1840: [, 230],
                1841: [, 220],
                1842: [, 230],
                1843: [, 230],
                1844: [, 220],
                1845: [, 230],
                1846: [, 230],
                1847: [, 220],
                1848: [, 220],
                1849: [, 220],
                1850: [, 230],
                1851: [, 220],
                1852: [, 220],
                1853: [, 230],
                1854: [, 220],
                1855: [, 230],
                1856: [, 230],
                1857: [, 230],
                1858: [, 220],
                1859: [, 230],
                1860: [, 220],
                1861: [, 230],
                1862: [, 220],
                1863: [, 230],
                1864: [, 220],
                1865: [, 230],
                1866: [, 230],
                2027: [, 230],
                2028: [, 230],
                2029: [, 230],
                2030: [, 230],
                2031: [, 230],
                2032: [, 230],
                2033: [, 230],
                2034: [, 220],
                2035: [, 230]
            },
            2048: {
                2070: [, 230],
                2071: [, 230],
                2072: [, 230],
                2073: [, 230],
                2075: [, 230],
                2076: [, 230],
                2077: [, 230],
                2078: [, 230],
                2079: [, 230],
                2080: [, 230],
                2081: [, 230],
                2082: [, 230],
                2083: [, 230],
                2085: [, 230],
                2086: [, 230],
                2087: [, 230],
                2089: [, 230],
                2090: [, 230],
                2091: [, 230],
                2092: [, 230],
                2093: [, 230],
                2137: [, 220],
                2138: [, 220],
                2139: [, 220],
                2276: [, 230],
                2277: [, 230],
                2278: [, 220],
                2279: [, 230],
                2280: [, 230],
                2281: [, 220],
                2282: [, 230],
                2283: [, 230],
                2284: [, 230],
                2285: [, 220],
                2286: [, 220],
                2287: [, 220],
                2288: [, 27],
                2289: [, 28],
                2290: [, 29],
                2291: [, 230],
                2292: [, 230],
                2293: [, 230],
                2294: [, 220],
                2295: [, 230],
                2296: [, 230],
                2297: [, 220],
                2298: [, 220],
                2299: [, 230],
                2300: [, 230],
                2301: [, 230],
                2302: [, 230],
                2303: [, 230]
            },
            2304: {
                2344: [, , {
                    2364: 2345
                }],
                2345: [[2344, 2364]],
                2352: [, , {
                    2364: 2353
                }],
                2353: [[2352, 2364]],
                2355: [, , {
                    2364: 2356
                }],
                2356: [[2355, 2364]],
                2364: [, 7],
                2381: [, 9],
                2385: [, 230],
                2386: [, 220],
                2387: [, 230],
                2388: [, 230],
                2392: [[2325, 2364], 512],
                2393: [[2326, 2364], 512],
                2394: [[2327, 2364], 512],
                2395: [[2332, 2364], 512],
                2396: [[2337, 2364], 512],
                2397: [[2338, 2364], 512],
                2398: [[2347, 2364], 512],
                2399: [[2351, 2364], 512],
                2492: [, 7],
                2503: [, , {
                    2494: 2507,
                    2519: 2508
                }],
                2507: [[2503, 2494]],
                2508: [[2503, 2519]],
                2509: [, 9],
                2524: [[2465, 2492], 512],
                2525: [[2466, 2492], 512],
                2527: [[2479, 2492], 512]
            },
            2560: {
                2611: [[2610, 2620], 512],
                2614: [[2616, 2620], 512],
                2620: [, 7],
                2637: [, 9],
                2649: [[2582, 2620], 512],
                2650: [[2583, 2620], 512],
                2651: [[2588, 2620], 512],
                2654: [[2603, 2620], 512],
                2748: [, 7],
                2765: [, 9],
                68109: [, 220],
                68111: [, 230],
                68152: [, 230],
                68153: [, 1],
                68154: [, 220],
                68159: [, 9],
                68325: [, 230],
                68326: [, 220]
            },
            2816: {
                2876: [, 7],
                2887: [, , {
                    2878: 2891,
                    2902: 2888,
                    2903: 2892
                }],
                2888: [[2887, 2902]],
                2891: [[2887, 2878]],
                2892: [[2887, 2903]],
                2893: [, 9],
                2908: [[2849, 2876], 512],
                2909: [[2850, 2876], 512],
                2962: [, , {
                    3031: 2964
                }],
                2964: [[2962, 3031]],
                3014: [, , {
                    3006: 3018,
                    3031: 3020
                }],
                3015: [, , {
                    3006: 3019
                }],
                3018: [[3014, 3006]],
                3019: [[3015, 3006]],
                3020: [[3014, 3031]],
                3021: [, 9]
            },
            3072: {
                3142: [, , {
                    3158: 3144
                }],
                3144: [[3142, 3158]],
                3149: [, 9],
                3157: [, 84],
                3158: [, 91],
                3260: [, 7],
                3263: [, , {
                    3285: 3264
                }],
                3264: [[3263, 3285]],
                3270: [, , {
                    3266: 3274,
                    3285: 3271,
                    3286: 3272
                }],
                3271: [[3270, 3285]],
                3272: [[3270, 3286]],
                3274: [[3270, 3266], , {
                    3285: 3275
                }],
                3275: [[3274, 3285]],
                3277: [, 9]
            },
            3328: {
                3398: [, , {
                    3390: 3402,
                    3415: 3404
                }],
                3399: [, , {
                    3390: 3403
                }],
                3402: [[3398, 3390]],
                3403: [[3399, 3390]],
                3404: [[3398, 3415]],
                3405: [, 9],
                3530: [, 9],
                3545: [, , {
                    3530: 3546,
                    3535: 3548,
                    3551: 3550
                }],
                3546: [[3545, 3530]],
                3548: [[3545, 3535], , {
                    3530: 3549
                }],
                3549: [[3548, 3530]],
                3550: [[3545, 3551]]
            },
            3584: {
                3635: [[3661, 3634], 256],
                3640: [, 103],
                3641: [, 103],
                3642: [, 9],
                3656: [, 107],
                3657: [, 107],
                3658: [, 107],
                3659: [, 107],
                3763: [[3789, 3762], 256],
                3768: [, 118],
                3769: [, 118],
                3784: [, 122],
                3785: [, 122],
                3786: [, 122],
                3787: [, 122],
                3804: [[3755, 3737], 256],
                3805: [[3755, 3745], 256]
            },
            3840: {
                3852: [[3851], 256],
                3864: [, 220],
                3865: [, 220],
                3893: [, 220],
                3895: [, 220],
                3897: [, 216],
                3907: [[3906, 4023], 512],
                3917: [[3916, 4023], 512],
                3922: [[3921, 4023], 512],
                3927: [[3926, 4023], 512],
                3932: [[3931, 4023], 512],
                3945: [[3904, 4021], 512],
                3953: [, 129],
                3954: [, 130],
                3955: [[3953, 3954], 512],
                3956: [, 132],
                3957: [[3953, 3956], 512],
                3958: [[4018, 3968], 512],
                3959: [[4018, 3969], 256],
                3960: [[4019, 3968], 512],
                3961: [[4019, 3969], 256],
                3962: [, 130],
                3963: [, 130],
                3964: [, 130],
                3965: [, 130],
                3968: [, 130],
                3969: [[3953, 3968], 512],
                3970: [, 230],
                3971: [, 230],
                3972: [, 9],
                3974: [, 230],
                3975: [, 230],
                3987: [[3986, 4023], 512],
                3997: [[3996, 4023], 512],
                4002: [[4001, 4023], 512],
                4007: [[4006, 4023], 512],
                4012: [[4011, 4023], 512],
                4025: [[3984, 4021], 512],
                4038: [, 220]
            },
            4096: {
                4133: [, , {
                    4142: 4134
                }],
                4134: [[4133, 4142]],
                4151: [, 7],
                4153: [, 9],
                4154: [, 9],
                4237: [, 220],
                4348: [[4316], 256],
                69702: [, 9],
                69759: [, 9],
                69785: [, , {
                    69818: 69786
                }],
                69786: [[69785, 69818]],
                69787: [, , {
                    69818: 69788
                }],
                69788: [[69787, 69818]],
                69797: [, , {
                    69818: 69803
                }],
                69803: [[69797, 69818]],
                69817: [, 9],
                69818: [, 7]
            },
            4352: {
                69888: [, 230],
                69889: [, 230],
                69890: [, 230],
                69934: [[69937, 69927]],
                69935: [[69938, 69927]],
                69937: [, , {
                    69927: 69934
                }],
                69938: [, , {
                    69927: 69935
                }],
                69939: [, 9],
                69940: [, 9],
                70003: [, 7],
                70080: [, 9]
            },
            4608: {
                70197: [, 9],
                70198: [, 7],
                70377: [, 7],
                70378: [, 9]
            },
            4864: {
                4957: [, 230],
                4958: [, 230],
                4959: [, 230],
                70460: [, 7],
                70471: [, , {
                    70462: 70475,
                    70487: 70476
                }],
                70475: [[70471, 70462]],
                70476: [[70471, 70487]],
                70477: [, 9],
                70502: [, 230],
                70503: [, 230],
                70504: [, 230],
                70505: [, 230],
                70506: [, 230],
                70507: [, 230],
                70508: [, 230],
                70512: [, 230],
                70513: [, 230],
                70514: [, 230],
                70515: [, 230],
                70516: [, 230]
            },
            5120: {
                70841: [, , {
                    70832: 70844,
                    70842: 70843,
                    70845: 70846
                }],
                70843: [[70841, 70842]],
                70844: [[70841, 70832]],
                70846: [[70841, 70845]],
                70850: [, 9],
                70851: [, 7]
            },
            5376: {
                71096: [, , {
                    71087: 71098
                }],
                71097: [, , {
                    71087: 71099
                }],
                71098: [[71096, 71087]],
                71099: [[71097, 71087]],
                71103: [, 9],
                71104: [, 7]
            },
            5632: {
                71231: [, 9],
                71350: [, 9],
                71351: [, 7]
            },
            5888: {
                5908: [, 9],
                5940: [, 9],
                6098: [, 9],
                6109: [, 230]
            },
            6144: {
                6313: [, 228]
            },
            6400: {
                6457: [, 222],
                6458: [, 230],
                6459: [, 220]
            },
            6656: {
                6679: [, 230],
                6680: [, 220],
                6752: [, 9],
                6773: [, 230],
                6774: [, 230],
                6775: [, 230],
                6776: [, 230],
                6777: [, 230],
                6778: [, 230],
                6779: [, 230],
                6780: [, 230],
                6783: [, 220],
                6832: [, 230],
                6833: [, 230],
                6834: [, 230],
                6835: [, 230],
                6836: [, 230],
                6837: [, 220],
                6838: [, 220],
                6839: [, 220],
                6840: [, 220],
                6841: [, 220],
                6842: [, 220],
                6843: [, 230],
                6844: [, 230],
                6845: [, 220]
            },
            6912: {
                6917: [, , {
                    6965: 6918
                }],
                6918: [[6917, 6965]],
                6919: [, , {
                    6965: 6920
                }],
                6920: [[6919, 6965]],
                6921: [, , {
                    6965: 6922
                }],
                6922: [[6921, 6965]],
                6923: [, , {
                    6965: 6924
                }],
                6924: [[6923, 6965]],
                6925: [, , {
                    6965: 6926
                }],
                6926: [[6925, 6965]],
                6929: [, , {
                    6965: 6930
                }],
                6930: [[6929, 6965]],
                6964: [, 7],
                6970: [, , {
                    6965: 6971
                }],
                6971: [[6970, 6965]],
                6972: [, , {
                    6965: 6973
                }],
                6973: [[6972, 6965]],
                6974: [, , {
                    6965: 6976
                }],
                6975: [, , {
                    6965: 6977
                }],
                6976: [[6974, 6965]],
                6977: [[6975, 6965]],
                6978: [, , {
                    6965: 6979
                }],
                6979: [[6978, 6965]],
                6980: [, 9],
                7019: [, 230],
                7020: [, 220],
                7021: [, 230],
                7022: [, 230],
                7023: [, 230],
                7024: [, 230],
                7025: [, 230],
                7026: [, 230],
                7027: [, 230],
                7082: [, 9],
                7083: [, 9],
                7142: [, 7],
                7154: [, 9],
                7155: [, 9]
            },
            7168: {
                7223: [, 7],
                7376: [, 230],
                7377: [, 230],
                7378: [, 230],
                7380: [, 1],
                7381: [, 220],
                7382: [, 220],
                7383: [, 220],
                7384: [, 220],
                7385: [, 220],
                7386: [, 230],
                7387: [, 230],
                7388: [, 220],
                7389: [, 220],
                7390: [, 220],
                7391: [, 220],
                7392: [, 230],
                7394: [, 1],
                7395: [, 1],
                7396: [, 1],
                7397: [, 1],
                7398: [, 1],
                7399: [, 1],
                7400: [, 1],
                7405: [, 220],
                7412: [, 230],
                7416: [, 230],
                7417: [, 230]
            },
            7424: {
                7468: [[65], 256],
                7469: [[198], 256],
                7470: [[66], 256],
                7472: [[68], 256],
                7473: [[69], 256],
                7474: [[398], 256],
                7475: [[71], 256],
                7476: [[72], 256],
                7477: [[73], 256],
                7478: [[74], 256],
                7479: [[75], 256],
                7480: [[76], 256],
                7481: [[77], 256],
                7482: [[78], 256],
                7484: [[79], 256],
                7485: [[546], 256],
                7486: [[80], 256],
                7487: [[82], 256],
                7488: [[84], 256],
                7489: [[85], 256],
                7490: [[87], 256],
                7491: [[97], 256],
                7492: [[592], 256],
                7493: [[593], 256],
                7494: [[7426], 256],
                7495: [[98], 256],
                7496: [[100], 256],
                7497: [[101], 256],
                7498: [[601], 256],
                7499: [[603], 256],
                7500: [[604], 256],
                7501: [[103], 256],
                7503: [[107], 256],
                7504: [[109], 256],
                7505: [[331], 256],
                7506: [[111], 256],
                7507: [[596], 256],
                7508: [[7446], 256],
                7509: [[7447], 256],
                7510: [[112], 256],
                7511: [[116], 256],
                7512: [[117], 256],
                7513: [[7453], 256],
                7514: [[623], 256],
                7515: [[118], 256],
                7516: [[7461], 256],
                7517: [[946], 256],
                7518: [[947], 256],
                7519: [[948], 256],
                7520: [[966], 256],
                7521: [[967], 256],
                7522: [[105], 256],
                7523: [[114], 256],
                7524: [[117], 256],
                7525: [[118], 256],
                7526: [[946], 256],
                7527: [[947], 256],
                7528: [[961], 256],
                7529: [[966], 256],
                7530: [[967], 256],
                7544: [[1085], 256],
                7579: [[594], 256],
                7580: [[99], 256],
                7581: [[597], 256],
                7582: [[240], 256],
                7583: [[604], 256],
                7584: [[102], 256],
                7585: [[607], 256],
                7586: [[609], 256],
                7587: [[613], 256],
                7588: [[616], 256],
                7589: [[617], 256],
                7590: [[618], 256],
                7591: [[7547], 256],
                7592: [[669], 256],
                7593: [[621], 256],
                7594: [[7557], 256],
                7595: [[671], 256],
                7596: [[625], 256],
                7597: [[624], 256],
                7598: [[626], 256],
                7599: [[627], 256],
                7600: [[628], 256],
                7601: [[629], 256],
                7602: [[632], 256],
                7603: [[642], 256],
                7604: [[643], 256],
                7605: [[427], 256],
                7606: [[649], 256],
                7607: [[650], 256],
                7608: [[7452], 256],
                7609: [[651], 256],
                7610: [[652], 256],
                7611: [[122], 256],
                7612: [[656], 256],
                7613: [[657], 256],
                7614: [[658], 256],
                7615: [[952], 256],
                7616: [, 230],
                7617: [, 230],
                7618: [, 220],
                7619: [, 230],
                7620: [, 230],
                7621: [, 230],
                7622: [, 230],
                7623: [, 230],
                7624: [, 230],
                7625: [, 230],
                7626: [, 220],
                7627: [, 230],
                7628: [, 230],
                7629: [, 234],
                7630: [, 214],
                7631: [, 220],
                7632: [, 202],
                7633: [, 230],
                7634: [, 230],
                7635: [, 230],
                7636: [, 230],
                7637: [, 230],
                7638: [, 230],
                7639: [, 230],
                7640: [, 230],
                7641: [, 230],
                7642: [, 230],
                7643: [, 230],
                7644: [, 230],
                7645: [, 230],
                7646: [, 230],
                7647: [, 230],
                7648: [, 230],
                7649: [, 230],
                7650: [, 230],
                7651: [, 230],
                7652: [, 230],
                7653: [, 230],
                7654: [, 230],
                7655: [, 230],
                7656: [, 230],
                7657: [, 230],
                7658: [, 230],
                7659: [, 230],
                7660: [, 230],
                7661: [, 230],
                7662: [, 230],
                7663: [, 230],
                7664: [, 230],
                7665: [, 230],
                7666: [, 230],
                7667: [, 230],
                7668: [, 230],
                7669: [, 230],
                7676: [, 233],
                7677: [, 220],
                7678: [, 230],
                7679: [, 220]
            },
            7680: {
                7680: [[65, 805]],
                7681: [[97, 805]],
                7682: [[66, 775]],
                7683: [[98, 775]],
                7684: [[66, 803]],
                7685: [[98, 803]],
                7686: [[66, 817]],
                7687: [[98, 817]],
                7688: [[199, 769]],
                7689: [[231, 769]],
                7690: [[68, 775]],
                7691: [[100, 775]],
                7692: [[68, 803]],
                7693: [[100, 803]],
                7694: [[68, 817]],
                7695: [[100, 817]],
                7696: [[68, 807]],
                7697: [[100, 807]],
                7698: [[68, 813]],
                7699: [[100, 813]],
                7700: [[274, 768]],
                7701: [[275, 768]],
                7702: [[274, 769]],
                7703: [[275, 769]],
                7704: [[69, 813]],
                7705: [[101, 813]],
                7706: [[69, 816]],
                7707: [[101, 816]],
                7708: [[552, 774]],
                7709: [[553, 774]],
                7710: [[70, 775]],
                7711: [[102, 775]],
                7712: [[71, 772]],
                7713: [[103, 772]],
                7714: [[72, 775]],
                7715: [[104, 775]],
                7716: [[72, 803]],
                7717: [[104, 803]],
                7718: [[72, 776]],
                7719: [[104, 776]],
                7720: [[72, 807]],
                7721: [[104, 807]],
                7722: [[72, 814]],
                7723: [[104, 814]],
                7724: [[73, 816]],
                7725: [[105, 816]],
                7726: [[207, 769]],
                7727: [[239, 769]],
                7728: [[75, 769]],
                7729: [[107, 769]],
                7730: [[75, 803]],
                7731: [[107, 803]],
                7732: [[75, 817]],
                7733: [[107, 817]],
                7734: [[76, 803], , {
                    772: 7736
                }],
                7735: [[108, 803], , {
                    772: 7737
                }],
                7736: [[7734, 772]],
                7737: [[7735, 772]],
                7738: [[76, 817]],
                7739: [[108, 817]],
                7740: [[76, 813]],
                7741: [[108, 813]],
                7742: [[77, 769]],
                7743: [[109, 769]],
                7744: [[77, 775]],
                7745: [[109, 775]],
                7746: [[77, 803]],
                7747: [[109, 803]],
                7748: [[78, 775]],
                7749: [[110, 775]],
                7750: [[78, 803]],
                7751: [[110, 803]],
                7752: [[78, 817]],
                7753: [[110, 817]],
                7754: [[78, 813]],
                7755: [[110, 813]],
                7756: [[213, 769]],
                7757: [[245, 769]],
                7758: [[213, 776]],
                7759: [[245, 776]],
                7760: [[332, 768]],
                7761: [[333, 768]],
                7762: [[332, 769]],
                7763: [[333, 769]],
                7764: [[80, 769]],
                7765: [[112, 769]],
                7766: [[80, 775]],
                7767: [[112, 775]],
                7768: [[82, 775]],
                7769: [[114, 775]],
                7770: [[82, 803], , {
                    772: 7772
                }],
                7771: [[114, 803], , {
                    772: 7773
                }],
                7772: [[7770, 772]],
                7773: [[7771, 772]],
                7774: [[82, 817]],
                7775: [[114, 817]],
                7776: [[83, 775]],
                7777: [[115, 775]],
                7778: [[83, 803], , {
                    775: 7784
                }],
                7779: [[115, 803], , {
                    775: 7785
                }],
                7780: [[346, 775]],
                7781: [[347, 775]],
                7782: [[352, 775]],
                7783: [[353, 775]],
                7784: [[7778, 775]],
                7785: [[7779, 775]],
                7786: [[84, 775]],
                7787: [[116, 775]],
                7788: [[84, 803]],
                7789: [[116, 803]],
                7790: [[84, 817]],
                7791: [[116, 817]],
                7792: [[84, 813]],
                7793: [[116, 813]],
                7794: [[85, 804]],
                7795: [[117, 804]],
                7796: [[85, 816]],
                7797: [[117, 816]],
                7798: [[85, 813]],
                7799: [[117, 813]],
                7800: [[360, 769]],
                7801: [[361, 769]],
                7802: [[362, 776]],
                7803: [[363, 776]],
                7804: [[86, 771]],
                7805: [[118, 771]],
                7806: [[86, 803]],
                7807: [[118, 803]],
                7808: [[87, 768]],
                7809: [[119, 768]],
                7810: [[87, 769]],
                7811: [[119, 769]],
                7812: [[87, 776]],
                7813: [[119, 776]],
                7814: [[87, 775]],
                7815: [[119, 775]],
                7816: [[87, 803]],
                7817: [[119, 803]],
                7818: [[88, 775]],
                7819: [[120, 775]],
                7820: [[88, 776]],
                7821: [[120, 776]],
                7822: [[89, 775]],
                7823: [[121, 775]],
                7824: [[90, 770]],
                7825: [[122, 770]],
                7826: [[90, 803]],
                7827: [[122, 803]],
                7828: [[90, 817]],
                7829: [[122, 817]],
                7830: [[104, 817]],
                7831: [[116, 776]],
                7832: [[119, 778]],
                7833: [[121, 778]],
                7834: [[97, 702], 256],
                7835: [[383, 775]],
                7840: [[65, 803], , {
                    770: 7852,
                    774: 7862
                }],
                7841: [[97, 803], , {
                    770: 7853,
                    774: 7863
                }],
                7842: [[65, 777]],
                7843: [[97, 777]],
                7844: [[194, 769]],
                7845: [[226, 769]],
                7846: [[194, 768]],
                7847: [[226, 768]],
                7848: [[194, 777]],
                7849: [[226, 777]],
                7850: [[194, 771]],
                7851: [[226, 771]],
                7852: [[7840, 770]],
                7853: [[7841, 770]],
                7854: [[258, 769]],
                7855: [[259, 769]],
                7856: [[258, 768]],
                7857: [[259, 768]],
                7858: [[258, 777]],
                7859: [[259, 777]],
                7860: [[258, 771]],
                7861: [[259, 771]],
                7862: [[7840, 774]],
                7863: [[7841, 774]],
                7864: [[69, 803], , {
                    770: 7878
                }],
                7865: [[101, 803], , {
                    770: 7879
                }],
                7866: [[69, 777]],
                7867: [[101, 777]],
                7868: [[69, 771]],
                7869: [[101, 771]],
                7870: [[202, 769]],
                7871: [[234, 769]],
                7872: [[202, 768]],
                7873: [[234, 768]],
                7874: [[202, 777]],
                7875: [[234, 777]],
                7876: [[202, 771]],
                7877: [[234, 771]],
                7878: [[7864, 770]],
                7879: [[7865, 770]],
                7880: [[73, 777]],
                7881: [[105, 777]],
                7882: [[73, 803]],
                7883: [[105, 803]],
                7884: [[79, 803], , {
                    770: 7896
                }],
                7885: [[111, 803], , {
                    770: 7897
                }],
                7886: [[79, 777]],
                7887: [[111, 777]],
                7888: [[212, 769]],
                7889: [[244, 769]],
                7890: [[212, 768]],
                7891: [[244, 768]],
                7892: [[212, 777]],
                7893: [[244, 777]],
                7894: [[212, 771]],
                7895: [[244, 771]],
                7896: [[7884, 770]],
                7897: [[7885, 770]],
                7898: [[416, 769]],
                7899: [[417, 769]],
                7900: [[416, 768]],
                7901: [[417, 768]],
                7902: [[416, 777]],
                7903: [[417, 777]],
                7904: [[416, 771]],
                7905: [[417, 771]],
                7906: [[416, 803]],
                7907: [[417, 803]],
                7908: [[85, 803]],
                7909: [[117, 803]],
                7910: [[85, 777]],
                7911: [[117, 777]],
                7912: [[431, 769]],
                7913: [[432, 769]],
                7914: [[431, 768]],
                7915: [[432, 768]],
                7916: [[431, 777]],
                7917: [[432, 777]],
                7918: [[431, 771]],
                7919: [[432, 771]],
                7920: [[431, 803]],
                7921: [[432, 803]],
                7922: [[89, 768]],
                7923: [[121, 768]],
                7924: [[89, 803]],
                7925: [[121, 803]],
                7926: [[89, 777]],
                7927: [[121, 777]],
                7928: [[89, 771]],
                7929: [[121, 771]]
            },
            7936: {
                7936: [[945, 787], , {
                    768: 7938,
                    769: 7940,
                    834: 7942,
                    837: 8064
                }],
                7937: [[945, 788], , {
                    768: 7939,
                    769: 7941,
                    834: 7943,
                    837: 8065
                }],
                7938: [[7936, 768], , {
                    837: 8066
                }],
                7939: [[7937, 768], , {
                    837: 8067
                }],
                7940: [[7936, 769], , {
                    837: 8068
                }],
                7941: [[7937, 769], , {
                    837: 8069
                }],
                7942: [[7936, 834], , {
                    837: 8070
                }],
                7943: [[7937, 834], , {
                    837: 8071
                }],
                7944: [[913, 787], , {
                    768: 7946,
                    769: 7948,
                    834: 7950,
                    837: 8072
                }],
                7945: [[913, 788], , {
                    768: 7947,
                    769: 7949,
                    834: 7951,
                    837: 8073
                }],
                7946: [[7944, 768], , {
                    837: 8074
                }],
                7947: [[7945, 768], , {
                    837: 8075
                }],
                7948: [[7944, 769], , {
                    837: 8076
                }],
                7949: [[7945, 769], , {
                    837: 8077
                }],
                7950: [[7944, 834], , {
                    837: 8078
                }],
                7951: [[7945, 834], , {
                    837: 8079
                }],
                7952: [[949, 787], , {
                    768: 7954,
                    769: 7956
                }],
                7953: [[949, 788], , {
                    768: 7955,
                    769: 7957
                }],
                7954: [[7952, 768]],
                7955: [[7953, 768]],
                7956: [[7952, 769]],
                7957: [[7953, 769]],
                7960: [[917, 787], , {
                    768: 7962,
                    769: 7964
                }],
                7961: [[917, 788], , {
                    768: 7963,
                    769: 7965
                }],
                7962: [[7960, 768]],
                7963: [[7961, 768]],
                7964: [[7960, 769]],
                7965: [[7961, 769]],
                7968: [[951, 787], , {
                    768: 7970,
                    769: 7972,
                    834: 7974,
                    837: 8080
                }],
                7969: [[951, 788], , {
                    768: 7971,
                    769: 7973,
                    834: 7975,
                    837: 8081
                }],
                7970: [[7968, 768], , {
                    837: 8082
                }],
                7971: [[7969, 768], , {
                    837: 8083
                }],
                7972: [[7968, 769], , {
                    837: 8084
                }],
                7973: [[7969, 769], , {
                    837: 8085
                }],
                7974: [[7968, 834], , {
                    837: 8086
                }],
                7975: [[7969, 834], , {
                    837: 8087
                }],
                7976: [[919, 787], , {
                    768: 7978,
                    769: 7980,
                    834: 7982,
                    837: 8088
                }],
                7977: [[919, 788], , {
                    768: 7979,
                    769: 7981,
                    834: 7983,
                    837: 8089
                }],
                7978: [[7976, 768], , {
                    837: 8090
                }],
                7979: [[7977, 768], , {
                    837: 8091
                }],
                7980: [[7976, 769], , {
                    837: 8092
                }],
                7981: [[7977, 769], , {
                    837: 8093
                }],
                7982: [[7976, 834], , {
                    837: 8094
                }],
                7983: [[7977, 834], , {
                    837: 8095
                }],
                7984: [[953, 787], , {
                    768: 7986,
                    769: 7988,
                    834: 7990
                }],
                7985: [[953, 788], , {
                    768: 7987,
                    769: 7989,
                    834: 7991
                }],
                7986: [[7984, 768]],
                7987: [[7985, 768]],
                7988: [[7984, 769]],
                7989: [[7985, 769]],
                7990: [[7984, 834]],
                7991: [[7985, 834]],
                7992: [[921, 787], , {
                    768: 7994,
                    769: 7996,
                    834: 7998
                }],
                7993: [[921, 788], , {
                    768: 7995,
                    769: 7997,
                    834: 7999
                }],
                7994: [[7992, 768]],
                7995: [[7993, 768]],
                7996: [[7992, 769]],
                7997: [[7993, 769]],
                7998: [[7992, 834]],
                7999: [[7993, 834]],
                8e3: [[959, 787], , {
                    768: 8002,
                    769: 8004
                }],
                8001: [[959, 788], , {
                    768: 8003,
                    769: 8005
                }],
                8002: [[8e3, 768]],
                8003: [[8001, 768]],
                8004: [[8e3, 769]],
                8005: [[8001, 769]],
                8008: [[927, 787], , {
                    768: 8010,
                    769: 8012
                }],
                8009: [[927, 788], , {
                    768: 8011,
                    769: 8013
                }],
                8010: [[8008, 768]],
                8011: [[8009, 768]],
                8012: [[8008, 769]],
                8013: [[8009, 769]],
                8016: [[965, 787], , {
                    768: 8018,
                    769: 8020,
                    834: 8022
                }],
                8017: [[965, 788], , {
                    768: 8019,
                    769: 8021,
                    834: 8023
                }],
                8018: [[8016, 768]],
                8019: [[8017, 768]],
                8020: [[8016, 769]],
                8021: [[8017, 769]],
                8022: [[8016, 834]],
                8023: [[8017, 834]],
                8025: [[933, 788], , {
                    768: 8027,
                    769: 8029,
                    834: 8031
                }],
                8027: [[8025, 768]],
                8029: [[8025, 769]],
                8031: [[8025, 834]],
                8032: [[969, 787], , {
                    768: 8034,
                    769: 8036,
                    834: 8038,
                    837: 8096
                }],
                8033: [[969, 788], , {
                    768: 8035,
                    769: 8037,
                    834: 8039,
                    837: 8097
                }],
                8034: [[8032, 768], , {
                    837: 8098
                }],
                8035: [[8033, 768], , {
                    837: 8099
                }],
                8036: [[8032, 769], , {
                    837: 8100
                }],
                8037: [[8033, 769], , {
                    837: 8101
                }],
                8038: [[8032, 834], , {
                    837: 8102
                }],
                8039: [[8033, 834], , {
                    837: 8103
                }],
                8040: [[937, 787], , {
                    768: 8042,
                    769: 8044,
                    834: 8046,
                    837: 8104
                }],
                8041: [[937, 788], , {
                    768: 8043,
                    769: 8045,
                    834: 8047,
                    837: 8105
                }],
                8042: [[8040, 768], , {
                    837: 8106
                }],
                8043: [[8041, 768], , {
                    837: 8107
                }],
                8044: [[8040, 769], , {
                    837: 8108
                }],
                8045: [[8041, 769], , {
                    837: 8109
                }],
                8046: [[8040, 834], , {
                    837: 8110
                }],
                8047: [[8041, 834], , {
                    837: 8111
                }],
                8048: [[945, 768], , {
                    837: 8114
                }],
                8049: [[940]],
                8050: [[949, 768]],
                8051: [[941]],
                8052: [[951, 768], , {
                    837: 8130
                }],
                8053: [[942]],
                8054: [[953, 768]],
                8055: [[943]],
                8056: [[959, 768]],
                8057: [[972]],
                8058: [[965, 768]],
                8059: [[973]],
                8060: [[969, 768], , {
                    837: 8178
                }],
                8061: [[974]],
                8064: [[7936, 837]],
                8065: [[7937, 837]],
                8066: [[7938, 837]],
                8067: [[7939, 837]],
                8068: [[7940, 837]],
                8069: [[7941, 837]],
                8070: [[7942, 837]],
                8071: [[7943, 837]],
                8072: [[7944, 837]],
                8073: [[7945, 837]],
                8074: [[7946, 837]],
                8075: [[7947, 837]],
                8076: [[7948, 837]],
                8077: [[7949, 837]],
                8078: [[7950, 837]],
                8079: [[7951, 837]],
                8080: [[7968, 837]],
                8081: [[7969, 837]],
                8082: [[7970, 837]],
                8083: [[7971, 837]],
                8084: [[7972, 837]],
                8085: [[7973, 837]],
                8086: [[7974, 837]],
                8087: [[7975, 837]],
                8088: [[7976, 837]],
                8089: [[7977, 837]],
                8090: [[7978, 837]],
                8091: [[7979, 837]],
                8092: [[7980, 837]],
                8093: [[7981, 837]],
                8094: [[7982, 837]],
                8095: [[7983, 837]],
                8096: [[8032, 837]],
                8097: [[8033, 837]],
                8098: [[8034, 837]],
                8099: [[8035, 837]],
                8100: [[8036, 837]],
                8101: [[8037, 837]],
                8102: [[8038, 837]],
                8103: [[8039, 837]],
                8104: [[8040, 837]],
                8105: [[8041, 837]],
                8106: [[8042, 837]],
                8107: [[8043, 837]],
                8108: [[8044, 837]],
                8109: [[8045, 837]],
                8110: [[8046, 837]],
                8111: [[8047, 837]],
                8112: [[945, 774]],
                8113: [[945, 772]],
                8114: [[8048, 837]],
                8115: [[945, 837]],
                8116: [[940, 837]],
                8118: [[945, 834], , {
                    837: 8119
                }],
                8119: [[8118, 837]],
                8120: [[913, 774]],
                8121: [[913, 772]],
                8122: [[913, 768]],
                8123: [[902]],
                8124: [[913, 837]],
                8125: [[32, 787], 256],
                8126: [[953]],
                8127: [[32, 787], 256, {
                    768: 8141,
                    769: 8142,
                    834: 8143
                }],
                8128: [[32, 834], 256],
                8129: [[168, 834]],
                8130: [[8052, 837]],
                8131: [[951, 837]],
                8132: [[942, 837]],
                8134: [[951, 834], , {
                    837: 8135
                }],
                8135: [[8134, 837]],
                8136: [[917, 768]],
                8137: [[904]],
                8138: [[919, 768]],
                8139: [[905]],
                8140: [[919, 837]],
                8141: [[8127, 768]],
                8142: [[8127, 769]],
                8143: [[8127, 834]],
                8144: [[953, 774]],
                8145: [[953, 772]],
                8146: [[970, 768]],
                8147: [[912]],
                8150: [[953, 834]],
                8151: [[970, 834]],
                8152: [[921, 774]],
                8153: [[921, 772]],
                8154: [[921, 768]],
                8155: [[906]],
                8157: [[8190, 768]],
                8158: [[8190, 769]],
                8159: [[8190, 834]],
                8160: [[965, 774]],
                8161: [[965, 772]],
                8162: [[971, 768]],
                8163: [[944]],
                8164: [[961, 787]],
                8165: [[961, 788]],
                8166: [[965, 834]],
                8167: [[971, 834]],
                8168: [[933, 774]],
                8169: [[933, 772]],
                8170: [[933, 768]],
                8171: [[910]],
                8172: [[929, 788]],
                8173: [[168, 768]],
                8174: [[901]],
                8175: [[96]],
                8178: [[8060, 837]],
                8179: [[969, 837]],
                8180: [[974, 837]],
                8182: [[969, 834], , {
                    837: 8183
                }],
                8183: [[8182, 837]],
                8184: [[927, 768]],
                8185: [[908]],
                8186: [[937, 768]],
                8187: [[911]],
                8188: [[937, 837]],
                8189: [[180]],
                8190: [[32, 788], 256, {
                    768: 8157,
                    769: 8158,
                    834: 8159
                }]
            },
            8192: {
                8192: [[8194]],
                8193: [[8195]],
                8194: [[32], 256],
                8195: [[32], 256],
                8196: [[32], 256],
                8197: [[32], 256],
                8198: [[32], 256],
                8199: [[32], 256],
                8200: [[32], 256],
                8201: [[32], 256],
                8202: [[32], 256],
                8209: [[8208], 256],
                8215: [[32, 819], 256],
                8228: [[46], 256],
                8229: [[46, 46], 256],
                8230: [[46, 46, 46], 256],
                8239: [[32], 256],
                8243: [[8242, 8242], 256],
                8244: [[8242, 8242, 8242], 256],
                8246: [[8245, 8245], 256],
                8247: [[8245, 8245, 8245], 256],
                8252: [[33, 33], 256],
                8254: [[32, 773], 256],
                8263: [[63, 63], 256],
                8264: [[63, 33], 256],
                8265: [[33, 63], 256],
                8279: [[8242, 8242, 8242, 8242], 256],
                8287: [[32], 256],
                8304: [[48], 256],
                8305: [[105], 256],
                8308: [[52], 256],
                8309: [[53], 256],
                8310: [[54], 256],
                8311: [[55], 256],
                8312: [[56], 256],
                8313: [[57], 256],
                8314: [[43], 256],
                8315: [[8722], 256],
                8316: [[61], 256],
                8317: [[40], 256],
                8318: [[41], 256],
                8319: [[110], 256],
                8320: [[48], 256],
                8321: [[49], 256],
                8322: [[50], 256],
                8323: [[51], 256],
                8324: [[52], 256],
                8325: [[53], 256],
                8326: [[54], 256],
                8327: [[55], 256],
                8328: [[56], 256],
                8329: [[57], 256],
                8330: [[43], 256],
                8331: [[8722], 256],
                8332: [[61], 256],
                8333: [[40], 256],
                8334: [[41], 256],
                8336: [[97], 256],
                8337: [[101], 256],
                8338: [[111], 256],
                8339: [[120], 256],
                8340: [[601], 256],
                8341: [[104], 256],
                8342: [[107], 256],
                8343: [[108], 256],
                8344: [[109], 256],
                8345: [[110], 256],
                8346: [[112], 256],
                8347: [[115], 256],
                8348: [[116], 256],
                8360: [[82, 115], 256],
                8400: [, 230],
                8401: [, 230],
                8402: [, 1],
                8403: [, 1],
                8404: [, 230],
                8405: [, 230],
                8406: [, 230],
                8407: [, 230],
                8408: [, 1],
                8409: [, 1],
                8410: [, 1],
                8411: [, 230],
                8412: [, 230],
                8417: [, 230],
                8421: [, 1],
                8422: [, 1],
                8423: [, 230],
                8424: [, 220],
                8425: [, 230],
                8426: [, 1],
                8427: [, 1],
                8428: [, 220],
                8429: [, 220],
                8430: [, 220],
                8431: [, 220],
                8432: [, 230]
            },
            8448: {
                8448: [[97, 47, 99], 256],
                8449: [[97, 47, 115], 256],
                8450: [[67], 256],
                8451: [[176, 67], 256],
                8453: [[99, 47, 111], 256],
                8454: [[99, 47, 117], 256],
                8455: [[400], 256],
                8457: [[176, 70], 256],
                8458: [[103], 256],
                8459: [[72], 256],
                8460: [[72], 256],
                8461: [[72], 256],
                8462: [[104], 256],
                8463: [[295], 256],
                8464: [[73], 256],
                8465: [[73], 256],
                8466: [[76], 256],
                8467: [[108], 256],
                8469: [[78], 256],
                8470: [[78, 111], 256],
                8473: [[80], 256],
                8474: [[81], 256],
                8475: [[82], 256],
                8476: [[82], 256],
                8477: [[82], 256],
                8480: [[83, 77], 256],
                8481: [[84, 69, 76], 256],
                8482: [[84, 77], 256],
                8484: [[90], 256],
                8486: [[937]],
                8488: [[90], 256],
                8490: [[75]],
                8491: [[197]],
                8492: [[66], 256],
                8493: [[67], 256],
                8495: [[101], 256],
                8496: [[69], 256],
                8497: [[70], 256],
                8499: [[77], 256],
                8500: [[111], 256],
                8501: [[1488], 256],
                8502: [[1489], 256],
                8503: [[1490], 256],
                8504: [[1491], 256],
                8505: [[105], 256],
                8507: [[70, 65, 88], 256],
                8508: [[960], 256],
                8509: [[947], 256],
                8510: [[915], 256],
                8511: [[928], 256],
                8512: [[8721], 256],
                8517: [[68], 256],
                8518: [[100], 256],
                8519: [[101], 256],
                8520: [[105], 256],
                8521: [[106], 256],
                8528: [[49, 8260, 55], 256],
                8529: [[49, 8260, 57], 256],
                8530: [[49, 8260, 49, 48], 256],
                8531: [[49, 8260, 51], 256],
                8532: [[50, 8260, 51], 256],
                8533: [[49, 8260, 53], 256],
                8534: [[50, 8260, 53], 256],
                8535: [[51, 8260, 53], 256],
                8536: [[52, 8260, 53], 256],
                8537: [[49, 8260, 54], 256],
                8538: [[53, 8260, 54], 256],
                8539: [[49, 8260, 56], 256],
                8540: [[51, 8260, 56], 256],
                8541: [[53, 8260, 56], 256],
                8542: [[55, 8260, 56], 256],
                8543: [[49, 8260], 256],
                8544: [[73], 256],
                8545: [[73, 73], 256],
                8546: [[73, 73, 73], 256],
                8547: [[73, 86], 256],
                8548: [[86], 256],
                8549: [[86, 73], 256],
                8550: [[86, 73, 73], 256],
                8551: [[86, 73, 73, 73], 256],
                8552: [[73, 88], 256],
                8553: [[88], 256],
                8554: [[88, 73], 256],
                8555: [[88, 73, 73], 256],
                8556: [[76], 256],
                8557: [[67], 256],
                8558: [[68], 256],
                8559: [[77], 256],
                8560: [[105], 256],
                8561: [[105, 105], 256],
                8562: [[105, 105, 105], 256],
                8563: [[105, 118], 256],
                8564: [[118], 256],
                8565: [[118, 105], 256],
                8566: [[118, 105, 105], 256],
                8567: [[118, 105, 105, 105], 256],
                8568: [[105, 120], 256],
                8569: [[120], 256],
                8570: [[120, 105], 256],
                8571: [[120, 105, 105], 256],
                8572: [[108], 256],
                8573: [[99], 256],
                8574: [[100], 256],
                8575: [[109], 256],
                8585: [[48, 8260, 51], 256],
                8592: [, , {
                    824: 8602
                }],
                8594: [, , {
                    824: 8603
                }],
                8596: [, , {
                    824: 8622
                }],
                8602: [[8592, 824]],
                8603: [[8594, 824]],
                8622: [[8596, 824]],
                8653: [[8656, 824]],
                8654: [[8660, 824]],
                8655: [[8658, 824]],
                8656: [, , {
                    824: 8653
                }],
                8658: [, , {
                    824: 8655
                }],
                8660: [, , {
                    824: 8654
                }]
            },
            8704: {
                8707: [, , {
                    824: 8708
                }],
                8708: [[8707, 824]],
                8712: [, , {
                    824: 8713
                }],
                8713: [[8712, 824]],
                8715: [, , {
                    824: 8716
                }],
                8716: [[8715, 824]],
                8739: [, , {
                    824: 8740
                }],
                8740: [[8739, 824]],
                8741: [, , {
                    824: 8742
                }],
                8742: [[8741, 824]],
                8748: [[8747, 8747], 256],
                8749: [[8747, 8747, 8747], 256],
                8751: [[8750, 8750], 256],
                8752: [[8750, 8750, 8750], 256],
                8764: [, , {
                    824: 8769
                }],
                8769: [[8764, 824]],
                8771: [, , {
                    824: 8772
                }],
                8772: [[8771, 824]],
                8773: [, , {
                    824: 8775
                }],
                8775: [[8773, 824]],
                8776: [, , {
                    824: 8777
                }],
                8777: [[8776, 824]],
                8781: [, , {
                    824: 8813
                }],
                8800: [[61, 824]],
                8801: [, , {
                    824: 8802
                }],
                8802: [[8801, 824]],
                8804: [, , {
                    824: 8816
                }],
                8805: [, , {
                    824: 8817
                }],
                8813: [[8781, 824]],
                8814: [[60, 824]],
                8815: [[62, 824]],
                8816: [[8804, 824]],
                8817: [[8805, 824]],
                8818: [, , {
                    824: 8820
                }],
                8819: [, , {
                    824: 8821
                }],
                8820: [[8818, 824]],
                8821: [[8819, 824]],
                8822: [, , {
                    824: 8824
                }],
                8823: [, , {
                    824: 8825
                }],
                8824: [[8822, 824]],
                8825: [[8823, 824]],
                8826: [, , {
                    824: 8832
                }],
                8827: [, , {
                    824: 8833
                }],
                8828: [, , {
                    824: 8928
                }],
                8829: [, , {
                    824: 8929
                }],
                8832: [[8826, 824]],
                8833: [[8827, 824]],
                8834: [, , {
                    824: 8836
                }],
                8835: [, , {
                    824: 8837
                }],
                8836: [[8834, 824]],
                8837: [[8835, 824]],
                8838: [, , {
                    824: 8840
                }],
                8839: [, , {
                    824: 8841
                }],
                8840: [[8838, 824]],
                8841: [[8839, 824]],
                8849: [, , {
                    824: 8930
                }],
                8850: [, , {
                    824: 8931
                }],
                8866: [, , {
                    824: 8876
                }],
                8872: [, , {
                    824: 8877
                }],
                8873: [, , {
                    824: 8878
                }],
                8875: [, , {
                    824: 8879
                }],
                8876: [[8866, 824]],
                8877: [[8872, 824]],
                8878: [[8873, 824]],
                8879: [[8875, 824]],
                8882: [, , {
                    824: 8938
                }],
                8883: [, , {
                    824: 8939
                }],
                8884: [, , {
                    824: 8940
                }],
                8885: [, , {
                    824: 8941
                }],
                8928: [[8828, 824]],
                8929: [[8829, 824]],
                8930: [[8849, 824]],
                8931: [[8850, 824]],
                8938: [[8882, 824]],
                8939: [[8883, 824]],
                8940: [[8884, 824]],
                8941: [[8885, 824]]
            },
            8960: {
                9001: [[12296]],
                9002: [[12297]]
            },
            9216: {
                9312: [[49], 256],
                9313: [[50], 256],
                9314: [[51], 256],
                9315: [[52], 256],
                9316: [[53], 256],
                9317: [[54], 256],
                9318: [[55], 256],
                9319: [[56], 256],
                9320: [[57], 256],
                9321: [[49, 48], 256],
                9322: [[49, 49], 256],
                9323: [[49, 50], 256],
                9324: [[49, 51], 256],
                9325: [[49, 52], 256],
                9326: [[49, 53], 256],
                9327: [[49, 54], 256],
                9328: [[49, 55], 256],
                9329: [[49, 56], 256],
                9330: [[49, 57], 256],
                9331: [[50, 48], 256],
                9332: [[40, 49, 41], 256],
                9333: [[40, 50, 41], 256],
                9334: [[40, 51, 41], 256],
                9335: [[40, 52, 41], 256],
                9336: [[40, 53, 41], 256],
                9337: [[40, 54, 41], 256],
                9338: [[40, 55, 41], 256],
                9339: [[40, 56, 41], 256],
                9340: [[40, 57, 41], 256],
                9341: [[40, 49, 48, 41], 256],
                9342: [[40, 49, 49, 41], 256],
                9343: [[40, 49, 50, 41], 256],
                9344: [[40, 49, 51, 41], 256],
                9345: [[40, 49, 52, 41], 256],
                9346: [[40, 49, 53, 41], 256],
                9347: [[40, 49, 54, 41], 256],
                9348: [[40, 49, 55, 41], 256],
                9349: [[40, 49, 56, 41], 256],
                9350: [[40, 49, 57, 41], 256],
                9351: [[40, 50, 48, 41], 256],
                9352: [[49, 46], 256],
                9353: [[50, 46], 256],
                9354: [[51, 46], 256],
                9355: [[52, 46], 256],
                9356: [[53, 46], 256],
                9357: [[54, 46], 256],
                9358: [[55, 46], 256],
                9359: [[56, 46], 256],
                9360: [[57, 46], 256],
                9361: [[49, 48, 46], 256],
                9362: [[49, 49, 46], 256],
                9363: [[49, 50, 46], 256],
                9364: [[49, 51, 46], 256],
                9365: [[49, 52, 46], 256],
                9366: [[49, 53, 46], 256],
                9367: [[49, 54, 46], 256],
                9368: [[49, 55, 46], 256],
                9369: [[49, 56, 46], 256],
                9370: [[49, 57, 46], 256],
                9371: [[50, 48, 46], 256],
                9372: [[40, 97, 41], 256],
                9373: [[40, 98, 41], 256],
                9374: [[40, 99, 41], 256],
                9375: [[40, 100, 41], 256],
                9376: [[40, 101, 41], 256],
                9377: [[40, 102, 41], 256],
                9378: [[40, 103, 41], 256],
                9379: [[40, 104, 41], 256],
                9380: [[40, 105, 41], 256],
                9381: [[40, 106, 41], 256],
                9382: [[40, 107, 41], 256],
                9383: [[40, 108, 41], 256],
                9384: [[40, 109, 41], 256],
                9385: [[40, 110, 41], 256],
                9386: [[40, 111, 41], 256],
                9387: [[40, 112, 41], 256],
                9388: [[40, 113, 41], 256],
                9389: [[40, 114, 41], 256],
                9390: [[40, 115, 41], 256],
                9391: [[40, 116, 41], 256],
                9392: [[40, 117, 41], 256],
                9393: [[40, 118, 41], 256],
                9394: [[40, 119, 41], 256],
                9395: [[40, 120, 41], 256],
                9396: [[40, 121, 41], 256],
                9397: [[40, 122, 41], 256],
                9398: [[65], 256],
                9399: [[66], 256],
                9400: [[67], 256],
                9401: [[68], 256],
                9402: [[69], 256],
                9403: [[70], 256],
                9404: [[71], 256],
                9405: [[72], 256],
                9406: [[73], 256],
                9407: [[74], 256],
                9408: [[75], 256],
                9409: [[76], 256],
                9410: [[77], 256],
                9411: [[78], 256],
                9412: [[79], 256],
                9413: [[80], 256],
                9414: [[81], 256],
                9415: [[82], 256],
                9416: [[83], 256],
                9417: [[84], 256],
                9418: [[85], 256],
                9419: [[86], 256],
                9420: [[87], 256],
                9421: [[88], 256],
                9422: [[89], 256],
                9423: [[90], 256],
                9424: [[97], 256],
                9425: [[98], 256],
                9426: [[99], 256],
                9427: [[100], 256],
                9428: [[101], 256],
                9429: [[102], 256],
                9430: [[103], 256],
                9431: [[104], 256],
                9432: [[105], 256],
                9433: [[106], 256],
                9434: [[107], 256],
                9435: [[108], 256],
                9436: [[109], 256],
                9437: [[110], 256],
                9438: [[111], 256],
                9439: [[112], 256],
                9440: [[113], 256],
                9441: [[114], 256],
                9442: [[115], 256],
                9443: [[116], 256],
                9444: [[117], 256],
                9445: [[118], 256],
                9446: [[119], 256],
                9447: [[120], 256],
                9448: [[121], 256],
                9449: [[122], 256],
                9450: [[48], 256]
            },
            10752: {
                10764: [[8747, 8747, 8747, 8747], 256],
                10868: [[58, 58, 61], 256],
                10869: [[61, 61], 256],
                10870: [[61, 61, 61], 256],
                10972: [[10973, 824], 512]
            },
            11264: {
                11388: [[106], 256],
                11389: [[86], 256],
                11503: [, 230],
                11504: [, 230],
                11505: [, 230]
            },
            11520: {
                11631: [[11617], 256],
                11647: [, 9],
                11744: [, 230],
                11745: [, 230],
                11746: [, 230],
                11747: [, 230],
                11748: [, 230],
                11749: [, 230],
                11750: [, 230],
                11751: [, 230],
                11752: [, 230],
                11753: [, 230],
                11754: [, 230],
                11755: [, 230],
                11756: [, 230],
                11757: [, 230],
                11758: [, 230],
                11759: [, 230],
                11760: [, 230],
                11761: [, 230],
                11762: [, 230],
                11763: [, 230],
                11764: [, 230],
                11765: [, 230],
                11766: [, 230],
                11767: [, 230],
                11768: [, 230],
                11769: [, 230],
                11770: [, 230],
                11771: [, 230],
                11772: [, 230],
                11773: [, 230],
                11774: [, 230],
                11775: [, 230]
            },
            11776: {
                11935: [[27597], 256],
                12019: [[40863], 256]
            },
            12032: {
                12032: [[19968], 256],
                12033: [[20008], 256],
                12034: [[20022], 256],
                12035: [[20031], 256],
                12036: [[20057], 256],
                12037: [[20101], 256],
                12038: [[20108], 256],
                12039: [[20128], 256],
                12040: [[20154], 256],
                12041: [[20799], 256],
                12042: [[20837], 256],
                12043: [[20843], 256],
                12044: [[20866], 256],
                12045: [[20886], 256],
                12046: [[20907], 256],
                12047: [[20960], 256],
                12048: [[20981], 256],
                12049: [[20992], 256],
                12050: [[21147], 256],
                12051: [[21241], 256],
                12052: [[21269], 256],
                12053: [[21274], 256],
                12054: [[21304], 256],
                12055: [[21313], 256],
                12056: [[21340], 256],
                12057: [[21353], 256],
                12058: [[21378], 256],
                12059: [[21430], 256],
                12060: [[21448], 256],
                12061: [[21475], 256],
                12062: [[22231], 256],
                12063: [[22303], 256],
                12064: [[22763], 256],
                12065: [[22786], 256],
                12066: [[22794], 256],
                12067: [[22805], 256],
                12068: [[22823], 256],
                12069: [[22899], 256],
                12070: [[23376], 256],
                12071: [[23424], 256],
                12072: [[23544], 256],
                12073: [[23567], 256],
                12074: [[23586], 256],
                12075: [[23608], 256],
                12076: [[23662], 256],
                12077: [[23665], 256],
                12078: [[24027], 256],
                12079: [[24037], 256],
                12080: [[24049], 256],
                12081: [[24062], 256],
                12082: [[24178], 256],
                12083: [[24186], 256],
                12084: [[24191], 256],
                12085: [[24308], 256],
                12086: [[24318], 256],
                12087: [[24331], 256],
                12088: [[24339], 256],
                12089: [[24400], 256],
                12090: [[24417], 256],
                12091: [[24435], 256],
                12092: [[24515], 256],
                12093: [[25096], 256],
                12094: [[25142], 256],
                12095: [[25163], 256],
                12096: [[25903], 256],
                12097: [[25908], 256],
                12098: [[25991], 256],
                12099: [[26007], 256],
                12100: [[26020], 256],
                12101: [[26041], 256],
                12102: [[26080], 256],
                12103: [[26085], 256],
                12104: [[26352], 256],
                12105: [[26376], 256],
                12106: [[26408], 256],
                12107: [[27424], 256],
                12108: [[27490], 256],
                12109: [[27513], 256],
                12110: [[27571], 256],
                12111: [[27595], 256],
                12112: [[27604], 256],
                12113: [[27611], 256],
                12114: [[27663], 256],
                12115: [[27668], 256],
                12116: [[27700], 256],
                12117: [[28779], 256],
                12118: [[29226], 256],
                12119: [[29238], 256],
                12120: [[29243], 256],
                12121: [[29247], 256],
                12122: [[29255], 256],
                12123: [[29273], 256],
                12124: [[29275], 256],
                12125: [[29356], 256],
                12126: [[29572], 256],
                12127: [[29577], 256],
                12128: [[29916], 256],
                12129: [[29926], 256],
                12130: [[29976], 256],
                12131: [[29983], 256],
                12132: [[29992], 256],
                12133: [[3e4], 256],
                12134: [[30091], 256],
                12135: [[30098], 256],
                12136: [[30326], 256],
                12137: [[30333], 256],
                12138: [[30382], 256],
                12139: [[30399], 256],
                12140: [[30446], 256],
                12141: [[30683], 256],
                12142: [[30690], 256],
                12143: [[30707], 256],
                12144: [[31034], 256],
                12145: [[31160], 256],
                12146: [[31166], 256],
                12147: [[31348], 256],
                12148: [[31435], 256],
                12149: [[31481], 256],
                12150: [[31859], 256],
                12151: [[31992], 256],
                12152: [[32566], 256],
                12153: [[32593], 256],
                12154: [[32650], 256],
                12155: [[32701], 256],
                12156: [[32769], 256],
                12157: [[32780], 256],
                12158: [[32786], 256],
                12159: [[32819], 256],
                12160: [[32895], 256],
                12161: [[32905], 256],
                12162: [[33251], 256],
                12163: [[33258], 256],
                12164: [[33267], 256],
                12165: [[33276], 256],
                12166: [[33292], 256],
                12167: [[33307], 256],
                12168: [[33311], 256],
                12169: [[33390], 256],
                12170: [[33394], 256],
                12171: [[33400], 256],
                12172: [[34381], 256],
                12173: [[34411], 256],
                12174: [[34880], 256],
                12175: [[34892], 256],
                12176: [[34915], 256],
                12177: [[35198], 256],
                12178: [[35211], 256],
                12179: [[35282], 256],
                12180: [[35328], 256],
                12181: [[35895], 256],
                12182: [[35910], 256],
                12183: [[35925], 256],
                12184: [[35960], 256],
                12185: [[35997], 256],
                12186: [[36196], 256],
                12187: [[36208], 256],
                12188: [[36275], 256],
                12189: [[36523], 256],
                12190: [[36554], 256],
                12191: [[36763], 256],
                12192: [[36784], 256],
                12193: [[36789], 256],
                12194: [[37009], 256],
                12195: [[37193], 256],
                12196: [[37318], 256],
                12197: [[37324], 256],
                12198: [[37329], 256],
                12199: [[38263], 256],
                12200: [[38272], 256],
                12201: [[38428], 256],
                12202: [[38582], 256],
                12203: [[38585], 256],
                12204: [[38632], 256],
                12205: [[38737], 256],
                12206: [[38750], 256],
                12207: [[38754], 256],
                12208: [[38761], 256],
                12209: [[38859], 256],
                12210: [[38893], 256],
                12211: [[38899], 256],
                12212: [[38913], 256],
                12213: [[39080], 256],
                12214: [[39131], 256],
                12215: [[39135], 256],
                12216: [[39318], 256],
                12217: [[39321], 256],
                12218: [[39340], 256],
                12219: [[39592], 256],
                12220: [[39640], 256],
                12221: [[39647], 256],
                12222: [[39717], 256],
                12223: [[39727], 256],
                12224: [[39730], 256],
                12225: [[39740], 256],
                12226: [[39770], 256],
                12227: [[40165], 256],
                12228: [[40565], 256],
                12229: [[40575], 256],
                12230: [[40613], 256],
                12231: [[40635], 256],
                12232: [[40643], 256],
                12233: [[40653], 256],
                12234: [[40657], 256],
                12235: [[40697], 256],
                12236: [[40701], 256],
                12237: [[40718], 256],
                12238: [[40723], 256],
                12239: [[40736], 256],
                12240: [[40763], 256],
                12241: [[40778], 256],
                12242: [[40786], 256],
                12243: [[40845], 256],
                12244: [[40860], 256],
                12245: [[40864], 256]
            },
            12288: {
                12288: [[32], 256],
                12330: [, 218],
                12331: [, 228],
                12332: [, 232],
                12333: [, 222],
                12334: [, 224],
                12335: [, 224],
                12342: [[12306], 256],
                12344: [[21313], 256],
                12345: [[21316], 256],
                12346: [[21317], 256],
                12358: [, , {
                    12441: 12436
                }],
                12363: [, , {
                    12441: 12364
                }],
                12364: [[12363, 12441]],
                12365: [, , {
                    12441: 12366
                }],
                12366: [[12365, 12441]],
                12367: [, , {
                    12441: 12368
                }],
                12368: [[12367, 12441]],
                12369: [, , {
                    12441: 12370
                }],
                12370: [[12369, 12441]],
                12371: [, , {
                    12441: 12372
                }],
                12372: [[12371, 12441]],
                12373: [, , {
                    12441: 12374
                }],
                12374: [[12373, 12441]],
                12375: [, , {
                    12441: 12376
                }],
                12376: [[12375, 12441]],
                12377: [, , {
                    12441: 12378
                }],
                12378: [[12377, 12441]],
                12379: [, , {
                    12441: 12380
                }],
                12380: [[12379, 12441]],
                12381: [, , {
                    12441: 12382
                }],
                12382: [[12381, 12441]],
                12383: [, , {
                    12441: 12384
                }],
                12384: [[12383, 12441]],
                12385: [, , {
                    12441: 12386
                }],
                12386: [[12385, 12441]],
                12388: [, , {
                    12441: 12389
                }],
                12389: [[12388, 12441]],
                12390: [, , {
                    12441: 12391
                }],
                12391: [[12390, 12441]],
                12392: [, , {
                    12441: 12393
                }],
                12393: [[12392, 12441]],
                12399: [, , {
                    12441: 12400,
                    12442: 12401
                }],
                12400: [[12399, 12441]],
                12401: [[12399, 12442]],
                12402: [, , {
                    12441: 12403,
                    12442: 12404
                }],
                12403: [[12402, 12441]],
                12404: [[12402, 12442]],
                12405: [, , {
                    12441: 12406,
                    12442: 12407
                }],
                12406: [[12405, 12441]],
                12407: [[12405, 12442]],
                12408: [, , {
                    12441: 12409,
                    12442: 12410
                }],
                12409: [[12408, 12441]],
                12410: [[12408, 12442]],
                12411: [, , {
                    12441: 12412,
                    12442: 12413
                }],
                12412: [[12411, 12441]],
                12413: [[12411, 12442]],
                12436: [[12358, 12441]],
                12441: [, 8],
                12442: [, 8],
                12443: [[32, 12441], 256],
                12444: [[32, 12442], 256],
                12445: [, , {
                    12441: 12446
                }],
                12446: [[12445, 12441]],
                12447: [[12424, 12426], 256],
                12454: [, , {
                    12441: 12532
                }],
                12459: [, , {
                    12441: 12460
                }],
                12460: [[12459, 12441]],
                12461: [, , {
                    12441: 12462
                }],
                12462: [[12461, 12441]],
                12463: [, , {
                    12441: 12464
                }],
                12464: [[12463, 12441]],
                12465: [, , {
                    12441: 12466
                }],
                12466: [[12465, 12441]],
                12467: [, , {
                    12441: 12468
                }],
                12468: [[12467, 12441]],
                12469: [, , {
                    12441: 12470
                }],
                12470: [[12469, 12441]],
                12471: [, , {
                    12441: 12472
                }],
                12472: [[12471, 12441]],
                12473: [, , {
                    12441: 12474
                }],
                12474: [[12473, 12441]],
                12475: [, , {
                    12441: 12476
                }],
                12476: [[12475, 12441]],
                12477: [, , {
                    12441: 12478
                }],
                12478: [[12477, 12441]],
                12479: [, , {
                    12441: 12480
                }],
                12480: [[12479, 12441]],
                12481: [, , {
                    12441: 12482
                }],
                12482: [[12481, 12441]],
                12484: [, , {
                    12441: 12485
                }],
                12485: [[12484, 12441]],
                12486: [, , {
                    12441: 12487
                }],
                12487: [[12486, 12441]],
                12488: [, , {
                    12441: 12489
                }],
                12489: [[12488, 12441]],
                12495: [, , {
                    12441: 12496,
                    12442: 12497
                }],
                12496: [[12495, 12441]],
                12497: [[12495, 12442]],
                12498: [, , {
                    12441: 12499,
                    12442: 12500
                }],
                12499: [[12498, 12441]],
                12500: [[12498, 12442]],
                12501: [, , {
                    12441: 12502,
                    12442: 12503
                }],
                12502: [[12501, 12441]],
                12503: [[12501, 12442]],
                12504: [, , {
                    12441: 12505,
                    12442: 12506
                }],
                12505: [[12504, 12441]],
                12506: [[12504, 12442]],
                12507: [, , {
                    12441: 12508,
                    12442: 12509
                }],
                12508: [[12507, 12441]],
                12509: [[12507, 12442]],
                12527: [, , {
                    12441: 12535
                }],
                12528: [, , {
                    12441: 12536
                }],
                12529: [, , {
                    12441: 12537
                }],
                12530: [, , {
                    12441: 12538
                }],
                12532: [[12454, 12441]],
                12535: [[12527, 12441]],
                12536: [[12528, 12441]],
                12537: [[12529, 12441]],
                12538: [[12530, 12441]],
                12541: [, , {
                    12441: 12542
                }],
                12542: [[12541, 12441]],
                12543: [[12467, 12488], 256]
            },
            12544: {
                12593: [[4352], 256],
                12594: [[4353], 256],
                12595: [[4522], 256],
                12596: [[4354], 256],
                12597: [[4524], 256],
                12598: [[4525], 256],
                12599: [[4355], 256],
                12600: [[4356], 256],
                12601: [[4357], 256],
                12602: [[4528], 256],
                12603: [[4529], 256],
                12604: [[4530], 256],
                12605: [[4531], 256],
                12606: [[4532], 256],
                12607: [[4533], 256],
                12608: [[4378], 256],
                12609: [[4358], 256],
                12610: [[4359], 256],
                12611: [[4360], 256],
                12612: [[4385], 256],
                12613: [[4361], 256],
                12614: [[4362], 256],
                12615: [[4363], 256],
                12616: [[4364], 256],
                12617: [[4365], 256],
                12618: [[4366], 256],
                12619: [[4367], 256],
                12620: [[4368], 256],
                12621: [[4369], 256],
                12622: [[4370], 256],
                12623: [[4449], 256],
                12624: [[4450], 256],
                12625: [[4451], 256],
                12626: [[4452], 256],
                12627: [[4453], 256],
                12628: [[4454], 256],
                12629: [[4455], 256],
                12630: [[4456], 256],
                12631: [[4457], 256],
                12632: [[4458], 256],
                12633: [[4459], 256],
                12634: [[4460], 256],
                12635: [[4461], 256],
                12636: [[4462], 256],
                12637: [[4463], 256],
                12638: [[4464], 256],
                12639: [[4465], 256],
                12640: [[4466], 256],
                12641: [[4467], 256],
                12642: [[4468], 256],
                12643: [[4469], 256],
                12644: [[4448], 256],
                12645: [[4372], 256],
                12646: [[4373], 256],
                12647: [[4551], 256],
                12648: [[4552], 256],
                12649: [[4556], 256],
                12650: [[4558], 256],
                12651: [[4563], 256],
                12652: [[4567], 256],
                12653: [[4569], 256],
                12654: [[4380], 256],
                12655: [[4573], 256],
                12656: [[4575], 256],
                12657: [[4381], 256],
                12658: [[4382], 256],
                12659: [[4384], 256],
                12660: [[4386], 256],
                12661: [[4387], 256],
                12662: [[4391], 256],
                12663: [[4393], 256],
                12664: [[4395], 256],
                12665: [[4396], 256],
                12666: [[4397], 256],
                12667: [[4398], 256],
                12668: [[4399], 256],
                12669: [[4402], 256],
                12670: [[4406], 256],
                12671: [[4416], 256],
                12672: [[4423], 256],
                12673: [[4428], 256],
                12674: [[4593], 256],
                12675: [[4594], 256],
                12676: [[4439], 256],
                12677: [[4440], 256],
                12678: [[4441], 256],
                12679: [[4484], 256],
                12680: [[4485], 256],
                12681: [[4488], 256],
                12682: [[4497], 256],
                12683: [[4498], 256],
                12684: [[4500], 256],
                12685: [[4510], 256],
                12686: [[4513], 256],
                12690: [[19968], 256],
                12691: [[20108], 256],
                12692: [[19977], 256],
                12693: [[22235], 256],
                12694: [[19978], 256],
                12695: [[20013], 256],
                12696: [[19979], 256],
                12697: [[30002], 256],
                12698: [[20057], 256],
                12699: [[19993], 256],
                12700: [[19969], 256],
                12701: [[22825], 256],
                12702: [[22320], 256],
                12703: [[20154], 256]
            },
            12800: {
                12800: [[40, 4352, 41], 256],
                12801: [[40, 4354, 41], 256],
                12802: [[40, 4355, 41], 256],
                12803: [[40, 4357, 41], 256],
                12804: [[40, 4358, 41], 256],
                12805: [[40, 4359, 41], 256],
                12806: [[40, 4361, 41], 256],
                12807: [[40, 4363, 41], 256],
                12808: [[40, 4364, 41], 256],
                12809: [[40, 4366, 41], 256],
                12810: [[40, 4367, 41], 256],
                12811: [[40, 4368, 41], 256],
                12812: [[40, 4369, 41], 256],
                12813: [[40, 4370, 41], 256],
                12814: [[40, 4352, 4449, 41], 256],
                12815: [[40, 4354, 4449, 41], 256],
                12816: [[40, 4355, 4449, 41], 256],
                12817: [[40, 4357, 4449, 41], 256],
                12818: [[40, 4358, 4449, 41], 256],
                12819: [[40, 4359, 4449, 41], 256],
                12820: [[40, 4361, 4449, 41], 256],
                12821: [[40, 4363, 4449, 41], 256],
                12822: [[40, 4364, 4449, 41], 256],
                12823: [[40, 4366, 4449, 41], 256],
                12824: [[40, 4367, 4449, 41], 256],
                12825: [[40, 4368, 4449, 41], 256],
                12826: [[40, 4369, 4449, 41], 256],
                12827: [[40, 4370, 4449, 41], 256],
                12828: [[40, 4364, 4462, 41], 256],
                12829: [[40, 4363, 4457, 4364, 4453, 4523, 41], 256],
                12830: [[40, 4363, 4457, 4370, 4462, 41], 256],
                12832: [[40, 19968, 41], 256],
                12833: [[40, 20108, 41], 256],
                12834: [[40, 19977, 41], 256],
                12835: [[40, 22235, 41], 256],
                12836: [[40, 20116, 41], 256],
                12837: [[40, 20845, 41], 256],
                12838: [[40, 19971, 41], 256],
                12839: [[40, 20843, 41], 256],
                12840: [[40, 20061, 41], 256],
                12841: [[40, 21313, 41], 256],
                12842: [[40, 26376, 41], 256],
                12843: [[40, 28779, 41], 256],
                12844: [[40, 27700, 41], 256],
                12845: [[40, 26408, 41], 256],
                12846: [[40, 37329, 41], 256],
                12847: [[40, 22303, 41], 256],
                12848: [[40, 26085, 41], 256],
                12849: [[40, 26666, 41], 256],
                12850: [[40, 26377, 41], 256],
                12851: [[40, 31038, 41], 256],
                12852: [[40, 21517, 41], 256],
                12853: [[40, 29305, 41], 256],
                12854: [[40, 36001, 41], 256],
                12855: [[40, 31069, 41], 256],
                12856: [[40, 21172, 41], 256],
                12857: [[40, 20195, 41], 256],
                12858: [[40, 21628, 41], 256],
                12859: [[40, 23398, 41], 256],
                12860: [[40, 30435, 41], 256],
                12861: [[40, 20225, 41], 256],
                12862: [[40, 36039, 41], 256],
                12863: [[40, 21332, 41], 256],
                12864: [[40, 31085, 41], 256],
                12865: [[40, 20241, 41], 256],
                12866: [[40, 33258, 41], 256],
                12867: [[40, 33267, 41], 256],
                12868: [[21839], 256],
                12869: [[24188], 256],
                12870: [[25991], 256],
                12871: [[31631], 256],
                12880: [[80, 84, 69], 256],
                12881: [[50, 49], 256],
                12882: [[50, 50], 256],
                12883: [[50, 51], 256],
                12884: [[50, 52], 256],
                12885: [[50, 53], 256],
                12886: [[50, 54], 256],
                12887: [[50, 55], 256],
                12888: [[50, 56], 256],
                12889: [[50, 57], 256],
                12890: [[51, 48], 256],
                12891: [[51, 49], 256],
                12892: [[51, 50], 256],
                12893: [[51, 51], 256],
                12894: [[51, 52], 256],
                12895: [[51, 53], 256],
                12896: [[4352], 256],
                12897: [[4354], 256],
                12898: [[4355], 256],
                12899: [[4357], 256],
                12900: [[4358], 256],
                12901: [[4359], 256],
                12902: [[4361], 256],
                12903: [[4363], 256],
                12904: [[4364], 256],
                12905: [[4366], 256],
                12906: [[4367], 256],
                12907: [[4368], 256],
                12908: [[4369], 256],
                12909: [[4370], 256],
                12910: [[4352, 4449], 256],
                12911: [[4354, 4449], 256],
                12912: [[4355, 4449], 256],
                12913: [[4357, 4449], 256],
                12914: [[4358, 4449], 256],
                12915: [[4359, 4449], 256],
                12916: [[4361, 4449], 256],
                12917: [[4363, 4449], 256],
                12918: [[4364, 4449], 256],
                12919: [[4366, 4449], 256],
                12920: [[4367, 4449], 256],
                12921: [[4368, 4449], 256],
                12922: [[4369, 4449], 256],
                12923: [[4370, 4449], 256],
                12924: [[4366, 4449, 4535, 4352, 4457], 256],
                12925: [[4364, 4462, 4363, 4468], 256],
                12926: [[4363, 4462], 256],
                12928: [[19968], 256],
                12929: [[20108], 256],
                12930: [[19977], 256],
                12931: [[22235], 256],
                12932: [[20116], 256],
                12933: [[20845], 256],
                12934: [[19971], 256],
                12935: [[20843], 256],
                12936: [[20061], 256],
                12937: [[21313], 256],
                12938: [[26376], 256],
                12939: [[28779], 256],
                12940: [[27700], 256],
                12941: [[26408], 256],
                12942: [[37329], 256],
                12943: [[22303], 256],
                12944: [[26085], 256],
                12945: [[26666], 256],
                12946: [[26377], 256],
                12947: [[31038], 256],
                12948: [[21517], 256],
                12949: [[29305], 256],
                12950: [[36001], 256],
                12951: [[31069], 256],
                12952: [[21172], 256],
                12953: [[31192], 256],
                12954: [[30007], 256],
                12955: [[22899], 256],
                12956: [[36969], 256],
                12957: [[20778], 256],
                12958: [[21360], 256],
                12959: [[27880], 256],
                12960: [[38917], 256],
                12961: [[20241], 256],
                12962: [[20889], 256],
                12963: [[27491], 256],
                12964: [[19978], 256],
                12965: [[20013], 256],
                12966: [[19979], 256],
                12967: [[24038], 256],
                12968: [[21491], 256],
                12969: [[21307], 256],
                12970: [[23447], 256],
                12971: [[23398], 256],
                12972: [[30435], 256],
                12973: [[20225], 256],
                12974: [[36039], 256],
                12975: [[21332], 256],
                12976: [[22812], 256],
                12977: [[51, 54], 256],
                12978: [[51, 55], 256],
                12979: [[51, 56], 256],
                12980: [[51, 57], 256],
                12981: [[52, 48], 256],
                12982: [[52, 49], 256],
                12983: [[52, 50], 256],
                12984: [[52, 51], 256],
                12985: [[52, 52], 256],
                12986: [[52, 53], 256],
                12987: [[52, 54], 256],
                12988: [[52, 55], 256],
                12989: [[52, 56], 256],
                12990: [[52, 57], 256],
                12991: [[53, 48], 256],
                12992: [[49, 26376], 256],
                12993: [[50, 26376], 256],
                12994: [[51, 26376], 256],
                12995: [[52, 26376], 256],
                12996: [[53, 26376], 256],
                12997: [[54, 26376], 256],
                12998: [[55, 26376], 256],
                12999: [[56, 26376], 256],
                13e3: [[57, 26376], 256],
                13001: [[49, 48, 26376], 256],
                13002: [[49, 49, 26376], 256],
                13003: [[49, 50, 26376], 256],
                13004: [[72, 103], 256],
                13005: [[101, 114, 103], 256],
                13006: [[101, 86], 256],
                13007: [[76, 84, 68], 256],
                13008: [[12450], 256],
                13009: [[12452], 256],
                13010: [[12454], 256],
                13011: [[12456], 256],
                13012: [[12458], 256],
                13013: [[12459], 256],
                13014: [[12461], 256],
                13015: [[12463], 256],
                13016: [[12465], 256],
                13017: [[12467], 256],
                13018: [[12469], 256],
                13019: [[12471], 256],
                13020: [[12473], 256],
                13021: [[12475], 256],
                13022: [[12477], 256],
                13023: [[12479], 256],
                13024: [[12481], 256],
                13025: [[12484], 256],
                13026: [[12486], 256],
                13027: [[12488], 256],
                13028: [[12490], 256],
                13029: [[12491], 256],
                13030: [[12492], 256],
                13031: [[12493], 256],
                13032: [[12494], 256],
                13033: [[12495], 256],
                13034: [[12498], 256],
                13035: [[12501], 256],
                13036: [[12504], 256],
                13037: [[12507], 256],
                13038: [[12510], 256],
                13039: [[12511], 256],
                13040: [[12512], 256],
                13041: [[12513], 256],
                13042: [[12514], 256],
                13043: [[12516], 256],
                13044: [[12518], 256],
                13045: [[12520], 256],
                13046: [[12521], 256],
                13047: [[12522], 256],
                13048: [[12523], 256],
                13049: [[12524], 256],
                13050: [[12525], 256],
                13051: [[12527], 256],
                13052: [[12528], 256],
                13053: [[12529], 256],
                13054: [[12530], 256]
            },
            13056: {
                13056: [[12450, 12497, 12540, 12488], 256],
                13057: [[12450, 12523, 12501, 12449], 256],
                13058: [[12450, 12531, 12506, 12450], 256],
                13059: [[12450, 12540, 12523], 256],
                13060: [[12452, 12491, 12531, 12464], 256],
                13061: [[12452, 12531, 12481], 256],
                13062: [[12454, 12457, 12531], 256],
                13063: [[12456, 12473, 12463, 12540, 12489], 256],
                13064: [[12456, 12540, 12459, 12540], 256],
                13065: [[12458, 12531, 12473], 256],
                13066: [[12458, 12540, 12512], 256],
                13067: [[12459, 12452, 12522], 256],
                13068: [[12459, 12521, 12483, 12488], 256],
                13069: [[12459, 12525, 12522, 12540], 256],
                13070: [[12460, 12525, 12531], 256],
                13071: [[12460, 12531, 12510], 256],
                13072: [[12462, 12460], 256],
                13073: [[12462, 12491, 12540], 256],
                13074: [[12461, 12517, 12522, 12540], 256],
                13075: [[12462, 12523, 12480, 12540], 256],
                13076: [[12461, 12525], 256],
                13077: [[12461, 12525, 12464, 12521, 12512], 256],
                13078: [[12461, 12525, 12513, 12540, 12488, 12523], 256],
                13079: [[12461, 12525, 12527, 12483, 12488], 256],
                13080: [[12464, 12521, 12512], 256],
                13081: [[12464, 12521, 12512, 12488, 12531], 256],
                13082: [[12463, 12523, 12476, 12452, 12525], 256],
                13083: [[12463, 12525, 12540, 12493], 256],
                13084: [[12465, 12540, 12473], 256],
                13085: [[12467, 12523, 12490], 256],
                13086: [[12467, 12540, 12509], 256],
                13087: [[12469, 12452, 12463, 12523], 256],
                13088: [[12469, 12531, 12481, 12540, 12512], 256],
                13089: [[12471, 12522, 12531, 12464], 256],
                13090: [[12475, 12531, 12481], 256],
                13091: [[12475, 12531, 12488], 256],
                13092: [[12480, 12540, 12473], 256],
                13093: [[12487, 12471], 256],
                13094: [[12489, 12523], 256],
                13095: [[12488, 12531], 256],
                13096: [[12490, 12494], 256],
                13097: [[12494, 12483, 12488], 256],
                13098: [[12495, 12452, 12484], 256],
                13099: [[12497, 12540, 12475, 12531, 12488], 256],
                13100: [[12497, 12540, 12484], 256],
                13101: [[12496, 12540, 12524, 12523], 256],
                13102: [[12500, 12450, 12473, 12488, 12523], 256],
                13103: [[12500, 12463, 12523], 256],
                13104: [[12500, 12467], 256],
                13105: [[12499, 12523], 256],
                13106: [[12501, 12449, 12521, 12483, 12489], 256],
                13107: [[12501, 12451, 12540, 12488], 256],
                13108: [[12502, 12483, 12471, 12455, 12523], 256],
                13109: [[12501, 12521, 12531], 256],
                13110: [[12504, 12463, 12479, 12540, 12523], 256],
                13111: [[12506, 12477], 256],
                13112: [[12506, 12491, 12498], 256],
                13113: [[12504, 12523, 12484], 256],
                13114: [[12506, 12531, 12473], 256],
                13115: [[12506, 12540, 12472], 256],
                13116: [[12505, 12540, 12479], 256],
                13117: [[12509, 12452, 12531, 12488], 256],
                13118: [[12508, 12523, 12488], 256],
                13119: [[12507, 12531], 256],
                13120: [[12509, 12531, 12489], 256],
                13121: [[12507, 12540, 12523], 256],
                13122: [[12507, 12540, 12531], 256],
                13123: [[12510, 12452, 12463, 12525], 256],
                13124: [[12510, 12452, 12523], 256],
                13125: [[12510, 12483, 12495], 256],
                13126: [[12510, 12523, 12463], 256],
                13127: [[12510, 12531, 12471, 12519, 12531], 256],
                13128: [[12511, 12463, 12525, 12531], 256],
                13129: [[12511, 12522], 256],
                13130: [[12511, 12522, 12496, 12540, 12523], 256],
                13131: [[12513, 12460], 256],
                13132: [[12513, 12460, 12488, 12531], 256],
                13133: [[12513, 12540, 12488, 12523], 256],
                13134: [[12516, 12540, 12489], 256],
                13135: [[12516, 12540, 12523], 256],
                13136: [[12518, 12450, 12531], 256],
                13137: [[12522, 12483, 12488, 12523], 256],
                13138: [[12522, 12521], 256],
                13139: [[12523, 12500, 12540], 256],
                13140: [[12523, 12540, 12502, 12523], 256],
                13141: [[12524, 12512], 256],
                13142: [[12524, 12531, 12488, 12466, 12531], 256],
                13143: [[12527, 12483, 12488], 256],
                13144: [[48, 28857], 256],
                13145: [[49, 28857], 256],
                13146: [[50, 28857], 256],
                13147: [[51, 28857], 256],
                13148: [[52, 28857], 256],
                13149: [[53, 28857], 256],
                13150: [[54, 28857], 256],
                13151: [[55, 28857], 256],
                13152: [[56, 28857], 256],
                13153: [[57, 28857], 256],
                13154: [[49, 48, 28857], 256],
                13155: [[49, 49, 28857], 256],
                13156: [[49, 50, 28857], 256],
                13157: [[49, 51, 28857], 256],
                13158: [[49, 52, 28857], 256],
                13159: [[49, 53, 28857], 256],
                13160: [[49, 54, 28857], 256],
                13161: [[49, 55, 28857], 256],
                13162: [[49, 56, 28857], 256],
                13163: [[49, 57, 28857], 256],
                13164: [[50, 48, 28857], 256],
                13165: [[50, 49, 28857], 256],
                13166: [[50, 50, 28857], 256],
                13167: [[50, 51, 28857], 256],
                13168: [[50, 52, 28857], 256],
                13169: [[104, 80, 97], 256],
                13170: [[100, 97], 256],
                13171: [[65, 85], 256],
                13172: [[98, 97, 114], 256],
                13173: [[111, 86], 256],
                13174: [[112, 99], 256],
                13175: [[100, 109], 256],
                13176: [[100, 109, 178], 256],
                13177: [[100, 109, 179], 256],
                13178: [[73, 85], 256],
                13179: [[24179, 25104], 256],
                13180: [[26157, 21644], 256],
                13181: [[22823, 27491], 256],
                13182: [[26126, 27835], 256],
                13183: [[26666, 24335, 20250, 31038], 256],
                13184: [[112, 65], 256],
                13185: [[110, 65], 256],
                13186: [[956, 65], 256],
                13187: [[109, 65], 256],
                13188: [[107, 65], 256],
                13189: [[75, 66], 256],
                13190: [[77, 66], 256],
                13191: [[71, 66], 256],
                13192: [[99, 97, 108], 256],
                13193: [[107, 99, 97, 108], 256],
                13194: [[112, 70], 256],
                13195: [[110, 70], 256],
                13196: [[956, 70], 256],
                13197: [[956, 103], 256],
                13198: [[109, 103], 256],
                13199: [[107, 103], 256],
                13200: [[72, 122], 256],
                13201: [[107, 72, 122], 256],
                13202: [[77, 72, 122], 256],
                13203: [[71, 72, 122], 256],
                13204: [[84, 72, 122], 256],
                13205: [[956, 8467], 256],
                13206: [[109, 8467], 256],
                13207: [[100, 8467], 256],
                13208: [[107, 8467], 256],
                13209: [[102, 109], 256],
                13210: [[110, 109], 256],
                13211: [[956, 109], 256],
                13212: [[109, 109], 256],
                13213: [[99, 109], 256],
                13214: [[107, 109], 256],
                13215: [[109, 109, 178], 256],
                13216: [[99, 109, 178], 256],
                13217: [[109, 178], 256],
                13218: [[107, 109, 178], 256],
                13219: [[109, 109, 179], 256],
                13220: [[99, 109, 179], 256],
                13221: [[109, 179], 256],
                13222: [[107, 109, 179], 256],
                13223: [[109, 8725, 115], 256],
                13224: [[109, 8725, 115, 178], 256],
                13225: [[80, 97], 256],
                13226: [[107, 80, 97], 256],
                13227: [[77, 80, 97], 256],
                13228: [[71, 80, 97], 256],
                13229: [[114, 97, 100], 256],
                13230: [[114, 97, 100, 8725, 115], 256],
                13231: [[114, 97, 100, 8725, 115, 178], 256],
                13232: [[112, 115], 256],
                13233: [[110, 115], 256],
                13234: [[956, 115], 256],
                13235: [[109, 115], 256],
                13236: [[112, 86], 256],
                13237: [[110, 86], 256],
                13238: [[956, 86], 256],
                13239: [[109, 86], 256],
                13240: [[107, 86], 256],
                13241: [[77, 86], 256],
                13242: [[112, 87], 256],
                13243: [[110, 87], 256],
                13244: [[956, 87], 256],
                13245: [[109, 87], 256],
                13246: [[107, 87], 256],
                13247: [[77, 87], 256],
                13248: [[107, 937], 256],
                13249: [[77, 937], 256],
                13250: [[97, 46, 109, 46], 256],
                13251: [[66, 113], 256],
                13252: [[99, 99], 256],
                13253: [[99, 100], 256],
                13254: [[67, 8725, 107, 103], 256],
                13255: [[67, 111, 46], 256],
                13256: [[100, 66], 256],
                13257: [[71, 121], 256],
                13258: [[104, 97], 256],
                13259: [[72, 80], 256],
                13260: [[105, 110], 256],
                13261: [[75, 75], 256],
                13262: [[75, 77], 256],
                13263: [[107, 116], 256],
                13264: [[108, 109], 256],
                13265: [[108, 110], 256],
                13266: [[108, 111, 103], 256],
                13267: [[108, 120], 256],
                13268: [[109, 98], 256],
                13269: [[109, 105, 108], 256],
                13270: [[109, 111, 108], 256],
                13271: [[80, 72], 256],
                13272: [[112, 46, 109, 46], 256],
                13273: [[80, 80, 77], 256],
                13274: [[80, 82], 256],
                13275: [[115, 114], 256],
                13276: [[83, 118], 256],
                13277: [[87, 98], 256],
                13278: [[86, 8725, 109], 256],
                13279: [[65, 8725, 109], 256],
                13280: [[49, 26085], 256],
                13281: [[50, 26085], 256],
                13282: [[51, 26085], 256],
                13283: [[52, 26085], 256],
                13284: [[53, 26085], 256],
                13285: [[54, 26085], 256],
                13286: [[55, 26085], 256],
                13287: [[56, 26085], 256],
                13288: [[57, 26085], 256],
                13289: [[49, 48, 26085], 256],
                13290: [[49, 49, 26085], 256],
                13291: [[49, 50, 26085], 256],
                13292: [[49, 51, 26085], 256],
                13293: [[49, 52, 26085], 256],
                13294: [[49, 53, 26085], 256],
                13295: [[49, 54, 26085], 256],
                13296: [[49, 55, 26085], 256],
                13297: [[49, 56, 26085], 256],
                13298: [[49, 57, 26085], 256],
                13299: [[50, 48, 26085], 256],
                13300: [[50, 49, 26085], 256],
                13301: [[50, 50, 26085], 256],
                13302: [[50, 51, 26085], 256],
                13303: [[50, 52, 26085], 256],
                13304: [[50, 53, 26085], 256],
                13305: [[50, 54, 26085], 256],
                13306: [[50, 55, 26085], 256],
                13307: [[50, 56, 26085], 256],
                13308: [[50, 57, 26085], 256],
                13309: [[51, 48, 26085], 256],
                13310: [[51, 49, 26085], 256],
                13311: [[103, 97, 108], 256]
            },
            27136: {
                92912: [, 1],
                92913: [, 1],
                92914: [, 1],
                92915: [, 1],
                92916: [, 1]
            },
            27392: {
                92976: [, 230],
                92977: [, 230],
                92978: [, 230],
                92979: [, 230],
                92980: [, 230],
                92981: [, 230],
                92982: [, 230]
            },
            42496: {
                42607: [, 230],
                42612: [, 230],
                42613: [, 230],
                42614: [, 230],
                42615: [, 230],
                42616: [, 230],
                42617: [, 230],
                42618: [, 230],
                42619: [, 230],
                42620: [, 230],
                42621: [, 230],
                42652: [[1098], 256],
                42653: [[1100], 256],
                42655: [, 230],
                42736: [, 230],
                42737: [, 230]
            },
            42752: {
                42864: [[42863], 256],
                43e3: [[294], 256],
                43001: [[339], 256]
            },
            43008: {
                43014: [, 9],
                43204: [, 9],
                43232: [, 230],
                43233: [, 230],
                43234: [, 230],
                43235: [, 230],
                43236: [, 230],
                43237: [, 230],
                43238: [, 230],
                43239: [, 230],
                43240: [, 230],
                43241: [, 230],
                43242: [, 230],
                43243: [, 230],
                43244: [, 230],
                43245: [, 230],
                43246: [, 230],
                43247: [, 230],
                43248: [, 230],
                43249: [, 230]
            },
            43264: {
                43307: [, 220],
                43308: [, 220],
                43309: [, 220],
                43347: [, 9],
                43443: [, 7],
                43456: [, 9]
            },
            43520: {
                43696: [, 230],
                43698: [, 230],
                43699: [, 230],
                43700: [, 220],
                43703: [, 230],
                43704: [, 230],
                43710: [, 230],
                43711: [, 230],
                43713: [, 230],
                43766: [, 9]
            },
            43776: {
                43868: [[42791], 256],
                43869: [[43831], 256],
                43870: [[619], 256],
                43871: [[43858], 256],
                44013: [, 9]
            },
            48128: {
                113822: [, 1]
            },
            53504: {
                119134: [[119127, 119141], 512],
                119135: [[119128, 119141], 512],
                119136: [[119135, 119150], 512],
                119137: [[119135, 119151], 512],
                119138: [[119135, 119152], 512],
                119139: [[119135, 119153], 512],
                119140: [[119135, 119154], 512],
                119141: [, 216],
                119142: [, 216],
                119143: [, 1],
                119144: [, 1],
                119145: [, 1],
                119149: [, 226],
                119150: [, 216],
                119151: [, 216],
                119152: [, 216],
                119153: [, 216],
                119154: [, 216],
                119163: [, 220],
                119164: [, 220],
                119165: [, 220],
                119166: [, 220],
                119167: [, 220],
                119168: [, 220],
                119169: [, 220],
                119170: [, 220],
                119173: [, 230],
                119174: [, 230],
                119175: [, 230],
                119176: [, 230],
                119177: [, 230],
                119178: [, 220],
                119179: [, 220],
                119210: [, 230],
                119211: [, 230],
                119212: [, 230],
                119213: [, 230],
                119227: [[119225, 119141], 512],
                119228: [[119226, 119141], 512],
                119229: [[119227, 119150], 512],
                119230: [[119228, 119150], 512],
                119231: [[119227, 119151], 512],
                119232: [[119228, 119151], 512]
            },
            53760: {
                119362: [, 230],
                119363: [, 230],
                119364: [, 230]
            },
            54272: {
                119808: [[65], 256],
                119809: [[66], 256],
                119810: [[67], 256],
                119811: [[68], 256],
                119812: [[69], 256],
                119813: [[70], 256],
                119814: [[71], 256],
                119815: [[72], 256],
                119816: [[73], 256],
                119817: [[74], 256],
                119818: [[75], 256],
                119819: [[76], 256],
                119820: [[77], 256],
                119821: [[78], 256],
                119822: [[79], 256],
                119823: [[80], 256],
                119824: [[81], 256],
                119825: [[82], 256],
                119826: [[83], 256],
                119827: [[84], 256],
                119828: [[85], 256],
                119829: [[86], 256],
                119830: [[87], 256],
                119831: [[88], 256],
                119832: [[89], 256],
                119833: [[90], 256],
                119834: [[97], 256],
                119835: [[98], 256],
                119836: [[99], 256],
                119837: [[100], 256],
                119838: [[101], 256],
                119839: [[102], 256],
                119840: [[103], 256],
                119841: [[104], 256],
                119842: [[105], 256],
                119843: [[106], 256],
                119844: [[107], 256],
                119845: [[108], 256],
                119846: [[109], 256],
                119847: [[110], 256],
                119848: [[111], 256],
                119849: [[112], 256],
                119850: [[113], 256],
                119851: [[114], 256],
                119852: [[115], 256],
                119853: [[116], 256],
                119854: [[117], 256],
                119855: [[118], 256],
                119856: [[119], 256],
                119857: [[120], 256],
                119858: [[121], 256],
                119859: [[122], 256],
                119860: [[65], 256],
                119861: [[66], 256],
                119862: [[67], 256],
                119863: [[68], 256],
                119864: [[69], 256],
                119865: [[70], 256],
                119866: [[71], 256],
                119867: [[72], 256],
                119868: [[73], 256],
                119869: [[74], 256],
                119870: [[75], 256],
                119871: [[76], 256],
                119872: [[77], 256],
                119873: [[78], 256],
                119874: [[79], 256],
                119875: [[80], 256],
                119876: [[81], 256],
                119877: [[82], 256],
                119878: [[83], 256],
                119879: [[84], 256],
                119880: [[85], 256],
                119881: [[86], 256],
                119882: [[87], 256],
                119883: [[88], 256],
                119884: [[89], 256],
                119885: [[90], 256],
                119886: [[97], 256],
                119887: [[98], 256],
                119888: [[99], 256],
                119889: [[100], 256],
                119890: [[101], 256],
                119891: [[102], 256],
                119892: [[103], 256],
                119894: [[105], 256],
                119895: [[106], 256],
                119896: [[107], 256],
                119897: [[108], 256],
                119898: [[109], 256],
                119899: [[110], 256],
                119900: [[111], 256],
                119901: [[112], 256],
                119902: [[113], 256],
                119903: [[114], 256],
                119904: [[115], 256],
                119905: [[116], 256],
                119906: [[117], 256],
                119907: [[118], 256],
                119908: [[119], 256],
                119909: [[120], 256],
                119910: [[121], 256],
                119911: [[122], 256],
                119912: [[65], 256],
                119913: [[66], 256],
                119914: [[67], 256],
                119915: [[68], 256],
                119916: [[69], 256],
                119917: [[70], 256],
                119918: [[71], 256],
                119919: [[72], 256],
                119920: [[73], 256],
                119921: [[74], 256],
                119922: [[75], 256],
                119923: [[76], 256],
                119924: [[77], 256],
                119925: [[78], 256],
                119926: [[79], 256],
                119927: [[80], 256],
                119928: [[81], 256],
                119929: [[82], 256],
                119930: [[83], 256],
                119931: [[84], 256],
                119932: [[85], 256],
                119933: [[86], 256],
                119934: [[87], 256],
                119935: [[88], 256],
                119936: [[89], 256],
                119937: [[90], 256],
                119938: [[97], 256],
                119939: [[98], 256],
                119940: [[99], 256],
                119941: [[100], 256],
                119942: [[101], 256],
                119943: [[102], 256],
                119944: [[103], 256],
                119945: [[104], 256],
                119946: [[105], 256],
                119947: [[106], 256],
                119948: [[107], 256],
                119949: [[108], 256],
                119950: [[109], 256],
                119951: [[110], 256],
                119952: [[111], 256],
                119953: [[112], 256],
                119954: [[113], 256],
                119955: [[114], 256],
                119956: [[115], 256],
                119957: [[116], 256],
                119958: [[117], 256],
                119959: [[118], 256],
                119960: [[119], 256],
                119961: [[120], 256],
                119962: [[121], 256],
                119963: [[122], 256],
                119964: [[65], 256],
                119966: [[67], 256],
                119967: [[68], 256],
                119970: [[71], 256],
                119973: [[74], 256],
                119974: [[75], 256],
                119977: [[78], 256],
                119978: [[79], 256],
                119979: [[80], 256],
                119980: [[81], 256],
                119982: [[83], 256],
                119983: [[84], 256],
                119984: [[85], 256],
                119985: [[86], 256],
                119986: [[87], 256],
                119987: [[88], 256],
                119988: [[89], 256],
                119989: [[90], 256],
                119990: [[97], 256],
                119991: [[98], 256],
                119992: [[99], 256],
                119993: [[100], 256],
                119995: [[102], 256],
                119997: [[104], 256],
                119998: [[105], 256],
                119999: [[106], 256],
                12e4: [[107], 256],
                120001: [[108], 256],
                120002: [[109], 256],
                120003: [[110], 256],
                120005: [[112], 256],
                120006: [[113], 256],
                120007: [[114], 256],
                120008: [[115], 256],
                120009: [[116], 256],
                120010: [[117], 256],
                120011: [[118], 256],
                120012: [[119], 256],
                120013: [[120], 256],
                120014: [[121], 256],
                120015: [[122], 256],
                120016: [[65], 256],
                120017: [[66], 256],
                120018: [[67], 256],
                120019: [[68], 256],
                120020: [[69], 256],
                120021: [[70], 256],
                120022: [[71], 256],
                120023: [[72], 256],
                120024: [[73], 256],
                120025: [[74], 256],
                120026: [[75], 256],
                120027: [[76], 256],
                120028: [[77], 256],
                120029: [[78], 256],
                120030: [[79], 256],
                120031: [[80], 256],
                120032: [[81], 256],
                120033: [[82], 256],
                120034: [[83], 256],
                120035: [[84], 256],
                120036: [[85], 256],
                120037: [[86], 256],
                120038: [[87], 256],
                120039: [[88], 256],
                120040: [[89], 256],
                120041: [[90], 256],
                120042: [[97], 256],
                120043: [[98], 256],
                120044: [[99], 256],
                120045: [[100], 256],
                120046: [[101], 256],
                120047: [[102], 256],
                120048: [[103], 256],
                120049: [[104], 256],
                120050: [[105], 256],
                120051: [[106], 256],
                120052: [[107], 256],
                120053: [[108], 256],
                120054: [[109], 256],
                120055: [[110], 256],
                120056: [[111], 256],
                120057: [[112], 256],
                120058: [[113], 256],
                120059: [[114], 256],
                120060: [[115], 256],
                120061: [[116], 256],
                120062: [[117], 256],
                120063: [[118], 256]
            },
            54528: {
                120064: [[119], 256],
                120065: [[120], 256],
                120066: [[121], 256],
                120067: [[122], 256],
                120068: [[65], 256],
                120069: [[66], 256],
                120071: [[68], 256],
                120072: [[69], 256],
                120073: [[70], 256],
                120074: [[71], 256],
                120077: [[74], 256],
                120078: [[75], 256],
                120079: [[76], 256],
                120080: [[77], 256],
                120081: [[78], 256],
                120082: [[79], 256],
                120083: [[80], 256],
                120084: [[81], 256],
                120086: [[83], 256],
                120087: [[84], 256],
                120088: [[85], 256],
                120089: [[86], 256],
                120090: [[87], 256],
                120091: [[88], 256],
                120092: [[89], 256],
                120094: [[97], 256],
                120095: [[98], 256],
                120096: [[99], 256],
                120097: [[100], 256],
                120098: [[101], 256],
                120099: [[102], 256],
                120100: [[103], 256],
                120101: [[104], 256],
                120102: [[105], 256],
                120103: [[106], 256],
                120104: [[107], 256],
                120105: [[108], 256],
                120106: [[109], 256],
                120107: [[110], 256],
                120108: [[111], 256],
                120109: [[112], 256],
                120110: [[113], 256],
                120111: [[114], 256],
                120112: [[115], 256],
                120113: [[116], 256],
                120114: [[117], 256],
                120115: [[118], 256],
                120116: [[119], 256],
                120117: [[120], 256],
                120118: [[121], 256],
                120119: [[122], 256],
                120120: [[65], 256],
                120121: [[66], 256],
                120123: [[68], 256],
                120124: [[69], 256],
                120125: [[70], 256],
                120126: [[71], 256],
                120128: [[73], 256],
                120129: [[74], 256],
                120130: [[75], 256],
                120131: [[76], 256],
                120132: [[77], 256],
                120134: [[79], 256],
                120138: [[83], 256],
                120139: [[84], 256],
                120140: [[85], 256],
                120141: [[86], 256],
                120142: [[87], 256],
                120143: [[88], 256],
                120144: [[89], 256],
                120146: [[97], 256],
                120147: [[98], 256],
                120148: [[99], 256],
                120149: [[100], 256],
                120150: [[101], 256],
                120151: [[102], 256],
                120152: [[103], 256],
                120153: [[104], 256],
                120154: [[105], 256],
                120155: [[106], 256],
                120156: [[107], 256],
                120157: [[108], 256],
                120158: [[109], 256],
                120159: [[110], 256],
                120160: [[111], 256],
                120161: [[112], 256],
                120162: [[113], 256],
                120163: [[114], 256],
                120164: [[115], 256],
                120165: [[116], 256],
                120166: [[117], 256],
                120167: [[118], 256],
                120168: [[119], 256],
                120169: [[120], 256],
                120170: [[121], 256],
                120171: [[122], 256],
                120172: [[65], 256],
                120173: [[66], 256],
                120174: [[67], 256],
                120175: [[68], 256],
                120176: [[69], 256],
                120177: [[70], 256],
                120178: [[71], 256],
                120179: [[72], 256],
                120180: [[73], 256],
                120181: [[74], 256],
                120182: [[75], 256],
                120183: [[76], 256],
                120184: [[77], 256],
                120185: [[78], 256],
                120186: [[79], 256],
                120187: [[80], 256],
                120188: [[81], 256],
                120189: [[82], 256],
                120190: [[83], 256],
                120191: [[84], 256],
                120192: [[85], 256],
                120193: [[86], 256],
                120194: [[87], 256],
                120195: [[88], 256],
                120196: [[89], 256],
                120197: [[90], 256],
                120198: [[97], 256],
                120199: [[98], 256],
                120200: [[99], 256],
                120201: [[100], 256],
                120202: [[101], 256],
                120203: [[102], 256],
                120204: [[103], 256],
                120205: [[104], 256],
                120206: [[105], 256],
                120207: [[106], 256],
                120208: [[107], 256],
                120209: [[108], 256],
                120210: [[109], 256],
                120211: [[110], 256],
                120212: [[111], 256],
                120213: [[112], 256],
                120214: [[113], 256],
                120215: [[114], 256],
                120216: [[115], 256],
                120217: [[116], 256],
                120218: [[117], 256],
                120219: [[118], 256],
                120220: [[119], 256],
                120221: [[120], 256],
                120222: [[121], 256],
                120223: [[122], 256],
                120224: [[65], 256],
                120225: [[66], 256],
                120226: [[67], 256],
                120227: [[68], 256],
                120228: [[69], 256],
                120229: [[70], 256],
                120230: [[71], 256],
                120231: [[72], 256],
                120232: [[73], 256],
                120233: [[74], 256],
                120234: [[75], 256],
                120235: [[76], 256],
                120236: [[77], 256],
                120237: [[78], 256],
                120238: [[79], 256],
                120239: [[80], 256],
                120240: [[81], 256],
                120241: [[82], 256],
                120242: [[83], 256],
                120243: [[84], 256],
                120244: [[85], 256],
                120245: [[86], 256],
                120246: [[87], 256],
                120247: [[88], 256],
                120248: [[89], 256],
                120249: [[90], 256],
                120250: [[97], 256],
                120251: [[98], 256],
                120252: [[99], 256],
                120253: [[100], 256],
                120254: [[101], 256],
                120255: [[102], 256],
                120256: [[103], 256],
                120257: [[104], 256],
                120258: [[105], 256],
                120259: [[106], 256],
                120260: [[107], 256],
                120261: [[108], 256],
                120262: [[109], 256],
                120263: [[110], 256],
                120264: [[111], 256],
                120265: [[112], 256],
                120266: [[113], 256],
                120267: [[114], 256],
                120268: [[115], 256],
                120269: [[116], 256],
                120270: [[117], 256],
                120271: [[118], 256],
                120272: [[119], 256],
                120273: [[120], 256],
                120274: [[121], 256],
                120275: [[122], 256],
                120276: [[65], 256],
                120277: [[66], 256],
                120278: [[67], 256],
                120279: [[68], 256],
                120280: [[69], 256],
                120281: [[70], 256],
                120282: [[71], 256],
                120283: [[72], 256],
                120284: [[73], 256],
                120285: [[74], 256],
                120286: [[75], 256],
                120287: [[76], 256],
                120288: [[77], 256],
                120289: [[78], 256],
                120290: [[79], 256],
                120291: [[80], 256],
                120292: [[81], 256],
                120293: [[82], 256],
                120294: [[83], 256],
                120295: [[84], 256],
                120296: [[85], 256],
                120297: [[86], 256],
                120298: [[87], 256],
                120299: [[88], 256],
                120300: [[89], 256],
                120301: [[90], 256],
                120302: [[97], 256],
                120303: [[98], 256],
                120304: [[99], 256],
                120305: [[100], 256],
                120306: [[101], 256],
                120307: [[102], 256],
                120308: [[103], 256],
                120309: [[104], 256],
                120310: [[105], 256],
                120311: [[106], 256],
                120312: [[107], 256],
                120313: [[108], 256],
                120314: [[109], 256],
                120315: [[110], 256],
                120316: [[111], 256],
                120317: [[112], 256],
                120318: [[113], 256],
                120319: [[114], 256]
            },
            54784: {
                120320: [[115], 256],
                120321: [[116], 256],
                120322: [[117], 256],
                120323: [[118], 256],
                120324: [[119], 256],
                120325: [[120], 256],
                120326: [[121], 256],
                120327: [[122], 256],
                120328: [[65], 256],
                120329: [[66], 256],
                120330: [[67], 256],
                120331: [[68], 256],
                120332: [[69], 256],
                120333: [[70], 256],
                120334: [[71], 256],
                120335: [[72], 256],
                120336: [[73], 256],
                120337: [[74], 256],
                120338: [[75], 256],
                120339: [[76], 256],
                120340: [[77], 256],
                120341: [[78], 256],
                120342: [[79], 256],
                120343: [[80], 256],
                120344: [[81], 256],
                120345: [[82], 256],
                120346: [[83], 256],
                120347: [[84], 256],
                120348: [[85], 256],
                120349: [[86], 256],
                120350: [[87], 256],
                120351: [[88], 256],
                120352: [[89], 256],
                120353: [[90], 256],
                120354: [[97], 256],
                120355: [[98], 256],
                120356: [[99], 256],
                120357: [[100], 256],
                120358: [[101], 256],
                120359: [[102], 256],
                120360: [[103], 256],
                120361: [[104], 256],
                120362: [[105], 256],
                120363: [[106], 256],
                120364: [[107], 256],
                120365: [[108], 256],
                120366: [[109], 256],
                120367: [[110], 256],
                120368: [[111], 256],
                120369: [[112], 256],
                120370: [[113], 256],
                120371: [[114], 256],
                120372: [[115], 256],
                120373: [[116], 256],
                120374: [[117], 256],
                120375: [[118], 256],
                120376: [[119], 256],
                120377: [[120], 256],
                120378: [[121], 256],
                120379: [[122], 256],
                120380: [[65], 256],
                120381: [[66], 256],
                120382: [[67], 256],
                120383: [[68], 256],
                120384: [[69], 256],
                120385: [[70], 256],
                120386: [[71], 256],
                120387: [[72], 256],
                120388: [[73], 256],
                120389: [[74], 256],
                120390: [[75], 256],
                120391: [[76], 256],
                120392: [[77], 256],
                120393: [[78], 256],
                120394: [[79], 256],
                120395: [[80], 256],
                120396: [[81], 256],
                120397: [[82], 256],
                120398: [[83], 256],
                120399: [[84], 256],
                120400: [[85], 256],
                120401: [[86], 256],
                120402: [[87], 256],
                120403: [[88], 256],
                120404: [[89], 256],
                120405: [[90], 256],
                120406: [[97], 256],
                120407: [[98], 256],
                120408: [[99], 256],
                120409: [[100], 256],
                120410: [[101], 256],
                120411: [[102], 256],
                120412: [[103], 256],
                120413: [[104], 256],
                120414: [[105], 256],
                120415: [[106], 256],
                120416: [[107], 256],
                120417: [[108], 256],
                120418: [[109], 256],
                120419: [[110], 256],
                120420: [[111], 256],
                120421: [[112], 256],
                120422: [[113], 256],
                120423: [[114], 256],
                120424: [[115], 256],
                120425: [[116], 256],
                120426: [[117], 256],
                120427: [[118], 256],
                120428: [[119], 256],
                120429: [[120], 256],
                120430: [[121], 256],
                120431: [[122], 256],
                120432: [[65], 256],
                120433: [[66], 256],
                120434: [[67], 256],
                120435: [[68], 256],
                120436: [[69], 256],
                120437: [[70], 256],
                120438: [[71], 256],
                120439: [[72], 256],
                120440: [[73], 256],
                120441: [[74], 256],
                120442: [[75], 256],
                120443: [[76], 256],
                120444: [[77], 256],
                120445: [[78], 256],
                120446: [[79], 256],
                120447: [[80], 256],
                120448: [[81], 256],
                120449: [[82], 256],
                120450: [[83], 256],
                120451: [[84], 256],
                120452: [[85], 256],
                120453: [[86], 256],
                120454: [[87], 256],
                120455: [[88], 256],
                120456: [[89], 256],
                120457: [[90], 256],
                120458: [[97], 256],
                120459: [[98], 256],
                120460: [[99], 256],
                120461: [[100], 256],
                120462: [[101], 256],
                120463: [[102], 256],
                120464: [[103], 256],
                120465: [[104], 256],
                120466: [[105], 256],
                120467: [[106], 256],
                120468: [[107], 256],
                120469: [[108], 256],
                120470: [[109], 256],
                120471: [[110], 256],
                120472: [[111], 256],
                120473: [[112], 256],
                120474: [[113], 256],
                120475: [[114], 256],
                120476: [[115], 256],
                120477: [[116], 256],
                120478: [[117], 256],
                120479: [[118], 256],
                120480: [[119], 256],
                120481: [[120], 256],
                120482: [[121], 256],
                120483: [[122], 256],
                120484: [[305], 256],
                120485: [[567], 256],
                120488: [[913], 256],
                120489: [[914], 256],
                120490: [[915], 256],
                120491: [[916], 256],
                120492: [[917], 256],
                120493: [[918], 256],
                120494: [[919], 256],
                120495: [[920], 256],
                120496: [[921], 256],
                120497: [[922], 256],
                120498: [[923], 256],
                120499: [[924], 256],
                120500: [[925], 256],
                120501: [[926], 256],
                120502: [[927], 256],
                120503: [[928], 256],
                120504: [[929], 256],
                120505: [[1012], 256],
                120506: [[931], 256],
                120507: [[932], 256],
                120508: [[933], 256],
                120509: [[934], 256],
                120510: [[935], 256],
                120511: [[936], 256],
                120512: [[937], 256],
                120513: [[8711], 256],
                120514: [[945], 256],
                120515: [[946], 256],
                120516: [[947], 256],
                120517: [[948], 256],
                120518: [[949], 256],
                120519: [[950], 256],
                120520: [[951], 256],
                120521: [[952], 256],
                120522: [[953], 256],
                120523: [[954], 256],
                120524: [[955], 256],
                120525: [[956], 256],
                120526: [[957], 256],
                120527: [[958], 256],
                120528: [[959], 256],
                120529: [[960], 256],
                120530: [[961], 256],
                120531: [[962], 256],
                120532: [[963], 256],
                120533: [[964], 256],
                120534: [[965], 256],
                120535: [[966], 256],
                120536: [[967], 256],
                120537: [[968], 256],
                120538: [[969], 256],
                120539: [[8706], 256],
                120540: [[1013], 256],
                120541: [[977], 256],
                120542: [[1008], 256],
                120543: [[981], 256],
                120544: [[1009], 256],
                120545: [[982], 256],
                120546: [[913], 256],
                120547: [[914], 256],
                120548: [[915], 256],
                120549: [[916], 256],
                120550: [[917], 256],
                120551: [[918], 256],
                120552: [[919], 256],
                120553: [[920], 256],
                120554: [[921], 256],
                120555: [[922], 256],
                120556: [[923], 256],
                120557: [[924], 256],
                120558: [[925], 256],
                120559: [[926], 256],
                120560: [[927], 256],
                120561: [[928], 256],
                120562: [[929], 256],
                120563: [[1012], 256],
                120564: [[931], 256],
                120565: [[932], 256],
                120566: [[933], 256],
                120567: [[934], 256],
                120568: [[935], 256],
                120569: [[936], 256],
                120570: [[937], 256],
                120571: [[8711], 256],
                120572: [[945], 256],
                120573: [[946], 256],
                120574: [[947], 256],
                120575: [[948], 256]
            },
            55040: {
                120576: [[949], 256],
                120577: [[950], 256],
                120578: [[951], 256],
                120579: [[952], 256],
                120580: [[953], 256],
                120581: [[954], 256],
                120582: [[955], 256],
                120583: [[956], 256],
                120584: [[957], 256],
                120585: [[958], 256],
                120586: [[959], 256],
                120587: [[960], 256],
                120588: [[961], 256],
                120589: [[962], 256],
                120590: [[963], 256],
                120591: [[964], 256],
                120592: [[965], 256],
                120593: [[966], 256],
                120594: [[967], 256],
                120595: [[968], 256],
                120596: [[969], 256],
                120597: [[8706], 256],
                120598: [[1013], 256],
                120599: [[977], 256],
                120600: [[1008], 256],
                120601: [[981], 256],
                120602: [[1009], 256],
                120603: [[982], 256],
                120604: [[913], 256],
                120605: [[914], 256],
                120606: [[915], 256],
                120607: [[916], 256],
                120608: [[917], 256],
                120609: [[918], 256],
                120610: [[919], 256],
                120611: [[920], 256],
                120612: [[921], 256],
                120613: [[922], 256],
                120614: [[923], 256],
                120615: [[924], 256],
                120616: [[925], 256],
                120617: [[926], 256],
                120618: [[927], 256],
                120619: [[928], 256],
                120620: [[929], 256],
                120621: [[1012], 256],
                120622: [[931], 256],
                120623: [[932], 256],
                120624: [[933], 256],
                120625: [[934], 256],
                120626: [[935], 256],
                120627: [[936], 256],
                120628: [[937], 256],
                120629: [[8711], 256],
                120630: [[945], 256],
                120631: [[946], 256],
                120632: [[947], 256],
                120633: [[948], 256],
                120634: [[949], 256],
                120635: [[950], 256],
                120636: [[951], 256],
                120637: [[952], 256],
                120638: [[953], 256],
                120639: [[954], 256],
                120640: [[955], 256],
                120641: [[956], 256],
                120642: [[957], 256],
                120643: [[958], 256],
                120644: [[959], 256],
                120645: [[960], 256],
                120646: [[961], 256],
                120647: [[962], 256],
                120648: [[963], 256],
                120649: [[964], 256],
                120650: [[965], 256],
                120651: [[966], 256],
                120652: [[967], 256],
                120653: [[968], 256],
                120654: [[969], 256],
                120655: [[8706], 256],
                120656: [[1013], 256],
                120657: [[977], 256],
                120658: [[1008], 256],
                120659: [[981], 256],
                120660: [[1009], 256],
                120661: [[982], 256],
                120662: [[913], 256],
                120663: [[914], 256],
                120664: [[915], 256],
                120665: [[916], 256],
                120666: [[917], 256],
                120667: [[918], 256],
                120668: [[919], 256],
                120669: [[920], 256],
                120670: [[921], 256],
                120671: [[922], 256],
                120672: [[923], 256],
                120673: [[924], 256],
                120674: [[925], 256],
                120675: [[926], 256],
                120676: [[927], 256],
                120677: [[928], 256],
                120678: [[929], 256],
                120679: [[1012], 256],
                120680: [[931], 256],
                120681: [[932], 256],
                120682: [[933], 256],
                120683: [[934], 256],
                120684: [[935], 256],
                120685: [[936], 256],
                120686: [[937], 256],
                120687: [[8711], 256],
                120688: [[945], 256],
                120689: [[946], 256],
                120690: [[947], 256],
                120691: [[948], 256],
                120692: [[949], 256],
                120693: [[950], 256],
                120694: [[951], 256],
                120695: [[952], 256],
                120696: [[953], 256],
                120697: [[954], 256],
                120698: [[955], 256],
                120699: [[956], 256],
                120700: [[957], 256],
                120701: [[958], 256],
                120702: [[959], 256],
                120703: [[960], 256],
                120704: [[961], 256],
                120705: [[962], 256],
                120706: [[963], 256],
                120707: [[964], 256],
                120708: [[965], 256],
                120709: [[966], 256],
                120710: [[967], 256],
                120711: [[968], 256],
                120712: [[969], 256],
                120713: [[8706], 256],
                120714: [[1013], 256],
                120715: [[977], 256],
                120716: [[1008], 256],
                120717: [[981], 256],
                120718: [[1009], 256],
                120719: [[982], 256],
                120720: [[913], 256],
                120721: [[914], 256],
                120722: [[915], 256],
                120723: [[916], 256],
                120724: [[917], 256],
                120725: [[918], 256],
                120726: [[919], 256],
                120727: [[920], 256],
                120728: [[921], 256],
                120729: [[922], 256],
                120730: [[923], 256],
                120731: [[924], 256],
                120732: [[925], 256],
                120733: [[926], 256],
                120734: [[927], 256],
                120735: [[928], 256],
                120736: [[929], 256],
                120737: [[1012], 256],
                120738: [[931], 256],
                120739: [[932], 256],
                120740: [[933], 256],
                120741: [[934], 256],
                120742: [[935], 256],
                120743: [[936], 256],
                120744: [[937], 256],
                120745: [[8711], 256],
                120746: [[945], 256],
                120747: [[946], 256],
                120748: [[947], 256],
                120749: [[948], 256],
                120750: [[949], 256],
                120751: [[950], 256],
                120752: [[951], 256],
                120753: [[952], 256],
                120754: [[953], 256],
                120755: [[954], 256],
                120756: [[955], 256],
                120757: [[956], 256],
                120758: [[957], 256],
                120759: [[958], 256],
                120760: [[959], 256],
                120761: [[960], 256],
                120762: [[961], 256],
                120763: [[962], 256],
                120764: [[963], 256],
                120765: [[964], 256],
                120766: [[965], 256],
                120767: [[966], 256],
                120768: [[967], 256],
                120769: [[968], 256],
                120770: [[969], 256],
                120771: [[8706], 256],
                120772: [[1013], 256],
                120773: [[977], 256],
                120774: [[1008], 256],
                120775: [[981], 256],
                120776: [[1009], 256],
                120777: [[982], 256],
                120778: [[988], 256],
                120779: [[989], 256],
                120782: [[48], 256],
                120783: [[49], 256],
                120784: [[50], 256],
                120785: [[51], 256],
                120786: [[52], 256],
                120787: [[53], 256],
                120788: [[54], 256],
                120789: [[55], 256],
                120790: [[56], 256],
                120791: [[57], 256],
                120792: [[48], 256],
                120793: [[49], 256],
                120794: [[50], 256],
                120795: [[51], 256],
                120796: [[52], 256],
                120797: [[53], 256],
                120798: [[54], 256],
                120799: [[55], 256],
                120800: [[56], 256],
                120801: [[57], 256],
                120802: [[48], 256],
                120803: [[49], 256],
                120804: [[50], 256],
                120805: [[51], 256],
                120806: [[52], 256],
                120807: [[53], 256],
                120808: [[54], 256],
                120809: [[55], 256],
                120810: [[56], 256],
                120811: [[57], 256],
                120812: [[48], 256],
                120813: [[49], 256],
                120814: [[50], 256],
                120815: [[51], 256],
                120816: [[52], 256],
                120817: [[53], 256],
                120818: [[54], 256],
                120819: [[55], 256],
                120820: [[56], 256],
                120821: [[57], 256],
                120822: [[48], 256],
                120823: [[49], 256],
                120824: [[50], 256],
                120825: [[51], 256],
                120826: [[52], 256],
                120827: [[53], 256],
                120828: [[54], 256],
                120829: [[55], 256],
                120830: [[56], 256],
                120831: [[57], 256]
            },
            59392: {
                125136: [, 220],
                125137: [, 220],
                125138: [, 220],
                125139: [, 220],
                125140: [, 220],
                125141: [, 220],
                125142: [, 220]
            },
            60928: {
                126464: [[1575], 256],
                126465: [[1576], 256],
                126466: [[1580], 256],
                126467: [[1583], 256],
                126469: [[1608], 256],
                126470: [[1586], 256],
                126471: [[1581], 256],
                126472: [[1591], 256],
                126473: [[1610], 256],
                126474: [[1603], 256],
                126475: [[1604], 256],
                126476: [[1605], 256],
                126477: [[1606], 256],
                126478: [[1587], 256],
                126479: [[1593], 256],
                126480: [[1601], 256],
                126481: [[1589], 256],
                126482: [[1602], 256],
                126483: [[1585], 256],
                126484: [[1588], 256],
                126485: [[1578], 256],
                126486: [[1579], 256],
                126487: [[1582], 256],
                126488: [[1584], 256],
                126489: [[1590], 256],
                126490: [[1592], 256],
                126491: [[1594], 256],
                126492: [[1646], 256],
                126493: [[1722], 256],
                126494: [[1697], 256],
                126495: [[1647], 256],
                126497: [[1576], 256],
                126498: [[1580], 256],
                126500: [[1607], 256],
                126503: [[1581], 256],
                126505: [[1610], 256],
                126506: [[1603], 256],
                126507: [[1604], 256],
                126508: [[1605], 256],
                126509: [[1606], 256],
                126510: [[1587], 256],
                126511: [[1593], 256],
                126512: [[1601], 256],
                126513: [[1589], 256],
                126514: [[1602], 256],
                126516: [[1588], 256],
                126517: [[1578], 256],
                126518: [[1579], 256],
                126519: [[1582], 256],
                126521: [[1590], 256],
                126523: [[1594], 256],
                126530: [[1580], 256],
                126535: [[1581], 256],
                126537: [[1610], 256],
                126539: [[1604], 256],
                126541: [[1606], 256],
                126542: [[1587], 256],
                126543: [[1593], 256],
                126545: [[1589], 256],
                126546: [[1602], 256],
                126548: [[1588], 256],
                126551: [[1582], 256],
                126553: [[1590], 256],
                126555: [[1594], 256],
                126557: [[1722], 256],
                126559: [[1647], 256],
                126561: [[1576], 256],
                126562: [[1580], 256],
                126564: [[1607], 256],
                126567: [[1581], 256],
                126568: [[1591], 256],
                126569: [[1610], 256],
                126570: [[1603], 256],
                126572: [[1605], 256],
                126573: [[1606], 256],
                126574: [[1587], 256],
                126575: [[1593], 256],
                126576: [[1601], 256],
                126577: [[1589], 256],
                126578: [[1602], 256],
                126580: [[1588], 256],
                126581: [[1578], 256],
                126582: [[1579], 256],
                126583: [[1582], 256],
                126585: [[1590], 256],
                126586: [[1592], 256],
                126587: [[1594], 256],
                126588: [[1646], 256],
                126590: [[1697], 256],
                126592: [[1575], 256],
                126593: [[1576], 256],
                126594: [[1580], 256],
                126595: [[1583], 256],
                126596: [[1607], 256],
                126597: [[1608], 256],
                126598: [[1586], 256],
                126599: [[1581], 256],
                126600: [[1591], 256],
                126601: [[1610], 256],
                126603: [[1604], 256],
                126604: [[1605], 256],
                126605: [[1606], 256],
                126606: [[1587], 256],
                126607: [[1593], 256],
                126608: [[1601], 256],
                126609: [[1589], 256],
                126610: [[1602], 256],
                126611: [[1585], 256],
                126612: [[1588], 256],
                126613: [[1578], 256],
                126614: [[1579], 256],
                126615: [[1582], 256],
                126616: [[1584], 256],
                126617: [[1590], 256],
                126618: [[1592], 256],
                126619: [[1594], 256],
                126625: [[1576], 256],
                126626: [[1580], 256],
                126627: [[1583], 256],
                126629: [[1608], 256],
                126630: [[1586], 256],
                126631: [[1581], 256],
                126632: [[1591], 256],
                126633: [[1610], 256],
                126635: [[1604], 256],
                126636: [[1605], 256],
                126637: [[1606], 256],
                126638: [[1587], 256],
                126639: [[1593], 256],
                126640: [[1601], 256],
                126641: [[1589], 256],
                126642: [[1602], 256],
                126643: [[1585], 256],
                126644: [[1588], 256],
                126645: [[1578], 256],
                126646: [[1579], 256],
                126647: [[1582], 256],
                126648: [[1584], 256],
                126649: [[1590], 256],
                126650: [[1592], 256],
                126651: [[1594], 256]
            },
            61696: {
                127232: [[48, 46], 256],
                127233: [[48, 44], 256],
                127234: [[49, 44], 256],
                127235: [[50, 44], 256],
                127236: [[51, 44], 256],
                127237: [[52, 44], 256],
                127238: [[53, 44], 256],
                127239: [[54, 44], 256],
                127240: [[55, 44], 256],
                127241: [[56, 44], 256],
                127242: [[57, 44], 256],
                127248: [[40, 65, 41], 256],
                127249: [[40, 66, 41], 256],
                127250: [[40, 67, 41], 256],
                127251: [[40, 68, 41], 256],
                127252: [[40, 69, 41], 256],
                127253: [[40, 70, 41], 256],
                127254: [[40, 71, 41], 256],
                127255: [[40, 72, 41], 256],
                127256: [[40, 73, 41], 256],
                127257: [[40, 74, 41], 256],
                127258: [[40, 75, 41], 256],
                127259: [[40, 76, 41], 256],
                127260: [[40, 77, 41], 256],
                127261: [[40, 78, 41], 256],
                127262: [[40, 79, 41], 256],
                127263: [[40, 80, 41], 256],
                127264: [[40, 81, 41], 256],
                127265: [[40, 82, 41], 256],
                127266: [[40, 83, 41], 256],
                127267: [[40, 84, 41], 256],
                127268: [[40, 85, 41], 256],
                127269: [[40, 86, 41], 256],
                127270: [[40, 87, 41], 256],
                127271: [[40, 88, 41], 256],
                127272: [[40, 89, 41], 256],
                127273: [[40, 90, 41], 256],
                127274: [[12308, 83, 12309], 256],
                127275: [[67], 256],
                127276: [[82], 256],
                127277: [[67, 68], 256],
                127278: [[87, 90], 256],
                127280: [[65], 256],
                127281: [[66], 256],
                127282: [[67], 256],
                127283: [[68], 256],
                127284: [[69], 256],
                127285: [[70], 256],
                127286: [[71], 256],
                127287: [[72], 256],
                127288: [[73], 256],
                127289: [[74], 256],
                127290: [[75], 256],
                127291: [[76], 256],
                127292: [[77], 256],
                127293: [[78], 256],
                127294: [[79], 256],
                127295: [[80], 256],
                127296: [[81], 256],
                127297: [[82], 256],
                127298: [[83], 256],
                127299: [[84], 256],
                127300: [[85], 256],
                127301: [[86], 256],
                127302: [[87], 256],
                127303: [[88], 256],
                127304: [[89], 256],
                127305: [[90], 256],
                127306: [[72, 86], 256],
                127307: [[77, 86], 256],
                127308: [[83, 68], 256],
                127309: [[83, 83], 256],
                127310: [[80, 80, 86], 256],
                127311: [[87, 67], 256],
                127338: [[77, 67], 256],
                127339: [[77, 68], 256],
                127376: [[68, 74], 256]
            },
            61952: {
                127488: [[12411, 12363], 256],
                127489: [[12467, 12467], 256],
                127490: [[12469], 256],
                127504: [[25163], 256],
                127505: [[23383], 256],
                127506: [[21452], 256],
                127507: [[12487], 256],
                127508: [[20108], 256],
                127509: [[22810], 256],
                127510: [[35299], 256],
                127511: [[22825], 256],
                127512: [[20132], 256],
                127513: [[26144], 256],
                127514: [[28961], 256],
                127515: [[26009], 256],
                127516: [[21069], 256],
                127517: [[24460], 256],
                127518: [[20877], 256],
                127519: [[26032], 256],
                127520: [[21021], 256],
                127521: [[32066], 256],
                127522: [[29983], 256],
                127523: [[36009], 256],
                127524: [[22768], 256],
                127525: [[21561], 256],
                127526: [[28436], 256],
                127527: [[25237], 256],
                127528: [[25429], 256],
                127529: [[19968], 256],
                127530: [[19977], 256],
                127531: [[36938], 256],
                127532: [[24038], 256],
                127533: [[20013], 256],
                127534: [[21491], 256],
                127535: [[25351], 256],
                127536: [[36208], 256],
                127537: [[25171], 256],
                127538: [[31105], 256],
                127539: [[31354], 256],
                127540: [[21512], 256],
                127541: [[28288], 256],
                127542: [[26377], 256],
                127543: [[26376], 256],
                127544: [[30003], 256],
                127545: [[21106], 256],
                127546: [[21942], 256],
                127552: [[12308, 26412, 12309], 256],
                127553: [[12308, 19977, 12309], 256],
                127554: [[12308, 20108, 12309], 256],
                127555: [[12308, 23433, 12309], 256],
                127556: [[12308, 28857, 12309], 256],
                127557: [[12308, 25171, 12309], 256],
                127558: [[12308, 30423, 12309], 256],
                127559: [[12308, 21213, 12309], 256],
                127560: [[12308, 25943, 12309], 256],
                127568: [[24471], 256],
                127569: [[21487], 256]
            },
            63488: {
                194560: [[20029]],
                194561: [[20024]],
                194562: [[20033]],
                194563: [[131362]],
                194564: [[20320]],
                194565: [[20398]],
                194566: [[20411]],
                194567: [[20482]],
                194568: [[20602]],
                194569: [[20633]],
                194570: [[20711]],
                194571: [[20687]],
                194572: [[13470]],
                194573: [[132666]],
                194574: [[20813]],
                194575: [[20820]],
                194576: [[20836]],
                194577: [[20855]],
                194578: [[132380]],
                194579: [[13497]],
                194580: [[20839]],
                194581: [[20877]],
                194582: [[132427]],
                194583: [[20887]],
                194584: [[20900]],
                194585: [[20172]],
                194586: [[20908]],
                194587: [[20917]],
                194588: [[168415]],
                194589: [[20981]],
                194590: [[20995]],
                194591: [[13535]],
                194592: [[21051]],
                194593: [[21062]],
                194594: [[21106]],
                194595: [[21111]],
                194596: [[13589]],
                194597: [[21191]],
                194598: [[21193]],
                194599: [[21220]],
                194600: [[21242]],
                194601: [[21253]],
                194602: [[21254]],
                194603: [[21271]],
                194604: [[21321]],
                194605: [[21329]],
                194606: [[21338]],
                194607: [[21363]],
                194608: [[21373]],
                194609: [[21375]],
                194610: [[21375]],
                194611: [[21375]],
                194612: [[133676]],
                194613: [[28784]],
                194614: [[21450]],
                194615: [[21471]],
                194616: [[133987]],
                194617: [[21483]],
                194618: [[21489]],
                194619: [[21510]],
                194620: [[21662]],
                194621: [[21560]],
                194622: [[21576]],
                194623: [[21608]],
                194624: [[21666]],
                194625: [[21750]],
                194626: [[21776]],
                194627: [[21843]],
                194628: [[21859]],
                194629: [[21892]],
                194630: [[21892]],
                194631: [[21913]],
                194632: [[21931]],
                194633: [[21939]],
                194634: [[21954]],
                194635: [[22294]],
                194636: [[22022]],
                194637: [[22295]],
                194638: [[22097]],
                194639: [[22132]],
                194640: [[20999]],
                194641: [[22766]],
                194642: [[22478]],
                194643: [[22516]],
                194644: [[22541]],
                194645: [[22411]],
                194646: [[22578]],
                194647: [[22577]],
                194648: [[22700]],
                194649: [[136420]],
                194650: [[22770]],
                194651: [[22775]],
                194652: [[22790]],
                194653: [[22810]],
                194654: [[22818]],
                194655: [[22882]],
                194656: [[136872]],
                194657: [[136938]],
                194658: [[23020]],
                194659: [[23067]],
                194660: [[23079]],
                194661: [[23e3]],
                194662: [[23142]],
                194663: [[14062]],
                194664: [[14076]],
                194665: [[23304]],
                194666: [[23358]],
                194667: [[23358]],
                194668: [[137672]],
                194669: [[23491]],
                194670: [[23512]],
                194671: [[23527]],
                194672: [[23539]],
                194673: [[138008]],
                194674: [[23551]],
                194675: [[23558]],
                194676: [[24403]],
                194677: [[23586]],
                194678: [[14209]],
                194679: [[23648]],
                194680: [[23662]],
                194681: [[23744]],
                194682: [[23693]],
                194683: [[138724]],
                194684: [[23875]],
                194685: [[138726]],
                194686: [[23918]],
                194687: [[23915]],
                194688: [[23932]],
                194689: [[24033]],
                194690: [[24034]],
                194691: [[14383]],
                194692: [[24061]],
                194693: [[24104]],
                194694: [[24125]],
                194695: [[24169]],
                194696: [[14434]],
                194697: [[139651]],
                194698: [[14460]],
                194699: [[24240]],
                194700: [[24243]],
                194701: [[24246]],
                194702: [[24266]],
                194703: [[172946]],
                194704: [[24318]],
                194705: [[140081]],
                194706: [[140081]],
                194707: [[33281]],
                194708: [[24354]],
                194709: [[24354]],
                194710: [[14535]],
                194711: [[144056]],
                194712: [[156122]],
                194713: [[24418]],
                194714: [[24427]],
                194715: [[14563]],
                194716: [[24474]],
                194717: [[24525]],
                194718: [[24535]],
                194719: [[24569]],
                194720: [[24705]],
                194721: [[14650]],
                194722: [[14620]],
                194723: [[24724]],
                194724: [[141012]],
                194725: [[24775]],
                194726: [[24904]],
                194727: [[24908]],
                194728: [[24910]],
                194729: [[24908]],
                194730: [[24954]],
                194731: [[24974]],
                194732: [[25010]],
                194733: [[24996]],
                194734: [[25007]],
                194735: [[25054]],
                194736: [[25074]],
                194737: [[25078]],
                194738: [[25104]],
                194739: [[25115]],
                194740: [[25181]],
                194741: [[25265]],
                194742: [[25300]],
                194743: [[25424]],
                194744: [[142092]],
                194745: [[25405]],
                194746: [[25340]],
                194747: [[25448]],
                194748: [[25475]],
                194749: [[25572]],
                194750: [[142321]],
                194751: [[25634]],
                194752: [[25541]],
                194753: [[25513]],
                194754: [[14894]],
                194755: [[25705]],
                194756: [[25726]],
                194757: [[25757]],
                194758: [[25719]],
                194759: [[14956]],
                194760: [[25935]],
                194761: [[25964]],
                194762: [[143370]],
                194763: [[26083]],
                194764: [[26360]],
                194765: [[26185]],
                194766: [[15129]],
                194767: [[26257]],
                194768: [[15112]],
                194769: [[15076]],
                194770: [[20882]],
                194771: [[20885]],
                194772: [[26368]],
                194773: [[26268]],
                194774: [[32941]],
                194775: [[17369]],
                194776: [[26391]],
                194777: [[26395]],
                194778: [[26401]],
                194779: [[26462]],
                194780: [[26451]],
                194781: [[144323]],
                194782: [[15177]],
                194783: [[26618]],
                194784: [[26501]],
                194785: [[26706]],
                194786: [[26757]],
                194787: [[144493]],
                194788: [[26766]],
                194789: [[26655]],
                194790: [[26900]],
                194791: [[15261]],
                194792: [[26946]],
                194793: [[27043]],
                194794: [[27114]],
                194795: [[27304]],
                194796: [[145059]],
                194797: [[27355]],
                194798: [[15384]],
                194799: [[27425]],
                194800: [[145575]],
                194801: [[27476]],
                194802: [[15438]],
                194803: [[27506]],
                194804: [[27551]],
                194805: [[27578]],
                194806: [[27579]],
                194807: [[146061]],
                194808: [[138507]],
                194809: [[146170]],
                194810: [[27726]],
                194811: [[146620]],
                194812: [[27839]],
                194813: [[27853]],
                194814: [[27751]],
                194815: [[27926]]
            },
            63744: {
                63744: [[35912]],
                63745: [[26356]],
                63746: [[36554]],
                63747: [[36040]],
                63748: [[28369]],
                63749: [[20018]],
                63750: [[21477]],
                63751: [[40860]],
                63752: [[40860]],
                63753: [[22865]],
                63754: [[37329]],
                63755: [[21895]],
                63756: [[22856]],
                63757: [[25078]],
                63758: [[30313]],
                63759: [[32645]],
                63760: [[34367]],
                63761: [[34746]],
                63762: [[35064]],
                63763: [[37007]],
                63764: [[27138]],
                63765: [[27931]],
                63766: [[28889]],
                63767: [[29662]],
                63768: [[33853]],
                63769: [[37226]],
                63770: [[39409]],
                63771: [[20098]],
                63772: [[21365]],
                63773: [[27396]],
                63774: [[29211]],
                63775: [[34349]],
                63776: [[40478]],
                63777: [[23888]],
                63778: [[28651]],
                63779: [[34253]],
                63780: [[35172]],
                63781: [[25289]],
                63782: [[33240]],
                63783: [[34847]],
                63784: [[24266]],
                63785: [[26391]],
                63786: [[28010]],
                63787: [[29436]],
                63788: [[37070]],
                63789: [[20358]],
                63790: [[20919]],
                63791: [[21214]],
                63792: [[25796]],
                63793: [[27347]],
                63794: [[29200]],
                63795: [[30439]],
                63796: [[32769]],
                63797: [[34310]],
                63798: [[34396]],
                63799: [[36335]],
                63800: [[38706]],
                63801: [[39791]],
                63802: [[40442]],
                63803: [[30860]],
                63804: [[31103]],
                63805: [[32160]],
                63806: [[33737]],
                63807: [[37636]],
                63808: [[40575]],
                63809: [[35542]],
                63810: [[22751]],
                63811: [[24324]],
                63812: [[31840]],
                63813: [[32894]],
                63814: [[29282]],
                63815: [[30922]],
                63816: [[36034]],
                63817: [[38647]],
                63818: [[22744]],
                63819: [[23650]],
                63820: [[27155]],
                63821: [[28122]],
                63822: [[28431]],
                63823: [[32047]],
                63824: [[32311]],
                63825: [[38475]],
                63826: [[21202]],
                63827: [[32907]],
                63828: [[20956]],
                63829: [[20940]],
                63830: [[31260]],
                63831: [[32190]],
                63832: [[33777]],
                63833: [[38517]],
                63834: [[35712]],
                63835: [[25295]],
                63836: [[27138]],
                63837: [[35582]],
                63838: [[20025]],
                63839: [[23527]],
                63840: [[24594]],
                63841: [[29575]],
                63842: [[30064]],
                63843: [[21271]],
                63844: [[30971]],
                63845: [[20415]],
                63846: [[24489]],
                63847: [[19981]],
                63848: [[27852]],
                63849: [[25976]],
                63850: [[32034]],
                63851: [[21443]],
                63852: [[22622]],
                63853: [[30465]],
                63854: [[33865]],
                63855: [[35498]],
                63856: [[27578]],
                63857: [[36784]],
                63858: [[27784]],
                63859: [[25342]],
                63860: [[33509]],
                63861: [[25504]],
                63862: [[30053]],
                63863: [[20142]],
                63864: [[20841]],
                63865: [[20937]],
                63866: [[26753]],
                63867: [[31975]],
                63868: [[33391]],
                63869: [[35538]],
                63870: [[37327]],
                63871: [[21237]],
                63872: [[21570]],
                63873: [[22899]],
                63874: [[24300]],
                63875: [[26053]],
                63876: [[28670]],
                63877: [[31018]],
                63878: [[38317]],
                63879: [[39530]],
                63880: [[40599]],
                63881: [[40654]],
                63882: [[21147]],
                63883: [[26310]],
                63884: [[27511]],
                63885: [[36706]],
                63886: [[24180]],
                63887: [[24976]],
                63888: [[25088]],
                63889: [[25754]],
                63890: [[28451]],
                63891: [[29001]],
                63892: [[29833]],
                63893: [[31178]],
                63894: [[32244]],
                63895: [[32879]],
                63896: [[36646]],
                63897: [[34030]],
                63898: [[36899]],
                63899: [[37706]],
                63900: [[21015]],
                63901: [[21155]],
                63902: [[21693]],
                63903: [[28872]],
                63904: [[35010]],
                63905: [[35498]],
                63906: [[24265]],
                63907: [[24565]],
                63908: [[25467]],
                63909: [[27566]],
                63910: [[31806]],
                63911: [[29557]],
                63912: [[20196]],
                63913: [[22265]],
                63914: [[23527]],
                63915: [[23994]],
                63916: [[24604]],
                63917: [[29618]],
                63918: [[29801]],
                63919: [[32666]],
                63920: [[32838]],
                63921: [[37428]],
                63922: [[38646]],
                63923: [[38728]],
                63924: [[38936]],
                63925: [[20363]],
                63926: [[31150]],
                63927: [[37300]],
                63928: [[38584]],
                63929: [[24801]],
                63930: [[20102]],
                63931: [[20698]],
                63932: [[23534]],
                63933: [[23615]],
                63934: [[26009]],
                63935: [[27138]],
                63936: [[29134]],
                63937: [[30274]],
                63938: [[34044]],
                63939: [[36988]],
                63940: [[40845]],
                63941: [[26248]],
                63942: [[38446]],
                63943: [[21129]],
                63944: [[26491]],
                63945: [[26611]],
                63946: [[27969]],
                63947: [[28316]],
                63948: [[29705]],
                63949: [[30041]],
                63950: [[30827]],
                63951: [[32016]],
                63952: [[39006]],
                63953: [[20845]],
                63954: [[25134]],
                63955: [[38520]],
                63956: [[20523]],
                63957: [[23833]],
                63958: [[28138]],
                63959: [[36650]],
                63960: [[24459]],
                63961: [[24900]],
                63962: [[26647]],
                63963: [[29575]],
                63964: [[38534]],
                63965: [[21033]],
                63966: [[21519]],
                63967: [[23653]],
                63968: [[26131]],
                63969: [[26446]],
                63970: [[26792]],
                63971: [[27877]],
                63972: [[29702]],
                63973: [[30178]],
                63974: [[32633]],
                63975: [[35023]],
                63976: [[35041]],
                63977: [[37324]],
                63978: [[38626]],
                63979: [[21311]],
                63980: [[28346]],
                63981: [[21533]],
                63982: [[29136]],
                63983: [[29848]],
                63984: [[34298]],
                63985: [[38563]],
                63986: [[40023]],
                63987: [[40607]],
                63988: [[26519]],
                63989: [[28107]],
                63990: [[33256]],
                63991: [[31435]],
                63992: [[31520]],
                63993: [[31890]],
                63994: [[29376]],
                63995: [[28825]],
                63996: [[35672]],
                63997: [[20160]],
                63998: [[33590]],
                63999: [[21050]],
                194816: [[27966]],
                194817: [[28023]],
                194818: [[27969]],
                194819: [[28009]],
                194820: [[28024]],
                194821: [[28037]],
                194822: [[146718]],
                194823: [[27956]],
                194824: [[28207]],
                194825: [[28270]],
                194826: [[15667]],
                194827: [[28363]],
                194828: [[28359]],
                194829: [[147153]],
                194830: [[28153]],
                194831: [[28526]],
                194832: [[147294]],
                194833: [[147342]],
                194834: [[28614]],
                194835: [[28729]],
                194836: [[28702]],
                194837: [[28699]],
                194838: [[15766]],
                194839: [[28746]],
                194840: [[28797]],
                194841: [[28791]],
                194842: [[28845]],
                194843: [[132389]],
                194844: [[28997]],
                194845: [[148067]],
                194846: [[29084]],
                194847: [[148395]],
                194848: [[29224]],
                194849: [[29237]],
                194850: [[29264]],
                194851: [[149e3]],
                194852: [[29312]],
                194853: [[29333]],
                194854: [[149301]],
                194855: [[149524]],
                194856: [[29562]],
                194857: [[29579]],
                194858: [[16044]],
                194859: [[29605]],
                194860: [[16056]],
                194861: [[16056]],
                194862: [[29767]],
                194863: [[29788]],
                194864: [[29809]],
                194865: [[29829]],
                194866: [[29898]],
                194867: [[16155]],
                194868: [[29988]],
                194869: [[150582]],
                194870: [[30014]],
                194871: [[150674]],
                194872: [[30064]],
                194873: [[139679]],
                194874: [[30224]],
                194875: [[151457]],
                194876: [[151480]],
                194877: [[151620]],
                194878: [[16380]],
                194879: [[16392]],
                194880: [[30452]],
                194881: [[151795]],
                194882: [[151794]],
                194883: [[151833]],
                194884: [[151859]],
                194885: [[30494]],
                194886: [[30495]],
                194887: [[30495]],
                194888: [[30538]],
                194889: [[16441]],
                194890: [[30603]],
                194891: [[16454]],
                194892: [[16534]],
                194893: [[152605]],
                194894: [[30798]],
                194895: [[30860]],
                194896: [[30924]],
                194897: [[16611]],
                194898: [[153126]],
                194899: [[31062]],
                194900: [[153242]],
                194901: [[153285]],
                194902: [[31119]],
                194903: [[31211]],
                194904: [[16687]],
                194905: [[31296]],
                194906: [[31306]],
                194907: [[31311]],
                194908: [[153980]],
                194909: [[154279]],
                194910: [[154279]],
                194911: [[31470]],
                194912: [[16898]],
                194913: [[154539]],
                194914: [[31686]],
                194915: [[31689]],
                194916: [[16935]],
                194917: [[154752]],
                194918: [[31954]],
                194919: [[17056]],
                194920: [[31976]],
                194921: [[31971]],
                194922: [[32e3]],
                194923: [[155526]],
                194924: [[32099]],
                194925: [[17153]],
                194926: [[32199]],
                194927: [[32258]],
                194928: [[32325]],
                194929: [[17204]],
                194930: [[156200]],
                194931: [[156231]],
                194932: [[17241]],
                194933: [[156377]],
                194934: [[32634]],
                194935: [[156478]],
                194936: [[32661]],
                194937: [[32762]],
                194938: [[32773]],
                194939: [[156890]],
                194940: [[156963]],
                194941: [[32864]],
                194942: [[157096]],
                194943: [[32880]],
                194944: [[144223]],
                194945: [[17365]],
                194946: [[32946]],
                194947: [[33027]],
                194948: [[17419]],
                194949: [[33086]],
                194950: [[23221]],
                194951: [[157607]],
                194952: [[157621]],
                194953: [[144275]],
                194954: [[144284]],
                194955: [[33281]],
                194956: [[33284]],
                194957: [[36766]],
                194958: [[17515]],
                194959: [[33425]],
                194960: [[33419]],
                194961: [[33437]],
                194962: [[21171]],
                194963: [[33457]],
                194964: [[33459]],
                194965: [[33469]],
                194966: [[33510]],
                194967: [[158524]],
                194968: [[33509]],
                194969: [[33565]],
                194970: [[33635]],
                194971: [[33709]],
                194972: [[33571]],
                194973: [[33725]],
                194974: [[33767]],
                194975: [[33879]],
                194976: [[33619]],
                194977: [[33738]],
                194978: [[33740]],
                194979: [[33756]],
                194980: [[158774]],
                194981: [[159083]],
                194982: [[158933]],
                194983: [[17707]],
                194984: [[34033]],
                194985: [[34035]],
                194986: [[34070]],
                194987: [[160714]],
                194988: [[34148]],
                194989: [[159532]],
                194990: [[17757]],
                194991: [[17761]],
                194992: [[159665]],
                194993: [[159954]],
                194994: [[17771]],
                194995: [[34384]],
                194996: [[34396]],
                194997: [[34407]],
                194998: [[34409]],
                194999: [[34473]],
                195e3: [[34440]],
                195001: [[34574]],
                195002: [[34530]],
                195003: [[34681]],
                195004: [[34600]],
                195005: [[34667]],
                195006: [[34694]],
                195007: [[17879]],
                195008: [[34785]],
                195009: [[34817]],
                195010: [[17913]],
                195011: [[34912]],
                195012: [[34915]],
                195013: [[161383]],
                195014: [[35031]],
                195015: [[35038]],
                195016: [[17973]],
                195017: [[35066]],
                195018: [[13499]],
                195019: [[161966]],
                195020: [[162150]],
                195021: [[18110]],
                195022: [[18119]],
                195023: [[35488]],
                195024: [[35565]],
                195025: [[35722]],
                195026: [[35925]],
                195027: [[162984]],
                195028: [[36011]],
                195029: [[36033]],
                195030: [[36123]],
                195031: [[36215]],
                195032: [[163631]],
                195033: [[133124]],
                195034: [[36299]],
                195035: [[36284]],
                195036: [[36336]],
                195037: [[133342]],
                195038: [[36564]],
                195039: [[36664]],
                195040: [[165330]],
                195041: [[165357]],
                195042: [[37012]],
                195043: [[37105]],
                195044: [[37137]],
                195045: [[165678]],
                195046: [[37147]],
                195047: [[37432]],
                195048: [[37591]],
                195049: [[37592]],
                195050: [[37500]],
                195051: [[37881]],
                195052: [[37909]],
                195053: [[166906]],
                195054: [[38283]],
                195055: [[18837]],
                195056: [[38327]],
                195057: [[167287]],
                195058: [[18918]],
                195059: [[38595]],
                195060: [[23986]],
                195061: [[38691]],
                195062: [[168261]],
                195063: [[168474]],
                195064: [[19054]],
                195065: [[19062]],
                195066: [[38880]],
                195067: [[168970]],
                195068: [[19122]],
                195069: [[169110]],
                195070: [[38923]],
                195071: [[38923]]
            },
            64e3: {
                64e3: [[20999]],
                64001: [[24230]],
                64002: [[25299]],
                64003: [[31958]],
                64004: [[23429]],
                64005: [[27934]],
                64006: [[26292]],
                64007: [[36667]],
                64008: [[34892]],
                64009: [[38477]],
                64010: [[35211]],
                64011: [[24275]],
                64012: [[20800]],
                64013: [[21952]],
                64016: [[22618]],
                64018: [[26228]],
                64021: [[20958]],
                64022: [[29482]],
                64023: [[30410]],
                64024: [[31036]],
                64025: [[31070]],
                64026: [[31077]],
                64027: [[31119]],
                64028: [[38742]],
                64029: [[31934]],
                64030: [[32701]],
                64032: [[34322]],
                64034: [[35576]],
                64037: [[36920]],
                64038: [[37117]],
                64042: [[39151]],
                64043: [[39164]],
                64044: [[39208]],
                64045: [[40372]],
                64046: [[37086]],
                64047: [[38583]],
                64048: [[20398]],
                64049: [[20711]],
                64050: [[20813]],
                64051: [[21193]],
                64052: [[21220]],
                64053: [[21329]],
                64054: [[21917]],
                64055: [[22022]],
                64056: [[22120]],
                64057: [[22592]],
                64058: [[22696]],
                64059: [[23652]],
                64060: [[23662]],
                64061: [[24724]],
                64062: [[24936]],
                64063: [[24974]],
                64064: [[25074]],
                64065: [[25935]],
                64066: [[26082]],
                64067: [[26257]],
                64068: [[26757]],
                64069: [[28023]],
                64070: [[28186]],
                64071: [[28450]],
                64072: [[29038]],
                64073: [[29227]],
                64074: [[29730]],
                64075: [[30865]],
                64076: [[31038]],
                64077: [[31049]],
                64078: [[31048]],
                64079: [[31056]],
                64080: [[31062]],
                64081: [[31069]],
                64082: [[31117]],
                64083: [[31118]],
                64084: [[31296]],
                64085: [[31361]],
                64086: [[31680]],
                64087: [[32244]],
                64088: [[32265]],
                64089: [[32321]],
                64090: [[32626]],
                64091: [[32773]],
                64092: [[33261]],
                64093: [[33401]],
                64094: [[33401]],
                64095: [[33879]],
                64096: [[35088]],
                64097: [[35222]],
                64098: [[35585]],
                64099: [[35641]],
                64100: [[36051]],
                64101: [[36104]],
                64102: [[36790]],
                64103: [[36920]],
                64104: [[38627]],
                64105: [[38911]],
                64106: [[38971]],
                64107: [[24693]],
                64108: [[148206]],
                64109: [[33304]],
                64112: [[20006]],
                64113: [[20917]],
                64114: [[20840]],
                64115: [[20352]],
                64116: [[20805]],
                64117: [[20864]],
                64118: [[21191]],
                64119: [[21242]],
                64120: [[21917]],
                64121: [[21845]],
                64122: [[21913]],
                64123: [[21986]],
                64124: [[22618]],
                64125: [[22707]],
                64126: [[22852]],
                64127: [[22868]],
                64128: [[23138]],
                64129: [[23336]],
                64130: [[24274]],
                64131: [[24281]],
                64132: [[24425]],
                64133: [[24493]],
                64134: [[24792]],
                64135: [[24910]],
                64136: [[24840]],
                64137: [[24974]],
                64138: [[24928]],
                64139: [[25074]],
                64140: [[25140]],
                64141: [[25540]],
                64142: [[25628]],
                64143: [[25682]],
                64144: [[25942]],
                64145: [[26228]],
                64146: [[26391]],
                64147: [[26395]],
                64148: [[26454]],
                64149: [[27513]],
                64150: [[27578]],
                64151: [[27969]],
                64152: [[28379]],
                64153: [[28363]],
                64154: [[28450]],
                64155: [[28702]],
                64156: [[29038]],
                64157: [[30631]],
                64158: [[29237]],
                64159: [[29359]],
                64160: [[29482]],
                64161: [[29809]],
                64162: [[29958]],
                64163: [[30011]],
                64164: [[30237]],
                64165: [[30239]],
                64166: [[30410]],
                64167: [[30427]],
                64168: [[30452]],
                64169: [[30538]],
                64170: [[30528]],
                64171: [[30924]],
                64172: [[31409]],
                64173: [[31680]],
                64174: [[31867]],
                64175: [[32091]],
                64176: [[32244]],
                64177: [[32574]],
                64178: [[32773]],
                64179: [[33618]],
                64180: [[33775]],
                64181: [[34681]],
                64182: [[35137]],
                64183: [[35206]],
                64184: [[35222]],
                64185: [[35519]],
                64186: [[35576]],
                64187: [[35531]],
                64188: [[35585]],
                64189: [[35582]],
                64190: [[35565]],
                64191: [[35641]],
                64192: [[35722]],
                64193: [[36104]],
                64194: [[36664]],
                64195: [[36978]],
                64196: [[37273]],
                64197: [[37494]],
                64198: [[38524]],
                64199: [[38627]],
                64200: [[38742]],
                64201: [[38875]],
                64202: [[38911]],
                64203: [[38923]],
                64204: [[38971]],
                64205: [[39698]],
                64206: [[40860]],
                64207: [[141386]],
                64208: [[141380]],
                64209: [[144341]],
                64210: [[15261]],
                64211: [[16408]],
                64212: [[16441]],
                64213: [[152137]],
                64214: [[154832]],
                64215: [[163539]],
                64216: [[40771]],
                64217: [[40846]],
                195072: [[38953]],
                195073: [[169398]],
                195074: [[39138]],
                195075: [[19251]],
                195076: [[39209]],
                195077: [[39335]],
                195078: [[39362]],
                195079: [[39422]],
                195080: [[19406]],
                195081: [[170800]],
                195082: [[39698]],
                195083: [[4e4]],
                195084: [[40189]],
                195085: [[19662]],
                195086: [[19693]],
                195087: [[40295]],
                195088: [[172238]],
                195089: [[19704]],
                195090: [[172293]],
                195091: [[172558]],
                195092: [[172689]],
                195093: [[40635]],
                195094: [[19798]],
                195095: [[40697]],
                195096: [[40702]],
                195097: [[40709]],
                195098: [[40719]],
                195099: [[40726]],
                195100: [[40763]],
                195101: [[173568]]
            },
            64256: {
                64256: [[102, 102], 256],
                64257: [[102, 105], 256],
                64258: [[102, 108], 256],
                64259: [[102, 102, 105], 256],
                64260: [[102, 102, 108], 256],
                64261: [[383, 116], 256],
                64262: [[115, 116], 256],
                64275: [[1396, 1398], 256],
                64276: [[1396, 1381], 256],
                64277: [[1396, 1387], 256],
                64278: [[1406, 1398], 256],
                64279: [[1396, 1389], 256],
                64285: [[1497, 1460], 512],
                64286: [, 26],
                64287: [[1522, 1463], 512],
                64288: [[1506], 256],
                64289: [[1488], 256],
                64290: [[1491], 256],
                64291: [[1492], 256],
                64292: [[1499], 256],
                64293: [[1500], 256],
                64294: [[1501], 256],
                64295: [[1512], 256],
                64296: [[1514], 256],
                64297: [[43], 256],
                64298: [[1513, 1473], 512],
                64299: [[1513, 1474], 512],
                64300: [[64329, 1473], 512],
                64301: [[64329, 1474], 512],
                64302: [[1488, 1463], 512],
                64303: [[1488, 1464], 512],
                64304: [[1488, 1468], 512],
                64305: [[1489, 1468], 512],
                64306: [[1490, 1468], 512],
                64307: [[1491, 1468], 512],
                64308: [[1492, 1468], 512],
                64309: [[1493, 1468], 512],
                64310: [[1494, 1468], 512],
                64312: [[1496, 1468], 512],
                64313: [[1497, 1468], 512],
                64314: [[1498, 1468], 512],
                64315: [[1499, 1468], 512],
                64316: [[1500, 1468], 512],
                64318: [[1502, 1468], 512],
                64320: [[1504, 1468], 512],
                64321: [[1505, 1468], 512],
                64323: [[1507, 1468], 512],
                64324: [[1508, 1468], 512],
                64326: [[1510, 1468], 512],
                64327: [[1511, 1468], 512],
                64328: [[1512, 1468], 512],
                64329: [[1513, 1468], 512],
                64330: [[1514, 1468], 512],
                64331: [[1493, 1465], 512],
                64332: [[1489, 1471], 512],
                64333: [[1499, 1471], 512],
                64334: [[1508, 1471], 512],
                64335: [[1488, 1500], 256],
                64336: [[1649], 256],
                64337: [[1649], 256],
                64338: [[1659], 256],
                64339: [[1659], 256],
                64340: [[1659], 256],
                64341: [[1659], 256],
                64342: [[1662], 256],
                64343: [[1662], 256],
                64344: [[1662], 256],
                64345: [[1662], 256],
                64346: [[1664], 256],
                64347: [[1664], 256],
                64348: [[1664], 256],
                64349: [[1664], 256],
                64350: [[1658], 256],
                64351: [[1658], 256],
                64352: [[1658], 256],
                64353: [[1658], 256],
                64354: [[1663], 256],
                64355: [[1663], 256],
                64356: [[1663], 256],
                64357: [[1663], 256],
                64358: [[1657], 256],
                64359: [[1657], 256],
                64360: [[1657], 256],
                64361: [[1657], 256],
                64362: [[1700], 256],
                64363: [[1700], 256],
                64364: [[1700], 256],
                64365: [[1700], 256],
                64366: [[1702], 256],
                64367: [[1702], 256],
                64368: [[1702], 256],
                64369: [[1702], 256],
                64370: [[1668], 256],
                64371: [[1668], 256],
                64372: [[1668], 256],
                64373: [[1668], 256],
                64374: [[1667], 256],
                64375: [[1667], 256],
                64376: [[1667], 256],
                64377: [[1667], 256],
                64378: [[1670], 256],
                64379: [[1670], 256],
                64380: [[1670], 256],
                64381: [[1670], 256],
                64382: [[1671], 256],
                64383: [[1671], 256],
                64384: [[1671], 256],
                64385: [[1671], 256],
                64386: [[1677], 256],
                64387: [[1677], 256],
                64388: [[1676], 256],
                64389: [[1676], 256],
                64390: [[1678], 256],
                64391: [[1678], 256],
                64392: [[1672], 256],
                64393: [[1672], 256],
                64394: [[1688], 256],
                64395: [[1688], 256],
                64396: [[1681], 256],
                64397: [[1681], 256],
                64398: [[1705], 256],
                64399: [[1705], 256],
                64400: [[1705], 256],
                64401: [[1705], 256],
                64402: [[1711], 256],
                64403: [[1711], 256],
                64404: [[1711], 256],
                64405: [[1711], 256],
                64406: [[1715], 256],
                64407: [[1715], 256],
                64408: [[1715], 256],
                64409: [[1715], 256],
                64410: [[1713], 256],
                64411: [[1713], 256],
                64412: [[1713], 256],
                64413: [[1713], 256],
                64414: [[1722], 256],
                64415: [[1722], 256],
                64416: [[1723], 256],
                64417: [[1723], 256],
                64418: [[1723], 256],
                64419: [[1723], 256],
                64420: [[1728], 256],
                64421: [[1728], 256],
                64422: [[1729], 256],
                64423: [[1729], 256],
                64424: [[1729], 256],
                64425: [[1729], 256],
                64426: [[1726], 256],
                64427: [[1726], 256],
                64428: [[1726], 256],
                64429: [[1726], 256],
                64430: [[1746], 256],
                64431: [[1746], 256],
                64432: [[1747], 256],
                64433: [[1747], 256],
                64467: [[1709], 256],
                64468: [[1709], 256],
                64469: [[1709], 256],
                64470: [[1709], 256],
                64471: [[1735], 256],
                64472: [[1735], 256],
                64473: [[1734], 256],
                64474: [[1734], 256],
                64475: [[1736], 256],
                64476: [[1736], 256],
                64477: [[1655], 256],
                64478: [[1739], 256],
                64479: [[1739], 256],
                64480: [[1733], 256],
                64481: [[1733], 256],
                64482: [[1737], 256],
                64483: [[1737], 256],
                64484: [[1744], 256],
                64485: [[1744], 256],
                64486: [[1744], 256],
                64487: [[1744], 256],
                64488: [[1609], 256],
                64489: [[1609], 256],
                64490: [[1574, 1575], 256],
                64491: [[1574, 1575], 256],
                64492: [[1574, 1749], 256],
                64493: [[1574, 1749], 256],
                64494: [[1574, 1608], 256],
                64495: [[1574, 1608], 256],
                64496: [[1574, 1735], 256],
                64497: [[1574, 1735], 256],
                64498: [[1574, 1734], 256],
                64499: [[1574, 1734], 256],
                64500: [[1574, 1736], 256],
                64501: [[1574, 1736], 256],
                64502: [[1574, 1744], 256],
                64503: [[1574, 1744], 256],
                64504: [[1574, 1744], 256],
                64505: [[1574, 1609], 256],
                64506: [[1574, 1609], 256],
                64507: [[1574, 1609], 256],
                64508: [[1740], 256],
                64509: [[1740], 256],
                64510: [[1740], 256],
                64511: [[1740], 256]
            },
            64512: {
                64512: [[1574, 1580], 256],
                64513: [[1574, 1581], 256],
                64514: [[1574, 1605], 256],
                64515: [[1574, 1609], 256],
                64516: [[1574, 1610], 256],
                64517: [[1576, 1580], 256],
                64518: [[1576, 1581], 256],
                64519: [[1576, 1582], 256],
                64520: [[1576, 1605], 256],
                64521: [[1576, 1609], 256],
                64522: [[1576, 1610], 256],
                64523: [[1578, 1580], 256],
                64524: [[1578, 1581], 256],
                64525: [[1578, 1582], 256],
                64526: [[1578, 1605], 256],
                64527: [[1578, 1609], 256],
                64528: [[1578, 1610], 256],
                64529: [[1579, 1580], 256],
                64530: [[1579, 1605], 256],
                64531: [[1579, 1609], 256],
                64532: [[1579, 1610], 256],
                64533: [[1580, 1581], 256],
                64534: [[1580, 1605], 256],
                64535: [[1581, 1580], 256],
                64536: [[1581, 1605], 256],
                64537: [[1582, 1580], 256],
                64538: [[1582, 1581], 256],
                64539: [[1582, 1605], 256],
                64540: [[1587, 1580], 256],
                64541: [[1587, 1581], 256],
                64542: [[1587, 1582], 256],
                64543: [[1587, 1605], 256],
                64544: [[1589, 1581], 256],
                64545: [[1589, 1605], 256],
                64546: [[1590, 1580], 256],
                64547: [[1590, 1581], 256],
                64548: [[1590, 1582], 256],
                64549: [[1590, 1605], 256],
                64550: [[1591, 1581], 256],
                64551: [[1591, 1605], 256],
                64552: [[1592, 1605], 256],
                64553: [[1593, 1580], 256],
                64554: [[1593, 1605], 256],
                64555: [[1594, 1580], 256],
                64556: [[1594, 1605], 256],
                64557: [[1601, 1580], 256],
                64558: [[1601, 1581], 256],
                64559: [[1601, 1582], 256],
                64560: [[1601, 1605], 256],
                64561: [[1601, 1609], 256],
                64562: [[1601, 1610], 256],
                64563: [[1602, 1581], 256],
                64564: [[1602, 1605], 256],
                64565: [[1602, 1609], 256],
                64566: [[1602, 1610], 256],
                64567: [[1603, 1575], 256],
                64568: [[1603, 1580], 256],
                64569: [[1603, 1581], 256],
                64570: [[1603, 1582], 256],
                64571: [[1603, 1604], 256],
                64572: [[1603, 1605], 256],
                64573: [[1603, 1609], 256],
                64574: [[1603, 1610], 256],
                64575: [[1604, 1580], 256],
                64576: [[1604, 1581], 256],
                64577: [[1604, 1582], 256],
                64578: [[1604, 1605], 256],
                64579: [[1604, 1609], 256],
                64580: [[1604, 1610], 256],
                64581: [[1605, 1580], 256],
                64582: [[1605, 1581], 256],
                64583: [[1605, 1582], 256],
                64584: [[1605, 1605], 256],
                64585: [[1605, 1609], 256],
                64586: [[1605, 1610], 256],
                64587: [[1606, 1580], 256],
                64588: [[1606, 1581], 256],
                64589: [[1606, 1582], 256],
                64590: [[1606, 1605], 256],
                64591: [[1606, 1609], 256],
                64592: [[1606, 1610], 256],
                64593: [[1607, 1580], 256],
                64594: [[1607, 1605], 256],
                64595: [[1607, 1609], 256],
                64596: [[1607, 1610], 256],
                64597: [[1610, 1580], 256],
                64598: [[1610, 1581], 256],
                64599: [[1610, 1582], 256],
                64600: [[1610, 1605], 256],
                64601: [[1610, 1609], 256],
                64602: [[1610, 1610], 256],
                64603: [[1584, 1648], 256],
                64604: [[1585, 1648], 256],
                64605: [[1609, 1648], 256],
                64606: [[32, 1612, 1617], 256],
                64607: [[32, 1613, 1617], 256],
                64608: [[32, 1614, 1617], 256],
                64609: [[32, 1615, 1617], 256],
                64610: [[32, 1616, 1617], 256],
                64611: [[32, 1617, 1648], 256],
                64612: [[1574, 1585], 256],
                64613: [[1574, 1586], 256],
                64614: [[1574, 1605], 256],
                64615: [[1574, 1606], 256],
                64616: [[1574, 1609], 256],
                64617: [[1574, 1610], 256],
                64618: [[1576, 1585], 256],
                64619: [[1576, 1586], 256],
                64620: [[1576, 1605], 256],
                64621: [[1576, 1606], 256],
                64622: [[1576, 1609], 256],
                64623: [[1576, 1610], 256],
                64624: [[1578, 1585], 256],
                64625: [[1578, 1586], 256],
                64626: [[1578, 1605], 256],
                64627: [[1578, 1606], 256],
                64628: [[1578, 1609], 256],
                64629: [[1578, 1610], 256],
                64630: [[1579, 1585], 256],
                64631: [[1579, 1586], 256],
                64632: [[1579, 1605], 256],
                64633: [[1579, 1606], 256],
                64634: [[1579, 1609], 256],
                64635: [[1579, 1610], 256],
                64636: [[1601, 1609], 256],
                64637: [[1601, 1610], 256],
                64638: [[1602, 1609], 256],
                64639: [[1602, 1610], 256],
                64640: [[1603, 1575], 256],
                64641: [[1603, 1604], 256],
                64642: [[1603, 1605], 256],
                64643: [[1603, 1609], 256],
                64644: [[1603, 1610], 256],
                64645: [[1604, 1605], 256],
                64646: [[1604, 1609], 256],
                64647: [[1604, 1610], 256],
                64648: [[1605, 1575], 256],
                64649: [[1605, 1605], 256],
                64650: [[1606, 1585], 256],
                64651: [[1606, 1586], 256],
                64652: [[1606, 1605], 256],
                64653: [[1606, 1606], 256],
                64654: [[1606, 1609], 256],
                64655: [[1606, 1610], 256],
                64656: [[1609, 1648], 256],
                64657: [[1610, 1585], 256],
                64658: [[1610, 1586], 256],
                64659: [[1610, 1605], 256],
                64660: [[1610, 1606], 256],
                64661: [[1610, 1609], 256],
                64662: [[1610, 1610], 256],
                64663: [[1574, 1580], 256],
                64664: [[1574, 1581], 256],
                64665: [[1574, 1582], 256],
                64666: [[1574, 1605], 256],
                64667: [[1574, 1607], 256],
                64668: [[1576, 1580], 256],
                64669: [[1576, 1581], 256],
                64670: [[1576, 1582], 256],
                64671: [[1576, 1605], 256],
                64672: [[1576, 1607], 256],
                64673: [[1578, 1580], 256],
                64674: [[1578, 1581], 256],
                64675: [[1578, 1582], 256],
                64676: [[1578, 1605], 256],
                64677: [[1578, 1607], 256],
                64678: [[1579, 1605], 256],
                64679: [[1580, 1581], 256],
                64680: [[1580, 1605], 256],
                64681: [[1581, 1580], 256],
                64682: [[1581, 1605], 256],
                64683: [[1582, 1580], 256],
                64684: [[1582, 1605], 256],
                64685: [[1587, 1580], 256],
                64686: [[1587, 1581], 256],
                64687: [[1587, 1582], 256],
                64688: [[1587, 1605], 256],
                64689: [[1589, 1581], 256],
                64690: [[1589, 1582], 256],
                64691: [[1589, 1605], 256],
                64692: [[1590, 1580], 256],
                64693: [[1590, 1581], 256],
                64694: [[1590, 1582], 256],
                64695: [[1590, 1605], 256],
                64696: [[1591, 1581], 256],
                64697: [[1592, 1605], 256],
                64698: [[1593, 1580], 256],
                64699: [[1593, 1605], 256],
                64700: [[1594, 1580], 256],
                64701: [[1594, 1605], 256],
                64702: [[1601, 1580], 256],
                64703: [[1601, 1581], 256],
                64704: [[1601, 1582], 256],
                64705: [[1601, 1605], 256],
                64706: [[1602, 1581], 256],
                64707: [[1602, 1605], 256],
                64708: [[1603, 1580], 256],
                64709: [[1603, 1581], 256],
                64710: [[1603, 1582], 256],
                64711: [[1603, 1604], 256],
                64712: [[1603, 1605], 256],
                64713: [[1604, 1580], 256],
                64714: [[1604, 1581], 256],
                64715: [[1604, 1582], 256],
                64716: [[1604, 1605], 256],
                64717: [[1604, 1607], 256],
                64718: [[1605, 1580], 256],
                64719: [[1605, 1581], 256],
                64720: [[1605, 1582], 256],
                64721: [[1605, 1605], 256],
                64722: [[1606, 1580], 256],
                64723: [[1606, 1581], 256],
                64724: [[1606, 1582], 256],
                64725: [[1606, 1605], 256],
                64726: [[1606, 1607], 256],
                64727: [[1607, 1580], 256],
                64728: [[1607, 1605], 256],
                64729: [[1607, 1648], 256],
                64730: [[1610, 1580], 256],
                64731: [[1610, 1581], 256],
                64732: [[1610, 1582], 256],
                64733: [[1610, 1605], 256],
                64734: [[1610, 1607], 256],
                64735: [[1574, 1605], 256],
                64736: [[1574, 1607], 256],
                64737: [[1576, 1605], 256],
                64738: [[1576, 1607], 256],
                64739: [[1578, 1605], 256],
                64740: [[1578, 1607], 256],
                64741: [[1579, 1605], 256],
                64742: [[1579, 1607], 256],
                64743: [[1587, 1605], 256],
                64744: [[1587, 1607], 256],
                64745: [[1588, 1605], 256],
                64746: [[1588, 1607], 256],
                64747: [[1603, 1604], 256],
                64748: [[1603, 1605], 256],
                64749: [[1604, 1605], 256],
                64750: [[1606, 1605], 256],
                64751: [[1606, 1607], 256],
                64752: [[1610, 1605], 256],
                64753: [[1610, 1607], 256],
                64754: [[1600, 1614, 1617], 256],
                64755: [[1600, 1615, 1617], 256],
                64756: [[1600, 1616, 1617], 256],
                64757: [[1591, 1609], 256],
                64758: [[1591, 1610], 256],
                64759: [[1593, 1609], 256],
                64760: [[1593, 1610], 256],
                64761: [[1594, 1609], 256],
                64762: [[1594, 1610], 256],
                64763: [[1587, 1609], 256],
                64764: [[1587, 1610], 256],
                64765: [[1588, 1609], 256],
                64766: [[1588, 1610], 256],
                64767: [[1581, 1609], 256]
            },
            64768: {
                64768: [[1581, 1610], 256],
                64769: [[1580, 1609], 256],
                64770: [[1580, 1610], 256],
                64771: [[1582, 1609], 256],
                64772: [[1582, 1610], 256],
                64773: [[1589, 1609], 256],
                64774: [[1589, 1610], 256],
                64775: [[1590, 1609], 256],
                64776: [[1590, 1610], 256],
                64777: [[1588, 1580], 256],
                64778: [[1588, 1581], 256],
                64779: [[1588, 1582], 256],
                64780: [[1588, 1605], 256],
                64781: [[1588, 1585], 256],
                64782: [[1587, 1585], 256],
                64783: [[1589, 1585], 256],
                64784: [[1590, 1585], 256],
                64785: [[1591, 1609], 256],
                64786: [[1591, 1610], 256],
                64787: [[1593, 1609], 256],
                64788: [[1593, 1610], 256],
                64789: [[1594, 1609], 256],
                64790: [[1594, 1610], 256],
                64791: [[1587, 1609], 256],
                64792: [[1587, 1610], 256],
                64793: [[1588, 1609], 256],
                64794: [[1588, 1610], 256],
                64795: [[1581, 1609], 256],
                64796: [[1581, 1610], 256],
                64797: [[1580, 1609], 256],
                64798: [[1580, 1610], 256],
                64799: [[1582, 1609], 256],
                64800: [[1582, 1610], 256],
                64801: [[1589, 1609], 256],
                64802: [[1589, 1610], 256],
                64803: [[1590, 1609], 256],
                64804: [[1590, 1610], 256],
                64805: [[1588, 1580], 256],
                64806: [[1588, 1581], 256],
                64807: [[1588, 1582], 256],
                64808: [[1588, 1605], 256],
                64809: [[1588, 1585], 256],
                64810: [[1587, 1585], 256],
                64811: [[1589, 1585], 256],
                64812: [[1590, 1585], 256],
                64813: [[1588, 1580], 256],
                64814: [[1588, 1581], 256],
                64815: [[1588, 1582], 256],
                64816: [[1588, 1605], 256],
                64817: [[1587, 1607], 256],
                64818: [[1588, 1607], 256],
                64819: [[1591, 1605], 256],
                64820: [[1587, 1580], 256],
                64821: [[1587, 1581], 256],
                64822: [[1587, 1582], 256],
                64823: [[1588, 1580], 256],
                64824: [[1588, 1581], 256],
                64825: [[1588, 1582], 256],
                64826: [[1591, 1605], 256],
                64827: [[1592, 1605], 256],
                64828: [[1575, 1611], 256],
                64829: [[1575, 1611], 256],
                64848: [[1578, 1580, 1605], 256],
                64849: [[1578, 1581, 1580], 256],
                64850: [[1578, 1581, 1580], 256],
                64851: [[1578, 1581, 1605], 256],
                64852: [[1578, 1582, 1605], 256],
                64853: [[1578, 1605, 1580], 256],
                64854: [[1578, 1605, 1581], 256],
                64855: [[1578, 1605, 1582], 256],
                64856: [[1580, 1605, 1581], 256],
                64857: [[1580, 1605, 1581], 256],
                64858: [[1581, 1605, 1610], 256],
                64859: [[1581, 1605, 1609], 256],
                64860: [[1587, 1581, 1580], 256],
                64861: [[1587, 1580, 1581], 256],
                64862: [[1587, 1580, 1609], 256],
                64863: [[1587, 1605, 1581], 256],
                64864: [[1587, 1605, 1581], 256],
                64865: [[1587, 1605, 1580], 256],
                64866: [[1587, 1605, 1605], 256],
                64867: [[1587, 1605, 1605], 256],
                64868: [[1589, 1581, 1581], 256],
                64869: [[1589, 1581, 1581], 256],
                64870: [[1589, 1605, 1605], 256],
                64871: [[1588, 1581, 1605], 256],
                64872: [[1588, 1581, 1605], 256],
                64873: [[1588, 1580, 1610], 256],
                64874: [[1588, 1605, 1582], 256],
                64875: [[1588, 1605, 1582], 256],
                64876: [[1588, 1605, 1605], 256],
                64877: [[1588, 1605, 1605], 256],
                64878: [[1590, 1581, 1609], 256],
                64879: [[1590, 1582, 1605], 256],
                64880: [[1590, 1582, 1605], 256],
                64881: [[1591, 1605, 1581], 256],
                64882: [[1591, 1605, 1581], 256],
                64883: [[1591, 1605, 1605], 256],
                64884: [[1591, 1605, 1610], 256],
                64885: [[1593, 1580, 1605], 256],
                64886: [[1593, 1605, 1605], 256],
                64887: [[1593, 1605, 1605], 256],
                64888: [[1593, 1605, 1609], 256],
                64889: [[1594, 1605, 1605], 256],
                64890: [[1594, 1605, 1610], 256],
                64891: [[1594, 1605, 1609], 256],
                64892: [[1601, 1582, 1605], 256],
                64893: [[1601, 1582, 1605], 256],
                64894: [[1602, 1605, 1581], 256],
                64895: [[1602, 1605, 1605], 256],
                64896: [[1604, 1581, 1605], 256],
                64897: [[1604, 1581, 1610], 256],
                64898: [[1604, 1581, 1609], 256],
                64899: [[1604, 1580, 1580], 256],
                64900: [[1604, 1580, 1580], 256],
                64901: [[1604, 1582, 1605], 256],
                64902: [[1604, 1582, 1605], 256],
                64903: [[1604, 1605, 1581], 256],
                64904: [[1604, 1605, 1581], 256],
                64905: [[1605, 1581, 1580], 256],
                64906: [[1605, 1581, 1605], 256],
                64907: [[1605, 1581, 1610], 256],
                64908: [[1605, 1580, 1581], 256],
                64909: [[1605, 1580, 1605], 256],
                64910: [[1605, 1582, 1580], 256],
                64911: [[1605, 1582, 1605], 256],
                64914: [[1605, 1580, 1582], 256],
                64915: [[1607, 1605, 1580], 256],
                64916: [[1607, 1605, 1605], 256],
                64917: [[1606, 1581, 1605], 256],
                64918: [[1606, 1581, 1609], 256],
                64919: [[1606, 1580, 1605], 256],
                64920: [[1606, 1580, 1605], 256],
                64921: [[1606, 1580, 1609], 256],
                64922: [[1606, 1605, 1610], 256],
                64923: [[1606, 1605, 1609], 256],
                64924: [[1610, 1605, 1605], 256],
                64925: [[1610, 1605, 1605], 256],
                64926: [[1576, 1582, 1610], 256],
                64927: [[1578, 1580, 1610], 256],
                64928: [[1578, 1580, 1609], 256],
                64929: [[1578, 1582, 1610], 256],
                64930: [[1578, 1582, 1609], 256],
                64931: [[1578, 1605, 1610], 256],
                64932: [[1578, 1605, 1609], 256],
                64933: [[1580, 1605, 1610], 256],
                64934: [[1580, 1581, 1609], 256],
                64935: [[1580, 1605, 1609], 256],
                64936: [[1587, 1582, 1609], 256],
                64937: [[1589, 1581, 1610], 256],
                64938: [[1588, 1581, 1610], 256],
                64939: [[1590, 1581, 1610], 256],
                64940: [[1604, 1580, 1610], 256],
                64941: [[1604, 1605, 1610], 256],
                64942: [[1610, 1581, 1610], 256],
                64943: [[1610, 1580, 1610], 256],
                64944: [[1610, 1605, 1610], 256],
                64945: [[1605, 1605, 1610], 256],
                64946: [[1602, 1605, 1610], 256],
                64947: [[1606, 1581, 1610], 256],
                64948: [[1602, 1605, 1581], 256],
                64949: [[1604, 1581, 1605], 256],
                64950: [[1593, 1605, 1610], 256],
                64951: [[1603, 1605, 1610], 256],
                64952: [[1606, 1580, 1581], 256],
                64953: [[1605, 1582, 1610], 256],
                64954: [[1604, 1580, 1605], 256],
                64955: [[1603, 1605, 1605], 256],
                64956: [[1604, 1580, 1605], 256],
                64957: [[1606, 1580, 1581], 256],
                64958: [[1580, 1581, 1610], 256],
                64959: [[1581, 1580, 1610], 256],
                64960: [[1605, 1580, 1610], 256],
                64961: [[1601, 1605, 1610], 256],
                64962: [[1576, 1581, 1610], 256],
                64963: [[1603, 1605, 1605], 256],
                64964: [[1593, 1580, 1605], 256],
                64965: [[1589, 1605, 1605], 256],
                64966: [[1587, 1582, 1610], 256],
                64967: [[1606, 1580, 1610], 256],
                65008: [[1589, 1604, 1746], 256],
                65009: [[1602, 1604, 1746], 256],
                65010: [[1575, 1604, 1604, 1607], 256],
                65011: [[1575, 1603, 1576, 1585], 256],
                65012: [[1605, 1581, 1605, 1583], 256],
                65013: [[1589, 1604, 1593, 1605], 256],
                65014: [[1585, 1587, 1608, 1604], 256],
                65015: [[1593, 1604, 1610, 1607], 256],
                65016: [[1608, 1587, 1604, 1605], 256],
                65017: [[1589, 1604, 1609], 256],
                65018: [[1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604, 1610, 1607, 32, 1608, 1587, 1604, 1605], 256],
                65019: [[1580, 1604, 32, 1580, 1604, 1575, 1604, 1607], 256],
                65020: [[1585, 1740, 1575, 1604], 256]
            },
            65024: {
                65040: [[44], 256],
                65041: [[12289], 256],
                65042: [[12290], 256],
                65043: [[58], 256],
                65044: [[59], 256],
                65045: [[33], 256],
                65046: [[63], 256],
                65047: [[12310], 256],
                65048: [[12311], 256],
                65049: [[8230], 256],
                65056: [, 230],
                65057: [, 230],
                65058: [, 230],
                65059: [, 230],
                65060: [, 230],
                65061: [, 230],
                65062: [, 230],
                65063: [, 220],
                65064: [, 220],
                65065: [, 220],
                65066: [, 220],
                65067: [, 220],
                65068: [, 220],
                65069: [, 220],
                65072: [[8229], 256],
                65073: [[8212], 256],
                65074: [[8211], 256],
                65075: [[95], 256],
                65076: [[95], 256],
                65077: [[40], 256],
                65078: [[41], 256],
                65079: [[123], 256],
                65080: [[125], 256],
                65081: [[12308], 256],
                65082: [[12309], 256],
                65083: [[12304], 256],
                65084: [[12305], 256],
                65085: [[12298], 256],
                65086: [[12299], 256],
                65087: [[12296], 256],
                65088: [[12297], 256],
                65089: [[12300], 256],
                65090: [[12301], 256],
                65091: [[12302], 256],
                65092: [[12303], 256],
                65095: [[91], 256],
                65096: [[93], 256],
                65097: [[8254], 256],
                65098: [[8254], 256],
                65099: [[8254], 256],
                65100: [[8254], 256],
                65101: [[95], 256],
                65102: [[95], 256],
                65103: [[95], 256],
                65104: [[44], 256],
                65105: [[12289], 256],
                65106: [[46], 256],
                65108: [[59], 256],
                65109: [[58], 256],
                65110: [[63], 256],
                65111: [[33], 256],
                65112: [[8212], 256],
                65113: [[40], 256],
                65114: [[41], 256],
                65115: [[123], 256],
                65116: [[125], 256],
                65117: [[12308], 256],
                65118: [[12309], 256],
                65119: [[35], 256],
                65120: [[38], 256],
                65121: [[42], 256],
                65122: [[43], 256],
                65123: [[45], 256],
                65124: [[60], 256],
                65125: [[62], 256],
                65126: [[61], 256],
                65128: [[92], 256],
                65129: [[36], 256],
                65130: [[37], 256],
                65131: [[64], 256],
                65136: [[32, 1611], 256],
                65137: [[1600, 1611], 256],
                65138: [[32, 1612], 256],
                65140: [[32, 1613], 256],
                65142: [[32, 1614], 256],
                65143: [[1600, 1614], 256],
                65144: [[32, 1615], 256],
                65145: [[1600, 1615], 256],
                65146: [[32, 1616], 256],
                65147: [[1600, 1616], 256],
                65148: [[32, 1617], 256],
                65149: [[1600, 1617], 256],
                65150: [[32, 1618], 256],
                65151: [[1600, 1618], 256],
                65152: [[1569], 256],
                65153: [[1570], 256],
                65154: [[1570], 256],
                65155: [[1571], 256],
                65156: [[1571], 256],
                65157: [[1572], 256],
                65158: [[1572], 256],
                65159: [[1573], 256],
                65160: [[1573], 256],
                65161: [[1574], 256],
                65162: [[1574], 256],
                65163: [[1574], 256],
                65164: [[1574], 256],
                65165: [[1575], 256],
                65166: [[1575], 256],
                65167: [[1576], 256],
                65168: [[1576], 256],
                65169: [[1576], 256],
                65170: [[1576], 256],
                65171: [[1577], 256],
                65172: [[1577], 256],
                65173: [[1578], 256],
                65174: [[1578], 256],
                65175: [[1578], 256],
                65176: [[1578], 256],
                65177: [[1579], 256],
                65178: [[1579], 256],
                65179: [[1579], 256],
                65180: [[1579], 256],
                65181: [[1580], 256],
                65182: [[1580], 256],
                65183: [[1580], 256],
                65184: [[1580], 256],
                65185: [[1581], 256],
                65186: [[1581], 256],
                65187: [[1581], 256],
                65188: [[1581], 256],
                65189: [[1582], 256],
                65190: [[1582], 256],
                65191: [[1582], 256],
                65192: [[1582], 256],
                65193: [[1583], 256],
                65194: [[1583], 256],
                65195: [[1584], 256],
                65196: [[1584], 256],
                65197: [[1585], 256],
                65198: [[1585], 256],
                65199: [[1586], 256],
                65200: [[1586], 256],
                65201: [[1587], 256],
                65202: [[1587], 256],
                65203: [[1587], 256],
                65204: [[1587], 256],
                65205: [[1588], 256],
                65206: [[1588], 256],
                65207: [[1588], 256],
                65208: [[1588], 256],
                65209: [[1589], 256],
                65210: [[1589], 256],
                65211: [[1589], 256],
                65212: [[1589], 256],
                65213: [[1590], 256],
                65214: [[1590], 256],
                65215: [[1590], 256],
                65216: [[1590], 256],
                65217: [[1591], 256],
                65218: [[1591], 256],
                65219: [[1591], 256],
                65220: [[1591], 256],
                65221: [[1592], 256],
                65222: [[1592], 256],
                65223: [[1592], 256],
                65224: [[1592], 256],
                65225: [[1593], 256],
                65226: [[1593], 256],
                65227: [[1593], 256],
                65228: [[1593], 256],
                65229: [[1594], 256],
                65230: [[1594], 256],
                65231: [[1594], 256],
                65232: [[1594], 256],
                65233: [[1601], 256],
                65234: [[1601], 256],
                65235: [[1601], 256],
                65236: [[1601], 256],
                65237: [[1602], 256],
                65238: [[1602], 256],
                65239: [[1602], 256],
                65240: [[1602], 256],
                65241: [[1603], 256],
                65242: [[1603], 256],
                65243: [[1603], 256],
                65244: [[1603], 256],
                65245: [[1604], 256],
                65246: [[1604], 256],
                65247: [[1604], 256],
                65248: [[1604], 256],
                65249: [[1605], 256],
                65250: [[1605], 256],
                65251: [[1605], 256],
                65252: [[1605], 256],
                65253: [[1606], 256],
                65254: [[1606], 256],
                65255: [[1606], 256],
                65256: [[1606], 256],
                65257: [[1607], 256],
                65258: [[1607], 256],
                65259: [[1607], 256],
                65260: [[1607], 256],
                65261: [[1608], 256],
                65262: [[1608], 256],
                65263: [[1609], 256],
                65264: [[1609], 256],
                65265: [[1610], 256],
                65266: [[1610], 256],
                65267: [[1610], 256],
                65268: [[1610], 256],
                65269: [[1604, 1570], 256],
                65270: [[1604, 1570], 256],
                65271: [[1604, 1571], 256],
                65272: [[1604, 1571], 256],
                65273: [[1604, 1573], 256],
                65274: [[1604, 1573], 256],
                65275: [[1604, 1575], 256],
                65276: [[1604, 1575], 256]
            },
            65280: {
                65281: [[33], 256],
                65282: [[34], 256],
                65283: [[35], 256],
                65284: [[36], 256],
                65285: [[37], 256],
                65286: [[38], 256],
                65287: [[39], 256],
                65288: [[40], 256],
                65289: [[41], 256],
                65290: [[42], 256],
                65291: [[43], 256],
                65292: [[44], 256],
                65293: [[45], 256],
                65294: [[46], 256],
                65295: [[47], 256],
                65296: [[48], 256],
                65297: [[49], 256],
                65298: [[50], 256],
                65299: [[51], 256],
                65300: [[52], 256],
                65301: [[53], 256],
                65302: [[54], 256],
                65303: [[55], 256],
                65304: [[56], 256],
                65305: [[57], 256],
                65306: [[58], 256],
                65307: [[59], 256],
                65308: [[60], 256],
                65309: [[61], 256],
                65310: [[62], 256],
                65311: [[63], 256],
                65312: [[64], 256],
                65313: [[65], 256],
                65314: [[66], 256],
                65315: [[67], 256],
                65316: [[68], 256],
                65317: [[69], 256],
                65318: [[70], 256],
                65319: [[71], 256],
                65320: [[72], 256],
                65321: [[73], 256],
                65322: [[74], 256],
                65323: [[75], 256],
                65324: [[76], 256],
                65325: [[77], 256],
                65326: [[78], 256],
                65327: [[79], 256],
                65328: [[80], 256],
                65329: [[81], 256],
                65330: [[82], 256],
                65331: [[83], 256],
                65332: [[84], 256],
                65333: [[85], 256],
                65334: [[86], 256],
                65335: [[87], 256],
                65336: [[88], 256],
                65337: [[89], 256],
                65338: [[90], 256],
                65339: [[91], 256],
                65340: [[92], 256],
                65341: [[93], 256],
                65342: [[94], 256],
                65343: [[95], 256],
                65344: [[96], 256],
                65345: [[97], 256],
                65346: [[98], 256],
                65347: [[99], 256],
                65348: [[100], 256],
                65349: [[101], 256],
                65350: [[102], 256],
                65351: [[103], 256],
                65352: [[104], 256],
                65353: [[105], 256],
                65354: [[106], 256],
                65355: [[107], 256],
                65356: [[108], 256],
                65357: [[109], 256],
                65358: [[110], 256],
                65359: [[111], 256],
                65360: [[112], 256],
                65361: [[113], 256],
                65362: [[114], 256],
                65363: [[115], 256],
                65364: [[116], 256],
                65365: [[117], 256],
                65366: [[118], 256],
                65367: [[119], 256],
                65368: [[120], 256],
                65369: [[121], 256],
                65370: [[122], 256],
                65371: [[123], 256],
                65372: [[124], 256],
                65373: [[125], 256],
                65374: [[126], 256],
                65375: [[10629], 256],
                65376: [[10630], 256],
                65377: [[12290], 256],
                65378: [[12300], 256],
                65379: [[12301], 256],
                65380: [[12289], 256],
                65381: [[12539], 256],
                65382: [[12530], 256],
                65383: [[12449], 256],
                65384: [[12451], 256],
                65385: [[12453], 256],
                65386: [[12455], 256],
                65387: [[12457], 256],
                65388: [[12515], 256],
                65389: [[12517], 256],
                65390: [[12519], 256],
                65391: [[12483], 256],
                65392: [[12540], 256],
                65393: [[12450], 256],
                65394: [[12452], 256],
                65395: [[12454], 256],
                65396: [[12456], 256],
                65397: [[12458], 256],
                65398: [[12459], 256],
                65399: [[12461], 256],
                65400: [[12463], 256],
                65401: [[12465], 256],
                65402: [[12467], 256],
                65403: [[12469], 256],
                65404: [[12471], 256],
                65405: [[12473], 256],
                65406: [[12475], 256],
                65407: [[12477], 256],
                65408: [[12479], 256],
                65409: [[12481], 256],
                65410: [[12484], 256],
                65411: [[12486], 256],
                65412: [[12488], 256],
                65413: [[12490], 256],
                65414: [[12491], 256],
                65415: [[12492], 256],
                65416: [[12493], 256],
                65417: [[12494], 256],
                65418: [[12495], 256],
                65419: [[12498], 256],
                65420: [[12501], 256],
                65421: [[12504], 256],
                65422: [[12507], 256],
                65423: [[12510], 256],
                65424: [[12511], 256],
                65425: [[12512], 256],
                65426: [[12513], 256],
                65427: [[12514], 256],
                65428: [[12516], 256],
                65429: [[12518], 256],
                65430: [[12520], 256],
                65431: [[12521], 256],
                65432: [[12522], 256],
                65433: [[12523], 256],
                65434: [[12524], 256],
                65435: [[12525], 256],
                65436: [[12527], 256],
                65437: [[12531], 256],
                65438: [[12441], 256],
                65439: [[12442], 256],
                65440: [[12644], 256],
                65441: [[12593], 256],
                65442: [[12594], 256],
                65443: [[12595], 256],
                65444: [[12596], 256],
                65445: [[12597], 256],
                65446: [[12598], 256],
                65447: [[12599], 256],
                65448: [[12600], 256],
                65449: [[12601], 256],
                65450: [[12602], 256],
                65451: [[12603], 256],
                65452: [[12604], 256],
                65453: [[12605], 256],
                65454: [[12606], 256],
                65455: [[12607], 256],
                65456: [[12608], 256],
                65457: [[12609], 256],
                65458: [[12610], 256],
                65459: [[12611], 256],
                65460: [[12612], 256],
                65461: [[12613], 256],
                65462: [[12614], 256],
                65463: [[12615], 256],
                65464: [[12616], 256],
                65465: [[12617], 256],
                65466: [[12618], 256],
                65467: [[12619], 256],
                65468: [[12620], 256],
                65469: [[12621], 256],
                65470: [[12622], 256],
                65474: [[12623], 256],
                65475: [[12624], 256],
                65476: [[12625], 256],
                65477: [[12626], 256],
                65478: [[12627], 256],
                65479: [[12628], 256],
                65482: [[12629], 256],
                65483: [[12630], 256],
                65484: [[12631], 256],
                65485: [[12632], 256],
                65486: [[12633], 256],
                65487: [[12634], 256],
                65490: [[12635], 256],
                65491: [[12636], 256],
                65492: [[12637], 256],
                65493: [[12638], 256],
                65494: [[12639], 256],
                65495: [[12640], 256],
                65498: [[12641], 256],
                65499: [[12642], 256],
                65500: [[12643], 256],
                65504: [[162], 256],
                65505: [[163], 256],
                65506: [[172], 256],
                65507: [[175], 256],
                65508: [[166], 256],
                65509: [[165], 256],
                65510: [[8361], 256],
                65512: [[9474], 256],
                65513: [[8592], 256],
                65514: [[8593], 256],
                65515: [[8594], 256],
                65516: [[8595], 256],
                65517: [[9632], 256],
                65518: [[9675], 256]
            }
        };
        var ge = {
            nfc: Se,
            nfd: R,
            nfkc: Be,
            nfkd: ie
        };
        e.exports = ge,
        ge.shimApplied = !1,
        String.prototype.normalize || (Object.defineProperty(String.prototype, "normalize", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function() {
                var T = "" + this
                  , F = arguments[0] === void 0 ? "NFC" : arguments[0];
                if (this === null || this === void 0)
                    throw new TypeError("Cannot call method on " + Object.prototype.toString.call(this));
                if (F === "NFC")
                    return ge.nfc(T);
                if (F === "NFD")
                    return ge.nfd(T);
                if (F === "NFKC")
                    return ge.nfkc(T);
                if (F === "NFKD")
                    return ge.nfkd(T);
                throw new RangeError("Invalid normalization form: " + F)
            }
        }),
        ge.shimApplied = !0)
    }
    )()
}
)(Yt);
var ET = Yt.exports;
const BT = Cn(ET)
  , Ps = S({
    amount: 0,
    pwd: "",
    type: 0,
    bid: 0,
    name: ""
})
  , At = S({})
  , ht = S([]);
function PD() {
    const e = $( () => Re().getUpperOrLower)
      , s = S(!1)
      , t = localStorage.getItem("lastBandCarkName") || ""
      , n = (_, I) => {
        _[I] = _[I].replace(/[^\d]+/g, "")
    }
    ;
    function a(_, I) {
        return /^[0-9]{8,12}$/.test(_) ? !0 : (Fe({
            message: I,
            wordBreak: "break-word"
        }),
        !1)
    }
    function c(_) {
        const I = {
            "𝘼": "A",
            "𝘽": "B",
            "𝘾": "C",
            "𝘿": "D",
            "𝙀": "E",
            "𝙁": "F",
            "𝙂": "G",
            "𝙃": "H",
            "𝙄": "I",
            "𝙅": "J",
            "𝙆": "K",
            "𝙇": "L",
            "𝙈": "M",
            "𝙉": "N",
            "𝙊": "O",
            "𝙋": "P",
            "𝙌": "Q",
            "𝙍": "R",
            "𝙎": "S",
            "𝙏": "T",
            "𝙐": "U",
            "𝙑": "V",
            "𝙒": "W",
            "𝙓": "X",
            "𝙔": "Y",
            "𝙕": "Z",
            "𝙖": "a",
            "𝙗": "b",
            "𝙘": "c",
            "𝙙": "d",
            "𝙚": "e",
            "𝙛": "f",
            "𝙜": "g",
            "𝙝": "h",
            "𝙞": "i",
            "𝙟": "j",
            "𝙠": "k",
            "𝙡": "l",
            "𝙢": "m",
            "𝙣": "n",
            "𝙤": "o",
            "𝙥": "p",
            "𝙦": "q",
            "𝙧": "r",
            "𝙨": "s",
            "𝙩": "t",
            "𝙪": "u",
            "𝙫": "v",
            "𝙬": "w",
            "𝙭": "x",
            "𝙮": "y",
            "𝙯": "z"
        };
        return _.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\s\S]/g, m => I[m] || m)
    }
    const i = "ar031"
      , l = (_, I) => {
        const m = /[0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、\f\n\r\t\v\d]/g;
        let b = _[I].replace(m, "").replace(/ {2,}/g, " ");
        ["ar020"].includes(i) && (b = b.replace(/[^a-zA-Z\s]/g, "")),
        b = c(b),
        _[I] = BT.nfd(mT(b.replace(/[\u0300-\u036f]/g, ""))),
        g(_, I)
    }
    ;
    function g(_, I) {
        const m = e.value || "";
        m === "1" ? _[I] = _[I].toLowerCase() : m === "0" && (_[I] = _[I].toUpperCase())
    }
    function w(_, I) {
        t.length > 0 ? (_[I] = t,
        g(_, I),
        s.value = !0) : s.value = !1
    }
    function d(_) {
        Ps.value = _
    }
    function v(_) {
        At.value = _
    }
    function y(_) {
        ht.value = _
    }
    return {
        iseditor: s,
        lastBandCarkName: t,
        onInput: n,
        checkAccoutNo: a,
        setUL: g,
        onLoad: w,
        makeTxt: l,
        data_NewSetWithdrawalH: Ps,
        setWithdrawal: d,
        setWithdrawalsrule: v,
        withdrawalsrule: At,
        setWithdrawalTypeslist: y,
        withdrawalTypeslist: ht,
        setc2cAmount: _ => {
            Ps.value.amount = _
        }
    }
}
class xT {
    constructor() {
        wt(this, "events");
        this.events = {}
    }
    on(s, t) {
        this.events[s] || (this.events[s] = []),
        this.events[s].push(t)
    }
    off(s, t) {
        if (!s && !t)
            return this.events = {},
            this;
        if (s) {
            if (!t)
                return this.events[s] = [],
                this;
            const n = this.events[s];
            if (!n)
                return this;
            let a = n.length;
            for (; a--; )
                n[a] === t && n.splice(a, 1);
            return this
        }
    }
    emit(s, ...t) {
        const n = this.events[s];
        if (!n)
            return;
        let a;
        for (let c = 0; c < n.length; c++) {
            const i = n[c];
            if (i && (a = i.apply(this, t),
            a === !0))
                return a
        }
    }
    destory() {
        this.events = {}
    }
}
let Ds;
function Qt() {
    return Ds || (Ds = new xT),
    Ds
}
function OT(e) {
    let s;
    et(async () => {
        e(),
        await Pn( () => {
            s = !0
        }
        )
    }
    ),
    Dn( () => {
        s && e()
    }
    )
}
function DD(e, s, t={}) {
    const {target: n=window, passive: a=!1, capture: c=!1} = t;
    let i;
    const l = w => {
        const d = Xs(w);
        d && !i && (d.addEventListener(e, s, {
            capture: c,
            passive: a
        }),
        i = !0)
    }
      , g = w => {
        const d = Xs(w);
        d && i && (d.removeEventListener(e, s, c),
        i = !1)
    }
    ;
    tt( () => g(n)),
    Nt( () => g(n)),
    OT( () => l(n)),
    En(n) && Bn(n, (w, d) => {
        g(d),
        l(w)
    }
    )
}
const _t = S(!1);
function ED() {
    const e = S(!1)
      , s = S(!1)
      , t = S(!1)
      , n = S(!1)
      , a = S(!1)
      , c = S(!1)
      , i = S(!1)
      , l = S(!1)
      , g = S(!1)
      , w = S(!1)
      , d = S(!1)
      , v = S(!1)
      , y = S(!1)
      , u = S(!1);
    async function _() {
        const m = await G(tn());
        if (m) {
            const {registerSMSState: b, registerState: A, IsOpenForgetPasswordSMS: k, IsOpenForgetPasswordEmail: P, isOpenCaptcha: N="0", isOpenRegisterCaptcha: z="0", isOpenGoogleVerifySms: M, isOpenGoogleVerifyEmail: E, registerEmailState: q, registerMobileState: Y, isOpenAddWithdrawSMS: X, isOpenAddWithdrawEmail: ce, isOpenExternalAccount: R, isInvitecode: ie} = m.data;
            e.value = Number(b) !== 0,
            s.value = Number(A) !== 0,
            a.value = k === "1",
            c.value = P === "1",
            g.value = Number(M) !== 0,
            w.value = Number(E) !== 0,
            d.value = q === "1",
            v.value = Y === "1",
            t.value = Number(X) !== 0,
            n.value = Number(ce) !== 0,
            i.value = N === "1",
            l.value = z === "1",
            y.value = R === "1",
            u.value = ie === "1"
        }
    }
    async function I() {
        const m = await G(GC());
        m && (_t.value = m.data.state == 1)
    }
    return {
        registerState: _,
        isShowSMS: e,
        isRegisterState: s,
        isOpenAddWithdrawSMSState: t,
        isOpenAddWithdrawEmailState: n,
        isSmSForgetPasswordSMSState: a,
        IsOpenForgetPasswordEmailState: c,
        getPointMallState: I,
        isShowPointMall: _t,
        hasOpenCaptcha: i,
        hasOpenRegisterCaptcha: l,
        isGoogleVerifySms: g,
        isGoogleVerifyEmail: w,
        isregisterEmailState: d,
        isregisterMobileState: v,
        isOpenExternalAccountState: y,
        isInvitecodeState: u
    }
}
const it = () => {
    let e = null;
    const s = S(!1)
      , t = Qt()
      , n = c => {
        s.value = !1,
        t.emit("changeIsGame"),
        clearInterval(e),
        e = setTimeout( () => {
            s.value = !0,
            c(),
            t.emit("changeIsGame")
        }
        , 1e4)
    }
      , a = c => {
        s.value = !1,
        clearInterval(e),
        c ? t.emit("changeIsGame") : setTimeout( () => {
            t.emit("changeIsGame")
        }
        , 1e4)
    }
    ;
    return tt( () => {
        s.value = !1,
        clearInterval(e)
    }
    ),
    {
        start: n,
        end: a,
        flag: s
    }
}
  , oe = be({
    isTaskState: !1,
    isOpenJackpotReward: !1,
    isOpenWashCode: !1,
    unJackpotCount: 0,
    isOpenActivityAward: !1,
    unWeeklyAwardCount: 0,
    unDayAwardCount: 0,
    isFinishUserGuidelines: !1,
    isFirstUserDayRequest: !1,
    isShowFirstSaveDialog: !1,
    FirstRechargeList: [],
    showReceiveDialog: !1,
    receiveAmount: 0,
    newbieGiftPackCount: 0,
    isOpenChampion: 0,
    newMemberGiftPackageSwitch: !1,
    firstDepositRewardCodeAmount: "",
    todayRewards: 0,
    totalRewards: 0
})
  , MT = {
    A1: {
        goPath: "Recharge",
        icon: "weeklyType1"
    },
    A2: {
        goPath: "Recharge",
        icon: "weeklyType1"
    },
    A3: {
        goPath: "Withdraw",
        icon: "weeklyType2"
    },
    A4: {
        goPath: "Withdraw",
        icon: "weeklyType2"
    },
    B5: {
        goPath: "home",
        homeType: "lottery",
        icon: "weeklyType3"
    },
    B6: {
        goPath: "home",
        homeType: "lottery",
        icon: "weeklyType3"
    },
    B7: {
        goPath: "home",
        homeType: "slot",
        icon: "weeklyType4"
    },
    B8: {
        goPath: "home",
        homeType: "slot",
        icon: "weeklyType4"
    },
    B9: {
        goPath: "home",
        homeType: "video",
        icon: "weeklyType5"
    },
    B10: {
        goPath: "home",
        homeType: "video",
        icon: "weeklyType5"
    },
    B11: {
        goPath: "home",
        homeType: "sport",
        icon: "weeklyType6"
    },
    B12: {
        goPath: "home",
        homeType: "sport",
        icon: "weeklyType6"
    },
    B13: {
        goPath: "home",
        homeType: "chess",
        icon: "weeklyType7"
    },
    B14: {
        goPath: "home",
        homeType: "chess",
        icon: "weeklyType7"
    },
    C15: {
        goPath: "PromotionShare",
        icon: "weeklyType8"
    },
    D16: {
        goPath: "DailySignIn",
        icon: "weeklyType9"
    },
    D17: {
        goPath: "SuperJackpot",
        icon: "weeklyType10"
    },
    D18: {
        goPath: "StrongBox",
        icon: "weeklyType11"
    },
    D19: {
        goPath: "Laundry",
        icon: "weeklyType12"
    }
}
  , is = e => e === "1";
function WT() {
    async function e() {
        const d = await G(XR());
        ((d == null ? void 0 : d.code) === 0 || d != null && d.data) && (oe.isTaskState = is(d.data.isTaskState),
        oe.isOpenJackpotReward = is(d.data.isOpenJackpotReward),
        oe.isOpenWashCode = is(d.data.isOpenWashCode),
        oe.isOpenActivityAward = is(d.data.isOpenActivityAward),
        oe.unJackpotCount = d.data.unJackpotCount,
        oe.unWeeklyAwardCount = d.data.unWeeklyAwardCount || 0,
        oe.isFinishUserGuidelines = !d.data.isFinishUserGuidelines,
        oe.isFirstUserDayRequest = d.data.isFirstUserDayRequest,
        oe.newbieGiftPackCount = d.data.newbieGiftPackCount || 0,
        oe.isOpenChampion = d.data.isOpenChampion,
        oe.todayRewards = d.data.todayRewards || 0,
        oe.totalRewards = d.data.totalRewards || 0,
        oe.newMemberGiftPackageSwitch = is(d.data.newMemberGiftPackageSwitch))
    }
    async function s() {
        (await G(QR())).code == 0 && (oe.isFinishUserGuidelines = !1)
    }
    async function t() {
        (await G(YR())).code == 0 && (oe.isFirstUserDayRequest = !1)
    }
    async function n() {
        const d = await G(qR());
        d.code == 0 && (oe.isShowFirstSaveDialog = d.data)
    }
    async function a(d=!1) {
        if (!localStorage.getItem("token"))
            return;
        const v = await G(zR({
            getAll: d
        }));
        if ((v == null ? void 0 : v.code) == 0) {
            let y = !1;
            return oe.FirstRechargeList = v.data.map(u => (y && (u.canReceive = !1),
            u.canReceive && (y = !0),
            u)),
            new Promise(u => {
                u(v.data)
            }
            )
        }
    }
    async function c(d) {
        const v = await G(KR({
            taskId: d
        }));
        return (v == null ? void 0 : v.code) == 0 ? (oe.isShowFirstSaveDialog = !1,
        a(),
        new Promise(y => {
            y(!0)
        }
        )) : new Promise(y => {
            y((v == null ? void 0 : v.data) || null)
        }
        )
    }
    async function i() {
        const d = await G(eC());
        d.code == 0 && (oe.unDayAwardCount = (d == null ? void 0 : d.data) || 0)
    }
    const l = (d=!1) => {
        oe.isShowFirstSaveDialog = d
    }
      , g = $( () => oe)
      , w = $( () => g.value.unWeeklyAwardCount + g.value.unDayAwardCount + g.value.newbieGiftPackCount);
    return {
        ActiveTaskMap: MT,
        ActiveSotre: g,
        allUnAwardCount: w,
        setShowFirstSaveDialog: l,
        getActive: e,
        saveUserGuidelines: s,
        saveUserDayRequest: t,
        needPopupFirstRecharge: n,
        getFirstRechargeList: a,
        receiveFirstRechargeReward: c,
        getDailyAwardCount: i
    }
}
const K = be({
    prompt: !1,
    laundry: !1,
    invite: !1,
    firstSave: !1,
    oldUser: !1,
    appDownload: !1,
    registerGift: !1,
    registerGiftAmount: 0,
    rebateAmount: 0,
    returnAwards: 0,
    downAppRewardBonusAmount: 0,
    isARPay: !1,
    isAppDownloadPromptTextEnabled: !1,
    appForcedDownloadUrl: "",
    isLandingPageEnabled: !1,
    landingPageUrl: "",
    isAppForcedDownloadEnabled: !1,
    appDownloadPromptText: "",
    financePromptText: "",
    isFinancePromptTextEnabled: !1,
    rewardCenter: !1
})
  , Es = new Map
  , Ze = S("")
  , Bs = S([])
  , St = new AbortController;
function BD() {
    const e = st()
      , {t: s} = Pe()
      , t = he()
      , n = Re()
      , {ActiveSotre: a, setShowFirstSaveDialog: c} = WT()
      , i = M => () => new Promise(E => {
        Es.set(M, E),
        K[M] = !0
    }
    )
      , l = M => E => {
        const q = Es.get(M);
        q && (M === "prompt" && sessionStorage.setItem("promptShowCount", "1"),
        M === "firstSave" && a.value.isShowFirstSaveDialog ? K[M] = !0 : K[M] = !1,
        ["prompt", "laundry"].includes(M) && sessionStorage.setItem(`pop_${M}`, "1"),
        q(),
        E === !0 && St.abort())
    }
      , g = l("invite")
      , w = () => {
        Ze.value = Bs.value.splice(0, 1)[0] || {},
        !Ze.value.title && l("prompt")()
    }
      , d = () => !Ze.value.title
      , v = l("laundry")
      , y = l("firstSave")
      , u = l("oldUser")
      , _ = l("registerGift")
      , I = l("appDownload")
      , m = $( () => ["activity", "home", "main", "wallet", "promotion"].includes(e.name) && K.firstSave)
      , b = async () => {
        await G(an()) && (K.returnAwards = 0,
        ue(s("receiveSuccess"))),
        u()
    }
      , A = async () => {
        await G($R()) && (K.registerGiftAmount = 0,
        ue(s("receiveSuccess"))),
        _()
    }
      , k = async () => {
        await G(on()) && (K.downAppRewardBonusAmount = 0,
        ue(s("receiveSuccess"))),
        I()
    }
      , P = async () => {
        K.firstSave = !1,
        K.prompt = !1,
        K.invite = !1,
        K.laundry = !1,
        K.oldUser = !1,
        K.appDownload = !1,
        K.registerGift = !1,
        Es.clear();
        const M = localStorage.getItem("token")
          , E = sessionStorage.getItem("pop_prompt")
          , q = sessionStorage.getItem("pop_laundry");
        let Y = !1;
        if (M) {
            const R = (await G(jR())).data || {};
            c((R == null ? void 0 : R.needPopupFirstRecharge) || !1),
            Y = (R == null ? void 0 : R.isExistGrandAward) || !1,
            K.rebateAmount = (R == null ? void 0 : R.children_Lv_RebateAmount_Yesterday) || 0,
            K.returnAwards = (R == null ? void 0 : R.returnAwards) || 0,
            K.registerGiftAmount = (R == null ? void 0 : R.registerGiftAmount) || 0,
            K.downAppRewardBonusAmount = (R == null ? void 0 : R.downAppRewardBonusAmount) || 0,
            K.isARPay = R == null ? void 0 : R.isARPay,
            K.isAppDownloadPromptTextEnabled = R == null ? void 0 : R.isAppDownloadPromptTextEnabled,
            K.appForcedDownloadUrl = R == null ? void 0 : R.appForcedDownloadUrl,
            K.isLandingPageEnabled = R == null ? void 0 : R.isLandingPageEnabled,
            K.landingPageUrl = R == null ? void 0 : R.landingPageUrl,
            K.financePromptText = R == null ? void 0 : R.financePromptText,
            K.isFinancePromptTextEnabled = R == null ? void 0 : R.isFinancePromptTextEnabled,
            sessionStorage.setItem("ar_pay", `${R != null && R.isARPay ? 1 : 0}`),
            $e() && (R != null && R.isAppForcedDownloadEnabled ? Ve({
                title: s("tips"),
                message: R == null ? void 0 : R.appDownloadPromptText,
                confirmButtonText: s("downloadAPP"),
                cancelButtonText: s("cancel"),
                overlayStyle: {
                    zIndex: 9999999
                },
                className: "isAppForcedDownloadEnabled-dialog",
                beforeClose: (ie, Se) => {
                    ie === "confirm" ? js("downloadAPK", {
                        url: K.appForcedDownloadUrl
                    }) : Se()
                }
            }) : R != null && R.isAppDownloadPromptTextEnabled && ut({
                title: s("tips"),
                message: R == null ? void 0 : R.appDownloadPromptText,
                overlayStyle: {
                    zIndex: 9999999
                },
                className: "isAppForcedDownloadEnabled-dialog",
                confirmButtonText: s("downloadAPP"),
                cancelButtonText: s("cancel")
            }).then(ie => {
                js("downloadAPK", {
                    url: K.appForcedDownloadUrl
                })
            }
            )),
            e.name == "home" && !E && await N()
        }
        const X = [];
        !E && M && Ze.value && e.name == "home" && X.push(i("prompt")),
        a.value.isShowFirstSaveDialog && X.push(i("firstSave")),
        t.getUserInfo.isPopupCommissionSwitch == "1" && !E && K.rebateAmount > 0 && M && X.push(i("invite")),
        !q && M && Y && X.push(i("laundry")),
        K.returnAwards > 0 && X.push(i("oldUser")),
        K.registerGiftAmount > 0 && X.push(i("registerGift")),
        n.isOpenDownAppRewardSwitch && K.downAppRewardBonusAmount > 0 && M && X.push(i("appDownload")),
        xn(X, {
            signal: St.signal
        })
    }
    ;
    async function N() {
        const M = await G(wC());
        M.data && (Bs.value = M.data,
        Ze.value = Bs.value.splice(0, 1)[0])
    }
    return {
        store: K,
        closeInvite: g,
        closePrompt: w,
        closeLaundry: v,
        closeFirstSave: y,
        showFirstSave: m,
        closOldPrompt: u,
        onReturnAwards: b,
        onRegisterGift: A,
        onAppDownloadAwards: k,
        openAll: P,
        promptContent: Ze,
        downAppTip: async M => {
            if ($e() || !K.isFinancePromptTextEnabled)
                return Ae.push({
                    name: M
                });
            Ce(),
            ut({
                title: s("tips"),
                message: K.financePromptText
            }).then(E => {}
            ).catch(E => {}
            )
        }
        ,
        beforeClosePrompt: d
    }
}
const xs = S();
function xD() {
    const {t: e} = Pe()
      , s = De()
      , t = S({})
      , n = S({})
      , a = S([])
      , c = S([])
      , i = S([])
      , l = [{
        key: 1,
        title: e("ongoing")
    }, {
        key: 0,
        title: e("cpsTip2")
    }, {
        key: 2,
        title: e("ended")
    }]
      , g = {
        1: e("bankCard"),
        2: "UPI",
        3: "USDT",
        4: "E-Wallet",
        5: "PIX",
        6: "WavePay",
        7: "TRX",
        8: "KBZPay",
        10: "USDT2",
        20: "NewUPI"
    };
    be({
        30: {
            typeId: 30,
            class: "wingo",
            title: "Win Go 30s",
            path: "WinGo",
            icon: "Win Go"
        },
        1: {
            typeId: 1,
            class: "wingo",
            title: "Win Go 1Min",
            path: "WinGo",
            icon: "Win Go"
        },
        2: {
            typeId: 2,
            class: "wingo",
            title: "Win Go 3Min",
            path: "WinGo",
            icon: "Win Go"
        },
        3: {
            typeId: 3,
            class: "wingo",
            title: "Win Go 5Min",
            path: "WinGo",
            icon: "Win Go"
        },
        4: {
            typeId: 4,
            class: "wingo",
            title: "Win Go 10Min",
            path: "WinGo",
            icon: "Win Go"
        },
        5: {
            typeId: 5,
            class: "d5",
            title: "5D 1Min",
            path: "5D",
            icon: "5D"
        },
        6: {
            typeId: 6,
            class: "d5",
            title: "5D 3Min",
            path: "5D",
            icon: "5D"
        },
        7: {
            typeId: 7,
            class: "d5",
            title: "5D 5Min",
            path: "5D",
            icon: "5D"
        },
        8: {
            typeId: 8,
            class: "d5",
            title: "5D 10Min",
            path: "5D",
            icon: "5D"
        },
        9: {
            typeId: 9,
            class: "k3",
            title: "K3 1Min",
            path: "K3",
            icon: "K3"
        },
        10: {
            typeId: 10,
            class: "k3",
            title: "K3 3Min",
            path: "K3",
            icon: "K3"
        },
        11: {
            typeId: 11,
            class: "k3",
            title: "K3 5Min",
            path: "K3",
            icon: "K3"
        },
        12: {
            typeId: 12,
            class: "k3",
            title: "K3 10Min",
            path: "K3",
            icon: "K3"
        },
        13: {
            typeId: 13,
            class: "trx",
            title: "Trx Win Go 1Min",
            path: "WinTrx",
            icon: "Trx Win Go"
        },
        14: {
            typeId: 14,
            class: "trx",
            title: "Trx Win Go 3Min",
            path: "WinTrx",
            icon: "Trx Win Go"
        },
        15: {
            typeId: 15,
            class: "trx",
            title: "Trx Win Go 5Min",
            path: "WinTrx",
            icon: "Trx Win Go"
        },
        16: {
            typeId: 16,
            class: "trx",
            title: "Trx Win Go 10Min",
            path: "WinTrx",
            icon: "Trx Win Go"
        }
    });
    const w = async () => {
        const b = await G(tC());
        b != null && b.data && (t.value = b == null ? void 0 : b.data,
        xs.value = b.serviceNowTime)
    }
      , d = async b => {
        var k, P, N;
        const A = await G(nC({
            championId: b
        }));
        if (A != null && A.data) {
            if (n.value = A == null ? void 0 : A.data,
            xs.value = A.serviceNowTime,
            ((k = n.value) == null ? void 0 : k.vendorCode) == "ARLottery")
                return i.value = (P = n.value) == null ? void 0 : P.subGames.map(z => (z.vendorCode = "ARLottery",
                z.title = z.gameCode.replace("_", " "),
                z));
            if ((N = n.value) != null && N.vendorId) {
                const z = n.value.subGameIds || [];
                y(n.value.vendorId, z[0] || null)
            }
        }
    }
      , v = async b => {
        const A = await G(aC({
            championId: b
        }));
        A != null && A.data && (a.value = A == null ? void 0 : A.data)
    }
      , y = async (b, A) => {
        var N;
        let k = {
            type: b,
            gameNameEn: "",
            isMiniGame: !1,
            typeId: A ? Number(A) : null
        };
        const P = await G(dC(k));
        P != null && P.data && (c.value = (N = P == null ? void 0 : P.data) == null ? void 0 : N.gameLists)
    }
      , {start: u, end: _, flag: I} = it();
    function m(b) {
        if (!he().token) {
            s.push({
                name: "login"
            });
            return
        }
        Ve({
            title: e("tips"),
            message: e("tipsPlayGame"),
            cancelButtonText: e("cancel"),
            showCancelButton: !0
        }).then(async () => {
            var N;
            u( () => {
                Ve({
                    title: "",
                    message: e("gameLoadTimeOut")
                }).then( () => {
                    s.push({
                        path: "/"
                    })
                }
                )
            }
            );
            const k = {
                vendorCode: b.hasOwnProperty("vendorCode") && b.vendorCode ? b.vendorCode : Number(b.vendorId) || Number(b.slotsTypeID),
                gameCode: b.gameID,
                returnUrl: location.origin
            };
            b.hasOwnProperty("vendorCode") ? k.deviceType = Ce(!1) : k.phonetype = Ce();
            const P = await G(Ls(k));
            if (P && !I.value)
                if (!I.value && _(!0),
                Xe())
                    ws({
                        ...(P == null ? void 0 : P.data) || {},
                        title: b.gameNameEn
                    });
                else if ($e())
                    ts("game", {
                        ...(P == null ? void 0 : P.data) || {},
                        gameName: b.gameNameEn
                    });
                else
                    return Ye ? as(P == null ? void 0 : P.data, 1) : s.push({
                        name: "game",
                        query: {
                            url: ot((N = P == null ? void 0 : P.data) == null ? void 0 : N.url),
                            vendorCode: k.vendorCode
                        }
                    });
            else {
                !I.value && _(!0);
                return
            }
            !I.value && _()
        }
        )
    }
    return {
        tabList: l,
        championEntranceV: w,
        championEntranceVO: t,
        serviceNowTime: xs,
        getChampionTaskDetailV: d,
        championTaskDetailVO: n,
        getTop10UserList: v,
        top10UserListVO: a,
        thirdGameListVO: c,
        onItemClick: m,
        type: g,
        arLotteryList: i
    }
}
function OD() {
    const e = De()
      , {t: s} = Pe()
      , t = be({
        amount: 0,
        count: 0,
        rotateCount: 0,
        turntableList: [],
        turntableRecord: [],
        taskList: [],
        vipRating: [],
        bindingType: -1,
        result: null,
        dialog: !1
    })
      , n = S({
        pageNo: 1,
        pageSize: 10
    })
      , a = m => {
        const b = Number(m);
        return b < 1e3 ? b.toString() : b < 1e6 ? fs(Math.floor(b / 1e3 * 100) / 100, "", m.includes(".") ? 2 : 0) + "k" : fs(Math.floor(b / 1e6 * 100) / 100, "", 2) + "M"
    }
      , c = {
        1: s("bankCard"),
        2: "UPI",
        3: "USDT",
        4: "E-Wallet",
        5: "PIX",
        6: "WavePay",
        7: "TRX",
        8: "KBZPay",
        10: "USDT2",
        20: "NewUPI"
    }
      , i = S()
      , l = S()
      , g = $( () => t.turntableList.map(m => {
        if (m.rewardType === 1) {
            const b = m.rewardSetting + "";
            return {
                fonts: [{
                    text: `${b.length >= 9 ? a(b) : fs(b, "", b.includes(".") ? 2 : 0)}`,
                    lineClamp: 2,
                    fontColor: "#fff",
                    wordWrap: !0,
                    top: "30%",
                    fontSize: "12px"
                }],
                imgs: m.prizePicturesUrl ? [{
                    src: m.prizePicturesUrl,
                    top: "45%",
                    width: "55%"
                }] : []
            }
        }
        return {
            fonts: [{
                text: m.rewardSetting,
                lineClamp: 2,
                fontColor: "#fff",
                fontSize: "12px",
                wordWrap: !0,
                top: "30%"
            }],
            imgs: m.prizePicturesUrl ? [{
                src: m.prizePicturesUrl,
                top: "45%",
                width: "50%"
            }] : null
        }
    }
    ))
      , w = async () => {
        const m = await G(oC());
        m && (t.amount = m.data || 0)
    }
      , d = async () => {
        var b, A;
        const m = await G(pC());
        m && (t.count = ((b = m.data) == null ? void 0 : b.sumRotateNum) || 0,
        t.rotateCount = ((A = m.data) == null ? void 0 : A.surplusRotateNum) || 0)
    }
      , v = async () => {
        const m = await G(cC());
        if (m) {
            t.turntableList = m.data.rewardList;
            const b = m.data.vipRating.split(",");
            t.vipRating = b.map(A => `Vip${A}`),
            t.taskList = m.data.taskList,
            t.bindingType = m.data.bindingType
        }
    }
      , y = async () => {
        await Promise.all([w(), d(), v()])
    }
      , u = nt(async () => {
        const m = await iC();
        m.code === 0 ? (i.value.play(),
        setTimeout(b => {
            t.result = m.data;
            const A = t.turntableList.findIndex(k => k.rewardSetting === m.data.rewardSetting);
            if (A == -1)
                return i.value.stop(0);
            i.value.stop(A)
        }
        , 1500)) : [904].includes(m.msgCode) ? Fe(s("turntableTip", [c[m.data.bindingType]])) : ns(m)
    }
    , 600)
      , _ = async () => {
        t.result && (t.rotateCount = t.result.surplusRotateNum || 0,
        t.dialog = !0,
        l.value && l.value.resetRefresh())
    }
    ;
    function I() {
        e.go(-1)
    }
    return {
        store: t,
        prizes: g,
        myLucky: i,
        bindingTypes: c,
        recordQuery: n,
        pull: l,
        getTurntabl: y,
        getTurntablInfo: v,
        getTurntablAmount: w,
        onStart: u,
        onEnd: _,
        onClick: I
    }
}
function MD() {
    const {t: e} = Pe()
      , s = be({
        firstDepositConfig: {
            activityStartDate: "",
            bonusLimit: 0,
            firstDeposiSendBonust: 0,
            firstDepositTimeLiness: ""
        },
        giftPackConfigList: [],
        rewardRecordList: []
    })
      , t = $( () => {
        var y;
        return (y = s.firstDepositConfig) == null ? void 0 : y.activityStartDate
    }
    )
      , n = $( () => {
        var y;
        return (y = s.firstDepositConfig) == null ? void 0 : y.firstDepositTimeLiness
    }
    )
      , a = $( () => {
        var y;
        return (y = s.firstDepositConfig) == null ? void 0 : y.bonusLimit
    }
    )
      , c = $( () => {
        var y;
        return (y = s.firstDepositConfig) == null ? void 0 : y.firstDeposiSendBonust
    }
    )
      , i = $( () => s.giftPackConfigList || [])
      , l = $( () => s.rewardRecordList || [])
      , g = async () => {
        const y = await G(gC());
        y && (s.firstDepositConfig = y.data.firstDepositConfig,
        s.giftPackConfigList = y.data.giftPackConfigAwardList,
        s.rewardRecordList = y.data.newUserRewardRecordList)
    }
    ;
    return {
        store: s,
        time: t,
        firstDepositTimeLiness: n,
        bonusLimit: a,
        firstDeposiSendBonust: c,
        giftPackConfigList: i,
        rewardRecordList: l,
        onApplyFirstCharge: async () => {
            await G(rC({})) && (ue(e("applySuccess")),
            await g())
        }
        ,
        onReceive: async y => {
            await G(It({
                orderId: y,
                optType: 2
            })) && (ue(e("receiveSuccess")),
            await g())
        }
        ,
        onApply: async y => {
            await G(It({
                orderId: y,
                optType: 1
            })) && (ue(e("applySuccess")),
            await g())
        }
        ,
        getConfig: g
    }
}
const UT = {
    login: "Login",
    register: "Register",
    purchase: "Purchase",
    first_purchase: "FirstPurchase",
    recharge: "Recharge"
}
  , NT = {
    login: "FbLogin",
    register: "CompleteRegistration",
    recharge: "AddToCart",
    first_purchase: "AddToCart",
    purchase: "Purchase"
}
  , VT = {
    login: "Lead",
    register: "SignUp",
    recharge: "AddToCart",
    first_purchase: "AddToCart",
    purchase: "Purchase"
}
  , FT = {
    register: "CompleteRegistration",
    purchase: "Purchase",
    recharge: "AddToCart"
}
  , ls = On("gtag")
  , Zt = () => "dataLayer"in window
  , HT = () => "fbq"in window
  , qT = () => "rdt"in window
  , KT = () => "ttq"in window
  , zT = {}.VITE_BAN_FBSELF === "1";
ls.on( (e, s) => {
    Zt() && window.gtag("event", e, s),
    HT() && (zT || window.fbq("trackCustom", UT[e], s),
    window.fbq("track", NT[e], s)),
    qT() && window.rdt("track", VT[e]),
    KT() && window.ttq.track(FT[e], s);
    try {
        if (Mk() ? Wk(e, s) : $e() && js(e, s),
        !window.android || !window.android.onEvent)
            return;
        s ? window.android.onEvent(e, JSON.stringify(s)) : window.android.onEvent(e)
    } catch {}
}
);
function en() {
    return {
        onTriggerLogin: c => {
            ls.emit("login", {
                content_name: c
            })
        }
        ,
        onTriggerRegister: c => {
            ls.emit("register", {
                content_name: c
            })
        }
        ,
        onTriggerPurchase: (c, i) => {
            ls.emit(i ? "first_purchase" : "purchase", {
                currency: {}.VITE_BASE_DOLLARSIGN || "",
                value: 0,
                content_name: (localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).userId : "") || ""
            })
        }
        ,
        onTriggerRecharege: c => {
            ls.emit("recharge", {
                currency: {}.VITE_BASE_DOLLARSIGN || "",
                value: c.amount || 0,
                content_name: (localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).userId : "") || ""
            })
        }
        ,
        onTriggerGoogle: (c, i) => {
            Zt() && (i ? window.gtag("event", c, i) : window.gtag("event", c))
        }
    }
}
const Os = S()
  , WD = () => {
    const {t: e} = Pe()
      , s = De()
      , t = $( () => {
        var g;
        return ((g = Os.value) == null ? void 0 : g.walletActivationStatus) === 1
    }
    )
      , n = async (g, w) => {
        var v, y;
        Ne({
            message: e("loading") + "...",
            forbidClick: !0
        });
        const d = {
            returnUrl: "https://" + window.location.host + "/#/main"
        };
        if (w === "RSN") {
            const u = await G(EC(d));
            (u == null ? void 0 : u.code) === 0 && (window.location.href = ((v = u == null ? void 0 : u.data) == null ? void 0 : v.walletActivationPageUrl) + "&memberId=" + u.data.memberId + "&merchantCode=" + u.data.merchantCode + "&timestamp=" + u.data.timestamp)
        } else {
            const u = await G(PC(d));
            (u == null ? void 0 : u.code) === 0 && (window.location.href = ((y = u == null ? void 0 : u.data) == null ? void 0 : y.walletActivationPageUrl) + "&memberId=" + u.data.memberId + "&merchantCode=" + u.data.merchantCode + "&timestamp=" + u.data.timestamp)
        }
        es()
    }
    ;
    return {
        getInfo: async () => {
            const g = await G(CC({
                ip: localStorage.getItem("ARIP")
            }));
            g.code === 0 && (Os.value = g.data)
        }
        ,
        arWallet: Os,
        goWallet: async (g, w) => {
            var v, y;
            Ne({
                message: e("loading") + "...",
                forbidClick: !0
            });
            const d = {
                returnUrl: "https://" + window.location.host + "/#/main"
            };
            if (w === "RSN") {
                const u = await G(BC(d));
                if ((u == null ? void 0 : u.code) === 0) {
                    let _ = (v = u == null ? void 0 : u.data) == null ? void 0 : v.walletAccessUrl;
                    window.location.href = _
                }
            } else {
                const u = await G(DC(d));
                if ((u == null ? void 0 : u.code) === 0) {
                    let _ = (y = u == null ? void 0 : u.data) == null ? void 0 : y.walletAccessUrl;
                    window.location.href = _
                }
            }
            es()
        }
        ,
        goActive: n,
        activeBind: async (g, w) => {
            const d = {
                phone: g.phone,
                smsvCode: g.smsvCode
            }
              , v = await G(G(SR(d)));
            (v == null ? void 0 : v.code) === 0 && await n()
        }
        ,
        onTradRule: () => {
            let g = "https://arwwallet.com";
            s.push({
                name: "ArbRule",
                query: {
                    url: g
                }
            })
        }
        ,
        isArWalletActive: t
    }
}
;
function UD() {
    const e = De()
      , s = be({
        config: {
            configAmount: 0,
            effectiveQuantity: 0,
            invitationCode: "",
            numberOfInvitations: 0,
            totalAmount: 0,
            days: 0,
            items: []
        }
    })
      , t = S({
        pageNo: 1,
        pageSize: 10
    })
      , n = S([])
      , a = $( () => s.config.configAmount)
      , c = $( () => s.config.totalAmount)
      , i = S("")
      , l = $( () => s.config.invitationCode || "")
      , g = $( () => s.config.effectiveQuantity)
      , w = $( () => s.config.numberOfInvitations)
      , d = $( () => s.config.items.filter(k => k.type === 1))
      , v = $( () => s.config.items.filter(k => k.type === 2))
      , y = $( () => s.config.items.filter(k => k.type === 3))
      , u = $( () => s.config.items)
      , _ = $( () => s.config.days || "0")
      , I = async () => {
        const k = await G(hC());
        k && (s.config = k.data)
    }
      , m = async () => {
        await e.push({
            name: "TeamPartner-Invitation"
        })
    }
      , b = () => {
        e.go(-1)
    }
    ;
    async function A() {
        const k = await G(MR());
        if (k) {
            k.data.url.startsWith("http") ? i.value = k.data.url : i.value = window.location.href.substring(0, window.location.href.lastIndexOf("/#/") + 2) + "/" + k.data.url.substring(k.data.url.lastIndexOf("re"), k.data.url.length);
            return
        } else
            i.value = `${location.origin}/#/register?invitationCode=${s.config.invitationCode || ""}`
    }
    return {
        getInfo: I,
        goBack: b,
        goInvitation: m,
        getUrl: A,
        amount: a,
        invitationLink: i,
        totalAmount: c,
        invitationCode: l,
        effectiveQuantity: g,
        numberOfInvitations: w,
        query: t,
        partnerList: n,
        days: _,
        firstItem: d,
        secondItem: v,
        thirdItem: y,
        allItem: u
    }
}
const ms = S({
    canIUse: !1,
    download: null
})
  , Ms = S(null)
  , gs = S(!0)
  , XT = () => {
    let e = navigator.userAgent.toLowerCase()
      , s = vT();
    return s = s == null ? void 0 : s.toLowerCase(),
    /[\u4e00-\u9fa5]+/.test(s) && (s = "vxth"),
    e.indexOf("iphone") > -1 || e.indexOf("ipad") > -1 ? navigator.standalone ? gs.value = !1 : gs.value = !0 : window.matchMedia("(display-mode: standalone)").matches ? gs.value = !1 : gs.value = !0,
    window.addEventListener("beforeinstallprompt", t => {
        t.preventDefault(),
        Ms.value = t,
        ms.value.canIUse = !0
    }
    , {
        once: !0
    }),
    ms.value.download = function() {
        Ms.value.prompt().then(t => {
            t.outcome === "accepted" ? ms.value.canIUse = !1 : location.reload()
        }
        )
    }
    ,
    {
        PWA: ms,
        deferredPrompt: Ms,
        isShowDwa: gs
    }
}
  , Le = be({
    banner: [],
    winInfoList: [],
    rankList: [],
    gameTypeList: [],
    allGameList: void 0,
    slotsGame: [],
    videoGame: [],
    iosDialog: !1
})
  , ND = () => {
    const e = Re()
      , s = he()
      , t = s.getUserInfo
      , {start: n, end: a, flag: c} = it()
      , {localStore: i} = ct()
      , {t: l} = Pe();
    XT();
    const g = S(!0)
      , w = Mn("show-pwa-download", !0)
      , d = $( () => e.getIsShowLotteryDragon)
      , v = $( () => e.getIsCanAppDownload)
      , y = $( () => e.getIsShowAppDownloadIcon)
      , u = $( () => e.getProjectLogo)
      , _ = $( () => Le.banner)
      , I = $( () => Le.winInfoList)
      , m = $( () => e.getWebIco)
      , b = $( () => e.getWebSiteUrl)
      , A = $( () => e.getHeadLogo)
      , k = $( () => e.getIsOpenInvitedWheel)
      , P = $( () => !(t.allowNoRechargeGame === "1" || t.canDirectToGame));
    function N() {
        const h = pt();
        g.value = !(s.getUserInfo.unRead > 0),
        h.setReadState(g.value)
    }
    const z = async () => {
        const h = await G(lC());
        h && (Le.banner = h.data,
        Le.banner.length === 0 && Le.banner.push({
            bannerUrl: ss("home", "banner"),
            url: ""
        }))
    }
    ;
    async function M() {
        Ae.push({
            path: "/downloadCenter"
        })
    }
    async function E() {
        const [h,C] = await gT(pn());
        if (h)
            Fe({
                message: h.msg,
                wordBreak: "break-word"
            });
        else if (C) {
            Le.winInfoList = C.dataList || [];
            const H = C.penarikanList || [];
            H.length > 0 && (Le.rankList = H)
        }
    }
    const q = async () => {
        const h = await G(cn());
        h && (Le.gameTypeList = h.data || [])
    }
      , Y = async () => {
        const h = await G(gn())
          , C = ["slot", "video", "chess", "sport", "lottery"];
        if (h) {
            let H = {};
            for (const [x,Q] of Object.entries(h.data)) {
                let ne = x.toLocaleLowerCase();
                x !== "popular" && C.includes(ne) ? H[ne] = Q.filter(re => re.state === 1) : H[ne] = Q
            }
            Le.allGameList = H
        }
    }
      , X = async () => {
        const h = await G(rn());
        h && (Le.slotsGame = h.data)
    }
      , ce = async () => {
        const h = await G(ln());
        h && (Le.videoGame = h.data)
    }
      , R = h => {
        Ae.push({
            name: "AllGames",
            query: {
                type: h
            }
        })
    }
      , ie = (h, C) => {
        sessionStorage.setItem("gameType", JSON.stringify("chess")),
        sessionStorage.setItem("clickedItem", JSON.stringify(h)),
        sessionStorage.setItem("slotGamesList", JSON.stringify(C)),
        Ae.push({
            name: "AllOnlineGames"
        })
    }
      , Se = h => h ? h.hasOwnProperty("vendorCode") && h.vendorCode : !1
      , Be = h => {
        if (!h)
            return !1;
        const C = h.hasOwnProperty("gameCode");
        return h.gameCode ? C && h.gameCode : e.getIsOpenArLottery
    }
      , ge = async (h, C, H=!0) => {
        const x = B => {
            const U = B.split("_");
            return {
                gameCode: B,
                lottery: U[0]
            }
        }
          , Q = new URL(h)
          , ne = Q.searchParams
          , re = ne.get("Token")
          , f = ne.get("Skin")
          , D = ne.get("Lang");
        if (i.set("ar_token", re),
        i.set("ar_api", Gs("api", Q.origin)),
        i.set("ar_api_json", Gs("draw", Q.origin)),
        i.set("ar_lang", D || "en"),
        i.set("ar_skin", f),
        H) {
            const B = x(C.gameCode);
            await Ae.push({
                name: B.lottery,
                query: B
            })
        }
    }
      , L = async h => {
        var Q, ne;
        n( () => {
            Ve({
                title: "",
                message: l("gameLoadTimeOut")
            }).then( () => {
                Ae.push({
                    path: "/"
                })
            }
            )
        }
        );
        let C = {
            gameCode: h.gameCode || h.gameID,
            vendorCode: Se(h) ? h.vendorCode : Number(h.vendorId) || Number(h.slotsTypeID),
            returnUrl: location.origin
        };
        Se(h) ? C.deviceType = Ce(!1) : C.phonetype = Ce();
        const H = localStorage.getItem("lotteryLoginUrl");
        if (["ARLottery"].includes(C.vendorCode) && H) {
            !c.value && a(!0),
            s.notifyTransfer(),
            await ge(H, C);
            return
        }
        const x = await G(Ls({
            ...C
        }));
        if (x && !c.value) {
            if (!c.value && a(!0),
            ["ARLottery"].includes(C.vendorCode)) {
                await ge((Q = x == null ? void 0 : x.data) == null ? void 0 : Q.url, C);
                return
            }
            if (Xe())
                ws({
                    ...(x == null ? void 0 : x.data) || {},
                    title: h.slotsName || h.gameNameEn || ""
                });
            else if ($e())
                ts("game", {
                    ...(x == null ? void 0 : x.data) || {},
                    gameName: h.slotsName || h.gameNameEn || ""
                });
            else {
                if (Ye || ["Wickets9", "CMD", "IM", "SaBa", "ARLottery"].includes(C.vendorCode)) {
                    if (C.vendorCode == "PG")
                        return as(x == null ? void 0 : x.data);
                    const re = as(x == null ? void 0 : x.data, 1)
                      , f = setInterval( () => {
                        re != null && re.closed && (clearInterval(f),
                        s.notifyARGame(!0))
                    }
                    , 500);
                    return
                }
                return Ae.push({
                    name: "game",
                    query: {
                        url: ot((ne = x == null ? void 0 : x.data) == null ? void 0 : ne.url),
                        vendorCode: C.vendorCode
                    }
                })
            }
        } else {
            !c.value && a(!0);
            return
        }
    }
      , T = nt(L, 500)
      , F = async () => {
        if (e.getIsOpenArLottery) {
            const h = await G(Ls({
                vendorCode: "ARLottery",
                deviceType: Ce(!1)
            }));
            if (h && h.data) {
                await s.notifyTransfer(),
                await ge(h.data.url, {}, !1),
                await Ae.push({
                    name: "SaasChangLong"
                });
                return
            } else {
                ns(h);
                return
            }
        }
        Ae.push({
            name: "AllLotteryGames-ChangLong"
        })
    }
      , V = async h => {
        if (!s.token) {
            Ae.push({
                name: "login"
            });
            return
        }
        if (["ARLottery"].includes(h.vendorCode))
            return await T(h);
        Ve({
            title: l("tips"),
            message: l("tipsPlayGame"),
            cancelButtonText: l("cancel"),
            showCancelButton: !0
        }).then(async () => {
            await L(h)
        }
        )
    }
      , j = h => {
        W(h, V)
    }
      , W = async (h, C) => {
        if (!h.vendorCode)
            return C(h);
        if (P.value) {
            const H = await G(vC())
              , {data: {allowNoRechargeGame: x, userRechargeTimes: Q, lowestRechargeAmountToGame: ne, userRechargeAmount: re, canDirectToGame: f}} = H;
            if (x == "1" || f)
                return C(h);
            if (Number(ne) && Number(ne) > re)
                return Ve({
                    title: l("tips"),
                    message: `${l("gameT", [fs(ne)])}`,
                    showCancelButton: !0
                }).then( () => {
                    Ae.push({
                        name: "Recharge"
                    })
                }
                ).catch( () => {}
                );
            if (Number(ne) === 0 && Q === 0)
                return Ve({
                    title: l("tips"),
                    message: `${l("code1003")}
${l("rechargeNow")}`,
                    showCancelButton: !0
                }).then( () => {
                    Ae.push({
                        name: "Recharge"
                    })
                }
                ).catch( () => {
                    e.getIsOpenArLottery || (h.id || h.typeId) && C(h)
                }
                );
            C(h)
        } else
            C(h)
    }
    ;
    return {
        getBannerApi: z,
        onDown: M,
        getMessagesData: N,
        getWinInfoDetail: E,
        getGameType: q,
        getAllGame: Y,
        onItemClick: j,
        getSlotList: X,
        getVideonChildGame: ce,
        openThirdGame: V,
        isRead: g,
        getBanner: _,
        getWinInfo: I,
        showChanglong: d,
        isAppDownload: v,
        isAppDownloadIcon: y,
        showPWA: w,
        projectIcon: u,
        homeState: Le,
        gol2: R,
        gol2chess: ie,
        downloadIcon: m,
        webSiteUrl: b,
        isAlowGame: W,
        isSassLotteryGame: Be,
        goSassLotteryGame: ge,
        goChangLong: F,
        headLogo: A,
        isOpenInvitedWheel: k
    }
}
  , JT = "/assets/png/popular-044514e1.png"
  , YT = "/assets/png/lottery-c0a9176b.png"
  , QT = "/assets/png/video-c9dce622.png"
  , ZT = "/assets/png/slot-bf07af03.png"
  , eR = "/assets/png/sport-ac79bf87.png"
  , sR = "/assets/png/chess-9c4d1dff.png"
  , tR = "/assets/png/fish-a70df76d.png"
  , nR = "/assets/png/flash-eac62fa4.png"
  , J = be({
    gameList: [],
    categoryList: [],
    active: 0,
    allGame: null,
    loading: !1,
    electron: [],
    video: [],
    imgMap: new Map
})
  , aR = {
    1: ["popular"],
    2: ["sport", "chess", "video"],
    3: ["lottery"],
    4: ["slot"],
    5: ["flash", "fish"]
}
  , oR = Symbol("GAME_PROVIDER_KEY");
function VD() {
    const e = De()
      , {start: s, end: t, flag: n} = it()
      , {t: a} = Pe()
      , c = he()
      , {localStore: i} = ct()
      , l = Re()
      , g = {
        popular: {
            isShow: !0,
            key: "popular",
            title: a("hot"),
            image: JT,
            img: "",
            state: 1
        },
        video: {
            isShow: !0,
            key: "video",
            title: a("live"),
            image: QT,
            img: ""
        },
        slot: {
            isShow: !0,
            key: "slot",
            title: a("electronic"),
            image: ZT,
            img: ""
        },
        sport: {
            isShow: !0,
            key: "sport",
            title: a("sport"),
            image: eR,
            img: ""
        },
        chess: {
            isShow: !0,
            key: "chess",
            title: a("chess"),
            image: sR,
            img: ""
        },
        fish: {
            isShow: !0,
            key: "fish",
            title: a("fishing"),
            image: tR,
            img: ""
        },
        flash: {
            isShow: !0,
            key: "flash",
            title: a("miniGame"),
            image: nR,
            img: ""
        },
        lottery: {
            isShow: !0,
            key: "lottery",
            title: a("lottery"),
            image: YT,
            img: ""
        }
    }
      , w = $( () => J.categoryList.map(j => {
        var C;
        const W = (C = j.categoryCode) == null ? void 0 : C.toLowerCase()
          , h = g[W] || {};
        return Object.assign(h, {
            img: j.categoryImg
        })
    }
    ))
      , d = S(0)
      , v = $( () => w.value.map(j => j.key))
      , y = $( () => J.allGame)
      , u = $( () => J.electron)
      , _ = $( () => J.video)
      , I = $( () => w.value[d.value])
      , m = $( () => {
        var j;
        return ((j = w.value[d.value]) == null ? void 0 : j.key) || ""
    }
    )
      , b = $( () => {
        var j;
        return ((j = J.allGame) == null ? void 0 : j[m.value]) || []
    }
    )
      , A = $( () => J.allGame ? J.allGame ? J.allGame.popular ? J.allGame.popular[0] : [] : [] : [])
      , k = $( () => J.allGame ? J.allGame.popular ? J.allGame.popular[1] : [] : [])
      , P = $( () => J.allGame ? J.allGame.lottery || [] : [])
      , N = $( () => J.loading)
      , z = $( () => {
        let j = -1;
        for (const [W,h] of Object.entries(aR))
            h.includes(m.value) && (j = Number(W));
        return j
    }
    )
      , M = new Map([{
        value: 1,
        path: "WinGo",
        rule: "winGoRule"
    }, {
        value: 3,
        path: "5D",
        rule: "d5Rule"
    }, {
        value: 2,
        path: "K3",
        rule: "k3Rule"
    }, {
        value: 4,
        path: "WinTrx",
        rule: "trxRule"
    }, {
        value: 5,
        path: "XoSo",
        rule: "xosoRule"
    }, {
        value: 6,
        path: "XoSo",
        rule: "xosoRule"
    }, {
        value: 7,
        path: "Binguo",
        rule: ""
    }, {
        value: 8,
        path: "4D",
        rule: ""
    }, {
        value: 9,
        path: "MotoRace",
        rule: "MotoRaceRule"
    }].map(j => [j.value, j]))
      , E = j => {
        d.value = j
    }
      , q = j => {
        if (!j)
            return !1;
        const W = j.hasOwnProperty("gameCode");
        return j.gameCode ? W && j.gameCode : l.getIsOpenArLottery
    }
      , Y = async (j, W, h=!0) => {
        const C = re => {
            const f = re.split("_");
            return {
                gameCode: re,
                lottery: f[0]
            }
        }
          , H = new URL(j)
          , x = H.searchParams
          , Q = x.get("Token")
          , ne = x.get("Skin");
        if (i.set("ar_token", Q),
        i.set("ar_api", Gs("api", H.origin)),
        i.set("ar_api_json", Gs("draw", H.origin)),
        i.set("ar_skin", ne),
        h) {
            const re = C(W.gameCode);
            await e.push({
                name: re.lottery,
                query: re
            })
        }
    }
      , X = async j => {
        var H;
        s( () => {
            Ve({
                title: "",
                message: a("gameLoadTimeOut")
            }).then( () => {
                e.push({
                    path: "/"
                })
            }
            )
        }
        );
        let W = {
            gameCode: j.gameCode || j.gameID,
            vendorCode: j.hasOwnProperty("vendorCode") && j.vendorCode ? j.vendorCode : Number(j.vendorId) || Number(j.slotsTypeID),
            returnUrl: location.origin
        };
        j.hasOwnProperty("vendorCode") ? W.deviceType = Ce(!1) : W.phonetype = Ce();
        const h = localStorage.getItem("lotteryLoginUrl");
        if (["ARLottery"].includes(W.vendorCode) && h) {
            !n.value && t(!0),
            c.notifyTransfer(),
            await Y(h, W);
            return
        }
        const C = await G(Ls({
            ...W
        }));
        if (C && !n.value) {
            if (!n.value && t(!0),
            ["ARLottery"].includes(W.vendorCode)) {
                await Y(C.data.url, W);
                return
            }
            if (Xe())
                ws({
                    ...(C == null ? void 0 : C.data) || {},
                    title: j.gameNameEn
                });
            else if ($e())
                ts("game", {
                    ...(C == null ? void 0 : C.data) || {},
                    gameName: j.slotsName || j.gameNameEn || ""
                });
            else {
                if (Ye || ["Wickets9", "CMD", "IM", "SaBa", "ARLottery"].includes(W.vendorCode)) {
                    const x = as(C == null ? void 0 : C.data, 1)
                      , Q = setInterval( () => {
                        x != null && x.closed && (clearInterval(Q),
                        c.notifyARGame(!0))
                    }
                    , 500);
                    return
                }
                return e.push({
                    name: "game",
                    query: {
                        url: ot((H = C == null ? void 0 : C.data) == null ? void 0 : H.url),
                        vendorCode: W.vendorCode
                    }
                })
            }
        } else {
            !n.value && t(!0);
            return
        }
    }
      , ce = nt(X, 500)
      , R = async j => {
        if (!c.token) {
            e.push({
                name: "login"
            });
            return
        }
        if (["ARLottery"].includes(j.vendorCode))
            return await ce(j);
        Ve({
            title: a("tips"),
            message: a("tipsPlayGame"),
            cancelButtonText: a("cancel"),
            showCancelButton: !0
        }).then(async () => {
            await X(j)
        }
        )
    }
      , ie = async j => {
        const h = (J.allGame.lottery || []).find( ({id: H}) => H === (j.id || j.categoryId));
        if (q(h))
            return await R({
                ...h,
                vendorCode: "ARLottery"
            });
        const C = M.get(j.id || j.categoryId);
        if (!C)
            return console.error("no found id path");
        e.push({
            name: "AllLotteryGames-" + C.path,
            query: {
                typeId: j.typeId,
                id: j.id
            }
        })
    }
      , Se = async j => {
        var W;
        if (!c.token) {
            await e.push({
                name: "login"
            });
            return
        }
        if (["chess", "slot", "video"].includes(j.key || m.value)) {
            const h = ((W = J.allGame) == null ? void 0 : W[j.key || m.value]) || [];
            sessionStorage.setItem("slotGamesList", JSON.stringify(h)),
            sessionStorage.setItem("gameType", JSON.stringify(j.key || m.value)),
            sessionStorage.setItem("clickedItem", JSON.stringify(j)),
            await e.push({
                name: "AllOnlineGames",
                query: {
                    game: j.key || m.value,
                    vendorCode: j.slotsName
                }
            });
            return
        }
        await R(j)
    }
      , Be = j => {
        const W = ["slot", "video", "chess", "sport", "lottery"]
          , h = {};
        for (const [C,H] of Object.entries(j)) {
            const x = C.toLocaleLowerCase();
            if (W.includes(x))
                h[x] = H.filter(Q => Q.state === 1);
            else if (x === "popular") {
                const Q = j[x];
                h[x] = [Q.platformList, Q.clicksTopList],
                h.clicksVideoTopList = Q.clicksVideoTopList
            } else
                h[x] = H
        }
        return h
    }
      , ge = async (j=!0) => {
        const W = async () => ({
            data: null
        });
        if (J.loading)
            return;
        J.loading = !0;
        const [{data: h},{data: C}] = await Promise.all([j ? cn() : W(), gn()])
          , H = (h || []).filter(x => x.state === 1);
        J.imgMap = new Map(H.map(x => [x.categoryCode.toLowerCase(), x.categoryImg])),
        J.categoryList = H.filter(x => x.categoryCode !== "BigAward"),
        J.allGame = Be(C) || {},
        J.loading = !1,
        sessionStorage.setItem("gameData", JSON.stringify(C))
    }
      , L = async () => {
        const {result: j, data: W} = await rn();
        W && (J.electron = W)
    }
      , T = async () => {
        const {result: j, data: W} = await ln();
        W && (J.video = W)
    }
    ;
    return {
        store: J,
        gameList: w,
        currentGame: m,
        platformList: A,
        current: I,
        loading: N,
        active: d,
        gameType: z,
        currentList: b,
        gameTopList: k,
        allGame: y,
        lotteryType: P,
        gameListKey: v,
        setMenu: j => {
            J.gameList = j
        }
        ,
        goGame: R,
        onItemLottery: ie,
        onGame: Se,
        getGameList: ge,
        setActive: E,
        useProvid: () => {
            Wn(oR, {
                gameList: w,
                currentGame: m,
                current: I,
                platformList: A,
                loading: N,
                active: d,
                gameType: z,
                currentList: b,
                gameTopList: k,
                allGame: y,
                lotteryRoutes: M,
                videoList: _,
                electronList: u,
                onGame: Se,
                goGame: R,
                setActive: E,
                getElectronChildGame: L,
                getVideonChildGame: T,
                onItemLottery: ie
            })
        }
        ,
        getElectronChildGame: L,
        getVideonChildGame: T,
        goSassLotteryGame: Y
    }
}
be({
    list: [],
    timer: -1
});
const fe = be({
    list: [],
    topList: [],
    penarikanlist: [],
    timer: null,
    source: null
});
function FD() {
    const e = S(null)
      , s = $( () => fe.list)
      , t = $( () => fe.topList)
      , n = $( () => fe.penarikanlist || [])
      , a = $( () => fe.source)
      , c = v => {
        if (v.length >= 7)
            return v.substring(0, 3) + "***" + v.substring(v.length - 3);
        {
            const y = "***"
              , u = 7 - v.length
              , _ = "*".repeat(u);
            return v.substring(0, Math.ceil((7 - u) / 2)) + y + _ + v.substring(Math.ceil((7 - u) / 2))
        }
    }
      , i = async () => {
        const {data: v} = await pn();
        fe.list = v.dataList || [],
        fe.topList = v.penarikanList || [],
        fe.penarikanlist = v.penarikanList || []
    }
      , l = () => {
        fe.timer && (clearInterval(fe.timer),
        fe.timer = null)
    }
      , g = () => {
        fe.list.length && (l(),
        fe.timer = setInterval( () => {
            if (fe.list.length) {
                if (!e.value)
                    return l();
                fe.list.unshift(fe.list.pop())
            }
        }
        , 3e3))
    }
      , w = {
        k3list: "K3",
        fishslist: "Fish",
        smallgameslist: "SmallGame",
        trxwigolist: "TrxHash",
        wlist: "WinGo"
    };
    return {
        getWinner: i,
        startTimer: g,
        destroyTimer: l,
        desensitizeString: c,
        getImages: (v="") => {
            if (!v)
                return;
            const y = w[v];
            return y || v
        }
        ,
        penarikanlist: n,
        wrapperRef: e,
        winnerList: s,
        source: a,
        topList: t
    }
}
const jt = be({
    info: {
        utr: "",
        orderStatus: "",
        syncNotifyAddress: ""
    }
});
function HD() {
    const e = De();
    let s = {};
    const t = async c => {
        const i = await QC({
            token: c
        });
        i.code == "1" ? (jt.info = i.data,
        i.data.orderStatus === "2" ? e.replace("/Payment") : i.data.orderStatus === "3" && e.replace("/Fail")) : a()
    }
      , n = (c, i) => {
        let l = i == 0 ? 1e4 : 2e3;
        s[i] && clearInterval(s[i]),
        s[i] = setInterval( () => {
            i == 0 ? t(c) : eP({
                token: c
            })
        }
        , l)
    }
      , a = () => {
        Object.keys(s).forEach(c => {
            clearInterval(s[Number(c)])
        }
        ),
        Object.keys(s).forEach(c => delete s[Number(c)])
    }
    ;
    return tt( () => {
        a()
    }
    ),
    Nt( () => {}
    ),
    {
        orderStatus: t,
        startFun: n,
        stopFun: a,
        pageData: jt
    }
}
const xe = S();
function qD(e) {
    const {type: s} = e
      , t = async () => {
        window.__lc = window.__lc || {},
        window.__lc.license = 15861567,
        window.__lc.asyncInit = !0,
        function(v, y, u) {
            function _(m) {
                return I._h ? I._h.apply(null, m) : I._q.push(m)
            }
            var I = {
                _q: [],
                _h: null,
                _v: "2.0",
                on: function() {
                    _(["on", u.call(arguments)])
                },
                once: function() {
                    _(["once", u.call(arguments)])
                },
                off: function() {
                    _(["off", u.call(arguments)])
                },
                get: function() {
                    if (!I._h)
                        throw new Error("[LiveChatWidget] You can't use getters before load.");
                    return _(["get", u.call(arguments)])
                },
                call: function() {
                    _(["call", u.call(arguments)])
                },
                init: function() {
                    var m = y.createElement("script");
                    m.async = !0,
                    m.type = "text/javascript",
                    m.src = "https://cdn.livechatinc.com/tracking.js",
                    y.head.appendChild(m)
                }
            };
            !v.__lc.asyncInit && I.init(),
            v.LiveChatWidget = v.LiveChatWidget || I
        }(window, document, [].slice)
    }
      , n = (v, y) => {
        window.Tawk_API.toggle(),
        window.Tawk_API.setAttributes({
            userid: v,
            vv075mxt0i: y
        }, function(u) {})
    }
      , a = v => {
        window.Tawk_API.toggle(),
        window.Tawk_API.setAttributes({
            wizmpunyhe: v
        }, function(y) {})
    }
      , c = () => {
        document.getElementById("tawk-chatjs") || function() {
            var u;
            var v = document.createElement("script")
              , y = document.getElementsByTagName("script")[0];
            v.async = !0,
            v.src = "https://embed.tawk.to/6452138631ebfa0fe7fbb175/1hjs089gi",
            v.charset = "UTF-8",
            v.setAttribute("crossorigin", "*"),
            (u = y.parentNode) == null || u.insertBefore(v, y)
        }()
    }
    ;
    function i(v) {
        var y;
        switch (v.visibility) {
        case "maximized":
            break;
        case "minimized":
            (y = window.LiveChatWidget) == null || y.call("hide");
            break
        }
    }
    const l = bt(async (v, y) => {
        s === 1 ? (xe.value.call("set_session_variables", {
            userId: v,
            balance: y
        }),
        xe.value.call("maximize")) : s === 2 ? n(v, y) : s === 3 && d()
    }
    , 2e3)
      , g = bt(async v => {
        s === 1 ? (xe.value.call("set_session_variables", {
            routhPath: v
        }),
        xe.value.call("maximize")) : s === 2 ? a(v) : s === 3 && d()
    }
    , 2e3)
      , w = async () => {
        if (s !== 3)
            if (s == 1) {
                if (window.LiveChatWidget)
                    return;
                await t(),
                xe.value = window.LiveChatWidget,
                await xe.value.init(),
                xe.value.call("hide"),
                xe.value.on("visibility_changed", i)
            } else
                c()
    }
      , d = async () => {
        const v = await ZC({
            antCustomer: "2"
        });
        v.code === "1" && as(v.data.serviceSystemUrl, 0)
    }
    ;
    return {
        LiveChatWidget: xe,
        onReady: w,
        handleOpen: l,
        handleLoginOpen: g
    }
}
function KD() {
    const e = De();
    return {
        goMerchant: () => {
            e.push({
                name: "Recharge"
            })
        }
    }
}
function zD() {
    const e = st()
      , s = async c => {
        (await xC(c)).code
    }
    ;
    return {
        pageView: async (c, i=26001) => {
            const l = e.query.payTypeId
              , g = {
                buriedPageType: c === "recharge" ? 1 : 2,
                eventType: 1,
                clickType: 0,
                payTypeId: i
            };
            l && (g.payTypeId = Number(l)),
            await s(g)
        }
        ,
        pageLeve: async (c, i=26001) => {
            const l = e.query.payTypeId
              , g = {
                buriedPageType: c === "recharge" ? 1 : 2,
                eventType: 3,
                clickType: 0,
                payTypeId: i
            };
            l && (g.payTypeId = Number(l)),
            await s(g)
        }
        ,
        pageClick: async c => {
            const i = e.query.payTypeId
              , l = {
                buriedPageType: 2,
                eventType: 2,
                clickType: c,
                payTypeId: i ? Number(i) : 26001
            };
            await s(l)
        }
    }
}
const we = be({
    turntableInfo: void 0
})
  , pR = new Map
  , de = at()
  , Oe = at(null)
  , $t = S(!1)
  , Me = S(null)
  , Ws = S("00:00:00")
  , Us = S(!0)
  , Gt = S(!1)
  , XD = () => {
    const e = S(null)
      , s = [0, 1, 4, 3, 2, 7, 6, 5]
      , t = S(null)
      , n = at(null)
      , a = S(void 0)
      , c = S([])
      , i = S(!1)
      , l = S({
        page: 1,
        pageSize: 10,
        total: 0
    })
      , g = S([])
      , w = Re()
      , d = $( () => w.getDollarSign)
      , v = S(!1)
      , y = S(!1)
      , u = S(null)
      , _ = S()
      , I = S(!1)
      , m = S(!1)
      , b = S(!1)
      , A = S(!1)
      , k = S(new Set)
      , P = async () => {
        var se;
        const f = await G(XC())
          , {data: D, serviceNowTime: B} = f;
        we.turntableInfo = D,
        $t.value = !!D.isFirstInvitedWheel;
        const {noWinningRandomAmount: U} = D;
        if (U != null && U.length && ((se = we == null ? void 0 : we.turntableInfo) != null && se.diskDisplayAmount)) {
            let ae = we.turntableInfo.diskDisplayAmount.sort( (ee, te) => te - ee)
              , le = U[0] >= 1e4 ? U[0] / 1e3 + "K" : U[0]
              , je = U[1] >= 1e4 ? U[1] / 1e3 + "K" : U[1];
            ae.push(le + "-" + je),
            we.turntableInfo.diskDisplayAmount = ae
        }
        Us.value && (Us.value = !1),
        D.expiredTime && x(B)
    }
      , N = $( () => {
        var f;
        return ((f = we.turntableInfo) == null ? void 0 : f.invitedWheelTotalPrizeAmount) || 0
    }
    )
      , z = $( () => {
        var f;
        return ((f = we.turntableInfo) == null ? void 0 : f.userInvitedWheelAmount) || 0
    }
    )
      , M = $( () => {
        var f;
        return ((f = we.turntableInfo) == null ? void 0 : f.lastWheelRecordList) || []
    }
    )
      , E = $( () => N.value - z.value || 0)
      , q = $( () => {
        var D, B;
        if (!v.value)
            return 5;
        let f = (B = (D = we.turntableInfo) == null ? void 0 : D.diskDisplayAmount) == null ? void 0 : B.findIndex(U => U === a.value);
        return f !== -1 ? s.findIndex(U => U === f) : 5
    }
    )
      , Y = async () => {
        if (!e.value)
            return;
        const f = document.getElementById("turntable_canvas");
        f ? (Oe.value = new Un,
        await Oe.value.init({
            width: f.clientWidth,
            height: f.clientHeight,
            backgroundAlpha: 0,
            resolution: window.devicePixelRatio || 1.5,
            autoDensity: !0,
            antialias: !0,
            preference: "webgpu"
        }),
        e.value.appendChild(Oe.value.canvas),
        R()) : console.error("Canvas element not found")
    }
      , X = async f => new URL(Object.assign({
        "../views/turntable/assets/img/gold.png": Xn,
        "../views/turntable/assets/img/icon_left.png": Jn,
        "../views/turntable/assets/img/icon_right.png": Yn,
        "../views/turntable/assets/img/money.png": Qn,
        "../views/turntable/assets/img/money2.png": Zn,
        "../views/turntable/assets/img/rule_bg.png": ea,
        "../views/turntable/assets/img/select.png": sa,
        "../views/turntable/assets/img/start_btn.png": ta,
        "../views/turntable/assets/img/turn_bottom.png": na,
        "../views/turntable/assets/img/turntable.png": aa,
        "../views/turntable/assets/img/turntable_bg.png": oa
    })[`../views/turntable/assets/img/${f}.png`],self.location).href
      , ce = async () => {
        ye.reset();
        try {
            const f = [{
                alias: "bg",
                src: "turntable"
            }, {
                alias: "startBtn",
                src: "start_btn"
            }, {
                alias: "select",
                src: "select"
            }, {
                alias: "gold",
                src: "gold"
            }, {
                alias: "money2",
                src: "money2"
            }, {
                alias: "start",
                src: new URL("/assets/gif/start-863906a3.gif",self.location).href
            }, {
                alias: "animate",
                src: new URL("/assets/gif/animate-461ec0ce.gif",self.location).href
            }];
            await Promise.all(f.map(async U => {
                let se;
                U.alias !== "animate" && U.alias !== "start" ? se = await X(U.src) : se = U.src,
                ye.cache.has(U.alias) && ye.cache.remove(U.alias);
                const ae = await ye.load({
                    alias: U.alias,
                    src: se
                })
            }
            )),
            ye.cache.has("money") && ye.cache.remove("money");
            const D = await X("money")
              , B = await ye.load(D);
            ye.add({
                alias: "money",
                src: zn,
                data: {
                    texture: B
                }
            }),
            t.value = await ye.load("money")
        } catch (f) {
            throw console.error("Error loading assets:", f),
            f
        }
    }
      , R = async () => {
        if (!Oe.value)
            return;
        de.value = new Rs,
        de.value.sortableChildren = !0,
        de.value.zIndex = 1;
        const f = document.getElementsByClassName("turntable_all")[0];
        Oe.value.stage.scale.set((f == null ? void 0 : f.clientWidth) / 750),
        Oe.value.stage.addChild(de.value),
        n.value = new Rs,
        n.value.sortableChildren = !0,
        n.value.x = 330,
        n.value.y = 570,
        n.value.zIndex = 0;
        const D = new os(await ye.get("bg"));
        D.anchor.set(.5),
        D.width = 660,
        D.height = 660,
        n.value.addChild(D);
        const B = new os(await ye.get("select"));
        B.width = 278,
        B.height = 340,
        B.x = 330 - 139,
        B.y = 240,
        B.zIndex = 2,
        de.value.addChild(n.value, B),
        await Be(),
        await Se(),
        j(),
        W()
    }
      , ie = async () => {
        var D, B;
        await P();
        let f = (D = de.value) == null ? void 0 : D.getChildByName("awardText");
        f && ((B = de.value) == null || B.removeChild(f)),
        F()
    }
      , Se = async () => {
        var se, ae, le, je;
        if (!n.value || !t.value)
            return;
        const f = 174
          , D = 360 / 8
          , B = -90;
        for (let ee = 0; ee < 8; ee++) {
            const te = new os(t.value.textures[`money${s[ee] + 1}.png`]);
            te.anchor.set(.5),
            te.width = 74,
            te.height = 74;
            const me = (D * ee + B) * (Math.PI / 180);
            te.x = f * Math.cos(me),
            te.y = f * Math.sin(me),
            te.rotation = me + Math.PI / 2,
            n.value.addChild(te)
        }
        let U = (ae = (se = we.turntableInfo) == null ? void 0 : se.diskDisplayAmount) == null ? void 0 : ae.map(ee => (ee >= 1e4 && (ee = ee / 1e3 + "K"),
        ee));
        for (let ee = 0; ee < 8; ee++) {
            if (!((je = (le = we.turntableInfo) == null ? void 0 : le.diskDisplayAmount) != null && je.length))
                return;
            const te = new ps({
                text: d.value + (U && U[s[ee]] || "0"),
                style: {
                    fontSize: 30,
                    fill: "#F15542",
                    align: "center",
                    fontWeight: 600
                }
            });
            te.anchor.set(.5);
            const me = (D * ee + B) * (Math.PI / 180)
              , _e = 230;
            te.x = _e * Math.cos(me),
            te.y = _e * Math.sin(me),
            te.rotation = me + Math.PI / 2,
            n.value.addChild(te)
        }
    }
      , Be = async () => {
        var D;
        const f = new os(await ye.get("startBtn"));
        f.width = 211,
        f.height = 211,
        f.x = 330,
        f.y = 576,
        f.zIndex = 3,
        f.anchor.set(.5),
        (D = de.value) == null || D.addChild(f),
        F(),
        f.interactive = !0,
        f.on("pointerdown", ge)
    }
      , ge = async () => {
        var se, ae, le;
        if (b.value)
            return;
        if (!((se = we.turntableInfo) != null && se.userInvitedWheelCount)) {
            Gt.value = !0;
            return
        }
        if (E.value === 0) {
            y.value = !0;
            return
        }
        b.value = !0,
        await C();
        const f = Math.floor(Math.random() * 8);
        await h(q.value || f);
        const D = T()
          , [B,U] = L();
        (ae = de.value) == null || ae.removeChild(B, U),
        (le = de.value) == null || le.addChild(D),
        await V()
    }
      , L = () => {
        var se, ae, le, je;
        let f = (se = de.value) == null ? void 0 : se.getChildByLabel("centerBtn")
          , D = (ae = de.value) == null ? void 0 : ae.getChildByLabel("centerBtn2");
        f && D && ((le = de.value) == null || le.removeChild(f, D));
        const B = new ps({
            text: "X" + (((je = we.turntableInfo) == null ? void 0 : je.userInvitedWheelCount) || 0),
            style: {
                fontSize: 60,
                fill: "#F15542",
                align: "center",
                fontWeight: 700
            }
        })
          , U = new ps({
            text: "FREE SPIN",
            style: {
                fontSize: 16,
                fill: "#F15542",
                align: "center",
                fontWeight: 700
            }
        });
        return B.anchor.set(.5),
        B.x = 330,
        B.y = 576 - 20,
        B.zIndex = 4,
        U.anchor.set(.5),
        U.x = 330,
        U.y = 576 + 26,
        U.zIndex = 4,
        B.label = "centerBtn",
        U.label = "centerBtn2",
        [B, U]
    }
      , T = () => {
        const f = new ps({
            text: d.value + (a.value || 0),
            style: {
                fontSize: 32,
                fill: "#F15542",
                align: "center",
                fontWeight: 700
            }
        });
        return f.anchor.set(.5),
        f.x = 330,
        f.y = 576,
        f.zIndex = 4,
        f.label = "awardText",
        f
    }
      , F = () => {
        var B;
        const [f,D] = L();
        (B = de.value) == null || B.addChild(f, D)
    }
      , V = async () => {
        var ee;
        const f = new Rs({
            width: 414,
            height: 414,
            x: 330,
            y: 576,
            zIndex: 5,
            sortableChildren: !0
        })
          , D = new os(await ye.get("gold"));
        D.width = 414,
        D.height = 414,
        D.anchor.set(.5);
        const B = new ps({
            text: d.value + (a.value || 0),
            style: {
                fontSize: 34,
                fill: "#F15542",
                align: "center",
                fontWeight: 700
            }
        });
        B.anchor.set(.5),
        B.x = 5,
        B.y = 5,
        B.zIndex = 6,
        f.scale.set(0),
        f.addChild(B, D),
        (ee = de.value) == null || ee.addChild(f);
        const U = .6
          , se = Date.now();
        let ae;
        const le = () => {
            var Ge;
            const me = (Date.now() - se) / 1e3;
            if (me >= U) {
                f.scale.set(1),
                (Ge = u.value) == null || Ge.play(),
                je(),
                setTimeout( () => {
                    var Qe;
                    (Qe = _.value) == null || Qe.play()
                }
                , 500),
                setTimeout( () => {
                    ie(),
                    b.value = !1
                }
                , 1200);
                return
            }
            const _e = me / U;
            f.scale.set(_e),
            ae = requestAnimationFrame(le),
            k.value.add(ae)
        }
          , je = () => {
            const me = Date.now();
            let _e;
            const Ge = () => {
                var qe;
                const ks = (Date.now() - me) / 1e3;
                if (ks >= 1) {
                    f.alpha = 0,
                    (qe = de.value) == null || qe.removeChild(f),
                    _e && k.value.delete(_e);
                    return
                }
                f.alpha = 1 - ks / 1,
                _e = requestAnimationFrame(Ge),
                k.value.add(_e)
            }
            ;
            Ge()
        }
        ;
        le()
    }
      , j = () => {
        var D;
        const f = new vt(ye.get("animate"));
        f.width = 274,
        f.height = 643,
        f.x = 330 - 137,
        f.y = 40,
        f.zIndex = 7,
        f.loop = !1,
        f.stop(),
        u.value = f,
        (D = de.value) == null || D.addChild(f)
    }
      , W = () => {
        var D;
        const f = new vt(ye.get("start"));
        f.width = 600,
        f.height = 140,
        f.y = 10,
        f.x = 30,
        f.zIndex = 7,
        f.loop = !1,
        f.stop(),
        _.value = f,
        (D = de.value) == null || D.addChild(f)
    }
      , h = f => new Promise(D => {
        if (!n.value)
            return D();
        const B = Math.abs(f % 8)
          , U = 360 / 8
          , se = 0
          , ae = 360 - (B * U + se)
          , le = 5 * 360
          , ee = (n.value.rotation || 0) * 180 / Math.PI
          , te = le + ae - ee
          , me = Date.now()
          , _e = 2e3
          , Ge = 1500
          , Qe = () => {
            const qe = Date.now() - me;
            if (qe >= _e) {
                n.value && (n.value.rotation = ae * Math.PI / 180,
                n.value.rotation * 180 / Math.PI),
                D();
                return
            }
            let Ts;
            if (qe < Ge)
                Ts = qe / Ge * .85;
            else {
                const _n = (qe - Ge) / (_e - Ge);
                Ts = .85 + (1 - Math.pow(1 - _n, 2)) * .15
            }
            const An = Ts * te;
            n.value && (n.value.rotation = An * Math.PI / 180);
            const hn = requestAnimationFrame(Qe);
            k.value.add(hn)
        }
        ;
        Qe()
    }
    )
      , C = async () => {
        const {data: f, code: D} = await G(JC());
        D === 0 && (f.isFirstInvitedWheel ? (i.value = !0,
        c.value = f.firstInvitedWheelDatas || []) : (c.value = [],
        v.value = !!f.isWin),
        a.value = f.prizeAmount)
    }
      , H = async f => {
        let D = {
            pageNo: f || l.value.page,
            pageSize: l.value.pageSize
        };
        const {data: B, code: U} = await G(YC(D));
        U === 0 && (g.value = B.list || [],
        l.value.page = B.pageNo,
        l.value.total = B.totalCount)
    }
      , x = f => {
        Me.value && clearInterval(Me.value);
        const D = new Date(f).getTime()
          , B = Date.now()
          , U = D - B;
        Me.value = setInterval( () => {
            var je, ee;
            const se = new Date((je = we.turntableInfo) == null ? void 0 : je.expiredTime).getTime() || 0
              , ae = Date.now() + U
              , le = se - ae;
            if (le <= 0)
                Ws.value = "00:00:00",
                Me.value && (clearInterval(Me.value),
                Me.value = null),
                (ee = we.turntableInfo) != null && ee.isFirstInvitedWheel || P();
            else {
                const te = Math.floor(le / 1e3)
                  , me = Math.floor(te / 3600)
                  , _e = Math.floor(te % 3600 / 60)
                  , Ge = te % 60;
                Ws.value = `${String(me).padStart(2, "0")}:${String(_e).padStart(2, "0")}:${String(Ge).padStart(2, "0")}`
            }
        }
        , 1e3)
    }
      , Q = () => {
        Me.value && (clearInterval(Me.value),
        Me.value = null)
    }
      , ne = () => {
        k.value.forEach(f => {
            cancelAnimationFrame(f)
        }
        ),
        k.value.clear()
    }
    ;
    return {
        turntableCanvas: e,
        turntableApps: Oe,
        initTurntableCanvas: Y,
        loadAssets: ce,
        transformTurntable: h,
        getTurntableInfo: P,
        turntableState: we,
        getTurntableReward: C,
        firstReward: a,
        firstInvitedWheelDatas: c,
        isOpenAward: i,
        isEveryDayGift: $t,
        recordList: M,
        getPageListHistory: H,
        historyList: g,
        pageInfo: l,
        countDownTime: Ws,
        textureCacheTurntable: pR,
        withdrawDialog: y,
        withdrawNeedAmount: N,
        userInvitedWheelAmount: z,
        dollarSign: d,
        needAmount: E,
        cashOutDialog: I,
        ruleDialog: m,
        restBgcontainer: ie,
        hasWithdrawMethodDialog: A,
        loading: Us,
        clearCountDown: Q,
        removeAllAnimate: () => {
            var f, D;
            ne(),
            u.value && (u.value.destroy(),
            u.value = null),
            _.value && (_.value.destroy(),
            _.value = null),
            (f = Oe.value) == null || f.canvas.remove(),
            (D = Oe.value) == null || D.destroy(!0, {
                children: !0
            })
        }
        ,
        clearAllAnimations: ne,
        amountNoDialog: Gt
    }
}
;
function JD() {
    const {t: e} = Pe()
      , s = De()
      , {onTriggerGoogle: t} = en()
      , n = S(!1)
      , a = be({
        date: null,
        rewardType: -1,
        receiveState: 0,
        pageSize: 20,
        pageNo: 1
    })
      , c = S(null)
      , i = S([])
      , l = $( () => ({
        0: {
            label: e("actTip2"),
            value: 0
        },
        1: {
            label: e("claimed"),
            value: 1
        },
        2: {
            label: e("rewardExpired"),
            value: 2
        }
    }))
      , g = $( () => l.value ? Object.values(l.value) : [])
      , w = $( () => ({
        113: {
            label: e("code8113"),
            value: 113
        },
        115: {
            label: e("code8115"),
            value: 115
        },
        7: {
            label: e("code9007"),
            value: 7
        },
        10: {
            label: e("code9010"),
            value: 10
        },
        29: {
            label: e("code9029"),
            value: 29
        },
        118: {
            label: e("code8118"),
            value: 118
        },
        107: {
            label: e("code8107"),
            value: 107
        },
        122: {
            label: e("TeamPartner"),
            value: 122
        },
        13: {
            label: e("code9013"),
            value: 13
        },
        3: {
            label: e("code8003"),
            value: 3
        },
        102: {
            label: e("washingCode"),
            value: 102
        },
        30: {
            label: e("code8030"),
            value: 30
        },
        20: {
            label: e("invitationBonus"),
            value: 20
        },
        119: {
            label: e("code8119"),
            value: 119
        },
        103: {
            label: e("code9309"),
            value: 103
        },
        114: {
            label: e("code8114"),
            value: 114
        },
        126: {
            label: e("withdrawalRewards"),
            value: 126
        },
        116: {
            label: e("newMembersRewards"),
            value: 116
        },
        130: {
            label: e("code8130"),
            value: 130
        },
        117: {
            label: e("code8117"),
            value: 117
        },
        131: {
            label: e("code8131"),
            value: 131
        }
    }))
      , d = $( () => [{
        value: -1,
        label: e("all")
    }, ...Object.values(w.value)])
      , v = {
        3: "RedeemGift",
        7: "DailySignIn",
        10: "Recharge",
        102: "Laundry",
        114: "Championship",
        116: "MemberPackage",
        117: "MemberPackage",
        119: "Turntable",
        122: "TeamPartner",
        126: "Withdraw",
        130: "turntable",
        20: "InvitationBonus",
        118: "DailyTasks",
        107: "DailyTasks",
        30: "vip",
        29: "vip",
        103: "SuperJackpot"
    }
      , y = b => {
        a.receiveState = b.value,
        c.value.resetRefresh()
    }
      , u = async () => {
        if (!n.value)
            try {
                const {pageSize: b, receiveState: A, rewardType: k, ...P} = a
                  , N = await kt(Object.assign({}, P, {
                    receiveState: 3,
                    rewardType: k === -1 ? null : k,
                    pageSize: 20
                }));
                N.code === 0 && (i.value = N.data.list.map(z => ({
                    ...z,
                    loading: !1
                })))
            } catch {} finally {
                n.value = !1
            }
    }
      , _ = async (b={}) => {
        const {rewardType: A, ...k} = {
            ...a,
            ...b
        };
        return await kt({
            ...k,
            rewardType: A === -1 ? null : A
        })
    }
      , I = async b => {
        const A = {
            20: hR,
            29: Ct,
            30: Ct,
            118: sC,
            107: JR,
            103: nn,
            113: ZR,
            115: an,
            131: on
        }
          , k = {
            118: {
                dailyAwardId: b.receiveTaskId
            },
            107: {
                weeklyAwardId: b.receiveTaskId
            },
            29: {
                receiveId: b.receiveTaskId,
                vipLevel: b.vipLevel,
                rewardType: b.vipRewardType
            },
            30: {
                receiveId: b.receiveTaskId,
                vipLevel: b.vipLevel,
                rewardType: b.vipRewardType
            },
            20: {
                taskId: b.receiveTaskId
            },
            103: {
                orderId: b.receiveTaskId
            },
            113: {
                id: b.receiveTaskId
            },
            102: {
                codeType: -1
            }
        };
        if (!A[b.rewardType])
            return _s(`${b.rewardType} ${e("noSupportReceive")}`);
        if (!b.loading) {
            b.loading = !0;
            try {
                const P = A[b.rewardType]
                  , N = k[b.rewardType] || {};
                await G(P(N)) && (_s({
                    message: e("receiveSuccess"),
                    duration: 3e3
                }),
                c.value ? c.value.resetRefresh() : u())
            } finally {
                b.loading = !1
            }
        }
    }
    ;
    return {
        getRewards: u,
        onBonusPack: async b => {
            const A = [20, 118, 107, 30, 29, 103].includes(b.rewardType);
            if (A && b.recordType === 1 || v[b.rewardType] && !A)
                return t("reward_center_pages"),
                await s.push({
                    name: v[b.rewardType]
                });
            await I(b)
        }
        ,
        onTabState: y,
        getListRewards: _,
        mapParam: v,
        listRef: c,
        list: i,
        loading: n,
        query: a,
        rewardStates: g,
        rewardTypes: d,
        rewardTypeMap: w,
        rewardStateMap: l
    }
}
function cR() {
    async function e() {
        if (he().getToken)
            try {
                const t = await mR()
            } catch (t) {
                console.error("Error setting user language:", t)
            }
    }
    return {
        upUserLanguage: e
    }
}
const sn = He({
    id: "userStore",
    state: () => ({
        currentView: "SignIn",
        userForm: {
            number: "",
            password: "",
            verify: "",
            rePassword: "",
            invitation: "",
            packId: Ue.getPackId() || "",
            numberType: "",
            email: "",
            remember: !1,
            termAndPolicy: !1,
            vCode: "",
            logintype: "",
            rememberpwd: !1
        },
        rPwdForm: {
            number: "",
            numberType: "",
            email: "",
            verify: "",
            password: "",
            rePassword: ""
        },
        ARIP: "",
        numberTypes: [],
        countDown: 0,
        countEmailDown: 0,
        remember: !1,
        messageDetail: {},
        isShowSMS: !1,
        isRegisterState: !1,
        isAddBankCardSMS: !1,
        isOpenForgetPasswordSMSState: !1,
        isOpenForgetPasswordEmailState: !1,
        isOpenRegisterEmailState: !1,
        isOpenRegisterSMSState: !1,
        isOpenCaptcha: !1,
        isOpenRegisterCaptcha: !1,
        isOpenAddWithdrawEmailState: !1,
        isOpenAddWithdrawSMSState: !1,
        isOpenAddBankCardOpenEmail: !1,
        isOpenExternalAccount: !1,
        state: null,
        isOpenRegisterSMS: !1,
        isOpenRegisterEmail: !1
    }),
    getters: {
        getCurrentView: e => e.currentView,
        getUserForm: e => e.userForm,
        getNumberTypes: e => e.numberTypes,
        getMessagesDetail: e => e.messageDetail
    },
    actions: {
        setCurrentView(e) {
            this.currentView = e
        },
        setUserForm(e) {
            this.userForm = e
        },
        setNumberTypes(e) {
            this.numberTypes = e
        },
        setTermAndPolicy(e) {
            this.userForm.termAndPolicy = e
        },
        setNumberType(e) {
            this.userForm.numberType = e,
            this.rPwdForm.numberType = e
        },
        setCountDown(e) {
            this.countDown = e
        },
        setCountEmailDown(e) {
            this.countEmailDown = e
        },
        setMessageDetail(e) {
            this.messageDetail = e
        },
        loginout() {
            const e = he();
            localStorage.removeItem("lotteryLoginUrl"),
            localStorage.removeItem("tokenHeader"),
            localStorage.removeItem("refreshToken"),
            localStorage.removeItem("numberType"),
            localStorage.removeItem("number"),
            localStorage.removeItem("email"),
            sessionStorage.removeItem("pop_prompt"),
            sessionStorage.removeItem("pop_laundry"),
            localStorage.removeItem("isToLogin"),
            localStorage.removeItem("ar_token"),
            localStorage.removeItem("firstSave"),
            sessionStorage.removeItem("ar_pay"),
            e.setUserInfo({}),
            rs("userInfo", {})
        },
        remember(e=!1) {
            const s = this.userForm.logintype
              , t = `ar_account_${s}`
              , n = localStorage.getItem(t) || ""
              , a = w => {
                try {
                    return JSON.parse(w)
                } catch {
                    return null
                }
            }
            ;
            if (e) {
                const w = a(n);
                if (!w)
                    return;
                s === "email" ? this.userForm.email = w.email : (this.userForm.number = w.number,
                w.numberType && (this.userForm.numberType = w.numberType)),
                w.password && (this.userForm.rememberpwd = !0,
                this.userForm.password = w.password);
                return
            }
            const c = this.userForm.numberType
              , i = this.userForm.number
              , l = this.userForm.email
              , g = this.userForm.rememberpwd ? this.userForm.password : "";
            localStorage.setItem(t, JSON.stringify({
                email: l,
                numberType: c,
                number: i,
                password: g,
                logintype: s
            }))
        },
        async signIn(e) {
            let s = {};
            e.logintype == "email" ? s = {
                username: e.email,
                captchaId: e.captchaId,
                track: e.track,
                pwd: e.password,
                phonetype: Ce(),
                logintype: e.logintype,
                packId: Ue.getPackId() || "",
                deviceId: Ue.getDeviceId() || localStorage.getItem("arvId")
            } : s = {
                username: e.numberType + e.number,
                captchaId: e.captchaId,
                track: e.track,
                pwd: e.password,
                phonetype: Ce(),
                logintype: e.logintype,
                packId: Ue.getPackId() || "",
                deviceId: Ue.getDeviceId() || localStorage.getItem("arvId")
            };
            const t = localStorage.getItem("fireBaseToken") || null;
            t && (s.fireBaseToken = t),
            e.vCode && (s.vCode = e.vCode);
            const n = he()
              , {onTriggerLogin: a} = en();
            return new Promise(async (c, i) => {
                var w;
                const l = await bR(s, {
                    "AR-REAL-IP": this.ARIP
                });
                if (l.data && l.code === 0) {
                    const {token: d, tokenHeader: v, refreshToken: y, lotteryLoginUrl: u, parentUserId: _} = l.data;
                    n.setToken(d),
                    this.remember(),
                    localStorage.setItem("tokenHeader", v),
                    localStorage.setItem("refreshToken", y),
                    localStorage.setItem("numberType", e.numberType),
                    localStorage.setItem("number", e.number || ""),
                    localStorage.setItem("email", e.email || ""),
                    localStorage.setItem("isToLogin", "1"),
                    u && localStorage.setItem("lotteryLoginUrl", u);
                    const I = await this.getUserInfo({
                        signature: d
                    });
                    a((w = I == null ? void 0 : I.data) == null ? void 0 : w.userId),
                    bT("/home");
                    const {setLoading: m} = Is();
                    return m(!1),
                    yt("prediction", "userId", [_]),
                    yt("fcm", "login", d),
                    t && await yC({
                        fireBaseToken: t,
                        isSubscribe: !0
                    }),
                    c({})
                }
                [122, 33].includes(l.msgCode) || ns(l),
                i(l)
            }
            )
        },
        async getUserInfo(e) {
            var c, i;
            const s = he()
              , t = lR()
              , n = Re()
              , a = await G(vR(e));
            if (a) {
                if (s.setUserInfo(a == null ? void 0 : a.data),
                n.getIsSwitchSaasBalance || t.setAmount((c = a == null ? void 0 : a.data) == null ? void 0 : c.amount),
                t.setUSDTCanAdd(a == null ? void 0 : a.data),
                ((i = a == null ? void 0 : a.data) == null ? void 0 : i.useLanguage) != s.getLanguage) {
                    const {upUserLanguage: l} = cR();
                    l()
                }
                return a
            }
        },
        async register(e) {
            const s = Uk("advertisingId");
            s && Object.assign(e, {
                gpcadid: s
            });
            const t = localStorage.getItem("fireBaseToken") || null;
            t && (e.fireBaseToken = t),
            e.packId = Ue.getPackId() || "";
            const n = await G(fR(e, {
                "AR-REAL-IP": this.ARIP
            }));
            return new Promise(async (a, c) => {
                if (n) {
                    const {lotteryLoginUrl: i} = n.data || {};
                    i && localStorage.setItem("lotteryLoginUrl", i),
                    a(n)
                } else
                    c(n)
            }
            )
        },
        async getIp() {},
        sendCode() {
            this.countDown = 120;
            const e = setInterval( () => {
                this.countDown > 0 ? this.countDown-- : clearInterval(e),
                this.countDown === 0 && clearInterval(e)
            }
            , 1e3)
        },
        sendEmailCode() {
            this.countEmailDown = 300;
            const e = setInterval( () => {
                this.countEmailDown > 0 ? this.countEmailDown-- : clearInterval(e),
                this.countEmailDown === 0 && clearInterval(e)
            }
            , 1e3)
        },
        setRemember(e) {
            this.remember = e
        },
        setICode(e) {
            this.userForm.invitation = e
        },
        clearRpwdData() {
            this.rPwdForm = {
                number: "",
                numberType: Re().getAreacode.replace("+", "") || "",
                verify: "",
                password: "",
                rePassword: "",
                email: ""
            },
            this.userForm.number = ""
        },
        async getRegisterState() {
            const e = await G(tn());
            if (e) {
                const {registerSMSState: s, registerState: t, isOpenAddBankCardSMS: n, isOpenForgetPasswordSMS: a, isOpenForgetPasswordEmail: c, registerEmailState: i, registerMobileState: l, isOpenAddWithdrawEmail: g, isOpenAddWithdrawSMS: w, isOpenCaptcha: d="0", isOpenRegisterCaptcha: v="0", addBankCardOpenEmail: y, isOpenExternalAccount: u, isOpenRegisterSMS: _, isOpenRegisterEmail: I} = e.data;
                this.state = e.data;
                const m = (b="0") => b === "1";
                return this.isShowSMS = m(s),
                this.isRegisterState = m(t),
                this.isAddBankCardSMS = m(n),
                this.isOpenForgetPasswordSMSState = m(a),
                this.isOpenForgetPasswordEmailState = m(c),
                this.isOpenRegisterEmailState = m(i),
                this.isOpenRegisterSMSState = m(l),
                this.isOpenCaptcha = m(d),
                this.isOpenRegisterCaptcha = m(v),
                this.isOpenAddWithdrawEmailState = m(g),
                this.isOpenAddWithdrawSMSState = m(w),
                this.isOpenAddBankCardOpenEmail = m(y),
                this.isOpenExternalAccount = m(u),
                this.isOpenRegisterSMS = m(_),
                this.isOpenRegisterEmail = m(I),
                e
            }
            return {}
        }
    }
})
  , iR = [{
    name: "English",
    key: "en"
}, {
    name: "中文",
    key: "zh"
}, {
    name: "Tiếng Việt",
    key: "vi"
}, {
    name: "Bahasa Melayu",
    key: "my"
}, {
    name: "Bahasa Indonesia",
    key: "id"
}, {
    name: "ภาษาไทย",
    key: "th"
}, {
    name: "မြန်မာဘာသာ",
    key: "md"
}, {
    name: "Português",
    key: "bra"
}, {
    name: "हिंदी",
    key: "hd"
}, {
    name: "русский",
    key: "rus"
}, {
    name: "Filipino",
    key: "ph"
}, {
    name: "বাংলা",
    key: "bd"
}, {
    name: "اردو",
    key: "pk"
}, {
    name: "عربي",
    key: "ar"
}, {
    name: "தமிழ்",
    key: "ta"
}, {
    name: "తెలుగు",
    key: "te"
}]
  , he = He({
    id: "GlobalState",
    state: () => ({
        token: rs("token", ""),
        userInfo: rs("userInfo", {}),
        language: zt(),
        clientConfig: rs("clientConfig", {}),
        requsetData: "",
        isOpen: !0,
        apiUrl: localStorage.getItem("ApiUrl") || "",
        visibility: 1,
        deferredPrompt: null,
        dollarSign: "",
        projectLogo: "",
        headLogo: "",
        areaCode: null,
        messageList: null,
        notifyTime: null,
        isNotify: !1
    }),
    getters: {
        getToken: e => e.token,
        getLanguage: e => e.language,
        getLanguageIcon: e => Kt("languages", `${e.language}`),
        getLanguageName: e => {
            for (let s of iR)
                if (s.key == e.language)
                    return s.name
        }
        ,
        getUserInfo: e => e.userInfo,
        getClientConfig: e => e.clientConfig,
        getReqData: e => e.requsetData,
        getIsOpen: e => e.isOpen,
        getApiUrl: e => e.apiUrl,
        getDollarSign: e => e.dollarSign,
        getMessage: e => e.messageList,
        getIsNotify: e => e.isNotify
    },
    actions: {
        setToken(e) {
            this.token = e,
            localStorage.setItem("token", e),
            sessionStorage.removeItem("pop_prompt"),
            sessionStorage.removeItem("pop_laundry")
        },
        setUserInfo(e) {
            if (this.userInfo = e,
            e.groupDataShowAuth && e.groupDataShowAuth.length) {
                const s = {};
                e.groupDataShowAuth.forEach( (t, n) => {
                    s[t.id] = t.isShow
                }
                ),
                sessionStorage.setItem("permission", JSON.stringify(s))
            } else
                sessionStorage.removeItem("permission");
            rs("userInfo", e)
        },
        updateLanguage(e) {
            this.language = e,
            localStorage.setItem("language", e)
        },
        setPrompt(e) {
            this.deferredPrompt = e
        },
        SET_HTML_ATTR(e, s) {
            var t;
            (t = document.querySelector("link[rel='icon']")) == null || t.setAttribute("href", e),
            document.title = s
        },
        setReqData(e) {
            this.requsetData = e
        },
        setIsOpen(e) {
            this.isOpen = e
        },
        setvisibility(e=null) {
            typeof e == "number" ? this.visibility = e : this.visibility++
        },
        setMessage(e) {
            this.messageList = e
        },
        async notifyARGame(e=!1) {
            if (this.isNotify)
                return;
            if (e) {
                this.isNotify = !0,
                await G(Rt()),
                this.notifyTime = Date.now(),
                this.isNotify = !1;
                return
            }
            !this.token || Date.now() - (this.notifyTime || 0) <= 7 * 1e3 || (this.isNotify = !0,
            await G(Rt()),
            this.notifyTime = Date.now(),
            this.isNotify = !1)
        },
        async notifyTransfer() {
            if (this.token)
                try {
                    await mC()
                } catch {}
        }
    }
});
function gR() {
    let e = window.location.hash;
    e.includes("?") || (e = location.search);
    function s(t) {
        if (t) {
            const c = t.indexOf("?");
            c !== -1 && (t = t.substring(c + 1));
            var n = t.split("&")
              , a = {};
            return n.forEach(function(i) {
                var l = i.split("=");
                a[l[0]] = decodeURIComponent(l[1])
            }),
            a
        } else
            return {}
    }
    return s(e)
}
const O = gR()
  , rR = {
    "91club": () => {
        const e = {
            "356634288423": "749293993830590"
        }
          , s = O.invitationCode || sessionStorage.getItem("invitecode")
          , t = O.fb_dynamic_pixel || e[s] || "";
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t);
        const n = O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
        n && (function(a, c, i, l, g, w, d) {
            a.fbq || (g = a.fbq = function() {
                g.callMethod ? g.callMethod.apply(g, arguments) : g.queue.push(arguments)
            }
            ,
            a._fbq || (a._fbq = g),
            g.push = g,
            g.loaded = !0,
            g.version = "2.0",
            g.queue = [],
            w = c.createElement(i),
            w.async = !0,
            w.src = l,
            d = c.getElementsByTagName(i)[0],
            d.parentNode.insertBefore(w, d))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", n),
        fbq("track", "PageView"))
    }
    ,
    yjlottery: () => {
        (function(e, s, t, n, a, c, i) {
            e.fbq || (a = e.fbq = function() {
                a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
            }
            ,
            e._fbq || (e._fbq = a),
            a.push = a,
            a.loaded = !0,
            a.version = "2.0",
            a.queue = [],
            c = s.createElement(t),
            c.async = !0,
            c.src = n,
            i = s.getElementsByTagName(t)[0],
            i.parentNode.insertBefore(c, i))
        }
        )(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", "865606625239361"),
        fbq("track", "PageView")
    }
    ,
    "66lottery": () => {
        O.gtagId && localStorage.setItem("gtagId", O.gtagId),
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", O.fb_dynamic_pixel);
        const e = O.gtagId || localStorage.getItem("gtagId") || "AW-11352382371"
          , s = O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || "";
        (function() {
            window.dataLayer = window.dataLayer || [];
            function t() {
                dataLayer.push(arguments)
            }
            window.gtag = t;
            var n = document.createElement("script");
            n.src = "https://www.googletagmanager.com/gtag/js?id=" + e;
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(n, a),
            t("js", new Date),
            t("config", e)
        }
        )(),
        s && (function(t, n, a, c, i, l, g) {
            t.fbq || (i = t.fbq = function() {
                i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments)
            }
            ,
            t._fbq || (t._fbq = i),
            i.push = i,
            i.loaded = !0,
            i.version = "2.0",
            i.queue = [],
            l = n.createElement(a),
            l.async = !0,
            l.src = c,
            g = n.getElementsByTagName(a)[0],
            g.parentNode.insertBefore(l, g))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", s),
        fbq("track", "PageView"))
    }
    ,
    lottery7: () => {
        const e = {
            "18685100001": "749293993830590"
        }
          , s = O.invitationCode || sessionStorage.getItem("invitecode")
          , t = O.fb_dynamic_pixel || e[s] || "";
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t),
        O.invitationCode && sessionStorage.setItem("invitecode", O.invitationCode);
        const n = O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
        n && (function(a, c, i, l, g, w, d) {
            a.fbq || (g = a.fbq = function() {
                g.callMethod ? g.callMethod.apply(g, arguments) : g.queue.push(arguments)
            }
            ,
            a._fbq || (a._fbq = g),
            g.push = g,
            g.loaded = !0,
            g.version = "2.0",
            g.queue = [],
            w = c.createElement(i),
            w.async = !0,
            w.src = l,
            d = c.getElementsByTagName(i)[0],
            d.parentNode.insertBefore(w, d))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", n),
        fbq("track", "PageView"))
    }
    ,
    pakgames: () => {
        const e = {
            "28187260351": "1611788192994065"
        }
          , s = O.invitationCode || sessionStorage.getItem("invitecode")
          , t = O.fb_dynamic_pixel || e[s] || "";
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t),
        O.invitationCode && sessionStorage.setItem("invitecode", O.invitationCode);
        const n = O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
        n && (function(a, c, i, l, g, w, d) {
            a.fbq || (g = a.fbq = function() {
                g.callMethod ? g.callMethod.apply(g, arguments) : g.queue.push(arguments)
            }
            ,
            a._fbq || (a._fbq = g),
            g.push = g,
            g.loaded = !0,
            g.version = "2.0",
            g.queue = [],
            w = c.createElement(i),
            w.async = !0,
            w.src = l,
            d = c.getElementsByTagName(i)[0],
            d.parentNode.insertBefore(w, d))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", n),
        fbq("track", "PageView"))
    }
    ,
    fb999: () => {
        const e = {
            17837762: "1544377389683477"
        }
          , s = O.invitationCode || sessionStorage.getItem("invitecode")
          , t = O.fb_dynamic_pixel || e[s] || "";
        O.invitationCode && sessionStorage.setItem("invitecode", O.invitationCode),
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t);
        const n = O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
        n && (function(a, c, i, l, g, w, d) {
            a.fbq || (g = a.fbq = function() {
                g.callMethod ? g.callMethod.apply(g, arguments) : g.queue.push(arguments)
            }
            ,
            a._fbq || (a._fbq = g),
            g.push = g,
            g.loaded = !0,
            g.version = "2.0",
            g.queue = [],
            w = c.createElement(i),
            w.async = !0,
            w.src = l,
            d = c.getElementsByTagName(i)[0],
            d.parentNode.insertBefore(w, d))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", n),
        fbq("track", "PageView"))
    }
    ,
    ar006: () => {
        const e = {
            "8281440027": "946249607200818",
            "38316220667": "2061590324241394",
            "42318414899": "893342322790796"
        }
          , s = O.invitationCode || sessionStorage.getItem("invitecode")
          , t = O.fb_dynamic_pixel || e[s] || "";
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t),
        O.invitationCode && sessionStorage.setItem("invitecode", O.invitationCode);
        const n = O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
        n && (function(a, c, i, l, g, w, d) {
            a.fbq || (g = a.fbq = function() {
                g.callMethod ? g.callMethod.apply(g, arguments) : g.queue.push(arguments)
            }
            ,
            a._fbq || (a._fbq = g),
            g.push = g,
            g.loaded = !0,
            g.version = "2.0",
            g.queue = [],
            w = c.createElement(i),
            w.async = !0,
            w.src = l,
            d = c.getElementsByTagName(i)[0],
            d.parentNode.insertBefore(w, d))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", n),
        fbq("track", "PageView"))
    }
    ,
    tc: () => {
        const e = {
            "782836509244": "726754589391410"
        }
          , s = O.invitationCode || sessionStorage.getItem("invitecode")
          , t = O.fb_dynamic_pixel || e[s] || "";
        O.invitationCode && sessionStorage.setItem("invitecode", O.invitationCode),
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t);
        const n = O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
        n && (function(a, c, i, l, g, w, d) {
            a.fbq || (g = a.fbq = function() {
                g.callMethod ? g.callMethod.apply(g, arguments) : g.queue.push(arguments)
            }
            ,
            a._fbq || (a._fbq = g),
            g.push = g,
            g.loaded = !0,
            g.version = "2.0",
            g.queue = [],
            w = c.createElement(i),
            w.async = !0,
            w.src = l,
            d = c.getElementsByTagName(i)[0],
            d.parentNode.insertBefore(w, d))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", n),
        fbq("track", "PageView"))
    }
    ,
    lottery82: () => {
        const e = document.createElement("meta");
        e.name = "description",
        e.content = "82Lottery - is an online lottery platform in India that allows users in exciting lottery games and have a chance to big prizes and be lucky winners at 82Lottery!",
        document.head.appendChild(e);
        const s = document.createElement("meta");
        s.name = "keywords",
        s.content = "82Lottery, 82bet, play india lottery",
        document.head.appendChild(s)
    }
    ,
    fb: (e={}) => {
        const s = O.invitationCode || sessionStorage.getItem("invitecode")
          , t = O.fb_dynamic_pixel || e[s] || "";
        O.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", t),
        O.invitationCode && sessionStorage.setItem("invitecode", O.invitationCode);
        const n = O.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || e[s];
        n && (function(a, c, i, l, g, w, d) {
            a.fbq || (g = a.fbq = function() {
                g.callMethod ? g.callMethod.apply(g, arguments) : g.queue.push(arguments)
            }
            ,
            a._fbq || (a._fbq = g),
            g.push = g,
            g.loaded = !0,
            g.version = "2.0",
            g.queue = [],
            w = c.createElement(i),
            w.async = !0,
            w.src = l,
            d = c.getElementsByTagName(i)[0],
            d.parentNode.insertBefore(w, d))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", n),
        fbq("track", "PageView"))
    }
    ,
    fbNew: (e=[]) => {
        const s = {};
        e.forEach(g => {
            s[g.domainUrl] = g.pixelId
        }
        );
        var t = window.location.origin + "/" + window.location.hash
          , n = window.location.origin
          , a = window.location.host;
        let c = sessionStorage.getItem("pixel") || sessionStorage.getItem("fb_dynamic_pixel");
        const i = O.fb_dynamic_pixel || "";
        O.invitationCode && sessionStorage.setItem("invitecode", O.invitationCode),
        i && sessionStorage.setItem("fb_dynamic_pixel", O.fb_dynamic_pixel);
        let l = s[t] || s[n] || s[a] || c || i;
        l && (function(g, w, d, v, y, u, _) {
            g.fbq || (y = g.fbq = function() {
                y.callMethod ? y.callMethod.apply(y, arguments) : y.queue.push(arguments)
            }
            ,
            g._fbq || (g._fbq = y),
            y.push = y,
            y.loaded = !0,
            y.version = "2.0",
            y.queue = [],
            u = w.createElement(d),
            u.async = !0,
            u.src = v,
            _ = w.getElementsByTagName(d)[0],
            _.parentNode.insertBefore(u, _))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"),
        fbq("init", l),
        fbq("track", "PageView"),
        sessionStorage.setItem("pixel", l))
    }
}
  , Re = He({
    id: "SettingStore",
    persist: !0,
    state: () => ({
        areaPhoneLenList: [],
        areacode: "",
        headLogo: {}.VITE_BASE_HEADLOGO,
        isShowAppDownloadUp: !1,
        isShowAppDownloadDown: !1,
        isShowLotteryDragon: !1,
        isShowDownAppBonusAmountSwitch: !1,
        jackportMaxReswadAmount: 0,
        projectName: "ar031",
        projectLogo: {}.VITE_BASE_PROJECTLOGO,
        languages: "en",
        webIco: "",
        dollarSign: {}.VITE_BASE_DOLLARSIGN,
        upperOrLower: {}.VITE_BASE_UPPERORLOWER,
        defaultCurrentLanguage: "",
        isSplitLocalEWallet: !1,
        isOpenLoginChangeLanguage: "0",
        ossUrl: "",
        rewardValidityTime: 0,
        winRate: {},
        isShowHotGameWinOdds: !1,
        isShowAppHandCodeWashingSwitch: !1,
        bigTurntableLink: "",
        bigTurntableImgUrl: "",
        telegramExternalLink: "",
        telegramImgUrl: "",
        lotteryDragonIcon: "",
        isOpenTurntable: !1,
        isPartnerReward: !1,
        isSelfCustomerService: !1,
        webSiteUrl: "",
        isOpenAdjustEvent: !1,
        isOpenRegisterPhoneFirstZeroSwitch: {}.VITE_SHOWREGISTERTIP || !1,
        firebaseConfig: {},
        isOpenArLottery: !1,
        isSwitchSaasBalance: !1,
        arUpiInputUtrSwitch: !1,
        isOpenInvitedWheel: !1,
        invitedWheelImgUrl: "",
        invitedWheelTotalPrizeAmount: 0,
        isOpenDownAppRewardSwitch: !1,
        isShowRewardCenter: !1,
        downAppBonusAmount: 0,
        bonusCenterImgUrl: "",
        isOpenBrowserConsoleDebug: !0,
        needKycValidIsOpen: !1,
        needFastKycValidIsOpen: !1
    }),
    getters: {
        getArUpiInputUtrSwitch: e => e.arUpiInputUtrSwitch,
        getIsCanAppDownload: e => e.isShowAppDownloadUp,
        getIsShowAppDownloadIcon: e => e.isShowAppDownloadDown,
        getIsShowLotteryDragon: e => e.isShowLotteryDragon,
        getJackportMaxReswadAmount: e => e.jackportMaxReswadAmount,
        getProjectLogo: e => e.projectLogo,
        getHeadLogo: e => e.headLogo,
        getDollarSign: e => e.dollarSign,
        getAreaPhoneLenList: e => e.areaPhoneLenList,
        getAreacode: e => e.areacode,
        getLanguage: e => e.languages,
        getWebIco: e => e.webIco,
        getProjectName: e => e.projectName,
        getUpperOrLower: e => e.upperOrLower,
        getDL: e => e.defaultCurrentLanguage,
        getIsSplitLocalEWallet: e => e.isSplitLocalEWallet,
        getLoginChangeLanguage: e => e.isOpenLoginChangeLanguage,
        getOSSUrl: e => e.ossUrl,
        getRewardValidityTime: e => e.rewardValidityTime,
        getWinRate: e => e.winRate,
        getIsShowAppHandCodeWashingSwitch: e => e.isShowAppHandCodeWashingSwitch,
        getBigTurntableLink: e => e.bigTurntableLink,
        getTelegramExternalLink: e => e.telegramExternalLink,
        getTelegramImgUrl: e => e.telegramImgUrl,
        getBigTurntableImgUrl: e => e.bigTurntableImgUrl,
        getLotteryDragonIcon: e => e.lotteryDragonIcon,
        getOpenTurntable: e => e.isOpenTurntable,
        getIsPartnerReward: e => e.isPartnerReward,
        getIsSelfCustomerService: e => e.isSelfCustomerService,
        getWebSiteUrl: e => e.webSiteUrl,
        getFirebaseConfig: e => e.firebaseConfig,
        getIsOpenArLottery: e => e.isOpenArLottery,
        getIsSwitchSaasBalance: e => e.isSwitchSaasBalance,
        getIsOpenInvitedWheel: e => e.isOpenInvitedWheel,
        getIsOpenDownAppRewardSwitch: e => e.isOpenDownAppRewardSwitch,
        getInvitedWheelImgUrl: e => e.invitedWheelImgUrl,
        getInvitedWheelTotalPrizeAmount: e => e.invitedWheelTotalPrizeAmount,
        getIsShowRewardCenter: e => e.isShowRewardCenter,
        getBonusCenterImgUrl: e => e.bonusCenterImgUrl,
        getIsShowDownAppBonusAmountSwitch: e => e.isShowDownAppBonusAmountSwitch,
        getDownAppBonusAmount: e => e.downAppBonusAmount,
        getNeedKycValid: e => e.needKycValidIsOpen,
        getIsOpenBrowserConsoleDebug: e => e.isOpenBrowserConsoleDebug,
        getNeedFastKycValidIsOpen: e => e.needFastKycValidIsOpen
    },
    actions: {
        async getHomeSetting() {
            var s, t;
            const e = await G(uC());
            if (e && e.data) {
                const {areaPhoneLenList: n, headLogo: a, isShowAppDownloadUp: c, isShowAppDownloadDown: i, isShowLotteryDragon: l, jackportMaxReswadAmount: g, projectName: w, projectLogo: d, languages: v, webIco: y, dollarSign: u, upperOrLower: _, defaultCurrentLanguage: I, isSplitLocalEWallet: m, isOpenLoginChangeLanguage: b, electronicWinRateExternalLink: A, electronicWinRateImgUrl: k, isShowElectronicWinRateExternalLink: P, isShowHotGameWinOdds: N, isShowAppHandCodeWashingSwitch: z, rewardValidityTime: M, ossUrl: E, bigTurntableLink: q, bigTurntableImgUrl: Y, lotteryDragonIcon: X, telegramExternalLink: ce, telegramImgUrl: R, isOpenTurntable: ie, isPartnerReward: Se, eventRegionConfigList: Be, isSelfCustomerService: ge, webSiteUrl: L, firstDepositRewardCodeAmount: T, isOpenRegisterPhoneFirstZeroSwitch: F, isShowDownAppBonusAmountSwitch: V, isOpenAdjustEvent: j, firebaseConfig: W, isOpenArLottery: h, isSwitchSaasBalance: C, arUpiInputUtrSwitch: H, isOpenInvitedWheel: x, isOpenDownAppRewardSwitch: Q, invitedWheelImgUrl: ne, invitedWheelTotalPrizeAmount: re, isShowRewardCenter: f, downAppBonusAmount: D, bonusCenterImgUrl: B, isOpenBrowserConsoleDebug: U, needKycValidIsOpen: se, needFastKycValidIsOpen: ae} = e.data;
                pP(w),
                this.ossUrl = E,
                this.rewardValidityTime = M,
                this.areaPhoneLenList = n,
                this.headLogo = a,
                this.isShowAppDownloadUp = c,
                this.isShowAppDownloadDown = i,
                this.isShowLotteryDragon = l,
                this.jackportMaxReswadAmount = g,
                this.projectLogo = d,
                this.projectName = w,
                this.languages = v,
                this.webIco = y,
                this.dollarSign = u,
                this.upperOrLower = _,
                this.areacode = ((s = n[0]) == null ? void 0 : s.area) || "",
                this.isSplitLocalEWallet = m,
                this.isOpenLoginChangeLanguage = b,
                this.isShowHotGameWinOdds = N || !1,
                this.isShowDownAppBonusAmountSwitch = V || !1,
                this.isShowAppHandCodeWashingSwitch = z,
                this.winRate = {
                    electronicWinRateExternalLink: A,
                    electronicWinRateImgUrl: k,
                    isShowElectronicWinRateExternalLink: P
                },
                this.bigTurntableLink = q,
                this.bigTurntableImgUrl = Y,
                this.lotteryDragonIcon = X,
                this.telegramExternalLink = ce,
                this.telegramImgUrl = R,
                this.isOpenTurntable = ie,
                this.isPartnerReward = Se,
                this.isSelfCustomerService = ge,
                this.webSiteUrl = L,
                this.isOpenRegisterPhoneFirstZeroSwitch = F,
                this.isOpenAdjustEvent = j,
                this.firebaseConfig = W,
                this.isOpenArLottery = h || !1,
                this.isSwitchSaasBalance = C || !1,
                this.arUpiInputUtrSwitch = H || !1,
                this.isOpenInvitedWheel = x || !1,
                this.isOpenDownAppRewardSwitch = Q || !1,
                this.invitedWheelImgUrl = ne || "",
                this.bonusCenterImgUrl = B || "",
                this.invitedWheelTotalPrizeAmount = re || 0,
                this.isShowRewardCenter = f || !1,
                this.isOpenBrowserConsoleDebug = U,
                this.downAppBonusAmount = D || 0,
                this.needKycValidIsOpen = se || !1,
                this.needFastKycValidIsOpen = ae || !1,
                sessionStorage.setItem("dollarSign", u),
                sessionStorage.setItem("fa1", T),
                sessionStorage.setItem("areaPhoneLenList", JSON.stringify(n)),
                localStorage.getItem("language") || (this.defaultCurrentLanguage = I.replace("tha", "th"),
                lT(this.defaultCurrentLanguage)),
                (t = document.querySelector("link[rel='icon']")) == null || t.setAttribute("href", y),
                document.title = w,
                rR.fbNew(Be || [])
            }
        }
    }
})
  , {t: Ns} = Te.global;
let Vs = !1;
const lR = He({
    id: "walletStore",
    state: () => ({
        bankName: {},
        withdrawalslist: [],
        bankList: [],
        withdrawals: {
            amount: 0,
            pwd: "",
            type: 0,
            bid: 0
        },
        payTabList: [],
        amount: 0,
        timestampLast: 0,
        timestamp: 0,
        allwallets: "",
        isAllowUserAddUSDT: !0
    }),
    getters: {
        getBankName: e => e.bankName,
        getWithdrawalslist: e => e.withdrawalslist,
        getBankList: e => e.bankList,
        getWithdrawal: e => e.withdrawals,
        getPayTabList: e => e.payTabList,
        getAmount: e => e.amount,
        getTimestampLast: e => e.timestampLast,
        getAllwallets: e => e.allwallets,
        getADDUSTD: e => e.isAllowUserAddUSDT
    },
    actions: {
        setBankName(e) {
            this.bankName = e
        },
        setWithdrawalslist(e) {
            this.withdrawalslist = e
        },
        setBankList(e) {
            this.bankList = e
        },
        setWithdrawal(e) {
            this.withdrawals = e
        },
        setPayTabList(e) {
            this.payTabList = e
        },
        setAmount(e) {
            this.amount = e
        },
        setUSDTCanAdd(e) {
            this.isAllowUserAddUSDT = (e == null ? void 0 : e.isAllowUserAddUSDT) === void 0 ? !0 : (e == null ? void 0 : e.isAllowUserAddUSDT) === "1"
        },
        setTimestampLast(e) {
            this.timestampLast = e
        },
        setAllwallets(e) {
            this.allwallets = e
        },
        async GetARGameAndPlatWallets(e) {
            const s = new Date().getTime() / 1e3;
            if (s - this.timestamp <= 4)
                return;
            const t = await G(TC());
            if (t) {
                this.timestamp = s,
                this.allwallets = t == null ? void 0 : t.data;
                let a = (t == null ? void 0 : t.data.thidGameBalanceList) || []
                  , c = 0
                  , i = 0;
                if (a)
                    for (var n of a)
                        n.vendorCode === "Lottery" ? c += n.balance : i += n.balance;
                this.amount = c + i,
                e && ue(Ns("refreshSuccess"))
            }
        },
        async getAllwalletsBalance(e, s=!1) {
            const t = he()
              , n = new Date().getTime() / 1e3;
            if (n - this.timestampLast <= 6 || Vs)
                return;
            Vs = !0,
            t.getIsNotify && await _T(1400);
            const a = await G(kC(s));
            if (Vs = !1,
            a) {
                this.timestampLast = n,
                this.allwallets = a == null ? void 0 : a.data;
                let i = (a == null ? void 0 : a.data.thidGameBalanceList) || []
                  , l = 0
                  , g = 0;
                if (i)
                    for (var c of i)
                        c.vendorCode === "Lottery" ? l += c.balance : g += c.balance;
                this.amount = l + g,
                e && ue(Ns("refreshSuccess"))
            }
        },
        async resetData(e, s) {
            const t = await G(s ? IC() : LC());
            if (t) {
                if (this.amount = t == null ? void 0 : t.data.amount,
                e)
                    return;
                ue(Ns("refreshSuccess"))
            }
        },
        async getPayTypeName() {
            const e = await G(RC());
            if (e) {
                if (Re().getIsSplitLocalEWallet) {
                    let s = e.data.typelist.map(t => (t.payID === 18 && t.paySysName === "KBZPay" && (t.payNameUrl = ss("wallet/detail", "kbz_icon"),
                    t.payNameUrl2 = ss("wallet/detail", "kbz_icon")),
                    t.payID === 18 && t.paySysName === "WavePay" && (t.payNameUrl = ss("wallet/detail", "wave_icon"),
                    t.payNameUrl2 = ss("wallet/detail", "wave_icon")),
                    t));
                    this.setPayTabList(s)
                }
                this.setPayTabList(e.data.typelist)
            }
        }
    },
    persist: !0
})
  , YD = He({
    id: "lorreryStore",
    state: () => ({
        wingo: [{
            typeID: 30,
            typeName: "Win Go<br />30 second",
            tabName: "WinGo 30 Second",
            intervalM: .5,
            scope: "1|10|100|1000",
            sort: 1,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 1,
            typeName: "Win Go<br />1Min",
            tabName: "WinGo 1Min",
            intervalM: 1,
            scope: "1|10|100|1000",
            sort: 4,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100",
            show: !0
        }, {
            typeID: 2,
            typeName: "Win Go<br />3Min",
            tabName: "WinGo 3Min",
            intervalM: 3,
            scope: "1|10|100|1000",
            sort: 3,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 3,
            typeName: "Win Go<br />5Min",
            tabName: "WinGo 5Min",
            intervalM: 5,
            scope: "1|10|100|1000",
            sort: 2,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 4,
            typeName: "Win Go<br />10Min",
            tabName: "WinGo 10Min",
            intervalM: 10,
            scope: "1|10|100|1000",
            sort: 1,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }],
        fiveD: [{
            typeID: 5,
            typeName: "5D Lotre<br />1Min",
            tabName: "5D 1Min",
            intervalM: 1,
            scope: "1|10|100|1000",
            sort: 4,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100",
            show: !0
        }, {
            typeID: 6,
            typeName: "5D Lotre<br />3Min",
            tabName: "5D 3Min",
            intervalM: 3,
            scope: "1|10|100|1000",
            sort: 3,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 7,
            typeName: "5D Lotre<br />5Min",
            tabName: "5D 5Min",
            intervalM: 5,
            scope: "1|10|100|1000",
            sort: 2,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 8,
            typeName: "5D Lotre<br />10Min",
            tabName: "5D 10Min",
            intervalM: 10,
            scope: "1|10|100|1000",
            sort: 1,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }],
        k3: [{
            typeID: 9,
            typeName: "K3 Lotre<br />1Min",
            tabName: "K3 1Min",
            intervalM: 1,
            scope: "1|10|100|1000",
            sort: 4,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 10,
            typeName: "K3 Lotre<br />3Min",
            tabName: "K3 3Min",
            intervalM: 3,
            scope: "1|10|100|1000",
            sort: 3,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 11,
            typeName: "K3 Lotre<br />5Min",
            tabName: "K3 5Min",
            intervalM: 5,
            scope: "1|10|100|1000",
            sort: 2,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 12,
            typeName: "K3 Lotre<br />10Min",
            tabName: "K3 10Min",
            intervalM: 10,
            scope: "1|10|100|1000",
            sort: 1,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }],
        trx: [{
            typeID: 13,
            typeName: "Trx Win Go<br />1Min",
            tabName: "Trx 1Min",
            intervalM: 1,
            scope: "1|10|100|1000",
            sort: 4,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 14,
            typeName: "Trx Win Go<br />3Min",
            tabName: "Trx 3Min",
            intervalM: 3,
            scope: "1|10|100|1000",
            sort: 3,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 15,
            typeName: "Trx Win Go<br />5Min",
            tabName: "Trx 5Min",
            intervalM: 5,
            scope: "1|10|100|1000",
            sort: 2,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }, {
            typeID: 16,
            typeName: "Trx Win Go<br />10Min",
            tabName: "Trx 10Min",
            intervalM: 10,
            scope: "1|10|100|1000",
            sort: 1,
            gamePresentation: null,
            betMultiple: "1|5|10|20|50|100"
        }],
        winGoLock: !1,
        TrxLock: !1,
        k3Lock: !1,
        fiveDLock: !1,
        winType: JSON.parse("[30,1,2,3]") || [1, 2, 3, 4]
    }),
    getters: {
        getWingo: e => e.wingo,
        get5D: e => e.fiveD,
        getK3: e => e.k3,
        getTrx: e => e.trx
    },
    actions: {
        async getWinGoData() {
            if (this.winGoLock)
                return;
            Ne({
                overlay: !0,
                type: "loading"
            });
            const e = await G(UC())
              , s = {
                1: "Win Go<br />1Min",
                2: "Win Go<br />3Min",
                3: "Win Go<br />5Min",
                4: "Win Go<br />10Min",
                30: "Win Go<br />30s"
            };
            e && e.data && (this.wingo = e.data.map(t => (t.typeName = s[t.typeID],
            t.gamePresentation = null,
            t)),
            this.winGoLock = !0),
            es()
        },
        async getTrxData() {
            if (this.TrxLock)
                return;
            Ne({
                overlay: !0,
                type: "loading"
            });
            const e = await G(VC())
              , s = {
                13: "Trx Win Go<br />1Min",
                14: "Trx Win Go<br />3Min",
                15: "Trx Win Go<br />5Min",
                16: "Trx Win Go<br />10Min"
            };
            e && e.data && (this.trx = e.data.map(t => (t.typeName = s[t.typeID],
            t.gamePresentation = null,
            t)),
            this.TrxLock = !0),
            es()
        },
        async getK3Data() {
            if (this.k3Lock)
                return;
            Ne({
                overlay: !0,
                type: "loading"
            });
            const e = await G(HC())
              , s = {
                9: "K3 Lotre <br />1Min",
                10: "K3 Lotre<br />3Min",
                11: "K3 Lotre<br />5Min",
                12: "K3 Lotre<br />10Min"
            };
            e && e.data && (this.k3 = e.data.map(t => (t.typeName = s[t.typeID],
            t.gamePresentation = null,
            t)),
            this.k3Lock = !0),
            es()
        },
        async get5DData() {
            if (this.fiveDLock)
                return;
            Ne({
                overlay: !0,
                type: "loading"
            });
            const e = await G(KC())
              , s = {
                5: "5D<br />1Min",
                6: "5D<br />3Min",
                7: "5D<br />5Min",
                8: "5D<br />10Min"
            };
            e && e.data && (this.fiveD = e.data.map(t => (t.typeName = s[t.typeID],
            t.gamePresentation = null,
            t)),
            this.fiveDLock = !0),
            es()
        },
        async getWinGoRule(e) {
            let s = this.wingo.findIndex(n => n.typeID === e);
            if (this.wingo[s].gamePresentation)
                return;
            const t = await G(NC({
                typeId: e
            }));
            t && t.data && (this.wingo[s].gamePresentation = t.data.gamePresentation)
        },
        async getTrxRule(e) {
            let s = this.trx.findIndex(n => n.typeID === e);
            if (this.trx[s].gamePresentation)
                return;
            const t = await G(FC({
                typeId: e
            }));
            t && t.data && (this.trx[s].gamePresentation = t.data.gamePresentation)
        },
        async getK3Rule(e) {
            let s = this.k3.findIndex(n => n.typeID === e);
            if (this.k3[s].gamePresentation)
                return;
            const t = await G(qC({
                typeId: e
            }));
            t && t.data && (this.k3[s].gamePresentation = t.data.gamePresentation)
        },
        async get5DRule(e) {
            let s = this.fiveD.findIndex(n => n.typeID === e);
            if (this.fiveD[s].gamePresentation)
                return;
            const t = await G(zC({
                typeId: e
            }));
            t && t.data && (this.fiveD[s].gamePresentation = t.data.gamePresentation)
        },
        setData(e, s) {
            let t = this[s].findIndex(n => n.typeID === e.typeID);
            this[s][t].scope = e.scope,
            this[s][t].betMultiple = e.betMultiple,
            e.gamePresentation && (this[s][t].gamePresentation = e.gamePresentation)
        }
    }
})
  , As = "/login"
  , dR = ["/500", "/", "/main/About/AboutDetail", "/rpwd", "/register", "/main/CustomerService", "/main/CustomerService/ServiceCollection", "/maintenance", "/downloadCenter", "/downloadCenter/ios", "/downloadCenter/empty"]
  , wR = ["home", "activity", "main", "promotion", "chat", "wallet"]
  , bs = [];
let Ys = Object.assign({
    "../views/activity/index.vue": () => r( () => import("./page-activity-index.vue-54063332.js"), ["assets/js/page-activity-index.vue-54063332.js", "assets/js/page-activity-index.vue_vue_type_script_setup_true_lang.ts-297c7070.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-index.vue_vue_type_script_setup_true_lang-f4947d3c.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-activity-index.vue_vue_type_style_index_0_scoped_214b87c9_lang-f98129fc.css"]),
    "../views/arWallet/index.vue": () => r( () => import("./page-arWallet-index.vue-76d3c55c.js"), ["assets/js/page-arWallet-index.vue-76d3c55c.js", "assets/js/page-arWallet-index.vue_vue_type_script_setup_true_lang.ts-502e4c33.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-arWallet-components-4e99238d.js", "assets/css/page-arWallet-components-f05acc1d.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-arWallet-index.vue_vue_type_style_index_0_scoped_847764eb_lang-2b608b65.css"]),
    "../views/arupi/index.vue": () => r( () => import("./page-arupi-index.vue-4c6739b9.js"), ["assets/js/page-arupi-index.vue-4c6739b9.js", "assets/js/page-arupi-index.vue_vue_type_script_setup_true_lang.ts-dbd72923.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-arupi-crypto.ts-94631974.js", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-arupi-index.vue_vue_type_style_index_0_scoped_7afe3ff2_lang-dfa74143.css"]),
    "../views/downloadCenter/index.vue": () => r( () => import("./page-downloadCenter-index.vue-d27a7be6.js"), ["assets/js/page-downloadCenter-index.vue-d27a7be6.js", "assets/js/page-downloadCenter-index.vue_vue_type_script_setup_true_lang.ts-03c0381d.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-downloadCenter-index.vue_vue_type_style_index_0_scoped_887c2eae_lang-5bff268b.css"]),
    "../views/login/index.vue": () => r( () => import("./page-login-index.vue-b96948c0.js"), ["assets/js/page-login-index.vue-b96948c0.js", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-login-index.vue_vue_type_style_index_0_scoped_47f4cc84_lang-152ba1fa.css"]),
    "../views/main/index.vue": () => r( () => import("./page-main-index.vue-729e7349.js"), ["assets/js/page-main-index.vue-729e7349.js", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-main-index.vue_vue_type_style_index_0_scoped_a78765c7_lang-fdb9c9a2.css"]),
    "../views/maintenance/index.vue": () => r( () => import("./page-maintenance-index.vue-7a899f6c.js"), ["assets/js/page-maintenance-index.vue-7a899f6c.js", "assets/js/page-maintenance-index.vue_vue_type_script_setup_true_lang.ts-5145744a.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-maintenance-index.vue_vue_type_style_index_0_scoped_88ca4a94_lang-11cea38a.css"]),
    "../views/promotion/index.vue": () => r( () => import("./page-promotion-index.vue-787593aa.js"), ["assets/js/page-promotion-index.vue-787593aa.js", "assets/js/page-promotion-index.vue_vue_type_script_setup_true_lang.ts-166bb4c6.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-promotion-TeamReport-9261ab80.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-promotion-TeamReport-1df95c95.css", "assets/css/page-promotion-index.vue_vue_type_script_setup_true_lang-a2693a7f.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-promotion-index.vue_vue_type_style_index_0_scoped_600663f7_lang-c8ba773a.css"]),
    "../views/register/index.vue": () => r( () => import("./page-register-index.vue-3d579484.js"), ["assets/js/page-register-index.vue-3d579484.js", "assets/js/page-register-index.vue_vue_type_script_setup_true_lang.ts-5ca605b8.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/css/page-register-index.vue_vue_type_script_setup_true_lang-52af8975.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-register-index.vue_vue_type_style_index_0_scoped_4752d5f1_lang-12ca9d10.css"]),
    "../views/rpwd/index.vue": () => r( () => import("./page-rpwd-index.vue-ebf404be.js"), ["assets/js/page-rpwd-index.vue-ebf404be.js", "assets/js/page-rpwd-index.vue_vue_type_script_setup_true_lang.ts-1d09e7ff.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/css/page-rpwd-index.vue_vue_type_script_setup_true_lang-d48ad3d4.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-rpwd-index.vue_vue_type_style_index_0_scoped_928a098a_lang-4123754b.css"]),
    "../views/test/index.vue": () => r( () => import("./page-test-index.vue-d7ebcd8a.js"), ["assets/js/page-test-index.vue-d7ebcd8a.js", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js"]),
    "../views/turntable/index.vue": () => r( () => import("./page-turntable-index.vue-cd4cefe3.js"), ["assets/js/page-turntable-index.vue-cd4cefe3.js", "assets/js/page-turntable-index.vue_vue_type_script_setup_true_lang.ts-2b24e237.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-components-0a3b9f25.js", "assets/js/page-turntable-assets-d6267459.js", "assets/css/page-turntable-components-eaf4e3eb.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-turntable-index.vue_vue_type_script_setup_true_lang-2ca1393d.css", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-turntable-index.vue_vue_type_style_index_0_scoped_74bb6d20_lang-a5277a26.css"]),
    "../views/vip/index.vue": () => r( () => import("./page-vip-index.vue-f3a185ac.js"), ["assets/js/page-vip-index.vue-f3a185ac.js", "assets/js/page-vip-index.vue_vue_type_script_setup_true_lang.ts-6cc264a2.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-vip-index.vue_vue_type_script_setup_true_lang-771101b3.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-vip-index.vue_vue_type_style_index_0_scoped_92d3d2e1_lang-2b042406.css"]),
    "../views/wallet/index.vue": () => r( () => import("./page-wallet-index.vue-d5539e9c.js"), ["assets/js/page-wallet-index.vue-d5539e9c.js", "assets/js/page-wallet-index.vue_vue_type_script_setup_true_lang.ts-c0db4ac7.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/page-wallet-index.vue_vue_type_style_index_0_scoped_0dabd3fc_lang-68a64964.css"])
})
  , Qs = Object.assign({
    "../views/activity/ActivityDetail/index.vue": () => r( () => Promise.resolve().then( () => GP), void 0),
    "../views/activity/Bonus/index.vue": () => r( () => import("./page-activity-Bonus-8e38179c.js").then(e => e.i), ["assets/js/page-activity-Bonus-8e38179c.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-activity-Bonus-608b6579.css"]),
    "../views/activity/Championship/index.vue": () => r( () => import("./page-activity-Championship-95adc67b.js").then(e => e.i), ["assets/js/page-activity-Championship-95adc67b.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css"]),
    "../views/activity/DailySignIn/index.vue": () => r( () => import("./page-activity-DailySignIn-177ec47f.js").then(e => e.i), ["assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css"]),
    "../views/activity/DailyTasks/index.vue": () => r( () => import("./page-activity-DailyTasks-489181a7.js").then(e => e.i), ["assets/js/page-activity-DailyTasks-489181a7.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailyTasks-6c157f4e.css"]),
    "../views/activity/FirstRecharge/index.vue": () => r( () => import("./page-activity-FirstRecharge-26229759.js").then(e => e.i), ["assets/js/page-activity-FirstRecharge-26229759.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-FirstRecharge-1994fe55.css"]),
    "../views/activity/MemberPackage/index.vue": () => r( () => import("./page-activity-MemberPackage-710f0bb2.js").then(e => e.i), ["assets/js/page-activity-MemberPackage-710f0bb2.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-MemberPackage-8e83e72b.css"]),
    "../views/activity/PointMall/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.i), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/Turntable/index.vue": () => r( () => import("./page-activity-Turntable-09f4f635.js").then(e => e.i), ["assets/js/page-activity-Turntable-09f4f635.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-Turntable-f1f48080.css"]),
    "../views/arupi/Appeal/index.vue": () => r( () => import("./page-arupi-Appeal-1f69aa1d.js").then(e => e.i), ["assets/js/page-arupi-Appeal-1f69aa1d.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-arupi-Appeal-cc6221a0.css"]),
    "../views/arupi/Fail/index.vue": () => r( () => import("./page-arupi-Fail-000806c1.js"), ["assets/js/page-arupi-Fail-000806c1.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-c3aa243b.css"]),
    "../views/arupi/Payment/index.vue": () => r( () => import("./page-arupi-Payment-31e18f9b.js"), ["assets/js/page-arupi-Payment-31e18f9b.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-998b9303.css"]),
    "../views/arupi/arupi_v2/index.vue": () => r( () => import("./page-arupi-arupi_v2-53cd7379.js"), ["assets/js/page-arupi-arupi_v2-53cd7379.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-arupi-crypto.ts-94631974.js", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-4ad23cf4.css"]),
    "../views/arupi/kycAppeal/index.vue": () => r( () => import("./page-arupi-kycAppeal-494f7ad4.js").then(e => e.i), ["assets/js/page-arupi-kycAppeal-494f7ad4.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-arupi-Appeal-1f69aa1d.js", "assets/css/page-arupi-Appeal-cc6221a0.css", "assets/css/page-arupi-kycAppeal-2841ab25.css"]),
    "../views/arupi/kycAppeal_v2/index.vue": () => r( () => import("./page-arupi-kycAppeal_v2-2dc9aa46.js"), ["assets/js/page-arupi-kycAppeal_v2-2dc9aa46.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-arupi-Appeal-1f69aa1d.js", "assets/css/page-arupi-Appeal-cc6221a0.css", "assets/js/page-arupi-kycAppeal-494f7ad4.js", "assets/css/page-arupi-kycAppeal-2841ab25.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-49686d63.css"]),
    "../views/downloadCenter/empty/index.vue": () => r( () => import("./page-downloadCenter-empty-df0c5970.js"), ["assets/js/page-downloadCenter-empty-df0c5970.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-1a74f91a.css"]),
    "../views/downloadCenter/ios/index.vue": () => r( () => import("./page-downloadCenter-ios-e73bd8f9.js"), ["assets/js/page-downloadCenter-ios-e73bd8f9.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-f08c44cc.css"]),
    "../views/home/AllGames/index.vue": () => r( () => import("./page-home-AllGames-e4490e91.js").then(e => e.i), ["assets/js/page-home-AllGames-e4490e91.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-home-AllGames-f826c318.css"]),
    "../views/home/AllLotteryGames/index.vue": () => r( () => import("./index-ce19bd02.js"), ["assets/js/index-ce19bd02.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-579f2545.css"]),
    "../views/home/AllOnlineGames/index.vue": () => r( () => import("./page-home-AllOnlineGames-1960f3ed.js"), ["assets/js/page-home-AllOnlineGames-1960f3ed.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-56a9b147.css"]),
    "../views/home/Casino/index.vue": () => r( () => import("./page-home-Casino-07b88da2.js").then(e => e.i), ["assets/js/page-home-Casino-07b88da2.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-home-Casino-832443f8.css"]),
    "../views/home/Chess/index.vue": () => r( () => import("./page-home-Chess-42d21016.js").then(e => e.i), ["assets/js/page-home-Chess-42d21016.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-Casino-07b88da2.js", "assets/css/page-home-Casino-832443f8.css", "assets/css/page-home-Chess-0ef5d3d4.css"]),
    "../views/home/FishGames/index.vue": () => r( () => import("./page-home-FishGames-997eff8d.js"), ["assets/js/page-home-FishGames-997eff8d.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-368d06bf.css"]),
    "../views/home/Fishing/index.vue": () => r( () => import("./page-home-Fishing-0f9ab090.js"), ["assets/js/page-home-Fishing-0f9ab090.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-Casino-07b88da2.js", "assets/css/page-home-Casino-832443f8.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-21cbc566.css"]),
    "../views/home/HotGames/index.vue": () => r( () => import("./page-home-HotGames-ebd5fc18.js"), ["assets/js/page-home-HotGames-ebd5fc18.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-df7487c9.css"]),
    "../views/home/Lottery/index.vue": () => r( () => import("./page-home-Lottery-8c7be07a.js"), ["assets/js/page-home-Lottery-8c7be07a.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-Casino-07b88da2.js", "assets/css/page-home-Casino-832443f8.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-e2bf7d07.css"]),
    "../views/home/Messages/index.vue": () => r( () => import("./page-home-Messages-fcb1351a.js").then(e => e.i), ["assets/js/page-home-Messages-fcb1351a.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-home-Messages-300061c7.css"]),
    "../views/home/Original/index.vue": () => r( () => import("./page-home-Original-e0dd498f.js"), ["assets/js/page-home-Original-e0dd498f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-Casino-07b88da2.js", "assets/css/page-home-Casino-832443f8.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-0cf3cc24.css"]),
    "../views/home/Slots/index.vue": () => r( () => import("./page-home-Slots-12ddfbc2.js"), ["assets/js/page-home-Slots-12ddfbc2.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-Casino-07b88da2.js", "assets/css/page-home-Casino-832443f8.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-a43d112b.css"]),
    "../views/home/eSports/index.vue": () => r( () => import("./page-home-eSports-b933d523.js"), ["assets/js/page-home-eSports-b933d523.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-Casino-07b88da2.js", "assets/css/page-home-Casino-832443f8.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-bf91bb0b.css"]),
    "../views/home/game/index.vue": () => r( () => import("./page-home-game-3e30aa0c.js"), ["assets/js/page-home-game-3e30aa0c.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-dc00deb0.css"]),
    "../views/main/About/index.vue": () => r( () => import("./page-main-About-dee37c59.js").then(e => e.i), ["assets/js/page-main-About-dee37c59.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-main-About-0a2b139d.css"]),
    "../views/main/Avatar/index.vue": () => r( () => import("./page-main-Avatar-1d05c215.js"), ["assets/js/page-main-Avatar-1d05c215.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-cb1994dc.css"]),
    "../views/main/BetRecords/index.vue": () => r( () => import("./page-main-BetRecords-62ec31b7.js").then(e => e.i), ["assets/js/page-main-BetRecords-62ec31b7.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-main-BetRecords-6004cda5.css"]),
    "../views/main/CustomerService/index.vue": () => r( () => import("./page-main-CustomerService-7a522cb5.js").then(e => e.i), ["assets/js/page-main-CustomerService-7a522cb5.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-main-CustomerService-c6a43cb8.css"]),
    "../views/main/Feedback/index.vue": () => r( () => import("./page-main-Feedback-bd058a95.js"), ["assets/js/page-main-Feedback-bd058a95.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-127fc91b.css"]),
    "../views/main/GameStats/index.vue": () => r( () => import("./page-main-GameStats-bad11f28.js"), ["assets/js/page-main-GameStats-bad11f28.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-18dce474.css"]),
    "../views/main/GoogleVerify/index.vue": () => r( () => import("./page-main-GoogleVerify-a54b0a30.js").then(e => e.i), ["assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/css/page-main-GoogleVerify-193cdf16.css"]),
    "../views/main/Guide/index.vue": () => r( () => import("./page-main-Guide-ab587e9d.js"), ["assets/js/page-main-Guide-ab587e9d.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-b5fb5d98.css"]),
    "../views/main/InvitationBonus/index.vue": () => r( () => import("./page-main-InvitationBonus-45aedc66.js").then(e => e.i), ["assets/js/page-main-InvitationBonus-45aedc66.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-main-InvitationBonus-862905c6.css"]),
    "../views/main/Language/index.vue": () => r( () => import("./page-main-Language-5d074688.js"), ["assets/js/page-main-Language-5d074688.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-5bd3c6c1.css"]),
    "../views/main/Laundry/index.vue": () => r( () => import("./page-main-Laundry-57e75883.js").then(e => e.i), ["assets/js/page-main-Laundry-57e75883.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-main-Laundry-399460d6.css"]),
    "../views/main/MyCoins/index.vue": () => r( () => import("./page-main-MyCoins-c3033949.js"), ["assets/js/page-main-MyCoins-c3033949.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-3c21bae8.css"]),
    "../views/main/MyCps/index.vue": () => r( () => import("./page-main-MyCps-34bfbc22.js"), ["assets/js/page-main-MyCps-34bfbc22.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-53763fce.css"]),
    "../views/main/Notification/index.vue": () => r( () => import("./page-main-Notification-2fadee6d.js"), ["assets/js/page-main-Notification-2fadee6d.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-0aeaa076.css"]),
    "../views/main/PointDetail/index.vue": () => r( () => import("./page-main-PointDetail-a1e5d1ae.js"), ["assets/js/page-main-PointDetail-a1e5d1ae.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js"]),
    "../views/main/RedeemGift/index.vue": () => r( () => import("./page-main-RedeemGift-3d60476f.js"), ["assets/js/page-main-RedeemGift-3d60476f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-559367fa.css"]),
    "../views/main/SettingCenter/index.vue": () => r( () => import("./page-main-SettingCenter-2c5d2350.js").then(e => e.i), ["assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css"]),
    "../views/main/StrongBox/index.vue": () => r( () => import("./page-main-StrongBox-68e109cf.js").then(e => e.i), ["assets/js/page-main-StrongBox-68e109cf.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-main-StrongBox-8d41d13e.css"]),
    "../views/main/SuperJackpot/index.vue": () => r( () => import("./page-main-SuperJackpot-2883f196.js").then(e => e.i), ["assets/js/page-main-SuperJackpot-2883f196.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-main-SuperJackpot-034fc85f.css"]),
    "../views/promotion/CommissionDetail/index.vue": () => r( () => import("./page-promotion-CommissionDetail-1be2656b.js"), ["assets/js/page-promotion-CommissionDetail-1be2656b.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-7a2e3b9b.css"]),
    "../views/promotion/MyCommission/index.vue": () => r( () => import("./page-promotion-MyCommission-ccd2c79e.js").then(e => e.i), ["assets/js/page-promotion-MyCommission-ccd2c79e.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-promotion-MyCommission-5c141686.css"]),
    "../views/promotion/MyInvitation/index.vue": () => r( () => import("./page-promotion-MyInvitation-6a8e0f1b.js").then(e => e.i), ["assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-promotion-MyInvitation-66710573.css"]),
    "../views/promotion/MyReceive/index.vue": () => r( () => import("./page-promotion-MyReceive-cd34c4af.js"), ["assets/js/page-promotion-MyReceive-cd34c4af.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-9dd9fdd9.css"]),
    "../views/promotion/PromotionRule/index.vue": () => r( () => import("./page-promotion-PromotionRule-2a4047a7.js"), ["assets/js/page-promotion-PromotionRule-2a4047a7.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-3f5503da.css"]),
    "../views/promotion/PromotionShare/index.vue": () => r( () => import("./page-promotion-PromotionShare-c15ad3bb.js"), ["assets/js/page-promotion-PromotionShare-c15ad3bb.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-75099b20.css"]),
    "../views/promotion/RebateRatio/index.vue": () => r( () => import("./page-promotion-RebateRatio-e3ea9e8f.js"), ["assets/js/page-promotion-RebateRatio-e3ea9e8f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-732aa85c.css"]),
    "../views/promotion/Server/index.vue": () => r( () => import("./page-promotion-Server-a8804b37.js").then(e => e.i), ["assets/js/page-promotion-Server-a8804b37.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-promotion-Server-1fe351f8.css"]),
    "../views/promotion/Subordinate/index.vue": () => r( () => import("./page-promotion-Subordinate-1e007209.js"), ["assets/js/page-promotion-Subordinate-1e007209.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-c7cbf941.css"]),
    "../views/promotion/TeamPartner/index.vue": () => r( () => import("./page-promotion-TeamPartner-bf288c66.js").then(e => e.i), ["assets/js/page-promotion-TeamPartner-bf288c66.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-promotion-TeamPartner-d433c1ee.css"]),
    "../views/promotion/TeamReport/index.vue": () => r( () => import("./page-promotion-TeamReport-9261ab80.js").then(e => e.i), ["assets/js/page-promotion-TeamReport-9261ab80.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-promotion-TeamReport-1df95c95.css"]),
    "../views/saasLottery/D5/index.vue": () => r( () => import("./page-saasLottery-D5-d9701bbb.js").then(e => e.V), ["assets/js/page-saasLottery-D5-d9701bbb.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-saasLottery-D5-e60785c3.css"]),
    "../views/saasLottery/K3/index.vue": () => r( () => import("./page-saasLottery-K3-4e2372cc.js").then(e => e.i), ["assets/js/page-saasLottery-K3-4e2372cc.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/css/page-saasLottery-K3-4f3cb208.css"]),
    "../views/saasLottery/MotoRace/index.vue": () => r( () => import("./page-saasLottery-MotoRace-a03df108.js").then(e => e.i), ["assets/js/page-saasLottery-MotoRace-a03df108.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/css/page-saasLottery-MotoRace-c6a96213.css"]),
    "../views/saasLottery/SaasChangLong/index.vue": () => r( () => import("./page-saasLottery-SaasChangLong-e3cc7c43.js").then(e => e.i), ["assets/js/page-saasLottery-SaasChangLong-e3cc7c43.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/js/page-saasLottery-MotoRace-a03df108.js", "assets/css/page-saasLottery-MotoRace-c6a96213.css", "assets/css/page-saasLottery-SaasChangLong-927d0303.css"]),
    "../views/saasLottery/TrxWinGo/index.vue": () => r( () => import("./page-saasLottery-TrxWinGo-8438b530.js"), ["assets/js/page-saasLottery-TrxWinGo-8438b530.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-e8409a81.css"]),
    "../views/saasLottery/VideoWinGo/index.vue": () => r( () => import("./page-saasLottery-VideoWinGo-24913134.js").then(e => e.i), ["assets/js/page-saasLottery-VideoWinGo-24913134.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/css/page-saasLottery-VideoWinGo-07b6be72.css"]),
    "../views/saasLottery/WinGo/index.vue": () => r( () => import("./page-saasLottery-WinGo-88e561b4.js"), ["assets/js/page-saasLottery-WinGo-88e561b4.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/js/page-saasLottery-VideoWinGo-24913134.js", "assets/css/page-saasLottery-VideoWinGo-07b6be72.css", "assets/js/page-saasLottery-SaasChangLong-e3cc7c43.js", "assets/js/page-saasLottery-MotoRace-a03df108.js", "assets/css/page-saasLottery-MotoRace-c6a96213.css", "assets/css/page-saasLottery-SaasChangLong-927d0303.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-a8716bae.css"]),
    "../views/turntable/withdrawHistory/index.vue": () => r( () => import("./page-turntable-withdrawHistory-645316e4.js"), ["assets/js/page-turntable-withdrawHistory-645316e4.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-66882331.css"]),
    "../views/vip/RebateDetails/index.vue": () => r( () => import("./page-vip-RebateDetails-391a2af5.js"), ["assets/js/page-vip-RebateDetails-391a2af5.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-72866795.css"]),
    "../views/vip/RecordVsruleHistory/index.vue": () => r( () => import("./page-vip-RecordVsruleHistory-aa4ea806.js"), ["assets/js/page-vip-RecordVsruleHistory-aa4ea806.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-7711cd2b.css"]),
    "../views/wallet/ArbRule/index.vue": () => r( () => import("./page-wallet-ArbRule-3bc2e728.js"), ["assets/js/page-wallet-ArbRule-3bc2e728.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-a6a76edd.css"]),
    "../views/wallet/BankStatus/index.vue": () => r( () => import("./page-wallet-BankStatus-70cb5f3f.js"), ["assets/js/page-wallet-BankStatus-70cb5f3f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-5cfe3fd0.css"]),
    "../views/wallet/CancelRecharge/index.vue": () => r( () => import("./page-wallet-CancelRecharge-fd48f2b6.js"), ["assets/js/page-wallet-CancelRecharge-fd48f2b6.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-62fb6178.css"]),
    "../views/wallet/OrderCancel/index.vue": () => r( () => import("./page-wallet-OrderCancel-8ba654e8.js"), ["assets/js/page-wallet-OrderCancel-8ba654e8.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-c1bc57aa.css"]),
    "../views/wallet/OtherPay/index.vue": () => r( () => import("./page-wallet-OtherPay-35e89cbc.js").then(e => e.i), ["assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-wallet-OtherPay-0370b97c.css"]),
    "../views/wallet/Recharge/index.vue": () => r( () => import("./page-wallet-Recharge-5a310baf.js").then(e => e.i), ["assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css"]),
    "../views/wallet/RechargeArUpi/index.vue": () => r( () => import("./page-wallet-RechargeArUpi-0bec3aac.js"), ["assets/js/page-wallet-RechargeArUpi-0bec3aac.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-a7f3c74c.css"]),
    "../views/wallet/RechargeDetail/index.vue": () => r( () => import("./page-wallet-RechargeDetail-1733be1f.js"), ["assets/js/page-wallet-RechargeDetail-1733be1f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-0246e31f.css"]),
    "../views/wallet/RechargeHistory/index.vue": () => r( () => import("./page-wallet-RechargeHistory-511aaf2c.js").then(e => e.i), ["assets/js/page-wallet-RechargeHistory-511aaf2c.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-PointMall-e618d414.js", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/css/page-wallet-RechargeHistory-087ac70f.css"]),
    "../views/wallet/RechargeUsdt/index.vue": () => r( () => import("./page-wallet-RechargeUsdt-030ec18f.js"), ["assets/js/page-wallet-RechargeUsdt-030ec18f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-3949d951.css"]),
    "../views/wallet/TransAction/index.vue": () => r( () => import("./page-wallet-TransAction-10a2a74e.js"), ["assets/js/page-wallet-TransAction-10a2a74e.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-622796d7.css"]),
    "../views/wallet/Withdraw/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.i), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/WithdrawHistory/index.vue": () => r( () => import("./page-wallet-WithdrawHistory-f8634eae.js").then(e => e.i), ["assets/js/page-wallet-WithdrawHistory-f8634eae.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css", "assets/js/page-wallet-RechargeHistory-511aaf2c.js", "assets/css/page-wallet-RechargeHistory-087ac70f.css", "assets/css/page-wallet-WithdrawHistory-730b49d5.css"])
})
  , Zs = Object.assign({
    "../views/activity/Championship/ChampionshipDetail/index.vue": () => r( () => import("./page-activity-Championship-95adc67b.js").then(e => e.a), ["assets/js/page-activity-Championship-95adc67b.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css"]),
    "../views/activity/DailySignIn/Record/index.vue": () => r( () => import("./page-activity-DailySignIn-177ec47f.js").then(e => e.a), ["assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css"]),
    "../views/activity/DailySignIn/Rules/index.vue": () => r( () => import("./page-activity-DailySignIn-177ec47f.js").then(e => e.b), ["assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css"]),
    "../views/activity/DailyTasks/Record/index.vue": () => r( () => import("./page-activity-DailyTasks-489181a7.js").then(e => e.a), ["assets/js/page-activity-DailyTasks-489181a7.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailyTasks-6c157f4e.css"]),
    "../views/activity/MemberPackage/Rules/index.vue": () => r( () => import("./page-activity-MemberPackage-710f0bb2.js").then(e => e.a), ["assets/js/page-activity-MemberPackage-710f0bb2.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-MemberPackage-8e83e72b.css"]),
    "../views/activity/PointMall/AddAddress/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.a), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/LotteryActivity/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.b), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/LotteryDetail/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.c), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/MyLottery/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.d), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/MyOrders/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.e), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/OrderDetail/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.f), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/ReceiveLottery/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.g), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/Record/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.h), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/Redeem/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.j), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/PointMall/Rules/index.vue": () => r( () => import("./page-activity-PointMall-e618d414.js").then(e => e.k), ["assets/js/page-activity-PointMall-e618d414.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-PointMall-e476b613.css"]),
    "../views/activity/Turntable/Detail/index.vue": () => r( () => import("./page-activity-Turntable-09f4f635.js").then(e => e.a), ["assets/js/page-activity-Turntable-09f4f635.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-Turntable-f1f48080.css"]),
    "../views/activity/Turntable/Introduce/index.vue": () => r( () => import("./page-activity-Turntable-09f4f635.js").then(e => e.b), ["assets/js/page-activity-Turntable-09f4f635.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-Turntable-f1f48080.css"]),
    "../views/activity/Turntable/Rules/index.vue": () => r( () => import("./page-activity-Turntable-09f4f635.js").then(e => e.c), ["assets/js/page-activity-Turntable-09f4f635.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-activity-Turntable-f1f48080.css"]),
    "../views/home/AllLotteryGames/4D/index.vue": () => r( () => import("./index-6a84212b.js"), ["assets/js/index-6a84212b.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/use4D.hook-a1e3ed03.js", "assets/js/showResult-8661df23.js", "assets/css/showResult-6239d839.css", "assets/js/showGame-3d7be0f4.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/showGame-16c1f0e5.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-b418315c.css"]),
    "../views/home/AllLotteryGames/4DLotteryResults/index.vue": () => r( () => import("./index-8b241dd7.js"), ["assets/js/index-8b241dd7.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/showResult-8661df23.js", "assets/css/showResult-6239d839.css", "assets/js/use4D.hook-a1e3ed03.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-41c18b88.css"]),
    "../views/home/AllLotteryGames/4DOdds/index.vue": () => r( () => import("./index-a1ac36b1.js"), ["assets/js/index-a1ac36b1.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/use4D.hook-a1e3ed03.js", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-3770c846.css"]),
    "../views/home/AllLotteryGames/4DPlay/index.vue": () => r( () => import("./index-4502a3af.js"), ["assets/js/index-4502a3af.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-7acac3df.css"]),
    "../views/home/AllLotteryGames/4DmyGame/index.vue": () => r( () => import("./index-08c5f4ff.js"), ["assets/js/index-08c5f4ff.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/showGame-3d7be0f4.js", "assets/js/showResult-8661df23.js", "assets/css/showResult-6239d839.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/use4D.hook-a1e3ed03.js", "assets/css/showGame-16c1f0e5.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-4ace13d9.css"]),
    "../views/home/AllLotteryGames/5D/index.vue": () => r( () => import("./index-d5de3104.js"), ["assets/js/index-d5de3104.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/audio-12320be5.js", "assets/css/audio-68d9e463.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/MyGameRecord-8de32927.js", "assets/js/MayrecordList-eadcaf5e.js", "assets/css/MayrecordList-62ab5b63.css", "assets/css/MyGameRecord-6d1eef75.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-5c5d290e.css"]),
    "../views/home/AllLotteryGames/BettingRecord5D/index.vue": () => r( () => import("./index-0d789ded.js"), ["assets/js/index-0d789ded.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/MayrecordList-eadcaf5e.js", "assets/css/MayrecordList-62ab5b63.css", "assets/js/page-main-BetRecords-62ec31b7.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-main-BetRecords-6004cda5.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-6339d5b7.css"]),
    "../views/home/AllLotteryGames/BettingRecordK3/index.vue": () => r( () => import("./index-7a65a1b1.js"), ["assets/js/index-7a65a1b1.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/MayrecordList-c2e2fea9.js", "assets/css/MayrecordList-9414b703.css", "assets/js/page-main-BetRecords-62ec31b7.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-main-BetRecords-6004cda5.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-5bb15185.css"]),
    "../views/home/AllLotteryGames/BettingRecordWin/index.vue": () => r( () => import("./index-5c310982.js"), ["assets/js/index-5c310982.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/MayrecordList-eefd098d.js", "assets/css/MayrecordList-45896504.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-b44d129c.css"]),
    "../views/home/AllLotteryGames/BettingRecordWinTrx/index.vue": () => r( () => import("./index-abd527f3.js"), ["assets/js/index-abd527f3.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/MayrecordList-eefd098d.js", "assets/css/MayrecordList-45896504.css", "assets/js/page-main-BetRecords-62ec31b7.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-main-BetRecords-6004cda5.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-75e23cda.css"]),
    "../views/home/AllLotteryGames/Binguo/index.vue": () => r( () => import("./index-dbed2315.js"), ["assets/js/index-dbed2315.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-main-BetRecords-62ec31b7.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-main-BetRecords-6004cda5.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-f50a1976.css"]),
    "../views/home/AllLotteryGames/BinguoCount/index.vue": () => r( () => import("./index-9f43089a.js"), ["assets/js/index-9f43089a.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-main-BetRecords-62ec31b7.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-main-BetRecords-6004cda5.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-bb47a999.css"]),
    "../views/home/AllLotteryGames/BinguoRecord/index.vue": () => r( () => import("./index-dcc56c80.js"), ["assets/js/index-dcc56c80.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-main-BetRecords-62ec31b7.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-main-BetRecords-6004cda5.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-59c14ddc.css"]),
    "../views/home/AllLotteryGames/ChangLong/index.vue": () => r( () => import("./index-e4da0f81.js"), ["assets/js/index-e4da0f81.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/MyGameRecord-68747876.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/MayrecordList-eefd098d.js", "assets/css/MayrecordList-45896504.css", "assets/css/MyGameRecord-a4c5b06e.css", "assets/js/MyGameRecord-8de32927.js", "assets/js/MayrecordList-eadcaf5e.js", "assets/css/MayrecordList-62ab5b63.css", "assets/css/MyGameRecord-6d1eef75.css", "assets/js/MyGameRecord-2f6878d8.js", "assets/js/MayrecordList-c2e2fea9.js", "assets/css/MayrecordList-9414b703.css", "assets/css/MyGameRecord-9b43697f.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-52cced45.css"]),
    "../views/home/AllLotteryGames/K3/index.vue": () => r( () => import("./index-f87d6dad.js"), ["assets/js/index-f87d6dad.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/audio-12320be5.js", "assets/css/audio-68d9e463.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/MyGameRecord-2f6878d8.js", "assets/js/MayrecordList-c2e2fea9.js", "assets/css/MayrecordList-9414b703.css", "assets/css/MyGameRecord-9b43697f.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-2accec64.css"]),
    "../views/home/AllLotteryGames/NewVietnam/index.vue": () => r( () => import("./index-ba183ca2.js"), ["assets/js/index-ba183ca2.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/MyGameRecord-72bc68e4.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/MyGameRecord-0b64bf39.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-c524a63c.css"]),
    "../views/home/AllLotteryGames/Play/index.vue": () => r( () => import("./index-b95c5d43.js"), ["assets/js/index-b95c5d43.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-8b76aaac.css"]),
    "../views/home/AllLotteryGames/WinGo/index.vue": () => r( () => import("./index-f76bdae2.js"), ["assets/js/index-f76bdae2.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/audio-12320be5.js", "assets/css/audio-68d9e463.css", "assets/js/WinningTips-0e0b906f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/WinningTips-df528427.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/MyGameRecord-68747876.js", "assets/js/MayrecordList-eefd098d.js", "assets/css/MayrecordList-45896504.css", "assets/css/MyGameRecord-a4c5b06e.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-saasLottery-D5-d9701bbb.js", "assets/css/page-saasLottery-D5-e60785c3.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-337a7f5e.css"]),
    "../views/home/AllLotteryGames/WinTrx/index.vue": () => r( () => import("./index-5ec558c6.js"), ["assets/js/index-5ec558c6.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/audio-12320be5.js", "assets/css/audio-68d9e463.css", "assets/js/WinningTips-0e0b906f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/WinningTips-df528427.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/js/MyGameRecord-68747876.js", "assets/js/MayrecordList-eefd098d.js", "assets/css/MayrecordList-45896504.css", "assets/css/MyGameRecord-a4c5b06e.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-0f436d2a.css"]),
    "../views/home/AllLotteryGames/WinTrxIframe/index.vue": () => r( () => import("./index-d5c2e19c.js"), ["assets/js/index-d5c2e19c.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-b158b076.css"]),
    "../views/home/AllLotteryGames/XoSo/index.vue": () => r( () => import("./index-bdc6e354.js"), ["assets/js/index-bdc6e354.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-db4a7ce5.css"]),
    "../views/home/AllLotteryGames/XoSoRecord/index.vue": () => r( () => import("./index-8baf05ed.js"), ["assets/js/index-8baf05ed.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-wallet-RechargeHistory-511aaf2c.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-PointMall-e618d414.js", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/css/page-wallet-RechargeHistory-087ac70f.css", "assets/js/MyGameRecord-72bc68e4.js", "assets/css/MyGameRecord-0b64bf39.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-2d772cdf.css"]),
    "../views/home/AllLotteryGames/XoSoRecordF/index.vue": () => r( () => import("./index-9add023f.js"), ["assets/js/index-9add023f.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/MyGameRecord-72bc68e4.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/MyGameRecord-0b64bf39.css", "assets/js/page-turntable-assets-d6267459.js", "assets/js/native/index-2c2af617.js", "assets/js/en-8dc3e88f.js", "assets/css/index-41178364.css"]),
    "../views/home/Casino/Detail/index.vue": () => r( () => import("./page-home-Casino-07b88da2.js").then(e => e.a), ["assets/js/page-home-Casino-07b88da2.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-home-Casino-832443f8.css"]),
    "../views/home/Chess/Detail/index.vue": () => r( () => import("./page-home-Chess-42d21016.js").then(e => e.a), ["assets/js/page-home-Chess-42d21016.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-Casino-07b88da2.js", "assets/css/page-home-Casino-832443f8.css", "assets/css/page-home-Chess-0ef5d3d4.css"]),
    "../views/home/Messages/MessageDetail/index.vue": () => r( () => import("./page-home-Messages-fcb1351a.js").then(e => e.a), ["assets/js/page-home-Messages-fcb1351a.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-home-Messages-300061c7.css"]),
    "../views/main/About/AboutDetail/index.vue": () => r( () => import("./page-main-About-dee37c59.js").then(e => e.a), ["assets/js/page-main-About-dee37c59.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-main-About-0a2b139d.css"]),
    "../views/main/CustomerService/ServiceCollection/index.vue": () => r( () => import("./page-main-CustomerService-7a522cb5.js").then(e => e.a), ["assets/js/page-main-CustomerService-7a522cb5.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-main-CustomerService-c6a43cb8.css"]),
    "../views/main/GoogleVerify/BindGoogle/index.vue": () => r( () => import("./page-main-GoogleVerify-a54b0a30.js").then(e => e.a), ["assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/css/page-main-GoogleVerify-193cdf16.css"]),
    "../views/main/InvitationBonus/Record/index.vue": () => r( () => import("./page-main-InvitationBonus-45aedc66.js").then(e => e.a), ["assets/js/page-main-InvitationBonus-45aedc66.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-main-InvitationBonus-862905c6.css"]),
    "../views/main/InvitationBonus/Rule/index.vue": () => r( () => import("./page-main-InvitationBonus-45aedc66.js").then(e => e.b), ["assets/js/page-main-InvitationBonus-45aedc66.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-main-InvitationBonus-862905c6.css"]),
    "../views/main/Laundry/LaundryRecord/index.vue": () => r( () => import("./page-main-Laundry-57e75883.js").then(e => e.a), ["assets/js/page-main-Laundry-57e75883.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-main-Laundry-399460d6.css"]),
    "../views/main/Laundry/LaundryRule/index.vue": () => r( () => import("./page-main-Laundry-57e75883.js").then(e => e.b), ["assets/js/page-main-Laundry-57e75883.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-main-Laundry-399460d6.css"]),
    "../views/main/SettingCenter/BindEmail/index.vue": () => r( () => import("./page-main-SettingCenter-2c5d2350.js").then(e => e.a), ["assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css"]),
    "../views/main/SettingCenter/LoginPassword/index.vue": () => r( () => import("./page-main-SettingCenter-2c5d2350.js").then(e => e.b), ["assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css"]),
    "../views/main/SettingCenter/UpdatePhone/index.vue": () => r( () => import("./page-main-SettingCenter-2c5d2350.js").then(e => e.c), ["assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css"]),
    "../views/main/StrongBox/StrongBoxAbout/index.vue": () => r( () => import("./page-main-StrongBox-68e109cf.js").then(e => e.a), ["assets/js/page-main-StrongBox-68e109cf.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-main-StrongBox-8d41d13e.css"]),
    "../views/main/StrongBox/StrongBoxRecord/index.vue": () => r( () => import("./page-main-StrongBox-68e109cf.js").then(e => e.b), ["assets/js/page-main-StrongBox-68e109cf.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-main-StrongBox-8d41d13e.css"]),
    "../views/main/SuperJackpot/rule/index.vue": () => r( () => import("./page-main-SuperJackpot-2883f196.js").then(e => e.a), ["assets/js/page-main-SuperJackpot-2883f196.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-main-SuperJackpot-034fc85f.css"]),
    "../views/main/SuperJackpot/star/index.vue": () => r( () => import("./page-main-SuperJackpot-2883f196.js").then(e => e.b), ["assets/js/page-main-SuperJackpot-2883f196.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-main-SuperJackpot-034fc85f.css"]),
    "../views/promotion/MyCommission/MyCommissionDetail/index.vue": () => r( () => import("./page-promotion-MyCommission-ccd2c79e.js").then(e => e.a), ["assets/js/page-promotion-MyCommission-ccd2c79e.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-promotion-MyCommission-5c141686.css"]),
    "../views/promotion/MyInvitation/InvitationDetail/index.vue": () => r( () => import("./page-promotion-MyInvitation-6a8e0f1b.js").then(e => e.a), ["assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-promotion-MyInvitation-66710573.css"]),
    "../views/promotion/Server/ServiceCollection/index.vue": () => r( () => import("./page-promotion-Server-a8804b37.js").then(e => e.a), ["assets/js/page-promotion-Server-a8804b37.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/css/page-promotion-Server-1fe351f8.css"]),
    "../views/promotion/TeamPartner/Invitation/index.vue": () => r( () => import("./page-promotion-TeamPartner-bf288c66.js").then(e => e.a), ["assets/js/page-promotion-TeamPartner-bf288c66.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-promotion-TeamPartner-d433c1ee.css"]),
    "../views/promotion/TeamReport/TeamReportDetail/index.vue": () => r( () => import("./page-promotion-TeamReport-9261ab80.js").then(e => e.a), ["assets/js/page-promotion-TeamReport-9261ab80.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-promotion-TeamReport-1df95c95.css"]),
    "../views/wallet/RechargeHistory/RechargeUpiDetail/index.vue": () => r( () => import("./page-wallet-RechargeHistory-511aaf2c.js").then(e => e.a), ["assets/js/page-wallet-RechargeHistory-511aaf2c.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-PointMall-e618d414.js", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/css/page-wallet-RechargeHistory-087ac70f.css"]),
    "../views/wallet/Withdraw/AddBankCard/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.b), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/AddFastUpi/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.d), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/AddKbz/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.e), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/AddPIX/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.f), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/AddRsnPay/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.g), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/AddType4/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.h), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/AddUSDT/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.j), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/AddUpi/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.k), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/AddWave/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.l), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/BankCard/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.m), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/C2cDetail/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.n), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/ChooseBank/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.a), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/FastUpi/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.o), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/PIX/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.p), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/RsnPay/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.q), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/Type4/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.r), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/USDT/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.s), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/Upi/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.t), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/c2cCancelWithdrawal/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.u), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/Withdraw/c2cWrongAmount/index.vue": () => r( () => import("./page-wallet-Withdraw-246fd031.js").then(e => e.v), ["assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css"]),
    "../views/wallet/WithdrawHistory/WithdrawHistoryDetail/index.vue": () => r( () => import("./page-wallet-WithdrawHistory-f8634eae.js").then(e => e.a), ["assets/js/page-wallet-WithdrawHistory-f8634eae.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css", "assets/js/page-wallet-Withdraw-246fd031.js", "assets/js/page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js", "assets/js/page-activity-Championship-95adc67b.js", "assets/js/page-activity-Bonus-8e38179c.js", "assets/css/page-activity-Bonus-608b6579.css", "assets/css/page-activity-Championship-0dbc2b73.css", "assets/js/page-activity-PointMall-e618d414.js", "assets/js/page-activity-DailySignIn-177ec47f.js", "assets/css/page-activity-DailySignIn-129a7831.css", "assets/css/page-activity-PointMall-e476b613.css", "assets/css/page-login-index.vue_vue_type_script_setup_true_lang-a81fdee0.css", "assets/js/page-wallet-Recharge-5a310baf.js", "assets/js/page-wallet-OtherPay-35e89cbc.js", "assets/css/page-wallet-OtherPay-0370b97c.css", "assets/js/page-main-index.vue_vue_type_script_setup_true_lang.ts-1c1acf95.js", "assets/js/page-main-SettingCenter-2c5d2350.js", "assets/js/page-main-GoogleVerify-a54b0a30.js", "assets/css/page-main-GoogleVerify-193cdf16.css", "assets/js/page-home-other-bb563938.js", "assets/js/page-home-AllGames-e4490e91.js", "assets/css/page-home-AllGames-f826c318.css", "assets/css/page-home-other-194bf7f6.css", "assets/css/page-main-SettingCenter-48faf3e2.css", "assets/css/page-main-index.vue_vue_type_script_setup_true_lang-d9204ab3.css", "assets/css/page-wallet-Recharge-a7bc9298.css", "assets/js/page-test-index.vue_vue_type_script_setup_true_lang.tsx-f489521d.js", "assets/css/page-test-index.vue_vue_type_script_setup_true_lang-3cbdbbc4.css", "assets/js/page-promotion-MyInvitation-6a8e0f1b.js", "assets/css/page-promotion-MyInvitation-66710573.css", "assets/css/page-wallet-Withdraw-7ff2af60.css", "assets/js/page-wallet-RechargeHistory-511aaf2c.js", "assets/css/page-wallet-RechargeHistory-087ac70f.css", "assets/css/page-wallet-WithdrawHistory-730b49d5.css"])
});
const gt = ["AllGames"];
for (const e in Ys) {
    const s = e.split("/")[2];
    s !== "home" && s !== "test" && bs.push({
        path: s === "home" ? "/" : `/${s}`,
        name: s,
        component: Ys[e],
        meta: {
            title: s,
            tabBar: wR.includes(s),
            keepAlive: gt.includes(s)
        }
    })
}
Ys = null;
for (const e in Qs) {
    const s = "/" + e.split("/")[2] + "/" + e.split("/")[3]
      , t = e.split("/")[3];
    if (s.includes("components"))
        break;
    bs.push({
        path: s,
        name: t,
        component: Qs[e],
        meta: {
            title: e.split("/")[3],
            parent: e.split("/")[2],
            tabBar: !1,
            keepAlive: gt.includes(t)
        }
    })
}
Qs = null;
for (const e in Zs) {
    const s = "/" + e.split("/")[2] + "/" + e.split("/")[3] + "/" + e.split("/")[4]
      , t = e.split("/")[3] + "-" + e.split("/")[4];
    if (s.includes("components"))
        break;
    bs.push({
        path: s,
        name: t,
        component: Zs[e],
        meta: {
            title: e.split("/")[4],
            parent: e.split("/")[3],
            tabBar: !1,
            keepAlive: gt.includes(t)
        }
    })
}
Zs = null;
const uR = [{
    path: "/:pathMatch(.*)",
    redirect: "/",
    meta: {
        title: "NotFound",
        tabBar: !1,
        keepAlive: !1
    }
}];
bs.push(...uR);
const Ae = Nn({
    history: Vn("/"),
    routes: bs,
    scrollBehavior(e, s, t) {
        return {
            top: 0
        }
    }
});
Ae.beforeEach(async (e, s, t) => {
    const n = he();
    await Dk();
    let a = ["/", "/main", "/activity", "/promotion", "/wallet", "/main/About/AboutDetail", "/main/SettingCenter/LoginPassword", "/main/SettingCenter", "/maintenance"];
    if (["/main"].includes(e.path) && n.notifyARGame(),
    Number(localStorage.getItem("isToLogin")) == 1 || a.includes(s.path) && e.path === As)
        return localStorage.setItem("isToLogin", "2"),
        t();
    if (e.path === As)
        return n.token ? t("/") : t();
    if (dR.includes(e.path))
        return t();
    if (!n.token)
        return t({
            path: As,
            replace: !0
        });
    t()
}
);
const o = {
    GetHomeWebSite: "/GetAppDownloadUrl",
    GetAppDownloadConfigList: "/GetAppDownloadConfigList",
    GetBannerList: "/GetBannerList",
    GetHotGameList: "/GetHotGameList",
    GetClicksTopGameList: "/GetClicksTopGameList",
    GetThirdGameList: "/GetThirdGameList",
    GetThirdGameCategory: "/GetThirdGameCategory",
    GetSmallGameOrFishList: "/GetSmallGameOrFishList",
    GetGameCategoryList: "/GetGameCategoryList",
    GetLotteryCategoryList: "/GetLotteryCategoryList",
    GetHotLotteryList: "/GetHotLotteryList",
    GetAllGameList: "/GetAllGameList",
    GetGameUrl: "/GetGameUrl",
    GetMessageList: "/GetMessageList",
    SetOneMessageState: "/SetOneMessageState",
    SetAllMessageState: "/SetAllMessageState",
    GetHomeSettings: "/GetHomeSettings",
    OneKeyMarkAllData: "/OneKeyMarkAllData",
    GetElectronWithChildGame: "/GetElectronWithChildGame",
    GetVideWithChildGame: "/GetVideWithChildGame",
    GetLotteryGameTypeList: "/GetLotteryGameTypeList",
    GetBalanceByARGame: "/GetBalanceByARGame",
    GetSelfCustomerServiceLink: "/GetSelfCustomerServiceLink",
    IsCanAppDownload: "/IsCanAppDownload",
    GetDailyProfitRank: "/GetDailyProfitRank",
    GetSlotGamesList: "/GetSlotGamesList",
    GetSiteMessageList: "/GetSiteMessageList",
    GetSiteMessage: "/GetSitePopMsgList",
    GetMaintenanceInfo: "/GetMaintenanceInfo",
    GetAllowBetSetting: "/GetAllowBetSetting",
    NotifyARGameRecover: "/NotifyARGameRecover",
    Transfer: "/Transfer",
    FBMsgSubscribe: "/UserFBMsgSubscribe",
    GetSafeInfo: "/GetSafeInfo",
    GetWealthState: "/GetWealthState",
    GetSafeAmount: "/GetSafeAmount",
    SetSafeBack: "/SetSafeBack",
    GetSafeUserAmount: "/GetSafeUserAmount",
    SetSafeInto: "/SetSafeInto",
    GetSafeList: "/GetSafeList",
    GetSafeLogList: "/GetSafeLogList",
    GetActivityList: "/GetActivityList",
    GetActivityDetails: "/GetActivityDetails",
    GetDailyTaskList: "/GetTaskList",
    GetContinuousSignInRecharges: "/GetContinuousSignInRecharges",
    GetProductList: "/GetProductList",
    GetBannerTypeList: "/GetBannerTypeList",
    GetIntegralLogList: "/GetIntegralLogList",
    GetProductOrderList: "/GetProductOrderList",
    GetProductOrderDetails: "/GetProductOrderDetails",
    SetProductOrder: "/SetProductOrder",
    SetContinuousSinIn: "/SetContinuousSinIn",
    GetContinuousSinInList: "/GetContinuousSinInList",
    CancelOrderData: "/CancelOrderData",
    GetUserAddress: "/GetUserAddress",
    UpdateUserAddress: "/UpdateUserAddress",
    GetProductRules: "/GetProductRules",
    GetPointMallState: "/GetPointMallState",
    GetPointsLotteryList: "/GetPointsLotteryList",
    GetPointsLotteryDetails: "/GetPointsLotteryDetails",
    GetPointsLotteryOrderList: "/GetPointsLotteryOrderList",
    GetPointLotteryUserAddress: "/GetPointLotteryUserAddress",
    AddPointsLotteryUserAddress: "/AddPointsLotteryUserAddress",
    UpdatePointLotteryUserAddress: "/UpdatePointLotteryUserAddress",
    SetDefaultPointsLotteryUserAddress: "/SetDefaultPointsLotteryUserAddress",
    DeletePointsLotteryUserAddress: "/DeletePointsLotteryUserAddress",
    ReceiveAllGrandAward: "/ReceiveAllGrandAward",
    JoinPointsLottery: "/JoinPointsLottery",
    GetPrize: "/GetPrize",
    NeedPopupFirstRecharge: "/NeedPopupFirstRecharge",
    ReceiveFirstRechargeReward: "/ReceiveFirstRechargeReward",
    GetFirstRechargeList: "/GetFirstRechargeList",
    GetActiveSetting: "/GetActiveSetting",
    GetWeeklyAwardList: "/GetWeeklyAwardList",
    ReceiveWeeklyAward: "/ReceiveWeeklyAward",
    GetWeeklyAwardRecordList: "/GetWeeklyAwardRecordList",
    SaveUserGuidelines: "/SaveUserGuidelines",
    SaveUserDayRequest: "/SaveUserDayRequest",
    GetNewbieGiftPackage: "/GetNewbieGiftPackage",
    ReceiveAward: "/ReceiveAward",
    GetDailyAwardCount: "/GetDailyAwardCount",
    GetDailyAwardList: "/GetDailyAwardList",
    ReceiveDailyAward: "/ReceiveDailyAward",
    GetDailyAwardRecordList: "/GetDailyAwardRecordList",
    NewPromotion: "/NewPromotion",
    PromotionMytem: "/PromotionMytem",
    PromotionTutorial: "/PromotionTutorial",
    GetUrlAddress: "/GetUrlAddress",
    GetPromotionRecord: "/GetPromotionRecord",
    GetAgentServiceList: "/GetAgentServiceList",
    GetTotalRebateRules: "/GetTotalRebateRules",
    GetCommissionDetails: "/GetCommissionDetails",
    GetTeamDayReport: "/TeamDayReport",
    GetPartnerRewards: "/GetPartnerRewards",
    GetPartnerRewardsDeatilList: "/GetPartnerRewardsDeatilList",
    Login: "/Login",
    RefreshToken: "/RefreshToken",
    GetUserInfo: "/GetUserInfo",
    SmsVerifyCode: "/SmsVerifyCode",
    Register: "/Register",
    RegisterState: "/RegisterState",
    LoginOff: "/LoginOff",
    ForgetPassword: "/ForgetPassword",
    ResetPassword: "/ResetPassword",
    EditUserPhoto: "/EditUserPhoto",
    EditNickName: "/EditNickName",
    VerifyPhoneCode: "/VerifyPhoneCode",
    ResetPhoneNum: "/ResetPhoneNum",
    captcha: "/Captcha",
    checkCaptcha: "/Validate",
    GetLoadedSetting: "/GetLoadedSetting",
    ReceiveReturnAwards: "/ReceiveReturnAwards",
    ReceiveDownAppReward: "/ReceiveDownAppReward",
    ReceiveRegisterGift: "/ReceiveRegisterGift",
    ConversionRedpage: "/ConversionRedpage",
    GetRedpagePageList: "/GetRedpagePageList",
    GameStatis: "/GameStatis",
    GetNewMyEmerdList: "/GetNewMyEmerdList",
    GetTaskList: "/GetTaskList",
    SetTaskOrder: "/SetTaskOrder",
    GetCurrentActivityTasks: "/GetCurrentActivityTasks",
    GetCurrentActivityLevel1People: "/GetCurrentActivityLevel1People",
    GetGoogleVerify: "/GetGoogleVerify",
    GetCustomerServiceTypelist: "/GetCustomerServiceTypelist",
    GetAgentServiceTypeList: "/GetAgentServiceTypeList",
    GetCustomerServiceList: "/GetCustomerServiceList",
    GetIsExistGrandPrizeReward: "/GetIsExistGrandAward",
    ThirdGameReceiveGrandPrizeReward: "/ReceiveGrandAward",
    GetThirdGameRewardsRecordPageList: "/GetGrandAwardPageList",
    GetReWordConfigList: "/GetGrandAwardConfigList",
    GetThirdGameAwardRecordPageList: "/GetHomeGrandAwardPageList",
    bindEmail: "/BindEmail",
    VerifyEmailCode: "/VerifyEmailCode",
    BindPhone: "/BindPhone",
    EmailVerifyCode: "/EmailVerifyCode",
    BindGoogleVerify: "/BindGoogleVerify",
    ResetGoogleVerify: "/ResetGoogleVerify",
    CloseGoogleVerify: "/CloseGoogleVerify",
    RecoverBalance: "/RecoverBalance",
    RecoverSaasBalance: "/RecoverSaasBalance",
    GetCustomerServiceGroup: "/GetCustomerServiceGroup",
    GetProtocols: "/GetProtocols",
    GetAgreement: "/GetAgreement",
    GetPlayingGuide: "/GetPlayingGuide",
    SubmitSuggest: "/SubmitSuggest",
    GetBalance: "/GetBalance",
    GetAllwallets: "/GetAllwallets",
    GetSaasAllwallets: "/GetSaasAllwallets",
    GetARGameAndPlatWallets: "/GetARGameAndPlatWallets",
    GetUserAmount: "/GetUserAmount",
    GetRechargeRecord: "/GetRechargeRecord",
    GetC2CRechargeRecord: "/GetC2CRechargeRecord",
    GetWithdrawLog: "/GetWithdrawLog",
    GetTransactions: "/GetTransactions",
    GetTransactionsTypes: "/GetTransactionsTypes",
    GetWithdrawalTypes: "/GetWithdrawalTypes",
    GetBankList: "/GetBankList",
    getWithdrawals: "/getWithdrawals",
    NewSetWithdrawal: "/NewSetWithdrawal",
    SetWithdrawalBankCard: "/SetWithdrawalBankCard",
    DeleteBankCard: "/DeleteBankCard",
    SetWithdrawalUsdt: "/SetWithdrawalUsdt",
    SetWithdrawalWallet: "/SetWithdrawalWallet",
    SetWithdrawalCpf: "/SetWithdrawalCpf",
    GetUserRealName: "/GetUserRealName",
    SetWithdrawalUPISendOtp: "/SetWithdrawalFastUPISendOtp",
    SetWithdrawalUPISendOtpByWithdrawId: "/SetWithdrawalFastUPISendOtpByWithdrawId",
    SetWithdrawalUPIVerifyOtpByWithdrawId: "/SetWithdrawalFastUPIVerifyOtpByWithdrawId",
    SetWithdrawalUPISendOtpByBid: "/SetWithdrawalFastUPISendOtpByBid",
    SetWithdrawalUPIVerifyOtp: "/SetWithdrawalFastUPIVerifyOtp",
    GetListNeedKycConnectWithdrawOrder: "/GetListFastUpiNeedKycConnectWithdrawOrder",
    WinGoGetTypeList: "/GetTypeList",
    WinGoGetGameIssue: "/GetGameIssue",
    WinGoGetNoaverageEmerdList: "/GetNoaverageEmerdList",
    WinGoGetMyEmerdList: "/GetMyEmerdList",
    WinGoGetEmerdList: "/GetEmerdList",
    WinGoGameBetting: "/GameBetting",
    WinGoGetWinTheLotteryResult: "/GetWinTheLotteryResult",
    GetLastFiveIssueNumberResult: "/GetLastFiveIssueNumberResult",
    GetRuleByTypeId: "/GetRuleByTypeId",
    WinTxrGetTRXtypeList: "/GetTRXtypeList",
    WinTxrGetTRXGameIssue: "/GetTRXGameIssue",
    WinTxrGetTRXNoaverageEmerdList: "/GetTRXNoaverageEmerdList",
    WinTxrGetTRXMyEmerdList: "/GetTRXMyEmerdList",
    WinTxrGetEmerdList: "/GetTRXEmerdList",
    WinTxrGameTRXBetting: "/GameTRXBetting",
    GetTrxWinTheLotteryResult: "/GetTrxWinTheLotteryResult",
    GetTRXRuleByTypeId: "/GetTRXRuleByTypeId",
    GetXosoGameBaseData: "/GetXosoGameBaseData",
    GetVietnamAreList: "/GetListGameConfig",
    GetDayIssueNolist: "/GetIssueNoList",
    GetXosoOdds: "/GetListXosoOdds",
    GetXosoResult: "/GetXosoResultPageList",
    GetXosoUserRecord: "/GetXosoRecordPageList",
    XosoBetting: "/AddXosoBetting",
    GetListUserResult: "/GetUserResultList",
    CancelBetOrder: "/CancelXosoBetOrder",
    GetXosoAreGamePlay: "/GetXosoAreaPlay",
    GetXosoAreaPlayOdd: "/GetXosoAreaPlayOdd",
    GetFXosoIssueNoList: "/GetFXosoIssueNoList",
    GetFXosoAreaPlay: "/GetFXosoAreaPlay",
    GetFXosoAreaPlayOdd: "/GetFXosoAreaPlayOdd",
    GetFXosoResultPageList: "/GetFXosoResultPageList",
    GetFXosoResult: "/GetFXosoResult",
    GetFXosoRecordPageList: "/GetFXosoRecordPageList",
    AddFXosoBetting: "/AddFXosoBetting",
    GetFXosoUserResult: "/GetFXosoUserResult",
    WinGetWinsUserAmount: "/GetWinsUserAmount",
    GetK3TypeList: "/GetK3TypeList",
    GetGameK3Issue: "/GetGameK3Issue",
    GetK3OneEmerd: "/GetK3OneEmerd",
    GetK3OddsList: "/GetK3OddsList",
    K3GameBetting: "/K3GameBetting",
    GetK3NoaverageEmerdList: "/GetK3NoaverageEmerdList",
    GetMyK3EmerdList: "/GetMyK3EmerdList",
    GetK3TheLotteryResult: "/GetK3TheLotteryResult",
    GetK3RuleByTypeId: "/GetK3RuleByTypeId",
    Get5DtypeList: "/Get5DtypeList",
    GetGame5DIssue: "/GetGame5DIssue",
    Get5DOneEmerd: "/Get5DOneEmerd",
    Get5DOddsList: "/Get5DOddsList",
    Game5DBetting: "/Game5DBetting",
    GetNoaverage5DEmerdList: "/GetNoaverage5DEmerdList",
    Get5DEmerdList: "/Get5DEmerdList",
    GetMy5DEmerdList: "/GetMy5DEmerdList",
    GetD5TheLotteryResult: "/GetD5TheLotteryResult",
    Get5DRuleByTypeId: "/Get5DRuleByTypeId",
    GetLongDragon: "/GetLongDragon",
    GetDateTimeScopeTypes: "/GetDateTimeScopeTypes",
    GetSettingByKey: "/GetSettingByKey",
    GetPayTypeName: "/GetPayTypeName",
    GetRechargeTypes: "/GetRechargeTypes",
    NewSetRechargesBankOrder: "/NewSetRechargesBankOrder",
    UpRechargesBankOrder: "/UpRechargesBankOrder",
    UpdateRechargesUpiOrder: "/UpdateRechargesUpiOrder",
    GetBankOrder: "/GetBankOrder",
    GetBankOrderInfo: "/GetBankOrderInfo",
    C2CRechargeCancel: "/C2CRechargeCancel",
    C2CRecharge: "/C2CRecharge",
    C2CRechargeGetOrderDetail: "/C2CRechargeGetOrderDetail",
    C2CRechargeConfirm: "/C2CRechargeConfirm",
    C2CRechargeGetPayingDetail: "/C2CRechargeGetPayingDetail",
    GetC2CRechargeAwardAmountList: "/GetC2CRechargeAwardAmountList",
    GetC2CCancelReason: "/GetC2CCancelReason",
    C2CRechargeAppeal: "/C2CRechargeAppeal",
    RechargesUsdtOrder: "/RechargesUsdtOrder",
    GetUsdtOrder: "/GetUsdtOrder",
    RechargesUpiOrder: "/RechargesUpiOrder",
    GetUpiOrder: "/GetUpiOrder",
    UpdateRechargesUsdtOrder: "/UpdateRechargesUsdtOrder",
    CheckFirstPixRecharge: "/CheckFirstPixRecharge",
    ARBWalletMemberInfo: "/ARBWalletMemberInfoNet",
    ARBWalletActivate: "/ARBWalletActivateNet",
    ARBWalletEnter: "/ARBWalletEnterNet",
    GetARPayUrl: "/GetARPayUrl",
    ThirdPay: "/ThirdPay",
    NewSetBankQRCodeOrder: "/NewSetBankQRCodeOrder",
    CreateRechargeOrder: "/CreateRechargeOrder",
    RSNWalletMemberInfo: "/RSNWalletMemberInfoNet",
    RSNActivateNet: "/RSNWalletActivateNet",
    RSNEnterNet: "/RSNWalletEnterNet",
    GetRSNPayUrl: "/GetRSNPayUrl",
    CreateRechargeOrderAppeal: "/CreateRechargeOrderAppeal",
    GetArUpiPayUrl: "/GetPayUrl",
    CancelRechargeOrder: "/ArUpiCancelRechargeOrder",
    GetArUpiOnGoingOrder: "/GetArUpiOnGoingOrder",
    GetArBruiedPage: "/ArBuriedPage",
    ArUpiSubmitUtr: "/ArUpiSubmitUtr",
    ArUpiGetBankListToken: "/ArUpiGetBankListToken",
    GetRechargeChannel: "/GetRechargeChannel",
    CheckUpiIdExists: "/CheckUpiIdExists",
    CheckUpiIdFastExists: "/CheckFastUpiIdExists",
    GetCodeModel: "/GetCodeModel",
    SetWithdrawalUPI: "/SetWithdrawalUPI",
    SetWithdrawalFastUPI: "/SetWithdrawalFastUPI",
    GetC2CWithdrawRecord: "/GetC2CWithdrawRecord",
    GetC2CWithdrawOrderDetail: "/GetC2CWithdrawOrderDetail",
    C2CWithdrawConfirm: "/C2CWithdrawConfirm",
    C2CWithdrawAppeal: "/C2CWithdrawAppeal",
    GetNewUPICanBindCardList: "/GetNewUPICanBindCardList",
    SetWithdrawalNewUPI: "/SetWithdrawalNewUPI",
    GetNewUPIBindMobileNo: "/GetNewUPIBindMobileNo",
    C2CWithdrawRematch: "/C2CWithdrawRematch",
    GetC2CWithdrawRecommendedAmount: "/GetC2CWithdrawRecommendedAmount",
    ChangeC2CWithdrawOrderAmount: "/ChangeC2CWithdrawOrderAmount",
    C2CWithdrawalCancel: "/C2CWithdrawalCancel",
    C2CWithdrawOrderAmountError: "/C2CWithdrawOrderAmountError",
    GetVipUsers: "/GetVipUsers",
    GetPageListVipUserRecord: "/GetPageListVipUserRecord",
    GetListVipLevel: "/GetListVipLevel",
    GetListVipUserRewards: "/GetListVipUserRewards",
    GetVipUserLevelDetail: "/GetVipUserLevelDetail",
    AddReceiveAward: "/AddReceiveAward",
    GetAllVipLevelList: "/GetAllVipLevelList",
    GetCodeWashAmount: "/GetCodeWashAmount",
    AddCodeWashRecord: "/AddCodeWashRecord",
    GetCodeWashRecordList: "/GetCodeWashRecordList",
    GetCodeWashRule: "/GetCodeWashRule",
    UploadImage: "/UploadImage",
    UploadVideo: "/UploadVideo",
    GetMyBingo18HistoryBetting: "/GetMyBingo18HistoryBetting",
    GetBinguoGameConfig: "/GetBingo18GameConfig",
    GetGameBingo18Issue: "/GetGameBingo18Issue",
    GetBingo18OddsList: "/GetBingo18OddsList",
    GetBingo18LastGameResult: "/GetBingo18LastGameResult",
    GetBingo18BetAmount: "/GetBingo18BetAmount",
    Bingo18Betting: "/Bingo18Betting",
    GetBingo18Last50Result: "/GetBingo18Last50Result",
    GetTrendstatistics: "/GetTrendstatistics",
    GetLotteryRankList: "/GetLotteryRankList",
    GetLotteryResult7Day: "/GetLotteryResult7Day",
    GetUserRankList: "/GetUserRankList",
    Get4DGameConfig: "/Get4DGameConfig",
    GetGame4DIssue: "/GetGame4DIssue",
    Get4DOddsList: "/Get4DOddsList",
    Get4DGameResult: "/Get4DGameResult",
    GetMy4DHistoryBetting: "/GetMy4DHistoryBetting",
    D4GameBetting: "/D4GameBetting",
    D4GameCancelOrder: "/D4GameCancelOrder",
    GetGameTypeList: "/GetGameTypeList",
    Get4DGameResultByType: "/Get4DGameResultByType",
    GetChampionTaskList: "/GetChampionTaskList",
    ChampionEntrance: "/ChampionEntrance",
    JoinChampionTask: "/JoinChampionTask",
    GetChampionTaskDetail: "/GetChampionTaskDetail",
    GetTop10ChampionTaskDataUserList: "/GetTop10ChampionTaskDataUserList",
    GetMyChampionTaskList: "/GetMyChampionTaskList",
    GetNowdayRechargeAmount: "/GetNowdayRechargeAmount",
    GetTurnTableUserRotateNum: "/GetTurnTableUserRotateNum",
    GetTurnTableInfo: "/GetTurnTableInfo",
    GetTurnTableRecord: "/GetTurnTableRecord",
    GetTurnTableDraw: "/TurnTableDraw",
    GetGiftPackUserRewardRecord: "/GetGiftPackUserRewardRecord",
    ApplyReceiveGiftPackUserReward: "/ApplyReceiveGiftPackUserReward",
    ApplyFirstCharge: "/ApplyFirstCharge",
    UpdateOnlineStatus: "/UpdateOnlineStatus",
    GetInvitedWheelInfo: "/GetInvitedWheelInfo",
    SpinInvitedWheel: "/SpinInvitedWheel",
    GetUserInvitedWheelWithdrawList: "/GetUserInvitedWheelWithdrawList",
    SubmitInvitedWheelWithdraw: "/SubmitInvitedWheelWithdraw",
    GetInvitedWheelRules: "/GetInvitedWheelRules",
    GetPwaDomainList: "/GetPwaDomainList",
    GetRewardCenterList: "/GetRewardCenterList",
    SetUserLanguage: "/SetUserLanguage"
}
  , bR = async (e, s) => p(o.Login, e, {}, s)
  , vR = e => p(o.GetUserInfo, e)
  , mR = () => p(o.SetUserLanguage, {})
  , yR = e => p(o.SmsVerifyCode, e)
  , QD = e => p(o.VerifyPhoneCode, e)
  , fR = (e, s) => p(o.Register, e, {}, s)
  , tn = () => p(o.RegisterState)
  , ZD = e => p(o.LoginOff, e).then(s => s.data)
  , eE = e => p(o.ForgetPassword, e)
  , sE = e => p(o.ResetPassword, e)
  , tE = e => p(o.EditUserPhoto, e)
  , AR = async (e={}, s) => {
    let t = "";
    try {
        const n = await us.post("https://tosma.lhlasjdanc.com/")
          , a = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        n.data && a.test(n.data) && (t = n.data || "")
    } catch {}
    return p(o.RefreshToken, e, {}, {
        "AR-REAL-IP": t
    })
}
  , nE = e => p(o.EditNickName, e)
  , hR = e => p(o.SetTaskOrder, e).then(s => s)
  , aE = async () => p(o.GetTaskList).then(e => e.data)
  , oE = e => e.categoryType == 3 || e.categoryType == 6 ? p(o.GetSmallGameOrFishList, {
    gameType: e.categoryType
}) : p(o.GetThirdGameCategory, e)
  , pE = () => p(o.captcha)
  , nn = e => p(o.ThirdGameReceiveGrandPrizeReward, e)
  , cE = async e => p(o.GetThirdGameRewardsRecordPageList, e)
  , _R = e => p(o.EmailVerifyCode, e)
  , iE = e => p(o.bindEmail, e)
  , gE = e => p(o.VerifyEmailCode, e)
  , SR = e => p(o.BindPhone, e)
  , jR = () => p(o.GetLoadedSetting)
  , an = () => p(o.ReceiveReturnAwards)
  , on = () => p(o.ReceiveDownAppReward)
  , $R = () => p(o.ReceiveRegisterGift)
  , {t: We} = Te.global
  , GR = e => {
    let s = "";
    switch (e) {
    case 400:
        s = We("statusTip1");
        break;
    case 404:
        s = We("statusTip4");
        break;
    case 405:
        s = We("statusTip5");
        break;
    case 408:
        s = We("statusTip6");
        break;
    case 500:
        s = We("statusTip7");
        break;
    case 502:
        s = We("statusTip8");
        break;
    case 503:
        s = We("statusTip9");
        break;
    case 504:
        s = We("statusTip10");
        break;
    default:
        s = We("statusTip11")
    }
    s ? Fe(s) : Ne({
        message: "loading...",
        forbidClick: !0
    })
}
  , LR = {
    SUCCESS: 200,
    ERROR: 500,
    OVERDUE: 599,
    TIMEOUT: 3e4,
    TYPE: "success"
}
  , IR = {
    JSON: "application/json;charset=UTF-8",
    TEXT: "text/plain;charset=UTF-8",
    FORM_URLENCODED: "application/x-www-form-urlencoded;charset=UTF-8",
    FORM_DATA: "multipart/form-data;charset=UTF-8"
}
  , Je = new Map
  , kR = ["GetRechargeRecord", "GetPointMallState", "GetRechargeTypes", "RegisterState"]
  , vs = e => {
    const {url: s, data: t} = e;
    let n = typeof t == "string" ? JSON.parse(t) : $s(t);
    return delete n.random,
    delete n.timestamp,
    delete n.signature,
    [s, JSON.stringify(n)].join("&")
}
  , TR = e => {
    const {url: s} = e;
    let t = /api\/webapi\/(.+)/.exec(s);
    if (t && kR.includes(t[1]))
        return;
    const n = vs(e);
    n && (e.cancelToken = e.cancelToken || new us.CancelToken(a => {
        Je.has(n) || Je.set(n, a)
    }
    ))
}
  , Lt = e => {
    const s = vs(e);
    s && Je.has(s) && Je.delete(s)
}
  , RR = e => {
    const s = vs(e);
    s && Je.has(s) && (Je.get(s)("cancel"),
    Je.delete(s))
}
  , CR = us.CancelToken;
CR.source();
const PR = (e, s) => {
    const t = pt()
      , {setCacheData: n} = t;
    if (e.params && e.params.cache) {
        const a = vs(e);
        n(a, s)
    }
}
  , {t: Fs} = Te.global
  , DR = Qt();
var Et;
const ER = ((Et = window.CONFIG) == null ? void 0 : Et.VITE_API_URL) || "https://in999.club9.eu.cc/deepanshu"
  , BR = "/api/webapi";
let Hs = !1;
const xR = {
    timeout: LR.TIMEOUT
}
  , qs = () => {
    localStorage.setItem("isToLogin", "1"),
    he().setToken(""),
    sn().loginout(),
    Ae.push({
        path: As
    })
}
  , rt = us.create(xR);
rt.interceptors.request.use(e => {
    var y;
    const s = he()
      , t = s.getToken;
    e.data.language = Xt(),
    e.data.random = uT();
    const n = JSON.parse(JSON.stringify(e.data))
      , a = Object.keys(n);
    a.sort();
    const c = {}
      , i = ["signature", "track", "xosoBettingData"];
    a.forEach(u => {
        n[u] !== null && n[u] !== "" && !i.includes(u) && (c[u] = n[u] === 0 ? 0 : n[u])
    }
    ),
    e.data.signature = wT(JSON.stringify(c)),
    e.data.timestamp = Math.floor(Date.now() / 1e3);
    const l = localStorage.getItem("tokenHeader") || ""
      , g = localStorage.getItem("refreshToken") || ""
      , w = e.data;
    s.setReqData(w);
    const d = pt()
      , {getCacheValue: v} = d;
    if (e.params && e.params.cache) {
        const u = vs(e)
          , _ = v(u);
        if (_)
            return Promise.reject({
                ..._,
                cache: !0
            })
    }
    return RR(e),
    TR(e),
    {
        ...e,
        headers: {
            "Content-Type": "application/problem+json; charset=utf-8",
            ...e.headers,
            Authorization: (y = e.url) != null && y.endsWith("/api/webapi/RefreshToken") ? l + g : l + t,
            "Ar-Origin": window.location.origin
        }
    }
}
, e => Promise.reject(e));
rt.interceptors.response.use(e => {
    switch (e.data.code) {
    case -2:
        return Promise.reject(e.data);
    case -1:
        return Promise.reject({
            msg: "System Error"
        });
    case 4:
        return qs(),
        Promise.reject({
            msg: Fs("tokenExpired")
        });
    case 13:
        return Promise.reject({
            msg: "Network Abnormal"
        });
    case 14:
        return Ae.push({
            name: "maintenance"
        }),
        Promise.reject({
            msg: "In maintenance"
        })
    }
    return e.data.code !== 0 && e.data.code !== 1 ? Promise.reject(e.data) : (Lt(e),
    PR(e.config, e.data),
    e.data)
}
, async e => {
    if (e.cache)
        return e;
    const {response: s, config: t} = e
      , n = he()
      , a = Is();
    if (e.code === "ERR_NETWORK" && Ne({
        message: "loading...",
        forbidClick: !0
    }),
    e.message === "cancel")
        return Promise.reject(!1);
    if (e.message.indexOf("timeout") !== -1 && Fe(Fs("requestTimedOut")),
    s)
        if (s.status === 401) {
            n.setIsOpen(!0);
            let c = t == null ? void 0 : t.url
              , i = /api\/webapi(.+)/.exec(c);
            if (i && (i = i[1],
            i === o.RefreshToken)) {
                Fe(Fs("tokenExpired")),
                n.setIsOpen(!1),
                qs();
                return
            }
            const l = n.isOpen;
            if (Hs)
                return;
            l && (a.setIsRefreshToken(!0),
            Hs = !0,
            AR().then(g => {
                if (g && g.data) {
                    const {token: w, tokenHeader: d, refreshToken: v} = g.data;
                    n.setToken(w),
                    localStorage.setItem("tokenHeader", d),
                    localStorage.setItem("refreshToken", v),
                    a.setIsRefreshToken(!1),
                    DR.emit("keyChange")
                }
            }
            ).catch(g => {
                switch (n.setIsOpen(!1),
                a.setIsRefreshToken(!1),
                g.code) {
                case 12:
                    ns(g),
                    qs();
                    break
                }
            }
            ).finally( () => {
                Hs = !1
            }
            ));
            return
        } else {
            const c = s.config.url || "";
            if (["/GetPwaDomainList"].some(l => c.includes(l)))
                return Promise.reject(s.data);
            /NotifyARGameRecover|Transfer|UserFBMsgSubscribe|UpdateOnlineStatus/.test(c) || GR(s.status)
        }
    return Lt(e.response),
    Promise.reject(e)
}
);
const p = (e, s, t, n) => {
    const a = {
        url: e.startsWith("https://") ? e : ER + BR + e,
        method: "post",
        headers: {
            "Content-Type": IR.JSON,
            noLoading: (t == null ? void 0 : t.noLoading) || !1
        },
        data: s || {}
    };
    return a.headers = Object.assign(a.headers, n),
    t != null && t.cache && (a.params = {
        cache: !0
    }),
    rt(a).then(c => c)
}
  , rE = e => p(o.GetActivityList, e)
  , OR = e => p(o.GetActivityDetails, e)
  , lE = e => p(o.GetContinuousSignInRecharges)
  , MR = () => p(o.GetUrlAddress)
  , dE = e => p(o.SetContinuousSinIn, e)
  , wE = e => p(o.GetContinuousSinInList, e, {
    noLoading: !0
})
  , uE = e => p(o.GetProductList, e, {
    noLoading: !0
})
  , bE = (e={}) => p(o.GetBannerTypeList, e)
  , vE = e => p(o.GetIntegralLogList, e)
  , mE = e => p(o.GetProductOrderList, e)
  , yE = e => p(o.GetProductOrderDetails, e)
  , fE = e => p(o.SetProductOrder, e)
  , AE = e => p(o.CancelOrderData, e)
  , hE = async e => p(o.GetUserAddress, e)
  , _E = async e => p(o.UpdateUserAddress, e)
  , SE = async () => p(o.GetProductRules)
  , jE = e => p(o.GetPointsLotteryList, e, {
    noLoading: !0
})
  , WR = e => p(o.GetPointsLotteryDetails, e, {
    noLoading: !0
})
  , $E = e => p(o.GetPointsLotteryOrderList, e, {
    noLoading: !0
})
  , UR = e => p(o.JoinPointsLottery, e, {
    noLoading: !0
})
  , GE = e => p(o.GetPrize, e)
  , LE = e => p(o.UpdatePointLotteryUserAddress, e)
  , IE = e => p(o.AddPointsLotteryUserAddress, e)
  , NR = e => p(o.DeletePointsLotteryUserAddress, e)
  , VR = e => p(o.SetDefaultPointsLotteryUserAddress, e)
  , FR = () => p(o.GetPointLotteryUserAddress)
  , HR = () => p(o.ReceiveAllGrandAward)
  , qR = async () => p(o.NeedPopupFirstRecharge)
  , KR = async e => p(o.ReceiveFirstRechargeReward, e)
  , zR = async e => p(o.GetFirstRechargeList, e)
  , XR = async () => p(o.GetActiveSetting)
  , kE = async () => p(o.GetWeeklyAwardList)
  , JR = async e => p(o.ReceiveWeeklyAward, e)
  , TE = async e => p(o.GetWeeklyAwardRecordList, e)
  , YR = async () => p(o.SaveUserDayRequest)
  , QR = async () => p(o.SaveUserGuidelines)
  , RE = async () => p(o.GetCurrentActivityTasks)
  , CE = async e => p(o.GetCurrentActivityLevel1People, e)
  , PE = async () => p(o.GetNewbieGiftPackage)
  , ZR = async e => p(o.ReceiveAward, e).then(s => s)
  , eC = async () => p(o.GetDailyAwardCount)
  , DE = async () => p(o.GetDailyAwardList)
  , sC = async e => p(o.ReceiveDailyAward, e)
  , EE = async e => p(o.GetDailyAwardRecordList, e)
  , BE = async e => p(o.GetChampionTaskList, e)
  , tC = async () => p(o.ChampionEntrance)
  , xE = async e => p(o.JoinChampionTask, e)
  , nC = async e => p(o.GetChampionTaskDetail, e)
  , aC = async e => p(o.GetTop10ChampionTaskDataUserList, e)
  , OE = async e => p(o.GetMyChampionTaskList, e)
  , oC = async () => p(o.GetNowdayRechargeAmount)
  , pC = async () => p(o.GetTurnTableUserRotateNum)
  , cC = async () => p(o.GetTurnTableInfo)
  , ME = async e => p(o.GetTurnTableRecord, e)
  , iC = async () => p(o.GetTurnTableDraw)
  , gC = async () => p(o.GetGiftPackUserRewardRecord)
  , It = async e => p(o.ApplyReceiveGiftPackUserReward, e)
  , rC = async e => p(o.ApplyFirstCharge, e)
  , kt = e => p(o.GetRewardCenterList, e)
  , WE = () => p(o.GetHomeWebSite)
  , UE = () => p(o.GetAppDownloadConfigList)
  , lC = (e={}) => p(o.GetBannerList, e, {
    cache: !0
})
  , Ls = e => p(o.GetGameUrl, e)
  , NE = e => p(o.GetThirdGameList, Object.assign({
    isMiniGame: !0
}, e || {}), {
    cache: !0
})
  , dC = e => p(o.GetThirdGameList, Object.assign({
    isMiniGame: !0
}, e || {}))
  , VE = e => p(o.GetMessageList, e)
  , FE = e => p(o.SetOneMessageState, e)
  , HE = e => p(o.SetAllMessageState, e).then(s => s.data)
  , pn = (e={}) => p(o.GetDailyProfitRank, e).then(s => s.data)
  , qE = e => p(o.GetSiteMessageList, e)
  , wC = () => p(o.GetSiteMessage)
  , KE = () => p(o.GetSafeInfo)
  , zE = () => p(o.GetWealthState).then(e => e.data)
  , XE = () => p(o.GetSafeAmount)
  , JE = e => p(o.SetSafeBack, e)
  , YE = () => p(o.GetSafeUserAmount)
  , QE = e => p(o.GetSafeList, e)
  , ZE = e => p(o.GetSafeLogList, e).then(s => s.data)
  , cn = async () => p(o.GetGameCategoryList, {}, {
    cache: !0
})
  , eB = async () => p(o.GetLotteryCategoryList, {}, {
    cache: !0
})
  , gn = async () => p(o.GetAllGameList, {}, {
    cache: !0
})
  , uC = async () => p(o.GetHomeSettings)
  , bC = () => p(o.GetReWordConfigList)
  , sB = e => p(o.GetThirdGameAwardRecordPageList, e)
  , rn = async () => p(o.GetElectronWithChildGame, {}, {
    cache: !0
})
  , ln = () => p(o.GetVideWithChildGame)
  , Tt = async e => p(o.GetSelfCustomerServiceLink, {
    webSite: e
})
  , vC = async () => p(o.GetAllowBetSetting)
  , Rt = async () => p(o.NotifyARGameRecover)
  , tB = async () => p(o.GetBalanceByARGame)
  , mC = async () => p(o.Transfer)
  , yC = async e => p(o.FBMsgSubscribe, e)
  , nB = async () => p(o.UpdateOnlineStatus)
  , fC = async () => p(o.GetPwaDomainList)
  , aB = () => p(o.NewPromotion)
  , oB = async e => p(o.GetCommissionDetails, e).then(s => s.data)
  , pB = async e => p(o.PromotionMytem, e)
  , cB = async () => p(o.PromotionTutorial).then(e => e.data)
  , iB = e => p(o.GetTeamDayReport, e)
  , gB = async e => p(o.GetPromotionRecord, e)
  , AC = e => p(o.GetAgentServiceList, e)
  , rB = async () => p(o.GetTotalRebateRules).then(e => e.data)
  , hC = async () => p(o.GetPartnerRewards)
  , lB = async e => p(o.GetPartnerRewardsDeatilList, e)
  , dB = async e => p(o.ConversionRedpage, e)
  , wB = async e => p(o.SetSafeInto, e)
  , uB = async e => p(o.GetRedpagePageList, e)
  , bB = async e => p(o.GameStatis, e).then(s => s.data)
  , vB = () => p(o.GetProtocols)
  , mB = () => p(o.GetAgreement)
  , yB = () => p(o.GetPlayingGuide)
  , fB = e => p(o.SubmitSuggest, e)
  , AB = e => p(o.GetGoogleVerify, e).then(s => s)
  , hB = async e => p(o.GetNewMyEmerdList, e)
  , _C = () => p(o.GetCustomerServiceTypelist)
  , SC = () => p(o.GetAgentServiceTypeList)
  , jC = e => p(o.GetCustomerServiceList, e)
  , $C = () => p(o.GetCustomerServiceGroup)
  , GC = () => p(o.GetPointMallState)
  , _B = e => p(o.GetCodeWashAmount, e)
  , SB = e => p(o.AddCodeWashRecord, e)
  , jB = e => p(o.GetCodeWashRecordList, e)
  , $B = () => p(o.GetCodeWashRule)
  , GB = e => p(o.BindGoogleVerify, e)
  , LB = e => p(o.CloseGoogleVerify, e)
  , IB = () => p(o.OneKeyMarkAllData)
  , LC = async () => p(o.GetBalance)
  , IC = (e=!1) => {
    const s = Re();
    return p(s.isSwitchSaasBalance || e ? o.RecoverSaasBalance : o.RecoverBalance)
}
  , kC = async (e=!1) => {
    const s = Re();
    return p(s.isSwitchSaasBalance || e ? o.GetSaasAllwallets : o.GetAllwallets)
}
  , TC = async () => p(o.GetARGameAndPlatWallets)
  , kB = async e => p(o.GetRechargeRecord, e)
  , TB = async e => p(o.GetC2CRechargeRecord, e)
  , RB = async e => p(o.GetWithdrawLog, e)
  , CB = async e => p(o.GetWithdrawLog, e)
  , PB = () => p(o.GetWithdrawalTypes)
  , DB = async e => p(o.getWithdrawals, e)
  , EB = async e => p(o.NewSetWithdrawal, e)
  , BB = () => p(o.GetUserRealName)
  , xB = async e => p(o.SetWithdrawalCpf, e)
  , OB = async e => p(o.GetBankList, e)
  , MB = async e => p(o.SetWithdrawalBankCard, e)
  , WB = async e => p(o.DeleteBankCard, e)
  , UB = async e => p(o.SetWithdrawalUsdt, e)
  , NB = () => p(o.GetTransactionsTypes)
  , VB = async e => p(o.GetTransactions, e)
  , FB = async e => p(o.GetSettingByKey, e)
  , RC = async e => p(o.GetPayTypeName, e)
  , HB = async e => p(o.GetRechargeTypes, e)
  , qB = async e => p(o.NewSetRechargesBankOrder, e)
  , KB = async e => p(o.UpRechargesBankOrder, e)
  , zB = async e => p(o.UpdateRechargesUpiOrder, e)
  , XB = async e => p(o.GetBankOrder, e)
  , JB = async e => p(o.GetBankOrderInfo, e)
  , YB = async e => p(o.C2CRechargeCancel, e)
  , QB = async e => p(o.C2CRecharge, e)
  , ZB = async e => p(o.C2CRechargeGetOrderDetail, e)
  , ex = async e => p(o.C2CRechargeConfirm, e)
  , sx = async () => p(o.C2CRechargeGetPayingDetail)
  , tx = async e => p(o.GetC2CRechargeAwardAmountList, e)
  , nx = async e => p(o.C2CRechargeAppeal, e)
  , ax = async e => p(o.GetC2CCancelReason, e)
  , ox = async e => p(o.SetWithdrawalUPI, e)
  , px = async () => p(o.GetNewUPIBindMobileNo)
  , cx = async e => p(o.GetC2CWithdrawRecord, e)
  , ix = async e => p(o.GetC2CWithdrawOrderDetail, e)
  , gx = async e => p(o.C2CWithdrawConfirm, e)
  , rx = async e => p(o.C2CWithdrawRematch, e)
  , lx = async e => p(o.C2CWithdrawOrderAmountError, e)
  , dx = async e => p(o.C2CWithdrawalCancel, e)
  , wx = async e => p(o.C2CWithdrawAppeal, e)
  , ux = async e => p(o.SetWithdrawalWallet, e)
  , bx = async e => p(o.RechargesUsdtOrder, e)
  , vx = async e => p(o.GetUsdtOrder, e)
  , mx = async e => p(o.RechargesUpiOrder, e)
  , yx = async e => p(o.GetUpiOrder, e)
  , fx = async e => p(o.UpdateRechargesUsdtOrder, e)
  , Ax = async () => p(o.CheckFirstPixRecharge)
  , CC = async e => p(o.ARBWalletMemberInfo, e)
  , PC = async e => p(o.ARBWalletActivate, e)
  , DC = async e => p(o.ARBWalletEnter, e)
  , hx = async () => p(o.GetARPayUrl)
  , _x = async e => p(o.ThirdPay, e)
  , Sx = async e => p(o.NewSetBankQRCodeOrder, e)
  , jx = async e => p(o.CreateRechargeOrder, e)
  , $x = async () => p(o.RSNWalletMemberInfo)
  , EC = async e => p(o.RSNActivateNet, e)
  , BC = async e => p(o.RSNEnterNet, e)
  , Gx = async () => p(o.GetRSNPayUrl)
  , Lx = async e => p(o.GetArUpiPayUrl, e)
  , Ix = async e => p(o.CreateRechargeOrderAppeal, e)
  , kx = async e => p(o.CancelRechargeOrder, e)
  , Tx = async e => p(o.GetArUpiOnGoingOrder, e)
  , xC = async e => p(o.GetArBruiedPage, e)
  , Rx = async e => p(o.ArUpiSubmitUtr, e)
  , Cx = async e => p(o.ArUpiGetBankListToken, e)
  , OC = async e => p(o.SetWithdrawalUPISendOtp, e)
  , MC = async e => p(o.SetWithdrawalUPISendOtpByBid, e)
  , Px = async e => p(o.SetWithdrawalUPIVerifyOtp, e)
  , WC = async e => p(o.SetWithdrawalUPISendOtpByWithdrawId, e)
  , Dx = async e => p(o.SetWithdrawalUPIVerifyOtpByWithdrawId, e)
  , Ex = async e => p(o.GetListNeedKycConnectWithdrawOrder, e)
  , Bx = async e => p(o.CheckUpiIdExists, e)
  , xx = async e => p(o.CheckUpiIdFastExists, e)
  , Ox = async e => p(o.SetWithdrawalFastUPI, e)
  , Mx = () => p(o.GetVipUsers)
  , Wx = e => p(o.GetPageListVipUserRecord, e)
  , Ux = e => p(o.GetListVipLevel, e)
  , Nx = e => p(o.GetListVipUserRewards, e)
  , Vx = () => p(o.GetVipUserLevelDetail)
  , Ct = e => p(o.AddReceiveAward, e)
  , Fx = () => p(o.GetAllVipLevelList)
  , UC = () => p(o.WinGoGetTypeList).then(e => e)
  , Hx = e => p(o.WinGoGetGameIssue, e).then(s => s.data)
  , qx = e => p(o.WinGoGetNoaverageEmerdList, e).then(s => s.data)
  , Kx = e => p(o.WinGoGetMyEmerdList, e).then(s => s.data)
  , zx = e => p(o.WinGoGetEmerdList, e).then(s => s.data)
  , Xx = e => p(o.WinGoGameBetting, e)
  , Jx = e => p(o.WinGoGetWinTheLotteryResult, e).then(s => s.data)
  , Yx = e => p(o.GetLongDragon, e)
  , Qx = e => p(o.GetLastFiveIssueNumberResult, e)
  , NC = e => p(o.GetRuleByTypeId, e).then(s => s)
  , VC = () => p(o.WinTxrGetTRXtypeList).then(e => e)
  , Zx = e => p(o.WinTxrGetTRXGameIssue, e).then(s => s.data)
  , eO = e => p(o.WinTxrGameTRXBetting, e).then(s => s)
  , sO = e => p(o.WinTxrGetTRXNoaverageEmerdList, e).then(s => s.data)
  , tO = e => p(o.WinTxrGetTRXMyEmerdList, e).then(s => s.data)
  , nO = e => p(o.WinTxrGetEmerdList, e).then(s => s.data)
  , aO = e => p(o.GetTrxWinTheLotteryResult, e)
  , FC = e => p(o.GetTRXRuleByTypeId, e).then(s => s)
  , HC = () => p(o.GetK3TypeList).then(e => e)
  , oO = e => p(o.GetGameK3Issue, e).then(s => s.data)
  , pO = e => p(o.GetK3OneEmerd, e)
  , cO = () => p(o.GetK3OddsList)
  , iO = e => p(o.K3GameBetting, e).then(s => s)
  , gO = e => p(o.GetK3NoaverageEmerdList, e).then(s => s.data)
  , rO = e => p(o.GetMyK3EmerdList, e)
  , lO = e => p(o.GetK3TheLotteryResult, e)
  , qC = e => p(o.GetK3RuleByTypeId, e).then(s => s)
  , KC = () => p(o.Get5DtypeList).then(e => e)
  , dO = e => p(o.GetGame5DIssue, e).then(s => s.data)
  , wO = e => p(o.Get5DOneEmerd, e).then(s => s.data)
  , uO = () => p(o.Get5DOddsList).then(e => e.data)
  , bO = e => p(o.Game5DBetting, e)
  , vO = e => p(o.GetNoaverage5DEmerdList, e)
  , mO = e => p(o.Get5DEmerdList, e)
  , yO = e => p(o.GetMy5DEmerdList, e)
  , fO = e => p(o.GetD5TheLotteryResult, e)
  , zC = e => p(o.Get5DRuleByTypeId, e).then(s => s)
  , AO = e => p(o.GetDayIssueNolist, e)
  , hO = e => p(o.GetFXosoIssueNoList, e)
  , _O = e => p(o.XosoBetting, e).then(s => s)
  , SO = e => p(o.AddFXosoBetting, e).then(s => s)
  , jO = e => p(o.GetXosoResult, e)
  , $O = e => p(o.GetXosoUserRecord, e)
  , GO = e => p(o.GetFXosoRecordPageList, e)
  , LO = e => p(o.GetFXosoResultPageList, e)
  , IO = e => p(o.GetFXosoResult, e)
  , kO = e => p(o.CancelBetOrder, e)
  , TO = e => p(o.GetXosoAreGamePlay, e)
  , RO = e => p(o.GetFXosoAreaPlay, e)
  , CO = e => p(o.GetFXosoUserResult, e)
  , PO = e => p(o.GetXosoAreaPlayOdd, e)
  , DO = e => p(o.GetFXosoAreaPlayOdd, e)
  , EO = e => p(o.GetXosoGameBaseData, e)
  , BO = async () => p(o.GetDateTimeScopeTypes).then(e => e.data)
  , xO = async e => p(o.UploadImage, e, {}, {
    "Content-Type": "multipart/form-data"
})
  , OO = async e => p(o.UploadVideo, e, {}, {
    "Content-Type": "multipart/form-data"
})
  , MO = () => p(o.Get4DGameConfig).then(e => e)
  , WO = () => p(o.GetGame4DIssue).then(e => e)
  , UO = e => p(o.D4GameBetting, e).then(s => s)
  , NO = () => p(o.Get4DOddsList).then(e => e)
  , VO = () => p(o.GetGameTypeList).then(e => e)
  , FO = e => p(o.GetMy4DHistoryBetting, e).then(s => s)
  , HO = () => p(o.Get4DGameResult).then(e => e)
  , qO = e => p(o.Get4DGameResultByType, e).then(s => s)
  , KO = e => p(o.D4GameCancelOrder, e).then(s => s)
  , XC = async () => p(o.GetInvitedWheelInfo)
  , JC = async () => p(o.SpinInvitedWheel)
  , zO = async () => p(o.GetInvitedWheelRules)
  , YC = async e => p(o.GetUserInvitedWheelWithdrawList, e)
  , XO = async e => p(o.SubmitInvitedWheelWithdraw, e)
  , {localStore: Pt} = ct()
  , ve = us.create({
    baseURL: "https://apiweb.arbpay.me",
    timeout: 3e4
});
ve.interceptors.request.use(e => {
    const s = e.data;
    return s && Object.keys(s).forEach(t => {
        s[t] === "" && delete s[t]
    }
    ),
    e.method === "post" && (e.data = {
        ...e.data,
        token: Pt.get("ar_p_t")
    }),
    e.method === "get" && (e.params = {
        ...e.params,
        token: Pt.get("ar_p_t") || ""
    }),
    e
}
, e => Promise.reject(e));
ve.interceptors.response.use(e => {
    const s = Te.global.t
      , {data: t, config: n, status: a} = e;
    return n.method === "put" && a === 200 ? (ue(s("UploadSuccessful")),
    !0) : t
}
, e => {
    const s = Te.global.t;
    return Fe(s("pServer")),
    Promise.reject(e)
}
);
function JO(e) {
    return ve.post("/ar-wallet/v4/apiCenter/payWithoutUtr", e)
}
function YO(e) {
    return ve.post("/ar-wallet/v4/apiCenter/subUtr", e)
}
function QC(e) {
    return ve.post("/ar-wallet/v4/apiCenter/status", e)
}
function QO(e) {
    return ve.get("/ar-wallet/v4/apiCenter/fetchThirdPartyRechargePageInfoEncryption")
}
function ZO(e) {
    return ve.post("/ar-wallet/v4/apiCenter/noPay", e)
}
function ZC(e) {
    return ve.get("/ar-wallet/signUp/getCurrentCustomerServiceSystem", {
        params: e
    })
}
function eM(e) {
    return ve.post("/ar-wallet/v4/apiCenter/submitRechargeAppeal", e)
}
function sM(e) {
    return ve.post("/ar-wallet/v4/apiCenter/rechargeAppealExist", e)
}
function tM(e) {
    return ve.post("/ar-wallet/v4/apiCenter/getBanks/forBuyAppeal", e)
}
function nM(e) {
    return ve.post("/ar-wallet/v4/apiCenter/sendOtp", e)
}
function aM(e) {
    return ve.post("/ar-wallet/v4/apiCenter/verifyOtp", e)
}
function oM(e) {
    return ve.post("/ar-wallet/v4/apiCenter/confirmPayment", e)
}
function eP(e) {
    return ve.post("/ar-wallet/v4/apiCenter/onPaymentPageExit", e)
}
function pM(e) {
    return ve.post("/ar-wallet/v4/apiCenter/cancellationReasonList", e)
}
function cM(e) {
    return ve.post("/ar-wallet/v4/apiCenter/subForWakeUp", e)
}
var sP = (e => (e.QuickApk = "quick_apk",
e.FullApk = "full_apk",
e))(sP || {});
const tP = Fn( () => {
    const e = Hn("apk-value-storage", "");
    return {
        apk: e,
        setApk: s => {
            e.value = s
        }
        ,
        getApk: () => e.value,
        isFullApk: () => !!e.value && e.value === "full_apk"
    }
}
)
  , nP = tP()
  , iM = () => {
    "serviceWorker"in navigator && window.addEventListener("load", () => {
        navigator.serviceWorker.register("/ar-sw.js").then(e => {}
        ).catch(e => {
            console.error("Service Worker registration failed:", e)
        }
        )
    }
    ),
    aP()
}
;
function aP() {
    var e;
    try {
        if ((e = window.NativeBridge) != null && e.getInfoString) {
            const s = window.NativeBridge.getInfoString()
              , t = JSON.parse(s);
            window.gtag("event", t.apkType),
            wn("apkInfo", t),
            nP.setApk(t.apkType || "native")
        }
    } catch (s) {
        console.error("🍎获取原生参数失败:", s)
    }
    return {}
}
function gM() {
    var e;
    try {
        if ((e = window.NativeBridge) != null && e.openExternalUrl)
            return !0
    } catch (s) {
        console.error("🍎检查是否为原生WebView失败:", s)
    }
    return !1
}
function Xe() {
    var e;
    try {
        if ((e = window.NativeBridge) != null && e.openExternalPage)
            return !0
    } catch (s) {
        console.error("🍎检查是否为原生WebView失败:", s)
    }
    return !1
}
function ws(e) {
    var a;
    const s = getComputedStyle(document.documentElement)
      , t = s.getPropertyValue("--main-color").trim()
      , n = s.getPropertyValue("--text_color_L1").trim();
    (a = window.NativeBridge) == null || a.openExternalPage(JSON.stringify({
        ...e,
        backgroundColor: t,
        fontColor: n
    }))
}
function oP(e) {
    var s;
    try {
        (s = window.NativeBridge) != null && s.openExternalUrl && window.NativeBridge.openExternalUrl(e)
    } catch (t) {
        _s({
            message: t instanceof Error ? t.message : "open external url failed",
            duration: 2e3,
            type: "fail"
        }),
        console.error("🍎打开外部链接失败:", t)
    }
}
function pP(e) {
    const s = location.origin
      , t = {
        name: e,
        short_name: e,
        start_url: s + "/",
        display: "standalone",
        safari_specific: {
            safari_extension_version: 2,
            permissions: ["cross-origin-content", "web-page"]
        },
        icons: [{
            src: s + "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
        }, {
            src: s + "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
        }]
    }
      , n = new Blob([JSON.stringify(t)],{
        type: "application/manifest+json"
    })
      , a = URL.createObjectURL(n)
      , c = document.createElement("link");
    c.rel = "manifest",
    c.href = a,
    document.head.appendChild(c),
    cP()
}
const cP = async () => {
    const {code: e, data: s} = await fC();
    if (e == 0) {
        const t = s.map(n => ({
            jumpDomain: n.startsWith("http") ? n : hT(n)
        }));
        if (t.length === 0)
            return;
        await wn("domainInfo", {
            landingDomainList: t
        }),
        iP() && window.parent.postMessage({
            type: "upDomainList",
            params: t
        }, "*")
    }
}
;
async function dn() {
    return new Promise( (e, s) => {
        const t = indexedDB.open("_arstorage", 2);
        t.onerror = n => {
            const a = n.target && "error"in n.target ? n.target.error : void 0;
            s(a)
        }
        ,
        t.onsuccess = n => {
            if (!n.target) {
                s(new Error("IndexedDB onsuccess event.target is null"));
                return
            }
            const i = n.target.result.transaction(["_ionickv"], "readwrite").objectStore("_ionickv");
            e(i)
        }
        ,
        t.onupgradeneeded = n => {
            if (!n.target)
                throw new Error("IndexedDB onupgradeneeded event.target is null");
            const a = n.target.result;
            a.objectStoreNames.contains("_ionickv") || a.createObjectStore("_ionickv")
        }
    }
    )
}
function iP() {
    const e = new URL(window.location.href);
    return e.searchParams.get("unTopWindow") === "true" && e.searchParams.get("domainType") !== "google"
}
async function gP(e, s, t) {
    const n = await dn()
      , a = n == null ? void 0 : n.get(e);
    a.onsuccess = () => s([[e], a.result]),
    a.onerror = c => t(c.target.error)
}
async function rM(e) {
    const s = await Promise.all(e.map(t => new Promise( (n, a) => gP(t, n, a))));
    try {
        return Object.fromEntries(s)
    } catch {
        const n = {};
        return s.forEach( ([a,c]) => {
            n[a] = c
        }
        ),
        n
    }
}
async function wn(e, s) {
    return new Promise( (t, n) => {
        dn().then(a => {
            const i = a.put(s, e);
            i.onsuccess = () => t(!0),
            i.onerror = l => {
                l.target ? n(l.target.error) : n(new Error("putRequest.onerror: event.target is null"))
            }
        }
        )
    }
    )
}
const Ks = {};
pe.extend(qn);
const Dt = localStorage.getItem("language") || "zh";
let ds = "";
switch (Dt) {
case "zh_TC":
    ds = "zh-tw";
    break;
case "tc":
    ds = "zh-tw";
    break;
default:
    ds = Dt;
    break
}
ds && pe.locale(ds);
const lt = (e, s="YYYY-MM-DD HH:mm:ss") => {
    var t = 8
      , n = new Date().getTimezoneOffset();
    if (!e)
        return "";
    typeof e == "number" && (e = new Date(e * 1e3));
    var a = e.getTime()
      , c = new Date(a + n * 60 * 1e3 + t * 60 * 60 * 1e3)
      , i = {
        "M+": c.getMonth() + 1,
        "D+": c.getDate(),
        "h+": c.getHours() % 12 === 0 ? 12 : c.getHours() % 12,
        "H+": c.getHours(),
        "m+": c.getMinutes(),
        "s+": c.getSeconds(),
        "q+": Math.floor((c.getMonth() + 3) / 3),
        S: c.getMilliseconds()
    }
      , l = {
        0: "日",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六"
    };
    /(Y+)/.test(s) && (s = s.replace(RegExp.$1, (c.getFullYear() + "").substr(4 - RegExp.$1.length))),
    /(E+)/.test(s) && (s = s.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + l[e.getDay() + ""]));
    for (var g in i)
        new RegExp("(" + g + ")").test(s) && (s = s.replace(RegExp.$1, RegExp.$1.length === 1 ? i[g] : ("00" + i[g]).substr(("" + i[g]).length)));
    return s
}
  , un = (e, s=1, t="YYYY-MM-DD HH:mm:ss") => {
    var n = e;
    return s === 1 ? (isNaN(n) && (n = 0),
    n = Math.round(parseInt(e.valueOf())),
    n = pe(n).format(t)) : s === 2 && (n = dt(n)),
    n
}
  , dt = e => {
    e = e.replace(/-/g, "/");
    var s = Math.round(parseInt(new Date(e).valueOf()) / 1e3);
    return isNaN(s) && (s = 0),
    s
}
  , bn = e => parseInt(e / 1e3)
  , hs = e => {
    var s = new Date().getTimezoneOffset() / 60;
    if (s > 0)
        var t = 8 - s
          , t = t * 60 * 60
          , n = e - t - 46800 + t;
    else
        var t = 8 + s
          , t = t * 60 * 60
          , n = e - t;
    return n < 0 ? 0 : n
}
  , vn = (e, s) => {
    let t = e;
    return t.startTime && (t.startTime = parseInt(t.startTime / 1e3 || 0),
    t.startTime = hs(t.startTime)),
    t.endTime && (t.endTime = parseInt(t.endTime / 1e3 || 0),
    t.endTime = hs(t.endTime)),
    s && s.length > 0 && s.map(n => {
        let a = t[n];
        a && (a = parseInt(a / 1e3 || 0),
        a = hs(a))
    }
    ),
    t
}
  , rP = () => Math.ceil(new Date().getTime() / 1e3)
  , lP = () => pe(new Date).add(7, "day").unix()
  , mn = (e, s="YYYY-MM-DD HH:mm:ss") => {
    let t = lt(e, s);
    return pe().to(pe(t))
}
;
let yn = {
    filterDate: lt,
    filterTimeStamp: un,
    makeNewTimes: dt,
    toUnix: bn,
    toBeiJingTime: vn,
    fromNow: mn
};
function dP(e) {
    return e.replace(e[0], e[0].toUpperCase())
}
function wP(e, s) {
    let t = {};
    return e.map(n => {
        t[n.value] = n.key
    }
    ),
    s || s === 0 ? t[s] : ""
}
let fn = [];
for (let e in Ks) {
    if (Ks[e][0].auto === !1)
        break;
    let t = "filter" + dP(e);
    fn.push([t, n => wP(Ks[e], n)])
}
fn.forEach( ([e,s]) => {
    yn[e] = t => s(t)
}
);
const uP = yn
  , bP = Object.freeze(Object.defineProperty({
    __proto__: null,
    Timestamp: hs,
    filterDate: lt,
    filterTimeStamp: un,
    fromNow: mn,
    getNowTime: rP,
    makeNewTimes: dt,
    nextWeek: lP,
    refiter: uP,
    toBeiJingTime: vn,
    toUnix: bn
}, Symbol.toStringTag, {
    value: "Module"
}))
  , lM = bP
  , vP = {
    key: 0,
    class: "active-container"
}
  , mP = ["src"]
  , yP = {
    class: "active-box"
}
  , fP = {
    class: "title"
}
  , AP = ["src"]
  , hP = ["innerHTML"]
  , _P = {
    key: 2
}
  , SP = ["src"]
  , jP = xt({
    __name: "index",
    setup(e) {
        const s = De()
          , {setLoading: t} = Is()
          , n = S({})
          , a = async () => {
            var g;
            t(!0);
            const l = await G(OR({
                bannerId: Number(s.currentRoute.value.query.id)
            }));
            (g = l == null ? void 0 : l.data) == null || g.jumpType,
            n.value = l.data,
            t(!1)
        }
          , c = $( () => {
            var l;
            if (!((l = n.value) != null && l.img))
                return [];
            try {
                return JSON.parse(n.value.img)
            } catch {
                return []
            }
        }
        );
        function i() {
            s.go(-1)
        }
        return et(async () => {
            a()
        }
        ),
        (l, g) => {
            const w = Ot("NavBar");
            return ke(),
            Ie(zs, null, [Ut(w, {
                title: l.$t("activityDestitle"),
                backgroundColor: "#f54545",
                placeholder: !1,
                "left-arrow": "",
                onClickLeft: i
            }, null, 8, ["title"]), n.value.coverUrl || n.value.title || n.value.img ? (ke(),
            Ie("div", vP, [ze("img", {
                class: "banner",
                src: n.value.coverUrl
            }, null, 8, mP), ze("div", yP, [ze("div", fP, Wt(n.value.title), 1), n.value.jumpType == 4 ? (ke(),
            Ie("iframe", {
                key: 0,
                src: n.value.contents
            }, null, 8, AP)) : n.value.jumpType !== 3 ? (ke(),
            Ie("div", {
                key: 1,
                innerHTML: n.value.img
            }, null, 8, hP)) : (ke(),
            Ie("div", _P, [(ke(!0),
            Ie(zs, null, Mt(c.value, (d, v) => (ke(),
            Ie("div", {
                key: v
            }, [ze("img", {
                src: d == null ? void 0 : d.Url
            }, null, 8, SP)]))), 128))]))])])) : Kn("v-if", !0)], 64)
        }
    }
});
const $P = Jt(jP, [["__scopeId", "data-v-cfff515d"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/activity/ActivityDetail/index.vue"]])
  , GP = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: $P
}, Symbol.toStringTag, {
    value: "Module"
}));
export {OD as $, G as A, mD as B, CD as C, jE as D, uE as E, bE as F, he as G, IE as H, _E as I, yD as J, $E as K, NP as L, mE as M, Te as N, AE as O, yE as P, hE as Q, JR as R, dE as S, GE as T, LE as U, JP as V, vE as W, fE as X, vR as Y, SE as Z, Jt as _, xD as a, Ok as a$, ME as a0, CT as a1, rE as a2, sn as a3, Is as a4, WD as a5, eD as a6, HB as a7, hx as a8, PC as a9, XT as aA, gM as aB, oP as aC, WE as aD, UE as aE, NE as aF, AD as aG, gn as aH, cn as aI, rD as aJ, FD as aK, VD as aL, Ce as aM, Ls as aN, Xe as aO, ws as aP, $e as aQ, ts as aR, Ye as aS, as as aT, ot as aU, it as aV, pt as aW, HE as aX, VE as aY, FE as aZ, rn as a_, DB as aa, EB as ab, ve as ac, KD as ad, SD as ae, $D as af, GD as ag, ct as ah, sM as ai, eM as aj, qD as ak, HD as al, zD as am, pM as an, QO as ao, JO as ap, jD as aq, LD as ar, ZO as as, cM as at, YO as au, tM as av, aM as aw, nM as ax, oM as ay, Ae as az, Kt as b, QD as b$, hT as b0, tB as b1, qE as b2, tP as b3, sP as b4, Gc as b5, en as b6, $s as b7, Qt as b8, vT as b9, fB as bA, qP as bB, gT as bC, bB as bD, ED as bE, AB as bF, GB as bG, LB as bH, yB as bI, aE as bJ, hR as bK, CE as bL, RE as bM, _B as bN, SB as bO, jB as bP, $B as bQ, OE as bR, dB as bS, uB as bT, Mx as bU, nE as bV, OP as bW, IB as bX, gE as bY, iE as bZ, sE as b_, ln as ba, iR as bb, zt as bc, lT as bd, Dk as be, cR as bf, Ft as bg, yR as bh, jT as bi, eE as bj, gD as bk, pE as bl, fD as bm, _R as bn, vB as bo, mB as bp, tE as bq, p as br, o as bs, YD as bt, eB as bu, rT as bv, Vt as bw, hB as bx, KP as by, oE as bz, fs as c, Ix as c$, tD as c0, SR as c1, KE as c2, QE as c3, IC as c4, XE as c5, YE as c6, YP as c7, wB as c8, JE as c9, DP as cA, DD as cB, BP as cC, xP as cD, kD as cE, TD as cF, xO as cG, XD as cH, zO as cI, XO as cJ, YC as cK, Fx as cL, ZP as cM, Wx as cN, Vx as cO, Ux as cP, Nx as cQ, Ct as cR, YB as cS, ZB as cT, ax as cU, RC as cV, Lx as cW, Tx as cX, $x as cY, Gx as cZ, kx as c_, ZE as ca, QP as cb, RD as cc, cE as cd, sB as ce, lR as cf, zE as cg, ZD as ch, oB as ci, BO as cj, pB as ck, rB as cl, MR as cm, cB as cn, gB as co, UD as cp, lB as cq, iB as cr, aB as cs, Ue as ct, rM as cu, yt as cv, tn as cw, nB as cx, PP as cy, EP as cz, XP as d, MP as d$, Cx as d0, bx as d1, Ax as d2, Uk as d3, lD as d4, _x as d5, QB as d6, tx as d7, sx as d8, XB as d9, PB as dA, FB as dB, Px as dC, Ex as dD, OB as dE, MB as dF, px as dG, Ox as dH, xx as dI, sD as dJ, ux as dK, xB as dL, BB as dM, UB as dN, ox as dO, Bx as dP, WB as dQ, rx as dR, ix as dS, gx as dT, wx as dU, dx as dV, OO as dW, lx as dX, RB as dY, wn as dZ, tT as d_, yx as da, zB as db, ex as dc, vx as dd, fx as de, qB as df, Sx as dg, vD as dh, JB as di, KB as dj, TB as dk, kB as dl, jx as dm, mx as dn, dD as dp, Rx as dq, nx as dr, NB as ds, VP as dt, VB as du, hD as dv, CB as dw, Dx as dx, PD as dy, cx as dz, BE as e, kO as e$, WP as e0, bD as e1, wD as e2, uD as e3, cs as e4, HP as e5, FP as e6, _D as e7, iM as e8, lM as e9, cO as eA, gO as eB, oO as eC, pO as eD, lO as eE, nO as eF, jO as eG, LO as eH, $O as eI, GO as eJ, AO as eK, hO as eL, IO as eM, TO as eN, RO as eO, PO as eP, DO as eQ, pD as eR, cD as eS, oD as eT, aD as eU, nD as eV, iD as eW, _O as eX, SO as eY, CO as eZ, UP as e_, rR as ea, LC as eb, MO as ec, WO as ed, UO as ee, NO as ef, VO as eg, FO as eh, HO as ei, qO as ej, KO as ek, uO as el, bO as em, vO as en, mO as eo, dO as ep, wO as eq, fO as er, zx as es, yO as et, rO as eu, Kx as ev, tO as ew, Yx as ex, Xx as ey, iO as ez, zP as f, qx as f0, Hx as f1, Qx as f2, Jx as f3, sO as f4, Zx as f5, aO as f6, eO as f7, EO as f8, ss as g, ns as h, ND as i, xE as j, lE as k, wE as l, WT as m, BD as n, PE as o, ZR as p, sC as q, uT as r, kE as s, DE as t, JD as u, TE as v, EE as w, MD as x, Re as y, ID as z};
