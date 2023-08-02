import S0, { useState as f2, useEffect as c2 } from "react";
var Z = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x0;
function d2() {
  if (x0)
    return I;
  x0 = 1;
  var u = S0, E = Symbol.for("react.element"), L = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, x = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(b, f, S) {
    var h, R = {}, T = null, $ = null;
    S !== void 0 && (T = "" + S), f.key !== void 0 && (T = "" + f.key), f.ref !== void 0 && ($ = f.ref);
    for (h in f)
      _.call(f, h) && !j.hasOwnProperty(h) && (R[h] = f[h]);
    if (b && b.defaultProps)
      for (h in f = b.defaultProps, f)
        R[h] === void 0 && (R[h] = f[h]);
    return { $$typeof: E, type: b, key: T, ref: $, props: R, _owner: x.current };
  }
  return I.Fragment = L, I.jsx = p, I.jsxs = p, I;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T0;
function v2() {
  return T0 || (T0 = 1, process.env.NODE_ENV !== "production" && function() {
    var u = S0, E = Symbol.for("react.element"), L = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), b = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), C0 = Symbol.iterator, O0 = "@@iterator";
    function P0(C) {
      if (C === null || typeof C != "object")
        return null;
      var e = C0 && C[C0] || C[O0];
      return typeof e == "function" ? e : null;
    }
    var O = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(C) {
      {
        for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)
          r[t - 1] = arguments[t];
        k0("error", C, r);
      }
    }
    function k0(C, e, r) {
      {
        var t = O.ReactDebugCurrentFrame, i = t.getStackAddendum();
        i !== "" && (e += "%s", r = r.concat([i]));
        var o = r.map(function(a) {
          return String(a);
        });
        o.unshift("Warning: " + e), Function.prototype.apply.call(console[C], console, o);
      }
    }
    var L0 = !1, D0 = !1, A0 = !1, I0 = !1, F0 = !1, e0;
    e0 = Symbol.for("react.module.reference");
    function $0(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === _ || C === j || F0 || C === x || C === S || C === h || I0 || C === $ || L0 || D0 || A0 || typeof C == "object" && C !== null && (C.$$typeof === T || C.$$typeof === R || C.$$typeof === p || C.$$typeof === b || C.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === e0 || C.getModuleId !== void 0));
    }
    function N0(C, e, r) {
      var t = C.displayName;
      if (t)
        return t;
      var i = e.displayName || e.name || "";
      return i !== "" ? r + "(" + i + ")" : r;
    }
    function r0(C) {
      return C.displayName || "Context";
    }
    function M(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case _:
          return "Fragment";
        case L:
          return "Portal";
        case j:
          return "Profiler";
        case x:
          return "StrictMode";
        case S:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case b:
            var e = C;
            return r0(e) + ".Consumer";
          case p:
            var r = C;
            return r0(r._context) + ".Provider";
          case f:
            return N0(C, C.render, "ForwardRef");
          case R:
            var t = C.displayName || null;
            return t !== null ? t : M(C.type) || "Memo";
          case T: {
            var i = C, o = i._payload, a = i._init;
            try {
              return M(a(o));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, D = 0, t0, n0, a0, i0, o0, s0, u0;
    function l0() {
    }
    l0.__reactDisabledLog = !0;
    function W0() {
      {
        if (D === 0) {
          t0 = console.log, n0 = console.info, a0 = console.warn, i0 = console.error, o0 = console.group, s0 = console.groupCollapsed, u0 = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: l0,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        D++;
      }
    }
    function Y0() {
      {
        if (D--, D === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, C, {
              value: t0
            }),
            info: w({}, C, {
              value: n0
            }),
            warn: w({}, C, {
              value: a0
            }),
            error: w({}, C, {
              value: i0
            }),
            group: w({}, C, {
              value: o0
            }),
            groupCollapsed: w({}, C, {
              value: s0
            }),
            groupEnd: w({}, C, {
              value: u0
            })
          });
        }
        D < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = O.ReactCurrentDispatcher, B;
    function N(C, e, r) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var t = i.stack.trim().match(/\n( *(at )?)/);
            B = t && t[1] || "";
          }
        return `
` + B + C;
      }
    }
    var H = !1, W;
    {
      var V0 = typeof WeakMap == "function" ? WeakMap : Map;
      W = new V0();
    }
    function f0(C, e) {
      if (!C || H)
        return "";
      {
        var r = W.get(C);
        if (r !== void 0)
          return r;
      }
      var t;
      H = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var o;
      o = G.current, G.current = null, W0();
      try {
        if (e) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (y) {
              t = y;
            }
            Reflect.construct(C, [], a);
          } else {
            try {
              a.call();
            } catch (y) {
              t = y;
            }
            C.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            t = y;
          }
          C();
        }
      } catch (y) {
        if (y && t && typeof y.stack == "string") {
          for (var n = y.stack.split(`
`), v = t.stack.split(`
`), s = n.length - 1, l = v.length - 1; s >= 1 && l >= 0 && n[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (n[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || n[s] !== v[l]) {
                    var g = `
` + n[s].replace(" at new ", " at ");
                    return C.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", C.displayName)), typeof C == "function" && W.set(C, g), g;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = o, Y0(), Error.prepareStackTrace = i;
      }
      var k = C ? C.displayName || C.name : "", _0 = k ? N(k) : "";
      return typeof C == "function" && W.set(C, _0), _0;
    }
    function U0(C, e, r) {
      return f0(C, !1);
    }
    function G0(C) {
      var e = C.prototype;
      return !!(e && e.isReactComponent);
    }
    function Y(C, e, r) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return f0(C, G0(C));
      if (typeof C == "string")
        return N(C);
      switch (C) {
        case S:
          return N("Suspense");
        case h:
          return N("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case f:
            return U0(C.render);
          case R:
            return Y(C.type, e, r);
          case T: {
            var t = C, i = t._payload, o = t._init;
            try {
              return Y(o(i), e, r);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, c0 = {}, d0 = O.ReactDebugCurrentFrame;
    function U(C) {
      if (C) {
        var e = C._owner, r = Y(C.type, C._source, e ? e.type : null);
        d0.setExtraStackFrame(r);
      } else
        d0.setExtraStackFrame(null);
    }
    function B0(C, e, r, t, i) {
      {
        var o = Function.call.bind(V);
        for (var a in C)
          if (o(C, a)) {
            var n = void 0;
            try {
              if (typeof C[a] != "function") {
                var v = Error((t || "React class") + ": " + r + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              n = C[a](e, a, t, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              n = s;
            }
            n && !(n instanceof Error) && (U(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", r, a, typeof n), U(null)), n instanceof Error && !(n.message in c0) && (c0[n.message] = !0, U(i), d("Failed %s type: %s", r, n.message), U(null));
          }
      }
    }
    var H0 = Array.isArray;
    function q(C) {
      return H0(C);
    }
    function q0(C) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, r = e && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return r;
      }
    }
    function K0(C) {
      try {
        return v0(C), !1;
      } catch {
        return !0;
      }
    }
    function v0(C) {
      return "" + C;
    }
    function p0(C) {
      if (K0(C))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", q0(C)), v0(C);
    }
    var A = O.ReactCurrentOwner, J0 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, h0, g0, K;
    K = {};
    function z0(C) {
      if (V.call(C, "ref")) {
        var e = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function X0(C) {
      if (V.call(C, "key")) {
        var e = Object.getOwnPropertyDescriptor(C, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Z0(C, e) {
      if (typeof C.ref == "string" && A.current && e && A.current.stateNode !== e) {
        var r = M(A.current.type);
        K[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(A.current.type), C.ref), K[r] = !0);
      }
    }
    function Q0(C, e) {
      {
        var r = function() {
          h0 || (h0 = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        r.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function C2(C, e) {
      {
        var r = function() {
          g0 || (g0 = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        r.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var e2 = function(C, e, r, t, i, o, a) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: C,
        key: e,
        ref: r,
        props: a,
        // Record the component responsible for creating this element.
        _owner: o
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: t
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function r2(C, e, r, t, i) {
      {
        var o, a = {}, n = null, v = null;
        r !== void 0 && (p0(r), n = "" + r), X0(e) && (p0(e.key), n = "" + e.key), z0(e) && (v = e.ref, Z0(e, i));
        for (o in e)
          V.call(e, o) && !J0.hasOwnProperty(o) && (a[o] = e[o]);
        if (C && C.defaultProps) {
          var s = C.defaultProps;
          for (o in s)
            a[o] === void 0 && (a[o] = s[o]);
        }
        if (n || v) {
          var l = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          n && Q0(a, l), v && C2(a, l);
        }
        return e2(C, n, v, i, t, A.current, a);
      }
    }
    var J = O.ReactCurrentOwner, m0 = O.ReactDebugCurrentFrame;
    function P(C) {
      if (C) {
        var e = C._owner, r = Y(C.type, C._source, e ? e.type : null);
        m0.setExtraStackFrame(r);
      } else
        m0.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(C) {
      return typeof C == "object" && C !== null && C.$$typeof === E;
    }
    function b0() {
      {
        if (J.current) {
          var C = M(J.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function t2(C) {
      {
        if (C !== void 0) {
          var e = C.fileName.replace(/^.*[\\\/]/, ""), r = C.lineNumber;
          return `

Check your code at ` + e + ":" + r + ".";
        }
        return "";
      }
    }
    var R0 = {};
    function n2(C) {
      {
        var e = b0();
        if (!e) {
          var r = typeof C == "string" ? C : C.displayName || C.name;
          r && (e = `

Check the top-level render call using <` + r + ">.");
        }
        return e;
      }
    }
    function M0(C, e) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var r = n2(e);
        if (R0[r])
          return;
        R0[r] = !0;
        var t = "";
        C && C._owner && C._owner !== J.current && (t = " It was passed a child from " + M(C._owner.type) + "."), P(C), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, t), P(null);
      }
    }
    function y0(C, e) {
      {
        if (typeof C != "object")
          return;
        if (q(C))
          for (var r = 0; r < C.length; r++) {
            var t = C[r];
            X(t) && M0(t, e);
          }
        else if (X(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var i = P0(C);
          if (typeof i == "function" && i !== C.entries)
            for (var o = i.call(C), a; !(a = o.next()).done; )
              X(a.value) && M0(a.value, e);
        }
      }
    }
    function a2(C) {
      {
        var e = C.type;
        if (e == null || typeof e == "string")
          return;
        var r;
        if (typeof e == "function")
          r = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === R))
          r = e.propTypes;
        else
          return;
        if (r) {
          var t = M(e);
          B0(r, C.props, "prop", t, C);
        } else if (e.PropTypes !== void 0 && !z) {
          z = !0;
          var i = M(e);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function i2(C) {
      {
        for (var e = Object.keys(C.props), r = 0; r < e.length; r++) {
          var t = e[r];
          if (t !== "children" && t !== "key") {
            P(C), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), P(null);
            break;
          }
        }
        C.ref !== null && (P(C), d("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
      }
    }
    function E0(C, e, r, t, i, o) {
      {
        var a = $0(C);
        if (!a) {
          var n = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = t2(i);
          v ? n += v : n += b0();
          var s;
          C === null ? s = "null" : q(C) ? s = "array" : C !== void 0 && C.$$typeof === E ? (s = "<" + (M(C.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : s = typeof C, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, n);
        }
        var l = r2(C, e, r, i, o);
        if (l == null)
          return l;
        if (a) {
          var g = e.children;
          if (g !== void 0)
            if (t)
              if (q(g)) {
                for (var k = 0; k < g.length; k++)
                  y0(g[k], C);
                Object.freeze && Object.freeze(g);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              y0(g, C);
        }
        return C === _ ? i2(l) : a2(l), l;
      }
    }
    function o2(C, e, r) {
      return E0(C, e, r, !0);
    }
    function s2(C, e, r) {
      return E0(C, e, r, !1);
    }
    var u2 = s2, l2 = o2;
    F.Fragment = _, F.jsx = u2, F.jsxs = l2;
  }()), F;
}
process.env.NODE_ENV === "production" ? Z.exports = d2() : Z.exports = v2();
var c = Z.exports, m = /* @__PURE__ */ ((u) => (u.LIGHT = "light", u.DARK = "dark", u))(m || {}), Q = /* @__PURE__ */ ((u) => (u.START = "start", u.CENTER = "center", u.END = "end", u))(Q || {});
const p2 = (u) => u === Q.START ? {
  left: "calc(0% + 50px)"
} : u === Q.CENTER ? {
  left: "50%"
} : {
  left: "calc(100% - 50px)"
}, w0 = () => /* @__PURE__ */ c.jsx("svg", { id: "svg", "aria-label": "sun-icon", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "400", height: "400", viewBox: "0, 0, 400,400", children: /* @__PURE__ */ c.jsxs("g", { id: "svgg", children: [
  /* @__PURE__ */ c.jsx("path", { id: "path0", d: "M193.000 39.600 C 192.864 39.820,192.245 40.000,191.625 40.000 C 191.005 40.000,190.274 40.270,190.000 40.600 C 189.726 40.930,189.252 41.200,188.946 41.200 C 187.672 41.200,181.200 46.731,181.200 47.820 C 181.200 48.350,179.507 50.000,178.962 50.000 C 178.446 50.000,174.000 54.510,174.000 55.033 C 174.000 55.549,171.497 58.000,170.970 58.000 C 170.451 58.000,165.200 63.304,165.200 63.829 C 165.200 64.349,162.298 67.200,161.769 67.200 C 161.250 67.200,157.200 71.305,157.200 71.831 C 157.200 72.354,154.295 75.200,153.762 75.200 C 153.539 75.200,152.746 75.830,152.000 76.600 C 151.254 77.370,150.340 78.000,149.971 78.000 C 149.601 78.000,149.074 78.270,148.800 78.600 C 148.367 79.121,145.089 79.200,123.775 79.200 C 107.854 79.200,99.160 79.340,99.000 79.600 C 98.836 79.865,107.109 80.000,123.515 80.000 C 150.051 80.000,149.558 80.035,151.397 78.003 C 151.797 77.561,152.416 77.200,152.772 77.200 C 153.595 77.200,159.200 71.589,159.200 70.765 C 159.200 69.997,161.241 68.000,162.026 68.000 C 162.818 68.000,176.000 54.754,176.000 53.958 C 176.000 53.191,177.241 52.000,178.040 52.000 C 178.858 52.000,185.200 45.527,185.200 44.692 C 185.200 44.286,185.505 44.000,185.938 44.000 C 186.344 44.000,187.003 43.639,187.403 43.197 C 188.337 42.165,190.274 41.200,191.412 41.200 C 191.902 41.200,192.526 40.930,192.800 40.600 C 193.208 40.109,194.561 40.000,200.273 40.000 C 204.820 40.000,207.161 39.861,207.000 39.600 C 206.851 39.359,204.070 39.200,200.000 39.200 C 195.930 39.200,193.149 39.359,193.000 39.600 M208.000 40.600 C 208.274 40.930,208.718 41.200,208.988 41.200 C 209.637 41.200,211.922 42.351,212.216 42.825 C 212.343 43.031,212.742 43.200,213.102 43.200 C 213.960 43.200,216.000 45.169,216.000 45.996 C 216.000 46.740,218.398 49.200,219.122 49.200 C 219.954 49.200,218.833 47.635,215.612 44.300 C 213.358 41.966,212.357 41.200,211.558 41.200 C 210.975 41.200,210.274 40.930,210.000 40.600 C 209.726 40.270,209.052 40.000,208.502 40.000 C 207.659 40.000,207.580 40.094,208.000 40.600 M220.072 50.096 C 220.147 50.619,220.533 51.050,221.000 51.132 C 222.036 51.314,226.000 55.179,226.000 56.008 C 226.000 56.801,228.430 59.200,229.233 59.200 C 230.031 59.200,233.891 63.192,234.068 64.200 C 234.203 64.968,236.000 65.638,236.000 64.920 C 236.000 64.413,228.705 57.345,227.891 57.063 C 227.501 56.928,227.071 56.499,226.936 56.109 C 226.653 55.290,220.787 49.200,220.282 49.200 C 220.096 49.200,220.002 49.603,220.072 50.096 M172.175 61.300 L 171.000 62.600 172.300 61.425 C 173.512 60.330,173.784 60.000,173.475 60.000 C 173.406 60.000,172.821 60.585,172.175 61.300 M236.000 66.175 C 236.000 66.835,237.307 68.000,238.048 68.000 C 238.823 68.000,242.000 71.258,242.000 72.053 C 242.000 72.756,243.226 74.000,243.919 74.000 C 244.840 74.000,243.821 72.528,240.685 69.331 C 237.600 66.185,236.000 65.107,236.000 66.175 M163.375 70.100 L 162.200 71.400 163.500 70.225 C 164.712 69.130,164.984 68.800,164.675 68.800 C 164.606 68.800,164.021 69.385,163.375 70.100 M244.872 74.896 C 244.947 75.419,245.333 75.851,245.800 75.933 C 246.240 76.010,247.320 76.733,248.200 77.538 C 249.080 78.343,250.203 79.226,250.695 79.501 C 251.843 80.141,301.395 80.239,301.000 79.600 C 300.840 79.340,292.146 79.200,276.225 79.200 C 254.911 79.200,251.633 79.121,251.200 78.600 C 250.926 78.270,250.402 78.000,250.036 78.000 C 249.670 78.000,248.483 77.100,247.400 76.000 C 245.226 73.792,244.681 73.554,244.872 74.896 M90.985 80.425 C 90.840 80.658,90.245 81.047,89.661 81.288 C 88.752 81.663,88.707 81.751,89.353 81.902 C 89.766 81.999,90.486 81.895,90.953 81.671 C 91.419 81.447,92.693 81.158,93.784 81.028 C 96.912 80.656,96.988 80.000,93.904 80.000 C 92.443 80.000,91.129 80.191,90.985 80.425 M303.836 80.396 C 304.054 80.614,305.125 80.898,306.216 81.028 C 307.307 81.158,308.581 81.447,309.047 81.671 C 309.514 81.895,310.234 81.999,310.647 81.902 C 311.293 81.751,311.248 81.663,310.339 81.288 C 309.755 81.047,309.160 80.658,309.015 80.425 C 308.871 80.191,307.557 80.000,306.096 80.000 C 304.343 80.000,303.575 80.135,303.836 80.396 M86.800 82.600 C 86.526 82.930,86.085 83.200,85.821 83.200 C 85.005 83.200,83.055 85.552,82.173 87.600 C 81.103 90.083,80.730 90.796,80.389 91.007 C 80.175 91.139,80.000 92.036,80.000 93.000 C 80.000 93.964,79.820 94.864,79.600 95.000 C 79.339 95.161,79.210 104.674,79.228 122.324 C 79.244 137.804,79.403 149.057,79.600 148.600 C 79.789 148.160,79.956 135.987,79.972 121.549 C 79.996 98.726,80.078 95.233,80.600 94.800 C 80.930 94.526,81.200 93.692,81.200 92.946 C 81.200 92.200,81.367 91.277,81.571 90.895 C 81.775 90.513,82.052 89.930,82.186 89.600 C 82.799 88.099,83.703 86.918,86.051 84.549 C 87.586 83.000,88.326 82.000,87.937 82.000 C 87.586 82.000,87.074 82.270,86.800 82.600 M313.949 84.549 C 316.297 86.918,317.201 88.099,317.814 89.600 C 317.948 89.930,318.225 90.513,318.429 90.895 C 318.633 91.277,318.800 92.200,318.800 92.946 C 318.800 93.692,319.070 94.526,319.400 94.800 C 319.922 95.233,320.004 98.726,320.028 121.549 C 320.044 135.987,320.211 148.160,320.400 148.600 C 320.597 149.057,320.756 137.804,320.772 122.324 C 320.790 104.674,320.661 95.161,320.400 95.000 C 320.180 94.864,320.000 93.964,320.000 93.000 C 320.000 92.036,319.825 91.139,319.611 91.007 C 319.270 90.796,318.897 90.083,317.827 87.600 C 316.945 85.552,314.995 83.200,314.179 83.200 C 313.915 83.200,313.474 82.930,313.200 82.600 C 312.926 82.270,312.414 82.000,312.063 82.000 C 311.674 82.000,312.414 83.000,313.949 84.549 M195.000 109.077 C 188.252 109.366,180.634 110.689,175.800 112.412 C 158.803 118.469,157.856 118.925,146.854 126.348 C 140.346 130.740,129.105 142.218,125.293 148.366 C 124.258 150.035,122.478 152.802,121.337 154.514 C 118.697 158.478,117.621 161.047,112.421 175.800 C 107.130 190.811,107.826 212.514,114.128 229.000 C 114.465 229.880,115.318 232.220,116.024 234.200 C 120.966 248.050,134.414 265.258,146.857 273.654 C 155.581 279.540,159.657 281.780,165.200 283.734 C 184.878 290.670,184.364 290.569,199.800 290.587 C 212.220 290.601,216.514 290.113,222.600 287.992 C 241.453 281.421,240.825 281.715,252.725 273.926 C 259.083 269.764,269.354 259.513,273.491 253.200 C 274.284 251.990,276.059 249.290,277.437 247.200 C 280.678 242.281,282.077 239.501,283.783 234.596 C 284.547 232.398,285.735 229.070,286.423 227.200 C 290.110 217.181,290.592 214.018,290.596 199.800 C 290.601 185.789,290.165 182.968,286.423 172.800 C 285.735 170.930,284.547 167.602,283.783 165.404 C 279.496 153.074,264.559 133.544,254.400 126.986 C 243.772 120.125,240.161 118.184,233.884 115.955 C 218.094 110.348,216.557 109.965,206.792 109.206 C 201.957 108.830,200.994 108.820,195.000 109.077 M76.422 152.177 C 75.090 153.522,74.000 154.806,74.000 155.032 C 74.000 155.549,71.498 158.000,70.970 158.000 C 70.451 158.000,65.200 163.304,65.200 163.829 C 65.200 164.349,62.298 167.200,61.769 167.200 C 61.250 167.200,57.200 171.305,57.200 171.831 C 57.200 172.349,54.297 175.200,53.769 175.200 C 53.250 175.200,49.200 179.305,49.200 179.831 C 49.200 180.356,46.294 183.200,45.758 183.200 C 45.223 183.200,43.390 185.194,43.057 186.138 C 42.913 186.544,42.437 186.970,41.998 187.085 C 41.438 187.231,41.200 187.631,41.200 188.423 C 41.200 189.044,41.031 189.657,40.825 189.784 C 39.335 190.706,38.235 206.156,39.600 207.000 C 39.820 207.136,40.000 207.575,40.000 207.975 C 40.000 208.375,40.270 208.926,40.600 209.200 C 40.930 209.474,41.200 210.159,41.200 210.723 C 41.200 211.287,41.585 212.158,42.056 212.659 C 42.526 213.160,43.115 213.978,43.364 214.477 C 43.612 214.976,44.236 215.594,44.750 215.850 C 45.938 216.443,49.200 219.628,49.200 220.197 C 49.200 220.740,53.285 224.800,53.831 224.800 C 54.349 224.800,57.200 227.703,57.200 228.231 C 57.200 228.748,61.303 232.800,61.828 232.800 C 62.349 232.800,66.000 236.502,66.000 237.030 C 66.000 237.549,69.303 240.800,69.830 240.800 C 70.347 240.800,74.000 244.502,74.000 245.026 C 74.000 245.614,78.671 250.134,79.387 250.239 C 79.724 250.289,80.000 250.086,80.000 249.788 C 80.000 249.042,79.314 248.682,79.066 249.298 C 78.954 249.574,78.849 249.441,78.832 249.002 C 78.812 248.506,71.846 241.225,60.461 229.802 L 42.122 211.400 41.393 208.800 C 40.993 207.370,40.515 206.029,40.332 205.820 C 39.720 205.120,39.927 193.358,40.561 192.832 C 40.991 192.475,41.162 192.485,41.291 192.873 C 41.384 193.153,41.564 192.981,41.693 192.489 C 41.821 192.000,41.762 191.700,41.563 191.823 C 40.998 192.172,41.136 190.650,41.785 189.361 C 42.107 188.723,44.537 186.043,47.185 183.406 C 49.833 180.770,52.000 178.295,52.000 177.906 C 52.000 177.497,52.298 177.200,52.710 177.200 C 53.577 177.200,59.200 171.625,59.200 170.765 C 59.200 169.997,61.241 168.000,62.026 168.000 C 62.818 168.000,76.000 154.754,76.000 153.958 C 76.000 153.093,77.281 152.000,78.294 152.000 C 78.948 152.000,79.083 151.808,78.928 151.100 C 78.787 150.457,78.839 150.353,79.110 150.734 C 79.409 151.155,79.531 151.105,79.690 150.500 C 80.059 149.089,78.887 149.690,76.422 152.177 M320.319 150.532 C 320.456 151.059,320.607 151.178,320.717 150.848 C 320.942 150.173,326.000 155.116,326.000 156.010 C 326.000 156.801,328.431 159.200,329.233 159.200 C 330.031 159.200,333.891 163.192,334.068 164.200 C 334.203 164.968,336.000 165.638,336.000 164.920 C 336.000 164.414,328.706 157.345,327.894 157.064 C 327.506 156.930,327.026 156.411,326.829 155.910 C 325.926 153.623,319.805 148.566,320.319 150.532 M72.175 161.300 L 71.000 162.600 72.300 161.425 C 73.015 160.779,73.600 160.194,73.600 160.125 C 73.600 159.816,73.270 160.088,72.175 161.300 M336.000 166.175 C 336.000 166.835,337.307 168.000,338.048 168.000 C 338.823 168.000,342.000 171.258,342.000 172.053 C 342.000 172.756,343.226 174.000,343.919 174.000 C 344.840 174.000,343.821 172.528,340.685 169.331 C 337.600 166.185,336.000 165.107,336.000 166.175 M63.375 170.100 L 62.200 171.400 63.500 170.225 C 64.215 169.579,64.800 168.994,64.800 168.925 C 64.800 168.616,64.470 168.888,63.375 170.100 M344.872 174.896 C 344.947 175.419,345.333 175.850,345.800 175.932 C 346.836 176.114,350.800 179.979,350.800 180.808 C 350.800 181.613,353.235 184.000,354.057 184.000 C 354.817 184.000,356.000 185.250,356.000 186.053 C 356.000 186.378,356.630 187.254,357.400 188.000 C 358.315 188.886,358.800 189.729,358.800 190.429 C 358.800 191.019,359.070 191.726,359.400 192.000 C 360.123 192.600,360.274 196.617,359.557 196.174 C 359.271 195.997,359.190 196.166,359.327 196.650 C 359.975 198.940,360.057 207.455,359.436 207.970 C 359.086 208.261,358.800 208.718,358.800 208.988 C 358.800 210.217,357.280 212.148,352.815 216.594 C 350.167 219.230,348.000 221.705,348.000 222.094 C 348.000 222.503,347.702 222.800,347.290 222.800 C 346.451 222.800,340.800 228.362,340.800 229.188 C 340.800 229.969,338.793 232.000,338.021 232.000 C 337.197 232.000,324.000 245.217,324.000 246.042 C 324.000 246.907,322.719 248.000,321.706 248.000 C 321.061 248.000,320.912 248.202,321.042 248.900 C 321.134 249.395,321.102 249.574,320.970 249.298 C 320.681 248.689,320.000 249.034,320.000 249.788 C 320.000 250.086,320.276 250.289,320.613 250.239 C 321.354 250.131,326.000 245.604,326.000 244.991 C 326.000 244.457,328.489 242.000,329.030 242.000 C 329.549 242.000,334.800 236.696,334.800 236.171 C 334.800 235.651,337.702 232.800,338.231 232.800 C 338.750 232.800,342.800 228.695,342.800 228.169 C 342.800 227.651,345.703 224.800,346.231 224.800 C 346.750 224.800,350.800 220.695,350.800 220.169 C 350.800 219.644,353.706 216.800,354.242 216.800 C 354.777 216.800,356.610 214.806,356.943 213.862 C 357.087 213.456,357.563 213.030,358.002 212.915 C 358.562 212.769,358.800 212.369,358.800 211.577 C 358.800 210.956,358.969 210.343,359.175 210.216 C 360.673 209.290,361.780 192.653,360.400 191.800 C 360.180 191.664,360.000 191.045,360.000 190.425 C 360.000 189.805,359.730 189.074,359.400 188.800 C 359.070 188.526,358.800 188.093,358.800 187.837 C 358.800 187.263,354.732 183.200,354.157 183.200 C 353.646 183.200,352.000 181.495,352.000 180.965 C 352.000 180.506,345.521 174.000,345.064 174.000 C 344.888 174.000,344.802 174.403,344.872 174.896 M350.000 183.800 C 350.746 184.570,351.447 185.200,351.557 185.200 C 351.667 185.200,351.146 184.570,350.400 183.800 C 349.654 183.030,348.953 182.400,348.843 182.400 C 348.733 182.400,349.254 183.030,350.000 183.800 M360.291 201.500 C 360.205 202.325,360.134 201.650,360.134 200.000 C 360.134 198.350,360.205 197.675,360.291 198.500 C 360.378 199.325,360.378 200.675,360.291 201.500 M336.175 230.100 L 335.000 231.400 336.300 230.225 C 337.512 229.130,337.784 228.800,337.475 228.800 C 337.406 228.800,336.821 229.385,336.175 230.100 M327.375 238.900 L 326.200 240.200 327.500 239.025 C 328.215 238.379,328.800 237.794,328.800 237.725 C 328.800 237.416,328.470 237.688,327.375 238.900 M79.228 277.676 C 79.210 295.326,79.339 304.839,79.600 305.000 C 79.820 305.136,80.000 306.036,80.000 307.000 C 80.000 307.964,80.175 308.861,80.389 308.993 C 80.730 309.204,81.103 309.917,82.173 312.400 C 83.055 314.448,85.005 316.800,85.821 316.800 C 86.085 316.800,86.526 317.070,86.800 317.400 C 87.074 317.730,87.586 318.000,87.937 318.000 C 88.326 318.000,87.586 317.000,86.051 315.451 C 83.703 313.082,82.799 311.901,82.186 310.400 C 82.052 310.070,81.775 309.487,81.571 309.105 C 81.367 308.723,81.200 307.800,81.200 307.054 C 81.200 306.308,80.930 305.474,80.600 305.200 C 80.078 304.767,79.996 301.274,79.972 278.451 C 79.956 264.013,79.789 251.840,79.600 251.400 C 79.403 250.943,79.244 262.196,79.228 277.676 M320.305 251.600 C 320.143 252.150,320.008 264.323,320.005 278.651 C 320.001 301.315,319.922 304.767,319.400 305.200 C 319.070 305.474,318.800 306.308,318.800 307.054 C 318.800 307.800,318.633 308.723,318.429 309.105 C 318.225 309.487,317.948 310.070,317.814 310.400 C 317.201 311.901,316.297 313.082,313.949 315.451 C 312.414 317.000,311.674 318.000,312.063 318.000 C 312.414 318.000,312.926 317.730,313.200 317.400 C 313.474 317.070,313.915 316.800,314.179 316.800 C 314.995 316.800,316.945 314.448,317.827 312.400 C 318.897 309.917,319.270 309.204,319.611 308.993 C 319.825 308.861,320.000 307.989,320.000 307.056 C 320.000 306.123,320.181 305.179,320.403 304.957 C 320.667 304.693,320.770 295.293,320.703 277.577 C 320.646 262.740,320.467 251.050,320.305 251.600 M89.000 318.400 C 89.136 318.620,89.485 318.800,89.775 318.800 C 90.065 318.800,90.526 319.070,90.800 319.400 C 91.150 319.822,92.078 320.000,93.929 320.000 C 97.164 320.000,96.837 319.270,93.445 318.920 C 92.197 318.791,91.081 318.531,90.965 318.343 C 90.848 318.154,90.303 318.000,89.753 318.000 C 89.188 318.000,88.860 318.174,89.000 318.400 M309.035 318.343 C 308.919 318.531,307.803 318.791,306.555 318.920 C 303.163 319.270,302.836 320.000,306.071 320.000 C 307.922 320.000,308.850 319.822,309.200 319.400 C 309.474 319.070,309.935 318.800,310.225 318.800 C 310.515 318.800,310.864 318.620,311.000 318.400 C 311.140 318.174,310.812 318.000,310.247 318.000 C 309.697 318.000,309.152 318.154,309.035 318.343 M99.000 320.400 C 99.160 320.660,107.854 320.800,123.775 320.800 C 145.089 320.800,148.367 320.879,148.800 321.400 C 149.074 321.730,149.601 322.000,149.971 322.000 C 150.340 322.000,151.254 322.630,152.000 323.400 C 152.746 324.170,153.555 324.800,153.797 324.800 C 154.340 324.800,157.200 327.683,157.200 328.231 C 157.200 328.748,161.303 332.800,161.828 332.800 C 162.330 332.800,166.000 336.493,166.000 336.999 C 166.000 337.522,169.276 340.800,169.798 340.800 C 170.324 340.800,174.000 344.477,174.000 345.002 C 174.000 345.529,178.481 350.000,179.009 350.000 C 179.544 350.000,182.000 352.489,182.000 353.032 C 182.000 354.051,187.719 358.800,188.946 358.800 C 189.252 358.800,189.726 359.070,190.000 359.400 C 190.274 359.730,191.005 360.000,191.625 360.000 C 192.245 360.000,192.864 360.180,193.000 360.400 C 193.149 360.641,195.930 360.800,200.000 360.800 C 204.070 360.800,206.851 360.641,207.000 360.400 C 207.136 360.180,207.755 360.000,208.375 360.000 C 208.995 360.000,209.726 359.730,210.000 359.400 C 210.274 359.070,210.748 358.800,211.054 358.800 C 212.328 358.800,218.800 353.269,218.800 352.180 C 218.800 351.662,220.488 350.000,221.014 350.000 C 221.532 350.000,226.000 345.512,226.000 344.991 C 226.000 344.457,228.489 342.000,229.030 342.000 C 229.549 342.000,234.800 336.696,234.800 336.171 C 234.800 335.651,237.702 332.800,238.231 332.800 C 238.750 332.800,242.800 328.695,242.800 328.169 C 242.800 327.646,245.705 324.800,246.238 324.800 C 246.461 324.800,247.254 324.170,248.000 323.400 C 248.746 322.630,249.660 322.000,250.029 322.000 C 250.399 322.000,250.926 321.730,251.200 321.400 C 251.633 320.879,254.911 320.800,276.225 320.800 C 292.146 320.800,300.840 320.660,301.000 320.400 C 301.164 320.135,292.891 320.000,276.485 320.000 C 249.949 320.000,250.442 319.965,248.603 321.997 C 248.203 322.439,247.593 322.800,247.247 322.800 C 246.422 322.800,240.800 328.394,240.800 329.215 C 240.800 329.999,238.769 332.000,237.974 332.000 C 237.182 332.000,224.000 345.246,224.000 346.042 C 224.000 346.809,222.759 348.000,221.960 348.000 C 221.142 348.000,214.800 354.473,214.800 355.308 C 214.800 355.714,214.495 356.000,214.062 356.000 C 213.656 356.000,212.997 356.361,212.597 356.803 C 211.663 357.835,209.726 358.800,208.588 358.800 C 208.098 358.800,207.474 359.070,207.200 359.400 C 206.794 359.890,205.469 360.000,200.000 360.000 C 194.531 360.000,193.206 359.890,192.800 359.400 C 192.526 359.070,191.902 358.800,191.412 358.800 C 189.552 358.800,187.732 357.159,170.802 340.213 C 161.233 330.636,153.116 322.800,152.764 322.800 C 152.412 322.800,151.797 322.439,151.397 321.997 C 149.558 319.965,150.051 320.000,123.515 320.000 C 107.109 320.000,98.836 320.135,99.000 320.400 M236.175 330.100 L 235.000 331.400 236.300 330.225 C 237.015 329.579,237.600 328.994,237.600 328.925 C 237.600 328.616,237.270 328.888,236.175 330.100 M227.375 338.900 L 226.200 340.200 227.500 339.025 C 228.215 338.379,228.800 337.794,228.800 337.725 C 228.800 337.416,228.470 337.688,227.375 338.900 ", stroke: "none", fill: "#fcea3b", fillRule: "evenodd" }),
  /* @__PURE__ */ c.jsx("path", { id: "path1", d: "M194.000 38.600 C 193.561 39.129,194.284 39.200,200.127 39.200 C 204.113 39.200,206.851 39.359,207.000 39.600 C 207.161 39.861,204.820 40.000,200.273 40.000 C 194.561 40.000,193.208 40.109,192.800 40.600 C 192.526 40.930,191.902 41.200,191.412 41.200 C 190.274 41.200,188.337 42.165,187.403 43.197 C 187.003 43.639,186.344 44.000,185.938 44.000 C 185.498 44.000,185.200 44.287,185.200 44.709 C 185.200 45.584,178.823 52.000,177.954 52.000 C 177.192 52.000,176.000 53.243,176.000 54.036 C 176.000 54.813,162.752 68.000,161.971 68.000 C 161.195 68.000,159.200 70.039,159.200 70.832 C 159.200 71.620,153.550 77.200,152.753 77.200 C 152.407 77.200,151.797 77.561,151.397 78.003 C 149.558 80.035,150.051 80.000,123.515 80.000 C 107.109 80.000,98.836 79.865,99.000 79.600 C 99.158 79.345,97.945 79.200,95.647 79.200 C 93.667 79.200,91.936 79.380,91.800 79.600 C 91.645 79.850,92.489 80.000,94.056 80.000 C 97.012 80.000,96.836 80.665,93.784 81.028 C 92.693 81.158,91.419 81.447,90.953 81.671 C 90.486 81.895,89.766 81.999,89.353 81.902 C 88.707 81.751,88.752 81.663,89.661 81.288 C 91.156 80.670,91.461 80.000,90.247 80.000 C 89.697 80.000,89.143 80.169,89.016 80.375 C 88.738 80.824,86.451 82.000,85.854 82.000 C 85.279 82.000,82.000 85.252,82.000 85.822 C 82.000 86.444,80.836 88.730,80.375 89.016 C 80.169 89.143,80.000 89.697,80.000 90.247 C 80.000 91.954,80.625 91.192,82.173 87.600 C 83.055 85.552,85.005 83.200,85.821 83.200 C 86.085 83.200,86.526 82.930,86.800 82.600 C 87.074 82.270,87.586 82.000,87.937 82.000 C 88.326 82.000,87.586 83.000,86.051 84.549 C 83.703 86.918,82.799 88.099,82.186 89.600 C 82.052 89.930,81.775 90.513,81.571 90.895 C 81.367 91.277,81.200 92.200,81.200 92.946 C 81.200 93.692,80.930 94.526,80.600 94.800 C 80.078 95.233,79.996 98.726,79.972 121.549 C 79.956 135.987,79.789 148.160,79.600 148.600 C 79.377 149.119,79.246 149.192,79.228 148.808 C 79.189 147.983,72.063 155.159,71.918 156.169 C 71.853 156.624,71.442 157.054,71.000 157.131 C 69.918 157.318,63.266 163.937,63.118 164.974 C 63.050 165.454,62.653 165.850,62.172 165.918 C 61.136 166.066,55.319 171.917,55.131 173.000 C 55.054 173.442,54.623 173.853,54.168 173.918 C 53.138 174.066,47.319 179.917,47.130 180.995 C 47.054 181.433,46.633 181.854,46.195 181.932 C 45.226 182.103,41.200 185.959,41.200 186.716 C 41.200 187.558,42.527 187.100,43.034 186.081 C 43.642 184.862,45.231 183.200,45.789 183.200 C 46.338 183.200,49.200 180.322,49.200 179.769 C 49.200 179.250,53.305 175.200,53.831 175.200 C 54.349 175.200,57.200 172.297,57.200 171.769 C 57.200 171.250,61.305 167.200,61.831 167.200 C 62.348 167.200,65.200 164.298,65.200 163.772 C 65.200 163.250,70.504 158.000,71.032 158.000 C 71.550 158.000,74.000 155.498,74.000 154.968 C 74.000 154.408,78.661 149.867,79.338 149.768 C 79.717 149.712,79.835 149.945,79.696 150.476 C 79.533 151.098,79.408 151.153,79.110 150.734 C 78.839 150.353,78.787 150.457,78.928 151.100 C 79.087 151.825,78.950 152.000,78.225 152.000 C 77.237 152.000,76.000 153.132,76.000 154.036 C 76.000 154.813,62.752 168.000,61.971 168.000 C 61.195 168.000,59.200 170.039,59.200 170.832 C 59.200 171.655,53.532 177.200,52.691 177.200 C 52.297 177.200,52.000 177.504,52.000 177.906 C 52.000 178.295,49.833 180.770,47.185 183.406 C 44.537 186.043,42.107 188.723,41.785 189.361 C 41.136 190.650,40.998 192.172,41.563 191.823 C 41.762 191.700,41.821 192.000,41.693 192.489 C 41.564 192.981,41.384 193.153,41.291 192.873 C 41.162 192.485,40.991 192.475,40.561 192.832 C 39.927 193.358,39.720 205.120,40.332 205.820 C 40.515 206.029,40.993 207.370,41.393 208.800 L 42.122 211.400 60.461 229.802 C 71.846 241.225,78.812 248.506,78.832 249.002 C 78.849 249.441,78.954 249.574,79.066 249.298 C 79.314 248.682,80.000 249.042,80.000 249.788 C 80.000 250.086,79.724 250.289,79.387 250.239 C 78.651 250.131,74.000 245.606,74.000 244.997 C 74.000 244.477,70.322 240.800,69.801 240.800 C 69.278 240.800,66.000 237.524,66.000 237.002 C 66.000 236.461,62.316 232.800,61.773 232.800 C 61.251 232.800,57.200 228.697,57.200 228.169 C 57.200 227.651,54.297 224.800,53.769 224.800 C 53.251 224.800,49.200 220.696,49.200 220.171 C 49.200 219.623,45.910 216.428,44.750 215.850 C 44.236 215.594,43.612 214.976,43.364 214.477 C 43.115 213.978,42.526 213.160,42.056 212.659 C 41.585 212.158,41.200 211.287,41.200 210.723 C 41.200 210.159,40.930 209.474,40.600 209.200 C 40.270 208.926,40.000 208.375,40.000 207.975 C 40.000 207.575,39.820 207.136,39.600 207.000 C 39.357 206.850,39.200 203.913,39.200 199.527 C 39.200 193.150,39.130 192.360,38.600 192.800 C 37.904 193.377,37.695 206.564,38.375 206.984 C 38.969 207.352,40.000 209.639,40.000 210.592 C 40.000 211.070,40.450 211.883,41.000 212.400 C 41.550 212.917,42.000 213.634,42.000 213.995 C 42.000 214.807,44.026 216.800,44.852 216.800 C 45.610 216.800,47.200 218.449,47.200 219.235 C 47.200 220.021,53.252 226.000,54.047 226.000 C 54.810 226.000,56.000 227.244,56.000 228.042 C 56.000 228.813,61.251 234.000,62.032 234.000 C 62.805 234.000,65.200 236.442,65.200 237.231 C 65.200 238.031,69.996 242.693,71.000 242.869 C 71.441 242.946,71.853 243.377,71.918 243.831 C 72.063 244.841,79.189 252.017,79.228 251.192 C 79.246 250.808,79.377 250.881,79.600 251.400 C 79.789 251.840,79.956 264.013,79.972 278.451 C 79.996 301.274,80.078 304.767,80.600 305.200 C 80.930 305.474,81.200 306.308,81.200 307.054 C 81.200 307.800,81.367 308.723,81.571 309.105 C 81.775 309.487,82.052 310.070,82.186 310.400 C 82.799 311.901,83.703 313.082,86.051 315.451 C 87.586 317.000,88.326 318.000,87.937 318.000 C 87.586 318.000,87.074 317.730,86.800 317.400 C 86.526 317.070,86.085 316.800,85.821 316.800 C 85.005 316.800,83.055 314.448,82.173 312.400 C 80.625 308.808,80.000 308.046,80.000 309.753 C 80.000 310.303,80.169 310.857,80.375 310.984 C 80.824 311.262,82.000 313.549,82.000 314.146 C 82.000 314.721,85.252 318.000,85.822 318.000 C 86.444 318.000,88.730 319.164,89.016 319.625 C 89.143 319.831,89.697 320.000,90.247 320.000 C 91.461 320.000,91.156 319.330,89.661 318.712 C 88.752 318.337,88.707 318.249,89.353 318.098 C 89.766 318.001,90.486 318.105,90.953 318.329 C 91.419 318.553,92.693 318.842,93.784 318.972 C 96.836 319.335,97.012 320.000,94.056 320.000 C 92.489 320.000,91.645 320.150,91.800 320.400 C 91.936 320.620,93.667 320.800,95.647 320.800 C 97.945 320.800,99.158 320.655,99.000 320.400 C 98.836 320.135,107.109 320.000,123.515 320.000 C 150.051 320.000,149.558 319.965,151.397 321.997 C 151.797 322.439,152.412 322.800,152.764 322.800 C 153.116 322.800,161.233 330.636,170.802 340.213 C 187.732 357.159,189.552 358.800,191.412 358.800 C 191.902 358.800,192.526 359.070,192.800 359.400 C 193.535 360.285,206.465 360.285,207.200 359.400 C 207.474 359.070,208.098 358.800,208.588 358.800 C 209.726 358.800,211.663 357.835,212.597 356.803 C 212.997 356.361,213.656 356.000,214.062 356.000 C 214.502 356.000,214.800 355.713,214.800 355.291 C 214.800 354.416,221.177 348.000,222.046 348.000 C 222.808 348.000,224.000 346.757,224.000 345.964 C 224.000 345.216,237.233 332.000,237.982 332.000 C 238.761 332.000,240.800 329.999,240.800 329.235 C 240.800 328.411,246.405 322.800,247.228 322.800 C 247.584 322.800,248.203 322.439,248.603 321.997 C 250.442 319.965,249.949 320.000,276.485 320.000 C 292.891 320.000,301.164 320.135,301.000 320.400 C 300.842 320.655,302.055 320.800,304.353 320.800 C 306.333 320.800,308.064 320.620,308.200 320.400 C 308.355 320.150,307.511 320.000,305.944 320.000 C 302.988 320.000,303.164 319.335,306.216 318.972 C 307.307 318.842,308.581 318.553,309.047 318.329 C 309.514 318.105,310.234 318.001,310.647 318.098 C 311.293 318.249,311.248 318.337,310.339 318.712 C 308.844 319.330,308.539 320.000,309.753 320.000 C 310.303 320.000,310.857 319.831,310.984 319.625 C 311.270 319.164,313.556 318.000,314.178 318.000 C 314.748 318.000,318.000 314.721,318.000 314.146 C 318.000 313.549,319.176 311.262,319.625 310.984 C 319.831 310.857,320.000 310.303,320.000 309.753 C 320.000 308.046,319.375 308.808,317.827 312.400 C 316.945 314.448,314.995 316.800,314.179 316.800 C 313.915 316.800,313.474 317.070,313.200 317.400 C 312.926 317.730,312.414 318.000,312.063 318.000 C 311.674 318.000,312.414 317.000,313.949 315.451 C 316.297 313.082,317.201 311.901,317.814 310.400 C 317.948 310.070,318.225 309.487,318.429 309.105 C 318.633 308.723,318.800 307.800,318.800 307.054 C 318.800 306.308,319.070 305.474,319.400 305.200 C 319.922 304.767,320.004 301.274,320.028 278.451 C 320.044 264.013,320.211 251.840,320.400 251.400 C 320.623 250.881,320.754 250.808,320.772 251.192 C 320.811 252.017,327.937 244.841,328.082 243.831 C 328.147 243.376,328.558 242.946,329.000 242.869 C 330.079 242.682,336.733 236.065,336.882 235.031 C 336.947 234.577,337.358 234.146,337.800 234.069 C 338.883 233.881,344.734 228.064,344.882 227.028 C 344.950 226.546,345.346 226.150,345.828 226.082 C 346.860 225.934,352.680 220.085,352.870 219.005 C 352.946 218.567,353.367 218.146,353.805 218.068 C 354.774 217.897,358.800 214.041,358.800 213.284 C 358.800 212.442,357.473 212.900,356.966 213.919 C 356.358 215.138,354.769 216.800,354.211 216.800 C 353.662 216.800,350.800 219.678,350.800 220.231 C 350.800 220.750,346.695 224.800,346.169 224.800 C 345.651 224.800,342.800 227.703,342.800 228.231 C 342.800 228.750,338.695 232.800,338.169 232.800 C 337.652 232.800,334.800 235.702,334.800 236.228 C 334.800 236.750,329.496 242.000,328.968 242.000 C 328.450 242.000,326.000 244.502,326.000 245.032 C 326.000 245.616,321.325 250.135,320.613 250.239 C 320.276 250.289,320.000 250.086,320.000 249.788 C 320.000 249.034,320.681 248.689,320.970 249.298 C 321.102 249.574,321.134 249.395,321.042 248.900 C 320.909 248.184,321.059 248.000,321.775 248.000 C 322.763 248.000,324.000 246.868,324.000 245.964 C 324.000 245.187,337.248 232.000,338.029 232.000 C 338.805 232.000,340.800 229.961,340.800 229.168 C 340.800 228.345,346.468 222.800,347.309 222.800 C 347.703 222.800,348.000 222.496,348.000 222.094 C 348.000 221.705,350.167 219.230,352.815 216.594 C 357.280 212.148,358.800 210.217,358.800 208.988 C 358.800 208.718,359.086 208.261,359.436 207.970 C 360.057 207.455,359.975 198.940,359.327 196.650 C 359.190 196.166,359.271 195.997,359.557 196.174 C 360.274 196.617,360.123 192.600,359.400 192.000 C 359.070 191.726,358.800 191.019,358.800 190.429 C 358.800 189.729,358.315 188.886,357.400 188.000 C 356.630 187.254,356.000 186.346,356.000 185.984 C 356.000 185.190,354.768 184.000,353.947 184.000 C 353.188 184.000,350.800 181.546,350.800 180.767 C 350.800 179.969,346.808 176.109,345.800 175.932 C 345.031 175.797,344.362 174.000,345.081 174.000 C 345.571 174.000,352.000 180.540,352.000 181.039 C 352.000 181.556,353.704 183.200,354.239 183.200 C 354.772 183.200,358.800 187.319,358.800 187.864 C 358.800 188.105,359.070 188.526,359.400 188.800 C 359.905 189.219,360.000 189.147,360.000 188.346 C 360.000 187.636,357.558 184.953,350.400 177.800 C 345.120 172.523,340.800 167.980,340.800 167.703 C 340.800 167.426,340.576 167.200,340.303 167.200 C 340.030 167.200,335.530 162.926,330.303 157.703 C 325.076 152.480,320.787 148.475,320.772 148.803 C 320.753 149.197,320.627 149.128,320.400 148.600 C 320.211 148.160,320.044 135.987,320.028 121.549 C 320.004 98.726,319.922 95.233,319.400 94.800 C 319.070 94.526,318.800 93.692,318.800 92.946 C 318.800 92.200,318.633 91.277,318.429 90.895 C 318.225 90.513,317.948 89.930,317.814 89.600 C 317.201 88.099,316.297 86.918,313.949 84.549 C 312.414 83.000,311.674 82.000,312.063 82.000 C 312.414 82.000,312.926 82.270,313.200 82.600 C 313.474 82.930,313.915 83.200,314.179 83.200 C 314.995 83.200,316.945 85.552,317.827 87.600 C 319.375 91.192,320.000 91.954,320.000 90.247 C 320.000 89.697,319.831 89.143,319.625 89.016 C 319.164 88.730,318.000 86.444,318.000 85.822 C 318.000 85.252,314.721 82.000,314.146 82.000 C 313.549 82.000,311.262 80.824,310.984 80.375 C 310.857 80.169,310.303 80.000,309.753 80.000 C 308.539 80.000,308.844 80.670,310.339 81.288 C 311.248 81.663,311.293 81.751,310.647 81.902 C 310.234 81.999,309.514 81.895,309.047 81.671 C 308.581 81.447,307.307 81.158,306.216 81.028 C 303.164 80.665,302.988 80.000,305.944 80.000 C 307.511 80.000,308.355 79.850,308.200 79.600 C 308.064 79.380,306.333 79.200,304.353 79.200 C 302.055 79.200,300.842 79.345,301.000 79.600 C 301.395 80.239,251.843 80.141,250.695 79.501 C 250.203 79.226,249.080 78.343,248.200 77.538 C 247.320 76.733,246.240 76.010,245.800 75.933 C 245.027 75.797,244.364 74.000,245.087 74.000 C 245.276 74.000,246.317 74.900,247.400 76.000 C 248.483 77.100,249.670 78.000,250.036 78.000 C 250.402 78.000,250.926 78.270,251.200 78.600 C 251.474 78.930,252.148 79.200,252.698 79.200 C 253.541 79.200,253.620 79.106,253.200 78.600 C 252.926 78.270,252.452 78.000,252.146 78.000 C 250.797 78.000,240.800 68.930,240.800 67.707 C 240.800 67.428,240.576 67.200,240.302 67.200 C 239.668 67.200,216.000 43.566,216.000 42.932 C 216.000 42.458,213.856 41.200,213.048 41.200 C 212.812 41.200,213.966 42.595,215.612 44.300 C 218.899 47.703,219.959 49.200,219.082 49.200 C 218.391 49.200,216.000 46.719,216.000 46.003 C 216.000 45.193,213.972 43.200,213.149 43.200 C 212.763 43.200,212.343 43.031,212.216 42.825 C 211.922 42.351,209.637 41.200,208.988 41.200 C 208.718 41.200,208.274 40.930,208.000 40.600 C 207.580 40.094,207.659 40.000,208.502 40.000 C 209.052 40.000,209.726 40.270,210.000 40.600 C 210.533 41.242,212.604 41.453,212.216 40.825 C 211.845 40.225,209.557 39.200,208.588 39.200 C 208.098 39.200,207.474 38.930,207.200 38.600 C 206.797 38.115,205.536 38.000,200.600 38.000 C 195.664 38.000,194.403 38.115,194.000 38.600 M189.266 39.793 C 188.753 40.076,188.132 40.508,187.886 40.754 C 187.641 40.999,187.157 41.200,186.811 41.200 C 185.982 41.200,180.110 47.171,179.930 48.195 C 179.854 48.633,179.433 49.054,178.995 49.130 C 177.917 49.319,172.066 55.138,171.918 56.168 C 171.853 56.623,171.442 57.054,171.000 57.131 C 169.918 57.318,163.266 63.937,163.118 64.974 C 163.050 65.454,162.653 65.850,162.172 65.918 C 161.140 66.066,155.320 71.915,155.130 72.995 C 155.054 73.433,154.633 73.854,154.195 73.932 C 153.758 74.010,152.680 74.733,151.800 75.538 C 150.014 77.172,148.687 78.000,147.854 78.000 C 147.548 78.000,147.074 78.270,146.800 78.600 C 146.380 79.106,146.459 79.200,147.302 79.200 C 147.852 79.200,148.526 78.930,148.800 78.600 C 149.074 78.270,149.601 78.000,149.971 78.000 C 150.340 78.000,151.254 77.370,152.000 76.600 C 152.746 75.830,153.555 75.200,153.797 75.200 C 154.340 75.200,157.200 72.317,157.200 71.769 C 157.200 71.250,161.305 67.200,161.831 67.200 C 162.348 67.200,165.200 64.298,165.200 63.772 C 165.200 63.250,170.504 58.000,171.032 58.000 C 171.550 58.000,174.000 55.498,174.000 54.968 C 174.000 54.443,178.509 50.000,179.042 50.000 C 179.555 50.000,181.200 48.295,181.200 47.763 C 181.200 46.718,187.711 41.200,188.946 41.200 C 189.252 41.200,189.726 40.930,190.000 40.600 C 190.274 40.270,191.005 40.000,191.625 40.000 C 192.245 40.000,192.864 39.820,193.000 39.600 C 193.359 39.020,190.392 39.173,189.266 39.793 M223.655 52.300 C 225.324 54.005,226.801 55.719,226.936 56.109 C 227.071 56.499,227.501 56.928,227.891 57.063 C 228.705 57.345,236.000 64.413,236.000 64.920 C 236.000 65.638,234.203 64.968,234.068 64.200 C 233.891 63.192,230.031 59.200,229.233 59.200 C 228.430 59.200,226.000 56.801,226.000 56.008 C 226.000 55.179,222.036 51.314,221.000 51.132 C 220.231 50.997,219.562 49.200,220.282 49.200 C 220.467 49.200,221.985 50.595,223.655 52.300 M173.600 60.125 C 173.600 60.194,173.015 60.779,172.300 61.425 L 171.000 62.600 172.175 61.300 C 173.270 60.088,173.600 59.816,173.600 60.125 M240.685 69.331 C 243.821 72.528,244.840 74.000,243.919 74.000 C 243.226 74.000,242.000 72.756,242.000 72.053 C 242.000 71.258,238.823 68.000,238.048 68.000 C 237.307 68.000,236.000 66.835,236.000 66.175 C 236.000 65.107,237.600 66.185,240.685 69.331 M164.800 68.925 C 164.800 68.994,164.215 69.579,163.500 70.225 L 162.200 71.400 163.375 70.100 C 164.470 68.888,164.800 68.616,164.800 68.925 M79.500 91.829 C 79.335 91.996,79.200 92.859,79.200 93.747 C 79.200 94.891,79.324 95.236,79.627 94.933 C 79.862 94.698,79.997 93.835,79.927 93.015 C 79.857 92.195,79.665 91.661,79.500 91.829 M320.000 93.153 C 320.000 94.033,320.180 94.864,320.400 95.000 C 320.641 95.149,320.800 94.612,320.800 93.647 C 320.800 92.767,320.620 91.936,320.400 91.800 C 320.159 91.651,320.000 92.188,320.000 93.153 M206.792 109.206 C 216.557 109.965,218.094 110.348,233.884 115.955 C 240.161 118.184,243.772 120.125,254.400 126.986 C 264.559 133.544,279.496 153.074,283.783 165.404 C 284.547 167.602,285.735 170.930,286.423 172.800 C 290.165 182.968,290.601 185.789,290.596 199.800 C 290.592 214.018,290.110 217.181,286.423 227.200 C 285.735 229.070,284.547 232.398,283.783 234.596 C 282.077 239.501,280.678 242.281,277.437 247.200 C 276.059 249.290,274.284 251.990,273.491 253.200 C 269.354 259.513,259.083 269.764,252.725 273.926 C 240.825 281.715,241.453 281.421,222.600 287.992 C 210.926 292.060,188.003 291.733,175.400 287.318 C 159.069 281.597,159.461 281.770,151.800 276.885 C 146.248 273.345,144.642 272.144,140.057 268.107 C 129.134 258.488,120.185 245.861,116.024 234.200 C 115.318 232.220,114.465 229.880,114.128 229.000 C 107.826 212.514,107.130 190.811,112.421 175.800 C 117.621 161.047,118.697 158.478,121.337 154.514 C 122.478 152.802,124.258 150.035,125.293 148.366 C 129.105 142.218,140.346 130.740,146.854 126.348 C 157.856 118.925,158.803 118.469,175.800 112.412 C 180.634 110.689,188.252 109.366,195.000 109.077 C 200.994 108.820,201.957 108.830,206.792 109.206 M323.849 152.426 C 325.290 153.841,326.631 155.410,326.829 155.910 C 327.026 156.411,327.506 156.930,327.894 157.064 C 328.706 157.345,336.000 164.414,336.000 164.920 C 336.000 165.638,334.203 164.968,334.068 164.200 C 333.891 163.192,330.031 159.200,329.233 159.200 C 328.431 159.200,326.000 156.801,326.000 156.010 C 326.000 155.116,320.942 150.173,320.717 150.848 C 320.607 151.178,320.456 151.059,320.319 150.532 C 319.940 149.085,321.060 149.686,323.849 152.426 M73.600 160.125 C 73.600 160.194,73.015 160.779,72.300 161.425 L 71.000 162.600 72.175 161.300 C 73.270 160.088,73.600 159.816,73.600 160.125 M340.685 169.331 C 343.821 172.528,344.840 174.000,343.919 174.000 C 343.226 174.000,342.000 172.756,342.000 172.053 C 342.000 171.258,338.823 168.000,338.048 168.000 C 337.307 168.000,336.000 166.835,336.000 166.175 C 336.000 165.107,337.600 166.185,340.685 169.331 M64.800 168.925 C 64.800 168.994,64.215 169.579,63.500 170.225 L 62.200 171.400 63.375 170.100 C 64.470 168.888,64.800 168.616,64.800 168.925 M350.400 183.800 C 351.146 184.570,351.667 185.200,351.557 185.200 C 351.447 185.200,350.746 184.570,350.000 183.800 C 349.254 183.030,348.733 182.400,348.843 182.400 C 348.953 182.400,349.654 183.030,350.400 183.800 M40.583 188.034 C 39.684 189.256,39.129 190.730,39.299 191.447 C 39.468 192.165,39.491 192.163,39.799 191.400 C 39.976 190.960,40.379 190.300,40.693 189.933 C 41.007 189.566,41.205 188.861,41.132 188.367 C 41.025 187.639,40.921 187.576,40.583 188.034 M360.000 190.553 C 360.000 191.103,360.180 191.664,360.400 191.800 C 360.626 191.940,360.800 191.612,360.800 191.047 C 360.800 190.497,360.620 189.936,360.400 189.800 C 360.174 189.660,360.000 189.988,360.000 190.553 M360.800 200.000 C 360.800 206.797,360.870 207.640,361.400 207.200 C 361.890 206.794,362.000 205.469,362.000 200.000 C 362.000 194.531,361.890 193.206,361.400 192.800 C 360.870 192.360,360.800 193.203,360.800 200.000 M360.134 200.000 C 360.134 201.650,360.205 202.325,360.291 201.500 C 360.378 200.675,360.378 199.325,360.291 198.500 C 360.205 197.675,360.134 198.350,360.134 200.000 M360.088 208.861 C 359.847 209.445,359.458 210.040,359.225 210.185 C 358.991 210.329,358.800 210.897,358.800 211.447 C 358.800 211.997,358.975 212.339,359.189 212.207 C 359.850 211.798,360.878 209.289,360.697 208.524 C 360.555 207.925,360.450 207.983,360.088 208.861 M337.600 228.925 C 337.600 228.994,337.015 229.579,336.300 230.225 L 335.000 231.400 336.175 230.100 C 337.270 228.888,337.600 228.616,337.600 228.925 M328.800 237.725 C 328.800 237.794,328.215 238.379,327.500 239.025 L 326.200 240.200 327.375 238.900 C 328.470 237.688,328.800 237.416,328.800 237.725 M79.200 306.353 C 79.200 307.233,79.380 308.064,79.600 308.200 C 79.841 308.349,80.000 307.812,80.000 306.847 C 80.000 305.967,79.820 305.136,79.600 305.000 C 79.359 304.851,79.200 305.388,79.200 306.353 M320.300 305.029 C 320.135 305.196,320.000 306.059,320.000 306.947 C 320.000 308.091,320.124 308.436,320.427 308.133 C 320.662 307.898,320.797 307.035,320.727 306.215 C 320.657 305.395,320.465 304.861,320.300 305.029 M146.800 321.400 C 147.074 321.730,147.518 322.000,147.788 322.000 C 148.716 322.000,150.610 323.166,151.982 324.581 C 152.738 325.361,153.654 326.000,154.016 326.000 C 154.805 326.000,156.000 327.230,156.000 328.042 C 156.000 328.813,161.251 334.000,162.032 334.000 C 162.805 334.000,165.200 336.442,165.200 337.231 C 165.200 338.028,169.994 342.693,170.995 342.869 C 171.433 342.946,171.854 343.367,171.930 343.805 C 172.119 344.883,177.938 350.734,178.968 350.882 C 179.423 350.947,179.854 351.358,179.931 351.800 C 180.116 352.867,185.995 358.800,186.867 358.800 C 187.244 358.800,187.657 358.969,187.784 359.175 C 187.912 359.381,188.580 359.831,189.269 360.175 C 190.667 360.872,193.393 361.036,193.000 360.400 C 192.864 360.180,192.245 360.000,191.625 360.000 C 191.005 360.000,190.274 359.730,190.000 359.400 C 189.726 359.070,189.252 358.800,188.946 358.800 C 187.690 358.800,182.000 354.041,182.000 352.991 C 182.000 352.456,179.511 350.000,178.968 350.000 C 178.452 350.000,174.000 345.496,174.000 344.973 C 174.000 344.452,170.298 340.800,169.770 340.800 C 169.251 340.800,166.000 337.497,166.000 336.970 C 166.000 336.452,162.297 332.800,161.773 332.800 C 161.251 332.800,157.200 328.697,157.200 328.169 C 157.200 327.646,154.295 324.800,153.762 324.800 C 153.539 324.800,152.746 324.170,152.000 323.400 C 151.254 322.630,150.340 322.000,149.971 322.000 C 149.601 322.000,149.074 321.730,148.800 321.400 C 148.526 321.070,147.852 320.800,147.302 320.800 C 146.459 320.800,146.380 320.894,146.800 321.400 M251.200 321.400 C 250.926 321.730,250.399 322.000,250.029 322.000 C 249.660 322.000,248.746 322.630,248.000 323.400 C 247.254 324.170,246.445 324.800,246.203 324.800 C 245.660 324.800,242.800 327.683,242.800 328.231 C 242.800 328.750,238.695 332.800,238.169 332.800 C 237.652 332.800,234.800 335.702,234.800 336.228 C 234.800 336.750,229.496 342.000,228.968 342.000 C 228.450 342.000,226.000 344.502,226.000 345.032 C 226.000 345.557,221.491 350.000,220.958 350.000 C 220.445 350.000,218.800 351.705,218.800 352.237 C 218.800 353.282,212.289 358.800,211.054 358.800 C 210.748 358.800,210.274 359.070,210.000 359.400 C 209.726 359.730,208.995 360.000,208.375 360.000 C 207.755 360.000,207.136 360.180,207.000 360.400 C 206.607 361.036,209.333 360.872,210.731 360.175 C 211.420 359.831,212.088 359.381,212.216 359.175 C 212.343 358.969,212.756 358.800,213.133 358.800 C 214.005 358.800,219.884 352.867,220.069 351.800 C 220.146 351.358,220.577 350.947,221.032 350.882 C 222.062 350.734,227.881 344.883,228.070 343.805 C 228.146 343.367,228.567 342.947,229.005 342.870 C 230.082 342.681,236.734 336.061,236.882 335.031 C 236.947 334.577,237.358 334.146,237.800 334.069 C 238.880 333.881,244.733 328.065,244.882 327.032 C 244.947 326.578,245.359 326.145,245.800 326.067 C 246.240 325.990,247.320 325.267,248.200 324.462 C 249.986 322.828,251.313 322.000,252.146 322.000 C 252.452 322.000,252.926 321.730,253.200 321.400 C 253.620 320.894,253.541 320.800,252.698 320.800 C 252.148 320.800,251.474 321.070,251.200 321.400 M237.600 328.925 C 237.600 328.994,237.015 329.579,236.300 330.225 L 235.000 331.400 236.175 330.100 C 237.270 328.888,237.600 328.616,237.600 328.925 M228.800 337.725 C 228.800 337.794,228.215 338.379,227.500 339.025 L 226.200 340.200 227.375 338.900 C 228.470 337.688,228.800 337.416,228.800 337.725 M194.000 361.400 C 194.398 361.880,195.597 362.000,200.000 362.000 C 204.403 362.000,205.602 361.880,206.000 361.400 C 206.439 360.871,205.731 360.800,200.000 360.800 C 194.269 360.800,193.561 360.871,194.000 361.400 ", stroke: "none", fill: "#fc9c04", fillRule: "evenodd" })
] }) }), j0 = () => /* @__PURE__ */ c.jsx("svg", { id: "svg", "aria-label": "moon-icon", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "400", height: "400", viewBox: "0, 0, 400,400", children: /* @__PURE__ */ c.jsxs("g", { id: "svgg", children: [
  /* @__PURE__ */ c.jsx("path", { id: "path0", d: "M105.610 61.586 C 105.287 62.034,104.787 62.400,104.499 62.400 C 104.211 62.400,103.872 62.669,103.746 62.998 C 103.619 63.326,103.369 63.505,103.190 63.394 C 103.011 63.283,102.509 63.644,102.074 64.196 C 101.640 64.748,100.876 65.200,100.376 65.200 C 99.876 65.200,99.586 65.319,99.731 65.464 C 100.010 65.743,98.385 67.053,97.938 66.910 C 97.794 66.863,97.434 67.124,97.138 67.490 C 96.678 68.057,96.687 68.109,97.200 67.847 C 97.530 67.679,97.458 67.818,97.041 68.158 C 96.624 68.497,96.142 68.688,95.970 68.581 C 95.798 68.475,95.542 68.754,95.400 69.200 C 95.258 69.646,94.975 69.908,94.771 69.782 C 94.567 69.656,94.400 69.833,94.400 70.176 C 94.400 70.519,94.145 70.800,93.834 70.800 C 93.523 70.800,92.656 71.385,91.906 72.100 C 91.157 72.815,89.567 74.202,88.372 75.182 C 85.534 77.512,75.600 87.511,75.600 88.038 C 75.600 88.263,75.420 88.336,75.200 88.200 C 74.980 88.064,74.800 88.334,74.800 88.800 C 74.800 89.266,74.620 89.536,74.400 89.400 C 74.180 89.264,74.000 89.322,74.000 89.528 C 74.000 89.735,73.280 90.645,72.400 91.552 C 71.520 92.459,70.800 93.391,70.800 93.624 C 70.800 93.857,70.620 93.936,70.400 93.800 C 70.180 93.664,70.000 93.765,70.000 94.024 C 70.000 94.283,69.505 95.077,68.900 95.789 C 68.295 96.502,67.451 97.572,67.025 98.168 C 66.599 98.763,65.969 99.584,65.625 99.992 C 63.843 102.105,63.600 102.437,63.600 102.762 C 63.600 102.956,63.304 103.228,62.943 103.367 C 62.581 103.505,62.390 103.724,62.519 103.852 C 62.647 103.980,62.403 104.460,61.976 104.918 C 61.549 105.376,61.200 105.987,61.200 106.275 C 61.200 106.564,61.038 106.800,60.839 106.800 C 60.641 106.800,60.290 107.340,60.060 108.000 C 59.830 108.660,59.470 109.200,59.260 109.200 C 59.050 109.200,58.683 109.695,58.444 110.300 C 57.725 112.124,56.529 113.995,56.256 113.723 C 56.115 113.582,56.000 113.774,56.000 114.150 C 56.000 114.526,55.640 115.220,55.200 115.692 C 54.760 116.164,54.400 116.888,54.400 117.299 C 54.400 117.711,54.220 117.936,54.000 117.800 C 53.780 117.664,53.600 117.923,53.600 118.376 C 53.600 118.829,53.420 119.200,53.200 119.200 C 52.980 119.200,52.800 119.434,52.800 119.720 C 52.800 120.456,51.859 122.393,51.500 122.397 C 51.335 122.399,51.200 122.678,51.200 123.017 C 51.200 123.356,50.840 124.020,50.400 124.492 C 49.682 125.262,49.414 126.024,49.553 126.900 C 49.579 127.065,49.442 127.200,49.249 127.200 C 49.055 127.200,48.674 127.785,48.401 128.500 C 48.127 129.215,47.399 130.880,46.781 132.200 C 46.163 133.520,45.330 135.590,44.929 136.800 C 44.528 138.010,44.061 139.103,43.891 139.229 C 43.720 139.356,43.511 139.806,43.426 140.229 C 43.341 140.653,43.087 141.476,42.861 142.059 C 42.636 142.641,42.560 143.226,42.692 143.359 C 42.825 143.491,42.723 143.600,42.467 143.600 C 42.210 143.600,42.000 144.039,42.000 144.576 C 42.000 145.113,41.820 145.664,41.600 145.800 C 41.380 145.936,41.200 146.487,41.200 147.024 C 41.200 147.561,41.020 148.000,40.800 148.000 C 40.580 148.000,40.400 148.540,40.400 149.200 C 40.400 149.860,40.220 150.400,40.000 150.400 C 39.780 150.400,39.600 151.019,39.600 151.776 C 39.600 152.533,39.420 153.264,39.200 153.400 C 38.980 153.536,38.800 154.177,38.800 154.824 C 38.800 155.471,38.639 156.000,38.442 156.000 C 38.245 156.000,37.975 156.720,37.842 157.600 C 37.709 158.480,37.491 159.920,37.358 160.800 C 37.225 161.680,36.973 162.400,36.798 162.400 C 36.624 162.400,36.383 163.165,36.264 164.100 C 36.145 165.035,35.856 166.790,35.622 168.000 C 34.418 174.230,33.600 180.456,33.349 185.300 C 33.238 187.445,32.990 189.200,32.799 189.200 C 32.356 189.200,32.350 209.722,32.793 209.996 C 32.975 210.108,33.227 212.180,33.355 214.600 C 33.654 220.293,33.977 223.650,34.298 224.400 C 34.664 225.257,34.702 225.553,34.754 227.924 C 34.782 229.227,34.954 229.952,35.200 229.800 C 35.448 229.647,35.600 230.388,35.600 231.753 C 35.600 232.963,35.780 234.064,36.000 234.200 C 36.220 234.336,36.400 235.056,36.400 235.800 C 36.400 236.544,36.580 237.264,36.800 237.400 C 37.020 237.536,37.200 238.346,37.200 239.200 C 37.200 240.054,37.380 240.864,37.600 241.000 C 37.820 241.136,38.000 241.867,38.000 242.624 C 38.000 243.381,38.180 244.000,38.400 244.000 C 38.620 244.000,38.800 244.540,38.800 245.200 C 38.800 245.860,38.943 246.400,39.118 246.400 C 39.293 246.400,39.481 247.075,39.536 247.900 C 39.590 248.725,39.807 249.460,40.018 249.533 C 40.228 249.607,40.400 250.202,40.400 250.857 C 40.400 251.549,40.568 251.944,40.800 251.800 C 41.033 251.656,41.200 252.063,41.200 252.776 C 41.200 253.449,41.380 254.000,41.600 254.000 C 41.820 254.000,42.000 254.540,42.000 255.200 C 42.000 255.860,42.210 256.400,42.467 256.400 C 42.723 256.400,42.823 256.510,42.689 256.644 C 42.449 256.885,43.671 260.721,44.430 262.109 C 45.004 263.157,46.470 267.164,46.327 267.291 C 46.259 267.351,46.569 267.940,47.016 268.600 C 47.463 269.260,48.017 270.250,48.247 270.800 C 48.900 272.362,51.371 277.377,51.597 277.600 C 52.068 278.064,53.600 281.323,53.600 281.861 C 53.600 282.184,53.751 282.354,53.935 282.240 C 54.313 282.006,56.000 284.963,56.000 285.861 C 56.000 286.184,56.150 286.355,56.332 286.242 C 56.515 286.129,56.909 286.658,57.207 287.418 C 57.505 288.178,57.896 288.800,58.075 288.800 C 58.254 288.800,58.400 288.984,58.400 289.209 C 58.400 289.694,60.469 292.942,60.900 293.133 C 61.065 293.207,61.200 293.502,61.200 293.791 C 61.200 294.079,61.496 294.428,61.857 294.567 C 62.219 294.705,62.409 294.924,62.281 295.052 C 62.152 295.181,62.477 295.749,63.002 296.316 C 63.527 296.882,63.866 297.493,63.755 297.673 C 63.644 297.853,63.717 298.000,63.919 298.000 C 64.273 298.000,66.351 300.643,68.400 303.702 C 68.950 304.523,69.535 305.196,69.700 305.197 C 69.865 305.199,70.000 305.481,70.000 305.824 C 70.000 306.167,70.180 306.336,70.400 306.200 C 70.620 306.064,70.800 306.136,70.800 306.361 C 70.800 306.585,71.520 307.482,72.400 308.353 C 73.280 309.224,74.000 310.043,74.000 310.172 C 74.000 310.808,87.778 324.800,88.405 324.800 C 88.613 324.800,89.773 325.790,90.983 327.000 C 92.193 328.210,93.377 329.200,93.615 329.200 C 93.853 329.200,93.936 329.380,93.800 329.600 C 93.664 329.820,93.788 330.000,94.076 330.000 C 94.364 330.000,95.305 330.628,96.166 331.394 C 97.027 332.161,98.065 332.894,98.472 333.023 C 98.879 333.152,99.121 333.404,99.011 333.582 C 98.900 333.761,99.355 334.133,100.021 334.409 C 100.687 334.685,101.498 335.290,101.824 335.755 C 102.149 336.220,102.518 336.537,102.643 336.459 C 102.769 336.381,103.305 336.695,103.836 337.156 C 104.366 337.617,104.805 337.861,104.812 337.697 C 104.819 337.534,105.008 337.715,105.232 338.100 C 105.456 338.485,105.901 338.800,106.220 338.800 C 106.539 338.800,106.800 338.977,106.800 339.192 C 106.800 339.408,107.237 339.694,107.771 339.828 C 108.304 339.962,109.052 340.416,109.433 340.836 C 109.813 341.256,110.374 341.600,110.679 341.600 C 110.984 341.600,111.620 341.960,112.092 342.400 C 112.564 342.840,113.198 343.200,113.499 343.200 C 113.801 343.200,113.936 343.380,113.800 343.600 C 113.664 343.820,113.813 344.000,114.131 344.000 C 114.449 344.000,115.224 344.269,115.854 344.598 C 116.484 344.926,116.820 345.197,116.600 345.200 C 116.380 345.203,117.910 346.052,120.000 347.088 C 122.090 348.123,123.890 349.066,124.000 349.185 C 124.385 349.599,127.513 351.200,127.937 351.200 C 128.172 351.200,129.273 351.735,130.382 352.390 C 131.492 353.044,132.400 353.472,132.400 353.341 C 132.400 353.209,132.698 353.349,133.061 353.651 C 133.425 353.953,133.783 354.160,133.857 354.111 C 134.044 353.987,135.117 354.368,137.000 355.225 C 137.880 355.625,139.140 356.081,139.800 356.238 C 140.460 356.395,141.100 356.675,141.222 356.860 C 141.345 357.045,141.930 357.236,142.522 357.285 C 143.115 357.334,143.600 357.515,143.600 357.687 C 143.600 357.859,144.039 358.000,144.576 358.000 C 145.113 358.000,145.664 358.180,145.800 358.400 C 145.936 358.620,146.489 358.800,147.029 358.800 C 147.569 358.800,148.413 359.008,148.905 359.262 C 150.884 360.285,151.236 360.400,152.395 360.400 C 153.058 360.400,153.600 360.580,153.600 360.800 C 153.600 361.020,154.129 361.200,154.776 361.200 C 155.423 361.200,156.064 361.380,156.200 361.600 C 156.336 361.820,157.067 362.000,157.824 362.000 C 158.581 362.000,159.200 362.180,159.200 362.400 C 159.200 362.620,159.884 362.800,160.720 362.800 C 161.556 362.800,162.411 362.970,162.620 363.179 C 162.829 363.387,163.765 363.602,164.700 363.657 C 165.635 363.712,166.400 363.901,166.400 364.078 C 166.400 364.255,167.300 364.400,168.400 364.400 C 169.500 364.400,170.400 364.564,170.400 364.764 C 170.400 365.111,172.008 365.336,178.100 365.842 C 179.585 365.965,180.800 366.220,180.800 366.408 C 180.800 366.596,182.825 366.855,185.300 366.984 C 192.926 367.381,210.400 367.541,210.400 367.214 C 210.400 367.044,211.975 366.873,213.900 366.833 C 217.894 366.751,218.665 366.668,219.055 366.278 C 219.208 366.125,220.372 366.000,221.641 366.000 C 222.910 366.000,224.396 365.830,224.944 365.621 C 225.493 365.413,226.854 365.201,227.970 365.150 C 229.087 365.099,230.000 364.909,230.000 364.729 C 230.000 364.548,230.799 364.400,231.776 364.400 C 232.753 364.400,233.664 364.220,233.800 364.000 C 233.936 363.780,234.836 363.600,235.800 363.600 C 236.764 363.600,237.664 363.420,237.800 363.200 C 237.936 362.980,238.667 362.800,239.424 362.800 C 240.181 362.800,240.800 362.620,240.800 362.400 C 240.800 362.180,241.419 362.000,242.176 362.000 C 242.933 362.000,243.664 361.820,243.800 361.600 C 243.936 361.380,244.566 361.200,245.200 361.200 C 245.834 361.200,246.464 361.020,246.600 360.800 C 246.736 360.580,247.477 360.400,248.247 360.400 C 249.079 360.400,249.547 360.238,249.400 360.000 C 249.253 359.762,249.729 359.600,250.576 359.600 C 251.359 359.600,252.000 359.420,252.000 359.200 C 252.000 358.980,252.551 358.800,253.224 358.800 C 253.937 358.800,254.344 358.633,254.200 358.400 C 254.056 358.167,254.463 358.000,255.176 358.000 C 255.849 358.000,256.400 357.859,256.400 357.687 C 256.400 357.515,256.885 357.334,257.478 357.285 C 258.070 357.236,258.690 356.977,258.856 356.710 C 259.021 356.442,259.287 356.354,259.446 356.513 C 259.606 356.672,260.111 356.559,260.568 356.262 C 261.026 355.965,262.120 355.486,263.000 355.198 C 263.880 354.909,265.230 354.399,266.000 354.063 C 266.770 353.726,267.535 353.485,267.700 353.526 C 267.865 353.567,268.000 353.420,268.000 353.200 C 268.000 352.980,268.182 352.800,268.404 352.800 C 269.013 352.800,272.580 351.085,272.733 350.719 C 272.807 350.543,273.268 350.400,273.758 350.400 C 274.248 350.400,275.036 350.040,275.508 349.600 C 275.980 349.160,276.644 348.800,276.983 348.800 C 277.322 348.800,277.600 348.620,277.600 348.400 C 277.600 348.180,277.960 348.000,278.400 348.000 C 278.840 348.000,279.200 347.820,279.200 347.600 C 279.200 347.380,279.470 347.200,279.800 347.200 C 280.130 347.200,280.400 347.020,280.400 346.800 C 280.400 346.580,280.831 346.400,281.357 346.400 C 281.884 346.400,282.418 346.130,282.545 345.800 C 282.671 345.470,283.029 345.200,283.338 345.200 C 283.648 345.200,284.126 344.930,284.400 344.600 C 284.674 344.270,285.153 344.000,285.466 344.000 C 285.778 344.000,286.389 343.669,286.823 343.264 C 287.258 342.859,288.105 342.277,288.707 341.970 C 290.097 341.260,292.126 339.900,292.445 339.466 C 292.579 339.282,292.817 339.163,292.973 339.200 C 293.129 339.238,293.819 338.803,294.506 338.234 C 295.192 337.665,295.990 337.200,296.277 337.200 C 296.565 337.200,296.800 337.020,296.800 336.800 C 296.800 336.580,297.027 336.400,297.304 336.400 C 297.581 336.400,298.037 336.033,298.317 335.584 C 298.597 335.136,298.955 334.849,299.113 334.946 C 299.271 335.044,300.022 334.511,300.781 333.762 C 301.540 333.013,302.361 332.400,302.606 332.400 C 302.850 332.400,303.568 331.860,304.200 331.200 C 304.832 330.540,305.597 330.000,305.898 330.000 C 306.200 330.000,306.336 329.820,306.200 329.600 C 306.064 329.380,306.122 329.200,306.328 329.200 C 306.535 329.200,307.405 328.525,308.262 327.700 C 309.120 326.875,310.311 325.945,310.910 325.633 C 311.509 325.321,311.912 324.979,311.807 324.873 C 311.701 324.768,312.016 324.343,312.507 323.930 C 316.943 320.196,320.024 317.333,320.056 316.916 C 320.069 316.742,320.242 316.645,320.440 316.700 C 320.638 316.755,320.800 316.539,320.800 316.220 C 320.800 315.901,321.115 315.456,321.500 315.232 C 321.885 315.008,322.020 314.816,321.800 314.806 C 321.580 314.796,321.850 314.551,322.400 314.261 C 322.950 313.972,323.353 313.519,323.296 313.256 C 323.239 312.993,323.464 312.673,323.796 312.546 C 324.128 312.419,324.400 312.162,324.400 311.976 C 324.400 311.790,325.300 310.738,326.400 309.638 C 327.500 308.538,328.403 307.315,328.406 306.919 C 328.411 306.308,328.471 306.291,328.800 306.800 C 329.114 307.285,329.189 307.228,329.194 306.500 C 329.197 306.005,329.441 305.600,329.736 305.600 C 330.030 305.600,330.479 305.145,330.732 304.589 C 330.986 304.033,331.465 303.473,331.797 303.346 C 332.128 303.219,332.400 302.864,332.400 302.557 C 332.400 302.251,332.550 302.000,332.732 302.000 C 332.915 302.000,333.302 301.556,333.593 301.014 C 333.883 300.471,334.278 300.125,334.470 300.243 C 334.662 300.362,334.794 300.311,334.763 300.130 C 334.622 299.320,334.833 298.773,335.200 299.000 C 335.420 299.136,335.600 298.896,335.600 298.466 C 335.600 298.037,335.881 297.578,336.225 297.446 C 336.569 297.314,336.739 297.024,336.602 296.803 C 336.465 296.581,336.573 296.400,336.843 296.400 C 337.113 296.400,337.223 296.290,337.089 296.156 C 336.954 296.021,337.353 295.483,337.974 294.960 C 339.235 293.899,339.791 292.533,338.963 292.533 C 338.673 292.533,338.528 292.683,338.641 292.867 C 338.755 293.050,338.554 293.200,338.196 293.200 C 337.837 293.200,336.180 294.028,334.512 295.040 C 332.845 296.052,330.878 297.222,330.140 297.640 C 329.403 298.058,328.125 298.783,327.300 299.252 C 318.440 304.282,306.479 309.338,295.800 312.566 C 287.740 315.003,285.451 315.577,279.000 316.784 C 277.680 317.031,275.832 317.405,274.894 317.616 C 272.722 318.105,272.000 318.101,272.000 317.600 C 272.000 317.380,272.204 317.200,272.454 317.200 C 272.704 317.200,273.347 316.726,273.884 316.147 C 278.402 311.272,272.947 304.018,267.195 307.251 C 262.943 309.641,263.366 315.323,267.958 317.502 C 269.822 318.386,269.111 318.615,262.800 319.159 C 251.332 320.148,237.483 320.004,227.800 318.796 C 226.040 318.576,223.560 318.282,222.289 318.142 C 219.410 317.824,219.283 317.613,220.705 315.503 C 231.576 299.376,222.622 276.385,203.338 270.912 C 186.891 266.245,166.400 280.043,166.400 295.787 C 166.400 299.578,166.257 299.538,156.070 292.916 C 120.435 269.749,94.431 233.136,84.824 192.600 C 84.563 191.500,84.190 189.970,83.996 189.200 C 83.801 188.430,83.532 187.170,83.397 186.400 C 83.263 185.630,82.973 184.010,82.753 182.800 C 82.179 179.639,81.683 176.129,80.975 170.200 C 80.215 163.837,80.082 143.308,80.762 137.400 C 82.080 125.963,83.272 119.376,85.687 110.200 C 89.603 95.321,96.226 79.848,104.493 66.263 C 106.348 63.215,106.811 62.151,106.543 61.549 C 106.202 60.786,106.186 60.787,105.610 61.586 M202.071 74.802 C 193.971 78.478,192.014 88.487,198.222 94.495 C 205.841 101.870,218.800 96.361,218.800 85.748 C 218.800 77.654,209.375 71.488,202.071 74.802 M251.169 79.310 C 246.328 82.571,248.893 89.969,254.703 89.502 C 259.024 89.156,261.260 84.951,259.134 81.169 C 257.588 78.418,253.803 77.534,251.169 79.310 M125.600 111.482 C 123.789 112.144,122.000 114.787,122.000 116.800 C 122.000 122.676,130.275 124.490,132.881 119.186 C 135.081 114.707,130.381 109.735,125.600 111.482 M273.600 117.167 C 269.743 117.713,262.400 122.884,262.400 125.055 C 262.400 125.355,262.241 125.600,262.047 125.600 C 261.852 125.600,261.581 125.915,261.443 126.300 C 261.305 126.685,261.001 127.540,260.766 128.200 C 256.808 139.328,263.307 150.508,275.073 152.813 C 282.397 154.248,294.097 147.408,294.594 141.400 C 294.613 141.180,294.869 139.920,295.164 138.600 C 297.175 129.606,292.459 121.419,283.102 117.660 C 281.612 117.062,276.295 116.786,273.600 117.167 M273.811 118.300 C 270.905 125.708,275.302 136.213,282.838 139.864 C 285.982 141.387,287.030 141.647,290.340 141.724 C 294.082 141.811,294.205 141.977,292.434 144.551 C 284.049 156.738,266.600 154.158,260.851 139.881 C 260.267 138.433,260.267 131.170,260.849 129.719 C 261.991 126.878,263.470 124.305,264.775 122.894 C 267.794 119.628,274.659 116.138,273.811 118.300 M116.800 145.765 C 106.767 147.601,98.657 153.627,94.950 162.000 C 93.912 164.345,93.630 165.080,93.226 166.500 C 92.992 167.325,92.620 168.598,92.400 169.328 C 91.871 171.086,91.888 178.473,92.426 180.554 C 93.837 186.011,94.556 187.722,97.080 191.629 C 100.249 196.533,108.845 203.200,112.001 203.200 C 112.226 203.200,112.723 203.359,113.105 203.553 C 115.511 204.775,124.331 205.266,127.754 204.368 C 131.474 203.393,132.711 202.966,134.979 201.874 C 140.801 199.073,149.174 190.436,149.206 187.200 C 149.209 186.870,149.501 185.790,149.855 184.800 C 157.381 163.761,138.743 141.751,116.800 145.765 M109.158 150.100 C 105.191 163.473,110.203 177.302,121.600 184.431 C 123.684 185.735,124.451 186.130,126.800 187.110 C 131.663 189.139,138.181 189.723,143.200 188.579 C 144.630 188.253,146.402 187.873,147.138 187.735 L 148.476 187.483 147.584 189.242 C 147.094 190.209,146.581 191.090,146.444 191.200 C 146.307 191.310,145.726 192.030,145.153 192.800 C 136.596 204.288,120.512 207.594,107.647 200.508 C 88.423 189.919,87.422 162.808,105.800 150.455 C 108.868 148.393,109.691 148.306,109.158 150.100 M333.800 165.269 C 329.176 166.947,328.551 173.164,332.769 175.534 C 335.589 177.119,338.703 176.291,340.402 173.504 C 343.004 169.236,338.466 163.576,333.800 165.269 M193.214 177.281 C 184.293 180.705,182.031 193.279,189.179 199.705 C 198.205 207.820,211.739 202.010,211.785 190.000 C 211.824 179.995,202.600 173.678,193.214 177.281 M310.000 200.754 C 299.550 203.033,298.127 217.423,307.908 221.901 C 312.191 223.862,317.626 222.840,320.636 219.507 C 328.046 211.306,320.733 198.414,310.000 200.754 M78.405 222.803 C 88.895 228.154,85.138 243.784,73.367 243.760 C 60.182 243.734,58.178 225.269,71.000 221.952 C 72.772 221.493,76.730 221.948,78.405 222.803 M283.356 255.792 C 280.688 257.076,275.600 261.475,275.600 262.498 C 275.600 262.706,275.274 263.354,274.875 263.938 C 273.048 266.611,272.292 274.363,273.542 277.600 C 277.026 286.625,284.948 291.591,293.600 290.174 C 310.759 287.364,314.665 264.872,299.460 256.425 C 294.978 253.934,287.802 253.652,283.356 255.792 M286.792 257.034 C 284.131 268.910,294.764 281.408,305.743 279.309 C 309.094 278.668,303.540 285.662,299.047 287.740 C 295.277 289.484,294.778 289.600,291.081 289.594 C 280.778 289.578,273.622 282.422,273.606 272.119 C 273.600 268.700,273.754 267.902,274.938 265.200 C 276.604 261.395,280.184 257.814,284.000 256.136 C 287.488 254.602,287.348 254.557,286.792 257.034 M121.834 269.859 C 127.403 272.430,123.739 281.767,117.854 280.003 C 112.405 278.371,112.151 271.269,117.474 269.383 C 119.058 268.821,119.751 268.897,121.834 269.859 M171.867 302.176 C 183.854 308.190,199.110 313.718,209.200 315.704 C 210.686 315.997,216.465 317.189,217.500 317.417 C 218.920 317.730,218.582 318.499,215.900 321.065 C 200.729 335.579,175.726 329.697,167.987 309.794 C 166.743 306.592,165.768 299.600,166.567 299.600 C 166.658 299.600,169.043 300.759,171.867 302.176 ", stroke: "none", fill: "#d3ccd4", fillRule: "evenodd" }),
  /* @__PURE__ */ c.jsx("path", { id: "path1", d: "M332.997 8.115 C 334.237 7.624,333.219 7.849,332.997 8.115 M271.400 118.289 C 266.484 120.278,263.222 123.812,260.849 129.719 C 260.267 131.170,260.267 138.433,260.851 139.881 C 266.600 154.158,284.049 156.738,292.434 144.551 C 294.205 141.977,294.082 141.811,290.340 141.724 C 278.667 141.452,269.708 128.756,273.811 118.300 C 274.154 117.425,273.541 117.422,271.400 118.289 M105.800 150.455 C 79.694 168.003,96.146 209.805,126.800 203.814 C 134.684 202.273,140.856 198.569,145.153 192.800 C 145.726 192.030,146.307 191.310,146.444 191.200 C 146.581 191.090,147.094 190.209,147.584 189.242 L 148.476 187.483 147.138 187.735 C 146.402 187.873,144.630 188.253,143.200 188.579 C 138.181 189.723,131.663 189.139,126.800 187.110 C 124.451 186.130,123.684 185.735,121.600 184.431 C 110.203 177.302,105.191 163.473,109.158 150.100 C 109.691 148.306,108.868 148.393,105.800 150.455 M71.000 221.952 C 58.178 225.269,60.182 243.734,73.367 243.760 C 85.138 243.784,88.895 228.154,78.405 222.803 C 76.730 221.948,72.772 221.493,71.000 221.952 M286.000 255.298 C 280.468 257.501,276.918 260.679,274.938 265.200 C 273.754 267.902,273.600 268.700,273.606 272.119 C 273.622 282.422,280.778 289.578,291.081 289.594 C 294.778 289.600,295.277 289.484,299.047 287.740 C 303.540 285.662,309.094 278.668,305.743 279.309 C 294.764 281.408,284.131 268.910,286.792 257.034 C 287.300 254.771,287.303 254.779,286.000 255.298 M117.474 269.383 C 112.151 271.269,112.405 278.371,117.854 280.003 C 120.917 280.921,124.800 277.901,124.800 274.600 C 124.800 271.098,120.757 268.219,117.474 269.383 M166.400 301.980 C 166.400 318.749,186.088 332.986,202.800 328.302 C 210.845 326.047,221.354 318.265,217.500 317.417 C 216.465 317.189,210.686 315.997,209.200 315.704 C 199.110 313.718,183.854 308.190,171.867 302.176 C 169.043 300.759,166.658 299.600,166.567 299.600 C 166.475 299.600,166.400 300.671,166.400 301.980 M52.500 350.198 C 52.225 350.511,52.000 351.044,52.000 351.383 C 52.000 351.722,51.820 352.000,51.600 352.000 C 51.380 352.000,51.200 352.360,51.200 352.800 C 51.200 353.240,51.020 353.600,50.800 353.600 C 50.580 353.600,50.400 353.960,50.400 354.400 ", stroke: "none", fill: "#737373", fillRule: "evenodd" }),
  /* @__PURE__ */ c.jsx("path", { id: "path2", d: "M188.800 32.800 C 188.800 33.035,187.408 33.200,185.424 33.200 C 183.500 33.200,181.936 33.380,181.788 33.619 C 181.614 33.901,181.322 33.868,180.899 33.519 C 180.401 33.108,180.235 33.104,180.102 33.500 C 179.993 33.824,179.110 34.000,177.600 34.000 C 176.317 34.000,175.207 34.180,175.133 34.400 C 175.060 34.620,173.695 34.834,172.100 34.876 C 170.505 34.918,169.200 35.098,169.200 35.276 C 169.200 35.454,168.315 35.600,167.233 35.600 C 166.152 35.600,165.204 35.788,165.128 36.017 C 165.051 36.246,164.327 36.476,163.517 36.528 C 162.707 36.579,161.915 36.752,161.756 36.911 C 161.597 37.070,160.777 37.200,159.933 37.200 C 159.090 37.200,158.400 37.380,158.400 37.600 C 158.400 37.820,157.871 38.000,157.224 38.000 C 156.577 38.000,155.936 38.180,155.800 38.400 C 155.664 38.620,155.023 38.800,154.376 38.800 C 153.729 38.800,153.200 38.980,153.200 39.200 C 153.200 39.420,152.600 39.600,151.867 39.600 C 151.133 39.600,150.410 39.723,150.259 39.874 C 149.856 40.278,147.114 41.187,146.280 41.194 C 145.884 41.197,144.984 41.507,144.280 41.882 C 143.576 42.257,142.830 42.516,142.622 42.456 C 142.414 42.397,141.874 42.513,141.422 42.716 C 140.970 42.918,139.740 43.469,138.689 43.941 C 137.638 44.414,136.513 44.800,136.189 44.800 C 135.865 44.800,135.600 44.991,135.600 45.224 C 135.600 45.457,135.435 45.545,135.232 45.420 C 135.030 45.295,134.580 45.477,134.232 45.825 C 133.758 46.299,133.597 46.325,133.588 45.929 C 133.580 45.588,133.434 45.643,133.177 46.083 C 132.958 46.460,132.515 46.665,132.189 46.541 C 131.865 46.416,131.600 46.494,131.600 46.713 C 131.600 46.932,130.802 47.347,129.826 47.636 C 128.850 47.924,128.122 48.273,128.208 48.412 C 128.293 48.551,127.742 48.909,126.982 49.207 C 126.222 49.505,125.597 49.941,125.594 50.175 C 125.591 50.409,125.413 50.330,125.200 50.000 C 124.942 49.600,124.810 49.567,124.806 49.900 C 124.803 50.175,124.410 50.400,123.933 50.400 C 123.457 50.400,123.184 50.517,123.327 50.660 C 123.470 50.804,123.277 51.148,122.896 51.426 C 122.376 51.807,122.132 51.817,121.909 51.466 C 121.690 51.122,121.611 51.130,121.606 51.500 C 121.603 51.775,121.319 52.000,120.976 52.000 C 120.591 52.000,120.463 52.191,120.641 52.500 C 120.799 52.775,120.784 52.870,120.608 52.711 C 120.224 52.364,118.081 53.495,117.100 54.561 C 116.715 54.980,116.400 55.108,116.400 54.845 C 116.400 54.360,116.287 54.426,114.438 56.000 C 113.371 56.907,112.077 57.600,111.448 57.600 C 111.139 57.600,110.791 57.847,110.675 58.149 C 110.459 58.712,107.315 60.400,106.482 60.400 C 106.136 60.400,106.129 60.646,106.455 61.360 C 106.839 62.205,106.602 62.797,104.495 66.260 C 96.137 79.994,89.693 95.094,85.573 110.600 C 84.788 113.556,84.402 115.150,83.978 117.200 C 83.727 118.410,83.372 120.120,83.188 121.000 C 82.391 124.815,81.582 130.281,80.762 137.400 C 80.082 143.308,80.215 163.837,80.975 170.200 C 81.683 176.129,82.179 179.639,82.753 182.800 C 82.973 184.010,83.263 185.630,83.397 186.400 C 83.532 187.170,83.801 188.430,83.996 189.200 C 84.190 189.970,84.563 191.500,84.824 192.600 C 95.047 235.735,124.489 275.086,163.323 297.520 C 165.788 298.944,166.400 298.599,166.400 295.787 C 166.400 280.043,186.891 266.245,203.338 270.912 C 222.622 276.385,231.576 299.376,220.705 315.503 C 219.283 317.613,219.410 317.824,222.289 318.142 C 223.560 318.282,226.040 318.576,227.800 318.796 C 242.861 320.675,272.624 319.716,267.958 317.502 C 263.366 315.323,262.943 309.641,267.195 307.251 C 272.947 304.018,278.402 311.272,273.884 316.147 C 273.347 316.726,272.704 317.200,272.454 317.200 C 272.204 317.200,272.000 317.380,272.000 317.600 C 272.000 318.101,272.722 318.105,274.894 317.616 C 275.832 317.405,277.680 317.031,279.000 316.784 C 282.668 316.098,287.657 314.979,289.800 314.363 C 304.766 310.055,316.844 305.188,327.300 299.252 C 328.125 298.783,329.403 298.058,330.140 297.640 C 330.878 297.222,332.845 296.052,334.512 295.040 C 336.180 294.028,337.837 293.200,338.196 293.200 C 338.610 293.200,338.738 293.018,338.547 292.700 C 338.359 292.387,338.537 292.420,339.023 292.787 C 339.450 293.110,339.685 293.234,339.544 293.064 C 339.403 292.893,339.808 292.184,340.444 291.488 C 341.080 290.791,341.600 289.930,341.600 289.573 C 341.600 289.216,341.960 288.598,342.400 288.200 C 342.840 287.802,343.200 287.316,343.200 287.121 C 343.200 286.926,343.560 286.380,344.000 285.908 C 344.440 285.436,344.800 284.813,344.800 284.525 C 344.800 284.236,344.980 284.000,345.200 284.000 C 345.420 284.000,345.600 283.728,345.600 283.395 C 345.600 282.740,346.244 281.501,347.200 280.317 C 347.798 279.576,347.850 279.425,347.956 278.100 C 348.004 277.499,348.067 277.485,348.400 278.000 C 348.701 278.466,348.789 278.349,348.794 277.476 C 348.797 276.812,348.968 276.456,349.210 276.606 C 349.435 276.745,349.594 276.711,349.563 276.530 C 349.405 275.622,349.645 274.781,350.000 275.000 C 350.234 275.145,350.400 274.730,350.400 274.000 C 350.400 273.218,350.559 272.851,350.827 273.017 C 351.083 273.175,351.203 272.984,351.127 272.540 C 351.048 272.080,351.208 271.844,351.549 271.916 C 351.895 271.990,352.012 271.809,351.866 271.428 C 351.738 271.095,351.908 270.549,352.242 270.215 C 352.577 269.880,352.770 269.470,352.671 269.303 C 352.395 268.837,353.845 266.382,354.203 266.711 C 354.376 266.870,354.429 266.635,354.320 266.188 C 354.210 265.742,354.376 265.138,354.688 264.847 C 354.999 264.556,355.155 264.060,355.034 263.744 C 354.913 263.428,355.080 263.067,355.407 262.942 C 355.733 262.817,356.000 262.322,356.000 261.842 C 356.000 261.362,356.354 260.274,356.787 259.425 C 357.220 258.576,357.487 257.741,357.381 257.568 C 357.274 257.396,357.373 257.140,357.600 257.000 C 357.827 256.860,357.917 256.590,357.800 256.400 C 357.683 256.210,357.773 255.940,358.000 255.800 C 358.227 255.660,358.309 255.377,358.183 255.172 C 358.056 254.968,358.104 254.800,358.289 254.800 C 358.474 254.800,358.664 254.340,358.710 253.779 C 358.757 253.217,358.976 252.419,359.197 252.005 C 359.419 251.591,359.600 250.881,359.600 250.426 C 359.600 249.972,359.780 249.600,360.000 249.600 C 360.220 249.600,360.400 249.060,360.400 248.400 C 360.400 247.710,360.612 247.197,360.900 247.194 C 361.233 247.190,361.200 247.058,360.800 246.800 C 360.400 246.542,360.367 246.410,360.700 246.406 C 360.988 246.403,361.200 245.890,361.200 245.200 C 361.200 244.540,361.380 244.000,361.600 244.000 C 361.820 244.000,362.000 243.460,362.000 242.800 C 362.000 242.140,362.151 241.600,362.335 241.600 C 362.519 241.600,362.702 240.745,362.742 239.700 C 362.781 238.655,362.990 237.740,363.206 237.667 C 363.423 237.593,363.603 236.693,363.606 235.667 C 363.611 234.314,363.719 233.965,364.000 234.400 C 364.279 234.831,364.389 234.432,364.394 232.980 C 364.397 231.869,364.625 230.718,364.900 230.421 C 365.306 229.984,365.288 229.942,364.800 230.200 C 364.312 230.458,364.294 230.416,364.700 229.979 C 364.975 229.682,365.200 228.666,365.200 227.720 C 365.200 226.774,365.355 226.000,365.544 226.000 C 365.733 226.000,365.920 224.701,365.960 223.113 C 366.001 221.526,366.183 220.131,366.367 220.013 C 366.550 219.896,366.733 217.914,366.774 215.608 C 366.823 212.881,367.015 211.311,367.325 211.115 C 367.661 210.901,367.625 210.809,367.200 210.800 C 366.766 210.791,366.734 210.703,367.084 210.480 C 367.444 210.252,367.564 207.409,367.553 199.412 C 367.544 192.806,367.398 188.874,367.175 189.226 C 366.894 189.671,366.603 182.273,366.834 180.545 C 366.853 180.404,366.684 180.175,366.458 180.036 C 366.232 179.896,366.010 178.487,365.964 176.905 C 365.917 175.322,365.727 174.122,365.540 174.237 C 365.262 174.409,364.977 171.811,365.153 170.700 C 365.179 170.535,364.975 170.397,364.700 170.394 C 364.332 170.389,364.343 170.297,364.743 170.044 C 365.121 169.804,365.151 169.617,364.843 169.426 C 364.599 169.276,364.400 168.443,364.400 167.576 C 364.400 166.709,364.220 166.000,364.000 166.000 C 363.780 166.000,363.600 165.100,363.600 164.000 C 363.600 162.900,363.420 162.000,363.200 162.000 C 362.980 162.000,362.800 161.190,362.800 160.200 C 362.800 159.210,362.620 158.400,362.400 158.400 C 362.180 158.400,362.000 157.875,362.000 157.233 C 362.000 156.592,361.828 156.007,361.618 155.933 C 361.407 155.860,361.191 155.137,361.137 154.326 C 361.084 153.515,360.896 152.941,360.720 153.049 C 360.544 153.158,360.400 152.809,360.400 152.272 C 360.400 151.736,360.128 150.646,359.795 149.849 C 359.462 149.052,359.304 148.400,359.444 148.400 C 359.584 148.400,359.517 148.175,359.295 147.900 C 359.074 147.625,358.760 146.770,358.599 146.000 C 358.438 145.230,358.197 144.420,358.064 144.200 C 357.816 143.789,357.729 143.501,357.493 142.312 C 357.418 141.933,357.231 141.498,357.078 141.345 C 356.925 141.192,356.800 140.737,356.800 140.333 C 356.800 139.930,356.609 139.600,356.376 139.600 C 356.143 139.600,356.056 139.432,356.183 139.228 C 356.309 139.023,356.218 138.735,355.979 138.587 C 355.741 138.440,355.636 138.082,355.747 137.793 C 355.859 137.503,355.705 137.172,355.406 137.058 C 355.065 136.927,354.949 136.517,355.094 135.962 C 355.254 135.351,355.182 135.164,354.863 135.361 C 354.570 135.542,354.400 135.346,354.400 134.824 C 354.400 134.371,354.220 134.000,354.000 134.000 C 353.780 134.000,353.600 133.561,353.600 133.024 C 353.600 132.487,353.420 131.936,353.200 131.800 C 352.980 131.664,352.800 131.203,352.800 130.776 C 352.800 130.349,352.620 130.000,352.400 130.000 C 352.180 130.000,352.000 129.539,352.000 128.976 C 352.000 128.396,351.827 128.060,351.600 128.200 C 351.380 128.336,351.200 128.257,351.200 128.024 C 351.200 127.220,351.109 126.996,350.356 125.938 C 349.940 125.354,349.600 124.489,349.600 124.015 C 349.600 123.541,349.456 123.242,349.280 123.351 C 349.104 123.459,348.743 123.200,348.477 122.774 C 348.095 122.163,348.099 121.999,348.497 121.994 C 348.808 121.990,348.847 121.876,348.599 121.694 C 348.379 121.532,347.944 120.905,347.632 120.300 C 347.320 119.695,346.915 119.200,346.732 119.200 C 346.550 119.200,346.400 118.964,346.400 118.675 C 346.400 118.387,346.033 117.757,345.584 117.275 C 345.136 116.794,344.969 116.400,345.213 116.400 C 345.468 116.400,345.401 116.144,345.055 115.798 C 344.723 115.466,344.338 114.836,344.199 114.398 C 344.060 113.959,343.778 113.600,343.573 113.600 C 343.368 113.600,343.200 113.229,343.200 112.776 C 343.200 112.323,343.020 112.064,342.800 112.200 C 342.580 112.336,342.400 112.096,342.400 111.666 C 342.400 111.237,342.119 110.778,341.775 110.646 C 341.431 110.514,341.250 110.243,341.372 110.045 C 341.495 109.846,341.315 109.576,340.972 109.445 C 340.630 109.313,340.449 109.045,340.570 108.848 C 340.692 108.652,340.523 108.268,340.196 107.996 C 339.868 107.724,339.600 107.254,339.600 106.951 C 339.600 106.648,339.450 106.400,339.268 106.400 C 339.085 106.400,338.680 105.905,338.368 105.300 C 338.055 104.695,337.305 103.723,336.700 103.140 C 336.095 102.556,335.600 101.691,335.600 101.216 C 335.600 100.741,335.420 100.464,335.200 100.600 C 334.980 100.736,334.800 100.659,334.800 100.428 C 334.800 99.776,333.485 98.400,332.862 98.400 C 332.463 98.400,332.419 98.257,332.711 97.900 C 332.997 97.550,332.951 97.245,332.560 96.884 C 332.252 96.601,332.000 96.490,332.000 96.639 C 332.000 97.105,329.645 93.971,329.389 93.165 C 329.255 92.744,329.006 92.400,328.834 92.400 C 328.334 92.400,326.800 90.947,326.800 90.473 C 326.800 90.235,326.485 89.856,326.100 89.632 C 325.715 89.408,325.561 89.219,325.758 89.212 C 325.956 89.205,325.641 88.759,325.058 88.219 C 324.476 87.680,324.000 87.039,324.000 86.795 C 324.000 86.552,323.820 86.464,323.600 86.600 C 323.380 86.736,323.200 86.588,323.200 86.270 C 323.200 85.953,322.840 85.599,322.400 85.484 C 321.960 85.369,321.600 84.977,321.600 84.614 C 321.600 84.250,321.455 84.043,321.277 84.152 C 321.099 84.262,320.604 83.885,320.177 83.314 C 319.051 81.810,317.322 80.000,317.011 80.000 C 316.540 80.000,315.629 78.905,315.886 78.648 C 316.022 78.511,315.828 78.400,315.454 78.400 C 315.081 78.400,314.656 78.085,314.510 77.700 C 314.230 76.961,313.200 75.771,313.200 76.187 C 313.200 76.321,312.806 76.064,312.325 75.616 C 311.843 75.167,311.292 74.800,311.101 74.800 C 310.909 74.800,310.854 74.636,310.979 74.435 C 311.103 74.234,310.688 73.840,310.056 73.561 C 309.424 73.281,308.568 72.547,308.154 71.930 C 307.739 71.314,306.891 70.632,306.270 70.415 C 305.648 70.198,305.254 69.836,305.394 69.610 C 305.533 69.385,305.387 69.200,305.069 69.200 C 304.750 69.200,304.065 68.662,303.545 68.004 C 303.025 67.346,302.455 66.806,302.279 66.804 C 301.595 66.796,299.220 64.912,299.502 64.600 C 299.666 64.420,299.590 64.392,299.332 64.540 C 299.075 64.687,298.593 64.536,298.261 64.204 C 297.929 63.872,297.454 63.600,297.205 63.600 C 296.956 63.600,296.881 63.392,297.038 63.138 C 297.212 62.857,297.148 62.785,296.876 62.953 C 296.630 63.105,296.090 62.908,295.675 62.515 C 294.294 61.207,293.195 60.400,292.795 60.400 C 292.578 60.400,292.400 60.209,292.400 59.976 C 292.400 59.743,292.220 59.664,292.000 59.800 C 291.780 59.936,291.600 59.846,291.600 59.600 C 291.600 59.354,291.419 59.265,291.197 59.402 C 290.976 59.539,290.686 59.369,290.554 59.025 C 290.422 58.681,290.064 58.400,289.757 58.400 C 289.451 58.400,289.200 58.220,289.200 58.000 C 289.200 57.780,288.829 57.600,288.376 57.600 C 287.923 57.600,287.664 57.420,287.800 57.200 C 287.936 56.980,287.677 56.800,287.224 56.800 C 286.771 56.800,286.400 56.663,286.400 56.496 C 286.400 56.329,286.021 55.956,285.558 55.667 C 285.095 55.378,284.836 55.334,284.982 55.570 C 285.360 56.182,284.845 56.102,284.190 55.448 C 283.887 55.144,283.750 54.784,283.886 54.648 C 284.022 54.511,283.831 54.400,283.461 54.400 C 282.692 54.400,281.403 53.718,280.245 52.700 C 279.807 52.315,278.988 51.997,278.425 51.994 C 277.616 51.989,277.527 51.906,278.000 51.600 C 278.485 51.286,278.428 51.211,277.700 51.206 C 277.205 51.203,276.800 51.020,276.800 50.800 C 276.800 50.580,276.339 50.400,275.776 50.400 C 275.196 50.400,274.860 50.227,275.000 50.000 C 275.214 49.653,274.057 49.391,273.070 49.563 C 272.889 49.594,272.832 49.471,272.944 49.290 C 273.057 49.109,272.781 48.731,272.332 48.451 C 271.883 48.170,271.625 48.117,271.759 48.333 C 271.892 48.549,271.552 48.517,271.004 48.263 C 270.455 48.008,270.005 47.665,270.003 47.500 C 270.001 47.335,269.651 47.200,269.224 47.200 C 268.797 47.200,268.336 47.020,268.200 46.800 C 268.064 46.580,267.593 46.400,267.153 46.400 C 266.713 46.400,266.463 46.222,266.597 46.005 C 266.739 45.775,266.573 45.712,266.202 45.855 C 265.824 46.000,265.312 45.793,264.951 45.350 C 264.615 44.938,264.479 44.870,264.647 45.200 C 264.900 45.696,264.847 45.714,264.340 45.303 C 264.003 45.030,263.612 44.921,263.473 45.061 C 263.333 45.200,263.113 45.039,262.984 44.701 C 262.840 44.329,262.445 44.168,261.974 44.291 C 261.548 44.402,261.200 44.322,261.200 44.113 C 261.200 43.904,260.930 43.703,260.600 43.667 C 260.270 43.630,259.738 43.570,259.417 43.533 C 259.097 43.497,258.743 43.230,258.632 42.940 C 258.517 42.640,258.149 42.521,257.775 42.665 C 257.414 42.803,256.992 42.711,256.837 42.460 C 256.682 42.209,256.070 41.964,255.478 41.915 C 254.885 41.866,254.400 41.685,254.400 41.513 C 254.400 41.341,254.082 41.200,253.694 41.200 C 253.306 41.200,252.004 40.840,250.800 40.400 C 249.596 39.960,248.114 39.600,247.506 39.600 C 246.898 39.600,246.400 39.420,246.400 39.200 C 246.400 38.980,245.860 38.800,245.200 38.800 C 244.540 38.800,244.000 38.620,244.000 38.400 C 244.000 38.180,243.460 38.000,242.800 38.000 C 242.140 38.000,241.600 37.820,241.600 37.600 C 241.600 37.380,240.689 37.200,239.576 37.200 C 238.329 37.200,237.648 37.047,237.800 36.800 C 237.949 36.558,237.404 36.400,236.424 36.400 C 235.395 36.400,234.798 36.217,234.794 35.900 C 234.790 35.567,234.658 35.600,234.400 36.000 C 234.142 36.400,234.010 36.433,234.006 36.100 C 234.002 35.786,233.415 35.600,232.424 35.600 C 231.557 35.600,230.756 35.453,230.645 35.272 C 230.533 35.092,229.488 34.902,228.321 34.850 C 227.155 34.797,226.029 34.585,225.820 34.377 C 225.611 34.170,224.216 34.000,222.720 34.000 C 221.224 34.000,220.000 33.865,219.999 33.700 C 219.999 33.535,218.064 33.342,215.699 33.271 C 213.335 33.200,211.342 32.980,211.270 32.782 C 211.061 32.200,190.503 32.333,190.228 32.917 C 190.052 33.289,189.946 33.285,189.767 32.900 C 189.488 32.303,188.800 32.232,188.800 32.800 M101.604 64.196 C 101.332 64.523,100.950 64.693,100.755 64.572 C 100.560 64.451,100.400 64.543,100.400 64.776 C 100.400 65.491,101.378 65.247,101.907 64.400 C 102.493 63.462,102.313 63.341,101.604 64.196 M93.906 69.752 C 93.525 70.042,93.330 70.396,93.473 70.540 C 93.934 71.000,94.400 70.818,94.400 70.176 C 94.400 69.833,94.580 69.664,94.800 69.800 C 95.020 69.936,95.200 69.857,95.200 69.624 C 95.200 69.063,94.756 69.107,93.906 69.752 M211.800 75.150 C 213.954 76.182,215.205 77.224,216.743 79.269 C 225.148 90.442,208.324 104.273,198.222 94.495 C 188.567 85.150,199.665 69.338,211.800 75.150 M256.974 79.014 C 258.504 79.741,260.000 82.193,260.000 83.974 C 260.000 88.313,254.765 91.143,251.209 88.726 C 245.321 84.723,250.526 75.955,256.974 79.014 M130.841 112.114 C 135.784 115.439,133.231 122.779,127.297 122.302 C 122.146 121.889,120.206 116.041,124.062 112.551 C 125.889 110.897,128.757 110.713,130.841 112.114 M283.102 117.660 C 292.459 121.419,297.175 129.606,295.164 138.600 C 294.869 139.920,294.613 141.180,294.594 141.400 C 294.492 142.638,292.735 145.303,290.618 147.434 C 276.772 161.369,254.153 146.795,260.766 128.200 C 261.001 127.540,261.305 126.685,261.443 126.300 C 261.581 125.915,261.852 125.600,262.047 125.600 C 262.241 125.600,262.400 125.355,262.400 125.055 C 262.400 124.107,267.125 119.652,269.306 118.543 C 272.606 116.865,279.953 116.395,283.102 117.660 M126.600 145.768 C 144.976 149.021,156.021 167.561,149.855 184.800 C 149.501 185.790,149.209 186.870,149.206 187.200 C 149.174 190.436,140.801 199.073,134.979 201.874 C 132.711 202.966,131.474 203.393,127.754 204.368 C 124.331 205.266,115.511 204.775,113.105 203.553 C 112.723 203.359,112.226 203.200,112.001 203.200 C 108.845 203.200,100.249 196.533,97.080 191.629 C 94.556 187.722,93.837 186.011,92.426 180.554 C 91.888 178.473,91.871 171.086,92.400 169.328 C 92.620 168.598,92.992 167.325,93.226 166.500 C 93.630 165.080,93.912 164.345,94.950 162.000 C 100.040 150.502,113.718 143.487,126.600 145.768 M338.612 166.007 C 342.118 168.174,341.951 173.378,338.304 175.602 C 333.704 178.406,328.027 172.976,330.519 168.157 C 332.156 164.991,335.521 164.097,338.612 166.007 M204.295 177.611 C 217.225 184.072,212.810 203.359,198.409 203.325 C 186.159 203.297,180.308 188.896,188.998 180.160 C 192.910 176.228,199.372 175.151,204.295 177.611 M316.953 201.406 C 322.358 203.664,325.241 210.947,322.831 216.255 C 317.837 227.254,301.463 223.869,301.440 211.833 C 301.423 203.460,309.260 198.192,316.953 201.406 M295.676 254.985 C 312.571 259.385,313.479 283.025,297.000 289.437 C 293.990 290.608,287.971 290.610,285.000 289.441 C 279.418 287.243,275.836 283.542,273.542 277.600 C 272.292 274.363,273.048 266.611,274.875 263.938 C 275.274 263.354,275.600 262.706,275.600 262.498 C 275.600 261.475,280.688 257.076,283.356 255.792 C 286.646 254.209,291.481 253.892,295.676 254.985 M64.533 298.945 C 64.533 299.245,64.872 299.702,65.286 299.961 C 66.008 300.412,66.012 300.390,65.373 299.415 C 64.606 298.245,64.533 298.204,64.533 298.945 M333.060 301.638 C 332.666 302.099,332.447 302.581,332.575 302.709 C 332.815 302.948,333.964 301.638,333.987 301.100 C 334.007 300.634,333.834 300.734,333.060 301.638 M66.678 301.977 C 66.796 302.430,67.052 302.800,67.247 302.800 C 67.786 302.800,67.668 302.154,67.031 301.626 C 66.565 301.239,66.502 301.302,66.678 301.977 M330.400 305.133 C 330.400 305.390,330.130 305.600,329.800 305.600 C 329.470 305.600,329.200 305.870,329.200 306.200 C 329.200 306.530,329.337 306.800,329.504 306.800 C 329.937 306.800,330.900 305.167,330.628 304.894 C 330.502 304.769,330.400 304.877,330.400 305.133 M324.400 311.656 C 324.400 311.907,324.103 312.329,323.739 312.595 C 323.188 312.998,323.172 313.132,323.639 313.403 C 323.948 313.582,324.066 313.581,323.903 313.400 C 323.739 313.219,323.964 312.820,324.403 312.513 C 325.249 311.920,325.467 311.200,324.800 311.200 C 324.580 311.200,324.400 311.405,324.400 311.656 ", stroke: "none", fill: "#e4e3e4", fillRule: "evenodd" })
] }) });
document.body.style.transition = "background-color .3s ease";
const g2 = ({ lightColor: u = "#fff", darkColor: E = "#000", position: L, initialValue: _, dispatch: x, asNavIcon: j = !1 }) => {
  const [p, b] = f2(_), f = () => {
    if (p === m.LIGHT) {
      b(m.DARK), x(m.DARK);
      return;
    }
    b(m.LIGHT), x(m.LIGHT);
  };
  return c2(() => {
    p === m.DARK ? document.body.style.backgroundColor = E : document.body.style.backgroundColor = u;
  }, [p, E, u]), j ? /* @__PURE__ */ c.jsx("div", { className: "theme-icon", style: {
    boxShadow: p === m.LIGHT ? "0 0 0 0 transparent" : `1px 1px 4px 0px ${u}`
  }, children: /* @__PURE__ */ c.jsxs("div", { "aria-label": "theme-handler", onClick: f, className: p === m.LIGHT ? "btn-theme as-nav" : "btn-theme as-nav active", children: [
    /* @__PURE__ */ c.jsx(w0, {}),
    /* @__PURE__ */ c.jsx(j0, {})
  ] }) }) : /* @__PURE__ */ c.jsx("div", { className: "theme", style: p2(L), children: /* @__PURE__ */ c.jsx("div", { className: "theme-container", style: {
    boxShadow: p === m.LIGHT ? "0 0 0 0 transparent" : `1px 1px 4px 0px ${u}`
  }, children: /* @__PURE__ */ c.jsxs("div", { "aria-label": "theme-handler", onClick: f, className: p === m.LIGHT ? "btn-theme" : "btn-theme active", children: [
    /* @__PURE__ */ c.jsx(w0, {}),
    /* @__PURE__ */ c.jsx(j0, {})
  ] }) }) });
};
export {
  g2 as Theme
};
