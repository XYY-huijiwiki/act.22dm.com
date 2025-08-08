import {
  _ as a,
  d as o,
  G as s,
  o as n,
  c as l,
  a as e,
  e as i,
  g as d,
  P as t,
  u,
  h as p,
  i as c,
  l as r,
  t as f,
} from "./index-78c5a934.js";
import { U as m } from "./upload-d2fb39b7.js";
const v = o({
    name: "file-upload",
    components: { Upload: m },
    setup(a, o) {
      var s, n;
      const l = t();
      u();
      const e = p(),
        i = c({
          init: !1,
          userInfo: (null == (s = e.params) ? void 0 : s.userInfo) ?? {},
        });
      let d = (null == (n = i.userInfo) ? void 0 : n.unionid) ?? "";
      return (
        r(() => {
          (["192.168.50.119", "localhost"].includes(location.hostname) ||
            "ofN_u6nBbWm3k8KmgyWetjEKIGaE" == d) &&
            (i.init = !0);
        }),
        {
          ...f(i),
          upload: () => {
            l.value.handleUpload().then((a) => {
              console.log(a);
            });
          },
          uploadForm: l,
        }
      );
    },
  }),
  g = { id: "page-file-upload" },
  h = { key: 0, class: "page-scene" },
  I = { class: "upload-wrap" };
const U = a(v, [
  [
    "render",
    function (a, o, t, u, p, c) {
      const r = s("Upload");
      return (
        n(),
        l("div", g, [
          a.init
            ? (n(),
              l("div", h, [
                e("div", I, [
                  i(
                    r,
                    {
                      ref: "uploadForm",
                      config: {
                        limit: 100,
                        iconWidth: 150,
                        iconHeight: 200,
                        fizeSize: 200,
                      },
                    },
                    null,
                    512
                  ),
                ]),
                e(
                  "span",
                  {
                    class: "btn-upload",
                    onClick: o[0] || (o[0] = (o) => a.upload()),
                  },
                  "upload"
                ),
              ]))
            : d("", !0),
        ])
      );
    },
  ],
  ["__scopeId", "data-v-4dfa379f"],
]);
export { U as default };
