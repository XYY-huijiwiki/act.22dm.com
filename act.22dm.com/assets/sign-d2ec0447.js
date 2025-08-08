const r = (r) => {
    let { k: n, score: e, level: a, unionid: c } = r;
    const u = o(t(n + "|" + e + "|" + a) + c);
    return console.log("getSign: " + u), u;
  },
  n = (r) => {
    let { k: n, id: e, unionid: a } = r;
    const c = o(t(n + "|" + e) + a);
    return console.log("getSign: " + c), c;
  };
function t(r) {
  function n(r, n) {
    return (r << n) | (r >>> (32 - n));
  }
  function t(r, n) {
    var t, o, e, a, c;
    return (
      (e = 2147483648 & r),
      (a = 2147483648 & n),
      (c = (1073741823 & r) + (1073741823 & n)),
      (t = 1073741824 & r) & (o = 1073741824 & n)
        ? 2147483648 ^ c ^ e ^ a
        : t | o
        ? 1073741824 & c
          ? 3221225472 ^ c ^ e ^ a
          : 1073741824 ^ c ^ e ^ a
        : c ^ e ^ a
    );
  }
  function o(r, o, e, a, c, u, i) {
    return (
      (r = t(
        r,
        t(
          t(
            (function (r, n, t) {
              return (r & n) | (~r & t);
            })(o, e, a),
            c
          ),
          i
        )
      )),
      t(n(r, u), o)
    );
  }
  function e(r, o, e, a, c, u, i) {
    return (
      (r = t(
        r,
        t(
          t(
            (function (r, n, t) {
              return (r & t) | (n & ~t);
            })(o, e, a),
            c
          ),
          i
        )
      )),
      t(n(r, u), o)
    );
  }
  function a(r, o, e, a, c, u, i) {
    return (
      (r = t(
        r,
        t(
          t(
            (function (r, n, t) {
              return r ^ n ^ t;
            })(o, e, a),
            c
          ),
          i
        )
      )),
      t(n(r, u), o)
    );
  }
  function c(r, o, e, a, c, u, i) {
    return (
      (r = t(
        r,
        t(
          t(
            (function (r, n, t) {
              return n ^ (r | ~t);
            })(o, e, a),
            c
          ),
          i
        )
      )),
      t(n(r, u), o)
    );
  }
  function u(r) {
    var n,
      t = "",
      o = "";
    for (n = 0; n <= 3; n++)
      t += (o = "0" + ((r >>> (8 * n)) & 255).toString(16)).substr(
        o.length - 2,
        2
      );
    return t;
  }
  var i,
    f,
    h,
    g,
    C,
    A,
    d,
    l,
    s,
    S = Array();
  for (
    S = (function (r) {
      for (
        var n,
          t = r.length,
          o = t + 8,
          e = 16 * ((o - (o % 64)) / 64 + 1),
          a = Array(e - 1),
          c = 0,
          u = 0;
        u < t;

      )
        (c = (u % 4) * 8),
          (a[(n = (u - (u % 4)) / 4)] = a[n] | (r.charCodeAt(u) << c)),
          u++;
      return (
        (c = (u % 4) * 8),
        (a[(n = (u - (u % 4)) / 4)] = a[n] | (128 << c)),
        (a[e - 2] = t << 3),
        (a[e - 1] = t >>> 29),
        a
      );
    })(
      (r = (function (r) {
        r = r.replace(/\r\n/g, "\n");
        for (var n = "", t = 0; t < r.length; t++) {
          var o = r.charCodeAt(t);
          o < 128
            ? (n += String.fromCharCode(o))
            : o > 127 && o < 2048
            ? ((n += String.fromCharCode((o >> 6) | 192)),
              (n += String.fromCharCode((63 & o) | 128)))
            : ((n += String.fromCharCode((o >> 12) | 224)),
              (n += String.fromCharCode(((o >> 6) & 63) | 128)),
              (n += String.fromCharCode((63 & o) | 128)));
        }
        return n;
      })(r))
    ),
      A = 1732584193,
      d = 4023233417,
      l = 2562383102,
      s = 271733878,
      i = 0;
    i < S.length;
    i += 16
  )
    (f = A),
      (h = d),
      (g = l),
      (C = s),
      (A = o(A, d, l, s, S[i + 0], 7, 3614090360)),
      (s = o(s, A, d, l, S[i + 1], 12, 3905402710)),
      (l = o(l, s, A, d, S[i + 2], 17, 606105819)),
      (d = o(d, l, s, A, S[i + 3], 22, 3250441966)),
      (A = o(A, d, l, s, S[i + 4], 7, 4118548399)),
      (s = o(s, A, d, l, S[i + 5], 12, 1200080426)),
      (l = o(l, s, A, d, S[i + 6], 17, 2821735955)),
      (d = o(d, l, s, A, S[i + 7], 22, 4249261313)),
      (A = o(A, d, l, s, S[i + 8], 7, 1770035416)),
      (s = o(s, A, d, l, S[i + 9], 12, 2336552879)),
      (l = o(l, s, A, d, S[i + 10], 17, 4294925233)),
      (d = o(d, l, s, A, S[i + 11], 22, 2304563134)),
      (A = o(A, d, l, s, S[i + 12], 7, 1804603682)),
      (s = o(s, A, d, l, S[i + 13], 12, 4254626195)),
      (l = o(l, s, A, d, S[i + 14], 17, 2792965006)),
      (A = e(
        A,
        (d = o(d, l, s, A, S[i + 15], 22, 1236535329)),
        l,
        s,
        S[i + 1],
        5,
        4129170786
      )),
      (s = e(s, A, d, l, S[i + 6], 9, 3225465664)),
      (l = e(l, s, A, d, S[i + 11], 14, 643717713)),
      (d = e(d, l, s, A, S[i + 0], 20, 3921069994)),
      (A = e(A, d, l, s, S[i + 5], 5, 3593408605)),
      (s = e(s, A, d, l, S[i + 10], 9, 38016083)),
      (l = e(l, s, A, d, S[i + 15], 14, 3634488961)),
      (d = e(d, l, s, A, S[i + 4], 20, 3889429448)),
      (A = e(A, d, l, s, S[i + 9], 5, 568446438)),
      (s = e(s, A, d, l, S[i + 14], 9, 3275163606)),
      (l = e(l, s, A, d, S[i + 3], 14, 4107603335)),
      (d = e(d, l, s, A, S[i + 8], 20, 1163531501)),
      (A = e(A, d, l, s, S[i + 13], 5, 2850285829)),
      (s = e(s, A, d, l, S[i + 2], 9, 4243563512)),
      (l = e(l, s, A, d, S[i + 7], 14, 1735328473)),
      (A = a(
        A,
        (d = e(d, l, s, A, S[i + 12], 20, 2368359562)),
        l,
        s,
        S[i + 5],
        4,
        4294588738
      )),
      (s = a(s, A, d, l, S[i + 8], 11, 2272392833)),
      (l = a(l, s, A, d, S[i + 11], 16, 1839030562)),
      (d = a(d, l, s, A, S[i + 14], 23, 4259657740)),
      (A = a(A, d, l, s, S[i + 1], 4, 2763975236)),
      (s = a(s, A, d, l, S[i + 4], 11, 1272893353)),
      (l = a(l, s, A, d, S[i + 7], 16, 4139469664)),
      (d = a(d, l, s, A, S[i + 10], 23, 3200236656)),
      (A = a(A, d, l, s, S[i + 13], 4, 681279174)),
      (s = a(s, A, d, l, S[i + 0], 11, 3936430074)),
      (l = a(l, s, A, d, S[i + 3], 16, 3572445317)),
      (d = a(d, l, s, A, S[i + 6], 23, 76029189)),
      (A = a(A, d, l, s, S[i + 9], 4, 3654602809)),
      (s = a(s, A, d, l, S[i + 12], 11, 3873151461)),
      (l = a(l, s, A, d, S[i + 15], 16, 530742520)),
      (A = c(
        A,
        (d = a(d, l, s, A, S[i + 2], 23, 3299628645)),
        l,
        s,
        S[i + 0],
        6,
        4096336452
      )),
      (s = c(s, A, d, l, S[i + 7], 10, 1126891415)),
      (l = c(l, s, A, d, S[i + 14], 15, 2878612391)),
      (d = c(d, l, s, A, S[i + 5], 21, 4237533241)),
      (A = c(A, d, l, s, S[i + 12], 6, 1700485571)),
      (s = c(s, A, d, l, S[i + 3], 10, 2399980690)),
      (l = c(l, s, A, d, S[i + 10], 15, 4293915773)),
      (d = c(d, l, s, A, S[i + 1], 21, 2240044497)),
      (A = c(A, d, l, s, S[i + 8], 6, 1873313359)),
      (s = c(s, A, d, l, S[i + 15], 10, 4264355552)),
      (l = c(l, s, A, d, S[i + 6], 15, 2734768916)),
      (d = c(d, l, s, A, S[i + 13], 21, 1309151649)),
      (A = c(A, d, l, s, S[i + 4], 6, 4149444226)),
      (s = c(s, A, d, l, S[i + 11], 10, 3174756917)),
      (l = c(l, s, A, d, S[i + 2], 15, 718787259)),
      (d = c(d, l, s, A, S[i + 9], 21, 3951481745)),
      (A = t(A, f)),
      (d = t(d, h)),
      (l = t(l, g)),
      (s = t(s, C));
  return (u(A) + u(d) + u(l) + u(s)).toLowerCase();
}
function o(r) {
  for (
    var n,
      t,
      o,
      e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      a = 0,
      c = r.length,
      u = "";
    a < c;

  ) {
    if (((n = 255 & r.charCodeAt(a++)), a == c)) {
      (u += e.charAt(n >> 2)), (u += e.charAt((3 & n) << 4)), (u += "==");
      break;
    }
    if (((t = r.charCodeAt(a++)), a == c)) {
      (u += e.charAt(n >> 2)),
        (u += e.charAt(((3 & n) << 4) | ((240 & t) >> 4))),
        (u += e.charAt((15 & t) << 2)),
        (u += "=");
      break;
    }
    (o = r.charCodeAt(a++)),
      (u += e.charAt(n >> 2)),
      (u += e.charAt(((3 & n) << 4) | ((240 & t) >> 4))),
      (u += e.charAt(((15 & t) << 2) | ((192 & o) >> 6))),
      (u += e.charAt(63 & o));
  }
  return u;
}
export { r as a, n as g };
