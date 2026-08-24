import {
    G as J,
    r as $,
    B as oe,
    H as P,
    I as o,
    J as e,
    Q as b,
    au as j,
    O as l,
    N as t,
    K as R,
    M as X,
    at as Y,
    an as g,
    ao as T,
    P as n,
    a$ as _e,
    b0 as he,
    aA as A,
    bd as ie,
    R as Z,
    z as $e,
    a6 as ce,
    A as ge,
    C as re,
    az as de,
    aw as F,
    aB as fe,
    aC as ye,
    ax as we,
    V as ke
} from "./common.modules-af1f85b9.js";
import {
    y as Te,
    A as B,
    cO as Ve,
    b as I,
    _ as K,
    a4 as L,
    g as D,
    c as E,
    cP as me,
    cQ as be,
    cR as Ce,
    bv as x,
    bw as O,
    cN as Se,
    G as Ie,
    bU as Re
} from "./page-activity-ActivityDetail-f7c58355.js";
import {
    E as De
} from "./page-activity-Bonus-8e38179c.js";
const Ae = {
        class: "vip-content-card"
    },
    Ne = {
        class: "vip-content-card-item"
    },
    Ee = {
        class: "itemInfo-right"
    },
    Me = ["src"],
    Ue = {
        class: "itemInfo-head"
    },
    He = ["src"],
    Fe = ["src"],
    Pe = {
        class: "bgg"
    },
    Be = ["innerHTML"],
    We = {
        class: "itemInfo-bottom mt50"
    },
    ze = {
        class: "itemInfo-right"
    },
    Ge = ["src"],
    xe = {
        class: "itemInfo-head"
    },
    Oe = ["src"],
    je = ["src"],
    Xe = {
        class: "bgg"
    },
    Je = ["innerHTML"],
    Qe = {
        class: "mb8"
    },
    qe = {
        class: "itemInfo-bottom"
    },
    Ke = {
        class: "first"
    },
    Ye = {
        class: "left"
    },
    Ze = {
        class: "right"
    },
    Le = ["innerHTML"],
    es = {
        class: "itemInfo-right"
    },
    ss = ["src"],
    ns = {
        class: "itemInfo-head"
    },
    as = ["src"],
    ls = ["src"],
    ts = {
        class: "mb30"
    },
    os = ["innerHTML"],
    is = {
        class: "itemInfo-bottom"
    },
    cs = J({
        __name: "VipCard",
        props: {
            haspermission: {
                type: Boolean,
                default: () => !0
            }
        },
        emits: ["changeLevel"],
        setup(S, {
            expose: N,
            emit: r
        }) {
            const k = $(0);
            let V = {
                    1: "#748AAA",
                    2: "#D67D26",
                    3: "#F05C5C",
                    4: "#32B6E8",
                    5: "#EA6ACA",
                    6: "#1EB18B",
                    7: "#1B9458",
                    8: "#3470E6",
                    9: "#8038F5",
                    10: "#EF7B27"
                },
                h = $();

            function C(a) {
                h = a
            }
            const f = $(!0),
                _ = a => {
                    f.value || r("changeLevel", i.value[a.activeIndex].id)
                },
                i = $([]);
            async function c() {
                var w;
                const a = await B(Ve());
                if (a) {
                    i.value = a == null ? void 0 : a.data;
                    let u = i.value.findIndex(M => M.id == k.value);
                    h.slideTo(u == -1 ? 0 : u);
                    let s = i.value.length > 0 ? (w = i.value[0]) == null ? void 0 : w.amount : 1e3;
                    sessionStorage.setItem("vipAmount", s)
                }
                f.value = !1
            }

            function d(a, w) {
                return !w || !w ? 0 : a > w ? 100 : Math.round(a / w * 1e4) / 100
            }

            function v(a, w) {
                return a > w ? w : a
            }
            const y = oe(() => Te().getDollarSign);
            return N({
                getVipUserLevelDetail: c,
                level: k
            }), (a, w) => {
                const u = P("van-progress");
                return t(), o("div", Ae, [e("div", Ne, [b(l(he), {
                    class: "my-swipe",
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    "space-between": 20,
                    onSlideChangeTransitionEnd: _,
                    onSwiper: C
                }, {
                    default: j(() => [(t(!0), o(R, null, X(i.value, s => (t(), Y(l(_e), {
                        class: T(`itemInfo level${s.id}`),
                        key: s.id
                    }, {
                        default: j(() => [g("status:2 已达成"), (s == null ? void 0 : s.status) == 2 && s.id != k.value ? (t(), o(R, {
                            key: 0
                        }, [e("div", Ee, [e("img", {
                            src: l(I)("vip/swiper/logo", `${s.id}`)
                        }, null, 8, Me)]), e("div", Ue, [e("div", null, [e("img", {
                            src: l(I)("vip/swiper/crown", `${s.id!=1?2:s.id}`)
                        }, null, 8, He), e("h1", {
                            class: T(`level${s.id!=1?2:s.id}`)
                        }, n(s.vipName), 3), e("img", {
                            src: l(I)("vip/swiper", "HaveReached")
                        }, null, 8, Fe), e("span", Pe, n(a.$t("achieved")), 1)]), e("div", {
                            class: T(["border", `level${s.id}`])
                        }, [e("p", {
                            innerHTML: a.$t("vipTip1", [s.id, s.id])
                        }, null, 8, Be)], 2)]), e("div", We, [s.upgradeStatus == 2 ? (t(), o("h2", {
                            key: 0,
                            class: T(`level${s.id}`)
                        }, n(a.$t("vipTip3", [s.id])), 3)) : (t(), o("h2", {
                            key: 1,
                            class: T(`level${s.id}`)
                        }, n(a.$t("vipTip14", [s.id])), 3))])], 64)) : g("v-if", !0), (s == null ? void 0 : s.id) == k.value ? (t(), o(R, {
                            key: 1
                        }, [e("div", ze, [e("img", {
                            src: l(I)("vip/swiper/logo", `${s.id}`)
                        }, null, 8, Ge)]), e("div", xe, [e("div", null, [e("img", {
                            src: l(I)("vip/swiper/crown", `${s.id!=1?2:s.id}`)
                        }, null, 8, Oe), e("h1", {
                            class: T(`level${s.id!=1?2:s.id}`)
                        }, n(s.vipName), 3), e("img", {
                            src: l(I)("vip/swiper", "HaveReached")
                        }, null, 8, je), e("span", Xe, n(a.$t("achieved")), 1)]), e("div", {
                            class: T(["border mb25", `level${s.id}`])
                        }, [e("p", {
                            innerHTML: a.$t("vipTip1", [s.id, s.id])
                        }, null, 8, Je)], 2), e("div", Qe, n(a.$t("vipcondition")), 1)]), e("div", qe, [e("div", Ke, [e("div", Ye, [e("span", {
                            class: T(`level level${s.id}`)
                        }, n(S.haspermission ? v(s.relegationExp, s.relegation) : 0) + "/" + n(s.relegation), 3)]), e("p", Ze, n(a.$t("completed1", [d(S.haspermission ? v(s.relegationExp, s.relegation) : 0, s.relegation)])), 1)]), e("div", null, [b(u, {
                            class: T(`level${s.id}`),
                            percentage: d(S.haspermission ? v(s.relegationExp, s.relegation) : 0, s.relegation),
                            "stroke-width": "8",
                            color: "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                            "track-color": l(V)[s.id],
                            "show-pivot": !1
                        }, null, 8, ["class", "percentage", "track-color"])]), e("div", null, [e("span", {
                            innerHTML: a.$t("vipTip2", [s.deductExp])
                        }, null, 8, Le)])])], 64)) : g("v-if", !0), g("status:1 未解锁"), (s == null ? void 0 : s.status) == 1 && (s == null ? void 0 : s.id) != k.value ? (t(), o(R, {
                            key: 2
                        }, [e("div", es, [e("img", {
                            src: l(I)("vip/swiper/logo", `${s.id}`)
                        }, null, 8, ss)]), e("div", ns, [e("div", null, [e("img", {
                            src: l(I)("vip/swiper/crown", `${s.id!=1?2:s.id}`)
                        }, null, 8, as), e("h1", {
                            class: T(`level${s.id!=1?2:s.id}`)
                        }, n(s.vipName), 3), e("img", {
                            src: l(I)("vip/swiper", "ununlocked")
                        }, null, 8, ls), e("span", null, n(a.$t("notUnlocked")), 1)]), e("div", ts, [e("p", {
                            innerHTML: a.$t("experience", [s.id, s.upgrade - s.currentExp])
                        }, null, 8, os)]), e("div", {
                            class: T(["border", `level${s.id}`])
                        }, n(a.$t("experience1", [y.value, s.amount])), 3)]), e("div", is, [e("p", null, n(s.vipName), 1), e("div", null, [b(u, {
                            class: T(`level${s.id}`),
                            percentage: d(S.haspermission ? s.currentExp : 0, s.upgrade),
                            "stroke-width": "8",
                            color: "linear-gradient(180deg, #FFFCE7 0%, #FFC821 100%)",
                            "track-color": l(V)[s.id],
                            "show-pivot": !1
                        }, null, 8, ["class", "percentage", "track-color"])]), e("div", null, [e("span", {
                            class: T(`level level${s.id}`)
                        }, n(S.haspermission ? s.currentExp : 0) + "/" + n(s.upgrade), 3), e("span", null, n(a.$t("upgrade", [s.upgrade])), 1)])])], 64)) : g("v-if", !0)]),
                        _: 2
                    }, 1032, ["class"]))), 128))]),
                    _: 1
                })])])
            }
        }
    });
