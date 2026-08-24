import {
    G as C,
    z as H,
    R as N,
    B,
    r as D,
    C as I,
    H as R,
    I as a,
    Q as d,
    O as s,
    J as t,
    P as e,
    K as p,
    M as u,
    an as g,
    aA as L,
    aB as S,
    aC as w,
    N as r
} from "./common.modules-af1f85b9.js";
import {
    y as A,
    cl as P,
    cb as x,
    _ as V
} from "./page-activity-ActivityDetail-f7c58355.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2c2af617.js";
import "./en-8dc3e88f.js";
const M = c => (S("data-v-baf81808"), c = c(), w(), c),
    $ = {
        class: "promotion-page"
    },
    j = {
        class: "promotion-mian"
    },
    F = {
        class: "promotion-mian__title"
    },
    G = {
        class: "promotion-title"
    },
    z = {
        class: "promotion-txt"
    },
    E = ["innerHTML"],
    J = {
        class: "promotion-grade"
    },
    K = {
        class: "promotion-grade-th"
    },
    O = {
        class: "item"
    },
    Q = {
        class: "item"
    },
    X = {
        class: "item"
    },
    q = {
        class: "item"
    },
    U = {
        class: "item"
    },
    W = {
        class: "icon-LV"
    },
    Y = {
        class: "txt"
    },
    Z = {
        class: "item"
    },
    tt = {
        class: "item"
    },
    ot = {
        class: "item"
    },
    et = {
        class: "promotion-box ruleHead"
    },
    st = M(() => t("div", {
        class: "promotion-title"
    }, "06", -1)),
    nt = {
        class: "promotion-txt"
    },
    it = {
        class: "promotion-title"
    },
    at = {
        class: "promotion-txt"
    },
    rt = C({
        __name: "index",
        setup(c) {
            const {
                t: o
            } = H(), v = N(), f = B(() => A().getProjectName), b = [{
                title: "01",
                content: o("promotionRuleDesc1")
            }, {
                title: "02",
                content: o("promotionRuleDesc2")
            }, {
                title: "03",
                content: o("promotionRuleDesc3")
            }, {
                title: "04",
                content: o("promotionRuleDesc6", ["01:00"])
            }, {
                title: "05",
                content: o("promotionRuleDesc4") + "<br/>" + o("proRule1")
            }], y = [{
                title: "07",
                content: o("tipTop20RankingAdditionalRewords")
            }, {
                title: "08",
                content: o("tipInterpretationRightSaved", [f.value])
            }], h = D(), k = async () => {
                try {
                    const _ = await P();
                    h.value = _
                } catch {}
            };
            return I(() => {
                k()
            }), (_, l) => {
                const T = R("NavBar"),
                    m = R("svg-icon");
                return r(), a("div", $, [d(T, {
                    class: "white",
                    title: s(o)("titleInvitationRule"),
                    "left-arrow": "",
                    onClickLeft: l[0] || (l[0] = n => s(v).go(-1))
                }, null, 8, ["title"]), t("div", j, [t("div", F, [t("h1", null, e(s(o)("tipPromotionPartner")), 1), t("p", null, e(s(o)("tipActivityValidForLongTime")), 1)]), (r(), a(p, null, u(b, (n, i) => t("div", {
                    class: "promotion-box ruleHead",
                    key: i
                }, [d(m, {
                    name: "ruleHead"
                }), t("div", G, e(n.title), 1), t("div", z, [t("p", {
                    innerHTML: n.content
                }, null, 8, E), g(" {{ item.content }} ")])])), 64)), g(" 等级列表 "), t("div", J, [t("div", K, [t("div", O, e(s(o)("rebateLevel")), 1), t("div", Q, e(s(o)("teamMembers")), 1), t("div", X, e(s(o)("teamStream")), 1), t("div", q, e(s(o)("teamRecharge")), 1)]), (r(!0), a(p, null, u(h.value, (n, i) => (r(), a("div", {
                    class: "promotion-grade-tr",
                    key: i
                }, [t("div", U, [t("div", W, [t("span", Y, "L" + e(n.lv), 1)])]), t("div", Z, e(n.lvCount), 1), t("div", tt, e(s(x)(n.lotteryAmount)), 1), t("div", ot, e(s(x)(n.rechargeAmount)), 1)]))), 128))]), t("div", et, [d(m, {
                    name: "ruleHead"
                }), st, t("div", nt, [L(e(s(o)("promotionRuleDesc5")) + " ", 1), t("p", null, e(s(o)("promotionRuleRedTXT")), 1), t("div", {
                    class: "txt",
                    onClick: l[1] || (l[1] = n => s(v).push({
                        name: "RebateRatio"
                    }))
                }, e(s(o)("lookRerbate")), 1)])]), (r(), a(p, null, u(y, (n, i) => t("div", {
                    class: "promotion-box ruleHead",
                    key: i
                }, [d(m, {
                    name: "ruleHead"
                }), t("div", it, e(n.title), 1), t("div", at, e(n.content), 1)])), 64))])])
            }
        }
    });
const pt = V(rt, [
    ["__scopeId", "data-v-baf81808"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/promotion/PromotionRule/index.vue"]
]);
export {
    pt as
    default
};