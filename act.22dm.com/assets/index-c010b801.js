import {
  r as e,
  _ as i,
  d as o,
  o as l,
  c as t,
  a,
  F as s,
  b as n,
  w as r,
  v as c,
  e as d,
  f as p,
  T as u,
  g as v,
  u as h,
  h as k,
  i as g,
  j as w,
  k as m,
  l as f,
  m as y,
  t as D,
  n as L,
  p as x,
  q as I,
  s as C,
  x as T,
} from "./index-78c5a934.js";
import { w as M } from "./wxjssdk-b7b46232.js";
import { g as b } from "./sign-d2ec0447.js";
let P, _;
const j = o({
    name: "cicf",
    components: {},
    setup(i, o) {
      var l, t;
      let a = new M({});
      h();
      const s = k(),
        n = g({
          openness: !0,
          userInfo: (null == (l = s.params) ? void 0 : l.userInfo) ?? {},
          loading: !1,
          dialogs: "",
          alert: "",
          k: "",
          list1: [[], [], [], []],
          list2: [[], [], [], []],
          photoDate: 1,
          showMore: !1,
          previewType: 1,
          previewList: [],
          previewIndex: 0,
          loupe: !1,
          likeCount: 0,
          currDate: 1,
          recordList: [],
          likeToday: 0,
          isMiniProgram: w(),
        });
      _ = (null == (t = n.userInfo) ? void 0 : t.unionid) ?? "";
      const r = m(() => {
          var e;
          let i = [];
          return (
            (null == (e = n.list2) ? void 0 : e.length) &&
              (i = n.list2[n.photoDate - 1]),
            console.log("photoList", i),
            i
          );
        }),
        c = (i) => {
          var o;
          ((o = { activityKey: P, type: i }),
          e({ url: "/cgame/photo/list", method: "get", params: o })).then(
            ({ code: e, data: o }) => {
              if (0 === e)
                if (1 == i) {
                  let e = [[], [], [], []];
                  o.forEach((i) => {
                    e[i.area - 1].push(i);
                  }),
                    (n.list1 = e),
                    console.log("list1", e);
                } else if (2 == i) {
                  let e = [[], [], [], []];
                  o.forEach((i) => {
                    let o = 0;
                    -1 !== i.photoDate.indexOf("2023-09-30")
                      ? (o = 0)
                      : -1 !== i.photoDate.indexOf("2023-10-01")
                      ? (o = 1)
                      : -1 !== i.photoDate.indexOf("2023-10-02")
                      ? (o = 2)
                      : -1 !== i.photoDate.indexOf("2023-10-03") && (o = 3),
                      e[o].push(i);
                  }),
                    (n.list2 = e),
                    console.log("list2", e);
                }
            }
          );
        },
        d = () => {
          var i;
          ((i = { activityKey: P, unionid: _ }),
          e({ url: "/cgame/records", method: "get", params: i })).then(
            ({ code: e, data: i }) => {
              0 === e &&
                ((n.recordList = i),
                i.forEach((e) => {
                  p(e.addTime) == n.currDate && n.likeToday++;
                })),
                console.log("getRecordList", i, n.likeToday);
            }
          );
        },
        p = (e = null) => {
          let i = new Date().getDate();
          e && (i = new Date(e).getDate());
          let o = 1;
          switch (i) {
            case 30:
              o = 1;
              break;
            case 1:
              o = 2;
              break;
            case 2:
              o = 3;
              break;
            case 3:
              o = 4;
          }
          return (n.currDate = o), o;
        };
      return (
        f(() => {
          var e, i;
          if (n.openness) {
            P =
              (null == (e = s.meta) ? void 0 : e.activityKey) ??
              "AnimeConvention";
            let o = location.origin + s.path,
              l = (null == (i = s.meta) ? void 0 : i.imgUrl) ?? "";
            (n.photoDate = p()),
              (n.currDate = p()),
              y({ activityKey: P }).then(({ code: e, data: i }) => {
                console.log("getGameInit", i), 0 === e && (n.k = i.k);
              }),
              d(),
              c(1),
              c(2),
              a.ready(() => {
                var e, i;
                a.updateShareData({
                  title: (null == (e = s.meta) ? void 0 : e.title) ?? "",
                  desc: (null == (i = s.meta) ? void 0 : i.desc) ?? "",
                  link: o,
                  imgUrl: l,
                });
              });
          } else
            location.href =
              "https://mp.weixin.qq.com/s?__biz=MjM5MDAxMzI0MA==&mid=2649625586&idx=1&sn=7263abedf0d0ffab83e77f195eaae841&chksm=be51f1a5892678b39f61e5111ca4e9c0f0056250e9d978d36fc9ac36d10ddc745d585ff8caf4#rd";
        }),
        {
          ...D(n),
          onPreviewAreaPhoto: (e) => {
            n.list1[e].length &&
              (console.log(n.list1[e], 0),
              (n.previewList = n.list1[e]),
              (n.previewIndex = 0),
              (n.previewType = 1),
              setTimeout(() => {
                n.dialogs = "photo";
              }, 0));
          },
          onPreviewGroupPhoto: (e = 0) => {
            (n.previewList = n.list2[n.photoDate - 1]),
              (n.previewIndex = e),
              (n.previewType = 2),
              setTimeout(() => {
                n.dialogs = "photo";
              }, 0);
          },
          photoList: r,
          onLike: () => {
            var i;
            if (!n.loading)
              if (n.likeToday < 3) {
                if (p() == n.photoDate) {
                  n.loading = !0;
                  let o = n.previewList[n.previewIndex],
                    { k: l } = n,
                    t = b({ k: l, id: o.id, unionid: _ });
                  ((i = {
                    activityKey: P,
                    unionid: _,
                    otherId: o.id,
                    k: l,
                    s: t,
                  }),
                  e({ url: "/cgame/like", method: "post", data: i }))
                    .then(({ code: e, data: i }) => {
                      0 === e &&
                        (n.recordList.push({ item: o, otherId: o.id }),
                        n.likeToday++);
                    })
                    .finally(() => {
                      n.loading = !1;
                    });
                }
              } else n.alert = "每天最多点赞3次";
          },
          isLike: (e) => n.recordList.some((i) => i.otherId == e.id),
          onLoupe: () => {
            n.loupe = !0;
          },
          onSelectDate: (e) => {
            e <= n.currDate
              ? n.photoDate != e && ((n.showMore = !1), (n.photoDate = e))
              : (n.alert = "暂未开放");
          },
          getCurrDate: p,
          onGetRecordList: d,
          onShowMore: () => {
            (n.showMore = !0),
              setTimeout(() => {
                let e =
                  null == document
                    ? void 0
                    : document.getElementById("photo-list");
                e && e.scrollTo(0, 200);
              }, 0);
          },
        }
      );
    },
  }),
  A = (e) => (C("data-v-cc39e630"), (e = e()), T(), e),
  K = { key: 0, id: "page-cicf" },
  S = { id: "page-main" },
  U = { class: "icon-list" },
  E = ["onClick"],
  G = { class: "date-list" },
  O = ["onClick"],
  $ = { id: "photo-list" },
  q = ["onClick"],
  z = ["src"],
  R = A(() => a("i", { class: "icon-like" }, null, -1)),
  B = A(() => a("div", { class: "icon-word-1" }, null, -1)),
  F = A(() => a("div", { class: "icon-title-1" }, null, -1)),
  H = A(() => a("div", { class: "icon-word-2" }, null, -1)),
  J = A(() => a("div", { class: "icon-word-3" }, null, -1)),
  N = { id: "page-dialogs" },
  Q = { class: "icon-alert" },
  V = { class: "photo-area" },
  W = ["src"],
  X = A(() => a("i", { class: "icon-photo-mask" }, null, -1)),
  Y = { class: "icon-like-big icon-like-big-1" },
  Z = ["src"],
  ee = { class: "icon-tips" };
