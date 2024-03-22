function bx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var af =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Fp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Un(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var rg = { exports: {} },
  zu = {},
  og = { exports: {} },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Es = Symbol.for("react.element"),
  wx = Symbol.for("react.portal"),
  Sx = Symbol.for("react.fragment"),
  xx = Symbol.for("react.strict_mode"),
  kx = Symbol.for("react.profiler"),
  Cx = Symbol.for("react.provider"),
  Ex = Symbol.for("react.context"),
  Px = Symbol.for("react.forward_ref"),
  Rx = Symbol.for("react.suspense"),
  Ox = Symbol.for("react.memo"),
  Tx = Symbol.for("react.lazy"),
  Nm = Symbol.iterator;
function Ix(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nm && e[Nm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ig = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ag = Object.assign,
  sg = {};
function Xi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sg),
    (this.updater = n || ig);
}
Xi.prototype.isReactComponent = {};
Xi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Xi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lg() {}
lg.prototype = Xi.prototype;
function Bp(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sg),
    (this.updater = n || ig);
}
var qp = (Bp.prototype = new lg());
qp.constructor = Bp;
ag(qp, Xi.prototype);
qp.isPureReactComponent = !0;
var Lm = Array.isArray,
  ug = Object.prototype.hasOwnProperty,
  Wp = { current: null },
  cg = { key: !0, ref: !0, __self: !0, __source: !0 };
function dg(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ug.call(t, r) && !cg.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Es,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Wp.current,
  };
}
function Mx(e, t) {
  return {
    $$typeof: Es,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hp(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Es;
}
function _x(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Am = /\/+/g;
function nd(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _x("" + e.key)
    : t.toString(36);
}
function wl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Es:
          case wx:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + nd(a, 0) : r),
      Lm(o)
        ? ((n = ""),
          e != null && (n = e.replace(Am, "$&/") + "/"),
          wl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Hp(o) &&
            (o = Mx(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Am, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Lm(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = r + nd(i, s);
      a += wl(i, t, n, l, o);
    }
  else if (((l = Ix(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + nd(i, s++)), (a += wl(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Ws(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    wl(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function $x(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var zt = { current: null },
  Sl = { transition: null },
  Nx = {
    ReactCurrentDispatcher: zt,
    ReactCurrentBatchConfig: Sl,
    ReactCurrentOwner: Wp,
  };
de.Children = {
  map: Ws,
  forEach: function (e, t, n) {
    Ws(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ws(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ws(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hp(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
de.Component = Xi;
de.Fragment = Sx;
de.Profiler = kx;
de.PureComponent = Bp;
de.StrictMode = xx;
de.Suspense = Rx;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nx;
de.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ag({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Wp.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      ug.call(t, l) &&
        !cg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Es, type: e.type, key: o, ref: i, props: r, _owner: a };
};
de.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ex,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cx, _context: e }),
    (e.Consumer = e)
  );
};
de.createElement = dg;
de.createFactory = function (e) {
  var t = dg.bind(null, e);
  return (t.type = e), t;
};
de.createRef = function () {
  return { current: null };
};
de.forwardRef = function (e) {
  return { $$typeof: Px, render: e };
};
de.isValidElement = Hp;
de.lazy = function (e) {
  return { $$typeof: Tx, _payload: { _status: -1, _result: e }, _init: $x };
};
de.memo = function (e, t) {
  return { $$typeof: Ox, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function (e) {
  var t = Sl.transition;
  Sl.transition = {};
  try {
    e();
  } finally {
    Sl.transition = t;
  }
};
de.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
de.useCallback = function (e, t) {
  return zt.current.useCallback(e, t);
};
de.useContext = function (e) {
  return zt.current.useContext(e);
};
de.useDebugValue = function () {};
de.useDeferredValue = function (e) {
  return zt.current.useDeferredValue(e);
};
de.useEffect = function (e, t) {
  return zt.current.useEffect(e, t);
};
de.useId = function () {
  return zt.current.useId();
};
de.useImperativeHandle = function (e, t, n) {
  return zt.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function (e, t) {
  return zt.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function (e, t) {
  return zt.current.useLayoutEffect(e, t);
};
de.useMemo = function (e, t) {
  return zt.current.useMemo(e, t);
};
de.useReducer = function (e, t, n) {
  return zt.current.useReducer(e, t, n);
};
de.useRef = function (e) {
  return zt.current.useRef(e);
};
de.useState = function (e) {
  return zt.current.useState(e);
};
de.useSyncExternalStore = function (e, t, n) {
  return zt.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function () {
  return zt.current.useTransition();
};
de.version = "18.2.0";
og.exports = de;
var x = og.exports;
const at = Fp(x),
  Wl = bx({ __proto__: null, default: at }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lx = x,
  Ax = Symbol.for("react.element"),
  jx = Symbol.for("react.fragment"),
  zx = Object.prototype.hasOwnProperty,
  Dx = Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ux = { key: !0, ref: !0, __self: !0, __source: !0 };
function fg(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) zx.call(t, r) && !Ux.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ax,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Dx.current,
  };
}
zu.Fragment = jx;
zu.jsx = fg;
zu.jsxs = fg;
rg.exports = zu;
var Vp = rg.exports;
const Ha = Vp.Fragment,
  I = Vp.jsx,
  B = Vp.jsxs;
var sf = function (e, t) {
  return (
    (sf =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (n, r) {
          n.__proto__ = r;
        }) ||
      function (n, r) {
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
      }),
    sf(e, t)
  );
};
function Fx(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  sf(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var ct = function () {
  return (
    (ct =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    ct.apply(this, arguments)
  );
};
function Bx(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Ko(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (d) {
        a(d);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        a(d);
      }
    }
    function u(c) {
      c.done ? i(c.value) : o(c.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Qo(e, t) {
  var n = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    o,
    i,
    a;
  return (
    (a = { next: s(0), throw: s(1), return: s(2) }),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function s(u) {
    return function (c) {
      return l([u, c]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), u[0] && (n = 0)), n; )
      try {
        if (
          ((r = 1),
          o &&
            (i =
              u[0] & 2
                ? o.return
                : u[0]
                ? o.throw || ((i = o.return) && i.call(o), 0)
                : o.next) &&
            !(i = i.call(o, u[1])).done)
        )
          return i;
        switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
          case 0:
          case 1:
            i = u;
            break;
          case 4:
            return n.label++, { value: u[1], done: !1 };
          case 5:
            n.label++, (o = u[1]), (u = [0]);
            continue;
          case 7:
            (u = n.ops.pop()), n.trys.pop();
            continue;
          default:
            if (
              ((i = n.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              n = 0;
              continue;
            }
            if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
              n.label = u[1];
              break;
            }
            if (u[0] === 6 && n.label < i[1]) {
              (n.label = i[1]), (i = u);
              break;
            }
            if (i && n.label < i[2]) {
              (n.label = i[2]), n.ops.push(u);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        u = t.call(e, n);
      } catch (c) {
        (u = [6, c]), (o = 0);
      } finally {
        r = i = 0;
      }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Kn(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  }
  return n;
}
var xo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Kp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Qp(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var mo = Qp(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var n = (function () {
    function r() {
      var o = this;
      (this.locked = new Map()),
        (this.addToLocked = function (i, a) {
          var s = o.locked.get(i);
          s === void 0
            ? a === void 0
              ? o.locked.set(i, [])
              : o.locked.set(i, [a])
            : a !== void 0 && (s.unshift(a), o.locked.set(i, s));
        }),
        (this.isLocked = function (i) {
          return o.locked.has(i);
        }),
        (this.lock = function (i) {
          return new Promise(function (a, s) {
            o.isLocked(i) ? o.addToLocked(i, a) : (o.addToLocked(i), a());
          });
        }),
        (this.unlock = function (i) {
          var a = o.locked.get(i);
          if (a !== void 0 && a.length !== 0) {
            var s = a.pop();
            o.locked.set(i, a), s !== void 0 && setTimeout(s, 0);
          } else o.locked.delete(i);
        });
    }
    return (
      (r.getInstance = function () {
        return r.instance === void 0 && (r.instance = new r()), r.instance;
      }),
      r
    );
  })();
  t.default = function () {
    return n.getInstance();
  };
});
Kp(mo);
var qx = Kp(
  Qp(function (e, t) {
    var n =
        (xo && xo.__awaiter) ||
        function (c, d, f, h) {
          return new (f || (f = Promise))(function (p, g) {
            function w(y) {
              try {
                m(h.next(y));
              } catch (v) {
                g(v);
              }
            }
            function b(y) {
              try {
                m(h.throw(y));
              } catch (v) {
                g(v);
              }
            }
            function m(y) {
              y.done
                ? p(y.value)
                : new f(function (v) {
                    v(y.value);
                  }).then(w, b);
            }
            m((h = h.apply(c, d || [])).next());
          });
        },
      r =
        (xo && xo.__generator) ||
        function (c, d) {
          var f,
            h,
            p,
            g,
            w = {
              label: 0,
              sent: function () {
                if (1 & p[0]) throw p[1];
                return p[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (g = { next: b(0), throw: b(1), return: b(2) }),
            typeof Symbol == "function" &&
              (g[Symbol.iterator] = function () {
                return this;
              }),
            g
          );
          function b(m) {
            return function (y) {
              return (function (v) {
                if (f) throw new TypeError("Generator is already executing.");
                for (; w; )
                  try {
                    if (
                      ((f = 1),
                      h &&
                        (p =
                          2 & v[0]
                            ? h.return
                            : v[0]
                            ? h.throw || ((p = h.return) && p.call(h), 0)
                            : h.next) &&
                        !(p = p.call(h, v[1])).done)
                    )
                      return p;
                    switch (((h = 0), p && (v = [2 & v[0], p.value]), v[0])) {
                      case 0:
                      case 1:
                        p = v;
                        break;
                      case 4:
                        return w.label++, { value: v[1], done: !1 };
                      case 5:
                        w.label++, (h = v[1]), (v = [0]);
                        continue;
                      case 7:
                        (v = w.ops.pop()), w.trys.pop();
                        continue;
                      default:
                        if (
                          ((p = w.trys),
                          !(
                            (p = p.length > 0 && p[p.length - 1]) ||
                            (v[0] !== 6 && v[0] !== 2)
                          ))
                        ) {
                          w = 0;
                          continue;
                        }
                        if (
                          v[0] === 3 &&
                          (!p || (v[1] > p[0] && v[1] < p[3]))
                        ) {
                          w.label = v[1];
                          break;
                        }
                        if (v[0] === 6 && w.label < p[1]) {
                          (w.label = p[1]), (p = v);
                          break;
                        }
                        if (p && w.label < p[2]) {
                          (w.label = p[2]), w.ops.push(v);
                          break;
                        }
                        p[2] && w.ops.pop(), w.trys.pop();
                        continue;
                    }
                    v = d.call(c, w);
                  } catch (S) {
                    (v = [6, S]), (h = 0);
                  } finally {
                    f = p = 0;
                  }
                if (5 & v[0]) throw v[1];
                return { value: v[0] ? v[1] : void 0, done: !0 };
              })([m, y]);
            };
          }
        },
      o = xo;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = "browser-tabs-lock-key",
      a = {
        key: function (c) {
          return n(o, void 0, void 0, function () {
            return r(this, function (d) {
              throw new Error("Unsupported");
            });
          });
        },
        getItem: function (c) {
          return n(o, void 0, void 0, function () {
            return r(this, function (d) {
              throw new Error("Unsupported");
            });
          });
        },
        clear: function () {
          return n(o, void 0, void 0, function () {
            return r(this, function (c) {
              return [2, window.localStorage.clear()];
            });
          });
        },
        removeItem: function (c) {
          return n(o, void 0, void 0, function () {
            return r(this, function (d) {
              throw new Error("Unsupported");
            });
          });
        },
        setItem: function (c, d) {
          return n(o, void 0, void 0, function () {
            return r(this, function (f) {
              throw new Error("Unsupported");
            });
          });
        },
        keySync: function (c) {
          return window.localStorage.key(c);
        },
        getItemSync: function (c) {
          return window.localStorage.getItem(c);
        },
        clearSync: function () {
          return window.localStorage.clear();
        },
        removeItemSync: function (c) {
          return window.localStorage.removeItem(c);
        },
        setItemSync: function (c, d) {
          return window.localStorage.setItem(c, d);
        },
      };
    function s(c) {
      return new Promise(function (d) {
        return setTimeout(d, c);
      });
    }
    function l(c) {
      for (
        var d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
          f = "",
          h = 0;
        h < c;
        h++
      )
        f += d[Math.floor(Math.random() * d.length)];
      return f;
    }
    var u = (function () {
      function c(d) {
        (this.acquiredIatSet = new Set()),
          (this.storageHandler = void 0),
          (this.id = Date.now().toString() + l(15)),
          (this.acquireLock = this.acquireLock.bind(this)),
          (this.releaseLock = this.releaseLock.bind(this)),
          (this.releaseLock__private__ =
            this.releaseLock__private__.bind(this)),
          (this.waitForSomethingToChange =
            this.waitForSomethingToChange.bind(this)),
          (this.refreshLockWhileAcquired =
            this.refreshLockWhileAcquired.bind(this)),
          (this.storageHandler = d),
          c.waiters === void 0 && (c.waiters = []);
      }
      return (
        (c.prototype.acquireLock = function (d, f) {
          return (
            f === void 0 && (f = 5e3),
            n(this, void 0, void 0, function () {
              var h, p, g, w, b, m, y;
              return r(this, function (v) {
                switch (v.label) {
                  case 0:
                    (h = Date.now() + l(4)),
                      (p = Date.now() + f),
                      (g = i + "-" + d),
                      (w =
                        this.storageHandler === void 0
                          ? a
                          : this.storageHandler),
                      (v.label = 1);
                  case 1:
                    return Date.now() < p ? [4, s(30)] : [3, 8];
                  case 2:
                    return (
                      v.sent(),
                      w.getItemSync(g) !== null
                        ? [3, 5]
                        : ((b = this.id + "-" + d + "-" + h),
                          [4, s(Math.floor(25 * Math.random()))])
                    );
                  case 3:
                    return (
                      v.sent(),
                      w.setItemSync(
                        g,
                        JSON.stringify({
                          id: this.id,
                          iat: h,
                          timeoutKey: b,
                          timeAcquired: Date.now(),
                          timeRefreshed: Date.now(),
                        })
                      ),
                      [4, s(30)]
                    );
                  case 4:
                    return (
                      v.sent(),
                      (m = w.getItemSync(g)) !== null &&
                      (y = JSON.parse(m)).id === this.id &&
                      y.iat === h
                        ? (this.acquiredIatSet.add(h),
                          this.refreshLockWhileAcquired(g, h),
                          [2, !0])
                        : [3, 7]
                    );
                  case 5:
                    return (
                      c.lockCorrector(
                        this.storageHandler === void 0 ? a : this.storageHandler
                      ),
                      [4, this.waitForSomethingToChange(p)]
                    );
                  case 6:
                    v.sent(), (v.label = 7);
                  case 7:
                    return (h = Date.now() + l(4)), [3, 1];
                  case 8:
                    return [2, !1];
                }
              });
            })
          );
        }),
        (c.prototype.refreshLockWhileAcquired = function (d, f) {
          return n(this, void 0, void 0, function () {
            var h = this;
            return r(this, function (p) {
              return (
                setTimeout(function () {
                  return n(h, void 0, void 0, function () {
                    var g, w, b;
                    return r(this, function (m) {
                      switch (m.label) {
                        case 0:
                          return [4, mo.default().lock(f)];
                        case 1:
                          return (
                            m.sent(),
                            this.acquiredIatSet.has(f)
                              ? ((g =
                                  this.storageHandler === void 0
                                    ? a
                                    : this.storageHandler),
                                (w = g.getItemSync(d)) === null
                                  ? (mo.default().unlock(f), [2])
                                  : (((b = JSON.parse(w)).timeRefreshed =
                                      Date.now()),
                                    g.setItemSync(d, JSON.stringify(b)),
                                    mo.default().unlock(f),
                                    this.refreshLockWhileAcquired(d, f),
                                    [2]))
                              : (mo.default().unlock(f), [2])
                          );
                      }
                    });
                  });
                }, 1e3),
                [2]
              );
            });
          });
        }),
        (c.prototype.waitForSomethingToChange = function (d) {
          return n(this, void 0, void 0, function () {
            return r(this, function (f) {
              switch (f.label) {
                case 0:
                  return [
                    4,
                    new Promise(function (h) {
                      var p = !1,
                        g = Date.now(),
                        w = !1;
                      function b() {
                        if (
                          (w ||
                            (window.removeEventListener("storage", b),
                            c.removeFromWaiting(b),
                            clearTimeout(m),
                            (w = !0)),
                          !p)
                        ) {
                          p = !0;
                          var y = 50 - (Date.now() - g);
                          y > 0 ? setTimeout(h, y) : h(null);
                        }
                      }
                      window.addEventListener("storage", b), c.addToWaiting(b);
                      var m = setTimeout(b, Math.max(0, d - Date.now()));
                    }),
                  ];
                case 1:
                  return f.sent(), [2];
              }
            });
          });
        }),
        (c.addToWaiting = function (d) {
          this.removeFromWaiting(d), c.waiters !== void 0 && c.waiters.push(d);
        }),
        (c.removeFromWaiting = function (d) {
          c.waiters !== void 0 &&
            (c.waiters = c.waiters.filter(function (f) {
              return f !== d;
            }));
        }),
        (c.notifyWaiters = function () {
          c.waiters !== void 0 &&
            c.waiters.slice().forEach(function (d) {
              return d();
            });
        }),
        (c.prototype.releaseLock = function (d) {
          return n(this, void 0, void 0, function () {
            return r(this, function (f) {
              switch (f.label) {
                case 0:
                  return [4, this.releaseLock__private__(d)];
                case 1:
                  return [2, f.sent()];
              }
            });
          });
        }),
        (c.prototype.releaseLock__private__ = function (d) {
          return n(this, void 0, void 0, function () {
            var f, h, p, g;
            return r(this, function (w) {
              switch (w.label) {
                case 0:
                  return (
                    (f =
                      this.storageHandler === void 0 ? a : this.storageHandler),
                    (h = i + "-" + d),
                    (p = f.getItemSync(h)) === null
                      ? [2]
                      : (g = JSON.parse(p)).id !== this.id
                      ? [3, 2]
                      : [4, mo.default().lock(g.iat)]
                  );
                case 1:
                  w.sent(),
                    this.acquiredIatSet.delete(g.iat),
                    f.removeItemSync(h),
                    mo.default().unlock(g.iat),
                    c.notifyWaiters(),
                    (w.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (c.lockCorrector = function (d) {
          for (var f = Date.now() - 5e3, h = d, p = [], g = 0; ; ) {
            var w = h.keySync(g);
            if (w === null) break;
            p.push(w), g++;
          }
          for (var b = !1, m = 0; m < p.length; m++) {
            var y = p[m];
            if (y.includes(i)) {
              var v = h.getItemSync(y);
              if (v !== null) {
                var S = JSON.parse(v);
                ((S.timeRefreshed === void 0 && S.timeAcquired < f) ||
                  (S.timeRefreshed !== void 0 && S.timeRefreshed < f)) &&
                  (h.removeItemSync(y), (b = !0));
              }
            }
          }
          b && c.notifyWaiters();
        }),
        (c.waiters = void 0),
        c
      );
    })();
    t.default = u;
  })
);
const Wx = { timeoutInSeconds: 60 },
  pg = { name: "auth0-spa-js", version: "2.1.3" },
  hg = () => Date.now();
let Jt = class lf extends Error {
    constructor(t, n) {
      super(n),
        (this.error = t),
        (this.error_description = n),
        Object.setPrototypeOf(this, lf.prototype);
    }
    static fromPayload({ error: t, error_description: n }) {
      return new lf(t, n);
    }
  },
  Hx = class mg extends Jt {
    constructor(t, n, r, o = null) {
      super(t, n),
        (this.state = r),
        (this.appState = o),
        Object.setPrototypeOf(this, mg.prototype);
    }
  },
  uf = class vg extends Jt {
    constructor() {
      super("timeout", "Timeout"), Object.setPrototypeOf(this, vg.prototype);
    }
  },
  Vx = class yg extends uf {
    constructor(t) {
      super(), (this.popup = t), Object.setPrototypeOf(this, yg.prototype);
    }
  },
  Kx = class gg extends Jt {
    constructor(t) {
      super("cancelled", "Popup closed"),
        (this.popup = t),
        Object.setPrototypeOf(this, gg.prototype);
    }
  },
  Qx = class bg extends Jt {
    constructor(t, n, r) {
      super(t, n),
        (this.mfa_token = r),
        Object.setPrototypeOf(this, bg.prototype);
    }
  },
  wg = class Sg extends Jt {
    constructor(t, n) {
      super(
        "missing_refresh_token",
        `Missing Refresh Token (audience: '${jm(t, ["default"])}', scope: '${jm(
          n
        )}')`
      ),
        (this.audience = t),
        (this.scope = n),
        Object.setPrototypeOf(this, Sg.prototype);
    }
  };
function jm(e, t = []) {
  return e && !t.includes(e) ? e : "";
}
const xl = () => window.crypto,
  rd = () => {
    const e =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
    let t = "";
    return (
      Array.from(xl().getRandomValues(new Uint8Array(43))).forEach(
        (n) => (t += e[n % e.length])
      ),
      t
    );
  },
  zm = (e) => btoa(e),
  cf = (e) => {
    var { clientId: t } = e,
      n = Kn(e, ["clientId"]);
    return new URLSearchParams(
      ((r) =>
        Object.keys(r)
          .filter((o) => r[o] !== void 0)
          .reduce(
            (o, i) => Object.assign(Object.assign({}, o), { [i]: r[i] }),
            {}
          ))(Object.assign({ client_id: t }, n))
    ).toString();
  },
  Dm = (e) =>
    ((t) =>
      decodeURIComponent(
        atob(t)
          .split("")
          .map((n) => "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      ))(e.replace(/_/g, "/").replace(/-/g, "+")),
  Gx = async (e, t) => {
    const n = await fetch(e, t);
    return { ok: n.ok, json: await n.json() };
  },
  Xx = async (e, t, n) => {
    const r = new AbortController();
    let o;
    return (
      (t.signal = r.signal),
      Promise.race([
        Gx(e, t),
        new Promise((i, a) => {
          o = setTimeout(() => {
            r.abort(), a(new Error("Timeout when executing 'fetch'"));
          }, n);
        }),
      ]).finally(() => {
        clearTimeout(o);
      })
    );
  },
  Zx = async (e, t, n, r, o, i, a) => {
    return (
      (s = {
        auth: { audience: t, scope: n },
        timeout: o,
        fetchUrl: e,
        fetchOptions: r,
        useFormData: a,
      }),
      (l = i),
      new Promise(function (u, c) {
        const d = new MessageChannel();
        (d.port1.onmessage = function (f) {
          f.data.error ? c(new Error(f.data.error)) : u(f.data),
            d.port1.close();
        }),
          l.postMessage(s, [d.port2]);
      })
    );
    var s, l;
  },
  Yx = async (e, t, n, r, o, i, a = 1e4) =>
    o ? Zx(e, t, n, r, a, o, i) : Xx(e, r, a);
async function Jx(e, t) {
  var {
      baseUrl: n,
      timeout: r,
      audience: o,
      scope: i,
      auth0Client: a,
      useFormData: s,
    } = e,
    l = Kn(e, [
      "baseUrl",
      "timeout",
      "audience",
      "scope",
      "auth0Client",
      "useFormData",
    ]);
  const u = s ? cf(l) : JSON.stringify(l);
  return await (async function (c, d, f, h, p, g, w) {
    let b,
      m = null;
    for (let E = 0; E < 3; E++)
      try {
        (b = await Yx(c, f, h, p, g, w, d)), (m = null);
        break;
      } catch (O) {
        m = O;
      }
    if (m) throw m;
    const y = b.json,
      { error: v, error_description: S } = y,
      k = Kn(y, ["error", "error_description"]),
      { ok: C } = b;
    if (!C) {
      const E = S || `HTTP error. Unable to fetch ${c}`;
      throw v === "mfa_required"
        ? new Qx(v, E, k.mfa_token)
        : v === "missing_refresh_token"
        ? new wg(f, h)
        : new Jt(v || "request_error", E);
    }
    return k;
  })(
    `${n}/oauth/token`,
    r,
    o || "default",
    i,
    {
      method: "POST",
      body: u,
      headers: {
        "Content-Type": s
          ? "application/x-www-form-urlencoded"
          : "application/json",
        "Auth0-Client": btoa(JSON.stringify(a || pg)),
      },
    },
    t,
    s
  );
}
const Hs = (...e) => {
  return ((t = e.filter(Boolean).join(" ").trim().split(/\s+/)),
  Array.from(new Set(t))).join(" ");
  var t;
};
let ko = class df {
    constructor(t, n = "@@auth0spajs@@", r) {
      (this.prefix = n),
        (this.suffix = r),
        (this.clientId = t.clientId),
        (this.scope = t.scope),
        (this.audience = t.audience);
    }
    toKey() {
      return [
        this.prefix,
        this.clientId,
        this.audience,
        this.scope,
        this.suffix,
      ]
        .filter(Boolean)
        .join("::");
    }
    static fromKey(t) {
      const [n, r, o, i] = t.split("::");
      return new df({ clientId: r, scope: i, audience: o }, n);
    }
    static fromCacheEntry(t) {
      const { scope: n, audience: r, client_id: o } = t;
      return new df({ scope: n, audience: r, clientId: o });
    }
  },
  ek = class {
    set(t, n) {
      localStorage.setItem(t, JSON.stringify(n));
    }
    get(t) {
      const n = window.localStorage.getItem(t);
      if (n)
        try {
          return JSON.parse(n);
        } catch {
          return;
        }
    }
    remove(t) {
      localStorage.removeItem(t);
    }
    allKeys() {
      return Object.keys(window.localStorage).filter((t) =>
        t.startsWith("@@auth0spajs@@")
      );
    }
  },
  xg = class {
    constructor() {
      this.enclosedCache = (function () {
        let t = {};
        return {
          set(n, r) {
            t[n] = r;
          },
          get(n) {
            const r = t[n];
            if (r) return r;
          },
          remove(n) {
            delete t[n];
          },
          allKeys: () => Object.keys(t),
        };
      })();
    }
  },
  tk = class {
    constructor(t, n, r) {
      (this.cache = t), (this.keyManifest = n), (this.nowProvider = r || hg);
    }
    async setIdToken(t, n, r) {
      var o;
      const i = this.getIdTokenCacheKey(t);
      await this.cache.set(i, { id_token: n, decodedToken: r }),
        await ((o = this.keyManifest) === null || o === void 0
          ? void 0
          : o.add(i));
    }
    async getIdToken(t) {
      const n = await this.cache.get(this.getIdTokenCacheKey(t.clientId));
      if (!n && t.scope && t.audience) {
        const r = await this.get(t);
        return !r || !r.id_token || !r.decodedToken
          ? void 0
          : { id_token: r.id_token, decodedToken: r.decodedToken };
      }
      if (n) return { id_token: n.id_token, decodedToken: n.decodedToken };
    }
    async get(t, n = 0) {
      var r;
      let o = await this.cache.get(t.toKey());
      if (!o) {
        const s = await this.getCacheKeys();
        if (!s) return;
        const l = this.matchExistingCacheKey(t, s);
        l && (o = await this.cache.get(l));
      }
      if (!o) return;
      const i = await this.nowProvider(),
        a = Math.floor(i / 1e3);
      return o.expiresAt - n < a
        ? o.body.refresh_token
          ? ((o.body = { refresh_token: o.body.refresh_token }),
            await this.cache.set(t.toKey(), o),
            o.body)
          : (await this.cache.remove(t.toKey()),
            void (await ((r = this.keyManifest) === null || r === void 0
              ? void 0
              : r.remove(t.toKey()))))
        : o.body;
    }
    async set(t) {
      var n;
      const r = new ko({
          clientId: t.client_id,
          scope: t.scope,
          audience: t.audience,
        }),
        o = await this.wrapCacheEntry(t);
      await this.cache.set(r.toKey(), o),
        await ((n = this.keyManifest) === null || n === void 0
          ? void 0
          : n.add(r.toKey()));
    }
    async clear(t) {
      var n;
      const r = await this.getCacheKeys();
      r &&
        (await r
          .filter((o) => !t || o.includes(t))
          .reduce(async (o, i) => {
            await o, await this.cache.remove(i);
          }, Promise.resolve()),
        await ((n = this.keyManifest) === null || n === void 0
          ? void 0
          : n.clear()));
    }
    async wrapCacheEntry(t) {
      const n = await this.nowProvider();
      return { body: t, expiresAt: Math.floor(n / 1e3) + t.expires_in };
    }
    async getCacheKeys() {
      var t;
      return this.keyManifest
        ? (t = await this.keyManifest.get()) === null || t === void 0
          ? void 0
          : t.keys
        : this.cache.allKeys
        ? this.cache.allKeys()
        : void 0;
    }
    getIdTokenCacheKey(t) {
      return new ko({ clientId: t }, "@@auth0spajs@@", "@@user@@").toKey();
    }
    matchExistingCacheKey(t, n) {
      return n.filter((r) => {
        var o;
        const i = ko.fromKey(r),
          a = new Set(i.scope && i.scope.split(" ")),
          s =
            ((o = t.scope) === null || o === void 0 ? void 0 : o.split(" ")) ||
            [],
          l = i.scope && s.reduce((u, c) => u && a.has(c), !0);
        return (
          i.prefix === "@@auth0spajs@@" &&
          i.clientId === t.clientId &&
          i.audience === t.audience &&
          l
        );
      })[0];
    }
  },
  nk = class {
    constructor(t, n, r) {
      (this.storage = t),
        (this.clientId = n),
        (this.cookieDomain = r),
        (this.storageKey = `a0.spajs.txs.${this.clientId}`);
    }
    create(t) {
      this.storage.save(this.storageKey, t, {
        daysUntilExpire: 1,
        cookieDomain: this.cookieDomain,
      });
    }
    get() {
      return this.storage.get(this.storageKey);
    }
    remove() {
      this.storage.remove(this.storageKey, { cookieDomain: this.cookieDomain });
    }
  };
const la = (e) => typeof e == "number",
  rk = [
    "iss",
    "aud",
    "exp",
    "nbf",
    "iat",
    "jti",
    "azp",
    "nonce",
    "auth_time",
    "at_hash",
    "c_hash",
    "acr",
    "amr",
    "sub_jwk",
    "cnf",
    "sip_from_tag",
    "sip_date",
    "sip_callid",
    "sip_cseq_num",
    "sip_via_branch",
    "orig",
    "dest",
    "mky",
    "events",
    "toe",
    "txn",
    "rph",
    "sid",
    "vot",
    "vtm",
  ],
  ok = (e) => {
    if (!e.id_token) throw new Error("ID token is required but missing");
    const t = ((i) => {
      const a = i.split("."),
        [s, l, u] = a;
      if (a.length !== 3 || !s || !l || !u)
        throw new Error("ID token could not be decoded");
      const c = JSON.parse(Dm(l)),
        d = { __raw: i },
        f = {};
      return (
        Object.keys(c).forEach((h) => {
          (d[h] = c[h]), rk.includes(h) || (f[h] = c[h]);
        }),
        {
          encoded: { header: s, payload: l, signature: u },
          header: JSON.parse(Dm(s)),
          claims: d,
          user: f,
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        "Issuer (iss) claim must be a string present in the ID token"
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        `Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`
      );
    if (!t.user.sub)
      throw new Error(
        "Subject (sub) claim must be a string present in the ID token"
      );
    if (t.header.alg !== "RS256")
      throw new Error(
        `Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`
      );
    if (
      !t.claims.aud ||
      (typeof t.claims.aud != "string" && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        "Audience (aud) claim must be a string or array of strings present in the ID token"
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          `Audience (aud) claim mismatch in the ID token; expected "${
            e.aud
          }" but was not one of "${t.claims.aud.join(", ")}"`
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            "Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values"
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            `Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        `Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          "Nonce (nonce) claim must be a string present in the ID token"
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          `Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`
        );
    }
    if (e.max_age && !la(t.claims.auth_time))
      throw new Error(
        "Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified"
      );
    if (t.claims.exp == null || !la(t.claims.exp))
      throw new Error(
        "Expiration Time (exp) claim must be a number present in the ID token"
      );
    if (!la(t.claims.iat))
      throw new Error(
        "Issued At (iat) claim must be a number present in the ID token"
      );
    const n = e.leeway || 60,
      r = new Date(e.now || Date.now()),
      o = new Date(0);
    if ((o.setUTCSeconds(t.claims.exp + n), r > o))
      throw new Error(
        `Expiration Time (exp) claim error in the ID token; current time (${r}) is after expiration time (${o})`
      );
    if (t.claims.nbf != null && la(t.claims.nbf)) {
      const i = new Date(0);
      if ((i.setUTCSeconds(t.claims.nbf - n), r < i))
        throw new Error(
          `Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${r}) is before ${i}`
        );
    }
    if (t.claims.auth_time != null && la(t.claims.auth_time)) {
      const i = new Date(0);
      if (
        (i.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n), r > i)
      )
        throw new Error(
          `Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${r}) is after last auth at ${i}`
        );
    }
    if (e.organization) {
      const i = e.organization.trim();
      if (i.startsWith("org_")) {
        const a = i;
        if (!t.claims.org_id)
          throw new Error(
            "Organization ID (org_id) claim must be a string present in the ID token"
          );
        if (a !== t.claims.org_id)
          throw new Error(
            `Organization ID (org_id) claim mismatch in the ID token; expected "${a}", found "${t.claims.org_id}"`
          );
      } else {
        const a = i.toLowerCase();
        if (!t.claims.org_name)
          throw new Error(
            "Organization Name (org_name) claim must be a string present in the ID token"
          );
        if (a !== t.claims.org_name)
          throw new Error(
            `Organization Name (org_name) claim mismatch in the ID token; expected "${a}", found "${t.claims.org_name}"`
          );
      }
    }
    return t;
  };
var Co = Qp(function (e, t) {
  var n =
    (xo && xo.__assign) ||
    function () {
      return (
        (n =
          Object.assign ||
          function (l) {
            for (var u, c = 1, d = arguments.length; c < d; c++)
              for (var f in (u = arguments[c]))
                Object.prototype.hasOwnProperty.call(u, f) && (l[f] = u[f]);
            return l;
          }),
        n.apply(this, arguments)
      );
    };
  function r(l, u) {
    if (!u) return "";
    var c = "; " + l;
    return u === !0 ? c : c + "=" + u;
  }
  function o(l, u, c) {
    return (
      encodeURIComponent(l)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29") +
      "=" +
      encodeURIComponent(u).replace(
        /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
        decodeURIComponent
      ) +
      (function (d) {
        if (typeof d.expires == "number") {
          var f = new Date();
          f.setMilliseconds(f.getMilliseconds() + 864e5 * d.expires),
            (d.expires = f);
        }
        return (
          r("Expires", d.expires ? d.expires.toUTCString() : "") +
          r("Domain", d.domain) +
          r("Path", d.path) +
          r("Secure", d.secure) +
          r("SameSite", d.sameSite)
        );
      })(c)
    );
  }
  function i(l) {
    for (
      var u = {}, c = l ? l.split("; ") : [], d = /(%[\dA-F]{2})+/gi, f = 0;
      f < c.length;
      f++
    ) {
      var h = c[f].split("="),
        p = h.slice(1).join("=");
      p.charAt(0) === '"' && (p = p.slice(1, -1));
      try {
        u[h[0].replace(d, decodeURIComponent)] = p.replace(
          d,
          decodeURIComponent
        );
      } catch {}
    }
    return u;
  }
  function a() {
    return i(document.cookie);
  }
  function s(l, u, c) {
    document.cookie = o(l, u, n({ path: "/" }, c));
  }
  (t.__esModule = !0),
    (t.encode = o),
    (t.parse = i),
    (t.getAll = a),
    (t.get = function (l) {
      return a()[l];
    }),
    (t.set = s),
    (t.remove = function (l, u) {
      s(l, "", n(n({}, u), { expires: -1 }));
    });
});
Kp(Co), Co.encode, Co.parse, Co.getAll;
var ik = Co.get,
  kg = Co.set,
  Cg = Co.remove;
const ni = {
    get(e) {
      const t = ik(e);
      if (t !== void 0) return JSON.parse(t);
    },
    save(e, t, n) {
      let r = {};
      window.location.protocol === "https:" &&
        (r = { secure: !0, sameSite: "none" }),
        n != null && n.daysUntilExpire && (r.expires = n.daysUntilExpire),
        n != null && n.cookieDomain && (r.domain = n.cookieDomain),
        kg(e, JSON.stringify(t), r);
    },
    remove(e, t) {
      let n = {};
      t != null && t.cookieDomain && (n.domain = t.cookieDomain), Cg(e, n);
    },
  },
  ak = {
    get(e) {
      return ni.get(e) || ni.get(`_legacy_${e}`);
    },
    save(e, t, n) {
      let r = {};
      window.location.protocol === "https:" && (r = { secure: !0 }),
        n != null && n.daysUntilExpire && (r.expires = n.daysUntilExpire),
        n != null && n.cookieDomain && (r.domain = n.cookieDomain),
        kg(`_legacy_${e}`, JSON.stringify(t), r),
        ni.save(e, t, n);
    },
    remove(e, t) {
      let n = {};
      t != null && t.cookieDomain && (n.domain = t.cookieDomain),
        Cg(e, n),
        ni.remove(e, t),
        ni.remove(`_legacy_${e}`, t);
    },
  },
  sk = {
    get(e) {
      if (typeof sessionStorage > "u") return;
      const t = sessionStorage.getItem(e);
      return t != null ? JSON.parse(t) : void 0;
    },
    save(e, t) {
      sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove(e) {
      sessionStorage.removeItem(e);
    },
  };
function lk(e, t, n) {
  var r = t === void 0 ? null : t,
    o = (function (l, u) {
      var c = atob(l);
      if (u) {
        for (var d = new Uint8Array(c.length), f = 0, h = c.length; f < h; ++f)
          d[f] = c.charCodeAt(f);
        return String.fromCharCode.apply(null, new Uint16Array(d.buffer));
      }
      return c;
    })(e, n !== void 0 && n),
    i =
      o.indexOf(
        `
`,
        10
      ) + 1,
    a = o.substring(i) + (r ? "//# sourceMappingURL=" + r : ""),
    s = new Blob([a], { type: "application/javascript" });
  return URL.createObjectURL(s);
}
var Um,
  Fm,
  Bm,
  od,
  uk =
    ((Um =
      "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9ImZ1bmN0aW9uIj09dHlwZW9mIFN1cHByZXNzZWRFcnJvciYmU3VwcHJlc3NlZEVycm9yO2NvbnN0IHM9ZT0+e3ZhcntjbGllbnRJZDp0fT1lLHI9ZnVuY3Rpb24oZSx0KXt2YXIgcj17fTtmb3IodmFyIHMgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxzKSYmdC5pbmRleE9mKHMpPDAmJihyW3NdPWVbc10pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxzLmxlbmd0aDtvKyspdC5pbmRleE9mKHNbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHNbb10pJiYocltzW29dXT1lW3Nbb11dKX1yZXR1cm4gcn0oZSxbImNsaWVudElkIl0pO3JldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKChlPT5PYmplY3Qua2V5cyhlKS5maWx0ZXIoKHQ9PnZvaWQgMCE9PWVbdF0pKS5yZWR1Y2UoKCh0LHIpPT5PYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sdCkse1tyXTplW3JdfSkpLHt9KSkoT2JqZWN0LmFzc2lnbih7Y2xpZW50X2lkOnR9LHIpKSkudG9TdHJpbmcoKX07bGV0IG89e307Y29uc3Qgbj0oZSx0KT0+YCR7ZX18JHt0fWA7YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGFzeW5jKHtkYXRhOnt0aW1lb3V0OmUsYXV0aDpyLGZldGNoVXJsOmksZmV0Y2hPcHRpb25zOmMsdXNlRm9ybURhdGE6YX0scG9ydHM6W3BdfSk9PntsZXQgZjtjb25zdHthdWRpZW5jZTp1LHNjb3BlOmx9PXJ8fHt9O3RyeXtjb25zdCByPWE/KGU9Pntjb25zdCB0PW5ldyBVUkxTZWFyY2hQYXJhbXMoZSkscj17fTtyZXR1cm4gdC5mb3JFYWNoKCgoZSx0KT0+e3JbdF09ZX0pKSxyfSkoYy5ib2R5KTpKU09OLnBhcnNlKGMuYm9keSk7aWYoIXIucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09ci5ncmFudF90eXBlKXtjb25zdCBlPSgoZSx0KT0+b1tuKGUsdCldKSh1LGwpO2lmKCFlKXRocm93IG5ldyB0KHUsbCk7Yy5ib2R5PWE/cyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKTpKU09OLnN0cmluZ2lmeShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30scikse3JlZnJlc2hfdG9rZW46ZX0pKX1sZXQgaCxnOyJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJihoPW5ldyBBYm9ydENvbnRyb2xsZXIsYy5zaWduYWw9aC5zaWduYWwpO3RyeXtnPWF3YWl0IFByb21pc2UucmFjZShbKGQ9ZSxuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLGQpKSkpLGZldGNoKGksT2JqZWN0LmFzc2lnbih7fSxjKSldKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBwLnBvc3RNZXNzYWdlKHtlcnJvcjplLm1lc3NhZ2V9KX1pZighZylyZXR1cm4gaCYmaC5hYm9ydCgpLHZvaWQgcC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KTtmPWF3YWl0IGcuanNvbigpLGYucmVmcmVzaF90b2tlbj8oKChlLHQscik9PntvW24odCxyKV09ZX0pKGYucmVmcmVzaF90b2tlbix1LGwpLGRlbGV0ZSBmLnJlZnJlc2hfdG9rZW4pOigoZSx0KT0+e2RlbGV0ZSBvW24oZSx0KV19KSh1LGwpLHAucG9zdE1lc3NhZ2Uoe29rOmcub2ssanNvbjpmfSl9Y2F0Y2goZSl7cC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3I6ZS5lcnJvcixlcnJvcl9kZXNjcmlwdGlvbjplLm1lc3NhZ2V9fSl9dmFyIGR9KSl9KCk7Cgo="),
    (Fm = null),
    (Bm = !1),
    function (e) {
      return (od = od || lk(Um, Fm, Bm)), new Worker(od, e);
    });
const id = {};
let ck = class {
  constructor(t, n) {
    (this.cache = t),
      (this.clientId = n),
      (this.manifestKey = this.createManifestKeyFrom(this.clientId));
  }
  async add(t) {
    var n;
    const r = new Set(
      ((n = await this.cache.get(this.manifestKey)) === null || n === void 0
        ? void 0
        : n.keys) || []
    );
    r.add(t), await this.cache.set(this.manifestKey, { keys: [...r] });
  }
  async remove(t) {
    const n = await this.cache.get(this.manifestKey);
    if (n) {
      const r = new Set(n.keys);
      return (
        r.delete(t),
        r.size > 0
          ? await this.cache.set(this.manifestKey, { keys: [...r] })
          : await this.cache.remove(this.manifestKey)
      );
    }
  }
  get() {
    return this.cache.get(this.manifestKey);
  }
  clear() {
    return this.cache.remove(this.manifestKey);
  }
  createManifestKeyFrom(t) {
    return `@@auth0spajs@@::${t}`;
  }
};
const dk = {
    memory: () => new xg().enclosedCache,
    localstorage: () => new ek(),
  },
  qm = (e) => dk[e],
  Wm = (e) => {
    const { openUrl: t, onRedirect: n } = e,
      r = Kn(e, ["openUrl", "onRedirect"]);
    return Object.assign(Object.assign({}, r), {
      openUrl: t === !1 || t ? t : n,
    });
  },
  ad = new qx();
let fk = class {
  constructor(t) {
    let n, r;
    if (
      ((this.userCache = new xg().enclosedCache),
      (this.defaultOptions = {
        authorizationParams: { scope: "openid profile email" },
        useRefreshTokensFallback: !1,
        useFormData: !0,
      }),
      (this._releaseLockOnPageHide = async () => {
        await ad.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }),
      (this.options = Object.assign(
        Object.assign(Object.assign({}, this.defaultOptions), t),
        {
          authorizationParams: Object.assign(
            Object.assign({}, this.defaultOptions.authorizationParams),
            t.authorizationParams
          ),
        }
      )),
      typeof window < "u" &&
        (() => {
          if (!xl())
            throw new Error(
              "For security reasons, `window.crypto` is required to run `auth0-spa-js`."
            );
          if (xl().subtle === void 0)
            throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/main/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `);
        })(),
      t.cache &&
        t.cacheLocation &&
        console.warn(
          "Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."
        ),
      t.cache)
    )
      r = t.cache;
    else {
      if (((n = t.cacheLocation || "memory"), !qm(n)))
        throw new Error(`Invalid cache location "${n}"`);
      r = qm(n)();
    }
    (this.httpTimeoutMs = t.httpTimeoutInSeconds
      ? 1e3 * t.httpTimeoutInSeconds
      : 1e4),
      (this.cookieStorage = t.legacySameSiteCookie === !1 ? ni : ak),
      (this.orgHintCookieName = `auth0.${this.options.clientId}.organization_hint`),
      (this.isAuthenticatedCookieName = ((a) => `auth0.${a}.is.authenticated`)(
        this.options.clientId
      )),
      (this.sessionCheckExpiryDays = t.sessionCheckExpiryDays || 1);
    const o = t.useCookiesForTransactions ? this.cookieStorage : sk;
    var i;
    (this.scope = Hs(
      "openid",
      this.options.authorizationParams.scope,
      this.options.useRefreshTokens ? "offline_access" : ""
    )),
      (this.transactionManager = new nk(
        o,
        this.options.clientId,
        this.options.cookieDomain
      )),
      (this.nowProvider = this.options.nowProvider || hg),
      (this.cacheManager = new tk(
        r,
        r.allKeys ? void 0 : new ck(r, this.options.clientId),
        this.nowProvider
      )),
      (this.domainUrl =
        ((i = this.options.domain),
        /^https?:\/\//.test(i) ? i : `https://${i}`)),
      (this.tokenIssuer = ((a, s) =>
        a ? (a.startsWith("https://") ? a : `https://${a}/`) : `${s}/`)(
        this.options.issuer,
        this.domainUrl
      )),
      typeof window < "u" &&
        window.Worker &&
        this.options.useRefreshTokens &&
        n === "memory" &&
        (this.options.workerUrl
          ? (this.worker = new Worker(this.options.workerUrl))
          : (this.worker = new uk()));
  }
  _url(t) {
    const n = encodeURIComponent(
      btoa(JSON.stringify(this.options.auth0Client || pg))
    );
    return `${this.domainUrl}${t}&auth0Client=${n}`;
  }
  _authorizeUrl(t) {
    return this._url(`/authorize?${cf(t)}`);
  }
  async _verifyIdToken(t, n, r) {
    const o = await this.nowProvider();
    return ok({
      iss: this.tokenIssuer,
      aud: this.options.clientId,
      id_token: t,
      nonce: n,
      organization: r,
      leeway: this.options.leeway,
      max_age:
        ((i = this.options.authorizationParams.max_age),
        typeof i != "string" ? i : parseInt(i, 10) || void 0),
      now: o,
    });
    var i;
  }
  _processOrgHint(t) {
    t
      ? this.cookieStorage.save(this.orgHintCookieName, t, {
          daysUntilExpire: this.sessionCheckExpiryDays,
          cookieDomain: this.options.cookieDomain,
        })
      : this.cookieStorage.remove(this.orgHintCookieName, {
          cookieDomain: this.options.cookieDomain,
        });
  }
  async _prepareAuthorizeUrl(t, n, r) {
    const o = zm(rd()),
      i = zm(rd()),
      a = rd(),
      s = ((c) => {
        const d = new Uint8Array(c);
        return ((f) => {
          const h = { "+": "-", "/": "_", "=": "" };
          return f.replace(/[+/=]/g, (p) => h[p]);
        })(window.btoa(String.fromCharCode(...Array.from(d))));
      })(
        await (async (c) =>
          await xl().subtle.digest(
            { name: "SHA-256" },
            new TextEncoder().encode(c)
          ))(a)
      ),
      l = ((c, d, f, h, p, g, w, b) =>
        Object.assign(
          Object.assign(
            Object.assign({ client_id: c.clientId }, c.authorizationParams),
            f
          ),
          {
            scope: Hs(d, f.scope),
            response_type: "code",
            response_mode: b || "query",
            state: h,
            nonce: p,
            redirect_uri: w || c.authorizationParams.redirect_uri,
            code_challenge: g,
            code_challenge_method: "S256",
          }
        ))(
        this.options,
        this.scope,
        t,
        o,
        i,
        s,
        t.redirect_uri || this.options.authorizationParams.redirect_uri || r,
        n == null ? void 0 : n.response_mode
      ),
      u = this._authorizeUrl(l);
    return {
      nonce: i,
      code_verifier: a,
      scope: l.scope,
      audience: l.audience || "default",
      redirect_uri: l.redirect_uri,
      state: o,
      url: u,
    };
  }
  async loginWithPopup(t, n) {
    var r;
    if (
      ((t = t || {}),
      !(n = n || {}).popup &&
        ((n.popup = ((s) => {
          const l = window.screenX + (window.innerWidth - 400) / 2,
            u = window.screenY + (window.innerHeight - 600) / 2;
          return window.open(
            s,
            "auth0:authorize:popup",
            `left=${l},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`
          );
        })("")),
        !n.popup))
    )
      throw new Error(
        "Unable to open a popup for loginWithPopup - window.open returned `null`"
      );
    const o = await this._prepareAuthorizeUrl(
      t.authorizationParams || {},
      { response_mode: "web_message" },
      window.location.origin
    );
    n.popup.location.href = o.url;
    const i = await ((s) =>
      new Promise((l, u) => {
        let c;
        const d = setInterval(() => {
            s.popup &&
              s.popup.closed &&
              (clearInterval(d),
              clearTimeout(f),
              window.removeEventListener("message", c, !1),
              u(new Kx(s.popup)));
          }, 1e3),
          f = setTimeout(() => {
            clearInterval(d),
              u(new Vx(s.popup)),
              window.removeEventListener("message", c, !1);
          }, 1e3 * (s.timeoutInSeconds || 60));
        (c = function (h) {
          if (h.data && h.data.type === "authorization_response") {
            if (
              (clearTimeout(f),
              clearInterval(d),
              window.removeEventListener("message", c, !1),
              s.popup.close(),
              h.data.response.error)
            )
              return u(Jt.fromPayload(h.data.response));
            l(h.data.response);
          }
        }),
          window.addEventListener("message", c);
      }))(
      Object.assign(Object.assign({}, n), {
        timeoutInSeconds:
          n.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60,
      })
    );
    if (o.state !== i.state) throw new Jt("state_mismatch", "Invalid state");
    const a =
      ((r = t.authorizationParams) === null || r === void 0
        ? void 0
        : r.organization) || this.options.authorizationParams.organization;
    await this._requestToken(
      {
        audience: o.audience,
        scope: o.scope,
        code_verifier: o.code_verifier,
        grant_type: "authorization_code",
        code: i.code,
        redirect_uri: o.redirect_uri,
      },
      { nonceIn: o.nonce, organization: a }
    );
  }
  async getUser() {
    var t;
    const n = await this._getIdTokenFromCache();
    return (t = n == null ? void 0 : n.decodedToken) === null || t === void 0
      ? void 0
      : t.user;
  }
  async getIdTokenClaims() {
    var t;
    const n = await this._getIdTokenFromCache();
    return (t = n == null ? void 0 : n.decodedToken) === null || t === void 0
      ? void 0
      : t.claims;
  }
  async loginWithRedirect(t = {}) {
    var n;
    const r = Wm(t),
      { openUrl: o, fragment: i, appState: a } = r,
      s = Kn(r, ["openUrl", "fragment", "appState"]),
      l =
        ((n = s.authorizationParams) === null || n === void 0
          ? void 0
          : n.organization) || this.options.authorizationParams.organization,
      u = await this._prepareAuthorizeUrl(s.authorizationParams || {}),
      { url: c } = u,
      d = Kn(u, ["url"]);
    this.transactionManager.create(
      Object.assign(
        Object.assign(Object.assign({}, d), { appState: a }),
        l && { organization: l }
      )
    );
    const f = i ? `${c}#${i}` : c;
    o ? await o(f) : window.location.assign(f);
  }
  async handleRedirectCallback(t = window.location.href) {
    const n = t.split("?").slice(1);
    if (n.length === 0)
      throw new Error("There are no query params available for parsing.");
    const {
        state: r,
        code: o,
        error: i,
        error_description: a,
      } = ((d) => {
        d.indexOf("#") > -1 && (d = d.substring(0, d.indexOf("#")));
        const f = new URLSearchParams(d);
        return {
          state: f.get("state"),
          code: f.get("code") || void 0,
          error: f.get("error") || void 0,
          error_description: f.get("error_description") || void 0,
        };
      })(n.join("")),
      s = this.transactionManager.get();
    if (!s) throw new Jt("missing_transaction", "Invalid state");
    if ((this.transactionManager.remove(), i))
      throw new Hx(i, a || i, r, s.appState);
    if (!s.code_verifier || (s.state && s.state !== r))
      throw new Jt("state_mismatch", "Invalid state");
    const l = s.organization,
      u = s.nonce,
      c = s.redirect_uri;
    return (
      await this._requestToken(
        Object.assign(
          {
            audience: s.audience,
            scope: s.scope,
            code_verifier: s.code_verifier,
            grant_type: "authorization_code",
            code: o,
          },
          c ? { redirect_uri: c } : {}
        ),
        { nonceIn: u, organization: l }
      ),
      { appState: s.appState }
    );
  }
  async checkSession(t) {
    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
      if (!this.cookieStorage.get("auth0.is.authenticated")) return;
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
        this.cookieStorage.remove("auth0.is.authenticated");
    }
    try {
      await this.getTokenSilently(t);
    } catch {}
  }
  async getTokenSilently(t = {}) {
    var n;
    const r = Object.assign(Object.assign({ cacheMode: "on" }, t), {
        authorizationParams: Object.assign(
          Object.assign(
            Object.assign({}, this.options.authorizationParams),
            t.authorizationParams
          ),
          {
            scope: Hs(
              this.scope,
              (n = t.authorizationParams) === null || n === void 0
                ? void 0
                : n.scope
            ),
          }
        ),
      }),
      o = await ((i, a) => {
        let s = id[a];
        return (
          s ||
            ((s = i().finally(() => {
              delete id[a], (s = null);
            })),
            (id[a] = s)),
          s
        );
      })(
        () => this._getTokenSilently(r),
        `${this.options.clientId}::${r.authorizationParams.audience}::${r.authorizationParams.scope}`
      );
    return t.detailedResponse ? o : o == null ? void 0 : o.access_token;
  }
  async _getTokenSilently(t) {
    const { cacheMode: n } = t,
      r = Kn(t, ["cacheMode"]);
    if (n !== "off") {
      const o = await this._getEntryFromCache({
        scope: r.authorizationParams.scope,
        audience: r.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      });
      if (o) return o;
    }
    if (n !== "cache-only") {
      if (
        !(await (async (o, i = 3) => {
          for (let a = 0; a < i; a++) if (await o()) return !0;
          return !1;
        })(() => ad.acquireLock("auth0.lock.getTokenSilently", 5e3), 10))
      )
        throw new uf();
      try {
        if (
          (window.addEventListener("pagehide", this._releaseLockOnPageHide),
          n !== "off")
        ) {
          const u = await this._getEntryFromCache({
            scope: r.authorizationParams.scope,
            audience: r.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          });
          if (u) return u;
        }
        const o = this.options.useRefreshTokens
            ? await this._getTokenUsingRefreshToken(r)
            : await this._getTokenFromIFrame(r),
          {
            id_token: i,
            access_token: a,
            oauthTokenScope: s,
            expires_in: l,
          } = o;
        return Object.assign(
          Object.assign(
            { id_token: i, access_token: a },
            s ? { scope: s } : null
          ),
          { expires_in: l }
        );
      } finally {
        await ad.releaseLock("auth0.lock.getTokenSilently"),
          window.removeEventListener("pagehide", this._releaseLockOnPageHide);
      }
    }
  }
  async getTokenWithPopup(t = {}, n = {}) {
    var r;
    const o = Object.assign(Object.assign({}, t), {
      authorizationParams: Object.assign(
        Object.assign(
          Object.assign({}, this.options.authorizationParams),
          t.authorizationParams
        ),
        {
          scope: Hs(
            this.scope,
            (r = t.authorizationParams) === null || r === void 0
              ? void 0
              : r.scope
          ),
        }
      ),
    });
    return (
      (n = Object.assign(Object.assign({}, Wx), n)),
      await this.loginWithPopup(o, n),
      (
        await this.cacheManager.get(
          new ko({
            scope: o.authorizationParams.scope,
            audience: o.authorizationParams.audience || "default",
            clientId: this.options.clientId,
          })
        )
      ).access_token
    );
  }
  async isAuthenticated() {
    return !!(await this.getUser());
  }
  _buildLogoutUrl(t) {
    t.clientId !== null
      ? (t.clientId = t.clientId || this.options.clientId)
      : delete t.clientId;
    const n = t.logoutParams || {},
      { federated: r } = n,
      o = Kn(n, ["federated"]),
      i = r ? "&federated" : "";
    return (
      this._url(
        `/v2/logout?${cf(Object.assign({ clientId: t.clientId }, o))}`
      ) + i
    );
  }
  async logout(t = {}) {
    const n = Wm(t),
      { openUrl: r } = n,
      o = Kn(n, ["openUrl"]);
    t.clientId === null
      ? await this.cacheManager.clear()
      : await this.cacheManager.clear(t.clientId || this.options.clientId),
      this.cookieStorage.remove(this.orgHintCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.cookieStorage.remove(this.isAuthenticatedCookieName, {
        cookieDomain: this.options.cookieDomain,
      }),
      this.userCache.remove("@@user@@");
    const i = this._buildLogoutUrl(o);
    r ? await r(i) : r !== !1 && window.location.assign(i);
  }
  async _getTokenFromIFrame(t) {
    const n = Object.assign(Object.assign({}, t.authorizationParams), {
        prompt: "none",
      }),
      r = this.cookieStorage.get(this.orgHintCookieName);
    r && !n.organization && (n.organization = r);
    const {
      url: o,
      state: i,
      nonce: a,
      code_verifier: s,
      redirect_uri: l,
      scope: u,
      audience: c,
    } = await this._prepareAuthorizeUrl(
      n,
      { response_mode: "web_message" },
      window.location.origin
    );
    try {
      if (window.crossOriginIsolated)
        throw new Jt(
          "login_required",
          "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible."
        );
      const d = t.timeoutInSeconds || this.options.authorizeTimeoutInSeconds,
        f = await ((p, g, w = 60) =>
          new Promise((b, m) => {
            const y = window.document.createElement("iframe");
            y.setAttribute("width", "0"),
              y.setAttribute("height", "0"),
              (y.style.display = "none");
            const v = () => {
              window.document.body.contains(y) &&
                (window.document.body.removeChild(y),
                window.removeEventListener("message", S, !1));
            };
            let S;
            const k = setTimeout(() => {
              m(new uf()), v();
            }, 1e3 * w);
            (S = function (C) {
              if (
                C.origin != g ||
                !C.data ||
                C.data.type !== "authorization_response"
              )
                return;
              const E = C.source;
              E && E.close(),
                C.data.response.error
                  ? m(Jt.fromPayload(C.data.response))
                  : b(C.data.response),
                clearTimeout(k),
                window.removeEventListener("message", S, !1),
                setTimeout(v, 2e3);
            }),
              window.addEventListener("message", S, !1),
              window.document.body.appendChild(y),
              y.setAttribute("src", p);
          }))(o, this.domainUrl, d);
      if (i !== f.state) throw new Jt("state_mismatch", "Invalid state");
      const h = await this._requestToken(
        Object.assign(Object.assign({}, t.authorizationParams), {
          code_verifier: s,
          code: f.code,
          grant_type: "authorization_code",
          redirect_uri: l,
          timeout: t.authorizationParams.timeout || this.httpTimeoutMs,
        }),
        { nonceIn: a, organization: n.organization }
      );
      return Object.assign(Object.assign({}, h), {
        scope: u,
        oauthTokenScope: h.scope,
        audience: c,
      });
    } catch (d) {
      throw (d.error === "login_required" && this.logout({ openUrl: !1 }), d);
    }
  }
  async _getTokenUsingRefreshToken(t) {
    const n = await this.cacheManager.get(
      new ko({
        scope: t.authorizationParams.scope,
        audience: t.authorizationParams.audience || "default",
        clientId: this.options.clientId,
      })
    );
    if (!((n && n.refresh_token) || this.worker)) {
      if (this.options.useRefreshTokensFallback)
        return await this._getTokenFromIFrame(t);
      throw new wg(
        t.authorizationParams.audience || "default",
        t.authorizationParams.scope
      );
    }
    const r =
        t.authorizationParams.redirect_uri ||
        this.options.authorizationParams.redirect_uri ||
        window.location.origin,
      o =
        typeof t.timeoutInSeconds == "number" ? 1e3 * t.timeoutInSeconds : null;
    try {
      const i = await this._requestToken(
        Object.assign(
          Object.assign(Object.assign({}, t.authorizationParams), {
            grant_type: "refresh_token",
            refresh_token: n && n.refresh_token,
            redirect_uri: r,
          }),
          o && { timeout: o }
        )
      );
      return Object.assign(Object.assign({}, i), {
        scope: t.authorizationParams.scope,
        oauthTokenScope: i.scope,
        audience: t.authorizationParams.audience || "default",
      });
    } catch (i) {
      if (
        (i.message.indexOf("Missing Refresh Token") > -1 ||
          (i.message && i.message.indexOf("invalid refresh token") > -1)) &&
        this.options.useRefreshTokensFallback
      )
        return await this._getTokenFromIFrame(t);
      throw i;
    }
  }
  async _saveEntryInCache(t) {
    const { id_token: n, decodedToken: r } = t,
      o = Kn(t, ["id_token", "decodedToken"]);
    this.userCache.set("@@user@@", { id_token: n, decodedToken: r }),
      await this.cacheManager.setIdToken(
        this.options.clientId,
        t.id_token,
        t.decodedToken
      ),
      await this.cacheManager.set(o);
  }
  async _getIdTokenFromCache() {
    const t = this.options.authorizationParams.audience || "default",
      n = await this.cacheManager.getIdToken(
        new ko({
          clientId: this.options.clientId,
          audience: t,
          scope: this.scope,
        })
      ),
      r = this.userCache.get("@@user@@");
    return n && n.id_token === (r == null ? void 0 : r.id_token)
      ? r
      : (this.userCache.set("@@user@@", n), n);
  }
  async _getEntryFromCache({ scope: t, audience: n, clientId: r }) {
    const o = await this.cacheManager.get(
      new ko({ scope: t, audience: n, clientId: r }),
      60
    );
    if (o && o.access_token) {
      const { access_token: i, oauthTokenScope: a, expires_in: s } = o,
        l = await this._getIdTokenFromCache();
      return (
        l &&
        Object.assign(
          Object.assign(
            { id_token: l.id_token, access_token: i },
            a ? { scope: a } : null
          ),
          { expires_in: s }
        )
      );
    }
  }
  async _requestToken(t, n) {
    const { nonceIn: r, organization: o } = n || {},
      i = await Jx(
        Object.assign(
          {
            baseUrl: this.domainUrl,
            client_id: this.options.clientId,
            auth0Client: this.options.auth0Client,
            useFormData: this.options.useFormData,
            timeout: this.httpTimeoutMs,
          },
          t
        ),
        this.worker
      ),
      a = await this._verifyIdToken(i.id_token, r, o);
    return (
      await this._saveEntryInCache(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, i), {
              decodedToken: a,
              scope: t.scope,
              audience: t.audience || "default",
            }),
            i.scope ? { oauthTokenScope: i.scope } : null
          ),
          { client_id: this.options.clientId }
        )
      ),
      this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
        daysUntilExpire: this.sessionCheckExpiryDays,
        cookieDomain: this.options.cookieDomain,
      }),
      this._processOrgHint(o || a.claims.org_id),
      Object.assign(Object.assign({}, i), { decodedToken: a })
    );
  }
};
var Eg = { isAuthenticated: !1, isLoading: !0 },
  ir = function () {
    throw new Error("You forgot to wrap your component in <Auth0Provider>.");
  },
  pk = ct(ct({}, Eg), {
    buildAuthorizeUrl: ir,
    buildLogoutUrl: ir,
    getAccessTokenSilently: ir,
    getAccessTokenWithPopup: ir,
    getIdTokenClaims: ir,
    loginWithRedirect: ir,
    loginWithPopup: ir,
    logout: ir,
    handleRedirectCallback: ir,
  }),
  Pg = x.createContext(pk),
  Hm = (function (e) {
    Fx(t, e);
    function t(n, r) {
      var o = e.call(this, r || n) || this;
      return (
        (o.error = n),
        (o.error_description = r),
        Object.setPrototypeOf(o, t.prototype),
        o
      );
    }
    return t;
  })(Error),
  hk = /[?&]code=[^&]+/,
  mk = /[?&]state=[^&]+/,
  vk = /[?&]error=[^&]+/,
  yk = function (e) {
    return (
      e === void 0 && (e = window.location.search),
      (hk.test(e) || vk.test(e)) && mk.test(e)
    );
  },
  Rg = function (e) {
    return function (t) {
      return t instanceof Error
        ? t
        : t !== null &&
          typeof t == "object" &&
          "error" in t &&
          typeof t.error == "string"
        ? "error_description" in t && typeof t.error_description == "string"
          ? new Hm(t.error, t.error_description)
          : new Hm(t.error)
        : new Error(e);
    };
  },
  Vm = Rg("Login failed"),
  sd = Rg("Get access token failed"),
  Og = function (e) {
    var t;
    e != null &&
      e.redirectUri &&
      (console.warn(
        "Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"
      ),
      (e.authorizationParams = e.authorizationParams || {}),
      (e.authorizationParams.redirect_uri = e.redirectUri),
      delete e.redirectUri),
      !(
        (t = e == null ? void 0 : e.authorizationParams) === null ||
        t === void 0
      ) &&
        t.redirectUri &&
        (console.warn(
          "Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"
        ),
        (e.authorizationParams.redirect_uri =
          e.authorizationParams.redirectUri),
        delete e.authorizationParams.redirectUri);
  },
  gk = function (e, t) {
    switch (t.type) {
      case "LOGIN_POPUP_STARTED":
        return ct(ct({}, e), { isLoading: !0 });
      case "LOGIN_POPUP_COMPLETE":
      case "INITIALISED":
        return ct(ct({}, e), {
          isAuthenticated: !!t.user,
          user: t.user,
          isLoading: !1,
          error: void 0,
        });
      case "HANDLE_REDIRECT_COMPLETE":
      case "GET_ACCESS_TOKEN_COMPLETE":
        return e.user === t.user
          ? e
          : ct(ct({}, e), { isAuthenticated: !!t.user, user: t.user });
      case "LOGOUT":
        return ct(ct({}, e), { isAuthenticated: !1, user: void 0 });
      case "ERROR":
        return ct(ct({}, e), { isLoading: !1, error: t.error });
    }
  },
  bk = function (e) {
    return (
      Og(e),
      ct(ct({}, e), { auth0Client: { name: "auth0-react", version: "2.2.4" } })
    );
  },
  wk = function (e) {
    window.history.replaceState(
      {},
      document.title,
      (e == null ? void 0 : e.returnTo) || window.location.pathname
    );
  },
  Sk = function (e) {
    var t = e.children,
      n = e.skipRedirectCallback,
      r = e.onRedirectCallback,
      o = r === void 0 ? wk : r,
      i = e.context,
      a = i === void 0 ? Pg : i,
      s = Bx(e, [
        "children",
        "skipRedirectCallback",
        "onRedirectCallback",
        "context",
      ]),
      l = x.useState(function () {
        return new fk(bk(s));
      })[0],
      u = x.useReducer(gk, Eg),
      c = u[0],
      d = u[1],
      f = x.useRef(!1);
    x.useEffect(
      function () {
        f.current ||
          ((f.current = !0),
          (function () {
            return Ko(void 0, void 0, void 0, function () {
              var S, k, C;
              return Qo(this, function (E) {
                switch (E.label) {
                  case 0:
                    return (
                      E.trys.push([0, 7, , 8]),
                      (S = void 0),
                      yk() && !n ? [4, l.handleRedirectCallback()] : [3, 3]
                    );
                  case 1:
                    return (k = E.sent().appState), [4, l.getUser()];
                  case 2:
                    return (S = E.sent()), o(k, S), [3, 6];
                  case 3:
                    return [4, l.checkSession()];
                  case 4:
                    return E.sent(), [4, l.getUser()];
                  case 5:
                    (S = E.sent()), (E.label = 6);
                  case 6:
                    return d({ type: "INITIALISED", user: S }), [3, 8];
                  case 7:
                    return (
                      (C = E.sent()), d({ type: "ERROR", error: Vm(C) }), [3, 8]
                    );
                  case 8:
                    return [2];
                }
              });
            });
          })());
      },
      [l, o, n]
    );
    var h = x.useCallback(
        function (S) {
          return Og(S), l.loginWithRedirect(S);
        },
        [l]
      ),
      p = x.useCallback(
        function (S, k) {
          return Ko(void 0, void 0, void 0, function () {
            var C, E;
            return Qo(this, function (O) {
              switch (O.label) {
                case 0:
                  d({ type: "LOGIN_POPUP_STARTED" }), (O.label = 1);
                case 1:
                  return O.trys.push([1, 3, , 4]), [4, l.loginWithPopup(S, k)];
                case 2:
                  return O.sent(), [3, 4];
                case 3:
                  return (
                    (C = O.sent()), d({ type: "ERROR", error: Vm(C) }), [2]
                  );
                case 4:
                  return [4, l.getUser()];
                case 5:
                  return (
                    (E = O.sent()),
                    d({ type: "LOGIN_POPUP_COMPLETE", user: E }),
                    [2]
                  );
              }
            });
          });
        },
        [l]
      ),
      g = x.useCallback(
        function (S) {
          return (
            S === void 0 && (S = {}),
            Ko(void 0, void 0, void 0, function () {
              return Qo(this, function (k) {
                switch (k.label) {
                  case 0:
                    return [4, l.logout(S)];
                  case 1:
                    return (
                      k.sent(),
                      (S.openUrl || S.openUrl === !1) && d({ type: "LOGOUT" }),
                      [2]
                    );
                }
              });
            })
          );
        },
        [l]
      ),
      w = x.useCallback(
        function (S) {
          return Ko(void 0, void 0, void 0, function () {
            var k, C, E, O;
            return Qo(this, function (R) {
              switch (R.label) {
                case 0:
                  return R.trys.push([0, 2, 3, 5]), [4, l.getTokenSilently(S)];
                case 1:
                  return (k = R.sent()), [3, 5];
                case 2:
                  throw ((C = R.sent()), sd(C));
                case 3:
                  return (
                    (E = d),
                    (O = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                    [4, l.getUser()]
                  );
                case 4:
                  return E.apply(void 0, [((O.user = R.sent()), O)]), [7];
                case 5:
                  return [2, k];
              }
            });
          });
        },
        [l]
      ),
      b = x.useCallback(
        function (S, k) {
          return Ko(void 0, void 0, void 0, function () {
            var C, E, O, R;
            return Qo(this, function (M) {
              switch (M.label) {
                case 0:
                  return (
                    M.trys.push([0, 2, 3, 5]), [4, l.getTokenWithPopup(S, k)]
                  );
                case 1:
                  return (C = M.sent()), [3, 5];
                case 2:
                  throw ((E = M.sent()), sd(E));
                case 3:
                  return (
                    (O = d),
                    (R = { type: "GET_ACCESS_TOKEN_COMPLETE" }),
                    [4, l.getUser()]
                  );
                case 4:
                  return O.apply(void 0, [((R.user = M.sent()), R)]), [7];
                case 5:
                  return [2, C];
              }
            });
          });
        },
        [l]
      ),
      m = x.useCallback(
        function () {
          return l.getIdTokenClaims();
        },
        [l]
      ),
      y = x.useCallback(
        function (S) {
          return Ko(void 0, void 0, void 0, function () {
            var k, C, E;
            return Qo(this, function (O) {
              switch (O.label) {
                case 0:
                  return (
                    O.trys.push([0, 2, 3, 5]), [4, l.handleRedirectCallback(S)]
                  );
                case 1:
                  return [2, O.sent()];
                case 2:
                  throw ((k = O.sent()), sd(k));
                case 3:
                  return (
                    (C = d),
                    (E = { type: "HANDLE_REDIRECT_COMPLETE" }),
                    [4, l.getUser()]
                  );
                case 4:
                  return C.apply(void 0, [((E.user = O.sent()), E)]), [7];
                case 5:
                  return [2];
              }
            });
          });
        },
        [l]
      ),
      v = x.useMemo(
        function () {
          return ct(ct({}, c), {
            getAccessTokenSilently: w,
            getAccessTokenWithPopup: b,
            getIdTokenClaims: m,
            loginWithRedirect: h,
            loginWithPopup: p,
            logout: g,
            handleRedirectCallback: y,
          });
        },
        [c, w, b, m, h, p, g, y]
      );
    return at.createElement(a.Provider, { value: v }, t);
  },
  xk = function (e) {
    return e === void 0 && (e = Pg), x.useContext(e);
  },
  Tg = { exports: {} },
  Ig = {};
function xt(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (o) {
              return "'" + o + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function Qt(e) {
  return !!e && !!e[Me];
}
function jn(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var o = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        o === Object ||
        (typeof o == "function" && Function.toString.call(o) === Tk)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Ma] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Ma]) ||
      Du(e) ||
      Uu(e))
  );
}
function Mg(e) {
  return Qt(e) || xt(23, e), e[Me].t;
}
function Yr(e, t, n) {
  n === void 0 && (n = !1),
    Jr(e) === 0
      ? (n ? Object.keys : bi)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, o) {
          return t(o, r, e);
        });
}
function Jr(e) {
  var t = e[Me];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Du(e)
    ? 2
    : Uu(e)
    ? 3
    : 0;
}
function Dr(e, t) {
  return Jr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function kl(e, t) {
  return Jr(e) === 2 ? e.get(t) : e[t];
}
function _g(e, t, n) {
  var r = Jr(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function $g(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Du(e) {
  return Rk && e instanceof Map;
}
function Uu(e) {
  return Ok && e instanceof Set;
}
function vo(e) {
  return e.o || e.t;
}
function Gp(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Lg(e);
  delete t[Me];
  for (var n = bi(t), r = 0; r < n.length; r++) {
    var o = n[r],
      i = t[o];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[o] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[o],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Fu(e, t) {
  return (
    t === void 0 && (t = !1),
    Xp(e) ||
      Qt(e) ||
      !jn(e) ||
      (Jr(e) > 1 && (e.set = e.add = e.clear = e.delete = kk),
      Object.freeze(e),
      t &&
        Yr(
          e,
          function (n, r) {
            return Fu(r, !0);
          },
          !0
        )),
    e
  );
}
function kk() {
  xt(2);
}
function Xp(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Yn(e) {
  var t = mf[e];
  return t || xt(18, e), t;
}
function Ng(e, t) {
  mf[e] || (mf[e] = t);
}
function ff() {
  return Va;
}
function ld(e, t) {
  t && (Yn("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Hl(e) {
  pf(e), e.p.forEach(Ck), (e.p = null);
}
function pf(e) {
  e === Va && (Va = e.l);
}
function Km(e) {
  return (Va = { p: [], l: Va, h: e, m: !0, _: 0 });
}
function Ck(e) {
  var t = e[Me];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function ud(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.O || Yn("ES5").S(t, e, r),
    r
      ? (n[Me].P && (Hl(t), xt(4)),
        jn(e) && ((e = Vl(t, e)), t.l || Kl(t, e)),
        t.u && Yn("Patches").M(n[Me].t, e, t.u, t.s))
      : (e = Vl(t, n, [])),
    Hl(t),
    t.u && t.v(t.u, t.s),
    e !== Jp ? e : void 0
  );
}
function Vl(e, t, n) {
  if (Xp(t)) return t;
  var r = t[Me];
  if (!r)
    return (
      Yr(
        t,
        function (s, l) {
          return Qm(e, r, t, s, l, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Kl(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var o = r.i === 4 || r.i === 5 ? (r.o = Gp(r.k)) : r.o,
      i = o,
      a = !1;
    r.i === 3 && ((i = new Set(o)), o.clear(), (a = !0)),
      Yr(i, function (s, l) {
        return Qm(e, r, o, s, l, n, a);
      }),
      Kl(e, o, !1),
      n && e.u && Yn("Patches").N(r, n, e.u, e.s);
  }
  return r.o;
}
function Qm(e, t, n, r, o, i, a) {
  if (Qt(o)) {
    var s = Vl(e, o, i && t && t.i !== 3 && !Dr(t.R, r) ? i.concat(r) : void 0);
    if ((_g(n, r, s), !Qt(s))) return;
    e.m = !1;
  } else a && n.add(o);
  if (jn(o) && !Xp(o)) {
    if (!e.h.D && e._ < 1) return;
    Vl(e, o), (t && t.A.l) || Kl(e, o);
  }
}
function Kl(e, t, n) {
  n === void 0 && (n = !1), !e.l && e.h.D && e.m && Fu(t, n);
}
function cd(e, t) {
  var n = e[Me];
  return (n ? vo(n) : e)[t];
}
function Gm(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Mr(e) {
  e.P || ((e.P = !0), e.l && Mr(e.l));
}
function dd(e) {
  e.o || (e.o = Gp(e.t));
}
function hf(e, t, n) {
  var r = Du(t)
    ? Yn("MapSet").F(t, n)
    : Uu(t)
    ? Yn("MapSet").T(t, n)
    : e.O
    ? (function (o, i) {
        var a = Array.isArray(o),
          s = {
            i: a ? 1 : 0,
            A: i ? i.A : ff(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: o,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = s,
          u = Ka;
        a && ((l = [s]), (u = Ea));
        var c = Proxy.revocable(l, u),
          d = c.revoke,
          f = c.proxy;
        return (s.k = f), (s.j = d), f;
      })(t, n)
    : Yn("ES5").J(t, n);
  return (n ? n.A : ff()).p.push(r), r;
}
function Zp(e) {
  return (
    Qt(e) || xt(22, e),
    (function t(n) {
      if (!jn(n)) return n;
      var r,
        o = n[Me],
        i = Jr(n);
      if (o) {
        if (!o.P && (o.i < 4 || !Yn("ES5").K(o))) return o.t;
        (o.I = !0), (r = Xm(n, i)), (o.I = !1);
      } else r = Xm(n, i);
      return (
        Yr(r, function (a, s) {
          (o && kl(o.t, a) === s) || _g(r, a, t(s));
        }),
        i === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Xm(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Gp(e);
}
function Ek() {
  function e(i, a) {
    var s = o[i];
    return (
      s
        ? (s.enumerable = a)
        : (o[i] = s =
            {
              configurable: !0,
              enumerable: a,
              get: function () {
                var l = this[Me];
                return Ka.get(l, i);
              },
              set: function (l) {
                var u = this[Me];
                Ka.set(u, i, l);
              },
            }),
      s
    );
  }
  function t(i) {
    for (var a = i.length - 1; a >= 0; a--) {
      var s = i[a][Me];
      if (!s.P)
        switch (s.i) {
          case 5:
            r(s) && Mr(s);
            break;
          case 4:
            n(s) && Mr(s);
        }
    }
  }
  function n(i) {
    for (var a = i.t, s = i.k, l = bi(s), u = l.length - 1; u >= 0; u--) {
      var c = l[u];
      if (c !== Me) {
        var d = a[c];
        if (d === void 0 && !Dr(a, c)) return !0;
        var f = s[c],
          h = f && f[Me];
        if (h ? h.t !== d : !$g(f, d)) return !0;
      }
    }
    var p = !!a[Me];
    return l.length !== bi(a).length + (p ? 0 : 1);
  }
  function r(i) {
    var a = i.k;
    if (a.length !== i.t.length) return !0;
    var s = Object.getOwnPropertyDescriptor(a, a.length - 1);
    if (s && !s.get) return !0;
    for (var l = 0; l < a.length; l++) if (!a.hasOwnProperty(l)) return !0;
    return !1;
  }
  var o = {};
  Ng("ES5", {
    J: function (i, a) {
      var s = Array.isArray(i),
        l = (function (c, d) {
          if (c) {
            for (var f = Array(d.length), h = 0; h < d.length; h++)
              Object.defineProperty(f, "" + h, e(h, !0));
            return f;
          }
          var p = Lg(d);
          delete p[Me];
          for (var g = bi(p), w = 0; w < g.length; w++) {
            var b = g[w];
            p[b] = e(b, c || !!p[b].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), p);
        })(s, i),
        u = {
          i: s ? 5 : 4,
          A: a ? a.A : ff(),
          P: !1,
          I: !1,
          R: {},
          l: a,
          t: i,
          k: l,
          o: null,
          g: !1,
          C: !1,
        };
      return Object.defineProperty(l, Me, { value: u, writable: !0 }), l;
    },
    S: function (i, a, s) {
      s
        ? Qt(a) && a[Me].A === i && t(i.p)
        : (i.u &&
            (function l(u) {
              if (u && typeof u == "object") {
                var c = u[Me];
                if (c) {
                  var d = c.t,
                    f = c.k,
                    h = c.R,
                    p = c.i;
                  if (p === 4)
                    Yr(f, function (y) {
                      y !== Me &&
                        (d[y] !== void 0 || Dr(d, y)
                          ? h[y] || l(f[y])
                          : ((h[y] = !0), Mr(c)));
                    }),
                      Yr(d, function (y) {
                        f[y] !== void 0 || Dr(f, y) || ((h[y] = !1), Mr(c));
                      });
                  else if (p === 5) {
                    if ((r(c) && (Mr(c), (h.length = !0)), f.length < d.length))
                      for (var g = f.length; g < d.length; g++) h[g] = !1;
                    else for (var w = d.length; w < f.length; w++) h[w] = !0;
                    for (
                      var b = Math.min(f.length, d.length), m = 0;
                      m < b;
                      m++
                    )
                      f.hasOwnProperty(m) || (h[m] = !0),
                        h[m] === void 0 && l(f[m]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? n(i) : r(i);
    },
  });
}
function Pk() {
  function e(r) {
    if (!jn(r)) return r;
    if (Array.isArray(r)) return r.map(e);
    if (Du(r))
      return new Map(
        Array.from(r.entries()).map(function (a) {
          return [a[0], e(a[1])];
        })
      );
    if (Uu(r)) return new Set(Array.from(r).map(e));
    var o = Object.create(Object.getPrototypeOf(r));
    for (var i in r) o[i] = e(r[i]);
    return Dr(r, Ma) && (o[Ma] = r[Ma]), o;
  }
  function t(r) {
    return Qt(r) ? e(r) : r;
  }
  var n = "add";
  Ng("Patches", {
    $: function (r, o) {
      return (
        o.forEach(function (i) {
          for (var a = i.path, s = i.op, l = r, u = 0; u < a.length - 1; u++) {
            var c = Jr(l),
              d = a[u];
            typeof d != "string" && typeof d != "number" && (d = "" + d),
              (c !== 0 && c !== 1) ||
                (d !== "__proto__" && d !== "constructor") ||
                xt(24),
              typeof l == "function" && d === "prototype" && xt(24),
              typeof (l = kl(l, d)) != "object" && xt(15, a.join("/"));
          }
          var f = Jr(l),
            h = e(i.value),
            p = a[a.length - 1];
          switch (s) {
            case "replace":
              switch (f) {
                case 2:
                  return l.set(p, h);
                case 3:
                  xt(16);
                default:
                  return (l[p] = h);
              }
            case n:
              switch (f) {
                case 1:
                  return p === "-" ? l.push(h) : l.splice(p, 0, h);
                case 2:
                  return l.set(p, h);
                case 3:
                  return l.add(h);
                default:
                  return (l[p] = h);
              }
            case "remove":
              switch (f) {
                case 1:
                  return l.splice(p, 1);
                case 2:
                  return l.delete(p);
                case 3:
                  return l.delete(i.value);
                default:
                  return delete l[p];
              }
            default:
              xt(17, s);
          }
        }),
        r
      );
    },
    N: function (r, o, i, a) {
      switch (r.i) {
        case 0:
        case 4:
        case 2:
          return (function (s, l, u, c) {
            var d = s.t,
              f = s.o;
            Yr(s.R, function (h, p) {
              var g = kl(d, h),
                w = kl(f, h),
                b = p ? (Dr(d, h) ? "replace" : n) : "remove";
              if (g !== w || b !== "replace") {
                var m = l.concat(h);
                u.push(
                  b === "remove"
                    ? { op: b, path: m }
                    : { op: b, path: m, value: w }
                ),
                  c.push(
                    b === n
                      ? { op: "remove", path: m }
                      : b === "remove"
                      ? { op: n, path: m, value: t(g) }
                      : { op: "replace", path: m, value: t(g) }
                  );
              }
            });
          })(r, o, i, a);
        case 5:
        case 1:
          return (function (s, l, u, c) {
            var d = s.t,
              f = s.R,
              h = s.o;
            if (h.length < d.length) {
              var p = [h, d];
              (d = p[0]), (h = p[1]);
              var g = [c, u];
              (u = g[0]), (c = g[1]);
            }
            for (var w = 0; w < d.length; w++)
              if (f[w] && h[w] !== d[w]) {
                var b = l.concat([w]);
                u.push({ op: "replace", path: b, value: t(h[w]) }),
                  c.push({ op: "replace", path: b, value: t(d[w]) });
              }
            for (var m = d.length; m < h.length; m++) {
              var y = l.concat([m]);
              u.push({ op: n, path: y, value: t(h[m]) });
            }
            d.length < h.length &&
              c.push({
                op: "replace",
                path: l.concat(["length"]),
                value: d.length,
              });
          })(r, o, i, a);
        case 3:
          return (function (s, l, u, c) {
            var d = s.t,
              f = s.o,
              h = 0;
            d.forEach(function (p) {
              if (!f.has(p)) {
                var g = l.concat([h]);
                u.push({ op: "remove", path: g, value: p }),
                  c.unshift({ op: n, path: g, value: p });
              }
              h++;
            }),
              (h = 0),
              f.forEach(function (p) {
                if (!d.has(p)) {
                  var g = l.concat([h]);
                  u.push({ op: n, path: g, value: p }),
                    c.unshift({ op: "remove", path: g, value: p });
                }
                h++;
              });
          })(r, o, i, a);
      }
    },
    M: function (r, o, i, a) {
      i.push({ op: "replace", path: [], value: o === Jp ? void 0 : o }),
        a.push({ op: "replace", path: [], value: r });
    },
  });
}
var Zm,
  Va,
  Yp = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  Rk = typeof Map < "u",
  Ok = typeof Set < "u",
  Ym = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  Jp = Yp
    ? Symbol.for("immer-nothing")
    : (((Zm = {})["immer-nothing"] = !0), Zm),
  Ma = Yp ? Symbol.for("immer-draftable") : "__$immer_draftable",
  Me = Yp ? Symbol.for("immer-state") : "__$immer_state",
  Tk = "" + Object.prototype.constructor,
  bi =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Lg =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        bi(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  mf = {},
  Ka = {
    get: function (e, t) {
      if (t === Me) return e;
      var n = vo(e);
      if (!Dr(n, t))
        return (function (o, i, a) {
          var s,
            l = Gm(i, a);
          return l
            ? "value" in l
              ? l.value
              : (s = l.get) === null || s === void 0
              ? void 0
              : s.call(o.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !jn(r)
        ? r
        : r === cd(e.t, t)
        ? (dd(e), (e.o[t] = hf(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in vo(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(vo(e));
    },
    set: function (e, t, n) {
      var r = Gm(vo(e), t);
      if (r != null && r.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var o = cd(vo(e), t),
          i = o == null ? void 0 : o[Me];
        if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
        if ($g(n, o) && (n !== void 0 || Dr(e.t, t))) return !0;
        dd(e), Mr(e);
      }
      return (
        (e.o[t] === n && (n !== void 0 || t in e.o)) ||
          (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
          ((e.o[t] = n), (e.R[t] = !0)),
        !0
      );
    },
    deleteProperty: function (e, t) {
      return (
        cd(e.t, t) !== void 0 || t in e.t
          ? ((e.R[t] = !1), dd(e), Mr(e))
          : delete e.R[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = vo(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      xt(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      xt(12);
    },
  },
  Ea = {};
Yr(Ka, function (e, t) {
  Ea[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Ea.deleteProperty = function (e, t) {
    return Ea.set.call(this, e, t, void 0);
  }),
  (Ea.set = function (e, t, n) {
    return Ka.set.call(this, e[0], t, n, e[0]);
  });
var Ik = (function () {
    function e(n) {
      var r = this;
      (this.O = Ym),
        (this.D = !0),
        (this.produce = function (o, i, a) {
          if (typeof o == "function" && typeof i != "function") {
            var s = i;
            i = o;
            var l = r;
            return function (g) {
              var w = this;
              g === void 0 && (g = s);
              for (
                var b = arguments.length, m = Array(b > 1 ? b - 1 : 0), y = 1;
                y < b;
                y++
              )
                m[y - 1] = arguments[y];
              return l.produce(g, function (v) {
                var S;
                return (S = i).call.apply(S, [w, v].concat(m));
              });
            };
          }
          var u;
          if (
            (typeof i != "function" && xt(6),
            a !== void 0 && typeof a != "function" && xt(7),
            jn(o))
          ) {
            var c = Km(r),
              d = hf(r, o, void 0),
              f = !0;
            try {
              (u = i(d)), (f = !1);
            } finally {
              f ? Hl(c) : pf(c);
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (g) {
                    return ld(c, a), ud(g, c);
                  },
                  function (g) {
                    throw (Hl(c), g);
                  }
                )
              : (ld(c, a), ud(u, c));
          }
          if (!o || typeof o != "object") {
            if (
              ((u = i(o)) === void 0 && (u = o),
              u === Jp && (u = void 0),
              r.D && Fu(u, !0),
              a)
            ) {
              var h = [],
                p = [];
              Yn("Patches").M(o, u, h, p), a(h, p);
            }
            return u;
          }
          xt(21, o);
        }),
        (this.produceWithPatches = function (o, i) {
          if (typeof o == "function")
            return function (u) {
              for (
                var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1;
                f < c;
                f++
              )
                d[f - 1] = arguments[f];
              return r.produceWithPatches(u, function (h) {
                return o.apply(void 0, [h].concat(d));
              });
            };
          var a,
            s,
            l = r.produce(o, i, function (u, c) {
              (a = u), (s = c);
            });
          return typeof Promise < "u" && l instanceof Promise
            ? l.then(function (u) {
                return [u, a, s];
              })
            : [l, a, s];
        }),
        typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
          this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
          this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        jn(n) || xt(8), Qt(n) && (n = Zp(n));
        var r = Km(this),
          o = hf(this, n, void 0);
        return (o[Me].C = !0), pf(r), o;
      }),
      (t.finishDraft = function (n, r) {
        var o = n && n[Me],
          i = o.A;
        return ld(i, r), ud(void 0, i);
      }),
      (t.setAutoFreeze = function (n) {
        this.D = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Ym && xt(20), (this.O = n);
      }),
      (t.applyPatches = function (n, r) {
        var o;
        for (o = r.length - 1; o >= 0; o--) {
          var i = r[o];
          if (i.path.length === 0 && i.op === "replace") {
            n = i.value;
            break;
          }
        }
        o > -1 && (r = r.slice(o + 1));
        var a = Yn("Patches").$;
        return Qt(n)
          ? a(n, r)
          : this.produce(n, function (s) {
              return a(s, r);
            });
      }),
      e
    );
  })(),
  ln = new Ik(),
  Fo = ln.produce,
  Ag = ln.produceWithPatches.bind(ln);
ln.setAutoFreeze.bind(ln);
ln.setUseProxies.bind(ln);
var Jm = ln.applyPatches.bind(ln);
ln.createDraft.bind(ln);
ln.finishDraft.bind(ln);
function Qa(e) {
  "@babel/helpers - typeof";
  return (
    (Qa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qa(e)
  );
}
function Mk(e, t) {
  if (Qa(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Qa(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _k(e) {
  var t = Mk(e, "string");
  return Qa(t) == "symbol" ? t : t + "";
}
function $k(e, t, n) {
  return (
    (t = _k(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ev(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function tv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ev(Object(n), !0).forEach(function (r) {
          $k(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ev(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function bt(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var nv = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  fd = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Ga = {
    INIT: "@@redux/INIT" + fd(),
    REPLACE: "@@redux/REPLACE" + fd(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + fd();
    },
  };
function Nk(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Bu(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(bt(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(bt(1));
    return n(Bu)(e, t);
  }
  if (typeof e != "function") throw new Error(bt(2));
  var o = e,
    i = t,
    a = [],
    s = a,
    l = !1;
  function u() {
    s === a && (s = a.slice());
  }
  function c() {
    if (l) throw new Error(bt(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function") throw new Error(bt(4));
    if (l) throw new Error(bt(5));
    var w = !0;
    return (
      u(),
      s.push(g),
      function () {
        if (w) {
          if (l) throw new Error(bt(6));
          (w = !1), u();
          var m = s.indexOf(g);
          s.splice(m, 1), (a = null);
        }
      }
    );
  }
  function f(g) {
    if (!Nk(g)) throw new Error(bt(7));
    if (typeof g.type > "u") throw new Error(bt(8));
    if (l) throw new Error(bt(9));
    try {
      (l = !0), (i = o(i, g));
    } finally {
      l = !1;
    }
    for (var w = (a = s), b = 0; b < w.length; b++) {
      var m = w[b];
      m();
    }
    return g;
  }
  function h(g) {
    if (typeof g != "function") throw new Error(bt(10));
    (o = g), f({ type: Ga.REPLACE });
  }
  function p() {
    var g,
      w = d;
    return (
      (g = {
        subscribe: function (m) {
          if (typeof m != "object" || m === null) throw new Error(bt(11));
          function y() {
            m.next && m.next(c());
          }
          y();
          var v = w(y);
          return { unsubscribe: v };
        },
      }),
      (g[nv] = function () {
        return this;
      }),
      g
    );
  }
  return (
    f({ type: Ga.INIT }),
    (r = { dispatch: f, subscribe: d, getState: c, replaceReducer: h }),
    (r[nv] = p),
    r
  );
}
var Lk = Bu;
function Ak(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Ga.INIT });
    if (typeof r > "u") throw new Error(bt(12));
    if (typeof n(void 0, { type: Ga.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(bt(13));
  });
}
function eh(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var o = t[r];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  var i = Object.keys(n),
    a;
  try {
    Ak(n);
  } catch (s) {
    a = s;
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), a)) throw a;
    for (var c = !1, d = {}, f = 0; f < i.length; f++) {
      var h = i[f],
        p = n[h],
        g = l[h],
        w = p(g, u);
      if (typeof w > "u") throw (u && u.type, new Error(bt(14)));
      (d[h] = w), (c = c || w !== g);
    }
    return (c = c || i.length !== Object.keys(l).length), c ? d : l;
  };
}
function rv(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function jk(e, t) {
  if (typeof e == "function") return rv(e, t);
  if (typeof e != "object" || e === null) throw new Error(bt(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = rv(o, t));
  }
  return n;
}
function Xa() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, o) {
        return function () {
          return r(o.apply(void 0, arguments));
        };
      });
}
function jg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var o = r.apply(void 0, arguments),
        i = function () {
          throw new Error(bt(15));
        },
        a = {
          getState: o.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        s = t.map(function (l) {
          return l(a);
        });
      return (
        (i = Xa.apply(void 0, s)(o.dispatch)),
        tv(tv({}, o), {}, { dispatch: i })
      );
    };
  };
}
var Ql = "NOT_FOUND";
function zk(e) {
  var t;
  return {
    get: function (r) {
      return t && e(t.key, r) ? t.value : Ql;
    },
    put: function (r, o) {
      t = { key: r, value: o };
    },
    getEntries: function () {
      return t ? [t] : [];
    },
    clear: function () {
      t = void 0;
    },
  };
}
function Dk(e, t) {
  var n = [];
  function r(s) {
    var l = n.findIndex(function (c) {
      return t(s, c.key);
    });
    if (l > -1) {
      var u = n[l];
      return l > 0 && (n.splice(l, 1), n.unshift(u)), u.value;
    }
    return Ql;
  }
  function o(s, l) {
    r(s) === Ql && (n.unshift({ key: s, value: l }), n.length > e && n.pop());
  }
  function i() {
    return n;
  }
  function a() {
    n = [];
  }
  return { get: r, put: o, getEntries: i, clear: a };
}
var Uk = function (t, n) {
  return t === n;
};
function Fk(e) {
  return function (n, r) {
    if (n === null || r === null || n.length !== r.length) return !1;
    for (var o = n.length, i = 0; i < o; i++) if (!e(n[i], r[i])) return !1;
    return !0;
  };
}
function vf(e, t) {
  var n = typeof t == "object" ? t : { equalityCheck: t },
    r = n.equalityCheck,
    o = r === void 0 ? Uk : r,
    i = n.maxSize,
    a = i === void 0 ? 1 : i,
    s = n.resultEqualityCheck,
    l = Fk(o),
    u = a === 1 ? zk(l) : Dk(a, l);
  function c() {
    var d = u.get(arguments);
    if (d === Ql) {
      if (((d = e.apply(null, arguments)), s)) {
        var f = u.getEntries(),
          h = f.find(function (p) {
            return s(p.value, d);
          });
        h && (d = h.value);
      }
      u.put(arguments, d);
    }
    return d;
  }
  return (
    (c.clearCache = function () {
      return u.clear();
    }),
    c
  );
}
function Bk(e) {
  var t = Array.isArray(e[0]) ? e[0] : e;
  if (
    !t.every(function (r) {
      return typeof r == "function";
    })
  ) {
    var n = t
      .map(function (r) {
        return typeof r == "function"
          ? "function " + (r.name || "unnamed") + "()"
          : typeof r;
      })
      .join(", ");
    throw new Error(
      "createSelector expects all input-selectors to be functions, but received the following types: [" +
        n +
        "]"
    );
  }
  return t;
}
function qk(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = function () {
    for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++)
      s[l] = arguments[l];
    var u = 0,
      c,
      d = { memoizeOptions: void 0 },
      f = s.pop();
    if (
      (typeof f == "object" && ((d = f), (f = s.pop())), typeof f != "function")
    )
      throw new Error(
        "createSelector expects an output function after the inputs, but received: [" +
          typeof f +
          "]"
      );
    var h = d,
      p = h.memoizeOptions,
      g = p === void 0 ? n : p,
      w = Array.isArray(g) ? g : [g],
      b = Bk(s),
      m = e.apply(
        void 0,
        [
          function () {
            return u++, f.apply(null, arguments);
          },
        ].concat(w)
      ),
      y = e(function () {
        for (var S = [], k = b.length, C = 0; C < k; C++)
          S.push(b[C].apply(null, arguments));
        return (c = m.apply(null, S)), c;
      });
    return (
      Object.assign(y, {
        resultFunc: f,
        memoizedResultFunc: m,
        dependencies: b,
        lastResult: function () {
          return c;
        },
        recomputations: function () {
          return u;
        },
        resetRecomputations: function () {
          return (u = 0);
        },
      }),
      y
    );
  };
  return o;
}
var Io = qk(vf);
function zg(e) {
  var t = function (r) {
    var o = r.dispatch,
      i = r.getState;
    return function (a) {
      return function (s) {
        return typeof s == "function" ? s(o, i, e) : a(s);
      };
    };
  };
  return t;
}
var Dg = zg();
Dg.withExtraArgument = zg;
const ov = Dg;
var Ug =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  Ps =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        a;
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(u) {
        return function (c) {
          return l([u, c]);
        };
      }
      function l(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  u[0] & 2
                    ? o.return
                    : u[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, u[1])).done)
            )
              return i;
            switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
              case 0:
              case 1:
                i = u;
                break;
              case 4:
                return n.label++, { value: u[1], done: !1 };
              case 5:
                n.label++, (o = u[1]), (u = [0]);
                continue;
              case 7:
                (u = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  n.label = u[1];
                  break;
                }
                if (u[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = u);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(u);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            u = t.call(e, n);
          } catch (c) {
            (u = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  eo =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  Wk = Object.defineProperty,
  Hk = Object.defineProperties,
  Vk = Object.getOwnPropertyDescriptors,
  iv = Object.getOwnPropertySymbols,
  Kk = Object.prototype.hasOwnProperty,
  Qk = Object.prototype.propertyIsEnumerable,
  av = function (e, t, n) {
    return t in e
      ? Wk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  qt = function (e, t) {
    for (var n in t || (t = {})) Kk.call(t, n) && av(e, n, t[n]);
    if (iv)
      for (var r = 0, o = iv(t); r < o.length; r++) {
        var n = o[r];
        Qk.call(t, n) && av(e, n, t[n]);
      }
    return e;
  },
  pd = function (e, t) {
    return Hk(e, Vk(t));
  },
  Rs = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (l) {
          try {
            s(n.next(l));
          } catch (u) {
            o(u);
          }
        },
        a = function (l) {
          try {
            s(n.throw(l));
          } catch (u) {
            o(u);
          }
        },
        s = function (l) {
          return l.done ? r(l.value) : Promise.resolve(l.value).then(i, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  sr = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    var n = Io.apply(void 0, e),
      r = function (o) {
        for (var i = [], a = 1; a < arguments.length; a++)
          i[a - 1] = arguments[a];
        return n.apply(void 0, eo([Qt(o) ? Zp(o) : o], i));
      };
    return r;
  },
  Gk =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Xa
              : Xa.apply(null, arguments);
        };
function zn(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var Fg = function (e) {
  return e && typeof e.match == "function";
};
function Mt(e, t) {
  function n() {
    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
    if (t) {
      var i = t.apply(void 0, r);
      if (!i) throw new Error("prepareAction did not return an object");
      return qt(
        qt({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }),
        "error" in i && { error: i.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function th(e) {
  return zn(e) && "type" in e;
}
function Xk(e) {
  return typeof e == "function" && "type" in e && Fg(e);
}
function Bg(e) {
  return th(e) && typeof e.type == "string" && Object.keys(e).every(Zk);
}
function Zk(e) {
  return ["type", "payload", "error", "meta"].indexOf(e) > -1;
}
function Yk(e) {
  return "" + e;
}
function Jk(e) {
  return function () {
    return function (t) {
      return function (n) {
        return t(n);
      };
    };
  };
}
var qg = (function (e) {
    Ug(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, eo([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, eo([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array),
  Wg = (function (e) {
    Ug(t, e);
    function t() {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      var o = e.apply(this, n) || this;
      return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return e.prototype.concat.apply(this, n);
      }),
      (t.prototype.prepend = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return n.length === 1 && Array.isArray(n[0])
          ? new (t.bind.apply(t, eo([void 0], n[0].concat(this))))()
          : new (t.bind.apply(t, eo([void 0], n.concat(this))))();
      }),
      t
    );
  })(Array);
function yf(e) {
  return jn(e) ? Fo(e, function () {}) : e;
}
function e2(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function t2(e) {
  return function () {
    return function (t) {
      return function (n) {
        return t(n);
      };
    };
  };
}
function Hg(e) {
  var t = typeof e;
  return (
    e == null ||
    t === "string" ||
    t === "boolean" ||
    t === "number" ||
    Array.isArray(e) ||
    zn(e)
  );
}
function Vg(e, t, n, r, o, i) {
  t === void 0 && (t = ""), n === void 0 && (n = Hg), o === void 0 && (o = []);
  var a;
  if (!n(e)) return { keyPath: t || "<root>", value: e };
  if (typeof e != "object" || e === null || (i != null && i.has(e))) return !1;
  for (
    var s = r != null ? r(e) : Object.entries(e),
      l = o.length > 0,
      u = function (w, b) {
        var m = t ? t + "." + w : w;
        if (l) {
          var y = o.some(function (v) {
            return v instanceof RegExp ? v.test(m) : m === v;
          });
          if (y) return "continue";
        }
        if (!n(b)) return { value: { keyPath: m, value: b } };
        if (typeof b == "object" && ((a = Vg(b, m, n, r, o, i)), a))
          return { value: a };
      },
      c = 0,
      d = s;
    c < d.length;
    c++
  ) {
    var f = d[c],
      h = f[0],
      p = f[1],
      g = u(h, p);
    if (typeof g == "object") return g.value;
  }
  return i && Kg(e) && i.add(e), !1;
}
function Kg(e) {
  if (!Object.isFrozen(e)) return !1;
  for (var t = 0, n = Object.values(e); t < n.length; t++) {
    var r = n[t];
    if (!(typeof r != "object" || r === null) && !Kg(r)) return !1;
  }
  return !0;
}
function n2(e) {
  return function () {
    return function (t) {
      return function (n) {
        return t(n);
      };
    };
  };
}
function r2(e) {
  return typeof e == "boolean";
}
function o2() {
  return function (t) {
    return Qg(t);
  };
}
function Qg(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var r = new qg();
  return (
    n && (r2(n) ? r.push(ov) : r.push(ov.withExtraArgument(n.extraArgument))), r
  );
}
var i2 = !0;
function a2(e) {
  var t = o2(),
    n = e || {},
    r = n.reducer,
    o = r === void 0 ? void 0 : r,
    i = n.middleware,
    a = i === void 0 ? t() : i,
    s = n.devTools,
    l = s === void 0 ? !0 : s,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    d = n.enhancers,
    f = d === void 0 ? void 0 : d,
    h;
  if (typeof o == "function") h = o;
  else if (zn(o)) h = eh(o);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var p = a;
  typeof p == "function" && (p = p(t));
  var g = jg.apply(void 0, p),
    w = Xa;
  l && (w = Gk(qt({ trace: !i2 }, typeof l == "object" && l)));
  var b = new Wg(g),
    m = b;
  Array.isArray(f) ? (m = eo([g], f)) : typeof f == "function" && (m = f(b));
  var y = w.apply(void 0, m);
  return Bu(h, c, y);
}
function Gg(e) {
  var t = {},
    n = [],
    r,
    o = {
      addCase: function (i, a) {
        var s = typeof i == "string" ? i : i.type;
        if (!s)
          throw new Error(
            "`builder.addCase` cannot be called with an empty action type"
          );
        if (s in t)
          throw new Error(
            "`builder.addCase` cannot be called with two reducers for the same action type"
          );
        return (t[s] = a), o;
      },
      addMatcher: function (i, a) {
        return n.push({ matcher: i, reducer: a }), o;
      },
      addDefaultCase: function (i) {
        return (r = i), o;
      },
    };
  return e(o), [t, n, r];
}
function s2(e) {
  return typeof e == "function";
}
function Xg(e, t, n, r) {
  n === void 0 && (n = []);
  var o = typeof t == "function" ? Gg(t) : [t, n, r],
    i = o[0],
    a = o[1],
    s = o[2],
    l;
  if (s2(e))
    l = function () {
      return yf(e());
    };
  else {
    var u = yf(e);
    l = function () {
      return u;
    };
  }
  function c(d, f) {
    d === void 0 && (d = l());
    var h = eo(
      [i[f.type]],
      a
        .filter(function (p) {
          var g = p.matcher;
          return g(f);
        })
        .map(function (p) {
          var g = p.reducer;
          return g;
        })
    );
    return (
      h.filter(function (p) {
        return !!p;
      }).length === 0 && (h = [s]),
      h.reduce(function (p, g) {
        if (g)
          if (Qt(p)) {
            var w = p,
              b = g(w, f);
            return b === void 0 ? p : b;
          } else {
            if (jn(p))
              return Fo(p, function (m) {
                return g(m, f);
              });
            var b = g(p, f);
            if (b === void 0) {
              if (p === null) return p;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return b;
          }
        return p;
      }, d)
    );
  }
  return (c.getInitialState = l), c;
}
function l2(e, t) {
  return e + "/" + t;
}
function yo(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : yf(e.initialState),
    r = e.reducers || {},
    o = Object.keys(r),
    i = {},
    a = {},
    s = {};
  o.forEach(function (c) {
    var d = r[c],
      f = l2(t, c),
      h,
      p;
    "reducer" in d ? ((h = d.reducer), (p = d.prepare)) : (h = d),
      (i[c] = h),
      (a[f] = h),
      (s[c] = p ? Mt(f, p) : Mt(f));
  });
  function l() {
    var c =
        typeof e.extraReducers == "function"
          ? Gg(e.extraReducers)
          : [e.extraReducers],
      d = c[0],
      f = d === void 0 ? {} : d,
      h = c[1],
      p = h === void 0 ? [] : h,
      g = c[2],
      w = g === void 0 ? void 0 : g,
      b = qt(qt({}, f), a);
    return Xg(n, function (m) {
      for (var y in b) m.addCase(y, b[y]);
      for (var v = 0, S = p; v < S.length; v++) {
        var k = S[v];
        m.addMatcher(k.matcher, k.reducer);
      }
      w && m.addDefaultCase(w);
    });
  }
  var u;
  return {
    name: t,
    reducer: function (c, d) {
      return u || (u = l()), u(c, d);
    },
    actions: s,
    caseReducers: i,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState();
    },
  };
}
function u2() {
  return { ids: [], entities: {} };
}
function c2() {
  function e(t) {
    return t === void 0 && (t = {}), Object.assign(u2(), t);
  }
  return { getInitialState: e };
}
function d2() {
  function e(t) {
    var n = function (u) {
        return u.ids;
      },
      r = function (u) {
        return u.entities;
      },
      o = sr(n, r, function (u, c) {
        return u.map(function (d) {
          return c[d];
        });
      }),
      i = function (u, c) {
        return c;
      },
      a = function (u, c) {
        return u[c];
      },
      s = sr(n, function (u) {
        return u.length;
      });
    if (!t)
      return {
        selectIds: n,
        selectEntities: r,
        selectAll: o,
        selectTotal: s,
        selectById: sr(r, i, a),
      };
    var l = sr(t, r);
    return {
      selectIds: sr(t, n),
      selectEntities: l,
      selectAll: sr(t, o),
      selectTotal: sr(t, s),
      selectById: sr(l, i, a),
    };
  }
  return { getSelectors: e };
}
function f2(e) {
  var t = Je(function (n, r) {
    return e(r);
  });
  return function (r) {
    return t(r, void 0);
  };
}
function Je(e) {
  return function (n, r) {
    function o(a) {
      return Bg(a);
    }
    var i = function (a) {
      o(r) ? e(r.payload, a) : e(r, a);
    };
    return Qt(n) ? (i(n), n) : Fo(n, i);
  };
}
function _a(e, t) {
  var n = t(e);
  return n;
}
function Mo(e) {
  return Array.isArray(e) || (e = Object.values(e)), e;
}
function Zg(e, t, n) {
  e = Mo(e);
  for (var r = [], o = [], i = 0, a = e; i < a.length; i++) {
    var s = a[i],
      l = _a(s, t);
    l in n.entities ? o.push({ id: l, changes: s }) : r.push(s);
  }
  return [r, o];
}
function Yg(e) {
  function t(p, g) {
    var w = _a(p, e);
    w in g.entities || (g.ids.push(w), (g.entities[w] = p));
  }
  function n(p, g) {
    p = Mo(p);
    for (var w = 0, b = p; w < b.length; w++) {
      var m = b[w];
      t(m, g);
    }
  }
  function r(p, g) {
    var w = _a(p, e);
    w in g.entities || g.ids.push(w), (g.entities[w] = p);
  }
  function o(p, g) {
    p = Mo(p);
    for (var w = 0, b = p; w < b.length; w++) {
      var m = b[w];
      r(m, g);
    }
  }
  function i(p, g) {
    (p = Mo(p)), (g.ids = []), (g.entities = {}), n(p, g);
  }
  function a(p, g) {
    return s([p], g);
  }
  function s(p, g) {
    var w = !1;
    p.forEach(function (b) {
      b in g.entities && (delete g.entities[b], (w = !0));
    }),
      w &&
        (g.ids = g.ids.filter(function (b) {
          return b in g.entities;
        }));
  }
  function l(p) {
    Object.assign(p, { ids: [], entities: {} });
  }
  function u(p, g, w) {
    var b = w.entities[g.id],
      m = Object.assign({}, b, g.changes),
      y = _a(m, e),
      v = y !== g.id;
    return (
      v && ((p[g.id] = y), delete w.entities[g.id]), (w.entities[y] = m), v
    );
  }
  function c(p, g) {
    return d([p], g);
  }
  function d(p, g) {
    var w = {},
      b = {};
    p.forEach(function (v) {
      v.id in g.entities &&
        (b[v.id] = {
          id: v.id,
          changes: qt(qt({}, b[v.id] ? b[v.id].changes : null), v.changes),
        });
    }),
      (p = Object.values(b));
    var m = p.length > 0;
    if (m) {
      var y =
        p.filter(function (v) {
          return u(w, v, g);
        }).length > 0;
      y && (g.ids = Object.keys(g.entities));
    }
  }
  function f(p, g) {
    return h([p], g);
  }
  function h(p, g) {
    var w = Zg(p, e, g),
      b = w[0],
      m = w[1];
    d(m, g), n(b, g);
  }
  return {
    removeAll: f2(l),
    addOne: Je(t),
    addMany: Je(n),
    setOne: Je(r),
    setMany: Je(o),
    setAll: Je(i),
    updateOne: Je(c),
    updateMany: Je(d),
    upsertOne: Je(f),
    upsertMany: Je(h),
    removeOne: Je(a),
    removeMany: Je(s),
  };
}
function p2(e, t) {
  var n = Yg(e),
    r = n.removeOne,
    o = n.removeMany,
    i = n.removeAll;
  function a(m, y) {
    return s([m], y);
  }
  function s(m, y) {
    m = Mo(m);
    var v = m.filter(function (S) {
      return !(_a(S, e) in y.entities);
    });
    v.length !== 0 && w(v, y);
  }
  function l(m, y) {
    return u([m], y);
  }
  function u(m, y) {
    (m = Mo(m)), m.length !== 0 && w(m, y);
  }
  function c(m, y) {
    (m = Mo(m)), (y.entities = {}), (y.ids = []), s(m, y);
  }
  function d(m, y) {
    return f([m], y);
  }
  function f(m, y) {
    for (var v = !1, S = 0, k = m; S < k.length; S++) {
      var C = k[S],
        E = y.entities[C.id];
      if (E) {
        (v = !0), Object.assign(E, C.changes);
        var O = e(E);
        C.id !== O && (delete y.entities[C.id], (y.entities[O] = E));
      }
    }
    v && b(y);
  }
  function h(m, y) {
    return p([m], y);
  }
  function p(m, y) {
    var v = Zg(m, e, y),
      S = v[0],
      k = v[1];
    f(k, y), s(S, y);
  }
  function g(m, y) {
    if (m.length !== y.length) return !1;
    for (var v = 0; v < m.length && v < y.length; v++)
      if (m[v] !== y[v]) return !1;
    return !0;
  }
  function w(m, y) {
    m.forEach(function (v) {
      y.entities[e(v)] = v;
    }),
      b(y);
  }
  function b(m) {
    var y = Object.values(m.entities);
    y.sort(t);
    var v = y.map(e),
      S = m.ids;
    g(S, v) || (m.ids = v);
  }
  return {
    removeOne: r,
    removeMany: o,
    removeAll: i,
    addOne: Je(a),
    updateOne: Je(d),
    upsertOne: Je(h),
    setOne: Je(l),
    setMany: Je(u),
    setAll: Je(c),
    addMany: Je(s),
    updateMany: Je(f),
    upsertMany: Je(p),
  };
}
function h2(e) {
  e === void 0 && (e = {});
  var t = qt(
      {
        sortComparer: !1,
        selectId: function (s) {
          return s.id;
        },
      },
      e
    ),
    n = t.selectId,
    r = t.sortComparer,
    o = c2(),
    i = d2(),
    a = r ? p2(n, r) : Yg(n);
  return qt(qt(qt({ selectId: n, sortComparer: r }, o), i), a);
}
var m2 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  qu = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += m2[(Math.random() * 64) | 0];
    return t;
  },
  v2 = ["name", "message", "stack", "code"],
  hd = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  sv = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Jg = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = v2; n < r.length; n++) {
        var o = r[n];
        typeof e[o] == "string" && (t[o] = e[o]);
      }
      return t;
    }
    return { message: String(e) };
  },
  gf = (function () {
    function e(t, n, r) {
      var o = Mt(t + "/fulfilled", function (u, c, d, f) {
          return {
            payload: u,
            meta: pd(qt({}, f || {}), {
              arg: d,
              requestId: c,
              requestStatus: "fulfilled",
            }),
          };
        }),
        i = Mt(t + "/pending", function (u, c, d) {
          return {
            payload: void 0,
            meta: pd(qt({}, d || {}), {
              arg: c,
              requestId: u,
              requestStatus: "pending",
            }),
          };
        }),
        a = Mt(t + "/rejected", function (u, c, d, f, h) {
          return {
            payload: f,
            error: ((r && r.serializeError) || Jg)(u || "Rejected"),
            meta: pd(qt({}, h || {}), {
              arg: d,
              requestId: c,
              rejectedWithValue: !!f,
              requestStatus: "rejected",
              aborted: (u == null ? void 0 : u.name) === "AbortError",
              condition: (u == null ? void 0 : u.name) === "ConditionError",
            }),
          };
        }),
        s =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function u() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (u.prototype.abort = function () {}), u;
              })();
      function l(u) {
        return function (c, d, f) {
          var h = r != null && r.idGenerator ? r.idGenerator(u) : qu(),
            p = new s(),
            g;
          function w(m) {
            (g = m), p.abort();
          }
          var b = (function () {
            return Rs(this, null, function () {
              var m, y, v, S, k, C, E;
              return Ps(this, function (O) {
                switch (O.label) {
                  case 0:
                    return (
                      O.trys.push([0, 4, , 5]),
                      (S =
                        (m = r == null ? void 0 : r.condition) == null
                          ? void 0
                          : m.call(r, u, { getState: d, extra: f })),
                      y2(S) ? [4, S] : [3, 2]
                    );
                  case 1:
                    (S = O.sent()), (O.label = 2);
                  case 2:
                    if (S === !1 || p.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (k = new Promise(function (R, M) {
                        return p.signal.addEventListener("abort", function () {
                          return M({
                            name: "AbortError",
                            message: g || "Aborted",
                          });
                        });
                      })),
                      c(
                        i(
                          h,
                          u,
                          (y = r == null ? void 0 : r.getPendingMeta) == null
                            ? void 0
                            : y.call(
                                r,
                                { requestId: h, arg: u },
                                { getState: d, extra: f }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          k,
                          Promise.resolve(
                            n(u, {
                              dispatch: c,
                              getState: d,
                              extra: f,
                              requestId: h,
                              signal: p.signal,
                              abort: w,
                              rejectWithValue: function (R, M) {
                                return new hd(R, M);
                              },
                              fulfillWithValue: function (R, M) {
                                return new sv(R, M);
                              },
                            })
                          ).then(function (R) {
                            if (R instanceof hd) throw R;
                            return R instanceof sv
                              ? o(R.payload, h, u, R.meta)
                              : o(R, h, u);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (v = O.sent()), [3, 5];
                  case 4:
                    return (
                      (C = O.sent()),
                      (v =
                        C instanceof hd
                          ? a(null, h, u, C.payload, C.meta)
                          : a(C, h, u)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (E =
                        r &&
                        !r.dispatchConditionRejection &&
                        a.match(v) &&
                        v.meta.condition),
                      E || c(v),
                      [2, v]
                    );
                }
              });
            });
          })();
          return Object.assign(b, {
            abort: w,
            requestId: h,
            arg: u,
            unwrap: function () {
              return b.then(e1);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: i,
        rejected: a,
        fulfilled: o,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function e1(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function y2(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var t1 = function (e, t) {
  return Fg(e) ? e.match(t) : e(t);
};
function Bo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return t1(r, n);
    });
  };
}
function wi() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.every(function (r) {
      return t1(r, n);
    });
  };
}
function Wu(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function Os(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function Hu() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Wu(n, ["pending"]);
      }
    : Os(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.pending;
          }),
          o = Bo.apply(void 0, r);
        return o(n);
      }
    : Hu()(e[0]);
}
function Ni() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Wu(n, ["rejected"]);
      }
    : Os(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.rejected;
          }),
          o = Bo.apply(void 0, r);
        return o(n);
      }
    : Ni()(e[0]);
}
function Ts() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var n = function (r) {
    return r && r.meta && r.meta.rejectedWithValue;
  };
  return e.length === 0
    ? function (r) {
        var o = wi(Ni.apply(void 0, e), n);
        return o(r);
      }
    : Os(e)
    ? function (r) {
        var o = wi(Ni.apply(void 0, e), n);
        return o(r);
      }
    : Ts()(e[0]);
}
function oo() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Wu(n, ["fulfilled"]);
      }
    : Os(e)
    ? function (n) {
        var r = e.map(function (i) {
            return i.fulfilled;
          }),
          o = Bo.apply(void 0, r);
        return o(n);
      }
    : oo()(e[0]);
}
function Gl() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return Wu(n, ["pending", "fulfilled", "rejected"]);
      }
    : Os(e)
    ? function (n) {
        for (var r = [], o = 0, i = e; o < i.length; o++) {
          var a = i[o];
          r.push(a.pending, a.rejected, a.fulfilled);
        }
        var s = Bo.apply(void 0, r);
        return s(n);
      }
    : Gl()(e[0]);
}
var nh = function (e, t) {
    if (typeof e != "function") throw new TypeError(t + " is not a function");
  },
  bf = function () {},
  n1 = function (e, t) {
    return t === void 0 && (t = bf), e.catch(t), e;
  },
  r1 = function (e, t) {
    return (
      e.addEventListener("abort", t, { once: !0 }),
      function () {
        return e.removeEventListener("abort", t);
      }
    );
  },
  Si = function (e, t) {
    var n = e.signal;
    n.aborted ||
      ("reason" in n ||
        Object.defineProperty(n, "reason", {
          enumerable: !0,
          value: t,
          configurable: !0,
          writable: !0,
        }),
      e.abort(t));
  },
  g2 = "task",
  o1 = "listener",
  i1 = "completed",
  rh = "cancelled",
  b2 = "task-" + rh,
  w2 = "task-" + i1,
  a1 = o1 + "-" + rh,
  S2 = o1 + "-" + i1,
  Is = (function () {
    function e(t) {
      (this.code = t),
        (this.name = "TaskAbortError"),
        (this.message = g2 + " " + rh + " (reason: " + t + ")");
    }
    return e;
  })(),
  xi = function (e) {
    if (e.aborted) throw new Is(e.reason);
  };
function s1(e, t) {
  var n = bf;
  return new Promise(function (r, o) {
    var i = function () {
      return o(new Is(e.reason));
    };
    if (e.aborted) {
      i();
      return;
    }
    (n = r1(e, i)),
      t
        .finally(function () {
          return n();
        })
        .then(r, o);
  }).finally(function () {
    n = bf;
  });
}
var x2 = function (e, t) {
    return Rs(void 0, null, function () {
      var n, r;
      return Ps(this, function (o) {
        switch (o.label) {
          case 0:
            return o.trys.push([0, 3, 4, 5]), [4, Promise.resolve()];
          case 1:
            return o.sent(), [4, e()];
          case 2:
            return (n = o.sent()), [2, { status: "ok", value: n }];
          case 3:
            return (
              (r = o.sent()),
              [
                2,
                {
                  status: r instanceof Is ? "cancelled" : "rejected",
                  error: r,
                },
              ]
            );
          case 4:
            return t == null || t(), [7];
          case 5:
            return [2];
        }
      });
    });
  },
  Xl = function (e) {
    return function (t) {
      return n1(
        s1(e, t).then(function (n) {
          return xi(e), n;
        })
      );
    };
  },
  l1 = function (e) {
    var t = Xl(e);
    return function (n) {
      return t(
        new Promise(function (r) {
          return setTimeout(r, n);
        })
      );
    };
  },
  k2 = Object.assign,
  lv = {},
  Ms = "listenerMiddleware",
  C2 = function (e, t) {
    var n = function (r) {
      return r1(e, function () {
        return Si(r, e.reason);
      });
    };
    return function (r, o) {
      nh(r, "taskExecutor");
      var i = new AbortController();
      n(i);
      var a = x2(
        function () {
          return Rs(void 0, null, function () {
            var s;
            return Ps(this, function (l) {
              switch (l.label) {
                case 0:
                  return (
                    xi(e),
                    xi(i.signal),
                    [
                      4,
                      r({
                        pause: Xl(i.signal),
                        delay: l1(i.signal),
                        signal: i.signal,
                      }),
                    ]
                  );
                case 1:
                  return (s = l.sent()), xi(i.signal), [2, s];
              }
            });
          });
        },
        function () {
          return Si(i, w2);
        }
      );
      return (
        o != null && o.autoJoin && t.push(a),
        {
          result: Xl(e)(a),
          cancel: function () {
            Si(i, b2);
          },
        }
      );
    };
  },
  E2 = function (e, t) {
    var n = function (r, o) {
      return Rs(void 0, null, function () {
        var i, a, s, l;
        return Ps(this, function (u) {
          switch (u.label) {
            case 0:
              xi(t),
                (i = function () {}),
                (a = new Promise(function (c, d) {
                  var f = e({
                    predicate: r,
                    effect: function (h, p) {
                      p.unsubscribe(),
                        c([h, p.getState(), p.getOriginalState()]);
                    },
                  });
                  i = function () {
                    f(), d();
                  };
                })),
                (s = [a]),
                o != null &&
                  s.push(
                    new Promise(function (c) {
                      return setTimeout(c, o, null);
                    })
                  ),
                (u.label = 1);
            case 1:
              return u.trys.push([1, , 3, 4]), [4, s1(t, Promise.race(s))];
            case 2:
              return (l = u.sent()), xi(t), [2, l];
            case 3:
              return i(), [7];
            case 4:
              return [2];
          }
        });
      });
    };
    return function (r, o) {
      return n1(n(r, o));
    };
  },
  u1 = function (e) {
    var t = e.type,
      n = e.actionCreator,
      r = e.matcher,
      o = e.predicate,
      i = e.effect;
    if (t) o = Mt(t).match;
    else if (n) (t = n.type), (o = n.match);
    else if (r) o = r;
    else if (!o)
      throw new Error(
        "Creating or removing a listener requires one of the known fields for matching an action"
      );
    return nh(i, "options.listener"), { predicate: o, type: t, effect: i };
  },
  P2 = function (e) {
    var t = u1(e),
      n = t.type,
      r = t.predicate,
      o = t.effect,
      i = qu(),
      a = {
        id: i,
        effect: o,
        type: n,
        predicate: r,
        pending: new Set(),
        unsubscribe: function () {
          throw new Error("Unsubscribe not initialized");
        },
      };
    return a;
  },
  wf = function (e) {
    e.pending.forEach(function (t) {
      Si(t, a1);
    });
  },
  R2 = function (e) {
    return function () {
      e.forEach(wf), e.clear();
    };
  },
  uv = function (e, t, n) {
    try {
      e(t, n);
    } catch (r) {
      setTimeout(function () {
        throw r;
      }, 0);
    }
  },
  c1 = Mt(Ms + "/add"),
  d1 = Mt(Ms + "/removeAll"),
  f1 = Mt(Ms + "/remove"),
  O2 = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    console.error.apply(console, eo([Ms + "/error"], e));
  };
function T2(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = new Map(),
    r = e.extra,
    o = e.onError,
    i = o === void 0 ? O2 : o;
  nh(i, "onError");
  var a = function (h) {
      return (
        (h.unsubscribe = function () {
          return n.delete(h.id);
        }),
        n.set(h.id, h),
        function (p) {
          h.unsubscribe(), p != null && p.cancelActive && wf(h);
        }
      );
    },
    s = function (h) {
      for (var p = 0, g = Array.from(n.values()); p < g.length; p++) {
        var w = g[p];
        if (h(w)) return w;
      }
    },
    l = function (h) {
      var p = s(function (g) {
        return g.effect === h.effect;
      });
      return p || (p = P2(h)), a(p);
    },
    u = function (h) {
      var p = u1(h),
        g = p.type,
        w = p.effect,
        b = p.predicate,
        m = s(function (y) {
          var v = typeof g == "string" ? y.type === g : y.predicate === b;
          return v && y.effect === w;
        });
      return m && (m.unsubscribe(), h.cancelActive && wf(m)), !!m;
    },
    c = function (h, p, g, w) {
      return Rs(t, null, function () {
        var b, m, y, v;
        return Ps(this, function (S) {
          switch (S.label) {
            case 0:
              (b = new AbortController()),
                (m = E2(l, b.signal)),
                (y = []),
                (S.label = 1);
            case 1:
              return (
                S.trys.push([1, 3, 4, 6]),
                h.pending.add(b),
                [
                  4,
                  Promise.resolve(
                    h.effect(
                      p,
                      k2({}, g, {
                        getOriginalState: w,
                        condition: function (k, C) {
                          return m(k, C).then(Boolean);
                        },
                        take: m,
                        delay: l1(b.signal),
                        pause: Xl(b.signal),
                        extra: r,
                        signal: b.signal,
                        fork: C2(b.signal, y),
                        unsubscribe: h.unsubscribe,
                        subscribe: function () {
                          n.set(h.id, h);
                        },
                        cancelActiveListeners: function () {
                          h.pending.forEach(function (k, C, E) {
                            k !== b && (Si(k, a1), E.delete(k));
                          });
                        },
                      })
                    )
                  ),
                ]
              );
            case 2:
              return S.sent(), [3, 6];
            case 3:
              return (
                (v = S.sent()),
                v instanceof Is || uv(i, v, { raisedBy: "effect" }),
                [3, 6]
              );
            case 4:
              return [4, Promise.allSettled(y)];
            case 5:
              return S.sent(), Si(b, S2), h.pending.delete(b), [7];
            case 6:
              return [2];
          }
        });
      });
    },
    d = R2(n),
    f = function (h) {
      return function (p) {
        return function (g) {
          if (!th(g)) return p(g);
          if (c1.match(g)) return l(g.payload);
          if (d1.match(g)) {
            d();
            return;
          }
          if (f1.match(g)) return u(g.payload);
          var w = h.getState(),
            b = function () {
              if (w === lv)
                throw new Error(
                  Ms + ": getOriginalState can only be called synchronously"
                );
              return w;
            },
            m;
          try {
            if (((m = p(g)), n.size > 0))
              for (
                var y = h.getState(), v = Array.from(n.values()), S = 0, k = v;
                S < k.length;
                S++
              ) {
                var C = k[S],
                  E = !1;
                try {
                  E = C.predicate(g, y, w);
                } catch (O) {
                  (E = !1), uv(i, O, { raisedBy: "predicate" });
                }
                E && c(C, g, h, b);
              }
          } finally {
            w = lv;
          }
          return m;
        };
      };
    };
  return {
    middleware: f,
    startListening: l,
    stopListening: u,
    clearListeners: d,
  };
}
var Eo = "RTK_autoBatch",
  ri = function () {
    return function (e) {
      var t;
      return { payload: e, meta: ((t = {}), (t[Eo] = !0), t) };
    };
  },
  cv,
  I2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask.bind(
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : globalThis
        )
      : function (e) {
          return (cv || (cv = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  p1 = function (e) {
    return function (t) {
      setTimeout(t, e);
    };
  },
  M2 =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : p1(10),
  _2 = function (e) {
    return (
      e === void 0 && (e = { type: "raf" }),
      function (t) {
        return function () {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var o = t.apply(void 0, n),
            i = !0,
            a = !1,
            s = !1,
            l = new Set(),
            u =
              e.type === "tick"
                ? I2
                : e.type === "raf"
                ? M2
                : e.type === "callback"
                ? e.queueNotification
                : p1(e.timeout),
            c = function () {
              (s = !1),
                a &&
                  ((a = !1),
                  l.forEach(function (d) {
                    return d();
                  }));
            };
          return Object.assign({}, o, {
            subscribe: function (d) {
              var f = function () {
                  return i && d();
                },
                h = o.subscribe(f);
              return (
                l.add(d),
                function () {
                  h(), l.delete(d);
                }
              );
            },
            dispatch: function (d) {
              var f;
              try {
                return (
                  (i = !((f = d == null ? void 0 : d.meta) != null && f[Eo])),
                  (a = !i),
                  a && (s || ((s = !0), u(c))),
                  o.dispatch(d)
                );
              } finally {
                i = !0;
              }
            },
          });
        };
      }
    );
  };
Ek();
const $2 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      EnhancerArray: Wg,
      MiddlewareArray: qg,
      SHOULD_AUTOBATCH: Eo,
      TaskAbortError: Is,
      __DO_NOT_USE__ActionTypes: Ga,
      addListener: c1,
      applyMiddleware: jg,
      autoBatchEnhancer: _2,
      bindActionCreators: jk,
      clearAllListeners: d1,
      combineReducers: eh,
      compose: Xa,
      configureStore: a2,
      createAction: Mt,
      createActionCreatorInvariantMiddleware: Jk,
      createAsyncThunk: gf,
      createDraftSafeSelector: sr,
      createEntityAdapter: h2,
      createImmutableStateInvariantMiddleware: t2,
      createListenerMiddleware: T2,
      createNextState: Fo,
      createReducer: Xg,
      createSelector: Io,
      createSerializableStateInvariantMiddleware: n2,
      createSlice: yo,
      createStore: Bu,
      current: Zp,
      findNonSerializableValue: Vg,
      freeze: Fu,
      getDefaultMiddleware: Qg,
      getType: Yk,
      isAction: th,
      isActionCreator: Xk,
      isAllOf: wi,
      isAnyOf: Bo,
      isAsyncThunkAction: Gl,
      isDraft: Qt,
      isFluxStandardAction: Bg,
      isFulfilled: oo,
      isImmutableDefault: e2,
      isPending: Hu,
      isPlain: Hg,
      isPlainObject: zn,
      isRejected: Ni,
      isRejectedWithValue: Ts,
      legacy_createStore: Lk,
      miniSerializeError: Jg,
      nanoid: qu,
      original: Mg,
      prepareAutoBatched: ri,
      removeListener: f1,
      unwrapResult: e1,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var Li =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (i[0] & 1) throw i[1];
            return i[1];
          },
          trys: [],
          ops: [],
        },
        r,
        o,
        i,
        a;
      return (
        (a = { next: s(0), throw: s(1), return: s(2) }),
        typeof Symbol == "function" &&
          (a[Symbol.iterator] = function () {
            return this;
          }),
        a
      );
      function s(u) {
        return function (c) {
          return l([u, c]);
        };
      }
      function l(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              o &&
                (i =
                  u[0] & 2
                    ? o.return
                    : u[0]
                    ? o.throw || ((i = o.return) && i.call(o), 0)
                    : o.next) &&
                !(i = i.call(o, u[1])).done)
            )
              return i;
            switch (((o = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
              case 0:
              case 1:
                i = u;
                break;
              case 4:
                return n.label++, { value: u[1], done: !1 };
              case 5:
                n.label++, (o = u[1]), (u = [0]);
                continue;
              case 7:
                (u = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((i = n.trys),
                  !(i = i.length > 0 && i[i.length - 1]) &&
                    (u[0] === 6 || u[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                  n.label = u[1];
                  break;
                }
                if (u[0] === 6 && n.label < i[1]) {
                  (n.label = i[1]), (i = u);
                  break;
                }
                if (i && n.label < i[2]) {
                  (n.label = i[2]), n.ops.push(u);
                  break;
                }
                i[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            u = t.call(e, n);
          } catch (c) {
            (u = [6, c]), (o = 0);
          } finally {
            r = i = 0;
          }
        if (u[0] & 5) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      }
    },
  Zl =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  N2 = Object.defineProperty,
  L2 = Object.defineProperties,
  A2 = Object.getOwnPropertyDescriptors,
  Yl = Object.getOwnPropertySymbols,
  h1 = Object.prototype.hasOwnProperty,
  m1 = Object.prototype.propertyIsEnumerable,
  dv = function (e, t, n) {
    return t in e
      ? N2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Ae = function (e, t) {
    for (var n in t || (t = {})) h1.call(t, n) && dv(e, n, t[n]);
    if (Yl)
      for (var r = 0, o = Yl(t); r < o.length; r++) {
        var n = o[r];
        m1.call(t, n) && dv(e, n, t[n]);
      }
    return e;
  },
  Zn = function (e, t) {
    return L2(e, A2(t));
  },
  fv = function (e, t) {
    var n = {};
    for (var r in e) h1.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Yl)
      for (var o = 0, i = Yl(e); o < i.length; o++) {
        var r = i[o];
        t.indexOf(r) < 0 && m1.call(e, r) && (n[r] = e[r]);
      }
    return n;
  },
  Ai = function (e, t, n) {
    return new Promise(function (r, o) {
      var i = function (l) {
          try {
            s(n.next(l));
          } catch (u) {
            o(u);
          }
        },
        a = function (l) {
          try {
            s(n.throw(l));
          } catch (u) {
            o(u);
          }
        },
        s = function (l) {
          return l.done ? r(l.value) : Promise.resolve(l.value).then(i, a);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  _e;
(function (e) {
  (e.uninitialized = "uninitialized"),
    (e.pending = "pending"),
    (e.fulfilled = "fulfilled"),
    (e.rejected = "rejected");
})(_e || (_e = {}));
function j2(e) {
  return {
    status: e,
    isUninitialized: e === _e.uninitialized,
    isLoading: e === _e.pending,
    isSuccess: e === _e.fulfilled,
    isError: e === _e.rejected,
  };
}
function z2(e) {
  return new RegExp("(^|:)//").test(e);
}
var D2 = function (e) {
    return e.replace(/\/$/, "");
  },
  U2 = function (e) {
    return e.replace(/^\//, "");
  };
function F2(e, t) {
  if (!e) return t;
  if (!t) return e;
  if (z2(t)) return t;
  var n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return (e = D2(e)), (t = U2(t)), "" + e + n + t;
}
var pv = function (e) {
  return [].concat.apply([], e);
};
function B2() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
function q2() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
var hv = zn;
function oh(e, t) {
  if (e === t || !((hv(e) && hv(t)) || (Array.isArray(e) && Array.isArray(t))))
    return t;
  for (
    var n = Object.keys(t),
      r = Object.keys(e),
      o = n.length === r.length,
      i = Array.isArray(t) ? [] : {},
      a = 0,
      s = n;
    a < s.length;
    a++
  ) {
    var l = s[a];
    (i[l] = oh(e[l], t[l])), o && (o = e[l] === i[l]);
  }
  return o ? e : i;
}
var mv = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return fetch.apply(void 0, e);
  },
  W2 = function (e) {
    return e.status >= 200 && e.status <= 299;
  },
  H2 = function (e) {
    return /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "");
  };
function vv(e) {
  if (!zn(e)) return e;
  for (var t = Ae({}, e), n = 0, r = Object.entries(t); n < r.length; n++) {
    var o = r[n],
      i = o[0],
      a = o[1];
    a === void 0 && delete t[i];
  }
  return t;
}
function v1(e) {
  var t = this;
  e === void 0 && (e = {});
  var n = e,
    r = n.baseUrl,
    o = n.prepareHeaders,
    i =
      o === void 0
        ? function (y) {
            return y;
          }
        : o,
    a = n.fetchFn,
    s = a === void 0 ? mv : a,
    l = n.paramsSerializer,
    u = n.isJsonContentType,
    c = u === void 0 ? H2 : u,
    d = n.jsonContentType,
    f = d === void 0 ? "application/json" : d,
    h = n.jsonReplacer,
    p = n.timeout,
    g = n.responseHandler,
    w = n.validateStatus,
    b = fv(n, [
      "baseUrl",
      "prepareHeaders",
      "fetchFn",
      "paramsSerializer",
      "isJsonContentType",
      "jsonContentType",
      "jsonReplacer",
      "timeout",
      "responseHandler",
      "validateStatus",
    ]);
  return (
    typeof fetch > "u" &&
      s === mv &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."
      ),
    function (y, v) {
      return Ai(t, null, function () {
        var S,
          k,
          C,
          E,
          O,
          R,
          M,
          N,
          $,
          P,
          T,
          A,
          U,
          _,
          j,
          D,
          q,
          H,
          G,
          Q,
          V,
          Y,
          re,
          Ce,
          ce,
          me,
          oe,
          ee,
          z,
          W,
          X,
          he,
          se,
          we,
          Oe,
          We;
        return Li(this, function (ae) {
          switch (ae.label) {
            case 0:
              return (
                (S = v.signal),
                (k = v.getState),
                (C = v.extra),
                (E = v.endpoint),
                (O = v.forced),
                (R = v.type),
                (N = typeof y == "string" ? { url: y } : y),
                ($ = N.url),
                (P = N.headers),
                (T = P === void 0 ? new Headers(b.headers) : P),
                (A = N.params),
                (U = A === void 0 ? void 0 : A),
                (_ = N.responseHandler),
                (j = _ === void 0 ? g ?? "json" : _),
                (D = N.validateStatus),
                (q = D === void 0 ? w ?? W2 : D),
                (H = N.timeout),
                (G = H === void 0 ? p : H),
                (Q = fv(N, [
                  "url",
                  "headers",
                  "params",
                  "responseHandler",
                  "validateStatus",
                  "timeout",
                ])),
                (V = Ae(Zn(Ae({}, b), { signal: S }), Q)),
                (T = new Headers(vv(T))),
                (Y = V),
                [
                  4,
                  i(T, {
                    getState: k,
                    extra: C,
                    endpoint: E,
                    forced: O,
                    type: R,
                  }),
                ]
              );
            case 1:
              (Y.headers = ae.sent() || T),
                (re = function (Te) {
                  return (
                    typeof Te == "object" &&
                    (zn(Te) ||
                      Array.isArray(Te) ||
                      typeof Te.toJSON == "function")
                  );
                }),
                !V.headers.has("content-type") &&
                  re(V.body) &&
                  V.headers.set("content-type", f),
                re(V.body) &&
                  c(V.headers) &&
                  (V.body = JSON.stringify(V.body, h)),
                U &&
                  ((Ce = ~$.indexOf("?") ? "&" : "?"),
                  (ce = l ? l(U) : new URLSearchParams(vv(U))),
                  ($ += Ce + ce)),
                ($ = F2(r, $)),
                (me = new Request($, V)),
                (oe = new Request($, V)),
                (M = { request: oe }),
                (z = !1),
                (W =
                  G &&
                  setTimeout(function () {
                    (z = !0), v.abort();
                  }, G)),
                (ae.label = 2);
            case 2:
              return ae.trys.push([2, 4, 5, 6]), [4, s(me)];
            case 3:
              return (ee = ae.sent()), [3, 6];
            case 4:
              return (
                (X = ae.sent()),
                [
                  2,
                  {
                    error: {
                      status: z ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                      error: String(X),
                    },
                    meta: M,
                  },
                ]
              );
            case 5:
              return W && clearTimeout(W), [7];
            case 6:
              (he = ee.clone()), (M.response = he), (we = ""), (ae.label = 7);
            case 7:
              return (
                ae.trys.push([7, 9, , 10]),
                [
                  4,
                  Promise.all([
                    m(ee, j).then(
                      function (Te) {
                        return (se = Te);
                      },
                      function (Te) {
                        return (Oe = Te);
                      }
                    ),
                    he.text().then(
                      function (Te) {
                        return (we = Te);
                      },
                      function () {}
                    ),
                  ]),
                ]
              );
            case 8:
              if ((ae.sent(), Oe)) throw Oe;
              return [3, 10];
            case 9:
              return (
                (We = ae.sent()),
                [
                  2,
                  {
                    error: {
                      status: "PARSING_ERROR",
                      originalStatus: ee.status,
                      data: we,
                      error: String(We),
                    },
                    meta: M,
                  },
                ]
              );
            case 10:
              return [
                2,
                q(ee, se)
                  ? { data: se, meta: M }
                  : { error: { status: ee.status, data: se }, meta: M },
              ];
          }
        });
      });
    }
  );
  function m(y, v) {
    return Ai(this, null, function () {
      var S;
      return Li(this, function (k) {
        switch (k.label) {
          case 0:
            return typeof v == "function"
              ? [2, v(y)]
              : (v === "content-type" && (v = c(y.headers) ? "json" : "text"),
                v !== "json" ? [3, 2] : [4, y.text()]);
          case 1:
            return (S = k.sent()), [2, S.length ? JSON.parse(S) : null];
          case 2:
            return [2, y.text()];
        }
      });
    });
  }
}
var ki = (function () {
  function e(t, n) {
    n === void 0 && (n = void 0), (this.value = t), (this.meta = n);
  }
  return e;
})();
function V2(e, t) {
  return (
    e === void 0 && (e = 0),
    t === void 0 && (t = 5),
    Ai(this, null, function () {
      var n, r;
      return Li(this, function (o) {
        switch (o.label) {
          case 0:
            return (
              (n = Math.min(e, t)),
              (r = ~~((Math.random() + 0.4) * (300 << n))),
              [
                4,
                new Promise(function (i) {
                  return setTimeout(function (a) {
                    return i(a);
                  }, r);
                }),
              ]
            );
          case 1:
            return o.sent(), [2];
        }
      });
    })
  );
}
function K2(e) {
  throw Object.assign(new ki({ error: e }), { throwImmediately: !0 });
}
var yv = {},
  Q2 = function (e, t) {
    return function (n, r, o) {
      return Ai(void 0, null, function () {
        var i, a, s, l, u, c, d;
        return Li(this, function (f) {
          switch (f.label) {
            case 0:
              (i = [5, (t || yv).maxRetries, (o || yv).maxRetries].filter(
                function (h) {
                  return h !== void 0;
                }
              )),
                (a = i.slice(-1)[0]),
                (s = function (h, p, g) {
                  var w = g.attempt;
                  return w <= a;
                }),
                (l = Ae(
                  Ae({ maxRetries: a, backoff: V2, retryCondition: s }, t),
                  o
                )),
                (u = 0),
                (f.label = 1);
            case 1:
              f.label = 2;
            case 2:
              return f.trys.push([2, 4, , 6]), [4, e(n, r, o)];
            case 3:
              if (((c = f.sent()), c.error)) throw new ki(c);
              return [2, c];
            case 4:
              if (((d = f.sent()), u++, d.throwImmediately)) {
                if (d instanceof ki) return [2, d.value];
                throw d;
              }
              return d instanceof ki &&
                !l.retryCondition(d.value.error, n, {
                  attempt: u,
                  baseQueryApi: r,
                  extraOptions: o,
                })
                ? [2, d.value]
                : [4, l.backoff(u, l.maxRetries)];
            case 5:
              return f.sent(), [3, 6];
            case 6:
              return [3, 1];
            case 7:
              return [2];
          }
        });
      });
    };
  },
  G2 = Object.assign(Q2, { fail: K2 }),
  Za = Mt("__rtkq/focused"),
  Jl = Mt("__rtkq/unfocused"),
  Ya = Mt("__rtkq/online"),
  eu = Mt("__rtkq/offline"),
  md = !1;
function X2(e, t) {
  function n() {
    var r = function () {
        return e(Za());
      },
      o = function () {
        return e(Jl());
      },
      i = function () {
        return e(Ya());
      },
      a = function () {
        return e(eu());
      },
      s = function () {
        window.document.visibilityState === "visible" ? r() : o();
      };
    md ||
      (typeof window < "u" &&
        window.addEventListener &&
        (window.addEventListener("visibilitychange", s, !1),
        window.addEventListener("focus", r, !1),
        window.addEventListener("online", i, !1),
        window.addEventListener("offline", a, !1),
        (md = !0)));
    var l = function () {
      window.removeEventListener("focus", r),
        window.removeEventListener("visibilitychange", s),
        window.removeEventListener("online", i),
        window.removeEventListener("offline", a),
        (md = !1);
    };
    return l;
  }
  return t
    ? t(e, { onFocus: Za, onFocusLost: Jl, onOffline: eu, onOnline: Ya })
    : n();
}
var nr;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(nr || (nr = {}));
function y1(e) {
  return e.type === nr.query;
}
function Z2(e) {
  return e.type === nr.mutation;
}
function ih(e, t, n, r, o, i) {
  return Y2(e)
    ? e(t, n, r, o).map(Sf).map(i)
    : Array.isArray(e)
    ? e.map(Sf).map(i)
    : [];
}
function Y2(e) {
  return typeof e == "function";
}
function Sf(e) {
  return typeof e == "string" ? { type: e } : e;
}
function vd(e) {
  return e != null;
}
var Ja = Symbol("forceQueryFn"),
  xf = function (e) {
    return typeof e[Ja] == "function";
  };
function J2(e) {
  var t = e.serializeQueryArgs,
    n = e.queryThunk,
    r = e.mutationThunk,
    o = e.api,
    i = e.context,
    a = new Map(),
    s = new Map(),
    l = o.internalActions,
    u = l.unsubscribeQueryResult,
    c = l.removeMutationResult,
    d = l.updateSubscriptionOptions;
  return {
    buildInitiateQuery: m,
    buildInitiateMutation: y,
    getRunningQueryThunk: p,
    getRunningMutationThunk: g,
    getRunningQueriesThunk: w,
    getRunningMutationsThunk: b,
    getRunningOperationPromises: h,
    removalWarning: f,
  };
  function f() {
    throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`);
  }
  function h() {
    typeof process < "u";
    var v = function (S) {
      return Array.from(S.values()).flatMap(function (k) {
        return k ? Object.values(k) : [];
      });
    };
    return Zl(Zl([], v(a)), v(s)).filter(vd);
  }
  function p(v, S) {
    return function (k) {
      var C,
        E = i.endpointDefinitions[v],
        O = t({ queryArgs: S, endpointDefinition: E, endpointName: v });
      return (C = a.get(k)) == null ? void 0 : C[O];
    };
  }
  function g(v, S) {
    return function (k) {
      var C;
      return (C = s.get(k)) == null ? void 0 : C[S];
    };
  }
  function w() {
    return function (v) {
      return Object.values(a.get(v) || {}).filter(vd);
    };
  }
  function b() {
    return function (v) {
      return Object.values(s.get(v) || {}).filter(vd);
    };
  }
  function m(v, S) {
    var k = function (C, E) {
      var O = E === void 0 ? {} : E,
        R = O.subscribe,
        M = R === void 0 ? !0 : R,
        N = O.forceRefetch,
        $ = O.subscriptionOptions,
        P = Ja,
        T = O[P];
      return function (A, U) {
        var _,
          j,
          D = t({ queryArgs: C, endpointDefinition: S, endpointName: v }),
          q = n(
            ((_ = {
              type: "query",
              subscribe: M,
              forceRefetch: N,
              subscriptionOptions: $,
              endpointName: v,
              originalArgs: C,
              queryCacheKey: D,
            }),
            (_[Ja] = T),
            _)
          ),
          H = o.endpoints[v].select(C),
          G = A(q),
          Q = H(U()),
          V = G.requestId,
          Y = G.abort,
          re = Q.requestId !== V,
          Ce = (j = a.get(A)) == null ? void 0 : j[D],
          ce = function () {
            return H(U());
          },
          me = Object.assign(
            T
              ? G.then(ce)
              : re && !Ce
              ? Promise.resolve(Q)
              : Promise.all([Ce, G]).then(ce),
            {
              arg: C,
              requestId: V,
              subscriptionOptions: $,
              queryCacheKey: D,
              abort: Y,
              unwrap: function () {
                return Ai(this, null, function () {
                  var ee;
                  return Li(this, function (z) {
                    switch (z.label) {
                      case 0:
                        return [4, me];
                      case 1:
                        if (((ee = z.sent()), ee.isError)) throw ee.error;
                        return [2, ee.data];
                    }
                  });
                });
              },
              refetch: function () {
                return A(k(C, { subscribe: !1, forceRefetch: !0 }));
              },
              unsubscribe: function () {
                M && A(u({ queryCacheKey: D, requestId: V }));
              },
              updateSubscriptionOptions: function (ee) {
                (me.subscriptionOptions = ee),
                  A(
                    d({
                      endpointName: v,
                      requestId: V,
                      queryCacheKey: D,
                      options: ee,
                    })
                  );
              },
            }
          );
        if (!Ce && !re && !T) {
          var oe = a.get(A) || {};
          (oe[D] = me),
            a.set(A, oe),
            me.then(function () {
              delete oe[D], Object.keys(oe).length || a.delete(A);
            });
        }
        return me;
      };
    };
    return k;
  }
  function y(v) {
    return function (S, k) {
      var C = k === void 0 ? {} : k,
        E = C.track,
        O = E === void 0 ? !0 : E,
        R = C.fixedCacheKey;
      return function (M, N) {
        var $ = r({
            type: "mutation",
            endpointName: v,
            originalArgs: S,
            track: O,
            fixedCacheKey: R,
          }),
          P = M($),
          T = P.requestId,
          A = P.abort,
          U = P.unwrap,
          _ = P.unwrap()
            .then(function (H) {
              return { data: H };
            })
            .catch(function (H) {
              return { error: H };
            }),
          j = function () {
            M(c({ requestId: T, fixedCacheKey: R }));
          },
          D = Object.assign(_, {
            arg: P.arg,
            requestId: T,
            abort: A,
            unwrap: U,
            unsubscribe: j,
            reset: j,
          }),
          q = s.get(M) || {};
        return (
          s.set(M, q),
          (q[T] = D),
          D.then(function () {
            delete q[T], Object.keys(q).length || s.delete(M);
          }),
          R &&
            ((q[R] = D),
            D.then(function () {
              q[R] === D && (delete q[R], Object.keys(q).length || s.delete(M));
            })),
          D
        );
      };
    };
  }
}
function gv(e) {
  return e;
}
function eC(e) {
  var t = this,
    n = e.reducerPath,
    r = e.baseQuery,
    o = e.context.endpointDefinitions,
    i = e.serializeQueryArgs,
    a = e.api,
    s = e.assertTagType,
    l = function (v, S, k, C) {
      return function (E, O) {
        var R = o[v],
          M = i({ queryArgs: S, endpointDefinition: R, endpointName: v });
        if (
          (E(
            a.internalActions.queryResultPatched({
              queryCacheKey: M,
              patches: k,
            })
          ),
          !!C)
        ) {
          var N = a.endpoints[v].select(S)(O()),
            $ = ih(R.providesTags, N.data, void 0, S, {}, s);
          E(
            a.internalActions.updateProvidedBy({
              queryCacheKey: M,
              providedTags: $,
            })
          );
        }
      };
    },
    u = function (v, S, k, C) {
      return (
        C === void 0 && (C = !0),
        function (E, O) {
          var R,
            M,
            N = a.endpoints[v],
            $ = N.select(S)(O()),
            P = {
              patches: [],
              inversePatches: [],
              undo: function () {
                return E(a.util.patchQueryData(v, S, P.inversePatches, C));
              },
            };
          if ($.status === _e.uninitialized) return P;
          var T;
          if ("data" in $)
            if (jn($.data)) {
              var A = Ag($.data, k),
                U = A[0],
                _ = A[1],
                j = A[2];
              (R = P.patches).push.apply(R, _),
                (M = P.inversePatches).push.apply(M, j),
                (T = U);
            } else
              (T = k($.data)),
                P.patches.push({ op: "replace", path: [], value: T }),
                P.inversePatches.push({
                  op: "replace",
                  path: [],
                  value: $.data,
                });
          return E(a.util.patchQueryData(v, S, P.patches, C)), P;
        }
      );
    },
    c = function (v, S, k) {
      return function (C) {
        var E;
        return C(
          a.endpoints[v].initiate(
            S,
            ((E = { subscribe: !1, forceRefetch: !0 }),
            (E[Ja] = function () {
              return { data: k };
            }),
            E)
          )
        );
      };
    },
    d = function (v, S) {
      return Ai(t, [v, S], function (k, C) {
        var E,
          O,
          R,
          M,
          N,
          $,
          P,
          T,
          A,
          U,
          _,
          j,
          D,
          q,
          H,
          G,
          Q,
          V,
          Y = C.signal,
          re = C.abort,
          Ce = C.rejectWithValue,
          ce = C.fulfillWithValue,
          me = C.dispatch,
          oe = C.getState,
          ee = C.extra;
        return Li(this, function (z) {
          switch (z.label) {
            case 0:
              (E = o[k.endpointName]), (z.label = 1);
            case 1:
              return (
                z.trys.push([1, 8, , 13]),
                (O = gv),
                (R = void 0),
                (M = {
                  signal: Y,
                  abort: re,
                  dispatch: me,
                  getState: oe,
                  extra: ee,
                  endpoint: k.endpointName,
                  type: k.type,
                  forced: k.type === "query" ? f(k, oe()) : void 0,
                }),
                (N = k.type === "query" ? k[Ja] : void 0),
                N ? ((R = N()), [3, 6]) : [3, 2]
              );
            case 2:
              return E.query
                ? [4, r(E.query(k.originalArgs), M, E.extraOptions)]
                : [3, 4];
            case 3:
              return (
                (R = z.sent()),
                E.transformResponse && (O = E.transformResponse),
                [3, 6]
              );
            case 4:
              return [
                4,
                E.queryFn(k.originalArgs, M, E.extraOptions, function (W) {
                  return r(W, M, E.extraOptions);
                }),
              ];
            case 5:
              (R = z.sent()), (z.label = 6);
            case 6:
              if ((typeof process < "u", R.error))
                throw new ki(R.error, R.meta);
              return (_ = ce), [4, O(R.data, R.meta, k.originalArgs)];
            case 7:
              return [
                2,
                _.apply(void 0, [
                  z.sent(),
                  ((Q = {
                    fulfilledTimeStamp: Date.now(),
                    baseQueryMeta: R.meta,
                  }),
                  (Q[Eo] = !0),
                  Q),
                ]),
              ];
            case 8:
              if (((j = z.sent()), (D = j), !(D instanceof ki))) return [3, 12];
              (q = gv),
                E.query &&
                  E.transformErrorResponse &&
                  (q = E.transformErrorResponse),
                (z.label = 9);
            case 9:
              return (
                z.trys.push([9, 11, , 12]),
                (H = Ce),
                [4, q(D.value, D.meta, k.originalArgs)]
              );
            case 10:
              return [
                2,
                H.apply(void 0, [
                  z.sent(),
                  ((V = { baseQueryMeta: D.meta }), (V[Eo] = !0), V),
                ]),
              ];
            case 11:
              return (G = z.sent()), (D = G), [3, 12];
            case 12:
              throw (typeof process < "u", console.error(D), D);
            case 13:
              return [2];
          }
        });
      });
    };
  function f(v, S) {
    var k,
      C,
      E,
      O,
      R =
        (C = (k = S[n]) == null ? void 0 : k.queries) == null
          ? void 0
          : C[v.queryCacheKey],
      M = (E = S[n]) == null ? void 0 : E.config.refetchOnMountOrArgChange,
      N = R == null ? void 0 : R.fulfilledTimeStamp,
      $ = (O = v.forceRefetch) != null ? O : v.subscribe && M;
    return $ ? $ === !0 || (Number(new Date()) - Number(N)) / 1e3 >= $ : !1;
  }
  var h = gf(n + "/executeQuery", d, {
      getPendingMeta: function () {
        var v;
        return (v = { startedTimeStamp: Date.now() }), (v[Eo] = !0), v;
      },
      condition: function (v, S) {
        var k = S.getState,
          C,
          E,
          O,
          R = k(),
          M =
            (E = (C = R[n]) == null ? void 0 : C.queries) == null
              ? void 0
              : E[v.queryCacheKey],
          N = M == null ? void 0 : M.fulfilledTimeStamp,
          $ = v.originalArgs,
          P = M == null ? void 0 : M.originalArgs,
          T = o[v.endpointName];
        return xf(v)
          ? !0
          : (M == null ? void 0 : M.status) === "pending"
          ? !1
          : f(v, R) ||
            (y1(T) &&
              (O = T == null ? void 0 : T.forceRefetch) != null &&
              O.call(T, {
                currentArg: $,
                previousArg: P,
                endpointState: M,
                state: R,
              }))
          ? !0
          : !N;
      },
      dispatchConditionRejection: !0,
    }),
    p = gf(n + "/executeMutation", d, {
      getPendingMeta: function () {
        var v;
        return (v = { startedTimeStamp: Date.now() }), (v[Eo] = !0), v;
      },
    }),
    g = function (v) {
      return "force" in v;
    },
    w = function (v) {
      return "ifOlderThan" in v;
    },
    b = function (v, S, k) {
      return function (C, E) {
        var O = g(k) && k.force,
          R = w(k) && k.ifOlderThan,
          M = function (T) {
            return (
              T === void 0 && (T = !0),
              a.endpoints[v].initiate(S, { forceRefetch: T })
            );
          },
          N = a.endpoints[v].select(S)(E());
        if (O) C(M());
        else if (R) {
          var $ = N == null ? void 0 : N.fulfilledTimeStamp;
          if (!$) {
            C(M());
            return;
          }
          var P = (Number(new Date()) - Number(new Date($))) / 1e3 >= R;
          P && C(M());
        } else C(M(!1));
      };
    };
  function m(v) {
    return function (S) {
      var k, C;
      return (
        ((C = (k = S == null ? void 0 : S.meta) == null ? void 0 : k.arg) ==
        null
          ? void 0
          : C.endpointName) === v
      );
    };
  }
  function y(v, S) {
    return {
      matchPending: wi(Hu(v), m(S)),
      matchFulfilled: wi(oo(v), m(S)),
      matchRejected: wi(Ni(v), m(S)),
    };
  }
  return {
    queryThunk: h,
    mutationThunk: p,
    prefetch: b,
    updateQueryData: u,
    upsertQueryData: c,
    patchQueryData: l,
    buildMatchThunkActions: y,
  };
}
function g1(e, t, n, r) {
  return ih(
    n[e.meta.arg.endpointName][t],
    oo(e) ? e.payload : void 0,
    Ts(e) ? e.payload : void 0,
    e.meta.arg.originalArgs,
    "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0,
    r
  );
}
function Vs(e, t, n) {
  var r = e[t];
  r && n(r);
}
function es(e) {
  var t;
  return (t = "arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) != null
    ? t
    : e.requestId;
}
function bv(e, t, n) {
  var r = e[es(t)];
  r && n(r);
}
var ua = {};
function tC(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.mutationThunk,
    o = e.context,
    i = o.endpointDefinitions,
    a = o.apiUid,
    s = o.extractRehydrationInfo,
    l = o.hasRehydrationInfo,
    u = e.assertTagType,
    c = e.config,
    d = Mt(t + "/resetApiState"),
    f = yo({
      name: t + "/queries",
      initialState: ua,
      reducers: {
        removeQueryResult: {
          reducer: function (S, k) {
            var C = k.payload.queryCacheKey;
            delete S[C];
          },
          prepare: ri(),
        },
        queryResultPatched: {
          reducer: function (S, k) {
            var C = k.payload,
              E = C.queryCacheKey,
              O = C.patches;
            Vs(S, E, function (R) {
              R.data = Jm(R.data, O.concat());
            });
          },
          prepare: ri(),
        },
      },
      extraReducers: function (S) {
        S.addCase(n.pending, function (k, C) {
          var E = C.meta,
            O = C.meta.arg,
            R,
            M,
            N = xf(O);
          (O.subscribe || N) &&
            ((M = k[(R = O.queryCacheKey)]) != null ||
              (k[R] = {
                status: _e.uninitialized,
                endpointName: O.endpointName,
              })),
            Vs(k, O.queryCacheKey, function ($) {
              ($.status = _e.pending),
                ($.requestId = N && $.requestId ? $.requestId : E.requestId),
                O.originalArgs !== void 0 && ($.originalArgs = O.originalArgs),
                ($.startedTimeStamp = E.startedTimeStamp);
            });
        })
          .addCase(n.fulfilled, function (k, C) {
            var E = C.meta,
              O = C.payload;
            Vs(k, E.arg.queryCacheKey, function (R) {
              var M;
              if (!(R.requestId !== E.requestId && !xf(E.arg))) {
                var N = i[E.arg.endpointName].merge;
                if (((R.status = _e.fulfilled), N))
                  if (R.data !== void 0) {
                    var $ = E.fulfilledTimeStamp,
                      P = E.arg,
                      T = E.baseQueryMeta,
                      A = E.requestId,
                      U = Fo(R.data, function (_) {
                        return N(_, O, {
                          arg: P.originalArgs,
                          baseQueryMeta: T,
                          fulfilledTimeStamp: $,
                          requestId: A,
                        });
                      });
                    R.data = U;
                  } else R.data = O;
                else
                  R.data =
                    (M = i[E.arg.endpointName].structuralSharing) == null || M
                      ? oh(Qt(R.data) ? Mg(R.data) : R.data, O)
                      : O;
                delete R.error, (R.fulfilledTimeStamp = E.fulfilledTimeStamp);
              }
            });
          })
          .addCase(n.rejected, function (k, C) {
            var E = C.meta,
              O = E.condition,
              R = E.arg,
              M = E.requestId,
              N = C.error,
              $ = C.payload;
            Vs(k, R.queryCacheKey, function (P) {
              if (!O) {
                if (P.requestId !== M) return;
                (P.status = _e.rejected), (P.error = $ ?? N);
              }
            });
          })
          .addMatcher(l, function (k, C) {
            for (
              var E = s(C).queries, O = 0, R = Object.entries(E);
              O < R.length;
              O++
            ) {
              var M = R[O],
                N = M[0],
                $ = M[1];
              (($ == null ? void 0 : $.status) === _e.fulfilled ||
                ($ == null ? void 0 : $.status) === _e.rejected) &&
                (k[N] = $);
            }
          });
      },
    }),
    h = yo({
      name: t + "/mutations",
      initialState: ua,
      reducers: {
        removeMutationResult: {
          reducer: function (S, k) {
            var C = k.payload,
              E = es(C);
            E in S && delete S[E];
          },
          prepare: ri(),
        },
      },
      extraReducers: function (S) {
        S.addCase(r.pending, function (k, C) {
          var E = C.meta,
            O = C.meta,
            R = O.requestId,
            M = O.arg,
            N = O.startedTimeStamp;
          M.track &&
            (k[es(E)] = {
              requestId: R,
              status: _e.pending,
              endpointName: M.endpointName,
              startedTimeStamp: N,
            });
        })
          .addCase(r.fulfilled, function (k, C) {
            var E = C.payload,
              O = C.meta;
            O.arg.track &&
              bv(k, O, function (R) {
                R.requestId === O.requestId &&
                  ((R.status = _e.fulfilled),
                  (R.data = E),
                  (R.fulfilledTimeStamp = O.fulfilledTimeStamp));
              });
          })
          .addCase(r.rejected, function (k, C) {
            var E = C.payload,
              O = C.error,
              R = C.meta;
            R.arg.track &&
              bv(k, R, function (M) {
                M.requestId === R.requestId &&
                  ((M.status = _e.rejected), (M.error = E ?? O));
              });
          })
          .addMatcher(l, function (k, C) {
            for (
              var E = s(C).mutations, O = 0, R = Object.entries(E);
              O < R.length;
              O++
            ) {
              var M = R[O],
                N = M[0],
                $ = M[1];
              (($ == null ? void 0 : $.status) === _e.fulfilled ||
                ($ == null ? void 0 : $.status) === _e.rejected) &&
                N !== ($ == null ? void 0 : $.requestId) &&
                (k[N] = $);
            }
          });
      },
    }),
    p = yo({
      name: t + "/invalidation",
      initialState: ua,
      reducers: {
        updateProvidedBy: {
          reducer: function (S, k) {
            for (
              var C,
                E,
                O,
                R,
                M = k.payload,
                N = M.queryCacheKey,
                $ = M.providedTags,
                P = 0,
                T = Object.values(S);
              P < T.length;
              P++
            )
              for (
                var A = T[P], U = 0, _ = Object.values(A);
                U < _.length;
                U++
              ) {
                var j = _[U],
                  D = j.indexOf(N);
                D !== -1 && j.splice(D, 1);
              }
            for (var q = 0, H = $; q < H.length; q++) {
              var G = H[q],
                Q = G.type,
                V = G.id,
                Y =
                  (R = (E = (C = S[Q]) != null ? C : (S[Q] = {}))[
                    (O = V || "__internal_without_id")
                  ]) != null
                    ? R
                    : (E[O] = []),
                re = Y.includes(N);
              re || Y.push(N);
            }
          },
          prepare: ri(),
        },
      },
      extraReducers: function (S) {
        S.addCase(f.actions.removeQueryResult, function (k, C) {
          for (
            var E = C.payload.queryCacheKey, O = 0, R = Object.values(k);
            O < R.length;
            O++
          )
            for (var M = R[O], N = 0, $ = Object.values(M); N < $.length; N++) {
              var P = $[N],
                T = P.indexOf(E);
              T !== -1 && P.splice(T, 1);
            }
        })
          .addMatcher(l, function (k, C) {
            for (
              var E, O, R, M, N = s(C).provided, $ = 0, P = Object.entries(N);
              $ < P.length;
              $++
            )
              for (
                var T = P[$], A = T[0], U = T[1], _ = 0, j = Object.entries(U);
                _ < j.length;
                _++
              )
                for (
                  var D = j[_],
                    q = D[0],
                    H = D[1],
                    G =
                      (M = (O = (E = k[A]) != null ? E : (k[A] = {}))[
                        (R = q || "__internal_without_id")
                      ]) != null
                        ? M
                        : (O[R] = []),
                    Q = 0,
                    V = H;
                  Q < V.length;
                  Q++
                ) {
                  var Y = V[Q],
                    re = G.includes(Y);
                  re || G.push(Y);
                }
          })
          .addMatcher(Bo(oo(n), Ts(n)), function (k, C) {
            var E = g1(C, "providesTags", i, u),
              O = C.meta.arg.queryCacheKey;
            p.caseReducers.updateProvidedBy(
              k,
              p.actions.updateProvidedBy({ queryCacheKey: O, providedTags: E })
            );
          });
      },
    }),
    g = yo({
      name: t + "/subscriptions",
      initialState: ua,
      reducers: {
        updateSubscriptionOptions: function (S, k) {},
        unsubscribeQueryResult: function (S, k) {},
        internal_probeSubscription: function (S, k) {},
      },
    }),
    w = yo({
      name: t + "/internalSubscriptions",
      initialState: ua,
      reducers: {
        subscriptionsUpdated: {
          reducer: function (S, k) {
            return Jm(S, k.payload);
          },
          prepare: ri(),
        },
      },
    }),
    b = yo({
      name: t + "/config",
      initialState: Ae(
        { online: B2(), focused: q2(), middlewareRegistered: !1 },
        c
      ),
      reducers: {
        middlewareRegistered: function (S, k) {
          var C = k.payload;
          S.middlewareRegistered =
            S.middlewareRegistered === "conflict" || a !== C ? "conflict" : !0;
        },
      },
      extraReducers: function (S) {
        S.addCase(Ya, function (k) {
          k.online = !0;
        })
          .addCase(eu, function (k) {
            k.online = !1;
          })
          .addCase(Za, function (k) {
            k.focused = !0;
          })
          .addCase(Jl, function (k) {
            k.focused = !1;
          })
          .addMatcher(l, function (k) {
            return Ae({}, k);
          });
      },
    }),
    m = eh({
      queries: f.reducer,
      mutations: h.reducer,
      provided: p.reducer,
      subscriptions: w.reducer,
      config: b.reducer,
    }),
    y = function (S, k) {
      return m(d.match(k) ? void 0 : S, k);
    },
    v = Zn(
      Ae(
        Ae(
          Ae(Ae(Ae(Ae({}, b.actions), f.actions), g.actions), w.actions),
          h.actions
        ),
        p.actions
      ),
      {
        unsubscribeMutationResult: h.actions.removeMutationResult,
        resetApiState: d,
      }
    );
  return { reducer: y, actions: v };
}
var dr = Symbol.for("RTKQ/skipToken"),
  nC = dr,
  b1 = { status: _e.uninitialized },
  wv = Fo(b1, function () {}),
  Sv = Fo(b1, function () {});
function rC(e) {
  var t = e.serializeQueryArgs,
    n = e.reducerPath,
    r = function (c) {
      return wv;
    },
    o = function (c) {
      return Sv;
    };
  return {
    buildQuerySelector: s,
    buildMutationSelector: l,
    selectInvalidatedBy: u,
  };
  function i(c) {
    return Ae(Ae({}, c), j2(c.status));
  }
  function a(c) {
    var d = c[n];
    return d;
  }
  function s(c, d) {
    return function (f) {
      var h = t({ queryArgs: f, endpointDefinition: d, endpointName: c }),
        p = function (w) {
          var b, m, y;
          return (y =
            (m = (b = a(w)) == null ? void 0 : b.queries) == null
              ? void 0
              : m[h]) != null
            ? y
            : wv;
        },
        g = f === dr ? r : p;
      return Io(g, i);
    };
  }
  function l() {
    return function (c) {
      var d, f;
      typeof c == "object" ? (f = (d = es(c)) != null ? d : dr) : (f = c);
      var h = function (g) {
          var w, b, m;
          return (m =
            (b = (w = a(g)) == null ? void 0 : w.mutations) == null
              ? void 0
              : b[f]) != null
            ? m
            : Sv;
        },
        p = f === dr ? o : h;
      return Io(p, i);
    };
  }
  function u(c, d) {
    for (
      var f, h = c[n], p = new Set(), g = 0, w = d.map(Sf);
      g < w.length;
      g++
    ) {
      var b = w[g],
        m = h.provided[b.type];
      if (m)
        for (
          var y =
              (f = b.id !== void 0 ? m[b.id] : pv(Object.values(m))) != null
                ? f
                : [],
            v = 0,
            S = y;
          v < S.length;
          v++
        ) {
          var k = S[v];
          p.add(k);
        }
    }
    return pv(
      Array.from(p.values()).map(function (C) {
        var E = h.queries[C];
        return E
          ? [
              {
                queryCacheKey: C,
                endpointName: E.endpointName,
                originalArgs: E.originalArgs,
              },
            ]
          : [];
      })
    );
  }
}
var Ks = WeakMap ? new WeakMap() : void 0,
  kf = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = "",
      o = Ks == null ? void 0 : Ks.get(n);
    if (typeof o == "string") r = o;
    else {
      var i = JSON.stringify(n, function (a, s) {
        return zn(s)
          ? Object.keys(s)
              .sort()
              .reduce(function (l, u) {
                return (l[u] = s[u]), l;
              }, {})
          : s;
      });
      zn(n) && (Ks == null || Ks.set(n, i)), (r = i);
    }
    return t + "(" + r + ")";
  };
function ah() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (r) {
    var o = vf(function (c) {
        var d, f;
        return (f = r.extractRehydrationInfo) == null
          ? void 0
          : f.call(r, c, {
              reducerPath: (d = r.reducerPath) != null ? d : "api",
            });
      }),
      i = Zn(
        Ae(
          {
            reducerPath: "api",
            keepUnusedDataFor: 60,
            refetchOnMountOrArgChange: !1,
            refetchOnFocus: !1,
            refetchOnReconnect: !1,
          },
          r
        ),
        {
          extractRehydrationInfo: o,
          serializeQueryArgs: function (c) {
            var d = kf;
            if ("serializeQueryArgs" in c.endpointDefinition) {
              var f = c.endpointDefinition.serializeQueryArgs;
              d = function (h) {
                var p = f(h);
                return typeof p == "string"
                  ? p
                  : kf(Zn(Ae({}, h), { queryArgs: p }));
              };
            } else r.serializeQueryArgs && (d = r.serializeQueryArgs);
            return d(c);
          },
          tagTypes: Zl([], r.tagTypes || []),
        }
      ),
      a = {
        endpointDefinitions: {},
        batch: function (c) {
          c();
        },
        apiUid: qu(),
        extractRehydrationInfo: o,
        hasRehydrationInfo: vf(function (c) {
          return o(c) != null;
        }),
      },
      s = {
        injectEndpoints: u,
        enhanceEndpoints: function (c) {
          var d = c.addTagTypes,
            f = c.endpoints;
          if (d)
            for (var h = 0, p = d; h < p.length; h++) {
              var g = p[h];
              i.tagTypes.includes(g) || i.tagTypes.push(g);
            }
          if (f)
            for (var w = 0, b = Object.entries(f); w < b.length; w++) {
              var m = b[w],
                y = m[0],
                v = m[1];
              typeof v == "function"
                ? v(a.endpointDefinitions[y])
                : Object.assign(a.endpointDefinitions[y] || {}, v);
            }
          return s;
        },
      },
      l = e.map(function (c) {
        return c.init(s, i, a);
      });
    function u(c) {
      for (
        var d = c.endpoints({
            query: function (v) {
              return Zn(Ae({}, v), { type: nr.query });
            },
            mutation: function (v) {
              return Zn(Ae({}, v), { type: nr.mutation });
            },
          }),
          f = 0,
          h = Object.entries(d);
        f < h.length;
        f++
      ) {
        var p = h[f],
          g = p[0],
          w = p[1];
        if (!c.overrideExisting && g in a.endpointDefinitions) {
          typeof process < "u";
          continue;
        }
        a.endpointDefinitions[g] = w;
        for (var b = 0, m = l; b < m.length; b++) {
          var y = m[b];
          y.injectEndpoint(g, w);
        }
      }
      return s;
    }
    return s.injectEndpoints({ endpoints: r.endpoints });
  };
}
function oC() {
  return function () {
    throw new Error(
      "When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax."
    );
  };
}
function iC(e) {
  for (var t in e) return !1;
  return !0;
}
var aC = 2147483647 / 1e3 - 1,
  sC = function (e) {
    var t = e.reducerPath,
      n = e.api,
      r = e.context,
      o = e.internalState,
      i = n.internalActions,
      a = i.removeQueryResult,
      s = i.unsubscribeQueryResult;
    function l(f) {
      var h = o.currentSubscriptions[f];
      return !!h && !iC(h);
    }
    var u = {},
      c = function (f, h, p) {
        var g;
        if (s.match(f)) {
          var w = h.getState()[t],
            b = f.payload.queryCacheKey;
          d(
            b,
            (g = w.queries[b]) == null ? void 0 : g.endpointName,
            h,
            w.config
          );
        }
        if (n.util.resetApiState.match(f))
          for (var m = 0, y = Object.entries(u); m < y.length; m++) {
            var v = y[m],
              S = v[0],
              k = v[1];
            k && clearTimeout(k), delete u[S];
          }
        if (r.hasRehydrationInfo(f))
          for (
            var w = h.getState()[t],
              C = r.extractRehydrationInfo(f).queries,
              E = 0,
              O = Object.entries(C);
            E < O.length;
            E++
          ) {
            var R = O[E],
              b = R[0],
              M = R[1];
            d(b, M == null ? void 0 : M.endpointName, h, w.config);
          }
      };
    function d(f, h, p, g) {
      var w,
        b = r.endpointDefinitions[h],
        m =
          (w = b == null ? void 0 : b.keepUnusedDataFor) != null
            ? w
            : g.keepUnusedDataFor;
      if (m !== 1 / 0) {
        var y = Math.max(0, Math.min(m, aC));
        if (!l(f)) {
          var v = u[f];
          v && clearTimeout(v),
            (u[f] = setTimeout(function () {
              l(f) || p.dispatch(a({ queryCacheKey: f })), delete u[f];
            }, y * 1e3));
        }
      }
    }
    return c;
  },
  lC = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.context.endpointDefinitions,
      o = e.mutationThunk,
      i = e.api,
      a = e.assertTagType,
      s = e.refetchQuery,
      l = i.internalActions.removeQueryResult,
      u = Bo(oo(o), Ts(o)),
      c = function (f, h) {
        u(f) && d(g1(f, "invalidatesTags", r, a), h),
          i.util.invalidateTags.match(f) &&
            d(ih(f.payload, void 0, void 0, void 0, void 0, a), h);
      };
    function d(f, h) {
      var p = h.getState(),
        g = p[t],
        w = i.util.selectInvalidatedBy(p, f);
      n.batch(function () {
        for (
          var b, m = Array.from(w.values()), y = 0, v = m;
          y < v.length;
          y++
        ) {
          var S = v[y].queryCacheKey,
            k = g.queries[S],
            C = (b = g.subscriptions[S]) != null ? b : {};
          k &&
            (Object.keys(C).length === 0
              ? h.dispatch(l({ queryCacheKey: S }))
              : k.status !== _e.uninitialized && h.dispatch(s(k, S)));
        }
      });
    }
    return c;
  },
  uC = function (e) {
    var t = e.reducerPath,
      n = e.queryThunk,
      r = e.api,
      o = e.refetchQuery,
      i = e.internalState,
      a = {},
      s = function (h, p) {
        (r.internalActions.updateSubscriptionOptions.match(h) ||
          r.internalActions.unsubscribeQueryResult.match(h)) &&
          u(h.payload, p),
          (n.pending.match(h) || (n.rejected.match(h) && h.meta.condition)) &&
            u(h.meta.arg, p),
          (n.fulfilled.match(h) ||
            (n.rejected.match(h) && !h.meta.condition)) &&
            l(h.meta.arg, p),
          r.util.resetApiState.match(h) && d();
      };
    function l(h, p) {
      var g = h.queryCacheKey,
        w = p.getState()[t],
        b = w.queries[g],
        m = i.currentSubscriptions[g];
      if (!(!b || b.status === _e.uninitialized)) {
        var y = f(m);
        if (Number.isFinite(y)) {
          var v = a[g];
          v != null &&
            v.timeout &&
            (clearTimeout(v.timeout), (v.timeout = void 0));
          var S = Date.now() + y,
            k = (a[g] = {
              nextPollTimestamp: S,
              pollingInterval: y,
              timeout: setTimeout(function () {
                (k.timeout = void 0), p.dispatch(o(b, g));
              }, y),
            });
        }
      }
    }
    function u(h, p) {
      var g = h.queryCacheKey,
        w = p.getState()[t],
        b = w.queries[g],
        m = i.currentSubscriptions[g];
      if (!(!b || b.status === _e.uninitialized)) {
        var y = f(m);
        if (!Number.isFinite(y)) {
          c(g);
          return;
        }
        var v = a[g],
          S = Date.now() + y;
        (!v || S < v.nextPollTimestamp) && l({ queryCacheKey: g }, p);
      }
    }
    function c(h) {
      var p = a[h];
      p != null && p.timeout && clearTimeout(p.timeout), delete a[h];
    }
    function d() {
      for (var h = 0, p = Object.keys(a); h < p.length; h++) {
        var g = p[h];
        c(g);
      }
    }
    function f(h) {
      h === void 0 && (h = {});
      var p = Number.POSITIVE_INFINITY;
      for (var g in h)
        h[g].pollingInterval && (p = Math.min(h[g].pollingInterval, p));
      return p;
    }
    return s;
  },
  cC = function (e) {
    var t = e.reducerPath,
      n = e.context,
      r = e.api,
      o = e.refetchQuery,
      i = e.internalState,
      a = r.internalActions.removeQueryResult,
      s = function (u, c) {
        Za.match(u) && l(c, "refetchOnFocus"),
          Ya.match(u) && l(c, "refetchOnReconnect");
      };
    function l(u, c) {
      var d = u.getState()[t],
        f = d.queries,
        h = i.currentSubscriptions;
      n.batch(function () {
        for (var p = 0, g = Object.keys(h); p < g.length; p++) {
          var w = g[p],
            b = f[w],
            m = h[w];
          if (!(!m || !b)) {
            var y =
              Object.values(m).some(function (v) {
                return v[c] === !0;
              }) ||
              (Object.values(m).every(function (v) {
                return v[c] === void 0;
              }) &&
                d.config[c]);
            y &&
              (Object.keys(m).length === 0
                ? u.dispatch(a({ queryCacheKey: w }))
                : b.status !== _e.uninitialized && u.dispatch(o(b, w)));
          }
        }
      });
    }
    return s;
  },
  xv = new Error("Promise never resolved before cacheEntryRemoved."),
  dC = function (e) {
    var t = e.api,
      n = e.reducerPath,
      r = e.context,
      o = e.queryThunk,
      i = e.mutationThunk;
    e.internalState;
    var a = Gl(o),
      s = Gl(i),
      l = oo(o, i),
      u = {},
      c = function (h, p, g) {
        var w = d(h);
        if (o.pending.match(h)) {
          var b = g[n].queries[w],
            m = p.getState()[n].queries[w];
          !b &&
            m &&
            f(
              h.meta.arg.endpointName,
              h.meta.arg.originalArgs,
              w,
              p,
              h.meta.requestId
            );
        } else if (i.pending.match(h)) {
          var m = p.getState()[n].mutations[w];
          m &&
            f(
              h.meta.arg.endpointName,
              h.meta.arg.originalArgs,
              w,
              p,
              h.meta.requestId
            );
        } else if (l(h)) {
          var y = u[w];
          y != null &&
            y.valueResolved &&
            (y.valueResolved({ data: h.payload, meta: h.meta.baseQueryMeta }),
            delete y.valueResolved);
        } else if (
          t.internalActions.removeQueryResult.match(h) ||
          t.internalActions.removeMutationResult.match(h)
        ) {
          var y = u[w];
          y && (delete u[w], y.cacheEntryRemoved());
        } else if (t.util.resetApiState.match(h))
          for (var v = 0, S = Object.entries(u); v < S.length; v++) {
            var k = S[v],
              C = k[0],
              y = k[1];
            delete u[C], y.cacheEntryRemoved();
          }
      };
    function d(h) {
      return a(h)
        ? h.meta.arg.queryCacheKey
        : s(h)
        ? h.meta.requestId
        : t.internalActions.removeQueryResult.match(h)
        ? h.payload.queryCacheKey
        : t.internalActions.removeMutationResult.match(h)
        ? es(h.payload)
        : "";
    }
    function f(h, p, g, w, b) {
      var m = r.endpointDefinitions[h],
        y = m == null ? void 0 : m.onCacheEntryAdded;
      if (y) {
        var v = {},
          S = new Promise(function (M) {
            v.cacheEntryRemoved = M;
          }),
          k = Promise.race([
            new Promise(function (M) {
              v.valueResolved = M;
            }),
            S.then(function () {
              throw xv;
            }),
          ]);
        k.catch(function () {}), (u[g] = v);
        var C = t.endpoints[h].select(m.type === nr.query ? p : g),
          E = w.dispatch(function (M, N, $) {
            return $;
          }),
          O = Zn(Ae({}, w), {
            getCacheEntry: function () {
              return C(w.getState());
            },
            requestId: b,
            extra: E,
            updateCachedData:
              m.type === nr.query
                ? function (M) {
                    return w.dispatch(t.util.updateQueryData(h, p, M));
                  }
                : void 0,
            cacheDataLoaded: k,
            cacheEntryRemoved: S,
          }),
          R = y(p, O);
        Promise.resolve(R).catch(function (M) {
          if (M !== xv) throw M;
        });
      }
    }
    return c;
  },
  fC = function (e) {
    var t = e.api,
      n = e.context,
      r = e.queryThunk,
      o = e.mutationThunk,
      i = Hu(r, o),
      a = Ni(r, o),
      s = oo(r, o),
      l = {},
      u = function (c, d) {
        var f, h, p;
        if (i(c)) {
          var g = c.meta,
            w = g.requestId,
            b = g.arg,
            m = b.endpointName,
            y = b.originalArgs,
            v = n.endpointDefinitions[m],
            S = v == null ? void 0 : v.onQueryStarted;
          if (S) {
            var k = {},
              C = new Promise(function (T, A) {
                (k.resolve = T), (k.reject = A);
              });
            C.catch(function () {}), (l[w] = k);
            var E = t.endpoints[m].select(v.type === nr.query ? y : w),
              O = d.dispatch(function (T, A, U) {
                return U;
              }),
              R = Zn(Ae({}, d), {
                getCacheEntry: function () {
                  return E(d.getState());
                },
                requestId: w,
                extra: O,
                updateCachedData:
                  v.type === nr.query
                    ? function (T) {
                        return d.dispatch(t.util.updateQueryData(m, y, T));
                      }
                    : void 0,
                queryFulfilled: C,
              });
            S(y, R);
          }
        } else if (s(c)) {
          var M = c.meta,
            w = M.requestId,
            N = M.baseQueryMeta;
          (f = l[w]) == null || f.resolve({ data: c.payload, meta: N }),
            delete l[w];
        } else if (a(c)) {
          var $ = c.meta,
            w = $.requestId,
            P = $.rejectedWithValue,
            N = $.baseQueryMeta;
          (p = l[w]) == null ||
            p.reject({
              error: (h = c.payload) != null ? h : c.error,
              isUnhandledError: !P,
              meta: N,
            }),
            delete l[w];
        }
      };
    return u;
  },
  pC = function (e) {
    var t = e.api,
      n = e.context.apiUid,
      r = e.reducerPath;
    return function (o, i) {
      var a, s;
      t.util.resetApiState.match(o) &&
        i.dispatch(t.internalActions.middlewareRegistered(n)),
        typeof process < "u";
    };
  },
  kv,
  hC =
    typeof queueMicrotask == "function"
      ? queueMicrotask.bind(
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : globalThis
        )
      : function (e) {
          return (kv || (kv = Promise.resolve())).then(e).catch(function (t) {
            return setTimeout(function () {
              throw t;
            }, 0);
          });
        },
  mC = function (e) {
    var t = e.api,
      n = e.queryThunk,
      r = e.internalState,
      o = t.reducerPath + "/subscriptions",
      i = null,
      a = !1,
      s = t.internalActions,
      l = s.updateSubscriptionOptions,
      u = s.unsubscribeQueryResult,
      c = function (d, f) {
        var h, p, g, w, b, m, y, v, S;
        if (l.match(f)) {
          var k = f.payload,
            C = k.queryCacheKey,
            E = k.requestId,
            O = k.options;
          return (
            (h = d == null ? void 0 : d[C]) != null && h[E] && (d[C][E] = O), !0
          );
        }
        if (u.match(f)) {
          var R = f.payload,
            C = R.queryCacheKey,
            E = R.requestId;
          return d[C] && delete d[C][E], !0;
        }
        if (t.internalActions.removeQueryResult.match(f))
          return delete d[f.payload.queryCacheKey], !0;
        if (n.pending.match(f)) {
          var M = f.meta,
            N = M.arg,
            E = M.requestId;
          if (N.subscribe) {
            var $ = (g = d[(p = N.queryCacheKey)]) != null ? g : (d[p] = {});
            return (
              ($[E] =
                (b = (w = N.subscriptionOptions) != null ? w : $[E]) != null
                  ? b
                  : {}),
              !0
            );
          }
        }
        if (n.rejected.match(f)) {
          var P = f.meta,
            T = P.condition,
            N = P.arg,
            E = P.requestId;
          if (T && N.subscribe) {
            var $ = (y = d[(m = N.queryCacheKey)]) != null ? y : (d[m] = {});
            return (
              ($[E] =
                (S = (v = N.subscriptionOptions) != null ? v : $[E]) != null
                  ? S
                  : {}),
              !0
            );
          }
        }
        return !1;
      };
    return function (d, f) {
      var h, p;
      if (
        (i || (i = JSON.parse(JSON.stringify(r.currentSubscriptions))),
        t.util.resetApiState.match(d))
      )
        return (i = r.currentSubscriptions = {}), [!0, !1];
      if (t.internalActions.internal_probeSubscription.match(d)) {
        var g = d.payload,
          w = g.queryCacheKey,
          b = g.requestId,
          m = !!((h = r.currentSubscriptions[w]) != null && h[b]);
        return [!1, m];
      }
      var y = c(r.currentSubscriptions, d);
      if (y) {
        a ||
          (hC(function () {
            var C = JSON.parse(JSON.stringify(r.currentSubscriptions)),
              E = Ag(i, function () {
                return C;
              }),
              O = E[1];
            f.next(t.internalActions.subscriptionsUpdated(O)),
              (i = C),
              (a = !1);
          }),
          (a = !0));
        var v = !!((p = d.type) != null && p.startsWith(o)),
          S = n.rejected.match(d) && d.meta.condition && !!d.meta.arg.subscribe,
          k = !v && !S;
        return [k, !1];
      }
      return [!0, !1];
    };
  };
function vC(e) {
  var t = e.reducerPath,
    n = e.queryThunk,
    r = e.api,
    o = e.context,
    i = o.apiUid,
    a = { invalidateTags: Mt(t + "/invalidateTags") },
    s = function (d) {
      return !!d && typeof d.type == "string" && d.type.startsWith(t + "/");
    },
    l = [pC, sC, lC, uC, dC, fC],
    u = function (d) {
      var f = !1,
        h = { currentSubscriptions: {} },
        p = Zn(Ae({}, e), { internalState: h, refetchQuery: c }),
        g = l.map(function (m) {
          return m(p);
        }),
        w = mC(p),
        b = cC(p);
      return function (m) {
        return function (y) {
          f ||
            ((f = !0), d.dispatch(r.internalActions.middlewareRegistered(i)));
          var v = Zn(Ae({}, d), { next: m }),
            S = d.getState(),
            k = w(y, v, S),
            C = k[0],
            E = k[1],
            O;
          if (
            (C ? (O = m(y)) : (O = E),
            d.getState()[t] && (b(y, v, S), s(y) || o.hasRehydrationInfo(y)))
          )
            for (var R = 0, M = g; R < M.length; R++) {
              var N = M[R];
              N(y, v, S);
            }
          return O;
        };
      };
    };
  return { middleware: u, actions: a };
  function c(d, f, h) {
    return (
      h === void 0 && (h = {}),
      n(
        Ae(
          {
            type: "query",
            endpointName: d.endpointName,
            originalArgs: d.originalArgs,
            subscribe: !1,
            forceRefetch: !0,
            queryCacheKey: f,
          },
          h
        )
      )
    );
  }
}
function Pr(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, Zl([e], t));
}
var Cf = Symbol(),
  sh = function () {
    return {
      name: Cf,
      init: function (e, t, n) {
        var r = t.baseQuery,
          o = t.tagTypes,
          i = t.reducerPath,
          a = t.serializeQueryArgs,
          s = t.keepUnusedDataFor,
          l = t.refetchOnMountOrArgChange,
          u = t.refetchOnFocus,
          c = t.refetchOnReconnect;
        Pk();
        var d = function (G) {
          return typeof process < "u", G;
        };
        Object.assign(e, {
          reducerPath: i,
          endpoints: {},
          internalActions: {
            onOnline: Ya,
            onOffline: eu,
            onFocus: Za,
            onFocusLost: Jl,
          },
          util: {},
        });
        var f = eC({
            baseQuery: r,
            reducerPath: i,
            context: n,
            api: e,
            serializeQueryArgs: a,
            assertTagType: d,
          }),
          h = f.queryThunk,
          p = f.mutationThunk,
          g = f.patchQueryData,
          w = f.updateQueryData,
          b = f.upsertQueryData,
          m = f.prefetch,
          y = f.buildMatchThunkActions,
          v = tC({
            context: n,
            queryThunk: h,
            mutationThunk: p,
            reducerPath: i,
            assertTagType: d,
            config: {
              refetchOnFocus: u,
              refetchOnReconnect: c,
              refetchOnMountOrArgChange: l,
              keepUnusedDataFor: s,
              reducerPath: i,
            },
          }),
          S = v.reducer,
          k = v.actions;
        Pr(e.util, {
          patchQueryData: g,
          updateQueryData: w,
          upsertQueryData: b,
          prefetch: m,
          resetApiState: k.resetApiState,
        }),
          Pr(e.internalActions, k);
        var C = vC({
            reducerPath: i,
            context: n,
            queryThunk: h,
            mutationThunk: p,
            api: e,
            assertTagType: d,
          }),
          E = C.middleware,
          O = C.actions;
        Pr(e.util, O), Pr(e, { reducer: S, middleware: E });
        var R = rC({ serializeQueryArgs: a, reducerPath: i }),
          M = R.buildQuerySelector,
          N = R.buildMutationSelector,
          $ = R.selectInvalidatedBy;
        Pr(e.util, { selectInvalidatedBy: $ });
        var P = J2({
            queryThunk: h,
            mutationThunk: p,
            api: e,
            serializeQueryArgs: a,
            context: n,
          }),
          T = P.buildInitiateQuery,
          A = P.buildInitiateMutation,
          U = P.getRunningMutationThunk,
          _ = P.getRunningMutationsThunk,
          j = P.getRunningQueriesThunk,
          D = P.getRunningQueryThunk,
          q = P.getRunningOperationPromises,
          H = P.removalWarning;
        return (
          Pr(e.util, {
            getRunningOperationPromises: q,
            getRunningOperationPromise: H,
            getRunningMutationThunk: U,
            getRunningMutationsThunk: _,
            getRunningQueryThunk: D,
            getRunningQueriesThunk: j,
          }),
          {
            name: Cf,
            injectEndpoint: function (G, Q) {
              var V,
                Y,
                re = e;
              (Y = (V = re.endpoints)[G]) != null || (V[G] = {}),
                y1(Q)
                  ? Pr(
                      re.endpoints[G],
                      { name: G, select: M(G, Q), initiate: T(G, Q) },
                      y(h, G)
                    )
                  : Z2(Q) &&
                    Pr(
                      re.endpoints[G],
                      { name: G, select: N(), initiate: A(G) },
                      y(p, G)
                    );
            },
          }
        );
      },
    };
  },
  yC = ah(sh());
const gC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get QueryStatus() {
          return _e;
        },
        buildCreateApi: ah,
        copyWithStructuralSharing: oh,
        coreModule: sh,
        coreModuleName: Cf,
        createApi: yC,
        defaultSerializeQueryArgs: kf,
        fakeBaseQuery: oC,
        fetchBaseQuery: v1,
        retry: G2,
        setupListeners: X2,
        skipSelector: nC,
        skipToken: dr,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Qs = Un(gC),
  yd = Un($2);
var w1 = { exports: {} },
  S1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ji = x;
function bC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wC = typeof Object.is == "function" ? Object.is : bC,
  SC = ji.useState,
  xC = ji.useEffect,
  kC = ji.useLayoutEffect,
  CC = ji.useDebugValue;
function EC(e, t) {
  var n = t(),
    r = SC({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    kC(
      function () {
        (o.value = n), (o.getSnapshot = t), gd(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    xC(
      function () {
        return (
          gd(o) && i({ inst: o }),
          e(function () {
            gd(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    CC(n),
    n
  );
}
function gd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wC(e, n);
  } catch {
    return !0;
  }
}
function PC(e, t) {
  return t();
}
var RC =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? PC
    : EC;
S1.useSyncExternalStore =
  ji.useSyncExternalStore !== void 0 ? ji.useSyncExternalStore : RC;
w1.exports = S1;
var x1 = w1.exports,
  k1 = { exports: {} },
  C1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vu = x,
  OC = x1;
function TC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var IC = typeof Object.is == "function" ? Object.is : TC,
  MC = OC.useSyncExternalStore,
  _C = Vu.useRef,
  $C = Vu.useEffect,
  NC = Vu.useMemo,
  LC = Vu.useDebugValue;
C1.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = _C(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else a = i.current;
  i = NC(
    function () {
      function l(h) {
        if (!u) {
          if (((u = !0), (c = h), (h = r(h)), o !== void 0 && a.hasValue)) {
            var p = a.value;
            if (o(p, h)) return (d = p);
          }
          return (d = h);
        }
        if (((p = d), IC(c, h))) return p;
        var g = r(h);
        return o !== void 0 && o(p, g) ? p : ((c = h), (d = g));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, o]
  );
  var s = MC(e, i[0], i[1]);
  return (
    $C(
      function () {
        (a.hasValue = !0), (a.value = s);
      },
      [s]
    ),
    LC(s),
    s
  );
};
k1.exports = C1;
var AC = k1.exports,
  E1 = { exports: {} },
  cn = {},
  P1 = { exports: {} },
  R1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, j) {
    var D = _.length;
    _.push(j);
    e: for (; 0 < D; ) {
      var q = (D - 1) >>> 1,
        H = _[q];
      if (0 < o(H, j)) (_[q] = j), (_[D] = H), (D = q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var j = _[0],
      D = _.pop();
    if (D !== j) {
      _[0] = D;
      e: for (var q = 0, H = _.length, G = H >>> 1; q < G; ) {
        var Q = 2 * (q + 1) - 1,
          V = _[Q],
          Y = Q + 1,
          re = _[Y];
        if (0 > o(V, D))
          Y < H && 0 > o(re, V)
            ? ((_[q] = re), (_[Y] = D), (q = Y))
            : ((_[q] = V), (_[Q] = D), (q = Q));
        else if (Y < H && 0 > o(re, D)) (_[q] = re), (_[Y] = D), (q = Y);
        else break e;
      }
    }
    return j;
  }
  function o(_, j) {
    var D = _.sortIndex - j.sortIndex;
    return D !== 0 ? D : _.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    p = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    b = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(_) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= _)
        r(u), (j.sortIndex = j.expirationTime), t(l, j);
      else break;
      j = n(u);
    }
  }
  function v(_) {
    if (((g = !1), y(_), !p))
      if (n(l) !== null) (p = !0), A(S);
      else {
        var j = n(u);
        j !== null && U(v, j.startTime - _);
      }
  }
  function S(_, j) {
    (p = !1), g && ((g = !1), b(E), (E = -1)), (h = !0);
    var D = f;
    try {
      for (
        y(j), d = n(l);
        d !== null && (!(d.expirationTime > j) || (_ && !M()));

      ) {
        var q = d.callback;
        if (typeof q == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var H = q(d.expirationTime <= j);
          (j = e.unstable_now()),
            typeof H == "function" ? (d.callback = H) : d === n(l) && r(l),
            y(j);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var G = !0;
      else {
        var Q = n(u);
        Q !== null && U(v, Q.startTime - j), (G = !1);
      }
      return G;
    } finally {
      (d = null), (f = D), (h = !1);
    }
  }
  var k = !1,
    C = null,
    E = -1,
    O = 5,
    R = -1;
  function M() {
    return !(e.unstable_now() - R < O);
  }
  function N() {
    if (C !== null) {
      var _ = e.unstable_now();
      R = _;
      var j = !0;
      try {
        j = C(!0, _);
      } finally {
        j ? $() : ((k = !1), (C = null));
      }
    } else k = !1;
  }
  var $;
  if (typeof m == "function")
    $ = function () {
      m(N);
    };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(),
      T = P.port2;
    (P.port1.onmessage = N),
      ($ = function () {
        T.postMessage(null);
      });
  } else
    $ = function () {
      w(N, 0);
    };
  function A(_) {
    (C = _), k || ((k = !0), $());
  }
  function U(_, j) {
    E = w(function () {
      _(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || h || ((p = !0), A(S));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (_) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = f;
      }
      var D = f;
      f = j;
      try {
        return _();
      } finally {
        f = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, j) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var D = f;
      f = _;
      try {
        return j();
      } finally {
        f = D;
      }
    }),
    (e.unstable_scheduleCallback = function (_, j, D) {
      var q = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? q + D : q))
          : (D = q),
        _)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = D + H),
        (_ = {
          id: c++,
          callback: j,
          priorityLevel: _,
          startTime: D,
          expirationTime: H,
          sortIndex: -1,
        }),
        D > q
          ? ((_.sortIndex = D),
            t(u, _),
            n(l) === null &&
              _ === n(u) &&
              (g ? (b(E), (E = -1)) : (g = !0), U(v, D - q)))
          : ((_.sortIndex = H), t(l, _), p || h || ((p = !0), A(S))),
        _
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (_) {
      var j = f;
      return function () {
        var D = f;
        f = j;
        try {
          return _.apply(this, arguments);
        } finally {
          f = D;
        }
      };
    });
})(R1);
P1.exports = R1;
var jC = P1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O1 = x,
  un = jC;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var T1 = new Set(),
  ts = {};
function qo(e, t) {
  zi(e, t), zi(e + "Capture", t);
}
function zi(e, t) {
  for (ts[e] = t, e = 0; e < t.length; e++) T1.add(t[e]);
}
var mr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ef = Object.prototype.hasOwnProperty,
  zC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cv = {},
  Ev = {};
function DC(e) {
  return Ef.call(Ev, e)
    ? !0
    : Ef.call(Cv, e)
    ? !1
    : zC.test(e)
    ? (Ev[e] = !0)
    : ((Cv[e] = !0), !1);
}
function UC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function FC(e, t, n, r) {
  if (t === null || typeof t > "u" || UC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Dt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ct = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ct[e] = new Dt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ct[t] = new Dt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ct[e] = new Dt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ct[e] = new Dt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ct[e] = new Dt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ct[e] = new Dt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ct[e] = new Dt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ct[e] = new Dt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ct[e] = new Dt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lh = /[\-:]([a-z])/g;
function uh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lh, uh);
    Ct[t] = new Dt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lh, uh);
    Ct[t] = new Dt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(lh, uh);
  Ct[t] = new Dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ct[e] = new Dt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ct.xlinkHref = new Dt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ct[e] = new Dt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ch(e, t, n, r) {
  var o = Ct.hasOwnProperty(t) ? Ct[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (FC(t, n, o, r) && (n = null),
    r || o === null
      ? DC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Sr = O1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Gs = Symbol.for("react.element"),
  ii = Symbol.for("react.portal"),
  ai = Symbol.for("react.fragment"),
  dh = Symbol.for("react.strict_mode"),
  Pf = Symbol.for("react.profiler"),
  I1 = Symbol.for("react.provider"),
  M1 = Symbol.for("react.context"),
  fh = Symbol.for("react.forward_ref"),
  Rf = Symbol.for("react.suspense"),
  Of = Symbol.for("react.suspense_list"),
  ph = Symbol.for("react.memo"),
  Tr = Symbol.for("react.lazy"),
  _1 = Symbol.for("react.offscreen"),
  Pv = Symbol.iterator;
function ca(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pv && e[Pv]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qe = Object.assign,
  bd;
function Pa(e) {
  if (bd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      bd = (t && t[1]) || "";
    }
  return (
    `
` +
    bd +
    e
  );
}
var wd = !1;
function Sd(e, t) {
  if (!e || wd) return "";
  wd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (wd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Pa(e) : "";
}
function BC(e) {
  switch (e.tag) {
    case 5:
      return Pa(e.type);
    case 16:
      return Pa("Lazy");
    case 13:
      return Pa("Suspense");
    case 19:
      return Pa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Sd(e.type, !1)), e;
    case 11:
      return (e = Sd(e.type.render, !1)), e;
    case 1:
      return (e = Sd(e.type, !0)), e;
    default:
      return "";
  }
}
function Tf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ai:
      return "Fragment";
    case ii:
      return "Portal";
    case Pf:
      return "Profiler";
    case dh:
      return "StrictMode";
    case Rf:
      return "Suspense";
    case Of:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case M1:
        return (e.displayName || "Context") + ".Consumer";
      case I1:
        return (e._context.displayName || "Context") + ".Provider";
      case fh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ph:
        return (
          (t = e.displayName || null), t !== null ? t : Tf(e.type) || "Memo"
        );
      case Tr:
        (t = e._payload), (e = e._init);
        try {
          return Tf(e(t));
        } catch {}
    }
  return null;
}
function qC(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Tf(t);
    case 8:
      return t === dh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function to(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function $1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function WC(e) {
  var t = $1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Xs(e) {
  e._valueTracker || (e._valueTracker = WC(e));
}
function N1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = $1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function tu(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function If(e, t) {
  var n = t.checked;
  return qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rv(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = to(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function L1(e, t) {
  (t = t.checked), t != null && ch(e, "checked", t, !1);
}
function Mf(e, t) {
  L1(e, t);
  var n = to(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _f(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _f(e, t.type, to(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ov(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _f(e, t, n) {
  (t !== "number" || tu(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ra = Array.isArray;
function Ci(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + to(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function $f(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tv(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (Ra(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: to(n) };
}
function A1(e, t) {
  var n = to(t.value),
    r = to(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Iv(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function j1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Nf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? j1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Zs,
  z1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Zs = Zs || document.createElement("div"),
          Zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Zs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $a = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  HC = ["Webkit", "ms", "Moz", "O"];
Object.keys($a).forEach(function (e) {
  HC.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($a[t] = $a[e]);
  });
});
function D1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || ($a.hasOwnProperty(e) && $a[e])
    ? ("" + t).trim()
    : t + "px";
}
function U1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = D1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var VC = qe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Lf(e, t) {
  if (t) {
    if (VC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Af(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var jf = null;
function hh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zf = null,
  Ei = null,
  Pi = null;
function Mv(e) {
  if ((e = Ns(e))) {
    if (typeof zf != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = Zu(t)), zf(e.stateNode, e.type, t));
  }
}
function F1(e) {
  Ei ? (Pi ? Pi.push(e) : (Pi = [e])) : (Ei = e);
}
function B1() {
  if (Ei) {
    var e = Ei,
      t = Pi;
    if (((Pi = Ei = null), Mv(e), t)) for (e = 0; e < t.length; e++) Mv(t[e]);
  }
}
function q1(e, t) {
  return e(t);
}
function W1() {}
var xd = !1;
function H1(e, t, n) {
  if (xd) return e(t, n);
  xd = !0;
  try {
    return q1(e, t, n);
  } finally {
    (xd = !1), (Ei !== null || Pi !== null) && (W1(), B1());
  }
}
function rs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var Df = !1;
if (mr)
  try {
    var da = {};
    Object.defineProperty(da, "passive", {
      get: function () {
        Df = !0;
      },
    }),
      window.addEventListener("test", da, da),
      window.removeEventListener("test", da, da);
  } catch {
    Df = !1;
  }
function KC(e, t, n, r, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Na = !1,
  nu = null,
  ru = !1,
  Uf = null,
  QC = {
    onError: function (e) {
      (Na = !0), (nu = e);
    },
  };
function GC(e, t, n, r, o, i, a, s, l) {
  (Na = !1), (nu = null), KC.apply(QC, arguments);
}
function XC(e, t, n, r, o, i, a, s, l) {
  if ((GC.apply(this, arguments), Na)) {
    if (Na) {
      var u = nu;
      (Na = !1), (nu = null);
    } else throw Error(F(198));
    ru || ((ru = !0), (Uf = u));
  }
}
function Wo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function V1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _v(e) {
  if (Wo(e) !== e) throw Error(F(188));
}
function ZC(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wo(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return _v(o), e;
        if (i === r) return _v(o), t;
        i = i.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function K1(e) {
  return (e = ZC(e)), e !== null ? Q1(e) : null;
}
function Q1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Q1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var G1 = un.unstable_scheduleCallback,
  $v = un.unstable_cancelCallback,
  YC = un.unstable_shouldYield,
  JC = un.unstable_requestPaint,
  et = un.unstable_now,
  eE = un.unstable_getCurrentPriorityLevel,
  mh = un.unstable_ImmediatePriority,
  X1 = un.unstable_UserBlockingPriority,
  ou = un.unstable_NormalPriority,
  tE = un.unstable_LowPriority,
  Z1 = un.unstable_IdlePriority,
  Ku = null,
  Jn = null;
function nE(e) {
  if (Jn && typeof Jn.onCommitFiberRoot == "function")
    try {
      Jn.onCommitFiberRoot(Ku, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ln = Math.clz32 ? Math.clz32 : iE,
  rE = Math.log,
  oE = Math.LN2;
function iE(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rE(e) / oE) | 0)) | 0;
}
var Ys = 64,
  Js = 4194304;
function Oa(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function iu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = Oa(s)) : ((i &= a), i !== 0 && (r = Oa(i)));
  } else (a = n & ~o), a !== 0 ? (r = Oa(a)) : i !== 0 && (r = Oa(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ln(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function aE(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sE(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Ln(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & n) || s & r) && (o[a] = aE(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function Ff(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Y1() {
  var e = Ys;
  return (Ys <<= 1), !(Ys & 4194240) && (Ys = 64), e;
}
function kd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _s(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ln(t)),
    (e[t] = n);
}
function lE(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ln(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function vh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ln(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Se = 0;
function J1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var eb,
  yh,
  tb,
  nb,
  rb,
  Bf = !1,
  el = [],
  Ur = null,
  Fr = null,
  Br = null,
  os = new Map(),
  is = new Map(),
  _r = [],
  uE =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Nv(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ur = null;
      break;
    case "dragenter":
    case "dragleave":
      Fr = null;
      break;
    case "mouseover":
    case "mouseout":
      Br = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      is.delete(t.pointerId);
  }
}
function fa(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ns(t)), t !== null && yh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function cE(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ur = fa(Ur, e, t, n, r, o)), !0;
    case "dragenter":
      return (Fr = fa(Fr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Br = fa(Br, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return os.set(i, fa(os.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), is.set(i, fa(is.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function ob(e) {
  var t = Po(e.target);
  if (t !== null) {
    var n = Wo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = V1(n)), t !== null)) {
          (e.blockedOn = t),
            rb(e.priority, function () {
              tb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = qf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (jf = r), n.target.dispatchEvent(r), (jf = null);
    } else return (t = Ns(n)), t !== null && yh(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Lv(e, t, n) {
  Cl(e) && n.delete(t);
}
function dE() {
  (Bf = !1),
    Ur !== null && Cl(Ur) && (Ur = null),
    Fr !== null && Cl(Fr) && (Fr = null),
    Br !== null && Cl(Br) && (Br = null),
    os.forEach(Lv),
    is.forEach(Lv);
}
function pa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bf ||
      ((Bf = !0),
      un.unstable_scheduleCallback(un.unstable_NormalPriority, dE)));
}
function as(e) {
  function t(o) {
    return pa(o, e);
  }
  if (0 < el.length) {
    pa(el[0], e);
    for (var n = 1; n < el.length; n++) {
      var r = el[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ur !== null && pa(Ur, e),
      Fr !== null && pa(Fr, e),
      Br !== null && pa(Br, e),
      os.forEach(t),
      is.forEach(t),
      n = 0;
    n < _r.length;
    n++
  )
    (r = _r[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _r.length && ((n = _r[0]), n.blockedOn === null); )
    ob(n), n.blockedOn === null && _r.shift();
}
var Ri = Sr.ReactCurrentBatchConfig,
  au = !0;
function fE(e, t, n, r) {
  var o = Se,
    i = Ri.transition;
  Ri.transition = null;
  try {
    (Se = 1), gh(e, t, n, r);
  } finally {
    (Se = o), (Ri.transition = i);
  }
}
function pE(e, t, n, r) {
  var o = Se,
    i = Ri.transition;
  Ri.transition = null;
  try {
    (Se = 4), gh(e, t, n, r);
  } finally {
    (Se = o), (Ri.transition = i);
  }
}
function gh(e, t, n, r) {
  if (au) {
    var o = qf(e, t, n, r);
    if (o === null) $d(e, t, r, su, n), Nv(e, r);
    else if (cE(o, e, t, n, r)) r.stopPropagation();
    else if ((Nv(e, r), t & 4 && -1 < uE.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ns(o);
        if (
          (i !== null && eb(i),
          (i = qf(e, t, n, r)),
          i === null && $d(e, t, r, su, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else $d(e, t, r, null, n);
  }
}
var su = null;
function qf(e, t, n, r) {
  if (((su = null), (e = hh(r)), (e = Po(e)), e !== null))
    if (((t = Wo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = V1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (su = e), null;
}
function ib(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (eE()) {
        case mh:
          return 1;
        case X1:
          return 4;
        case ou:
        case tE:
          return 16;
        case Z1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ar = null,
  bh = null,
  El = null;
function ab() {
  if (El) return El;
  var e,
    t = bh,
    n = t.length,
    r,
    o = "value" in Ar ? Ar.value : Ar.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (El = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Pl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function tl() {
  return !0;
}
function Av() {
  return !1;
}
function dn(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? tl
        : Av),
      (this.isPropagationStopped = Av),
      this
    );
  }
  return (
    qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = tl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = tl));
      },
      persist: function () {},
      isPersistent: tl,
    }),
    t
  );
}
var Zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wh = dn(Zi),
  $s = qe({}, Zi, { view: 0, detail: 0 }),
  hE = dn($s),
  Cd,
  Ed,
  ha,
  Qu = qe({}, $s, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Sh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ha &&
            (ha && e.type === "mousemove"
              ? ((Cd = e.screenX - ha.screenX), (Ed = e.screenY - ha.screenY))
              : (Ed = Cd = 0),
            (ha = e)),
          Cd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ed;
    },
  }),
  jv = dn(Qu),
  mE = qe({}, Qu, { dataTransfer: 0 }),
  vE = dn(mE),
  yE = qe({}, $s, { relatedTarget: 0 }),
  Pd = dn(yE),
  gE = qe({}, Zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bE = dn(gE),
  wE = qe({}, Zi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  SE = dn(wE),
  xE = qe({}, Zi, { data: 0 }),
  zv = dn(xE),
  kE = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  CE = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  EE = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function PE(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = EE[e]) ? !!t[e] : !1;
}
function Sh() {
  return PE;
}
var RE = qe({}, $s, {
    key: function (e) {
      if (e.key) {
        var t = kE[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Pl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? CE[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Sh,
    charCode: function (e) {
      return e.type === "keypress" ? Pl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Pl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  OE = dn(RE),
  TE = qe({}, Qu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Dv = dn(TE),
  IE = qe({}, $s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Sh,
  }),
  ME = dn(IE),
  _E = qe({}, Zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $E = dn(_E),
  NE = qe({}, Qu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  LE = dn(NE),
  AE = [9, 13, 27, 32],
  xh = mr && "CompositionEvent" in window,
  La = null;
mr && "documentMode" in document && (La = document.documentMode);
var jE = mr && "TextEvent" in window && !La,
  sb = mr && (!xh || (La && 8 < La && 11 >= La)),
  Uv = String.fromCharCode(32),
  Fv = !1;
function lb(e, t) {
  switch (e) {
    case "keyup":
      return AE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ub(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var si = !1;
function zE(e, t) {
  switch (e) {
    case "compositionend":
      return ub(t);
    case "keypress":
      return t.which !== 32 ? null : ((Fv = !0), Uv);
    case "textInput":
      return (e = t.data), e === Uv && Fv ? null : e;
    default:
      return null;
  }
}
function DE(e, t) {
  if (si)
    return e === "compositionend" || (!xh && lb(e, t))
      ? ((e = ab()), (El = bh = Ar = null), (si = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var UE = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Bv(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!UE[e.type] : t === "textarea";
}
function cb(e, t, n, r) {
  F1(r),
    (t = lu(t, "onChange")),
    0 < t.length &&
      ((n = new wh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Aa = null,
  ss = null;
function FE(e) {
  Sb(e, 0);
}
function Gu(e) {
  var t = ci(e);
  if (N1(t)) return e;
}
function BE(e, t) {
  if (e === "change") return t;
}
var db = !1;
if (mr) {
  var Rd;
  if (mr) {
    var Od = "oninput" in document;
    if (!Od) {
      var qv = document.createElement("div");
      qv.setAttribute("oninput", "return;"),
        (Od = typeof qv.oninput == "function");
    }
    Rd = Od;
  } else Rd = !1;
  db = Rd && (!document.documentMode || 9 < document.documentMode);
}
function Wv() {
  Aa && (Aa.detachEvent("onpropertychange", fb), (ss = Aa = null));
}
function fb(e) {
  if (e.propertyName === "value" && Gu(ss)) {
    var t = [];
    cb(t, ss, e, hh(e)), H1(FE, t);
  }
}
function qE(e, t, n) {
  e === "focusin"
    ? (Wv(), (Aa = t), (ss = n), Aa.attachEvent("onpropertychange", fb))
    : e === "focusout" && Wv();
}
function WE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Gu(ss);
}
function HE(e, t) {
  if (e === "click") return Gu(t);
}
function VE(e, t) {
  if (e === "input" || e === "change") return Gu(t);
}
function KE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dn = typeof Object.is == "function" ? Object.is : KE;
function ls(e, t) {
  if (Dn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ef.call(t, o) || !Dn(e[o], t[o])) return !1;
  }
  return !0;
}
function Hv(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vv(e, t) {
  var n = Hv(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hv(n);
  }
}
function pb(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pb(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hb() {
  for (var e = window, t = tu(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = tu(e.document);
  }
  return t;
}
function kh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function QE(e) {
  var t = hb(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pb(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && kh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Vv(n, i));
        var a = Vv(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var GE = mr && "documentMode" in document && 11 >= document.documentMode,
  li = null,
  Wf = null,
  ja = null,
  Hf = !1;
function Kv(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hf ||
    li == null ||
    li !== tu(r) ||
    ((r = li),
    "selectionStart" in r && kh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ja && ls(ja, r)) ||
      ((ja = r),
      (r = lu(Wf, "onSelect")),
      0 < r.length &&
        ((t = new wh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = li))));
}
function nl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ui = {
    animationend: nl("Animation", "AnimationEnd"),
    animationiteration: nl("Animation", "AnimationIteration"),
    animationstart: nl("Animation", "AnimationStart"),
    transitionend: nl("Transition", "TransitionEnd"),
  },
  Td = {},
  mb = {};
mr &&
  ((mb = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ui.animationend.animation,
    delete ui.animationiteration.animation,
    delete ui.animationstart.animation),
  "TransitionEvent" in window || delete ui.transitionend.transition);
function Xu(e) {
  if (Td[e]) return Td[e];
  if (!ui[e]) return e;
  var t = ui[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mb) return (Td[e] = t[n]);
  return e;
}
var vb = Xu("animationend"),
  yb = Xu("animationiteration"),
  gb = Xu("animationstart"),
  bb = Xu("transitionend"),
  wb = new Map(),
  Qv =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function io(e, t) {
  wb.set(e, t), qo(t, [e]);
}
for (var Id = 0; Id < Qv.length; Id++) {
  var Md = Qv[Id],
    XE = Md.toLowerCase(),
    ZE = Md[0].toUpperCase() + Md.slice(1);
  io(XE, "on" + ZE);
}
io(vb, "onAnimationEnd");
io(yb, "onAnimationIteration");
io(gb, "onAnimationStart");
io("dblclick", "onDoubleClick");
io("focusin", "onFocus");
io("focusout", "onBlur");
io(bb, "onTransitionEnd");
zi("onMouseEnter", ["mouseout", "mouseover"]);
zi("onMouseLeave", ["mouseout", "mouseover"]);
zi("onPointerEnter", ["pointerout", "pointerover"]);
zi("onPointerLeave", ["pointerout", "pointerover"]);
qo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ta =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  YE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));
function Gv(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), XC(r, t, void 0, e), (e.currentTarget = null);
}
function Sb(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          Gv(o, s, u), (i = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Gv(o, s, u), (i = l);
        }
    }
  }
  if (ru) throw ((e = Uf), (ru = !1), (Uf = null), e);
}
function Ie(e, t) {
  var n = t[Xf];
  n === void 0 && (n = t[Xf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xb(t, e, 2, !1), n.add(r));
}
function _d(e, t, n) {
  var r = 0;
  t && (r |= 4), xb(n, e, r, t);
}
var rl = "_reactListening" + Math.random().toString(36).slice(2);
function us(e) {
  if (!e[rl]) {
    (e[rl] = !0),
      T1.forEach(function (n) {
        n !== "selectionchange" && (YE.has(n) || _d(n, !1, e), _d(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[rl] || ((t[rl] = !0), _d("selectionchange", !1, t));
  }
}
function xb(e, t, n, r) {
  switch (ib(t)) {
    case 1:
      var o = fE;
      break;
    case 4:
      o = pE;
      break;
    default:
      o = gh;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Df ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function $d(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Po(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  H1(function () {
    var u = i,
      c = hh(n),
      d = [];
    e: {
      var f = wb.get(e);
      if (f !== void 0) {
        var h = wh,
          p = e;
        switch (e) {
          case "keypress":
            if (Pl(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = OE;
            break;
          case "focusin":
            (p = "focus"), (h = Pd);
            break;
          case "focusout":
            (p = "blur"), (h = Pd);
            break;
          case "beforeblur":
          case "afterblur":
            h = Pd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = jv;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = vE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = ME;
            break;
          case vb:
          case yb:
          case gb:
            h = bE;
            break;
          case bb:
            h = $E;
            break;
          case "scroll":
            h = hE;
            break;
          case "wheel":
            h = LE;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = SE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Dv;
        }
        var g = (t & 4) !== 0,
          w = !g && e === "scroll",
          b = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var v = y.stateNode;
          if (
            (y.tag === 5 &&
              v !== null &&
              ((y = v),
              b !== null && ((v = rs(m, b)), v != null && g.push(cs(m, v, y)))),
            w)
          )
            break;
          m = m.return;
        }
        0 < g.length &&
          ((f = new h(f, p, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== jf &&
            (p = n.relatedTarget || n.fromElement) &&
            (Po(p) || p[vr]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((p = n.relatedTarget || n.toElement),
              (h = u),
              (p = p ? Po(p) : null),
              p !== null &&
                ((w = Wo(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((h = null), (p = u)),
          h !== p)
        ) {
          if (
            ((g = jv),
            (v = "onMouseLeave"),
            (b = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Dv),
              (v = "onPointerLeave"),
              (b = "onPointerEnter"),
              (m = "pointer")),
            (w = h == null ? f : ci(h)),
            (y = p == null ? f : ci(p)),
            (f = new g(v, m + "leave", h, n, c)),
            (f.target = w),
            (f.relatedTarget = y),
            (v = null),
            Po(c) === u &&
              ((g = new g(b, m + "enter", p, n, c)),
              (g.target = y),
              (g.relatedTarget = w),
              (v = g)),
            (w = v),
            h && p)
          )
            t: {
              for (g = h, b = p, m = 0, y = g; y; y = Go(y)) m++;
              for (y = 0, v = b; v; v = Go(v)) y++;
              for (; 0 < m - y; ) (g = Go(g)), m--;
              for (; 0 < y - m; ) (b = Go(b)), y--;
              for (; m--; ) {
                if (g === b || (b !== null && g === b.alternate)) break t;
                (g = Go(g)), (b = Go(b));
              }
              g = null;
            }
          else g = null;
          h !== null && Xv(d, f, h, g, !1),
            p !== null && w !== null && Xv(d, w, p, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? ci(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var S = BE;
        else if (Bv(f))
          if (db) S = VE;
          else {
            S = WE;
            var k = qE;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = HE);
        if (S && (S = S(e, u))) {
          cb(d, S, n, c);
          break e;
        }
        k && k(e, f, u),
          e === "focusout" &&
            (k = f._wrapperState) &&
            k.controlled &&
            f.type === "number" &&
            _f(f, "number", f.value);
      }
      switch (((k = u ? ci(u) : window), e)) {
        case "focusin":
          (Bv(k) || k.contentEditable === "true") &&
            ((li = k), (Wf = u), (ja = null));
          break;
        case "focusout":
          ja = Wf = li = null;
          break;
        case "mousedown":
          Hf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hf = !1), Kv(d, n, c);
          break;
        case "selectionchange":
          if (GE) break;
        case "keydown":
        case "keyup":
          Kv(d, n, c);
      }
      var C;
      if (xh)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        si
          ? lb(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (sb &&
          n.locale !== "ko" &&
          (si || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && si && (C = ab())
            : ((Ar = c),
              (bh = "value" in Ar ? Ar.value : Ar.textContent),
              (si = !0))),
        (k = lu(u, E)),
        0 < k.length &&
          ((E = new zv(E, e, null, n, c)),
          d.push({ event: E, listeners: k }),
          C ? (E.data = C) : ((C = ub(n)), C !== null && (E.data = C)))),
        (C = jE ? zE(e, n) : DE(e, n)) &&
          ((u = lu(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new zv("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Sb(d, t);
  });
}
function cs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function lu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = rs(e, n)),
      i != null && r.unshift(cs(e, i, o)),
      (i = rs(e, t)),
      i != null && r.push(cs(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Go(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xv(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = rs(n, i)), l != null && a.unshift(cs(n, l, s)))
        : o || ((l = rs(n, i)), l != null && a.push(cs(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var JE = /\r\n?/g,
  eP = /\u0000|\uFFFD/g;
function Zv(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      JE,
      `
`
    )
    .replace(eP, "");
}
function ol(e, t, n) {
  if (((t = Zv(t)), Zv(e) !== t && n)) throw Error(F(425));
}
function uu() {}
var Vf = null,
  Kf = null;
function Qf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Gf = typeof setTimeout == "function" ? setTimeout : void 0,
  tP = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yv = typeof Promise == "function" ? Promise : void 0,
  nP =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yv < "u"
      ? function (e) {
          return Yv.resolve(null).then(e).catch(rP);
        }
      : Gf;
function rP(e) {
  setTimeout(function () {
    throw e;
  });
}
function Nd(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), as(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  as(t);
}
function qr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Jv(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yi = Math.random().toString(36).slice(2),
  Xn = "__reactFiber$" + Yi,
  ds = "__reactProps$" + Yi,
  vr = "__reactContainer$" + Yi,
  Xf = "__reactEvents$" + Yi,
  oP = "__reactListeners$" + Yi,
  iP = "__reactHandles$" + Yi;
function Po(e) {
  var t = e[Xn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vr] || n[Xn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Jv(e); e !== null; ) {
          if ((n = e[Xn])) return n;
          e = Jv(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ns(e) {
  return (
    (e = e[Xn] || e[vr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ci(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function Zu(e) {
  return e[ds] || null;
}
var Zf = [],
  di = -1;
function ao(e) {
  return { current: e };
}
function $e(e) {
  0 > di || ((e.current = Zf[di]), (Zf[di] = null), di--);
}
function Re(e, t) {
  di++, (Zf[di] = e.current), (e.current = t);
}
var no = {},
  _t = ao(no),
  Ht = ao(!1),
  No = no;
function Di(e, t) {
  var n = e.type.contextTypes;
  if (!n) return no;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Vt(e) {
  return (e = e.childContextTypes), e != null;
}
function cu() {
  $e(Ht), $e(_t);
}
function ey(e, t, n) {
  if (_t.current !== no) throw Error(F(168));
  Re(_t, t), Re(Ht, n);
}
function kb(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(F(108, qC(e) || "Unknown", o));
  return qe({}, n, r);
}
function du(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || no),
    (No = _t.current),
    Re(_t, e),
    Re(Ht, Ht.current),
    !0
  );
}
function ty(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = kb(e, t, No)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $e(Ht),
      $e(_t),
      Re(_t, e))
    : $e(Ht),
    Re(Ht, n);
}
var cr = null,
  Yu = !1,
  Ld = !1;
function Cb(e) {
  cr === null ? (cr = [e]) : cr.push(e);
}
function aP(e) {
  (Yu = !0), Cb(e);
}
function so() {
  if (!Ld && cr !== null) {
    Ld = !0;
    var e = 0,
      t = Se;
    try {
      var n = cr;
      for (Se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (cr = null), (Yu = !1);
    } catch (o) {
      throw (cr !== null && (cr = cr.slice(e + 1)), G1(mh, so), o);
    } finally {
      (Se = t), (Ld = !1);
    }
  }
  return null;
}
var fi = [],
  pi = 0,
  fu = null,
  pu = 0,
  bn = [],
  wn = 0,
  Lo = null,
  fr = 1,
  pr = "";
function go(e, t) {
  (fi[pi++] = pu), (fi[pi++] = fu), (fu = e), (pu = t);
}
function Eb(e, t, n) {
  (bn[wn++] = fr), (bn[wn++] = pr), (bn[wn++] = Lo), (Lo = e);
  var r = fr;
  e = pr;
  var o = 32 - Ln(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ln(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (fr = (1 << (32 - Ln(t) + o)) | (n << o) | r),
      (pr = i + e);
  } else (fr = (1 << i) | (n << o) | r), (pr = e);
}
function Ch(e) {
  e.return !== null && (go(e, 1), Eb(e, 1, 0));
}
function Eh(e) {
  for (; e === fu; )
    (fu = fi[--pi]), (fi[pi] = null), (pu = fi[--pi]), (fi[pi] = null);
  for (; e === Lo; )
    (Lo = bn[--wn]),
      (bn[wn] = null),
      (pr = bn[--wn]),
      (bn[wn] = null),
      (fr = bn[--wn]),
      (bn[wn] = null);
}
var rn = null,
  tn = null,
  je = !1,
  Nn = null;
function Pb(e, t) {
  var n = xn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ny(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rn = e), (tn = qr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rn = e), (tn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lo !== null ? { id: fr, overflow: pr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rn = e),
            (tn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jf(e) {
  if (je) {
    var t = tn;
    if (t) {
      var n = t;
      if (!ny(e, t)) {
        if (Yf(e)) throw Error(F(418));
        t = qr(n.nextSibling);
        var r = rn;
        t && ny(e, t)
          ? Pb(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (je = !1), (rn = e));
      }
    } else {
      if (Yf(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (je = !1), (rn = e);
    }
  }
}
function ry(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rn = e;
}
function il(e) {
  if (e !== rn) return !1;
  if (!je) return ry(e), (je = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Qf(e.type, e.memoizedProps))),
    t && (t = tn))
  ) {
    if (Yf(e)) throw (Rb(), Error(F(418)));
    for (; t; ) Pb(e, t), (t = qr(t.nextSibling));
  }
  if ((ry(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tn = qr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      tn = null;
    }
  } else tn = rn ? qr(e.stateNode.nextSibling) : null;
  return !0;
}
function Rb() {
  for (var e = tn; e; ) e = qr(e.nextSibling);
}
function Ui() {
  (tn = rn = null), (je = !1);
}
function Ph(e) {
  Nn === null ? (Nn = [e]) : Nn.push(e);
}
var sP = Sr.ReactCurrentBatchConfig;
function _n(e, t) {
  if (e && e.defaultProps) {
    (t = qe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hu = ao(null),
  mu = null,
  hi = null,
  Rh = null;
function Oh() {
  Rh = hi = mu = null;
}
function Th(e) {
  var t = hu.current;
  $e(hu), (e._currentValue = t);
}
function ep(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Oi(e, t) {
  (mu = e),
    (Rh = hi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Wt = !0), (e.firstContext = null));
}
function Cn(e) {
  var t = e._currentValue;
  if (Rh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hi === null)) {
      if (mu === null) throw Error(F(308));
      (hi = e), (mu.dependencies = { lanes: 0, firstContext: e });
    } else hi = hi.next = e;
  return t;
}
var Ro = null;
function Ih(e) {
  Ro === null ? (Ro = [e]) : Ro.push(e);
}
function Ob(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ih(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    yr(e, r)
  );
}
function yr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ir = !1;
function Mh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tb(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function hr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      yr(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ih(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    yr(e, n)
  );
}
function Rl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vh(e, n);
  }
}
function oy(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vu(e, t, n, r) {
  var o = e.updateQueue;
  Ir = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        h = s.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var p = e,
            g = s;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((p = g.payload), typeof p == "function")) {
                d = p.call(h, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = g.payload),
                (f = typeof p == "function" ? p.call(h, d, f) : p),
                f == null)
              )
                break e;
              d = qe({}, d, f);
              break e;
            case 2:
              Ir = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (jo |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function iy(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(F(191, o));
        o.call(r);
      }
    }
}
var Ib = new O1.Component().refs;
function tp(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : qe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ju = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = At(),
      o = Vr(e),
      i = hr(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Wr(e, i, o)),
      t !== null && (An(t, e, o, r), Rl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = At(),
      o = Vr(e),
      i = hr(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Wr(e, i, o)),
      t !== null && (An(t, e, o, r), Rl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = At(),
      r = Vr(e),
      o = hr(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Wr(e, o, r)),
      t !== null && (An(t, e, r, n), Rl(t, e, r));
  },
};
function ay(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ls(n, r) || !ls(o, i)
      : !0
  );
}
function Mb(e, t, n) {
  var r = !1,
    o = no,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Cn(i))
      : ((o = Vt(t) ? No : _t.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Di(e, o) : no)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ju),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function sy(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ju.enqueueReplaceState(t, t.state, null);
}
function np(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Ib), Mh(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Cn(i))
    : ((i = Vt(t) ? No : _t.current), (o.context = Di(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (tp(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ju.enqueueReplaceState(o, o.state, null),
      vu(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ma(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === Ib && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function al(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ly(e) {
  var t = e._init;
  return t(e._payload);
}
function _b(e) {
  function t(b, m) {
    if (e) {
      var y = b.deletions;
      y === null ? ((b.deletions = [m]), (b.flags |= 16)) : y.push(m);
    }
  }
  function n(b, m) {
    if (!e) return null;
    for (; m !== null; ) t(b, m), (m = m.sibling);
    return null;
  }
  function r(b, m) {
    for (b = new Map(); m !== null; )
      m.key !== null ? b.set(m.key, m) : b.set(m.index, m), (m = m.sibling);
    return b;
  }
  function o(b, m) {
    return (b = Kr(b, m)), (b.index = 0), (b.sibling = null), b;
  }
  function i(b, m, y) {
    return (
      (b.index = y),
      e
        ? ((y = b.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((b.flags |= 2), m) : y)
            : ((b.flags |= 2), m))
        : ((b.flags |= 1048576), m)
    );
  }
  function a(b) {
    return e && b.alternate === null && (b.flags |= 2), b;
  }
  function s(b, m, y, v) {
    return m === null || m.tag !== 6
      ? ((m = Bd(y, b.mode, v)), (m.return = b), m)
      : ((m = o(m, y)), (m.return = b), m);
  }
  function l(b, m, y, v) {
    var S = y.type;
    return S === ai
      ? c(b, m, y.props.children, v, y.key)
      : m !== null &&
        (m.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Tr &&
            ly(S) === m.type))
      ? ((v = o(m, y.props)), (v.ref = ma(b, m, y)), (v.return = b), v)
      : ((v = $l(y.type, y.key, y.props, null, b.mode, v)),
        (v.ref = ma(b, m, y)),
        (v.return = b),
        v);
  }
  function u(b, m, y, v) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = qd(y, b.mode, v)), (m.return = b), m)
      : ((m = o(m, y.children || [])), (m.return = b), m);
  }
  function c(b, m, y, v, S) {
    return m === null || m.tag !== 7
      ? ((m = $o(y, b.mode, v, S)), (m.return = b), m)
      : ((m = o(m, y)), (m.return = b), m);
  }
  function d(b, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Bd("" + m, b.mode, y)), (m.return = b), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Gs:
          return (
            (y = $l(m.type, m.key, m.props, null, b.mode, y)),
            (y.ref = ma(b, null, m)),
            (y.return = b),
            y
          );
        case ii:
          return (m = qd(m, b.mode, y)), (m.return = b), m;
        case Tr:
          var v = m._init;
          return d(b, v(m._payload), y);
      }
      if (Ra(m) || ca(m))
        return (m = $o(m, b.mode, y, null)), (m.return = b), m;
      al(b, m);
    }
    return null;
  }
  function f(b, m, y, v) {
    var S = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return S !== null ? null : s(b, m, "" + y, v);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Gs:
          return y.key === S ? l(b, m, y, v) : null;
        case ii:
          return y.key === S ? u(b, m, y, v) : null;
        case Tr:
          return (S = y._init), f(b, m, S(y._payload), v);
      }
      if (Ra(y) || ca(y)) return S !== null ? null : c(b, m, y, v, null);
      al(b, y);
    }
    return null;
  }
  function h(b, m, y, v, S) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (b = b.get(y) || null), s(m, b, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Gs:
          return (b = b.get(v.key === null ? y : v.key) || null), l(m, b, v, S);
        case ii:
          return (b = b.get(v.key === null ? y : v.key) || null), u(m, b, v, S);
        case Tr:
          var k = v._init;
          return h(b, m, y, k(v._payload), S);
      }
      if (Ra(v) || ca(v)) return (b = b.get(y) || null), c(m, b, v, S, null);
      al(m, v);
    }
    return null;
  }
  function p(b, m, y, v) {
    for (
      var S = null, k = null, C = m, E = (m = 0), O = null;
      C !== null && E < y.length;
      E++
    ) {
      C.index > E ? ((O = C), (C = null)) : (O = C.sibling);
      var R = f(b, C, y[E], v);
      if (R === null) {
        C === null && (C = O);
        break;
      }
      e && C && R.alternate === null && t(b, C),
        (m = i(R, m, E)),
        k === null ? (S = R) : (k.sibling = R),
        (k = R),
        (C = O);
    }
    if (E === y.length) return n(b, C), je && go(b, E), S;
    if (C === null) {
      for (; E < y.length; E++)
        (C = d(b, y[E], v)),
          C !== null &&
            ((m = i(C, m, E)), k === null ? (S = C) : (k.sibling = C), (k = C));
      return je && go(b, E), S;
    }
    for (C = r(b, C); E < y.length; E++)
      (O = h(C, b, E, y[E], v)),
        O !== null &&
          (e && O.alternate !== null && C.delete(O.key === null ? E : O.key),
          (m = i(O, m, E)),
          k === null ? (S = O) : (k.sibling = O),
          (k = O));
    return (
      e &&
        C.forEach(function (M) {
          return t(b, M);
        }),
      je && go(b, E),
      S
    );
  }
  function g(b, m, y, v) {
    var S = ca(y);
    if (typeof S != "function") throw Error(F(150));
    if (((y = S.call(y)), y == null)) throw Error(F(151));
    for (
      var k = (S = null), C = m, E = (m = 0), O = null, R = y.next();
      C !== null && !R.done;
      E++, R = y.next()
    ) {
      C.index > E ? ((O = C), (C = null)) : (O = C.sibling);
      var M = f(b, C, R.value, v);
      if (M === null) {
        C === null && (C = O);
        break;
      }
      e && C && M.alternate === null && t(b, C),
        (m = i(M, m, E)),
        k === null ? (S = M) : (k.sibling = M),
        (k = M),
        (C = O);
    }
    if (R.done) return n(b, C), je && go(b, E), S;
    if (C === null) {
      for (; !R.done; E++, R = y.next())
        (R = d(b, R.value, v)),
          R !== null &&
            ((m = i(R, m, E)), k === null ? (S = R) : (k.sibling = R), (k = R));
      return je && go(b, E), S;
    }
    for (C = r(b, C); !R.done; E++, R = y.next())
      (R = h(C, b, E, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? E : R.key),
          (m = i(R, m, E)),
          k === null ? (S = R) : (k.sibling = R),
          (k = R));
    return (
      e &&
        C.forEach(function (N) {
          return t(b, N);
        }),
      je && go(b, E),
      S
    );
  }
  function w(b, m, y, v) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ai &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Gs:
          e: {
            for (var S = y.key, k = m; k !== null; ) {
              if (k.key === S) {
                if (((S = y.type), S === ai)) {
                  if (k.tag === 7) {
                    n(b, k.sibling),
                      (m = o(k, y.props.children)),
                      (m.return = b),
                      (b = m);
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Tr &&
                    ly(S) === k.type)
                ) {
                  n(b, k.sibling),
                    (m = o(k, y.props)),
                    (m.ref = ma(b, k, y)),
                    (m.return = b),
                    (b = m);
                  break e;
                }
                n(b, k);
                break;
              } else t(b, k);
              k = k.sibling;
            }
            y.type === ai
              ? ((m = $o(y.props.children, b.mode, v, y.key)),
                (m.return = b),
                (b = m))
              : ((v = $l(y.type, y.key, y.props, null, b.mode, v)),
                (v.ref = ma(b, m, y)),
                (v.return = b),
                (b = v));
          }
          return a(b);
        case ii:
          e: {
            for (k = y.key; m !== null; ) {
              if (m.key === k)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(b, m.sibling),
                    (m = o(m, y.children || [])),
                    (m.return = b),
                    (b = m);
                  break e;
                } else {
                  n(b, m);
                  break;
                }
              else t(b, m);
              m = m.sibling;
            }
            (m = qd(y, b.mode, v)), (m.return = b), (b = m);
          }
          return a(b);
        case Tr:
          return (k = y._init), w(b, m, k(y._payload), v);
      }
      if (Ra(y)) return p(b, m, y, v);
      if (ca(y)) return g(b, m, y, v);
      al(b, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(b, m.sibling), (m = o(m, y)), (m.return = b), (b = m))
          : (n(b, m), (m = Bd(y, b.mode, v)), (m.return = b), (b = m)),
        a(b))
      : n(b, m);
  }
  return w;
}
var Fi = _b(!0),
  $b = _b(!1),
  Ls = {},
  er = ao(Ls),
  fs = ao(Ls),
  ps = ao(Ls);
function Oo(e) {
  if (e === Ls) throw Error(F(174));
  return e;
}
function _h(e, t) {
  switch ((Re(ps, t), Re(fs, e), Re(er, Ls), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Nf(t, e));
  }
  $e(er), Re(er, t);
}
function Bi() {
  $e(er), $e(fs), $e(ps);
}
function Nb(e) {
  Oo(ps.current);
  var t = Oo(er.current),
    n = Nf(t, e.type);
  t !== n && (Re(fs, e), Re(er, n));
}
function $h(e) {
  fs.current === e && ($e(er), $e(fs));
}
var Ue = ao(0);
function yu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ad = [];
function Nh() {
  for (var e = 0; e < Ad.length; e++)
    Ad[e]._workInProgressVersionPrimary = null;
  Ad.length = 0;
}
var Ol = Sr.ReactCurrentDispatcher,
  jd = Sr.ReactCurrentBatchConfig,
  Ao = 0,
  Fe = null,
  it = null,
  dt = null,
  gu = !1,
  za = !1,
  hs = 0,
  lP = 0;
function Rt() {
  throw Error(F(321));
}
function Lh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Dn(e[n], t[n])) return !1;
  return !0;
}
function Ah(e, t, n, r, o, i) {
  if (
    ((Ao = i),
    (Fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ol.current = e === null || e.memoizedState === null ? fP : pP),
    (e = n(r, o)),
    za)
  ) {
    i = 0;
    do {
      if (((za = !1), (hs = 0), 25 <= i)) throw Error(F(301));
      (i += 1),
        (dt = it = null),
        (t.updateQueue = null),
        (Ol.current = hP),
        (e = n(r, o));
    } while (za);
  }
  if (
    ((Ol.current = bu),
    (t = it !== null && it.next !== null),
    (Ao = 0),
    (dt = it = Fe = null),
    (gu = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function jh() {
  var e = hs !== 0;
  return (hs = 0), e;
}
function Vn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return dt === null ? (Fe.memoizedState = dt = e) : (dt = dt.next = e), dt;
}
function En() {
  if (it === null) {
    var e = Fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = it.next;
  var t = dt === null ? Fe.memoizedState : dt.next;
  if (t !== null) (dt = t), (it = e);
  else {
    if (e === null) throw Error(F(310));
    (it = e),
      (e = {
        memoizedState: it.memoizedState,
        baseState: it.baseState,
        baseQueue: it.baseQueue,
        queue: it.queue,
        next: null,
      }),
      dt === null ? (Fe.memoizedState = dt = e) : (dt = dt.next = e);
  }
  return dt;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zd(e) {
  var t = En(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = it,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Ao & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = r)) : (l = l.next = d),
          (Fe.lanes |= c),
          (jo |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = r) : (l.next = s),
      Dn(r, t.memoizedState) || (Wt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Fe.lanes |= i), (jo |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dd(e) {
  var t = En(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Dn(i, t.memoizedState) || (Wt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Lb() {}
function Ab(e, t) {
  var n = Fe,
    r = En(),
    o = t(),
    i = !Dn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Wt = !0)),
    (r = r.queue),
    zh(Db.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (dt !== null && dt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vs(9, zb.bind(null, n, r, o, t), void 0, null),
      ft === null)
    )
      throw Error(F(349));
    Ao & 30 || jb(n, t, o);
  }
  return o;
}
function jb(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zb(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ub(t) && Fb(e);
}
function Db(e, t, n) {
  return n(function () {
    Ub(t) && Fb(e);
  });
}
function Ub(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dn(e, n);
  } catch {
    return !0;
  }
}
function Fb(e) {
  var t = yr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function uy(e) {
  var t = Vn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ms,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dP.bind(null, Fe, e)),
    [t.memoizedState, e]
  );
}
function vs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bb() {
  return En().memoizedState;
}
function Tl(e, t, n, r) {
  var o = Vn();
  (Fe.flags |= e),
    (o.memoizedState = vs(1 | t, n, void 0, r === void 0 ? null : r));
}
function ec(e, t, n, r) {
  var o = En();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (it !== null) {
    var a = it.memoizedState;
    if (((i = a.destroy), r !== null && Lh(r, a.deps))) {
      o.memoizedState = vs(t, n, i, r);
      return;
    }
  }
  (Fe.flags |= e), (o.memoizedState = vs(1 | t, n, i, r));
}
function cy(e, t) {
  return Tl(8390656, 8, e, t);
}
function zh(e, t) {
  return ec(2048, 8, e, t);
}
function qb(e, t) {
  return ec(4, 2, e, t);
}
function Wb(e, t) {
  return ec(4, 4, e, t);
}
function Hb(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vb(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ec(4, 4, Hb.bind(null, t, e), n)
  );
}
function Dh() {}
function Kb(e, t) {
  var n = En();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Qb(e, t) {
  var n = En();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gb(e, t, n) {
  return Ao & 21
    ? (Dn(n, t) || ((n = Y1()), (Fe.lanes |= n), (jo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Wt = !0)), (e.memoizedState = n));
}
function uP(e, t) {
  var n = Se;
  (Se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = jd.transition;
  jd.transition = {};
  try {
    e(!1), t();
  } finally {
    (Se = n), (jd.transition = r);
  }
}
function Xb() {
  return En().memoizedState;
}
function cP(e, t, n) {
  var r = Vr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zb(e))
  )
    Yb(t, n);
  else if (((n = Ob(e, t, n, r)), n !== null)) {
    var o = At();
    An(n, e, r, o), Jb(n, t, r);
  }
}
function dP(e, t, n) {
  var r = Vr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zb(e)) Yb(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Dn(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Ih(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ob(e, t, o, r)),
      n !== null && ((o = At()), An(n, e, r, o), Jb(n, t, r));
  }
}
function Zb(e) {
  var t = e.alternate;
  return e === Fe || (t !== null && t === Fe);
}
function Yb(e, t) {
  za = gu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Jb(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vh(e, n);
  }
}
var bu = {
    readContext: Cn,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useInsertionEffect: Rt,
    useLayoutEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useMutableSource: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    unstable_isNewReconciler: !1,
  },
  fP = {
    readContext: Cn,
    useCallback: function (e, t) {
      return (Vn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Cn,
    useEffect: cy,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Tl(4194308, 4, Hb.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Tl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Tl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Vn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Vn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cP.bind(null, Fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Vn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: uy,
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      return (Vn().memoizedState = e);
    },
    useTransition: function () {
      var e = uy(!1),
        t = e[0];
      return (e = uP.bind(null, e[1])), (Vn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Fe,
        o = Vn();
      if (je) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), ft === null)) throw Error(F(349));
        Ao & 30 || jb(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        cy(Db.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        vs(9, zb.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Vn(),
        t = ft.identifierPrefix;
      if (je) {
        var n = pr,
          r = fr;
        (n = (r & ~(1 << (32 - Ln(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = hs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lP++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pP = {
    readContext: Cn,
    useCallback: Kb,
    useContext: Cn,
    useEffect: zh,
    useImperativeHandle: Vb,
    useInsertionEffect: qb,
    useLayoutEffect: Wb,
    useMemo: Qb,
    useReducer: zd,
    useRef: Bb,
    useState: function () {
      return zd(ms);
    },
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      var t = En();
      return Gb(t, it.memoizedState, e);
    },
    useTransition: function () {
      var e = zd(ms)[0],
        t = En().memoizedState;
      return [e, t];
    },
    useMutableSource: Lb,
    useSyncExternalStore: Ab,
    useId: Xb,
    unstable_isNewReconciler: !1,
  },
  hP = {
    readContext: Cn,
    useCallback: Kb,
    useContext: Cn,
    useEffect: zh,
    useImperativeHandle: Vb,
    useInsertionEffect: qb,
    useLayoutEffect: Wb,
    useMemo: Qb,
    useReducer: Dd,
    useRef: Bb,
    useState: function () {
      return Dd(ms);
    },
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      var t = En();
      return it === null ? (t.memoizedState = e) : Gb(t, it.memoizedState, e);
    },
    useTransition: function () {
      var e = Dd(ms)[0],
        t = En().memoizedState;
      return [e, t];
    },
    useMutableSource: Lb,
    useSyncExternalStore: Ab,
    useId: Xb,
    unstable_isNewReconciler: !1,
  };
function qi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += BC(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ud(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rp(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mP = typeof WeakMap == "function" ? WeakMap : Map;
function ew(e, t, n) {
  (n = hr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Su || ((Su = !0), (pp = r)), rp(e, t);
    }),
    n
  );
}
function tw(e, t, n) {
  (n = hr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        rp(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        rp(e, t),
          typeof r != "function" &&
            (Hr === null ? (Hr = new Set([this])) : Hr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function dy(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mP();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = TP.bind(null, e, t, n)), t.then(e, e));
}
function fy(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function py(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = hr(-1, 1)), (t.tag = 2), Wr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vP = Sr.ReactCurrentOwner,
  Wt = !1;
function Lt(e, t, n, r) {
  t.child = e === null ? $b(t, null, n, r) : Fi(t, e.child, n, r);
}
function hy(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Oi(t, o),
    (r = Ah(e, t, n, r, i, o)),
    (n = jh()),
    e !== null && !Wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        gr(e, t, o))
      : (je && n && Ch(t), (t.flags |= 1), Lt(e, t, r, o), t.child)
  );
}
function my(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Kh(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), nw(e, t, i, r, o))
      : ((e = $l(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ls), n(a, r) && e.ref === t.ref)
    )
      return gr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Kr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function nw(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ls(i, r) && e.ref === t.ref)
      if (((Wt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Wt = !0);
      else return (t.lanes = e.lanes), gr(e, t, o);
  }
  return op(e, t, n, r, o);
}
function rw(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Re(vi, Yt),
        (Yt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Re(vi, Yt),
          (Yt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Re(vi, Yt),
        (Yt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Re(vi, Yt),
      (Yt |= r);
  return Lt(e, t, o, n), t.child;
}
function ow(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function op(e, t, n, r, o) {
  var i = Vt(n) ? No : _t.current;
  return (
    (i = Di(t, i)),
    Oi(t, o),
    (n = Ah(e, t, n, r, i, o)),
    (r = jh()),
    e !== null && !Wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        gr(e, t, o))
      : (je && r && Ch(t), (t.flags |= 1), Lt(e, t, n, o), t.child)
  );
}
function vy(e, t, n, r, o) {
  if (Vt(n)) {
    var i = !0;
    du(t);
  } else i = !1;
  if ((Oi(t, o), t.stateNode === null))
    Il(e, t), Mb(t, n, r), np(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Cn(u))
      : ((u = Vt(n) ? No : _t.current), (u = Di(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== u) && sy(t, a, r, u)),
      (Ir = !1);
    var f = t.memoizedState;
    (a.state = f),
      vu(t, r, a, o),
      (l = t.memoizedState),
      s !== r || f !== l || Ht.current || Ir
        ? (typeof c == "function" && (tp(t, n, c, r), (l = t.memoizedState)),
          (s = Ir || ay(t, n, s, r, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Tb(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : _n(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Cn(l))
        : ((l = Vt(n) ? No : _t.current), (l = Di(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && sy(t, a, r, l)),
      (Ir = !1),
      (f = t.memoizedState),
      (a.state = f),
      vu(t, r, a, o);
    var p = t.memoizedState;
    s !== d || f !== p || Ht.current || Ir
      ? (typeof h == "function" && (tp(t, n, h, r), (p = t.memoizedState)),
        (u = Ir || ay(t, n, u, r, f, p, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, p, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, p, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (a.props = r),
        (a.state = p),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ip(e, t, n, r, i, o);
}
function ip(e, t, n, r, o, i) {
  ow(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && ty(t, n, !1), gr(e, t, i);
  (r = t.stateNode), (vP.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Fi(t, e.child, null, i)), (t.child = Fi(t, null, s, i)))
      : Lt(e, t, s, i),
    (t.memoizedState = r.state),
    o && ty(t, n, !0),
    t.child
  );
}
function iw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ey(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ey(e, t.context, !1),
    _h(e, t.containerInfo);
}
function yy(e, t, n, r, o) {
  return Ui(), Ph(o), (t.flags |= 256), Lt(e, t, n, r), t.child;
}
var ap = { dehydrated: null, treeContext: null, retryLane: 0 };
function sp(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function aw(e, t, n) {
  var r = t.pendingProps,
    o = Ue.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Re(Ue, o & 1),
    e === null)
  )
    return (
      Jf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = rc(a, r, 0, null)),
              (e = $o(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = sp(n)),
              (t.memoizedState = ap),
              e)
            : Uh(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return yP(e, t, a, r, s, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Kr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Kr(s, i)) : ((i = $o(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? sp(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ap),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Kr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uh(e, t) {
  return (
    (t = rc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function sl(e, t, n, r) {
  return (
    r !== null && Ph(r),
    Fi(t, e.child, null, n),
    (e = Uh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function yP(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ud(Error(F(422)))), sl(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = rc({ mode: "visible", children: r.children }, o, 0, null)),
        (i = $o(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Fi(t, e.child, null, a),
        (t.child.memoizedState = sp(a)),
        (t.memoizedState = ap),
        i);
  if (!(t.mode & 1)) return sl(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(F(419))), (r = Ud(i, r, void 0)), sl(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), Wt || s)) {
    if (((r = ft), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), yr(e, o), An(r, e, o, -1));
    }
    return Vh(), (r = Ud(Error(F(421)))), sl(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = IP.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (tn = qr(o.nextSibling)),
      (rn = t),
      (je = !0),
      (Nn = null),
      e !== null &&
        ((bn[wn++] = fr),
        (bn[wn++] = pr),
        (bn[wn++] = Lo),
        (fr = e.id),
        (pr = e.overflow),
        (Lo = t)),
      (t = Uh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ep(e.return, t, n);
}
function Fd(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function sw(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Lt(e, t, r.children, n), (r = Ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gy(e, n, t);
        else if (e.tag === 19) gy(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Re(Ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && yu(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Fd(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && yu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Fd(t, !0, n, null, i);
        break;
      case "together":
        Fd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Il(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function gr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Kr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function gP(e, t, n) {
  switch (t.tag) {
    case 3:
      iw(t), Ui();
      break;
    case 5:
      Nb(t);
      break;
    case 1:
      Vt(t.type) && du(t);
      break;
    case 4:
      _h(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Re(hu, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Re(Ue, Ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? aw(e, t, n)
          : (Re(Ue, Ue.current & 1),
            (e = gr(e, t, n)),
            e !== null ? e.sibling : null);
      Re(Ue, Ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Re(Ue, Ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rw(e, t, n);
  }
  return gr(e, t, n);
}
var lw, lp, uw, cw;
lw = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
lp = function () {};
uw = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Oo(er.current);
    var i = null;
    switch (n) {
      case "input":
        (o = If(e, o)), (r = If(e, r)), (i = []);
        break;
      case "select":
        (o = qe({}, o, { value: void 0 })),
          (r = qe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = $f(e, o)), (r = $f(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = uu);
    }
    Lf(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ts.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ts.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Ie("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
cw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function va(e, t) {
  if (!je)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ot(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bP(e, t, n) {
  var r = t.pendingProps;
  switch ((Eh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ot(t), null;
    case 1:
      return Vt(t.type) && cu(), Ot(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Bi(),
        $e(Ht),
        $e(_t),
        Nh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (il(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Nn !== null && (vp(Nn), (Nn = null)))),
        lp(e, t),
        Ot(t),
        null
      );
    case 5:
      $h(t);
      var o = Oo(ps.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        uw(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return Ot(t), null;
        }
        if (((e = Oo(er.current)), il(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Xn] = t), (r[ds] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ie("cancel", r), Ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ie("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ta.length; o++) Ie(Ta[o], r);
              break;
            case "source":
              Ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ie("error", r), Ie("load", r);
              break;
            case "details":
              Ie("toggle", r);
              break;
            case "input":
              Rv(r, i), Ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ie("invalid", r);
              break;
            case "textarea":
              Tv(r, i), Ie("invalid", r);
          }
          Lf(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ol(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      ol(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : ts.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  Ie("scroll", r);
            }
          switch (n) {
            case "input":
              Xs(r), Ov(r, i, !0);
              break;
            case "textarea":
              Xs(r), Iv(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = uu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = j1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Xn] = t),
            (e[ds] = r),
            lw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Af(n, r)), n)) {
              case "dialog":
                Ie("cancel", e), Ie("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ie("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ta.length; o++) Ie(Ta[o], e);
                o = r;
                break;
              case "source":
                Ie("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ie("error", e), Ie("load", e), (o = r);
                break;
              case "details":
                Ie("toggle", e), (o = r);
                break;
              case "input":
                Rv(e, r), (o = If(e, r)), Ie("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = qe({}, r, { value: void 0 })),
                  Ie("invalid", e);
                break;
              case "textarea":
                Tv(e, r), (o = $f(e, r)), Ie("invalid", e);
                break;
              default:
                o = r;
            }
            Lf(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? U1(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && z1(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ns(e, l)
                    : typeof l == "number" && ns(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ts.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && Ie("scroll", e)
                      : l != null && ch(e, i, l, a));
              }
            switch (n) {
              case "input":
                Xs(e), Ov(e, r, !1);
                break;
              case "textarea":
                Xs(e), Iv(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + to(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ci(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ci(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = uu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ot(t), null;
    case 6:
      if (e && t.stateNode != null) cw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = Oo(ps.current)), Oo(er.current), il(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xn] = t),
            (i = r.nodeValue !== n) && ((e = rn), e !== null))
          )
            switch (e.tag) {
              case 3:
                ol(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ol(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xn] = t),
            (t.stateNode = r);
      }
      return Ot(t), null;
    case 13:
      if (
        ($e(Ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (je && tn !== null && t.mode & 1 && !(t.flags & 128))
          Rb(), Ui(), (t.flags |= 98560), (i = !1);
        else if (((i = il(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(F(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(F(317));
            i[Xn] = t;
          } else
            Ui(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ot(t), (i = !1);
        } else Nn !== null && (vp(Nn), (Nn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ue.current & 1 ? st === 0 && (st = 3) : Vh())),
          t.updateQueue !== null && (t.flags |= 4),
          Ot(t),
          null);
    case 4:
      return (
        Bi(), lp(e, t), e === null && us(t.stateNode.containerInfo), Ot(t), null
      );
    case 10:
      return Th(t.type._context), Ot(t), null;
    case 17:
      return Vt(t.type) && cu(), Ot(t), null;
    case 19:
      if (($e(Ue), (i = t.memoizedState), i === null)) return Ot(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) va(i, !1);
        else {
          if (st !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = yu(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    va(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Re(Ue, (Ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            et() > Wi &&
            ((t.flags |= 128), (r = !0), va(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yu(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              va(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !je)
            )
              return Ot(t), null;
          } else
            2 * et() - i.renderingStartTime > Wi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), va(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = et()),
          (t.sibling = null),
          (n = Ue.current),
          Re(Ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ot(t), null);
    case 22:
    case 23:
      return (
        Hh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Yt & 1073741824 && (Ot(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ot(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function wP(e, t) {
  switch ((Eh(t), t.tag)) {
    case 1:
      return (
        Vt(t.type) && cu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Bi(),
        $e(Ht),
        $e(_t),
        Nh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $h(t), null;
    case 13:
      if (
        ($e(Ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        Ui();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $e(Ue), null;
    case 4:
      return Bi(), null;
    case 10:
      return Th(t.type._context), null;
    case 22:
    case 23:
      return Hh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ll = !1,
  It = !1,
  SP = typeof WeakSet == "function" ? WeakSet : Set,
  Z = null;
function mi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Xe(e, t, r);
      }
    else n.current = null;
}
function up(e, t, n) {
  try {
    n();
  } catch (r) {
    Xe(e, t, r);
  }
}
var by = !1;
function xP(e, t) {
  if (((Vf = au), (e = hb()), kh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (s = a),
                f === i && ++c === r && (l = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Kf = { focusedElem: e, selectionRange: n }, au = !1, Z = t; Z !== null; )
    if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Z = e);
    else
      for (; Z !== null; ) {
        t = Z;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var g = p.memoizedProps,
                    w = p.memoizedState,
                    b = t.stateNode,
                    m = b.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : _n(t.type, g),
                      w
                    );
                  b.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (v) {
          Xe(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Z = e);
          break;
        }
        Z = t.return;
      }
  return (p = by), (by = !1), p;
}
function Da(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && up(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function tc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cp(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function dw(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), dw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xn], delete t[ds], delete t[Xf], delete t[oP], delete t[iP])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fw(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function dp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = uu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dp(e, t, n), e = e.sibling; e !== null; ) dp(e, t, n), (e = e.sibling);
}
function fp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fp(e, t, n), e = e.sibling; e !== null; ) fp(e, t, n), (e = e.sibling);
}
var wt = null,
  $n = !1;
function Rr(e, t, n) {
  for (n = n.child; n !== null; ) pw(e, t, n), (n = n.sibling);
}
function pw(e, t, n) {
  if (Jn && typeof Jn.onCommitFiberUnmount == "function")
    try {
      Jn.onCommitFiberUnmount(Ku, n);
    } catch {}
  switch (n.tag) {
    case 5:
      It || mi(n, t);
    case 6:
      var r = wt,
        o = $n;
      (wt = null),
        Rr(e, t, n),
        (wt = r),
        ($n = o),
        wt !== null &&
          ($n
            ? ((e = wt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : wt.removeChild(n.stateNode));
      break;
    case 18:
      wt !== null &&
        ($n
          ? ((e = wt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Nd(e.parentNode, n)
              : e.nodeType === 1 && Nd(e, n),
            as(e))
          : Nd(wt, n.stateNode));
      break;
    case 4:
      (r = wt),
        (o = $n),
        (wt = n.stateNode.containerInfo),
        ($n = !0),
        Rr(e, t, n),
        (wt = r),
        ($n = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !It &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && up(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Rr(e, t, n);
      break;
    case 1:
      if (
        !It &&
        (mi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Xe(n, t, s);
        }
      Rr(e, t, n);
      break;
    case 21:
      Rr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((It = (r = It) || n.memoizedState !== null), Rr(e, t, n), (It = r))
        : Rr(e, t, n);
      break;
    default:
      Rr(e, t, n);
  }
}
function Sy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new SP()),
      t.forEach(function (r) {
        var o = MP.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Mn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (wt = s.stateNode), ($n = !1);
              break e;
            case 3:
              (wt = s.stateNode.containerInfo), ($n = !0);
              break e;
            case 4:
              (wt = s.stateNode.containerInfo), ($n = !0);
              break e;
          }
          s = s.return;
        }
        if (wt === null) throw Error(F(160));
        pw(i, a, o), (wt = null), ($n = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Xe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hw(t, e), (t = t.sibling);
}
function hw(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mn(t, e), Hn(e), r & 4)) {
        try {
          Da(3, e, e.return), tc(3, e);
        } catch (g) {
          Xe(e, e.return, g);
        }
        try {
          Da(5, e, e.return);
        } catch (g) {
          Xe(e, e.return, g);
        }
      }
      break;
    case 1:
      Mn(t, e), Hn(e), r & 512 && n !== null && mi(n, n.return);
      break;
    case 5:
      if (
        (Mn(t, e),
        Hn(e),
        r & 512 && n !== null && mi(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ns(o, "");
        } catch (g) {
          Xe(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && L1(o, i),
              Af(s, a);
            var u = Af(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? U1(o, d)
                : c === "dangerouslySetInnerHTML"
                ? z1(o, d)
                : c === "children"
                ? ns(o, d)
                : ch(o, c, d, u);
            }
            switch (s) {
              case "input":
                Mf(o, i);
                break;
              case "textarea":
                A1(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? Ci(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ci(o, !!i.multiple, i.defaultValue, !0)
                      : Ci(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ds] = i;
          } catch (g) {
            Xe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Mn(t, e), Hn(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          Xe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Mn(t, e), Hn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          as(t.containerInfo);
        } catch (g) {
          Xe(e, e.return, g);
        }
      break;
    case 4:
      Mn(t, e), Hn(e);
      break;
    case 13:
      Mn(t, e),
        Hn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (qh = et())),
        r & 4 && Sy(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((It = (u = It) || c), Mn(t, e), (It = u)) : Mn(t, e),
        Hn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (Z = e, c = e.child; c !== null; ) {
            for (d = Z = c; Z !== null; ) {
              switch (((f = Z), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Da(4, f, f.return);
                  break;
                case 1:
                  mi(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (g) {
                      Xe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  mi(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    ky(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (Z = h)) : ky(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = D1("display", a)));
              } catch (g) {
                Xe(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                Xe(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Mn(t, e), Hn(e), r & 4 && Sy(e);
      break;
    case 21:
      break;
    default:
      Mn(t, e), Hn(e);
  }
}
function Hn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fw(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ns(o, ""), (r.flags &= -33));
          var i = wy(e);
          fp(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = wy(e);
          dp(e, s, a);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      Xe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kP(e, t, n) {
  (Z = e), mw(e);
}
function mw(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var o = Z,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ll;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || It;
        s = ll;
        var u = It;
        if (((ll = a), (It = l) && !u))
          for (Z = o; Z !== null; )
            (a = Z),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Cy(o)
                : l !== null
                ? ((l.return = a), (Z = l))
                : Cy(o);
        for (; i !== null; ) (Z = i), mw(i), (i = i.sibling);
        (Z = o), (ll = s), (It = u);
      }
      xy(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (Z = i)) : xy(e);
  }
}
function xy(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              It || tc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !It)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _n(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && iy(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                iy(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && as(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        It || (t.flags & 512 && cp(t));
      } catch (f) {
        Xe(t, t.return, f);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function ky(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Z = n);
      break;
    }
    Z = t.return;
  }
}
function Cy(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tc(4, t);
          } catch (l) {
            Xe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Xe(t, o, l);
            }
          }
          var i = t.return;
          try {
            cp(t);
          } catch (l) {
            Xe(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            cp(t);
          } catch (l) {
            Xe(t, a, l);
          }
      }
    } catch (l) {
      Xe(t, t.return, l);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (Z = s);
      break;
    }
    Z = t.return;
  }
}
var CP = Math.ceil,
  wu = Sr.ReactCurrentDispatcher,
  Fh = Sr.ReactCurrentOwner,
  kn = Sr.ReactCurrentBatchConfig,
  pe = 0,
  ft = null,
  ot = null,
  kt = 0,
  Yt = 0,
  vi = ao(0),
  st = 0,
  ys = null,
  jo = 0,
  nc = 0,
  Bh = 0,
  Ua = null,
  Bt = null,
  qh = 0,
  Wi = 1 / 0,
  ur = null,
  Su = !1,
  pp = null,
  Hr = null,
  ul = !1,
  jr = null,
  xu = 0,
  Fa = 0,
  hp = null,
  Ml = -1,
  _l = 0;
function At() {
  return pe & 6 ? et() : Ml !== -1 ? Ml : (Ml = et());
}
function Vr(e) {
  return e.mode & 1
    ? pe & 2 && kt !== 0
      ? kt & -kt
      : sP.transition !== null
      ? (_l === 0 && (_l = Y1()), _l)
      : ((e = Se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ib(e.type))),
        e)
    : 1;
}
function An(e, t, n, r) {
  if (50 < Fa) throw ((Fa = 0), (hp = null), Error(F(185)));
  _s(e, n, r),
    (!(pe & 2) || e !== ft) &&
      (e === ft && (!(pe & 2) && (nc |= n), st === 4 && $r(e, kt)),
      Kt(e, r),
      n === 1 && pe === 0 && !(t.mode & 1) && ((Wi = et() + 500), Yu && so()));
}
function Kt(e, t) {
  var n = e.callbackNode;
  sE(e, t);
  var r = iu(e, e === ft ? kt : 0);
  if (r === 0)
    n !== null && $v(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $v(n), t === 1))
      e.tag === 0 ? aP(Ey.bind(null, e)) : Cb(Ey.bind(null, e)),
        nP(function () {
          !(pe & 6) && so();
        }),
        (n = null);
    else {
      switch (J1(r)) {
        case 1:
          n = mh;
          break;
        case 4:
          n = X1;
          break;
        case 16:
          n = ou;
          break;
        case 536870912:
          n = Z1;
          break;
        default:
          n = ou;
      }
      n = kw(n, vw.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vw(e, t) {
  if (((Ml = -1), (_l = 0), pe & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (Ti() && e.callbackNode !== n) return null;
  var r = iu(e, e === ft ? kt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ku(e, r);
  else {
    t = r;
    var o = pe;
    pe |= 2;
    var i = gw();
    (ft !== e || kt !== t) && ((ur = null), (Wi = et() + 500), _o(e, t));
    do
      try {
        RP();
        break;
      } catch (s) {
        yw(e, s);
      }
    while (1);
    Oh(),
      (wu.current = i),
      (pe = o),
      ot !== null ? (t = 0) : ((ft = null), (kt = 0), (t = st));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ff(e)), o !== 0 && ((r = o), (t = mp(e, o)))), t === 1)
    )
      throw ((n = ys), _o(e, 0), $r(e, r), Kt(e, et()), n);
    if (t === 6) $r(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !EP(o) &&
          ((t = ku(e, r)),
          t === 2 && ((i = Ff(e)), i !== 0 && ((r = i), (t = mp(e, i)))),
          t === 1))
      )
        throw ((n = ys), _o(e, 0), $r(e, r), Kt(e, et()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          bo(e, Bt, ur);
          break;
        case 3:
          if (
            ($r(e, r), (r & 130023424) === r && ((t = qh + 500 - et()), 10 < t))
          ) {
            if (iu(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              At(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Gf(bo.bind(null, e, Bt, ur), t);
            break;
          }
          bo(e, Bt, ur);
          break;
        case 4:
          if (($r(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Ln(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = et() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * CP(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gf(bo.bind(null, e, Bt, ur), r);
            break;
          }
          bo(e, Bt, ur);
          break;
        case 5:
          bo(e, Bt, ur);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Kt(e, et()), e.callbackNode === n ? vw.bind(null, e) : null;
}
function mp(e, t) {
  var n = Ua;
  return (
    e.current.memoizedState.isDehydrated && (_o(e, t).flags |= 256),
    (e = ku(e, t)),
    e !== 2 && ((t = Bt), (Bt = n), t !== null && vp(t)),
    e
  );
}
function vp(e) {
  Bt === null ? (Bt = e) : Bt.push.apply(Bt, e);
}
function EP(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Dn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function $r(e, t) {
  for (
    t &= ~Bh,
      t &= ~nc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ln(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ey(e) {
  if (pe & 6) throw Error(F(327));
  Ti();
  var t = iu(e, 0);
  if (!(t & 1)) return Kt(e, et()), null;
  var n = ku(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ff(e);
    r !== 0 && ((t = r), (n = mp(e, r)));
  }
  if (n === 1) throw ((n = ys), _o(e, 0), $r(e, t), Kt(e, et()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    bo(e, Bt, ur),
    Kt(e, et()),
    null
  );
}
function Wh(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    (pe = n), pe === 0 && ((Wi = et() + 500), Yu && so());
  }
}
function zo(e) {
  jr !== null && jr.tag === 0 && !(pe & 6) && Ti();
  var t = pe;
  pe |= 1;
  var n = kn.transition,
    r = Se;
  try {
    if (((kn.transition = null), (Se = 1), e)) return e();
  } finally {
    (Se = r), (kn.transition = n), (pe = t), !(pe & 6) && so();
  }
}
function Hh() {
  (Yt = vi.current), $e(vi);
}
function _o(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tP(n)), ot !== null))
    for (n = ot.return; n !== null; ) {
      var r = n;
      switch ((Eh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cu();
          break;
        case 3:
          Bi(), $e(Ht), $e(_t), Nh();
          break;
        case 5:
          $h(r);
          break;
        case 4:
          Bi();
          break;
        case 13:
          $e(Ue);
          break;
        case 19:
          $e(Ue);
          break;
        case 10:
          Th(r.type._context);
          break;
        case 22:
        case 23:
          Hh();
      }
      n = n.return;
    }
  if (
    ((ft = e),
    (ot = e = Kr(e.current, null)),
    (kt = Yt = t),
    (st = 0),
    (ys = null),
    (Bh = nc = jo = 0),
    (Bt = Ua = null),
    Ro !== null)
  ) {
    for (t = 0; t < Ro.length; t++)
      if (((n = Ro[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Ro = null;
  }
  return e;
}
function yw(e, t) {
  do {
    var n = ot;
    try {
      if ((Oh(), (Ol.current = bu), gu)) {
        for (var r = Fe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        gu = !1;
      }
      if (
        ((Ao = 0),
        (dt = it = Fe = null),
        (za = !1),
        (hs = 0),
        (Fh.current = null),
        n === null || n.return === null)
      ) {
        (st = 1), (ys = t), (ot = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = kt),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = fy(a);
          if (h !== null) {
            (h.flags &= -257),
              py(h, a, s, i, t),
              h.mode & 1 && dy(i, u, t),
              (t = h),
              (l = u);
            var p = t.updateQueue;
            if (p === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              dy(i, u, t), Vh();
              break e;
            }
            l = Error(F(426));
          }
        } else if (je && s.mode & 1) {
          var w = fy(a);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              py(w, a, s, i, t),
              Ph(qi(l, s));
            break e;
          }
        }
        (i = l = qi(l, s)),
          st !== 4 && (st = 2),
          Ua === null ? (Ua = [i]) : Ua.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var b = ew(i, l, t);
              oy(i, b);
              break e;
            case 1:
              s = l;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Hr === null || !Hr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = tw(i, s, t);
                oy(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ww(n);
    } catch (S) {
      (t = S), ot === n && n !== null && (ot = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function gw() {
  var e = wu.current;
  return (wu.current = bu), e === null ? bu : e;
}
function Vh() {
  (st === 0 || st === 3 || st === 2) && (st = 4),
    ft === null || (!(jo & 268435455) && !(nc & 268435455)) || $r(ft, kt);
}
function ku(e, t) {
  var n = pe;
  pe |= 2;
  var r = gw();
  (ft !== e || kt !== t) && ((ur = null), _o(e, t));
  do
    try {
      PP();
      break;
    } catch (o) {
      yw(e, o);
    }
  while (1);
  if ((Oh(), (pe = n), (wu.current = r), ot !== null)) throw Error(F(261));
  return (ft = null), (kt = 0), st;
}
function PP() {
  for (; ot !== null; ) bw(ot);
}
function RP() {
  for (; ot !== null && !YC(); ) bw(ot);
}
function bw(e) {
  var t = xw(e.alternate, e, Yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? ww(e) : (ot = t),
    (Fh.current = null);
}
function ww(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wP(n, t)), n !== null)) {
        (n.flags &= 32767), (ot = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (st = 6), (ot = null);
        return;
      }
    } else if (((n = bP(n, t, Yt)), n !== null)) {
      ot = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ot = t;
      return;
    }
    ot = t = e;
  } while (t !== null);
  st === 0 && (st = 5);
}
function bo(e, t, n) {
  var r = Se,
    o = kn.transition;
  try {
    (kn.transition = null), (Se = 1), OP(e, t, n, r);
  } finally {
    (kn.transition = o), (Se = r);
  }
  return null;
}
function OP(e, t, n, r) {
  do Ti();
  while (jr !== null);
  if (pe & 6) throw Error(F(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (lE(e, i),
    e === ft && ((ot = ft = null), (kt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ul ||
      ((ul = !0),
      kw(ou, function () {
        return Ti(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = kn.transition), (kn.transition = null);
    var a = Se;
    Se = 1;
    var s = pe;
    (pe |= 4),
      (Fh.current = null),
      xP(e, n),
      hw(n, e),
      QE(Kf),
      (au = !!Vf),
      (Kf = Vf = null),
      (e.current = n),
      kP(n),
      JC(),
      (pe = s),
      (Se = a),
      (kn.transition = i);
  } else e.current = n;
  if (
    (ul && ((ul = !1), (jr = e), (xu = o)),
    (i = e.pendingLanes),
    i === 0 && (Hr = null),
    nE(n.stateNode),
    Kt(e, et()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Su) throw ((Su = !1), (e = pp), (pp = null), e);
  return (
    xu & 1 && e.tag !== 0 && Ti(),
    (i = e.pendingLanes),
    i & 1 ? (e === hp ? Fa++ : ((Fa = 0), (hp = e))) : (Fa = 0),
    so(),
    null
  );
}
function Ti() {
  if (jr !== null) {
    var e = J1(xu),
      t = kn.transition,
      n = Se;
    try {
      if (((kn.transition = null), (Se = 16 > e ? 16 : e), jr === null))
        var r = !1;
      else {
        if (((e = jr), (jr = null), (xu = 0), pe & 6)) throw Error(F(331));
        var o = pe;
        for (pe |= 4, Z = e.current; Z !== null; ) {
          var i = Z,
            a = i.child;
          if (Z.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (Z = u; Z !== null; ) {
                  var c = Z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Da(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (Z = d);
                  else
                    for (; Z !== null; ) {
                      c = Z;
                      var f = c.sibling,
                        h = c.return;
                      if ((dw(c), c === u)) {
                        Z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (Z = f);
                        break;
                      }
                      Z = h;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var g = p.child;
                if (g !== null) {
                  p.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              Z = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (Z = a);
          else
            e: for (; Z !== null; ) {
              if (((i = Z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Da(9, i, i.return);
                }
              var b = i.sibling;
              if (b !== null) {
                (b.return = i.return), (Z = b);
                break e;
              }
              Z = i.return;
            }
        }
        var m = e.current;
        for (Z = m; Z !== null; ) {
          a = Z;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (Z = y);
          else
            e: for (a = m; Z !== null; ) {
              if (((s = Z), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tc(9, s);
                  }
                } catch (S) {
                  Xe(s, s.return, S);
                }
              if (s === a) {
                Z = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (Z = v);
                break e;
              }
              Z = s.return;
            }
        }
        if (
          ((pe = o), so(), Jn && typeof Jn.onPostCommitFiberRoot == "function")
        )
          try {
            Jn.onPostCommitFiberRoot(Ku, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Se = n), (kn.transition = t);
    }
  }
  return !1;
}
function Py(e, t, n) {
  (t = qi(n, t)),
    (t = ew(e, t, 1)),
    (e = Wr(e, t, 1)),
    (t = At()),
    e !== null && (_s(e, 1, t), Kt(e, t));
}
function Xe(e, t, n) {
  if (e.tag === 3) Py(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Py(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Hr === null || !Hr.has(r)))
        ) {
          (e = qi(n, e)),
            (e = tw(t, e, 1)),
            (t = Wr(t, e, 1)),
            (e = At()),
            t !== null && (_s(t, 1, e), Kt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function TP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = At()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ft === e &&
      (kt & n) === n &&
      (st === 4 || (st === 3 && (kt & 130023424) === kt && 500 > et() - qh)
        ? _o(e, 0)
        : (Bh |= n)),
    Kt(e, t);
}
function Sw(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Js), (Js <<= 1), !(Js & 130023424) && (Js = 4194304))
      : (t = 1));
  var n = At();
  (e = yr(e, t)), e !== null && (_s(e, t, n), Kt(e, n));
}
function IP(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sw(e, n);
}
function MP(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), Sw(e, n);
}
var xw;
xw = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ht.current) Wt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Wt = !1), gP(e, t, n);
      Wt = !!(e.flags & 131072);
    }
  else (Wt = !1), je && t.flags & 1048576 && Eb(t, pu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Il(e, t), (e = t.pendingProps);
      var o = Di(t, _t.current);
      Oi(t, n), (o = Ah(null, t, r, e, o, n));
      var i = jh();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Vt(r) ? ((i = !0), du(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Mh(t),
            (o.updater = Ju),
            (t.stateNode = o),
            (o._reactInternals = t),
            np(t, r, e, n),
            (t = ip(null, t, r, !0, i, n)))
          : ((t.tag = 0), je && i && Ch(t), Lt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Il(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = $P(r)),
          (e = _n(r, e)),
          o)
        ) {
          case 0:
            t = op(null, t, r, e, n);
            break e;
          case 1:
            t = vy(null, t, r, e, n);
            break e;
          case 11:
            t = hy(null, t, r, e, n);
            break e;
          case 14:
            t = my(null, t, r, _n(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _n(r, o)),
        op(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _n(r, o)),
        vy(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((iw(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Tb(e, t),
          vu(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = qi(Error(F(423)), t)), (t = yy(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = qi(Error(F(424)), t)), (t = yy(e, t, r, n, o));
            break e;
          } else
            for (
              tn = qr(t.stateNode.containerInfo.firstChild),
                rn = t,
                je = !0,
                Nn = null,
                n = $b(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ui(), r === o)) {
            t = gr(e, t, n);
            break e;
          }
          Lt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Nb(t),
        e === null && Jf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Qf(r, o) ? (a = null) : i !== null && Qf(r, i) && (t.flags |= 32),
        ow(e, t),
        Lt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Jf(t), null;
    case 13:
      return aw(e, t, n);
    case 4:
      return (
        _h(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Fi(t, null, r, n)) : Lt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _n(r, o)),
        hy(e, t, r, o, n)
      );
    case 7:
      return Lt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Lt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Lt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Re(hu, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Dn(i.value, a)) {
            if (i.children === o.children && !Ht.current) {
              t = gr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = hr(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      ep(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(F(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  ep(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Lt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Oi(t, n),
        (o = Cn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Lt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = _n(r, t.pendingProps)),
        (o = _n(r.type, o)),
        my(e, t, r, o, n)
      );
    case 15:
      return nw(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _n(r, o)),
        Il(e, t),
        (t.tag = 1),
        Vt(r) ? ((e = !0), du(t)) : (e = !1),
        Oi(t, n),
        Mb(t, r, o),
        np(t, r, o, n),
        ip(null, t, r, !0, e, n)
      );
    case 19:
      return sw(e, t, n);
    case 22:
      return rw(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function kw(e, t) {
  return G1(e, t);
}
function _P(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xn(e, t, n, r) {
  return new _P(e, t, n, r);
}
function Kh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $P(e) {
  if (typeof e == "function") return Kh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fh)) return 11;
    if (e === ph) return 14;
  }
  return 2;
}
function Kr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $l(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Kh(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ai:
        return $o(n.children, o, i, t);
      case dh:
        (a = 8), (o |= 8);
        break;
      case Pf:
        return (
          (e = xn(12, n, t, o | 2)), (e.elementType = Pf), (e.lanes = i), e
        );
      case Rf:
        return (e = xn(13, n, t, o)), (e.elementType = Rf), (e.lanes = i), e;
      case Of:
        return (e = xn(19, n, t, o)), (e.elementType = Of), (e.lanes = i), e;
      case _1:
        return rc(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case I1:
              a = 10;
              break e;
            case M1:
              a = 9;
              break e;
            case fh:
              a = 11;
              break e;
            case ph:
              a = 14;
              break e;
            case Tr:
              (a = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xn(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function $o(e, t, n, r) {
  return (e = xn(7, e, r, t)), (e.lanes = n), e;
}
function rc(e, t, n, r) {
  return (
    (e = xn(22, e, r, t)),
    (e.elementType = _1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bd(e, t, n) {
  return (e = xn(6, e, null, t)), (e.lanes = n), e;
}
function qd(e, t, n) {
  return (
    (t = xn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function NP(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = kd(0)),
    (this.expirationTimes = kd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = kd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Qh(e, t, n, r, o, i, a, s, l) {
  return (
    (e = new NP(e, t, n, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = xn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mh(i),
    e
  );
}
function LP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ii,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cw(e) {
  if (!e) return no;
  e = e._reactInternals;
  e: {
    if (Wo(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Vt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Vt(n)) return kb(e, n, t);
  }
  return t;
}
function Ew(e, t, n, r, o, i, a, s, l) {
  return (
    (e = Qh(n, r, !0, e, o, i, a, s, l)),
    (e.context = Cw(null)),
    (n = e.current),
    (r = At()),
    (o = Vr(n)),
    (i = hr(r, o)),
    (i.callback = t ?? null),
    Wr(n, i, o),
    (e.current.lanes = o),
    _s(e, o, r),
    Kt(e, r),
    e
  );
}
function oc(e, t, n, r) {
  var o = t.current,
    i = At(),
    a = Vr(o);
  return (
    (n = Cw(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = hr(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wr(o, t, a)),
    e !== null && (An(e, o, a, i), Rl(e, o, a)),
    a
  );
}
function Cu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ry(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Gh(e, t) {
  Ry(e, t), (e = e.alternate) && Ry(e, t);
}
function AP() {
  return null;
}
var Pw =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xh(e) {
  this._internalRoot = e;
}
ic.prototype.render = Xh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  oc(e, t, null, null);
};
ic.prototype.unmount = Xh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zo(function () {
      oc(null, e, null, null);
    }),
      (t[vr] = null);
  }
};
function ic(e) {
  this._internalRoot = e;
}
ic.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _r.length && t !== 0 && t < _r[n].priority; n++);
    _r.splice(n, 0, e), n === 0 && ob(e);
  }
};
function Zh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ac(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Oy() {}
function jP(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Cu(a);
        i.call(u);
      };
    }
    var a = Ew(t, r, e, 0, null, !1, !1, "", Oy);
    return (
      (e._reactRootContainer = a),
      (e[vr] = a.current),
      us(e.nodeType === 8 ? e.parentNode : e),
      zo(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Cu(l);
      s.call(u);
    };
  }
  var l = Qh(e, 0, !1, null, null, !1, !1, "", Oy);
  return (
    (e._reactRootContainer = l),
    (e[vr] = l.current),
    us(e.nodeType === 8 ? e.parentNode : e),
    zo(function () {
      oc(t, l, n, r);
    }),
    l
  );
}
function sc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = Cu(a);
        s.call(l);
      };
    }
    oc(t, a, e, o);
  } else a = jP(n, t, e, o, r);
  return Cu(a);
}
eb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Oa(t.pendingLanes);
        n !== 0 &&
          (vh(t, n | 1), Kt(t, et()), !(pe & 6) && ((Wi = et() + 500), so()));
      }
      break;
    case 13:
      zo(function () {
        var r = yr(e, 1);
        if (r !== null) {
          var o = At();
          An(r, e, 1, o);
        }
      }),
        Gh(e, 1);
  }
};
yh = function (e) {
  if (e.tag === 13) {
    var t = yr(e, 134217728);
    if (t !== null) {
      var n = At();
      An(t, e, 134217728, n);
    }
    Gh(e, 134217728);
  }
};
tb = function (e) {
  if (e.tag === 13) {
    var t = Vr(e),
      n = yr(e, t);
    if (n !== null) {
      var r = At();
      An(n, e, t, r);
    }
    Gh(e, t);
  }
};
nb = function () {
  return Se;
};
rb = function (e, t) {
  var n = Se;
  try {
    return (Se = e), t();
  } finally {
    Se = n;
  }
};
zf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Mf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Zu(r);
            if (!o) throw Error(F(90));
            N1(r), Mf(r, o);
          }
        }
      }
      break;
    case "textarea":
      A1(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ci(e, !!n.multiple, t, !1);
  }
};
q1 = Wh;
W1 = zo;
var zP = { usingClientEntryPoint: !1, Events: [Ns, ci, Zu, F1, B1, Wh] },
  ya = {
    findFiberByHostInstance: Po,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  DP = {
    bundleType: ya.bundleType,
    version: ya.version,
    rendererPackageName: ya.rendererPackageName,
    rendererConfig: ya.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Sr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = K1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ya.findFiberByHostInstance || AP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cl.isDisabled && cl.supportsFiber)
    try {
      (Ku = cl.inject(DP)), (Jn = cl);
    } catch {}
}
cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zP;
cn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zh(t)) throw Error(F(200));
  return LP(e, t, null, n);
};
cn.createRoot = function (e, t) {
  if (!Zh(e)) throw Error(F(299));
  var n = !1,
    r = "",
    o = Pw;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Qh(e, 1, !1, null, null, n, !1, r, o)),
    (e[vr] = t.current),
    us(e.nodeType === 8 ? e.parentNode : e),
    new Xh(t)
  );
};
cn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = K1(t)), (e = e === null ? null : e.stateNode), e;
};
cn.flushSync = function (e) {
  return zo(e);
};
cn.hydrate = function (e, t, n) {
  if (!ac(t)) throw Error(F(200));
  return sc(null, e, t, !0, n);
};
cn.hydrateRoot = function (e, t, n) {
  if (!Zh(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = Pw;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Ew(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[vr] = t.current),
    us(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ic(t);
};
cn.render = function (e, t, n) {
  if (!ac(t)) throw Error(F(200));
  return sc(null, e, t, !1, n);
};
cn.unmountComponentAtNode = function (e) {
  if (!ac(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (zo(function () {
        sc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vr] = null);
        });
      }),
      !0)
    : !1;
};
cn.unstable_batchedUpdates = Wh;
cn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ac(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return sc(e, t, n, !1, r);
};
cn.version = "18.2.0-next-9e3b772b8-20220608";
function Rw() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rw);
    } catch (e) {
      console.error(e);
    }
}
Rw(), (E1.exports = cn);
var Ji = E1.exports;
const dl = Fp(Ji);
function UP(e) {
  e();
}
let Ow = UP;
const FP = (e) => (Ow = e),
  BP = () => Ow,
  Ty = Symbol.for("react-redux-context"),
  Iy = typeof globalThis < "u" ? globalThis : {};
function qP() {
  var e;
  if (!x.createContext) return {};
  const t = (e = Iy[Ty]) != null ? e : (Iy[Ty] = new Map());
  let n = t.get(x.createContext);
  return n || ((n = x.createContext(null)), t.set(x.createContext, n)), n;
}
const rr = qP();
function Yh(e = rr) {
  return function () {
    return x.useContext(e);
  };
}
const Tw = Yh(),
  Iw = () => {
    throw new Error("uSES not initialized!");
  };
let Mw = Iw;
const WP = (e) => {
    Mw = e;
  },
  HP = (e, t) => e === t;
function _w(e = rr) {
  const t = e === rr ? Tw : Yh(e);
  return function (r, o = {}) {
    const {
        equalityFn: i = HP,
        stabilityCheck: a = void 0,
        noopCheck: s = void 0,
      } = typeof o == "function" ? { equalityFn: o } : o,
      {
        store: l,
        subscription: u,
        getServerState: c,
        stabilityCheck: d,
        noopCheck: f,
      } = t();
    x.useRef(!0);
    const h = x.useCallback(
        {
          [r.name](g) {
            return r(g);
          },
        }[r.name],
        [r, d, a]
      ),
      p = Mw(u.addNestedSub, l.getState, c || l.getState, h, i);
    return x.useDebugValue(p), p;
  };
}
const $w = _w();
function L() {
  return (
    (L = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    L.apply(this, arguments)
  );
}
function ie(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Nw = { exports: {} },
  xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ht = typeof Symbol == "function" && Symbol.for,
  Jh = ht ? Symbol.for("react.element") : 60103,
  em = ht ? Symbol.for("react.portal") : 60106,
  lc = ht ? Symbol.for("react.fragment") : 60107,
  uc = ht ? Symbol.for("react.strict_mode") : 60108,
  cc = ht ? Symbol.for("react.profiler") : 60114,
  dc = ht ? Symbol.for("react.provider") : 60109,
  fc = ht ? Symbol.for("react.context") : 60110,
  tm = ht ? Symbol.for("react.async_mode") : 60111,
  pc = ht ? Symbol.for("react.concurrent_mode") : 60111,
  hc = ht ? Symbol.for("react.forward_ref") : 60112,
  mc = ht ? Symbol.for("react.suspense") : 60113,
  VP = ht ? Symbol.for("react.suspense_list") : 60120,
  vc = ht ? Symbol.for("react.memo") : 60115,
  yc = ht ? Symbol.for("react.lazy") : 60116,
  KP = ht ? Symbol.for("react.block") : 60121,
  QP = ht ? Symbol.for("react.fundamental") : 60117,
  GP = ht ? Symbol.for("react.responder") : 60118,
  XP = ht ? Symbol.for("react.scope") : 60119;
function fn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Jh:
        switch (((e = e.type), e)) {
          case tm:
          case pc:
          case lc:
          case cc:
          case uc:
          case mc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case fc:
              case hc:
              case yc:
              case vc:
              case dc:
                return e;
              default:
                return t;
            }
        }
      case em:
        return t;
    }
  }
}
function Lw(e) {
  return fn(e) === pc;
}
xe.AsyncMode = tm;
xe.ConcurrentMode = pc;
xe.ContextConsumer = fc;
xe.ContextProvider = dc;
xe.Element = Jh;
xe.ForwardRef = hc;
xe.Fragment = lc;
xe.Lazy = yc;
xe.Memo = vc;
xe.Portal = em;
xe.Profiler = cc;
xe.StrictMode = uc;
xe.Suspense = mc;
xe.isAsyncMode = function (e) {
  return Lw(e) || fn(e) === tm;
};
xe.isConcurrentMode = Lw;
xe.isContextConsumer = function (e) {
  return fn(e) === fc;
};
xe.isContextProvider = function (e) {
  return fn(e) === dc;
};
xe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jh;
};
xe.isForwardRef = function (e) {
  return fn(e) === hc;
};
xe.isFragment = function (e) {
  return fn(e) === lc;
};
xe.isLazy = function (e) {
  return fn(e) === yc;
};
xe.isMemo = function (e) {
  return fn(e) === vc;
};
xe.isPortal = function (e) {
  return fn(e) === em;
};
xe.isProfiler = function (e) {
  return fn(e) === cc;
};
xe.isStrictMode = function (e) {
  return fn(e) === uc;
};
xe.isSuspense = function (e) {
  return fn(e) === mc;
};
xe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === lc ||
    e === pc ||
    e === cc ||
    e === uc ||
    e === mc ||
    e === VP ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === yc ||
        e.$$typeof === vc ||
        e.$$typeof === dc ||
        e.$$typeof === fc ||
        e.$$typeof === hc ||
        e.$$typeof === QP ||
        e.$$typeof === GP ||
        e.$$typeof === XP ||
        e.$$typeof === KP))
  );
};
xe.typeOf = fn;
Nw.exports = xe;
var ZP = Nw.exports,
  nm = ZP,
  YP = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  JP = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  eR = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Aw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  rm = {};
rm[nm.ForwardRef] = eR;
rm[nm.Memo] = Aw;
function My(e) {
  return nm.isMemo(e) ? Aw : rm[e.$$typeof] || YP;
}
var tR = Object.defineProperty,
  nR = Object.getOwnPropertyNames,
  _y = Object.getOwnPropertySymbols,
  rR = Object.getOwnPropertyDescriptor,
  oR = Object.getPrototypeOf,
  $y = Object.prototype;
function jw(e, t, n) {
  if (typeof t != "string") {
    if ($y) {
      var r = oR(t);
      r && r !== $y && jw(e, r, n);
    }
    var o = nR(t);
    _y && (o = o.concat(_y(t)));
    for (var i = My(e), a = My(t), s = 0; s < o.length; ++s) {
      var l = o[s];
      if (!JP[l] && !(n && n[l]) && !(a && a[l]) && !(i && i[l])) {
        var u = rR(t, l);
        try {
          tR(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
var iR = jw;
const Ny = Fp(iR);
var zw = { exports: {} },
  ke = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var om = Symbol.for("react.element"),
  im = Symbol.for("react.portal"),
  gc = Symbol.for("react.fragment"),
  bc = Symbol.for("react.strict_mode"),
  wc = Symbol.for("react.profiler"),
  Sc = Symbol.for("react.provider"),
  xc = Symbol.for("react.context"),
  aR = Symbol.for("react.server_context"),
  kc = Symbol.for("react.forward_ref"),
  Cc = Symbol.for("react.suspense"),
  Ec = Symbol.for("react.suspense_list"),
  Pc = Symbol.for("react.memo"),
  Rc = Symbol.for("react.lazy"),
  sR = Symbol.for("react.offscreen"),
  Dw;
Dw = Symbol.for("react.module.reference");
function Rn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case om:
        switch (((e = e.type), e)) {
          case gc:
          case wc:
          case bc:
          case Cc:
          case Ec:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case aR:
              case xc:
              case kc:
              case Rc:
              case Pc:
              case Sc:
                return e;
              default:
                return t;
            }
        }
      case im:
        return t;
    }
  }
}
ke.ContextConsumer = xc;
ke.ContextProvider = Sc;
ke.Element = om;
ke.ForwardRef = kc;
ke.Fragment = gc;
ke.Lazy = Rc;
ke.Memo = Pc;
ke.Portal = im;
ke.Profiler = wc;
ke.StrictMode = bc;
ke.Suspense = Cc;
ke.SuspenseList = Ec;
ke.isAsyncMode = function () {
  return !1;
};
ke.isConcurrentMode = function () {
  return !1;
};
ke.isContextConsumer = function (e) {
  return Rn(e) === xc;
};
ke.isContextProvider = function (e) {
  return Rn(e) === Sc;
};
ke.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === om;
};
ke.isForwardRef = function (e) {
  return Rn(e) === kc;
};
ke.isFragment = function (e) {
  return Rn(e) === gc;
};
ke.isLazy = function (e) {
  return Rn(e) === Rc;
};
ke.isMemo = function (e) {
  return Rn(e) === Pc;
};
ke.isPortal = function (e) {
  return Rn(e) === im;
};
ke.isProfiler = function (e) {
  return Rn(e) === wc;
};
ke.isStrictMode = function (e) {
  return Rn(e) === bc;
};
ke.isSuspense = function (e) {
  return Rn(e) === Cc;
};
ke.isSuspenseList = function (e) {
  return Rn(e) === Ec;
};
ke.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === gc ||
    e === wc ||
    e === bc ||
    e === Cc ||
    e === Ec ||
    e === sR ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Rc ||
        e.$$typeof === Pc ||
        e.$$typeof === Sc ||
        e.$$typeof === xc ||
        e.$$typeof === kc ||
        e.$$typeof === Dw ||
        e.getModuleId !== void 0))
  );
};
ke.typeOf = Rn;
zw.exports = ke;
var yp = zw.exports;
const lR = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function uR(
  e,
  t,
  n,
  r,
  { areStatesEqual: o, areOwnPropsEqual: i, areStatePropsEqual: a }
) {
  let s = !1,
    l,
    u,
    c,
    d,
    f;
  function h(m, y) {
    return (
      (l = m),
      (u = y),
      (c = e(l, u)),
      (d = t(r, u)),
      (f = n(c, d, u)),
      (s = !0),
      f
    );
  }
  function p() {
    return (
      (c = e(l, u)), t.dependsOnOwnProps && (d = t(r, u)), (f = n(c, d, u)), f
    );
  }
  function g() {
    return (
      e.dependsOnOwnProps && (c = e(l, u)),
      t.dependsOnOwnProps && (d = t(r, u)),
      (f = n(c, d, u)),
      f
    );
  }
  function w() {
    const m = e(l, u),
      y = !a(m, c);
    return (c = m), y && (f = n(c, d, u)), f;
  }
  function b(m, y) {
    const v = !i(y, u),
      S = !o(m, l, y, u);
    return (l = m), (u = y), v && S ? p() : v ? g() : S ? w() : f;
  }
  return function (y, v) {
    return s ? b(y, v) : h(y, v);
  };
}
function cR(e, t) {
  let {
      initMapStateToProps: n,
      initMapDispatchToProps: r,
      initMergeProps: o,
    } = t,
    i = ie(t, lR);
  const a = n(e, i),
    s = r(e, i),
    l = o(e, i);
  return uR(a, s, l, e, i);
}
function dR(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function gp(e) {
  return function (n) {
    const r = e(n);
    function o() {
      return r;
    }
    return (o.dependsOnOwnProps = !1), o;
  };
}
function Ly(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Uw(e, t) {
  return function (r, { displayName: o }) {
    const i = function (s, l) {
      return i.dependsOnOwnProps ? i.mapToProps(s, l) : i.mapToProps(s, void 0);
    };
    return (
      (i.dependsOnOwnProps = !0),
      (i.mapToProps = function (s, l) {
        (i.mapToProps = e), (i.dependsOnOwnProps = Ly(e));
        let u = i(s, l);
        return (
          typeof u == "function" &&
            ((i.mapToProps = u), (i.dependsOnOwnProps = Ly(u)), (u = i(s, l))),
          u
        );
      }),
      i
    );
  };
}
function am(e, t) {
  return (n, r) => {
    throw new Error(
      `Invalid value of type ${typeof e} for ${t} argument when connecting component ${
        r.wrappedComponentName
      }.`
    );
  };
}
function fR(e) {
  return e && typeof e == "object"
    ? gp((t) => dR(e, t))
    : e
    ? typeof e == "function"
      ? Uw(e)
      : am(e, "mapDispatchToProps")
    : gp((t) => ({ dispatch: t }));
}
function pR(e) {
  return e
    ? typeof e == "function"
      ? Uw(e)
      : am(e, "mapStateToProps")
    : gp(() => ({}));
}
function hR(e, t, n) {
  return L({}, n, e, t);
}
function mR(e) {
  return function (n, { displayName: r, areMergedPropsEqual: o }) {
    let i = !1,
      a;
    return function (l, u, c) {
      const d = e(l, u, c);
      return i ? o(d, a) || (a = d) : ((i = !0), (a = d)), a;
    };
  };
}
function vR(e) {
  return e ? (typeof e == "function" ? mR(e) : am(e, "mergeProps")) : () => hR;
}
function yR() {
  const e = BP();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        o = t;
      for (; o; ) r.push(o), (o = o.next);
      return r;
    },
    subscribe(r) {
      let o = !0,
        i = (n = { callback: r, next: null, prev: n });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            i.next ? (i.next.prev = i.prev) : (n = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const Ay = { notify() {}, get: () => [] };
function Fw(e, t) {
  let n,
    r = Ay,
    o = 0,
    i = !1;
  function a(g) {
    c();
    const w = r.subscribe(g);
    let b = !1;
    return () => {
      b || ((b = !0), w(), d());
    };
  }
  function s() {
    r.notify();
  }
  function l() {
    p.onStateChange && p.onStateChange();
  }
  function u() {
    return i;
  }
  function c() {
    o++, n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = yR()));
  }
  function d() {
    o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = Ay));
  }
  function f() {
    i || ((i = !0), c());
  }
  function h() {
    i && ((i = !1), d());
  }
  const p = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: h,
    getListeners: () => r,
  };
  return p;
}
const gR =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Eu = gR ? x.useLayoutEffect : x.useEffect;
function jy(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Qr(e, t) {
  if (jy(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !jy(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const bR = ["reactReduxForwardedRef"];
let Bw = Iw;
const wR = (e) => {
    Bw = e;
  },
  SR = [null, null];
function xR(e, t, n) {
  Eu(() => e(...t), n);
}
function kR(e, t, n, r, o, i) {
  (e.current = r), (n.current = !1), o.current && ((o.current = null), i());
}
function CR(e, t, n, r, o, i, a, s, l, u, c) {
  if (!e) return () => {};
  let d = !1,
    f = null;
  const h = () => {
    if (d || !s.current) return;
    const g = t.getState();
    let w, b;
    try {
      w = r(g, o.current);
    } catch (m) {
      (b = m), (f = m);
    }
    b || (f = null),
      w === i.current
        ? a.current || u()
        : ((i.current = w), (l.current = w), (a.current = !0), c());
  };
  return (
    (n.onStateChange = h),
    n.trySubscribe(),
    h(),
    () => {
      if (((d = !0), n.tryUnsubscribe(), (n.onStateChange = null), f)) throw f;
    }
  );
}
function ER(e, t) {
  return e === t;
}
function PR(
  e,
  t,
  n,
  {
    pure: r,
    areStatesEqual: o = ER,
    areOwnPropsEqual: i = Qr,
    areStatePropsEqual: a = Qr,
    areMergedPropsEqual: s = Qr,
    forwardRef: l = !1,
    context: u = rr,
  } = {}
) {
  const c = u,
    d = pR(e),
    f = fR(t),
    h = vR(n),
    p = !!e;
  return (w) => {
    const b = w.displayName || w.name || "Component",
      m = `Connect(${b})`,
      y = {
        shouldHandleStateChanges: p,
        displayName: m,
        wrappedComponentName: b,
        WrappedComponent: w,
        initMapStateToProps: d,
        initMapDispatchToProps: f,
        initMergeProps: h,
        areStatesEqual: o,
        areStatePropsEqual: a,
        areOwnPropsEqual: i,
        areMergedPropsEqual: s,
      };
    function v(C) {
      const [E, O, R] = x.useMemo(() => {
          const { reactReduxForwardedRef: ee } = C,
            z = ie(C, bR);
          return [C.context, ee, z];
        }, [C]),
        M = x.useMemo(
          () =>
            E &&
            E.Consumer &&
            yp.isContextConsumer(x.createElement(E.Consumer, null))
              ? E
              : c,
          [E, c]
        ),
        N = x.useContext(M),
        $ = !!C.store && !!C.store.getState && !!C.store.dispatch,
        P = !!N && !!N.store,
        T = $ ? C.store : N.store,
        A = P ? N.getServerState : T.getState,
        U = x.useMemo(() => cR(T.dispatch, y), [T]),
        [_, j] = x.useMemo(() => {
          if (!p) return SR;
          const ee = Fw(T, $ ? void 0 : N.subscription),
            z = ee.notifyNestedSubs.bind(ee);
          return [ee, z];
        }, [T, $, N]),
        D = x.useMemo(() => ($ ? N : L({}, N, { subscription: _ })), [$, N, _]),
        q = x.useRef(),
        H = x.useRef(R),
        G = x.useRef(),
        Q = x.useRef(!1);
      x.useRef(!1);
      const V = x.useRef(!1),
        Y = x.useRef();
      Eu(
        () => (
          (V.current = !0),
          () => {
            V.current = !1;
          }
        ),
        []
      );
      const re = x.useMemo(
          () => () =>
            G.current && R === H.current ? G.current : U(T.getState(), R),
          [T, R]
        ),
        Ce = x.useMemo(
          () => (z) => _ ? CR(p, T, _, U, H, q, Q, V, G, j, z) : () => {},
          [_]
        );
      xR(kR, [H, q, Q, R, G, j]);
      let ce;
      try {
        ce = Bw(Ce, re, A ? () => U(A(), R) : re);
      } catch (ee) {
        throw (
          (Y.current &&
            (ee.message += `
The error may be correlated with this previous error:
${Y.current.stack}

`),
          ee)
        );
      }
      Eu(() => {
        (Y.current = void 0), (G.current = void 0), (q.current = ce);
      });
      const me = x.useMemo(
        () => x.createElement(w, L({}, ce, { ref: O })),
        [O, w, ce]
      );
      return x.useMemo(
        () => (p ? x.createElement(M.Provider, { value: D }, me) : me),
        [M, me, D]
      );
    }
    const k = x.memo(v);
    if (((k.WrappedComponent = w), (k.displayName = v.displayName = m), l)) {
      const E = x.forwardRef(function (R, M) {
        return x.createElement(k, L({}, R, { reactReduxForwardedRef: M }));
      });
      return (E.displayName = m), (E.WrappedComponent = w), Ny(E, w);
    }
    return Ny(k, w);
  };
}
function RR({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once",
}) {
  const a = x.useMemo(() => {
      const u = Fw(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: o,
        noopCheck: i,
      };
    }, [e, r, o, i]),
    s = x.useMemo(() => e.getState(), [e]);
  Eu(() => {
    const { subscription: u } = a;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      s !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [a, s]);
  const l = t || rr;
  return x.createElement(l.Provider, { value: a }, n);
}
function sm(e = rr) {
  const t = e === rr ? Tw : Yh(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const lm = sm();
function qw(e = rr) {
  const t = e === rr ? lm : sm(e);
  return function () {
    return t().dispatch;
  };
}
const Ww = qw();
WP(AC.useSyncExternalStoreWithSelector);
wR(x1.useSyncExternalStore);
FP(Ji.unstable_batchedUpdates);
const OR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Provider: RR,
        ReactReduxContext: rr,
        batch: Ji.unstable_batchedUpdates,
        connect: PR,
        createDispatchHook: qw,
        createSelectorHook: _w,
        createStoreHook: sm,
        shallowEqual: Qr,
        useDispatch: Ww,
        useSelector: $w,
        useStore: lm,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  fl = Un(OR);
(function (e) {
  var t =
      (af && af.__spreadArray) ||
      function (z, W) {
        for (var X = 0, he = W.length, se = z.length; X < he; X++, se++)
          z[se] = W[X];
        return z;
      },
    n = Object.create,
    r = Object.defineProperty,
    o = Object.defineProperties,
    i = Object.getOwnPropertyDescriptor,
    a = Object.getOwnPropertyDescriptors,
    s = Object.getOwnPropertyNames,
    l = Object.getOwnPropertySymbols,
    u = Object.getPrototypeOf,
    c = Object.prototype.hasOwnProperty,
    d = Object.prototype.propertyIsEnumerable,
    f = function (z, W, X) {
      return W in z
        ? r(z, W, { enumerable: !0, configurable: !0, writable: !0, value: X })
        : (z[W] = X);
    },
    h = function (z, W) {
      for (var X in W || (W = {})) c.call(W, X) && f(z, X, W[X]);
      if (l)
        for (var he = 0, se = l(W); he < se.length; he++)
          d.call(W, (X = se[he])) && f(z, X, W[X]);
      return z;
    },
    p = function (z, W) {
      return o(z, a(W));
    },
    g = function (z) {
      return r(z, "__esModule", { value: !0 });
    },
    w = function (z, W, X) {
      if ((W && typeof W == "object") || typeof W == "function")
        for (
          var he = function (Oe) {
              c.call(z, Oe) ||
                Oe === "default" ||
                r(z, Oe, {
                  get: function () {
                    return W[Oe];
                  },
                  enumerable: !(X = i(W, Oe)) || X.enumerable,
                });
            },
            se = 0,
            we = s(W);
          se < we.length;
          se++
        )
          he(we[se]);
      return z;
    },
    b = function (z) {
      return w(
        g(
          r(
            z != null ? n(u(z)) : {},
            "default",
            z && z.__esModule && "default" in z
              ? {
                  get: function () {
                    return z.default;
                  },
                  enumerable: !0,
                }
              : { value: z, enumerable: !0 }
          )
        ),
        z
      );
    };
  g(e),
    (function (z, W) {
      for (var X in W) r(z, X, { get: W[X], enumerable: !0 });
    })(e, {
      ApiProvider: function () {
        return oe;
      },
      createApi: function () {
        return ee;
      },
      reactHooksModule: function () {
        return V;
      },
      reactHooksModuleName: function () {
        return Q;
      },
    });
  var m = b(Qs),
    y = b(yd),
    v = b(x),
    S = b(Qs),
    k = b(fl),
    C = b(x);
  function E(z, W, X, he) {
    var se = (0, C.useMemo)(
        function () {
          return {
            queryArgs: z,
            serialized:
              typeof z == "object"
                ? W({ queryArgs: z, endpointDefinition: X, endpointName: he })
                : z,
          };
        },
        [z, W, X, he]
      ),
      we = (0, C.useRef)(se);
    return (
      (0, C.useEffect)(
        function () {
          we.current.serialized !== se.serialized && (we.current = se);
        },
        [se]
      ),
      we.current.serialized === se.serialized ? we.current.queryArgs : z
    );
  }
  var O = Symbol(),
    R = b(x),
    M = b(fl);
  function N(z) {
    var W = (0, R.useRef)(z);
    return (
      (0, R.useEffect)(
        function () {
          (0, M.shallowEqual)(W.current, z) || (W.current = z);
        },
        [z]
      ),
      (0, M.shallowEqual)(W.current, z) ? W.current : z
    );
  }
  var $,
    P,
    T = b(yd),
    A = WeakMap ? new WeakMap() : void 0,
    U = function (z) {
      var W = z.endpointName,
        X = z.queryArgs,
        he = "",
        se = A == null ? void 0 : A.get(X);
      if (typeof se == "string") he = se;
      else {
        var we = JSON.stringify(X, function (Oe, We) {
          return (0, T.isPlainObject)(We)
            ? Object.keys(We)
                .sort()
                .reduce(function (ae, Te) {
                  return (ae[Te] = We[Te]), ae;
                }, {})
            : We;
        });
        (0, T.isPlainObject)(X) && (A == null || A.set(X, we)), (he = we);
      }
      return W + "(" + he + ")";
    },
    _ =
      typeof window < "u" && window.document && window.document.createElement
        ? v.useLayoutEffect
        : v.useEffect,
    j = function (z) {
      return z;
    },
    D = function (z) {
      return z.isUninitialized
        ? p(h({}, z), {
            isUninitialized: !1,
            isFetching: !0,
            isLoading: z.data === void 0,
            status: S.QueryStatus.pending,
          })
        : z;
    };
  function q(z) {
    return z.replace(z[0], z[0].toUpperCase());
  }
  function H(z) {
    for (var W = [], X = 1; X < arguments.length; X++) W[X - 1] = arguments[X];
    Object.assign.apply(Object, t([z], W));
  }
  ((P = $ || ($ = {})).query = "query"), (P.mutation = "mutation");
  var G = b(fl),
    Q = Symbol(),
    V = function (z) {
      var W = z === void 0 ? {} : z,
        X = W.batch,
        he = X === void 0 ? G.batch : X,
        se = W.useDispatch,
        we = se === void 0 ? G.useDispatch : se,
        Oe = W.useSelector,
        We = Oe === void 0 ? G.useSelector : Oe,
        ae = W.useStore,
        Te = ae === void 0 ? G.useStore : ae,
        yt = W.unstable__sideEffectsInRender,
        Pe = yt !== void 0 && yt;
      return {
        name: Q,
        init: function (Et, Bn, pn) {
          var be = Et,
            te = (function (ut) {
              var J = ut.api,
                ue = ut.moduleOptions,
                ze = ue.batch,
                Ut = ue.useDispatch,
                Cr = ue.useSelector,
                hx = ue.useStore,
                Yc = ut.serializeQueryArgs,
                Jc = ut.context,
                aa = ue.unstable__sideEffectsInRender
                  ? function (De) {
                      return De();
                    }
                  : v.useEffect;
              return {
                buildQueryHooks: function (De) {
                  var $t = function (Ye, fe) {
                      var He = fe === void 0 ? {} : fe,
                        Ee = He.refetchOnReconnect,
                        Pt = He.refetchOnFocus,
                        gt = He.refetchOnMountOrArgChange,
                        hn = He.skip,
                        Ve = hn !== void 0 && hn,
                        Zt = He.pollingInterval,
                        mn = Zt === void 0 ? 0 : Zt,
                        or = J.endpoints[De].initiate,
                        Nt = Ut(),
                        Ne = E(
                          Ve ? S.skipToken : Ye,
                          U,
                          Jc.endpointDefinitions[De],
                          De
                        ),
                        Ft = N({
                          refetchOnReconnect: Ee,
                          refetchOnFocus: Pt,
                          pollingInterval: mn,
                        }),
                        vn = (0, v.useRef)(!1),
                        Ke = (0, v.useRef)(),
                        In = Ke.current || {},
                        Wn = In.queryCacheKey,
                        sa = In.requestId,
                        ed = !1;
                      if (Wn && sa) {
                        var vx = Nt(
                          J.internalActions.internal_probeSubscription({
                            queryCacheKey: Wn,
                            requestId: sa,
                          })
                        );
                        ed = !!vx;
                      }
                      var td = !ed && vn.current;
                      return (
                        aa(function () {
                          vn.current = ed;
                        }),
                        aa(
                          function () {
                            td && (Ke.current = void 0);
                          },
                          [td]
                        ),
                        aa(
                          function () {
                            var Er,
                              po = Ke.current;
                            if (Ne === S.skipToken)
                              return (
                                po == null || po.unsubscribe(),
                                void (Ke.current = void 0)
                              );
                            var yx =
                              (Er = Ke.current) == null
                                ? void 0
                                : Er.subscriptionOptions;
                            if (po && po.arg === Ne)
                              Ft !== yx && po.updateSubscriptionOptions(Ft);
                            else {
                              po == null || po.unsubscribe();
                              var gx = Nt(
                                or(Ne, {
                                  subscriptionOptions: Ft,
                                  forceRefetch: gt,
                                })
                              );
                              Ke.current = gx;
                            }
                          },
                          [Nt, or, gt, Ne, Ft, td]
                        ),
                        (0, v.useEffect)(function () {
                          return function () {
                            var Er;
                            (Er = Ke.current) == null || Er.unsubscribe(),
                              (Ke.current = void 0);
                          };
                        }, []),
                        (0, v.useMemo)(function () {
                          return {
                            refetch: function () {
                              var Er;
                              if (!Ke.current)
                                throw new Error(
                                  "Cannot refetch a query that has not been started yet."
                                );
                              return (Er = Ke.current) == null
                                ? void 0
                                : Er.refetch();
                            },
                          };
                        }, [])
                      );
                    },
                    qn = function (Ye) {
                      var fe = Ye === void 0 ? {} : Ye,
                        He = fe.refetchOnReconnect,
                        Ee = fe.refetchOnFocus,
                        Pt = fe.pollingInterval,
                        gt = Pt === void 0 ? 0 : Pt,
                        hn = J.endpoints[De].initiate,
                        Ve = Ut(),
                        Zt = (0, v.useState)(O),
                        mn = Zt[0],
                        or = Zt[1],
                        Nt = (0, v.useRef)(),
                        Ne = N({
                          refetchOnReconnect: He,
                          refetchOnFocus: Ee,
                          pollingInterval: gt,
                        });
                      aa(
                        function () {
                          var Ke,
                            In,
                            Wn =
                              (Ke = Nt.current) == null
                                ? void 0
                                : Ke.subscriptionOptions;
                          Ne !== Wn &&
                            ((In = Nt.current) == null ||
                              In.updateSubscriptionOptions(Ne));
                        },
                        [Ne]
                      );
                      var Ft = (0, v.useRef)(Ne);
                      aa(
                        function () {
                          Ft.current = Ne;
                        },
                        [Ne]
                      );
                      var vn = (0, v.useCallback)(
                        function (Ke, In) {
                          var Wn;
                          return (
                            In === void 0 && (In = !1),
                            ze(function () {
                              var sa;
                              (sa = Nt.current) == null || sa.unsubscribe(),
                                (Nt.current = Wn =
                                  Ve(
                                    hn(Ke, {
                                      subscriptionOptions: Ft.current,
                                      forceRefetch: !In,
                                    })
                                  )),
                                or(Ke);
                            }),
                            Wn
                          );
                        },
                        [Ve, hn]
                      );
                      return (
                        (0, v.useEffect)(function () {
                          return function () {
                            var Ke;
                            (Ke = Nt == null ? void 0 : Nt.current) == null ||
                              Ke.unsubscribe();
                          };
                        }, []),
                        (0, v.useEffect)(
                          function () {
                            mn === O || Nt.current || vn(mn, !0);
                          },
                          [mn, vn]
                        ),
                        (0, v.useMemo)(
                          function () {
                            return [vn, mn];
                          },
                          [vn, mn]
                        )
                      );
                    },
                    Xt = function (Ye, fe) {
                      var He = fe === void 0 ? {} : fe,
                        Ee = He.skip,
                        Pt = He.selectFromResult,
                        gt = J.endpoints[De].select,
                        hn = E(
                          Ee !== void 0 && Ee ? S.skipToken : Ye,
                          Yc,
                          Jc.endpointDefinitions[De],
                          De
                        ),
                        Ve = (0, v.useRef)(),
                        Zt = (0, v.useMemo)(
                          function () {
                            return (0, y.createSelector)(
                              [
                                gt(hn),
                                function (Ft, vn) {
                                  return vn;
                                },
                                function (Ft) {
                                  return hn;
                                },
                              ],
                              mx
                            );
                          },
                          [gt, hn]
                        ),
                        mn = (0, v.useMemo)(
                          function () {
                            return Pt ? (0, y.createSelector)([Zt], Pt) : Zt;
                          },
                          [Zt, Pt]
                        ),
                        or = Cr(function (Ft) {
                          return mn(Ft, Ve.current);
                        }, k.shallowEqual),
                        Nt = hx(),
                        Ne = Zt(Nt.getState(), Ve.current);
                      return (
                        _(
                          function () {
                            Ve.current = Ne;
                          },
                          [Ne]
                        ),
                        or
                      );
                    };
                  return {
                    useQueryState: Xt,
                    useQuerySubscription: $t,
                    useLazyQuerySubscription: qn,
                    useLazyQuery: function (Ye) {
                      var fe = qn(Ye),
                        He = fe[0],
                        Ee = fe[1],
                        Pt = Xt(Ee, p(h({}, Ye), { skip: Ee === O })),
                        gt = (0, v.useMemo)(
                          function () {
                            return { lastArg: Ee };
                          },
                          [Ee]
                        );
                      return (0, v.useMemo)(
                        function () {
                          return [He, Pt, gt];
                        },
                        [He, Pt, gt]
                      );
                    },
                    useQuery: function (Ye, fe) {
                      var He = $t(Ye, fe),
                        Ee = Xt(
                          Ye,
                          h(
                            {
                              selectFromResult:
                                Ye === S.skipToken || (fe != null && fe.skip)
                                  ? void 0
                                  : D,
                            },
                            fe
                          )
                        );
                      return (
                        (0, v.useDebugValue)({
                          data: Ee.data,
                          status: Ee.status,
                          isLoading: Ee.isLoading,
                          isSuccess: Ee.isSuccess,
                          isError: Ee.isError,
                          error: Ee.error,
                        }),
                        (0, v.useMemo)(
                          function () {
                            return h(h({}, Ee), He);
                          },
                          [Ee, He]
                        )
                      );
                    },
                  };
                },
                buildMutationHook: function (De) {
                  return function ($t) {
                    var qn = $t === void 0 ? {} : $t,
                      Xt = qn.selectFromResult,
                      Ye = Xt === void 0 ? j : Xt,
                      fe = qn.fixedCacheKey,
                      He = J.endpoints[De],
                      Ee = He.select,
                      Pt = He.initiate,
                      gt = Ut(),
                      hn = (0, v.useState)(),
                      Ve = hn[0],
                      Zt = hn[1];
                    (0, v.useEffect)(
                      function () {
                        return function () {
                          (Ve != null && Ve.arg.fixedCacheKey) ||
                            Ve == null ||
                            Ve.reset();
                        };
                      },
                      [Ve]
                    );
                    var mn = (0, v.useCallback)(
                        function (In) {
                          var Wn = gt(Pt(In, { fixedCacheKey: fe }));
                          return Zt(Wn), Wn;
                        },
                        [gt, Pt, fe]
                      ),
                      or = (Ve || {}).requestId,
                      Nt = (0, v.useMemo)(
                        function () {
                          return (0, y.createSelector)(
                            [
                              Ee({
                                fixedCacheKey: fe,
                                requestId: Ve == null ? void 0 : Ve.requestId,
                              }),
                            ],
                            Ye
                          );
                        },
                        [Ee, Ve, Ye, fe]
                      ),
                      Ne = Cr(Nt, k.shallowEqual),
                      Ft =
                        fe == null
                          ? Ve == null
                            ? void 0
                            : Ve.arg.originalArgs
                          : void 0,
                      vn = (0, v.useCallback)(
                        function () {
                          ze(function () {
                            Ve && Zt(void 0),
                              fe &&
                                gt(
                                  J.internalActions.removeMutationResult({
                                    requestId: or,
                                    fixedCacheKey: fe,
                                  })
                                );
                          });
                        },
                        [gt, fe, Ve, or]
                      );
                    (0, v.useDebugValue)({
                      endpointName: Ne.endpointName,
                      data: Ne.data,
                      status: Ne.status,
                      isLoading: Ne.isLoading,
                      isSuccess: Ne.isSuccess,
                      isError: Ne.isError,
                      error: Ne.error,
                    });
                    var Ke = (0, v.useMemo)(
                      function () {
                        return p(h({}, Ne), { originalArgs: Ft, reset: vn });
                      },
                      [Ne, Ft, vn]
                    );
                    return (0, v.useMemo)(
                      function () {
                        return [mn, Ke];
                      },
                      [mn, Ke]
                    );
                  };
                },
                usePrefetch: function (De, $t) {
                  var qn = Ut(),
                    Xt = N($t);
                  return (0, v.useCallback)(
                    function (Ye, fe) {
                      return qn(J.util.prefetch(De, Ye, h(h({}, Xt), fe)));
                    },
                    [De, qn, Xt]
                  );
                },
              };
              function mx(De, $t, qn) {
                if ($t != null && $t.endpointName && De.isUninitialized) {
                  var Xt = $t.endpointName,
                    Ye = Jc.endpointDefinitions[Xt];
                  Yc({
                    queryArgs: $t.originalArgs,
                    endpointDefinition: Ye,
                    endpointName: Xt,
                  }) ===
                    Yc({
                      queryArgs: qn,
                      endpointDefinition: Ye,
                      endpointName: Xt,
                    }) && ($t = void 0);
                }
                var fe = De.isSuccess ? De.data : $t == null ? void 0 : $t.data;
                fe === void 0 && (fe = De.data);
                var He = fe !== void 0,
                  Ee = De.isLoading,
                  Pt = !He && Ee,
                  gt = De.isSuccess || (Ee && He);
                return p(h({}, De), {
                  data: fe,
                  currentData: De.data,
                  isFetching: Ee,
                  isLoading: Pt,
                  isSuccess: gt,
                });
              }
            })({
              api: Et,
              moduleOptions: {
                batch: he,
                useDispatch: we,
                useSelector: We,
                useStore: Te,
                unstable__sideEffectsInRender: Pe,
              },
              serializeQueryArgs: Bn.serializeQueryArgs,
              context: pn,
            }),
            Tn = te.buildQueryHooks,
            fo = te.buildMutationHook;
          return (
            H(be, { usePrefetch: te.usePrefetch }),
            H(pn, { batch: he }),
            {
              injectEndpoint: function (ut, J) {
                if (J.type === $.query) {
                  var ue = Tn(ut),
                    ze = ue.useQuery,
                    Ut = ue.useLazyQuery;
                  H(be.endpoints[ut], {
                    useQuery: ze,
                    useLazyQuery: Ut,
                    useLazyQuerySubscription: ue.useLazyQuerySubscription,
                    useQueryState: ue.useQueryState,
                    useQuerySubscription: ue.useQuerySubscription,
                  }),
                    (Et["use" + q(ut) + "Query"] = ze),
                    (Et["useLazy" + q(ut) + "Query"] = Ut);
                } else if (J.type === $.mutation) {
                  var Cr = fo(ut);
                  H(be.endpoints[ut], { useMutation: Cr }),
                    (Et["use" + q(ut) + "Mutation"] = Cr);
                }
              },
            }
          );
        },
      };
    };
  w(e, b(Qs));
  var Y = b(yd),
    re = b(x),
    Ce = b(x),
    ce = b(fl),
    me = b(Qs);
  function oe(z) {
    var W = Ce.default.useState(function () {
      var X;
      return (0, Y.configureStore)({
        reducer: ((X = {}), (X[z.api.reducerPath] = z.api.reducer), X),
        middleware: function (he) {
          return he().concat(z.api.middleware);
        },
      });
    })[0];
    return (
      (0, re.useEffect)(
        function () {
          return z.setupListeners === !1
            ? void 0
            : (0, me.setupListeners)(W.dispatch, z.setupListeners);
        },
        [z.setupListeners, W.dispatch]
      ),
      Ce.default.createElement(
        ce.Provider,
        { store: W, context: z.context },
        z.children
      )
    );
  }
  var ee = (0, m.buildCreateApi)((0, m.coreModule)(), V());
})(Ig);
Tg.exports = Ig;
var TR = Tg.exports,
  bp = {},
  zy = Ji;
(bp.createRoot = zy.createRoot), (bp.hydrateRoot = zy.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gs() {
  return (
    (gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gs.apply(this, arguments)
  );
}
var zr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(zr || (zr = {}));
const Dy = "popstate";
function IR(e) {
  e === void 0 && (e = {});
  function t(o, i) {
    let {
      pathname: a = "/",
      search: s = "",
      hash: l = "",
    } = Ho(o.location.hash.substr(1));
    return (
      !a.startsWith("/") && !a.startsWith(".") && (a = "/" + a),
      wp(
        "",
        { pathname: a, search: s, hash: l },
        (i.state && i.state.usr) || null,
        (i.state && i.state.key) || "default"
      )
    );
  }
  function n(o, i) {
    let a = o.document.querySelector("base"),
      s = "";
    if (a && a.getAttribute("href")) {
      let l = o.location.href,
        u = l.indexOf("#");
      s = u === -1 ? l : l.slice(0, u);
    }
    return s + "#" + (typeof i == "string" ? i : Pu(i));
  }
  function r(o, i) {
    um(
      o.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(i) +
        ")"
    );
  }
  return _R(t, n, r, e);
}
function Be(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function um(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function MR() {
  return Math.random().toString(36).substr(2, 8);
}
function Uy(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function wp(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    gs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ho(t) : t,
      { state: n, key: (t && t.key) || r || MR() }
    )
  );
}
function Pu(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ho(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function _R(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    s = zr.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), a.replaceState(gs({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    s = zr.Pop;
    let w = c(),
      b = w == null ? null : w - u;
    (u = w), l && l({ action: s, location: g.location, delta: b });
  }
  function f(w, b) {
    s = zr.Push;
    let m = wp(g.location, w, b);
    n && n(m, w), (u = c() + 1);
    let y = Uy(m, u),
      v = g.createHref(m);
    try {
      a.pushState(y, "", v);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      o.location.assign(v);
    }
    i && l && l({ action: s, location: g.location, delta: 1 });
  }
  function h(w, b) {
    s = zr.Replace;
    let m = wp(g.location, w, b);
    n && n(m, w), (u = c());
    let y = Uy(m, u),
      v = g.createHref(m);
    a.replaceState(y, "", v),
      i && l && l({ action: s, location: g.location, delta: 0 });
  }
  function p(w) {
    let b = o.location.origin !== "null" ? o.location.origin : o.location.href,
      m = typeof w == "string" ? w : Pu(w);
    return (
      (m = m.replace(/ $/, "%20")),
      Be(
        b,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, b)
    );
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Dy, d),
        (l = w),
        () => {
          o.removeEventListener(Dy, d), (l = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: p,
    encodeLocation(w) {
      let b = p(w);
      return { pathname: b.pathname, search: b.search, hash: b.hash };
    },
    push: f,
    replace: h,
    go(w) {
      return a.go(w);
    },
  };
  return g;
}
var Fy;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Fy || (Fy = {}));
function $R(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Ho(t) : t,
    o = Hi(r.pathname || "/", n);
  if (o == null) return null;
  let i = Hw(e);
  NR(i);
  let a = null;
  for (let s = 0; a == null && s < i.length; ++s) {
    let l = HR(o);
    a = qR(i[s], l);
  }
  return a;
}
function Hw(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Be(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Gr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Be(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Hw(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: FR(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, a);
      else for (let l of Vw(i.path)) o(i, a, l);
    }),
    t
  );
}
function Vw(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = Vw(r.join("/")),
    s = [];
  return (
    s.push(...a.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && s.push(...a),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function NR(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : BR(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const LR = /^:[\w-]+$/,
  AR = 3,
  jR = 2,
  zR = 1,
  DR = 10,
  UR = -2,
  By = (e) => e === "*";
function FR(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(By) && (r += UR),
    t && (r += jR),
    n
      .filter((o) => !By(o))
      .reduce((o, i) => o + (LR.test(i) ? AR : i === "" ? zR : DR), r)
  );
}
function BR(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function qR(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let s = n[a],
      l = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = Sp(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = s.route;
    i.push({
      params: r,
      pathname: Gr([o, c.pathname]),
      pathnameBase: GR(Gr([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = Gr([o, c.pathnameBase]));
  }
  return i;
}
function Sp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = WR(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let g = s[d] || "";
        a = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const p = s[d];
      return (
        h && !p ? (u[f] = void 0) : (u[f] = (p || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function WR(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    um(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function HR(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      um(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Hi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function VR(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Ho(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : KR(n, t)) : t,
    search: XR(r),
    hash: ZR(o),
  };
}
function KR(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Wd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function QR(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function cm(e, t) {
  let n = QR(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function dm(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Ho(e))
    : ((o = gs({}, e)),
      Be(
        !o.pathname || !o.pathname.includes("?"),
        Wd("?", "pathname", "search", o)
      ),
      Be(
        !o.pathname || !o.pathname.includes("#"),
        Wd("#", "pathname", "hash", o)
      ),
      Be(!o.search || !o.search.includes("#"), Wd("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    s;
  if (a == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && a.startsWith("..")) {
      let f = a.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let l = VR(o, s),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Gr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  GR = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  XR = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ZR = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function YR(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Kw = ["post", "put", "patch", "delete"];
new Set(Kw);
const JR = ["get", ...Kw];
new Set(JR);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bs() {
  return (
    (bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bs.apply(this, arguments)
  );
}
const Oc = x.createContext(null),
  Qw = x.createContext(null),
  xr = x.createContext(null),
  Tc = x.createContext(null),
  lo = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gw = x.createContext(null);
function eO(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ea() || Be(!1);
  let { basename: r, navigator: o } = x.useContext(xr),
    { hash: i, pathname: a, search: s } = Ic(e, { relative: n }),
    l = a;
  return (
    r !== "/" && (l = a === "/" ? r : Gr([r, a])),
    o.createHref({ pathname: l, search: s, hash: i })
  );
}
function ea() {
  return x.useContext(Tc) != null;
}
function ta() {
  return ea() || Be(!1), x.useContext(Tc).location;
}
function Xw(e) {
  x.useContext(xr).static || x.useLayoutEffect(e);
}
function fm() {
  let { isDataRoute: e } = x.useContext(lo);
  return e ? pO() : tO();
}
function tO() {
  ea() || Be(!1);
  let e = x.useContext(Oc),
    { basename: t, future: n, navigator: r } = x.useContext(xr),
    { matches: o } = x.useContext(lo),
    { pathname: i } = ta(),
    a = JSON.stringify(cm(o, n.v7_relativeSplatPath)),
    s = x.useRef(!1);
  return (
    Xw(() => {
      s.current = !0;
    }),
    x.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = dm(u, JSON.parse(a), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Gr([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, a, i, e]
    )
  );
}
function Ic(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(xr),
    { matches: o } = x.useContext(lo),
    { pathname: i } = ta(),
    a = JSON.stringify(cm(o, r.v7_relativeSplatPath));
  return x.useMemo(() => dm(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function nO(e, t) {
  return rO(e, t);
}
function rO(e, t, n, r) {
  ea() || Be(!1);
  let { navigator: o } = x.useContext(xr),
    { matches: i } = x.useContext(lo),
    a = i[i.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let l = a ? a.pathnameBase : "/";
  a && a.route;
  let u = ta(),
    c;
  if (t) {
    var d;
    let w = typeof t == "string" ? Ho(t) : t;
    l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || Be(!1),
      (c = w);
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let p = $R(e, { pathname: h }),
    g = lO(
      p &&
        p.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, s, w.params),
            pathname: Gr([
              l,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : Gr([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && g
    ? x.createElement(
        Tc.Provider,
        {
          value: {
            location: bs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: zr.Pop,
          },
        },
        g
      )
    : g;
}
function oO() {
  let e = fO(),
    t = YR(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    i
  );
}
const iO = x.createElement(oO, null);
class aO extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          lo.Provider,
          { value: this.props.routeContext },
          x.createElement(Gw.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function sO(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(Oc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(lo.Provider, { value: t }, r)
  );
}
function lO(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let c = a.findIndex(
      (d) => d.route.id && (s == null ? void 0 : s[d.route.id])
    );
    c >= 0 || Be(!1), (a = a.slice(0, Math.min(a.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let d = a[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          p =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || p) {
          (l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((c, d, f) => {
    let h,
      p = !1,
      g = null,
      w = null;
    n &&
      ((h = s && d.route.id ? s[d.route.id] : void 0),
      (g = d.route.errorElement || iO),
      l &&
        (u < 0 && f === 0
          ? (hO("route-fallback", !1), (p = !0), (w = null))
          : u === f &&
            ((p = !0), (w = d.route.hydrateFallbackElement || null))));
    let b = t.concat(a.slice(0, f + 1)),
      m = () => {
        let y;
        return (
          h
            ? (y = g)
            : p
            ? (y = w)
            : d.route.Component
            ? (y = x.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          x.createElement(sO, {
            match: d,
            routeContext: { outlet: c, matches: b, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? x.createElement(aO, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: b, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Zw = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Zw || {}),
  Ru = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ru || {});
function uO(e) {
  let t = x.useContext(Oc);
  return t || Be(!1), t;
}
function cO(e) {
  let t = x.useContext(Qw);
  return t || Be(!1), t;
}
function dO(e) {
  let t = x.useContext(lo);
  return t || Be(!1), t;
}
function Yw(e) {
  let t = dO(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Be(!1), n.route.id;
}
function fO() {
  var e;
  let t = x.useContext(Gw),
    n = cO(Ru.UseRouteError),
    r = Yw(Ru.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function pO() {
  let { router: e } = uO(Zw.UseNavigateStable),
    t = Yw(Ru.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Xw(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, bs({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const qy = {};
function hO(e, t, n) {
  !t && !qy[e] && (qy[e] = !0);
}
function ws(e) {
  let { to: t, replace: n, state: r, relative: o } = e;
  ea() || Be(!1);
  let { future: i, static: a } = x.useContext(xr),
    { matches: s } = x.useContext(lo),
    { pathname: l } = ta(),
    u = fm(),
    c = dm(t, cm(s, i.v7_relativeSplatPath), l, o === "path"),
    d = JSON.stringify(c);
  return (
    x.useEffect(
      () => u(JSON.parse(d), { replace: n, state: r, relative: o }),
      [u, d, o, n, r]
    ),
    null
  );
}
function xp(e) {
  Be(!1);
}
function mO(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = zr.Pop,
    navigator: i,
    static: a = !1,
    future: s,
  } = e;
  ea() && Be(!1);
  let l = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: a,
        future: bs({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, i, a]
    );
  typeof r == "string" && (r = Ho(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: p = "default",
    } = r,
    g = x.useMemo(() => {
      let w = Hi(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: d, hash: f, state: h, key: p },
            navigationType: o,
          };
    }, [l, c, d, f, h, p, o]);
  return g == null
    ? null
    : x.createElement(
        xr.Provider,
        { value: u },
        x.createElement(Tc.Provider, { children: n, value: g })
      );
}
function vO(e) {
  let { children: t, location: n } = e;
  return nO(kp(t), n);
}
new Promise(() => {});
function kp(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, kp(r.props.children, i));
        return;
      }
      r.type !== xp && Be(!1), !r.props.index || !r.props.children || Be(!1);
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = kp(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ou() {
  return (
    (Ou = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ou.apply(this, arguments)
  );
}
function Jw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function yO(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function gO(e, t) {
  return e.button === 0 && (!t || t === "_self") && !yO(e);
}
const bO = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  wO = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  SO = "6";
try {
  window.__reactRouterVersion = SO;
} catch {}
const xO = x.createContext({ isTransitioning: !1 }),
  kO = "startTransition",
  Wy = Wl[kO];
function CO(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = x.useRef();
  i.current == null && (i.current = IR({ window: o, v5Compat: !0 }));
  let a = i.current,
    [s, l] = x.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      (d) => {
        u && Wy ? Wy(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    x.useLayoutEffect(() => a.listen(c), [a, c]),
    x.createElement(mO, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
      future: r,
    })
  );
}
const EO =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  PO = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Vi = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = Jw(t, bO),
      { basename: h } = x.useContext(xr),
      p,
      g = !1;
    if (typeof u == "string" && PO.test(u) && ((p = u), EO))
      try {
        let y = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          S = Hi(v.pathname, h);
        v.origin === y.origin && S != null
          ? (u = S + v.search + v.hash)
          : (g = !0);
      } catch {}
    let w = eO(u, { relative: o }),
      b = TO(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: o,
        unstable_viewTransition: d,
      });
    function m(y) {
      r && r(y), y.defaultPrevented || b(y);
    }
    return x.createElement(
      "a",
      Ou({}, f, { href: p || w, onClick: g || i ? r : m, ref: n, target: l })
    );
  }),
  RO = x.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: a = !1,
        style: s,
        to: l,
        unstable_viewTransition: u,
        children: c,
      } = t,
      d = Jw(t, wO),
      f = Ic(l, { relative: d.relative }),
      h = ta(),
      p = x.useContext(Qw),
      { navigator: g, basename: w } = x.useContext(xr),
      b = p != null && IO(f) && u === !0,
      m = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname,
      y = h.pathname,
      v =
        p && p.navigation && p.navigation.location
          ? p.navigation.location.pathname
          : null;
    o ||
      ((y = y.toLowerCase()),
      (v = v ? v.toLowerCase() : null),
      (m = m.toLowerCase())),
      v && w && (v = Hi(v, w) || v);
    const S = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
    let k = y === m || (!a && y.startsWith(m) && y.charAt(S) === "/"),
      C =
        v != null &&
        (v === m || (!a && v.startsWith(m) && v.charAt(m.length) === "/")),
      E = { isActive: k, isPending: C, isTransitioning: b },
      O = k ? r : void 0,
      R;
    typeof i == "function"
      ? (R = i(E))
      : (R = [
          i,
          k ? "active" : null,
          C ? "pending" : null,
          b ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let M = typeof s == "function" ? s(E) : s;
    return x.createElement(
      Vi,
      Ou({}, d, {
        "aria-current": O,
        className: R,
        ref: n,
        style: M,
        to: l,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(E) : c
    );
  });
var Cp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Cp || (Cp = {}));
var Hy;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Hy || (Hy = {}));
function OO(e) {
  let t = x.useContext(Oc);
  return t || Be(!1), t;
}
function TO(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: s,
    } = t === void 0 ? {} : t,
    l = fm(),
    u = ta(),
    c = Ic(e, { relative: a });
  return x.useCallback(
    (d) => {
      if (gO(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Pu(u) === Pu(c);
        l(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: s,
        });
      }
    },
    [u, l, c, r, o, n, e, i, a, s]
  );
}
function IO(e, t) {
  t === void 0 && (t = {});
  let n = x.useContext(xO);
  n == null && Be(!1);
  let { basename: r } = OO(Cp.useViewTransitionState),
    o = Ic(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Hi(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = Hi(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Sp(o.pathname, a) != null || Sp(o.pathname, i) != null;
}
let MO = { data: "" },
  _O = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || MO,
  $O = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  NO = /\/\*[^]*?\*\/|  +/g,
  Vy = /\n+/g,
  Nr = (e, t) => {
    let n = "",
      r = "",
      o = "";
    for (let i in e) {
      let a = e[i];
      i[0] == "@"
        ? i[1] == "i"
          ? (n = i + " " + a + ";")
          : (r +=
              i[1] == "f"
                ? Nr(a, i)
                : i + "{" + Nr(a, i[1] == "k" ? "" : t) + "}")
        : typeof a == "object"
        ? (r += Nr(
            a,
            t
              ? t.replace(/([^,])+/g, (s) =>
                  i.replace(/(^:.*)|([^,])+/g, (l) =>
                    /&/.test(l) ? l.replace(/&/g, s) : s ? s + " " + l : l
                  )
                )
              : i
          ))
        : a != null &&
          ((i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += Nr.p ? Nr.p(i, a) : i + ":" + a + ";"));
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r;
  },
  ar = {},
  eS = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + eS(e[n]);
      return t;
    }
    return e;
  },
  LO = (e, t, n, r, o) => {
    let i = eS(e),
      a =
        ar[i] ||
        (ar[i] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(i));
    if (!ar[a]) {
      let l =
        i !== e
          ? e
          : ((u) => {
              let c,
                d,
                f = [{}];
              for (; (c = $O.exec(u.replace(NO, ""))); )
                c[4]
                  ? f.shift()
                  : c[3]
                  ? ((d = c[3].replace(Vy, " ").trim()),
                    f.unshift((f[0][d] = f[0][d] || {})))
                  : (f[0][c[1]] = c[2].replace(Vy, " ").trim());
              return f[0];
            })(e);
      ar[a] = Nr(o ? { ["@keyframes " + a]: l } : l, n ? "" : "." + a);
    }
    let s = n && ar.g ? ar.g : null;
    return (
      n && (ar.g = ar[a]),
      ((l, u, c, d) => {
        d
          ? (u.data = u.data.replace(d, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })(ar[a], t, r, s),
      a
    );
  },
  AO = (e, t, n) =>
    e.reduce((r, o, i) => {
      let a = t[i];
      if (a && a.call) {
        let s = a(n),
          l = (s && s.props && s.props.className) || (/^go/.test(s) && s);
        a = l
          ? "." + l
          : s && typeof s == "object"
          ? s.props
            ? ""
            : Nr(s, "")
          : s === !1
          ? ""
          : s;
      }
      return r + o + (a ?? "");
    }, "");
function Mc(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return LO(
    n.unshift
      ? n.raw
        ? AO(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {})
      : n,
    _O(t.target),
    t.g,
    t.o,
    t.k
  );
}
let tS, Ep, Pp;
Mc.bind({ g: 1 });
let br = Mc.bind({ k: 1 });
function jO(e, t, n, r) {
  (Nr.p = t), (tS = e), (Ep = n), (Pp = r);
}
function uo(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function o(i, a) {
      let s = Object.assign({}, i),
        l = s.className || o.className;
      (n.p = Object.assign({ theme: Ep && Ep() }, s)),
        (n.o = / *go\d+/.test(l)),
        (s.className = Mc.apply(n, r) + (l ? " " + l : "")),
        t && (s.ref = a);
      let u = e;
      return (
        e[0] && ((u = s.as || e), delete s.as), Pp && u[0] && Pp(s), tS(u, s)
      );
    }
    return t ? t(o) : o;
  };
}
var zO = (e) => typeof e == "function",
  Tu = (e, t) => (zO(e) ? e(t) : e),
  DO = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  nS = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  UO = 20,
  Nl = new Map(),
  FO = 1e3,
  Ky = (e) => {
    if (Nl.has(e)) return;
    let t = setTimeout(() => {
      Nl.delete(e), Vo({ type: 4, toastId: e });
    }, FO);
    Nl.set(e, t);
  },
  BO = (e) => {
    let t = Nl.get(e);
    t && clearTimeout(t);
  },
  Rp = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, UO) };
      case 1:
        return (
          t.toast.id && BO(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === t.toast.id ? { ...i, ...t.toast } : i
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((i) => i.id === n.id)
          ? Rp(e, { type: 1, toast: n })
          : Rp(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? Ky(r)
            : e.toasts.forEach((i) => {
                Ky(i.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((i) =>
              i.id === r || r === void 0 ? { ...i, visible: !1 } : i
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((i) => i.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((i) => ({
            ...i,
            pauseDuration: i.pauseDuration + o,
          })),
        };
    }
  },
  Ll = [],
  Al = { toasts: [], pausedAt: void 0 },
  Vo = (e) => {
    (Al = Rp(Al, e)),
      Ll.forEach((t) => {
        t(Al);
      });
  },
  qO = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  WO = (e = {}) => {
    let [t, n] = x.useState(Al);
    x.useEffect(
      () => (
        Ll.push(n),
        () => {
          let o = Ll.indexOf(n);
          o > -1 && Ll.splice(o, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((o) => {
      var i, a;
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration:
          o.duration ||
          ((i = e[o.type]) == null ? void 0 : i.duration) ||
          (e == null ? void 0 : e.duration) ||
          qO[o.type],
        style: {
          ...e.style,
          ...((a = e[o.type]) == null ? void 0 : a.style),
          ...o.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  HO = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || DO(),
  }),
  As = (e) => (t, n) => {
    let r = HO(t, e, n);
    return Vo({ type: 2, toast: r }), r.id;
  },
  nn = (e, t) => As("blank")(e, t);
nn.error = As("error");
nn.success = As("success");
nn.loading = As("loading");
nn.custom = As("custom");
nn.dismiss = (e) => {
  Vo({ type: 3, toastId: e });
};
nn.remove = (e) => Vo({ type: 4, toastId: e });
nn.promise = (e, t, n) => {
  let r = nn.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (o) => (
          nn.success(Tu(t.success, o), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          o
        )
      )
      .catch((o) => {
        nn.error(Tu(t.error, o), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var VO = (e, t) => {
    Vo({ type: 1, toast: { id: e, height: t } });
  },
  KO = () => {
    Vo({ type: 5, time: Date.now() });
  },
  QO = (e) => {
    let { toasts: t, pausedAt: n } = WO(e);
    x.useEffect(() => {
      if (n) return;
      let i = Date.now(),
        a = t.map((s) => {
          if (s.duration === 1 / 0) return;
          let l = (s.duration || 0) + s.pauseDuration - (i - s.createdAt);
          if (l < 0) {
            s.visible && nn.dismiss(s.id);
            return;
          }
          return setTimeout(() => nn.dismiss(s.id), l);
        });
      return () => {
        a.forEach((s) => s && clearTimeout(s));
      };
    }, [t, n]);
    let r = x.useCallback(() => {
        n && Vo({ type: 6, time: Date.now() });
      }, [n]),
      o = x.useCallback(
        (i, a) => {
          let {
              reverseOrder: s = !1,
              gutter: l = 8,
              defaultPosition: u,
            } = a || {},
            c = t.filter(
              (h) => (h.position || u) === (i.position || u) && h.height
            ),
            d = c.findIndex((h) => h.id === i.id),
            f = c.filter((h, p) => p < d && h.visible).length;
          return c
            .filter((h) => h.visible)
            .slice(...(s ? [f + 1] : [0, f]))
            .reduce((h, p) => h + (p.height || 0) + l, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: VO,
        startPause: KO,
        endPause: r,
        calculateOffset: o,
      },
    };
  },
  GO = br`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  XO = br`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  ZO = br`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  YO = uo("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${GO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${XO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ZO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  JO = br`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  eT = uo("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${JO} 1s linear infinite;
`,
  tT = br`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  nT = br`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  rT = uo("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tT} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${nT} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  oT = uo("div")`
  position: absolute;
`,
  iT = uo("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  aT = br`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  sT = uo("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${aT} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  lT = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? x.createElement(sT, null, t)
        : t
      : n === "blank"
      ? null
      : x.createElement(
          iT,
          null,
          x.createElement(eT, { ...r }),
          n !== "loading" &&
            x.createElement(
              oT,
              null,
              n === "error"
                ? x.createElement(YO, { ...r })
                : x.createElement(rT, { ...r })
            )
        );
  },
  uT = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  cT = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  dT = "0%{opacity:0;} 100%{opacity:1;}",
  fT = "0%{opacity:1;} 100%{opacity:0;}",
  pT = uo("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  hT = uo("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  mT = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, o] = nS() ? [dT, fT] : [uT(n), cT(n)];
    return {
      animation: t
        ? `${br(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${br(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  vT = x.memo(({ toast: e, position: t, style: n, children: r }) => {
    let o = e.height
        ? mT(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      i = x.createElement(lT, { toast: e }),
      a = x.createElement(hT, { ...e.ariaProps }, Tu(e.message, e));
    return x.createElement(
      pT,
      { className: e.className, style: { ...o, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: i, message: a })
        : x.createElement(x.Fragment, null, i, a)
    );
  });
jO(x.createElement);
var yT = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o,
  }) => {
    let i = x.useCallback(
      (a) => {
        if (a) {
          let s = () => {
            let l = a.getBoundingClientRect().height;
            r(e, l);
          };
          s(),
            new MutationObserver(s).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return x.createElement("div", { ref: i, className: t, style: n }, o);
  },
  gT = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      o = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: nS() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...o,
    };
  },
  bT = Mc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  pl = 16,
  wT = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: o,
    containerStyle: i,
    containerClassName: a,
  }) => {
    let { toasts: s, handlers: l } = QO(n);
    return x.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: pl,
          left: pl,
          right: pl,
          bottom: pl,
          pointerEvents: "none",
          ...i,
        },
        className: a,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      s.map((u) => {
        let c = u.position || t,
          d = l.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          f = gT(c, d);
        return x.createElement(
          yT,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? bT : "",
            style: f,
          },
          u.type === "custom"
            ? Tu(u.message, u)
            : o
            ? o(u)
            : x.createElement(vT, { toast: u, position: c })
        );
      })
    );
  },
  Ii = nn;
const ST =
    "https://express-freeling-bridge-lwqpwzvcs-maxponmar.vercel.app/api/v1",
  xT = "RetmeePro",
  kT = "RetmeePro - Mejorando el Texto",
  CT = "Maximiliano Ponce Marquez.",
  ET = "maxponce.marquez@outlook.com",
  Mi = {
    apiurl: ST,
    appTitle: xT,
    appHeader: kT,
    developerName: CT,
    developerEmail: ET,
  };
var Op = { exports: {} };
(function (e, t) {
  var n = typeof self < "u" ? self : af,
    r = (function () {
      function i() {
        (this.fetch = !1), (this.DOMException = n.DOMException);
      }
      return (i.prototype = n), new i();
    })();
  (function (i) {
    (function (a) {
      var s = {
        searchParams: "URLSearchParams" in i,
        iterable: "Symbol" in i && "iterator" in Symbol,
        blob:
          "FileReader" in i &&
          "Blob" in i &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in i,
        arrayBuffer: "ArrayBuffer" in i,
      };
      function l(P) {
        return P && DataView.prototype.isPrototypeOf(P);
      }
      if (s.arrayBuffer)
        var u = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          c =
            ArrayBuffer.isView ||
            function (P) {
              return P && u.indexOf(Object.prototype.toString.call(P)) > -1;
            };
      function d(P) {
        if (
          (typeof P != "string" && (P = String(P)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(P))
        )
          throw new TypeError("Invalid character in header field name");
        return P.toLowerCase();
      }
      function f(P) {
        return typeof P != "string" && (P = String(P)), P;
      }
      function h(P) {
        var T = {
          next: function () {
            var A = P.shift();
            return { done: A === void 0, value: A };
          },
        };
        return (
          s.iterable &&
            (T[Symbol.iterator] = function () {
              return T;
            }),
          T
        );
      }
      function p(P) {
        (this.map = {}),
          P instanceof p
            ? P.forEach(function (T, A) {
                this.append(A, T);
              }, this)
            : Array.isArray(P)
            ? P.forEach(function (T) {
                this.append(T[0], T[1]);
              }, this)
            : P &&
              Object.getOwnPropertyNames(P).forEach(function (T) {
                this.append(T, P[T]);
              }, this);
      }
      (p.prototype.append = function (P, T) {
        (P = d(P)), (T = f(T));
        var A = this.map[P];
        this.map[P] = A ? A + ", " + T : T;
      }),
        (p.prototype.delete = function (P) {
          delete this.map[d(P)];
        }),
        (p.prototype.get = function (P) {
          return (P = d(P)), this.has(P) ? this.map[P] : null;
        }),
        (p.prototype.has = function (P) {
          return this.map.hasOwnProperty(d(P));
        }),
        (p.prototype.set = function (P, T) {
          this.map[d(P)] = f(T);
        }),
        (p.prototype.forEach = function (P, T) {
          for (var A in this.map)
            this.map.hasOwnProperty(A) && P.call(T, this.map[A], A, this);
        }),
        (p.prototype.keys = function () {
          var P = [];
          return (
            this.forEach(function (T, A) {
              P.push(A);
            }),
            h(P)
          );
        }),
        (p.prototype.values = function () {
          var P = [];
          return (
            this.forEach(function (T) {
              P.push(T);
            }),
            h(P)
          );
        }),
        (p.prototype.entries = function () {
          var P = [];
          return (
            this.forEach(function (T, A) {
              P.push([A, T]);
            }),
            h(P)
          );
        }),
        s.iterable && (p.prototype[Symbol.iterator] = p.prototype.entries);
      function g(P) {
        if (P.bodyUsed) return Promise.reject(new TypeError("Already read"));
        P.bodyUsed = !0;
      }
      function w(P) {
        return new Promise(function (T, A) {
          (P.onload = function () {
            T(P.result);
          }),
            (P.onerror = function () {
              A(P.error);
            });
        });
      }
      function b(P) {
        var T = new FileReader(),
          A = w(T);
        return T.readAsArrayBuffer(P), A;
      }
      function m(P) {
        var T = new FileReader(),
          A = w(T);
        return T.readAsText(P), A;
      }
      function y(P) {
        for (
          var T = new Uint8Array(P), A = new Array(T.length), U = 0;
          U < T.length;
          U++
        )
          A[U] = String.fromCharCode(T[U]);
        return A.join("");
      }
      function v(P) {
        if (P.slice) return P.slice(0);
        var T = new Uint8Array(P.byteLength);
        return T.set(new Uint8Array(P)), T.buffer;
      }
      function S() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (P) {
            (this._bodyInit = P),
              P
                ? typeof P == "string"
                  ? (this._bodyText = P)
                  : s.blob && Blob.prototype.isPrototypeOf(P)
                  ? (this._bodyBlob = P)
                  : s.formData && FormData.prototype.isPrototypeOf(P)
                  ? (this._bodyFormData = P)
                  : s.searchParams && URLSearchParams.prototype.isPrototypeOf(P)
                  ? (this._bodyText = P.toString())
                  : s.arrayBuffer && s.blob && l(P)
                  ? ((this._bodyArrayBuffer = v(P.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : s.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(P) || c(P))
                  ? (this._bodyArrayBuffer = v(P))
                  : (this._bodyText = P = Object.prototype.toString.call(P))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof P == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : s.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(P) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          s.blob &&
            ((this.blob = function () {
              var P = g(this);
              if (P) return P;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? g(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(b);
            })),
          (this.text = function () {
            var P = g(this);
            if (P) return P;
            if (this._bodyBlob) return m(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(y(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          s.formData &&
            (this.formData = function () {
              return this.text().then(O);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var k = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function C(P) {
        var T = P.toUpperCase();
        return k.indexOf(T) > -1 ? T : P;
      }
      function E(P, T) {
        T = T || {};
        var A = T.body;
        if (P instanceof E) {
          if (P.bodyUsed) throw new TypeError("Already read");
          (this.url = P.url),
            (this.credentials = P.credentials),
            T.headers || (this.headers = new p(P.headers)),
            (this.method = P.method),
            (this.mode = P.mode),
            (this.signal = P.signal),
            !A && P._bodyInit != null && ((A = P._bodyInit), (P.bodyUsed = !0));
        } else this.url = String(P);
        if (
          ((this.credentials =
            T.credentials || this.credentials || "same-origin"),
          (T.headers || !this.headers) && (this.headers = new p(T.headers)),
          (this.method = C(T.method || this.method || "GET")),
          (this.mode = T.mode || this.mode || null),
          (this.signal = T.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && A)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(A);
      }
      E.prototype.clone = function () {
        return new E(this, { body: this._bodyInit });
      };
      function O(P) {
        var T = new FormData();
        return (
          P.trim()
            .split("&")
            .forEach(function (A) {
              if (A) {
                var U = A.split("="),
                  _ = U.shift().replace(/\+/g, " "),
                  j = U.join("=").replace(/\+/g, " ");
                T.append(decodeURIComponent(_), decodeURIComponent(j));
              }
            }),
          T
        );
      }
      function R(P) {
        var T = new p(),
          A = P.replace(/\r?\n[\t ]+/g, " ");
        return (
          A.split(/\r?\n/).forEach(function (U) {
            var _ = U.split(":"),
              j = _.shift().trim();
            if (j) {
              var D = _.join(":").trim();
              T.append(j, D);
            }
          }),
          T
        );
      }
      S.call(E.prototype);
      function M(P, T) {
        T || (T = {}),
          (this.type = "default"),
          (this.status = T.status === void 0 ? 200 : T.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in T ? T.statusText : "OK"),
          (this.headers = new p(T.headers)),
          (this.url = T.url || ""),
          this._initBody(P);
      }
      S.call(M.prototype),
        (M.prototype.clone = function () {
          return new M(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url,
          });
        }),
        (M.error = function () {
          var P = new M(null, { status: 0, statusText: "" });
          return (P.type = "error"), P;
        });
      var N = [301, 302, 303, 307, 308];
      (M.redirect = function (P, T) {
        if (N.indexOf(T) === -1) throw new RangeError("Invalid status code");
        return new M(null, { status: T, headers: { location: P } });
      }),
        (a.DOMException = i.DOMException);
      try {
        new a.DOMException();
      } catch {
        (a.DOMException = function (T, A) {
          (this.message = T), (this.name = A);
          var U = Error(T);
          this.stack = U.stack;
        }),
          (a.DOMException.prototype = Object.create(Error.prototype)),
          (a.DOMException.prototype.constructor = a.DOMException);
      }
      function $(P, T) {
        return new Promise(function (A, U) {
          var _ = new E(P, T);
          if (_.signal && _.signal.aborted)
            return U(new a.DOMException("Aborted", "AbortError"));
          var j = new XMLHttpRequest();
          function D() {
            j.abort();
          }
          (j.onload = function () {
            var q = {
              status: j.status,
              statusText: j.statusText,
              headers: R(j.getAllResponseHeaders() || ""),
            };
            q.url =
              "responseURL" in j
                ? j.responseURL
                : q.headers.get("X-Request-URL");
            var H = "response" in j ? j.response : j.responseText;
            A(new M(H, q));
          }),
            (j.onerror = function () {
              U(new TypeError("Network request failed"));
            }),
            (j.ontimeout = function () {
              U(new TypeError("Network request failed"));
            }),
            (j.onabort = function () {
              U(new a.DOMException("Aborted", "AbortError"));
            }),
            j.open(_.method, _.url, !0),
            _.credentials === "include"
              ? (j.withCredentials = !0)
              : _.credentials === "omit" && (j.withCredentials = !1),
            "responseType" in j && s.blob && (j.responseType = "blob"),
            _.headers.forEach(function (q, H) {
              j.setRequestHeader(H, q);
            }),
            _.signal &&
              (_.signal.addEventListener("abort", D),
              (j.onreadystatechange = function () {
                j.readyState === 4 && _.signal.removeEventListener("abort", D);
              })),
            j.send(typeof _._bodyInit > "u" ? null : _._bodyInit);
        });
      }
      return (
        ($.polyfill = !0),
        i.fetch ||
          ((i.fetch = $), (i.Headers = p), (i.Request = E), (i.Response = M)),
        (a.Headers = p),
        (a.Request = E),
        (a.Response = M),
        (a.fetch = $),
        Object.defineProperty(a, "__esModule", { value: !0 }),
        a
      );
    })({});
  })(r),
    (r.fetch.ponyfill = !0),
    delete r.fetch.polyfill;
  var o = r;
  (t = o.fetch),
    (t.default = o.fetch),
    (t.fetch = o.fetch),
    (t.Headers = o.Headers),
    (t.Request = o.Request),
    (t.Response = o.Response),
    (e.exports = t);
})(Op, Op.exports);
var PT = Op.exports;
function ne(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function s(c) {
      try {
        u(r.next(c));
      } catch (d) {
        a(d);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        a(d);
      }
    }
    function u(c) {
      c.done ? i(c.value) : o(c.value).then(s, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
class Xr {
  constructor(t) {
    this.client = t;
  }
  static flatten(t, n = "") {
    let r = {};
    for (const [o, i] of Object.entries(t)) {
      let a = n ? n + "[" + o + "]" : o;
      Array.isArray(i)
        ? (r = Object.assign(Object.assign({}, r), Xr.flatten(i, a)))
        : (r[a] = i);
    }
    return r;
  }
}
Xr.CHUNK_SIZE = 5 * 1024 * 1024;
class K extends Error {
  constructor(t, n = 0, r = "", o = "") {
    super(t),
      (this.name = "AppwriteException"),
      (this.message = t),
      (this.code = n),
      (this.type = r),
      (this.response = o);
  }
}
class RT {
  constructor() {
    (this.config = {
      endpoint: "https://cloud.appwrite.io/v1",
      endpointRealtime: "",
      project: "",
      jwt: "",
      locale: "",
      session: "",
    }),
      (this.headers = {
        "x-sdk-name": "Web",
        "x-sdk-platform": "client",
        "x-sdk-language": "web",
        "x-sdk-version": "14.0.0",
        "X-Appwrite-Response-Format": "1.5.0",
      }),
      (this.realtime = {
        socket: void 0,
        timeout: void 0,
        url: "",
        channels: new Set(),
        subscriptions: new Map(),
        subscriptionsCounter: 0,
        reconnect: !0,
        reconnectAttempts: 0,
        lastMessage: void 0,
        connect: () => {
          clearTimeout(this.realtime.timeout),
            (this.realtime.timeout =
              window == null
                ? void 0
                : window.setTimeout(() => {
                    this.realtime.createSocket();
                  }, 50));
        },
        getTimeout: () => {
          switch (!0) {
            case this.realtime.reconnectAttempts < 5:
              return 1e3;
            case this.realtime.reconnectAttempts < 15:
              return 5e3;
            case this.realtime.reconnectAttempts < 100:
              return 1e4;
            default:
              return 6e4;
          }
        },
        createSocket: () => {
          var t, n;
          if (this.realtime.channels.size < 1) return;
          const r = new URLSearchParams();
          r.set("project", this.config.project),
            this.realtime.channels.forEach((i) => {
              r.append("channels[]", i);
            });
          const o = this.config.endpointRealtime + "/realtime?" + r.toString();
          (o !== this.realtime.url ||
            !this.realtime.socket ||
            ((t = this.realtime.socket) === null || t === void 0
              ? void 0
              : t.readyState) > WebSocket.OPEN) &&
            (this.realtime.socket &&
              ((n = this.realtime.socket) === null || n === void 0
                ? void 0
                : n.readyState) < WebSocket.CLOSING &&
              ((this.realtime.reconnect = !1), this.realtime.socket.close()),
            (this.realtime.url = o),
            (this.realtime.socket = new WebSocket(o)),
            this.realtime.socket.addEventListener(
              "message",
              this.realtime.onMessage
            ),
            this.realtime.socket.addEventListener("open", (i) => {
              this.realtime.reconnectAttempts = 0;
            }),
            this.realtime.socket.addEventListener("close", (i) => {
              var a, s, l;
              if (
                !this.realtime.reconnect ||
                (((s =
                  (a = this.realtime) === null || a === void 0
                    ? void 0
                    : a.lastMessage) === null || s === void 0
                  ? void 0
                  : s.type) === "error" &&
                  ((l = this.realtime) === null || l === void 0
                    ? void 0
                    : l.lastMessage.data
                  ).code === 1008)
              ) {
                this.realtime.reconnect = !0;
                return;
              }
              const u = this.realtime.getTimeout();
              console.error(
                `Realtime got disconnected. Reconnect will be attempted in ${
                  u / 1e3
                } seconds.`,
                i.reason
              ),
                setTimeout(() => {
                  this.realtime.reconnectAttempts++,
                    this.realtime.createSocket();
                }, u);
            }));
        },
        onMessage: (t) => {
          var n, r;
          try {
            const o = JSON.parse(t.data);
            switch (((this.realtime.lastMessage = o), o.type)) {
              case "connected":
                const i = JSON.parse(
                    (n = window.localStorage.getItem("cookieFallback")) !==
                      null && n !== void 0
                      ? n
                      : "{}"
                  ),
                  a =
                    i == null ? void 0 : i[`a_session_${this.config.project}`],
                  s = o.data;
                a &&
                  !s.user &&
                  ((r = this.realtime.socket) === null ||
                    r === void 0 ||
                    r.send(
                      JSON.stringify({
                        type: "authentication",
                        data: { session: a },
                      })
                    ));
                break;
              case "event":
                let l = o.data;
                if (l != null && l.channels) {
                  if (!l.channels.some((c) => this.realtime.channels.has(c)))
                    return;
                  this.realtime.subscriptions.forEach((c) => {
                    l.channels.some((d) => c.channels.includes(d)) &&
                      setTimeout(() => c.callback(l));
                  });
                }
                break;
              case "error":
                throw o.data;
              default:
                break;
            }
          } catch (o) {
            console.error(o);
          }
        },
        cleanUp: (t) => {
          this.realtime.channels.forEach((n) => {
            t.includes(n) &&
              (Array.from(this.realtime.subscriptions).some(([o, i]) =>
                i.channels.includes(n)
              ) ||
                this.realtime.channels.delete(n));
          });
        },
      });
  }
  setEndpoint(t) {
    return (
      (this.config.endpoint = t),
      (this.config.endpointRealtime =
        this.config.endpointRealtime ||
        this.config.endpoint
          .replace("https://", "wss://")
          .replace("http://", "ws://")),
      this
    );
  }
  setEndpointRealtime(t) {
    return (this.config.endpointRealtime = t), this;
  }
  setProject(t) {
    return (
      (this.headers["X-Appwrite-Project"] = t), (this.config.project = t), this
    );
  }
  setJWT(t) {
    return (this.headers["X-Appwrite-JWT"] = t), (this.config.jwt = t), this;
  }
  setLocale(t) {
    return (
      (this.headers["X-Appwrite-Locale"] = t), (this.config.locale = t), this
    );
  }
  setSession(t) {
    return (
      (this.headers["X-Appwrite-Session"] = t), (this.config.session = t), this
    );
  }
  subscribe(t, n) {
    let r = typeof t == "string" ? [t] : t;
    r.forEach((i) => this.realtime.channels.add(i));
    const o = this.realtime.subscriptionsCounter++;
    return (
      this.realtime.subscriptions.set(o, { channels: r, callback: n }),
      this.realtime.connect(),
      () => {
        this.realtime.subscriptions.delete(o),
          this.realtime.cleanUp(r),
          this.realtime.connect();
      }
    );
  }
  call(t, n, r = {}, o = {}) {
    var i, a;
    return ne(this, void 0, void 0, function* () {
      (t = t.toUpperCase()), (r = Object.assign({}, this.headers, r));
      let s = { method: t, headers: r, credentials: "include" };
      if (
        (typeof window < "u" &&
          window.localStorage &&
          (r["X-Fallback-Cookies"] =
            (i = window.localStorage.getItem("cookieFallback")) !== null &&
            i !== void 0
              ? i
              : ""),
        t === "GET")
      )
        for (const [l, u] of Object.entries(Xr.flatten(o)))
          n.searchParams.append(l, u);
      else
        switch (r["content-type"]) {
          case "application/json":
            s.body = JSON.stringify(o);
            break;
          case "multipart/form-data":
            let l = new FormData();
            for (const u in o)
              Array.isArray(o[u])
                ? o[u].forEach((c) => {
                    l.append(u + "[]", c);
                  })
                : l.append(u, o[u]);
            (s.body = l), delete r["content-type"];
            break;
        }
      try {
        let l = null;
        const u = yield PT.fetch(n.toString(), s);
        if (
          (!((a = u.headers.get("content-type")) === null || a === void 0) &&
          a.includes("application/json")
            ? (l = yield u.json())
            : (l = { message: yield u.text() }),
          400 <= u.status)
        )
          throw new K(
            l == null ? void 0 : l.message,
            u.status,
            l == null ? void 0 : l.type,
            l
          );
        const c = u.headers.get("X-Fallback-Cookies");
        return (
          typeof window < "u" &&
            window.localStorage &&
            c &&
            (window.console.warn(
              "Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."
            ),
            window.localStorage.setItem("cookieFallback", c)),
          l
        );
      } catch (l) {
        throw l instanceof K ? l : new K(l.message);
      }
    });
  }
}
class OT extends Xr {
  constructor(t) {
    super(t);
  }
  get() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  create(t, n, r, o) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "email"');
      if (typeof r > "u") throw new K('Missing required parameter: "password"');
      const i = "/account",
        a = {};
      typeof t < "u" && (a.userId = t),
        typeof n < "u" && (a.email = n),
        typeof r < "u" && (a.password = r),
        typeof o < "u" && (a.name = o);
      const s = new URL(this.client.config.endpoint + i);
      return yield this.client.call(
        "post",
        s,
        { "content-type": "application/json" },
        a
      );
    });
  }
  updateEmail(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "email"');
      if (typeof n > "u") throw new K('Missing required parameter: "password"');
      const r = "/account/email",
        o = {};
      typeof t < "u" && (o.email = t), typeof n < "u" && (o.password = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "patch",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  listIdentities(t) {
    return ne(this, void 0, void 0, function* () {
      const n = "/account/identities",
        r = {};
      typeof t < "u" && (r.queries = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "get",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  deleteIdentity(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "identityId"');
      const n = "/account/identities/{identityId}".replace("{identityId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "delete",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  createJWT() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/jwt",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "post",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  listLogs(t) {
    return ne(this, void 0, void 0, function* () {
      const n = "/account/logs",
        r = {};
      typeof t < "u" && (r.queries = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "get",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateMFA(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "mfa"');
      const n = "/account/mfa",
        r = {};
      typeof t < "u" && (r.mfa = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "patch",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  createMfaAuthenticator(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "type"');
      const n = "/account/mfa/authenticators/{type}".replace("{type}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "post",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateMfaAuthenticator(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "type"');
      if (typeof n > "u") throw new K('Missing required parameter: "otp"');
      const r = "/account/mfa/authenticators/{type}".replace("{type}", t),
        o = {};
      typeof n < "u" && (o.otp = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  deleteMfaAuthenticator(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "type"');
      if (typeof n > "u") throw new K('Missing required parameter: "otp"');
      const r = "/account/mfa/authenticators/{type}".replace("{type}", t),
        o = {};
      typeof n < "u" && (o.otp = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "delete",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createMfaChallenge(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "factor"');
      const n = "/account/mfa/challenge",
        r = {};
      typeof t < "u" && (r.factor = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "post",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateMfaChallenge(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "challengeId"');
      if (typeof n > "u") throw new K('Missing required parameter: "otp"');
      const r = "/account/mfa/challenge",
        o = {};
      typeof t < "u" && (o.challengeId = t), typeof n < "u" && (o.otp = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  listMfaFactors() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/mfa/factors",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  getMfaRecoveryCodes() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/mfa/recovery-codes",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  createMfaRecoveryCodes() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/mfa/recovery-codes",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "post",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  updateMfaRecoveryCodes() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/mfa/recovery-codes",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "patch",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  updateName(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "name"');
      const n = "/account/name",
        r = {};
      typeof t < "u" && (r.name = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "patch",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updatePassword(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "password"');
      const r = "/account/password",
        o = {};
      typeof t < "u" && (o.password = t), typeof n < "u" && (o.oldPassword = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "patch",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  updatePhone(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "phone"');
      if (typeof n > "u") throw new K('Missing required parameter: "password"');
      const r = "/account/phone",
        o = {};
      typeof t < "u" && (o.phone = t), typeof n < "u" && (o.password = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "patch",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  getPrefs() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/prefs",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  updatePrefs(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "prefs"');
      const n = "/account/prefs",
        r = {};
      typeof t < "u" && (r.prefs = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "patch",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  createRecovery(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "email"');
      if (typeof n > "u") throw new K('Missing required parameter: "url"');
      const r = "/account/recovery",
        o = {};
      typeof t < "u" && (o.email = t), typeof n < "u" && (o.url = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "post",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  updateRecovery(t, n, r) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "secret"');
      if (typeof r > "u") throw new K('Missing required parameter: "password"');
      const o = "/account/recovery",
        i = {};
      typeof t < "u" && (i.userId = t),
        typeof n < "u" && (i.secret = n),
        typeof r < "u" && (i.password = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "put",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  listSessions() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/sessions",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  deleteSessions() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/sessions",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "delete",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  createAnonymousSession() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/sessions/anonymous",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "post",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  createEmailPasswordSession(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "email"');
      if (typeof n > "u") throw new K('Missing required parameter: "password"');
      const r = "/account/sessions/email",
        o = {};
      typeof t < "u" && (o.email = t), typeof n < "u" && (o.password = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "post",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  updateMagicURLSession(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "secret"');
      const r = "/account/sessions/magic-url",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createOAuth2Session(t, n, r, o) {
    if (typeof t > "u") throw new K('Missing required parameter: "provider"');
    const i = "/account/sessions/oauth2/{provider}".replace("{provider}", t),
      a = {};
    typeof n < "u" && (a.success = n),
      typeof r < "u" && (a.failure = r),
      typeof o < "u" && (a.scopes = o);
    const s = new URL(this.client.config.endpoint + i);
    a.project = this.client.config.project;
    for (const [l, u] of Object.entries(Xr.flatten(a)))
      s.searchParams.append(l, u);
    if (typeof window < "u" && window != null && window.location)
      window.location.href = s.toString();
    else return s;
  }
  updatePhoneSession(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "secret"');
      const r = "/account/sessions/phone",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createSession(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "secret"');
      const r = "/account/sessions/token",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "post",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  getSession(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "sessionId"');
      const n = "/account/sessions/{sessionId}".replace("{sessionId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "get",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateSession(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "sessionId"');
      const n = "/account/sessions/{sessionId}".replace("{sessionId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "patch",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  deleteSession(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "sessionId"');
      const n = "/account/sessions/{sessionId}".replace("{sessionId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "delete",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateStatus() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/status",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "patch",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  createPushTarget(t, n, r) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "targetId"');
      if (typeof n > "u")
        throw new K('Missing required parameter: "identifier"');
      const o = "/account/targets/push",
        i = {};
      typeof t < "u" && (i.targetId = t),
        typeof n < "u" && (i.identifier = n),
        typeof r < "u" && (i.providerId = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "post",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  updatePushTarget(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "targetId"');
      if (typeof n > "u")
        throw new K('Missing required parameter: "identifier"');
      const r = "/account/targets/{targetId}/push".replace("{targetId}", t),
        o = {};
      typeof n < "u" && (o.identifier = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  deletePushTarget(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "targetId"');
      const n = "/account/targets/{targetId}/push".replace("{targetId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "delete",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  createEmailToken(t, n, r) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "email"');
      const o = "/account/tokens/email",
        i = {};
      typeof t < "u" && (i.userId = t),
        typeof n < "u" && (i.email = n),
        typeof r < "u" && (i.phrase = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "post",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  createMagicURLToken(t, n, r, o) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "email"');
      const i = "/account/tokens/magic-url",
        a = {};
      typeof t < "u" && (a.userId = t),
        typeof n < "u" && (a.email = n),
        typeof r < "u" && (a.url = r),
        typeof o < "u" && (a.phrase = o);
      const s = new URL(this.client.config.endpoint + i);
      return yield this.client.call(
        "post",
        s,
        { "content-type": "application/json" },
        a
      );
    });
  }
  createOAuth2Token(t, n, r, o) {
    if (typeof t > "u") throw new K('Missing required parameter: "provider"');
    const i = "/account/tokens/oauth2/{provider}".replace("{provider}", t),
      a = {};
    typeof n < "u" && (a.success = n),
      typeof r < "u" && (a.failure = r),
      typeof o < "u" && (a.scopes = o);
    const s = new URL(this.client.config.endpoint + i);
    a.project = this.client.config.project;
    for (const [l, u] of Object.entries(Xr.flatten(a)))
      s.searchParams.append(l, u);
    if (typeof window < "u" && window != null && window.location)
      window.location.href = s.toString();
    else return s;
  }
  createPhoneToken(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "phone"');
      const r = "/account/tokens/phone",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.phone = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "post",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createVerification(t) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "url"');
      const n = "/account/verification",
        r = {};
      typeof t < "u" && (r.url = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "post",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateVerification(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "secret"');
      const r = "/account/verification",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createPhoneVerification() {
    return ne(this, void 0, void 0, function* () {
      const t = "/account/verification/phone",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "post",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  updatePhoneVerification(t, n) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new K('Missing required parameter: "userId"');
      if (typeof n > "u") throw new K('Missing required parameter: "secret"');
      const r = "/account/verification/phone",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
}
class TT extends Xr {
  constructor(t) {
    super(t);
  }
  listDocuments(t, n, r) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new K('Missing required parameter: "collectionId"');
      const o = "/databases/{databaseId}/collections/{collectionId}/documents"
          .replace("{databaseId}", t)
          .replace("{collectionId}", n),
        i = {};
      typeof r < "u" && (i.queries = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "get",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  createDocument(t, n, r, o, i) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new K('Missing required parameter: "collectionId"');
      if (typeof r > "u")
        throw new K('Missing required parameter: "documentId"');
      if (typeof o > "u") throw new K('Missing required parameter: "data"');
      const a = "/databases/{databaseId}/collections/{collectionId}/documents"
          .replace("{databaseId}", t)
          .replace("{collectionId}", n),
        s = {};
      typeof r < "u" && (s.documentId = r),
        typeof o < "u" && (s.data = o),
        typeof i < "u" && (s.permissions = i);
      const l = new URL(this.client.config.endpoint + a);
      return yield this.client.call(
        "post",
        l,
        { "content-type": "application/json" },
        s
      );
    });
  }
  getDocument(t, n, r, o) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new K('Missing required parameter: "collectionId"');
      if (typeof r > "u")
        throw new K('Missing required parameter: "documentId"');
      const i =
          "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
            .replace("{databaseId}", t)
            .replace("{collectionId}", n)
            .replace("{documentId}", r),
        a = {};
      typeof o < "u" && (a.queries = o);
      const s = new URL(this.client.config.endpoint + i);
      return yield this.client.call(
        "get",
        s,
        { "content-type": "application/json" },
        a
      );
    });
  }
  updateDocument(t, n, r, o, i) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new K('Missing required parameter: "collectionId"');
      if (typeof r > "u")
        throw new K('Missing required parameter: "documentId"');
      const a =
          "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
            .replace("{databaseId}", t)
            .replace("{collectionId}", n)
            .replace("{documentId}", r),
        s = {};
      typeof o < "u" && (s.data = o), typeof i < "u" && (s.permissions = i);
      const l = new URL(this.client.config.endpoint + a);
      return yield this.client.call(
        "patch",
        l,
        { "content-type": "application/json" },
        s
      );
    });
  }
  deleteDocument(t, n, r) {
    return ne(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new K('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new K('Missing required parameter: "collectionId"');
      if (typeof r > "u")
        throw new K('Missing required parameter: "documentId"');
      const o =
          "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
            .replace("{databaseId}", t)
            .replace("{collectionId}", n)
            .replace("{documentId}", r),
        i = {},
        a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "delete",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
}
class IT {
  static custom(t) {
    return t;
  }
  static unique() {
    return "unique()";
  }
}
var Qy;
(function (e) {
  e.Totp = "totp";
})(Qy || (Qy = {}));
var Gy;
(function (e) {
  (e.Email = "email"),
    (e.Phone = "phone"),
    (e.Totp = "totp"),
    (e.Recoverycode = "recoverycode");
})(Gy || (Gy = {}));
var Xy;
(function (e) {
  (e.Amazon = "amazon"),
    (e.Apple = "apple"),
    (e.Auth0 = "auth0"),
    (e.Authentik = "authentik"),
    (e.Autodesk = "autodesk"),
    (e.Bitbucket = "bitbucket"),
    (e.Bitly = "bitly"),
    (e.Box = "box"),
    (e.Dailymotion = "dailymotion"),
    (e.Discord = "discord"),
    (e.Disqus = "disqus"),
    (e.Dropbox = "dropbox"),
    (e.Etsy = "etsy"),
    (e.Facebook = "facebook"),
    (e.Github = "github"),
    (e.Gitlab = "gitlab"),
    (e.Google = "google"),
    (e.Linkedin = "linkedin"),
    (e.Microsoft = "microsoft"),
    (e.Notion = "notion"),
    (e.Oidc = "oidc"),
    (e.Okta = "okta"),
    (e.Paypal = "paypal"),
    (e.PaypalSandbox = "paypalSandbox"),
    (e.Podio = "podio"),
    (e.Salesforce = "salesforce"),
    (e.Slack = "slack"),
    (e.Spotify = "spotify"),
    (e.Stripe = "stripe"),
    (e.Tradeshift = "tradeshift"),
    (e.TradeshiftBox = "tradeshiftBox"),
    (e.Twitch = "twitch"),
    (e.Wordpress = "wordpress"),
    (e.Yahoo = "yahoo"),
    (e.Yammer = "yammer"),
    (e.Yandex = "yandex"),
    (e.Zoho = "zoho"),
    (e.Zoom = "zoom"),
    (e.Mock = "mock");
})(Xy || (Xy = {}));
var Zy;
(function (e) {
  (e.AvantBrowser = "aa"),
    (e.AndroidWebViewBeta = "an"),
    (e.GoogleChrome = "ch"),
    (e.GoogleChromeIOS = "ci"),
    (e.GoogleChromeMobile = "cm"),
    (e.Chromium = "cr"),
    (e.MozillaFirefox = "ff"),
    (e.Safari = "sf"),
    (e.MobileSafari = "mf"),
    (e.MicrosoftEdge = "ps"),
    (e.MicrosoftEdgeIOS = "oi"),
    (e.OperaMini = "om"),
    (e.Opera = "op"),
    (e.OperaNext = "on");
})(Zy || (Zy = {}));
var Yy;
(function (e) {
  (e.AmericanExpress = "amex"),
    (e.Argencard = "argencard"),
    (e.Cabal = "cabal"),
    (e.Consosud = "censosud"),
    (e.DinersClub = "diners"),
    (e.Discover = "discover"),
    (e.Elo = "elo"),
    (e.Hipercard = "hipercard"),
    (e.JCB = "jcb"),
    (e.Mastercard = "mastercard"),
    (e.Naranja = "naranja"),
    (e.TarjetaShopping = "targeta-shopping"),
    (e.UnionChinaPay = "union-china-pay"),
    (e.Visa = "visa"),
    (e.MIR = "mir"),
    (e.Maestro = "maestro");
})(Yy || (Yy = {}));
var Jy;
(function (e) {
  (e.Afghanistan = "af"),
    (e.Angola = "ao"),
    (e.Albania = "al"),
    (e.Andorra = "ad"),
    (e.UnitedArabEmirates = "ae"),
    (e.Argentina = "ar"),
    (e.Armenia = "am"),
    (e.AntiguaAndBarbuda = "ag"),
    (e.Australia = "au"),
    (e.Austria = "at"),
    (e.Azerbaijan = "az"),
    (e.Burundi = "bi"),
    (e.Belgium = "be"),
    (e.Benin = "bj"),
    (e.BurkinaFaso = "bf"),
    (e.Bangladesh = "bd"),
    (e.Bulgaria = "bg"),
    (e.Bahrain = "bh"),
    (e.Bahamas = "bs"),
    (e.BosniaAndHerzegovina = "ba"),
    (e.Belarus = "by"),
    (e.Belize = "bz"),
    (e.Bolivia = "bo"),
    (e.Brazil = "br"),
    (e.Barbados = "bb"),
    (e.BruneiDarussalam = "bn"),
    (e.Bhutan = "bt"),
    (e.Botswana = "bw"),
    (e.CentralAfricanRepublic = "cf"),
    (e.Canada = "ca"),
    (e.Switzerland = "ch"),
    (e.Chile = "cl"),
    (e.China = "cn"),
    (e.CoteDIvoire = "ci"),
    (e.Cameroon = "cm"),
    (e.DemocraticRepublicOfTheCongo = "cd"),
    (e.RepublicOfTheCongo = "cg"),
    (e.Colombia = "co"),
    (e.Comoros = "km"),
    (e.CapeVerde = "cv"),
    (e.CostaRica = "cr"),
    (e.Cuba = "cu"),
    (e.Cyprus = "cy"),
    (e.CzechRepublic = "cz"),
    (e.Germany = "de"),
    (e.Djibouti = "dj"),
    (e.Dominica = "dm"),
    (e.Denmark = "dk"),
    (e.DominicanRepublic = "do"),
    (e.Algeria = "dz"),
    (e.Ecuador = "ec"),
    (e.Egypt = "eg"),
    (e.Eritrea = "er"),
    (e.Spain = "es"),
    (e.Estonia = "ee"),
    (e.Ethiopia = "et"),
    (e.Finland = "fi"),
    (e.Fiji = "fj"),
    (e.France = "fr"),
    (e.MicronesiaFederatedStatesOf = "fm"),
    (e.Gabon = "ga"),
    (e.UnitedKingdom = "gb"),
    (e.Georgia = "ge"),
    (e.Ghana = "gh"),
    (e.Guinea = "gn"),
    (e.Gambia = "gm"),
    (e.GuineaBissau = "gw"),
    (e.EquatorialGuinea = "gq"),
    (e.Greece = "gr"),
    (e.Grenada = "gd"),
    (e.Guatemala = "gt"),
    (e.Guyana = "gy"),
    (e.Honduras = "hn"),
    (e.Croatia = "hr"),
    (e.Haiti = "ht"),
    (e.Hungary = "hu"),
    (e.Indonesia = "id"),
    (e.India = "in"),
    (e.Ireland = "ie"),
    (e.IranIslamicRepublicOf = "ir"),
    (e.Iraq = "iq"),
    (e.Iceland = "is"),
    (e.Israel = "il"),
    (e.Italy = "it"),
    (e.Jamaica = "jm"),
    (e.Jordan = "jo"),
    (e.Japan = "jp"),
    (e.Kazakhstan = "kz"),
    (e.Kenya = "ke"),
    (e.Kyrgyzstan = "kg"),
    (e.Cambodia = "kh"),
    (e.Kiribati = "ki"),
    (e.SaintKittsAndNevis = "kn"),
    (e.SouthKorea = "kr"),
    (e.Kuwait = "kw"),
    (e.LaoPeopleSDemocraticRepublic = "la"),
    (e.Lebanon = "lb"),
    (e.Liberia = "lr"),
    (e.Libya = "ly"),
    (e.SaintLucia = "lc"),
    (e.Liechtenstein = "li"),
    (e.SriLanka = "lk"),
    (e.Lesotho = "ls"),
    (e.Lithuania = "lt"),
    (e.Luxembourg = "lu"),
    (e.Latvia = "lv"),
    (e.Morocco = "ma"),
    (e.Monaco = "mc"),
    (e.Moldova = "md"),
    (e.Madagascar = "mg"),
    (e.Maldives = "mv"),
    (e.Mexico = "mx"),
    (e.MarshallIslands = "mh"),
    (e.NorthMacedonia = "mk"),
    (e.Mali = "ml"),
    (e.Malta = "mt"),
    (e.Myanmar = "mm"),
    (e.Montenegro = "me"),
    (e.Mongolia = "mn"),
    (e.Mozambique = "mz"),
    (e.Mauritania = "mr"),
    (e.Mauritius = "mu"),
    (e.Malawi = "mw"),
    (e.Malaysia = "my"),
    (e.Namibia = "na"),
    (e.Niger = "ne"),
    (e.Nigeria = "ng"),
    (e.Nicaragua = "ni"),
    (e.Netherlands = "nl"),
    (e.Norway = "no"),
    (e.Nepal = "np"),
    (e.Nauru = "nr"),
    (e.NewZealand = "nz"),
    (e.Oman = "om"),
    (e.Pakistan = "pk"),
    (e.Panama = "pa"),
    (e.Peru = "pe"),
    (e.Philippines = "ph"),
    (e.Palau = "pw"),
    (e.PapuaNewGuinea = "pg"),
    (e.Poland = "pl"),
    (e.NorthKorea = "kp"),
    (e.Portugal = "pt"),
    (e.Paraguay = "py"),
    (e.Qatar = "qa"),
    (e.Romania = "ro"),
    (e.Russia = "ru"),
    (e.Rwanda = "rw"),
    (e.SaudiArabia = "sa"),
    (e.Sudan = "sd"),
    (e.Senegal = "sn"),
    (e.Singapore = "sg"),
    (e.SolomonIslands = "sb"),
    (e.SierraLeone = "sl"),
    (e.ElSalvador = "sv"),
    (e.SanMarino = "sm"),
    (e.Somalia = "so"),
    (e.Serbia = "rs"),
    (e.SouthSudan = "ss"),
    (e.SaoTomeAndPrincipe = "st"),
    (e.Suriname = "sr"),
    (e.Slovakia = "sk"),
    (e.Slovenia = "si"),
    (e.Sweden = "se"),
    (e.Eswatini = "sz"),
    (e.Seychelles = "sc"),
    (e.Syria = "sy"),
    (e.Chad = "td"),
    (e.Togo = "tg"),
    (e.Thailand = "th"),
    (e.Tajikistan = "tj"),
    (e.Turkmenistan = "tm"),
    (e.TimorLeste = "tl"),
    (e.Tonga = "to"),
    (e.TrinidadAndTobago = "tt"),
    (e.Tunisia = "tn"),
    (e.Turkey = "tr"),
    (e.Tuvalu = "tv"),
    (e.Tanzania = "tz"),
    (e.Uganda = "ug"),
    (e.Ukraine = "ua"),
    (e.Uruguay = "uy"),
    (e.UnitedStates = "us"),
    (e.Uzbekistan = "uz"),
    (e.VaticanCity = "va"),
    (e.SaintVincentAndTheGrenadines = "vc"),
    (e.Venezuela = "ve"),
    (e.Vietnam = "vn"),
    (e.Vanuatu = "vu"),
    (e.Samoa = "ws"),
    (e.Yemen = "ye"),
    (e.SouthAfrica = "za"),
    (e.Zambia = "zm"),
    (e.Zimbabwe = "zw");
})(Jy || (Jy = {}));
var e0;
(function (e) {
  (e.GET = "GET"),
    (e.POST = "POST"),
    (e.PUT = "PUT"),
    (e.PATCH = "PATCH"),
    (e.DELETE = "DELETE"),
    (e.OPTIONS = "OPTIONS");
})(e0 || (e0 = {}));
var t0;
(function (e) {
  (e.Center = "center"),
    (e.Topleft = "top-left"),
    (e.Top = "top"),
    (e.Topright = "top-right"),
    (e.Left = "left"),
    (e.Right = "right"),
    (e.Bottomleft = "bottom-left"),
    (e.Bottom = "bottom"),
    (e.Bottomright = "bottom-right");
})(t0 || (t0 = {}));
var n0;
(function (e) {
  (e.Jpg = "jpg"),
    (e.Jpeg = "jpeg"),
    (e.Gif = "gif"),
    (e.Png = "png"),
    (e.Webp = "webp");
})(n0 || (n0 = {}));
const pm = new RT();
pm.setEndpoint("https://backend.vntres.com:444/v1").setProject(
  "65f3a32050db0b8cbee5"
);
const hl = new OT(pm);
new TT(pm, "65f3a533889a5597444f");
const rS = x.createContext(),
  MT = ({ children: e }) => {
    const [t, n] = x.useState(!0),
      [r, o] = x.useState(null),
      i = async (c) => {
        n(!0);
        try {
          let d = await hl.createEmailPasswordSession(c.email, c.password),
            f = await hl.get();
          console.log(f),
            o(f),
            window.localStorage.setItem("user", JSON.stringify(f));
        } catch (d) {
          (d == null ? void 0 : d.type) === "user_invalid_credentials" &&
            Ii.error(
              "Credenciales no validas, verifique su usuario y contraseña"
            ),
            (d == null ? void 0 : d.type) === "general_argument_invalid" &&
              Ii.error("Verifique su usuario y contraseña"),
            console.log(d);
        }
        n(!1);
      },
      a = async () => {
        n(!0);
        try {
          o(null),
            window.localStorage.setItem("user", null),
            await hl.deleteSession("current");
        } catch (c) {
          console.error(c);
        }
        n(!1);
      },
      s = async (c, d) => {
        hl.create(IT.unique(), c, d);
      },
      l = async () => {
        try {
          const c = window.localStorage.getItem("user");
          c ? (o(JSON.parse(c)), console.log(c)) : o(null);
        } catch (c) {
          console.error(c);
        }
        n(!1);
      },
      u = {
        user: r,
        loginUser: i,
        logoutUser: a,
        registerUser: s,
        checkUserStatus: l,
      };
    return (
      x.useEffect(() => {
        l();
      }, []),
      I(rS.Provider, {
        value: u,
        children: t
          ? B("div", {
              role: "status",
              className: "h-screen w-screen flex items-center justify-center",
              children: [
                B("svg", {
                  "aria-hidden": "true",
                  className:
                    "w-16 h-16 text-gray-200 animate-spin fill-blue-600",
                  viewBox: "0 0 100 101",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    I("path", {
                      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                      fill: "currentColor",
                    }),
                    I("path", {
                      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                      fill: "currentFill",
                    }),
                  ],
                }),
                I("span", { className: "sr-only", children: "Cargando..." }),
              ],
            })
          : e,
      })
    );
  },
  na = () => x.useContext(rS);
function _T() {
  const { user: e, logoutUser: t } = na();
  return B("header", {
    className:
      " z-[1000] top-0 left-[60px] fixed w-[calc(100vw-61px)] bg-white font-bold text-black text-center text-xl py-1 flex justify-between items-center h-[60px]",
    children: [
      B(Vi, {
        to: "/",
        className:
          "translate-x-[-60px] sm:translate-x-0 px-5 flex items-center justify-center min-w-[380px] text-sm md:min-w-[400px] md:text-lg",
        children: [
          I("img", {
            className: "w-8 h-8",
            src: "retmeepro.svg",
            alt: "Continental Logo",
          }),
          I("p", { className: "ml-1", children: Mi.appHeader }),
        ],
      }),
      e
        ? B("div", {
            className: "flex items-center justify-center",
            children: [
              I("span", {
                className:
                  "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded",
                children: e.email,
              }),
              B("button", {
                type: "button",
                className:
                  "focus:outline-none text-black  hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-1 inline-flex items-center justify-center gap-2 mr-2",
                onClick: t,
                children: [
                  I("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "w-6 h-6",
                    children: I("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15",
                    }),
                  }),
                  I("p", { children: "Cerrar Sesión" }),
                ],
              }),
            ],
          })
        : null,
    ],
  });
}
var oS = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  r0 = at.createContext && at.createContext(oS),
  Zr =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Zr =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        Zr.apply(this, arguments)
      );
    },
  $T =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function iS(e) {
  return (
    e &&
    e.map(function (t, n) {
      return at.createElement(t.tag, Zr({ key: n }, t.attr), iS(t.child));
    })
  );
}
function co(e) {
  return function (t) {
    return at.createElement(NT, Zr({ attr: Zr({}, e.attr) }, t), iS(e.child));
  };
}
function NT(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      a = $T(e, ["attr", "size", "title"]),
      s = o || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      at.createElement(
        "svg",
        Zr(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: l,
            style: Zr(Zr({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && at.createElement("title", null, i),
        e.children
      )
    );
  };
  return r0 !== void 0
    ? at.createElement(r0.Consumer, null, function (n) {
        return t(n);
      })
    : t(oS);
}
function LT(e) {
  return co({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19 2.01H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.998 5 19.815 5 19.01c0-.101.009-.191.024-.273.112-.575.583-.717.987-.727H20c.018 0 .031-.009.049-.01H21V4.01c0-1.103-.897-2-2-2zm0 14H5v-11c0-.806.55-.988 1-1h7v7l2-1 2 1v-7h2v12z",
        },
      },
    ],
  })(e);
}
function AT(e) {
  return co({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 6a3.939 3.939 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9.208 9.208 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793.15-.15.339-.3.535-.458.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6zm-1 10h2v2h-2z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z",
        },
      },
    ],
  })(e);
}
function jl(e) {
  return co({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { d: "m13 16 5-4-5-4v3H4v2h9z" } },
      {
        tag: "path",
        attr: {
          d: "M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z",
        },
      },
    ],
  })(e);
}
function aS(e) {
  return co({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { d: "M16 13v-2H7V8l-5 4 5 4v-3z" } },
      {
        tag: "path",
        attr: {
          d: "M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z",
        },
      },
    ],
  })(e);
}
function jT(e) {
  return co({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z",
        },
      },
    ],
  })(e);
}
function sS(e) {
  return co({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z",
        },
      },
    ],
  })(e);
}
function zT(e) {
  return co({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
        },
      },
    ],
  })(e);
}
function DT(e) {
  return co({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z",
        },
      },
    ],
  })(e);
}
var UT =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
      return e;
    },
  FT = Object.defineProperty,
  BT = Object.defineProperties,
  qT = Object.getOwnPropertyDescriptors,
  o0 = Object.getOwnPropertySymbols,
  WT = Object.prototype.hasOwnProperty,
  HT = Object.prototype.propertyIsEnumerable,
  i0 = function (e, t, n) {
    return t in e
      ? FT(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  lr = function (e, t) {
    for (var n in t || (t = {})) WT.call(t, n) && i0(e, n, t[n]);
    if (o0)
      for (var r = 0, o = o0(t); r < o.length; r++) {
        var n = o[r];
        HT.call(t, n) && i0(e, n, t[n]);
      }
    return e;
  },
  zl = function (e, t) {
    return BT(e, qT(t));
  };
function a0(e, t, n, r) {
  var o = x.useMemo(
      function () {
        return {
          queryArgs: e,
          serialized:
            typeof e == "object"
              ? t({ queryArgs: e, endpointDefinition: n, endpointName: r })
              : e,
        };
      },
      [e, t, n, r]
    ),
    i = x.useRef(o);
  return (
    x.useEffect(
      function () {
        i.current.serialized !== o.serialized && (i.current = o);
      },
      [o]
    ),
    i.current.serialized === o.serialized ? i.current.queryArgs : e
  );
}
var Hd = Symbol();
function Vd(e) {
  var t = x.useRef(e);
  return (
    x.useEffect(
      function () {
        Qr(t.current, e) || (t.current = e);
      },
      [e]
    ),
    Qr(t.current, e) ? t.current : e
  );
}
var ml = WeakMap ? new WeakMap() : void 0,
  VT = function (e) {
    var t = e.endpointName,
      n = e.queryArgs,
      r = "",
      o = ml == null ? void 0 : ml.get(n);
    if (typeof o == "string") r = o;
    else {
      var i = JSON.stringify(n, function (a, s) {
        return zn(s)
          ? Object.keys(s)
              .sort()
              .reduce(function (l, u) {
                return (l[u] = s[u]), l;
              }, {})
          : s;
      });
      zn(n) && (ml == null || ml.set(n, i)), (r = i);
    }
    return t + "(" + r + ")";
  },
  KT =
    typeof window < "u" && window.document && window.document.createElement
      ? x.useLayoutEffect
      : x.useEffect,
  QT = function (e) {
    return e;
  },
  GT = function (e) {
    return e.isUninitialized
      ? zl(lr({}, e), {
          isUninitialized: !1,
          isFetching: !0,
          isLoading: e.data === void 0,
          status: _e.pending,
        })
      : e;
  };
function XT(e) {
  var t = e.api,
    n = e.moduleOptions,
    r = n.batch,
    o = n.useDispatch,
    i = n.useSelector,
    a = n.useStore,
    s = n.unstable__sideEffectsInRender,
    l = e.serializeQueryArgs,
    u = e.context,
    c = s
      ? function (g) {
          return g();
        }
      : x.useEffect;
  return { buildQueryHooks: h, buildMutationHook: p, usePrefetch: f };
  function d(g, w, b) {
    if (w != null && w.endpointName && g.isUninitialized) {
      var m = w.endpointName,
        y = u.endpointDefinitions[m];
      l({
        queryArgs: w.originalArgs,
        endpointDefinition: y,
        endpointName: m,
      }) === l({ queryArgs: b, endpointDefinition: y, endpointName: m }) &&
        (w = void 0);
    }
    var v = g.isSuccess ? g.data : w == null ? void 0 : w.data;
    v === void 0 && (v = g.data);
    var S = v !== void 0,
      k = g.isLoading,
      C = !S && k,
      E = g.isSuccess || (k && S);
    return zl(lr({}, g), {
      data: v,
      currentData: g.data,
      isFetching: k,
      isLoading: C,
      isSuccess: E,
    });
  }
  function f(g, w) {
    var b = o(),
      m = Vd(w);
    return x.useCallback(
      function (y, v) {
        return b(t.util.prefetch(g, y, lr(lr({}, m), v)));
      },
      [g, b, m]
    );
  }
  function h(g) {
    var w = function (y, v) {
        var S = v === void 0 ? {} : v,
          k = S.refetchOnReconnect,
          C = S.refetchOnFocus,
          E = S.refetchOnMountOrArgChange,
          O = S.skip,
          R = O === void 0 ? !1 : O,
          M = S.pollingInterval,
          N = M === void 0 ? 0 : M,
          $ = t.endpoints[g].initiate,
          P = o(),
          T = a0(R ? dr : y, VT, u.endpointDefinitions[g], g),
          A = Vd({
            refetchOnReconnect: k,
            refetchOnFocus: C,
            pollingInterval: N,
          }),
          U = x.useRef(!1),
          _ = x.useRef(),
          j = _.current || {},
          D = j.queryCacheKey,
          q = j.requestId,
          H = !1;
        if (D && q) {
          var G = P(
            t.internalActions.internal_probeSubscription({
              queryCacheKey: D,
              requestId: q,
            })
          );
          H = !!G;
        }
        var Q = !H && U.current;
        return (
          c(function () {
            U.current = H;
          }),
          c(
            function () {
              Q && (_.current = void 0);
            },
            [Q]
          ),
          c(
            function () {
              var V,
                Y = _.current;
              if ((typeof process < "u", T === dr)) {
                Y == null || Y.unsubscribe(), (_.current = void 0);
                return;
              }
              var re = (V = _.current) == null ? void 0 : V.subscriptionOptions;
              if (!Y || Y.arg !== T) {
                Y == null || Y.unsubscribe();
                var Ce = P($(T, { subscriptionOptions: A, forceRefetch: E }));
                _.current = Ce;
              } else A !== re && Y.updateSubscriptionOptions(A);
            },
            [P, $, E, T, A, Q]
          ),
          x.useEffect(function () {
            return function () {
              var V;
              (V = _.current) == null || V.unsubscribe(), (_.current = void 0);
            };
          }, []),
          x.useMemo(function () {
            return {
              refetch: function () {
                var V;
                if (!_.current)
                  throw new Error(
                    "Cannot refetch a query that has not been started yet."
                  );
                return (V = _.current) == null ? void 0 : V.refetch();
              },
            };
          }, [])
        );
      },
      b = function (y) {
        var v = y === void 0 ? {} : y,
          S = v.refetchOnReconnect,
          k = v.refetchOnFocus,
          C = v.pollingInterval,
          E = C === void 0 ? 0 : C,
          O = t.endpoints[g].initiate,
          R = o(),
          M = x.useState(Hd),
          N = M[0],
          $ = M[1],
          P = x.useRef(),
          T = Vd({
            refetchOnReconnect: S,
            refetchOnFocus: k,
            pollingInterval: E,
          });
        c(
          function () {
            var _,
              j,
              D = (_ = P.current) == null ? void 0 : _.subscriptionOptions;
            T !== D &&
              ((j = P.current) == null || j.updateSubscriptionOptions(T));
          },
          [T]
        );
        var A = x.useRef(T);
        c(
          function () {
            A.current = T;
          },
          [T]
        );
        var U = x.useCallback(
          function (_, j) {
            j === void 0 && (j = !1);
            var D;
            return (
              r(function () {
                var q;
                (q = P.current) == null || q.unsubscribe(),
                  (P.current = D =
                    R(
                      O(_, { subscriptionOptions: A.current, forceRefetch: !j })
                    )),
                  $(_);
              }),
              D
            );
          },
          [R, O]
        );
        return (
          x.useEffect(function () {
            return function () {
              var _;
              (_ = P == null ? void 0 : P.current) == null || _.unsubscribe();
            };
          }, []),
          x.useEffect(
            function () {
              N !== Hd && !P.current && U(N, !0);
            },
            [N, U]
          ),
          x.useMemo(
            function () {
              return [U, N];
            },
            [U, N]
          )
        );
      },
      m = function (y, v) {
        var S = v === void 0 ? {} : v,
          k = S.skip,
          C = k === void 0 ? !1 : k,
          E = S.selectFromResult,
          O = t.endpoints[g].select,
          R = a0(C ? dr : y, l, u.endpointDefinitions[g], g),
          M = x.useRef(),
          N = x.useMemo(
            function () {
              return Io(
                [
                  O(R),
                  function (U, _) {
                    return _;
                  },
                  function (U) {
                    return R;
                  },
                ],
                d
              );
            },
            [O, R]
          ),
          $ = x.useMemo(
            function () {
              return E ? Io([N], E) : N;
            },
            [N, E]
          ),
          P = i(function (U) {
            return $(U, M.current);
          }, Qr),
          T = a(),
          A = N(T.getState(), M.current);
        return (
          KT(
            function () {
              M.current = A;
            },
            [A]
          ),
          P
        );
      };
    return {
      useQueryState: m,
      useQuerySubscription: w,
      useLazyQuerySubscription: b,
      useLazyQuery: function (y) {
        var v = b(y),
          S = v[0],
          k = v[1],
          C = m(k, zl(lr({}, y), { skip: k === Hd })),
          E = x.useMemo(
            function () {
              return { lastArg: k };
            },
            [k]
          );
        return x.useMemo(
          function () {
            return [S, C, E];
          },
          [S, C, E]
        );
      },
      useQuery: function (y, v) {
        var S = w(y, v),
          k = m(
            y,
            lr(
              {
                selectFromResult:
                  y === dr || (v != null && v.skip) ? void 0 : GT,
              },
              v
            )
          ),
          C = k.data,
          E = k.status,
          O = k.isLoading,
          R = k.isSuccess,
          M = k.isError,
          N = k.error;
        return (
          x.useDebugValue({
            data: C,
            status: E,
            isLoading: O,
            isSuccess: R,
            isError: M,
            error: N,
          }),
          x.useMemo(
            function () {
              return lr(lr({}, k), S);
            },
            [k, S]
          )
        );
      },
    };
  }
  function p(g) {
    return function (w) {
      var b = w === void 0 ? {} : w,
        m = b.selectFromResult,
        y = m === void 0 ? QT : m,
        v = b.fixedCacheKey,
        S = t.endpoints[g],
        k = S.select,
        C = S.initiate,
        E = o(),
        O = x.useState(),
        R = O[0],
        M = O[1];
      x.useEffect(
        function () {
          return function () {
            (R != null && R.arg.fixedCacheKey) || R == null || R.reset();
          };
        },
        [R]
      );
      var N = x.useCallback(
          function (Y) {
            var re = E(C(Y, { fixedCacheKey: v }));
            return M(re), re;
          },
          [E, C, v]
        ),
        $ = (R || {}).requestId,
        P = x.useMemo(
          function () {
            return Io(
              [
                k({
                  fixedCacheKey: v,
                  requestId: R == null ? void 0 : R.requestId,
                }),
              ],
              y
            );
          },
          [k, R, y, v]
        ),
        T = i(P, Qr),
        A = v == null ? (R == null ? void 0 : R.arg.originalArgs) : void 0,
        U = x.useCallback(
          function () {
            r(function () {
              R && M(void 0),
                v &&
                  E(
                    t.internalActions.removeMutationResult({
                      requestId: $,
                      fixedCacheKey: v,
                    })
                  );
            });
          },
          [E, v, R, $]
        ),
        _ = T.endpointName,
        j = T.data,
        D = T.status,
        q = T.isLoading,
        H = T.isSuccess,
        G = T.isError,
        Q = T.error;
      x.useDebugValue({
        endpointName: _,
        data: j,
        status: D,
        isLoading: q,
        isSuccess: H,
        isError: G,
        error: Q,
      });
      var V = x.useMemo(
        function () {
          return zl(lr({}, T), { originalArgs: A, reset: U });
        },
        [T, A, U]
      );
      return x.useMemo(
        function () {
          return [N, V];
        },
        [N, V]
      );
    };
  }
}
var Iu;
(function (e) {
  (e.query = "query"), (e.mutation = "mutation");
})(Iu || (Iu = {}));
function ZT(e) {
  return e.type === Iu.query;
}
function YT(e) {
  return e.type === Iu.mutation;
}
function Kd(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function vl(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  Object.assign.apply(Object, UT([e], t));
}
var JT = Symbol(),
  e5 = function (e) {
    var t = e === void 0 ? {} : e,
      n = t.batch,
      r = n === void 0 ? Ji.unstable_batchedUpdates : n,
      o = t.useDispatch,
      i = o === void 0 ? Ww : o,
      a = t.useSelector,
      s = a === void 0 ? $w : a,
      l = t.useStore,
      u = l === void 0 ? lm : l,
      c = t.unstable__sideEffectsInRender,
      d = c === void 0 ? !1 : c;
    return {
      name: JT,
      init: function (f, h, p) {
        var g = h.serializeQueryArgs,
          w = f,
          b = XT({
            api: f,
            moduleOptions: {
              batch: r,
              useDispatch: i,
              useSelector: s,
              useStore: u,
              unstable__sideEffectsInRender: d,
            },
            serializeQueryArgs: g,
            context: p,
          }),
          m = b.buildQueryHooks,
          y = b.buildMutationHook,
          v = b.usePrefetch;
        return (
          vl(w, { usePrefetch: v }),
          vl(p, { batch: r }),
          {
            injectEndpoint: function (S, k) {
              if (ZT(k)) {
                var C = m(S),
                  E = C.useQuery,
                  O = C.useLazyQuery,
                  R = C.useLazyQuerySubscription,
                  M = C.useQueryState,
                  N = C.useQuerySubscription;
                vl(w.endpoints[S], {
                  useQuery: E,
                  useLazyQuery: O,
                  useLazyQuerySubscription: R,
                  useQueryState: M,
                  useQuerySubscription: N,
                }),
                  (f["use" + Kd(S) + "Query"] = E),
                  (f["useLazy" + Kd(S) + "Query"] = O);
              } else if (YT(k)) {
                var $ = y(S);
                vl(w.endpoints[S], { useMutation: $ }),
                  (f["use" + Kd(S) + "Mutation"] = $);
              }
            },
          }
        );
      },
    };
  },
  t5 = ah(sh(), e5());
const lS = t5({
    reducerPath: "default",
    baseQuery: v1({ baseUrl: Mi.apiurl }),
    tagTypes: ["default"],
    endpoints: (e) => ({
      getFreelingResults: e.query({
        query: (t) => ({ url: "freeling/analyze", method: "POST", body: t }),
        invalidatesTags: ["default"],
      }),
      exampleQuery: e.query({
        query: ({ token: t }) => ({
          url: "default",
          headers: { Authorization: t ? "Bearer " + t : "" },
        }),
        invalidatesTags: ["default"],
      }),
      exampleMutation: e.mutation({
        query: ({ body: t, token: n }) => ({
          url: "default",
          method: "POST",
          headers: { Authorization: n ? "Bearer " + n : "" },
          body: t,
        }),
        invalidatesTags: ["default"],
      }),
    }),
  }),
  { useLazyGetFreelingResultsQuery: uS } = lS;
function n5({ data: e }) {
  return Object.keys(e).length === 0
    ? I("div", { children: "No hay datos disponibles." })
    : B("div", {
        className: "bg-gray-2 mt-4",
        children: [
          I("h2", {
            className: "font-bold text-xl",
            children: "Palabras base y sus variaciones:",
          }),
          I("ul", {
            children: Object.entries(e).map(([t, n]) =>
              B(
                "li",
                {
                  children: [
                    B("strong", { children: [t, ":"] }),
                    " ",
                    n == null ? void 0 : n.join(", "),
                  ],
                },
                t
              )
            ),
          }),
        ],
      });
}
const r5 = () => {
    var s, l, u, c;
    const [e, t] = x.useState(""),
      [n, r] = uS(),
      o = (d) => {
        t(d.target.value);
      },
      i = () => {
        if (e === "") {
          Ii.error("El texto no puede estar vacío");
          return;
        }
        n({ text: e });
      },
      a = () => {
        var g;
        const d = (g = r.data) == null ? void 0 : g.result,
          f = new Blob([d], { type: "text/plain" }),
          h = URL.createObjectURL(f),
          p = document.createElement("a");
        (p.href = h),
          (p.download = "freeling.txt"),
          document.body.appendChild(p),
          p.click(),
          document.body.removeChild(p),
          URL.revokeObjectURL(h);
      };
    return B("div", {
      className: "mx-auto",
      children: [
        B("form", {
          className: "max-w-xl mx-auto",
          onSubmit: (d) => {
            d.preventDefault(), i();
          },
          children: [
            I("label", {
              className: "block mb-2 text-sm font-medium text-gray-900",
              children: "Texto",
            }),
            I("textarea", {
              className:
                "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
              placeholder: "Coloque un texto para procesar con FreeLing",
              rows: "4",
              value: e,
              onChange: o,
            }),
            I("button", {
              type: "submit",
              className:
                "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 focus:outline-none",
              children: "Procesar con Freeling",
            }),
          ],
        }),
        I("div", {
          className:
            "max-w-[800px] mx-auto flex items-center justify-center  border border-gray-200 rounded-lg bg-gray-50 ",
          children: r.isError
            ? B("div", {
                className:
                  "flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50",
                role: "alert",
                children: [
                  I("svg", {
                    className: "flex-shrink-0 inline w-4 h-4 me-3",
                    "aria-hidden": "true",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: I("path", {
                      d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z",
                    }),
                  }),
                  I("span", { className: "sr-only", children: "Info" }),
                  B("div", {
                    children: [
                      I("span", {
                        className: "font-medium",
                        children: "Error!",
                      }),
                      " Ocurrió un error al procesar el texto.",
                    ],
                  }),
                ],
              })
            : r.isFetching
            ? I("div", {
                className:
                  "px-3 py-4 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse",
                children: "Procesando...",
              })
            : r.data
            ? B("div", {
                className: "p-5",
                children: [
                  I("h2", {
                    className: "font-bold text-xl",
                    children: "Resultado Freeling:",
                  }),
                  I("div", {
                    children:
                      (u =
                        (l = (s = r.data) == null ? void 0 : s.result) == null
                          ? void 0
                          : l.split(`
`)) == null
                        ? void 0
                        : u.map((d, f) => I("p", { children: d }, f)),
                  }),
                  B("button", {
                    type: "button",
                    className:
                      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 inline-flex justify-center items-center gap-1",
                    onClick: a,
                    children: [
                      I("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor",
                        className: "w-5 h-5",
                        children: I("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
                        }),
                      }),
                      I("p", { children: "Descargar resultados" }),
                    ],
                  }),
                  I(n5, { data: (c = r.data) == null ? void 0 : c.wordGroups }),
                ],
              })
            : null,
        }),
      ],
    });
  },
  o5 = "assets/retmeepro-fa803cd8.png";
function cS() {
  const { user: e, loginUser: t } = na(),
    n = x.useRef(null);
  return B("section", {
    className:
      "bg-stone-200 relative flex flex-col justify-center items-center",
    children: [
      e ? null : I(ws, { to: "/" }),
      B("div", {
        className:
          "flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0",
        children: [
          B("a", {
            href: "#",
            className:
              "flex items-center mb-6 text-2xl font-semibold text-gray-900",
            children: [
              I("img", {
                className: "w-8 h-8 mr-2",
                src: "retmeepro.svg",
                alt: "logo",
              }),
              "RetmeePro",
            ],
          }),
          I("div", {
            className:
              "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0",
            children: B("div", {
              className: "p-6 space-y-4 md:space-y-6 sm:p-8",
              children: [
                I("h1", {
                  className:
                    "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl",
                  children: "Iniciar sesión",
                }),
                B("form", {
                  className: "space-y-4 md:space-y-6",
                  ref: n,
                  onSubmit: (o) => {
                    o.preventDefault();
                    const i = n.current.email.value,
                      a = n.current.password.value;
                    t({ email: i, password: a });
                  },
                  children: [
                    B("div", {
                      children: [
                        I("label", {
                          htmlFor: "email",
                          className:
                            "block mb-2 text-sm font-medium text-gray-900",
                          children: "Correo electrónico",
                        }),
                        I("input", {
                          type: "email",
                          name: "email",
                          id: "email",
                          className:
                            "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                          placeholder: "nombre@email.com",
                          required: "",
                        }),
                      ],
                    }),
                    B("div", {
                      children: [
                        I("label", {
                          htmlFor: "password",
                          className:
                            "block mb-2 text-sm font-medium text-gray-900",
                          children: "Contraseña",
                        }),
                        I("input", {
                          type: "password",
                          name: "password",
                          id: "password",
                          placeholder: "••••••••",
                          className:
                            "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                          required: "",
                        }),
                      ],
                    }),
                    I("button", {
                      type: "submit",
                      className:
                        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ",
                      children: "Iniciar Sesión",
                    }),
                    B("p", {
                      className: "text-sm font-light text-gray-500",
                      children: [
                        "Aún no tiene una cuenta?",
                        " ",
                        I(Vi, {
                          to: "/register",
                          className:
                            "font-medium text-primary-600 hover:underline dark:text-primary-500",
                          children: "Registrese aquí",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function i5() {
  const { user: e } = na();
  return I("div", {
    className:
      "animate-fadeIn flex flex-col items-center justify-center py-10 px-5 h-full",
    children: e
      ? B(Ha, {
          children: [
            I("h2", {
              className: "text-2xl sm:text-3xl font-semibold text-center",
              children: I("span", {
                className: "font-bold block",
                children: e
                  ? `Bienvenid@ ${e == null ? void 0 : e.name}`
                  : "Bienvenid@",
              }),
            }),
            I("p", {
              className: "text-xl font-bold",
              children: "Abra el menú de la izquiera para ver más opciones",
            }),
            I("img", {
              src: o5,
              alt: "RetmeePro - Mejorando el Texto",
              className: "max-w-xs sm:max-w-md my-10",
            }),
            I(Vi, {
              to: "/termsandconditions",
              className:
                "bg-itn text-white font-bold px-5 py-2 rounded-md my-10 hover:scale-105 active:translate-y-1 text-xl sm:text-2xl",
              children: "Consulta términos y condiciones",
            }),
          ],
        })
      : I(cS, {}),
  });
}
const a5 = () =>
  I("div", {
    className: "min-h-screen bg-gray-100 flex justify-center items-center",
    children: I("div", {
      className: "max-w-md w-full mx-auto",
      children: B("div", {
        className: "text-center",
        children: [
          I("h1", {
            className: "text-4xl font-bold text-gray-900",
            children: "Acceso denegado",
          }),
          I("p", {
            className: "mt-2 text-lg text-gray-600",
            children: "No tiene los permisos para acceder a esta sección",
          }),
        ],
      }),
    }),
  });
function s5() {
  const { user: e, loginUser: t, registerUser: n } = na(),
    r = x.useRef(null),
    o = fm();
  return I("section", {
    className: "bg-gray-50",
    children: e
      ? I(ws, { to: "/" })
      : B("div", {
          className:
            "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0",
          children: [
            B("a", {
              href: "#",
              className:
                "flex items-center mb-6 text-2xl font-semibold text-gray-900",
              children: [
                I("img", {
                  className: "w-8 h-8 mr-2",
                  src: "retmeepro.svg",
                  alt: "logo",
                }),
                "RetmeePro",
              ],
            }),
            I("div", {
              className:
                "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0",
              children: B("div", {
                className: "p-6 space-y-4 md:space-y-6 sm:p-8",
                children: [
                  I("h1", {
                    className:
                      "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl",
                    children: "Crear una cuenta",
                  }),
                  B("form", {
                    className: "space-y-4 md:space-y-6",
                    onSubmit: (a) => {
                      a.preventDefault();
                      const s = r.current.email.value,
                        l = r.current.password.value,
                        u = r.current.confirmPassword.value;
                      if (l !== u) {
                        Ii.error("Las contraseñas no coinciden.");
                        return;
                      }
                      if (l.length < 8) {
                        Ii.error(
                          "La contraseña debe tener al menos 8 caracteres."
                        );
                        return;
                      }
                      Ii.promise(n(s, l), {
                        loading: "Creando cuenta...",
                        success: (c) => (
                          console.log(c),
                          o("/login"),
                          "Cuenta creada exitosamente."
                        ),
                        error: (c) =>
                          (c == null ? void 0 : c.type) ===
                          "user_already_exists"
                            ? "El usuario ya existe."
                            : (c == null ? void 0 : c.type) ===
                              "general_rate_limit_exceeded"
                            ? "Hubo muchos intentos, por favor intentelo mas tarde."
                            : (console.log(c), "Error al crear la cuenta."),
                      });
                    },
                    ref: r,
                    children: [
                      B("div", {
                        children: [
                          I("label", {
                            htmlFor: "email",
                            className:
                              "block mb-2 text-sm font-medium text-gray-900",
                            children: "Correo electrónico",
                          }),
                          I("input", {
                            type: "email",
                            name: "email",
                            id: "email",
                            className:
                              "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                            placeholder: "name@company.com",
                            required: !0,
                          }),
                        ],
                      }),
                      B("div", {
                        children: [
                          I("label", {
                            htmlFor: "password",
                            className:
                              "block mb-2 text-sm font-medium text-gray-900",
                            children: "Contraseña",
                          }),
                          I("input", {
                            type: "password",
                            name: "password",
                            id: "password",
                            placeholder: "••••••••",
                            className:
                              "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                            required: !0,
                          }),
                        ],
                      }),
                      B("div", {
                        children: [
                          I("label", {
                            htmlFor: "confirmPassword",
                            className:
                              "block mb-2 text-sm font-medium text-gray-900",
                            children: "Confirmar contraseña",
                          }),
                          I("input", {
                            type: "password",
                            name: "confirmPassword",
                            id: "confirmPassword",
                            placeholder: "••••••••",
                            className:
                              "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
                            required: !0,
                          }),
                        ],
                      }),
                      B("div", {
                        className: "flex items-start",
                        children: [
                          I("div", {
                            className: "flex items-center h-5",
                            children: I("input", {
                              id: "terms",
                              "aria-describedby": "terms",
                              type: "checkbox",
                              className:
                                "w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800",
                              required: !0,
                            }),
                          }),
                          I("div", {
                            className: "ml-3 text-sm",
                            children: B("label", {
                              htmlFor: "terms",
                              className: "font-light text-gray-900",
                              children: [
                                "Aceptar",
                                " ",
                                I(Vi, {
                                  className:
                                    "font-medium text-primary-600 hover:underline dark:text-primary-500",
                                  to: "/termsandconditions",
                                  target: "blank",
                                  children: "Términos y condiciones.",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      I("button", {
                        type: "submit",
                        className:
                          "w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
                        children: "Crear cuenta",
                      }),
                      B("p", {
                        className: "text-sm font-light text-gray-00",
                        children: [
                          "¿Ya tiene una cuenta?",
                          " ",
                          I(Vi, {
                            to: "/login",
                            className:
                              "font-medium text-primary-600 hover:underline",
                            children: "Inicie sesión aquí",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
  });
}
function l5(e, t, n) {
  var r = this,
    o = x.useRef(null),
    i = x.useRef(0),
    a = x.useRef(null),
    s = x.useRef([]),
    l = x.useRef(),
    u = x.useRef(),
    c = x.useRef(e),
    d = x.useRef(!0);
  x.useEffect(
    function () {
      c.current = e;
    },
    [e]
  );
  var f = !t && t !== 0 && typeof window < "u";
  if (typeof e != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var h = !!(n = n || {}).leading,
    p = !("trailing" in n) || !!n.trailing,
    g = "maxWait" in n,
    w = g ? Math.max(+n.maxWait || 0, t) : null;
  x.useEffect(function () {
    return (
      (d.current = !0),
      function () {
        d.current = !1;
      }
    );
  }, []);
  var b = x.useMemo(
    function () {
      var m = function (E) {
          var O = s.current,
            R = l.current;
          return (
            (s.current = l.current = null),
            (i.current = E),
            (u.current = c.current.apply(R, O))
          );
        },
        y = function (E, O) {
          f && cancelAnimationFrame(a.current),
            (a.current = f ? requestAnimationFrame(E) : setTimeout(E, O));
        },
        v = function (E) {
          if (!d.current) return !1;
          var O = E - o.current;
          return !o.current || O >= t || O < 0 || (g && E - i.current >= w);
        },
        S = function (E) {
          return (
            (a.current = null),
            p && s.current ? m(E) : ((s.current = l.current = null), u.current)
          );
        },
        k = function E() {
          var O = Date.now();
          if (v(O)) return S(O);
          if (d.current) {
            var R = t - (O - o.current),
              M = g ? Math.min(R, w - (O - i.current)) : R;
            y(E, M);
          }
        },
        C = function () {
          var E = Date.now(),
            O = v(E);
          if (
            ((s.current = [].slice.call(arguments)),
            (l.current = r),
            (o.current = E),
            O)
          ) {
            if (!a.current && d.current)
              return (
                (i.current = o.current), y(k, t), h ? m(o.current) : u.current
              );
            if (g) return y(k, t), m(o.current);
          }
          return a.current || y(k, t), u.current;
        };
      return (
        (C.cancel = function () {
          a.current &&
            (f ? cancelAnimationFrame(a.current) : clearTimeout(a.current)),
            (i.current = 0),
            (s.current = o.current = l.current = a.current = null);
        }),
        (C.isPending = function () {
          return !!a.current;
        }),
        (C.flush = function () {
          return a.current ? S(Date.now()) : u.current;
        }),
        C
      );
    },
    [h, g, t, w, p, f]
  );
  return b;
}
function u5(e, t) {
  return e === t;
}
function s0(e) {
  return typeof e == "function"
    ? function () {
        return e;
      }
    : e;
}
function c5(e, t, n) {
  var r,
    o,
    i = (n && n.equalityFn) || u5,
    a =
      ((r = x.useState(s0(e))),
      (o = r[1]),
      [
        r[0],
        x.useCallback(function (d) {
          return o(s0(d));
        }, []),
      ]),
    s = a[0],
    l = a[1],
    u = l5(
      x.useCallback(
        function (d) {
          return l(d);
        },
        [l]
      ),
      t,
      n
    ),
    c = x.useRef(e);
  return i(c.current, e) || (u(e), (c.current = e)), [s, u];
}
const d5 = {
    Sofisticación: [
      "Tu uso del lenguaje muestra una gran sofisticación. Has empleado términos y estructuras complejas de manera efectiva, lo que demuestra un alto nivel de habilidad lingüística.",
      "Impresionante nivel de sofisticación lingüística. Has demostrado un dominio excepcional del idioma al utilizar términos y estructuras complejas de manera fluida y natural.",
      "Tu habilidad para expresarte de manera sofisticada es admirable. Has mostrado un dominio excepcional del lenguaje al utilizar un vocabulario variado y estructuras elaboradas.",
      "Felicidades por tu excelente manejo del lenguaje. Tu sofisticación lingüística es evidente en tu capacidad para comunicar ideas de manera clara y precisa utilizando un vocabulario rico y diverso.",
      "Has demostrado un alto nivel de sofisticación en tu uso del lenguaje. Tu habilidad para utilizar términos y estructuras complejas enriquece tu comunicación y demuestra un dominio impresionante del idioma.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es notable. Has logrado transmitir ideas complejas de manera concisa y precisa, utilizando un vocabulario rico y variado.",
      "Impresionante nivel de densidad lingüística. Has sido capaz de comunicar ideas complejas de manera efectiva en un espacio limitado, demostrando un alto grado de precisión y concisión.",
      "Tu capacidad para transmitir ideas de manera densa es destacable. Has utilizado un vocabulario variado y preciso para comunicar conceptos complejos de manera clara y concisa.",
      "Felicidades por tu habilidad para comunicar de manera densa y precisa. Has logrado transmitir información compleja de manera efectiva, utilizando un lenguaje claro y conciso.",
      "Has demostrado una gran habilidad para comunicarte de manera densa. Tu capacidad para transmitir información compleja de manera concisa y precisa es impresionante.",
    ],
    Variedad: [
      "Tu uso variado del lenguaje es impresionante. Has demostrado una capacidad para utilizar diferentes palabras, frases y estructuras de manera efectiva, lo que enriquece tu comunicación.",
      "Impresionante variedad lingüística. Has utilizado una amplia gama de palabras, frases y estructuras para comunicarte de manera efectiva, lo que demuestra un dominio excepcional del idioma.",
      "Felicidades por tu habilidad para diversificar tu lenguaje. Has utilizado una variedad de palabras y estructuras para comunicar ideas de manera efectiva y creativa.",
      "Has demostrado una gran habilidad para diversificar tu lenguaje. Tu capacidad para utilizar una amplia variedad de palabras y estructuras enriquece tu comunicación y la hace más interesante.",
      "Tu habilidad para utilizar un lenguaje variado es impresionante. Has demostrado creatividad y habilidad para comunicarte de manera efectiva al emplear una amplia gama de palabras y estructuras.",
    ],
  },
  f5 = {
    Sofisticación: [
      "Tu nivel de sofisticación en el uso del lenguaje es promedio. Aunque has mostrado cierta habilidad para utilizar términos y estructuras más complejas, aún hay espacio para mejorar en este aspecto.",
      "Tienes un buen nivel de sofisticación lingüística, pero aún hay margen para crecer. Sigue explorando términos y estructuras complejas para enriquecer tu comunicación.",
      "Has mostrado cierta sofisticación en tu uso del lenguaje, pero aún puedes mejorar. Considera expandir tu vocabulario y explorar nuevas formas de expresión para enriquecer tu comunicación.",
      "Tu nivel de sofisticación lingüística es aceptable. Sigue trabajando en la incorporación de términos y estructuras más complejas para mejorar tu habilidad con el lenguaje.",
      "Tienes un buen comienzo en tu nivel de sofisticación lingüística. Continúa explorando nuevas formas de expresión para enriquecer tu comunicación y llevar tu habilidad con el lenguaje al siguiente nivel.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es aceptable. Has logrado transmitir tus ideas de manera clara, pero sería beneficioso explorar formas de expresión más compactas y precisas para enriquecer tu comunicación.",
      "Tu nivel de densidad lingüística es promedio. Sigue trabajando en transmitir tus ideas de manera más concisa y precisa para mejorar tu comunicación.",
      "Tienes un buen nivel de densidad en tu lenguaje, pero aún puedes mejorar. Considera utilizar un vocabulario más variado y estructuras más compactas para enriquecer tu comunicación.",
      "Tu habilidad para comunicarte de manera densa es aceptable. Sigue practicando para transmitir tus ideas de manera más concisa y precisa, utilizando un lenguaje claro y directo.",
      "Has logrado transmitir tus ideas de manera aceptable, pero aún puedes mejorar en la densidad de tu lenguaje. Sigue trabajando en transmitir información compleja de manera concisa y precisa.",
    ],
    Variedad: [
      "Tu uso del lenguaje muestra una variedad decente. Has utilizado una gama de palabras y estructuras, pero podrías beneficiarte de explorar más opciones para diversificar aún más tu expresión.",
      "Tienes una variedad aceptable en tu lenguaje, pero aún hay margen para crecer. Sigue explorando nuevas palabras y estructuras para enriquecer tu comunicación.",
      "Has mostrado cierta variedad en tu lenguaje, pero aún puedes diversificar más tu expresión. Considera ampliar tu vocabulario y explorar diferentes formas de estructurar tus frases.",
      "Tu variedad lingüística es promedio. Sigue practicando para ampliar tu vocabulario y diversificar tu expresión para enriquecer tu comunicación.",
      "Tienes una buena base de variedad lingüística, pero aún puedes mejorar. Sigue explorando nuevas formas de expresión para enriquecer tu comunicación y hacerla más interesante.",
    ],
  },
  p5 = {
    Sofisticación: [
      "Tu uso del lenguaje muestra una falta de sofisticación. Sería beneficioso trabajar en la incorporación de términos y estructuras más complejas para mejorar tu habilidad lingüística.",
      "Necesitas mejorar tu nivel de sofisticación lingüística. Sigue trabajando en la exploración de términos y estructuras más complejas para enriquecer tu comunicación.",
      "Tu nivel de sofisticación lingüística es bajo. Considera ampliar tu vocabulario y explorar nuevas formas de expresión para mejorar tu habilidad con el lenguaje.",
      "Tienes un nivel bajo de sofisticación lingüística. Sigue practicando para utilizar términos y estructuras más complejas y enriquecer tu comunicación.",
      "Es importante mejorar tu nivel de sofisticación lingüística. Trabaja en la incorporación de términos y estructuras más complejas para enriquecer tu comunicación.",
    ],
    Densidad: [
      "La densidad de tu lenguaje es baja. Es importante trabajar en transmitir tus ideas de manera más compacta y precisa, utilizando un vocabulario más rico y variado.",
      "Tu nivel de densidad lingüística es bajo. Sigue trabajando en la transmisión de ideas de manera concisa y precisa para mejorar tu comunicación.",
      "Necesitas mejorar tu densidad lingüística. Sigue practicando para comunicar tus ideas de manera más compacta y precisa utilizando un lenguaje claro y directo.",
      "Tienes un nivel bajo de densidad en tu lenguaje. Trabaja en la simplificación y clarificación de tus ideas para mejorar tu comunicación.",
      "Es importante mejorar tu densidad lingüística. Sigue practicando para transmitir información compleja de manera concisa y precisa.",
    ],
    Variedad: [
      "Tu uso del lenguaje carece de variedad. Sería útil explorar diferentes palabras, frases y estructuras para enriquecer tu comunicación y evitar la repetición.",
      "Necesitas mejorar tu variedad lingüística. Sigue explorando nuevas palabras y estructuras para diversificar tu expresión y enriquecer tu comunicación.",
      "Tienes una falta de variedad en tu lenguaje. Trabaja en la incorporación de una gama más amplia de palabras y estructuras para enriquecer tu comunicación.",
      "Tu nivel de variedad lingüística es bajo. Sigue practicando para utilizar una mayor variedad de palabras y estructuras y hacer tu comunicación más interesante.",
      "Es importante mejorar tu variedad lingüística. Sigue explorando nuevas formas de expresión para enriquecer tu comunicación y hacerla más efectiva.",
    ],
  },
  h5 = { good: d5, medium: f5, bad: p5 };
function m5(e, t) {
  var n = h5[e][t],
    r = n[Math.floor(Math.random() * n.length)];
  return r;
}
function Qd({ name: e, limits: t, score: n }) {
  const r = n * 100;
  let o = "",
    i = "";
  n <= (t == null ? void 0 : t.LSL)
    ? ((o = "bg-red-500"), (i = "bad"))
    : n < (t == null ? void 0 : t.USL)
    ? ((o = "bg-yellow-500"), (i = "medium"))
    : ((o = "bg-green-500"), (i = "good"));
  const a = m5(i, e);
  return B("div", {
    children: [
      B("div", {
        className: "flex gap-4 mb-4 justify-evenly",
        children: [
          B("div", { className: "text-lg font-semibold", children: [e, ":"] }),
          B("div", {
            className: "w-3/4 flex items-center",
            children: [
              I("div", {
                className: "w-full h-4 bg-gray-200 rounded-full min-w-[150px]",
                children: I("div", {
                  className: `h-full rounded-full ${o}`,
                  style: { width: `${r}%` },
                }),
              }),
              B("div", {
                className: "ml-4 text-lg font-semibold",
                children: [r.toFixed(2), "%"],
              }),
            ],
          }),
        ],
      }),
      i === "bad"
        ? B("div", {
            className:
              "flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 max-w-[350px]",
            role: "alert",
            children: [
              I("svg", {
                className: "flex-shrink-0 inline w-4 h-4 me-3",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: I("path", {
                  d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z",
                }),
              }),
              I("span", { className: "sr-only", children: "Info" }),
              B("div", {
                children: [
                  I("span", { className: "font-medium", children: "OJO!" }),
                  " ",
                  a,
                ],
              }),
            ],
          })
        : null,
      i === "medium"
        ? B("div", {
            className:
              "flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 max-w-[350px]",
            role: "alert",
            children: [
              I("svg", {
                className: "flex-shrink-0 inline w-4 h-4 me-3",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                children: I("path", {
                  d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z",
                }),
              }),
              I("span", { className: "sr-only", children: "Info" }),
              B("div", {
                children: [
                  I("span", { className: "font-medium", children: "Ojo!" }),
                  " ",
                  a,
                ],
              }),
            ],
          })
        : null,
    ],
  });
}
function v5({
  analyses: e,
  repeatedWords: t,
  commonWords: n,
  selectedOptionLimits: r,
}) {
  return B("div", {
    className: "mx-5",
    children: [
      I("h2", { className: "text-3xl font-bold mb-6", children: "Resultados" }),
      B("p", {
        children: [
          "Palabras Repetidas:",
          " ",
          I("span", { className: "font-bold text-xl", children: t }),
        ],
      }),
      B("p", {
        children: [
          "Palabras Comunes:",
          " ",
          I("span", { className: "font-bold text-xl", children: n }),
        ],
      }),
      I(Qd, { name: e[0].name, score: e[0].score, limits: r.variety }),
      I(Qd, { name: e[1].name, score: e[1].score, limits: r.density }),
      I(Qd, { name: e[2].name, score: e[2].score, limits: r.sophistication }),
    ],
  });
}
const y5 = { black: "#000", white: "#fff" },
  Ss = y5,
  g5 = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Xo = g5,
  b5 = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Zo = b5,
  w5 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Yo = w5,
  S5 = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Jo = S5,
  x5 = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  ei = x5,
  k5 = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  ga = k5,
  C5 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  E5 = C5;
function Do(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const P5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Do },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _c = "$$material";
function dS(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var R5 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  O5 = dS(function (e) {
    return (
      R5.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function T5(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function I5(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var M5 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(I5(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = T5(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Tt = "-ms-",
  Mu = "-moz-",
  ve = "-webkit-",
  fS = "comm",
  hm = "rule",
  mm = "decl",
  _5 = "@import",
  pS = "@keyframes",
  $5 = "@layer",
  N5 = Math.abs,
  $c = String.fromCharCode,
  L5 = Object.assign;
function A5(e, t) {
  return St(e, 0) ^ 45
    ? (((((((t << 2) ^ St(e, 0)) << 2) ^ St(e, 1)) << 2) ^ St(e, 2)) << 2) ^
        St(e, 3)
    : 0;
}
function hS(e) {
  return e.trim();
}
function j5(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Tp(e, t) {
  return e.indexOf(t);
}
function St(e, t) {
  return e.charCodeAt(t) | 0;
}
function xs(e, t, n) {
  return e.slice(t, n);
}
function Qn(e) {
  return e.length;
}
function vm(e) {
  return e.length;
}
function yl(e, t) {
  return t.push(e), e;
}
function z5(e, t) {
  return e.map(t).join("");
}
var Nc = 1,
  Ki = 1,
  mS = 0,
  Gt = 0,
  rt = 0,
  ra = "";
function Lc(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Nc,
    column: Ki,
    length: a,
    return: "",
  };
}
function ba(e, t) {
  return L5(Lc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function D5() {
  return rt;
}
function U5() {
  return (
    (rt = Gt > 0 ? St(ra, --Gt) : 0), Ki--, rt === 10 && ((Ki = 1), Nc--), rt
  );
}
function on() {
  return (
    (rt = Gt < mS ? St(ra, Gt++) : 0), Ki++, rt === 10 && ((Ki = 1), Nc++), rt
  );
}
function tr() {
  return St(ra, Gt);
}
function Dl() {
  return Gt;
}
function js(e, t) {
  return xs(ra, e, t);
}
function ks(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function vS(e) {
  return (Nc = Ki = 1), (mS = Qn((ra = e))), (Gt = 0), [];
}
function yS(e) {
  return (ra = ""), e;
}
function Ul(e) {
  return hS(js(Gt - 1, Ip(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function F5(e) {
  for (; (rt = tr()) && rt < 33; ) on();
  return ks(e) > 2 || ks(rt) > 3 ? "" : " ";
}
function B5(e, t) {
  for (
    ;
    --t &&
    on() &&
    !(rt < 48 || rt > 102 || (rt > 57 && rt < 65) || (rt > 70 && rt < 97));

  );
  return js(e, Dl() + (t < 6 && tr() == 32 && on() == 32));
}
function Ip(e) {
  for (; on(); )
    switch (rt) {
      case e:
        return Gt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ip(rt);
        break;
      case 40:
        e === 41 && Ip(e);
        break;
      case 92:
        on();
        break;
    }
  return Gt;
}
function q5(e, t) {
  for (; on() && e + rt !== 47 + 10; )
    if (e + rt === 42 + 42 && tr() === 47) break;
  return "/*" + js(t, Gt - 1) + "*" + $c(e === 47 ? e : on());
}
function W5(e) {
  for (; !ks(tr()); ) on();
  return js(e, Gt);
}
function H5(e) {
  return yS(Fl("", null, null, null, [""], (e = vS(e)), 0, [0], e));
}
function Fl(e, t, n, r, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      p = 0,
      g = 1,
      w = 1,
      b = 1,
      m = 0,
      y = "",
      v = o,
      S = i,
      k = r,
      C = y;
    w;

  )
    switch (((p = m), (m = on()))) {
      case 40:
        if (p != 108 && St(C, d - 1) == 58) {
          Tp((C += ye(Ul(m), "&", "&\f")), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Ul(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += F5(p);
        break;
      case 92:
        C += B5(Dl() - 1, 7);
        continue;
      case 47:
        switch (tr()) {
          case 42:
          case 47:
            yl(V5(q5(on(), Dl()), t, n), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * g:
        s[u++] = Qn(C) * b;
      case 125 * g:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            b == -1 && (C = ye(C, /\f/g, "")),
              h > 0 &&
                Qn(C) - d &&
                yl(
                  h > 32
                    ? u0(C + ";", r, n, d - 1)
                    : u0(ye(C, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            C += ";";
          default:
            if (
              (yl((k = l0(C, t, n, u, c, o, s, y, (v = []), (S = []), d)), i),
              m === 123)
            )
              if (c === 0) Fl(C, t, k, k, v, i, d, s, S);
              else
                switch (f === 99 && St(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Fl(
                      e,
                      k,
                      k,
                      r && yl(l0(e, k, k, 0, 0, o, s, y, o, (v = []), d), S),
                      o,
                      S,
                      d,
                      s,
                      r ? v : S
                    );
                    break;
                  default:
                    Fl(C, k, k, k, [""], S, 0, s, S);
                }
        }
        (u = c = h = 0), (g = b = 1), (y = C = ""), (d = a);
        break;
      case 58:
        (d = 1 + Qn(C)), (h = p);
      default:
        if (g < 1) {
          if (m == 123) --g;
          else if (m == 125 && g++ == 0 && U5() == 125) continue;
        }
        switch (((C += $c(m)), m * g)) {
          case 38:
            b = c > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Qn(C) - 1) * b), (b = 1);
            break;
          case 64:
            tr() === 45 && (C += Ul(on())),
              (f = tr()),
              (c = d = Qn((y = C += W5(Dl())))),
              m++;
            break;
          case 45:
            p === 45 && Qn(C) == 2 && (g = 0);
        }
    }
  return i;
}
function l0(e, t, n, r, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], h = vm(f), p = 0, g = 0, w = 0;
    p < r;
    ++p
  )
    for (var b = 0, m = xs(e, d + 1, (d = N5((g = a[p])))), y = e; b < h; ++b)
      (y = hS(g > 0 ? f[b] + " " + m : ye(m, /&\f/g, f[b]))) && (l[w++] = y);
  return Lc(e, t, n, o === 0 ? hm : s, l, u, c);
}
function V5(e, t, n) {
  return Lc(e, t, n, fS, $c(D5()), xs(e, 2, -2), 0);
}
function u0(e, t, n, r) {
  return Lc(e, t, n, mm, xs(e, 0, r), xs(e, r + 1, -1), r);
}
function _i(e, t) {
  for (var n = "", r = vm(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function K5(e, t, n, r) {
  switch (e.type) {
    case $5:
      if (e.children.length) break;
    case _5:
    case mm:
      return (e.return = e.return || e.value);
    case fS:
      return "";
    case pS:
      return (e.return = e.value + "{" + _i(e.children, r) + "}");
    case hm:
      e.value = e.props.join(",");
  }
  return Qn((n = _i(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Q5(e) {
  var t = vm(e);
  return function (n, r, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](n, r, o, i) || "";
    return a;
  };
}
function G5(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var X5 = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = tr()), o === 38 && i === 12 && (n[r] = 1), !ks(i);

    )
      on();
    return js(t, Gt);
  },
  Z5 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (ks(o)) {
        case 0:
          o === 38 && tr() === 12 && (n[r] = 1), (t[r] += X5(Gt - 1, n, r));
          break;
        case 2:
          t[r] += Ul(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = tr() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += $c(o);
      }
    while ((o = on()));
    return t;
  },
  Y5 = function (t, n) {
    return yS(Z5(vS(t), n));
  },
  c0 = new WeakMap(),
  J5 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !c0.get(r)) &&
        !o
      ) {
        c0.set(t, !0);
        for (
          var i = [], a = Y5(n, i), s = r.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  eI = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function gS(e, t) {
  switch (A5(e, t)) {
    case 5103:
      return ve + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + Mu + e + Tt + e + e;
    case 6828:
    case 4268:
      return ve + e + Tt + e + e;
    case 6165:
      return ve + e + Tt + "flex-" + e + e;
    case 5187:
      return (
        ve + e + ye(e, /(\w+).+(:[^]+)/, ve + "box-$1$2" + Tt + "flex-$1$2") + e
      );
    case 5443:
      return ve + e + Tt + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        ve +
        e +
        Tt +
        "flex-line-pack" +
        ye(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return ve + e + Tt + ye(e, "shrink", "negative") + e;
    case 5292:
      return ve + e + Tt + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ve +
        "box-" +
        ye(e, "-grow", "") +
        ve +
        e +
        Tt +
        ye(e, "grow", "positive") +
        e
      );
    case 4554:
      return ve + ye(e, /([^-])(transform)/g, "$1" + ve + "$2") + e;
    case 6187:
      return (
        ye(
          ye(ye(e, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ve + "$1$`$1");
    case 4968:
      return (
        ye(
          ye(e, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + Tt + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ve +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, ve + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qn(e) - 1 - t > 6)
        switch (St(e, t + 1)) {
          case 109:
            if (St(e, t + 4) !== 45) break;
          case 102:
            return (
              ye(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ve +
                  "$2-$3$1" +
                  Mu +
                  (St(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Tp(e, "stretch")
              ? gS(ye(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (St(e, t + 1) !== 115) break;
    case 6444:
      switch (St(e, Qn(e) - 3 - (~Tp(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + ve) + e;
        case 101:
          return (
            ye(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ve +
                (St(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ve +
                "$2$3$1" +
                Tt +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (St(e, t + 11)) {
        case 114:
          return ve + e + Tt + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ve + e + Tt + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ve + e + Tt + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ve + e + Tt + e + e;
  }
  return e;
}
var tI = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case mm:
          t.return = gS(t.value, t.length);
          break;
        case pS:
          return _i([ba(t, { value: ye(t.value, "@", "@" + ve) })], o);
        case hm:
          if (t.length)
            return z5(t.props, function (i) {
              switch (j5(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return _i(
                    [ba(t, { props: [ye(i, /:(read-\w+)/, ":" + Mu + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return _i(
                    [
                      ba(t, {
                        props: [ye(i, /:(plac\w+)/, ":" + ve + "input-$1")],
                      }),
                      ba(t, { props: [ye(i, /:(plac\w+)/, ":" + Mu + "$1")] }),
                      ba(t, { props: [ye(i, /:(plac\w+)/, Tt + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  nI = [tI],
  bS = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var w = g.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || nI,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var w = g.getAttribute("data-emotion").split(" "), b = 1;
            b < w.length;
            b++
          )
            i[w[b]] = !0;
          s.push(g);
        }
      );
    var l,
      u = [J5, eI];
    {
      var c,
        d = [
          K5,
          G5(function (g) {
            c.insert(g);
          }),
        ],
        f = Q5(u.concat(o, d)),
        h = function (w) {
          return _i(H5(w), f);
        };
      l = function (w, b, m, y) {
        (c = m),
          h(w ? w + "{" + b.styles + "}" : b.styles),
          y && (p.inserted[b.name] = !0);
      };
    }
    var p = {
      key: n,
      sheet: new M5({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return p.sheet.hydrate(s), p;
  },
  rI = !0;
function oI(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var wS = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || rI === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  SS = function (t, n, r) {
    wS(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function iI(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var aI = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  sI = /[A-Z]|^ms/g,
  lI = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  xS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  d0 = function (t) {
    return t != null && typeof t != "boolean";
  },
  Gd = dS(function (e) {
    return xS(e) ? e : e.replace(sI, "-$&").toLowerCase();
  }),
  f0 = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(lI, function (r, o, i) {
            return (Gn = { name: o, styles: i, next: Gn }), o;
          });
    }
    return aI[t] !== 1 && !xS(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Cs(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Gn = { name: n.name, styles: n.styles, next: Gn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Gn = { name: r.name, styles: r.styles, next: Gn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return uI(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Gn,
          a = n(e);
        return (Gn = i), Cs(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function uI(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Cs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : d0(a) && (r += Gd(i) + ":" + f0(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          d0(a[s]) && (r += Gd(i) + ":" + f0(i, a[s]) + ";");
      else {
        var l = Cs(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Gd(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var p0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Gn,
  ym = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Gn = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += Cs(r, n, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += Cs(r, n, t[s])), o && (i += a[s]);
    p0.lastIndex = 0;
    for (var l = "", u; (u = p0.exec(i)) !== null; ) l += "-" + u[1];
    var c = iI(i) + l;
    return { name: c, styles: i, next: Gn };
  },
  cI = function (t) {
    return t();
  },
  kS = Wl["useInsertionEffect"] ? Wl["useInsertionEffect"] : !1,
  dI = kS || cI,
  h0 = kS || x.useLayoutEffect,
  CS = x.createContext(typeof HTMLElement < "u" ? bS({ key: "css" }) : null),
  fI = CS.Provider,
  ES = function (t) {
    return x.forwardRef(function (n, r) {
      var o = x.useContext(CS);
      return t(n, o, r);
    });
  },
  Ac = x.createContext({}),
  pI = ES(function (e, t) {
    var n = e.styles,
      r = ym([n], void 0, x.useContext(Ac)),
      o = x.useRef();
    return (
      h0(
        function () {
          var i = t.key + "-global",
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      h0(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && SS(t, r.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert("", r, a, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function PS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ym(t);
}
var jc = function () {
    var t = PS.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  hI = O5,
  mI = function (t) {
    return t !== "theme";
  },
  m0 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? hI : mI;
  },
  v0 = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  vI = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      wS(n, r, o),
      dI(function () {
        return SS(n, r, o);
      }),
      null
    );
  },
  yI = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var s = v0(t, n, r),
      l = s || m0(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h]);
      }
      var p = ES(function (g, w, b) {
        var m = (u && g.as) || o,
          y = "",
          v = [],
          S = g;
        if (g.theme == null) {
          S = {};
          for (var k in g) S[k] = g[k];
          S.theme = x.useContext(Ac);
        }
        typeof g.className == "string"
          ? (y = oI(w.registered, v, g.className))
          : g.className != null && (y = g.className + " ");
        var C = ym(d.concat(v), w.registered, S);
        (y += w.key + "-" + C.name), a !== void 0 && (y += " " + a);
        var E = u && s === void 0 ? m0(m) : l,
          O = {};
        for (var R in g) (u && R === "as") || (E(R) && (O[R] = g[R]));
        return (
          (O.className = y),
          (O.ref = b),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(vI, {
              cache: w,
              serialized: C,
              isStringTag: typeof m == "string",
            }),
            x.createElement(m, O)
          )
        );
      });
      return (
        (p.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (p.defaultProps = t.defaultProps),
        (p.__emotion_real = p),
        (p.__emotion_base = o),
        (p.__emotion_styles = d),
        (p.__emotion_forwardProp = s),
        Object.defineProperty(p, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (p.withComponent = function (g, w) {
          return e(g, L({}, n, w, { shouldForwardProp: v0(p, w, !0) })).apply(
            void 0,
            d
          );
        }),
        p
      );
    };
  },
  gI = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Mp = yI.bind();
gI.forEach(function (e) {
  Mp[e] = Mp(e);
});
let _p;
typeof document == "object" && (_p = bS({ key: "css", prepend: !0 }));
function bI(e) {
  const { injectFirst: t, children: n } = e;
  return t && _p ? I(fI, { value: _p, children: n }) : n;
}
function wI(e) {
  return e == null || Object.keys(e).length === 0;
}
function RS(e) {
  const { styles: t, defaultTheme: n = {} } = e;
  return I(pI, {
    styles: typeof t == "function" ? (o) => t(wI(o) ? n : o) : t,
  });
}
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function SI(e, t) {
  return Mp(e, t);
}
const xI = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  kI = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: RS,
        StyledEngineProvider: bI,
        ThemeContext: Ac,
        css: PS,
        default: SI,
        internal_processStyles: xI,
        keyframes: jc,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Lr(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function OS(e) {
  if (!Lr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = OS(e[n]);
    }),
    t
  );
}
function an(e, t, n = { clone: !0 }) {
  const r = n.clone ? L({}, e) : e;
  return (
    Lr(e) &&
      Lr(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Lr(t[o]) && o in e && Lr(e[o])
            ? (r[o] = an(e[o], t[o], n))
            : n.clone
            ? (r[o] = Lr(t[o]) ? OS(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
const CI = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: an, isPlainObject: Lr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  EI = ["values", "unit", "step"],
  PI = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => L({}, n, { [r.key]: r.val }), {})
    );
  };
function TS(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = ie(e, EI),
    i = PI(t),
    a = Object.keys(i);
  function s(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${
      (typeof t[f] == "number" ? t[f] : f) - r / 100
    }${n})`;
  }
  function u(f, h) {
    const p = a.indexOf(h);
    return `@media (min-width:${
      typeof t[f] == "number" ? t[f] : f
    }${n}) and (max-width:${
      (p !== -1 && typeof t[a[p]] == "number" ? t[a[p]] : h) - r / 100
    }${n})`;
  }
  function c(f) {
    return a.indexOf(f) + 1 < a.length ? u(f, a[a.indexOf(f) + 1]) : s(f);
  }
  function d(f) {
    const h = a.indexOf(f);
    return h === 0
      ? s(a[1])
      : h === a.length - 1
      ? l(a[h])
      : u(f, a[a.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return L(
    {
      keys: a,
      values: i,
      up: s,
      down: l,
      between: u,
      only: c,
      not: d,
      unit: n,
    },
    o
  );
}
const RI = { borderRadius: 4 },
  OI = RI;
function Ba(e, t) {
  return t ? an(e, t, { clone: !1 }) : e;
}
const gm = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  y0 = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${gm[e]}px)`,
  };
function wr(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || y0;
    return t.reduce((a, s, l) => ((a[i.up(i.keys[l])] = n(t[l])), a), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || y0;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || gm).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = n(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function TI(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function II(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function pt(e) {
  if (typeof e != "string") throw new Error(Do(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const MI = Object.freeze(
  Object.defineProperty({ __proto__: null, default: pt }, Symbol.toStringTag, {
    value: "Module",
  })
);
function zc(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function _u(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = zc(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function tt(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (a) => {
      if (a[t] == null) return null;
      const s = a[t],
        l = a.theme,
        u = zc(l, r) || {};
      return wr(a, s, (d) => {
        let f = _u(u, o, d);
        return (
          d === f &&
            typeof d == "string" &&
            (f = _u(u, o, `${t}${d === "default" ? "" : pt(d)}`, d)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function _I(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const $I = { m: "margin", p: "padding" },
  NI = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  g0 = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  LI = _I((e) => {
    if (e.length > 2)
      if (g0[e]) e = g0[e];
      else return [e];
    const [t, n] = e.split(""),
      r = $I[t],
      o = NI[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  bm = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  wm = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...bm, ...wm];
function zs(e, t, n, r) {
  var o;
  const i = (o = zc(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (a) => (typeof a == "string" ? a : i * a)
    : Array.isArray(i)
    ? (a) => (typeof a == "string" ? a : i[a])
    : typeof i == "function"
    ? i
    : () => {};
}
function IS(e) {
  return zs(e, "spacing", 8);
}
function Ds(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function AI(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = Ds(t, n)), r), {});
}
function jI(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = LI(n),
    i = AI(o, r),
    a = e[n];
  return wr(e, a, i);
}
function MS(e, t) {
  const n = IS(e.theme);
  return Object.keys(e)
    .map((r) => jI(e, t, r, n))
    .reduce(Ba, {});
}
function Qe(e) {
  return MS(e, bm);
}
Qe.propTypes = {};
Qe.filterProps = bm;
function Ge(e) {
  return MS(e, wm);
}
Ge.propTypes = {};
Ge.filterProps = wm;
function zI(e = 8) {
  if (e.mui) return e;
  const t = IS({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const a = t(i);
          return typeof a == "number" ? `${a}px` : a;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function Dc(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Ba(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Sn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function On(e, t) {
  return tt({ prop: e, themeKey: "borders", transform: t });
}
const DI = On("border", Sn),
  UI = On("borderTop", Sn),
  FI = On("borderRight", Sn),
  BI = On("borderBottom", Sn),
  qI = On("borderLeft", Sn),
  WI = On("borderColor"),
  HI = On("borderTopColor"),
  VI = On("borderRightColor"),
  KI = On("borderBottomColor"),
  QI = On("borderLeftColor"),
  GI = On("outline", Sn),
  XI = On("outlineColor"),
  Uc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = zs(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: Ds(t, r) });
      return wr(e, e.borderRadius, n);
    }
    return null;
  };
Uc.propTypes = {};
Uc.filterProps = ["borderRadius"];
Dc(DI, UI, FI, BI, qI, WI, HI, VI, KI, QI, Uc, GI, XI);
const Fc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = zs(e.theme, "spacing", 8),
      n = (r) => ({ gap: Ds(t, r) });
    return wr(e, e.gap, n);
  }
  return null;
};
Fc.propTypes = {};
Fc.filterProps = ["gap"];
const Bc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = zs(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: Ds(t, r) });
    return wr(e, e.columnGap, n);
  }
  return null;
};
Bc.propTypes = {};
Bc.filterProps = ["columnGap"];
const qc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = zs(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: Ds(t, r) });
    return wr(e, e.rowGap, n);
  }
  return null;
};
qc.propTypes = {};
qc.filterProps = ["rowGap"];
const ZI = tt({ prop: "gridColumn" }),
  YI = tt({ prop: "gridRow" }),
  JI = tt({ prop: "gridAutoFlow" }),
  e3 = tt({ prop: "gridAutoColumns" }),
  t3 = tt({ prop: "gridAutoRows" }),
  n3 = tt({ prop: "gridTemplateColumns" }),
  r3 = tt({ prop: "gridTemplateRows" }),
  o3 = tt({ prop: "gridTemplateAreas" }),
  i3 = tt({ prop: "gridArea" });
Dc(Fc, Bc, qc, ZI, YI, JI, e3, t3, n3, r3, o3, i3);
function $i(e, t) {
  return t === "grey" ? t : e;
}
const a3 = tt({ prop: "color", themeKey: "palette", transform: $i }),
  s3 = tt({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: $i,
  }),
  l3 = tt({ prop: "backgroundColor", themeKey: "palette", transform: $i });
Dc(a3, s3, l3);
function en(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const u3 = tt({ prop: "width", transform: en }),
  Sm = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || gm[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null
              ? void 0
              : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: en(n) };
      };
      return wr(e, e.maxWidth, t);
    }
    return null;
  };
Sm.filterProps = ["maxWidth"];
const c3 = tt({ prop: "minWidth", transform: en }),
  d3 = tt({ prop: "height", transform: en }),
  f3 = tt({ prop: "maxHeight", transform: en }),
  p3 = tt({ prop: "minHeight", transform: en });
tt({ prop: "size", cssProperty: "width", transform: en });
tt({ prop: "size", cssProperty: "height", transform: en });
const h3 = tt({ prop: "boxSizing" });
Dc(u3, Sm, c3, d3, f3, p3, h3);
const m3 = {
    border: { themeKey: "borders", transform: Sn },
    borderTop: { themeKey: "borders", transform: Sn },
    borderRight: { themeKey: "borders", transform: Sn },
    borderBottom: { themeKey: "borders", transform: Sn },
    borderLeft: { themeKey: "borders", transform: Sn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: Sn },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Uc },
    color: { themeKey: "palette", transform: $i },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: $i,
    },
    backgroundColor: { themeKey: "palette", transform: $i },
    p: { style: Ge },
    pt: { style: Ge },
    pr: { style: Ge },
    pb: { style: Ge },
    pl: { style: Ge },
    px: { style: Ge },
    py: { style: Ge },
    padding: { style: Ge },
    paddingTop: { style: Ge },
    paddingRight: { style: Ge },
    paddingBottom: { style: Ge },
    paddingLeft: { style: Ge },
    paddingX: { style: Ge },
    paddingY: { style: Ge },
    paddingInline: { style: Ge },
    paddingInlineStart: { style: Ge },
    paddingInlineEnd: { style: Ge },
    paddingBlock: { style: Ge },
    paddingBlockStart: { style: Ge },
    paddingBlockEnd: { style: Ge },
    m: { style: Qe },
    mt: { style: Qe },
    mr: { style: Qe },
    mb: { style: Qe },
    ml: { style: Qe },
    mx: { style: Qe },
    my: { style: Qe },
    margin: { style: Qe },
    marginTop: { style: Qe },
    marginRight: { style: Qe },
    marginBottom: { style: Qe },
    marginLeft: { style: Qe },
    marginX: { style: Qe },
    marginY: { style: Qe },
    marginInline: { style: Qe },
    marginInlineStart: { style: Qe },
    marginInlineEnd: { style: Qe },
    marginBlock: { style: Qe },
    marginBlockStart: { style: Qe },
    marginBlockEnd: { style: Qe },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Fc },
    rowGap: { style: qc },
    columnGap: { style: Bc },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: en },
    maxWidth: { style: Sm },
    minWidth: { transform: en },
    height: { transform: en },
    maxHeight: { transform: en },
    minHeight: { transform: en },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Us = m3;
function v3(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function y3(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _S() {
  function e(n, r, o, i) {
    const a = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: d } = s;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const f = zc(o, u) || {};
    return d
      ? d(a)
      : wr(a, r, (p) => {
          let g = _u(f, c, p);
          return (
            p === g &&
              typeof p == "string" &&
              (g = _u(f, c, `${n}${p === "default" ? "" : pt(p)}`, p)),
            l === !1 ? g : { [l]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const a = (r = i.unstable_sxConfig) != null ? r : Us;
    function s(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = TI(i.breakpoints),
        d = Object.keys(c);
      let f = c;
      return (
        Object.keys(u).forEach((h) => {
          const p = y3(u[h], i);
          if (p != null)
            if (typeof p == "object")
              if (a[h]) f = Ba(f, e(h, p, i, a));
              else {
                const g = wr({ theme: i }, p, (w) => ({ [h]: w }));
                v3(g, p) ? (f[h] = t({ sx: p, theme: i })) : (f = Ba(f, g));
              }
            else f = Ba(f, e(h, p, i, a));
        }),
        II(d, f)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const $S = _S();
$S.filterProps = ["sx"];
const xm = $S;
function NS(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const g3 = ["breakpoints", "palette", "spacing", "shape"];
function km(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    a = ie(e, g3),
    s = TS(n),
    l = zI(o);
  let u = an(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: L({ mode: "light" }, r),
      spacing: l,
      shape: L({}, OI, i),
    },
    a
  );
  return (
    (u.applyStyles = NS),
    (u = t.reduce((c, d) => an(c, d), u)),
    (u.unstable_sxConfig = L({}, Us, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return xm({ sx: d, theme: this });
    }),
    u
  );
}
const b3 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: km,
      private_createBreakpoints: TS,
      unstable_applyStyles: NS,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function w3(e) {
  return Object.keys(e).length === 0;
}
function S3(e = null) {
  const t = x.useContext(Ac);
  return !t || w3(t) ? e : t;
}
const x3 = km();
function Cm(e = x3) {
  return S3(e);
}
function k3({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = Cm(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return I(RS, { styles: o });
}
const C3 = ["sx"],
  E3 = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Us;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function P3(e) {
  const { sx: t } = e,
    n = ie(e, C3),
    { systemProps: r, otherProps: o } = E3(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...a) => {
          const s = t(...a);
          return Lr(s) ? L({}, r, s) : r;
        })
      : (i = L({}, r, t)),
    L({}, o, { sx: i })
  );
}
const R3 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: xm,
        extendSxProp: P3,
        unstable_createStyleFunctionSx: _S,
        unstable_defaultSxConfig: Us,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  b0 = (e) => e,
  O3 = () => {
    let e = b0;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = b0;
      },
    };
  },
  T3 = O3(),
  I3 = T3;
function LS(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = LS(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function ge() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = LS(e)) && (r && (r += " "), (r += t));
  return r;
}
const M3 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function lt(e, t, n = "Mui") {
  const r = M3[t];
  return r ? `${n}-${r}` : `${I3.generate(e)}-${t}`;
}
function Ze(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = lt(e, o, n);
    }),
    r
  );
}
const _3 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function AS(e) {
  const t = `${e}`.match(_3);
  return (t && t[1]) || "";
}
function jS(e, t = "") {
  return e.displayName || e.name || AS(e) || t;
}
function w0(e, t, n) {
  const r = jS(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function $3(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return jS(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yp.ForwardRef:
          return w0(e, e.render, "ForwardRef");
        case yp.Memo:
          return w0(e, e.type, "memo");
        default:
          return;
      }
  }
}
const N3 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: $3, getFunctionName: AS },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function zS(e, t) {
  const n = L({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = L({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = L({}, i)),
              Object.keys(o).forEach((a) => {
                n[r][a] = zS(o[a], i[a]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function L3(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : zS(t.components[n].defaultProps, r);
}
function A3({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = Cm(n);
  return r && (o = o[r] || o), L3({ theme: o, name: t, props: e });
}
const j3 = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  ro = j3;
function z3(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const D3 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: z3 }, Symbol.toStringTag, {
    value: "Module",
  })
);
function S0(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function DS(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function Xd(e, t) {
  var n, r;
  return (
    x.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null ||
          (r = r._payload) == null ||
          (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function sn(e) {
  return (e && e.ownerDocument) || document;
}
function Uo(e) {
  return sn(e).defaultView || window;
}
function $p(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let x0 = 0;
function U3(e) {
  const [t, n] = x.useState(e),
    r = e || t;
  return (
    x.useEffect(() => {
      t == null && ((x0 += 1), n(`mui-${x0}`));
    }, [t]),
    r
  );
}
const k0 = Wl["useId".toString()];
function F3(e) {
  if (k0 !== void 0) {
    const t = k0();
    return e ?? t;
  }
  return U3(e);
}
function C0({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = x.useRef(e !== void 0),
    [i, a] = x.useState(t),
    s = o ? e : i,
    l = x.useCallback((u) => {
      o || a(u);
    }, []);
  return [s, l];
}
function yi(e) {
  const t = x.useRef(e);
  return (
    ro(() => {
      t.current = e;
    }),
    x.useRef((...n) => (0, t.current)(...n)).current
  );
}
function jt(...e) {
  return x.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              $p(n, t);
            });
          },
    e
  );
}
const E0 = {};
function B3(e, t) {
  const n = x.useRef(E0);
  return n.current === E0 && (n.current = e(t)), n;
}
const q3 = [];
function W3(e) {
  x.useEffect(e, q3);
}
class Wc {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new Wc();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function US() {
  const e = B3(Wc.create).current;
  return W3(e.disposeEffect), e;
}
let Hc = !0,
  Np = !1;
const H3 = new Wc(),
  V3 = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function K3(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && V3[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function Q3(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Hc = !0);
}
function Zd() {
  Hc = !1;
}
function G3() {
  this.visibilityState === "hidden" && Np && (Hc = !0);
}
function X3(e) {
  e.addEventListener("keydown", Q3, !0),
    e.addEventListener("mousedown", Zd, !0),
    e.addEventListener("pointerdown", Zd, !0),
    e.addEventListener("touchstart", Zd, !0),
    e.addEventListener("visibilitychange", G3, !0);
}
function Z3(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Hc || K3(t);
}
function Y3() {
  const e = x.useCallback((o) => {
      o != null && X3(o.ownerDocument);
    }, []),
    t = x.useRef(!1);
  function n() {
    return t.current
      ? ((Np = !0),
        H3.start(100, () => {
          Np = !1;
        }),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return Z3(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function FS(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function mt(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, a) => {
          if (a) {
            const s = t(a);
            s !== "" && i.push(s), n && n[a] && i.push(n[a]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const J3 = x.createContext(),
  eM = () => {
    const e = x.useContext(J3);
    return e ?? !1;
  };
function tM(e, t) {
  return L(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var nt = {},
  BS = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(BS);
var qS = BS.exports;
const nM = Un(P5),
  rM = Un(D3);
var WS = qS;
Object.defineProperty(nt, "__esModule", { value: !0 });
var gi = (nt.alpha = QS);
nt.blend = vM;
nt.colorChannel = void 0;
var oM = (nt.darken = Pm);
nt.decomposeColor = Pn;
nt.emphasize = mM;
var iM = (nt.getContrastRatio = dM);
nt.getLuminance = $u;
nt.hexToRgb = HS;
nt.hslToRgb = KS;
var aM = (nt.lighten = Rm);
nt.private_safeAlpha = fM;
nt.private_safeColorChannel = void 0;
nt.private_safeDarken = pM;
nt.private_safeEmphasize = GS;
nt.private_safeLighten = hM;
nt.recomposeColor = oa;
nt.rgbToHex = cM;
var P0 = WS(nM),
  sM = WS(rM);
function Em(e, t = 0, n = 1) {
  return (0, sM.default)(e, t, n);
}
function HS(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function lM(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Pn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Pn(HS(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error((0, P0.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error((0, P0.default)(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
const VS = (e) => {
  const t = Pn(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
nt.colorChannel = VS;
const uM = (e, t) => {
  try {
    return VS(e);
  } catch {
    return e;
  }
};
nt.private_safeColorChannel = uM;
function oa(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function cM(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = Pn(e);
  return `#${t.map((n, r) => lM(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function KS(e) {
  e = Pn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    a = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const l = [
    Math.round(a(0) * 255),
    Math.round(a(8) * 255),
    Math.round(a(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), l.push(t[3])), oa({ type: s, values: l })
  );
}
function $u(e) {
  e = Pn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Pn(KS(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function dM(e, t) {
  const n = $u(e),
    r = $u(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function QS(e, t) {
  return (
    (e = Pn(e)),
    (t = Em(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    oa(e)
  );
}
function fM(e, t, n) {
  try {
    return QS(e, t);
  } catch {
    return e;
  }
}
function Pm(e, t) {
  if (((e = Pn(e)), (t = Em(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return oa(e);
}
function pM(e, t, n) {
  try {
    return Pm(e, t);
  } catch {
    return e;
  }
}
function Rm(e, t) {
  if (((e = Pn(e)), (t = Em(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return oa(e);
}
function hM(e, t, n) {
  try {
    return Rm(e, t);
  } catch {
    return e;
  }
}
function mM(e, t = 0.15) {
  return $u(e) > 0.5 ? Pm(e, t) : Rm(e, t);
}
function GS(e, t, n) {
  try {
    return GS(e, t);
  } catch {
    return e;
  }
}
function vM(e, t, n, r = 1) {
  const o = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = Pn(e),
    a = Pn(t),
    s = [
      o(i.values[0], a.values[0]),
      o(i.values[1], a.values[1]),
      o(i.values[2], a.values[2]),
    ];
  return oa({ type: "rgb", values: s });
}
const yM = ["mode", "contrastThreshold", "tonalOffset"],
  R0 = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Ss.white, default: Ss.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Yd = {
    text: {
      primary: Ss.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Ss.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function O0(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = aM(e.main, o))
      : t === "dark" && (e.dark = oM(e.main, i)));
}
function gM(e = "light") {
  return e === "dark"
    ? { main: Yo[200], light: Yo[50], dark: Yo[400] }
    : { main: Yo[700], light: Yo[400], dark: Yo[800] };
}
function bM(e = "light") {
  return e === "dark"
    ? { main: Zo[200], light: Zo[50], dark: Zo[400] }
    : { main: Zo[500], light: Zo[300], dark: Zo[700] };
}
function wM(e = "light") {
  return e === "dark"
    ? { main: Xo[500], light: Xo[300], dark: Xo[700] }
    : { main: Xo[700], light: Xo[400], dark: Xo[800] };
}
function SM(e = "light") {
  return e === "dark"
    ? { main: Jo[400], light: Jo[300], dark: Jo[700] }
    : { main: Jo[700], light: Jo[500], dark: Jo[900] };
}
function xM(e = "light") {
  return e === "dark"
    ? { main: ei[400], light: ei[300], dark: ei[700] }
    : { main: ei[800], light: ei[500], dark: ei[900] };
}
function kM(e = "light") {
  return e === "dark"
    ? { main: ga[400], light: ga[300], dark: ga[700] }
    : { main: "#ed6c02", light: ga[500], dark: ga[900] };
}
function CM(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = ie(e, yM),
    i = e.primary || gM(t),
    a = e.secondary || bM(t),
    s = e.error || wM(t),
    l = e.info || SM(t),
    u = e.success || xM(t),
    c = e.warning || kM(t);
  function d(g) {
    return iM(g, Yd.text.primary) >= n ? Yd.text.primary : R0.text.primary;
  }
  const f = ({
      color: g,
      name: w,
      mainShade: b = 500,
      lightShade: m = 300,
      darkShade: y = 700,
    }) => {
      if (
        ((g = L({}, g)),
        !g.main && g[b] && (g.main = g[b]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(Do(11, w ? ` (${w})` : "", b));
      if (typeof g.main != "string")
        throw new Error(Do(12, w ? ` (${w})` : "", JSON.stringify(g.main)));
      return (
        O0(g, "light", m, r),
        O0(g, "dark", y, r),
        g.contrastText || (g.contrastText = d(g.main)),
        g
      );
    },
    h = { dark: Yd, light: R0 };
  return an(
    L(
      {
        common: L({}, Ss),
        mode: t,
        primary: f({ color: i, name: "primary" }),
        secondary: f({
          color: a,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: s, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: l, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: E5,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
      },
      h[t]
    ),
    o
  );
}
const EM = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function PM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const T0 = { textTransform: "uppercase" },
  I0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function RM(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = I0,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d,
    } = n,
    f = ie(n, EM),
    h = o / 14,
    p = d || ((b) => `${(b / u) * h}rem`),
    g = (b, m, y, v, S) =>
      L(
        { fontFamily: r, fontWeight: b, fontSize: p(m), lineHeight: y },
        r === I0 ? { letterSpacing: `${PM(v / m)}em` } : {},
        S,
        c
      ),
    w = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(a, 48, 1.167, 0),
      h4: g(a, 34, 1.235, 0.25),
      h5: g(a, 24, 1.334, 0),
      h6: g(s, 20, 1.6, 0.15),
      subtitle1: g(a, 16, 1.75, 0.15),
      subtitle2: g(s, 14, 1.57, 0.1),
      body1: g(a, 16, 1.5, 0.15),
      body2: g(a, 14, 1.43, 0.15),
      button: g(s, 14, 1.75, 0.4, T0),
      caption: g(a, 12, 1.66, 0.4),
      overline: g(a, 12, 2.66, 1, T0),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return an(
    L(
      {
        htmlFontSize: u,
        pxToRem: p,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: a,
        fontWeightMedium: s,
        fontWeightBold: l,
      },
      w
    ),
    f,
    { clone: !1 }
  );
}
const OM = 0.2,
  TM = 0.14,
  IM = 0.12;
function Le(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${OM})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${TM})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${IM})`,
  ].join(",");
}
const MM = [
    "none",
    Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  _M = MM,
  $M = ["duration", "easing", "delay"],
  NM = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  LM = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function M0(e) {
  return `${Math.round(e)}ms`;
}
function AM(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function jM(e) {
  const t = L({}, NM, e.easing),
    n = L({}, LM, e.duration);
  return L(
    {
      getAutoHeightDuration: AM,
      create: (o = ["all"], i = {}) => {
        const {
          duration: a = n.standard,
          easing: s = t.easeInOut,
          delay: l = 0,
        } = i;
        return (
          ie(i, $M),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof a == "string" ? a : M0(a)} ${s} ${
                  typeof l == "string" ? l : M0(l)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const zM = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  DM = zM,
  UM = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function FM(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    a = ie(e, UM);
  if (e.vars) throw new Error(Do(18));
  const s = CM(r),
    l = km(e);
  let u = an(l, {
    mixins: tM(l.breakpoints, n),
    palette: s,
    shadows: _M.slice(),
    typography: RM(s, i),
    transitions: jM(o),
    zIndex: L({}, DM),
  });
  return (
    (u = an(u, a)),
    (u = t.reduce((c, d) => an(c, d), u)),
    (u.unstable_sxConfig = L({}, Us, a == null ? void 0 : a.unstable_sxConfig)),
    (u.unstable_sx = function (d) {
      return xm({ sx: d, theme: this });
    }),
    u
  );
}
const BM = FM(),
  Vc = BM;
function XS() {
  const e = Cm(Vc);
  return e[_c] || e;
}
function vt({ props: e, name: t }) {
  return A3({ props: e, name: t, defaultTheme: Vc, themeId: _c });
}
var Fs = {},
  Jd = { exports: {} },
  _0;
function qM() {
  return (
    _0 ||
      ((_0 = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) &&
                          (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Jd)),
    Jd.exports
  );
}
var ef = { exports: {} },
  $0;
function WM() {
  return (
    $0 ||
      (($0 = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            i = Object.keys(n),
            a,
            s;
          for (s = 0; s < i.length; s++)
            (a = i[s]), !(r.indexOf(a) >= 0) && (o[a] = n[a]);
          return o;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(ef)),
    ef.exports
  );
}
const HM = Un(kI),
  VM = Un(CI),
  KM = Un(MI),
  QM = Un(N3),
  GM = Un(b3),
  XM = Un(R3);
var ia = qS;
Object.defineProperty(Fs, "__esModule", { value: !0 });
var ZM = (Fs.default = c_);
Fs.shouldForwardProp = Bl;
Fs.systemDefaultTheme = void 0;
var yn = ia(qM()),
  Lp = ia(WM()),
  N0 = o_(HM),
  YM = VM;
ia(KM);
ia(QM);
var JM = ia(GM),
  e_ = ia(XM);
const t_ = ["ownerState"],
  n_ = ["variants"],
  r_ = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ZS(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (ZS = function (r) {
    return r ? n : t;
  })(e);
}
function o_(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = ZS(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      a && (a.get || a.set) ? Object.defineProperty(r, i, a) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function i_(e) {
  return Object.keys(e).length === 0;
}
function a_(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Bl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const s_ = (Fs.systemDefaultTheme = (0, JM.default)()),
  l_ = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function gl({ defaultTheme: e, theme: t, themeId: n }) {
  return i_(t) ? e : t[n] || t;
}
function u_(e) {
  return e ? (t, n) => n[e] : null;
}
function ql(e, t) {
  let { ownerState: n } = t,
    r = (0, Lp.default)(t, t_);
  const o =
    typeof e == "function" ? e((0, yn.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => ql(i, (0, yn.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let s = (0, Lp.default)(o, n_);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props((0, yn.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(s) || (s = [s]),
            s.push(
              typeof l.style == "function"
                ? l.style((0, yn.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      s
    );
  }
  return o;
}
function c_(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = s_,
      rootShouldForwardProp: r = Bl,
      slotShouldForwardProp: o = Bl,
    } = e,
    i = (a) =>
      (0, e_.default)(
        (0, yn.default)({}, a, {
          theme: gl((0, yn.default)({}, a, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (i.__mui_systemSx = !0),
    (a, s = {}) => {
      (0, N0.internal_processStyles)(a, (S) =>
        S.filter((k) => !(k != null && k.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: d,
          overridesResolver: f = u_(l_(u)),
        } = s,
        h = (0, Lp.default)(s, r_),
        p = c !== void 0 ? c : (u && u !== "Root" && u !== "root") || !1,
        g = d || !1;
      let w,
        b = Bl;
      u === "Root" || u === "root"
        ? (b = r)
        : u
        ? (b = o)
        : a_(a) && (b = void 0);
      const m = (0, N0.default)(
          a,
          (0, yn.default)({ shouldForwardProp: b, label: w }, h)
        ),
        y = (S) =>
          (typeof S == "function" && S.__emotion_real !== S) ||
          (0, YM.isPlainObject)(S)
            ? (k) =>
                ql(
                  S,
                  (0, yn.default)({}, k, {
                    theme: gl({ theme: k.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : S,
        v = (S, ...k) => {
          let C = y(S);
          const E = k ? k.map(y) : [];
          l &&
            f &&
            E.push((M) => {
              const N = gl(
                (0, yn.default)({}, M, { defaultTheme: n, themeId: t })
              );
              if (
                !N.components ||
                !N.components[l] ||
                !N.components[l].styleOverrides
              )
                return null;
              const $ = N.components[l].styleOverrides,
                P = {};
              return (
                Object.entries($).forEach(([T, A]) => {
                  P[T] = ql(A, (0, yn.default)({}, M, { theme: N }));
                }),
                f(M, P)
              );
            }),
            l &&
              !p &&
              E.push((M) => {
                var N;
                const $ = gl(
                    (0, yn.default)({}, M, { defaultTheme: n, themeId: t })
                  ),
                  P =
                    $ == null ||
                    (N = $.components) == null ||
                    (N = N[l]) == null
                      ? void 0
                      : N.variants;
                return ql(
                  { variants: P },
                  (0, yn.default)({}, M, { theme: $ })
                );
              }),
            g || E.push(i);
          const O = E.length - k.length;
          if (Array.isArray(S) && O > 0) {
            const M = new Array(O).fill("");
            (C = [...S, ...M]), (C.raw = [...S.raw, ...M]);
          }
          const R = m(C, ...E);
          return a.muiName && (R.muiName = a.muiName), R;
        };
      return m.withConfig && (v.withConfig = m.withConfig), v;
    }
  );
}
function YS(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const d_ = (e) => YS(e) && e !== "classes",
  Fn = d_,
  f_ = ZM({ themeId: _c, defaultTheme: Vc, rootShouldForwardProp: Fn }),
  le = f_,
  p_ = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  },
  L0 = p_;
function h_(e) {
  return lt("MuiSvgIcon", e);
}
Ze("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const m_ = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  v_ = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${pt(t)}`, `fontSize${pt(n)}`],
      };
    return mt(o, h_, r);
  },
  y_ = le("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${pt(n.color)}`],
        t[`fontSize${pt(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, a, s, l, u, c, d, f, h, p;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((i = e.typography) == null || (a = i.pxToRem) == null
            ? void 0
            : a.call(i, 20)) || "1.25rem",
        medium:
          ((s = e.typography) == null || (l = s.pxToRem) == null
            ? void 0
            : l.call(s, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (c = u.pxToRem) == null
            ? void 0
            : c.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (d =
          (f = (e.vars || e).palette) == null || (f = f[t.color]) == null
            ? void 0
            : f.main) != null
          ? d
          : {
              action:
                (h = (e.vars || e).palette) == null || (h = h.action) == null
                  ? void 0
                  : h.active,
              disabled:
                (p = (e.vars || e).palette) == null || (p = p.action) == null
                  ? void 0
                  : p.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  JS = x.forwardRef(function (t, n) {
    const r = vt({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: a = "inherit",
        component: s = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: f = "0 0 24 24",
      } = r,
      h = ie(r, m_),
      p = x.isValidElement(o) && o.type === "svg",
      g = L({}, r, {
        color: a,
        component: s,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: f,
        hasSvgAsChild: p,
      }),
      w = {};
    c || (w.viewBox = f);
    const b = v_(g);
    return B(
      y_,
      L(
        {
          as: s,
          className: ge(b.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": d ? void 0 : !0,
          role: d ? "img" : void 0,
          ref: n,
        },
        w,
        h,
        p && o.props,
        {
          ownerState: g,
          children: [
            p ? o.props.children : o,
            d ? I("title", { children: d }) : null,
          ],
        }
      )
    );
  });
JS.muiName = "SvgIcon";
const A0 = JS;
function g_(e, t) {
  function n(r, o) {
    return I(A0, L({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }));
  }
  return (n.muiName = A0.muiName), x.memo(x.forwardRef(n));
}
function Ap(e, t) {
  return (
    (Ap = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ap(e, t)
  );
}
function ex(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ap(e, t);
}
const j0 = { disabled: !1 },
  Nu = at.createContext(null);
var b_ = function (t) {
    return t.scrollTop;
  },
  Ia = "unmounted",
  wo = "exited",
  So = "entering",
  oi = "entered",
  jp = "exiting",
  kr = (function (e) {
    ex(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = o,
        s = a && !a.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? s
            ? ((l = wo), (i.appearStatus = So))
            : (l = oi)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = Ia)
          : (l = wo),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var a = o.in;
      return a && i.status === Ia ? { status: wo } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== So && a !== oi && (i = So)
            : (a === So || a === oi) && (i = jp);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          a,
          s;
        return (
          (i = a = s = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (a = o.enter),
            (s = o.appear !== void 0 ? o.appear : a)),
          { exit: i, enter: a, appear: s }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === So)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : dl.findDOMNode(this);
              a && b_(a);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === wo &&
            this.setState({ status: Ia });
      }),
      (n.performEnter = function (o) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [s] : [dl.findDOMNode(this), s],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          f = s ? d.appear : d.enter;
        if ((!o && !a) || j0.disabled) {
          this.safeSetState({ status: oi }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: So }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: oi }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : dl.findDOMNode(this);
        if (!i || j0.disabled) {
          this.safeSetState({ status: wo }, function () {
            o.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: jp }, function () {
            o.props.onExiting(s),
              o.onTransitionEnd(a.exit, function () {
                o.safeSetState({ status: wo }, function () {
                  o.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (i.nextCallback = null), o(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : dl.findDOMNode(this),
          s = o == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === Ia) return null;
        var i = this.props,
          a = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var s = ie(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return at.createElement(
          Nu.Provider,
          { value: null },
          typeof a == "function"
            ? a(o, s)
            : at.cloneElement(at.Children.only(a), s)
        );
      }),
      t
    );
  })(at.Component);
kr.contextType = Nu;
kr.propTypes = {};
function ti() {}
kr.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ti,
  onEntering: ti,
  onEntered: ti,
  onExit: ti,
  onExiting: ti,
  onExited: ti,
};
kr.UNMOUNTED = Ia;
kr.EXITED = wo;
kr.ENTERING = So;
kr.ENTERED = oi;
kr.EXITING = jp;
const tx = kr;
function w_(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Om(e, t) {
  var n = function (i) {
      return t && x.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      x.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function S_(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var a,
    s = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var u = r[l][a];
        s[r[l][a]] = n(u);
      }
    s[l] = n(l);
  }
  for (a = 0; a < o.length; a++) s[o[a]] = n(o[a]);
  return s;
}
function To(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function x_(e, t) {
  return Om(e.children, function (n) {
    return x.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: To(n, "appear", e),
      enter: To(n, "enter", e),
      exit: To(n, "exit", e),
    });
  });
}
function k_(e, t, n) {
  var r = Om(e.children),
    o = S_(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var a = o[i];
      if (x.isValidElement(a)) {
        var s = i in t,
          l = i in r,
          u = t[i],
          c = x.isValidElement(u) && !u.props.in;
        l && (!s || c)
          ? (o[i] = x.cloneElement(a, {
              onExited: n.bind(null, a),
              in: !0,
              exit: To(a, "exit", e),
              enter: To(a, "enter", e),
            }))
          : !l && s && !c
          ? (o[i] = x.cloneElement(a, { in: !1 }))
          : l &&
            s &&
            x.isValidElement(u) &&
            (o[i] = x.cloneElement(a, {
              onExited: n.bind(null, a),
              in: u.props.in,
              exit: To(a, "exit", e),
              enter: To(a, "enter", e),
            }));
      }
    }),
    o
  );
}
var C_ =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  E_ = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Tm = (function (e) {
    ex(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var a = i.handleExited.bind(w_(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var a = i.children,
          s = i.handleExited,
          l = i.firstRender;
        return { children: l ? x_(o, s) : k_(o, a, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var a = Om(this.props.children);
        o.key in a ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = L({}, s.children);
              return delete l[o.key], { children: l };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          a = o.childFactory,
          s = ie(o, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = C_(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? at.createElement(Nu.Provider, { value: l }, u)
            : at.createElement(
                Nu.Provider,
                { value: l },
                at.createElement(i, s, u)
              )
        );
      }),
      t
    );
  })(at.Component);
Tm.propTypes = {};
Tm.defaultProps = E_;
const P_ = Tm,
  nx = (e) => e.scrollTop;
function Lu(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: a = {} } = e;
  return {
    duration:
      (n = a.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = a.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: a.transitionDelay,
  };
}
function R_(e) {
  return lt("MuiPaper", e);
}
Ze("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const O_ = ["className", "component", "elevation", "square", "variant"],
  T_ = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return mt(i, R_, o);
  },
  I_ = le("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return L(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        L(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${gi(
                "#fff",
                L0(t.elevation)
              )}, ${gi("#fff", L0(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  M_ = x.forwardRef(function (t, n) {
    const r = vt({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: a = 1,
        square: s = !1,
        variant: l = "elevation",
      } = r,
      u = ie(r, O_),
      c = L({}, r, { component: i, elevation: a, square: s, variant: l }),
      d = T_(c);
    return I(
      I_,
      L({ as: i, ownerState: c, className: ge(d.root, o), ref: n }, u)
    );
  }),
  __ = M_;
function Au(e) {
  return typeof e == "string";
}
function $_(e, t, n) {
  return e === void 0 || Au(e)
    ? t
    : L({}, t, { ownerState: L({}, t.ownerState, n) });
}
function rx(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function N_(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function z0(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function L_(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const h = ge(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      p = L(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      g = L({}, n, o, r);
    return (
      h.length > 0 && (g.className = h),
      Object.keys(p).length > 0 && (g.style = p),
      { props: g, internalRef: void 0 }
    );
  }
  const a = rx(L({}, o, r)),
    s = z0(r),
    l = z0(o),
    u = t(a),
    c = ge(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    d = L(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    f = L({}, u, n, l, s);
  return (
    c.length > 0 && (f.className = c),
    Object.keys(d).length > 0 && (f.style = d),
    { props: f, internalRef: u.ref }
  );
}
const A_ = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function Qi(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: o,
      skipResolvingSlotProps: i = !1,
    } = e,
    a = ie(e, A_),
    s = i ? {} : N_(r, o),
    { props: l, internalRef: u } = L_(L({}, a, { externalSlotProps: s })),
    c = jt(
      u,
      s == null ? void 0 : s.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return $_(n, L({}, l, { ref: c }), o);
}
function j_(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: a,
      in: s,
      onExited: l,
      timeout: u,
    } = e,
    [c, d] = x.useState(!1),
    f = ge(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    h = { width: a, height: a, top: -(a / 2) + i, left: -(a / 2) + o },
    p = ge(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !s && !c && d(!0),
    x.useEffect(() => {
      if (!s && l != null) {
        const g = setTimeout(l, u);
        return () => {
          clearTimeout(g);
        };
      }
    }, [l, s, u]),
    I("span", { className: f, style: h, children: I("span", { className: p }) })
  );
}
const z_ = Ze("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  gn = z_,
  D_ = ["center", "classes", "className"];
let Kc = (e) => e,
  D0,
  U0,
  F0,
  B0;
const zp = 550,
  U_ = 80,
  F_ = jc(
    D0 ||
      (D0 = Kc`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  B_ = jc(
    U0 ||
      (U0 = Kc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  q_ = jc(
    F0 ||
      (F0 = Kc`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  W_ = le("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  H_ = le(j_, { name: "MuiTouchRipple", slot: "Ripple" })(
    B0 ||
      (B0 = Kc`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    gn.rippleVisible,
    F_,
    zp,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    gn.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    gn.child,
    gn.childLeaving,
    B_,
    zp,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    gn.childPulsate,
    q_,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  V_ = x.forwardRef(function (t, n) {
    const r = vt({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: a } = r,
      s = ie(r, D_),
      [l, u] = x.useState([]),
      c = x.useRef(0),
      d = x.useRef(null);
    x.useEffect(() => {
      d.current && (d.current(), (d.current = null));
    }, [l]);
    const f = x.useRef(!1),
      h = US(),
      p = x.useRef(null),
      g = x.useRef(null),
      w = x.useCallback(
        (v) => {
          const {
            pulsate: S,
            rippleX: k,
            rippleY: C,
            rippleSize: E,
            cb: O,
          } = v;
          u((R) => [
            ...R,
            I(
              H_,
              {
                classes: {
                  ripple: ge(i.ripple, gn.ripple),
                  rippleVisible: ge(i.rippleVisible, gn.rippleVisible),
                  ripplePulsate: ge(i.ripplePulsate, gn.ripplePulsate),
                  child: ge(i.child, gn.child),
                  childLeaving: ge(i.childLeaving, gn.childLeaving),
                  childPulsate: ge(i.childPulsate, gn.childPulsate),
                },
                timeout: zp,
                pulsate: S,
                rippleX: k,
                rippleY: C,
                rippleSize: E,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (d.current = O);
        },
        [i]
      ),
      b = x.useCallback(
        (v = {}, S = {}, k = () => {}) => {
          const {
            pulsate: C = !1,
            center: E = o || S.pulsate,
            fakeElement: O = !1,
          } = S;
          if ((v == null ? void 0 : v.type) === "mousedown" && f.current) {
            f.current = !1;
            return;
          }
          (v == null ? void 0 : v.type) === "touchstart" && (f.current = !0);
          const R = O ? null : g.current,
            M = R
              ? R.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let N, $, P;
          if (
            E ||
            v === void 0 ||
            (v.clientX === 0 && v.clientY === 0) ||
            (!v.clientX && !v.touches)
          )
            (N = Math.round(M.width / 2)), ($ = Math.round(M.height / 2));
          else {
            const { clientX: T, clientY: A } =
              v.touches && v.touches.length > 0 ? v.touches[0] : v;
            (N = Math.round(T - M.left)), ($ = Math.round(A - M.top));
          }
          if (E)
            (P = Math.sqrt((2 * M.width ** 2 + M.height ** 2) / 3)),
              P % 2 === 0 && (P += 1);
          else {
            const T =
                Math.max(Math.abs((R ? R.clientWidth : 0) - N), N) * 2 + 2,
              A = Math.max(Math.abs((R ? R.clientHeight : 0) - $), $) * 2 + 2;
            P = Math.sqrt(T ** 2 + A ** 2);
          }
          v != null && v.touches
            ? p.current === null &&
              ((p.current = () => {
                w({ pulsate: C, rippleX: N, rippleY: $, rippleSize: P, cb: k });
              }),
              h.start(U_, () => {
                p.current && (p.current(), (p.current = null));
              }))
            : w({ pulsate: C, rippleX: N, rippleY: $, rippleSize: P, cb: k });
        },
        [o, w, h]
      ),
      m = x.useCallback(() => {
        b({}, { pulsate: !0 });
      }, [b]),
      y = x.useCallback(
        (v, S) => {
          if (
            (h.clear(),
            (v == null ? void 0 : v.type) === "touchend" && p.current)
          ) {
            p.current(),
              (p.current = null),
              h.start(0, () => {
                y(v, S);
              });
            return;
          }
          (p.current = null),
            u((k) => (k.length > 0 ? k.slice(1) : k)),
            (d.current = S);
        },
        [h]
      );
    return (
      x.useImperativeHandle(n, () => ({ pulsate: m, start: b, stop: y }), [
        m,
        b,
        y,
      ]),
      I(
        W_,
        L({ className: ge(gn.root, i.root, a), ref: g }, s, {
          children: I(P_, { component: null, exit: !0, children: l }),
        })
      )
    );
  }),
  K_ = V_;
function Q_(e) {
  return lt("MuiButtonBase", e);
}
const G_ = Ze("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  X_ = G_,
  Z_ = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  Y_ = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      a = mt({ root: ["root", t && "disabled", n && "focusVisible"] }, Q_, o);
    return n && r && (a.root += ` ${r}`), a;
  },
  J_ = le("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${X_.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  e4 = x.forwardRef(function (t, n) {
    const r = vt({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: a,
        className: s,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: f = !1,
        LinkComponent: h = "a",
        onBlur: p,
        onClick: g,
        onContextMenu: w,
        onDragLeave: b,
        onFocus: m,
        onFocusVisible: y,
        onKeyDown: v,
        onKeyUp: S,
        onMouseDown: k,
        onMouseLeave: C,
        onMouseUp: E,
        onTouchEnd: O,
        onTouchMove: R,
        onTouchStart: M,
        tabIndex: N = 0,
        TouchRippleProps: $,
        touchRippleRef: P,
        type: T,
      } = r,
      A = ie(r, Z_),
      U = x.useRef(null),
      _ = x.useRef(null),
      j = jt(_, P),
      { isFocusVisibleRef: D, onFocus: q, onBlur: H, ref: G } = Y3(),
      [Q, V] = x.useState(!1);
    u && Q && V(!1),
      x.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            V(!0), U.current.focus();
          },
        }),
        []
      );
    const [Y, re] = x.useState(!1);
    x.useEffect(() => {
      re(!0);
    }, []);
    const Ce = Y && !c && !u;
    x.useEffect(() => {
      Q && f && !c && Y && _.current.pulsate();
    }, [c, f, Q, Y]);
    function ce(te, Tn, fo = d) {
      return yi(
        (ut) => (Tn && Tn(ut), !fo && _.current && _.current[te](ut), !0)
      );
    }
    const me = ce("start", k),
      oe = ce("stop", w),
      ee = ce("stop", b),
      z = ce("stop", E),
      W = ce("stop", (te) => {
        Q && te.preventDefault(), C && C(te);
      }),
      X = ce("start", M),
      he = ce("stop", O),
      se = ce("stop", R),
      we = ce(
        "stop",
        (te) => {
          H(te), D.current === !1 && V(!1), p && p(te);
        },
        !1
      ),
      Oe = yi((te) => {
        U.current || (U.current = te.currentTarget),
          q(te),
          D.current === !0 && (V(!0), y && y(te)),
          m && m(te);
      }),
      We = () => {
        const te = U.current;
        return l && l !== "button" && !(te.tagName === "A" && te.href);
      },
      ae = x.useRef(!1),
      Te = yi((te) => {
        f &&
          !ae.current &&
          Q &&
          _.current &&
          te.key === " " &&
          ((ae.current = !0),
          _.current.stop(te, () => {
            _.current.start(te);
          })),
          te.target === te.currentTarget &&
            We() &&
            te.key === " " &&
            te.preventDefault(),
          v && v(te),
          te.target === te.currentTarget &&
            We() &&
            te.key === "Enter" &&
            !u &&
            (te.preventDefault(), g && g(te));
      }),
      yt = yi((te) => {
        f &&
          te.key === " " &&
          _.current &&
          Q &&
          !te.defaultPrevented &&
          ((ae.current = !1),
          _.current.stop(te, () => {
            _.current.pulsate(te);
          })),
          S && S(te),
          g &&
            te.target === te.currentTarget &&
            We() &&
            te.key === " " &&
            !te.defaultPrevented &&
            g(te);
      });
    let Pe = l;
    Pe === "button" && (A.href || A.to) && (Pe = h);
    const Et = {};
    Pe === "button"
      ? ((Et.type = T === void 0 ? "button" : T), (Et.disabled = u))
      : (!A.href && !A.to && (Et.role = "button"),
        u && (Et["aria-disabled"] = u));
    const Bn = jt(n, G, U),
      pn = L({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: f,
        tabIndex: N,
        focusVisible: Q,
      }),
      be = Y_(pn);
    return B(
      J_,
      L(
        {
          as: Pe,
          className: ge(be.root, s),
          ownerState: pn,
          onBlur: we,
          onClick: g,
          onContextMenu: oe,
          onFocus: Oe,
          onKeyDown: Te,
          onKeyUp: yt,
          onMouseDown: me,
          onMouseLeave: W,
          onMouseUp: z,
          onDragLeave: ee,
          onTouchEnd: he,
          onTouchMove: se,
          onTouchStart: X,
          ref: Bn,
          tabIndex: u ? -1 : N,
          type: T,
        },
        Et,
        A,
        { children: [a, Ce ? I(K_, L({ ref: j, center: i }, $)) : null] }
      )
    );
  }),
  t4 = e4,
  n4 = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
  ].join(",");
function r4(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" ||
        e.nodeName === "VIDEO" ||
        e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function o4(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function i4(e) {
  return !(
    e.disabled ||
    (e.tagName === "INPUT" && e.type === "hidden") ||
    o4(e)
  );
}
function a4(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(n4)).forEach((r, o) => {
      const i = r4(r);
      i === -1 ||
        !i4(r) ||
        (i === 0
          ? t.push(r)
          : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) =>
        r.tabIndex === o.tabIndex
          ? r.documentOrder - o.documentOrder
          : r.tabIndex - o.tabIndex
      )
      .map((r) => r.node)
      .concat(t)
  );
}
function s4() {
  return !0;
}
function l4(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = a4,
      isEnabled: a = s4,
      open: s,
    } = e,
    l = x.useRef(!1),
    u = x.useRef(null),
    c = x.useRef(null),
    d = x.useRef(null),
    f = x.useRef(null),
    h = x.useRef(!1),
    p = x.useRef(null),
    g = jt(t.ref, p),
    w = x.useRef(null);
  x.useEffect(() => {
    !s || !p.current || (h.current = !n);
  }, [n, s]),
    x.useEffect(() => {
      if (!s || !p.current) return;
      const y = sn(p.current);
      return (
        p.current.contains(y.activeElement) ||
          (p.current.hasAttribute("tabIndex") ||
            p.current.setAttribute("tabIndex", "-1"),
          h.current && p.current.focus()),
        () => {
          o ||
            (d.current &&
              d.current.focus &&
              ((l.current = !0), d.current.focus()),
            (d.current = null));
        }
      );
    }, [s]),
    x.useEffect(() => {
      if (!s || !p.current) return;
      const y = sn(p.current),
        v = (C) => {
          (w.current = C),
            !(r || !a() || C.key !== "Tab") &&
              y.activeElement === p.current &&
              C.shiftKey &&
              ((l.current = !0), c.current && c.current.focus());
        },
        S = () => {
          const C = p.current;
          if (C === null) return;
          if (!y.hasFocus() || !a() || l.current) {
            l.current = !1;
            return;
          }
          if (
            C.contains(y.activeElement) ||
            (r &&
              y.activeElement !== u.current &&
              y.activeElement !== c.current)
          )
            return;
          if (y.activeElement !== f.current) f.current = null;
          else if (f.current !== null) return;
          if (!h.current) return;
          let E = [];
          if (
            ((y.activeElement === u.current || y.activeElement === c.current) &&
              (E = i(p.current)),
            E.length > 0)
          ) {
            var O, R;
            const M = !!(
                (O = w.current) != null &&
                O.shiftKey &&
                ((R = w.current) == null ? void 0 : R.key) === "Tab"
              ),
              N = E[0],
              $ = E[E.length - 1];
            typeof N != "string" &&
              typeof $ != "string" &&
              (M ? $.focus() : N.focus());
          } else C.focus();
        };
      y.addEventListener("focusin", S), y.addEventListener("keydown", v, !0);
      const k = setInterval(() => {
        y.activeElement && y.activeElement.tagName === "BODY" && S();
      }, 50);
      return () => {
        clearInterval(k),
          y.removeEventListener("focusin", S),
          y.removeEventListener("keydown", v, !0);
      };
    }, [n, r, o, a, s, i]);
  const b = (y) => {
      d.current === null && (d.current = y.relatedTarget),
        (h.current = !0),
        (f.current = y.target);
      const v = t.props.onFocus;
      v && v(y);
    },
    m = (y) => {
      d.current === null && (d.current = y.relatedTarget), (h.current = !0);
    };
  return B(x.Fragment, {
    children: [
      I("div", {
        tabIndex: s ? 0 : -1,
        onFocus: m,
        ref: u,
        "data-testid": "sentinelStart",
      }),
      x.cloneElement(t, { ref: g, onFocus: b }),
      I("div", {
        tabIndex: s ? 0 : -1,
        onFocus: m,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function u4(e) {
  return typeof e == "function" ? e() : e;
}
const c4 = x.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [a, s] = x.useState(null),
    l = jt(x.isValidElement(r) ? r.ref : null, n);
  if (
    (ro(() => {
      i || s(u4(o) || document.body);
    }, [o, i]),
    ro(() => {
      if (a && !i)
        return (
          $p(n, a),
          () => {
            $p(n, null);
          }
        );
    }, [n, a, i]),
    i)
  ) {
    if (x.isValidElement(r)) {
      const u = { ref: l };
      return x.cloneElement(r, u);
    }
    return I(x.Fragment, { children: r });
  }
  return I(x.Fragment, { children: a && Ji.createPortal(r, a) });
});
function d4(e) {
  const t = sn(e);
  return t.body === e
    ? Uo(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function qa(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function q0(e) {
  return parseInt(Uo(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function f4(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function W0(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const s = i.indexOf(a) === -1,
      l = !f4(a);
    s && l && qa(a, o);
  });
}
function tf(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function p4(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (d4(r)) {
      const a = FS(sn(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${q0(r) + a}px`);
      const s = sn(r).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l,
        }),
          (l.style.paddingRight = `${q0(l) + a}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = sn(r).body;
    else {
      const a = r.parentElement,
        s = Uo(r);
      i =
        (a == null ? void 0 : a.nodeName) === "HTML" &&
        s.getComputedStyle(a).overflowY === "scroll"
          ? a
          : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: a, property: s }) => {
      i ? a.style.setProperty(s, i) : a.style.removeProperty(s);
    });
  };
}
function h4(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class m4 {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length),
      this.modals.push(t),
      t.modalRef && qa(t.modalRef, !1);
    const o = h4(n);
    W0(n, t.mount, t.modalRef, o, !0);
    const i = tf(this.containers, (a) => a.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({
          modals: [t],
          container: n,
          restore: null,
          hiddenSiblings: o,
        }),
        r);
  }
  mount(t, n) {
    const r = tf(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = p4(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = tf(this.containers, (a) => a.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (
      (i.modals.splice(i.modals.indexOf(t), 1),
      this.modals.splice(r, 1),
      i.modals.length === 0)
    )
      i.restore && i.restore(),
        t.modalRef && qa(t.modalRef, n),
        W0(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const a = i.modals[i.modals.length - 1];
      a.modalRef && qa(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function v4(e) {
  return typeof e == "function" ? e() : e;
}
function y4(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const g4 = new m4();
function b4(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = g4,
      closeAfterTransition: i = !1,
      onTransitionEnter: a,
      onTransitionExited: s,
      children: l,
      onClose: u,
      open: c,
      rootRef: d,
    } = e,
    f = x.useRef({}),
    h = x.useRef(null),
    p = x.useRef(null),
    g = jt(p, d),
    [w, b] = x.useState(!c),
    m = y4(l);
  let y = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (y = !1);
  const v = () => sn(h.current),
    S = () => (
      (f.current.modalRef = p.current), (f.current.mount = h.current), f.current
    ),
    k = () => {
      o.mount(S(), { disableScrollLock: r }),
        p.current && (p.current.scrollTop = 0);
    },
    C = yi(() => {
      const A = v4(t) || v().body;
      o.add(S(), A), p.current && k();
    }),
    E = x.useCallback(() => o.isTopModal(S()), [o]),
    O = yi((A) => {
      (h.current = A), A && (c && E() ? k() : p.current && qa(p.current, y));
    }),
    R = x.useCallback(() => {
      o.remove(S(), y);
    }, [y, o]);
  x.useEffect(
    () => () => {
      R();
    },
    [R]
  ),
    x.useEffect(() => {
      c ? C() : (!m || !i) && R();
    }, [c, R, m, i, C]);
  const M = (A) => (U) => {
      var _;
      (_ = A.onKeyDown) == null || _.call(A, U),
        !(U.key !== "Escape" || U.which === 229 || !E()) &&
          (n || (U.stopPropagation(), u && u(U, "escapeKeyDown")));
    },
    N = (A) => (U) => {
      var _;
      (_ = A.onClick) == null || _.call(A, U),
        U.target === U.currentTarget && u && u(U, "backdropClick");
    };
  return {
    getRootProps: (A = {}) => {
      const U = rx(e);
      delete U.onTransitionEnter, delete U.onTransitionExited;
      const _ = L({}, U, A);
      return L({ role: "presentation" }, _, { onKeyDown: M(_), ref: g });
    },
    getBackdropProps: (A = {}) => {
      const U = A;
      return L({ "aria-hidden": !0 }, U, { onClick: N(U), open: c });
    },
    getTransitionProps: () => {
      const A = () => {
          b(!1), a && a();
        },
        U = () => {
          b(!0), s && s(), i && R();
        };
      return {
        onEnter: S0(A, l == null ? void 0 : l.props.onEnter),
        onExited: S0(U, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: g,
    portalRef: O,
    isTopModal: E,
    exited: w,
    hasTransition: m,
  };
}
const w4 = ["onChange", "maxRows", "minRows", "style", "value"];
function bl(e) {
  return parseInt(e, 10) || 0;
}
const S4 = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function x4(e) {
  return (
    e == null ||
    Object.keys(e).length === 0 ||
    (e.outerHeightStyle === 0 && !e.overflowing)
  );
}
const k4 = x.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: a, value: s } = t,
    l = ie(t, w4),
    { current: u } = x.useRef(s != null),
    c = x.useRef(null),
    d = jt(n, c),
    f = x.useRef(null),
    h = x.useCallback(() => {
      const w = c.current,
        m = Uo(w).getComputedStyle(w);
      if (m.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const y = f.current;
      (y.style.width = m.width),
        (y.value = w.value || t.placeholder || "x"),
        y.value.slice(-1) ===
          `
` && (y.value += " ");
      const v = m.boxSizing,
        S = bl(m.paddingBottom) + bl(m.paddingTop),
        k = bl(m.borderBottomWidth) + bl(m.borderTopWidth),
        C = y.scrollHeight;
      y.value = "x";
      const E = y.scrollHeight;
      let O = C;
      i && (O = Math.max(Number(i) * E, O)),
        o && (O = Math.min(Number(o) * E, O)),
        (O = Math.max(O, E));
      const R = O + (v === "border-box" ? S + k : 0),
        M = Math.abs(O - C) <= 1;
      return { outerHeightStyle: R, overflowing: M };
    }, [o, i, t.placeholder]),
    p = x.useCallback(() => {
      const w = h();
      if (x4(w)) return;
      const b = c.current;
      (b.style.height = `${w.outerHeightStyle}px`),
        (b.style.overflow = w.overflowing ? "hidden" : "");
    }, [h]);
  ro(() => {
    const w = () => {
      p();
    };
    let b;
    const m = DS(w),
      y = c.current,
      v = Uo(y);
    v.addEventListener("resize", m);
    let S;
    return (
      typeof ResizeObserver < "u" &&
        ((S = new ResizeObserver(w)), S.observe(y)),
      () => {
        m.clear(),
          cancelAnimationFrame(b),
          v.removeEventListener("resize", m),
          S && S.disconnect();
      }
    );
  }, [h, p]),
    ro(() => {
      p();
    });
  const g = (w) => {
    u || p(), r && r(w);
  };
  return B(x.Fragment, {
    children: [
      I("textarea", L({ value: s, onChange: g, ref: d, rows: i, style: a }, l)),
      I("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: f,
        tabIndex: -1,
        style: L({}, S4.shadow, a, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function Bs({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const C4 = x.createContext(void 0),
  Im = C4;
function qs() {
  return x.useContext(Im);
}
function E4(e) {
  return I(k3, L({}, e, { defaultTheme: Vc, themeId: _c }));
}
function H0(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ju(e, t = !1) {
  return (
    e &&
    ((H0(e.value) && e.value !== "") ||
      (t && H0(e.defaultValue) && e.defaultValue !== ""))
  );
}
function P4(e) {
  return e.startAdornment;
}
function R4(e) {
  return lt("MuiInputBase", e);
}
const O4 = Ze("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  Gi = O4,
  T4 = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  Qc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${pt(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  Gc = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  I4 = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: a,
        formControl: s,
        fullWidth: l,
        hiddenLabel: u,
        multiline: c,
        readOnly: d,
        size: f,
        startAdornment: h,
        type: p,
      } = e,
      g = {
        root: [
          "root",
          `color${pt(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          a && "focused",
          s && "formControl",
          f && f !== "medium" && `size${pt(f)}`,
          c && "multiline",
          h && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          d && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          p === "search" && "inputTypeSearch",
          c && "inputMultiline",
          f === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          h && "inputAdornedStart",
          i && "inputAdornedEnd",
          d && "readOnly",
        ],
      };
    return mt(g, R4, t);
  },
  Xc = le("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Qc })(
    ({ theme: e, ownerState: t }) =>
      L(
        {},
        e.typography.body1,
        {
          color: (e.vars || e).palette.text.primary,
          lineHeight: "1.4375em",
          boxSizing: "border-box",
          position: "relative",
          cursor: "text",
          display: "inline-flex",
          alignItems: "center",
          [`&.${Gi.disabled}`]: {
            color: (e.vars || e).palette.text.disabled,
            cursor: "default",
          },
        },
        t.multiline &&
          L({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
        t.fullWidth && { width: "100%" }
      )
  ),
  Zc = le("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Gc,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = L(
        { color: "currentColor" },
        e.vars
          ? { opacity: e.vars.opacity.inputPlaceholder }
          : { opacity: n ? 0.42 : 0.5 },
        {
          transition: e.transitions.create("opacity", {
            duration: e.transitions.duration.shorter,
          }),
        }
      ),
      o = { opacity: "0 !important" },
      i = e.vars
        ? { opacity: e.vars.opacity.inputPlaceholder }
        : { opacity: n ? 0.42 : 0.5 };
    return L(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Gi.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${Gi.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill",
        },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0,
      },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  M4 = I(E4, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  _4 = x.forwardRef(function (t, n) {
    var r;
    const o = vt({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: a,
        autoFocus: s,
        className: l,
        components: u = {},
        componentsProps: c = {},
        defaultValue: d,
        disabled: f,
        disableInjectingGlobalStyles: h,
        endAdornment: p,
        fullWidth: g = !1,
        id: w,
        inputComponent: b = "input",
        inputProps: m = {},
        inputRef: y,
        maxRows: v,
        minRows: S,
        multiline: k = !1,
        name: C,
        onBlur: E,
        onChange: O,
        onClick: R,
        onFocus: M,
        onKeyDown: N,
        onKeyUp: $,
        placeholder: P,
        readOnly: T,
        renderSuffix: A,
        rows: U,
        slotProps: _ = {},
        slots: j = {},
        startAdornment: D,
        type: q = "text",
        value: H,
      } = o,
      G = ie(o, T4),
      Q = m.value != null ? m.value : H,
      { current: V } = x.useRef(Q != null),
      Y = x.useRef(),
      re = x.useCallback((be) => {}, []),
      Ce = jt(Y, y, m.ref, re),
      [ce, me] = x.useState(!1),
      oe = qs(),
      ee = Bs({
        props: o,
        muiFormControl: oe,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (ee.focused = oe ? oe.focused : ce),
      x.useEffect(() => {
        !oe && f && ce && (me(!1), E && E());
      }, [oe, f, ce, E]);
    const z = oe && oe.onFilled,
      W = oe && oe.onEmpty,
      X = x.useCallback(
        (be) => {
          ju(be) ? z && z() : W && W();
        },
        [z, W]
      );
    ro(() => {
      V && X({ value: Q });
    }, [Q, X, V]);
    const he = (be) => {
        if (ee.disabled) {
          be.stopPropagation();
          return;
        }
        M && M(be),
          m.onFocus && m.onFocus(be),
          oe && oe.onFocus ? oe.onFocus(be) : me(!0);
      },
      se = (be) => {
        E && E(be),
          m.onBlur && m.onBlur(be),
          oe && oe.onBlur ? oe.onBlur(be) : me(!1);
      },
      we = (be, ...te) => {
        if (!V) {
          const Tn = be.target || Y.current;
          if (Tn == null) throw new Error(Do(1));
          X({ value: Tn.value });
        }
        m.onChange && m.onChange(be, ...te), O && O(be, ...te);
      };
    x.useEffect(() => {
      X(Y.current);
    }, []);
    const Oe = (be) => {
      Y.current && be.currentTarget === be.target && Y.current.focus(),
        R && R(be);
    };
    let We = b,
      ae = m;
    k &&
      We === "input" &&
      (U
        ? (ae = L({ type: void 0, minRows: U, maxRows: U }, ae))
        : (ae = L({ type: void 0, maxRows: v, minRows: S }, ae)),
      (We = k4));
    const Te = (be) => {
      X(
        be.animationName === "mui-auto-fill-cancel" ? Y.current : { value: "x" }
      );
    };
    x.useEffect(() => {
      oe && oe.setAdornedStart(!!D);
    }, [oe, D]);
    const yt = L({}, o, {
        color: ee.color || "primary",
        disabled: ee.disabled,
        endAdornment: p,
        error: ee.error,
        focused: ee.focused,
        formControl: oe,
        fullWidth: g,
        hiddenLabel: ee.hiddenLabel,
        multiline: k,
        size: ee.size,
        startAdornment: D,
        type: q,
      }),
      Pe = I4(yt),
      Et = j.root || u.Root || Xc,
      Bn = _.root || c.root || {},
      pn = j.input || u.Input || Zc;
    return (
      (ae = L({}, ae, (r = _.input) != null ? r : c.input)),
      B(x.Fragment, {
        children: [
          !h && M4,
          B(
            Et,
            L(
              {},
              Bn,
              !Au(Et) && { ownerState: L({}, yt, Bn.ownerState) },
              { ref: n, onClick: Oe },
              G,
              {
                className: ge(
                  Pe.root,
                  Bn.className,
                  l,
                  T && "MuiInputBase-readOnly"
                ),
                children: [
                  D,
                  I(Im.Provider, {
                    value: null,
                    children: I(
                      pn,
                      L(
                        {
                          ownerState: yt,
                          "aria-invalid": ee.error,
                          "aria-describedby": i,
                          autoComplete: a,
                          autoFocus: s,
                          defaultValue: d,
                          disabled: ee.disabled,
                          id: w,
                          onAnimationStart: Te,
                          name: C,
                          placeholder: P,
                          readOnly: T,
                          required: ee.required,
                          rows: U,
                          value: Q,
                          onKeyDown: N,
                          onKeyUp: $,
                          type: q,
                        },
                        ae,
                        !Au(pn) && {
                          as: We,
                          ownerState: L({}, yt, ae.ownerState),
                        },
                        {
                          ref: Ce,
                          className: ge(
                            Pe.input,
                            ae.className,
                            T && "MuiInputBase-readOnly"
                          ),
                          onBlur: se,
                          onChange: we,
                          onFocus: he,
                        }
                      )
                    ),
                  }),
                  p,
                  A ? A(L({}, ee, { startAdornment: D })) : null,
                ],
              }
            )
          ),
        ],
      })
    );
  }),
  Mm = _4;
function $4(e) {
  return lt("MuiInput", e);
}
const N4 = L({}, Gi, Ze("MuiInput", ["root", "underline", "input"])),
  wa = N4;
function L4(e) {
  return lt("MuiOutlinedInput", e);
}
const A4 = L(
    {},
    Gi,
    Ze("MuiOutlinedInput", ["root", "notchedOutline", "input"])
  ),
  Or = A4;
function j4(e) {
  return lt("MuiFilledInput", e);
}
const z4 = L({}, Gi, Ze("MuiFilledInput", ["root", "underline", "input"])),
  ho = z4,
  D4 = g_(I("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  U4 = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  F4 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  B4 = x.forwardRef(function (t, n) {
    const r = XS(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        addEndListener: i,
        appear: a = !0,
        children: s,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: f,
        onExit: h,
        onExited: p,
        onExiting: g,
        style: w,
        timeout: b = o,
        TransitionComponent: m = tx,
      } = t,
      y = ie(t, U4),
      v = x.useRef(null),
      S = jt(v, s.ref, n),
      k = (P) => (T) => {
        if (P) {
          const A = v.current;
          T === void 0 ? P(A) : P(A, T);
        }
      },
      C = k(f),
      E = k((P, T) => {
        nx(P);
        const A = Lu({ style: w, timeout: b, easing: l }, { mode: "enter" });
        (P.style.webkitTransition = r.transitions.create("opacity", A)),
          (P.style.transition = r.transitions.create("opacity", A)),
          c && c(P, T);
      }),
      O = k(d),
      R = k(g),
      M = k((P) => {
        const T = Lu({ style: w, timeout: b, easing: l }, { mode: "exit" });
        (P.style.webkitTransition = r.transitions.create("opacity", T)),
          (P.style.transition = r.transitions.create("opacity", T)),
          h && h(P);
      }),
      N = k(p);
    return I(
      m,
      L(
        {
          appear: a,
          in: u,
          nodeRef: v,
          onEnter: E,
          onEntered: O,
          onEntering: C,
          onExit: M,
          onExited: N,
          onExiting: R,
          addEndListener: (P) => {
            i && i(v.current, P);
          },
          timeout: b,
        },
        y,
        {
          children: (P, T) =>
            x.cloneElement(
              s,
              L(
                {
                  style: L(
                    {
                      opacity: 0,
                      visibility: P === "exited" && !u ? "hidden" : void 0,
                    },
                    F4[P],
                    w,
                    s.props.style
                  ),
                  ref: S,
                },
                T
              )
            ),
        }
      )
    );
  }),
  q4 = B4;
function W4(e) {
  return lt("MuiBackdrop", e);
}
Ze("MuiBackdrop", ["root", "invisible"]);
const H4 = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  V4 = (e) => {
    const { classes: t, invisible: n } = e;
    return mt({ root: ["root", n && "invisible"] }, W4, t);
  },
  K4 = le("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    L(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  Q4 = x.forwardRef(function (t, n) {
    var r, o, i;
    const a = vt({ props: t, name: "MuiBackdrop" }),
      {
        children: s,
        className: l,
        component: u = "div",
        components: c = {},
        componentsProps: d = {},
        invisible: f = !1,
        open: h,
        slotProps: p = {},
        slots: g = {},
        TransitionComponent: w = q4,
        transitionDuration: b,
      } = a,
      m = ie(a, H4),
      y = L({}, a, { component: u, invisible: f }),
      v = V4(y),
      S = (r = p.root) != null ? r : d.root;
    return I(
      w,
      L({ in: h, timeout: b }, m, {
        children: I(
          K4,
          L({ "aria-hidden": !0 }, S, {
            as: (o = (i = g.root) != null ? i : c.Root) != null ? o : u,
            className: ge(v.root, l, S == null ? void 0 : S.className),
            ownerState: L({}, y, S == null ? void 0 : S.ownerState),
            classes: v,
            ref: n,
            children: s,
          })
        ),
      })
    );
  }),
  G4 = Q4;
function X4(e) {
  return lt("MuiModal", e);
}
Ze("MuiModal", ["root", "hidden", "backdrop"]);
const Z4 = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  Y4 = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return mt(
      { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
      X4,
      r
    );
  },
  J4 = le("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    L(
      {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  e$ = le(G4, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  t$ = x.forwardRef(function (t, n) {
    var r, o, i, a, s, l;
    const u = vt({ name: "MuiModal", props: t }),
      {
        BackdropComponent: c = e$,
        BackdropProps: d,
        className: f,
        closeAfterTransition: h = !1,
        children: p,
        container: g,
        component: w,
        components: b = {},
        componentsProps: m = {},
        disableAutoFocus: y = !1,
        disableEnforceFocus: v = !1,
        disableEscapeKeyDown: S = !1,
        disablePortal: k = !1,
        disableRestoreFocus: C = !1,
        disableScrollLock: E = !1,
        hideBackdrop: O = !1,
        keepMounted: R = !1,
        onBackdropClick: M,
        open: N,
        slotProps: $,
        slots: P,
      } = u,
      T = ie(u, Z4),
      A = L({}, u, {
        closeAfterTransition: h,
        disableAutoFocus: y,
        disableEnforceFocus: v,
        disableEscapeKeyDown: S,
        disablePortal: k,
        disableRestoreFocus: C,
        disableScrollLock: E,
        hideBackdrop: O,
        keepMounted: R,
      }),
      {
        getRootProps: U,
        getBackdropProps: _,
        getTransitionProps: j,
        portalRef: D,
        isTopModal: q,
        exited: H,
        hasTransition: G,
      } = b4(L({}, A, { rootRef: n })),
      Q = L({}, A, { exited: H }),
      V = Y4(Q),
      Y = {};
    if ((p.props.tabIndex === void 0 && (Y.tabIndex = "-1"), G)) {
      const { onEnter: z, onExited: W } = j();
      (Y.onEnter = z), (Y.onExited = W);
    }
    const re =
        (r = (o = P == null ? void 0 : P.root) != null ? o : b.Root) != null
          ? r
          : J4,
      Ce =
        (i = (a = P == null ? void 0 : P.backdrop) != null ? a : b.Backdrop) !=
        null
          ? i
          : c,
      ce = (s = $ == null ? void 0 : $.root) != null ? s : m.root,
      me = (l = $ == null ? void 0 : $.backdrop) != null ? l : m.backdrop,
      oe = Qi({
        elementType: re,
        externalSlotProps: ce,
        externalForwardedProps: T,
        getSlotProps: U,
        additionalProps: { ref: n, as: w },
        ownerState: Q,
        className: ge(
          f,
          ce == null ? void 0 : ce.className,
          V == null ? void 0 : V.root,
          !Q.open && Q.exited && (V == null ? void 0 : V.hidden)
        ),
      }),
      ee = Qi({
        elementType: Ce,
        externalSlotProps: me,
        additionalProps: d,
        getSlotProps: (z) =>
          _(
            L({}, z, {
              onClick: (W) => {
                M && M(W), z != null && z.onClick && z.onClick(W);
              },
            })
          ),
        className: ge(
          me == null ? void 0 : me.className,
          d == null ? void 0 : d.className,
          V == null ? void 0 : V.backdrop
        ),
        ownerState: Q,
      });
    return !R && !N && (!G || H)
      ? null
      : I(c4, {
          ref: D,
          container: g,
          disablePortal: k,
          children: B(
            re,
            L({}, oe, {
              children: [
                !O && c ? I(Ce, L({}, ee)) : null,
                I(l4, {
                  disableEnforceFocus: v,
                  disableAutoFocus: y,
                  disableRestoreFocus: C,
                  isEnabled: q,
                  open: N,
                  children: x.cloneElement(p, Y),
                }),
              ],
            })
          ),
        });
  }),
  n$ = t$,
  r$ = Ze("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  V0 = r$,
  o$ = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  i$ = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = mt({ root: ["root", !n && "underline"], input: ["input"] }, j4, t);
    return L({}, t, o);
  },
  a$ = le(Xc, {
    shouldForwardProp: (e) => Fn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Qc(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      a = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      s = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return L(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
          "@media (hover: none)": {
            backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
          },
        },
        [`&.${ho.focused}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        },
        [`&.${ho.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s,
        },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${
            (n = (e.vars || e).palette[t.color || "primary"]) == null
              ? void 0
              : n.main
          }`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${ho.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${ho.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (e.vars || e).palette.error.main,
          },
        },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
              : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter,
          }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${ho.disabled}, .${ho.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${ho.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        L(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel &&
            t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  s$ = le(Zc, { name: "MuiFilledInput", slot: "Input", overridesResolver: Gc })(
    ({ theme: e, ownerState: t }) =>
      L(
        { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
        !e.vars && {
          "&:-webkit-autofill": {
            WebkitBoxShadow:
              e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
            WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
            caretColor: e.palette.mode === "light" ? null : "#fff",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
        },
        e.vars && {
          "&:-webkit-autofill": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
          },
          [e.getColorSchemeSelector("dark")]: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #266798 inset",
              WebkitTextFillColor: "#fff",
              caretColor: "#fff",
            },
          },
        },
        t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
        t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
        t.startAdornment && { paddingLeft: 0 },
        t.endAdornment && { paddingRight: 0 },
        t.hiddenLabel &&
          t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
        t.multiline && {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      )
  ),
  ox = x.forwardRef(function (t, n) {
    var r, o, i, a;
    const s = vt({ props: t, name: "MuiFilledInput" }),
      {
        components: l = {},
        componentsProps: u,
        fullWidth: c = !1,
        inputComponent: d = "input",
        multiline: f = !1,
        slotProps: h,
        slots: p = {},
        type: g = "text",
      } = s,
      w = ie(s, o$),
      b = L({}, s, { fullWidth: c, inputComponent: d, multiline: f, type: g }),
      m = i$(s),
      y = { root: { ownerState: b }, input: { ownerState: b } },
      v = h ?? u ? an(y, h ?? u) : y,
      S = (r = (o = p.root) != null ? o : l.Root) != null ? r : a$,
      k = (i = (a = p.input) != null ? a : l.Input) != null ? i : s$;
    return I(
      Mm,
      L(
        {
          slots: { root: S, input: k },
          componentsProps: v,
          fullWidth: c,
          inputComponent: d,
          multiline: f,
          ref: n,
          type: g,
        },
        w,
        { classes: m }
      )
    );
  });
ox.muiName = "Input";
const l$ = ox;
function u$(e) {
  return lt("MuiFormControl", e);
}
Ze("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const c$ = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  d$ = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = {
        root: ["root", n !== "none" && `margin${pt(n)}`, r && "fullWidth"],
      };
    return mt(o, u$, t);
  },
  f$ = le("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      L({}, t.root, t[`margin${pt(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    L(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  p$ = x.forwardRef(function (t, n) {
    const r = vt({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: a = "primary",
        component: s = "div",
        disabled: l = !1,
        error: u = !1,
        focused: c,
        fullWidth: d = !1,
        hiddenLabel: f = !1,
        margin: h = "none",
        required: p = !1,
        size: g = "medium",
        variant: w = "outlined",
      } = r,
      b = ie(r, c$),
      m = L({}, r, {
        color: a,
        component: s,
        disabled: l,
        error: u,
        fullWidth: d,
        hiddenLabel: f,
        margin: h,
        required: p,
        size: g,
        variant: w,
      }),
      y = d$(m),
      [v, S] = x.useState(() => {
        let $ = !1;
        return (
          o &&
            x.Children.forEach(o, (P) => {
              if (!Xd(P, ["Input", "Select"])) return;
              const T = Xd(P, ["Select"]) ? P.props.input : P;
              T && P4(T.props) && ($ = !0);
            }),
          $
        );
      }),
      [k, C] = x.useState(() => {
        let $ = !1;
        return (
          o &&
            x.Children.forEach(o, (P) => {
              Xd(P, ["Input", "Select"]) &&
                (ju(P.props, !0) || ju(P.props.inputProps, !0)) &&
                ($ = !0);
            }),
          $
        );
      }),
      [E, O] = x.useState(!1);
    l && E && O(!1);
    const R = c !== void 0 && !l ? c : E;
    let M;
    const N = x.useMemo(
      () => ({
        adornedStart: v,
        setAdornedStart: S,
        color: a,
        disabled: l,
        error: u,
        filled: k,
        focused: R,
        fullWidth: d,
        hiddenLabel: f,
        size: g,
        onBlur: () => {
          O(!1);
        },
        onEmpty: () => {
          C(!1);
        },
        onFilled: () => {
          C(!0);
        },
        onFocus: () => {
          O(!0);
        },
        registerEffect: M,
        required: p,
        variant: w,
      }),
      [v, a, l, u, k, R, d, f, M, p, g, w]
    );
    return I(Im.Provider, {
      value: N,
      children: I(
        f$,
        L({ as: s, ownerState: m, className: ge(y.root, i), ref: n }, b, {
          children: o,
        })
      ),
    });
  }),
  h$ = p$;
function m$(e) {
  return lt("MuiFormLabel", e);
}
const v$ = Ze("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  Wa = v$,
  y$ = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "required",
  ],
  g$ = (e) => {
    const {
        classes: t,
        color: n,
        focused: r,
        disabled: o,
        error: i,
        filled: a,
        required: s,
      } = e,
      l = {
        root: [
          "root",
          `color${pt(n)}`,
          o && "disabled",
          i && "error",
          a && "filled",
          r && "focused",
          s && "required",
        ],
        asterisk: ["asterisk", i && "error"],
      };
    return mt(l, m$, t);
  },
  b$ = le("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      L(
        {},
        t.root,
        e.color === "secondary" && t.colorSecondary,
        e.filled && t.filled
      ),
  })(({ theme: e, ownerState: t }) =>
    L({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${Wa.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${Wa.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${Wa.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  w$ = le("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (e, t) => t.asterisk,
  })(({ theme: e }) => ({
    [`&.${Wa.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  S$ = x.forwardRef(function (t, n) {
    const r = vt({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: a = "label" } = r,
      s = ie(r, y$),
      l = qs(),
      u = Bs({
        props: r,
        muiFormControl: l,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      c = L({}, r, {
        color: u.color || "primary",
        component: a,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      d = g$(c);
    return B(
      b$,
      L({ as: a, ownerState: c, className: ge(d.root, i), ref: n }, s, {
        children: [
          o,
          u.required &&
            B(w$, {
              ownerState: c,
              "aria-hidden": !0,
              className: d.asterisk,
              children: [" ", "*"],
            }),
        ],
      })
    );
  }),
  x$ = S$,
  k$ = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function Dp(e) {
  return `scale(${e}, ${e ** 2})`;
}
const C$ = {
    entering: { opacity: 1, transform: Dp(1) },
    entered: { opacity: 1, transform: "none" },
  },
  nf =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  ix = x.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: a,
        in: s,
        onEnter: l,
        onEntered: u,
        onEntering: c,
        onExit: d,
        onExited: f,
        onExiting: h,
        style: p,
        timeout: g = "auto",
        TransitionComponent: w = tx,
      } = t,
      b = ie(t, k$),
      m = US(),
      y = x.useRef(),
      v = XS(),
      S = x.useRef(null),
      k = jt(S, i.ref, n),
      C = (T) => (A) => {
        if (T) {
          const U = S.current;
          A === void 0 ? T(U) : T(U, A);
        }
      },
      E = C(c),
      O = C((T, A) => {
        nx(T);
        const {
          duration: U,
          delay: _,
          easing: j,
        } = Lu({ style: p, timeout: g, easing: a }, { mode: "enter" });
        let D;
        g === "auto"
          ? ((D = v.transitions.getAutoHeightDuration(T.clientHeight)),
            (y.current = D))
          : (D = U),
          (T.style.transition = [
            v.transitions.create("opacity", { duration: D, delay: _ }),
            v.transitions.create("transform", {
              duration: nf ? D : D * 0.666,
              delay: _,
              easing: j,
            }),
          ].join(",")),
          l && l(T, A);
      }),
      R = C(u),
      M = C(h),
      N = C((T) => {
        const {
          duration: A,
          delay: U,
          easing: _,
        } = Lu({ style: p, timeout: g, easing: a }, { mode: "exit" });
        let j;
        g === "auto"
          ? ((j = v.transitions.getAutoHeightDuration(T.clientHeight)),
            (y.current = j))
          : (j = A),
          (T.style.transition = [
            v.transitions.create("opacity", { duration: j, delay: U }),
            v.transitions.create("transform", {
              duration: nf ? j : j * 0.666,
              delay: nf ? U : U || j * 0.333,
              easing: _,
            }),
          ].join(",")),
          (T.style.opacity = 0),
          (T.style.transform = Dp(0.75)),
          d && d(T);
      }),
      $ = C(f);
    return I(
      w,
      L(
        {
          appear: o,
          in: s,
          nodeRef: S,
          onEnter: O,
          onEntered: R,
          onEntering: E,
          onExit: N,
          onExited: $,
          onExiting: M,
          addEndListener: (T) => {
            g === "auto" && m.start(y.current || 0, T), r && r(S.current, T);
          },
          timeout: g === "auto" ? null : g,
        },
        b,
        {
          children: (T, A) =>
            x.cloneElement(
              i,
              L(
                {
                  style: L(
                    {
                      opacity: 0,
                      transform: Dp(0.75),
                      visibility: T === "exited" && !s ? "hidden" : void 0,
                    },
                    C$[T],
                    p,
                    i.props.style
                  ),
                  ref: k,
                },
                A
              )
            ),
        }
      )
    );
  });
ix.muiSupportAuto = !0;
const E$ = ix,
  P$ = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  R$ = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = mt({ root: ["root", !n && "underline"], input: ["input"] }, $4, t);
    return L({}, t, o);
  },
  O$ = le(Xc, {
    shouldForwardProp: (e) => Fn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Qc(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.42)"
        : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars &&
        (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      L(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${wa.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${wa.error}`]: {
            "&::before, &::after": {
              borderBottomColor: (e.vars || e).palette.error.main,
            },
          },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", {
              duration: e.transitions.duration.shorter,
            }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${wa.disabled}, .${wa.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${wa.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  T$ = le(Zc, { name: "MuiInput", slot: "Input", overridesResolver: Gc })({}),
  ax = x.forwardRef(function (t, n) {
    var r, o, i, a;
    const s = vt({ props: t, name: "MuiInput" }),
      {
        disableUnderline: l,
        components: u = {},
        componentsProps: c,
        fullWidth: d = !1,
        inputComponent: f = "input",
        multiline: h = !1,
        slotProps: p,
        slots: g = {},
        type: w = "text",
      } = s,
      b = ie(s, P$),
      m = R$(s),
      v = { root: { ownerState: { disableUnderline: l } } },
      S = p ?? c ? an(p ?? c, v) : v,
      k = (r = (o = g.root) != null ? o : u.Root) != null ? r : O$,
      C = (i = (a = g.input) != null ? a : u.Input) != null ? i : T$;
    return I(
      Mm,
      L(
        {
          slots: { root: k, input: C },
          slotProps: S,
          fullWidth: d,
          inputComponent: f,
          multiline: h,
          ref: n,
          type: w,
        },
        b,
        { classes: m }
      )
    );
  });
ax.muiName = "Input";
const I$ = ax;
function M$(e) {
  return lt("MuiInputLabel", e);
}
Ze("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const _$ = ["disableAnimation", "margin", "shrink", "variant", "className"],
  $$ = (e) => {
    const {
        classes: t,
        formControl: n,
        size: r,
        shrink: o,
        disableAnimation: i,
        variant: a,
        required: s,
      } = e,
      l = {
        root: [
          "root",
          n && "formControl",
          !i && "animated",
          o && "shrink",
          r && r !== "normal" && `size${pt(r)}`,
          a,
        ],
        asterisk: [s && "asterisk"],
      },
      u = mt(l, M$, t);
    return L({}, t, u);
  },
  N$ = le(x$, {
    shouldForwardProp: (e) => Fn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Wa.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    L(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && {
        position: "absolute",
        left: 0,
        top: 0,
        transform: "translate(0, 20px) scale(1)",
      },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && {
        transform: "translate(0, -1.5px) scale(0.75)",
        transformOrigin: "top left",
        maxWidth: "133%",
      },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        L(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            L(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && {
                transform: "translate(12px, 4px) scale(0.75)",
              }
            )
        ),
      t.variant === "outlined" &&
        L(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  L$ = x.forwardRef(function (t, n) {
    const r = vt({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: a } = r,
      s = ie(r, _$),
      l = qs();
    let u = i;
    typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
    const c = Bs({
        props: r,
        muiFormControl: l,
        states: ["size", "variant", "required", "focused"],
      }),
      d = L({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: c.size,
        variant: c.variant,
        required: c.required,
        focused: c.focused,
      }),
      f = $$(d);
    return I(
      N$,
      L(
        { "data-shrink": u, ownerState: d, ref: n, className: ge(f.root, a) },
        s,
        { classes: f }
      )
    );
  }),
  A$ = L$,
  j$ = x.createContext({}),
  Up = j$;
function z$(e) {
  return lt("MuiList", e);
}
Ze("MuiList", ["root", "padding", "dense", "subheader"]);
const D$ = [
    "children",
    "className",
    "component",
    "dense",
    "disablePadding",
    "subheader",
  ],
  U$ = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return mt(
      { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
      z$,
      t
    );
  },
  F$ = le("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disablePadding && t.padding,
        n.dense && t.dense,
        n.subheader && t.subheader,
      ];
    },
  })(({ ownerState: e }) =>
    L(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  B$ = x.forwardRef(function (t, n) {
    const r = vt({ props: t, name: "MuiList" }),
      {
        children: o,
        className: i,
        component: a = "ul",
        dense: s = !1,
        disablePadding: l = !1,
        subheader: u,
      } = r,
      c = ie(r, D$),
      d = x.useMemo(() => ({ dense: s }), [s]),
      f = L({}, r, { component: a, dense: s, disablePadding: l }),
      h = U$(f);
    return I(Up.Provider, {
      value: d,
      children: B(
        F$,
        L({ as: a, className: ge(h.root, i), ref: n, ownerState: f }, c, {
          children: [u, o],
        })
      ),
    });
  }),
  q$ = B$,
  W$ = Ze("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  K0 = W$,
  H$ = Ze("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]),
  Q0 = H$,
  V$ = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function rf(e, t, n) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
    ? t.nextElementSibling
    : n
    ? null
    : e.firstChild;
}
function G0(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function sx(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0
      ? !1
      : t.repeating
      ? n[0] === t.keys[0]
      : n.indexOf(t.keys.join("")) === 0
  );
}
function Sa(e, t, n, r, o, i) {
  let a = !1,
    s = o(e, t, t ? n : !1);
  for (; s; ) {
    if (s === e.firstChild) {
      if (a) return !1;
      a = !0;
    }
    const l = r ? !1 : s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || !sx(s, i) || l) s = o(e, s, n);
    else return s.focus(), !0;
  }
  return !1;
}
const K$ = x.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: a,
        className: s,
        disabledItemsFocusable: l = !1,
        disableListWrap: u = !1,
        onKeyDown: c,
        variant: d = "selectedMenu",
      } = t,
      f = ie(t, V$),
      h = x.useRef(null),
      p = x.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    ro(() => {
      o && h.current.focus();
    }, [o]),
      x.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (y, { direction: v }) => {
            const S = !h.current.style.width;
            if (y.clientHeight < h.current.clientHeight && S) {
              const k = `${FS(sn(y))}px`;
              (h.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] =
                k),
                (h.current.style.width = `calc(100% + ${k})`);
            }
            return h.current;
          },
        }),
        []
      );
    const g = (y) => {
        const v = h.current,
          S = y.key,
          k = sn(v).activeElement;
        if (S === "ArrowDown") y.preventDefault(), Sa(v, k, u, l, rf);
        else if (S === "ArrowUp") y.preventDefault(), Sa(v, k, u, l, G0);
        else if (S === "Home") y.preventDefault(), Sa(v, null, u, l, rf);
        else if (S === "End") y.preventDefault(), Sa(v, null, u, l, G0);
        else if (S.length === 1) {
          const C = p.current,
            E = S.toLowerCase(),
            O = performance.now();
          C.keys.length > 0 &&
            (O - C.lastTime > 500
              ? ((C.keys = []), (C.repeating = !0), (C.previousKeyMatched = !0))
              : C.repeating && E !== C.keys[0] && (C.repeating = !1)),
            (C.lastTime = O),
            C.keys.push(E);
          const R = k && !C.repeating && sx(k, C);
          C.previousKeyMatched && (R || Sa(v, k, !1, l, rf, C))
            ? y.preventDefault()
            : (C.previousKeyMatched = !1);
        }
        c && c(y);
      },
      w = jt(h, n);
    let b = -1;
    x.Children.forEach(a, (y, v) => {
      if (!x.isValidElement(y)) {
        b === v && ((b += 1), b >= a.length && (b = -1));
        return;
      }
      y.props.disabled ||
        (((d === "selectedMenu" && y.props.selected) || b === -1) && (b = v)),
        b === v &&
          (y.props.disabled ||
            y.props.muiSkipListHighlight ||
            y.type.muiSkipListHighlight) &&
          ((b += 1), b >= a.length && (b = -1));
    });
    const m = x.Children.map(a, (y, v) => {
      if (v === b) {
        const S = {};
        return (
          i && (S.autoFocus = !0),
          y.props.tabIndex === void 0 &&
            d === "selectedMenu" &&
            (S.tabIndex = 0),
          x.cloneElement(y, S)
        );
      }
      return y;
    });
    return I(
      q$,
      L(
        {
          role: "menu",
          ref: w,
          className: s,
          onKeyDown: g,
          tabIndex: o ? 0 : -1,
        },
        f,
        { children: m }
      )
    );
  }),
  Q$ = K$;
function G$(e) {
  return lt("MuiPopover", e);
}
Ze("MuiPopover", ["root", "paper"]);
const X$ = ["onEntering"],
  Z$ = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  Y$ = ["slotProps"];
function X0(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.height / 2)
      : t === "bottom" && (n = e.height),
    n
  );
}
function Z0(e, t) {
  let n = 0;
  return (
    typeof t == "number"
      ? (n = t)
      : t === "center"
      ? (n = e.width / 2)
      : t === "right" && (n = e.width),
    n
  );
}
function Y0(e) {
  return [e.horizontal, e.vertical]
    .map((t) => (typeof t == "number" ? `${t}px` : t))
    .join(" ");
}
function of(e) {
  return typeof e == "function" ? e() : e;
}
const J$ = (e) => {
    const { classes: t } = e;
    return mt({ root: ["root"], paper: ["paper"] }, G$, t);
  },
  eN = le(n$, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  lx = le(__, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  tN = x.forwardRef(function (t, n) {
    var r, o, i;
    const a = vt({ props: t, name: "MuiPopover" }),
      {
        action: s,
        anchorEl: l,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: c,
        anchorReference: d = "anchorEl",
        children: f,
        className: h,
        container: p,
        elevation: g = 8,
        marginThreshold: w = 16,
        open: b,
        PaperProps: m = {},
        slots: y,
        slotProps: v,
        transformOrigin: S = { vertical: "top", horizontal: "left" },
        TransitionComponent: k = E$,
        transitionDuration: C = "auto",
        TransitionProps: { onEntering: E } = {},
        disableScrollLock: O = !1,
      } = a,
      R = ie(a.TransitionProps, X$),
      M = ie(a, Z$),
      N = (r = v == null ? void 0 : v.paper) != null ? r : m,
      $ = x.useRef(),
      P = jt($, N.ref),
      T = L({}, a, {
        anchorOrigin: u,
        anchorReference: d,
        elevation: g,
        marginThreshold: w,
        externalPaperSlotProps: N,
        transformOrigin: S,
        TransitionComponent: k,
        transitionDuration: C,
        TransitionProps: R,
      }),
      A = J$(T),
      U = x.useCallback(() => {
        if (d === "anchorPosition") return c;
        const z = of(l),
          X = (
            z && z.nodeType === 1 ? z : sn($.current).body
          ).getBoundingClientRect();
        return {
          top: X.top + X0(X, u.vertical),
          left: X.left + Z0(X, u.horizontal),
        };
      }, [l, u.horizontal, u.vertical, c, d]),
      _ = x.useCallback(
        (z) => ({
          vertical: X0(z, S.vertical),
          horizontal: Z0(z, S.horizontal),
        }),
        [S.horizontal, S.vertical]
      ),
      j = x.useCallback(
        (z) => {
          const W = { width: z.offsetWidth, height: z.offsetHeight },
            X = _(W);
          if (d === "none")
            return { top: null, left: null, transformOrigin: Y0(X) };
          const he = U();
          let se = he.top - X.vertical,
            we = he.left - X.horizontal;
          const Oe = se + W.height,
            We = we + W.width,
            ae = Uo(of(l)),
            Te = ae.innerHeight - w,
            yt = ae.innerWidth - w;
          if (w !== null && se < w) {
            const Pe = se - w;
            (se -= Pe), (X.vertical += Pe);
          } else if (w !== null && Oe > Te) {
            const Pe = Oe - Te;
            (se -= Pe), (X.vertical += Pe);
          }
          if (w !== null && we < w) {
            const Pe = we - w;
            (we -= Pe), (X.horizontal += Pe);
          } else if (We > yt) {
            const Pe = We - yt;
            (we -= Pe), (X.horizontal += Pe);
          }
          return {
            top: `${Math.round(se)}px`,
            left: `${Math.round(we)}px`,
            transformOrigin: Y0(X),
          };
        },
        [l, d, U, _, w]
      ),
      [D, q] = x.useState(b),
      H = x.useCallback(() => {
        const z = $.current;
        if (!z) return;
        const W = j(z);
        W.top !== null && (z.style.top = W.top),
          W.left !== null && (z.style.left = W.left),
          (z.style.transformOrigin = W.transformOrigin),
          q(!0);
      }, [j]);
    x.useEffect(
      () => (
        O && window.addEventListener("scroll", H),
        () => window.removeEventListener("scroll", H)
      ),
      [l, O, H]
    );
    const G = (z, W) => {
        E && E(z, W), H();
      },
      Q = () => {
        q(!1);
      };
    x.useEffect(() => {
      b && H();
    }),
      x.useImperativeHandle(
        s,
        () =>
          b
            ? {
                updatePosition: () => {
                  H();
                },
              }
            : null,
        [b, H]
      ),
      x.useEffect(() => {
        if (!b) return;
        const z = DS(() => {
            H();
          }),
          W = Uo(l);
        return (
          W.addEventListener("resize", z),
          () => {
            z.clear(), W.removeEventListener("resize", z);
          }
        );
      }, [l, b, H]);
    let V = C;
    C === "auto" && !k.muiSupportAuto && (V = void 0);
    const Y = p || (l ? sn(of(l)).body : void 0),
      re = (o = y == null ? void 0 : y.root) != null ? o : eN,
      Ce = (i = y == null ? void 0 : y.paper) != null ? i : lx,
      ce = Qi({
        elementType: Ce,
        externalSlotProps: L({}, N, {
          style: D ? N.style : L({}, N.style, { opacity: 0 }),
        }),
        additionalProps: { elevation: g, ref: P },
        ownerState: T,
        className: ge(A.paper, N == null ? void 0 : N.className),
      }),
      me = Qi({
        elementType: re,
        externalSlotProps: (v == null ? void 0 : v.root) || {},
        externalForwardedProps: M,
        additionalProps: {
          ref: n,
          slotProps: { backdrop: { invisible: !0 } },
          container: Y,
          open: b,
        },
        ownerState: T,
        className: ge(A.root, h),
      }),
      { slotProps: oe } = me,
      ee = ie(me, Y$);
    return I(
      re,
      L({}, ee, !Au(re) && { slotProps: oe, disableScrollLock: O }, {
        children: I(
          k,
          L({ appear: !0, in: b, onEntering: G, onExited: Q, timeout: V }, R, {
            children: I(Ce, L({}, ce, { children: f })),
          })
        ),
      })
    );
  }),
  nN = tN;
function rN(e) {
  return lt("MuiMenu", e);
}
Ze("MuiMenu", ["root", "paper", "list"]);
const oN = ["onEntering"],
  iN = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  aN = { vertical: "top", horizontal: "right" },
  sN = { vertical: "top", horizontal: "left" },
  lN = (e) => {
    const { classes: t } = e;
    return mt({ root: ["root"], paper: ["paper"], list: ["list"] }, rN, t);
  },
  uN = le(nN, {
    shouldForwardProp: (e) => Fn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  cN = le(lx, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  dN = le(Q$, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list,
  })({ outline: 0 }),
  fN = x.forwardRef(function (t, n) {
    var r, o;
    const i = vt({ props: t, name: "MuiMenu" }),
      {
        autoFocus: a = !0,
        children: s,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: c = {},
        onClose: d,
        open: f,
        PaperProps: h = {},
        PopoverClasses: p,
        transitionDuration: g = "auto",
        TransitionProps: { onEntering: w } = {},
        variant: b = "selectedMenu",
        slots: m = {},
        slotProps: y = {},
      } = i,
      v = ie(i.TransitionProps, oN),
      S = ie(i, iN),
      k = eM(),
      C = L({}, i, {
        autoFocus: a,
        disableAutoFocusItem: u,
        MenuListProps: c,
        onEntering: w,
        PaperProps: h,
        transitionDuration: g,
        TransitionProps: v,
        variant: b,
      }),
      E = lN(C),
      O = a && !u && f,
      R = x.useRef(null),
      M = (_, j) => {
        R.current &&
          R.current.adjustStyleForScrollbar(_, {
            direction: k ? "rtl" : "ltr",
          }),
          w && w(_, j);
      },
      N = (_) => {
        _.key === "Tab" && (_.preventDefault(), d && d(_, "tabKeyDown"));
      };
    let $ = -1;
    x.Children.map(s, (_, j) => {
      x.isValidElement(_) &&
        (_.props.disabled ||
          (((b === "selectedMenu" && _.props.selected) || $ === -1) &&
            ($ = j)));
    });
    const P = (r = m.paper) != null ? r : cN,
      T = (o = y.paper) != null ? o : h,
      A = Qi({
        elementType: m.root,
        externalSlotProps: y.root,
        ownerState: C,
        className: [E.root, l],
      }),
      U = Qi({
        elementType: P,
        externalSlotProps: T,
        ownerState: C,
        className: E.paper,
      });
    return I(
      uN,
      L(
        {
          onClose: d,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: k ? "right" : "left",
          },
          transformOrigin: k ? aN : sN,
          slots: { paper: P, root: m.root },
          slotProps: { root: A, paper: U },
          open: f,
          ref: n,
          transitionDuration: g,
          TransitionProps: L({ onEntering: M }, v),
          ownerState: C,
        },
        S,
        {
          classes: p,
          children: I(
            dN,
            L(
              {
                onKeyDown: N,
                actions: R,
                autoFocus: a && ($ === -1 || u),
                autoFocusItem: O,
                variant: b,
              },
              c,
              { className: ge(E.list, c.className), children: s }
            )
          ),
        }
      )
    );
  }),
  pN = fN;
function hN(e) {
  return lt("MuiMenuItem", e);
}
const mN = Ze("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  xa = mN,
  vN = [
    "autoFocus",
    "component",
    "dense",
    "divider",
    "disableGutters",
    "focusVisibleClassName",
    "role",
    "tabIndex",
    "className",
  ],
  yN = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters,
    ];
  },
  gN = (e) => {
    const {
        disabled: t,
        dense: n,
        divider: r,
        disableGutters: o,
        selected: i,
        classes: a,
      } = e,
      l = mt(
        {
          root: [
            "root",
            n && "dense",
            t && "disabled",
            !o && "gutters",
            r && "divider",
            i && "selected",
          ],
        },
        hN,
        a
      );
    return L({}, a, l);
  },
  bN = le(t4, {
    shouldForwardProp: (e) => Fn(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: yN,
  })(({ theme: e, ownerState: t }) =>
    L(
      {},
      e.typography.body1,
      {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: "padding-box",
      },
      {
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${xa.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : gi(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${xa.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : gi(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${xa.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : gi(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : gi(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${xa.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${xa.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${V0.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${V0.inset}`]: { marginLeft: 52 },
        [`& .${Q0.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${Q0.inset}`]: { paddingLeft: 36 },
        [`& .${K0.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up("sm")]: { minHeight: "auto" } },
      t.dense &&
        L(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${K0.root} svg`]: { fontSize: "1.25rem" } }
        )
    )
  ),
  wN = x.forwardRef(function (t, n) {
    const r = vt({ props: t, name: "MuiMenuItem" }),
      {
        autoFocus: o = !1,
        component: i = "li",
        dense: a = !1,
        divider: s = !1,
        disableGutters: l = !1,
        focusVisibleClassName: u,
        role: c = "menuitem",
        tabIndex: d,
        className: f,
      } = r,
      h = ie(r, vN),
      p = x.useContext(Up),
      g = x.useMemo(
        () => ({ dense: a || p.dense || !1, disableGutters: l }),
        [p.dense, a, l]
      ),
      w = x.useRef(null);
    ro(() => {
      o && w.current && w.current.focus();
    }, [o]);
    const b = L({}, r, { dense: g.dense, divider: s, disableGutters: l }),
      m = gN(r),
      y = jt(w, n);
    let v;
    return (
      r.disabled || (v = d !== void 0 ? d : -1),
      I(Up.Provider, {
        value: g,
        children: I(
          bN,
          L(
            {
              ref: y,
              role: c,
              tabIndex: v,
              component: i,
              focusVisibleClassName: ge(m.focusVisible, u),
              className: ge(m.root, f),
            },
            h,
            { ownerState: b, classes: m }
          )
        ),
      })
    );
  }),
  SN = wN;
function xN(e) {
  return lt("MuiNativeSelect", e);
}
const kN = Ze("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  _m = kN,
  CN = [
    "className",
    "disabled",
    "error",
    "IconComponent",
    "inputRef",
    "variant",
  ],
  EN = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: a,
      } = e,
      s = {
        select: ["select", n, r && "disabled", o && "multiple", a && "error"],
        icon: ["icon", `icon${pt(n)}`, i && "iconOpen", r && "disabled"],
      };
    return mt(s, xN, t);
  },
  ux = ({ ownerState: e, theme: t }) =>
    L(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": L(
          {},
          t.vars
            ? {
                backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
              }
            : {
                backgroundColor:
                  t.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
              },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${_m.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  PN = le("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Fn,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        { [`&.${_m.multiple}`]: t.multiple },
      ];
    },
  })(ux),
  cx = ({ ownerState: e, theme: t }) =>
    L(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${_m.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  RN = le("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${pt(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(cx),
  ON = x.forwardRef(function (t, n) {
    const {
        className: r,
        disabled: o,
        error: i,
        IconComponent: a,
        inputRef: s,
        variant: l = "standard",
      } = t,
      u = ie(t, CN),
      c = L({}, t, { disabled: o, variant: l, error: i }),
      d = EN(c);
    return B(x.Fragment, {
      children: [
        I(
          PN,
          L(
            {
              ownerState: c,
              className: ge(d.select, r),
              disabled: o,
              ref: s || n,
            },
            u
          )
        ),
        t.multiple ? null : I(RN, { as: a, ownerState: c, className: d.icon }),
      ],
    });
  }),
  TN = ON;
var J0;
const IN = ["children", "classes", "className", "label", "notched"],
  MN = le("fieldset", { shouldForwardProp: Fn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  _N = le("legend", { shouldForwardProp: Fn })(({ ownerState: e, theme: t }) =>
    L(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", {
          duration: 150,
          easing: t.transitions.easing.easeOut,
        }),
      },
      e.withLabel &&
        L(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", {
              duration: 50,
              easing: t.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function $N(e) {
  const { className: t, label: n, notched: r } = e,
    o = ie(e, IN),
    i = n != null && n !== "",
    a = L({}, e, { notched: r, withLabel: i });
  return I(
    MN,
    L({ "aria-hidden": !0, className: t, ownerState: a }, o, {
      children: I(_N, {
        ownerState: a,
        children: i
          ? I("span", { children: n })
          : J0 || (J0 = I("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
const NN = [
    "components",
    "fullWidth",
    "inputComponent",
    "label",
    "multiline",
    "notched",
    "slots",
    "type",
  ],
  LN = (e) => {
    const { classes: t } = e,
      r = mt(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        L4,
        t
      );
    return L({}, t, r);
  },
  AN = le(Xc, {
    shouldForwardProp: (e) => Fn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Qc,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return L(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${Or.notchedOutline}`]: {
            borderColor: e.vars
              ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
              : n,
          },
        },
        [`&.${Or.focused} .${Or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[t.color].main,
          borderWidth: 2,
        },
        [`&.${Or.error} .${Or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main,
        },
        [`&.${Or.disabled} .${Or.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.action.disabled,
        },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline &&
        L(
          { padding: "16.5px 14px" },
          t.size === "small" && { padding: "8.5px 14px" }
        )
    );
  }),
  jN = le($N, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline,
  })(({ theme: e }) => {
    const t =
      e.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars
        ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
        : t,
    };
  }),
  zN = le(Zc, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Gc,
  })(({ theme: e, ownerState: t }) =>
    L(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  dx = x.forwardRef(function (t, n) {
    var r, o, i, a, s;
    const l = vt({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: c = !1,
        inputComponent: d = "input",
        label: f,
        multiline: h = !1,
        notched: p,
        slots: g = {},
        type: w = "text",
      } = l,
      b = ie(l, NN),
      m = LN(l),
      y = qs(),
      v = Bs({
        props: l,
        muiFormControl: y,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      S = L({}, l, {
        color: v.color || "primary",
        disabled: v.disabled,
        error: v.error,
        focused: v.focused,
        formControl: y,
        fullWidth: c,
        hiddenLabel: v.hiddenLabel,
        multiline: h,
        size: v.size,
        type: w,
      }),
      k = (r = (o = g.root) != null ? o : u.Root) != null ? r : AN,
      C = (i = (a = g.input) != null ? a : u.Input) != null ? i : zN;
    return I(
      Mm,
      L(
        {
          slots: { root: k, input: C },
          renderSuffix: (E) =>
            I(jN, {
              ownerState: S,
              className: m.notchedOutline,
              label:
                f != null && f !== "" && v.required
                  ? s || (s = B(x.Fragment, { children: [f, " ", "*"] }))
                  : f,
              notched:
                typeof p < "u"
                  ? p
                  : !!(E.startAdornment || E.filled || E.focused),
            }),
          fullWidth: c,
          inputComponent: d,
          multiline: h,
          ref: n,
          type: w,
        },
        b,
        { classes: L({}, m, { notchedOutline: null }) }
      )
    );
  });
dx.muiName = "Input";
const DN = dx;
function UN(e) {
  return lt("MuiSelect", e);
}
const FN = Ze("MuiSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "focused",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  ka = FN;
var eg;
const BN = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  qN = le("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${ka.select}`]: t.select },
        { [`&.${ka.select}`]: t[n.variant] },
        { [`&.${ka.error}`]: t.error },
        { [`&.${ka.multiple}`]: t.multiple },
      ];
    },
  })(ux, {
    [`&.${ka.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  WN = le("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${pt(n.variant)}`],
        n.open && t.iconOpen,
      ];
    },
  })(cx),
  HN = le("input", {
    shouldForwardProp: (e) => YS(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function tg(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function VN(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const KN = (e) => {
    const {
        classes: t,
        variant: n,
        disabled: r,
        multiple: o,
        open: i,
        error: a,
      } = e,
      s = {
        select: ["select", n, r && "disabled", o && "multiple", a && "error"],
        icon: ["icon", `icon${pt(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return mt(s, UN, t);
  },
  QN = x.forwardRef(function (t, n) {
    var r;
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: a,
        autoWidth: s,
        children: l,
        className: u,
        defaultOpen: c,
        defaultValue: d,
        disabled: f,
        displayEmpty: h,
        error: p = !1,
        IconComponent: g,
        inputRef: w,
        labelId: b,
        MenuProps: m = {},
        multiple: y,
        name: v,
        onBlur: S,
        onChange: k,
        onClose: C,
        onFocus: E,
        onOpen: O,
        open: R,
        readOnly: M,
        renderValue: N,
        SelectDisplayProps: $ = {},
        tabIndex: P,
        value: T,
        variant: A = "standard",
      } = t,
      U = ie(t, BN),
      [_, j] = C0({ controlled: T, default: d, name: "Select" }),
      [D, q] = C0({ controlled: R, default: c, name: "Select" }),
      H = x.useRef(null),
      G = x.useRef(null),
      [Q, V] = x.useState(null),
      { current: Y } = x.useRef(R != null),
      [re, Ce] = x.useState(),
      ce = jt(n, w),
      me = x.useCallback((J) => {
        (G.current = J), J && V(J);
      }, []),
      oe = Q == null ? void 0 : Q.parentNode;
    x.useImperativeHandle(
      ce,
      () => ({
        focus: () => {
          G.current.focus();
        },
        node: H.current,
        value: _,
      }),
      [_]
    ),
      x.useEffect(() => {
        c && D && Q && !Y && (Ce(s ? null : oe.clientWidth), G.current.focus());
      }, [Q, s]),
      x.useEffect(() => {
        a && G.current.focus();
      }, [a]),
      x.useEffect(() => {
        if (!b) return;
        const J = sn(G.current).getElementById(b);
        if (J) {
          const ue = () => {
            getSelection().isCollapsed && G.current.focus();
          };
          return (
            J.addEventListener("click", ue),
            () => {
              J.removeEventListener("click", ue);
            }
          );
        }
      }, [b]);
    const ee = (J, ue) => {
        J ? O && O(ue) : C && C(ue), Y || (Ce(s ? null : oe.clientWidth), q(J));
      },
      z = (J) => {
        J.button === 0 && (J.preventDefault(), G.current.focus(), ee(!0, J));
      },
      W = (J) => {
        ee(!1, J);
      },
      X = x.Children.toArray(l),
      he = (J) => {
        const ue = X.find((ze) => ze.props.value === J.target.value);
        ue !== void 0 && (j(ue.props.value), k && k(J, ue));
      },
      se = (J) => (ue) => {
        let ze;
        if (ue.currentTarget.hasAttribute("tabindex")) {
          if (y) {
            ze = Array.isArray(_) ? _.slice() : [];
            const Ut = _.indexOf(J.props.value);
            Ut === -1 ? ze.push(J.props.value) : ze.splice(Ut, 1);
          } else ze = J.props.value;
          if (
            (J.props.onClick && J.props.onClick(ue), _ !== ze && (j(ze), k))
          ) {
            const Ut = ue.nativeEvent || ue,
              Cr = new Ut.constructor(Ut.type, Ut);
            Object.defineProperty(Cr, "target", {
              writable: !0,
              value: { value: ze, name: v },
            }),
              k(Cr, J);
          }
          y || ee(!1, ue);
        }
      },
      we = (J) => {
        M ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(J.key) !== -1 &&
            (J.preventDefault(), ee(!0, J)));
      },
      Oe = Q !== null && D,
      We = (J) => {
        !Oe &&
          S &&
          (Object.defineProperty(J, "target", {
            writable: !0,
            value: { value: _, name: v },
          }),
          S(J));
      };
    delete U["aria-invalid"];
    let ae, Te;
    const yt = [];
    let Pe = !1;
    (ju({ value: _ }) || h) && (N ? (ae = N(_)) : (Pe = !0));
    const Et = X.map((J) => {
      if (!x.isValidElement(J)) return null;
      let ue;
      if (y) {
        if (!Array.isArray(_)) throw new Error(Do(2));
        (ue = _.some((ze) => tg(ze, J.props.value))),
          ue && Pe && yt.push(J.props.children);
      } else (ue = tg(_, J.props.value)), ue && Pe && (Te = J.props.children);
      return x.cloneElement(J, {
        "aria-selected": ue ? "true" : "false",
        onClick: se(J),
        onKeyUp: (ze) => {
          ze.key === " " && ze.preventDefault(),
            J.props.onKeyUp && J.props.onKeyUp(ze);
        },
        role: "option",
        selected: ue,
        value: void 0,
        "data-value": J.props.value,
      });
    });
    Pe &&
      (y
        ? yt.length === 0
          ? (ae = null)
          : (ae = yt.reduce(
              (J, ue, ze) => (
                J.push(ue), ze < yt.length - 1 && J.push(", "), J
              ),
              []
            ))
        : (ae = Te));
    let Bn = re;
    !s && Y && Q && (Bn = oe.clientWidth);
    let pn;
    typeof P < "u" ? (pn = P) : (pn = f ? null : 0);
    const be = $.id || (v ? `mui-component-select-${v}` : void 0),
      te = L({}, t, { variant: A, value: _, open: Oe, error: p }),
      Tn = KN(te),
      fo = L({}, m.PaperProps, (r = m.slotProps) == null ? void 0 : r.paper),
      ut = F3();
    return B(x.Fragment, {
      children: [
        I(
          qN,
          L(
            {
              ref: me,
              tabIndex: pn,
              role: "combobox",
              "aria-controls": ut,
              "aria-disabled": f ? "true" : void 0,
              "aria-expanded": Oe ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [b, be].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: we,
              onMouseDown: f || M ? null : z,
              onBlur: We,
              onFocus: E,
            },
            $,
            {
              ownerState: te,
              className: ge($.className, Tn.select, u),
              id: be,
              children: VN(ae)
                ? eg ||
                  (eg = I("span", { className: "notranslate", children: "​" }))
                : ae,
            }
          )
        ),
        I(
          HN,
          L(
            {
              "aria-invalid": p,
              value: Array.isArray(_) ? _.join(",") : _,
              name: v,
              ref: H,
              "aria-hidden": !0,
              onChange: he,
              tabIndex: -1,
              disabled: f,
              className: Tn.nativeInput,
              autoFocus: a,
              ownerState: te,
            },
            U
          )
        ),
        I(WN, { as: g, className: Tn.icon, ownerState: te }),
        I(
          pN,
          L(
            {
              id: `menu-${v || ""}`,
              anchorEl: oe,
              open: Oe,
              onClose: W,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            m,
            {
              MenuListProps: L(
                {
                  "aria-labelledby": b,
                  role: "listbox",
                  "aria-multiselectable": y ? "true" : void 0,
                  disableListWrap: !0,
                  id: ut,
                },
                m.MenuListProps
              ),
              slotProps: L({}, m.slotProps, {
                paper: L({}, fo, {
                  style: L({ minWidth: Bn }, fo != null ? fo.style : null),
                }),
              }),
              children: Et,
            }
          )
        ),
      ],
    });
  }),
  GN = QN,
  XN = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  ZN = ["root"],
  YN = (e) => {
    const { classes: t } = e;
    return t;
  },
  $m = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => Fn(e) && e !== "variant",
    slot: "Root",
  },
  JN = le(I$, $m)(""),
  eL = le(DN, $m)(""),
  tL = le(l$, $m)(""),
  fx = x.forwardRef(function (t, n) {
    const r = vt({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: a = {},
        className: s,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: c = D4,
        id: d,
        input: f,
        inputProps: h,
        label: p,
        labelId: g,
        MenuProps: w,
        multiple: b = !1,
        native: m = !1,
        onClose: y,
        onOpen: v,
        open: S,
        renderValue: k,
        SelectDisplayProps: C,
        variant: E = "outlined",
      } = r,
      O = ie(r, XN),
      R = m ? TN : GN,
      M = qs(),
      N = Bs({ props: r, muiFormControl: M, states: ["variant", "error"] }),
      $ = N.variant || E,
      P = L({}, r, { variant: $, classes: a }),
      T = YN(P),
      A = ie(T, ZN),
      U =
        f ||
        {
          standard: I(JN, { ownerState: P }),
          outlined: I(eL, { label: p, ownerState: P }),
          filled: I(tL, { ownerState: P }),
        }[$],
      _ = jt(n, U.ref);
    return I(x.Fragment, {
      children: x.cloneElement(
        U,
        L(
          {
            inputComponent: R,
            inputProps: L(
              {
                children: i,
                error: N.error,
                IconComponent: c,
                variant: $,
                type: void 0,
                multiple: b,
              },
              m
                ? { id: d }
                : {
                    autoWidth: o,
                    defaultOpen: l,
                    displayEmpty: u,
                    labelId: g,
                    MenuProps: w,
                    onClose: y,
                    onOpen: v,
                    open: S,
                    renderValue: k,
                    SelectDisplayProps: L({ id: d }, C),
                  },
              h,
              { classes: h ? an(A, h.classes) : A },
              f ? f.props.inputProps : {}
            ),
          },
          ((b && m) || u) && $ === "outlined" ? { notched: !0 } : {},
          { ref: _, className: ge(U.props.className, s, T.root) },
          !f && { variant: $ },
          O
        )
      ),
    });
  });
fx.muiName = "Select";
const nL = fx,
  ng = [
    {
      section: "HIPOTESIS",
      density: { LSL: 0.5235, USL: 0.6603 },
      sophistication: { LSL: 0.5167, USL: 0.7211 },
      variety: { LSL: 0.8881, USL: 0.9855 },
    },
    {
      section: "JUSTIFICACION",
      density: { LSL: 0.5347, USL: 0.6013 },
      sophistication: { LSL: 0.5326, USL: 0.6326 },
      variety: { LSL: 0.5968, USL: 0.761 },
    },
    {
      section: "OBJETIVOS",
      density: { LSL: 0.5569, USL: 0.7193 },
      sophistication: { LSL: 0.5577, USL: 0.7535 },
      variety: { LSL: 0.8516, USL: 0.9858 },
    },
    {
      section: "PLANTEAMIENTO DEL PROBLEMA",
      density: { LSL: 0.5585, USL: 0.6293 },
      sophistication: { LSL: 0.5384, USL: 0.6668 },
      variety: { LSL: 0.5571, USL: 0.7047 },
    },
    {
      section: "PREGUNTAS DE INVESTIGACION",
      density: { LSL: 0.6043, USL: 0.7443 },
      sophistication: { LSL: 0.5766, USL: 0.7742 },
      variety: { LSL: 0.8885, USL: 1 },
    },
    {
      section: "METODOLOGIA",
      density: { LSL: 0.49, USL: 0.6195 },
      sophistication: { LSL: 0.5601, USL: 0.7141 },
      variety: { LSL: 0.5211, USL: 0.6508 },
    },
    {
      section: "CONCLUSIONES",
      density: { LSL: 0.5536, USL: 0.5843 },
      sophistication: { LSL: 0.5504, USL: 0.6062 },
      variety: { LSL: 0.5537, USL: 0.6477 },
    },
  ];
function rL({ selectedOption: e, setSelectedOption: t }) {
  const n = (r) => {
    t(ng.find((o) => o.section === r.target.value));
  };
  return B("div", {
    className: "w-2/3",
    children: [
      I("p", { className: "my-4", children: "Por favor, elija que evaluará:" }),
      B(h$, {
        fullWidth: !0,
        children: [
          I(A$, { children: "Análisis" }),
          I(nL, {
            value: e.section ?? "0",
            label: "Análisis",
            onChange: n,
            children: ng.map((r, o) =>
              I(SN, { value: r.section, children: r.section }, o)
            ),
          }),
        ],
      }),
    ],
  });
}
const oL = [
    "de",
    "la",
    "que",
    "el",
    "en",
    "y",
    "a",
    "los",
    "se",
    "del",
    "las",
    "un",
    "por",
    "con",
    "no",
    "una",
    "su",
    "para",
    "es",
    "al",
    "lo",
    "como",
    "más",
    "o",
    "pero",
    "sus",
    "le",
    "ha",
    "me",
    "si",
    "sin",
    "sobre",
    "este",
    "ya",
    "entre",
    "cuando",
    "todo",
    "esta",
    "ser",
    "son",
    "dos",
    "también",
    "fue",
    "había",
    "era",
    "muy",
    "años",
    "hasta",
    "desde",
    "está",
    "mi",
    "porque",
    "qué",
    "sólo",
    "han",
    "yo",
    "hay",
    "vez",
    "puede",
    "todos",
    "así",
    "nos",
    "ni",
    "parte",
    "tiene",
    "él",
    "uno",
    "donde",
    "bien",
    "tiempo",
    "mismo",
    "ese",
    "ahora",
    "cada",
    "e",
    "vida",
    "otro",
    "después",
    "te",
    "otros",
    "aunque",
    "esa",
    "eso",
    "hace",
    "otra",
    "gobierno",
    "tan",
    "durante",
    "siempre",
    "día",
    "tanto",
    "ella",
    "tres",
    "sí",
    "dijo",
    "sido",
    "gran",
    "país",
    "según",
    "menos",
    "mundo",
    "año",
    "antes",
    "estado",
    "contra",
    "sino",
    "forma",
    "caso",
    "nada",
    "hacer",
    "general",
    "estaba",
    "poco",
    "estos",
    "presidente",
    "mayor",
    "ante",
    "unos",
    "les",
    "algo",
    "hacia",
    "casa",
    "ellos",
    "ayer",
    "hecho",
    "primera",
    "mucho",
    "mientras",
    "además",
    "quien",
    "momento",
    "millones",
    "esto",
    "españa",
    "hombre",
    "están",
    "pues",
    "hoy",
    "lugar",
    "madrid",
    "nacional",
    "trabajo",
    "otras",
    "mejor",
    "nuevo",
    "decir",
    "algunos",
    "entonces",
    "todas",
    "días",
    "debe",
    "política",
    "cómo",
    "casi",
    "toda",
    "tal",
    "luego",
    "pasado",
    "primer",
    "medio",
    "va",
    "estas",
    "sea",
    "tenía",
    "nunca",
    "poder",
    "aquí",
    "ver",
    "veces",
    "embargo",
    "partido",
    "personas",
    "grupo",
    "cuenta",
    "pueden",
    "tienen",
    "misma",
    "nueva",
    "cual",
    "fueron",
    "mujer",
    "frente",
    "josé",
    "tras",
    "cosas",
    "fin",
    "ciudad",
    "he",
    "social",
    "manera",
    "tener",
    "sistema",
    "será",
    "historia",
    "muchos",
    "juan",
    "tipo",
    "cuatro",
    "dentro",
    "nuestro",
    "punto",
    "dice",
    "ello",
    "cualquier",
    "noche",
    "aún",
    "agua",
    "parece",
    "haber",
    "situación",
    "fuera",
    "bajo",
    "grandes",
    "nuestra",
    "ejemplo",
    "acuerdo",
    "habían",
    "usted",
    "estados",
    "hizo",
    "nadie",
    "países",
    "horas",
    "posible",
    "tarde",
    "ley",
    "importante",
    "guerra",
    "desarrollo",
    "proceso",
    "realidad",
    "sentido",
    "lado",
    "mí",
    "tu",
    "cambio",
    "allí",
    "mano",
    "eran",
    "estar",
    "san",
    "número",
    "sociedad",
    "unas",
    "centro",
    "padre",
    "gente",
    "final",
    "relación",
    "cuerpo",
    "obra",
    "incluso",
    "través",
    "último",
    "madre",
    "mis",
    "modo",
    "problemas",
    "cinco",
    "carlos",
    "hombres",
    "información",
    "ojos",
    "muerte",
    "nombre",
    "algunas",
    "público",
    "mujeres",
    "siglo",
    "todavía",
    "meses",
    "mañana",
    "esos",
    "nosotros",
    "hora",
    "muchas",
    "pueblo",
    "alguna",
    "dar",
    "problema",
    "don",
    "da",
    "tú",
    "derecho",
    "verdad",
    "maría",
    "unidos",
    "podría",
    "sería",
    "junto",
    "cabeza",
    "aquel",
    "luis",
    "cuanto",
    "tierra",
    "equipo",
    "segundo",
    "director",
    "dicho",
    "cierto",
    "casos",
    "manos",
    "nivel",
    "podía",
    "familia",
    "largo",
    "partir",
    "falta",
    "llegar",
    "propio",
    "ministro",
    "cosa",
    "primero",
    "seguridad",
    "hemos",
    "mal",
    "trata",
    "algún",
    "tuvo",
    "respecto",
    "semana",
    "varios",
    "real",
    "sé",
    "voz",
    "paso",
    "señor",
    "mil",
    "quienes",
    "proyecto",
    "mercado",
    "mayoría",
    "luz",
    "claro",
    "iba",
    "éste",
    "pesetas",
    "orden",
    "español",
    "buena",
    "quiere",
    "aquella",
    "programa",
    "palabras",
    "internacional",
    "van",
    "esas",
    "segunda",
    "empresa",
    "puesto",
    "ahí",
    "propia",
    "m",
    "libro",
    "igual",
    "político",
    "persona",
    "últimos",
    "ellas",
    "total",
    "creo",
    "tengo",
    "dios",
    "c",
    "española",
    "condiciones",
    "méxico",
    "fuerza",
    "solo",
    "único",
    "acción",
    "amor",
    "policía",
    "puerta",
    "pesar",
    "zona",
    "sabe",
    "calle",
    "interior",
    "tampoco",
    "música",
    "ningún",
    "vista",
    "campo",
    "buen",
    "hubiera",
    "saber",
    "obras",
    "razón",
    "ex",
    "niños",
    "presencia",
    "tema",
    "dinero",
    "comisión",
    "antonio",
    "servicio",
    "hijo",
    "última",
    "ciento",
    "estoy",
    "hablar",
    "dio",
    "minutos",
    "producción",
    "camino",
    "seis",
    "quién",
    "fondo",
    "dirección",
    "papel",
    "demás",
    "barcelona",
    "idea",
    "especial",
    "diferentes",
    "dado",
    "base",
    "capital",
    "ambos",
    "europa",
    "libertad",
    "relaciones",
    "espacio",
    "medios",
    "ir",
    "actual",
    "población",
    "empresas",
    "estudio",
    "salud",
    "servicios",
    "haya",
    "principio",
    "siendo",
    "cultura",
    "anterior",
    "alto",
    "media",
    "mediante",
    "primeros",
    "arte",
    "paz",
    "sector",
    "imagen",
    "medida",
    "deben",
    "datos",
    "consejo",
    "personal",
    "interés",
    "julio",
    "grupos",
    "miembros",
    "ninguna",
    "existe",
    "cara",
    "edad",
    "etc",
    "movimiento",
    "visto",
    "llegó",
    "puntos",
    "actividad",
    "bueno",
    "uso",
    "niño",
    "difícil",
    "joven",
    "futuro",
    "aquellos",
    "mes",
    "pronto",
    "soy",
    "hacía",
    "nuevos",
    "nuestros",
    "estaban",
    "posibilidad",
    "sigue",
    "cerca",
    "resultados",
    "educación",
    "atención",
    "gonzález",
    "capacidad",
    "efecto",
    "necesario",
    "valor",
    "aire",
    "investigación",
    "siguiente",
    "figura",
    "central",
    "comunidad",
    "necesidad",
    "serie",
    "organización",
    "nuevas",
    "calidad",
    "economía",
    "carácter",
    "jefe",
    "estamos",
    "prensa",
    "control",
    "sociales",
    "universidad",
    "militar",
    "cabo",
    "diez",
    "fuerzas",
    "congreso",
    "ésta",
    "hijos",
    "justicia",
    "mundial",
    "dólares",
    "juego",
    "económica",
    "políticos",
    "duda",
    "recursos",
    "pública",
    "crisis",
    "próximo",
    "tenemos",
    "decisión",
    "varias",
    "popular",
    "tenido",
    "apenas",
    "época",
    "banco",
    "presente",
    "menor",
    "quiero",
    "pasar",
    "resultado",
    "televisión",
    "encuentra",
    "gracias",
    "ministerio",
    "conjunto",
    "defensa",
    "alguien",
    "queda",
    "hacen",
    "pasa",
    "resto",
    "causa",
    "seguir",
    "allá",
    "palabra",
    "voy",
    "cuya",
    "vamos",
    "mar",
    "estudios",
    "derechos",
    "importancia",
    "cuales",
    "contrario",
    "manuel",
    "garcía",
    "fuerte",
    "sol",
    "jóvenes",
    "apoyo",
    "habría",
    "civil",
    "miguel",
    "pedro",
    "partidos",
    "libre",
    "fuentes",
    "administración",
    "común",
    "dejar",
    "cine",
    "salir",
    "comunicación",
    "b",
    "experiencia",
    "demasiado",
    "plan",
    "respuesta",
    "energía",
    "izquierda",
    "función",
    "principal",
    "superior",
    "naturaleza",
    "podemos",
    "unión",
    "especialmente",
    "rey",
    "domingo",
    "favor",
    "cantidad",
    "elecciones",
    "clase",
    "productos",
    "españoles",
    "conocer",
    "teatro",
    "importantes",
    "evitar",
    "actividades",
    "mesa",
    "decía",
    "cuyo",
    "debido",
    "alta",
    "francisco",
    "secretario",
    "objeto",
    "quizá",
    "posición",
    "parecía",
    "natural",
    "elementos",
    "hubo",
    "objetivo",
    "formas",
    "única",
    "pueda",
    "origen",
    "blanco",
    "mismos",
    "lleva",
    "económico",
    "opinión",
    "ayuda",
    "oficial",
    "silencio",
    "buenos",
    "pensar",
    "república",
    "dónde",
    "sangre",
    "encuentro",
    "siquiera",
    "autor",
    "reunión",
    "haciendo",
    "suelo",
    "muestra",
    "viejo",
    "encima",
    "resulta",
    "tomar",
    "bastante",
    "siete",
    "lucha",
    "pudo",
    "amigos",
    "línea",
    "sur",
    "pocos",
    "medidas",
    "norte",
    "partes",
    "iglesia",
    "tratamiento",
    "existencia",
    "cargo",
    "grande",
    "américa",
    "boca",
    "plaza",
    "pie",
    "trabajadores",
    "poner",
    "existen",
    "viene",
    "permite",
    "análisis",
    "argentina",
    "acto",
    "hechos",
    "tiempos",
    "políticas",
    "radio",
    "puedo",
    "crecimiento",
    "francia",
    "compañía",
    "amigo",
    "autoridades",
    "realizar",
    "acciones",
    "padres",
    "diario",
    "ve",
    "derecha",
    "ambiente",
    "i",
    "habrá",
    "precisamente",
    "enfermedad",
    "especie",
    "ejército",
    "santa",
    "cambios",
    "río",
    "sabía",
    "seguro",
    "espera",
    "momentos",
    "viaje",
    "quería",
    "ocho",
    "vivir",
    "región",
    "formación",
    "escuela",
    "cuarto",
    "valores",
    "quedó",
    "participación",
    "éxito",
    "baja",
    "artículo",
    "principales",
    "fernando",
    "metros",
    "marcha",
    "régimen",
    "consecuencia",
    "conocimiento",
    "corazón",
    "campaña",
    "estructura",
    "efectos",
    "finalmente",
    "modelo",
    "carta",
    "construcción",
    "médico",
    "miedo",
    "mayores",
    "entrada",
    "humanos",
    "sean",
    "actitud",
    "deja",
    "dejó",
    "d",
    "llevar",
    "negro",
    "texto",
    "mitad",
    "estuvo",
    "alrededor",
    "acerca",
    "peso",
    "humano",
    "pequeño",
    "fecha",
    "serán",
    "doctor",
    "ideas",
    "vino",
    "materia",
    "llega",
    "carrera",
    "cierta",
    "sola",
    "psoe",
    "lejos",
    "juez",
    "características",
    "riesgo",
    "fácil",
    "diferencia",
    "cultural",
    "libros",
    "práctica",
    "mayo",
    "nuestras",
    "programas",
    "memoria",
    "llegado",
    "plazo",
    "expresión",
    "diciembre",
    "mantener",
    "enero",
    "volver",
    "cuadro",
    "producto",
    "produce",
    "europea",
    "conciencia",
    "tenían",
    "atrás",
    "felipe",
    "creación",
    "chile",
    "precio",
    "película",
    "puerto",
    "fuego",
    "cuestión",
    "pasó",
    "costa",
    "supuesto",
    "local",
    "habla",
    "aspectos",
    "cuba",
    "sala",
    "cámara",
    "vuelta",
    "vía",
    "mirada",
    "mejores",
    "informe",
    "unidad",
    "distintos",
    "suerte",
    "tales",
    "mira",
    "llamado",
    "técnica",
    "título",
    "s",
    "principios",
    "octubre",
    "volvió",
    "período",
    "g",
    "encontrar",
    "democracia",
    "aumento",
    "fútbol",
    "prueba",
    "consumo",
    "pese",
    "ocasiones",
    "exterior",
    "solución",
    "u",
    "hija",
    "sueño",
    "parís",
    "capaz",
    "ocasión",
    "industria",
    "adelante",
    "salida",
    "ciencia",
    "asunto",
    "asociación",
    "puso",
    "intereses",
    "oro",
    "podrá",
    "pregunta",
    "oposición",
    "entrar",
    "señora",
    "señaló",
    "santiago",
    "dolor",
    "zonas",
    "comercio",
    "operación",
    "tribunal",
    "instituciones",
    "temas",
    "militares",
    "junio",
    "marco",
    "sectores",
    "hacerlo",
    "aspecto",
    "razones",
    "contenido",
    "juicio",
    "electoral",
    "considera",
    "tendrá",
    "mucha",
    "voluntad",
    "dicen",
    "recuerdo",
    "socialista",
    "área",
    "aparece",
    "vio",
    "cama",
    "aun",
    "presenta",
    "pp",
    "revolución",
    "busca",
    "abril",
    "rodríguez",
    "fiscal",
    "lópez",
    "victoria",
    "violencia",
    "primeras",
    "pequeña",
    "armas",
    "debía",
    "ii",
    "esfuerzo",
    "humana",
    "posibilidades",
    "centros",
    "profesional",
    "asimismo",
    "grado",
    "has",
    "toma",
    "distintas",
    "material",
    "carne",
    "llama",
    "particular",
    "jorge",
    "trabajar",
    "propuesta",
    "muerto",
    "precios",
    "reforma",
    "hermano",
    "corte",
    "comenzó",
    "etapa",
    "obstante",
    "pone",
    "diversos",
    "visita",
    "concepto",
    "pacientes",
    "semanas",
    "tipos",
    "solamente",
    "deseo",
    "sistemas",
    "encuentran",
    "siguientes",
    "martín",
    "suficiente",
    "marzo",
    "propios",
    "jamás",
    "dan",
    "club",
    "instituto",
    "constitución",
    "curso",
    "lenguaje",
    "estilo",
    "rosa",
    "imposible",
    "pablo",
    "buscar",
    "peor",
    "piel",
    "arriba",
    "generales",
    "septiembre",
    "blanca",
    "r",
    "aquellas",
    "teoría",
    "animales",
    "hicieron",
    "larga",
    "perdido",
    "imágenes",
    "paciente",
    "conseguir",
    "máximo",
    "noviembre",
    "j",
    "líder",
    "hospital",
    "diversas",
    "rafael",
    "vuelve",
    "destino",
    "torno",
    "proyectos",
    "flores",
    "niveles",
    "afirmó",
    "explicó",
    "n",
    "somos",
    "términos",
    "premio",
    "tercera",
  ],
  iL = [
    "de",
    "la",
    "que",
    "el",
    "en",
    "y",
    "a",
    "los",
    "del",
    "se",
    "las",
    "por",
    "un",
    "para",
    "con",
    "no",
    "una",
    "su",
    "al",
    "lo",
    "como",
    "más",
    "pero",
    "sus",
    "le",
    "ya",
    "o",
    "este",
    "sí",
    "porque",
    "esta",
    "entre",
    "cuando",
    "muy",
    "sin",
    "sobre",
    "también",
    "me",
    "hasta",
    "hay",
    "donde",
    "quien",
    "desde",
    "todo",
    "nos",
    "durante",
    "todos",
    "uno",
    "les",
    "ni",
    "contra",
    "otros",
    "ese",
    "eso",
    "ante",
    "ellos",
    "e",
    "esto",
    "mí",
    "antes",
    "algunos",
    "qué",
    "unos",
    "yo",
    "otro",
    "otras",
    "otra",
    "él",
    "tanto",
    "esa",
    "estos",
    "mucho",
    "quienes",
    "nada",
    "muchos",
    "cual",
    "poco",
    "ella",
    "estar",
    "estas",
    "algunas",
    "algo",
    "nosotros",
    "mi",
    "mis",
    "tú",
    "te",
    "ti",
    "tu",
    "tus",
    "ellas",
    "nosotras",
    "vosotros",
    "vosotras",
    "os",
    "mío",
    "mía",
    "míos",
    "mías",
    "tuyo",
    "tuya",
    "tuyos",
    "tuyas",
    "suyo",
    "suya",
    "suyos",
    "suyas",
    "nuestro",
    "nuestra",
    "nuestros",
    "nuestras",
    "vuestro",
    "vuestra",
    "vuestros",
    "vuestras",
    "esos",
    "esas",
    "estoy",
    "estás",
    "está",
    "estamos",
    "estáis",
    "están",
    "esté",
    "estés",
    "estemos",
    "estéis",
    "estén",
    "estaré",
    "estarás",
    "estará",
    "estaremos",
    "estaréis",
    "estarán",
    "estaría",
    "estarías",
    "estaríamos",
    "estaríais",
    "estarían",
    "estaba",
    "estabas",
    "estábamos",
    "estabais",
    "estaban",
    "estuve",
    "estuviste",
    "estuvo",
    "estuvimos",
    "estuvisteis",
    "estuvieron",
    "estuviera",
    "estuvieras",
    "estuviéramos",
    "estuvierais",
    "estuvieran",
    "estuviese",
    "estuvieses",
    "estuviésemos",
    "estuvieseis",
    "estuviesen",
    "estando",
    "estado",
    "estada",
    "estados",
    "estadas",
    "estad",
    "he",
    "has",
    "ha",
    "hemos",
    "habéis",
    "han",
    "haya",
    "hayas",
    "hayamos",
    "hayáis",
    "hayan",
    "habré",
    "habrás",
    "habrá",
    "habremos",
    "habréis",
    "habrán",
    "habría",
    "habrías",
    "habríamos",
    "habríais",
    "habrían",
    "había",
    "habías",
    "habíamos",
    "habíais",
    "habían",
    "hube",
    "hubiste",
    "hubo",
    "hubimos",
    "hubisteis",
    "hubieron",
    "hubiera",
    "hubieras",
    "hubiéramos",
    "hubierais",
    "hubieran",
    "hubiese",
    "hubieses",
    "hubiésemos",
    "hubieseis",
    "hubiesen",
    "habiendo",
    "habido",
    "habida",
    "habidos",
    "habidas",
    "soy",
    "eres",
    "es",
    "somos",
    "sois",
    "son",
    "sea",
    "seas",
    "seamos",
    "seáis",
    "sean",
    "seré",
    "serás",
    "será",
    "seremos",
    "seréis",
    "serán",
    "sería",
    "serías",
    "seríamos",
    "seríais",
    "serían",
    "era",
    "eras",
    "éramos",
    "erais",
    "eran",
    "fui",
    "fuiste",
    "fue",
    "fuimos",
    "fuisteis",
    "fueron",
    "fuera",
    "fueras",
    "fuéramos",
    "fuerais",
    "fueran",
    "fuese",
    "fueses",
    "fuésemos",
    "fueseis",
    "fuesen",
    "sintiendo",
    "sentido",
    "sentida",
    "sentidos",
    "sentidas",
    "siente",
    "sentid",
    "tengo",
    "tienes",
    "tiene",
    "tenemos",
    "tenéis",
    "tienen",
    "tenga",
    "tengas",
    "tengamos",
    "tengáis",
    "tengan",
    "tendré",
    "tendrás",
    "tendrá",
    "tendremos",
    "tendréis",
    "tendrán",
    "tendría",
    "tendrías",
    "tendríamos",
    "tendríais",
    "tendrían",
    "tenía",
    "tenías",
    "teníamos",
    "teníais",
    "tenían",
    "tuve",
    "tuviste",
    "tuvo",
    "tuvimos",
    "tuvisteis",
    "tuvieron",
    "tuviera",
    "tuvieras",
    "tuviéramos",
    "tuvierais",
    "tuvieran",
    "tuviese",
    "tuvieses",
    "tuviésemos",
    "tuvieseis",
    "tuviesen",
    "teniendo",
    "tenido",
    "tenida",
    "tenidos",
    "tenidas",
    "tened",
  ],
  aL = new Set(oL),
  sL = new Set(iL);
function lL(e) {
  const t = indexedDB.open("miBaseDeDatos", 1);
  (t.onerror = function (n) {
    console.error("Error al abrir la base de datos:", n.target.errorCode);
  }),
    (t.onupgradeneeded = function (n) {
      n.target.result
        .createObjectStore("wordGroups", { keyPath: "base" })
        .createIndex("baseIndex", "base", { unique: !0 });
    }),
    (t.onsuccess = function (n) {
      const i = n.target.result
        .transaction(["wordGroups"], "readwrite")
        .objectStore("wordGroups");
      for (const a in e) {
        const s = i.get(a);
        s.onsuccess = function (l) {
          const u = l.target.result;
          if (u) {
            const c = u.words,
              d = e[a],
              f = [...new Set([...c, ...d])],
              h = i.put({ base: a, words: f });
            h.onerror = function (p) {
              console.error("Error al actualizar los datos:", p.target.error);
            };
          } else {
            const c = e[a];
            i.add({ base: a, words: c });
          }
        };
      }
    });
}
async function uL(e) {
  try {
    const t = await new Promise((l, u) => {
        const c = indexedDB.open("miBaseDeDatos", 1);
        (c.onerror = function (d) {
          console.error("Error al abrir la base de datos:", d.target.errorCode),
            u(d.target.error);
        }),
          (c.onupgradeneeded = function (d) {
            const h = d.target.result.createObjectStore("wordGroups", {
              keyPath: "base",
            });
          }),
          (c.onsuccess = function (d) {
            l(d.target.result);
          });
      }),
      n = t.transaction(["wordGroups"], "readonly"),
      r = n.objectStore("wordGroups"),
      o = await new Promise((l, u) => {
        const c = r.getAll();
        (c.onsuccess = function (d) {
          l(d.target.result.reduce((f, h) => f.concat(h.words), []));
        }),
          (c.onerror = function (d) {
            console.error(
              "Error al acceder a la base de datos:",
              d.target.error
            ),
              u(d.target.error);
          });
      }),
      s = e
        .split(" ")
        .filter((l) => !o.includes(l))
        .join(" ");
    return (
      (n.oncomplete = function () {
        t.close(),
          s.length > 0 && console.log("Texto sin palabras repetidas en db:", s);
      }),
      s
    );
  } catch (t) {
    throw (console.error("Ocurrió un error:", t), t);
  }
}
async function cL(e) {
  try {
    const t = await new Promise((a, s) => {
        const l = indexedDB.open("miBaseDeDatos", 1);
        (l.onerror = function (u) {
          console.error("Error al abrir la base de datos:", u.target.errorCode),
            s(u.target.error);
        }),
          (l.onsuccess = function (u) {
            a(u.target.result);
          });
      }),
      n = t.transaction(["wordGroups"], "readonly"),
      r = n.objectStore("wordGroups"),
      o = e.split(" "),
      i = {};
    for (const a of o) {
      const s = await dL(a, r);
      if (i[a]) i[a].contador++;
      else {
        const l = aL.has(s),
          u = sL.has(s);
        i[a] = { palabraBase: s, contador: 1, esComun: l, esStopword: u };
      }
    }
    return (
      (n.oncomplete = function () {
        t.close(), console.log("Diccionario construido:", i);
      }),
      i
    );
  } catch (t) {
    throw (console.error("Ocurrió un error:", t), t);
  }
}
async function dL(e, t) {
  return new Promise((n, r) => {
    const o = t.openCursor();
    (o.onsuccess = function (i) {
      const a = i.target.result;
      if (a) {
        const s = a.value;
        s.words.includes(e) ? n(s.base) : a.continue();
      } else n(e);
    }),
      (o.onerror = function (i) {
        console.error(
          "Error al buscar palabra en la base de datos:",
          i.target.error
        ),
          r(i.target.error);
      });
  });
}
function fL(e) {
  const t = {};
  for (const n in e) {
    const o = e[n].palabraBase;
    let i = pL(e, o);
    t[n] = { ...e[n], contador: i };
  }
  return t;
}
function pL(e, t) {
  var n = 0;
  for (var r in e) e[r].palabraBase === t && (e[r], (n += e[r].contador));
  return n;
}
function hL() {
  const [e, t] = x.useState(""),
    [n, r] = x.useState(!1),
    [o] = c5(e, 1e3),
    [i, a] = x.useState(null),
    [s, l] = x.useState(""),
    [u, c] = x.useState(""),
    [d, f] = x.useState({}),
    [h, p] = x.useState(null),
    [g, w] = uS(),
    [b, m] = x.useState({
      section: "",
      density: { LSL: 0, USL: 0 },
      sophistication: { LSL: 0, USL: 0 },
      variety: { LSL: 0, USL: 0 },
    }),
    y = () => {
      l("Guardado hace menos de 1 minuto"),
        console.log("Guardando texto..."),
        console.log("Texto guardado:", u),
        a(new Date());
    },
    v = (S) => {
      const k = S.match(/\w+|\W+/g),
        C = S.match(/\b(\w+)\b/g);
      if (C === null || k === null) return;
      let E = [];
      for (var O in d) d[O].esStopword === !1 && E.push(O);
      const R = E.filter((j) => {
          const D = j.toLowerCase();
          return d[D] && d[D].esComun;
        }),
        M = E.filter((j) => {
          const D = j.toLowerCase();
          return d[D] && d[D].contador > 1;
        }),
        N = new Set(E),
        $ = C.length,
        P = E.length,
        T = N.size,
        A = P - R.length,
        U = [
          { name: "Variedad", score: T / P },
          { name: "Densidad", score: T / $ },
          { name: "Sofisticación", score: A / P },
        ],
        _ = k.map((j, D) => {
          if (j === " ") return I("span", { children: " " }, D);
          const q = j.toLowerCase();
          return /\w+/.test(j) && d[q]
            ? d[q].esStopword
              ? I("span", { children: j }, D)
              : d[q].contador > 1
              ? I("span", { className: "text-red-500", children: j }, D)
              : d[q].esComun
              ? I(
                  "span",
                  { className: "font-bold bg-yellow-400", children: j },
                  D
                )
              : I("span", { children: j }, D)
            : I("span", { children: j });
        });
      return {
        scores: U,
        highlightedText: _,
        repeatedWords: M.length,
        commonWords: R.length,
      };
    };
  return (
    x.useEffect(() => {
      const S = setInterval(() => {
        y();
      }, 6e5);
      return () => clearInterval(S);
    }, []),
    x.useEffect(() => {
      const S = setInterval(() => {
        if (i) {
          const C = new Date() - i,
            E = Math.floor(C / 6e4);
          l(
            E === 1
              ? "Guardado por última vez hace 1 minuto"
              : `Guardado por última vez hace ${E} minutos`
          );
        }
      }, 6e4);
      return () => clearInterval(S);
    }, [i]),
    x.useEffect(() => {
      r(!0);
    }, [e]),
    x.useEffect(() => {
      o.length === 0 ||
        b.section.length === 0 ||
        uL(o.trim()).then((S) => {
          if (S.length === 0) {
            c(o);
            return;
          }
          g({ text: S });
        });
    }, [o]),
    x.useEffect(() => {
      var S, k;
      if (w.isSuccess) {
        if (((S = w.data) == null ? void 0 : S.wordGroups) === void 0) return;
        lL((k = w.data) == null ? void 0 : k.wordGroups), c(o);
      }
    }, [w]),
    x.useEffect(() => {
      u.length === 0 ||
        b.section.length === 0 ||
        cL(u).then((S) => {
          let k = fL(S);
          f(k);
        });
    }, [u]),
    x.useEffect(() => {
      if ((r(!1), Object.keys(d).length === 0 || u.length === 0)) return;
      const S = v(u, d.dict);
      console.log("resultado de analisis: ", S), p(S), y();
    }, [d]),
    B("div", {
      className: `flex h-[calc(100vh-210px)] m-2  ${
        b.section.length === 0
          ? "justify-start flex-col items-center"
          : "justify-center"
      } `,
      children: [
        b.section
          ? B("div", {
              className: "flex flex-col flex-grow ",
              children: [
                I("textarea", {
                  onChange: (S) => {
                    t(S.target.value);
                  },
                  className: "flex-1 resize-none",
                }),
                B("div", {
                  className:
                    "text-sm flex items-center justify-center my-2 gap-2",
                  children: [
                    B("button", {
                      type: "button",
                      className:
                        "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-2 py-1 text-center   inline-flex items-center justify-center gap-2 max-w-48",
                      children: [
                        I("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 1.5,
                          stroke: "currentColor",
                          className: "w-6 h-6",
                          children: I("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5",
                          }),
                        }),
                        "Guardar avances",
                      ],
                    }),
                    I("p", { children: s }),
                  ],
                }),
                I("div", {
                  className: "text-sm ",
                  children: h ? I("p", { children: h.highlightedText }) : null,
                }),
              ],
            })
          : B("div", {
              className:
                "flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 h-20 w-96",
              role: "alert",
              children: [
                I("svg", {
                  className: "flex-shrink-0 inline w-4 h-4 me-3",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  children: I("path", {
                    d: "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z",
                  }),
                }),
                I("span", { className: "sr-only", children: "Info" }),
                B("div", {
                  children: [
                    I("span", {
                      className: "font-medium",
                      children: "Bienvenid@",
                    }),
                    " Seleccione una opción para comenzar",
                  ],
                }),
              ],
            }),
        B("div", {
          className: "flex flex-col mx-2 items-center",
          children: [
            I(rL, { selectedOption: b, setSelectedOption: m }),
            n
              ? B("div", {
                  role: "status",
                  className: "flex items-center justify-center",
                  children: [
                    B("svg", {
                      "aria-hidden": "true",
                      className:
                        "w-16 h-16 text-gray-200 animate-spin fill-blue-600",
                      viewBox: "0 0 100 101",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        I("path", {
                          d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                          fill: "currentColor",
                        }),
                        I("path", {
                          d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                          fill: "currentFill",
                        }),
                      ],
                    }),
                    I("span", {
                      className: "sr-only",
                      children: "Cargando...",
                    }),
                  ],
                })
              : h && b.section && !n
              ? I(v5, {
                  analyses: h.scores,
                  commonWords: h.commonWords,
                  repeatedWords: h.repeatedWords,
                  selectedOptionLimits: b,
                })
              : I("p", {
                  children: "Seleccione una opción para ver los resultados",
                }),
          ],
        }),
      ],
    })
  );
}
function mL() {
  return I("div", {
    className: "h-[calc(100vh-65px)] w-full",
    children: I("object", {
      type: "application/pdf",
      width: "100%",
      height: "100%",
    }),
  });
}
function vL() {
  return B("div", {
    className:
      "animate-fadeIn text-center h-[calc(100vh-85px)] flex flex-col items-center justify-center",
    children: [
      I("h2", {
        className: "font-bold text-2xl sm:text-3xl",
        children: "Soporte",
      }),
      B("p", {
        className: "py-10 px-10 text-xl ",
        children: [
          "Para cualquier duda o sugerencia por favor contacte con",
          " ",
          I("span", { className: "font-bold", children: Mi.developerName }),
          " al correo",
          " ",
          I("a", {
            className: "cursor-pointer block",
            href: `mailto:${Mi.developerEmail}`,
            children: Mi.developerEmail,
          }),
        ],
      }),
    ],
  });
}
function yL() {
  return B("div", {
    className: "max-w-2xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg mb-10",
    children: [
      I("h1", {
        className: "text-2xl font-bold mb-4",
        children: "Términos y Condiciones de Uso",
      }),
      I("p", {
        className: "mb-4",
        children:
          "Por favor, lee estos términos y condiciones cuidadosamente antes de utilizar nuestra plataforma.",
      }),
      B("ol", {
        className: "list-decimal pl-6 mb-4",
        children: [
          B("li", {
            className: "mb-2",
            children: [
              I("strong", { children: "Aceptación de los Términos:" }),
              " Al acceder y utilizar nuestra plataforma, aceptas cumplir y estar legalmente vinculado por estos términos y condiciones. Si no estás de acuerdo con alguno de los términos y condiciones, por favor, no utilices nuestra plataforma.",
            ],
          }),
          B("li", {
            className: "mb-2",
            children: [
              I("strong", { children: "Recopilación de Información:" }),
              " Para utilizar nuestra plataforma, es posible que necesitemos recopilar cierta información personal, como tu nombre de usuario y dirección de correo electrónico. Nos comprometemos a proteger tu privacidad y a no compartir esta información con terceros sin tu consentimiento explícito.",
            ],
          }),
          B("li", {
            className: "mb-2",
            children: [
              I("strong", { children: "Uso de la Información:" }),
              " La información personal recopilada se utilizará únicamente para proporcionar y mejorar nuestros servicios. Podemos utilizar tu nombre de usuario y correo electrónico para comunicarnos contigo, enviar actualizaciones sobre nuestra plataforma y responder a tus consultas.",
            ],
          }),
          B("li", {
            className: "mb-2",
            children: [
              I("strong", { children: "Seguridad de la Información:" }),
              " Tomamos medidas razonables para proteger tu información personal contra accesos no autorizados, uso indebido o divulgación. Sin embargo, debes ser consciente de que ninguna medida de seguridad es completamente infalible y que ningún sistema puede garantizar la seguridad absoluta de tus datos.",
            ],
          }),
          B("li", {
            className: "mb-2",
            children: [
              I("strong", {
                children: "Cambios en los Términos y Condiciones:",
              }),
              " Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Cualquier cambio se publicará en esta página y entrará en vigencia inmediatamente después de su publicación. Se te notificará sobre cualquier cambio importante a través de un aviso en nuestra plataforma.",
            ],
          }),
          B("li", {
            children: [
              I("strong", { children: "Contacto:" }),
              " Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos en",
              " ",
              I("a", {
                href: "mailto:maxponce.marquez@outlook.com",
                className: "text-blue-500",
                children: "maxponce.marquez@outlook.com",
              }),
              ".",
            ],
          }),
        ],
      }),
      I("p", {
        className: "mt-4",
        children:
          "Al utilizar nuestra plataforma, confirmas que has leído, entendido y aceptado estos términos y condiciones en su totalidad.",
      }),
      I("p", {
        className: "mt-2",
        children: "Última actualización: 21 de marzo de 2024",
      }),
    ],
  });
}
const px = [
  {
    path: "/",
    component: i5,
    isProtected: !1,
    icon: DT,
    title: "Inicio",
    allowedRoles: ["ALL"],
    showOnSidebar: !0,
  },
  {
    path: "/riquezalexica",
    component: hL,
    isProtected: !0,
    icon: jT,
    title: "Riqueza Lexica",
    allowedRoles: ["ALL"],
    showOnSidebar: !0,
  },
  {
    path: "/freeling",
    component: r5,
    isProtected: !1,
    icon: LT,
    title: "FreeLing",
    allowedRoles: ["ALL"],
    showOnSidebar: !0,
  },
  {
    path: "/login",
    component: cS,
    isProtected: !1,
    icon: jl,
    title: "Login",
    allowedRoles: ["ALL"],
    showOnSidebar: !1,
  },
  {
    path: "/register",
    component: s5,
    isProtected: !1,
    icon: jl,
    title: "Registro",
    allowedRoles: ["ALL"],
    showOnSidebar: !1,
  },
  {
    path: "/termsandconditions",
    component: yL,
    isProtected: !1,
    icon: jl,
    title: "Términos y Condiciones",
    allowedRoles: ["ALL"],
    showOnSidebar: !1,
  },
  {
    path: "/guide",
    component: mL,
    isProtected: !1,
    icon: aS,
    title: "Guía",
    allowedRoles: ["ALL"],
    showOnSidebar: !1,
  },
  {
    path: "/support",
    component: vL,
    isProtected: !1,
    icon: sS,
    title: "Soporte",
    allowedRoles: ["ALL"],
    showOnSidebar: !1,
  },
  {
    path: "/unauthorized",
    component: a5,
    isProtected: !1,
    allowedRoles: ["ALL"],
    showOnSidebar: !1,
  },
];
function Ca({ title: e, link: t, href: n, onClick: r, icon: o }) {
  let i = I(Ha, {});
  return (
    t &&
      (i = I(RO, {
        to: t || "/",
        className:
          "w-full h-12 justify-end py-5 my-1 ease-in-out duration-300 flex items-center hover:bg-itn cursor-pointer font-bold text-xl text-right",
        onClick: r,
        children: ({ isActive: a }) =>
          B(Ha, {
            children: [
              e,
              I("div", {
                className: `mr-2.5 ml-5 min-w-[40px] min-h-[40px] bg-black flex items-center justify-center rounded ${
                  a && t != "/" && "bg-itn text-white"
                }`,
                children: o,
              }),
            ],
          }),
      })),
    n &&
      (i = B("a", {
        href: n,
        target: "_blank",
        className:
          "w-full h-12 justify-end py-5 my-1 ease-in-out duration-300 flex items-center hover:bg-itn  cursor-pointer font-bold text-xl text-right",
        onClick: r,
        children: [
          e,
          I("div", {
            className:
              "mr-2.5 ml-5 min-w-[40px] min-h-[40px] bg-black flex items-center justify-center rounded",
            children: o,
          }),
        ],
      })),
    i
  );
}
function gL() {
  const [e, t] = x.useState(!1),
    { user: n, logoutUser: r } = na();
  return B(Ha, {
    children: [
      !e &&
        I("div", {
          className:
            "border-b border-black flex items-center justify-center absolute bg-white cursor-pointer z-[1400] ease-in-out duration-300 w-[60px] h-[60px] sm:hidden",
          onClick: () => t((o) => !o),
          onMouseEnter: () => t((o) => !o),
          children: I(zT, {}),
        }),
      B("div", {
        className: `absolute flex h-[100vh] ${e ? "w-full" : "w-0"}`,
        children: [
          B("div", {
            className: `text-white pb-5 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-md border border-black bg-sidebarcolor/[0.9] w-[250px] z-[1500] ease-in-out duration-300 ${
              e
                ? "translate-x-0 "
                : "sm:-translate-x-[calc(100%-60px)] -translate-x-full"
            }`,
            onMouseEnter: () => t(!0),
            onMouseLeave: () => t(!1),
            children: [
              I("div", {
                className: "bg-black h-[64px] flex items-center justify-center",
                children:
                  e &&
                  I("img", {
                    className: "h-[55px] p-2",
                    src: "retmeepro.svg",
                    alt: "Continental Logo",
                  }),
              }),
              B("div", {
                className: "flex flex-col justify-between	h-full",
                children: [
                  I("div", {
                    children: px
                      .filter((o) => o.showOnSidebar)
                      .map((o, i) => {
                        var a;
                        if (
                          !o.isProtected ||
                          (n &&
                            o.isProtected &&
                            (a = o.allowedRoles) != null &&
                            a.includes("ALL")) ||
                          (o.isProtected &&
                            o.allowedRoles.some((s) =>
                              n == null ? void 0 : n.name.includes(s)
                            ))
                        )
                          return I(
                            Ca,
                            {
                              title: o.title,
                              link: o.path,
                              icon: I(o.icon, {}),
                              onClick: () => t(!1),
                            },
                            i
                          );
                      }),
                  }),
                  B("div", {
                    children: [
                      n
                        ? I(Ca, {
                            title: "Logout",
                            link: "/",
                            icon: I(aS, {}),
                            onClick: () => r(),
                          })
                        : I(Ca, {
                            title: "Login",
                            link: "/login",
                            icon: I(jl, {}),
                            onClick: () => t(!1),
                          }),
                      I(Ca, {
                        title: "Guía",
                        link: "/guide",
                        icon: I(AT, {}),
                        onClick: () => t(!1),
                      }),
                      I(Ca, {
                        title: "Términos y condiciones",
                        link: "/termsandconditions",
                        icon: I(sS, {}),
                        onClick: () => t(!1),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e &&
            I("div", {
              className: "h-full bg-transparent  w-[calc(100%-200px)]",
              onClick: () => t(!1),
            }),
        ],
      }),
    ],
  });
}
const bL = ({ isProtected: e, allowedRoles: t, element: n }) => {
  xk();
  const { user: r } = na();
  return e && !r
    ? I(ws, { to: "/login" })
    : e && !t.includes("ALL")
    ? I(ws, { to: "/unauthorized" })
    : n;
};
function wL() {
  return (
    (document.title = Mi.appTitle),
    B(Ha, {
      children: [
        I(MT, {
          children: B("div", {
            className: "min-h-screen bg-stone-200",
            children: [
              I(_T, {}),
              I(gL, {}),
              I("div", {
                className:
                  "top-[60px] left-0 sm:left-[60px] absolute w-[100vw] sm:w-[calc(100vw-60px)] overflow-auto max-h-[calc(100vh-60px)]",
                children: B(vO, {
                  children: [
                    px.map((e, t) =>
                      I(
                        xp,
                        {
                          path: e.path,
                          element: I(bL, {
                            isProtected: e.isProtected,
                            allowedRoles: e.allowedRoles,
                            element: I(e.component, {}),
                          }),
                        },
                        t
                      )
                    ),
                    I(xp, { path: "*", element: I(ws, { to: "/" }) }),
                  ],
                }),
              }),
            ],
          }),
        }),
        I(wT, {}),
      ],
    })
  );
}
bp.createRoot(document.getElementById("root")).render(
  I(at.StrictMode, {
    children: I(Sk, {
      domain: {}.VITE_AUTH0_DOMAIN,
      clientId: {}.VITE_AUTH0_CLIENT_ID,
      authorizationParams: { redirect_uri: window.location.origin },
      children: I(TR.ApiProvider, {
        api: lS,
        children: I(CO, { children: I(wL, {}) }),
      }),
    }),
  })
);
