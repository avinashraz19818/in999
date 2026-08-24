import {
    r as m,
    z as ee,
    R as Y,
    B as L,
    G as M,
    H as E,
    N as h,
    I as b,
    K as $e,
    M as Qe,
    ao as A,
    O as o,
    J as e,
    P as r,
    Q as y,
    au as z,
    Z as Ve,
    az as he,
    aw as D,
    an as U,
    aE as de,
    aA as N,
    u as q,
    X as et,
    at as K,
    ay as Q,
    ax as G,
    V as j,
    aB as pe,
    aC as ve,
    $ as Se,
    C as me,
    F as we,
    b2 as tt,
    aZ as Ne,
    E as Be,
    aJ as st,
    n as ot
} from "./common.modules-af1f85b9.js";
import {
    G as De,
    y as Ue,
    bb as Ee,
    bc as at,
    g as ye,
    bd as nt,
    be as rt,
    bf as lt,
    bg as it,
    N as _e,
    b as Ce,
    _ as H,
    a3 as te,
    J as ut,
    a1 as be,
    A as re,
    bh as ct,
    bi as qe,
    bj as Me,
    a4 as Ae,
    bk as ze,
    bl as He,
    bm as dt,
    bn as pt,
    n as vt
} from "./page-activity-ActivityDetail-f7c58355.js";
import {
    D as Oe
} from "./page-activity-Championship-95adc67b.js";
import {
    D as mt
} from "./page-activity-PointMall-e618d414.js";
const Le = m(!1);

function Ze() {
    const {
        locale: _
    } = ee(), k = De(), u = Y();
    async function t(p, n) {
        nt(p), _.value = p, k.updateLanguage(p), await rt(p), lt().upUserLanguage(), it(_e.global.t), localStorage.setItem("needUpd", "1"), n === 1 ? c() : Le.value = !1
    }
    const c = () => {
            u.back()
        },
        s = L(() => {
            let p = 0;
            const n = Ue().getLanguage,
                d = [];
            if (n) {
                const g = n == null ? void 0 : n.replace("th", "tha").split("|");
                g == null || g.forEach(i => {
                    Ee.forEach(f => {
                        (i.toLowerCase().indexOf(f.key.toLowerCase()) !== -1 || f.key.toLowerCase().indexOf(i.toLowerCase()) !== -1) && (d.push(f), p++)
                    })
                })
            }
            return k.getLanguage || k.updateLanguage(at()), p == 0 ? Ee : d
        });
    return {
        onClick: t,
        languagesList: s,
        getIcons: ye,
        locale: _,
        goBack: c,
        getLangName: p => {
            const n = s.value.find(d => d.key === p);
            return (n == null ? void 0 : n.key.toLocaleUpperCase()) || ""
        },
        show: Le
    }
}
const _t = ["onClick"],
    gt = {
        class: "item-title"
    },
    ft = ["src"],
    ht = {
        key: 0
    },
    wt = {
        key: 1
    },
    yt = M({
        __name: "index",
        props: {
            type: {
                type: Number,
                default: 1
            }
        },
        setup(_) {
            const {
                onClick: k,
                languagesList: u,
                locale: t
            } = Ze();
            return (c, s) => {
                const a = E("van-radio"),
                    p = E("van-radio-group");
                return h(), b("div", {
                    class: A(_.type === 2 ? "list info" : "list")
                }, [(h(!0), b($e, null, Qe(o(u), (n, d) => (h(), b("div", {
                    class: A(["item ar-1px-b", n.key == o(t) ? "checked" : ""]),
                    key: d,
                    onClick: g => o(k)(n.key, _.type)
                }, [e("div", gt, [e("img", {
                    src: o(Ce)("languages", n.key)
                }, null, 8, ft), _.type === 2 ? (h(), b("span", ht, r(n.key.toLocaleUpperCase()), 1)) : (h(), b("span", wt, r(n.name), 1))]), y(p, {
                    modelValue: o(t),
                    "onUpdate:modelValue": s[0] || (s[0] = g => Ve(t) ? t.value = g : null)
                }, {
                    default: z(() => [y(a, {
                        name: n.key
                    }, null, 8, ["name"])]),
                    _: 2
                }, 1032, ["modelValue"])], 10, _t))), 128))], 2)
            }
        }
    });
