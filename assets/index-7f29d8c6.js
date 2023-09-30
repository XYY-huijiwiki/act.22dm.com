import {
  r as e,
  _ as a,
  d as s,
  G as l,
  o as i,
  c as o,
  a as t,
  F as d,
  b as n,
  g as c,
  n as r,
  w as u,
  v as m,
  e as p,
  f as v,
  T as g,
  u as f,
  h,
  i as b,
  l as w,
  A as y,
  t as k,
  p as C,
  q as x,
  H as L,
  I as _,
  J as M,
  s as U,
  x as A,
} from "./index-78c5a934.js";
import { w as D } from "./wxjssdk-b7b46232.js";
import { T as I, I as S } from "./index-1feb581e.js";
let B = "/h5/activity";
const T = s({
    name: "drift-bottle",
    components: { Textarea: I, Input: S },
    setup(a, s) {
      var l, i;
      let o = new D({});
      f();
      const t = h(),
        d = b({
          loading: !1,
          volume: !1,
          award: !1,
          awardDetail: null,
          dialogs: "",
          alert: "",
          wishTreeList: [
            { id: 4, color: "red", type: "ing" },
            { id: 5, color: "yellow", type: "success" },
            { id: 3, color: "red", type: "ing" },
            { id: 6, color: "yellow", type: "success" },
            { id: 7, color: "yellow", type: "success" },
            { id: 2, color: "blue", type: "finish" },
            { id: 8, color: "yellow", type: "success" },
            { id: 1, color: "blue", type: "finish" },
            { id: 9, color: "yellow", type: "success" },
            { id: 10, color: "yellow", type: "success" },
            { id: 11, color: "yellow", type: "success" },
            { id: 12, color: "yellow", type: "success" },
            { id: 13, color: "yellow", type: "success" },
            { id: 14, color: "empty", type: "empty" },
            { id: 15, color: "empty", type: "empty" },
          ],
          recordList: [],
          detail: { id: 5, color: "yellow", type: "success" },
          form: {
            content: "",
            name: "18122801918",
            phone: "18122801918",
            address: "18122801918",
          },
          userInfo: (null == (l = t.params) ? void 0 : l.userInfo) ?? {},
          audioList: [
            { name: "bgm", src: "/aliyuncs/h5/wish/bgm1.mp3", loop: !0 },
          ],
        });
      let n = (null == (i = d.userInfo) ? void 0 : i.unionid) ?? "",
        c = "wishTree",
        r = 3;
      const u = (e) => {
          if ("award" == e) {
            if (d.awardDetail) return void (d.alert = "你已填写过信息");
          } else d.dialogs = e;
        },
        m = () => {
          var a;
          ((a = { ownerUnionid: n, activityKey: c, periodNum: r }),
          e({
            url: B + `/wish-tree/list?ownerUnionid=${a.ownerUnionid}`,
            method: "post",
            data: a,
          })).then(({ code: e, data: a }) => {
            console.log("getWishList", a),
              0 === e && ((r = a.periodNum), (c = a.activityKey));
          });
        },
        p = () => {
          var a;
          ((a = { ownerUnionid: n }),
          e({
            url: B + "/wish-tree/records?ownerUnionid=" + a.ownerUnionid,
            method: "post",
            data: a,
          })).then(({ code: e, data: a }) => {
            console.log("getWishRecord", a),
              0 === e &&
                ((d.recordList = a.wishTreeList.filter((e) => {
                  if (
                    2 == e.wishType &&
                    (0 == e.wishStatus || 3 == e.wishStatus)
                  )
                    return e;
                })),
                (d.award = a.wishTreeList.some(
                  (e) => e.periodNum == r - 1 && 3 == e.wishStatus
                )),
                d.award &&
                  _({ unionid: n, activityKey: c, periodNum: 1 }).then((e) => {
                    var a;
                    console.log("getRewardDetail", e.data),
                      (null == (a = e.data) ? void 0 : a.name) &&
                        (d.awardDetail = e.data);
                  }));
          });
        },
        v = (e, a = !1) => {
          try {
            if ((a && ((d.volume = !d.volume), d.volume || y()), d.volume)) {
              let a = document.getElementById("audio-item-" + e);
              a.paused && a.play();
            }
          } catch (s) {
            console.log("onPlayAudio", s);
          }
        };
      return (
        w(() => {
          var e, a;
          if ((m(), p(), null == (e = t.query) ? void 0 : e.type)) {
            u(["", "record", "letter", "card-theme", "rule"][1 * t.query.type]);
          }
          let s = location.origin + t.path,
            l = (null == (a = t.meta) ? void 0 : a.imgUrl) ?? "";
          o.ready(() => {
            var e, a;
            v("bgm", !0),
              o.updateShareData({
                title: (null == (e = t.meta) ? void 0 : e.title) ?? "",
                desc: (null == (a = t.meta) ? void 0 : a.desc) ?? "",
                link: s,
                imgUrl: l,
              }),
              document.addEventListener("visibilitychange", (e) => {
                document.hidden ? y() : d.volume && v("bgm");
              });
          });
        }),
        {
          ...k(d),
          onStarDetail: (e) => {
            let { id: a } = e;
            switch (a) {
              case 1:
                d.dialogs = "card-xi";
                break;
              case 2:
                d.dialogs = "card-mei";
                break;
              case 3:
                d.dialogs = "card-nuan";
                break;
              case 4:
                d.dialogs = "card-lan";
                break;
              case 14:
              case 15:
                d.dialogs = "letter";
                break;
              default:
                (d.detail = e), (d.dialogs = "success");
            }
            console.log("onStarDetail", e);
          },
          onBtn: u,
          onWishSubmit: () => {
            if (d.loading) return;
            if (d.recordList.filter((e) => e.periodNum == r).length < 1) {
              let s = d.form.content;
              if (L(s)) {
                console.log("onWishSubmit", s),
                  (d.loading = !0),
                  ((a = { periodNum: r, ownerUnionid: n, content: s }),
                  e({ url: B + "/wish-tree/submit", method: "post", data: a }))
                    .then(({ code: e, data: a }) => {
                      console.log("wishSubmit", a),
                        0 === e &&
                          ((d.dialogs = ""),
                          (d.form.content = ""),
                          (d.alert = "submit-success"),
                          p());
                    })
                    .catch((e) => {
                      d.alert = "submit-0";
                    })
                    .finally(() => {
                      d.loading = !1;
                    });
              } else d.alert = "submit-empty";
            } else d.alert = "submit-0";
            var a;
          },
          onCardContentLink: (e = "") => {
            "letter" == e && (d.dialogs = "card-theme"),
              "card-xi" == d.dialogs
                ? (location.href =
                    "https://mp.weixin.qq.com/s?__biz=MjM5MDAxMzI0MA==&mid=2649622435&idx=1&sn=675995ccff783286d4efc629be6706a1&chksm=be51e5f489266ce249529aa7449cb0f490dc81f5b3b044a19865313793acf1c4a3e1c19b0514#rd")
                : "card-fei" == d.dialogs
                ? (location.href =
                    "https://mp.weixin.qq.com/s?__biz=MjM5MDAxMzI0MA==&mid=2649612015&idx=1&sn=8dff45a3261c9cbd4c8aa9a2046a648b&chksm=be523cb88925b5ae3ed8079b78d277ba3304b8fbac7e5bc699af38c26724753fe9e55eecfc33#rd")
                : "card-mei" == d.dialogs
                ? (d.alert = "shop")
                : "card-lan" == d.dialogs &&
                  (location.href =
                    "https://mp.weixin.qq.com/s?__biz=MjM5MDAxMzI0MA==&mid=2649613789&idx=1&sn=dd59068449e6fece5dc1c86d9463a8de&chksm=be52078a89258e9cc89e6cf577d29ec44b6afa06073e698bf9b00d7f347c019060d0e10cdbe6#rd");
          },
          onPlayAudio: v,
          submitAward: () => {
            let { name: e, phone: a, address: s } = d.form;
            console.log("submitAward", e, a, s),
              e && a && s
                ? 11 == a.length
                  ? M({
                      activityKey: "bottleReward",
                      periodNum: r - 1,
                      ownerUnionid: n,
                      address: s,
                      name: e,
                      phone: a,
                      extra: { activityKey: c },
                    }).then(() => {
                      (d.alert = "提交成功"),
                        (d.dialogs = ""),
                        (d.awardDetail = { address: s, name: e, phone: a });
                    })
                  : (d.alert = "请填写11位手机号码")
                : (d.alert = "请输入正确的信息");
          },
        }
      );
    },
  }),
  q = (e) => (U("data-v-b4028834"), (e = e()), A(), e),
  j = { id: "page-wish" },
  z = { class: "wish-btn" },
  N = { class: "tree-main" },
  K = ["onClick"],
  W = q(() => t("span", { class: "tree-role" }, null, -1)),
  P = { class: "page-dialogs" },
  R = { class: "letter-content" },
  E = { class: "letter-text" },
  F = { class: "rule-wrap" },
  G = q(() => t("div", { class: "title-rule" }, null, -1)),
  H = q(() => t("div", { class: "rule-tips" }, null, -1)),
  J = q(() => t("div", { class: "rule-content" }, null, -1)),
  O = { class: "card-ufo" },
  $ = [q(() => t("span", { class: "card-star" }, null, -1))],
  Q = { class: "card-flower" },
  V = { class: "success-wrap" },
  X = q(() => t("div", { class: "title-success" }, null, -1)),
  Y = { key: 0, class: "success-content" },
  Z = ["src"],
  ee = { class: "success-btn" },
  ae = { class: "record-wrap" },
  se = q(() => t("div", { class: "title-record" }, null, -1)),
  le = { class: "record-list" },
  ie = { class: "record-content" },
  oe = { class: "record-content-text" },
  te = { key: 0, class: "record-item" },
  de = [
    q(() => t("div", { class: "title-10" }, null, -1)),
    q(() =>
      t(
        "div",
        { class: "record-content" },
        [t("span", { class: "alert-empty" })],
        -1
      )
    ),
  ],
  ne = { class: "alert-main" },
  ce = { key: 0, class: "dialogs-award" },
  re = { id: "audio-list" },
  ue = ["id", "src", "loop"];
