var e = Object.defineProperty,
  i = (i, t, a) => (
    ((i, t, a) => {
      t in i
        ? e(i, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
        : (i[t] = a);
    })(i, "symbol" != typeof t ? t + "" : t, a),
    a
  );
import { a8 as t } from "./index-78c5a934.js";
class a {
  constructor(e) {
    i(this, "config"),
      i(this, "appId"),
      (this.appId = "wxb61fdb0e387cbcc4"),
      this.init(e);
  }
  init(e) {
    let i = this.appId,
      a = e.jsApiList ?? [],
      n = e.openTagList ?? [];
    t({ url: location.href }).then(({ code: e, data: t }) => {
      if (0 === e) {
        let { timestamp: e, nonceStr: p, signature: r } = t;
        wx.config({
          debug: !1,
          appId: i,
          timestamp: e,
          nonceStr: p,
          signature: r,
          jsApiList: [
            "updateAppMessageShareData",
            "updateTimelineShareData",
            ...a,
          ],
          openTagList: ["wx-open-launch-weapp", ...n],
        });
      }
    });
  }
  ready(e) {
    wx.ready(() => {
      e();
    });
  }
  updateShareData(e) {
    let { title: i, desc: t, link: a, imgUrl: n } = e;
    wx.onMenuShareAppMessage({ title: i, desc: t, link: a, imgUrl: n }),
      wx.onMenuShareTimeline({ title: i, link: a, imgUrl: n }),
      wx.updateAppMessageShareData({ title: i, desc: t, link: a, imgUrl: n }),
      wx.updateTimelineShareData({ title: i, link: a, imgUrl: n });
  }
  openProductSpecificView(e) {
    wx.openProductSpecificView(e);
  }
}
export { a as w };
