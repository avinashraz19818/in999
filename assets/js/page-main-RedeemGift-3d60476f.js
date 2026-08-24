import {
    G as L,
    z as b,
    r,
    R as N,
    T as A,
    A as I,
    H as v,
    az as x,
    I as l,
    J as e,
    Q as m,
    O as d,
    aw as _,
    P as a,
    aE as z,
    an as g,
    au as E,
    a0 as f,
    F as S,
    N as c,
    K as T,
    M as V
} from "./common.modules-af1f85b9.js";
import {
    bS as q,
    A as G,
    bT as h,
    b as H,
    g as U,
    _ as F
} from "./page-activity-ActivityDetail-f7c58355.js";
import {
    L as M
} from "./page-activity-DailySignIn-177ec47f.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2c2af617.js";
import "./en-8dc3e88f.js";
import "./page-activity-Bonus-8e38179c.js";
const Q = {
        class: "redeem-container"
    },
    j = {
        class: "redeem-container-header"
    },
    J = {
        class: "redeem-container-header-belly"
    },
    K = {
        alt: ""
    },
    O = {
        class: "redeem-container-content"
    },
    W = {
        class: "redeem-container-receive"
    },
    X = ["placeholder"],
    Y = {
        key: 0
    },
    Z = {
        class: "redeem-container-record"
    },
    ee = {
        class: "redeem-container-record-title"
    },
    te = {
        class: "redeem-container-record-itemsBox"
    },
    se = {
        class: "redeem-container-record-item ar-1px-b"
    },
    oe = {
        class: "redeem-container-record-item-left"
    },
    ae = {
        class: "redeem-container-record-item-right"
    },
    ne = ["src"],
    ie = L({
        __name: "index",
        setup(re) {
            const {
                t: u
            } = b(), y = r(!1), w = N(), C = A(), n = r(C.query.hbcode || ""), $ = r(!0), p = I({
                pageSize: 10,
                pageNo: 1,
                startDate: null,
                endDate: null
            }), i = r({
                list: [],
                pageNo: 0,
                totalPage: 0,
                totalCount: 0
            }), P = async () => {
                if (n.value.trim() === "") {
                    await f({
                        message: u("tipPlsEnterCode")
                    });
                    return
                }
                const t = await q({
                    giftCode: n.value
                });
                if (t.code === 0) {
                    S(u("redeemDialogDesc1")), n.value = "", await k();
                    return
                } else await f({
                    message: u(`code${t.msgCode}`)
                })
            }, k = async () => {
                const t = await G(h(p));
                t && (i.value.list = t == null ? void 0 : t.data.list)
            };
            return (t, o) => {
                const R = v("NavBar"),
                    B = v("svg-icon"),
                    D = x("lazy");
                return c(), l("div", Q, [e("div", j, [m(R, {
                    title: t.$t("gift"),
                    "left-arrow": "",
                    onClickLeft: o[0] || (o[0] = s => d(w).go(-1))
                }, null, 8, ["title"]), e("div", J, [_(e("img", K, null, 512), [
                    [D, d(H)("main", "gift")]
                ])])]), e("div", O, [e("div", W, [e("p", null, a(t.$t("tipHelloVIP")), 1), e("p", null, a(t.$t("tipWepreparedGift4u")), 1), e("h4", null, a(t.$t("tipPlsEnterRedeemCode")), 1), _(e("input", {
                    type: "text",
                    "auto-complete": "new-password",
                    autocomplete: "off",
                    placeholder: t.$t("tipPlsEnterCode"),
                    "onUpdate:modelValue": o[1] || (o[1] = s => n.value = s)
                }, null, 8, X), [
                    [z, n.value]
                ]), y.value ? (c(), l("h5", Y, a(t.$t("tipPlsBindBankcard")), 1)) : g("v-if", !0), e("button", {
                    onClick: o[2] || (o[2] = s => P())
                }, a(t.$t("receive")), 1)]), e("div", Z, [e("div", ee, [m(B, {
                    name: "giftHistory"
                }), g(` <img :src="getIcons('main', 'gRecord')" /> `), e("span", null, a(t.$t("record")), 1)]), e("div", te, [m(M, {
                    list: i.value.list,
                    "onUpdate:list": o[3] || (o[3] = s => i.value.list = s),
                    "page-query": p,
                    "onUpdate:pageQuery": o[4] || (o[4] = s => p = s),
                    api: d(h),
                    distance: 20,
                    isAutoLoad: $.value
                }, {
                    content: E(() => [(c(!0), l(T, null, V(i.value.list, s => (c(), l("div", {
                        class: "redeem-container-record-items",
                        key: s.reserved
                    }, [e("div", se, [e("div", oe, [e("h5", null, a(t.$t("receiveSuccess")), 1), e("span", null, a(s.addTime), 1)]), e("div", ae, [e("img", {
                        src: d(U)("main", "gold")
                    }, null, 8, ne), e("span", null, a(s.amount), 1)])])]))), 128))]),
                    _: 1
                }, 8, ["list", "page-query", "api", "isAutoLoad"])])])])])
            }
        }
    });
const _e = F(ie, [
    ["__scopeId", "data-v-695ca243"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/RedeemGift/index.vue"]
]);
export {
    _e as
    default
};