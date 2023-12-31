import {
  r as a,
  _ as e,
  d as t,
  i as l,
  t as s,
  G as n,
  o as i,
  K as o,
  f as d,
  L as r,
  a as c,
  c as p,
  F as h,
  b as u,
  g,
  w as f,
  v,
  e as k,
  T as m,
  u as y,
  h as C,
  l as x,
  D as w,
  M as b,
  n as S,
  p as I,
  N as L,
  s as z,
  x as D,
} from "./index-78c5a934.js";
import { w as H } from "./wxjssdk-b7b46232.js";
const _ = t({
    name: "lanuchWeapp",
    components: {},
    props: ["id", "appid", "path"],
    emits: [],
    setup(a, e) {
      const t = l({});
      return { ...s(t) };
    },
  }),
  M = c(
    "button",
    {
      style: {
        width: "100%",
        height: "100%",
        position: "absolute",
        lef: "0",
        top: "0",
        background: "none !imoprtant",
        opacity: "0",
        "z-index": "100",
      },
    },
    null,
    -1
  );
const q = t({
    name: "18th-h5",
    components: {
      LanuchWeapp: e(_, [
        [
          "render",
          function (a, e, t, l, s, c) {
            const p = n("wx-open-launch-weapp");
            return (
              i(),
              o(
                p,
                {
                  id: a.id,
                  appid: a.appid,
                  path: a.path,
                  style: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    lef: "0",
                    top: "0",
                    background: "none !imoprtant",
                    opacity: "0",
                    "z-index": "100",
                  },
                },
                {
                  default: d(() => [
                    (i(),
                    o(
                      r("script"),
                      { type: "text/wxtag-template" },
                      { default: d(() => [M]), _: 1 }
                    )),
                  ]),
                  _: 1,
                },
                8,
                ["id", "appid", "path"]
              )
            );
          },
        ],
      ]),
    },
    setup(e, t) {
      var n, i;
      y();
      const o = C();
      let d = new H({}),
        r = "/aliyuncs";
      const c = l({
        loading: !1,
        alert: "",
        headSelect: "",
        signToday: !0,
        totalCheckinCount: 0,
        userInfo: (null == (n = o.params) ? void 0 : n.userInfo) ?? {},
        dailyCheckinList: [],
        starStatus: [0, 0, 0, 0, 0, 0, 0, 0],
        arrowClick: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        onUpdateImageCount: 0,
        currHead: "",
        headList: [
          r + "/h5/18th-h5/head/5.png",
          r + "/h5/18th-h5/head/2.png",
          r + "/h5/18th-h5/head/1.png",
          r + "/h5/18th-h5/head/3.png",
          r + "/h5/18th-h5/head/4.png",
          r + "/h5/18th-h5/head/6.png",
          r + "/h5/18th-h5/head/8.png",
          r + "/h5/18th-h5/head/9.png",
          r + "/h5/18th-h5/head/7.png",
          r + "/h5/18th-h5/head/0-1.png",
          r + "/h5/18th-h5/head/0-2.png",
        ],
        prizeIndex: 5,
        allSign: !1,
      });
      let p = (null == (i = c.userInfo) ? void 0 : i.unionid) ?? "";
      console.log("userInfo", c.userInfo);
      const h = () => {
          var a = document.querySelectorAll(
            ".road-left,.road-right,.road-title"
          );
          a.length &&
            a.forEach((a) => {
              let e = a.getBoundingClientRect();
              (e.top < 0 || e.top < window.innerHeight - 50) &&
                (a.classList.contains("active") || a.classList.add("active"));
            });
        },
        u = (e = !1) => {
          var t;
          ((t = { unionid: p }),
          a({
            url: "/h5/activity/checkin-list",
            method: "get",
            params: t,
          })).then(({ code: a, data: e }) => {
            (c.signToday = !1),
              0 === a &&
                (console.log("getCheckinList", e),
                (c.dailyCheckinList = e.dailyCheckinList ?? []),
                (c.totalCheckinCount = e.totalCheckinCount ?? 0),
                c.dailyCheckinList.length >= 7 && (c.allSign = !0),
                (c.headSelect = !0));
          });
        };
      return (
        x(() => {
          var a;
          let e = localStorage.getItem("18th-h5-prizeIndex");
          null == e &&
            ((e = w(0, 8)), localStorage.setItem("18th-h5-prizeIndex", e)),
            (c.prizeIndex = 1 * e),
            h(),
            u();
          let t = location.origin + o.path,
            l = (null == (a = o.meta) ? void 0 : a.imgUrl) ?? "";
          d.ready(() => {
            var a, e;
            d.updateShareData({
              title: (null == (a = o.meta) ? void 0 : a.title) ?? "",
              desc: (null == (e = o.meta) ? void 0 : e.desc) ?? "",
              link: t,
              imgUrl: l,
            });
          });
        }),
        {
          ...s(c),
          onSign: () => {},
          onDetail: (a) => {
            if (a <= 1) {
              let e = [
                "/drift-bottle?unionid=" + p,
                "https://mp.weixin.qq.com/s/17Z_X-b1EyPvL49SQtLQgA",
              ];
              window.open(e[a]);
            } else
              2 == a
                ? window.open(
                    "https://mp.weixin.qq.com/s?__biz=MjM5MDAxMzI0MA==&mid=2649624064&idx=1&sn=afa3bf17cc27f276f74e1751975f9285&chksm=be51ec578926654105b96b4fb70a730051405478b9c99036516af557bbd7b34b85a4b83d46d8#rd"
                  )
                : (c.alert = a);
          },
          onScroll: h,
          onSelectHead: (a, e) => {
            var t;
            if (c.loading || c.dailyCheckinList.length < 7) return;
            if (c.onUpdateImageCount > 3) return void alert("请勿频繁操作");
            (c.loading = !0), (c.currHead = a);
            let l = a,
              s = "路人羊",
              n = r + "/ixyy/my/8f166f8c-6c9c-44c6-a92a-538d556706a5.png";
            [6, 7, 8, 10].includes(e) &&
              ((s = "小狼兵"),
              (n = r + "/ixyy/my/fa16fd5a-5a72-4116-abdc-2671ca060ba8.png")),
              (null == (t = c.userInfo) ? void 0 : t.extra)
                ? (c.userInfo.extra.ixyyHead = l)
                : (c.userInfo.extra = { ixyyHead: l }),
              (c.userInfo.extra.ixyyName = s),
              (c.userInfo.extra.ixyyCard = n),
              L({ unionid: p, userInfo: c.userInfo })
                .then(({ code: a, data: e }) => {
                  0 === a &&
                    (console.log("onSelectHead success", e),
                    c.onUpdateImageCount++,
                    (c.headSelect = ""),
                    (c.alert = "select"));
                })
                .finally(() => {
                  c.loading = !1;
                });
          },
          onOpenHead: () => {
            c.dailyCheckinList.length >= 7 && (c.headSelect = !0);
          },
        }
      );
    },
  }),
  U = (a) => (z("data-v-a1092f38"), (a = a()), D(), a),
  j = ["onscroll"],
  A = { class: "page-main" },
  T = { id: "title" },
  W = { class: "title-wrap" },
  E = U(() => c("span", { class: "title-icon" }, null, -1)),
  N = { key: 0, class: "arrow" },
  O = b(
    '<div id="rule" data-v-a1092f38><div class="rule-text" data-v-a1092f38><span class="rule-text-1" data-v-a1092f38></span><span class="rule-text-2" data-v-a1092f38></span><span class="rule-text-3" data-v-a1092f38></span><span class="rule-text-4" data-v-a1092f38></span><span class="rule-text-5" data-v-a1092f38></span><span class="rule-text-6" data-v-a1092f38></span></div></div>',
    1
  ),
  Q = { id: "road" },
  B = U(() => c("div", { class: "road-bg" }, null, -1)),
  F = { class: "road-item road-left road-1" },
  G = ["onClick"],
  K = { class: "road-text" },
  P = U(() => c("i", { class: "count-t1" }, null, -1)),
  R = U(() => c("i", { class: "count-t2" }, null, -1)),
  X = { class: "arrow" },
  Z = { class: "arrow" },
  J = { class: "arrow" },
  V = { class: "arrow" },
  Y = U(() => c("div", { class: "road-item road-center road-8" }, null, -1)),
  $ = { class: "road-item road-center road-9" },
  aa = U(() => c("div", { class: "road-item road-center road-11" }, null, -1)),
  ea = { class: "road-item road-center road-10" },
  ta = U(() => c("span", { class: "road-title rode-10-1" }, null, -1)),
  la = U(() => c("span", { class: "rode-10-2" }, null, -1)),
  sa = U(() => c("div", { class: "road-item road-center road-12" }, null, -1)),
  na = { class: "page-dialogs" },
  ia = { key: 0, class: "alert-main" },
  oa = { key: 1, class: "shop-ercode" },
  da = { class: "head-main" },
  ra = U(() => c("span", { class: "head-title" }, null, -1)),
  ca = { class: "head-content" },
  pa = ["onClick"];
