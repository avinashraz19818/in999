import {
    G as U,
    z as q,
    B as X,
    H as V,
    az as F,
    I as $,
    Q as u,
    au as j,
    O as t,
    N as C,
    J as e,
    aq as z,
    P as s,
    aw as S,
    aB as Z,
    aC as ee,
    R as te,
    r as b,
    C as oe,
    an as ne,
    K as se,
    u as H,
    aA as pe,
    aE as _e,
    F as J,
    T as ge,
    w as ye,
    b3 as me
} from "./common.modules-af1f85b9.js";
import {
    V as Q,
    a as he
} from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js";
import {
    b as L,
    _ as E,
    a3 as we,
    G as be,
    bE as $e,
    A as N,
    bF as Ce,
    g as P,
    J as Se,
    bm as xe,
    bh as Ve,
    bi as W,
    bn as ke,
    d as Te,
    y as Ge,
    aT as Be,
    bG as De,
    bH as Ie,
    L as Me
} from "./page-activity-ActivityDetail-f7c58355.js";
const ae = i => (Z("data-v-2c18a1cc"), i = i(), ee(), i),
    Ne = {
        class: "info-dialog"
    },
    Pe = {
        class: "info-dialog-header"
    },
    Oe = ae(() => e("span", {
        class: "info-dialog-header-left"
    }, null, -1)),
    Ae = ae(() => e("span", {
        class: "info-dialog-header-right"
    }, null, -1)),
    ze = {
        class: "info-dialog-content"
    },
    je = {
        class: "info-dialog-footer"
    },
    Ue = U({
        __name: "DiaLogOther",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            confirmText: {
                type: String,
                default: ""
            },
            showCancelBtn: {
                type: Boolean,
                default: !1
            },
            cancelText: {
                type: String,
                default: ""
            }
        },
        emits: ["update:show", "confirm", "cancel", "beforeClose"],
        setup(i, {
            emit: o
        }) {
            const _ = i,
                {
                    t: m
                } = q(),
                B = X({
                    get() {
                        return _.show || !1
                    },
                    set(r) {
                        o("update:show", r)
                    }
                });

            function c() {}
            return (r, a) => {
                const g = V("van-dialog"),
                    l = F("lazy");
                return C(), $("div", Ne, [u(g, {
                    show: B.value,
                    "onUpdate:show": a[1] || (a[1] = y => B.value = y),
                    onCancel: a[2] || (a[2] = () => {
                        o("cancel")
                    }),
                    onConfirm: a[3] || (a[3] = () => {
                        o("confirm")
                    }),
                    "cancel-button-text": i.cancelText || t(m)("cancel"),
                    "confirm-button-text": i.confirmText || t(m)("confirm"),
                    "show-cancel-button": i.showCancelBtn,
                    "before-close": c
                }, {
                    default: j(() => [e("div", null, [e("div", Pe, [Oe, z(r.$slots, "header", {}, () => [e("h5", null, s(i.title), 1)], !0), Ae]), e("div", ze, [z(r.$slots, "content", {}, () => [e("div", null, s(r.$t("contentsHere")), 1)], !0)]), e("div", je, [z(r.$slots, "footer", {}, () => [S(e("img", {
                        onClick: a[0] || (a[0] = () => {
                            o("update:show", !1)
                        })
                    }, null, 512), [
                        [l, t(L)("main", "close")]
                    ])], !0)])])]),
                    _: 3
                }, 8, ["show", "cancel-button-text", "confirm-button-text", "show-cancel-button"])])
            }
        }
    });
