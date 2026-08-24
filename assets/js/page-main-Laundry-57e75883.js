import {
    G as U,
    z as V,
    R as F,
    B as te,
    r as v,
    A as B,
    C as E,
    H as g,
    az as q,
    I as h,
    Q as r,
    O as s,
    au as b,
    an as N,
    J as e,
    P as t,
    aA as k,
    aw as C,
    ax as M,
    ao as D,
    K as J,
    M as K,
    at as se,
    N as _
} from "./common.modules-af1f85b9.js";
import {
    y as ae,
    bw as y,
    A as P,
    bN as ne,
    g as W,
    bO as oe,
    _ as H,
    bP as ie,
    bQ as le
} from "./page-activity-ActivityDetail-f7c58355.js";
import {
    N as X
} from "./page-home-AllGames-e4490e91.js";
import {
    D as ce
} from "./page-activity-Championship-95adc67b.js";
import {
    L as de
} from "./page-activity-DailySignIn-177ec47f.js";
const re = {
        class: "Laundry-page"
    },
    ue = {
        class: "laundry-page_container"
    },
    _e = {
        class: "laundry-page_box"
    },
    ve = {
        class: "title"
    },
    pe = {
        class: "lab"
    },
    me = {
        class: "number"
    },
    ye = {
        class: "txt"
    },
    he = {
        class: "c-row"
    },
    fe = {
        class: "item"
    },
    be = {
        class: "tit"
    },
    ge = {
        class: "num"
    },
    Re = {
        class: "tit"
    },
    we = {
        class: "num red"
    },
    Le = {
        class: "item"
    },
    Te = {
        class: "tit"
    },
    xe = {
        class: "num"
    },
    ke = {
        class: "tip"
    },
    Ce = ["src"],
    $e = {
        class: "laundry-page_list"
    },
    Ae = {
        class: "title"
    },
    Se = {
        key: 0,
        class: "list"
    },
    Ne = {
        class: "header"
    },
    We = {
        class: ""
    },
    Be = {
        class: "name"
    },
    ze = {
        class: "time"
    },
    Oe = {
        class: "state"
    },
    je = {
        class: "body"
    },
    Ie = {
        class: "left"
    },
    Me = {
        class: "imgBox"
    },
    De = ["src"],
    Pe = {
        class: "right"
    },
    Ue = {
        class: "red"
    },
    Ve = {
        class: "orange"
    },
    Fe = {
        alt: ""
    },
    He = {
        class: "Laundry-Con"
    },
    Ge = {
        class: "Laundry-Con_tip"
    },
    Qe = {
        class: "Laundry-Con_txt"
    },
    qe = {
        class: "number"
    },
    Ee = U({
        __name: "index",
        setup(G) {
            const {
                t: a
            } = V(), R = F(), f = ae(), w = te(() => f.getIsShowAppHandCodeWashingSwitch), p = v(null), u = v(0), S = o => {
                let c = y.gameTabList[u.value].codeType;
                if (c === x.codeType) return !1;
                x.codeType = c, n()
            }, m = v(!1), T = v(0), $ = async () => {
                var c, L;
                if (i.codeWashAmount < 100) return;
                const o = await P(oe(x));
                ((c = o == null ? void 0 : o.data) == null ? void 0 : c.rebateAmount) > 0 && (T.value = (L = o == null ? void 0 : o.data) == null ? void 0 : L.rebateAmount, n(), m.value = !0)
            }, z = () => {
                m.value = !1
            }, A = () => {
                R.push({
                    name: "Laundry-LaundryRule"
                })
            }, l = () => {
                R.push({
                    name: "Laundry-LaundryRecord"
                })
            }, i = B({
                codeWashAmount: 0,
                dayRebate: 0,
                totalRebate: 0,
                washRate: "",
                washList: []
            }), x = B({
                codeType: -1
            });

            function O(o) {
                let c = "";
                return y.gameTabList.map(L => {
                    L.codeType == o && (c = L.name)
                }), c
            }
            async function n() {
                const o = await P(ne(x));
                o && (i.codeWashAmount = o.data.codeWashAmount, i.dayRebate = o.data.dayRebate, i.totalRebate = o.data.totalRebate, i.washRate = o.data.washRate, i.washList = o.data.washList)
            }
            return E(() => {
                y.gameTabList, f.getHomeSetting(), n()
            }), (o, c) => {
                const L = g("NavBar"),
                    j = g("svg-icon"),
                    Y = g("van-sticky"),
                    Z = g("van-button"),
                    Q = q("throttle-click"),
                    ee = q("lazy");
                return _(), h("div", re, [r(L, {
                    title: s(a)("laundry"),
                    "left-arrow": "",
                    onClickLeft: c[0] || (c[0] = d => s(R).go(-1))
                }, null, 8, ["title"]), r(Y, {
                    "offset-top": 46,
                    container: p.value,
                    class: "bet-container-sticky"
                }, {
                    default: b(() => [e("div", null, [r(X, {
                        list: s(y).gameTabList,
                        active: u.value,
                        "onUpdate:active": c[1] || (c[1] = d => u.value = d),
                        tabClassName: "tabs",
                        onOnClickTab: S,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item"
                    }, {
                        default: b(({
                            item: d,
                            index: I
                        }) => [e("div", {
                            class: D(["tab_item", {
                                tab_active: I === u.value
                            }])
                        }, [r(j, {
                            name: d.img
                        }, null, 8, ["name"]), e("span", null, t(d.name), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }, 8, ["container"]), N(" 可洗码量 "), e("div", ue, [e("div", _e, [e("div", ve, t(s(y).gameTabList[u.value].name) + "-" + t(s(a)("washableSize")), 1), e("div", pe, [r(j, {
                    name: "rebateRealTime"
                }), k(" " + t(s(a)("laundryTxt")), 1)]), e("div", me, [r(j, {
                    name: "rebate"
                }), k(" " + t(i.codeWashAmount.toFixed(2) || 0), 1)]), e("div", ye, t(s(a)("laundryTxt1")), 1), e("div", he, [e("div", fe, [C(e("div", null, [e("p", be, t(s(a)("rebateToday")), 1), e("span", ge, t(i.dayRebate || 0), 1)], 512), [
                    [M, u.value == 0]
                ]), C(e("div", null, [e("p", Re, t(s(a)("laundryRate")), 1), e("span", we, t(i.washRate || 0) + "%", 1)], 512), [
                    [M, u.value != 0]
                ])]), e("div", Le, [e("p", Te, t(s(a)("totalRebate")), 1), e("span", xe, t(i.totalRebate || 0), 1)])]), e("div", ke, t(s(a)("laundryTxt2")), 1), w.value ? C((_(), h("button", {
                    key: 0,
                    class: D(i.codeWashAmount >= 100 ? "btn active" : "btn")
                }, [k(t(s(a)("codeWashing")), 1)], 2)), [
                    [Q, {
                        handler: $,
                        wait: 2e3
                    }]
                ]) : N("v-if", !0), C(e("p", {
                    class: "rule",
                    onClick: A
                }, [k(t(s(a)("understandRules")), 1), e("img", {
                    class: "rule-img",
                    src: s(W)("main", "ruleicon"),
                    alt: ""
                }, null, 8, Ce)], 512), [
                    [M, !1]
                ])]), N(" 洗码记录 "), e("div", $e, [e("div", Ae, t(s(a)("laundryRed")), 1), i.washList ? (_(), h("div", Se, [(_(!0), h(J, null, K(i.washList || [], (d, I) => (_(), h("div", {
                    class: "item",
                    key: I
                }, [e("div", Ne, [e("div", We, [e("p", Be, t(O(d.codeType)), 1), e("span", ze, t(d.addTime), 1)]), e("div", Oe, t(s(a)("laundrySuccess")), 1)]), e("div", je, [e("div", Ie, [e("div", Me, [e("img", {
                    class: "img",
                    src: s(W)("main", "gameStatsSteps"),
                    alt: ""
                }, null, 8, De)]), e("div", null, [e("p", null, t(s(a)("laundryAmount")), 1), e("p", null, t(s(a)("laundryRate")), 1), e("p", null, t(s(a)("rebateAmount")), 1)])]), e("div", Pe, [e("p", null, t(d.washVolume), 1), e("p", Ue, t(d.washRate) + "%", 1), e("p", Ve, t(d.rebateAmount), 1)])])]))), 128))])) : N("v-if", !0), C((_(), se(Z, {
                    class: "all-record",
                    plain: "",
                    block: "",
                    round: "",
                    type: "primary"
                }, {
                    default: b(() => [k(t(s(a)("allRecords")), 1)]),
                    _: 1
                })), [
                    [Q, {
                        handler: l,
                        wait: 2e3
                    }]
                ])])]), r(ce, {
                    show: m.value,
                    "onUpdate:show": c[2] || (c[2] = d => m.value = d),
                    onConfirm: z,
                    "show-cancel-btn": !1,
                    confirmText: s(a)("confirm"),
                    title: `${s(y).gameTabList[u.value].name}-${s(a)("laundryAmount")}`
                }, {
                    header: b(() => [C(e("img", Fe, null, 512), [
                        [ee, s(W)("public", "succeed")]
                    ])]),
                    content: b(() => [e("div", He, [e("div", Ge, t(s(a)("codeWashingSuccess")), 1), e("div", Qe, [k(t(s(a)("rebateAmount")) + ":", 1), e("span", qe, t(T.value.toFixed(2)), 1)])])]),
                    _: 1
                }, 8, ["show", "confirmText", "title"])])
            }
        }
    });
const Je = H(Ee, [
        ["__scopeId", "data-v-cdf0e578"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/Laundry/index.vue"]
    ]),
    wt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Je
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ke = {
        class: "Laundry-Record"
    },
    Xe = {
        style: {
            "background-color": "#f7f8ff"
        }
    },
    Ye = {
        class: "list"
    },
    Ze = {
        class: "header"
    },
    et = {
        class: ""
    },
    tt = {
        class: "name"
    },
    st = {
        class: "time"
    },
    at = {
        class: "state"
    },
    nt = {
        class: "body"
    },
    ot = {
        class: "left"
    },
    it = {
        class: "imgBox"
    },
    lt = ["src"],
    ct = {
        class: "right"
    },
    dt = {
        class: "red"
    },
    rt = {
        class: "orange"
    },
    ut = U({
        __name: "index",
        setup(G) {
            const {
                t: a
            } = V(), R = F(), f = v(), w = v(null), p = v(0), u = async A => {
                let l = y.gameTabList[p.value].codeType;
                $.value.codeType = l, T.value = !0, S.pageNo = 1, m.list = [], await f.value.resetRefresh()
            }, S = B({
                pageNo: 1,
                pageSize: 10,
                codeType: -1
            }), m = B({
                list: [],
                pageNo: 0,
                totalPage: 0,
                totalCount: 0
            }), T = v(!0), $ = v({
                codeType: -1
            });

            function z(A) {
                let l = "";
                return y.gameTabList.map(i => {
                    i.codeType == A && (l = i.name)
                }), l
            }
            return (A, l) => {
                const i = g("NavBar"),
                    x = g("svg-icon"),
                    O = g("van-sticky");
                return _(), h("div", Ke, [r(i, {
                    title: s(a)("laundryRecord"),
                    "left-arrow": "",
                    onClickLeft: l[0] || (l[0] = n => s(R).go(-1))
                }, null, 8, ["title"]), r(O, {
                    "offset-top": 46,
                    container: w.value,
                    class: "bet-container-sticky"
                }, {
                    default: b(() => [e("div", Xe, [r(X, {
                        list: s(y).gameTabList,
                        active: p.value,
                        "onUpdate:active": l[1] || (l[1] = n => p.value = n),
                        tabClassName: "tabs",
                        onOnClickTab: u,
                        activeClassName: "tab_active",
                        ref: "tabRefs",
                        tabItemClassName: "funtab_item"
                    }, {
                        default: b(({
                            item: n,
                            index: o
                        }) => [e("div", {
                            class: D(["tab_item", {
                                tab_active: o === p.value
                            }])
                        }, [r(x, {
                            name: n.img
                        }, null, 8, ["name"]), e("span", null, t(n.name), 1)], 2)]),
                        _: 1
                    }, 8, ["list", "active"])])]),
                    _: 1
                }, 8, ["container"]), e("div", Ye, [r(de, {
                    distance: 300,
                    api: s(ie),
                    list: m.list,
                    "onUpdate:list": l[2] || (l[2] = n => m.list = n),
                    "page-query": $.value,
                    "onUpdate:pageQuery": l[3] || (l[3] = n => $.value = n),
                    "is-first": T.value,
                    "onUpdate:isFirst": l[4] || (l[4] = n => T.value = n),
                    ref_key: "listRef",
                    ref: f,
                    isAutoLoad: !0
                }, {
                    content: b(() => [(_(!0), h(J, null, K(m.list, (n, o) => (_(), h("div", {
                        class: "item",
                        key: o
                    }, [e("div", Ze, [e("div", et, [e("p", tt, t(z(n.codeType)), 1), e("span", st, t(n.addTime), 1)]), e("div", at, t(s(a)("laundrySuccess")), 1)]), e("div", nt, [e("div", ot, [e("div", it, [e("img", {
                        class: "img",
                        src: s(W)("main", "gameStatsSteps"),
                        alt: ""
                    }, null, 8, lt)]), e("div", null, [e("p", null, t(s(a)("laundryAmount")), 1), e("p", null, t(s(a)("laundryRate")), 1), e("p", null, t(s(a)("rebateAmount")), 1)])]), e("div", ct, [e("p", null, t(n.washVolume), 1), e("p", dt, t(n.washRate) + "%", 1), e("p", rt, t(n.rebateAmount), 1)])])]))), 128))]),
                    _: 1
                }, 8, ["api", "list", "page-query", "is-first"])])])
            }
        }
    });
const _t = H(ut, [
        ["__scopeId", "data-v-34682eef"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/Laundry/LaundryRecord/index.vue"]
    ]),
    Lt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: _t
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    vt = {
        class: "Laundry-Rule"
    },
    pt = ["innerHTML"],
    mt = U({
        __name: "index",
        setup(G) {
            const {
                t: a
            } = V(), R = F(), f = v();
            return E(async () => {
                const w = await P(le());
                w && (f.value = w.data.washRules)
            }), (w, p) => {
                const u = g("NavBar");
                return _(), h("div", vt, [r(u, {
                    title: s(a)("laundryRule"),
                    "left-arrow": "",
                    onClickLeft: p[0] || (p[0] = S => s(R).go(-1))
                }, null, 8, ["title"]), e("div", {
                    class: "Laundry-Rule-content",
                    innerHTML: f.value
                }, null, 8, pt)])
            }
        }
    });
const yt = H(mt, [
        ["__scopeId", "data-v-f4ca4591"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/Laundry/LaundryRule/index.vue"]
    ]),
    Tt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    Lt as a, Tt as b, wt as i
};