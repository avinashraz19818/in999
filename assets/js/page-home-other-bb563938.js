import {G as P, R as Q, r as M, C as ge, H as ee, I as a, Q as S, J as e, P as v, an as o, O as t, N as s, z as se, $ as ke, az as K, aq as ce, ao as N, aw as x, au as z, K as G, M as W, at as te, a$ as Ge, b0 as Ne, b1 as Me, B as L, aH as ve, ay as ue, a_ as _e, aA as J, aF as Pe, aG as Ee, aB as ae, aC as oe, aW as De, X as xe, A as be, ax as de} from "./common.modules-af1f85b9.js";
import {G as me, A as ye, b2 as Te, _ as E, g as he, i as V, a1 as $e, b3 as Se, y as ne, n as fe, b4 as Ie, c as ie, b5 as je, b6 as qe, b7 as Le, aM as He, az as pe, b8 as Re, b as F, b9 as Ue, ba as ze, aG as Je} from "./page-activity-ActivityDetail-f7c58355.js";
import {N as We, S as Ve} from "./page-home-AllGames-e4490e91.js";
const Ke = {
    class: "noticeBar__container"
}
  , Ye = {
    class: "noticeBar__container-body"
}
  , Fe = {
    key: 0,
    class: "noticeBar__container-body-text"
}
  , Xe = P({
    __name: "index",
    props: {
        color: {
            type: String,
            required: !1,
            default: "red"
        }
    },
    setup(g) {
        const i = Q()
          , c = me()
          , n = M(null)
          , m = M(c.messageList)
          , h = async () => {
            const l = await ye(Te({
                pageNo: 1,
                pageSize: 5
            }));
            if (l) {
                if (c.setMessage(l.data.list),
                m.value = l.data.list,
                !m.value.length)
                    return;
                n.value && clearInterval(n.value),
                n.value = setInterval( () => {
                    m.value.push(m.value.shift())
                }
                , 7e3)
            }
        }
        ;
        return ge( () => {
            m.value || setTimeout( () => {
                h()
            }
            , 1e3)
        }
        ),
        (l, f) => {
            var w;
            const p = ee("svg-icon");
            return s(),
            a("div", Ke, [S(p, {
                name: "noticeBarSpeaker"
            }), e("div", Ye, [m.value && m.value[0] && m.value[0].siteMessage ? (s(),
            a("div", Fe, v((w = m.value[0]) == null ? void 0 : w.siteMessage), 1)) : o("v-if", !0)]), e("button", {
                onClick: f[0] || (f[0] = y => t(i).push({
                    name: "Notification"
                })),
                class: "hotIcon"
            }, v(l.$t("more")), 1)])
        }
    }
})
  , Qe = E(Xe, [["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/NoticeBar/index.vue"]])
  , Ze = {
    class: "dialog__container",
    role: "dialog",
    tabindex: "0"
}
  , et = {
    class: "dialog__container-img"
}
  , tt = {
    alt: ""
}
  , st = {
    class: "dialog__container-title"
}
  , at = {
    class: "dialog__container-content"
}
  , ot = {
    class: "dialog__container-footer"
}
  , nt = P({
    __name: "HomeDialog",
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
            default: "comfirm"
        },
        showCancelBtn: {
            type: Boolean,
            default: !0
        },
        cancelText: {
            type: String,
            default: "cancel"
        },
        clickOutSide: {
            type: Boolean,
            default: !1
        },
        pathname: {
            type: String,
            default: "public"
        },
        picname: {
            type: String,
            default: "superjackpotHome"
        }
    },
    emits: ["update:show", "confirm"],
    setup(g, {emit: i}) {
        const c = g
          , {t: n} = se();
        ke( () => c.show, l => {
            l ? window.addEventListener("touchmove", h, {
                passive: !1
            }) : window.removeEventListener("touchmove", h)
        }
        );
        function m(l) {
            c.clickOutSide && i("update:show", !1)
        }
        const h = l => {
            c.show && l.preventDefault()
        }
        ;
        return (l, f) => {
            const p = K("lazy");
            return s(),
            a("div", {
                class: N(["dialog", {
                    active: g.show,
                    inactive: !g.show
                }])
            }, [e("div", Ze, [e("div", et, [ce(l.$slots, "header", {}, () => [x(e("img", tt, null, 512), [[p, t(he)(g.pathname, g.picname)]])], !0)]), e("div", st, [ce(l.$slots, "title", {}, () => [e("h1", null, v(t(n)(g.title)), 1)], !0)]), e("div", at, [ce(l.$slots, "content", {}, void 0, !0)]), e("div", ot, [ce(l.$slots, "footer", {}, () => [g.showCancelBtn ? (s(),
            a("button", {
                key: 0,
                onClick: f[0] || (f[0] = () => {
                    i("update:show", !1)
                }
                )
            }, v(l.$t(g.cancelText)), 1)) : o("v-if", !0), e("button", {
                onClick: f[1] || (f[1] = () => {
                    i("confirm")
                }
                )
            }, v(l.$t(g.confirmText)), 1)], !0)])]), e("div", {
                class: "dialog__outside",
                onClick: m
            })], 2)
        }
    }
});
const it = E(nt, [["__scopeId", "data-v-c0caae78"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/common/HomeDialog.vue"]])
  , lt = {
    class: "swiper_box"
}
  , rt = ["onClick"]
  , ct = {
    key: 0,
    class: "swiper-button"
}
  , ut = P({
    __name: "index",
    props: {
        isShowButton: {
            type: Boolean,
            default: !1
        }
    },
    setup(g) {
        const i = Q()
          , {getBannerApi: c, getBanner: n, openThirdGame: m} = V()
          , {getSelfCustomerServiceLink: h} = $e({
            ServerType: 2
        })
          , l = M(0)
          , f = [Me]
          , p = r => {
            r.activeIndex >= n.value.length ? l.value = r.activeIndex - n.value.length : l.value = r.activeIndex
        }
          , w = {
            0: "slot",
            1: "video",
            2: "sport",
            3: "lottery",
            4: "chess"
        }
          , y = r => {
            if (r.jumpLinkType == 1) {
                if (!r.gameCode) {
                    if ([0, 4].includes(r.categoryType) && r.vendorCode) {
                        i.push({
                            name: "AllOnlineGames",
                            query: {
                                game: r.categoryType == 0 ? "slot" : "chess",
                                vendorCode: r.vendorCode || ""
                            }
                        });
                        return
                    }
                    if ([1, 2].includes(r.categoryType) && r.vendorCode)
                        return m(r);
                    const T = w[r.categoryType] || "";
                    i.push({
                        name: "AllGames",
                        query: {
                            type: T
                        }
                    });
                    return
                }
                m(r);
                return
            } else if (r.jumpLinkType == 2) {
                h();
                return
            }
            const k = r.url;
            k && (window.location.href = k)
        }
        ;
        return ge(async () => {
            await c()
        }
        ),
        (r, k) => {
            const T = K("lazy");
            return s(),
            a("div", lt, [S(t(Ne), {
                class: "my-swipe",
                "slides-per-view": 1,
                "space-between": 20,
                onSlideChange: p,
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: !1
                },
                modules: f,
                loop: !0
            }, {
                default: z( () => [(s(!0),
                a(G, null, W(t(n), (B, q) => (s(),
                te(t(Ge), {
                    key: q
                }, {
                    default: z( () => [x(e("img", {
                        onClick: u => y(B)
                    }, null, 8, rt), [[T, B.bannerUrl]])]),
                    _: 2
                }, 1024))), 128))]),
                _: 1
            }), t(n).length > 1 && g.isShowButton ? (s(),
            a("div", ct, [(s(!0),
            a(G, null, W(t(n).length, B => (s(),
            a("span", {
                key: B,
                class: N({
                    active: l.value === B - 1
                })
            }, null, 2))), 128))])) : o("v-if", !0)])
        }
    }
});
const dt = E(ut, [["__scopeId", "data-v-3ad7aed7"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/Swiper/index.vue"]])
  , pt = ["src"]
  , gt = {
    class: "bonus-con"
}
  , mt = {
    class: "bonus"
}
  , _t = {
    class: "text"
}
  , vt = ["src"]
  , yt = {
    class: "text"
}
  , ht = P({
    __name: "DownloadPWA",
    setup(g) {
        const i = Se()
          , {t: c} = se()
          , n = ne()
          , {onDown: m} = V();
        fe(),
        L( () => n.isOpenDownAppRewardSwitch);
        const h = L( () => (n == null ? void 0 : n.downAppBonusAmount) ?? 0)
          , l = L( () => n.isShowDownAppBonusAmountSwitch);
        return (f, p) => t(i).apk.value != t(Ie).FullApk ? (s(),
        a(G, {
            key: 0
        }, [l.value ? (s(),
        a("div", {
            key: 0,
            class: "btn pwa-btn",
            onClick: p[0] || (p[0] = (...w) => t(m) && t(m)(...w))
        }, [e("img", {
            class: "icon",
            src: t(n).getWebIco
        }, null, 8, pt), e("div", gt, [e("div", mt, v(t(c)("getMoney", [t(ie)(h.value, "", 0)])), 1), e("div", _t, v(t(c)("addToDesktop")), 1)])])) : (s(),
        a("div", {
            key: 1,
            class: "btn pwa-btn",
            onClick: p[1] || (p[1] = (...w) => t(m) && t(m)(...w))
        }, [e("img", {
            class: "icon",
            src: t(n).getWebIco
        }, null, 8, vt), e("div", yt, v(t(c)("addToDesktop")), 1)]))], 64)) : o("v-if", !0)
    }
});
const ft = E(ht, [["__scopeId", "data-v-b3bd7e49"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/common/DownloadPWA.vue"]])
  , wt = "/assets/png/rewardCenter-f8f2277a.png"
  , bt = "/assets/png/tg_bg-8a7ff21e.png"
  , kt = "/assets/png/turntable_icon-9b14cf81.png"
  , Tt = {
    class: "float"
}
  , $t = P({
    __name: "Turntable",
    setup(g) {
        ve(I => ({
            "d9cf7d89-rewardCenterBgUrl": B.value,
            "d9cf7d89-bigTurntableBgUrl": u.value,
            "d9cf7d89-telegramBgUrl": q.value,
            "d9cf7d89-changlongIconUrl": b.value
        }));
        const i = Q()
          , c = M()
          , n = ne()
          , {store: m} = fe()
          , h = me()
          , {isAlowGame: l, goChangLong: f, showChanglong: p} = V()
          , {onTriggerGoogle: w} = qe()
          , y = async () => {
            if (!h.token) {
                i.push({
                    name: "login"
                });
                return
            }
            await l("", f)
        }
          , r = () => {
            if (!h.token) {
                i.push({
                    name: "login"
                });
                return
            }
            i.push({
                name: "Turntable"
            })
        }
          , k = () => {
            if (!h.token) {
                i.push({
                    name: "login"
                });
                return
            }
            m.rewardCenter = !0,
            w("reward_center_click")
        }
          , T = I => {
            I && window.open(I)
        }
          , B = L( () => `url('${n.getBonusCenterImgUrl || wt}')`)
          , q = L( () => `url('${n.getTelegramImgUrl || bt}')`)
          , u = L( () => `url('${n.getBigTurntableImgUrl || kt}')`)
          , b = L( () => `url('${n.getLotteryDragonIcon || je}')`);
        return (I, D) => {
            const Y = K("scrollhide");
            return x((s(),
            a("div", Tt, [o(" 奖金弹窗 "), t(n).getIsShowRewardCenter ? (s(),
            a("div", {
                key: 0,
                class: "rewardCenter float-entry",
                onClick: k
            })) : o("v-if", !0), o(" 抽奖转盘组件 "), t(n).getOpenTurntable ? (s(),
            a("div", {
                key: 1,
                class: "turntable-lottery float-entry",
                onClick: r
            })) : o("v-if", !0), o(" 大转盘组件 "), t(n).getBigTurntableLink ? (s(),
            a("div", {
                key: 2,
                ref_key: "turntableId",
                ref: c,
                class: "turntable float-entry",
                onClick: D[0] || (D[0] = Z => T(t(n).getBigTurntableLink))
            }, null, 512)) : o("v-if", !0), o(" Telegram组件 "), t(n).getTelegramExternalLink ? (s(),
            a("div", {
                key: 3,
                class: "turntable-telegram float-entry",
                onClick: D[1] || (D[1] = Z => T(t(n).getTelegramExternalLink))
            })) : o("v-if", !0), o(" 长龙组件 "), t(p) ? (s(),
            a("div", {
                key: 4,
                class: "changlongEnter float-entry",
                onClick: y
            })) : o("v-if", !0)])), [[Y]])
        }
    }
});
const St = E($t, [["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/common/Turntable.vue"]])
  , It = {
    key: 0,
    alt: ""
}
  , Lt = P({
    __name: "index",
    props: {
        tabList: {
            type: Object,
            required: !0
        },
        visibileAll: {
            type: Boolean,
            required: !1,
            default: !0
        },
        currentMenu: {
            type: Number,
            required: !0
        },
        isShowIcon: {
            type: Boolean,
            required: !1,
            default: !0
        },
        isBg: {
            type: Boolean,
            required: !1,
            default: !0
        }
    },
    emits: ["tabChange", "update:currentMenu"],
    setup(g, {expose: i, emit: c}) {
        const n = g
          , m = M()
          , h = y => y.img.includes("http") ? y.img : he("home", y.img, "png")
          , l = M(0)
          , f = L( () => {
            let y = Le(n.tabList);
            return y.length === 1 ? [] : y
        }
        )
          , p = y => {
            let {item: r, index: k} = y;
            c("tabChange", {
                item: r,
                index: k
            }),
            c("update:currentMenu", l.value)
        }
          , w = L( () => n.tabList[l.value]);
        return ke( () => n.currentMenu, y => {
            l.value = y
        }
        , {
            immediate: !0
        }),
        i({
            currentTab: l,
            currentMenu: w,
            tabRef: m
        }),
        (y, r) => {
            const k = K("lazy");
            return s(),
            a(G, null, [S(We, {
                list: f.value,
                active: l.value,
                "onUpdate:active": r[0] || (r[0] = T => l.value = T),
                tabClassName: "tabs",
                onOnClickTab: p,
                activeClassName: "tab_active",
                ref: "tabRefs",
                tabItemClassName: "funtab_item"
            }, {
                default: z( ({item: T, index: B}) => [e("div", {
                    class: N(["tab_item", {
                        tab_active: B === l.value,
                        allGame: !y.isShowIcon
                    }])
                }, [T.img ? x((s(),
                a("img", It, null, 512)), [[k, h(T)]]) : o("v-if", !0), e("span", null, v(T.title), 1)], 2)]),
                _: 1
            }, 8, ["list", "active"]), o(` <van-tabs
		class="gameTabBar"
		v-model:active="currentTab"
		@click-tab="handleClickTab"
		type="card"
		color="transparent"
		background="transparent"
		ref="tabRef"
		:class="{ noBg: !props.isBg }"
	>
		<van-tab v-for="(item, index) in tabLists" :name="index" :key="index">
			<template #title>
				<div v-if="item?.isShow" class="tab_item">
					<img v-if="isShowIcon" :src="getIcons('home/tab', item.img, 'png', 'Icons')" alt="" />
					<span>{{ item.title }}</span>
				</div>
			</template>
		</van-tab>
	</van-tabs> `)], 2112)
        }
    }
});
const Ct = E(Lt, [["__scopeId", "data-v-8ac0d926"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/Electronic/Tabs/index.vue"]])
  , At = {
    key: 1
}
  , Ot = {
    key: 2,
    class: "win-odds"
}
  , Bt = ["onClick"]
  , Gt = {
    key: 0,
    class: "big_prize_wai"
}
  , Nt = {
    class: "big_prize"
}
  , Mt = {
    class: "info"
}
  , Pt = P({
    __name: "index",
    props: {
        type: {
            type: String,
            required: !0
        },
        gameItem: {
            type: Object,
            required: !0
        },
        gameType: {
            type: String,
            required: !0
        },
        isWidth: {
            type: Boolean,
            required: !0,
            default: !1
        },
        isElec: {
            type: Boolean,
            required: !1,
            default: !1
        }
    },
    setup(g) {
        const i = g;
        ve(u => ({
            "6a6ca1da-bgHidth": y.value
        }));
        const {t: c} = se()
          , {homeState: n, onItemClick: m, isAlowGame: h, isSassLotteryGame: l, openThirdGame: f} = V()
          , p = ne()
          , w = {
            sport: c("sport"),
            video: c("live"),
            chess: c("chess")
        }
          , y = L( () => {
            let u = He() === 0;
            return i.isWidth ? (u ? 248 / 2 : 218 / 2) + "px" : "100%"
        }
        )
          , r = L( () => {
            let u = i.gameItem;
            return u.imgUrl || u.img || u.vendorImg || u.categoryImg
        }
        )
          , k = L( () => i.gameType === "lottery" ? `url(${i.gameItem.categoryImg})` : `url(${i.gameItem.vendorImg})`)
          , T = u => {
            var I, D;
            if (!me().token) {
                pe.push({
                    name: "login"
                });
                return
            }
            if (i.type === "1")
                if (!["slot"].includes(i.gameType))
                    m(u);
                else {
                    if (i.isElec) {
                        m(u);
                        return
                    }
                    sessionStorage.setItem("slotGamesList", JSON.stringify((I = n.allGameList) == null ? void 0 : I.slot)),
                    sessionStorage.setItem("gameType", JSON.stringify("slot")),
                    sessionStorage.setItem("clickedItem", JSON.stringify(i.gameItem)),
                    pe.push({
                        name: "AllOnlineGames"
                    })
                }
            else if (i.gameType === "lottery" && h(u, B),
            (i.gameType === "video" || i.gameType === "sport") && m(u),
            i.gameType === "chess") {
                if (i.isElec) {
                    m(u);
                    return
                }
                sessionStorage.setItem("slotGamesList", JSON.stringify((D = n.allGameList) == null ? void 0 : D.chess)),
                sessionStorage.setItem("gameType", JSON.stringify("chess")),
                sessionStorage.setItem("clickedItem", JSON.stringify(i.gameItem)),
                pe.push({
                    name: "AllOnlineGames"
                })
            }
        }
          , B = u => {
            if (l(u))
                return f({
                    ...u,
                    vendorCode: "ARLottery"
                });
            pe.push({
                name: "AllLotteryGames-" + q[q.findIndex(b => b.value === u.id)].path,
                query: {
                    id: u.id
                }
            })
        }
          , q = [{
            value: 1,
            path: "WinGo"
        }, {
            value: 3,
            path: "5D"
        }, {
            value: 2,
            path: "K3"
        }, {
            value: 4,
            path: "WinTrx"
        }, {
            value: 5,
            path: "XoSo"
        }, {
            value: 6,
            path: "XoSo"
        }, {
            value: 7,
            path: "Binguo"
        }, {
            value: 8,
            path: "4D"
        }];
        return (u, b) => {
            const I = K("lazy");
            return ["1", "2"].includes(u.type) && u.gameType !== "bigaward" ? (s(),
            a("div", {
                key: 0,
                class: N(["gameItem1", {
                    elec: u.gameType === "slot"
                }]),
                onClick: b[0] || (b[0] = _e(D => T(u.gameItem), ["stop"]))
            }, [u.gameType === "slot" ? (s(),
            a("div", {
                key: 0,
                class: "slot_bg",
                style: ue({
                    backgroundImage: `url(${r.value})`
                })
            }, null, 4)) : x((s(),
            a("img", At, null, 512)), [[I, r.value]]), ["clicksTopList", "platformList"].includes(u.gameType) && t(p).isShowHotGameWinOdds ? (s(),
            a("div", Ot, [e("span", null, v(u.$t("winOdds")), 1), e("span", null, v(u.gameItem.winOdds) + "%", 1), e("div", {
                class: "win-p",
                style: ue({
                    width: `${Math.min(u.gameItem.winOdds, 100)}%`
                })
            }, null, 4)])) : o("v-if", !0)], 2)) : (s(),
            a("div", {
                key: 1,
                class: "gameImte2",
                onClick: _e(T, ["stop"])
            }, [u.gameType === "bigaward" ? (s(),
            a("div", Gt, [e("div", Nt, [e("div", {
                class: "bg",
                style: ue({
                    backgroundImage: `url(${u.gameItem.imgUrl})`
                })
            }, null, 4), e("div", Mt, v(u.gameItem.multiple) + "X ", 1)]), e("div", {
                class: N(["title"])
            }, v(u.gameItem.gameName), 3), e("div", {
                class: N(["award_qian"])
            }, v(t(ie)(u.gameItem.bonusAmount)), 3)])) : (s(),
            a("div", {
                key: 1,
                class: "other_style",
                style: ue({
                    backgroundImage: k.value
                })
            }, [e("div", null, v(w[u.gameType]), 1)], 4))], 8, Bt))
        }
    }
});
const Et = E(Pt, [["__scopeId", "data-v-6a6ca1da"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/Electronic/GameItem/index.vue"]])
  , Dt = g => (ae("data-v-e3bcc790"),
g = g(),
oe(),
g)
  , xt = {
    class: "aloneGame"
}
  , jt = {
    class: "header"
}
  , qt = ["src"]
  , Ht = Dt( () => e("span", {
    class: "all"
}, "ALL", -1))
  , Rt = {
    class: "len"
}
  , Ut = {
    key: 1,
    class: "right_btn"
}
  , zt = {
    key: 0,
    class: "flash_desc"
}
  , Jt = {
    key: 1,
    class: "flash_desc awar_desc"
}
  , Wt = P({
    __name: "index",
    props: {
        title: {
            type: String,
            required: !0
        },
        isAll: {
            type: Boolean,
            required: !1,
            default: !1
        },
        gameType: {
            type: String,
            required: !0
        },
        gameList: {
            type: Array,
            required: !0
        },
        isShowMore: {
            type: Boolean,
            required: !1,
            default: !1
        },
        currentMenuType: {
            type: Number,
            required: !1
        },
        isShowBtn: {
            type: Boolean,
            required: !1,
            default: !1
        },
        isShowTitle: {
            type: Boolean,
            required: !1,
            default: !0
        }
    },
    emits: ["goAll"],
    setup(g, {emit: i}) {
        const c = g;
        ve(d => ({
            "e3bcc790-swipeHeight": d.swipeHeight
        }));
        const {isAlowGame: n, goChangLong: m} = V()
          , h = me()
          , {t: l} = se()
          , f = !1
          , p = !1
          , w = Re()
          , y = Q()
          , r = M()
          , k = ne()
          , T = (d, C) => {
            switch (c.gameType) {
            case "lottery":
                return d.name + "" + C;
            case "all":
            case "clicksTopList":
            case "platformList":
            case "fish":
            case "flash":
                return d.vendorId + "" + C;
            default:
                return d.slotsTypeID + "" + C
            }
        }
          , B = L( () => k.getJackportMaxReswadAmount)
          , q = L( () => {
            const d = c.gameType;
            return d === "flash" || d === "slot" || d === "fish" || d === "clicksTopList" || d === "platformList" ? "1" : "2"
        }
        )
          , u = (d, C) => {
            const H = [];
            for (let U = 0; U < Math.ceil(d.length / C); U++) {
                const j = U * C
                  , X = j + C;
                H.push(d.slice(j, X))
            }
            return H
        }
          , b = L( () => {
            if (c.isAll)
                return u(c.gameList, c.gameList.length);
            if (c.currentMenuType === 0 && (c.gameType === "clicksTopList" || c.gameType === "platformList")) {
                let d = c.gameList;
                return d.length > 6 ? u(d, 6) : u(c.gameList, d.length)
            } else if (c.currentMenuType === 0 && c.gameType === "slot")
                return u(c.gameList, c.gameList.length);
            return u(c.gameList, 3)
        }
        )
          , I = d => {
            var C, H;
            d === "left" ? (C = r.value) == null || C.prev() : (H = r.value) == null || H.next()
        }
          , D = () => {
            y.push({
                path: "/main/SuperJackpot"
            })
        }
          , Y = M(0)
          , Z = d => {
            Y.value = d
        }
          , le = async () => {
            if (!h.token) {
                y.push({
                    name: "login"
                });
                return
            }
            n("", m)
        }
          , re = () => {
            if (w.emit("changeKeepAliveKey"),
            c.gameType === "clicksTopList" || c.gameType === "platformList") {
                i("goAll", "popular");
                return
            }
            i("goAll", c.gameType)
        }
        ;
        return (d, C) => {
            const H = ee("van-icon");
            return s(),
            a("div", xt, [e("div", jt, [d.isShowTitle ? (s(),
            a("div", {
                key: 0,
                class: N(["title"])
            }, [e("img", {
                src: t(F)("electronic", d.gameType),
                alt: "",
                class: "icons"
            }, null, 8, qt), J(" " + v(d.title) + " ", 1), d.gameType !== "bigaward" ? (s(),
            a("div", {
                key: 0,
                onClick: re
            }, [Ht, e("span", Rt, v(d.gameList.length), 1)])) : o("v-if", !0)], 2)) : o("v-if", !0), d.isShowBtn ? (s(),
            a("div", Ut, [S(H, {
                name: "arrow-left",
                class: N({
                    active: Y.value == 0
                }),
                onClick: C[0] || (C[0] = U => I("left"))
            }, null, 8, ["class"]), S(H, {
                name: "arrow",
                class: N({
                    active: Y.value === b.value.length - 1
                }),
                onClick: C[1] || (C[1] = U => I("right"))
            }, null, 8, ["class"]), o(`<img :src="getIcons('home', 'arrow_left')" alt=""  />`), o(`<img :src="getIcons('home', 'arrow_right')" alt=""  />`)])) : o("v-if", !0)]), d.gameType === "flash" ? (s(),
            a("div", zt, v(d.$t("flashDesc", [t(k).getProjectName])), 1)) : o("v-if", !0), d.gameType === "bigaward" ? (s(),
            a("div", Jt, [J(v(d.$t("awarDesc1")) + " " + v(d.$t("awarDesc2")) + " ", 1), e("span", {
                class: N(["amount", [p]])
            }, v(t(ie)(B.value)), 3)])) : o("v-if", !0), S(t(Ee), {
                class: "my-swipe",
                ref_key: "swipeRef",
                ref: r,
                autoplay: ["flash", "lottery", "sport", "fish", "bigaward", "video"].includes(d.gameType) ? 9e3 : "-",
                onChange: Z,
                "lazy-render": !1,
                "show-indicators": !1
            }, {
                default: z( () => [(s(!0),
                a(G, null, W(b.value, (U, j) => (s(),
                te(t(Pe), {
                    key: d.gameType + j,
                    class: N({
                        isShowAll: d.isAll,
                        gys: d.gameType === "slot" && d.isAll && d.currentMenuType === 0
                    })
                }, {
                    default: z( () => [(s(!0),
                    a(G, null, W(U, (X, we) => (s(),
                    te(Et, {
                        class: "item_two",
                        "game-type": d.gameType,
                        "game-item": X,
                        key: T(X, we),
                        type: q.value,
                        "is-width": d.isAll
                    }, null, 8, ["game-type", "game-item", "type", "is-width"]))), 128))]),
                    _: 2
                }, 1032, ["class"]))), 128))]),
                _: 1
            }, 8, ["autoplay"]), d.isShowMore && d.gameList.length > 9 ? (s(),
            a("div", {
                key: 2,
                class: "look_all",
                onClick: re
            }, v(t(l)("viewAll")), 1)) : o("v-if", !0), d.gameType === "bigaward" ? (s(),
            a("div", {
                key: 3,
                class: "look_all look_awar",
                onClick: D
            }, v(d.$t("lookBigAward")), 1)) : o("v-if", !0), d.gameType === "lottery" && t(k).isShowLotteryDragon ? (s(),
            a("div", {
                key: 4,
                class: N(["ChangLong", [f]]),
                onClick: le
            }, null, 2)) : o("v-if", !0)])
        }
    }
});
const Vt = E(Wt, [["__scopeId", "data-v-e3bcc790"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/Electronic/AloneGame/index.vue"]])
  , Ce = g => (ae("data-v-3cb56872"),
g = g(),
oe(),
g)
  , Kt = {
    class: "winning"
}
  , Yt = {
    class: "title"
}
  , Ft = {
    class: "wrapper"
}
  , Xt = {
    class: "avatar"
}
  , Qt = Ce( () => e("div", {
    class: "avatar_outbg"
}, null, -1))
  , Zt = ["data-img"]
  , es = Ce( () => e("div", {
    class: "level"
}, "V1", -1))
  , ts = {
    class: "info"
}
  , ss = {
    class: "name"
}
  , as = {
    class: "winning_icon",
    alt: ""
}
  , os = {
    class: "winning"
}
  , ns = P({
    __name: "index",
    setup(g) {
        const i = "ar031"
          , {homeState: c, getWinInfoDetail: n, getWinInfo: m} = V()
          , h = M(null)
          , l = M(null)
          , f = p => {
            if (p.length >= 7)
                return p.substring(0, 3) + "***" + p.substring(p.length - 3, p.length);
            {
                const w = "***"
                  , y = 7 - p.length
                  , r = "*".repeat(y);
                return p.substring(0, Math.ceil((7 - y) / 2)) + w + r + p.substring(Math.ceil((7 - y) / 2))
            }
        }
        ;
        return ge(async () => {
            await n(),
            ["ar071"].includes(i) && (De(h.value),
            c.winInfoList.length > 0 && (l.value = setInterval(async () => {
                c.winInfoList.unshift(c.winInfoList.pop())
            }
            , 3e3)))
        }
        ),
        xe( () => {
            clearInterval(l.value)
        }
        ),
        (p, w) => {
            const y = K("lazy");
            return s(),
            a("div", Kt, [e("div", Yt, v(p.$t("winningDetal")), 1), e("div", Ft, [e("div", {
                ref_key: "wrapperRef",
                ref: h
            }, [(s(!0),
            a(G, null, W(t(m).slice(0, 6), r => (s(),
            a("div", {
                class: "win_item",
                key: r
            }, [e("div", Xt, [Qt, x(e("img", {
                "data-img": t(F)("home", "avatar")
            }, null, 8, Zt), [[y, t(F)("main/Avatar", r.userPhoto) || t(F)("home", "avatar")]]), es]), e("div", ts, [e("div", ss, v(f(r == null ? void 0 : r.nickName)), 1), o(' <div class="time">18:24</div> ')]), x(e("img", as, null, 512), [[y, r.imgUrl]]), e("div", os, [e("div", null, v(t(ie)(r.amount || 0)), 1), e("div", null, v(p.$t("winningAmount")), 1)])]))), 128))], 512)])])
        }
    }
});
const is = E(ns, [["__scopeId", "data-v-3cb56872"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/Electronic/Winning/index.vue"]])
  , ls = {
    class: "profit"
}
  , rs = {
    class: "title"
}
  , cs = {
    class: "profit__list"
}
  , us = ["data-img"]
  , ds = {
    class: "profit__list-item__info"
}
  , ps = {
    class: "rank"
}
  , gs = {
    class: "name"
}
  , ms = {
    class: "rank_num"
}
  , _s = ["src"]
  , vs = {
    class: "price"
}
  , ys = P({
    __name: "index",
    setup(g) {
        const {homeState: i} = V()
          , c = n => {
            if (n.length >= 7)
                return n.substring(0, 3) + "***" + n.substring(n.length - 3, n.length);
            {
                const m = "***"
                  , h = 7 - n.length
                  , l = "*".repeat(h);
                return n.substring(0, Math.ceil((7 - h) / 2)) + m + l + n.substring(Math.ceil((7 - h) / 2))
            }
        }
        ;
        return (n, m) => {
            const h = K("lazy");
            return s(),
            a("div", ls, [e("div", rs, v(n.$t("earningsRankingToday")), 1), e("div", cs, [(s(!0),
            a(G, null, W(t(i).rankList, (l, f) => (s(),
            a("div", {
                key: f,
                class: "profit__list-item"
            }, [x(e("img", {
                class: "usePhoto",
                "data-img": t(F)("home", "avatar")
            }, null, 8, us), [[h, l.userPhoto]]), e("div", ds, [e("div", ps, [e("div", gs, v(c(l.nickName)), 1), e("div", ms, [f < 3 ? (s(),
            a("img", {
                key: 0,
                class: "rank_img",
                src: t(F)("electronic", "no" + (f + 1)),
                alt: ""
            }, null, 8, _s)) : o("v-if", !0), e("span", {
                class: N(`no${f + 1}`)
            }, "NO" + v(f + 1), 3)])]), e("div", vs, v(t(ie)(l.price)), 1)])]))), 128))])])
        }
    }
});
const hs = E(ys, [["__scopeId", "data-v-dd3d232d"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/Electronic/Profit/index.vue"]])
  , R = g => (ae("data-v-711adb57"),
g = g(),
oe(),
g)
  , fs = {
    key: 0,
    class: "bottomLogoText"
}
  , ws = R( () => e("ul", null, [e("li", null, "O acesso a pessoas menores de 18 anos é estritamente proibido"), e("li", null, " A marca (POPPG.COM) é operada pela empresa brasileira ONEPAY MEIOS DE PAGAMENTO, em parceria com a LOTERJ, a partir de 04/10/2024, registrada sob o nº SEI 150013/001113/2024 "), e("li", null, [J(" Para questões jurídicas, entre em contato através do e-mail: "), e("a", {
    href: "mailto:support@onpyg.com",
    target: "_blank"
}, "support@onpyg.com")])], -1))
  , bs = R( () => e("p", null, null, -1))
  , ks = [ws, bs]
  , Ts = {
    key: 1,
    class: "bottomLogoText popText"
}
  , $s = R( () => e("ul", null, [e("li", null, "O acesso a pessoas menores de 18 anos é estritamente proibido"), e("li", null, " A marca (POPBRA.COM) é operada pela empresa brasileira ONEPAY MEIOS DE PAGAMENTO, em parceria com a LOTERJ, a partir de 04/10/2024, registrada sob o nº SEI 150013/001113/2024 "), e("li", null, [J("Para questões jurídicas, entre em contato através do e-mail: "), e("a", {
    href: "mailto:support@onpyg.com",
    target: "_blank"
}, "support@onpyg.com ")])], -1))
  , Ss = R( () => e("p", null, null, -1))
  , Is = [$s, Ss]
  , Ls = {
    key: 2,
    class: "bottomLogoText"
}
  , Cs = R( () => e("ul", null, [e("li", null, "O acesso a pessoas menores de 18 anos é estritamente proibido"), e("li", null, "A marca (POP678.COM) é operada pela empresa brasileira ONEPAY MEIOS DE PAGAMENTO, em parceria com a LOTERJ, a partir de 04/10/2024, registrada sob o nº SEI 150013/001113/2024 "), e("li", null, [J("Para questões jurídicas, entre em contato através do e-mail: "), e("a", {
    href: "mailto:support@onpyg.com",
    target: "_blank"
}, "support@onpyg.com")])], -1))
  , As = R( () => e("p", null, null, -1))
  , Os = [Cs, As]
  , Bs = {
    key: 3,
    class: "bottomLogoText mt40"
}
  , Gs = R( () => e("ul", null, [e("li", null, "O acesso a pessoas menores de 18 anos é estritamente proibido"), e("li", null, "A marca (POP555.COM) é operada pela empresa brasileira ONEPAY MEIOS DE PAGAMENTO, em parceria com a LOTERJ, a partir de 04/10/2024, registrada sob o nº SEI 150013/001113/2024 "), e("li", null, [J("Para questões jurídicas, entre em contato através do e-mail: "), e("a", {
    href: "mailto:support@onpyg.com",
    target: "_blank"
}, "support@onpyg.com")])], -1))
  , Ns = R( () => e("p", null, null, -1))
  , Ms = [Gs, Ns]
  , Ps = {
    key: 4,
    class: "bottomLogoText wa"
}
  , Es = R( () => e("ul", null, [e("li", null, "O acesso a pessoas menores de 18 anos é estritamente proibido."), e("li", null, "A marca (POPCEU.COM) é operada pela empresa brasileira ONEPAY MEIOS DE PAGAMENTO, em parceria com a LOTERJ, a partir de 04/10/2024, registrada sob o nº SEI 150013/001113/2024. "), e("li", null, "Para questões jurídicas, entre em contato através do e-mail：support@onpyg.com")], -1))
  , Ds = R( () => e("p", null, null, -1))
  , xs = [Es, Ds]
  , js = P({
    __name: "BottomLogoText",
    setup(g) {
        const i = Ue();
        return (c, n) => (s(),
        a(G, null, [t(i) === "poppg" ? (s(),
        a("div", fs, ks)) : o("v-if", !0), t(i) === "pop" ? (s(),
        a("div", Ts, Is)) : o("v-if", !0), t(i) === "ar002" ? (s(),
        a("div", Ls, Os)) : o("v-if", !0), t(i) === "ar019" ? (s(),
        a("div", Bs, Ms)) : o("v-if", !0), t(i) === "ar082" ? (s(),
        a("div", Ps, xs)) : o("v-if", !0)], 64))
    }
});
const qs = E(js, [["__scopeId", "data-v-711adb57"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/common/BottomLogoText.vue"]])
  , Ae = g => (ae("data-v-4529147b"),
g = g(),
oe(),
g)
  , Hs = {
    class: "instructions_img"
}
  , Rs = ["src"]
  , Us = ["src"]
  , zs = {
    key: 0,
    class: "desc"
}
  , Js = {
    class: "tips"
}
  , Ws = {
    class: "tips"
}
  , Vs = {
    class: "tips"
}
  , Ks = Ae( () => e("br", null, null, -1))
  , Ys = Ae( () => e("br", null, null, -1))
  , Fs = P({
    __name: "index",
    setup(g) {
        const i = ne()
          , c = ["ar038"]
          , n = "ar031"
          , m = L( () => c.includes(n) ? i.getHeadLogo : i.getProjectLogo)
          , h = L( () => ["poppg", "pop", "ar002", "ar019", "ar082"].includes(n));
        return (l, f) => (s(),
        a(G, null, [e("div", {
            class: N(["instructions", {
                mtdesc: !h.value
            }])
        }, [e("div", Hs, [e("img", {
            src: t(F)("home", "u18"),
            alt: "",
            class: "u18"
        }, null, 8, Rs), e("img", {
            src: m.value,
            class: "logo"
        }, null, 8, Us)]), h.value ? o("v-if", !0) : (s(),
        a("div", zs, [["ar074", "ar038"].includes(t(n)) ? (s(),
        a(G, {
            key: 0
        }, [e("p", Js, v(l.$t("braTips1")), 1), e("p", Ws, v(l.$t("braTips2", [`${t(i).projectName}`])), 1), e("p", Vs, v(l.$t("braTips3", ["support@onpyg.com"])), 1)], 64)) : (s(),
        a(G, {
            key: 1
        }, [J(v(l.$t("instructions", [t(i).getProjectName])), 1), Ks, J(" " + v(l.$t("instructions2")) + " ", 1), Ys, J(" " + v(l.$t("instructions3", [t(i).getProjectName])), 1)], 64))]))], 2), o(" 巴西站底部logo文字 "), S(qs)], 64))
    }
});
const Xs = E(Fs, [["__scopeId", "data-v-4529147b"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/Electronic/Instructions/index.vue"]])
  , Qs = {
    class: "video_list"
}
  , Zs = {
    class: "video_title"
}
  , ea = ["src"]
  , ta = {
    class: "video_img_box"
}
  , sa = ["onClick"]
  , aa = ["onClick"]
  , oa = P({
    __name: "index",
    setup(g) {
        const i = M([])
          , c = Q()
          , {onItemClick: n, homeState: m} = V()
          , h = async () => {
            const p = await ye(ze());
            p && (i.value = p.data)
        }
          , l = p => {
            const w = Je(p);
            return w.indexOf("_") === -1 ? w : w.split("_")[0]
        }
          , f = p => {
            const w = m.allGameList.video.find(y => y.slotsName === p.vendorCode);
            sessionStorage.setItem("slotGamesList", JSON.stringify(m.allGameList.video)),
            sessionStorage.setItem("gameType", JSON.stringify("video")),
            sessionStorage.setItem("clickedItem", JSON.stringify(w)),
            c.push({
                name: "AllOnlineGames",
                query: {
                    gameType: "video",
                    currentId: p.childList[0].vendorId
                }
            })
        }
        ;
        return h(),
        (p, w) => {
            const y = K("lazy");
            return s(),
            a("div", Qs, [(s(!0),
            a(G, null, W(i.value, r => (s(),
            a("div", {
                class: "video_item",
                key: r.vendorCode
            }, [e("div", Zs, [e("img", {
                src: t(he)("home/slots", r.vendorCode),
                alt: ""
            }, null, 8, ea), e("span", null, v(l(r.vendorCode)) + v(p.$t("code9306")), 1)]), e("div", ta, [(s(!0),
            a(G, null, W(r.childList.slice(0, 6), k => x((s(),
            a("img", {
                key: k.gameID + r.vendorCode,
                onClick: T => t(n)(k)
            }, null, 8, sa)), [[y, k.img]])), 128))]), e("div", {
                class: "all_slot",
                onClick: () => f(r)
            }, v(p.$t("allGame")), 9, aa)]))), 128))])
        }
    }
});
const na = E(oa, [["__scopeId", "data-v-93741f34"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/components/Home/Electronic/Video/index.vue"]])
  , ia = g => (ae("data-v-6c4ce891"),
g = g(),
oe(),
g)
  , la = {
    id: "home"
}
  , ra = ["src"]
  , ca = {
    class: "content__right"
}
  , ua = {
    class: "content"
}
  , da = ia( () => e("div", {
    id: "game_content"
}, null, -1))
  , pa = {
    class: "promptHeader"
}
  , ga = ["innerHTML"]
  , ma = {
    class: "Laundry-Con"
}
  , _a = {
    class: "Laundry-Con_tip"
}
  , va = {
    class: "Laundry-Con_tips"
}
  , ya = P({
    __name: "electronic",
    setup(g) {
        const {getSelfCustomerServiceLink: i} = $e({
            ServerType: 2
        })
          , {onDown: c, getMessagesData: n, homeState: m, getAllGame: h, getGameType: l, projectIcon: f} = V()
          , {t: p} = se()
          , {closeLaundry: w, closePrompt: y, store: r, promptContent: k} = fe()
          , T = Q()
          , B = M([])
          , q = M()
          , u = be([])
          , b = M(0)
          , I = Se()
          , D = _ => b.value === 0 && _.gameType !== "slot"
          , Y = _ => _ === "popular" && b.value === 0 || _ === "slot" && b.value === 0 ? !0 : b.value !== 0
          , Z = () => {
            w(),
            T.push({
                name: "SuperJackpot"
            })
        }
          , le = L( () => {
            let _ = u.findIndex($ => $.gameType === j[b.value].type);
            return _ < 0 ? -1 : _
        }
        )
          , re = _ => {
            var $;
            return _.gameType === "bigaward" && le.value === -1 ? _.isShow : (b.value === 0 || (($ = u[le.value]) == null ? void 0 : $.gameType) === _.gameType) && _.gameList.length > 0
        }
          , d = _ => {
            let {item: $} = _;
            sessionStorage.setItem("currentMenu", $.type)
        }
        ;
        function C() {
            i()
        }
        const H = async () => {
            await X();
            let _ = sessionStorage.getItem("currentMenu");
            b.value = _ ? j.findIndex(A => A.type === _) : 0,
            await h();
            const $ = Le(m.allGameList);
            u.forEach(A => {
                A.gameType === "clicksTopList" ? A.gameList = $.popular.clicksTopList : A.gameType === "platformList" ? A.gameList = $.popular.platformList : A.gameType === "bigaward" ? A.gameList = $.awardrecordlist || [] : A.gameType === "video" ? A.gameList = $.popular.clicksVideoTopList || [] : A.gameList = $[A.gameType],
                A.gameList || (A.isShow = !1)
            }
            ),
            sessionStorage.setItem("allGameList", JSON.stringify(u)),
            sessionStorage.setItem("gameData", JSON.stringify(m.allGameList))
        }
          , U = _ => {
            T.push({
                name: "AllGames",
                query: {
                    type: _
                }
            })
        }
          , j = be([{
            title: p("all"),
            type: "all",
            img: "all",
            isShow: !0
        }])
          , X = async () => {
            await l(),
            m.gameTypeList.forEach(_ => {
                j.push({
                    title: p("code" + _.typeNameCode + _.categoryCode),
                    type: _.categoryCode.toLocaleLowerCase(),
                    isShow: _.state === 1 && _.categoryCode.toLocaleLowerCase() !== "popular" && _.categoryCode.toLocaleLowerCase() !== "bigaward",
                    img: _.categoryImg
                }),
                _.categoryCode.toLocaleLowerCase() === "popular" && u.push({
                    isAll: !1,
                    img: _.categoryImg,
                    isShow: !0,
                    gameList: [],
                    gameType: "platformList",
                    title: p("characteristical"),
                    showTitle: p("characteristical")
                }),
                u.push({
                    isAll: !1,
                    img: _.categoryImg,
                    isShow: _.state === 1,
                    gameList: [],
                    gameType: _.categoryCode.toLocaleLowerCase() === "popular" ? "clicksTopList" : _.categoryCode.toLocaleLowerCase(),
                    title: p("code" + _.typeNameCode),
                    showTitle: p("code" + _.typeNameCode + _.categoryCode)
                })
            }
            )
        }
        ;
        return (async () => {
            await H(),
            await n()
        }
        )(),
        ge(async () => {
            const _ = await ye(Te({
                pageNo: 1,
                pageSize: 5
            }));
            _ && (B.value = _.data.list)
        }
        ),
        (_, $) => {
            const A = ee("svg-icon")
              , Oe = ee("NavBar")
              , Be = ee("van-dialog");
            return s(),
            a("div", la, [S(Oe, {
                list: ""
            }, {
                left: z( () => [e("img", {
                    style: {
                        height: "40px"
                    },
                    src: t(f),
                    alt: ""
                }, null, 8, ra)]),
                right: z( () => [e("div", ca, [t(I).apk.value != t(Ie).FullApk ? (s(),
                te(A, {
                    key: 0,
                    onClick: _e(t(c), ["stop"]),
                    name: "down",
                    class: "home_down"
                }, null, 8, ["onClick"])) : o("v-if", !0), S(A, {
                    onClick: C,
                    name: "server"
                })])]),
                _: 1
            }), o(" 未登录提示 "), e("div", ua, [o(" 头部轮播图 "), S(dt), o(" 滚动通知栏 "), S(Qe, {
                key: "home",
                isHome: !0
            }), o(" 游戏栏 "), S(Ct, {
                onTabChange: d,
                ref_key: "tabsRef",
                ref: q,
                "tab-list": j,
                "current-menu": b.value,
                "onUpdate:currentMenu": $[0] || ($[0] = O => b.value = O)
            }, null, 8, ["tab-list", "current-menu"]), x(S(Ve, {
                key: "slots"
            }, null, 512), [[de, j[b.value].type === "slot"]]), x(S(na, {
                key: "video"
            }, null, 512), [[de, j[b.value].type === "video"]]), da, o(' <GameItem type="2" :game-type="3" :game-item="test" /> '), x(e("div", null, [(s(!0),
            a(G, null, W(u, O => (s(),
            a("div", {
                key: O.gameType + b.value
            }, [x((s(),
            te(Vt, {
                onGoAll: U,
                title: O.showTitle,
                "game-type": O.gameType,
                "game-list": O.gameList,
                key: O.gameType,
                "is-all": Y(O.gameType),
                "is-show-more": b.value !== 0,
                currentMenuType: b.value,
                isShowBtn: D(O)
            }, null, 8, ["title", "game-type", "game-list", "is-all", "is-show-more", "currentMenuType", "isShowBtn"])), [[de, re(O)]])]))), 128))], 512), [[de, !["slot", "video"].includes(j[b.value].type)]]), o(" 热门、彩票、游戏选项卡 "), o(" 中奖信息 "), S(is), o(" 今日盈利排行榜 "), S(hs), o(" 说明 "), S(Xs), o(" 长龙"), o(" <ChangLong /> "), o("下载PWA应用"), o(" 邀请转盘 "), o(" <InviteTurntable /> "), S(ft), S(St), o(`			<van-popup v-model:show="store.prompt" round :confirm-button-text="$t('confirm')">`), o('				<div class="TimeLeft__C-PreSale">'), o(`					<div class="TimeLeft__C-PreSale-head">{{ $t('prompt') }}</div>`), o('					<div class="TimeLeft__C-PreSale-body">'), o('						<div v-html="promptContent"></div>'), o("					</div>"), o('					<div class="TimeLeft__C-PreSale-foot">'), o(`						<div class="TimeLeft__C-PreSale-foot-btn" @click="closePrompt()">{{ $t('winTrxClose') }}</div>`), o("					</div>"), o("				</div>"), o("			</van-popup>"), S(Be, {
                class: "prompt-dialog",
                show: t(r).prompt,
                "onUpdate:show": $[2] || ($[2] = O => t(r).prompt = O),
                showConfirmButton: !1
            }, {
                default: z( () => [e("div", pa, v(t(k).title), 1), e("div", {
                    class: "promptContent",
                    innerHTML: t(k).siteMessage
                }, null, 8, ga), e("div", {
                    class: "promptBtn",
                    onClick: $[1] || ($[1] = (...O) => t(y) && t(y)(...O))
                }, v(_.$t("confirm")), 1)]),
                _: 1
            }, 8, ["show"]), S(it, {
                show: t(r).laundry,
                "onUpdate:show": $[3] || ($[3] = O => t(r).laundry = O),
                onConfirm: Z,
                "show-cancel-btn": !1,
                confirmText: "OK",
                title: _.$t("congratulations")
            }, {
                content: z( () => [e("div", ma, [e("div", _a, v(_.$t("getSuper")), 1), e("div", va, v(_.$t("getRewards")), 1)])]),
                _: 1
            }, 8, ["show", "title"])])])
        }
    }
});
const ha = E(ya, [["__scopeId", "data-v-6c4ce891"], ["__file", "/usr/local/jenkins-prod/workspace/ar031-india-in999/src/views/home/other/electronic.vue"]])
  , ka = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ha
}, Symbol.toStringTag, {
    value: "Module"
}));
export {it as D, Qe as N, ka as e};