const qe = E(Ue, [
        ["__scopeId", "data-v-2c18a1cc"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/common/DiaLogOther.vue"]
    ]),
    Fe = {
        class: "gverify-container"
    },
    Le = {
        class: "gverify-container-header"
    },
    Ee = {
        class: "gverify-container-header-belly"
    },
    Ke = {
        alt: ""
    },
    Re = {
        class: "gverify-container-content"
    },
    Ye = {
        class: "gverify-container-content-item"
    },
    He = {
        class: "gverify-container-content-item-title"
    },
    Je = {
        alt: ""
    },
    Qe = {
        class: "gverify-container-content-item-tip"
    },
    We = {
        class: "gverify-container-content-item-tip"
    },
    Xe = {
        class: "gravity-container-modal"
    },
    Ze = {
        class: "popup-content"
    },
    et = {
        key: 0,
        class: "box"
    },
    tt = {
        class: "info"
    },
    ot = {
        class: "txt"
    },
    nt = {
        class: "txt"
    },
    st = {
        key: 1,
        class: "box"
    },
    at = {
        class: "info"
    },
    it = {
        class: "txt"
    },
    lt = {
        class: "txt"
    },
    ct = {
        key: 2,
        class: "box"
    },
    rt = {
        class: "label"
    },
    dt = ["placeholder"],
    ut = {
        class: "lab"
    },
    vt = {
        class: "other"
    },
    ft = U({
        __name: "index",
        setup(i) {
            const {
                t: o
            } = q(), _ = te(), m = we(), c = be().getUserInfo;
            let r = b(o("pwdVerify")),
                a = b(0),
                g = b(!1);
            const l = b(""),
                y = b(!1),
                k = b([]),
                O = {
                    text: "name",
                    value: "code"
                },
                {
                    isGoogleVerifySms: h,
                    isGoogleVerifyEmail: T,
                    registerState: A
                } = $e();
            A();
            const p = async d => {
                var M, G;
                const n = await N(Ce({
                    verifyCode: l.value.toString(),
                    verifyType: d
                }));
                (M = n == null ? void 0 : n.data) != null && M.secret && _.push({
                    name: "GoogleVerify-BindGoogle",
                    query: {
                        secret: (G = n.data) == null ? void 0 : G.secret,
                        type: 0
                    }
                })
            };
            oe(() => {});
            const v = b(!1),
                D = () => {
                    l.value = "", m.setCountDown(0), c.regType === 1 ? h.value ? (a.value = 1, g.value = !0) : c.verifyMethods.email !== "" && T.value ? (a.value = 2, g.value = !0) : a.value = 0 : T.value ? (a.value = 2, g.value = !0) : c.verifyMethods.mobile !== "" && h.value ? (a.value = 1, g.value = !0) : a.value = 0, r.value = f(a.value), v.value = !0
                },
                f = d => {
                    let n = "";
                    switch (d) {
                        case 0:
                            n = o("pwdVerify");
                            break;
                        case 1:
                            n = o("SMSVerify");
                            break;
                        case 2:
                            n = o("emailverification");
                            break;
                        default:
                            n = o("pwdVerify");
                            break
                    }
                    return n
                },
                I = () => {
                    if (a.value === 1 || a.value === 2) {
                        if (!l.value) return H(o("noVerifyCodeFound"))
                    } else if (!l.value) return H(o("pwdNull"));
                    let d = ie(a.value);
                    p(d)
                },
                ie = d => {
                    let n = 1;
                    switch (d) {
                        case 0:
                            n = 2;
                            break;
                        case 1:
                            n = 1;
                            break;
                        case 2:
                            n = 4;
                            break;
                        default:
                            n = 2;
                            break
                    }
                    return n
                },
                le = () => {
                    y.value = !0, T.value && c.verifyMethods.email !== "" && h.value && c.verifyMethods.mobile !== "" ? k.value = [{
                        name: o("SMSVerify"),
                        code: 1
                    }, {
                        name: o("emailverification"),
                        code: 2
                    }] : T.value && c.verifyMethods.email !== "" ? k.value = [{
                        name: o("emailverification"),
                        code: 2
                    }] : h.value && c.verifyMethods.mobile !== "" && (k.value = [{
                        name: o("SMSVerify"),
                        code: 1
                    }])
                },
                ce = ({
                    selectedOptions: d
                }) => {
                    r.value = f(d[0].code), a.value = d[0].code, y.value = !1
                },
                K = async () => {
                    if (a.value === 1)
                        if (await N(Ve({
                                phone: c.verifyMethods.mobile,
                                codeType: W.openGoogle
                            }))) J(o("sendSuccess"));
                        else return -1;
                    else if (await N(ke({
                            email: c.verifyMethods.email,
                            emailType: W.openGoogle
                        }))) J(o("sendSuccess"));
                    else return -1
                };

            function re() {
                _.push({
                    name: "CustomerService"
                })
            }

            function de() {
                _.push({
                    name: "rpwd"
                })
            }
            return (d, n) => {
                const M = V("NavBar"),
                    G = V("svg-icon"),
                    ue = V("van-icon"),
                    ve = V("van-picker"),
                    fe = V("van-popup"),
                    R = F("lazy");
                return C(), $(se, null, [e("div", Fe, [e("div", Le, [u(M, {
                    title: t(o)("googleAuthenticator"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: n[0] || (n[0] = w => t(_).go(-1))
                }, null, 8, ["title"]), e("div", Ee, [S(e("img", Ke, null, 512), [
                    [R, t(L)("main", "googleVerifyBg")]
                ])])]), e("div", Re, [e("div", Ye, [e("div", He, [S(e("img", Je, null, 512), [
                    [R, t(P)("wallet", "hint")]
                ]), e("span", null, s(t(o)("googleIllustrate")), 1)]), e("div", Qe, [u(G, {
                    name: "hint"
                }), e("span", null, s(t(o)("googleTip1")), 1)]), e("div", We, [u(G, {
                    name: "hint"
                }), e("span", null, s(t(o)("googleTip2")), 1)])])]), e("div", {
                    class: "gverify-container-button",
                    onClick: D
                }, s(t(o)("turnGoogle")), 1)]), ne(" 修改 短信&&密码验证弹窗修改 "), e("div", Xe, [u(qe, {
                    show: v.value,
                    "onUpdate:show": n[6] || (n[6] = w => v.value = w),
                    onConfirm: I,
                    onCancel: le,
                    showCancelBtn: t(g),
                    cancelText: t(o)("otherverificationmethods"),
                    title: t(r)
                }, {
                    content: j(() => {
                        var w, Y;
                        return [e("div", Ze, [t(a) === 1 ? (C(), $("div", et, [e("div", tt, [e("p", ot, s(t(o)("googleTip3")), 1), e("p", nt, s(t(o)("googleTip4", [t(Se)()])), 1)]), u(Q, {
                            value: l.value,
                            "onUpdate:value": n[1] || (n[1] = x => l.value = x),
                            isShowVerifyT: !1,
                            sendFunc: K,
                            typeP: "updatePhone"
                        }, null, 8, ["value"])])) : t(a) === 2 ? (C(), $("div", st, [e("div", at, [e("p", it, s(t(o)("googleTip3")), 1), e("p", lt, s(t(o)("googleTip7", [t(xe)((Y = (w = t(c)) == null ? void 0 : w.verifyMethods) == null ? void 0 : Y.email)])), 1)]), u(Q, {
                            value: l.value,
                            "onUpdate:value": n[2] || (n[2] = x => l.value = x),
                            isShowVerifyT: !1,
                            sendFunc: K,
                            typeP: "updatePhone"
                        }, null, 8, ["value"])])) : (C(), $("div", ct, [e("label", rt, [u(G, {
                            name: "editPswIcon",
                            class: "img"
                        }), pe(" " + s(t(o)("withdrawDialogDesc2")), 1)]), S(e("input", {
                            class: "input",
                            maxlength: "20",
                            "onUpdate:modelValue": n[3] || (n[3] = x => l.value = x),
                            type: "password",
                            placeholder: t(o)("withdrawDialogPh")
                        }, null, 8, dt), [
                            [_e, l.value]
                        ]), e("p", ut, [u(ue, {
                            class: "icon",
                            name: "warning-o"
                        }), e("span", null, s(t(o)("withdrawDialogDesc3")), 1)]), e("div", vt, [e("span", {
                            class: "pwd",
                            onClick: n[4] || (n[4] = x => de())
                        }, s(t(o)("withdrawDialogDesc4")), 1), e("span", {
                            class: "service",
                            onClick: n[5] || (n[5] = x => re())
                        }, s(t(o)("withdrawDialogDesc5")), 1)])]))])]
                    }),
                    _: 1
                }, 8, ["show", "showCancelBtn", "cancelText", "title"])]), u(fe, {
                    show: y.value,
                    "onUpdate:show": n[8] || (n[8] = w => y.value = w),
                    round: "",
                    position: "bottom"
                }, {
                    default: j(() => [u(ve, {
                        "columns-field-names": O,
                        columns: k.value,
                        onCancel: n[7] || (n[7] = w => y.value = !1),
                        onConfirm: ce
                    }, null, 8, ["columns"])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const pt = E(ft, [
        ["__scopeId", "data-v-1911143a"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/GoogleVerify/index.vue"]
    ]),
    Et = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _t = i => (Z("data-v-85031541"), i = i(), ee(), i),
    gt = {
        class: "gverify-container"
    },
    yt = {
        class: "gverify-container-header"
    },
    mt = {
        class: "gverify-container-header-belly"
    },
    ht = {
        alt: ""
    },
    wt = {
        class: "gverify-container-content"
    },
    bt = {
        class: "gverify-container-content-item"
    },
    $t = _t(() => e("div", {
        class: "gverify-container-content-code"
    }, [e("canvas", {
        id: "qr-code"
    })], -1)),
    Ct = {
        class: "gverify-container-content-item-title"
    },
    St = {
        alt: ""
    },
    xt = {
        class: "gverify-container-content-item-text"
    },
    Vt = {
        class: "gverify-container-content-item-tip"
    },
    kt = {
        class: "gverify-container-footer"
    },
    Tt = {
        class: "gverify-container-content-item footer-wrapper"
    },
    Gt = {
        class: "gverify-container-content-item-title"
    },
    Bt = {
        alt: ""
    },
    Dt = {
        class: "gverify-container-content-item-steps"
    },
    It = {
        alt: ""
    },
    Mt = {
        class: "gverify-container-content-item-steps"
    },
    Nt = {
        class: "gverify-container-content-item-steps"
    },
    Pt = {
        class: "gverify-container-content-item-steps"
    },
    Ot = {
        class: "gverify-container-content-item-steps"
    },
    At = {
        key: 0
    },
    zt = {
        key: 1
    },
    jt = U({
        __name: "index",
        setup(i) {
            const {
                t: o
            } = q(), _ = te(), m = ge(), {
                maxDate: B
            } = Te(0), c = ye(B).startOf("day").format("YYYY-MM-DD"), r = m.query.secret, a = X(() => Ge().getProjectName), g = `otpauth://totp/${c}?secret=${m.query.secret}&issuer=${a.value}`, l = Number(m.query.type), y = async (p, v) => {
                const D = v == 0 ? De({
                        googleCode: p
                    }) : Ie({
                        googleCode: p
                    }),
                    f = await N(D);
                (f == null ? void 0 : f.code) == 0 && _.push({
                    name: "main"
                })
            }, k = () => {
                Be("https://support.google.com/accounts/answer/1066447", 1)
            }, O = () => {
                h.value = !0
            }, h = b(!1), T = p => {
                y(p, l)
            };

            function A() {
                me.toCanvas(document.getElementById("qr-code"), g, p => {
                    p && console.error(p)
                })
            }
            return oe(() => {
                A()
            }), (p, v) => {
                const D = V("NavBar"),
                    f = F("lazy");
                return C(), $(se, null, [e("div", gt, [e("div", yt, [u(D, {
                    title: t(o)("googleVerify"),
                    class: "main",
                    "left-arrow": "",
                    onClickLeft: v[0] || (v[0] = I => t(_).go(-1))
                }, null, 8, ["title"]), e("div", mt, [S(e("img", ht, null, 512), [
                    [f, t(L)("main", "googleVerifyBg")]
                ])])]), e("div", wt, [e("div", bt, [$t, e("div", Ct, [S(e("img", St, null, 512), [
                    [f, t(P)("main", "googleKey")]
                ]), e("span", null, s(t(o)("safeKey")), 1)]), e("div", xt, s(t(r)), 1), e("div", {
                    class: "gverify-container-content-item-button",
                    onClick: v[1] || (v[1] = I => t(Me)(t(r)))
                }, s(t(o)("copyKey")), 1), e("div", Vt, s(t(o)("tipSaveKeyProperly")), 1)])]), e("div", kt, [e("div", Tt, [e("div", Gt, [S(e("img", Bt, null, 512), [
                    [f, t(P)("main", "privacyIcon")]
                ]), e("span", null, s(t(o)("bindStep")), 1)]), e("div", Dt, " 1." + s(t(o)("tipDownloadGoogleVerify")), 1), e("div", {
                    class: "footer-wrapper-button",
                    onClick: k
                }, [S(e("img", It, null, 512), [
                    [f, t(P)("main", "gverifyDownload")]
                ]), e("span", null, s(t(o)("downloadGoogleVerify")), 1)]), e("div", Mt, " 2." + s(t(o)("tipCopyKeyToBind")), 1), e("div", Nt, " 3." + s(t(o)("tipAddNewAccount")), 1), e("div", Pt, " 4." + s(t(o)("tipNametheAccountPasteTheKey")), 1), e("div", Ot, " 5." + s(t(o)("tipGenerateSuccessCode")), 1)])]), e("div", {
                    class: "gverify-container-button",
                    onClick: O
                }, [t(l) === 0 ? (C(), $("span", At, s(t(o)("confirmBinding")), 1)) : (C(), $("span", zt, s(t(o)("closeGoogle")), 1))])]), ne(" 验证弹窗 "), u(he, {
                    showPopup: h.value,
                    onOnConfirm: T,
                    onOnBack: v[2] || (v[2] = I => h.value = !1)
                }, null, 8, ["showPopup"])], 64)
            }
        }
    });
const Ut = E(jt, [
        ["__scopeId", "data-v-85031541"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/GoogleVerify/BindGoogle/index.vue"]
    ]),
    Kt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ut
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    qe as D, Kt as a, Et as i
};