const rs = K(cs, [
        ["__scopeId", "data-v-31cfa30d"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Vip/VipCard.vue"]
    ]),
    ds = {
        class: "vip-content-weal"
    },
    vs = {
        key: 0,
        class: "vip-content-weal-head ar-1px-b"
    },
    ps = ["src"],
    us = {
        key: 0
    },
    _s = {
        key: 1
    },
    hs = {
        key: 0
    },
    $s = ["src"],
    gs = {
        key: 1
    },
    fs = {
        class: "max"
    },
    ys = J({
        __name: "Weal",
        setup(S, {
            expose: N
        }) {
            const {
                setLoading: r
            } = L(), k = $(0), V = oe(() => k.value == 0 ? 1 : k.value), h = $([]);
            async function C(_) {
                r(!0);
                const i = await B(me({
                    vipLevel: _ == 0 ? 1 : _
                }));
                i && (h.value = i.data.filter(c => c.id > 2 && c.rate > 0 || c.id <= 2)), r(!1)
            }
            const f = _ => [1, 2].includes(_.id) && _.balance === 0 && _.integral === 0;
            return N({
                getListVipLevel: C,
                level: k
            }), (_, i) => {
                const c = P("svg-icon");
                return t(), o("div", ds, [b(ie, {
                    mode: "out-in"
                }, {
                    default: j(() => [(t(), o("div", {
                        class: "slide",
                        key: k.value
                    }, [h.value.length ? (t(), o("div", vs, [b(c, {
                        name: "diamond"
                    }), e("h1", null, "VIP" + n(V.value) + " " + n(_.$t("wealTXT1")), 1)])) : g("v-if", !0), (t(!0), o(R, null, X(h.value, (d, v) => (t(), o("div", {
                        class: T(`${f(d)?"isShow":"vip-content-weal-con"}`),
                        key: v
                    }, [e("div", null, [e("img", {
                        src: l(D)("main/weal", `${d.id}`)
                    }, null, 8, ps)]), e("div", null, [d.id != 3 ? (t(), o("h2", us, n(_.$t(`wealName${d.id}`)), 1)) : (t(), o("h2", _s, n(_.$t(`wealName${d.id}_1`)), 1)), e("span", null, n(_.$t(`wealDescription${d.id}`)), 1)]), d.id == 1 || d.id == 2 ? (t(), o("div", hs, [e("p", null, [e("img", {
                        src: l(D)("main", "gold")
                    }, null, 8, $s), A(n(l(E)(d.balance, " ", 0)), 1)]), e("p", null, [b(c, {
                        name: "love"
                    }), A(n(l(E)(d.integral, " ", 0)), 1)])])) : (t(), o("div", gs, [e("p", fs, [b(c, {
                        name: `weal${d.id}`
                    }, null, 8, ["name"]), A(n(d.rate) + "% ", 1)])]))], 2))), 128))]))]),
                    _: 1
                })])
            }
        }
    });
const ws = K(ys, [
        ["__scopeId", "data-v-9bb5e81c"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Vip/Weal.vue"]
    ]),
    ks = {
        class: "vip-content-myWelfare"
    },
    Ts = {
        class: "vip-content-myWelfare-head ar-1px-b"
    },
    Vs = {
        class: "vip-content-myWelfare-con"
    },
    ms = {
        class: "card"
    },
    bs = {
        class: "card-head"
    },
    Cs = ["src"],
    Ss = {
        class: "card-head-mon"
    },
    Is = ["src"],
    Rs = ["src"],
    Ds = {
        class: "card-bottom"
    },
    As = {
        key: 0,
        class: "noActive"
    },
    Ns = ["onClick"],
    Es = {
        key: 1,
        class: "card"
    },
    Ms = {
        class: "card-head tilt"
    },
    Us = ["src"],
    Hs = {
        class: "card-head-mon"
    },
    Fs = ["src"],
    Ps = {
        class: "card-bottom"
    },
    Bs = {
        key: 0
    },
    Ws = {
        key: 1
    },
    zs = J({
        __name: "MyWelfare",
        emits: ["succeedDialog"],
        setup(S, {
            expose: N,
            emit: r
        }) {
            const k = Z(),
                {
                    setLoading: V
                } = L(),
                h = $(0),
                C = $([]);
            async function f(i) {
                V(!0);
                const c = await B(be({
                    vipLevel: i
                }));
                c && (C.value = c.data.filter(d => d.rewardType > 2 && d.rate > 0 || d.rewardType <= 2)), V(!1)
            }
            async function _(i) {
                const c = await B(Ce({
                    receiveId: i.id,
                    vipLevel: h.value,
                    rewardType: i.rewardType
                }));
                c && (f(h.value), c != null && c.data && r("succeedDialog", {
                    integral: c == null ? void 0 : c.data.integral,
                    balance: c == null ? void 0 : c.data.balance
                }))
            }
            return N({
                getListVipUserRewards: f,
                levelMy: h
            }), (i, c) => {
                const d = P("svg-icon");
                return t(), o("div", ks, [b(ie, {
                    mode: "out-in"
                }, {
                    default: j(() => [(t(), o("div", {
                        class: "slideMy",
                        key: h.value
                    }, [e("div", Ts, [b(d, {
                        name: "crown"
                    }), e("h1", null, n(i.$t("vipDesc1")), 1)]), e("div", Vs, [(t(!0), o(R, null, X(C.value, (v, y) => (t(), o("div", {
                        class: "cards",
                        key: y
                    }, [v.rewardType == 1 || v.rewardType == 2 ? (t(), o(R, {
                        key: 0
                    }, [e("div", ms, [e("div", bs, [e("img", {
                        src: l(D)("main/myWelfare", `welfare${v.rewardType}`)
                    }, null, 8, Cs), e("div", Ss, [e("p", null, [e("img", {
                        src: l(D)("main", "gold")
                    }, null, 8, Is), A(n(l(E)(v.balance, " ", 0)), 1)]), e("p", null, [e("img", {
                        src: l(D)("main", "love2")
                    }, null, 8, Rs), A(n(l(E)(v.integral, " ", 0)), 1)])])]), e("div", Ds, [e("h1", null, n(i.$t(`wealName${v.rewardType}`)), 1), e("span", null, n(i.$t(`wealDescription${v.rewardType}`)), 1)])]), v.status == 2 ? (t(), o("button", As, n(i.$t("vipDesc4")), 1)) : (t(), o("button", {
                        key: 1,
                        class: "active",
                        onClick: a => _(v)
                    }, n(i.$t("vipDesc7")), 9, Ns))], 64)) : (t(), o("div", Es, [e("div", Ms, [e("img", {
                        src: l(D)("main/myWelfare", `welfare${v.rewardType}`)
                    }, null, 8, Us), e("div", Hs, [e("p", null, [e("img", {
                        src: l(D)("main", "wallet1")
                    }, null, 8, Fs), A(n(v.rate) + "%", 1)])])]), e("div", Ps, [v.rewardType != 3 ? (t(), o("h1", Bs, n(i.$t(`wealName${v.rewardType}`)), 1)) : (t(), o("h1", Ws, n(i.$t(`wealName${v.rewardType}_1`)), 1)), e("span", null, n(i.$t(`wealDescription${v.rewardType}`)), 1), v.rewardType == 5 ? (t(), o("div", {
                        key: 2,
                        class: "viewD",
                        onClick: c[0] || (c[0] = a => l(k).push({
                            name: "RebateDetails"
                        }))
                    }, n(i.$t("viewDetail")), 1)) : g("v-if", !0)])]))]))), 128))])]))]),
                    _: 1
                })])
            }
        }
    });
const Gs = K(zs, [
        ["__scopeId", "data-v-4e842459"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Vip/MyWelfare.vue"]
    ]),
    Q = S => (fe("data-v-eaa4a307"), S = S(), ye(), S),
    xs = {
        class: "vip-content-recordVsrule"
    },
    Os = {
        class: "vip-content-recordVsrule-head"
    },
    js = {
        key: 0,
        class: "vip-content-recordVsrule-con"
    },
    Xs = {
        class: "item-left"
    },
    Js = {
        class: "green"
    },
    Qs = {
        class: "item-right"
    },
    qs = ["src"],
    Ks = ["src"],
    Ys = {
        class: "item-left"
    },
    Zs = {
        class: "red"
    },
    Ls = {
        class: "item-right"
    },
    en = Q(() => e("span", null, null, -1)),
    sn = Q(() => e("span", null, null, -1)),
    nn = {
        key: 2,
        class: "item-left"
    },
    an = {
        class: "yellow"
    },
    ln = {
        class: "item-left"
    },
    tn = {
        class: "blue"
    },
    on = {
        class: "item-right"
    },
    cn = Q(() => e("span", null, null, -1)),
    rn = Q(() => e("span", null, null, -1)),
    dn = {
        class: "green"
    },
    vn = {
        key: 4,
        class: "item-left"
    },
    pn = {
        class: "yellow"
    },
    un = {
        key: 1,
        class: "vip-content-recordVsrule-con"
    },
    _n = {
        class: "con-content"
    },
    hn = {
        class: "con-content__title"
    },
    $n = {
        class: "con-content__rules"
    },
    gn = {
        class: "con-content__rules-item__title"
    },
    fn = Q(() => e("div", {
        class: "con-content__rules-item__titleRight"
    }, null, -1)),
    yn = J({
        __name: "RecordVsrule",
        setup(S, {
            expose: N
        }) {
            const {
                t: r
            } = $e(), k = Z();
            let V = ce("permission", null);
            V && (V = JSON.parse(V.value));
            const h = $(1);
            V && V[18] === !1 && (h.value = 2);
            const C = [{
                title: r("promotionCriteria"),
                content: r("rVsTip1", [sessionStorage.getItem("vipAmount") || 1e3])
            }, {
                title: r("promotionOrder"),
                content: r("rVsTip2")
            }, {
                title: r("relegationRequirements"),
                content: r("rVsTip3")
            }, {
                title: r("downgradeStandard"),
                content: r("rVsTip4")
            }, {
                title: r("upgradeReward"),
                content: r("rVsTip5")
            }, {
                title: r("wealName2"),
                content: r("rVsTip6")
            }, {
                title: r("wealName3"),
                content: r("rVsTip7")
            }, {
                title: r("wealName4"),
                content: r("rVsTip8")
            }];

            function f(y, a) {
                switch (y) {
                    case 1:
                        return r("vipTip12");
                    case 2:
                        return r("vipTip13");
                    case 3:
                        return r("vipTip10");
                    case 4:
                        return r("vipTip11", [a]);
                    case 5:
                        return r("vipTip6", [a]);
                    case 6:
                        return r("vipTip7");
                    case 7:
                        return r("vipTip15", [a]);
                    case 8:
                        return r("vipTip17", [a])
                }
            }

            function _(y) {
                h.value = y
            }

            function i() {
                k.push({
                    name: "RecordVsruleHistory"
                })
            }
            const c = ge({
                    pageSize: 10,
                    pageNo: 1
                }),
                d = $([]);
            async function v() {
                const y = await B(Se(c));
                y && (d.value = y.data.list)
            }
            return re(() => {
                v()
            }), N({
                getPageListVipUserRecord: v
            }), (y, a) => {
                const w = P("svg-icon"),
                    u = de("haspermission");
                return t(), o("div", xs, [e("div", Os, [F((t(), o("button", {
                    class: T({
                        active: h.value == 1
                    }),
                    onClick: a[0] || (a[0] = s => _(1))
                }, [A(n(y.$t("record")), 1)], 2)), [
                    [u, 18]
                ]), e("button", {
                    class: T({
                        active: h.value == 2
                    }),
                    onClick: a[1] || (a[1] = s => _(2))
                }, n(y.$t("rule")), 3)]), h.value == 1 ? F((t(), o("div", js, [d.value.length > 0 ? (t(!0), o(R, {
                    key: 0
                }, X(d.value, (s, M) => (t(), o("div", {
                    class: "item ar-1px-b",
                    key: M
                }, [s.type == 1 || s.type == 2 ? (t(), o(R, {
                    key: 0
                }, [e("div", Xs, [e("span", Js, n(l(x)(l(O).VipType, s.type)), 1), e("span", null, n(f(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)]), e("div", Qs, [e("p", null, [e("img", {
                    src: l(D)("main", "gold")
                }, null, 8, qs), A(n(l(E)(s.awardAmount, " ", 0)), 1)]), e("p", null, [e("img", {
                    src: l(D)("main", "love")
                }, null, 8, Ks), A(n(l(E)(s.bonusPoints, " ", 0)), 1)])])], 64)) : g("v-if", !0), s.type == 3 || s.type == 4 ? (t(), o(R, {
                    key: 1
                }, [e("div", Ys, [e("span", Zs, n(l(x)(l(O).VipType, s.type)), 1), e("span", null, n(f(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)]), e("div", Ls, [en, sn, e("span", null, n(s.experience) + " EXP", 1)])], 64)) : g("v-if", !0), s.type == 5 ? (t(), o("div", nn, [e("span", an, n(l(x)(l(O).VipType, s.type)), 1), e("span", null, n(f(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)])) : g("v-if", !0), s.type == 6 ? (t(), o(R, {
                    key: 3
                }, [e("div", ln, [e("span", tn, n(l(x)(l(O).VipType, s.type)), 1), e("span", null, n(f(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)]), e("div", on, [cn, rn, e("span", dn, n(s.experience) + " EXP", 1)])], 64)) : g("v-if", !0), [7, 8].includes(s.type) ? (t(), o("div", vn, [e("span", pn, n(l(x)(l(O).VipType, s.type)), 1), e("span", null, n(f(s.type, s.remark)), 1), e("span", null, n(s.createTime), 1)])) : g("v-if", !0)]))), 128)) : (t(), Y(De, {
                    key: 1
                })), F((t(), o("button", {
                    onClick: i
                }, [A(n(y.$t("viewAll")), 1)])), [
                    [u, 18]
                ])])), [
                    [u, 18]
                ]) : (t(), o("div", un, [e("div", _n, [e("div", hn, [e("h1", null, n(y.$t("vipPrivilege")), 1), e("p", null, n(y.$t("vipRule")), 1)]), e("div", $n, [(t(), o(R, null, X(C, (s, M) => e("div", {
                    class: "con-content__rules-item ruleHead",
                    key: M
                }, [b(w, {
                    name: "ruleHead"
                }), e("div", gn, n(s.title), 1), fn, e("p", null, n(s.content), 1)])), 64))])])]))])
            }
        }
    });
const wn = K(yn, [
        ["__scopeId", "data-v-eaa4a307"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Vip/RecordVsrule.vue"]
    ]),
    kn = {
        class: "vip"
    },
    Tn = {
        class: "vip-header"
    },
    Vn = {
        class: "vip-header-wrapper"
    },
    mn = ["src"],
    bn = {
        class: "vip-header-wrapper-name"
    },
    Cn = {
        class: "vip-header-wrapper-name-nickName"
    },
    Sn = {
        class: "vip-content"
    },
    In = {
        class: "vip-content-empirical"
    },
    Rn = {
        class: "red"
    },
    Dn = ["innerHTML"],
    An = {
        class: "vip-content-tip"
    },
    Nn = {
        class: "succeed"
    },
    En = {
        class: "van-dialog__content-title"
    },
    Mn = {
        class: "van-dialog__content-note"
    },
    Un = {
        class: "main"
    },
    Hn = ["src"],
    Fn = {
        class: "yellow"
    },
    Pn = ["src"],
    Bn = ["innerHTML"],
    Wn = {
        class: "van-dialog__content-btn"
    },
    jn = J({
        __name: "index",
        setup(S) {
            const r = Ie().getUserInfo,
                k = $(I("main/Avatar", r.userPhoto)),
                V = Z(),
                {
                    setLoading: h
                } = L(),
                C = $(!1),
                f = $(),
                _ = $(),
                i = $(),
                c = $(),
                d = $(),
                v = $(!1);

            function y() {
                V.push({
                    name: "Avatar"
                })
            }
            let a = ce("permission", null);
            a && (a = JSON.parse(a.value));
            const w = $(!0);
            a && a[18] === !1 && (w.value = !1);
            const u = $();
            async function s() {
                var m, U, q, W, z, G;
                h(!0);
                const p = await B(Re());
                p && p != null && p.data && (u.value = p.data, i.value.level = (m = u.value) == null ? void 0 : m.vipLevel, i.value.getListVipLevel((U = u.value) == null ? void 0 : U.vipLevel), ((q = u.value) == null ? void 0 : q.vipLevel) > 0 && (c.value.levelMy = (W = u.value) == null ? void 0 : W.vipLevel, c.value.getListVipUserRewards((z = u.value) == null ? void 0 : z.vipLevel)), _.value.level = (G = u.value) == null ? void 0 : G.vipLevel, await _.value.getVipUserLevelDetail(), v.value = !0), h(!1)
            }
            re(() => {
                s()
            });

            function M(p) {
                ke(() => {
                    var m;
                    i.value.level = p, i.value.getListVipLevel(p), p <= ((m = u.value) == null ? void 0 : m.vipLevel) && (c.value.levelMy = p, c.value.getListVipUserRewards(p))
                })
            }

            function ve(p) {
                f.value = p, C.value = !0
            }

            function pe() {
                C.value = !1, d.value.getPageListVipUserRecord()
            }
            const ue = (p, m) => {
                p = I("images", "avatar1");
                let U = document.querySelector(`.${m}`);
                U.src = p
            };
            return (p, m) => {
                var z, G, ee, se, ne;
                const U = P("NavBar"),
                    q = P("van-dialog"),
                    W = de("lazy");
                return t(), o("div", kn, [e("div", Tn, [b(U, {
                    title: "VIP",
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: m[0] || (m[0] = H => l(V).go(-1))
                }), e("div", Vn, [e("div", {
                    class: "vip-header-wrapper-avatar",
                    onClick: y
                }, [g(` <img v-lazy="avatarUrl" :data-img="getIconsPublic('images', 'avatar1')" /> `), e("img", {
                    src: k.value,
                    class: "userAvatar",
                    onError: m[1] || (m[1] = H => ue(k.value, "userAvatar"))
                }, null, 40, mn)]), e("div", bn, [e("div", {
                    class: T(["vip-header-wrapper-name-vip", ["n" + ((z = u.value) == null ? void 0 : z.vipLevel)]])
                }, null, 2), e("div", Cn, [e("h3", null, n((G = u.value) == null ? void 0 : G.nickName), 1)])])])]), e("div", Sn, [e("div", In, [e("div", null, [e("p", Rn, n(p.$t("eightThousandEXP", [w.value ? (ee = u.value) == null ? void 0 : ee.exp : 0])), 1), e("p", null, n(p.$t("myExperience")), 1)]), e("div", null, [e("p", {
                    class: "timeTop",
                    innerHTML: p.$t("fifteenDays", [w.value ? (se = u.value) == null ? void 0 : se.settlementDate : 0])
                }, null, 8, Dn), e("p", null, n(p.$t("settlementTime")), 1)])]), e("div", An, n(p.$t("vipTip18")), 1), g("vip卡片"), b(rs, {
                    ref_key: "vipCardRef",
                    ref: _,
                    haspermission: w.value,
                    onChangeLevel: M
                }, null, 8, ["haspermission"]), g("等级福利"), b(ws, {
                    ref_key: "weal",
                    ref: i
                }, null, 512), g("我的福利"), F(b(Gs, {
                    onSucceedDialog: ve,
                    ref_key: "myWelfare",
                    ref: c
                }, null, 512), [
                    [we, ((ne = u.value) == null ? void 0 : ne.vipLevel) > 0]
                ]), g("记录规则"), v.value ? (t(), Y(wn, {
                    key: 0,
                    ref_key: "recordVsrule",
                    ref: d
                }, null, 512)) : g("v-if", !0)]), g("领取成功弹窗"), b(q, {
                    show: C.value,
                    "onUpdate:show": m[3] || (m[3] = H => C.value = H),
                    "show-confirm-button": !1,
                    "z-index": "99"
                }, {
                    default: j(() => {
                        var H, ae, le, te;
                        return [F(e("img", Nn, null, 512), [
                            [W, l(D)("public", "succeed")]
                        ]), e("div", En, n(p.$t("receivedSuccessfully")), 1), e("div", Mn, [e("div", null, [e("p", Un, [e("img", {
                            src: l(D)("main", "love")
                        }, null, 8, Hn), A(n(l(E)((H = f.value) == null ? void 0 : H.integral, " ", 0)), 1)]), e("p", Fn, [e("img", {
                            src: l(D)("main", "gold")
                        }, null, 8, Pn), A(n(l(E)((ae = f.value) == null ? void 0 : ae.balance, " ", 0)), 1)])]), e("div", null, [e("p", {
                            innerHTML: p.$t("vipTip4", [(le = f.value) == null ? void 0 : le.integral, (te = f.value) == null ? void 0 : te.balance])
                        }, null, 8, Bn), g(" <p>{{ $t('vipTip5') }}</p> ")])]), e("div", Wn, [e("button", {
                            onClick: pe
                        }, n(p.$t("sure")), 1)]), F(e("img", {
                            class: "close",
                            onClick: m[2] || (m[2] = zn => C.value = !1)
                        }, null, 512), [
                            [W, l(I)("main", "close")]
                        ])]
                    }),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
export {
    jn as _
};