const ha = e(q, [
  [
    "render",
    function (a, e, t, l, s, o) {
      const r = n("LanuchWeapp");
      return (
        i(),
        p(
          "div",
          { id: "page-18th-h5", onscroll: a.onScroll },
          [
            c("div", A, [
              c("div", T, [
                c("div", W, [
                  E,
                  c("span", {
                    class: "title-text",
                    onClick: e[0] || (e[0] = (e) => a.onOpenHead()),
                  }),
                ]),
                c(
                  "div",
                  {
                    class: "title-star",
                    onClick: e[1] || (e[1] = (e) => a.onSign()),
                  },
                  [
                    (i(),
                    p(
                      h,
                      null,
                      u(7, (e) =>
                        c(
                          "span",
                          {
                            key: "item-star-" + e,
                            class: S([
                              e % 2 == 0 ? "star-2" : "star-1",
                              { active: a.dailyCheckinList.length >= e },
                            ]),
                          },
                          null,
                          2
                        )
                      ),
                      64
                    )),
                    a.signToday ? g("", !0) : (i(), p("span", N)),
                  ]
                ),
              ]),
              O,
              c("div", Q, [
                B,
                c("div", F, [
                  c(
                    "div",
                    {
                      class: "road-star-wrap",
                      onClick: e[2] || (e[2] = (e) => (a.arrowClick[0] = 1)),
                    },
                    [
                      (i(),
                      p(
                        h,
                        null,
                        u(7, (e, t) =>
                          c(
                            "span",
                            {
                              class: S([
                                "road-star",
                                ["star-" + e, { active: a.starStatus[t] }],
                              ]),
                              key: "road-3-star-" + e,
                              onClick: (e) =>
                                (a.starStatus[t] = !a.starStatus[t]),
                            },
                            null,
                            10,
                            G
                          )
                        ),
                        64
                      )),
                    ]
                  ),
                  c("span", K, [
                    P,
                    (i(!0),
                    p(
                      h,
                      null,
                      u(
                        a.totalCheckinCount + "",
                        (a, e) => (
                          i(),
                          p(
                            "i",
                            {
                              class: S(["count-0", "count-" + a]),
                              key: "count-" + e,
                            },
                            null,
                            2
                          )
                        )
                      ),
                      128
                    )),
                    R,
                  ]),
                  c("span", {
                    class: "road-tips",
                    onClick:
                      e[3] ||
                      (e[3] = () => {
                        a.onDetail("wait2"), (a.arrowClick[1] = 1);
                      }),
                  }),
                  f(c("span", X, null, 512), [[v, !a.arrowClick[0]]]),
                ]),
                c(
                  "div",
                  {
                    class: "road-item road-right road-2",
                    onClick:
                      e[4] ||
                      (e[4] = (e) => {
                        a.onDetail(0), (a.arrowClick[2] = 1);
                      }),
                  },
                  [f(c("span", Z, null, 512), [[v, !a.arrowClick[2]]])]
                ),
                c(
                  "div",
                  {
                    class: "road-item road-left road-3",
                    onClick:
                      e[5] ||
                      (e[5] = (e) => {
                        a.onDetail(1), (a.arrowClick[3] = 1);
                      }),
                  },
                  [f(c("span", J, null, 512), [[v, !a.arrowClick[3]]])]
                ),
                c("div", {
                  class: "road-item road-right road-4",
                  onClick:
                    e[6] ||
                    (e[6] = (e) => {
                      a.onDetail("wait3"), (a.arrowClick[4] = 1);
                    }),
                }),
                c("div", {
                  class: "road-item road-left road-5",
                  onClick:
                    e[7] ||
                    (e[7] = (e) => {
                      a.onDetail("wait2"), (a.arrowClick[5] = 1);
                    }),
                }),
                c(
                  "div",
                  {
                    class: "road-item road-right road-6",
                    onClick:
                      e[8] ||
                      (e[8] = (e) => {
                        a.onDetail("shop"), (a.arrowClick[6] = 1);
                      }),
                  },
                  [f(c("span", V, null, 512), [[v, !a.arrowClick[6]]])]
                ),
                c("div", {
                  class: "road-item road-left road-7",
                  onClick:
                    e[9] ||
                    (e[9] = (e) => {
                      a.onDetail("wait3"), (a.arrowClick[7] = 1);
                    }),
                }),
                Y,
                c("div", $, [
                  k(r, {
                    id: "lanuch-btn-1",
                    appid: "wx1dc98a1ba3be1737",
                    path: "pages/ixyy/yyyz/index",
                  }),
                ]),
                aa,
                c("div", ea, [
                  k(r, {
                    id: "lanuch-btn-2",
                    appid: "wx1dc98a1ba3be1737",
                    path: "pages/ixyy/yyyz/index",
                  }),
                  ta,
                  la,
                ]),
                sa,
              ]),
            ]),
            f(
              c(
                "div",
                na,
                [
                  k(
                    m,
                    { name: "fade" },
                    {
                      default: d(() => [
                        a.alert
                          ? (i(),
                            p(
                              "div",
                              {
                                key: 0,
                                class: "page-dialogs dialogs-alert",
                                onClick:
                                  e[11] ||
                                  (e[11] = I((e) => (a.alert = ""), ["self"])),
                              },
                              [
                                "shop" != a.alert
                                  ? (i(),
                                    p("div", ia, [
                                      c(
                                        "span",
                                        {
                                          class: S(a.alert),
                                          onClick:
                                            e[10] ||
                                            (e[10] = () => {
                                              "finish-1" == a.alert &&
                                                (a.headSelect = !0);
                                            }),
                                        },
                                        null,
                                        2
                                      ),
                                    ]))
                                  : (i(), p("div", oa)),
                              ]
                            ))
                          : g("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                  k(
                    m,
                    { name: "fade" },
                    {
                      default: d(() => [
                        a.headSelect
                          ? (i(),
                            p(
                              "div",
                              {
                                key: 0,
                                class: "page-dialogs dialogs-head",
                                onClick:
                                  e[12] ||
                                  (e[12] = I(
                                    (e) => (a.headSelect = ""),
                                    ["self"]
                                  )),
                              },
                              [
                                c("div", da, [
                                  ra,
                                  c("div", ca, [
                                    (i(!0),
                                    p(
                                      h,
                                      null,
                                      u(a.headList, (e, t) =>
                                        f(
                                          (i(),
                                          p(
                                            "span",
                                            {
                                              class: S([
                                                "head-item",
                                                ["head-item-" + (t + 1)],
                                              ]),
                                              key: "head-item-" + t,
                                              onClick: (l) =>
                                                a.onSelectHead(e, t),
                                            },
                                            null,
                                            10,
                                            pa
                                          )),
                                          [
                                            [
                                              v,
                                              a.allSign ||
                                                t > 8 ||
                                                t == a.prizeIndex,
                                            ],
                                          ]
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                ]),
                              ]
                            ))
                          : g("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ],
                512
              ),
              [[v, a.alert || a.headSelect || a.shop]]
            ),
          ],
          8,
          j
        )
      );
    },
  ],
  ["__scopeId", "data-v-a1092f38"],
]);
export { ha as default };
