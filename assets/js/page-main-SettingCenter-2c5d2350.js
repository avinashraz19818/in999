import {
    G as ne,
    R as te,
    r,
    C as ve,
    H as G,
    az as ge,
    I as _,
    aw as y,
    ax as P,
    Q as i,
    J as e,
    P as s,
    O as n,
    ao as _e,
    an as T,
    au as Q,
    aB as we,
    aC as be,
    N as u,
    aE as Se,
    z as ie,
    a8 as Pe,
    B as pe,
    at as ye,
    aA as fe,
    K as Ne,
    F as ee,
    u as A,
    A as ke,
    q as Te
} from "./common.modules-af1f85b9.js";
import {
    a as Ee,
    E as Ve,
    b as Be,
    v as X,
    c as Y,
    P as de,
    d as Ie,
    V as Me
} from "./page-login-index.vue_vue_type_script_setup_true_lang.ts-fbfa23c0.js";
import {
    G as le,
    a4 as Ue,
    A as O,
    bU as xe,
    b as se,
    bV as Le,
    L as he,
    _ as oe,
    a3 as re,
    bF as De,
    bW as Re,
    g as ue,
    J as Ae,
    c as ae,
    bm as Oe,
    bX as Fe,
    bn as Ge,
    bi as Z,
    bY as je,
    bZ as ze,
    bE as $e,
    b_ as qe,
    b$ as We,
    c0 as Je,
    c1 as He,
    bh as Ke
} from "./page-activity-ActivityDetail-f7c58355.js";
import {
    D as Qe
} from "./page-main-GoogleVerify-a54b0a30.js";
import {
    D as Xe
} from "./page-activity-Championship-95adc67b.js";
import {
    D as Ce
} from "./page-home-other-bb563938.js";
const ce = x => (we("data-v-5bd44e74"), x = x(), be(), x),
    Ye = {
        class: "userInfo__container-content"
    },
    Ze = {
        class: "userInfo__container-content-wrapper"
    },
    en = ["src"],
    nn = {
        class: "userInfo__container-content__name"
    },
    tn = {
        class: "userInfo__container-content-nickname"
    },
    on = ["src"],
    sn = {
        class: "userInfo__container-content-uid"
    },
    an = ce(() => e("span", null, "UID", -1)),
    ln = ce(() => e("span", null, "|", -1)),
    rn = {
        class: "userInfo__container-content-logintime"
    },
    cn = {
        class: "userInfo__container-content-logintime"
    },
    dn = ce(() => e("span", null, " ", -1)),
    un = [dn],
    vn = {
        class: "userInfo__container-setting-center"
    },
    mn = {
        class: "userInfo__container-content__avatar"
    },
    _n = ["data-img"],
    pn = {
        class: "userInfo__container-setting-center-content"
    },
    fn = ce(() => e("h5", null, "UID", -1)),
    hn = {
        class: "info-dialog-content-title"
    },
    gn = ["placeholder"],
    wn = ne({
        __name: "index",
        props: {
            userInfo: {
                type: null,
                required: !0
            }
        },
        setup(x) {
            const o = x,
                E = le(),
                c = E.getUserInfo,
                {
                    setLoading: F
                } = Ue(),
                t = te(),
                a = r(!1),
                w = r(!1);

            function I(p) {
                a.value = p
            }

            function k(p) {
                t.push({
                    name: "Avatar"
                })
            }
            ve(() => {
                t.currentRoute.value.name === "SettingCenter" ? w.value = !0 : (w.value = !1, m())
            });
            const v = r(!1),
                h = r();
            async function m() {
                F(!0);
                const p = await O(xe());
                p && (h.value = p.data), F(!1)
            }
            async function N() {
                if (o.userInfo.nickName.trim() === "") return v.value = !0, a.value = !0, !1;
                if (o.userInfo.nickName.trim().length > 12) return v.value = !0, a.value = !0, !1;
                v.value = !1, a.value = !1, await O(Le({
                    nikeName: o.userInfo.nickName
                })) && E.setUserInfo({ ...o.userInfo
                })
            }

            function $() {
                t.go(-1)
            }
            const L = (p, l) => {
                    p = se("images", "avatar1");
                    let C = document.querySelector(`.${l}`);
                    C.src = p
                },
                M = r(se("main/Avatar", o.userInfo.userPhoto));
            return (p, l) => {
                var j, z;
                const C = G("NavBar"),
                    g = G("svg-icon"),
                    U = G("van-icon"),
                    d = ge("lazy");
                return u(), _("div", {
                    class: _e(["userInfo__container", {
                        "setting-page-container": w.value
                    }])
                }, [y(i(C, {
                    title: p.$t("settingCenter"),
                    class: "main",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: $
                }, null, 8, ["title"]), [
                    [P, w.value]
                ]), y(e("div", Ye, [e("div", Ze, [e("div", {
                    class: "userInfo__container-content__avatar",
                    onClick: l[1] || (l[1] = b => k())
                }, [e("img", {
                    src: M.value,
                    class: "userAvatar",
                    onError: l[0] || (l[0] = b => L(M.value, "userAvatar"))
                }, null, 40, en)]), e("div", nn, [e("div", tn, [e("h3", null, s((j = n(c).nickName) == null ? void 0 : j.toUpperCase()), 1), e("div", {
                    class: _e(["n" + ((z = h.value) == null ? void 0 : z.vipLevel)])
                }, null, 2), y(e("img", {
                    class: "editPencil",
                    onClick: l[2] || (l[2] = b => I(!0)),
                    src: n(se)("main", "editPencil")
                }, null, 8, on), [
                    [P, w.value]
                ])]), e("div", sn, [an, ln, e("span", null, s(n(c).userId), 1), i(g, {
                    onClick: l[3] || (l[3] = b => n(he)(n(c).userId.toString())),
                    name: "copy"
                })]), y(e("div", rn, [e("span", null, s(p.$t("lastLoginTime")) + " ", 1), y(e("span", null, s(n(c).userLoginDate), 513), [
                    [P, n(c).userLoginDate]
                ])], 512), [
                    [P, !w.value]
                ]), y(e("div", cn, un, 512), [
                    [P, w.value]
                ])])]), T(` <div v-show="!isSettingPage" class="userInfo__container-content-right">
				<img v-lazy="getIcons('main', 'myCoin')" alt="" />
				<span>我的金币</span>
			</div> `), y(e("div", {
                    class: "userInfo__container-content-right",
                    onClick: l[4] || (l[4] = b => k())
                }, [e("h5", null, s(p.$t("changeAvatar")), 1)], 512), [
                    [P, w.value]
                ])], 512), [
                    [P, !w.value]
                ]), y(e("div", vn, [e("div", {
                    class: "userInfo__container-setting-center-header",
                    onClick: l[6] || (l[6] = b => k())
                }, [e("div", mn, [y(e("img", {
                    "data-img": n(se)("images", "avatar1")
                }, null, 8, _n), [
                    [d, M.value]
                ])]), e("div", {
                    class: "userInfo__container-setting-center-header-edit",
                    onClick: l[5] || (l[5] = b => k())
                }, [e("span", null, s(p.$t("changeAvatar")), 1), i(U, {
                    name: "arrow",
                    color: "#888"
                })])]), e("div", {
                    class: "userInfo__container-setting-center-content ar-1px-b",
                    onClick: l[9] || (l[9] = b => I(!0))
                }, [e("h5", null, s(p.$t("nickName")), 1), e("div", {
                    onClick: l[8] || (l[8] = b => I(!0))
                }, [e("span", null, s(n(c).nickName), 1), i(U, {
                    name: "arrow",
                    color: "#888",
                    onClick: l[7] || (l[7] = b => I(!0))
                })])]), e("div", pn, [fn, e("div", null, [e("span", null, s(n(c).userId), 1), i(g, {
                    name: "copy",
                    onClick: l[10] || (l[10] = b => n(he)(n(c).userId.toString()))
                })])])], 512), [
                    [P, w.value]
                ]), i(Qe, {
                    show: a.value,
                    "onUpdate:show": l[12] || (l[12] = b => a.value = b),
                    onConfirm: N,
                    title: p.$t("editNickname")
                }, {
                    content: Q(() => [e("div", hn, [i(g, {
                        name: "dialogNickname"
                    }), e("span", null, s(p.$t("nickName")), 1)]), y(e("input", {
                        type: "text",
                        "auto-complete": "new-password",
                        autocomplete: "off",
                        name: "username",
                        "onUpdate:modelValue": l[11] || (l[11] = b => n(c).nickName = b),
                        placeholder: p.$t("tipEnterNickname")
                    }, null, 8, gn), [
                        [Se, n(c).nickName]
                    ]), y(e("h4", null, s(p.$t("tipDoNotEnterUnvalideNickname")), 513), [
                        [P, v.value]
                    ])]),
                    _: 1
                }, 8, ["show", "title"])], 2)
            }
        }
    });
