import {
    G as a,
    R as i,
    r,
    C as d,
    H as c,
    I as _,
    Q as l,
    O as u,
    J as p,
    N as f
} from "./common.modules-af1f85b9.js";
import {
    A as m,
    bI as v,
    _ as g
} from "./page-activity-ActivityDetail-f7c58355.js";
import "./page-turntable-assets-d6267459.js";
import "./native/index-2c2af617.js";
import "./en-8dc3e88f.js";
const x = {
        class: "guide-container"
    },
    k = ["innerHTML"],
    w = a({
        __name: "index",
        setup(y) {
            const o = i(),
                n = r();
            return d(async () => {
                const e = await m(v());
                e && (n.value = e.data.playingGuide)
            }), (e, t) => {
                const s = c("NavBar");
                return f(), _("div", x, [l(s, {
                    title: e.$t("guideTitle"),
                    "left-arrow": "",
                    onClickLeft: t[0] || (t[0] = B => u(o).go(-1))
                }, null, 8, ["title"]), p("div", {
                    class: "guide-container-content",
                    innerHTML: n.value
                }, null, 8, k)])
            }
        }
    });
const H = g(w, [
    ["__scopeId", "data-v-99f1dd99"],
    ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/main/Guide/index.vue"]
]);
export {
    H as
    default
};