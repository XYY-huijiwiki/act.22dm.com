import {
  _ as e,
  d as s,
  o as l,
  c as o,
  e as a,
  f as n,
  T as i,
  w as t,
  v as c,
  a as r,
  y as d,
  n as u,
  g as m,
  F as p,
  b as g,
  u as h,
  h as v,
  i as f,
  z as k,
  l as y,
  m as w,
  A as b,
  t as L,
  p as x,
  q as C,
  B as T,
  C as I,
  D as B,
  E as D,
  s as $,
  x as _,
} from "./index-78c5a934.js";
import { w as G } from "./wxjssdk-b7b46232.js";
import { a as z } from "./sign-d2ec0447.js";
const S = (e) => {
  let s = e.floor,
    l = [
      [65, 67],
      [72, 139],
      [70, 209],
      [71, 280],
      [70, 350],
      [71, 421],
      [72, 493],
      [70, 563],
      [71, 634],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [78, 712],
      [74, 786],
      [76, 862],
      [60, 922],
      [59, 981],
      [60, 1041],
      [60, 1101],
      [177, 1278],
      [158, 1436],
    ];
  return { offsetY: 0, height: l[s][0], by: l[s][1] };
};
let E, F;
const R = s({
    name: "wolfsburg",
    components: {},
    setup(e, s) {
      var l, o;
      let a = new G({});
      h();
      const n = v(),
        i = f({
          userInfo: (null == (l = n.params) ? void 0 : l.userInfo) ?? {},
          loading: !1,
          volume: !1,
          scene: "mm",
          dialogs: "",
          scale: k(1600),
          k: "",
          rotate: !1,
          down: !1,
          gameover: !1,
          score: 0,
          floor: 0,
          hp: 3,
          guide: 0,
          timer: null,
          spriteConfig: null,
          houseList: [],
          rankList: [],
          maxFloor: 96,
          dropdown: null,
          tips: "",
          beginTime: 0,
          houseDown: 0,
          perfect: 0,
          danger: 0,
          audioList: [
            {
              name: "bgm",
              src: "/aliyuncs/h5/wolfsburg/bgm.mp3",
              loop: !0,
            },
            {
              name: "down",
              src: "/aliyuncs/h5/wolfsburg/down.mp3",
              loop: !1,
            },
            {
              name: "fail",
              src: "/aliyuncs/h5/wolfsburg/fail.mp3",
              loop: !1,
            },
            {
              name: "miss",
              src: "/aliyuncs/h5/wolfsburg/miss.mp3",
              loop: !1,
            },
            {
              name: "success",
              src: "/aliyuncs/h5/wolfsburg/success.mp3",
              loop: !1,
            },
          ],
        });
      F = (null == (o = i.userInfo) ? void 0 : o.unionid) ?? "";
      const t = () => {
          if ("gp" == i.scene && !i.guide && i.down && i.houseList.length) {
            let e = i.houseList[i.houseList.length - 1];
            if (e.down) {
              let s = ((e) => {
                  var s;
                  return (
                    (null ==
                    (s = document.getElementById("house-" + (e.length - 1)))
                      ? void 0
                      : s.getBoundingClientRect()) ?? null
                  );
                })(i.houseList),
                l = ((e) => {
                  var s, l;
                  return 1 == e.length
                    ? null == (s = document.getElementById("house-bottom"))
                      ? void 0
                      : s.getBoundingClientRect()
                    : null ==
                      (l = document.getElementById("house-" + (e.length - 2)))
                    ? void 0
                    : l.getBoundingClientRect();
                })(i.houseList),
                o = 1 == i.houseList.length ? 60 : 0,
                a = !1,
                n = 0;
              if (s.top + s.height >= l.top + o - 50) {
                let t = ((e, s) => {
                  let l = 0;
                  return e.top < s && (l = 100), l;
                })(l, 1300 * i.scale);
                if (
                  ((e.down = !1),
                  (s.left < 50 || s.left > 180) &&
                    (i.hp--,
                    r("miss"),
                    i.houseList.splice(i.houseList.length - 1, 1),
                    (a = !0),
                    d("miss")),
                  i.houseList.length > 1 && !a)
                ) {
                  let s = i.houseList[i.houseList.length - 2];
                  (n = Math.abs(s.left - e.left)),
                    n > 50
                      ? (i.hp--,
                        r("miss"),
                        i.houseList.splice(i.houseList.length - 1, 1),
                        (a = !0),
                        d("miss"))
                      : n < 10 && (r("perfect"), i.perfect++);
                }
                a ||
                  (i.floor++,
                  (i.score += Math.ceil(((100 - n) / 100) * 100)),
                  (i.houseDown += t),
                  d("down")),
                  (e.top = l.top - s.height + o - i.houseDown + t),
                  0 == i.hp || i.floor == i.maxFloor
                    ? ((i.gameover = !0),
                      clearInterval(i.timer),
                      setTimeout(() => {
                        c();
                      }, 0))
                    : (i.spriteConfig = S(i)),
                  10 == i.floor
                    ? (r("danger"), (i.danger = 1))
                    : 30 == i.floor
                    ? ((i.danger = 2), r("danger"))
                    : 60 == i.floor && ((i.danger = 3), r("danger")),
                  setTimeout(() => {
                    i.down = !1;
                  }, 200);
              }
            }
          }
          if (
            "gp" == i.scene &&
            !i.guide &&
            !i.dropdown &&
            i.floor > 10 &&
            1e3 * Math.random() > 1e3 - i.floor
          ) {
            let e = B(1, 3),
              s = B(200, 550);
            (i.dropdown = { type: e, left: s }),
              setTimeout(() => {
                i.dropdown = null;
              }, 3e3);
          }
        },
        c = () => {
          (i.dialogs = i.floor >= i.maxFloor ? "success" : "fail"),
            d(i.dialogs);
          let { k: e, score: s, floor: l, perfect: o, hp: a } = i,
            n = z({ k: e, unionid: F, score: s, level: l });
          D({
            ownerUnionid: F,
            activityKey: E,
            gameScore: s,
            levelNum: l,
            playTime: new Date().getTime() - i.beginTime,
            extra: { perfect: o, hp: a },
            k: e,
            s: n,
          });
        },
        r = (e) => {
          (i.tips = ""),
            setTimeout(() => {
              i.tips = e;
            }, 0);
        },
        d = (e, s = !1) => {
          I(i, e, s);
        };
      return (
        y(() => {
          var e, s;
          console.log("scale", i.scale),
            (E =
              (null == (e = n.meta) ? void 0 : e.activityKey) ?? "wolfsburg");
          let l = location.origin + n.path,
            o = (null == (s = n.meta) ? void 0 : s.imgUrl) ?? "";
          w({ activityKey: E }).then(({ code: e, data: s }) => {
            console.log("getGameInit", s),
              0 === e &&
                ((i.k = s.k),
                T({ activityKey: E, rankSize: 10 }).then(
                  ({ code: e, data: s }) => {
                    console.log("onGetGameRankList", s),
                      0 === e && (i.rankList = s);
                  }
                ));
          }),
            a.ready(() => {
              var e, s;
              d("bgm", !0),
                a.updateShareData({
                  title: (null == (e = n.meta) ? void 0 : e.title) ?? "",
                  desc: (null == (s = n.meta) ? void 0 : s.desc) ?? "",
                  link: l,
                  imgUrl: o,
                }),
                document.addEventListener("visibilitychange", (e) => {
                  document.hidden ? b() : i.volume && d("bgm", !0);
                });
            });
        }),
        {
          ...L(i),
          onPlayAudio: d,
          onTouch: () => {
            i.gameover ||
              i.guide ||
              i.down ||
              (i.houseList.push(
                ((e) => {
                  var s;
                  let l =
                    null == (s = document.getElementById("clip-sprite"))
                      ? void 0
                      : s.getBoundingClientRect();
                  return {
                    ...e.spriteConfig,
                    top: l.top + l.height,
                    left: l.left,
                    down: !0,
                  };
                })(i)
              ),
              setTimeout(() => {
                i.down = !0;
              }),
              i.beginTime || (i.beginTime = new Date().getTime()));
          },
          onGameStart: () => {
            (i.houseList = []),
              (i.score = 0),
              (i.floor = 0),
              (i.hp = 3),
              (i.down = !1),
              (i.rotate = !0),
              (i.gameover = !1),
              (i.dropdown = null),
              (i.guide = 0),
              (i.scene = "gp"),
              (i.dialogs = ""),
              (i.tips = ""),
              (i.beginTime = 0),
              (i.houseDown = 0),
              (i.danger = 0),
              (i.perfect = 0),
              (i.spriteConfig = S(i)),
              (i.timer = setInterval(() => {
                i.gameover || t();
              }, 33));
          },
          onGameBack: () => {
            (i.dialogs = ""),
              (i.scene = "mm"),
              i.timer && clearInterval(i.timer);
          },
        }
      );
    },
  }),
  j = (e) => ($("data-v-805c81ae"), (e = e()), _(), e),
  K = { id: "page-wolfsburg" },
  A = { key: 0, id: "scene-mm", class: "scene-layer" },
  M = j(() => r("div", { class: "icon-mm" }, null, -1)),
  U = { class: "mm-btn" },
  N = j(() => r("div", { class: "scene-bottom" }, null, -1)),
  P = { key: 0, id: "scene-gp", class: "scene-layer" },
  Y = { key: 0, class: "icon-clip" },
  q = ["id"],
  H = j(() =>
    r(
      "div",
      { id: "house-bottom", class: "scene-bottom" },
      [r("div", { class: "icon-dog" })],
      -1
    )
  ),
  J = j(() => r("div", { class: "touch-area" }, null, -1)),
  O = { class: "game-hp" },
  Q = { class: "game-bar" },
  V = { class: "game-score" },
  W = j(() => r("div", { class: "icon-score-1" }, null, -1)),
  X = { class: "game-floor" },
  Z = j(() => r("div", { class: "icon-floor" }, null, -1)),
  ee = { id: "page-dialogs", class: "scene-layer" },
  se = [
    j(() =>
      r(
        "div",
        { class: "icon-book" },
        [
          r("div", { class: "rule-main" }, [
            r("div", { class: "icon-rule-title" }),
            r("div", { class: "icon-rule-text" }),
          ]),
        ],
        -1
      )
    ),
  ],
  le = { class: "icon-book" },
  oe = { class: "rank-main" },
  ae = j(() => r("div", { class: "icon-rank-title" }, null, -1)),
  ne = { class: "rank-list" },
  ie = j(() => r("span", { class: "icon-rank-icon" }, null, -1)),
  te = { class: "rank-name" },
  ce = { class: "rank-score" },
  re = j(() => r("i", { class: "num-small-score" }, null, -1)),
  de = { class: "rank-floor" },
  ue = { class: "icon-success" },
  me = { class: "success-score" },
  pe = j(() => r("i", { class: "icon-score-2" }, null, -1)),
  ge = j(() => r("i", { class: "icon-word-success" }, null, -1)),
  he = { key: 0, class: "dialogs-fail" },
  ve = { class: "icon-fail" },
  fe = { id: "audio-list" },
  ke = ["id", "src", "loop"];