const bt = H(yt, [
        ["__scopeId", "data-v-29e221c4"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Main/LanguageList/index.vue"]
    ]),
    kt = {
        class: "img"
    },
    $t = {
        class: "languageName"
    },
    St = M({
        __name: "LangPopup",
        setup(_) {
            const {
                getLangName: k,
                locale: u,
                show: t
            } = Ze(), c = Ue(), s = L(() => c.getLoginChangeLanguage == "1");
            return (a, p) => {
                const n = E("van-popup"),
                    d = he("lazy");
                return h(), b("div", null, [s.value ? (h(), b("div", {
                    key: 0,
                    class: "right",
                    onClick: p[0] || (p[0] = g => t.value = !0)
                }, [D(e("img", kt, null, 512), [
                    [d, o(Ce)("languages", o(u))]
                ]), e("span", $t, r(o(k)(o(u))), 1)])) : U("v-if", !0), y(n, {
                    show: o(t),
                    "onUpdate:show": p[1] || (p[1] = g => Ve(t) ? t.value = g : null),
                    class: "popup",
                    position: "bottom",
                    teleport: "body"
                }, {
                    default: z(() => [y(bt, {
                        type: 2
                    })]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const Ct = H(St, [
        ["__scopeId", "data-v-8610bd15"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/LangPopup.vue"]
    ]),
    It = {
        class: "popups"
    },
    Tt = {
        class: "popup-content"
    },
    Pt = {
        class: "tit"
    },
    Ft = {
        class: "con"
    },
    xt = {
        class: "info"
    },
    Rt = {
        class: "txt"
    },
    Et = {
        class: "txt"
    },
    Lt = {
        class: "box"
    },
    Vt = ["placeholder"],
    Nt = {
        class: "lab"
    },
    Bt = {
        class: "popup-foot"
    },
    Dt = M({
        __name: "index",
        props: {
            showPopup: {
                type: Boolean,
                default: m(!1)
            }
        },
        emits: ["update:showPopup", "onConfirm", "onBack"],
        setup(_, {
            emit: k
        }) {
            const u = _,
                t = Y(),
                {
                    t: c
                } = ee(),
                s = L({
                    get() {
                        return u.showPopup || !1
                    },
                    set(g) {
                        k("update:showPopup", g)
                    }
                }),
                a = m(""),
                p = () => {
                    if (!a.value) return q(c("googleKey"));
                    k("onConfirm", a.value.toString())
                },
                n = () => {
                    a.value = "", k("onBack")
                };

            function d() {
                t.push({
                    name: "CustomerService"
                })
            }
            return (g, i) => {
                const f = E("van-icon"),
                    C = E("van-popup"),
                    l = he("throttle-click"),
                    S = he("lazy");
                return h(), b("div", It, [y(C, {
                    show: s.value,
                    "onUpdate:show": i[1] || (i[1] = F => s.value = F),
                    position: "center",
                    round: "",
                    class: "popup",
                    "close-on-click-overlay": !1
                }, {
                    default: z(() => [e("div", Tt, [e("div", Pt, r(o(c)("googleVerification")), 1), e("div", Ft, [e("div", xt, [e("p", Rt, r(o(c)("googleTip5")), 1), e("p", Et, r(o(c)("googleTip6")), 1)]), e("div", Lt, [D(e("input", {
                        class: "input",
                        type: "text",
                        "onUpdate:modelValue": i[0] || (i[0] = F => a.value = F),
                        maxlength: "6",
                        oninput: "value=value.replace(/\\D/g,'')",
                        placeholder: o(c)("PgoogleVerification")
                    }, null, 8, Vt), [
                        [de, a.value]
                    ]), e("p", Nt, [y(f, {
                        class: "icon",
                        name: "warning-o"
                    }), N(r(o(c)("PVerificationCode")) + " ", 1), e("span", {
                        onClick: d
                    }, r(o(c)("contactServicer")), 1)])]), e("div", Bt, [D((h(), b("div", null, [N(r(o(c)("confirm")), 1)])), [
                        [l, {
                            handler: p,
                            wait: 1e3
                        }]
                    ]), e("div", {
                        onClick: n
                    }, r(o(c)("withdrawDialogDesc6")), 1)])]), D(e("img", {
                        class: "close",
                        onClick: n
                    }, null, 512), [
                        [S, o(Ce)("main", "close")]
                    ])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const We = H(Dt, [
        ["__scopeId", "data-v-96e240c3"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Main/VerifyPopup/index.vue"]
    ]),
    se = _ => (pe("data-v-869b9ee0"), _ = _(), ve(), _),
    Ut = ["src"],
    qt = ["src"],
    Mt = {
        key: 1,
        class: "captcha_message"
    },
    At = {
        class: "captcha_message__icon"
    },
    zt = {
        key: 0,
        height: "28",
        viewBox: "0 0 28 28",
        width: "28",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Ht = se(() => e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5"
    }, [e("path", {
        d: "M22.776 4.073A13.2 13.2 0 0 0 14 .75C6.682.75.75 6.682.75 14S6.682 27.25 14 27.25 27.25 21.318 27.25 14c0-.284-.009-.566-.027-.845"
    }), e("path", {
        d: "M7 12.5l7 7 13-13"
    })], -1)),
    Ot = [Ht],
    Zt = {
        key: 1,
        height: "28",
        viewBox: "0 0 28 28",
        width: "28",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Wt = se(() => e("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "#fff",
        "stroke-width": "1.5"
    }, [e("circle", {
        cx: "14",
        cy: "14",
        r: "13.25"
    }), e("path", {
        d: "M8.75 8.75l10.5 10.5M19.25 8.75l-10.5 10.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    jt = [Wt],
    Gt = {
        class: "captcha_message__text"
    },
    Xt = {
        key: 2,
        class: "captcha_message loadding"
    },
    Jt = se(() => e("div", {
        class: "captcha_message__icon captcha_message__icon--loadding"
    }, null, -1)),
    Kt = {
        class: "captcha_message__text"
    },
    Yt = {
        key: 3,
        class: "captcha_message"
    },
    Qt = se(() => e("div", {
        class: "captcha_message__icon captcha_message__icon--loadding"
    }, null, -1)),
    es = se(() => e("div", {
        class: "captcha_message__text"
    }, null, -1)),
    ts = [Qt, es],
    ss = se(() => e("path", {
        d: "M500.864 545.728a47.744 47.744 0 0 0 6.72-48.896 24.704 24.704 0 0 0-4.48-8.384L240.256 193.088a34.24 34.24 0 0 0-28.608-17.408 34.24 34.24 0 0 0-25.856 12.864 46.592 46.592 0 0 0 0 59.52l238.08 264.512-238.08 264.512a46.592 46.592 0 0 0-1.088 59.52 32 32 0 0 0 50.56 0l265.6-290.88z",
        "p-id": "820"
    }, null, -1)),
    os = se(() => e("path", {
        d: "M523.84 248.064l236.992 264.512-238.08 264.512a46.592 46.592 0 0 0 0 59.52 32 32 0 0 0 50.56 0l265.6-292.608a47.744 47.744 0 0 0 6.72-48.832 24.704 24.704 0 0 0-4.48-8.448L578.304 191.36a34.24 34.24 0 0 0-55.552-2.816 46.592 46.592 0 0 0 1.088 59.52z",
        "p-id": "821"
    }, null, -1)),
    as = [ss, os],
    ns = {
        key: 0,
        class: "captcha__actions"
    },
    rs = ["fill"],
    ls = se(() => e("path", {
        d: "M10,4 C12.0559549,4 13.9131832,5.04358655 15.0015086,6.68322231 L15,5.5 C15,5.22385763 15.2238576,5 15.5,5 C15.7761424,5 16,5.22385763 16,5.5 L16,8.5 C16,8.77614237 15.7761424,9 15.5,9 L12.5,9 C12.2238576,9 12,8.77614237 12,8.5 C12,8.22385763 12.2238576,8 12.5,8 L14.5842317,8.00000341 C13.7999308,6.20218044 12.0143541,5 10,5 C7.23857625,5 5,7.23857625 5,10 C5,12.7614237 7.23857625,15 10,15 C11.749756,15 13.3431487,14.0944653 14.2500463,12.6352662 C14.3958113,12.4007302 14.7041063,12.328767 14.9386423,12.4745321 C15.1731784,12.6202971 15.2451415,12.9285921 15.0993765,13.1631281 C14.0118542,14.9129524 12.0990688,16 10,16 C6.6862915,16 4,13.3137085 4,10 C4,6.6862915 6.6862915,4 10,4 Z",
        "fill-rule": "nonzero"
    }, null, -1)),
    is = [ls],
    us = M({
        __name: "SlideCaptcha",
        props: {
            width: {
                type: Number,
                default: 340
            },
            height: {
                type: Number,
                default: 212
            },
            barHeight: {
                type: Number,
                default: 40
            },
            handlerIconWidth: {
                type: Number,
                default: 16
            },
            handlerIconHeigth: {
                type: Number,
                default: 16
            },
            background: {
                type: String,
                default: "#eee"
            },
            circle: {
                type: Boolean,
                default: !1
            },
            radius: {
                type: String,
                default: "4px"
            },
            text: {
                type: String,
                default: ""
            },
            progressBarBg: {
                type: String,
                default: "#76c61d"
            },
            successTip: {
                type: String,
                default: "Verification passed, over 80% of users."
            },
            failTip: {
                type: String,
                default: "Verification failed, drag the slider to correctly merge the floating image."
            },
            showRefresh: {
                type: Boolean,
                default: !1
            },
            refreshColor: {
                type: String,
                default: "#505050"
            }
        },
        emits: ["finish", "refresh"],
        setup(_, {
            expose: k,
            emit: u
        }) {
            const t = _,
                c = m(!1),
                s = m(!1),
                a = m(0),
                p = m(0),
                n = m(!1),
                d = m(!1),
                g = m(!1),
                i = m([]),
                f = m(void 0),
                C = m(!1),
                l = m(!1),
                S = m(!1),
                F = m(""),
                I = m(""),
                V = m(!1),
                $ = L(() => ({
                    width: t.width + "px",
                    height: t.height + "px",
                    position: "relative",
                    overflow: "hidden"
                })),
                R = L(() => ({
                    width: t.width + "px"
                })),
                x = L(() => ({
                    width: t.width + "px",
                    height: t.barHeight + "px",
                    lineHeight: t.barHeight + "px",
                    background: t.background,
                    borderRadius: t.circle ? t.barHeight / 2 + "px" : t.radius
                })),
                W = L(() => ({
                    background: t.progressBarBg,
                    height: t.barHeight + "px",
                    borderRadius: t.circle ? t.barHeight / 2 + "px 0 0 " + t.barHeight / 2 + "px" : t.radius
                })),
                ie = L(() => ({
                    height: t.barHeight + "px",
                    width: t.width + "px"
                })),
                ue = L(() => ({
                    width: t.barHeight + "px",
                    height: t.barHeight - 2 + "px"
                })),
                ae = L(() => ({
                    width: t.handlerIconWidth + "px",
                    height: t.handlerIconHeigth + "px"
                })),
                oe = L(() => t.refreshColor),
                w = L(() => ({
                    color: t.refreshColor
                })),
                T = m(),
                Z = m(),
                X = m(),
                v = m(),
                P = m(),
                ne = () => {
                    c.value = !0, j(() => {
                        Fe(), Je()
                    }), S.value = !0
                },
                ce = (B, J) => {
                    S.value = !1, F.value = B, I.value = J
                },
                O = () => {
                    l.value = !0
                },
                Ge = B => {
                    B.value = B, l.value = !1, C.value = !0
                },
                Fe = () => {
                    a.value = 0, p.value = 0, i.value = [], s.value = !1, g.value = !1, S.value = !1, l.value = !1, C.value = !1, V.value = !1, Z && (Z.value.style.width = 0), v && (v.value.style.left = 0), P && (P.value.style.left = 0)
                },
                xe = () => {
                    window.removeEventListener("touchmove", ge), window.removeEventListener("touchend", fe), window.removeEventListener("mousemove", ge), window.removeEventListener("mouseup", fe)
                },
                Re = B => {
                    !V.value && F.value && I.value && !g.value && (window.addEventListener("touchmove", ge), window.addEventListener("touchend", fe), window.addEventListener("mousemove", ge), window.addEventListener("mouseup", fe), s.value = !0, f.value = new Date, a.value = B.pageX || B.touches[0].pageX, p.value = B.pageY || B.touches[0].pageY)
                },
                ge = B => {
                    if (s.value && !V.value && F.value && I.value && !g.value) {
                        const J = (B.pageX || B.touches[0].pageX) - a.value,
                            ke = (B.pageY || B.touches[0].pageY) - p.value;
                        P.value.style.left = J + "px", Z.value.style.width = J + t.barHeight / 2 + "px", v.value.style.left = J + "px", i.value.push({
                            x: Math.round(J),
                            y: Math.round(ke),
                            t: new Date().getTime() - f.value.getTime()
                        })
                    }
                },
                fe = () => {
                    s.value && !V.value && F.value && I.value && !g.value && (s.value = !1, g.value = !0, xe(), u("finish", {
                        backgroundImageWidth: X.value.offsetWidth,
                        backgroundImageHeight: X.value.offsetHeight,
                        sliderImageWidth: v.value.offsetWidth,
                        sliderImageHeight: v.value.offsetHeight,
                        startTime: f.value,
                        endTime: new Date,
                        tracks: i.value
                    }))
                },
                Xe = B => {
                    c.value = B
                },
                Je = () => {
                    T.value.style.setProperty("--textColor", "#333"), T.value.style.setProperty("--width", Math.floor(t.width / 2) + "px"), T.value.style.setProperty("--pwidth", -Math.floor(t.width / 2) + "px")
                },
                Ke = () => {
                    Fe(), u("refresh")
                };
            return k({
                startRequestVerify: O,
                endRequestVerify: Ge,
                startRequestGenerate: ne,
                endRequestGenerate: ce,
                setShowHiden: Xe
            }), et(() => {
                xe()
            }), (B, J) => {
                const ke = E("van-popup");
                return h(), K(ke, {
                    show: c.value,
                    "onUpdate:show": J[0] || (J[0] = Ye => c.value = Ye),
                    teleport: "body"
                }, {
                    default: z(() => [e("div", {
                        class: "captcha",
                        style: Q(R.value)
                    }, [e("div", {
                        class: "captcha__main",
                        style: Q($.value)
                    }, [F.value ? (h(), b("img", {
                        key: 0,
                        ref_key: "backgroundRef",
                        ref: X,
                        alt: "background",
                        class: "captcha_background",
                        src: F.value
                    }, null, 8, Ut)) : U("v-if", !0), D(e("img", {
                        ref_key: "sliderRef",
                        ref: v,
                        alt: "slider",
                        class: A(["captcha_slider", {
                            goFirst: n.value,
                            goKeep: d.value
                        }]),
                        src: I.value
                    }, null, 10, qt), [
                        [G, I.value]
                    ]), C.value ? (h(), b("div", Mt, [e("div", At, [V.value ? (h(), b("svg", zt, Ot)) : (h(), b("svg", Zt, jt))]), e("div", Gt, r(V.value ? _.successTip : _.failTip), 1)])) : U("v-if", !0), S.value ? (h(), b("div", Xt, [Jt, e("div", Kt, r(B.$t("loading")) + "...", 1)])) : U("v-if", !0), l.value ? (h(), b("div", Yt, ts)) : U("v-if", !0)], 4), e("div", {
                        ref_key: "dragVerifyRef",
                        ref: T,
                        class: "captcha__bar",
                        style: Q(x.value)
                    }, [e("div", {
                        ref_key: "progressBarRef",
                        ref: Z,
                        class: A(["captcha_progress_bar", {
                            goFirst2: n.value
                        }]),
                        style: Q(W.value)
                    }, null, 6), e("div", {
                        class: "captcha_progress_bar__text",
                        style: Q(ie.value)
                    }, r(B.$t("slideCaptchaText")), 5), e("div", {
                        ref_key: "handlerRef",
                        ref: P,
                        class: A(["captcha_handler", {
                            goFirst: n.value
                        }]),
                        style: Q(ue.value),
                        onMousedown: Re,
                        onTouchstart: Re
                    }, [(h(), b("svg", {
                        "p-id": "819",
                        style: Q(ae.value),
                        version: "1.1",
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, as, 4))], 38)], 4), _.showRefresh ? (h(), b("div", ns, [e("a", {
                        class: "captcha__action",
                        style: Q(w.value),
                        onClick: Ke
                    }, [(h(), b("svg", {
                        fill: oe.value,
                        height: "20px",
                        version: "1.1",
                        viewBox: "0 0 20 20",
                        width: "20px",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, is, 8, rs)), U(' <span class="captcha__action__text">刷新</span> ')], 4)])) : U("v-if", !0)], 4)]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const je = H(us, [
        ["__scopeId", "data-v-869b9ee0"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/SlideCaptcha.vue"]
    ]),
    cs = {
        class: "verifyInput__container"
    },
    ds = {
        class: "verifyInput__container-label"
    },
    ps = {
        key: 0
    },
    vs = {
        key: 1
    },
    ms = {
        class: "verifyInput__container-input"
    },
    _s = ["placeholder"],
    gs = {
        key: 0
    },
    fs = {
        key: 1
    },
    hs = {
        class: "verifyInput__container-tip"
    },
    ws = M({
        __name: "VerifyInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            typeP: {
                type: String,
                required: !1
            },
            isShowVerifyT: {
                type: Boolean,
                required: !1
            },
            placeholder: {
                type: String,
                required: !1,
                default: _e.global.t("registerTip1")
            },
            sendFunc: {
                type: Function,
                required: !1
            },
            number: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !1,
                default: ""
            },
            showVerify: {
                type: Boolean,
                required: !1,
                default: !0
            },
            email: {
                type: String,
                required: !1
            },
            loginType: {
                type: String,
                required: !1
            },
            isTip: {
                type: Boolean,
                required: !1,
                default: !0
            }
        },
        emits: ["update:value"],
        setup(_, {
            emit: k
        }) {
            const u = _,
                {
                    t
                } = ee(),
                c = te(),
                a = De().getUserInfo,
                p = Y(),
                n = L({
                    get() {
                        return u.value || ""
                    },
                    set(l) {
                        k("update:value", l)
                    }
                }),
                d = m(!0);
            async function g() {
                var S;
                if (d.value && (d.value = !u.isTip), c.countDown > 0) return;
                if (p.currentRoute.value.name === "rpwd" || p.currentRoute.value.name === "register" || p.currentRoute.value.name === "SettingC-UpdatePhone" && !u.isShowVerifyT) {
                    if (!((S = u.number) != null && S.trim())) return q({
                        message: t("telUndetected"),
                        wordBreak: "break-word"
                    });
                    const F = (u.number.trim() + u.numberType.trim()).length;
                    if (F < 10 || F > 14) return q({
                        message: t("wrongTel"),
                        wordBreak: "break-word"
                    })
                } else if (!localStorage.getItem("numberType") && localStorage.getItem("number")) return q({
                    message: t("telUndetected"),
                    wordBreak: "break-word"
                });
                !u.sendFunc || await u.sendFunc() === -1 || c.sendCode()
            }
            const i = L(() => {
                    var l;
                    return u.number ? u.numberType + u.number : ((l = a == null ? void 0 : a.verifyMethods) == null ? void 0 : l.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number")
                }),
                f = l => {
                    const S = l.target;
                    S.value = S.value.replace(/\s+/g, ""), S.value = S.value.replace(/[^\d]/g, "")
                };

            function C() {
                p.push({
                    name: "CustomerService"
                })
            }
            return (l, S) => {
                const F = E("svg-icon"),
                    I = E("van-icon");
                return D((h(), b("div", cs, [D(e("div", ds, [y(F, {
                    name: "verify"
                }), l.typeP === "updatePhone" || l.typeP === "lock" ? (h(), b("span", ps, r(l.$t("sendVerifyCodeTo")) + " " + r(o(ut)(i.value)), 1)) : (h(), b("span", vs, r(l.$t("verifyCode")), 1))], 512), [
                    [G, !(l.isShowVerifyT === !1 && l.typeP === "updatePhone")]
                ]), e("div", ms, [D(e("input", {
                    type: "text",
                    "onUpdate:modelValue": S[0] || (S[0] = V => n.value = V),
                    placeholder: l.$t("phEnterVerificationCode"),
                    maxlength: "6",
                    onInput: f
                }, null, 40, _s), [
                    [de, n.value]
                ]), e("button", {
                    onClick: g,
                    class: A({
                        inActive: o(c).countDown > 0
                    })
                }, [o(c).countDown === 0 ? (h(), b("span", gs, r(l.$t("send")), 1)) : (h(), b("span", fs, r(o(c).countDown) + "S ", 1))], 2)]), D(e("div", hs, [y(I, {
                    name: "warning-o"
                }), e("span", null, r(l.$t("codeUnreceived")) + "?", 1), e("span", {
                    onClick: S[1] || (S[1] = V => C())
                }, r(l.$t("contactServicer")), 1)], 512), [
                    [G, !d.value]
                ])], 512)), [
                    [G, l.showVerify]
                ])
            }
        }
    });
const ys = H(ws, [
        ["__scopeId", "data-v-c17848a2"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/VerifyInput.vue"]
    ]),
    bs = {
        class: "passwordInput__container"
    },
    ks = {
        class: "passwordInput__container-label"
    },
    $s = {
        class: "passwordInput__container-input"
    },
    Ss = ["type", "placeholder", "maxlength", "value"],
    Cs = ["src"],
    Is = M({
        __name: "PasswordInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            maxlength: {
                type: Number,
                required: !1,
                default: 15
            },
            label: {
                type: String,
                required: !0
            }
        },
        emits: ["update:value"],
        setup(_, {
            emit: k
        }) {
            const u = _,
                t = _e.global.t,
                c = m(),
                s = m(""),
                a = m(!1);
            Se(s, $ => {
                k("update:value", $)
            }, {
                flush: "post"
            });
            const p = $ => {
                    if (a.value) return;
                    let R = g();
                    const x = $.target;
                    x.value = x.value.replace(/\s+/g, "");
                    const W = /[\u4e00-\u9fa5]/g;
                    x.value = x.value.replace(W, ""), i(R, x.value), f(x.value), C(R)
                },
                n = m(!1),
                d = L(() => ye("main", `${n.value?"eyeVisible":"eyeInvisible"}`)),
                g = () => {
                    var $ = {
                        start: 0,
                        end: 0
                    };
                    return $.start = c.value.selectionStart, $.end = c.value.selectionEnd, $
                },
                i = ($, R) => {
                    if (R.length > 1 && !R.includes("•")) {
                        s.value = R;
                        return
                    }
                    let x = R.split("•").join("");
                    if (x) {
                        let W = s.value.length - (R.length - $.end);
                        s.value = s.value.slice(0, $.end - x.length) + x + s.value.slice(W)
                    } else s.value = s.value.slice(0, $.end) + s.value.slice($.end + s.value.length - R.length)
                },
                f = $ => {
                    if (n.value) return;
                    if (!$) {
                        c.value.value = "";
                        return
                    }
                    let R = "";
                    for (let x = 0; x < $.length; x++) R += "•";
                    c.value.value = R
                },
                C = $ => {
                    c.value.setSelectionRange($.start, $.end)
                },
                l = () => {
                    a.value = !0
                },
                S = $ => {
                    a.value && (a.value = !1, p($))
                },
                F = () => {
                    n.value = !n.value, n.value ? c.value.value = s.value : f(s.value)
                };
            me(() => {
                s.value = u.value || "", f(s.value)
            });
            const I = localStorage.getItem("language"),
                V = L(() => {
                    let $, R = u.label;
                    switch (I) {
                        case "vi":
                            switch (R) {
                                case "Đặt mật khẩu":
                                    $ = t("setLoginPSW");
                                    break;
                                case "Xác nhận mật khẩu":
                                    $ = t("enterPswConfirmation");
                                    break;
                                default:
                                    $ = t("phEnter") + R;
                                    break
                            }
                            break;
                        default:
                            $ = R
                    }
                    return $
                });
            return ($, R) => {
                const x = E("svg-icon");
                return h(), b("div", bs, [e("div", ks, [y(x, {
                    name: "editPswIcon",
                    class: "passwordInput__container-label__icon"
                }), e("span", null, r($.label), 1)]), e("div", $s, [e("input", {
                    type: n.value ? "text" : "password",
                    placeholder: V.value,
                    maxlength: $.maxlength,
                    onInput: p,
                    onCompositionstart: l,
                    onCompositionend: S,
                    ref_key: "inputPwd",
                    ref: c,
                    value: $.value,
                    autocomplete: "new-password"
                }, null, 40, Ss), e("img", {
                    src: d.value,
                    class: "eye",
                    onClick: F
                }, null, 8, Cs)])])
            }
        }
    });
const le = H(Is, [
        ["__scopeId", "data-v-ea5b66c8"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/PasswordInput.vue"]
    ]),
    Ie = {
        moneyup: /^(?!0+$)(?!0*\.0*$)\d{1,11}(\.\d{1,2})?$/,
        redNum: /^([1-9]\d{0,2}|1000)$/,
        requiredNum: /^.{0,20}$/,
        passReg2: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
        passReg3: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/,
        outmoneypwd: /^\d{6}$/,
        name: /^[^~`!@#$%^&*+-/=/_()|<\{\}\[\],.:'"//\?\\/>》《]{1,30}$/,
        tuiName: /^[a-zA-Z\s\u4e00-\u9fa50-9][a-zA-Z0-9\s\u4e00-\u9fa5]{1,23}$/,
        yaoma: /^[A-Za-z0-9|A-Za-z|0-9]{6}$/,
        httpCheck: /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/,
        password: /^[A-Za-z0-9~`!@#$%^&*()_+-='",;.?/|]{6,12}$/,
        account: /^(?![a-zA-Z]+$)[a-zA-Z0-9|0-9]{7,11}$/,
        email: /^[0-9A-Za-zd]+([-_.][0-9A-Za-zd]+)*@([0-9A-Za-zd]+[-.]{0,1})[A-Za-zd]{1,5}$/,
        email1: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        length1: /^.{6,30}$/,
        phone: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        phone1: /^(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
        moneys2: /^(-?)\d{1,9}(\.\d{1,2})?$/,
        moneys21: /^\d{1,4}(\.\d{1,2})?$/,
        ip: /^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/,
        int: /^[1-9]\d*$/,
        verifyname: /[^a-zA-Z\s+$]/g,
        inputrule: /^[0-9,|]+$/
    },
    Ts = {
        moneyup: "validateDesc1",
        redNum: "validateDesc2",
        requiredNum: "validateDesc3",
        passReg2: "pswRequirements",
        outmoneypwd: "validateDesc5",
        name: "validateDesc6",
        tuiName: "validateDesc7",
        endSpace: "validateDesc8",
        yaoma: "validateDesc9",
        httpCheck: "validateDesc10",
        password: "validateDesc11",
        account: "validateDesc13",
        email: "validateDesc14",
        length1: "validateDesc15",
        phone: "validateDesc16",
        moneys2: "validateDesc17",
        moneys21: "validateDesc18",
        ip: "validateDesc19",
        int: "validateDesc20",
        verifyname: "validateDesc21",
        inputtip: "validateDesc22"
    },
    Te = _ => (pe("data-v-ab583a3a"), _ = _(), ve(), _),
    Ps = {
        class: "RpwdPopup"
    },
    Fs = {
        class: "RpwdPopup-head"
    },
    xs = {
        class: "RpwdPopup-topTip"
    },
    Rs = Te(() => e("br", null, null, -1)),
    Es = {
        class: "RpwdPopup-tip"
    },
    Ls = Te(() => e("div", {
        class: "tipbg"
    }, null, -1)),
    Vs = {
        class: "RpwdPopup-errorTip"
    },
    Ns = {
        key: 0
    },
    Bs = {
        class: "errorTip"
    },
    Ds = Te(() => e("br", null, null, -1)),
    Us = {
        class: "RpwdPopup-foot"
    },
    qs = M({
        __name: "RpwdPopup",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            },
            phoneNumber: {
                type: String,
                default: ""
            },
            phoneNumberType: {
                type: String,
                default: ""
            },
            passwordErrorMaxNum: {
                default: 10
            }
        },
        emits: ["update:show"],
        setup(_, {
            emit: k
        }) {
            const u = _,
                {
                    t
                } = ee();
            Y();
            const {
                getSelfCustomerServiceLink: c
            } = be({
                ServerType: 2
            }), s = m(!1), a = te(), p = m(!1), n = m({
                smsvcode: "",
                password: "",
                rePassword: ""
            }), d = L({
                get() {
                    return u.show || !1
                },
                set(C) {
                    C || k("update:show", !1)
                }
            }), g = async () => {
                if (!u.phoneNumber) return;
                await re(ct({
                    phone: u.phoneNumberType + u.phoneNumber,
                    codeType: qe.resetPassword
                })) ? we(t("sendSuccess")) : setTimeout(() => {
                    a.setCountDown(0)
                }, 500)
            }, i = async () => {
                if (!n.value.smsvcode.trim()) return q({
                    message: t("registerTip1"),
                    wordBreak: "break-word"
                });
                if (n.value.smsvcode.trim().length != 6) return q({
                    message: t("verifyCode6Digits"),
                    wordBreak: "break-word"
                });
                if (!n.value.password.trim()) return q({
                    message: t("registerTip2"),
                    wordBreak: "break-word"
                });
                if (!Ie.passReg3.test(n.value.password)) {
                    s.value = !0;
                    return
                }
                if (!n.value.rePassword.trim()) return q({
                    message: t("registerTip3"),
                    wordBreak: "break-word"
                });
                if (n.value.password !== n.value.rePassword) {
                    p.value = !0;
                    return
                } else p.value = !1;
                const {
                    password: C,
                    smsvcode: l
                } = n.value;
                let S = {
                    username: u.phoneNumberType + u.phoneNumber,
                    password: C,
                    type: "mobile",
                    smsvcode: l
                };
                await re(Me(S)) && (we(t("rpdsucceed")), localStorage.clear(), k("update:show", !1))
            }, f = () => {
                c()
            };
            return (C, l) => {
                const S = E("svg-icon"),
                    F = E("van-popup");
                return h(), b($e, null, [U(" 规则弹层 begin"), y(F, {
                    show: d.value,
                    "onUpdate:show": l[4] || (l[4] = I => d.value = I),
                    "close-on-click-overlay": !1,
                    position: "bottom",
                    round: ""
                }, {
                    default: z(() => [e("div", Ps, [e("div", Fs, r(o(t)("idlockTitle")), 1), e("div", xs, [N(r(o(t)("idlockTip1", [_.passwordErrorMaxNum])), 1), Rs, N(r(o(t)("idlockTip3")), 1)]), y(ys, {
                        value: n.value.smsvcode,
                        "onUpdate:value": l[0] || (l[0] = I => n.value.smsvcode = I),
                        number: _.phoneNumber,
                        sendFunc: g,
                        numberType: _.phoneNumberType,
                        "type-p": "lock"
                    }, null, 8, ["value", "number", "numberType"]), y(le, {
                        value: n.value.password,
                        "onUpdate:value": l[1] || (l[1] = I => n.value.password = I),
                        label: o(t)("newPSWRest")
                    }, null, 8, ["value", "label"]), D(e("div", Es, [Ls, e("span", null, r(o(t)("pswRule")), 1)], 512), [
                        [G, s.value]
                    ]), y(le, {
                        value: n.value.rePassword,
                        "onUpdate:value": l[2] || (l[2] = I => n.value.rePassword = I),
                        label: o(t)("newPSWconfirm")
                    }, null, 8, ["value", "label"]), e("div", Vs, [p.value ? (h(), b("span", Ns, r(o(t)("unmatchedInput")), 1)) : U("v-if", !0)]), e("div", {
                        class: "gotuserver van-hairline--surround",
                        onClick: f
                    }, [y(S, {
                        name: "customer1"
                    }), N(r(o(t)("contactServicer")), 1)]), e("div", Bs, [N(r(o(t)("wrongTel")), 1), Ds, N(r(o(t)("rpwdPopupTip")), 1)]), e("div", Us, [e("button", {
                        class: "dialogBtn",
                        onClick: i
                    }, r(o(t)("confirm")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: l[3] || (l[3] = I => k("update:show", !1))
                    }, r(o(t)("cancel")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const Ms = H(qs, [
        ["__scopeId", "data-v-ab583a3a"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/RpwdPopup.vue"]
    ]),
    As = {
        class: "phoneInput__container"
    },
    zs = {
        class: "phoneInput__container-label"
    },
    Hs = {
        class: "phoneInput__container-input"
    },
    Os = ["placeholder"],
    Zs = M({
        __name: "PhoneInput",
        props: {
            type: {
                type: String,
                required: !0
            },
            showValidate: {
                type: Boolean,
                required: !0
            },
            typeP: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !0
            },
            number: {
                type: String,
                required: !0
            }
        },
        emits: ["update:show-validate", "changeT", "changeN"],
        setup(_, {
            expose: k,
            emit: u
        }) {
            const t = _,
                c = m(),
                s = L({
                    get() {
                        return t.number
                    },
                    set(i) {
                        u("changeN", i.replace(/[^0-9]/g, ""))
                    }
                });

            function a(i) {
                i.target.value.length < 6 && u("update:show-validate", !0)
            }

            function p(i) {
                const f = i.target,
                    C = /[\u4e00-\u9fa5]/g;
                f.value = f.value.replace(C, ""), f.value.length > 0 && u("update:show-validate", !1)
            }
            const n = i => {
                u("changeT", i)
            };
            tt(c, () => {
                c.value.close()
            }), me(() => {});
            const d = m();

            function g() {
                j(() => {
                    d.value.focus()
                })
            }
            return k({
                getFocus: g
            }), (i, f) => {
                const C = E("svg-icon"),
                    l = he("only-num");
                return h(), b("div", As, [e("div", zs, [y(C, {
                    name: "phone"
                }), e("span", null, r(i.$t("phone")), 1)]), e("div", Hs, [y(mt, {
                    typeValue: t.numberType,
                    ref_key: "dropDown",
                    ref: c,
                    onChangeT: n
                }, null, 8, ["typeValue"]), D(e("input", {
                    type: "text",
                    name: "userNumber",
                    "onUpdate:modelValue": f[0] || (f[0] = S => s.value = S),
                    placeholder: i.$t("plsEnterTel"),
                    onBlur: a,
                    onInput: p,
                    ref_key: "number",
                    ref: d
                }, null, 40, Os), [
                    [l],
                    [de, s.value]
                ])])])
            }
        }
    });
const Ws = H(Zs, [
        ["__scopeId", "data-v-50aa8bb0"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/PhoneInput.vue"]
    ]),
    js = _ => (pe("data-v-33f88764"), _ = _(), ve(), _),
    Gs = {
        class: "signIn__container"
    },
    Xs = {
        class: "signIn__container-button"
    },
    Js = {
        class: "signIn_footer"
    },
    Ks = {
        class: "font24"
    },
    Ys = {
        class: "font24"
    },
    Qs = {
        class: "idlockTip"
    },
    eo = js(() => e("br", null, null, -1)),
    to = ["src"],
    so = M({
        __name: "SignIn",
        setup(_, {
            expose: k
        }) {
            const u = Y(),
                {
                    t
                } = ee(),
                c = m("login"),
                {
                    setLoading: s
                } = Ae(),
                a = te(),
                p = m(!1),
                {
                    getSelfCustomerServiceLink: n,
                    isCenterServer: d
                } = be({
                    ServerType: 2
                }),
                g = m(!1),
                i = m(10),
                f = m();
            let C = !1;
            async function l() {
                if (!C) {
                    if (C = !0, ze() && await new Promise(v => setTimeout(v, 1e3)), C = !1, !a.userForm.number || a.userForm.number.toString().trim() === "") {
                        g.value = !0;
                        return
                    }
                    if (!a.userForm.password || a.userForm.password.toString().trim() === "") return q({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    a.userForm.numberType = a.getUserForm.numberType.replace("+", ""), a.userForm.remember && a.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", a.userForm.password) : localStorage.setItem("remember", ""), a.isOpenCaptcha && !$.value ? oe() : (s(!0), await a.signIn(a.userForm).then(v => {
                        a.userForm.vCode = ""
                    }).catch(v => {
                        var P;
                        $.value = !1, v.code === 1 && (i.value = ((P = v.data) == null ? void 0 : P.passwordErrorMaxNum) || 10), v.msgCode === 33 ? j(() => T.value = !0) : w(v.msgCode || 0)
                    }).finally(() => {
                        x.value.setShowHiden(!1), s(!1)
                    }))
                }
            }
            const S = () => {
                u.push({
                    name: "register"
                })
            };

            function F() {
                u.push({
                    name: "rpwd"
                }), a.setCurrentView("ResetPassword")
            }

            function I() {
                n()
            }
            const V = v => {
                    a.getUserForm.numberType = v
                },
                $ = m(!1),
                R = v => {
                    a.getUserForm.number = v
                },
                x = m(),
                W = m(""),
                ie = () => {
                    p.value = !1, n()
                };
            Ne(window, "keydown", v => {
                v.key == "Enter" && l()
            }), me(async () => {
                var P;
                const v = a.getUserForm;
                localStorage.getItem("remember") != null && ((P = localStorage.getItem("remember")) == null ? void 0 : P.toString().trim()) != "" ? v.password = localStorage.getItem("remember") : v.password = "", a.setUserForm({ ...v
                })
            });
            let ue = Se(() => a.userForm.number, v => {
                a.setCountDown(0)
            }, {
                flush: "post"
            });
            const ae = async v => {
                    j(async () => {
                        x.value.startRequestVerify(), s(!0), a.signIn(Object.assign(a.userForm, {
                            captchaId: W.value,
                            track: v
                        })).then(P => {}).catch(P => {
                            var ne;
                            P.code === 1 && (i.value = ((ne = P.data) == null ? void 0 : ne.passwordErrorMaxNum) || 10), P.msgCode === 33 ? (j(() => T.value = !0), $.value = !0) : w(P.msgCode || 0)
                        }).finally(() => {
                            x.value.setShowHiden(!1), s(!1)
                        })
                    })
                },
                oe = () => {
                    j(async () => {
                        x.value.startRequestGenerate();
                        const v = await re(He());
                        v ? (W.value = v.data.captchaId, x.value.endRequestGenerate(v.data.backgroundImage, v.data.sliderImage)) : x.value.endRequestGenerate(null, null)
                    })
                },
                w = v => {
                    v == 122 && (p.value = !0)
                };
            Be(() => {
                ue(), a.getUserForm.remember || (a.getUserForm.password = "")
            });
            const T = m(!1),
                Z = v => {
                    a.userForm.vCode = v, l()
                },
                X = () => {
                    T.value = !1, a.userForm.vCode = ""
                };
            return k({
                showPhoneValidate: g
            }), (v, P) => {
                const ne = E("van-checkbox"),
                    ce = E("svg-icon");
                return h(), b("div", Gs, [y(Ws, {
                    "show-validate": g.value,
                    "onUpdate:showValidate": P[0] || (P[0] = O => g.value = O),
                    ref_key: "phone",
                    ref: f,
                    type: c.value,
                    "number-type": o(a).getUserForm.numberType,
                    number: o(a).userForm.number,
                    onChangeT: V,
                    onChangeN: R
                }, null, 8, ["show-validate", "type", "number-type", "number"]), y(le, {
                    value: o(a).userForm.password,
                    "onUpdate:value": P[1] || (P[1] = O => o(a).userForm.password = O),
                    label: v.$t("password"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), e("div", null, [y(ne, {
                    modelValue: o(a).userForm.rememberpwd,
                    "onUpdate:modelValue": P[2] || (P[2] = O => o(a).userForm.rememberpwd = O)
                }, {
                    default: z(() => [N(r(v.$t("rememberPSW")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), e("div", Xs, [e("button", {
                    class: A([o(a).userForm.number != "" ? "active" : ""]),
                    onClick: l
                }, r(v.$t("login")), 3), e("button", {
                    class: "register",
                    onClick: S
                }, r(v.$t("register")), 1)]), e("div", Js, [o(a).isOpenForgetPasswordSMSState || o(a).isOpenForgetPasswordEmailState ? (h(), b("div", {
                    key: 0,
                    class: "forgetcon",
                    onClick: F
                }, [y(ce, {
                    name: "clock_b",
                    class: "forgetbg"
                }), e("div", Ks, r(v.$t("forgetPSW")), 1)])) : U("v-if", !0), e("div", {
                    class: "customcon",
                    onClick: I
                }, [o(d) ? (h(), K(ce, {
                    key: 0,
                    name: "serverTicket1",
                    class: "forgetbg"
                })) : (h(), K(ce, {
                    key: 1,
                    name: "customer_b",
                    class: "forgetbg"
                })), e("div", Ys, r(o(d) ? o(t)("serverTicket") : v.$t("customerServiceTitle")), 1)])]), y(je, {
                    ref_key: "captchaRef",
                    ref: x,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    text: o(t)("slideCaptchaText"),
                    onFinish: ae,
                    onRefresh: oe
                }, null, 8, ["text"]), U("10锁定密码弹窗"), o(a).isOpenForgetPasswordSMSState && p.value ? (h(), K(Ms, {
                    key: 0,
                    show: p.value,
                    "onUpdate:show": P[3] || (P[3] = O => p.value = O),
                    phoneNumber: o(a).getUserForm.number,
                    phoneNumberType: o(a).getUserForm.numberType,
                    passwordErrorMaxNum: i.value
                }, null, 8, ["show", "phoneNumber", "phoneNumberType", "passwordErrorMaxNum"])) : (h(), K(Oe, {
                    key: 1,
                    show: p.value,
                    "onUpdate:show": P[5] || (P[5] = O => p.value = O),
                    "show-cancel-btn": !0,
                    title: v.$t("idlockTitle")
                }, {
                    content: z(() => [e("div", Qs, [N(r(v.$t("idlockTip1", [i.value])) + " ", 1), eo, N(r(v.$t("idlockTip2")), 1)])]),
                    footer: z(() => [e("button", {
                        class: "dialogBtn",
                        onClick: P[4] || (P[4] = O => p.value = !1)
                    }, r(v.$t("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: ie
                    }, [e("img", {
                        src: o(ye)("main", "iconservr")
                    }, null, 8, to), N(" " + r(v.$t("contactServicer")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])), U(" 验证弹窗 "), y(We, {
                    showPopup: T.value,
                    onOnConfirm: Z,
                    onOnBack: X
                }, null, 8, ["showPopup"])])
            }
        }
    });
const oo = H(so, [
        ["__scopeId", "data-v-33f88764"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/SignIn.vue"]
    ]),
    ao = {
        class: "verifyInput__container"
    },
    no = {
        class: "verifyInput__container-label"
    },
    ro = {
        key: 0
    },
    lo = {
        key: 1
    },
    io = {
        class: "verifyInput__container-input"
    },
    uo = ["placeholder"],
    co = {
        key: 0
    },
    po = {
        key: 1
    },
    vo = {
        class: "verifyInput__container-tip"
    },
    mo = M({
        __name: "VerifyEmailInput",
        props: {
            value: {
                type: String,
                required: !1
            },
            typeP: {
                type: String,
                required: !1
            },
            isShowVerifyT: {
                type: Boolean,
                required: !1
            },
            placeholder: {
                type: String,
                required: !1,
                default: _e.global.t("registerTip6")
            },
            sendFunc: {
                type: Function,
                required: !1
            },
            number: {
                type: String,
                required: !1
            },
            numberType: {
                type: String,
                required: !1
            },
            showVerify: {
                type: Boolean,
                required: !1,
                default: !0
            },
            email: {
                type: String,
                required: !1,
                default: ""
            },
            loginType: {
                type: String,
                required: !1
            }
        },
        emits: ["update:value"],
        setup(_, {
            emit: k
        }) {
            const u = _;
            ee();
            const t = te(),
                c = Y(),
                s = L({
                    get() {
                        return u.value || ""
                    },
                    set(i) {
                        k("update:value", i)
                    }
                }),
                a = m(!0);
            async function p() {
                a.value && (a.value = !1), !(t.countEmailDown > 0) && (t.sendEmailCode(), u.sendFunc && u.sendFunc())
            }
            const n = L(() => localStorage.getItem("email") || u.email),
                d = i => {
                    const f = i.target;
                    f.value = f.value.replace(/\s+/g, ""), f.value = f.value.replace(/[^\d]/g, "")
                };

            function g() {
                c.push({
                    name: "CustomerService"
                })
            }
            return (i, f) => {
                const C = E("svg-icon"),
                    l = E("van-icon");
                return D((h(), b("div", ao, [D(e("div", no, [y(C, {
                    name: "safeIcon",
                    class: "verifyInput__container-label__icon"
                }), i.typeP === "updateEmail" || i.typeP === "lock" ? (h(), b("span", ro, r(i.$t("sendVerifyCodeTo")) + " " + r(o(dt)(n.value)), 1)) : (h(), b("span", lo, r(i.$t("verifyCode")), 1))], 512), [
                    [G, !(i.isShowVerifyT === !1 && i.typeP === "updateEmail")]
                ]), e("div", io, [D(e("input", {
                    type: "text",
                    "onUpdate:modelValue": f[0] || (f[0] = S => s.value = S),
                    placeholder: i.$t("phEnterVerificationCode"),
                    maxlength: "6",
                    onInput: d
                }, null, 40, uo), [
                    [de, s.value]
                ]), e("button", {
                    onClick: p,
                    class: A({
                        inActive: o(t).countEmailDown > 0
                    })
                }, [o(t).countEmailDown === 0 ? (h(), b("span", co, r(i.$t("send")), 1)) : (h(), b("span", po, r(o(t).countEmailDown) + "S ", 1))], 2)]), D(e("div", vo, [y(l, {
                    name: "warning-o"
                }), e("span", null, r(i.$t("codeUnreceived")) + "?", 1), e("span", {
                    onClick: f[1] || (f[1] = S => g())
                }, r(i.$t("contactServicer")), 1)], 512), [
                    [G, !a.value]
                ])], 512)), [
                    [G, i.showVerify]
                ])
            }
        }
    });
const _o = H(mo, [
        ["__scopeId", "data-v-484b25b1"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/VerifyEmailInput.vue"]
    ]),
    Pe = _ => (pe("data-v-95ce4137"), _ = _(), ve(), _),
    go = {
        class: "RpwdPopup"
    },
    fo = {
        class: "RpwdPopup-head"
    },
    ho = {
        class: "RpwdPopup-topTip"
    },
    wo = Pe(() => e("br", null, null, -1)),
    yo = {
        class: "RpwdPopup-tip"
    },
    bo = Pe(() => e("div", {
        class: "tipbg"
    }, null, -1)),
    ko = {
        class: "RpwdPopup-errorTip"
    },
    $o = {
        key: 0
    },
    So = {
        class: "errorTip"
    },
    Co = Pe(() => e("br", null, null, -1)),
    Io = {
        class: "RpwdPopup-foot"
    },
    To = M({
        __name: "EmailRpwdPopup",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            gamePresentation: {
                type: String,
                default: ""
            },
            email: {
                type: String,
                default: ""
            },
            passwordErrorMaxNum: {
                default: 10
            }
        },
        emits: ["update:show"],
        setup(_, {
            emit: k
        }) {
            const u = _,
                {
                    t
                } = ee();
            Y();
            const c = m(!1),
                {
                    getSelfCustomerServiceLink: s
                } = be({
                    ServerType: 2
                }),
                a = te(),
                p = m(!1),
                n = m({
                    smsvcode: "",
                    password: "",
                    rePassword: ""
                }),
                d = L({
                    get() {
                        return u.show || !1
                    },
                    set(C) {
                        C || k("update:show", !1)
                    }
                }),
                g = async () => {
                    if (!u.email) return;
                    await re(pt({
                        email: u.email,
                        emailType: qe.resetPassword
                    })) ? we(t("sendSuccess")) : setTimeout(() => {
                        a.setCountEmailDown(0)
                    }, 500)
                },
                i = async () => {
                    if (!n.value.smsvcode.trim()) return q({
                        message: t("registerTip6"),
                        wordBreak: "break-word"
                    });
                    if (n.value.smsvcode.trim().length != 6) return q({
                        message: t("verifyCode6Digits"),
                        wordBreak: "break-word"
                    });
                    if (!n.value.password.trim()) return q({
                        message: t("registerTip2"),
                        wordBreak: "break-word"
                    });
                    if (!Ie.passReg3.test(n.value.password)) {
                        c.value = !0;
                        return
                    }
                    if (!n.value.rePassword.trim()) return q({
                        message: t("registerTip3"),
                        wordBreak: "break-word"
                    });
                    if (n.value.password !== n.value.rePassword) {
                        p.value = !0;
                        return
                    } else p.value = !1;
                    const {
                        password: C,
                        smsvcode: l
                    } = n.value;
                    let S = {
                        username: u.email,
                        type: "email",
                        password: C,
                        smsvcode: l
                    };
                    await re(Me(S)) && (we(t("rpdsucceed")), localStorage.clear(), k("update:show", !1))
                },
                f = () => {
                    s()
                };
            return (C, l) => {
                const S = E("svg-icon"),
                    F = E("van-popup");
                return h(), b($e, null, [U(" 规则弹层 begin"), y(F, {
                    show: d.value,
                    "onUpdate:show": l[4] || (l[4] = I => d.value = I),
                    "close-on-click-overlay": !1,
                    position: "bottom",
                    round: ""
                }, {
                    default: z(() => [e("div", go, [e("div", fo, r(o(t)("idlockTitle")), 1), e("div", ho, [N(r(o(t)("idlockTip1", [_.passwordErrorMaxNum])), 1), wo, N(r(o(t)("idlockTip3")), 1)]), y(_o, {
                        value: n.value.smsvcode,
                        "onUpdate:value": l[0] || (l[0] = I => n.value.smsvcode = I),
                        sendFunc: g,
                        email: _.email,
                        "type-p": "lock"
                    }, null, 8, ["value", "email"]), y(le, {
                        value: n.value.password,
                        "onUpdate:value": l[1] || (l[1] = I => n.value.password = I),
                        label: o(t)("newPSWRest")
                    }, null, 8, ["value", "label"]), D(e("div", yo, [bo, e("span", null, r(o(t)("pswRule")), 1)], 512), [
                        [G, c.value]
                    ]), y(le, {
                        value: n.value.rePassword,
                        "onUpdate:value": l[2] || (l[2] = I => n.value.rePassword = I),
                        label: o(t)("newPSWconfirm")
                    }, null, 8, ["value", "label"]), e("div", ko, [p.value ? (h(), b("span", $o, r(o(t)("unmatchedInput")), 1)) : U("v-if", !0)]), e("div", {
                        class: "gotuserver",
                        onClick: f
                    }, [y(S, {
                        name: "customer1"
                    }), N(r(o(t)("contactServicer")), 1)]), e("div", So, [N(r(o(t)("wrongemail")), 1), Co, N(r(o(t)("rpwdEmailPopupTip")), 1)]), e("div", Io, [e("button", {
                        class: "dialogBtn",
                        onClick: i
                    }, r(o(t)("confirm")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: l[3] || (l[3] = I => k("update:show", !1))
                    }, r(o(t)("cancel")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 2112)
            }
        }
    });
const Po = H(To, [
        ["__scopeId", "data-v-95ce4137"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/EmailRpwdPopup.vue"]
    ]),
    Fo = {
        class: "emailcontainer"
    },
    xo = {
        class: "emailinput__container"
    },
    Ro = {
        class: "emailinput__container-label"
    },
    Eo = {
        class: "emailinput__container-input"
    },
    Lo = ["placeholder"],
    Vo = M({
        __name: "EmailInput",
        props: {
            type: {
                type: String,
                required: !0
            },
            email: {
                type: String,
                required: !0
            }
        },
        emits: ["update:show-validate", "changeN"],
        setup(_, {
            expose: k,
            emit: u
        }) {
            const t = _,
                c = te(),
                s = L({
                    get() {
                        return t.email
                    },
                    set(d) {
                        u("changeN", d)
                    }
                });

            function a(d) {
                const g = d.target,
                    i = /[\u4e00-\u9fa5]/g;
                g.value = g.value.replace(i, ""), g.value.length > 0 && u("update:show-validate", !1)
            }
            const p = m();

            function n() {
                j(() => {
                    p.value.focus()
                })
            }
            return k({
                getFocus: n
            }), (d, g) => {
                const i = E("svg-icon");
                return h(), b("div", Fo, [e("div", xo, [e("div", Ro, [y(i, {
                    name: "email",
                    class: "emailinput__container-label__icon"
                }), e("span", null, r(o(c).isOpenExternalAccount ? `${d.$t("otherlogin")} ${d.$t("login")}` : d.$t("email")), 1)]), e("div", Eo, [D(e("input", {
                    type: "text",
                    name: "userEmail",
                    maxlength: "250",
                    "onUpdate:modelValue": g[0] || (g[0] = f => s.value = f),
                    placeholder: d.$t("inputemail"),
                    onInput: a,
                    ref_key: "email",
                    ref: p
                }, null, 40, Lo), [
                    [de, s.value]
                ])])])])
            }
        }
    });
const No = H(Vo, [
        ["__scopeId", "data-v-4499df08"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/EmailInput.vue"]
    ]),
    Bo = _ => (pe("data-v-436a69c4"), _ = _(), ve(), _),
    Do = {
        class: "signIn__container"
    },
    Uo = {
        class: "signIn__container-button"
    },
    qo = {
        class: "signIn_footer"
    },
    Mo = {
        class: "font24"
    },
    Ao = {
        class: "font24"
    },
    zo = {
        class: "idlockTip"
    },
    Ho = Bo(() => e("br", null, null, -1)),
    Oo = ["src"],
    Zo = M({
        __name: "EmailSignIn",
        setup(_) {
            const k = Y(),
                {
                    t: u
                } = ee(),
                t = m(10),
                {
                    setLoading: c
                } = Ae(),
                s = te(),
                a = m(!1),
                {
                    getSelfCustomerServiceLink: p,
                    isCenterServer: n
                } = be({
                    ServerType: 2
                }),
                d = m(!1),
                g = m(),
                i = m("login"),
                f = m(!1);
            async function C() {
                if (ze() && await new Promise(w => setTimeout(w, 500)), !(!s.userForm.email || s.userForm.email.toString().trim() === "")) {
                    if (!s.isOpenExternalAccount && !Ie.email1.test(s.userForm.email)) return q({
                        message: u(Ts.email),
                        wordBreak: "break-word"
                    });
                    if (!s.userForm.password || s.userForm.password.toString().trim() === "") return q({
                        message: u("registerTip2"),
                        wordBreak: "break-word"
                    });
                    s.userForm.remember && s.userForm.password.toString().trim() !== "" ? localStorage.setItem("remember", s.userForm.password) : localStorage.setItem("remember", ""), s.isOpenCaptcha && !f.value ? ae() : (c(!0), await s.signIn(s.userForm).then(w => {}).catch(w => {
                        var T;
                        f.value = !1, w.code === 1 && (t.value = ((T = w.data) == null ? void 0 : T.passwordErrorMaxNum) || 10), w.msgCode === 33 ? d.value = !0 : oe(w.msgCode || 0)
                    }).finally(() => {
                        V.value.setShowHiden(!1), c(!1)
                    }))
                }
            }
            const l = () => {
                k.push({
                    name: "register"
                })
            };

            function S() {
                k.push({
                    name: "rpwd"
                }), s.setCurrentView("ResetPassword")
            }

            function F() {
                p()
            }
            const I = w => {
                    s.getUserForm.email = w
                },
                V = m(),
                $ = m(""),
                R = () => {
                    a.value = !1, k.push({
                        name: "CustomerService"
                    })
                };
            Ne(window, "keydown", w => {
                w.key == "Enter" && C()
            });
            const x = w => {
                    s.userForm.vCode = w, C()
                },
                W = () => {
                    d.value = !1, s.userForm.vCode = ""
                };
            me(async () => {
                var T;
                const w = s.getUserForm;
                localStorage.getItem("remember") != null && ((T = localStorage.getItem("remember")) == null ? void 0 : T.toString().trim()) != "" ? w.password = localStorage.getItem("remember") : w.password = "", s.setUserForm({ ...w
                })
            });
            let ie = Se(() => s.userForm.number, w => {
                s.setCountDown(0)
            }, {
                flush: "post"
            });
            const ue = async w => {
                    j(async () => {
                        V.value.startRequestVerify(), c(!0), s.signIn(Object.assign(s.userForm, {
                            captchaId: $.value,
                            track: w
                        })).then(T => {
                            s.userForm.vCode = ""
                        }).catch(T => {
                            var Z;
                            T.code === 1 && (t.value = ((Z = T.data) == null ? void 0 : Z.passwordErrorMaxNum) || 10), T.msgCode === 33 ? (j(() => d.value = !0), f.value = !0) : oe(T.msgCode || 0)
                        }).finally(() => {
                            V.value.setShowHiden(!1), c(!1)
                        })
                    })
                },
                ae = () => {
                    j(async () => {
                        V.value.startRequestGenerate();
                        const w = await re(He());
                        w ? ($.value = w.data.captchaId, V.value.endRequestGenerate(w.data.backgroundImage, w.data.sliderImage)) : V.value.endRequestGenerate(null, null)
                    })
                },
                oe = w => {
                    w == 122 && (a.value = !0)
                };
            return Be(() => {
                ie(), s.getUserForm.remember || (s.getUserForm.password = "")
            }), (w, T) => {
                const Z = E("van-checkbox"),
                    X = E("svg-icon");
                return h(), b("div", Do, [y(No, {
                    ref_key: "email",
                    ref: g,
                    type: i.value,
                    email: o(s).userForm.email,
                    onChangeN: I
                }, null, 8, ["type", "email"]), y(le, {
                    value: o(s).userForm.password,
                    "onUpdate:value": T[0] || (T[0] = v => o(s).userForm.password = v),
                    label: w.$t("password"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), e("div", null, [y(Z, {
                    modelValue: o(s).userForm.rememberpwd,
                    "onUpdate:modelValue": T[1] || (T[1] = v => o(s).userForm.rememberpwd = v)
                }, {
                    default: z(() => [N(r(w.$t("rememberPSW")), 1)]),
                    _: 1
                }, 8, ["modelValue"])]), e("div", Uo, [e("button", {
                    class: A([o(s).userForm.email != "" ? "active" : ""]),
                    onClick: C
                }, r(w.$t("login")), 3), e("button", {
                    class: "register",
                    onClick: l
                }, r(w.$t("register")), 1)]), e("div", qo, [o(s).isOpenForgetPasswordSMSState || o(s).isOpenForgetPasswordEmailState ? (h(), b("div", {
                    key: 0,
                    class: "forgetcon",
                    onClick: S
                }, [y(X, {
                    name: "clock_b",
                    class: "forgetbg"
                }), e("div", Mo, r(w.$t("forgetPSW")), 1)])) : U("v-if", !0), e("div", {
                    class: "customcon",
                    onClick: F
                }, [o(n) ? (h(), K(X, {
                    key: 0,
                    name: "serverTicket1",
                    class: "forgetbg"
                })) : (h(), K(X, {
                    key: 1,
                    name: "customer_b",
                    class: "forgetbg"
                })), e("div", Ao, r(o(n) ? o(u)("serverTicket") : w.$t("customerServiceTitle")), 1)])]), y(je, {
                    ref_key: "captchaRef",
                    ref: V,
                    "refresh-color": "#FFFFFF",
                    "show-refresh": !0,
                    text: o(u)("slideCaptchaText"),
                    onFinish: ue,
                    onRefresh: ae
                }, null, 8, ["text"]), U("10锁定密码弹窗"), o(s).isOpenForgetPasswordEmailState && a.value ? (h(), K(Po, {
                    key: 0,
                    show: a.value,
                    "onUpdate:show": T[2] || (T[2] = v => a.value = v),
                    email: o(s).getUserForm.email,
                    passwordErrorMaxNum: t.value
                }, null, 8, ["show", "email", "passwordErrorMaxNum"])) : (h(), K(Oe, {
                    key: 1,
                    show: a.value,
                    "onUpdate:show": T[4] || (T[4] = v => a.value = v),
                    "show-cancel-btn": !0,
                    title: w.$t("idlockTitle")
                }, {
                    content: z(() => [e("div", zo, [N(r(w.$t("idlockTip1", [t.value])) + " ", 1), Ho, N(r(w.$t("idlockTip2")), 1)])]),
                    footer: z(() => [e("button", {
                        class: "dialogBtn",
                        onClick: T[3] || (T[3] = v => a.value = !1)
                    }, r(w.$t("cancel")), 1), e("button", {
                        class: "dialogBtn",
                        onClick: R
                    }, [e("img", {
                        src: o(ye)("main", "iconservr")
                    }, null, 8, Oo), N(" " + r(w.$t("contactServicer")), 1)])]),
                    _: 1
                }, 8, ["show", "title"])), U(" 验证弹窗 "), y(We, {
                    showPopup: d.value,
                    onOnConfirm: x,
                    onOnBack: W
                }, null, 8, ["showPopup"])])
            }
        }
    });
const Wo = H(Zo, [
        ["__scopeId", "data-v-436a69c4"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Login/EmailSignIn.vue"]
    ]),
    jo = {
        class: "login__container-heading"
    },
    Go = {
        class: "login__container-heading__title"
    },
    Xo = {
        class: "login__container-heading__subTitle"
    },
    Jo = {
        class: "login_container-tab"
    },
    Ko = {
        class: "login__container-form"
    },
    sa = M({
        __name: "index",
        setup(_) {
            const {
                t: k
            } = _e.global, u = Y(), t = te();
            t.getRegisterState();
            const c = m("mobile"),
                s = m(void 0);
            t.userForm.logintype = c.value;
            const {
                openAll: a
            } = vt();

            function p() {
                u.replace("/")
            }
            const n = d => {
                c.value = d, t.userForm.logintype = d, t.userForm.password = "", t.remember(!0)
            };
            return st((d, g, i) => {
                i(), d.name === "home" && a()
            }), me(async () => {
                const d = (await ot(() =>
                    import ("./chunk.fingerprintjs-833b8cd8.js"), ["assets/js/chunk.fingerprintjs-833b8cd8.js", "assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css"])).default;
                if (!localStorage.getItem("arvId")) try {
                    const i = await (await d.load()).get();
                    localStorage.setItem("arvId", i.visitorId)
                } catch (g) {
                    console.error("Error generating fingerprint:", g)
                }
                t.remember(!0), await t.getIp()
            }), (d, g) => {
                const i = E("NavBar"),
                    f = E("svg-icon");
                return h(), b("div", {
                    class: "login__container",
                    ref_key: "loginContainerRef",
                    ref: s
                }, [y(i, {
                    onClickLeft: p,
                    class: "main",
                    leftArrow: !0,
                    headLogo: !0
                }, {
                    right: z(() => [y(Ct)]),
                    _: 1
                }), e("div", jo, [e("h1", Go, r(o(k)("login")), 1), e("div", Xo, [e("div", null, r(d.$t("pleaseloginphoneoremail")), 1), e("div", null, r(d.$t("forgetyourpassword")), 1)])]), e("div", Jo, [e("div", {
                    class: A(["tab", [c.value == "mobile" ? "active" : ""]]),
                    onClick: g[0] || (g[0] = C => n("mobile"))
                }, [y(f, {
                    name: "phone"
                }), e("div", null, r(d.$t("phoneN")), 1)], 2), e("div", {
                    class: A(["tab", [c.value == "email" ? "active" : ""]]),
                    onClick: g[1] || (g[1] = C => n("email"))
                }, [e("div", null, [y(f, {
                    name: "email"
                }), D(y(f, {
                    name: "user"
                }, null, 512), [
                    [G, o(t).isOpenExternalAccount]
                ])]), e("div", null, r(o(t).isOpenExternalAccount ? d.$t("otherlogin") : d.$t("emaillogin")), 1)], 2)]), e("div", Ko, [e("div", {
                    class: A(["tab-content", [c.value == "mobile" ? "activecontent" : ""]])
                }, [y(oo, {
                    ref: "signIn"
                }, null, 512)], 2), e("div", {
                    class: A(["tab-content", [c.value == "email" ? "activecontent" : ""]])
                }, [y(Wo, {
                    ref: "signIn"
                }, null, 512)], 2)])], 512)
            }
        }
    });
export {
    No as E, bt as L, le as P, je as S, ys as V, sa as _, We as a, _o as b, Ts as c, Ws as d, Ct as e, Ie as v
};