const me = a(T, [
  [
    "render",
    function (e, a, s, f, h, b) {
      const w = l("Textarea"),
        y = l("Input");
      return (
        i(),
        o("div", j, [
          t(
            "div",
            { class: r(["wish-tree", { filter: e.dialogs || e.alert }]) },
            [
              t("div", z, [
                t("span", {
                  class: "btn-record",
                  onClick: a[0] || (a[0] = (a) => e.onBtn("record")),
                }),
                t("span", {
                  class: "btn-wish",
                  onClick: a[1] || (a[1] = (a) => e.onBtn("letter")),
                }),
                t("span", {
                  class: "btn-theme",
                  onClick: a[2] || (a[2] = (a) => e.onBtn("card-theme")),
                }),
                t("span", {
                  class: "btn-rule",
                  onClick: a[3] || (a[3] = (a) => e.onBtn("rule")),
                }),
              ]),
              t("div", N, [
                (i(!0),
                o(
                  d,
                  null,
                  n(
                    e.wishTreeList,
                    (a, s) => (
                      i(),
                      o(
                        "span",
                        {
                          key: "star-" - s,
                          class: r(["star-" + a.color, "position-" + (s + 1)]),
                          onClick: (s) => e.onStarDetail(a),
                        },
                        null,
                        10,
                        K
                      )
                    )
                  ),
                  128
                )),
                W,
              ]),
              e.award
                ? (i(),
                  o("div", {
                    key: 0,
                    class: "tree-award",
                    onClick: a[4] || (a[4] = (a) => e.onBtn("award")),
                  }))
                : c("", !0),
              t(
                "div",
                {
                  class: r(["btn-music", { active: e.volume }]),
                  onClick: a[5] || (a[5] = (a) => e.onPlayAudio("bgm", !0)),
                },
                null,
                2
              ),
            ],
            2
          ),
          u(
            t(
              "div",
              P,
              [
                p(
                  g,
                  { name: "fade" },
                  {
                    default: v(() => [
                      "letter" == e.dialogs
                        ? (i(),
                          o(
                            "div",
                            {
                              key: 0,
                              class: "letter-wrap",
                              onClick:
                                a[10] ||
                                (a[10] = C((a) => (e.dialogs = ""), ["self"])),
                            },
                            [
                              t("div", R, [
                                t("span", {
                                  class: "letter-link",
                                  onClick:
                                    a[6] ||
                                    (a[6] = (a) =>
                                      e.onCardContentLink("letter")),
                                }),
                                t("div", E, [
                                  p(
                                    w,
                                    {
                                      value: e.form.content,
                                      "onUpdate:value":
                                        a[7] ||
                                        (a[7] = (a) => (e.form.content = a)),
                                      placeholder: "请输入心愿",
                                    },
                                    null,
                                    8,
                                    ["value"]
                                  ),
                                ]),
                                t("div", {
                                  class: "btn-submit",
                                  onClick:
                                    a[8] || (a[8] = (a) => e.onWishSubmit()),
                                }),
                              ]),
                              t("div", {
                                class: "btn-back",
                                onClick:
                                  a[9] || (a[9] = (a) => (e.dialogs = "")),
                              }),
                            ]
                          ))
                        : c("", !0),
                    ]),
                    _: 1,
                  }
                ),
                p(
                  g,
                  { name: "fade" },
                  {
                    default: v(() => [
                      "rule" == e.dialogs
                        ? (i(),
                          o(
                            "div",
                            {
                              key: 0,
                              class: "dialogs-rule",
                              onClick:
                                a[12] ||
                                (a[12] = C((a) => (e.dialogs = ""), ["self"])),
                            },
                            [
                              t("div", F, [
                                G,
                                H,
                                J,
                                t("div", {
                                  class: "btn-go",
                                  onClick:
                                    a[11] || (a[11] = (a) => e.onBtn("letter")),
                                }),
                              ]),
                            ]
                          ))
                        : c("", !0),
                    ]),
                    _: 1,
                  }
                ),
                p(
                  g,
                  { name: "fade" },
                  {
                    default: v(() => [
                      -1 !== e.dialogs.indexOf("card-")
                        ? (i(),
                          o(
                            "div",
                            {
                              key: 0,
                              class: "dialogs-card",
                              onClick:
                                a[16] ||
                                (a[16] = C((a) => (e.dialogs = ""), ["self"])),
                            },
                            [
                              u(t("div", O, $, 512), [
                                [m, "card-theme" !== e.dialogs],
                              ]),
                              u(t("div", Q, null, 512), [
                                [m, "card-theme" !== e.dialogs],
                              ]),
                              t(
                                "div",
                                { class: r(["card-content", e.dialogs]) },
                                [
                                  t("span", {
                                    class: "card-content-link",
                                    onClick:
                                      a[13] ||
                                      (a[13] = (a) => e.onCardContentLink()),
                                  }),
                                ],
                                2
                              ),
                              "card-theme" == e.dialogs
                                ? (i(),
                                  o("span", {
                                    key: 0,
                                    class: "btn-go",
                                    onClick:
                                      a[14] ||
                                      (a[14] = (a) => e.onBtn("letter")),
                                  }))
                                : (i(),
                                  o("span", {
                                    key: 1,
                                    class: "btn-close",
                                    onClick:
                                      a[15] ||
                                      (a[15] = (a) => (e.dialogs = "")),
                                  })),
                            ]
                          ))
                        : c("", !0),
                    ]),
                    _: 1,
                  }
                ),
                p(
                  g,
                  { name: "fade" },
                  {
                    default: v(() => [
                      "success" == e.dialogs
                        ? (i(),
                          o(
                            "div",
                            {
                              key: 0,
                              class: "dialogs-success",
                              onClick:
                                a[19] ||
                                (a[19] = C((a) => (e.dialogs = ""), ["self"])),
                            },
                            [
                              t("div", V, [
                                X,
                                e.detail
                                  ? (i(),
                                    o("div", Y, [
                                      t(
                                        "img",
                                        {
                                          src:
                                            "/aliyuncs/h5/wish/success/202309/" +
                                            e.detail.id +
                                            ".jpg",
                                          width: "550",
                                        },
                                        null,
                                        8,
                                        Z
                                      ),
                                    ]))
                                  : c("", !0),
                                t("div", ee, [
                                  t("span", {
                                    class: "btn-go",
                                    onClick:
                                      a[17] ||
                                      (a[17] = (a) => e.onBtn("letter")),
                                  }),
                                  t("span", {
                                    class: "btn-close",
                                    onClick:
                                      a[18] ||
                                      (a[18] = (a) => (e.dialogs = "")),
                                  }),
                                ]),
                              ]),
                            ]
                          ))
                        : c("", !0),
                    ]),
                    _: 1,
                  }
                ),
                p(
                  g,
                  { name: "fade" },
                  {
                    default: v(() => [
                      "record" == e.dialogs
                        ? (i(),
                          o(
                            "div",
                            {
                              key: 0,
                              class: "dialogs-record",
                              onClick:
                                a[21] ||
                                (a[21] = C((a) => (e.dialogs = ""), ["self"])),
                            },
                            [
                              t("div", ae, [
                                se,
                                t("div", le, [
                                  (i(!0),
                                  o(
                                    d,
                                    null,
                                    n(
                                      e.recordList,
                                      (e, a) => (
                                        i(),
                                        o(
                                          "div",
                                          {
                                            class: "record-item",
                                            key: "record-item-" + a,
                                          },
                                          [
                                            t(
                                              "div",
                                              {
                                                class: r(
                                                  "title-" + (e.periodNum + 7)
                                                ),
                                              },
                                              null,
                                              2
                                            ),
                                            t("div", ie, [
                                              t("span", oe, x(e.content), 1),
                                            ]),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  0 === e.recordList.length
                                    ? (i(), o("div", te, de))
                                    : c("", !0),
                                ]),
                                t("span", {
                                  class: "btn-close",
                                  onClick:
                                    a[20] || (a[20] = (a) => (e.dialogs = "")),
                                }),
                              ]),
                            ]
                          ))
                        : c("", !0),
                    ]),
                    _: 1,
                  }
                ),
                p(
                  g,
                  { name: "fade" },
                  {
                    default: v(() => [
                      u(
                        t(
                          "div",
                          {
                            class: "dialogs-alert",
                            onClick:
                              a[22] ||
                              (a[22] = () => {
                                "submit-success" == e.alert
                                  ? ((e.dialogs = ""), (e.alert = ""))
                                  : (e.alert = "");
                              }),
                          },
                          [
                            t("div", ne, [
                              t(
                                "span",
                                { class: r("alert-" + e.alert) },
                                null,
                                2
                              ),
                            ]),
                          ],
                          512
                        ),
                        [[m, e.alert]]
                      ),
                    ]),
                    _: 1,
                  }
                ),
                p(
                  g,
                  { name: "fade" },
                  {
                    default: v(() => [
                      "award" == e.dialogs
                        ? (i(),
                          o("div", ce, [
                            p(
                              y,
                              {
                                class: "award-name",
                                value: e.form.name,
                                "onUpdate:value":
                                  a[23] || (a[23] = (a) => (e.form.name = a)),
                              },
                              null,
                              8,
                              ["value"]
                            ),
                            p(
                              y,
                              {
                                class: "award-phone",
                                value: e.form.phone,
                                "onUpdate:value":
                                  a[24] || (a[24] = (a) => (e.form.phone = a)),
                              },
                              null,
                              8,
                              ["value"]
                            ),
                            p(
                              w,
                              {
                                class: "award-address",
                                value: e.form.address,
                                "onUpdate:value":
                                  a[25] ||
                                  (a[25] = (a) => (e.form.address = a)),
                              },
                              null,
                              8,
                              ["value"]
                            ),
                            t("span", {
                              class: "award-submit",
                              onClick:
                                a[26] || (a[26] = (a) => e.submitAward()),
                            }),
                            t("span", {
                              class: "award-close",
                              onClick:
                                a[27] || (a[27] = (a) => (e.dialogs = "")),
                            }),
                          ]))
                        : c("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ],
              512
            ),
            [[m, e.dialogs || e.alert]]
          ),
          u(
            t(
              "div",
              re,
              [
                (i(!0),
                o(
                  d,
                  null,
                  n(
                    e.audioList,
                    (e) => (
                      i(),
                      o(
                        "audio",
                        {
                          id: "audio-item-" + e.name,
                          key: "audio-item-" + e.name,
                          src: e.src,
                          loop: e.loop ?? !1,
                        },
                        null,
                        8,
                        ue
                      )
                    )
                  ),
                  128
                )),
              ],
              512
            ),
            [[m, !1]]
          ),
        ])
      );
    },
  ],
  ["__scopeId", "data-v-b4028834"],
]);
export { me as default };