const ye = e(R, [
  [
    "render",
    function (e, s, h, v, f, k) {
      return (
        l(),
        o("div", K, [
          a(
            i,
            { name: "fade" },
            {
              default: n(() => [
                "mm" == e.scene
                  ? (l(),
                    o("div", A, [
                      r(
                        "div",
                        {
                          class: "mm-main",
                          style: d(`transform:scale(${e.scale - 0.1})`),
                        },
                        [
                          M,
                          r("div", U, [
                            r("span", {
                              class: "btn-start",
                              onClick: s[0] || (s[0] = (s) => e.onGameStart()),
                            }),
                            r("span", {
                              class: "btn-rule",
                              onClick:
                                s[1] || (s[1] = (s) => (e.dialogs = "rule")),
                            }),
                            r("span", {
                              class: "btn-rank",
                              onClick:
                                s[2] || (s[2] = (s) => (e.dialogs = "rank")),
                            }),
                          ]),
                        ],
                        4
                      ),
                      N,
                    ]))
                  : m("", !0),
              ]),
              _: 1,
            }
          ),
          a(
            i,
            { name: "fade" },
            {
              default: n(() => [
                "gp" == e.scene
                  ? (l(),
                    o("div", P, [
                      r(
                        "div",
                        {
                          id: "game-clip",
                          class: u([
                            "scene-layer",
                            [
                              { rotate: e.rotate && 0 == e.danger },
                              "danger-" + e.danger,
                            ],
                          ]),
                        },
                        [
                          e.spriteConfig
                            ? (l(),
                              o("div", Y, [
                                t(
                                  r(
                                    "div",
                                    {
                                      id: "clip-sprite",
                                      style: d(
                                        `height:${e.spriteConfig.height}px;background-position:0px ${e.spriteConfig.by}px`
                                      ),
                                    },
                                    null,
                                    4
                                  ),
                                  [
                                    [
                                      c,
                                      !e.down &&
                                        !e.gameover &&
                                        e.floor != e.maxFloor,
                                    ],
                                  ]
                                ),
                              ]))
                            : m("", !0),
                        ],
                        2
                      ),
                      r(
                        "div",
                        {
                          class: "house-list scene-layer",
                          style: d(`transform:translateY(${e.houseDown}px)`),
                        },
                        [
                          (l(!0),
                          o(
                            p,
                            null,
                            g(
                              e.houseList,
                              (e, s) => (
                                l(),
                                o(
                                  "span",
                                  {
                                    key: "house-" + s,
                                    id: "house-" + s,
                                    class: u([
                                      { down: e.down },
                                      "house-sprite",
                                    ]),
                                    style: d(
                                      `top:${e.top}px;left:${e.left}px;height:${e.height}px;background-position:0px ${e.by}px`
                                    ),
                                  },
                                  null,
                                  14,
                                  q
                                )
                              )
                            ),
                            128
                          )),
                          H,
                        ],
                        4
                      ),
                      J,
                      e.tips
                        ? (l(),
                          o(
                            "div",
                            {
                              key: 0,
                              class: u([["icon-" + e.tips], "game-tips"]),
                            },
                            null,
                            2
                          ))
                        : m("", !0),
                      e.dropdown
                        ? (l(),
                          o(
                            "div",
                            {
                              key: 1,
                              class: u([
                                "game-dropdown",
                                "icon-dropdown-" + e.dropdown.type,
                              ]),
                              style: d("left:" + e.dropdown.left + "px"),
                            },
                            null,
                            6
                          ))
                        : m("", !0),
                      r("div", {
                        class: "touch-area",
                        onClick:
                          s[3] || (s[3] = x((s) => e.onTouch(), ["stop"])),
                      }),
                      r(
                        "div",
                        {
                          class: u(["icon-back", { top: e.dialogs }]),
                          onClick:
                            s[4] || (s[4] = x((s) => e.onGameBack(), ["stop"])),
                        },
                        null,
                        2
                      ),
                      r("div", O, [
                        (l(!0),
                        o(
                          p,
                          null,
                          g(
                            e.hp,
                            (e) => (
                              l(), o("i", { class: "icon-hp", key: "hp-" + e })
                            )
                          ),
                          128
                        )),
                      ]),
                      r("div", Q, [
                        r("div", V, [
                          W,
                          (l(!0),
                          o(
                            p,
                            null,
                            g(
                              e.score + "",
                              (e, s) => (
                                l(),
                                o(
                                  "i",
                                  {
                                    key: "score-1-text" + s,
                                    class: u("num-middle-" + e),
                                  },
                                  null,
                                  2
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        r("div", X, [
                          Z,
                          (l(!0),
                          o(
                            p,
                            null,
                            g(
                              e.floor + "",
                              (e, s) => (
                                l(),
                                o(
                                  "i",
                                  {
                                    key: "floor-text" + s,
                                    class: u("num-middle-" + e),
                                  },
                                  null,
                                  2
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                    ]))
                  : m("", !0),
              ]),
              _: 1,
            }
          ),
          t(
            r(
              "div",
              ee,
              [
                r(
                  "div",
                  {
                    class: "scene-layer",
                    style: d(`transform:scale(${e.scale})`),
                  },
                  [
                    a(
                      i,
                      { name: "rule" },
                      {
                        default: n(() => [
                          "rule" == e.dialogs
                            ? (l(),
                              o(
                                "div",
                                {
                                  key: 0,
                                  class: "dialogs-rule",
                                  onClick:
                                    s[5] || (s[5] = (s) => (e.dialogs = "")),
                                },
                                se
                              ))
                            : m("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    a(
                      i,
                      { name: "rule" },
                      {
                        default: n(() => [
                          "rank" == e.dialogs
                            ? (l(),
                              o(
                                "div",
                                {
                                  key: 0,
                                  class: "dialogs-rank",
                                  onClick:
                                    s[6] || (s[6] = (s) => (e.dialogs = "")),
                                },
                                [
                                  r("div", le, [
                                    r("div", oe, [
                                      ae,
                                      r("div", ne, [
                                        (l(!0),
                                        o(
                                          p,
                                          null,
                                          g(e.rankList, (e, s) => {
                                            var a;
                                            return (
                                              l(),
                                              o(
                                                "div",
                                                {
                                                  class: "rank-item",
                                                  key: "rank-" + s,
                                                },
                                                [
                                                  ie,
                                                  r(
                                                    "span",
                                                    te,
                                                    C(
                                                      (null == (a = e.userInfo)
                                                        ? void 0
                                                        : a.nickname) ?? ""
                                                    ),
                                                    1
                                                  ),
                                                  r("span", ce, [
                                                    (l(!0),
                                                    o(
                                                      p,
                                                      null,
                                                      g(
                                                        e.gameScore + "",
                                                        (e, a) => (
                                                          l(),
                                                          o(
                                                            "i",
                                                            {
                                                              key:
                                                                "rank-score" +
                                                                s +
                                                                "-" +
                                                                a,
                                                              class: u(
                                                                "num-small-" + e
                                                              ),
                                                            },
                                                            null,
                                                            2
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                    re,
                                                  ]),
                                                  r("span", de, [
                                                    (l(!0),
                                                    o(
                                                      p,
                                                      null,
                                                      g(
                                                        e.levelNum + "",
                                                        (e, a) => (
                                                          l(),
                                                          o(
                                                            "i",
                                                            {
                                                              key:
                                                                "rank-floor" +
                                                                s +
                                                                "-" +
                                                                a,
                                                              class: u(
                                                                "num-small-" + e
                                                              ),
                                                            },
                                                            null,
                                                            2
                                                          )
                                                        )
                                                      ),
                                                      128
                                                    )),
                                                  ]),
                                                ]
                                              )
                                            );
                                          }),
                                          128
                                        )),
                                      ]),
                                    ]),
                                  ]),
                                ]
                              ))
                            : m("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    a(
                      i,
                      { name: "role" },
                      {
                        default: n(() => [
                          "success" == e.dialogs
                            ? (l(),
                              o(
                                "div",
                                {
                                  key: 0,
                                  class: "dialogs-success",
                                  onClick:
                                    s[7] ||
                                    (s[7] = (s) => {
                                      (e.scene = "mm"), (e.dialogs = "");
                                    }),
                                },
                                [
                                  r("div", ue, [
                                    r("span", me, [
                                      pe,
                                      (l(!0),
                                      o(
                                        p,
                                        null,
                                        g(
                                          e.score + "",
                                          (e, s) => (
                                            l(),
                                            o(
                                              "i",
                                              {
                                                key: "score-2-text" + s,
                                                class: u("num-big-" + e),
                                              },
                                              null,
                                              2
                                            )
                                          )
                                        ),
                                        128
                                      )),
                                      ge,
                                    ]),
                                  ]),
                                ]
                              ))
                            : m("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    a(
                      i,
                      { name: "role" },
                      {
                        default: n(() => [
                          "fail" == e.dialogs
                            ? (l(),
                              o("div", he, [
                                r("div", ve, [
                                  r("span", {
                                    class: "fail-again",
                                    onClick:
                                      s[8] ||
                                      (s[8] = x(
                                        (s) => e.onGameStart(),
                                        ["stop"]
                                      )),
                                  }),
                                ]),
                              ]))
                            : m("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                    "guide" == e.dialogs
                      ? (l(),
                        o(
                          "div",
                          {
                            key: 0,
                            class: "dialogs-guide",
                            onClick: s[9] || (s[9] = (s) => e.guide++),
                          },
                          [
                            r(
                              "div",
                              { class: u("icon-guide-" + e.guide) },
                              null,
                              2
                            ),
                          ]
                        ))
                      : m("", !0),
                  ],
                  4
                ),
              ],
              512
            ),
            [[c, e.dialogs || e.alert]]
          ),
          r(
            "div",
            {
              class: u(["btn-music", { active: e.volume }]),
              onClick: s[10] || (s[10] = (s) => e.onPlayAudio("bgm", !0)),
            },
            null,
            2
          ),
          t(
            r(
              "div",
              fe,
              [
                (l(!0),
                o(
                  p,
                  null,
                  g(
                    e.audioList,
                    (e) => (
                      l(),
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
                        ke
                      )
                    )
                  ),
                  128
                )),
              ],
              512
            ),
            [[c, !1]]
          ),
        ])
      );
    },
  ],
  ["__scopeId", "data-v-805c81ae"],
]);
export { ye as default };