const ie = i(j, [
  [
    "render",
    function (e, i, o, h, k, g) {
      return e.openness
        ? (l(),
          t("div", K, [
            a("div", S, [
              a("div", U, [
                (l(),
                t(
                  s,
                  null,
                  n(4, (i, o) =>
                    a(
                      "i",
                      {
                        key: "icon-" + i,
                        class: L("icon-" + i),
                        onClick: (i) => e.onPreviewAreaPhoto(o),
                      },
                      null,
                      10,
                      E
                    )
                  ),
                  64
                )),
              ]),
              a("div", G, [
                (l(),
                t(
                  s,
                  null,
                  n(4, (i, o) =>
                    a(
                      "i",
                      {
                        key: "date-" + o,
                        class: L(`date-${i}-${e.photoDate == i ? "1" : "0"}`),
                        onClick: (o) => e.onSelectDate(i),
                      },
                      null,
                      10,
                      O
                    )
                  ),
                  64
                )),
              ]),
              a("div", $, [
                (l(!0),
                t(
                  s,
                  null,
                  n(
                    e.photoList,
                    (i, o) => (
                      l(),
                      t(
                        s,
                        { key: "photo-" + o },
                        [
                          (!e.showMore && o < 16) || e.showMore
                            ? (l(),
                              t(
                                "span",
                                {
                                  key: 0,
                                  onClick: (i) => e.onPreviewGroupPhoto(o),
                                },
                                [a("img", { src: i.photoUrl }, null, 8, z), R],
                                8,
                                q
                              ))
                            : v("", !0),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
              r(
                a(
                  "div",
                  {
                    class: "icon-more",
                    onClick: i[0] || (i[0] = (i) => e.onShowMore()),
                  },
                  null,
                  512
                ),
                [[c, e.photoList.length > 16 && !e.showMore]]
              ),
              B,
              F,
              H,
              J,
            ]),
            r(
              a(
                "div",
                N,
                [
                  d(
                    u,
                    { name: "fade" },
                    {
                      default: p(() => [
                        "photo" == e.dialogs
                          ? (l(),
                            t(
                              "div",
                              {
                                key: 0,
                                class: "dialogs-photo",
                                onClick:
                                  i[6] ||
                                  (i[6] = x((i) => (e.dialogs = ""), ["self"])),
                              },
                              [
                                a("div", Q, [
                                  a("i", {
                                    class: "icon-close",
                                    onClick:
                                      i[1] ||
                                      (i[1] = x(
                                        (i) => (e.dialogs = ""),
                                        ["self"]
                                      )),
                                  }),
                                  a(
                                    "i",
                                    {
                                      class: L(
                                        `icon-alert-title-${e.previewType}`
                                      ),
                                    },
                                    null,
                                    2
                                  ),
                                  a(
                                    "i",
                                    {
                                      class: L([
                                        "icon-view",
                                        `type-${e.previewType}`,
                                      ]),
                                      onClick:
                                        i[2] || (i[2] = (i) => e.onLoupe()),
                                    },
                                    null,
                                    2
                                  ),
                                  a("div", V, [
                                    a("span", null, [
                                      a(
                                        "img",
                                        {
                                          src: e.previewList[e.previewIndex]
                                            .photoUrl,
                                        },
                                        null,
                                        8,
                                        W
                                      ),
                                    ]),
                                    X,
                                  ]),
                                  r(
                                    a(
                                      "i",
                                      {
                                        class: L("icon-next"),
                                        onClick:
                                          i[3] ||
                                          (i[3] = (i) => e.previewIndex++),
                                      },
                                      null,
                                      512
                                    ),
                                    [
                                      [
                                        c,
                                        e.previewIndex !=
                                          e.previewList.length - 1,
                                      ],
                                    ]
                                  ),
                                  r(
                                    a(
                                      "i",
                                      {
                                        class: L("icon-prev"),
                                        onClick:
                                          i[4] ||
                                          (i[4] = (i) => e.previewIndex--),
                                      },
                                      null,
                                      512
                                    ),
                                    [[c, 0 != e.previewIndex]]
                                  ),
                                  2 != e.previewType ||
                                  e.currDate != e.photoDate ||
                                  e.isLike(e.previewList[e.previewIndex])
                                    ? v("", !0)
                                    : (l(),
                                      t("i", {
                                        key: 0,
                                        class: "icon-like-big icon-like-big-0",
                                        onClick:
                                          i[5] || (i[5] = (i) => e.onLike()),
                                      })),
                                  r(a("i", Y, null, 512), [
                                    [
                                      c,
                                      2 == e.previewType &&
                                        e.isLike(e.previewList[e.previewIndex]),
                                    ],
                                  ]),
                                ]),
                              ]
                            ))
                          : v("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                  d(
                    u,
                    { name: "fade" },
                    {
                      default: p(() => [
                        e.loupe
                          ? (l(),
                            t(
                              "div",
                              {
                                key: 0,
                                class: "dialogs-loupe",
                                onClick:
                                  i[7] ||
                                  (i[7] = x((i) => (e.loupe = !1), ["self"])),
                              },
                              [
                                a(
                                  "img",
                                  {
                                    src: e.previewList[e.previewIndex].photoUrl,
                                  },
                                  null,
                                  8,
                                  Z
                                ),
                              ]
                            ))
                          : v("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                  d(
                    u,
                    { name: "fade" },
                    {
                      default: p(() => [
                        e.alert
                          ? (l(),
                            t(
                              "div",
                              {
                                key: 0,
                                class: "dialogs-alert",
                                onClick: i[8] || (i[8] = (i) => (e.alert = "")),
                              },
                              [a("div", ee, [a("span", null, I(e.alert), 1)])]
                            ))
                          : v("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ],
                512
              ),
              [[c, e.dialogs || e.loupe || e.alert]]
            ),
          ]))
        : v("", !0);
    },
  ],
  ["__scopeId", "data-v-cc39e630"],
]);
export { ie as default };