const bn = oe(wn, [
        ["__scopeId", "data-v-5bd44e74"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Main/UserInformation/index.vue"]
    ]),
    yn = x => (we("data-v-6af1b9df"), x = x(), be(), x),
    kn = {
        class: "content setting-wrapper"
    },
    $n = {
        class: "setting-items-wrapper"
    },
    Cn = {
        class: "content-sub_title"
    },
    Sn = {
        class: "phone_container"
    },
    Pn = {
        class: "phone_container-item-left"
    },
    Nn = {
        class: "icon"
    },
    Tn = {
        class: "phone_container-item-right"
    },
    En = {
        class: "setting_container"
    },
    Vn = {
        key: 0,
        class: "phone_container-item-left"
    },
    Bn = ["src"],
    In = {
        key: 1,
        class: "phone_container-item-left"
    },
    Mn = ["src"],
    Un = {
        key: 2,
        class: "phone_container-item-right"
    },
    xn = {
        key: 3,
        class: "phone_container-item-right"
    },
    Ln = {
        key: 0,
        class: "phoneright"
    },
    Dn = {
        key: 1,
        class: "phoneright"
    },
    Rn = {
        key: 0,
        class: "phone_container-item-left"
    },
    An = {
        class: "icon email"
    },
    On = {
        key: 1,
        class: "phone_container-item-left"
    },
    Fn = {
        class: "icon email"
    },
    Gn = {
        key: 2,
        class: "phone_container-item-right"
    },
    jn = {
        key: 0,
        class: "emailright"
    },
    zn = {
        key: 1,
        class: "emailright"
    },
    qn = {
        key: 3,
        class: "phone_container-item-right"
    },
    Wn = {
        class: "icon"
    },
    Jn = {
        key: 0,
        class: "green"
    },
    Hn = {
        key: 1
    },
    Kn = {
        class: "setting_container_item"
    },
    Qn = {
        class: "icon"
    },
    Xn = yn(() => e("h5", null, "1.0.9", -1)),
    Yn = ["src"],
    Zn = {
        class: "setting-records-modal"
    },
    et = {
        class: "idlockTip"
    },
    nt = ne({
        __name: "index",
        setup(x) {
            const {
                t: o
            } = ie(), E = Pe(Re, 500), c = te(), F = re(), t = le();
            F.getUserInfo({
                signature: t.token
            });
            const a = t.getUserInfo,
                w = r(!1);

            function I() {
                localStorage.setItem("toPath", "ResetPassword"), c.push({
                    name: "SettingCenter-LoginPassword"
                })
            }
            const k = pe(() => {
                    var C;
                    return (C = a == null ? void 0 : a.verifyMethods) == null ? void 0 : C.email
                }),
                v = pe(() => {
                    var C;
                    return (C = a == null ? void 0 : a.verifyMethods) == null ? void 0 : C.mobile
                }),
                h = !!a.googleVerify,
                m = r(!1),
                N = () => {
                    a.googleVerify === 1 ? m.value = !0 : c.push({
                        name: "GoogleVerify"
                    })
                },
                $ = C => {
                    L(C)
                },
                L = async C => {
                    var U, d;
                    const g = await O(De({
                        verifyCode: C,
                        verifyType: 3
                    }));
                    (U = g == null ? void 0 : g.data) != null && U.secret && c.push({
                        name: "GoogleVerify-BindGoogle",
                        query: {
                            secret: (d = g.data) == null ? void 0 : d.secret,
                            type: 1
                        }
                    })
                },
                M = r(!1),
                p = () => {
                    M.value = !0
                },
                l = async () => {
                    (await O(Fe())).code == 0 && (M.value = !1, ee(o("delete") + o("success")))
                };
            return (C, g) => {
                var b, H, K, q, W, J, V, B, S, f;
                const U = G("svg-icon"),
                    d = G("van-icon"),
                    j = G("van-button"),
                    z = ge("haspermission");
                return u(), _(Ne, null, [i(bn, {
                    userInfo: n(a)
                }, null, 8, ["userInfo"]), e("div", kn, [e("div", $n, [e("div", Cn, [e("div", null, s(n(o)("securityInfo")), 1)]), e("div", Sn, [e("div", {
                    class: "phone_container-item",
                    onClick: I
                }, [e("div", Pn, [e("figure", Nn, [i(U, {
                    name: "editIcon"
                })]), e("span", null, s(n(o)("loginPSW")), 1)]), e("div", Tn, [e("span", null, s(n(o)("edit")), 1), i(d, {
                    name: "arrow",
                    color: "#888"
                })])])]), e("div", En, [((b = n(a)) == null ? void 0 : b.regType) == 2 ? (u(), _("div", {
                    key: 0,
                    class: "phone_container-item setting_container_item ar-1px-b",
                    onClick: g[0] || (g[0] = D => n(c).push({
                        name: "SettingCenter-UpdatePhone"
                    }))
                }, [v.value == "" ? (u(), _("div", Vn, [e("img", {
                    src: n(ue)("main", "editPhoneIcon")
                }, null, 8, Bn), e("span", null, s(n(o)("bindPhone")), 1)])) : T("v-if", !0), v.value != "" ? (u(), _("div", In, [e("img", {
                    src: n(ue)("main", "editPhoneIcon")
                }, null, 8, Mn), e("span", null, s(n(o)("changephone")), 1)])) : T("v-if", !0), v.value != "" ? (u(), _("div", Un, [e("span", null, s(n(Ae)((K = (H = n(a)) == null ? void 0 : H.verifyMethods) == null ? void 0 : K.mobile)), 1), i(d, {
                    name: "arrow",
                    color: "#888"
                })])) : T("v-if", !0), v.value == "" ? (u(), _("div", xn, [((q = n(a)) == null ? void 0 : q.bindReward) > 0 ? (u(), _("div", Ln, [e("div", null, s(n(o)("award")), 1), e("div", null, s(n(ae)((W = n(a)) == null ? void 0 : W.bindReward)), 1)])) : (u(), _("div", Dn, [e("div", null, s(n(o)("tobind")), 1)])), i(d, {
                    name: "arrow",
                    color: "#888"
                })])) : T("v-if", !0)])) : T("v-if", !0), ((J = n(a)) == null ? void 0 : J.regType) == 1 ? (u(), _("div", {
                    key: 1,
                    class: "phone_container-item setting_container_item",
                    onClick: g[1] || (g[1] = D => n(c).push({
                        name: "SettingCenter-BindEmail"
                    }))
                }, [k.value == "" ? (u(), _("div", Rn, [e("figure", An, [i(U, {
                    name: "messageIcon"
                })]), e("span", null, s(n(o)("bindEmail")), 1)])) : T("v-if", !0), k.value != "" ? (u(), _("div", On, [e("figure", Fn, [i(U, {
                    name: "email"
                })]), e("span", null, s(n(o)("email")), 1)])) : T("v-if", !0), k.value == "" ? (u(), _("div", Gn, [((V = n(a)) == null ? void 0 : V.bindReward) > 0 ? (u(), _("div", jn, [e("div", null, s(n(o)("award")), 1), e("div", null, s(n(ae)((B = n(a)) == null ? void 0 : B.bindReward)), 1)])) : (u(), _("div", zn, [e("div", null, s(n(o)("tobind")), 1)])), i(d, {
                    name: "arrow",
                    color: "#888"
                })])) : T("v-if", !0), k.value != "" ? (u(), _("div", qn, [e("span", null, s(n(Oe)((f = (S = n(a)) == null ? void 0 : S.verifyMethods) == null ? void 0 : f.email)), 1), i(d, {
                    name: "arrow",
                    color: "#888"
                })])) : T("v-if", !0)])) : T("v-if", !0), y(e("div", {
                    class: "setting_container_item",
                    onClick: N
                }, [e("div", null, [e("figure", Wn, [i(U, {
                    name: "googleIcon"
                })]), e("span", null, s(n(o)("googleVerify")), 1)]), e("div", null, [n(h) ? (u(), _("span", Jn, s(n(o)("turnedOn")), 1)) : (u(), _("span", Hn, s(n(o)("unopened")), 1)), i(d, {
                    name: "arrow",
                    color: "#888"
                })])], 512), [
                    [P, n(a).isGoogle === "1"]
                ]), e("div", Kn, [e("div", null, [e("figure", Qn, [i(U, {
                    name: "versionUpdateIcon"
                })]), e("span", null, s(n(o)("updateNewVersion")), 1)]), e("div", null, [Xn, i(d, {
                    name: "arrow",
                    color: "var(--text_color_L2)"
                })])])]), w.value ? (u(), ye(j, {
                    key: 0,
                    class: "cg-default",
                    block: "",
                    round: "",
                    size: "large",
                    color: "var(--main_gradient-color2)",
                    onClick: n(E)
                }, {
                    icon: Q(() => [e("img", {
                        src: n(ue)("main", "clear")
                    }, null, 8, Yn)]),
                    default: Q(() => [fe(" " + s(n(o)("clearcache")), 1)]),
                    _: 1
                }, 8, ["onClick"])) : T("v-if", !0)])]), y((u(), _("div", {
                    class: "delAllRq",
                    onClick: p
                }, [fe(s(n(o)("delAllBtn")), 1)])), [
                    [z, 19]
                ]), T(" 验证弹窗 "), i(Ee, {
                    showPopup: m.value,
                    onOnConfirm: $,
                    onOnBack: g[2] || (g[2] = D => m.value = !1)
                }, null, 8, ["showPopup"]), e("div", Zn, [i(Xe, {
                    show: M.value,
                    "onUpdate:show": g[4] || (g[4] = D => M.value = D),
                    "show-cancel-btn": !0,
                    title: n(o)("delAllTip1")
                }, {
                    content: Q(() => [e("div", et, s(n(o)("delAllTip2")), 1)]),
                    footer: Q(() => [e("div", {
                        class: "dialogBtn",
                        onClick: l
                    }, s(n(o)("confirmDelete")), 1), e("div", {
                        class: "dialogBtn",
                        onClick: g[3] || (g[3] = D => M.value = !1)
                    }, s(n(o)("cancel")), 1)]),
                    _: 1
                }, 8, ["show", "title"])])], 64)
            }
        }
    });
const tt = oe(nt, [
        ["__scopeId", "data-v-6af1b9df"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/SettingCenter/index.vue"]
    ]),
    Ut = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: tt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ot = {
        class: "bind-container"
    },
    st = {
        class: "email-container"
    },
    at = {
        class: "updateP-container-tips"
    },
    it = {
        class: "bind-button"
    },
    lt = {
        key: 0,
        class: "Laundry-Con"
    },
    rt = {
        class: "Laundry-Con_tip"
    },
    ct = {
        class: "reward"
    },
    dt = {
        class: "money"
    },
    ut = ne({
        __name: "index",
        setup(x) {
            var b, H, K, q, W, J;
            const {
                t: o
            } = ie(), E = te(), c = re(), t = le().getUserInfo, a = r("bindemail"), w = r(!0), I = r(!1), k = r(!1), v = r("");
            v.value = ((b = t == null ? void 0 : t.verifyMethods) == null ? void 0 : b.email) != "" ? "updateEmail" : "bindEmail";
            const h = r("");
            h.value = ((H = t == null ? void 0 : t.verifyMethods) == null ? void 0 : H.email) != "" ? o("safetyVerification") : o("bindEmail");
            const m = {
                    email: ""
                },
                N = r("");
            m.email = (K = t == null ? void 0 : t.verifyMethods) == null ? void 0 : K.email;
            const $ = r(!1);
            $.value = ((q = t == null ? void 0 : t.verifyMethods) == null ? void 0 : q.email) == "";
            const L = r(!0);
            L.value = ((W = t == null ? void 0 : t.verifyMethods) == null ? void 0 : W.email) != "";
            const M = r(!1);
            M.value = ((J = t == null ? void 0 : t.verifyMethods) == null ? void 0 : J.email) == "";
            const p = r("public"),
                l = r("succeed"),
                C = () => {
                    E.go(-1)
                },
                g = V => {
                    m.email = V
                },
                U = async () => {
                    var B;
                    if (v.value == "bindEmail") {
                        if (!X.email1.test(m.email)) return c.setCountEmailDown(0), A({
                            message: o(Y.email),
                            wordBreak: "break-word"
                        })
                    } else if (!X.email1.test((B = t == null ? void 0 : t.verifyMethods) == null ? void 0 : B.email)) return c.setCountEmailDown(0), A({
                        message: o(Y.email),
                        wordBreak: "break-word"
                    });
                    await O(Ge({
                        email: m.email,
                        emailType: $.value ? Z.bindEmailMmobile : Z.resetEmailMmobile
                    })) ? ee(o("sendSuccess")) : c.setCountEmailDown(0)
                },
                d = async () => {
                    if (!X.email1.test(m.email)) return A({
                        message: o(Y.email),
                        wordBreak: "break-word"
                    });
                    if (!N.value.trim()) return A({
                        message: o("noVerifyCodeFound"),
                        wordBreak: "break-word"
                    });
                    await O(je({
                        email: m.email,
                        code: N.value,
                        type: Z.resetEmailMmobile
                    })) && (v.value = "bindEmail", h.value = o("bindEmail"), L.value = !1, I.value = !1, $.value = !0, w.value = !1, M.value = !0, N.value = "", m.email = "", c.setCountEmailDown(0)), I.value = !1
                },
                j = async () => {
                    var B;
                    if (!X.email1.test(m.email)) return A({
                        message: o(Y.email),
                        wordBreak: "break-word"
                    });
                    if (!N.value.trim()) return A({
                        message: o("noVerifyCodeFound"),
                        wordBreak: "break-word"
                    });
                    await O(ze({
                        email: m.email,
                        emailvCode: N.value
                    })) && (((B = t == null ? void 0 : t.verifyMethods) == null ? void 0 : B.email) != "" ? (ee(o("rpdsucceed")), E.push({
                        name: "main"
                    })) : k.value = !0)
                },
                z = () => {
                    E.push({
                        name: "main"
                    }), k.value = !1
                };
            return ve(() => {
                c.setCountEmailDown(0)
            }), (V, B) => {
                const S = G("NavBar");
                return u(), _("div", ot, [i(S, {
                    title: h.value,
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: C
                }, null, 8, ["title"]), e("div", st, [y(e("div", null, [i(Ve, {
                    ref: "email",
                    type: a.value,
                    email: m.email,
                    onChangeN: g
                }, null, 8, ["type", "email"])], 512), [
                    [P, $.value]
                ]), i(Be, {
                    value: N.value,
                    "onUpdate:value": B[0] || (B[0] = f => N.value = f),
                    isShowVerifyT: w.value,
                    typeP: v.value,
                    sendFunc: U,
                    email: m.email
                }, null, 8, ["value", "isShowVerifyT", "typeP", "email"]), y(e("div", at, [e("span", null, s(V.$t("tipVerifyCodeRequired")), 1)], 512), [
                    [P, I.value]
                ]), e("div", it, [y(e("button", {
                    onClick: d
                }, s(V.$t("nextStep")), 513), [
                    [P, L.value]
                ]), y(e("button", {
                    onClick: j
                }, s(V.$t("toBind")), 513), [
                    [P, M.value]
                ])])]), i(Ce, {
                    show: k.value,
                    "onUpdate:show": B[1] || (B[1] = f => k.value = f),
                    onConfirm: z,
                    "show-cancel-btn": !1,
                    confirmText: "confirm",
                    pathname: p.value,
                    picname: l.value,
                    title: V.$t("bindsuccess")
                }, {
                    content: Q(() => {
                        var f, D;
                        return [((f = n(t)) == null ? void 0 : f.bindReward) > 0 ? (u(), _("div", lt, [e("div", rt, [e("div", ct, s(V.$t("award")), 1), e("div", dt, s(n(ae)((D = n(t)) == null ? void 0 : D.bindReward)), 1)])])) : T("v-if", !0)]
                    }),
                    _: 1
                }, 8, ["show", "pathname", "picname", "title"])])
            }
        }
    });
const vt = oe(ut, [
        ["__scopeId", "data-v-eca8202a"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/SettingCenter/BindEmail/index.vue"]
    ]),
    xt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: vt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    mt = {
        class: "LoginP-container"
    },
    _t = {
        class: "LoginP-container-form"
    },
    pt = {
        class: "LoginP-container-tips"
    },
    ft = {
        class: "LoginP-container-button"
    },
    ht = ne({
        __name: "index",
        setup(x) {
            let o = ke({
                oldPwd: "",
                newPwd: "",
                confirmNewPwd: ""
            });
            const E = re();
            E.getRegisterState();
            const {
                t: c
            } = ie(), F = r(!1), t = te();
            async function a() {
                if (!X.passReg3.test(o.newPwd)) return A({
                    message: c(Y.passReg2),
                    wordBreak: "break-word"
                });
                if (o.newPwd !== o.confirmNewPwd) {
                    F.value = !0;
                    return
                } else F.value = !1;
                await O(qe(o)) && (Te(c("rpdsucceed")), localStorage.clear(), t.push("/login"))
            }

            function w() {
                t.push({
                    name: "rpwd"
                })
            }
            const {
                isSmSForgetPasswordState: I,
                registerState: k
            } = $e();
            return k(), (v, h) => {
                const m = G("NavBar"),
                    N = G("van-icon");
                return u(), _("div", mt, [i(m, {
                    title: v.$t("titleEditPsw"),
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: h[0] || (h[0] = $ => n(t).go(-1))
                }, null, 8, ["title"]), e("div", _t, [i(de, {
                    value: n(o).oldPwd,
                    "onUpdate:value": h[1] || (h[1] = $ => n(o).oldPwd = $),
                    label: v.$t("oldPSW"),
                    maxlength: 32
                }, null, 8, ["value", "label"]), i(de, {
                    value: n(o).newPwd,
                    "onUpdate:value": h[2] || (h[2] = $ => n(o).newPwd = $),
                    label: v.$t("newPSW")
                }, null, 8, ["value", "label"]), i(de, {
                    class: "mgb48",
                    value: n(o).confirmNewPwd,
                    "onUpdate:value": h[3] || (h[3] = $ => n(o).confirmNewPwd = $),
                    label: v.$t("confirmPSW")
                }, null, 8, ["value", "label"]), y(e("div", pt, [e("span", null, s(v.$t("tipUnmatchPsw")), 1)], 512), [
                    [P, F.value]
                ]), T(`
				功能暂时不可用且跳转 重置密码页有bug
			`), n(E).isOpenForgetPasswordEmailState || n(E).isOpenForgetPasswordSMSState ? (u(), _("div", {
                    key: 0,
                    class: "LoginP-container-remember",
                    onClick: w
                }, [e("span", null, s(v.$t("forgotOldPSW")), 1), i(N, {
                    name: "arrow",
                    color: "var(--text_color_L2)"
                })])) : (u(), _("div", {
                    key: 1,
                    class: "LoginP-container-remember",
                    onClick: h[4] || (h[4] = $ => n(t).push({
                        name: "CustomerService"
                    }))
                }, [e("span", null, s(v.$t("contactServicer")), 1), i(N, {
                    name: "arrow",
                    color: "var(--text_color_L2)"
                })])), e("div", ft, [e("button", {
                    onClick: a
                }, s(v.$t("saveChanges")), 1)])])])
            }
        }
    });
const gt = oe(ht, [
        ["__scopeId", "data-v-5beab1ae"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/SettingCenter/LoginPassword/index.vue"]
    ]),
    Lt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: gt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    wt = {
        class: "updateP-container"
    },
    bt = {
        class: "updateP-container-tips"
    },
    yt = {
        class: "updateP-container-button"
    },
    kt = {
        key: 0,
        class: "Laundry-Con"
    },
    $t = {
        class: "Laundry-Con_tip"
    },
    Ct = {
        class: "reward"
    },
    St = {
        class: "money"
    },
    Pt = ne({
        __name: "index",
        setup(x) {
            var q, W, J, V, B;
            const {
                t: o
            } = ie(), E = te(), c = re(), t = le().getUserInfo, a = r(!1);
            a.value = ((q = t == null ? void 0 : t.verifyMethods) == null ? void 0 : q.mobile) == "";
            const w = r(!1),
                I = r(!1);
            I.value = ((W = t == null ? void 0 : t.verifyMethods) == null ? void 0 : W.mobile) != "";
            const k = r(!1);
            k.value = ((J = t == null ? void 0 : t.verifyMethods) == null ? void 0 : J.mobile) == "";
            const v = r(!0),
                h = r(!1),
                m = r(""),
                N = r(!1),
                $ = r("");
            $.value = ((V = t == null ? void 0 : t.verifyMethods) == null ? void 0 : V.mobile) != "" ? o("safetyVerification") : o("bindPhone");
            const L = r("");
            L.value = ((B = t == null ? void 0 : t.verifyMethods) == null ? void 0 : B.mobile) != "" ? "updatePhone" : "bindPhone";
            const M = r("public"),
                p = r("succeed"),
                l = () => {
                    E.go(-1)
                },
                {
                    isShowSMS: C,
                    registerState: g
                } = $e();
            g();
            async function U() {
                var f;
                if (!m.value.trim()) return A({
                    message: o("noVerifyCodeFound"),
                    wordBreak: "break-word"
                });
                await O(We({
                    userName: ((f = t == null ? void 0 : t.verifyMethods) == null ? void 0 : f.mobile) || localStorage.getItem("numberType") + localStorage.getItem("number"),
                    smsvCode: m.value
                })) && ($.value = o("bindPhone"), L.value = "bindPhone", I.value = !1, h.value = !1, a.value = !0, v.value = !1, k.value = !0, m.value = "", d.PhoneNumber = "", c.setCountDown(0)), h.value = !1
            }
            const d = ke({
                PhoneNumber: "",
                numberType: localStorage.getItem("numberType")
            });
            async function j() {
                var f;
                if (!m.value.trim()) return A({
                    message: o("noVerifyCodeFound"),
                    wordBreak: "break-word"
                });
                if (!Je(d.numberType, d.PhoneNumber.trim().length)) return A({
                    message: o("wrongTel"),
                    wordBreak: "break-word"
                });
                await O(He({
                    phone: d.numberType + d.PhoneNumber,
                    smsvCode: m.value
                })) && (((f = t == null ? void 0 : t.verifyMethods) == null ? void 0 : f.mobile) != "" ? (ee(o("rpdsucceed")), E.push({
                    name: "main"
                })) : w.value = !0)
            }
            const z = S => {
                    d.numberType = S
                },
                b = S => {
                    d.PhoneNumber = S
                },
                H = async () => {
                    var R;
                    let S = a.value ? d.numberType.replace("+", "") + d.PhoneNumber : (R = t == null ? void 0 : t.verifyMethods) == null ? void 0 : R.mobile;
                    const f = S.length;
                    if (f < 10 || f > 14) return A({
                        message: o("wrongTel"),
                        wordBreak: "break-word"
                    });
                    if (await O(Ke({
                            phone: S,
                            codeType: a.value ? Z.bindEmailMmobile : Z.resetEmailMmobile
                        }))) ee(o("sendSuccess"));
                    else return -1
                },
                K = () => {
                    E.push({
                        name: "main"
                    }), w.value = !1
                };
            return ve(() => {
                c.setCountDown(0)
            }), (S, f) => {
                const D = G("NavBar");
                return u(), _("div", wt, [i(D, {
                    title: $.value,
                    class: "white",
                    "left-arrow": "",
                    onClickLeft: l
                }, null, 8, ["title"]), y(e("div", null, [i(Ie, {
                    "show-validate": N.value,
                    "onUpdate:showValidate": f[0] || (f[0] = R => N.value = R),
                    typeP: L.value,
                    number: d.PhoneNumber,
                    "number-type": d.numberType,
                    onChangeT: z,
                    onChangeN: b
                }, null, 8, ["show-validate", "typeP", "number", "number-type"])], 512), [
                    [P, a.value]
                ]), n(C) ? (u(), ye(Me, {
                    key: 0,
                    value: m.value,
                    "onUpdate:value": f[1] || (f[1] = R => m.value = R),
                    typeP: L.value,
                    isShowVerifyT: v.value,
                    sendFunc: H,
                    number: d.PhoneNumber,
                    numberType: d.numberType
                }, null, 8, ["value", "typeP", "isShowVerifyT", "number", "numberType"])) : T("v-if", !0), y(e("div", bt, [e("span", null, s(S.$t("tipVerifyCodeRequired")), 1)], 512), [
                    [P, h.value]
                ]), e("div", yt, [y(e("button", {
                    onClick: U
                }, s(S.$t("nextStep")), 513), [
                    [P, I.value]
                ]), y(e("button", {
                    onClick: j
                }, s(S.$t("complete")), 513), [
                    [P, k.value]
                ])]), i(Ce, {
                    show: w.value,
                    "onUpdate:show": f[2] || (f[2] = R => w.value = R),
                    onConfirm: K,
                    "show-cancel-btn": !1,
                    confirmText: "confirm",
                    pathname: M.value,
                    picname: p.value,
                    title: S.$t("bindsuccess")
                }, {
                    content: Q(() => {
                        var R, me;
                        return [((R = n(t)) == null ? void 0 : R.bindReward) > 0 ? (u(), _("div", kt, [e("div", $t, [e("div", Ct, s(S.$t("award")), 1), e("div", St, s(n(ae)((me = n(t)) == null ? void 0 : me.bindReward)), 1)])])) : T("v-if", !0)]
                    }),
                    _: 1
                }, 8, ["show", "pathname", "picname", "title"])])
            }
        }
    });
const Nt = oe(Pt, [
        ["__scopeId", "data-v-90d7db2e"],
        ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/SettingCenter/UpdatePhone/index.vue"]
    ]),
    Dt = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Nt
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    bn as U, xt as a, Lt as b, Dt as c, Ut as i
};