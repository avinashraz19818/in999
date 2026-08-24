import {
    G as g,
    R as y,
    z as k,
    H as u,
    I as n,
    an as i,
    Q as d,
    au as x,
    O as o,
    Z as N,
    N as r,
    J as e,
    K as C,
    M as L,
    P as s,
    ao as $,
    w as b
} from "./common.modules-af1f85b9.js";
import {
    cH as H,
    c as I,
    L as S,
    cK as P,
    _ as B
} from "./page-activity-ActivityDetail-f7c58355.js";
import {
    L as Y
} from "./page-activity-DailySignIn-177ec47f.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2c2af617.js";
import "./en-8dc3e88f.js";
import "./page-activity-Bonus-8e38179c.js";
const j = {
        class: "withdraw-history"
    },
    z = {
        class: "record_list"
    },
    A = {
        class: "flex flex-between head"
    },
    D = {
        class: "left"
    },
    M = {
        class: "info"
    },
    R = {
        class: "flex flex-between info_i"
    },
    V = {
        class: "amount"
    },
    E = {
        key: 0,
        class: "flex flex-between info_i"
    },
    K = {
        class: "flex flex-between info_i"
    },
    T = {
        class: "flex flex-between info_i"
    },
    U = {
        class: "flex flex-row flex-center"
    },
    W = {
        key: 1,
        class: "remark"
    },
    F = {
        class: "reason"
    },
    G = g({
        __name: "index",
        setup(J) {
            const f = y(),
                {
                    historyList: l
                } = H(),
                {
                    t: c
                } = k(),
                p = () => {
                    f.back()
                },
                v = {
                    0: c("t126"),
                    1: c("t590"),
                    2: c("rechargeState2"),
                    3: c("withdrawState2")
                },
                h = {
                    0: "processing",
                    1: "withdrawing",
                    2: "completed",
                    3: "reject"
                };
            return (a, _) => {
                const m = u("NavBar"),
                    w = u("svg-icon");
                return r(), n("div", j, [i(` <HeadNav :leftArrow="true" @click-s="onClickLeft" :title="$t('t589')" /> `), d(m, {
                    leftArrow: !0,
                    onClickLeft: p,
                    title: a.$t("t589")
                }, null, 8, ["title"]), d(Y, {
                    distance: 100,
                    api: o(P),
                    list: o(l),
                    "onUpdate:list": _[0] || (_[0] = t => N(l) ? l.value = t : null)
                }, {
                    content: x(() => [e("div", z, [(r(!0), n(C, null, L(o(l), t => (r(), n("div", {
                        class: "item",
                        key: t.orderNo
                    }, [e("div", A, [e("div", D, s(a.$t("withdraw")), 1), e("div", {
                        class: $(["right", h[t.auditState]])
                    }, s(v[t.auditState]), 3)]), e("div", M, [e("div", R, [e("span", null, s(a.$t("amount")), 1), e("div", V, s(o(I)(t.withdrawAmount)), 1)]), t.withdrawCategoryName ? (r(), n("div", E, [e("span", null, s(a.$t("type")), 1), e("div", null, s(t.withdrawCategoryName), 1)])) : i("v-if", !0), e("div", K, [e("span", null, s(a.$t("time")), 1), e("div", null, s(o(b)(t.createTime).format("YYYY-MM-DD HH:mm:ss")), 1)]), e("div", T, [e("span", null, s(a.$t("orderNo")), 1), e("div", U, [e("div", null, s(t.orderNo), 1), d(w, {
                        name: "copy",
                        onClick: O => o(S)(t.orderNo),
                        "icon-class": "copy"
                    }, null, 8, ["onClick"])])]), t.reason ? (r(), n("div", W, [e("div", null, s(a.$t("remark")), 1), e("div", F, s(t.reason), 1)])) : i("v-if", !0)])]))), 128))])]),
                    _: 1
                }, 8, ["api", "list"]), i(' <Empty v-if="historyList.length === 0" /> '), i(` <Pagination
    :total-items="pageInfo.total"
    :itemsPerPage="pageInfo.pageSize"
    :model-value="pageInfo.page"
    @changePage="getPageListHistory"
    /> `)])
            }
        }
    });
const ae = B(G, [
    ["__scopeId", "data-v-6c78a5cf"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/turntable/withdrawHistory/index.vue"]
]);
export {
    ae as
    default
};