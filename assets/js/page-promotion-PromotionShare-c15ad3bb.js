import {
    G as N,
    R,
    T as H,
    z as M,
    r as u,
    B as y,
    C as V,
    H as j,
    I as p,
    Q as _,
    J as t,
    P as n,
    au as k,
    O as i,
    aA as v,
    an as l,
    b3 as O,
    t as U,
    n as D,
    N as m,
    K as F,
    M as q,
    a$ as z,
    b0 as G
} from "./common.modules-af1f85b9.js";
import {
    y as S,
    L as $,
    A as J,
    cm as Q,
    g as b,
    aQ as K,
    _ as W
} from "./page-activity-ActivityDetail-f7c58355.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2c2af617.js";
import "./en-8dc3e88f.js";
const X = {
        class: "promotionShare__container"
    },
    Y = {
        class: "promotionShare__container-tips"
    },
    Z = ["id"],
    x = {
        class: "sContent"
    },
    ee = {
        class: "head1"
    },
    te = ["innerHTML"],
    ne = {
        class: "head3"
    },
    oe = ["src"],
    ae = ["src"],
    se = ["innerHTML"],
    ie = ["id"],
    re = {
        class: "promotionShare__container-slogan"
    },
    le = {
        class: "promotionShare__container-buttons"
    },
    de = N({
        __name: "index",
        setup(ce) {
            const I = R();
            H();
            const {
                t: C
            } = M(), h = u(0), g = u(""), f = u(!1);
            let d = u("");
            const L = e => {},
                P = e => {
                    h.value = e.activeIndex
                },
                T = () => {
                    I.back()
                };
            y(() => S().getProjectLogo), y(() => S().getProjectName);
            const B = () => {
                $(d.value.toString())
            };
            async function A() {
                const e = await J(Q());
                if (e) {
                    g.value = e.data.landingPageUrl, f.value = e.data.isLandingPageEnabled, e.data.url.startsWith("http") ? d.value = e.data.url : d.value = window.location.href.substring(0, window.location.href.lastIndexOf("/#/") + 2) + "/" + e.data.url.substring(e.data.url.lastIndexOf("re"), e.data.url.length);
                    for (let o = 1; o <= 3; o++) O.toCanvas(document.getElementById("qr-code" + o), d.value, s => {
                        s && console.error(s)
                    })
                }
            }
            const E = async e => {
                var o = document.getElementById(e);
                const s = U({
                        message: C("loading"),
                        duration: 0,
                        forbidClick: !0
                    }),
                    a = await D(() =>
                        import ("./common.modules-af1f85b9.js").then(r => r.cw), ["assets/js/common.modules-af1f85b9.js", "assets/css/common-e210f711.css"]),
                    w = a.default || a;
                w && w.toPng(o).then(r => {
                    const c = document.createElement("a");
                    c.href = r, c.download = "share.jpeg", document.body.appendChild(c), c.click(), s.close()
                }).catch(r => {
                    s.close(), console.error("Error generating image:", r)
                })
            };
            return V(() => {
                A()
            }), (e, o) => {
                const s = j("NavBar");
                return m(), p("div", X, [_(s, {
                    title: e.$t("titleInvite"),
                    "left-arrow": "",
                    onClickLeft: T
                }, null, 8, ["title"]), t("div", Y, [t("p", null, n(e.$t("tipSwipeToPickBrochure")), 1)]), _(i(G), {
                    class: "my-swipe",
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    "space-between": 20,
                    onSwiper: L,
                    onSlideChange: P
                }, {
                    default: k(() => [(m(), p(F, null, q(3, a => _(i(z), {
                        key: a
                    }, {
                        default: k(() => [t("div", {
                            class: "promotionShare__container-swiper",
                            id: "share" + (a - 1)
                        }, [l(` <img v-lazy="getIcons('promotion/promotionShare', 'poster')" /> `), t("div", x, [l('						<img class="logo" data-html2canvas-ignore :src="projectIcon" alt="" />'), t("div", ee, [t("div", null, n(e.$t("fairAndJust")), 1), t("div", null, n(e.$t("openAndTransparent")), 1)]), t("div", {
                            class: "head2",
                            innerHTML: e.$t("fullOddsReturnRate")
                        }, null, 8, te), t("div", ne, [t("div", null, [t("img", {
                            class: "logo",
                            src: i(b)("promotion", "bank"),
                            alt: ""
                        }, null, 8, oe), v(" " + n(e.$t("financialSecurity")), 1)]), t("div", null, [t("img", {
                            class: "logo",
                            src: i(b)("promotion", "trucktick"),
                            alt: ""
                        }, null, 8, ae), v(" " + n(e.$t("withdrawFast")), 1)])]), t("div", {
                            class: "head4",
                            innerHTML: e.$t("highestRebate", [85])
                        }, null, 8, se)]), t("canvas", {
                            id: "qr-code" + a
                        }, null, 8, ie)], 8, Z)]),
                        _: 2
                    }, 1024)), 64))]),
                    _: 1
                }), t("div", re, [t("p", null, n(e.$t("inviteFriends")), 1), t("p", null, [v(n(e.$t("divideBonus")) + " ", 1), t("span", null, n(e.$t("tip10billion")), 1), v(" " + n(e.$t("commission")), 1)])]), t("div", le, [i(K)() ? l("v-if", !0) : (m(), p("div", {
                    key: 0,
                    class: "share",
                    onClick: o[0] || (o[0] = a => E("share" + h.value))
                }, n(e.$t("shareInvitationPoster")), 1)), t("div", {
                    class: "cpy",
                    onClick: B
                }, n(e.$t("copyInvitationLink")), 1), f.value ? (m(), p("div", {
                    key: 1,
                    class: "cpy",
                    onClick: o[1] || (o[1] = a => i($)(g.value))
                }, n(e.$t("clanding")), 1)) : l("v-if", !0), l(" <div>{{ $t('copyInvitationLink') }}</div> ")])])
            }
        }
    });
const he = W(de, [
    ["__scopeId", "data-v-3b74cce6"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/promotion/PromotionShare/index.vue"]
]);
export {
    he as
    default
};