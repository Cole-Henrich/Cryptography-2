    /*! cryptii v4.0.8+master.b029d8c - (c) Fränz Friederes 2020 */
    !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("crypto"))
        : "function" == typeof define && define.amd
        ? define("cryptii", ["exports", "crypto"], t)
        : t(
            ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).cryptii =
            {}),
            e.crypto
        );
    })(this, function (e, t) {
    function n(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var r = n(t),
        i =
        "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {};
    function a(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
    }
    var o = function (e) {
        return e && e.Math == Math && e;
        },
        s =
        o("object" == typeof globalThis && globalThis) ||
        o("object" == typeof window && window) ||
        o("object" == typeof self && self) ||
        o("object" == typeof i && i) ||
        Function("return this")(),
        l = function (e) {
        try {
            return !!e();
        } catch (e) {
            return !0;
        }
        },
        u = !l(function () {
        return (
            7 !=
            Object.defineProperty({}, 1, {
            get: function () {
                return 7;
            },
            })[1]
        );
        }),
        c = {}.propertyIsEnumerable,
        h = Object.getOwnPropertyDescriptor,
        d = {
        f:
            h && !c.call({ 1: 2 }, 1)
            ? function (e) {
                var t = h(this, e);
                return !!t && t.enumerable;
                }
            : c,
        },
        f = function (e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
        };
        },
        g = {}.toString,
        p = function (e) {
        return g.call(e).slice(8, -1);
        },
        v = "".split,
        m = l(function () {
        return !Object("z").propertyIsEnumerable(0);
        })
        ? function (e) {
            return "String" == p(e) ? v.call(e, "") : Object(e);
            }
        : Object,
        b = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
        },
        k = function (e) {
        return m(b(e));
        },
        w = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
        },
        _ = function (e, t) {
        if (!w(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !w((r = n.call(e))))
            return r;
        if ("function" == typeof (n = e.valueOf) && !w((r = n.call(e)))) return r;
        if (!t && "function" == typeof (n = e.toString) && !w((r = n.call(e))))
            return r;
        throw TypeError("Can't convert object to primitive value");
        },
        S = {}.hasOwnProperty,
        x = function (e, t) {
        return S.call(e, t);
        },
        I = s.document,
        C = w(I) && w(I.createElement),
        V = function (e) {
        return C ? I.createElement(e) : {};
        },
        E =
        !u &&
        !l(function () {
            return (
            7 !=
            Object.defineProperty(V("div"), "a", {
                get: function () {
                return 7;
                },
            }).a
            );
        }),
        A = Object.getOwnPropertyDescriptor,
        M = {
        f: u
            ? A
            : function (e, t) {
                if (((e = k(e)), (t = _(t, !0)), E))
                try {
                    return A(e, t);
                } catch (e) {}
                if (x(e, t)) return f(!d.f.call(e, t), e[t]);
            },
        },
        T = function (e) {
        if (!w(e)) throw TypeError(String(e) + " is not an object");
        return e;
        },
        L = Object.defineProperty,
        P = {
        f: u
            ? L
            : function (e, t, n) {
                if ((T(e), (t = _(t, !0)), T(n), E))
                try {
                    return L(e, t, n);
                } catch (e) {}
                if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e;
            },
        },
        B = u
        ? function (e, t, n) {
            return P.f(e, t, f(1, n));
            }
        : function (e, t, n) {
            return (e[t] = n), e;
            },
        O = function (e, t) {
        try {
            B(s, e, t);
        } catch (n) {
            s[e] = t;
        }
        return t;
        },
        R = "__core-js_shared__",
        z = s[R] || O(R, {}),
        N = Function.toString;
    "function" != typeof z.inspectSource &&
        (z.inspectSource = function (e) {
        return N.call(e);
        });
    var F,
        D,
        j,
        $ = z.inspectSource,
        q = s.WeakMap,
        U = "function" == typeof q && /native code/.test($(q)),
        W = a(function (e) {
        (e.exports = function (e, t) {
            return z[e] || (z[e] = void 0 !== t ? t : {});
        })("versions", []).push({
            version: "3.6.5",
            mode: "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
        }),
        G = 0,
        H = Math.random(),
        K = function (e) {
        return (
            "Symbol(" +
            String(void 0 === e ? "" : e) +
            ")_" +
            (++G + H).toString(36)
        );
        },
        X = W("keys"),
        Z = function (e) {
        return X[e] || (X[e] = K(e));
        },
        Y = {},
        J = s.WeakMap;
    if (U) {
        var Q = new J(),
        ee = Q.get,
        te = Q.has,
        ne = Q.set;
        (F = function (e, t) {
        return ne.call(Q, e, t), t;
        }),
        (D = function (e) {
            return ee.call(Q, e) || {};
        }),
        (j = function (e) {
            return te.call(Q, e);
        });
    } else {
        var re = Z("state");
        (Y[re] = !0),
        (F = function (e, t) {
            return B(e, re, t), t;
        }),
        (D = function (e) {
            return x(e, re) ? e[re] : {};
        }),
        (j = function (e) {
            return x(e, re);
        });
    }
    var ie = {
        set: F,
        get: D,
        has: j,
        enforce: function (e) {
            return j(e) ? D(e) : F(e, {});
        },
        getterFor: function (e) {
            return function (t) {
            var n;
            if (!w(t) || (n = D(t)).type !== e)
                throw TypeError("Incompatible receiver, " + e + " required");
            return n;
            };
        },
        },
        ae = a(function (e) {
        var t = ie.get,
            n = ie.enforce,
            r = String(String).split("String");
        (e.exports = function (e, t, i, a) {
            var o = !!a && !!a.unsafe,
            l = !!a && !!a.enumerable,
            u = !!a && !!a.noTargetGet;
            "function" == typeof i &&
            ("string" != typeof t || x(i, "name") || B(i, "name", t),
            (n(i).source = r.join("string" == typeof t ? t : ""))),
            e !== s
                ? (o ? !u && e[t] && (l = !0) : delete e[t],
                l ? (e[t] = i) : B(e, t, i))
                : l
                ? (e[t] = i)
                : O(t, i);
        })(Function.prototype, "toString", function () {
            return ("function" == typeof this && t(this).source) || $(this);
        });
        }),
        oe = s,
        se = function (e) {
        return "function" == typeof e ? e : void 0;
        },
        le = function (e, t) {
        return arguments.length < 2
            ? se(oe[e]) || se(s[e])
            : (oe[e] && oe[e][t]) || (s[e] && s[e][t]);
        },
        ue = Math.ceil,
        ce = Math.floor,
        he = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? ce : ue)(e);
        },
        de = Math.min,
        fe = function (e) {
        return e > 0 ? de(he(e), 9007199254740991) : 0;
        },
        ge = Math.max,
        pe = Math.min,
        ve = function (e, t) {
        var n = he(e);
        return n < 0 ? ge(n + t, 0) : pe(n, t);
        },
        ye = function (e) {
        return function (t, n, r) {
            var i,
            a = k(t),
            o = fe(a.length),
            s = ve(r, o);
            if (e && n != n) {
            for (; o > s; ) if ((i = a[s++]) != i) return !0;
            } else
            for (; o > s; s++)
                if ((e || s in a) && a[s] === n) return e || s || 0;
            return !e && -1;
        };
        },
        me = { includes: ye(!0), indexOf: ye(!1) },
        be = me.indexOf,
        ke = function (e, t) {
        var n,
            r = k(e),
            i = 0,
            a = [];
        for (n in r) !x(Y, n) && x(r, n) && a.push(n);
        for (; t.length > i; ) x(r, (n = t[i++])) && (~be(a, n) || a.push(n));
        return a;
        },
        we = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
        ],
        _e = we.concat("length", "prototype"),
        Se = {
        f:
            Object.getOwnPropertyNames ||
            function (e) {
            return ke(e, _e);
            },
        },
        xe = { f: Object.getOwnPropertySymbols },
        Ie =
        le("Reflect", "ownKeys") ||
        function (e) {
            var t = Se.f(T(e)),
            n = xe.f;
            return n ? t.concat(n(e)) : t;
        },
        Ce = function (e, t) {
        for (var n = Ie(t), r = P.f, i = M.f, a = 0; a < n.length; a++) {
            var o = n[a];
            x(e, o) || r(e, o, i(t, o));
        }
        },
        Ve = /#|\.prototype\./,
        Ee = function (e, t) {
        var n = Me[Ae(e)];
        return n == Le || (n != Te && ("function" == typeof t ? l(t) : !!t));
        },
        Ae = (Ee.normalize = function (e) {
        return String(e).replace(Ve, ".").toLowerCase();
        }),
        Me = (Ee.data = {}),
        Te = (Ee.NATIVE = "N"),
        Le = (Ee.POLYFILL = "P"),
        Pe = Ee,
        Be = M.f,
        Oe = function (e, t) {
        var n,
            r,
            i,
            a,
            o,
            l = e.target,
            u = e.global,
            c = e.stat;
        if ((n = u ? s : c ? s[l] || O(l, {}) : (s[l] || {}).prototype))
            for (r in t) {
            if (
                ((a = t[r]),
                (i = e.noTargetGet ? (o = Be(n, r)) && o.value : n[r]),
                !Pe(u ? r : l + (c ? "." : "#") + r, e.forced) && void 0 !== i)
            ) {
                if (typeof a == typeof i) continue;
                Ce(a, i);
            }
            (e.sham || (i && i.sham)) && B(a, "sham", !0), ae(n, r, a, e);
            }
        },
        Re = function (e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e;
        },
        ze = function (e, t, n) {
        if ((Re(e), void 0 === t)) return e;
        switch (n) {
            case 0:
            return function () {
                return e.call(t);
            };
            case 1:
            return function (n) {
                return e.call(t, n);
            };
            case 2:
            return function (n, r) {
                return e.call(t, n, r);
            };
            case 3:
            return function (n, r, i) {
                return e.call(t, n, r, i);
            };
        }
        return function () {
            return e.apply(t, arguments);
        };
        },
        Ne = function (e) {
        return Object(b(e));
        },
        Fe =
        Array.isArray ||
        function (e) {
            return "Array" == p(e);
        },
        De =
        !!Object.getOwnPropertySymbols &&
        !l(function () {
            return !String(Symbol());
        }),
        je = De && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        $e = W("wks"),
        qe = s.Symbol,
        Ue = je ? qe : (qe && qe.withoutSetter) || K,
        We = function (e) {
        return (
            x($e, e) ||
            (De && x(qe, e) ? ($e[e] = qe[e]) : ($e[e] = Ue("Symbol." + e))),
            $e[e]
        );
        },
        Ge = We("species"),
        He = function (e, t) {
        var n;
        return (
            Fe(e) &&
            ("function" != typeof (n = e.constructor) ||
            (n !== Array && !Fe(n.prototype))
                ? w(n) && null === (n = n[Ge]) && (n = void 0)
                : (n = void 0)),
            new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        );
        },
        Ke = [].push,
        Xe = function (e) {
        var t = 1 == e,
            n = 2 == e,
            r = 3 == e,
            i = 4 == e,
            a = 6 == e,
            o = 5 == e || a;
        return function (s, l, u, c) {
            for (
            var h,
                d,
                f = Ne(s),
                g = m(f),
                p = ze(l, u, 3),
                v = fe(g.length),
                y = 0,
                b = c || He,
                k = t ? b(s, v) : n ? b(s, 0) : void 0;
            v > y;
            y++
            )
            if ((o || y in g) && ((d = p((h = g[y]), y, f)), e))
                if (t) k[y] = d;
                else if (d)
                switch (e) {
                    case 3:
                    return !0;
                    case 5:
                    return h;
                    case 6:
                    return y;
                    case 2:
                    Ke.call(k, h);
                }
                else if (i) return !1;
            return a ? -1 : r || i ? i : k;
        };
        },
        Ze = {
        forEach: Xe(0),
        map: Xe(1),
        filter: Xe(2),
        some: Xe(3),
        every: Xe(4),
        find: Xe(5),
        findIndex: Xe(6),
        },
        Ye = function (e, t) {
        var n = [][e];
        return (
            !!n &&
            l(function () {
            n.call(
                null,
                t ||
                function () {
                    throw 1;
                },
                1
            );
            })
        );
        },
        Je = Object.defineProperty,
        Qe = {},
        et = function (e) {
        throw e;
        },
        tt = function (e, t) {
        if (x(Qe, e)) return Qe[e];
        t || (t = {});
        var n = [][e],
            r = !!x(t, "ACCESSORS") && t.ACCESSORS,
            i = x(t, 0) ? t[0] : et,
            a = x(t, 1) ? t[1] : void 0;
        return (Qe[e] =
            !!n &&
            !l(function () {
            if (r && !u) return !0;
            var e = { length: -1 };
            r ? Je(e, 1, { enumerable: !0, get: et }) : (e[1] = 1),
                n.call(e, i, a);
            }));
        },
        nt = Ze.forEach,
        rt = Ye("forEach"),
        it = tt("forEach"),
        at =
        rt && it
            ? [].forEach
            : function (e) {
                return nt(this, e, arguments.length > 1 ? arguments[1] : void 0);
            };
    Oe({ target: "Array", proto: !0, forced: [].forEach != at }, { forEach: at });
    var ot =
        Object.keys ||
        function (e) {
            return ke(e, we);
        },
        st = Object.assign,
        lt = Object.defineProperty,
        ut =
        !st ||
        l(function () {
            if (
            u &&
            1 !==
                st(
                { b: 1 },
                st(
                    lt({}, "a", {
                    enumerable: !0,
                    get: function () {
                        lt(this, "b", { value: 3, enumerable: !1 });
                    },
                    }),
                    { b: 2 }
                )
                ).b
            )
            return !0;
            var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
            return (
            (e[n] = 7),
            r.split("").forEach(function (e) {
                t[e] = e;
            }),
            7 != st({}, e)[n] || ot(st({}, t)).join("") != r
            );
        })
            ? function (e, t) {
                for (
                var n = Ne(e), r = arguments.length, i = 1, a = xe.f, o = d.f;
                r > i;

                )
                for (
                    var s,
                    l = m(arguments[i++]),
                    c = a ? ot(l).concat(a(l)) : ot(l),
                    h = c.length,
                    f = 0;
                    h > f;

                )
                    (s = c[f++]), (u && !o.call(l, s)) || (n[s] = l[s]);
                return n;
            }
            : st;
    Oe(
        { target: "Object", stat: !0, forced: Object.assign !== ut },
        { assign: ut }
    );
    var ct = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
    };
    for (var ht in ct) {
        var dt = s[ht],
        ft = dt && dt.prototype;
        if (ft && ft.forEach !== at)
        try {
            B(ft, "forEach", at);
        } catch (e) {
            ft.forEach = at;
        }
    }
    function gt(e) {
        return (gt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
            }
            : function (e) {
                return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function pt(e, t, n, r, i, a, o) {
        try {
        var s = e[a](o),
            l = s.value;
        } catch (e) {
        return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
    }
    function vt(e) {
        return function () {
        var t = this,
            n = arguments;
        return new Promise(function (r, i) {
            var a = e.apply(t, n);
            function o(e) {
            pt(a, r, i, o, s, "next", e);
            }
            function s(e) {
            pt(a, r, i, o, s, "throw", e);
            }
            o(void 0);
        });
        };
    }
    function yt(e, t) {
        if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function mt(e, t) {
        for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
    }
    function bt(e, t, n) {
        return t && mt(e.prototype, t), n && mt(e, n), e;
    }
    function kt(e, t) {
        if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
        })),
        t && _t(e, t);
    }
    function wt(e) {
        return (wt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
    }
    function _t(e, t) {
        return (_t =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
    }
    function St() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
        return (
            Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
            ),
            !0
        );
        } catch (e) {
        return !1;
        }
    }
    function xt(e, t, n) {
        return (xt = St()
        ? Reflect.construct
        : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r))();
            return n && _t(i, n.prototype), i;
            }).apply(null, arguments);
    }
    function It(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (It = function (e) {
        if (
            null === e ||
            ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))
        )
            return e;
        var n;
        if ("function" != typeof e)
            throw new TypeError(
            "Super expression must either be null or a function"
            );
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r);
        }
        function r() {
            return xt(e, arguments, wt(this).constructor);
        }
        return (
            (r.prototype = Object.create(e.prototype, {
            constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
            },
            })),
            _t(r, e)
        );
        })(e);
    }
    function Ct(e) {
        if (void 0 === e)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
        return e;
    }
    function Vt(e, t) {
        return !t || ("object" != typeof t && "function" != typeof t) ? Ct(e) : t;
    }
    function Et(e) {
        var t = St();
        return function () {
        var n,
            r = wt(e);
        if (t) {
            var i = wt(this).constructor;
            n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return Vt(this, n);
        };
    }
    function At(e, t, n) {
        return (At =
        "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var r = (function (e, t) {
                for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = wt(e));

                );
                return e;
                })(e, t);
                if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value;
                }
            })(e, t, n || e);
    }
    function Mt(e, t) {
        return (
        (function (e) {
            if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
            var n = [],
            r = !0,
            i = !1,
            a = void 0;
            try {
            for (
                var o, s = e[Symbol.iterator]();
                !(r = (o = s.next()).done) &&
                (n.push(o.value), !t || n.length !== t);
                r = !0
            );
            } catch (e) {
            (i = !0), (a = e);
            } finally {
            try {
                r || null == s.return || s.return();
            } finally {
                if (i) throw a;
            }
            }
            return n;
        })(e, t) ||
        Tt(e, t) ||
        (function () {
            throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
        })()
        );
    }
    function Tt(e, t) {
        if (e) {
        if ("string" == typeof e) return Lt(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? Lt(e, t)
            : void 0
        );
        }
    }
    function Lt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function Pt(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
            Array.isArray(e) ||
            (n = Tt(e)) ||
            (t && e && "number" == typeof e.length)
        ) {
            n && (e = n);
            var r = 0,
            i = function () {};
            return {
            s: i,
            n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
                throw e;
            },
            f: i,
            };
        }
        throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
        }
        var a,
        o = !0,
        s = !1;
        return {
        s: function () {
            n = e[Symbol.iterator]();
        },
        n: function () {
            var e = n.next();
            return (o = e.done), e;
        },
        e: function (e) {
            (s = !0), (a = e);
        },
        f: function () {
            try {
            o || null == n.return || n.return();
            } finally {
            if (s) throw a;
            }
        },
        };
    }
    var Bt,
        Ot,
        Rt = le("navigator", "userAgent") || "",
        zt = s.process,
        Nt = zt && zt.versions,
        Ft = Nt && Nt.v8;
    Ft
        ? (Ot = (Bt = Ft.split("."))[0] + Bt[1])
        : Rt &&
        (!(Bt = Rt.match(/Edge\/(\d+)/)) || Bt[1] >= 74) &&
        (Bt = Rt.match(/Chrome\/(\d+)/)) &&
        (Ot = Bt[1]);
    var Dt = Ot && +Ot,
        jt = We("species"),
        $t = function (e) {
        return (
            Dt >= 51 ||
            !l(function () {
            var t = [];
            return (
                ((t.constructor = {})[jt] = function () {
                return { foo: 1 };
                }),
                1 !== t[e](Boolean).foo
            );
            })
        );
        },
        qt = Ze.filter,
        Ut = $t("filter"),
        Wt = tt("filter");
    Oe(
        { target: "Array", proto: !0, forced: !Ut || !Wt },
        {
        filter: function (e) {
            return qt(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
        }
    );
    var Gt = me.indexOf,
        Ht = [].indexOf,
        Kt = !!Ht && 1 / [1].indexOf(1, -0) < 0,
        Xt = Ye("indexOf"),
        Zt = tt("indexOf", { ACCESSORS: !0, 1: 0 });
    Oe(
        { target: "Array", proto: !0, forced: Kt || !Xt || !Zt },
        {
        indexOf: function (e) {
            return Kt
            ? Ht.apply(this, arguments) || 0
            : Gt(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
        }
    );
    var Yt = function (e, t, n) {
        var r = _(t);
        r in e ? P.f(e, r, f(0, n)) : (e[r] = n);
        },
        Jt = $t("splice"),
        Qt = tt("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        en = Math.max,
        tn = Math.min,
        nn = 9007199254740991,
        rn = "Maximum allowed length exceeded";
    Oe(
        { target: "Array", proto: !0, forced: !Jt || !Qt },
        {
        splice: function (e, t) {
            var n,
            r,
            i,
            a,
            o,
            s,
            l = Ne(this),
            u = fe(l.length),
            c = ve(e, u),
            h = arguments.length;
            if (
            (0 === h
                ? (n = r = 0)
                : 1 === h
                ? ((n = 0), (r = u - c))
                : ((n = h - 2), (r = tn(en(he(t), 0), u - c))),
            u + n - r > nn)
            )
            throw TypeError(rn);
            for (i = He(l, r), a = 0; a < r; a++)
            (o = c + a) in l && Yt(i, a, l[o]);
            if (((i.length = r), n < r)) {
            for (a = c; a < u - r; a++)
                (s = a + n), (o = a + r) in l ? (l[s] = l[o]) : delete l[s];
            for (a = u; a > u - r + n; a--) delete l[a - 1];
            } else if (n > r)
            for (a = u - r; a > c; a--)
                (s = a + n - 1), (o = a + r - 1) in l ? (l[s] = l[o]) : delete l[s];
            for (a = 0; a < n; a++) l[a + c] = arguments[a + 2];
            return (l.length = u - r + n), i;
        },
        }
    );
    var an = l(function () {
        ot(1);
    });
    Oe(
        { target: "Object", stat: !0, forced: an },
        {
        keys: function (e) {
            return ot(Ne(e));
        },
        }
    );
    var on = {};
    on[We("toStringTag")] = "z";
    var sn = "[object z]" === String(on),
        ln = We("toStringTag"),
        un =
        "Arguments" ==
        p(
            (function () {
            return arguments;
            })()
        ),
        cn = sn
        ? p
        : function (e) {
            var t, n, r;
            return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                typeof (n = (function (e, t) {
                    try {
                    return e[t];
                    } catch (e) {}
                })((t = Object(e)), ln))
                ? n
                : un
                ? p(t)
                : "Object" == (r = p(t)) && "function" == typeof t.callee
                ? "Arguments"
                : r;
            },
        hn = sn
        ? {}.toString
        : function () {
            return "[object " + cn(this) + "]";
            };
    sn || ae(Object.prototype, "toString", hn, { unsafe: !0 });
    var dn = function () {
        var e = T(this),
            t = "";
        return (
            e.global && (t += "g"),
            e.ignoreCase && (t += "i"),
            e.multiline && (t += "m"),
            e.dotAll && (t += "s"),
            e.unicode && (t += "u"),
            e.sticky && (t += "y"),
            t
        );
        },
        fn = "toString",
        gn = RegExp.prototype,
        pn = gn.toString,
        vn = l(function () {
        return "/a/b" != pn.call({ source: "a", flags: "b" });
        }),
        yn = pn.name != fn;
    (vn || yn) &&
        ae(
        RegExp.prototype,
        fn,
        function () {
            var e = T(this),
            t = String(e.source),
            n = e.flags;
            return (
            "/" +
            t +
            "/" +
            String(
                void 0 === n && e instanceof RegExp && !("flags" in gn)
                ? dn.call(e)
                : n
            )
            );
        },
        { unsafe: !0 }
        );
    var mn = { role: "role", ariaHidden: "aria-hidden", ariaLabel: "aria-label" },
        bn = (function () {
        function e() {
            yt(this, e),
            (this._$root = null),
            (this._superview = null),
            (this._subviews = []),
            (this._model = null),
            (this._focus = !1),
            (this._needsUpdate = !1);
        }
        return (
            bt(e, null, [
            {
                key: "createElement",
                value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    r = document.createElement(e);
                if (
                    (Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    if (void 0 === mn[e]) {
                        var i = 0 === e.indexOf("on") ? e.toLowerCase() : e;
                        r[i] = n;
                    } else r.setAttribute(mn[e], n);
                    }),
                    null !== n)
                )
                    switch (Object.prototype.toString.call(n)) {
                    case "[object String]":
                        r.innerText = n;
                        break;
                    case "[object Array]":
                        n.forEach(function (e) {
                        return e && r.appendChild(e);
                        });
                        break;
                    default:
                        r.appendChild(n);
                    }
                return r;
                },
            },
            ]),
            bt(e, [
            {
                key: "getElement",
                value: function () {
                return (
                    null === this._$root &&
                    (this.willRender(),
                    (this._$root = this.render()),
                    this.didRender()),
                    this._$root
                );
                },
            },
            {
                key: "refresh",
                value: function () {
                var e = this._$root;
                return (
                    null === e ||
                    ((this._$root = null),
                    this.willRender(),
                    (this._$root = this.render()),
                    this.didRender(),
                    this.getSubviews().forEach(this.appendSubviewElement),
                    e &&
                        e.parentNode &&
                        e.parentNode.replaceChild(this._$root, e)),
                    this
                );
                },
            },
            {
                key: "render",
                value: function () {
                return e.createElement("div");
                },
            },
            {
                key: "setNeedsUpdate",
                value: function () {
                var e = this;
                return (
                    this._needsUpdate ||
                    ((this._needsUpdate = !0),
                    window.requestAnimationFrame(function () {
                        (e._needsUpdate = !1), e.update();
                    })),
                    this
                );
                },
            },
            { key: "update", value: function () {} },
            { key: "willRender", value: function () {} },
            {
                key: "didRender",
                value: function () {
                this.update();
                },
            },
            {
                key: "layout",
                value: function () {
                return (
                    this._subviews.forEach(function (e) {
                    return e.layout();
                    }),
                    this
                );
                },
            },
            {
                key: "addSubview",
                value: function (e) {
                e.removeFromSuperview(),
                    this.appendSubviewElement(e),
                    e.setSuperview(this),
                    this._subviews.push(e);
                },
            },
            {
                key: "getSubviews",
                value: function () {
                return this._subviews;
                },
            },
            {
                key: "appendSubviewElement",
                value: function (e) {
                return (
                    e.getElement().parentNode !== this.getElement() &&
                    this.getElement().appendChild(e.getElement()),
                    this
                );
                },
            },
            {
                key: "removeSubview",
                value: function (e) {
                var t = this._subviews.indexOf(e);
                -1 !== t &&
                    (this._subviews.splice(t, 1),
                    e.setSuperview(null),
                    this.removeSubviewElement(e));
                },
            },
            {
                key: "removeSubviewElement",
                value: function (e) {
                var t = e.getElement();
                return (
                    null !== t.parentNode &&
                    t.parentNode.removeChild(e.getElement()),
                    this
                );
                },
            },
            {
                key: "removeFromSuperview",
                value: function () {
                return (
                    null !== this._superview && this._superview.removeSubview(this),
                    this
                );
                },
            },
            {
                key: "getSuperview",
                value: function () {
                return this._superview;
                },
            },
            {
                key: "setSuperview",
                value: function (e) {
                return (this._superview = e), this;
                },
            },
            {
                key: "focus",
                value: function () {
                return this.setFocus(!0);
                },
            },
            {
                key: "blur",
                value: function () {
                return this.setFocus(!1);
                },
            },
            {
                key: "setFocus",
                value: function (e) {
                return (
                    e !== this._focus &&
                    ((this._focus = e),
                    e
                        ? (null !== this._superview &&
                            this._superview.subviewDidFocus(this),
                        this.didFocus())
                        : (this._subviews.forEach(function (e) {
                            return e.blur();
                        }),
                        this.didBlur())),
                    this
                );
                },
            },
            {
                key: "hasFocus",
                value: function () {
                return this._focus;
                },
            },
            {
                key: "subviewDidFocus",
                value: function (e) {
                this.hasFocus()
                    ? this._subviews
                        .filter(function (t) {
                        return t !== e;
                        })
                        .forEach(function (e) {
                        return e.blur();
                        })
                    : this.focus();
                },
            },
            { key: "didFocus", value: function () {} },
            { key: "didBlur", value: function () {} },
            {
                key: "getModel",
                value: function () {
                return this._model;
                },
            },
            {
                key: "hasModel",
                value: function () {
                return null !== this._model;
                },
            },
            {
                key: "setModel",
                value: function (e) {
                return (this._model = e), this;
                },
            },
            ]),
            e
        );
        })(),
        kn = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            return yt(this, n), t.apply(this, arguments);
        }
        return (
            bt(n, [
            {
                key: "render",
                value: function () {
                var e = document.querySelector(".app");
                return (
                    window.addEventListener(
                    "resize",
                    this.windowDidResize.bind(this),
                    !1
                    ),
                    e
                );
                },
            },
            {
                key: "windowDidResize",
                value: function (e) {
                this.layout();
                },
            },
            ]),
            n
        );
        })(bn),
        wn = Ze.map,
        _n = $t("map"),
        Sn = tt("map");
    Oe(
        { target: "Array", proto: !0, forced: !_n || !Sn },
        {
        map: function (e) {
            return wn(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
        }
    );
    var xn = P.f,
        In = Function.prototype,
        Cn = In.toString,
        Vn = /^\s*function ([^ (]*)/,
        En = "name";
    u &&
        !(En in In) &&
        xn(In, En, {
        configurable: !0,
        get: function () {
            try {
            return Cn.call(this).match(Vn)[1];
            } catch (e) {
            return "";
            }
        },
        });
    var An = (function () {
        function e() {
            yt(this, e), (this._identifiers = []), (this._invokables = []);
        }
        return (
            bt(
            e,
            [
                {
                key: "getIdentifiers",
                value: function () {
                    return this._identifiers;
                },
                },
                {
                key: "getInvokable",
                value: function (e) {
                    var t = this._identifiers.indexOf(e);
                    if (-1 === t)
                    throw new Error(
                        "Invokable for '".concat(
                        e,
                        "' has not been registered yet."
                        )
                    );
                    return this._invokables[t];
                },
                },
                {
                key: "register",
                value: function (e, t) {
                    if (this.exists(e))
                    throw new Error(
                        "Invokable can't be registered. " +
                        "Identifier ".concat(e, " already exists.")
                    );
                    return (
                    this._identifiers.push(e), this._invokables.push(t), this
                    );
                },
                },
                {
                key: "exists",
                value: function (e) {
                    return -1 !== this._identifiers.indexOf(e);
                },
                },
                {
                key: "create",
                value: function (e) {
                    if (!this.exists(e))
                    throw new Error(
                        "Can't create '".concat(
                        e,
                        "', invokable has not been registered."
                        )
                    );
                    for (
                    var t = this._identifiers.indexOf(e),
                        n = this._invokables[t],
                        r = arguments.length,
                        i = new Array(r > 1 ? r - 1 : 0),
                        a = 1;
                    a < r;
                    a++
                    )
                    i[a - 1] = arguments[a];
                    return (
                    i.splice(0, 0, n), new (Function.prototype.bind.apply(n, i))()
                    );
                },
                },
            ],
            [{ key: "getInstance", value: function () {} }]
            ),
            e
        );
        })(),
        Mn = [].join,
        Tn = m != Object,
        Ln = Ye("join", ",");
    function Pn(e, t) {
        return RegExp(e, t);
    }
    Oe(
        { target: "Array", proto: !0, forced: Tn || !Ln },
        {
        join: function (e) {
            return Mn.call(k(this), void 0 === e ? "," : e);
        },
        }
    );
    var Bn = {
        UNSUPPORTED_Y: l(function () {
            var e = Pn("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
        }),
        BROKEN_CARET: l(function () {
            var e = Pn("^r", "gy");
            return (e.lastIndex = 2), null != e.exec("str");
        }),
        },
        On = RegExp.prototype.exec,
        Rn = String.prototype.replace,
        zn = On,
        Nn = (function () {
        var e = /a/,
            t = /b*/g;
        return (
            On.call(e, "a"), On.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        );
        })(),
        Fn = Bn.UNSUPPORTED_Y || Bn.BROKEN_CARET,
        Dn = void 0 !== /()??/.exec("")[1];
    (Nn || Dn || Fn) &&
        (zn = function (e) {
        var t,
            n,
            r,
            i,
            a = this,
            o = Fn && a.sticky,
            s = dn.call(a),
            l = a.source,
            u = 0,
            c = e;
        return (
            o &&
            (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
            (c = String(e).slice(a.lastIndex)),
            a.lastIndex > 0 &&
                (!a.multiline || (a.multiline && "\n" !== e[a.lastIndex - 1])) &&
                ((l = "(?: " + l + ")"), (c = " " + c), u++),
            (n = new RegExp("^(?:" + l + ")", s))),
            Dn && (n = new RegExp("^" + l + "$(?!\\s)", s)),
            Nn && (t = a.lastIndex),
            (r = On.call(o ? n : a, c)),
            o
            ? r
                ? ((r.input = r.input.slice(u)),
                (r[0] = r[0].slice(u)),
                (r.index = a.lastIndex),
                (a.lastIndex += r[0].length))
                : (a.lastIndex = 0)
            : Nn && r && (a.lastIndex = a.global ? r.index + r[0].length : t),
            Dn &&
            r &&
            r.length > 1 &&
            Rn.call(r[0], n, function () {
                for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
            r
        );
        });
    var jn = zn;
    Oe({ target: "RegExp", proto: !0, forced: /./.exec !== jn }, { exec: jn });
    var $n = We("species"),
        qn = !l(function () {
        var e = /./;
        return (
            (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
            }),
            "7" !== "".replace(e, "$<a>")
        );
        }),
        Un = "$0" === "a".replace(/./, "$0"),
        Wn = We("replace"),
        Gn = !!/./[Wn] && "" === /./[Wn]("a", "$0"),
        Hn = !l(function () {
        var e = /(?:)/,
            t = e.exec;
        e.exec = function () {
            return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
        }),
        Kn = function (e, t, n, r) {
        var i = We(e),
            a = !l(function () {
            var t = {};
            return (
                (t[i] = function () {
                return 7;
                }),
                7 != ""[e](t)
            );
            }),
            o =
            a &&
            !l(function () {
                var t = !1,
                n = /a/;
                return (
                "split" === e &&
                    (((n = {}).constructor = {}),
                    (n.constructor[$n] = function () {
                    return n;
                    }),
                    (n.flags = ""),
                    (n[i] = /./[i])),
                (n.exec = function () {
                    return (t = !0), null;
                }),
                n[i](""),
                !t
                );
            });
        if (
            !a ||
            !o ||
            ("replace" === e && (!qn || !Un || Gn)) ||
            ("split" === e && !Hn)
        ) {
            var s = /./[i],
            u = n(
                i,
                ""[e],
                function (e, t, n, r, i) {
                return t.exec === jn
                    ? a && !i
                    ? { done: !0, value: s.call(t, n, r) }
                    : { done: !0, value: e.call(n, t, r) }
                    : { done: !1 };
                },
                {
                REPLACE_KEEPS_$0: Un,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Gn,
                }
            ),
            c = u[0],
            h = u[1];
            ae(String.prototype, e, c),
            ae(
                RegExp.prototype,
                i,
                2 == t
                ? function (e, t) {
                    return h.call(e, this, t);
                    }
                : function (e) {
                    return h.call(e, this);
                    }
            );
        }
        r && B(RegExp.prototype[i], "sham", !0);
        },
        Xn = We("match"),
        Zn = function (e) {
        var t;
        return w(e) && (void 0 !== (t = e[Xn]) ? !!t : "RegExp" == p(e));
        },
        Yn = We("species"),
        Jn = function (e, t) {
        var n,
            r = T(e).constructor;
        return void 0 === r || null == (n = T(r)[Yn]) ? t : Re(n);
        },
        Qn = function (e) {
        return function (t, n) {
            var r,
            i,
            a = String(b(t)),
            o = he(n),
            s = a.length;
            return o < 0 || o >= s
            ? e
                ? ""
                : void 0
            : (r = a.charCodeAt(o)) < 55296 ||
                r > 56319 ||
                o + 1 === s ||
                (i = a.charCodeAt(o + 1)) < 56320 ||
                i > 57343
            ? e
                ? a.charAt(o)
                : r
            : e
            ? a.slice(o, o + 2)
            : i - 56320 + ((r - 55296) << 10) + 65536;
        };
        },
        er = { codeAt: Qn(!1), charAt: Qn(!0) },
        tr = er.charAt,
        nr = function (e, t, n) {
        return t + (n ? tr(e, t).length : 1);
        },
        rr = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var r = n.call(e, t);
            if ("object" != typeof r)
            throw TypeError(
                "RegExp exec method returned something other than an Object or null"
            );
            return r;
        }
        if ("RegExp" !== p(e))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return jn.call(e, t);
        },
        ir = [].push,
        ar = Math.min,
        or = 4294967295,
        sr = !l(function () {
        return !RegExp(or, "y");
        });
    Kn(
        "split",
        2,
        function (e, t, n) {
        var r;
        return (
            (r =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
                ? function (e, n) {
                    var r = String(b(this)),
                    i = void 0 === n ? or : n >>> 0;
                    if (0 === i) return [];
                    if (void 0 === e) return [r];
                    if (!Zn(e)) return t.call(r, e, i);
                    for (
                    var a,
                        o,
                        s,
                        l = [],
                        u =
                        (e.ignoreCase ? "i" : "") +
                        (e.multiline ? "m" : "") +
                        (e.unicode ? "u" : "") +
                        (e.sticky ? "y" : ""),
                        c = 0,
                        h = new RegExp(e.source, u + "g");
                    (a = jn.call(h, r)) &&
                    !(
                        (o = h.lastIndex) > c &&
                        (l.push(r.slice(c, a.index)),
                        a.length > 1 &&
                        a.index < r.length &&
                        ir.apply(l, a.slice(1)),
                        (s = a[0].length),
                        (c = o),
                        l.length >= i)
                    );

                    )
                    h.lastIndex === a.index && h.lastIndex++;
                    return (
                    c === r.length
                        ? (!s && h.test("")) || l.push("")
                        : l.push(r.slice(c)),
                    l.length > i ? l.slice(0, i) : l
                    );
                }
                : "0".split(void 0, 0).length
                ? function (e, n) {
                    return void 0 === e && 0 === n ? [] : t.call(this, e, n);
                }
                : t),
            [
            function (t, n) {
                var i = b(this),
                a = null == t ? void 0 : t[e];
                return void 0 !== a ? a.call(t, i, n) : r.call(String(i), t, n);
            },
            function (e, i) {
                var a = n(r, e, this, i, r !== t);
                if (a.done) return a.value;
                var o = T(e),
                s = String(this),
                l = Jn(o, RegExp),
                u = o.unicode,
                c =
                    (o.ignoreCase ? "i" : "") +
                    (o.multiline ? "m" : "") +
                    (o.unicode ? "u" : "") +
                    (sr ? "y" : "g"),
                h = new l(sr ? o : "^(?:" + o.source + ")", c),
                d = void 0 === i ? or : i >>> 0;
                if (0 === d) return [];
                if (0 === s.length) return null === rr(h, s) ? [s] : [];
                for (var f = 0, g = 0, p = []; g < s.length; ) {
                h.lastIndex = sr ? g : 0;
                var v,
                    y = rr(h, sr ? s : s.slice(g));
                if (
                    null === y ||
                    (v = ar(fe(h.lastIndex + (sr ? 0 : g)), s.length)) === f
                )
                    g = nr(s, g, u);
                else {
                    if ((p.push(s.slice(f, g)), p.length === d)) return p;
                    for (var m = 1; m <= y.length - 1; m++)
                    if ((p.push(y[m]), p.length === d)) return p;
                    g = f = v;
                }
                }
                return p.push(s.slice(f)), p;
            },
            ]
        );
        },
        !sr
    );
    var lr,
        ur = u
        ? Object.defineProperties
        : function (e, t) {
            T(e);
            for (var n, r = ot(t), i = r.length, a = 0; i > a; )
                P.f(e, (n = r[a++]), t[n]);
            return e;
            },
        cr = le("document", "documentElement"),
        hr = Z("IE_PROTO"),
        dr = function () {},
        fr = function (e) {
        return "<script>" + e + "</" + "script>";
        },
        gr = function () {
        try {
            lr = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        gr = lr
            ? (function (e) {
                e.write(fr("")), e.close();
                var t = e.parentWindow.Object;
                return (e = null), t;
            })(lr)
            : (((t = V("iframe")).style.display = "none"),
            cr.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(fr("document.F=Object")),
            e.close(),
            e.F);
        for (var n = we.length; n--; ) delete gr.prototype[we[n]];
        return gr();
        };
    Y[hr] = !0;
    var pr =
        Object.create ||
        function (e, t) {
            var n;
            return (
            null !== e
                ? ((dr.prototype = T(e)),
                (n = new dr()),
                (dr.prototype = null),
                (n[hr] = e))
                : (n = gr()),
            void 0 === t ? n : ur(n, t)
            );
        },
        vr = Se.f,
        yr = {}.toString,
        mr =
        "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        br = {
        f: function (e) {
            return mr && "[object Window]" == yr.call(e)
            ? (function (e) {
                try {
                    return vr(e);
                } catch (e) {
                    return mr.slice();
                }
                })(e)
            : vr(k(e));
        },
        },
        kr = { f: We },
        wr = P.f,
        _r = function (e) {
        var t = oe.Symbol || (oe.Symbol = {});
        x(t, e) || wr(t, e, { value: kr.f(e) });
        },
        Sr = P.f,
        xr = We("toStringTag"),
        Ir = function (e, t, n) {
        e &&
            !x((e = n ? e : e.prototype), xr) &&
            Sr(e, xr, { configurable: !0, value: t });
        },
        Cr = Ze.forEach,
        Vr = Z("hidden"),
        Er = "Symbol",
        Ar = We("toPrimitive"),
        Mr = ie.set,
        Tr = ie.getterFor(Er),
        Lr = Object.prototype,
        Pr = s.Symbol,
        Br = le("JSON", "stringify"),
        Or = M.f,
        Rr = P.f,
        zr = br.f,
        Nr = d.f,
        Fr = W("symbols"),
        Dr = W("op-symbols"),
        jr = W("string-to-symbol-registry"),
        $r = W("symbol-to-string-registry"),
        qr = W("wks"),
        Ur = s.QObject,
        Wr = !Ur || !Ur.prototype || !Ur.prototype.findChild,
        Gr =
        u &&
        l(function () {
            return (
            7 !=
            pr(
                Rr({}, "a", {
                get: function () {
                    return Rr(this, "a", { value: 7 }).a;
                },
                })
            ).a
            );
        })
            ? function (e, t, n) {
                var r = Or(Lr, t);
                r && delete Lr[t], Rr(e, t, n), r && e !== Lr && Rr(Lr, t, r);
            }
            : Rr,
        Hr = function (e, t) {
        var n = (Fr[e] = pr(Pr.prototype));
        return (
            Mr(n, { type: Er, tag: e, description: t }), u || (n.description = t), n
        );
        },
        Kr = je
        ? function (e) {
            return "symbol" == typeof e;
            }
        : function (e) {
            return Object(e) instanceof Pr;
            },
        Xr = function (e, t, n) {
        e === Lr && Xr(Dr, t, n), T(e);
        var r = _(t, !0);
        return (
            T(n),
            x(Fr, r)
            ? (n.enumerable
                ? (x(e, Vr) && e[Vr][r] && (e[Vr][r] = !1),
                    (n = pr(n, { enumerable: f(0, !1) })))
                : (x(e, Vr) || Rr(e, Vr, f(1, {})), (e[Vr][r] = !0)),
                Gr(e, r, n))
            : Rr(e, r, n)
        );
        },
        Zr = function (e, t) {
        T(e);
        var n = k(t),
            r = ot(n).concat(ei(n));
        return (
            Cr(r, function (t) {
            (u && !Yr.call(n, t)) || Xr(e, t, n[t]);
            }),
            e
        );
        },
        Yr = function (e) {
        var t = _(e, !0),
            n = Nr.call(this, t);
        return (
            !(this === Lr && x(Fr, t) && !x(Dr, t)) &&
            (!(n || !x(this, t) || !x(Fr, t) || (x(this, Vr) && this[Vr][t])) || n)
        );
        },
        Jr = function (e, t) {
        var n = k(e),
            r = _(t, !0);
        if (n !== Lr || !x(Fr, r) || x(Dr, r)) {
            var i = Or(n, r);
            return (
            !i || !x(Fr, r) || (x(n, Vr) && n[Vr][r]) || (i.enumerable = !0), i
            );
        }
        },
        Qr = function (e) {
        var t = zr(k(e)),
            n = [];
        return (
            Cr(t, function (e) {
            x(Fr, e) || x(Y, e) || n.push(e);
            }),
            n
        );
        },
        ei = function (e) {
        var t = e === Lr,
            n = zr(t ? Dr : k(e)),
            r = [];
        return (
            Cr(n, function (e) {
            !x(Fr, e) || (t && !x(Lr, e)) || r.push(Fr[e]);
            }),
            r
        );
        };
    if (
        (De ||
        (ae(
            (Pr = function () {
            if (this instanceof Pr)
                throw TypeError("Symbol is not a constructor");
            var e =
                arguments.length && void 0 !== arguments[0]
                    ? String(arguments[0])
                    : void 0,
                t = K(e),
                n = function (e) {
                this === Lr && n.call(Dr, e),
                    x(this, Vr) && x(this[Vr], t) && (this[Vr][t] = !1),
                    Gr(this, t, f(1, e));
                };
            return u && Wr && Gr(Lr, t, { configurable: !0, set: n }), Hr(t, e);
            }).prototype,
            "toString",
            function () {
            return Tr(this).tag;
            }
        ),
        ae(Pr, "withoutSetter", function (e) {
            return Hr(K(e), e);
        }),
        (d.f = Yr),
        (P.f = Xr),
        (M.f = Jr),
        (Se.f = br.f = Qr),
        (xe.f = ei),
        (kr.f = function (e) {
            return Hr(We(e), e);
        }),
        u &&
            (Rr(Pr.prototype, "description", {
            configurable: !0,
            get: function () {
                return Tr(this).description;
            },
            }),
            ae(Lr, "propertyIsEnumerable", Yr, { unsafe: !0 }))),
        Oe({ global: !0, wrap: !0, forced: !De, sham: !De }, { Symbol: Pr }),
        Cr(ot(qr), function (e) {
        _r(e);
        }),
        Oe(
        { target: Er, stat: !0, forced: !De },
        {
            for: function (e) {
            var t = String(e);
            if (x(jr, t)) return jr[t];
            var n = Pr(t);
            return (jr[t] = n), ($r[n] = t), n;
            },
            keyFor: function (e) {
            if (!Kr(e)) throw TypeError(e + " is not a symbol");
            if (x($r, e)) return $r[e];
            },
            useSetter: function () {
            Wr = !0;
            },
            useSimple: function () {
            Wr = !1;
            },
        }
        ),
        Oe(
        { target: "Object", stat: !0, forced: !De, sham: !u },
        {
            create: function (e, t) {
            return void 0 === t ? pr(e) : Zr(pr(e), t);
            },
            defineProperty: Xr,
            defineProperties: Zr,
            getOwnPropertyDescriptor: Jr,
        }
        ),
        Oe(
        { target: "Object", stat: !0, forced: !De },
        { getOwnPropertyNames: Qr, getOwnPropertySymbols: ei }
        ),
        Oe(
        {
            target: "Object",
            stat: !0,
            forced: l(function () {
            xe.f(1);
            }),
        },
        {
            getOwnPropertySymbols: function (e) {
            return xe.f(Ne(e));
            },
        }
        ),
        Br)
    ) {
        var ti =
        !De ||
        l(function () {
            var e = Pr();
            return (
            "[null]" != Br([e]) || "{}" != Br({ a: e }) || "{}" != Br(Object(e))
            );
        });
        Oe(
        { target: "JSON", stat: !0, forced: ti },
        {
            stringify: function (e, t, n) {
            for (var r, i = [e], a = 1; arguments.length > a; )
                i.push(arguments[a++]);
            if (((r = t), (w(t) || void 0 !== e) && !Kr(e)))
                return (
                Fe(t) ||
                    (t = function (e, t) {
                    if (
                        ("function" == typeof r && (t = r.call(this, e, t)), !Kr(t))
                    )
                        return t;
                    }),
                (i[1] = t),
                Br.apply(null, i)
                );
            },
        }
        );
    }
    Pr.prototype[Ar] || B(Pr.prototype, Ar, Pr.prototype.valueOf),
        Ir(Pr, Er),
        (Y[Vr] = !0);
    var ni = P.f,
        ri = s.Symbol;
    if (
        u &&
        "function" == typeof ri &&
        (!("description" in ri.prototype) || void 0 !== ri().description)
    ) {
        var ii = {},
        ai = function () {
            var e =
                arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            t = this instanceof ai ? new ri(e) : void 0 === e ? ri() : ri(e);
            return "" === e && (ii[t] = !0), t;
        };
        Ce(ai, ri);
        var oi = (ai.prototype = ri.prototype);
        oi.constructor = ai;
        var si = oi.toString,
        li = "Symbol(test)" == String(ri("test")),
        ui = /^Symbol\((.*)\)[^)]+$/;
        ni(oi, "description", {
        configurable: !0,
        get: function () {
            var e = w(this) ? this.valueOf() : this,
            t = si.call(e);
            if (x(ii, e)) return "";
            var n = li ? t.slice(7, -1) : t.replace(ui, "$1");
            return "" === n ? void 0 : n;
        },
        }),
        Oe({ global: !0, forced: !0 }, { Symbol: ai });
    }
    _r("iterator");
    var ci = We("unscopables"),
        hi = Array.prototype;
    null == hi[ci] && P.f(hi, ci, { configurable: !0, value: pr(null) });
    var di,
        fi,
        gi,
        pi = function (e) {
        hi[ci][e] = !0;
        },
        vi = {},
        yi = !l(function () {
        function e() {}
        return (
            (e.prototype.constructor = null),
            Object.getPrototypeOf(new e()) !== e.prototype
        );
        }),
        mi = Z("IE_PROTO"),
        bi = Object.prototype,
        ki = yi
        ? Object.getPrototypeOf
        : function (e) {
            return (
                (e = Ne(e)),
                x(e, mi)
                ? e[mi]
                : "function" == typeof e.constructor && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? bi
                : null
            );
            },
        wi = We("iterator"),
        _i = !1;
    [].keys &&
        ("next" in (gi = [].keys())
        ? (fi = ki(ki(gi))) !== Object.prototype && (di = fi)
        : (_i = !0)),
        null == di && (di = {}),
        x(di, wi) ||
        B(di, wi, function () {
            return this;
        });
    var Si = { IteratorPrototype: di, BUGGY_SAFARI_ITERATORS: _i },
        xi = Si.IteratorPrototype,
        Ii = function () {
        return this;
        },
        Ci =
        Object.setPrototypeOf ||
        ("__proto__" in {}
            ? (function () {
                var e,
                t = !1,
                n = {};
                try {
                (e = Object.getOwnPropertyDescriptor(
                    Object.prototype,
                    "__proto__"
                ).set).call(n, []),
                    (t = n instanceof Array);
                } catch (e) {}
                return function (n, r) {
                return (
                    T(n),
                    (function (e) {
                    if (!w(e) && null !== e)
                        throw TypeError(
                        "Can't set " + String(e) + " as a prototype"
                        );
                    })(r),
                    t ? e.call(n, r) : (n.__proto__ = r),
                    n
                );
                };
            })()
            : void 0),
        Vi = Si.IteratorPrototype,
        Ei = Si.BUGGY_SAFARI_ITERATORS,
        Ai = We("iterator"),
        Mi = "keys",
        Ti = "values",
        Li = "entries",
        Pi = function () {
        return this;
        },
        Bi = function (e, t, n, r, i, a, o) {
        !(function (e, t, n) {
            var r = t + " Iterator";
            (e.prototype = pr(xi, { next: f(1, n) })), Ir(e, r, !1), (vi[r] = Ii);
        })(n, t, r);
        var s,
            l,
            u,
            c = function (e) {
            if (e === i && v) return v;
            if (!Ei && e in g) return g[e];
            switch (e) {
                case Mi:
                case Ti:
                case Li:
                return function () {
                    return new n(this, e);
                };
            }
            return function () {
                return new n(this);
            };
            },
            h = t + " Iterator",
            d = !1,
            g = e.prototype,
            p = g[Ai] || g["@@iterator"] || (i && g[i]),
            v = (!Ei && p) || c(i),
            y = ("Array" == t && g.entries) || p;
        if (
            (y &&
            ((s = ki(y.call(new e()))),
            Vi !== Object.prototype &&
                s.next &&
                (ki(s) !== Vi &&
                (Ci ? Ci(s, Vi) : "function" != typeof s[Ai] && B(s, Ai, Pi)),
                Ir(s, h, !0))),
            i == Ti &&
            p &&
            p.name !== Ti &&
            ((d = !0),
            (v = function () {
                return p.call(this);
            })),
            g[Ai] !== v && B(g, Ai, v),
            (vi[t] = v),
            i)
        )
            if (((l = { values: c(Ti), keys: a ? v : c(Mi), entries: c(Li) }), o))
            for (u in l) (Ei || d || !(u in g)) && ae(g, u, l[u]);
            else Oe({ target: t, proto: !0, forced: Ei || d }, l);
        return l;
        },
        Oi = "Array Iterator",
        Ri = ie.set,
        zi = ie.getterFor(Oi),
        Ni = Bi(
        Array,
        "Array",
        function (e, t) {
            Ri(this, { type: Oi, target: k(e), index: 0, kind: t });
        },
        function () {
            var e = zi(this),
            t = e.target,
            n = e.kind,
            r = e.index++;
            return !t || r >= t.length
            ? ((e.target = void 0), { value: void 0, done: !0 })
            : "keys" == n
            ? { value: r, done: !1 }
            : "values" == n
            ? { value: t[r], done: !1 }
            : { value: [r, t[r]], done: !1 };
        },
        "values"
        );
    (vi.Arguments = vi.Array), pi("keys"), pi("values"), pi("entries");
    var Fi = $t("slice"),
        Di = tt("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
        ji = We("species"),
        $i = [].slice,
        qi = Math.max;
    Oe(
        { target: "Array", proto: !0, forced: !Fi || !Di },
        {
        slice: function (e, t) {
            var n,
            r,
            i,
            a = k(this),
            o = fe(a.length),
            s = ve(e, o),
            l = ve(void 0 === t ? o : t, o);
            if (
            Fe(a) &&
            ("function" != typeof (n = a.constructor) ||
            (n !== Array && !Fe(n.prototype))
                ? w(n) && null === (n = n[ji]) && (n = void 0)
                : (n = void 0),
            n === Array || void 0 === n)
            )
            return $i.call(a, s, l);
            for (
            r = new (void 0 === n ? Array : n)(qi(l - s, 0)), i = 0;
            s < l;
            s++, i++
            )
            s in a && Yt(r, i, a[s]);
            return (r.length = i), r;
        },
        }
    );
    var Ui = er.charAt,
        Wi = "String Iterator",
        Gi = ie.set,
        Hi = ie.getterFor(Wi);
    Bi(
        String,
        "String",
        function (e) {
        Gi(this, { type: Wi, string: String(e), index: 0 });
        },
        function () {
        var e,
            t = Hi(this),
            n = t.string,
            r = t.index;
        return r >= n.length
            ? { value: void 0, done: !0 }
            : ((e = Ui(n, r)), (t.index += e.length), { value: e, done: !1 });
        }
    ),
        Kn("match", 1, function (e, t, n) {
        return [
            function (t) {
            var n = b(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
            },
            function (e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            var i = T(e),
                a = String(this);
            if (!i.global) return rr(i, a);
            var o = i.unicode;
            i.lastIndex = 0;
            for (var s, l = [], u = 0; null !== (s = rr(i, a)); ) {
                var c = String(s[0]);
                (l[u] = c),
                "" === c && (i.lastIndex = nr(a, fe(i.lastIndex), o)),
                u++;
            }
            return 0 === u ? null : l;
            },
        ];
        });
    var Ki = We("iterator"),
        Xi = !1;
    try {
        var Zi = 0,
        Yi = {
            next: function () {
            return { done: !!Zi++ };
            },
            return: function () {
            Xi = !0;
            },
        };
        (Yi[Ki] = function () {
        return this;
        }),
        Array.from(Yi, function () {
            throw 2;
        });
    } catch (e) {}
    var Ji,
        Qi = function (e, t) {
        if (!t && !Xi) return !1;
        var n = !1;
        try {
            var r = {};
            (r[Ki] = function () {
            return {
                next: function () {
                return { done: (n = !0) };
                },
            };
            }),
            e(r);
        } catch (e) {}
        return n;
        },
        ea = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
        ta = P.f,
        na = s.Int8Array,
        ra = na && na.prototype,
        ia = s.Uint8ClampedArray,
        aa = ia && ia.prototype,
        oa = na && ki(na),
        sa = ra && ki(ra),
        la = Object.prototype,
        ua = la.isPrototypeOf,
        ca = We("toStringTag"),
        ha = K("TYPED_ARRAY_TAG"),
        da = ea && !!Ci && "Opera" !== cn(s.opera),
        fa = !1,
        ga = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
        },
        pa = function (e) {
        return w(e) && x(ga, cn(e));
        };
    for (Ji in ga) s[Ji] || (da = !1);
    if (
        (!da || "function" != typeof oa || oa === Function.prototype) &&
        ((oa = function () {
        throw TypeError("Incorrect invocation");
        }),
        da)
    )
        for (Ji in ga) s[Ji] && Ci(s[Ji], oa);
    if ((!da || !sa || sa === la) && ((sa = oa.prototype), da))
        for (Ji in ga) s[Ji] && Ci(s[Ji].prototype, sa);
    if ((da && ki(aa) !== sa && Ci(aa, sa), u && !x(sa, ca)))
        for (Ji in ((fa = !0),
        ta(sa, ca, {
        get: function () {
            return w(this) ? this[ha] : void 0;
        },
        }),
        ga))
        s[Ji] && B(s[Ji], ha, Ji);
    var va = {
        NATIVE_ARRAY_BUFFER_VIEWS: da,
        TYPED_ARRAY_TAG: fa && ha,
        aTypedArray: function (e) {
            if (pa(e)) return e;
            throw TypeError("Target is not a typed array");
        },
        aTypedArrayConstructor: function (e) {
            if (Ci) {
            if (ua.call(oa, e)) return e;
            } else
            for (var t in ga)
                if (x(ga, Ji)) {
                var n = s[t];
                if (n && (e === n || ua.call(n, e))) return e;
                }
            throw TypeError("Target is not a typed array constructor");
        },
        exportTypedArrayMethod: function (e, t, n) {
            if (u) {
            if (n)
                for (var r in ga) {
                var i = s[r];
                i && x(i.prototype, e) && delete i.prototype[e];
                }
            (sa[e] && !n) || ae(sa, e, n ? t : (da && ra[e]) || t);
            }
        },
        exportTypedArrayStaticMethod: function (e, t, n) {
            var r, i;
            if (u) {
            if (Ci) {
                if (n) for (r in ga) (i = s[r]) && x(i, e) && delete i[e];
                if (oa[e] && !n) return;
                try {
                return ae(oa, e, n ? t : (da && na[e]) || t);
                } catch (e) {}
            }
            for (r in ga) !(i = s[r]) || (i[e] && !n) || ae(i, e, t);
            }
        },
        isView: function (e) {
            var t = cn(e);
            return "DataView" === t || x(ga, t);
        },
        isTypedArray: pa,
        TypedArray: oa,
        TypedArrayPrototype: sa,
        },
        ya = va.NATIVE_ARRAY_BUFFER_VIEWS,
        ma = s.ArrayBuffer,
        ba = s.Int8Array,
        ka =
        !ya ||
        !l(function () {
            ba(1);
        }) ||
        !l(function () {
            new ba(-1);
        }) ||
        !Qi(function (e) {
            new ba(), new ba(null), new ba(1.5), new ba(e);
        }, !0) ||
        l(function () {
            return 1 !== new ba(new ma(2), 1, void 0).length;
        }),
        wa = function (e, t, n) {
        for (var r in t) ae(e, r, t[r], n);
        return e;
        },
        _a = function (e, t, n) {
        if (!(e instanceof t))
            throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
        },
        Sa = function (e) {
        if (void 0 === e) return 0;
        var t = he(e),
            n = fe(t);
        if (t !== n) throw RangeError("Wrong length or index");
        return n;
        },
        xa = 1 / 0,
        Ia = Math.abs,
        Ca = Math.pow,
        Va = Math.floor,
        Ea = Math.log,
        Aa = Math.LN2,
        Ma = function (e, t, n) {
        var r,
            i,
            a,
            o = new Array(n),
            s = 8 * n - t - 1,
            l = (1 << s) - 1,
            u = l >> 1,
            c = 23 === t ? Ca(2, -24) - Ca(2, -77) : 0,
            h = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
            d = 0;
        for (
            (e = Ia(e)) != e || e === xa
            ? ((i = e != e ? 1 : 0), (r = l))
            : ((r = Va(Ea(e) / Aa)),
                e * (a = Ca(2, -r)) < 1 && (r--, (a *= 2)),
                (e += r + u >= 1 ? c / a : c * Ca(2, 1 - u)) * a >= 2 &&
                (r++, (a /= 2)),
                r + u >= l
                ? ((i = 0), (r = l))
                : r + u >= 1
                ? ((i = (e * a - 1) * Ca(2, t)), (r += u))
                : ((i = e * Ca(2, u - 1) * Ca(2, t)), (r = 0)));
            t >= 8;
            o[d++] = 255 & i, i /= 256, t -= 8
        );
        for (r = (r << t) | i, s += t; s > 0; o[d++] = 255 & r, r /= 256, s -= 8);
        return (o[--d] |= 128 * h), o;
        },
        Ta = function (e, t) {
        var n,
            r = e.length,
            i = 8 * r - t - 1,
            a = (1 << i) - 1,
            o = a >> 1,
            s = i - 7,
            l = r - 1,
            u = e[l--],
            c = 127 & u;
        for (u >>= 7; s > 0; c = 256 * c + e[l], l--, s -= 8);
        for (
            n = c & ((1 << -s) - 1), c >>= -s, s += t;
            s > 0;
            n = 256 * n + e[l], l--, s -= 8
        );
        if (0 === c) c = 1 - o;
        else {
            if (c === a) return n ? NaN : u ? -1 / 0 : xa;
            (n += Ca(2, t)), (c -= o);
        }
        return (u ? -1 : 1) * n * Ca(2, c - t);
        },
        La = function (e) {
        for (
            var t = Ne(this),
            n = fe(t.length),
            r = arguments.length,
            i = ve(r > 1 ? arguments[1] : void 0, n),
            a = r > 2 ? arguments[2] : void 0,
            o = void 0 === a ? n : ve(a, n);
            o > i;

        )
            t[i++] = e;
        return t;
        },
        Pa = Se.f,
        Ba = P.f,
        Oa = ie.get,
        Ra = ie.set,
        za = "ArrayBuffer",
        Na = "DataView",
        Fa = "Wrong index",
        Da = s.ArrayBuffer,
        ja = Da,
        $a = s.DataView,
        qa = $a && $a.prototype,
        Ua = Object.prototype,
        Wa = s.RangeError,
        Ga = Ma,
        Ha = Ta,
        Ka = function (e) {
        return [255 & e];
        },
        Xa = function (e) {
        return [255 & e, (e >> 8) & 255];
        },
        Za = function (e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
        },
        Ya = function (e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
        },
        Ja = function (e) {
        return Ga(e, 23, 4);
        },
        Qa = function (e) {
        return Ga(e, 52, 8);
        },
        eo = function (e, t) {
        Ba(e.prototype, t, {
            get: function () {
            return Oa(this)[t];
            },
        });
        },
        to = function (e, t, n, r) {
        var i = Sa(n),
            a = Oa(e);
        if (i + t > a.byteLength) throw Wa(Fa);
        var o = Oa(a.buffer).bytes,
            s = i + a.byteOffset,
            l = o.slice(s, s + t);
        return r ? l : l.reverse();
        },
        no = function (e, t, n, r, i, a) {
        var o = Sa(n),
            s = Oa(e);
        if (o + t > s.byteLength) throw Wa(Fa);
        for (
            var l = Oa(s.buffer).bytes, u = o + s.byteOffset, c = r(+i), h = 0;
            h < t;
            h++
        )
            l[u + h] = c[a ? h : t - h - 1];
        };
    if (ea) {
        if (
        !l(function () {
            Da(1);
        }) ||
        !l(function () {
            new Da(-1);
        }) ||
        l(function () {
            return new Da(), new Da(1.5), new Da(NaN), Da.name != za;
        })
        ) {
        for (
            var ro,
            io = ((ja = function (e) {
                return _a(this, ja), new Da(Sa(e));
            }).prototype = Da.prototype),
            ao = Pa(Da),
            oo = 0;
            ao.length > oo;

        )
            (ro = ao[oo++]) in ja || B(ja, ro, Da[ro]);
        io.constructor = ja;
        }
        Ci && ki(qa) !== Ua && Ci(qa, Ua);
        var so = new $a(new ja(2)),
        lo = qa.setInt8;
        so.setInt8(0, 2147483648),
        so.setInt8(1, 2147483649),
        (!so.getInt8(0) && so.getInt8(1)) ||
            wa(
            qa,
            {
                setInt8: function (e, t) {
                lo.call(this, e, (t << 24) >> 24);
                },
                setUint8: function (e, t) {
                lo.call(this, e, (t << 24) >> 24);
                },
            },
            { unsafe: !0 }
            );
    } else
        (ja = function (e) {
        _a(this, ja, za);
        var t = Sa(e);
        Ra(this, { bytes: La.call(new Array(t), 0), byteLength: t }),
            u || (this.byteLength = t);
        }),
        ($a = function (e, t, n) {
            _a(this, $a, Na), _a(e, ja, Na);
            var r = Oa(e).byteLength,
            i = he(t);
            if (i < 0 || i > r) throw Wa("Wrong offset");
            if (i + (n = void 0 === n ? r - i : fe(n)) > r)
            throw Wa("Wrong length");
            Ra(this, { buffer: e, byteLength: n, byteOffset: i }),
            u ||
                ((this.buffer = e), (this.byteLength = n), (this.byteOffset = i));
        }),
        u &&
            (eo(ja, "byteLength"),
            eo($a, "buffer"),
            eo($a, "byteLength"),
            eo($a, "byteOffset")),
        wa($a.prototype, {
            getInt8: function (e) {
            return (to(this, 1, e)[0] << 24) >> 24;
            },
            getUint8: function (e) {
            return to(this, 1, e)[0];
            },
            getInt16: function (e) {
            var t = to(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
            return (((t[1] << 8) | t[0]) << 16) >> 16;
            },
            getUint16: function (e) {
            var t = to(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
            return (t[1] << 8) | t[0];
            },
            getInt32: function (e) {
            return Ya(
                to(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
            );
            },
            getUint32: function (e) {
            return (
                Ya(to(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>>
                0
            );
            },
            getFloat32: function (e) {
            return Ha(
                to(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
                23
            );
            },
            getFloat64: function (e) {
            return Ha(
                to(this, 8, e, arguments.length > 1 ? arguments[1] : void 0),
                52
            );
            },
            setInt8: function (e, t) {
            no(this, 1, e, Ka, t);
            },
            setUint8: function (e, t) {
            no(this, 1, e, Ka, t);
            },
            setInt16: function (e, t) {
            no(this, 2, e, Xa, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setUint16: function (e, t) {
            no(this, 2, e, Xa, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setInt32: function (e, t) {
            no(this, 4, e, Za, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setUint32: function (e, t) {
            no(this, 4, e, Za, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setFloat32: function (e, t) {
            no(this, 4, e, Ja, t, arguments.length > 2 ? arguments[2] : void 0);
            },
            setFloat64: function (e, t) {
            no(this, 8, e, Qa, t, arguments.length > 2 ? arguments[2] : void 0);
            },
        });
    Ir(ja, za), Ir($a, Na);
    var uo = { ArrayBuffer: ja, DataView: $a },
        co = function (e, t) {
        var n = (function (e) {
            var t = he(e);
            if (t < 0) throw RangeError("The argument can't be less than 0");
            return t;
        })(e);
        if (n % t) throw RangeError("Wrong offset");
        return n;
        },
        ho = We("iterator"),
        fo = function (e) {
        if (null != e) return e[ho] || e["@@iterator"] || vi[cn(e)];
        },
        go = We("iterator"),
        po = Array.prototype,
        vo = function (e) {
        return void 0 !== e && (vi.Array === e || po[go] === e);
        },
        yo = va.aTypedArrayConstructor,
        mo = function (e) {
        var t,
            n,
            r,
            i,
            a,
            o,
            s = Ne(e),
            l = arguments.length,
            u = l > 1 ? arguments[1] : void 0,
            c = void 0 !== u,
            h = fo(s);
        if (null != h && !vo(h))
            for (o = (a = h.call(s)).next, s = []; !(i = o.call(a)).done; )
            s.push(i.value);
        for (
            c && l > 2 && (u = ze(u, arguments[2], 2)),
            n = fe(s.length),
            r = new (yo(this))(n),
            t = 0;
            n > t;
            t++
        )
            r[t] = c ? u(s[t], t) : s[t];
        return r;
        },
        bo = We("species"),
        ko = function (e) {
        var t = le(e),
            n = P.f;
        u &&
            t &&
            !t[bo] &&
            n(t, bo, {
            configurable: !0,
            get: function () {
                return this;
            },
            });
        },
        wo = function (e, t, n) {
        var r, i;
        return (
            Ci &&
            "function" == typeof (r = t.constructor) &&
            r !== n &&
            w((i = r.prototype)) &&
            i !== n.prototype &&
            Ci(e, i),
            e
        );
        },
        _o = a(function (e) {
        var t = Se.f,
            n = Ze.forEach,
            r = ie.get,
            i = ie.set,
            a = P.f,
            o = M.f,
            l = Math.round,
            c = s.RangeError,
            h = uo.ArrayBuffer,
            d = uo.DataView,
            g = va.NATIVE_ARRAY_BUFFER_VIEWS,
            p = va.TYPED_ARRAY_TAG,
            v = va.TypedArray,
            y = va.TypedArrayPrototype,
            m = va.aTypedArrayConstructor,
            b = va.isTypedArray,
            k = "BYTES_PER_ELEMENT",
            S = "Wrong length",
            I = function (e, t) {
            for (var n = 0, r = t.length, i = new (m(e))(r); r > n; )
                i[n] = t[n++];
            return i;
            },
            C = function (e, t) {
            a(e, t, {
                get: function () {
                return r(this)[t];
                },
            });
            },
            V = function (e) {
            var t;
            return (
                e instanceof h ||
                "ArrayBuffer" == (t = cn(e)) ||
                "SharedArrayBuffer" == t
            );
            },
            E = function (e, t) {
            return (
                b(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
            );
            },
            A = function (e, t) {
            return E(e, (t = _(t, !0))) ? f(2, e[t]) : o(e, t);
            },
            T = function (e, t, n) {
            return !(E(e, (t = _(t, !0))) && w(n) && x(n, "value")) ||
                x(n, "get") ||
                x(n, "set") ||
                n.configurable ||
                (x(n, "writable") && !n.writable) ||
                (x(n, "enumerable") && !n.enumerable)
                ? a(e, t, n)
                : ((e[t] = n.value), e);
            };
        u
            ? (g ||
                ((M.f = A),
                (P.f = T),
                C(y, "buffer"),
                C(y, "byteOffset"),
                C(y, "byteLength"),
                C(y, "length")),
            Oe(
                { target: "Object", stat: !0, forced: !g },
                { getOwnPropertyDescriptor: A, defineProperty: T }
            ),
            (e.exports = function (e, o, u) {
                var f = e.match(/\d+$/)[0] / 8,
                m = e + (u ? "Clamped" : "") + "Array",
                _ = "get" + e,
                x = "set" + e,
                C = s[m],
                E = C,
                A = E && E.prototype,
                M = {},
                T = function (e, t) {
                    a(e, t, {
                    get: function () {
                        return (function (e, t) {
                        var n = r(e);
                        return n.view[_](t * f + n.byteOffset, !0);
                        })(this, t);
                    },
                    set: function (e) {
                        return (function (e, t, n) {
                        var i = r(e);
                        u && (n = (n = l(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
                            i.view[x](t * f + i.byteOffset, n, !0);
                        })(this, t, e);
                    },
                    enumerable: !0,
                    });
                };
                g
                ? ka &&
                    ((E = o(function (e, t, n, r) {
                    return (
                        _a(e, E, m),
                        wo(
                        w(t)
                            ? V(t)
                            ? void 0 !== r
                                ? new C(t, co(n, f), r)
                                : void 0 !== n
                                ? new C(t, co(n, f))
                                : new C(t)
                            : b(t)
                            ? I(E, t)
                            : mo.call(E, t)
                            : new C(Sa(t)),
                        e,
                        E
                        )
                    );
                    })),
                    Ci && Ci(E, v),
                    n(t(C), function (e) {
                    e in E || B(E, e, C[e]);
                    }),
                    (E.prototype = A))
                : ((E = o(function (e, t, n, r) {
                    _a(e, E, m);
                    var a,
                        o,
                        s,
                        l = 0,
                        u = 0;
                    if (w(t)) {
                        if (!V(t)) return b(t) ? I(E, t) : mo.call(E, t);
                        (a = t), (u = co(n, f));
                        var g = t.byteLength;
                        if (void 0 === r) {
                        if (g % f) throw c(S);
                        if ((o = g - u) < 0) throw c(S);
                        } else if ((o = fe(r) * f) + u > g) throw c(S);
                        s = o / f;
                    } else (s = Sa(t)), (a = new h((o = s * f)));
                    for (
                        i(e, {
                        buffer: a,
                        byteOffset: u,
                        byteLength: o,
                        length: s,
                        view: new d(a),
                        });
                        l < s;

                    )
                        T(e, l++);
                    })),
                    Ci && Ci(E, v),
                    (A = E.prototype = pr(y))),
                A.constructor !== E && B(A, "constructor", E),
                p && B(A, p, m),
                (M[m] = E),
                Oe({ global: !0, forced: E != C, sham: !g }, M),
                k in E || B(E, k, f),
                k in A || B(A, k, f),
                ko(m);
            }))
            : (e.exports = function () {});
        });
    _o("Uint8", function (e) {
        return function (t, n, r) {
        return e(this, t, n, r);
        };
    });
    var So = Math.min,
        xo =
        [].copyWithin ||
        function (e, t) {
            var n = Ne(this),
            r = fe(n.length),
            i = ve(e, r),
            a = ve(t, r),
            o = arguments.length > 2 ? arguments[2] : void 0,
            s = So((void 0 === o ? r : ve(o, r)) - a, r - i),
            l = 1;
            for (
            a < i && i < a + s && ((l = -1), (a += s - 1), (i += s - 1));
            s-- > 0;

            )
            a in n ? (n[i] = n[a]) : delete n[i], (i += l), (a += l);
            return n;
        },
        Io = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("copyWithin", function (e, t) {
        return xo.call(
        Io(this),
        e,
        t,
        arguments.length > 2 ? arguments[2] : void 0
        );
    });
    var Co = Ze.every,
        Vo = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("every", function (e) {
        return Co(Vo(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
    var Eo = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("fill", function (e) {
        return La.apply(Eo(this), arguments);
    });
    var Ao = Ze.filter,
        Mo = va.aTypedArray,
        To = va.aTypedArrayConstructor;
    (0, va.exportTypedArrayMethod)("filter", function (e) {
        for (
        var t = Ao(Mo(this), e, arguments.length > 1 ? arguments[1] : void 0),
            n = Jn(this, this.constructor),
            r = 0,
            i = t.length,
            a = new (To(n))(i);
        i > r;

        )
        a[r] = t[r++];
        return a;
    });
    var Lo = Ze.find,
        Po = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("find", function (e) {
        return Lo(Po(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
    var Bo = Ze.findIndex,
        Oo = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("findIndex", function (e) {
        return Bo(Oo(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
    var Ro = Ze.forEach,
        zo = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("forEach", function (e) {
        Ro(zo(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
    var No = me.includes,
        Fo = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("includes", function (e) {
        return No(Fo(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
    var Do = me.indexOf,
        jo = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("indexOf", function (e) {
        return Do(jo(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
    var $o = We("iterator"),
        qo = s.Uint8Array,
        Uo = Ni.values,
        Wo = Ni.keys,
        Go = Ni.entries,
        Ho = va.aTypedArray,
        Ko = va.exportTypedArrayMethod,
        Xo = qo && qo.prototype[$o],
        Zo = !!Xo && ("values" == Xo.name || null == Xo.name),
        Yo = function () {
        return Uo.call(Ho(this));
        };
    Ko("entries", function () {
        return Go.call(Ho(this));
    }),
        Ko("keys", function () {
        return Wo.call(Ho(this));
        }),
        Ko("values", Yo, !Zo),
        Ko($o, Yo, !Zo);
    var Jo = va.aTypedArray,
        Qo = [].join;
    (0, va.exportTypedArrayMethod)("join", function (e) {
        return Qo.apply(Jo(this), arguments);
    });
    var es = Math.min,
        ts = [].lastIndexOf,
        ns = !!ts && 1 / [1].lastIndexOf(1, -0) < 0,
        rs = Ye("lastIndexOf"),
        is = tt("indexOf", { ACCESSORS: !0, 1: 0 }),
        as =
        ns || !rs || !is
            ? function (e) {
                if (ns) return ts.apply(this, arguments) || 0;
                var t = k(this),
                n = fe(t.length),
                r = n - 1;
                for (
                arguments.length > 1 && (r = es(r, he(arguments[1]))),
                    r < 0 && (r = n + r);
                r >= 0;
                r--
                )
                if (r in t && t[r] === e) return r || 0;
                return -1;
            }
            : ts,
        os = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("lastIndexOf", function (e) {
        return as.apply(os(this), arguments);
    });
    var ss = Ze.map,
        ls = va.aTypedArray,
        us = va.aTypedArrayConstructor;
    (0, va.exportTypedArrayMethod)("map", function (e) {
        return ss(
        ls(this),
        e,
        arguments.length > 1 ? arguments[1] : void 0,
        function (e, t) {
            return new (us(Jn(e, e.constructor)))(t);
        }
        );
    });
    var cs = function (e) {
        return function (t, n, r, i) {
            Re(n);
            var a = Ne(t),
            o = m(a),
            s = fe(a.length),
            l = e ? s - 1 : 0,
            u = e ? -1 : 1;
            if (r < 2)
            for (;;) {
                if (l in o) {
                (i = o[l]), (l += u);
                break;
                }
                if (((l += u), e ? l < 0 : s <= l))
                throw TypeError("Reduce of empty array with no initial value");
            }
            for (; e ? l >= 0 : s > l; l += u) l in o && (i = n(i, o[l], l, a));
            return i;
        };
        },
        hs = { left: cs(!1), right: cs(!0) },
        ds = hs.left,
        fs = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("reduce", function (e) {
        return ds(
        fs(this),
        e,
        arguments.length,
        arguments.length > 1 ? arguments[1] : void 0
        );
    });
    var gs = hs.right,
        ps = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("reduceRight", function (e) {
        return gs(
        ps(this),
        e,
        arguments.length,
        arguments.length > 1 ? arguments[1] : void 0
        );
    });
    var vs = va.aTypedArray,
        ys = va.exportTypedArrayMethod,
        ms = Math.floor;
    ys("reverse", function () {
        for (var e, t = this, n = vs(t).length, r = ms(n / 2), i = 0; i < r; )
        (e = t[i]), (t[i++] = t[--n]), (t[n] = e);
        return t;
    });
    var bs = va.aTypedArray;
    (0, va.exportTypedArrayMethod)(
        "set",
        function (e) {
        bs(this);
        var t = co(arguments.length > 1 ? arguments[1] : void 0, 1),
            n = this.length,
            r = Ne(e),
            i = fe(r.length),
            a = 0;
        if (i + t > n) throw RangeError("Wrong length");
        for (; a < i; ) this[t + a] = r[a++];
        },
        l(function () {
        new Int8Array(1).set({});
        })
    );
    var ks = va.aTypedArray,
        ws = va.aTypedArrayConstructor,
        _s = [].slice;
    (0, va.exportTypedArrayMethod)(
        "slice",
        function (e, t) {
        for (
            var n = _s.call(ks(this), e, t),
            r = Jn(this, this.constructor),
            i = 0,
            a = n.length,
            o = new (ws(r))(a);
            a > i;

        )
            o[i] = n[i++];
        return o;
        },
        l(function () {
        new Int8Array(1).slice();
        })
    );
    var Ss = Ze.some,
        xs = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("some", function (e) {
        return Ss(xs(this), e, arguments.length > 1 ? arguments[1] : void 0);
    });
    var Is = va.aTypedArray,
        Cs = [].sort;
    (0, va.exportTypedArrayMethod)("sort", function (e) {
        return Cs.call(Is(this), e);
    });
    var Vs = va.aTypedArray;
    (0, va.exportTypedArrayMethod)("subarray", function (e, t) {
        var n = Vs(this),
        r = n.length,
        i = ve(e, r);
        return new (Jn(n, n.constructor))(
        n.buffer,
        n.byteOffset + i * n.BYTES_PER_ELEMENT,
        fe((void 0 === t ? r : ve(t, r)) - i)
        );
    });
    var Es = s.Int8Array,
        As = va.aTypedArray,
        Ms = va.exportTypedArrayMethod,
        Ts = [].toLocaleString,
        Ls = [].slice,
        Ps =
        !!Es &&
        l(function () {
            Ts.call(new Es(1));
        });
    Ms(
        "toLocaleString",
        function () {
        return Ts.apply(Ps ? Ls.call(As(this)) : As(this), arguments);
        },
        l(function () {
        return [1, 2].toLocaleString() != new Es([1, 2]).toLocaleString();
        }) ||
        !l(function () {
            Es.prototype.toLocaleString.call([1, 2]);
        })
    );
    var Bs = va.exportTypedArrayMethod,
        Os = s.Uint8Array,
        Rs = (Os && Os.prototype) || {},
        zs = [].toString,
        Ns = [].join;
    l(function () {
        zs.call({});
    }) &&
        (zs = function () {
        return Ns.call(this);
        });
    var Fs = Rs.toString != zs;
    Bs("toString", zs, Fs);
    var Ds = We("iterator"),
        js = We("toStringTag"),
        $s = Ni.values;
    for (var qs in ct) {
        var Us = s[qs],
        Ws = Us && Us.prototype;
        if (Ws) {
        if (Ws[Ds] !== $s)
            try {
            B(Ws, Ds, $s);
            } catch (e) {
            Ws[Ds] = $s;
            }
        if ((Ws[js] || B(Ws, js, qs), ct[qs]))
            for (var Gs in Ni)
            if (Ws[Gs] !== Ni[Gs])
                try {
                B(Ws, Gs, Ni[Gs]);
                } catch (e) {
                Ws[Gs] = Ni[Gs];
                }
        }
    }
    var Hs = We("isConcatSpreadable"),
        Ks = 9007199254740991,
        Xs = "Maximum allowed index exceeded",
        Zs =
        Dt >= 51 ||
        !l(function () {
            var e = [];
            return (e[Hs] = !1), e.concat()[0] !== e;
        }),
        Ys = $t("concat"),
        Js = function (e) {
        if (!w(e)) return !1;
        var t = e[Hs];
        return void 0 !== t ? !!t : Fe(e);
        };
    Oe(
        { target: "Array", proto: !0, forced: !Zs || !Ys },
        {
        concat: function (e) {
            var t,
            n,
            r,
            i,
            a,
            o = Ne(this),
            s = He(o, 0),
            l = 0;
            for (t = -1, r = arguments.length; t < r; t++)
            if (Js((a = -1 === t ? o : arguments[t]))) {
                if (l + (i = fe(a.length)) > Ks) throw TypeError(Xs);
                for (n = 0; n < i; n++, l++) n in a && Yt(s, l, a[n]);
            } else {
                if (l >= Ks) throw TypeError(Xs);
                Yt(s, l++, a);
            }
            return (s.length = l), s;
        },
        }
    ),
        Oe({ target: "Array", proto: !0 }, { fill: La }),
        pi("fill");
    var Qs = Ze.findIndex,
        el = "findIndex",
        tl = !0,
        nl = tt(el);
    el in [] &&
        Array(1).findIndex(function () {
        tl = !1;
        }),
        Oe(
        { target: "Array", proto: !0, forced: tl || !nl },
        {
            findIndex: function (e) {
            return Qs(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }
        ),
        pi(el),
        _o("Uint32", function (e) {
        return function (t, n, r) {
            return e(this, t, n, r);
        };
        });
    var rl = null,
        il = (function () {
        function e() {
            var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            yt(this, e),
            (this._seed = t),
            (this._crypto =
                ("undefined" != typeof window &&
                (window.crypto || window.msCrypto)) ||
                null);
        }
        return (
            bt(
            e,
            [
                {
                key: "next",
                value: function () {
                    if (this._crypto) {
                    var e = new Uint32Array(1);
                    return this._crypto.getRandomValues(e), e / 4294967296;
                    }
                    return Math.random();
                },
                },
                {
                key: "nextFloat",
                value: function (e, t) {
                    return this.next() * (t - e) + e;
                },
                },
                {
                key: "nextInteger",
                value: function (e, t) {
                    return Math.floor(this.next() * (t - e + 1)) + e;
                },
                },
                {
                key: "nextBytes",
                value: function (e) {
                    var t = new Uint8Array(e);
                    if (this._crypto) this._crypto.getRandomValues(t);
                    else
                    for (var n = 0; n < e; n++) t[n] = this.nextInteger(0, 255);
                    return t;
                },
                },
                {
                key: "nextBoolean",
                value: function () {
                    return this.next() >= 0.5;
                },
                },
                {
                key: "nextChoice",
                value: function (e) {
                    return e[this.nextInteger(0, e.length - 1)];
                },
                },
            ],
            [
                {
                key: "getInstance",
                value: function () {
                    return null === rl && (rl = new e()), rl;
                },
                },
            ]
            ),
            e
        );
        })(),
        al = (function () {
        function e() {
            yt(this, e);
        }
        return (
            bt(e, null, [
            {
                key: "isEqual",
                value: function (t, n) {
                if (t === n) return !0;
                if (null === t && null === n) return !0;
                if (null === t || null === n) return !1;
                if (gt(t) !== gt(n)) return !1;
                if (t instanceof Array) {
                    if (t.length !== n.length) return !1;
                    for (var r = -1, i = !0; i && ++r < t.length; )
                    i = e.isEqual(t[r], n[r]);
                    return i;
                }
                if (t instanceof Object) {
                    if ("function" == typeof t.isEqualTo) return t.isEqualTo(n);
                    if ("function" == typeof n.isEqualTo) return n.isEqualTo(t);
                    for (
                    var a = e.unique(Object.keys(t).concat(Object.keys(n))),
                        o = -1,
                        s = !0;
                    s && ++o < a.length;

                    ) {
                    var l = a[o];
                    s = e.isEqual(t[l], n[l]);
                    }
                    return s;
                }
                return t instanceof Date && t.getTime() === n.getTime();
                },
            },
            {
                key: "isUnique",
                value: function (e) {
                return (
                    -1 ===
                    e.findIndex(function (t, n) {
                    return e.indexOf(t) !== n;
                    })
                );
                },
            },
            {
                key: "unique",
                value: function (e) {
                return e.filter(function (t, n) {
                    return e.indexOf(t) === n;
                });
                },
            },
            {
                key: "shuffle",
                value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                t = t || il.getInstance();
                var n,
                    r,
                    i = e.slice();
                for (n = i.length - 1; n > 0; n--) {
                    var a = [i[(r = t.nextInteger(0, n))], i[n]];
                    (i[n] = a[0]), (i[r] = a[1]);
                }
                return i;
                },
            },
            {
                key: "chunk",
                value: function (e, t) {
                for (
                    var n = Math.ceil(e.length / t), r = new Array(n), i = 0;
                    i < n;
                    i++
                )
                    r[i] = e.slice(i * t, (i + 1) * t);
                return r;
                },
            },
            {
                key: "joinSlices",
                value: function (e) {
                for (
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    n = e.length,
                    r = t.length,
                    i = [],
                    a = 0;
                    a < n;
                    a++
                )
                    r > 0 && a > 0 && (i = i.concat(t)), (i = i.concat(e[a]));
                return i;
                },
            },
            {
                key: "indexOfSlice",
                value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
                if (0 === t.length) return -1;
                for (
                    var r = -1, i = n - 1;
                    -1 === r && -1 !== (i = e.indexOf(t[0], i + 1));

                )
                    this.isEqual(e.slice(i, i + t.length), t) && (r = i);
                return r;
                },
            },
            {
                key: "replaceSlice",
                value: function (e, t) {
                for (
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                    r = 0,
                    i = -1,
                    a = [];
                    -1 !== (i = this.indexOfSlice(e, t, i + 1));

                )
                    (a = (a = a.concat(e.slice(r, i))).concat(n)),
                    (r = i + t.length);
                return (a = a.concat(e.slice(r)));
                },
            },
            {
                key: "resizeBitSizedArray",
                value: function (e, t, n) {
                for (
                    var r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    h =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                    d = Math.ceil((e.length * t) / n),
                    f = 8 === n ? new Uint8Array(d) : new Array(d).fill(0),
                    g = (1 << n) - 1,
                    p = 0;
                    p < e.length;
                    p++
                )
                    for (
                    r = e[p],
                        i = p * t,
                        a = (p + 1) * t,
                        o = Math.floor(i / n),
                        l = n - (a % n),
                        f[(s = Math.floor(a / n))] |= (r << l) & g,
                        u = r >> (n - l),
                        c = s;
                    --c >= o && u > 0;

                    )
                    (f[c] |= u & g), (u >>= n);
                if (h) {
                    for (var v = f.length - 1; 0 === f[v]; ) v--;
                    return f.slice(0, v + 1);
                }
                return f;
                },
            },
            ]),
            e
        );
        })(),
        ol = function (e, t, n, r) {
        try {
            return r ? t(T(n)[0], n[1]) : t(n);
        } catch (t) {
            var i = e.return;
            throw (void 0 !== i && T(i.call(e)), t);
        }
        },
        sl = !Qi(function (e) {
        Array.from(e);
        });
    Oe(
        { target: "Array", stat: !0, forced: sl },
        {
        from: function (e) {
            var t,
            n,
            r,
            i,
            a,
            o,
            s = Ne(e),
            l = "function" == typeof this ? this : Array,
            u = arguments.length,
            c = u > 1 ? arguments[1] : void 0,
            h = void 0 !== c,
            d = fo(s),
            f = 0;
            if (
            (h && (c = ze(c, u > 2 ? arguments[2] : void 0, 2)),
            null == d || (l == Array && vo(d)))
            )
            for (n = new l((t = fe(s.length))); t > f; f++)
                (o = h ? c(s[f], f) : s[f]), Yt(n, f, o);
            else
            for (
                a = (i = d.call(s)).next, n = new l();
                !(r = a.call(i)).done;
                f++
            )
                (o = h ? ol(i, c, [r.value, f], !0) : r.value), Yt(n, f, o);
            return (n.length = f), n;
        },
        }
    );
    var ll =
        "".repeat ||
        function (e) {
            var t = String(b(this)),
            n = "",
            r = he(e);
            if (r < 0 || r == 1 / 0)
            throw RangeError("Wrong number of repetitions");
            for (; r > 0; (r >>>= 1) && (t += t)) 1 & r && (n += t);
            return n;
        },
        ul = Math.ceil,
        cl = function (e) {
        return function (t, n, r) {
            var i,
            a,
            o = String(b(t)),
            s = o.length,
            l = void 0 === r ? " " : String(r),
            u = fe(n);
            return u <= s || "" == l
            ? o
            : ((i = u - s),
                (a = ll.call(l, ul(i / l.length))).length > i &&
                (a = a.slice(0, i)),
                e ? o + a : a + o);
        };
        },
        hl = { start: cl(!1), end: cl(!0) },
        dl = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Rt),
        fl = hl.end;
    Oe(
        { target: "String", proto: !0, forced: dl },
        {
        padEnd: function (e) {
            return fl(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
        }
    );
    var gl = P.f,
        pl = Se.f,
        vl = ie.set,
        yl = We("match"),
        ml = s.RegExp,
        bl = ml.prototype,
        kl = /a/g,
        wl = /a/g,
        _l = new ml(kl) !== kl,
        Sl = Bn.UNSUPPORTED_Y;
    if (
        u &&
        Pe(
        "RegExp",
        !_l ||
            Sl ||
            l(function () {
            return (
                (wl[yl] = !1), ml(kl) != kl || ml(wl) == wl || "/a/i" != ml(kl, "i")
            );
            })
        )
    ) {
        for (
        var xl = function (e, t) {
            var n,
                r = this instanceof xl,
                i = Zn(e),
                a = void 0 === t;
            if (!r && i && e.constructor === xl && a) return e;
            _l
                ? i && !a && (e = e.source)
                : e instanceof xl && (a && (t = dn.call(e)), (e = e.source)),
                Sl && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
            var o = wo(_l ? new ml(e, t) : ml(e, t), r ? this : bl, xl);
            return Sl && n && vl(o, { sticky: n }), o;
            },
            Il = function (e) {
            (e in xl) ||
                gl(xl, e, {
                configurable: !0,
                get: function () {
                    return ml[e];
                },
                set: function (t) {
                    ml[e] = t;
                },
                });
            },
            Cl = pl(ml),
            Vl = 0;
        Cl.length > Vl;

        )
        Il(Cl[Vl++]);
        (bl.constructor = xl), (xl.prototype = bl), ae(s, "RegExp", xl);
    }
    ko("RegExp");
    var El = Math.max,
        Al = Math.min,
        Ml = Math.floor,
        Tl = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Ll = /\$([$&'`]|\d\d?)/g;
    Kn("replace", 2, function (e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        a = r.REPLACE_KEEPS_$0,
        o = i ? "$" : "$0";
        return [
        function (n, r) {
            var i = b(this),
            a = null == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, i, r) : t.call(String(i), n, r);
        },
        function (e, r) {
            if ((!i && a) || ("string" == typeof r && -1 === r.indexOf(o))) {
            var l = n(t, e, this, r);
            if (l.done) return l.value;
            }
            var u = T(e),
            c = String(this),
            h = "function" == typeof r;
            h || (r = String(r));
            var d = u.global;
            if (d) {
            var f = u.unicode;
            u.lastIndex = 0;
            }
            for (var g = []; ; ) {
            var p = rr(u, c);
            if (null === p) break;
            if ((g.push(p), !d)) break;
            "" === String(p[0]) && (u.lastIndex = nr(c, fe(u.lastIndex), f));
            }
            for (var v, y = "", m = 0, b = 0; b < g.length; b++) {
            p = g[b];
            for (
                var k = String(p[0]),
                w = El(Al(he(p.index), c.length), 0),
                _ = [],
                S = 1;
                S < p.length;
                S++
            )
                _.push(void 0 === (v = p[S]) ? v : String(v));
            var x = p.groups;
            if (h) {
                var I = [k].concat(_, w, c);
                void 0 !== x && I.push(x);
                var C = String(r.apply(void 0, I));
            } else C = s(k, c, w, _, x, r);
            w >= m && ((y += c.slice(m, w) + C), (m = w + k.length));
            }
            return y + c.slice(m);
        },
        ];
        function s(e, n, r, i, a, o) {
        var s = r + e.length,
            l = i.length,
            u = Ll;
        return (
            void 0 !== a && ((a = Ne(a)), (u = Tl)),
            t.call(o, u, function (t, o) {
            var u;
            switch (o.charAt(0)) {
                case "$":
                return "$";
                case "&":
                return e;
                case "`":
                return n.slice(0, r);
                case "'":
                return n.slice(s);
                case "<":
                u = a[o.slice(1, -1)];
                break;
                default:
                var c = +o;
                if (0 === c) return t;
                if (c > l) {
                    var h = Ml(c / 10);
                    return 0 === h
                    ? t
                    : h <= l
                    ? void 0 === i[h - 1]
                        ? o.charAt(1)
                        : i[h - 1] + o.charAt(1)
                    : t;
                }
                u = i[c - 1];
            }
            return void 0 === u ? "" : u;
            })
        );
        }
    });
    var Pl = 0,
        Bl = (function () {
        function e() {
            yt(this, e);
        }
        return (
            bt(e, null, [
            {
                key: "camelCaseToRegular",
                value: function (e) {
                return e
                    .replace(/([a-z])([A-Z])/g, "$1 $2")
                    .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
                    .replace(/^./, function (e) {
                    return e.toUpperCase();
                    });
                },
            },
            {
                key: "uniqueId",
                value: function () {
                return "u" + (++Pl).toString(16);
                },
            },
            {
                key: "chunk",
                value: function (e, t) {
                return "" !== e
                    ? e.match(new RegExp(".{1,".concat(t, "}"), "g"))
                    : [];
                },
            },
            {
                key: "isWhitespace",
                value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n = e[t];
                return !!n && null !== n.match(/\s/);
                },
            },
            {
                key: "removeWhitespaces",
                value: function (e) {
                return this.replaceWhitespaces(e, "", !0);
                },
            },
            {
                key: "normalizeWhitespaces",
                value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return this.replaceWhitespaces(e, " ", t);
                },
            },
            {
                key: "replaceWhitespaces",
                value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return n ? e.replace(/\s+/g, t) : e.replace(/\s/g, t);
                },
            },
            ]),
            e
        );
        })(),
        Ol = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r;
            return (
            yt(this, n),
            ((r = t.call(this, e)).name = r.constructor.name),
            "function" == typeof Error.captureStackTrace
                ? Error.captureStackTrace(Ct(r), r.constructor)
                : (r.stack = new Error(e).stack),
            r
            );
        }
        return n;
        })(It(Error)),
        Rl = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            return yt(this, n), t.apply(this, arguments);
        }
        return n;
        })(Ol),
        zl = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r,
            i =
                arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            return yt(this, n), ((r = t.call(this, e)).index = i), r;
        }
        return n;
        })(Rl),
        Nl = {
        alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        padding: "=",
        paddingOptional: !1,
        foreignCharacters: !1,
        maxLineLength: null,
        lineSeparator: "\r\n",
        },
        Fl = (function () {
        function e() {
            yt(this, e);
        }
        return (
            bt(e, null, [
            {
                key: "hexStringFromBytes",
                value: function (e) {
                return Array.from(e)
                    .map(function (e) {
                    return ("0" + e.toString(16)).slice(-2);
                    })
                    .join("");
                },
            },
            {
                key: "bytesFromHexString",
                value: function (e) {
                (e = Bl.removeWhitespaces(e)).length % 2 == 1 && (e += "0");
                var t = Bl.chunk(e, 2).map(function (e, t) {
                    var n = parseInt(e, 16);
                    if (null === e.match(/[0-9a-f]{2}/i) || isNaN(n))
                    throw new zl("Invalid hex encoded byte '".concat(e, "'"));
                    return n;
                });
                return new Uint8Array(t);
                },
            },
            {
                key: "binaryStringFromBytes",
                value: function (e) {
                return Array.from(e)
                    .map(function (e) {
                    return ("0000000" + e.toString(2)).slice(-8);
                    })
                    .join("");
                },
            },
            {
                key: "bytesFromBinaryString",
                value: function (e) {
                (e = Bl.removeWhitespaces(e)).length % 8 > 0 &&
                    (e = e.padEnd(e.length - (e.length % 8) + 8, "0"));
                var t = Bl.chunk(e, 8).map(function (e, t) {
                    var n = parseInt(e, 2);
                    if (null === e.match(/[0-1]{8}/) || isNaN(n))
                    throw new zl("Invalid binary encoded byte '".concat(e, "'"));
                    return n;
                });
                return new Uint8Array(t);
                },
            },
            {
                key: "base64StringFromBytes",
                value: function (e) {
                for (
                    var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s =
                        arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    l = Object.assign({}, Nl, s),
                    u = l.alphabet,
                    c = l.padding,
                    h = l.paddingOptional,
                    d = l.maxLineLength,
                    f = l.lineSeparator,
                    g = !h && c ? c : "",
                    p = "",
                    v = 0;
                    v < e.length;
                    v += 3
                )
                    (i =
                    ((3 & (t = e[v])) << 4) |
                    ((n = v + 1 < e.length ? e[v + 1] : NaN) >> 4)),
                    (a =
                        ((15 & n) << 2) |
                        ((r = v + 2 < e.length ? e[v + 2] : NaN) >> 6)),
                    (o = 63 & r),
                    (p +=
                        u[t >> 2] +
                        u[i] +
                        (isNaN(n) ? g : u[a]) +
                        (isNaN(r) ? g : u[o]));
                if (d) {
                    for (var y = "", m = 0; m < p.length; m += d)
                    y += ("" !== y ? f : "") + p.substr(m, d);
                    p = y;
                }
                return p;
                },
            },
            {
                key: "bytesFromBase64String",
                value: function (e) {
                for (
                    var t,
                    n,
                    r =
                        arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = Object.assign({}, Nl, r),
                    a = i.alphabet,
                    o = i.padding,
                    s = (i.paddingOptional, i.foreignCharacters),
                    l = i.maxLineLength,
                    u = i.lineSeparator,
                    c = e.length,
                    h = [],
                    d = -1;
                    ++d < c;

                )
                    if (
                    ((t = e[d]),
                    null !== l && u && t === u[0] && e.substr(d, u.length) === u)
                    )
                    d = d + u.length - 1;
                    else if (t === o);
                    else if (-1 !== (n = a.indexOf(t))) h.push(n);
                    else if (!s)
                    throw new zl(
                        "Forbidden character '".concat(t, "' at index ").concat(d)
                    );
                var f = (4 - (h.length % 4)) % 4;
                if (3 === f)
                    throw new zl(
                    "A single remaining encoded character in the last quadruple or a padding of 3 characters is not allowed"
                    );
                for (d = 0; d < f; d++) h.push(0);
                var g,
                    p = (h.length / 4) * 3,
                    v = new Uint8Array(p);
                for (d = 0; d < h.length; d += 4)
                    (v[(g = (d / 4) * 3)] = (h[d] << 2) | (h[d + 1] >> 4)),
                    (v[g + 1] = ((15 & h[d + 1]) << 4) | (h[d + 2] >> 2)),
                    (v[g + 2] = ((3 & h[d + 2]) << 6) | h[d + 3]);
                return v.slice(0, p - f);
                },
            },
            ]),
            e
        );
        })(),
        Dl = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r,
            i =
                arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            return yt(this, n), ((r = t.call(this, e)).byteIndex = i), r;
        }
        return n;
        })(Rl),
        jl = (function () {
        function e() {
            yt(this, e);
        }
        return (
            bt(e, null, [
            {
                key: "validateCodePoint",
                value: function (e) {
                return (
                    isFinite(e) && e >= 0 && e <= 1114111 && Math.floor(e) === e
                );
                },
            },
            {
                key: "validateCodePoints",
                value: function (t) {
                for (var n = !0, r = 0; n && r < t.length; )
                    (n = e.validateCodePoint(t[r])), r++;
                return n;
                },
            },
            {
                key: "stringFromCodePoints",
                value: function (e) {
                var t,
                    n,
                    r = new Array(2 * e.length),
                    i = 0;
                for (t = 0; t < e.length; t++)
                    (n = e[t]) < 65536
                    ? (r[i++] = String.fromCharCode(n))
                    : ((n -= 65536),
                        (r[i++] = String.fromCharCode(55296 + (n >> 10))),
                        (r[i++] = String.fromCharCode((n % 1024) + 56320)));
                return r.slice(0, i).join("");
                },
            },
            {
                key: "codePointsFromString",
                value: function (e) {
                for (
                    var t, n, r = e.length, i = new Array(r), a = 0, o = 0;
                    o < r;

                )
                    (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < r
                    ? 56320 == (64512 & (n = e.charCodeAt(o++)))
                        ? (i[a++] = ((1023 & t) << 10) + (1023 & n) + 65536)
                        : ((i[a++] = t), o--)
                    : (i[a++] = t);
                return i.slice(0, a);
                },
            },
            {
                key: "bytesFromCodePoints",
                value: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "utf8";
                switch (n) {
                    case "utf8":
                    return e._encodeCodePointsToUTF8Bytes(t);
                    default:
                    throw new Error(
                        "Encoding to '".concat(n, "' is currently not supported.")
                    );
                }
                },
            },
            {
                key: "codePointsFromBytes",
                value: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "utf8";
                switch (n) {
                    case "utf8":
                    return e._decodeCodePointsFromUTF8Bytes(t);
                    default:
                    throw new Error(
                        "Decoding from '".concat(n, "' is currently not supported.")
                    );
                }
                },
            },
            {
                key: "_encodeCodePointsToUTF8Bytes",
                value: function (e) {
                var t,
                    n,
                    r = new Uint8Array(4 * e.length),
                    i = 0;
                for (t = 0; t < e.length; t++)
                    (n = e[t]) <= 127
                    ? (r[i++] = n)
                    : n <= 2047
                    ? ((r[i++] = 192 | (n >> 6)), (r[i++] = 128 | (63 & n)))
                    : n <= 65535
                    ? ((r[i++] = 224 | (n >> 12)),
                        (r[i++] = 128 | ((4095 & n) >> 6)),
                        (r[i++] = 128 | (63 & n)))
                    : ((r[i++] = 240 | (n >> 18)),
                        (r[i++] = 128 | ((262143 & n) >> 12)),
                        (r[i++] = 128 | ((4095 & n) >> 6)),
                        (r[i++] = 128 | (63 & n)));
                return r.slice(0, i);
                },
            },
            {
                key: "_decodeCodePointsFromUTF8Bytes",
                value: function (e) {
                for (
                    var t, n, r = e.length, i = new Array(r), a = 0, o = -1, s = 0;
                    ++o < r;

                )
                    if ((t = e[o]) > 127 && t <= 191) {
                    if (--a < 0)
                        throw new Dl(
                        "Invalid UTF-8 encoded text: " +
                            "Unexpected continuation byte at 0x".concat(
                            o.toString(16)
                            ),
                        o
                        );
                    (n = (n << 6) | (63 & t)), 0 === a && (i[s++] = n);
                    } else {
                    if (a > 0)
                        throw new Dl(
                        "Invalid UTF-8 encoded text: " +
                            "Continuation byte expected at 0x".concat(
                            o.toString(16)
                            ),
                        o
                        );
                    if (t <= 127) i[s++] = t;
                    else if (t <= 223) (n = 31 & t), (a = 1);
                    else if (t <= 239) (n = 15 & t), (a = 2);
                    else {
                        if (!(t <= 247))
                        throw new Dl(
                            "Invalid UTF-8 encoded text: " +
                            "Invalid byte "
                                .concat(t, " at 0x")
                                .concat(o.toString(16)),
                            o
                        );
                        (n = 7 & t), (a = 3);
                    }
                    }
                if (0 !== a)
                    throw new Dl(
                    "Invalid UTF-8 encoded text: Unexpected end of bytes"
                    );
                return i.slice(0, s);
                },
            },
            ]),
            e
        );
        })(),
        $l = null,
        ql = (function () {
        function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            n =
                arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8";
            if (
            (yt(this, e),
            (this._codePoints = null),
            (this._string = null),
            (this._bytes = null),
            (this._encoding = n),
            null === t)
            )
            (this._codePoints = []),
                (this._string = ""),
                (this._bytes = new Uint8Array(0));
            else {
            var r = Object.prototype.toString.call(t);
            switch (r) {
                case "[object Array]":
                if (!jl.validateCodePoints(t))
                    throw new Error(
                    "Chain constructor expects a valid array of code points."
                    );
                this._codePoints = t;
                break;
                case "[object String]":
                this._string = t;
                break;
                case "[object Uint8Array]":
                this._bytes = t;
                break;
                default:
                throw new Error(
                    "Chain constructor expects one optional parameter of type " +
                    "Array, String or Uint8Array. Received unexpected ".concat(
                        r,
                        "."
                    )
                );
            }
            }
        }
        return (
            bt(
            e,
            [
                {
                key: "getCodePoints",
                value: function () {
                    return (
                    null === this._codePoints &&
                        (null !== this._string
                        ? (this._codePoints = jl.codePointsFromString(
                            this._string
                            ))
                        : (this._codePoints = jl.codePointsFromBytes(
                            this._bytes,
                            this._encoding
                            ))),
                    this._codePoints
                    );
                },
                },
                {
                key: "getChars",
                value: function () {
                    return this.getCodePoints().map(function (e) {
                    return jl.stringFromCodePoints([e]);
                    });
                },
                },
                {
                key: Symbol.iterator,
                value: function () {
                    return this.getCodePoints().values;
                },
                },
                {
                key: "getCodePointAt",
                value: function (e) {
                    return this.getCodePoints()[e];
                },
                },
                {
                key: "getCharAt",
                value: function (e) {
                    return jl.stringFromCodePoints([this.getCodePointAt(e)]);
                },
                },
                {
                key: "getCharBytesAt",
                value: function (e) {
                    return jl.bytesFromCodePoints([this.getCodePointAt(e)]);
                },
                },
                {
                key: "getLength",
                value: function () {
                    return this.getCodePoints().length;
                },
                },
                {
                key: "getString",
                value: function () {
                    return (
                    null === this._string &&
                        (this._string = jl.stringFromCodePoints(
                        this.getCodePoints()
                        )),
                    this._string
                    );
                },
                },
                {
                key: "toString",
                value: function () {
                    return this.getString();
                },
                },
                {
                key: "toLowerCase",
                value: function () {
                    return e.wrap(this.getString().toLowerCase(), this._encoding);
                },
                },
                {
                key: "toUpperCase",
                value: function () {
                    return e.wrap(this.getString().toUpperCase(), this._encoding);
                },
                },
                {
                key: "split",
                value: function () {
                    var t = this,
                    n =
                        arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : void 0,
                    r =
                        arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0;
                    return (
                    (n = n instanceof e ? n.toString() : n),
                    this.getString()
                        .split(n, r)
                        .map(function (n) {
                        return e.wrap(n, t._encoding);
                        })
                    );
                },
                },
                {
                key: "substr",
                value: function (t) {
                    var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0;
                    if (n <= 0 || t >= this.getLength()) return e.empty();
                    t < 0 && (t = Math.max(this.getLength() + t, 0));
                    var r = this.getCodePoints().slice(t, n ? t + n : void 0);
                    return e.wrap(r, this._encoding);
                },
                },
                {
                key: "truncate",
                value: function (t) {
                    return this.getLength() > t
                    ? e.wrap(this.substr(0, t).getString() + "…", this._encoding)
                    : this;
                },
                },
                {
                key: "extend",
                value: function (t) {
                    for (
                    var n,
                        r = this.getCodePoints(),
                        i = e.wrap(t).getCodePoints(),
                        a = r.slice(),
                        o = 0;
                    a.length < i.length && o < i.length;

                    )
                    (n = i[o++]), -1 === r.indexOf(n) && a.push(n);
                    return e.wrap(a);
                },
                },
                {
                key: "match",
                value: function (e) {
                    return this.getString().match(e);
                },
                },
                {
                key: "getDescription",
                value: function () {
                    return null !== this._string
                    ? "String(".concat(this._string, ")")
                    : null !== this._codePoints
                    ? "CodePoints(".concat(this._codePoints.join(", "), ")")
                    : "Bytes(".concat(Fl.hexStringFromBytes(this._bytes), ")");
                },
                },
                {
                key: "contains",
                value: function (e) {
                    return -1 !== this.getString().indexOf(e.toString());
                },
                },
                {
                key: "indexOfCodePoint",
                value: function (e) {
                    var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0;
                    return this.getCodePoints().indexOf(e, t);
                },
                },
                {
                key: "indexOf",
                value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0,
                    n = this.getString(),
                    r = n.indexOf(e.toString(), t);
                    if (-1 === r) return -1;
                    var i = n.substr(0, r),
                    a = jl.codePointsFromString(i);
                    return a.length;
                },
                },
                {
                key: "getBytes",
                value: function () {
                    return (
                    null === this._bytes &&
                        (this._bytes = jl.bytesFromCodePoints(
                        this.getCodePoints(),
                        this._encoding
                        )),
                    this._bytes
                    );
                },
                },
                {
                key: "getByteAt",
                value: function (e) {
                    return this.getBytes()[e];
                },
                },
                {
                key: "getSize",
                value: function () {
                    return this.getBytes().length;
                },
                },
                {
                key: "needsTextEncoding",
                value: function () {
                    return null === this._codePoints && null === this._string;
                },
                },
                {
                key: "needsByteEncoding",
                value: function () {
                    return null === this._bytes;
                },
                },
                {
                key: "isEmpty",
                value: function () {
                    return (
                    this === $l ||
                    (null !== this._codePoints &&
                        0 === this._codePoints.length) ||
                    (null !== this._string && "" === this._string) ||
                    (null !== this._bytes && 0 === this._bytes.length)
                    );
                },
                },
                {
                key: "isEqualTo",
                value: function (t) {
                    if (t === this) return !0;
                    if (!(t instanceof e)) return !1;
                    if (this.isEmpty() && t.isEmpty()) return !0;
                    if (t.getEncoding() !== this._encoding) return !1;
                    if (null !== this._string && this._string === t._string)
                    return !0;
                    if (null !== this._bytes && null !== t._bytes)
                    return al.isEqual(this._bytes, t._bytes);
                    try {
                    return al.isEqual(this.getCodePoints(), t.getCodePoints());
                    } catch (e) {
                    if (e instanceof Dl) return !1;
                    throw e;
                    }
                },
                },
                {
                key: "getEncoding",
                value: function () {
                    return this._encoding;
                },
                },
            ],
            [
                {
                key: "isEqual",
                value: function () {
                    for (
                    var t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                    )
                    n[r] = arguments[r];
                    if (n.length < 2) return !0;
                    var i = n[0];
                    if (!(i instanceof e)) return !1;
                    for (var a = !0, o = 0; a && ++o < n.length; )
                    a = i.isEqualTo(n[o]);
                    return a;
                },
                },
                {
                key: "wrap",
                value: function (t) {
                    var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "utf8";
                    return t instanceof e
                    ? t
                    : null === t || 0 === t.length
                    ? e.empty()
                    : new e(t, n);
                },
                },
                {
                key: "join",
                value: function (t) {
                    var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : void 0;
                    return e.wrap(
                    t
                        .map(function (e) {
                        return e.toString();
                        })
                        .join(n)
                    );
                },
                },
                {
                key: "empty",
                value: function () {
                    return null === $l && ($l = new e()), $l;
                },
                },
            ]
            ),
            e
        );
        })(),
        Ul =
        (a(function (e) {
            var t = (function (e) {
            var t,
                n = Object.prototype,
                r = n.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                o = i.asyncIterator || "@@asyncIterator",
                s = i.toStringTag || "@@toStringTag";
            function l(e, t, n) {
                return (
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                }),
                e[t]
                );
            }
            try {
                l({}, "");
            } catch (e) {
                l = function (e, t, n) {
                return (e[t] = n);
                };
            }
            function u(e, t, n, r) {
                var i = t && t.prototype instanceof v ? t : v,
                a = Object.create(i.prototype),
                o = new E(r || []);
                return (
                (a._invoke = (function (e, t, n) {
                    var r = h;
                    return function (i, a) {
                    if (r === f) throw new Error("Generator is already running");
                    if (r === g) {
                        if ("throw" === i) throw a;
                        return M();
                    }
                    for (n.method = i, n.arg = a; ; ) {
                        var o = n.delegate;
                        if (o) {
                        var s = I(o, n);
                        if (s) {
                            if (s === p) continue;
                            return s;
                        }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                        if (r === h) throw ((r = g), n.arg);
                        n.dispatchException(n.arg);
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = f;
                        var l = c(e, t, n);
                        if ("normal" === l.type) {
                        if (((r = n.done ? g : d), l.arg === p)) continue;
                        return { value: l.arg, done: n.done };
                        }
                        "throw" === l.type &&
                        ((r = g), (n.method = "throw"), (n.arg = l.arg));
                    }
                    };
                })(e, n, o)),
                a
                );
            }
            function c(e, t, n) {
                try {
                return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                return { type: "throw", arg: e };
                }
            }
            e.wrap = u;
            var h = "suspendedStart",
                d = "suspendedYield",
                f = "executing",
                g = "completed",
                p = {};
            function v() {}
            function y() {}
            function m() {}
            var b = {};
            b[a] = function () {
                return this;
            };
            var k = Object.getPrototypeOf,
                w = k && k(k(A([])));
            w && w !== n && r.call(w, a) && (b = w);
            var _ = (m.prototype = v.prototype = Object.create(b));
            function S(e) {
                ["next", "throw", "return"].forEach(function (t) {
                l(e, t, function (e) {
                    return this._invoke(t, e);
                });
                });
            }
            function x(e, t) {
                function n(i, a, o, s) {
                var l = c(e[i], e, a);
                if ("throw" !== l.type) {
                    var u = l.arg,
                    h = u.value;
                    return h && "object" == typeof h && r.call(h, "__await")
                    ? t.resolve(h.__await).then(
                        function (e) {
                            n("next", e, o, s);
                        },
                        function (e) {
                            n("throw", e, o, s);
                        }
                        )
                    : t.resolve(h).then(
                        function (e) {
                            (u.value = e), o(u);
                        },
                        function (e) {
                            return n("throw", e, o, s);
                        }
                        );
                }
                s(l.arg);
                }
                var i;
                this._invoke = function (e, r) {
                function a() {
                    return new t(function (t, i) {
                    n(e, r, t, i);
                    });
                }
                return (i = i ? i.then(a, a) : a());
                };
            }
            function I(e, n) {
                var r = e.iterator[n.method];
                if (r === t) {
                if (((n.delegate = null), "throw" === n.method)) {
                    if (
                    e.iterator.return &&
                    ((n.method = "return"),
                    (n.arg = t),
                    I(e, n),
                    "throw" === n.method)
                    )
                    return p;
                    (n.method = "throw"),
                    (n.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                    ));
                }
                return p;
                }
                var i = c(r, e.iterator, n.arg);
                if ("throw" === i.type)
                return (
                    (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), p
                );
                var a = i.arg;
                return a
                ? a.done
                    ? ((n[e.resultName] = a.value),
                    (n.next = e.nextLoc),
                    "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                    (n.delegate = null),
                    p)
                    : a
                : ((n.method = "throw"),
                    (n.arg = new TypeError("iterator result is not an object")),
                    (n.delegate = null),
                    p);
            }
            function C(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                this.tryEntries.push(t);
            }
            function V(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function E(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                e.forEach(C, this),
                this.reset(!0);
            }
            function A(e) {
                if (e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var i = -1,
                    o = function n() {
                        for (; ++i < e.length; )
                        if (r.call(e, i))
                            return (n.value = e[i]), (n.done = !1), n;
                        return (n.value = t), (n.done = !0), n;
                    };
                    return (o.next = o);
                }
                }
                return { next: M };
            }
            function M() {
                return { value: t, done: !0 };
            }
            return (
                (y.prototype = _.constructor = m),
                (m.constructor = y),
                (y.displayName = l(m, s, "GeneratorFunction")),
                (e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return (
                    !!t &&
                    (t === y || "GeneratorFunction" === (t.displayName || t.name))
                );
                }),
                (e.mark = function (e) {
                return (
                    Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, m)
                    : ((e.__proto__ = m), l(e, s, "GeneratorFunction")),
                    (e.prototype = Object.create(_)),
                    e
                );
                }),
                (e.awrap = function (e) {
                return { __await: e };
                }),
                S(x.prototype),
                (x.prototype[o] = function () {
                return this;
                }),
                (e.AsyncIterator = x),
                (e.async = function (t, n, r, i, a) {
                void 0 === a && (a = Promise);
                var o = new x(u(t, n, r, i), a);
                return e.isGeneratorFunction(n)
                    ? o
                    : o.next().then(function (e) {
                        return e.done ? e.value : o.next();
                    });
                }),
                S(_),
                l(_, s, "Generator"),
                (_[a] = function () {
                return this;
                }),
                (_.toString = function () {
                return "[object Generator]";
                }),
                (e.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return (
                    t.reverse(),
                    function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e) return (n.value = r), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                    }
                );
                }),
                (e.values = A),
                (E.prototype = {
                constructor: E,
                reset: function (e) {
                    if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = t),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = t),
                    this.tryEntries.forEach(V),
                    !e)
                    )
                    for (var n in this)
                        "t" === n.charAt(0) &&
                        r.call(this, n) &&
                        !isNaN(+n.slice(1)) &&
                        (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function i(r, i) {
                    return (
                        (s.type = "throw"),
                        (s.arg = e),
                        (n.next = r),
                        i && ((n.method = "next"), (n.arg = t)),
                        !!i
                    );
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var o = this.tryEntries[a],
                        s = o.completion;
                    if ("root" === o.tryLoc) return i("end");
                    if (o.tryLoc <= this.prev) {
                        var l = r.call(o, "catchLoc"),
                        u = r.call(o, "finallyLoc");
                        if (l && u) {
                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                        } else if (l) {
                        if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                        } else {
                        if (!u)
                            throw new Error(
                            "try statement without catch or finally"
                            );
                        if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                        }
                    }
                    }
                },
                abrupt: function (e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (
                        i.tryLoc <= this.prev &&
                        r.call(i, "finallyLoc") &&
                        this.prev < i.finallyLoc
                    ) {
                        var a = i;
                        break;
                    }
                    }
                    a &&
                    ("break" === e || "continue" === e) &&
                    a.tryLoc <= t &&
                    t <= a.finallyLoc &&
                    (a = null);
                    var o = a ? a.completion : {};
                    return (
                    (o.type = e),
                    (o.arg = t),
                    a
                        ? ((this.method = "next"), (this.next = a.finallyLoc), p)
                        : this.complete(o)
                    );
                },
                complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return (
                    "break" === e.type || "continue" === e.type
                        ? (this.next = e.arg)
                        : "return" === e.type
                        ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                        : "normal" === e.type && t && (this.next = t),
                    p
                    );
                },
                finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc), V(n), p;
                    }
                },
                catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                        var i = r.arg;
                        V(n);
                        }
                        return i;
                    }
                    }
                    throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (
                    (this.delegate = {
                        iterator: A(e),
                        resultName: n,
                        nextLoc: r,
                    }),
                    "next" === this.method && (this.arg = t),
                    p
                    );
                },
                }),
                e
            );
            })(e.exports);
            try {
            regeneratorRuntime = t;
            } catch (e) {
            Function("r", "regeneratorRuntime = r")(t);
            }
        }),
        Ze.find),
        Wl = "find",
        Gl = !0,
        Hl = tt(Wl);
    Wl in [] &&
        Array(1).find(function () {
        Gl = !1;
        }),
        Oe(
        { target: "Array", proto: !0, forced: Gl || !Hl },
        {
            find: function (e) {
            return Ul(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }
        ),
        pi(Wl);
    var Kl = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._$message = null),
            (e._message = null),
            (e._id = Bl.uniqueId()),
            (e._first = !1),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "isFirst",
                value: function () {
                return this._first;
                },
            },
            {
                key: "setFirst",
                value: function (e) {
                return (
                    this._first !== e &&
                    ((this._first = e),
                    e
                        ? this.getElement().classList.add("field--first")
                        : this.getElement().classList.remove("field--first")),
                    this
                );
                },
            },
            {
                key: "getMessage",
                value: function () {
                return this._message;
                },
            },
            {
                key: "setMessage",
                value: function (e) {
                return (this._message = e), this.update();
                },
            },
            {
                key: "clearMessage",
                value: function () {
                return this.setMessage(null);
                },
            },
            {
                key: "getId",
                value: function () {
                return this._id;
                },
            },
            {
                key: "render",
                value: function () {
                return bn.createElement(
                    "div",
                    { className: "field" + (this._first ? " field--first" : "") },
                    [this.renderLabel(), this.renderField()]
                );
                },
            },
            {
                key: "renderLabel",
                value: function () {
                return bn.createElement(
                    "label",
                    { className: "field__label", htmlFor: this.getId() },
                    this.getModel().getLabel()
                );
                },
            },
            {
                key: "renderField",
                value: function () {
                return bn.createElement("div", { className: "field__field" });
                },
            },
            {
                key: "renderMessage",
                value: function () {
                return null !== this.getMessage()
                    ? bn.createElement(
                        "div",
                        { className: "field__message" },
                        this.getMessage()
                    )
                    : null;
                },
            },
            {
                key: "didRender",
                value: function () {
                At(wt(n.prototype), "didRender", this).call(this),
                    this.updateValue();
                },
            },
            {
                key: "update",
                value: function () {
                var e = this.getElement();
                return (
                    (e.dataset.width = this.getModel().getWidth()),
                    this.hasFocus()
                    ? e.classList.add("field--focus")
                    : e.classList.remove("field--focus"),
                    this.getModel().isValid() && null === this.getMessage()
                    ? e.classList.remove("field--invalid")
                    : e.classList.add("field--invalid"),
                    null !== this._$message &&
                    null !== this._$message.parentNode &&
                    this._$message.parentNode.removeChild(this._$message),
                    (this._$message = null),
                    (this._$message = this.renderMessage()),
                    null !== this._$message &&
                    this.getElement().appendChild(this._$message),
                    this
                );
                },
            },
            {
                key: "didFocus",
                value: function () {
                this.getElement().classList.add("field--focus");
                },
            },
            {
                key: "didBlur",
                value: function () {
                this.getElement().classList.remove("field--focus");
                },
            },
            {
                key: "updateValue",
                value: function () {
                return this;
                },
            },
            ]),
            n
        );
        })(bn),
        Xl = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            return yt(this, n), t.apply(this, arguments);
        }
        return (
            bt(n, [
            {
                key: "render",
                value: function () {
                return bn.createElement("div", { className: "form" });
                },
            },
            {
                key: "appendSubviewElement",
                value: function (e) {
                if (e instanceof Kl) {
                    this.getElement();
                    var t = this.getSubviews().filter(function (e) {
                    return e instanceof Kl;
                    });
                    t.push(e);
                    var r = this.getModel().getFields();
                    t.sort(function (e, t) {
                    return r.indexOf(e.getModel()) - r.indexOf(t.getModel());
                    });
                    var i = t.indexOf(e),
                    a = i < t.length - 1 ? t[i + 1].getElement() : null;
                    this.getElement().insertBefore(e.getElement(), a);
                    var o = 0;
                    return (
                    t.forEach(function (e) {
                        var t = e.getModel().getWidth();
                        (o += t) === t || o > 12
                        ? ((o = t), e.setFirst(!0))
                        : e.setFirst(!1);
                    }),
                    this
                    );
                }
                return At(wt(n.prototype), "appendSubviewElement", this).call(
                    this,
                    e
                );
                },
            },
            ]),
            n
        );
        })(bn),
        Zl =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 7H3.83l3.58-3.59L6 2 0 8l6 6 1.41-1.41L3.83 9H16z"/></svg>',
        Yl = {
        forward: Zl,
        backward: Zl,
        error:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15 2.41L13.59 1 8 6.59 2.41 1 1 2.41 6.59 8 1 13.59 2.41 15 8 9.41 13.59 15 15 13.59 9.41 8z"/></svg>',
        },
        Jl = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._$menu = null),
            (e._$body = null),
            (e._$settings = null),
            (e._$header = null),
            (e._$status = null),
            (e._$statusIcon = null),
            (e._$statusMessage = null),
            (e._menuVisible = !1),
            (e._menuHideHandler = e.toggleMenu.bind(Ct(e))),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "render",
                value: function () {
                (this._$settings = this.renderSettings()),
                    (this._$header = this.renderHeader());
                var e = this.getModel().getMeta();
                return bn.createElement(
                    "div",
                    {
                    className: "brick",
                    role: "region",
                    ariaLabel: "".concat(e.title, " ").concat(e.type),
                    },
                    [
                    this._$header,
                    this._$settings,
                    this.renderContent(),
                    this.renderStatus(),
                    ]
                );
                },
            },
            {
                key: "renderHeader",
                value: function () {
                var e = this;
                this._$menu = this.renderMenu();
                var t = bn.createElement("button", {
                    className: "brick__btn-menu",
                    onClick: function (t) {
                    t.preventDefault(), e.toggleMenu();
                    },
                });
                t.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="2" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="8" cy="14" r="1.5"/></svg>';
                var n = bn.createElement("div", {
                    className: "brick__title-caret",
                });
                return (
                    (n.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3 6l5 5 5-5z"/></svg>'),
                    bn.createElement("header", { className: "brick__header" }, [
                    bn.createElement(
                        "button",
                        {
                        className: "brick__title",
                        onClick: function (t) {
                            t.preventDefault(),
                            e.getModel().viewReplaceButtonDidClick(e);
                        },
                        },
                        [
                        bn.createElement(
                            "h3",
                            { className: "brick__title-inner" },
                            this.getModel().getTitle()
                        ),
                        n,
                        ]
                    ),
                    t,
                    ])
                );
                },
            },
            {
                key: "renderMenu",
                value: function () {
                var e = this,
                    t = [];
                return (
                    this.getModel().hasPipe() &&
                    (t.push({ label: "Remove", name: "remove" }),
                    t.push({ label: "Hide", name: "hide" }),
                    t.push({ label: "Duplicate", name: "duplicate" })),
                    this.getModel().isRandomizable() &&
                    t.push({ label: "Randomize", name: "randomize" }),
                    bn.createElement("div", { className: "brick__menu menu" }, [
                    bn.createElement(
                        "ul",
                        { className: "menu__list" },
                        t.map(function (t) {
                        return bn.createElement(
                            "li",
                            { className: "menu__item" },
                            [
                            bn.createElement(
                                "button",
                                {
                                className: "menu__button",
                                onClick: function (n) {
                                    n.preventDefault(),
                                    e.getModel().viewMenuItemDidClick(e, t.name);
                                },
                                },
                                t.label
                            ),
                            ]
                        );
                        })
                    ),
                    ])
                );
                },
            },
            {
                key: "renderSettings",
                value: function () {
                return bn.createElement("div", { className: "brick__settings" });
                },
            },
            {
                key: "renderContent",
                value: function () {
                return bn.createElement("div", { className: "brick__content" });
                },
            },
            {
                key: "renderStatus",
                value: function () {
                return (
                    (this._$statusIcon = bn.createElement("div", {
                    className: "brick__status-icon",
                    })),
                    (this._$statusMessage = bn.createElement("div", {
                    className: "brick__status-message",
                    })),
                    (this._$status = bn.createElement(
                    "footer",
                    { className: "brick__status brick__status--hidden" },
                    [this._$statusIcon, this._$statusMessage]
                    )),
                    this._$status
                );
                },
            },
            {
                key: "appendSubviewElement",
                value: function (e) {
                return e instanceof Xl
                    ? (this.getElement(),
                    this._$settings.appendChild(e.getElement()),
                    this)
                    : At(wt(n.prototype), "appendSubviewElement", this).call(
                        this,
                        e
                    );
                },
            },
            {
                key: "didFocus",
                value: function () {
                this.getElement().classList.add("brick--focus");
                },
            },
            {
                key: "didBlur",
                value: function () {
                this.getElement().classList.remove("brick--focus");
                },
            },
            {
                key: "toggleMenu",
                value: function () {
                var e = this;
                (this._menuVisible = !this._menuVisible),
                    this._menuVisible
                    ? (this._$header.appendChild(this._$menu),
                        this._$menu.getBoundingClientRect(),
                        this._$menu.classList.add("menu--visible"),
                        window.requestAnimationFrame(function () {
                        window.addEventListener("click", e._menuHideHandler);
                        }))
                    : (this._$header.removeChild(this._$menu),
                        window.removeEventListener("click", this._menuHideHandler));
                },
            },
            {
                key: "updateStatus",
                value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                return (
                    null === e
                    ? (this._$status.classList.add("brick__status--hidden"),
                        (this._$statusIcon.innerHTML = null),
                        (this._$statusMessage.innerText = null))
                    : ((this._$status.className =
                        "brick__status brick__status--".concat(e)),
                        (this._$statusIcon.innerHTML = Yl[e] || ""),
                        (this._$statusMessage.innerText = t || ""),
                        ("forward" !== e && "backward" !== e) ||
                        (this._$status.classList.add("brick__status--flash"),
                        this._$status.getBoundingClientRect(),
                        this._$status.classList.remove("brick__status--flash"))),
                    this
                );
                },
            },
            ]),
            n
        );
        })(bn),
        Ql = null,
        eu = (function () {
        function e() {
            yt(this, e), (this._observerNames = []), (this._observerCallbacks = []);
        }
        return (
            bt(
            e,
            [
                {
                key: "trigger",
                value: function (e) {
                    for (
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null,
                        n = 0;
                    -1 !== (n = this._observerNames.indexOf(e, n));

                    )
                    this._observerCallbacks[n](e, t), n++;
                    return this;
                },
                },
                {
                key: "subscribe",
                value: function (e, t) {
                    return (
                    this._observerNames.push(e),
                    this._observerCallbacks.push(t),
                    this
                    );
                },
                },
                {
                key: "unsubscribe",
                value: function (e, t) {
                    for (
                    var n = 0;
                    -1 !== (n = this._observerNames.indexOf(e, n));

                    )
                    this._observerCallbacks[n] === t
                        ? (this._observerNames.splice(n, 1),
                        this._observerCallbacks.splice(n, 1))
                        : n++;
                    return this;
                },
                },
            ],
            [
                {
                key: "getSharedInstance",
                value: function () {
                    return null === Ql && (Ql = new e()), Ql;
                },
                },
                {
                key: "trigger",
                value: function (t) {
                    var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    return e.getSharedInstance().trigger(t, n);
                },
                },
            ]
            ),
            e
        );
        })(),
        tu = (function () {
        function e() {
            yt(this, e), (this._view = null), (this._viewPrototype = bn);
        }
        return (
            bt(e, [
            {
                key: "hasView",
                value: function () {
                return null !== this._view;
                },
            },
            {
                key: "getView",
                value: function () {
                return (
                    null === this._view &&
                    ((this._view = new this._viewPrototype()),
                    this._view.setModel(this),
                    this.didCreateView(this._view)),
                    this._view
                );
                },
            },
            {
                key: "updateView",
                value: function () {
                return this.hasView() && this.getView().setNeedsUpdate(), this;
                },
            },
            { key: "didCreateView", value: function (e) {} },
            ]),
            e
        );
        })(),
        nu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r,
            i =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
            yt(this, n),
            ((r = t.call(this))._viewPrototype = Kl),
            (r._name = e),
            (r._value = void 0 !== i.value ? i.value : null),
            (r._delegate = i.delegate || null),
            (r._randomizable = !1 !== i.randomizable),
            (r._valid = !0),
            (r._message = null),
            (r._messageKey = null),
            (r._validateValueCallback = i.validateValue || null),
            (r._filterValueCallback = i.filterValue || null),
            (r._randomizeValueCallback = i.randomizeValue || null),
            (r._label = i.label || Bl.camelCaseToRegular(e)),
            (r._visible = !1 !== i.visible),
            (r._priority = void 0 !== i.priority ? i.priority : 0),
            (r._width = i.width || 12),
            r
            );
        }
        return (
            bt(n, [
            {
                key: "getName",
                value: function () {
                return this._name;
                },
            },
            {
                key: "getLabel",
                value: function () {
                return this._label;
                },
            },
            {
                key: "isVisible",
                value: function () {
                return this._visible;
                },
            },
            {
                key: "setVisible",
                value: function (e) {
                return (
                    (this._visible = e),
                    this._delegate &&
                    this._delegate.fieldNeedsLayout &&
                    this._delegate.fieldNeedsLayout(this),
                    this
                );
                },
            },
            {
                key: "getPriority",
                value: function () {
                return this._priority;
                },
            },
            {
                key: "setPriority",
                value: function (e) {
                return (
                    (this._priority = e),
                    this._delegate &&
                    this._delegate.fieldPriorityDidChange &&
                    this._delegate.fieldPriorityDidChange(this, e),
                    this._delegate &&
                    this._delegate.fieldNeedsLayout &&
                    this._delegate.fieldNeedsLayout(this),
                    this
                );
                },
            },
            {
                key: "getWidth",
                value: function () {
                return this._width;
                },
            },
            {
                key: "setWidth",
                value: function (e) {
                return (
                    (this._width = e),
                    this.updateView(),
                    this._delegate &&
                    this._delegate.fieldNeedsLayout &&
                    this._delegate.fieldNeedsLayout(this),
                    this
                );
                },
            },
            {
                key: "getDelegate",
                value: function () {
                return this._delegate;
                },
            },
            {
                key: "setDelegate",
                value: function (e) {
                return (this._delegate = e), this;
                },
            },
            {
                key: "isValid",
                value: function () {
                return this._valid;
                },
            },
            {
                key: "getMessage",
                value: function () {
                return this._message;
                },
            },
            {
                key: "getMessageKey",
                value: function () {
                return this._messageKey;
                },
            },
            {
                key: "getValue",
                value: function () {
                return this._value;
                },
            },
            {
                key: "setValue",
                value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    n = this.validateValue(e);
                if (
                    ((this._valid = !0 === n),
                    this._valid
                    ? ((this._message = null), (this._messageKey = null))
                    : "object" === gt(n)
                    ? ((this._message = n.message), (this._messageKey = n.key))
                    : ((this._message = "The value is invalid"),
                        (this._messageKey = "invalid")),
                    this.hasView() && this.getView().setMessage(this.getMessage()),
                    !this._valid)
                )
                    return (this._value = e), this;
                var r = this.filterValue(e),
                    i =
                    r instanceof ql
                        ? r.isEqualTo(this._value)
                        : this._value === r;
                return (
                    i ||
                    ((this._value = r),
                    this.hasView() &&
                        this.getView() !== t &&
                        this.getView().updateValue(),
                    this._delegate &&
                        this._delegate !== t &&
                        void 0 !== this._delegate.fieldValueDidChange &&
                        this.getDelegate().fieldValueDidChange(this, r)),
                    this
                );
                },
            },
            {
                key: "revalidateValue",
                value: function () {
                return this.setValue(this.getValue());
                },
            },
            {
                key: "validateValue",
                value: function (e) {
                return (
                    null === this._validateValueCallback ||
                    this._validateValueCallback(e, this)
                );
                },
            },
            {
                key: "filterValue",
                value: function (e) {
                return null !== this._filterValueCallback
                    ? this._filterValueCallback(e, this)
                    : e;
                },
            },
            {
                key: "isRandomizable",
                value: function () {
                return this._randomizable;
                },
            },
            {
                key: "randomize",
                value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
                if (!this.isRandomizable()) return this;
                var t = this.randomizeValue(e || new il());
                return null !== t ? this.setValue(t) : this;
                },
            },
            {
                key: "randomizeValue",
                value: function (e) {
                return this.randomizeValueWithCallback(e);
                },
            },
            {
                key: "randomizeValueWithCallback",
                value: function (e) {
                return null !== this._randomizeValueCallback
                    ? this._randomizeValueCallback(e, this)
                    : null;
                },
            },
            {
                key: "isCustomRandomizationSet",
                value: function () {
                return null !== this._randomizeValueCallback;
                },
            },
            {
                key: "serializeValue",
                value: function () {
                if (!this.isValid())
                    throw new Error("Invalid field values can't be serialized.");
                var e = this.getValue();
                if (
                    "boolean" != typeof e &&
                    "number" != typeof e &&
                    "string" != typeof e &&
                    null !== e
                )
                    throw new Error(
                    "Field value serialization is not possible. Generic fields can only serialize boolean, number, string or null values safely. " +
                        "Received value type '".concat(gt(e), "'.")
                    );
                return e;
                },
            },
            {
                key: "extract",
                value: function (e) {
                return this.setValue(this.extractValue(e)), this;
                },
            },
            {
                key: "extractValue",
                value: function (e) {
                return e;
                },
            },
            {
                key: "didCreateView",
                value: function (e) {
                this.getView().setMessage(this.getMessage());
                },
            },
            ]),
            n
        );
        })(tu),
        ru = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return yt(this, n), ((e = t.call(this))._$input = null), e;
        }
        return (
            bt(n, [
            {
                key: "updateValue",
                value: function () {
                return (this._$input.checked = this.getModel().getValue()), this;
                },
            },
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("field-boolean"), e;
                },
            },
            {
                key: "renderField",
                value: function () {
                var e = this;
                this._$input = bn.createElement("input", {
                    className: "field-boolean__input",
                    type: "checkbox",
                    id: this.getId(),
                    onChange: this.inputValueDidChange.bind(this),
                    checked: this.getModel().getValue(),
                    onFocus: function (t) {
                    return e.focus();
                    },
                    onBlur: function (t) {
                    return e.blur();
                    },
                });
                var t = bn.createElement(
                    "label",
                    { className: "field-boolean__toggle", htmlFor: this.getId() },
                    [
                        bn.createElement(
                        "span",
                        { className: "field-boolean__choice" },
                        this.getModel().getTrueLabel()
                        ),
                        bn.createElement(
                        "span",
                        { className: "field-boolean__choice" },
                        this.getModel().getFalseLabel()
                        ),
                    ]
                    ),
                    r = At(wt(n.prototype), "renderField", this).call(this);
                return r.appendChild(this._$input), r.appendChild(t), r;
                },
            },
            {
                key: "inputValueDidChange",
                value: function (e) {
                this.getModel().viewValueDidChange(this, this._$input.checked);
                },
            },
            ]),
            n
        );
        })(Kl),
        iu = [!0, 1, "1", "true"],
        au = [!1, 0, "0", "false"],
        ou = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r,
            i =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
            yt(this, n),
            ((r = t.call(this, e, i))._viewPrototype = ru),
            (r._trueLabel = i.trueLabel || "Yes"),
            (r._falseLabel = i.falseLabel || "No"),
            r
            );
        }
        return (
            bt(n, [
            {
                key: "getTrueLabel",
                value: function () {
                return this._trueLabel;
                },
            },
            {
                key: "getFalseLabel",
                value: function () {
                return this._falseLabel;
                },
            },
            {
                key: "validateValue",
                value: function (e) {
                return -1 === iu.indexOf(e) && -1 === au.indexOf(e)
                    ? {
                        key: "booleanInvalid",
                        message: "The value is not a boolean",
                    }
                    : At(wt(n.prototype), "validateValue", this).call(this, e);
                },
            },
            {
                key: "filterValue",
                value: function (e) {
                return At(wt(n.prototype), "filterValue", this).call(
                    this,
                    -1 !== iu.indexOf(e)
                );
                },
            },
            {
                key: "randomizeValue",
                value: function (e) {
                var t = At(wt(n.prototype), "randomizeValue", this).call(this, e);
                return null !== t ? t : e.nextBoolean();
                },
            },
            {
                key: "viewValueDidChange",
                value: function (e, t) {
                this.setValue(t, e);
                },
            },
            ]),
            n
        );
        })(nu),
        su = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return yt(this, n), ((e = t.call(this))._$input = null), e;
        }
        return (
            bt(n, [
            {
                key: "updateValue",
                value: function () {
                var e = this.getModel().getValue(),
                    t = Fl.hexStringFromBytes(e);
                return (
                    (t = Bl.chunk(t, 2).join(" ")), (this._$input.value = t), this
                );
                },
            },
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("field-byte"), e;
                },
            },
            {
                key: "renderField",
                value: function () {
                var e = this;
                this._$input = bn.createElement("input", {
                    className: "field-byte__input",
                    id: this.getId(),
                    type: "text",
                    spellcheck: !1,
                    onInput: this.inputValueDidChange.bind(this),
                    onFocus: function (t) {
                    return e.focus();
                    },
                    onBlur: function (t) {
                    return e.blur();
                    },
                });
                var t = At(wt(n.prototype), "renderField", this).call(this);
                return (
                    t.classList.remove("field__field"),
                    t.classList.add("field-byte__field"),
                    t.appendChild(this._$input),
                    t
                );
                },
            },
            {
                key: "inputValueDidChange",
                value: function (e) {
                var t = Bl.removeWhitespaces(this._$input.value);
                if (null === t.match(/^[0-9a-f]+$/gi))
                    return this.setMessage(
                    "The value contains non-hexadecimal characters"
                    );
                this.clearMessage();
                var n = Fl.bytesFromHexString(t);
                this.getModel().viewValueDidChange(this, n);
                },
            },
            ]),
            n
        );
        })(Kl),
        lu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r,
            i =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
            yt(this, n),
            ((r = t.call(this, e, i))._viewPrototype = su),
            (r._value = i.value || new Uint8Array()),
            (r._minSize = null),
            (r._maxSize = null),
            (r._randomizeSize = i.randomizeSize || null),
            r.setMinSize(i.minSize || null, !1),
            r.setMaxSize(i.maxSize || null, !1),
            r
            );
        }
        return (
            bt(n, [
            {
                key: "getMinSize",
                value: function () {
                return this._minSize;
                },
            },
            {
                key: "setMinSize",
                value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return this._minSize === e
                    ? this
                    : ((this._minSize = null !== e ? parseInt(e) : null),
                    t ? this.revalidateValue() : this);
                },
            },
            {
                key: "getMaxSize",
                value: function () {
                return this._maxSize;
                },
            },
            {
                key: "setMaxSize",
                value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return this._maxSize === e
                    ? this
                    : ((this._maxSize = null !== e ? parseInt(e) : null),
                    t ? this.revalidateValue() : this);
                },
            },
            {
                key: "validateValue",
                value: function (e) {
                return e instanceof Uint8Array
                    ? null !== this._minSize && e.length < this._minSize
                    ? {
                        key: "byteSizeTooShort",
                        message:
                            "The value must be at least ".concat(
                            this._minSize,
                            " "
                            ) +
                            "".concat(
                            1 === this._minSize ? "byte" : "bytes",
                            " long, "
                            ) +
                            "found "
                            .concat(e.length, " ")
                            .concat(1 === e.length ? "byte" : "bytes"),
                        }
                    : null !== this._maxSize && e.length > this._maxSize
                    ? {
                        key: "byteSizeTooLong",
                        message:
                            "The value must not exceed ".concat(
                            this._maxSize,
                            " "
                            ) +
                            "".concat(
                            1 === this._maxSize ? "byte" : "bytes",
                            " in length, "
                            ) +
                            "found "
                            .concat(e.length, " ")
                            .concat(1 === e.length ? "byte" : "bytes"),
                        }
                    : At(wt(n.prototype), "validateValue", this).call(this, e)
                    : {
                        key: "byteUnexpectedType",
                        message: "The value is expected to be of type Uint8Array",
                    };
                },
            },
            {
                key: "randomizeValue",
                value: function (e) {
                var t = At(wt(n.prototype), "randomizeValue", this).call(this, e);
                return null !== t
                    ? t
                    : null !== this._randomizeSize
                    ? e.nextBytes(this._randomizeSize)
                    : null !== this.getMinSize()
                    ? e.nextBytes(this.getMinSize())
                    : this.isValid()
                    ? e.nextBytes(this.getValue().length)
                    : null;
                },
            },
            {
                key: "serializeValue",
                value: function () {
                return Fl.base64StringFromBytes(this.getValue());
                },
            },
            {
                key: "extractValue",
                value: function (e) {
                if ("string" != typeof e)
                    throw new Error(
                    "Value of field '".concat(
                        this.getName(),
                        "' is expected to be a valid "
                    ) + "base64 string."
                    );
                return Fl.bytesFromBase64String(e);
                },
            },
            {
                key: "viewValueDidChange",
                value: function (e, t) {
                this.setValue(t, e);
                },
            },
            ]),
            n
        );
        })(nu),
        uu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._style = "default"),
            (e._$select = null),
            (e._$$radio = []),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "getStyle",
                value: function () {
                return this._style;
                },
            },
            {
                key: "setStyle",
                value: function (e) {
                return (
                    this._style !== e && ((this._style = e), this.refresh()), this
                );
                },
            },
            {
                key: "updateValue",
                value: function () {
                var e = this.getModel().getSelectedIndex();
                return (
                    "radio" === this.getStyle()
                    ? this._$$radio.forEach(function (t, n) {
                        t.checked = n === e;
                        })
                    : (this._$select.value = e),
                    this
                );
                },
            },
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return (
                    (e.className += " field-enum field-enum--".concat(
                    this.getStyle()
                    )),
                    e
                );
                },
            },
            {
                key: "renderField",
                value: function () {
                var e = this,
                    t = this.getModel().getElementLabels(),
                    r = this.getModel().getElementDescriptions(),
                    i = At(wt(n.prototype), "renderField", this).call(this);
                if (
                    (i.classList.remove("field__field"),
                    i.classList.add("field-enum__field"),
                    "radio" === this.getStyle())
                ) {
                    this._$$radio = [];
                    var a = bn.createElement("div", {
                    className: "field-enum__options",
                    role: "radiogroup",
                    id: this.getId(),
                    });
                    i.appendChild(a),
                    t.map(function (t, n) {
                        var r = "".concat(e.getId(), "-").concat(n + 1),
                        i = bn.createElement("input", {
                            type: "radio",
                            className: "field-enum__option-radio",
                            id: r,
                            onChange: e.valueDidChange.bind(e),
                            name: e.getId(),
                        }),
                        o = bn.createElement(
                            "div",
                            { className: "field-enum__option" },
                            [
                            i,
                            bn.createElement(
                                "label",
                                {
                                htmlFor: r,
                                className: "field-enum__option-label",
                                },
                                t
                            ),
                            ]
                        );
                        e._$$radio.push(i), a.appendChild(o);
                    });
                } else {
                    var o = t.map(function (e, t) {
                    return bn.createElement(
                        "option",
                        { value: t, title: r[t] || "" },
                        e
                    );
                    });
                    (this._$select = bn.createElement(
                    "select",
                    {
                        className: "field-enum__select",
                        id: this.getId(),
                        onChange: this.valueDidChange.bind(this),
                        onFocus: function (t) {
                        return e.focus();
                        },
                        onBlur: function (t) {
                        return e.blur();
                        },
                    },
                    o
                    )),
                    i.appendChild(this._$select);
                }
                return i;
                },
            },
            {
                key: "valueDidChange",
                value: function (e) {
                var t =
                    "radio" === this.getStyle()
                        ? this._$$radio.findIndex(function (e) {
                            return e.checked;
                        })
                        : parseInt(this._$select.value),
                    n = this.getModel().getElementAt(t);
                this.getModel().viewValueDidChange(this, n);
                },
            },
            ]),
            n
        );
        })(Kl),
        cu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e, r) {
            var i;
            return (
            yt(this, n),
            ((i = t.call(this, e, r))._viewPrototype = uu),
            (i._elements = []),
            (i._labels = []),
            (i._descriptions = []),
            (i._style = r.style || "default"),
            i.setElements(
                r.elements,
                r.labels || null,
                r.descriptions || null,
                !1
            ),
            i
            );
        }
        return (
            bt(n, [
            {
                key: "getElements",
                value: function () {
                return this._elements;
                },
            },
            {
                key: "getElementLabels",
                value: function () {
                return this._labels;
                },
            },
            {
                key: "getElementDescriptions",
                value: function () {
                return this._descriptions;
                },
            },
            {
                key: "setElements",
                value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    n =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    r =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3];
                if (0 === e.length)
                    throw new Error("Array of elements can't be empty.");
                if (null !== t && e.length !== t.length)
                    throw new Error(
                    "Element and label arrays require the same length."
                    );
                if (null !== n && e.length !== n.length)
                    throw new Error(
                    "Element and description arrays require the same length."
                    );
                return (
                    (this._elements = e),
                    (this._labels = null !== t ? t : e),
                    (this._descriptions =
                    null !== n
                        ? n
                        : e.map(function () {
                            return null;
                        })),
                    null === this._value && (this._value = this._elements[0]),
                    this.hasView() && this.getView().refresh(),
                    r ? this.revalidateValue() : this
                );
                },
            },
            {
                key: "getElementAt",
                value: function (e) {
                return e < this._elements.length ? this._elements[e] : null;
                },
            },
            {
                key: "getSelectedIndex",
                value: function () {
                return this._elements.indexOf(this.getValue());
                },
            },
            {
                key: "setSelectedIndex",
                value: function (e) {
                var t = this._elements[e];
                return this.setValue(t);
                },
            },
            {
                key: "getStyle",
                value: function () {
                return this._style;
                },
            },
            {
                key: "setStyle",
                value: function (e) {
                return (
                    (this._style = e),
                    this.hasView() && this.getView().setStyle(e),
                    this
                );
                },
            },
            {
                key: "validateValue",
                value: function (e) {
                return -1 === this._elements.indexOf(e)
                    ? {
                        key: "enumNotInHaystack",
                        message: "The value must be occur in the list of elements",
                    }
                    : At(wt(n.prototype), "validateValue", this).call(this, e);
                },
            },
            {
                key: "randomizeValue",
                value: function (e) {
                var t = At(wt(n.prototype), "randomizeValue", this).call(this, e);
                return null !== t ? t : e.nextChoice(this._elements);
                },
            },
            {
                key: "viewValueDidChange",
                value: function (e, t) {
                this.setValue(t, e);
                },
            },
            {
                key: "didCreateView",
                value: function (e) {
                At(wt(n.prototype), "didCreateView", this).call(this, e),
                    this.getView().setStyle(this.getStyle());
                },
            },
            ]),
            n
        );
        })(nu),
        hu = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        du = "[" + hu + "]",
        fu = RegExp("^" + du + du + "*"),
        gu = RegExp(du + du + "*$"),
        pu = function (e) {
        return function (t) {
            var n = String(b(t));
            return (
            1 & e && (n = n.replace(fu, "")), 2 & e && (n = n.replace(gu, "")), n
            );
        };
        },
        vu = { start: pu(1), end: pu(2), trim: pu(3) },
        yu = Se.f,
        mu = M.f,
        bu = P.f,
        ku = vu.trim,
        wu = "Number",
        _u = s.Number,
        Su = _u.prototype,
        xu = p(pr(Su)) == wu,
        Iu = function (e) {
        var t,
            n,
            r,
            i,
            a,
            o,
            s,
            l,
            u = _(e, !1);
        if ("string" == typeof u && u.length > 2)
            if (43 === (t = (u = ku(u)).charCodeAt(0)) || 45 === t) {
            if (88 === (n = u.charCodeAt(2)) || 120 === n) return NaN;
            } else if (48 === t) {
            switch (u.charCodeAt(1)) {
                case 66:
                case 98:
                (r = 2), (i = 49);
                break;
                case 79:
                case 111:
                (r = 8), (i = 55);
                break;
                default:
                return +u;
            }
            for (o = (a = u.slice(2)).length, s = 0; s < o; s++)
                if ((l = a.charCodeAt(s)) < 48 || l > i) return NaN;
            return parseInt(a, r);
            }
        return +u;
        };
    if (Pe(wu, !_u(" 0o1") || !_u("0b1") || _u("+0x1"))) {
        for (
        var Cu,
            Vu = function (e) {
            var t = arguments.length < 1 ? 0 : e,
                n = this;
            return n instanceof Vu &&
                (xu
                ? l(function () {
                    Su.valueOf.call(n);
                    })
                : p(n) != wu)
                ? wo(new _u(Iu(t)), n, Vu)
                : Iu(t);
            },
            Eu = u
            ? yu(_u)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
                ),
            Au = 0;
        Eu.length > Au;
        Au++
        )
        x(_u, (Cu = Eu[Au])) && !x(Vu, Cu) && bu(Vu, Cu, mu(_u, Cu));
        (Vu.prototype = Su), (Su.constructor = Vu), ae(s, wu, Vu);
    }
    Oe({ target: "Number", stat: !0 }, { MAX_SAFE_INTEGER: 9007199254740991 }),
        Oe({ target: "Number", stat: !0 }, { MIN_SAFE_INTEGER: -9007199254740991 });
    var Mu,
        Tu,
        Lu,
        Pu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._$input = null),
            (e._displayEnabled = !1),
            (e._$display = null),
            (e._$displayValue = null),
            (e._$displayDescription = null),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "updateValue",
                value: function () {
                var e = this.getModel().getValue();
                return (
                    (this._$input.value = e.toString()),
                    this._updateValueDisplay(),
                    this
                );
                },
            },
            {
                key: "_updateValueDisplay",
                value: function () {
                var e = this.getModel().getValue(),
                    t = this.getModel().getValueDescription(),
                    n = null !== t;
                return (
                    this._displayEnabled !== n &&
                    ((this._displayEnabled = n),
                    n
                        ? this._$display.classList.add(
                            "field-number__display--enabled"
                        )
                        : (this._$display.classList.remove(
                            "field-number__display--enabled"
                        ),
                        (this._$displayValue.innerText = ""),
                        (this._$displayDescription.innerText = ""))),
                    n &&
                    ((this._$displayValue.innerText = e.toString()),
                    (this._$displayDescription.innerText = t)),
                    this
                );
                },
            },
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("field-number"), e;
                },
            },
            {
                key: "renderField",
                value: function () {
                var e = this;
                (this._$input = bn.createElement("input", {
                    className: "field-number__input",
                    id: this.getId(),
                    type: "number",
                    onInput: this.inputValueDidChange.bind(this),
                    onFocus: function (t) {
                    return e.focus();
                    },
                    onBlur: function (t) {
                    return e.blur();
                    },
                })),
                    (this._$displayValue = bn.createElement("span", {
                    className: "field-number__display-value",
                    })),
                    (this._$displayDescription = bn.createElement("span", {
                    className: "field-number__display-description",
                    })),
                    (this._$display = bn.createElement(
                    "div",
                    { className: "field-number__display" },
                    [this._$displayValue, this._$displayDescription]
                    ));
                var t = bn.createElement(
                    "button",
                    {
                        className: "field-number__btn-step-down",
                        onClick: this.stepDownButtonDidClick.bind(this),
                    },
                    "Step Down"
                    ),
                    r = bn.createElement(
                    "div",
                    { className: "field-number__value" },
                    [this._$input, this._$display]
                    ),
                    i = bn.createElement(
                    "button",
                    {
                        className: "field-number__btn-step-up",
                        onClick: this.stepUpButtonDidClick.bind(this),
                    },
                    "Step Up"
                    ),
                    a = At(wt(n.prototype), "renderField", this).call(this);
                return (
                    a.classList.remove("field__field"),
                    a.classList.add("field-number__field"),
                    a.appendChild(t),
                    a.appendChild(r),
                    a.appendChild(i),
                    a
                );
                },
            },
            {
                key: "inputValueDidChange",
                value: function (e) {
                this.getModel().viewValueDidChange(this, this._$input.value),
                    this._updateValueDisplay();
                },
            },
            {
                key: "stepDownButtonDidClick",
                value: function (e) {
                return this.getModel().stepDown(), e.preventDefault(), !1;
                },
            },
            {
                key: "stepUpButtonDidClick",
                value: function (e) {
                return this.getModel().stepUp(), e.preventDefault(), !1;
                },
            },
            ]),
            n
        );
        })(Kl),
        Bu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e, r) {
            var i;
            return (
            yt(this, n),
            ((i = t.call(this, e, r))._viewPrototype = Pu),
            (i._integer = r.integer || !1),
            (i._useBigInt = r.useBigInt && i._integer),
            (i._step = r.step || 1),
            (i._min =
                void 0 !== r.min
                ? r.min
                : i._integer && !i._useBigInt
                ? Number.MIN_SAFE_INTEGER
                : null),
            (i._max =
                void 0 !== r.max
                ? r.max
                : i._integer && !i._useBigInt
                ? Number.MAX_SAFE_INTEGER
                : null),
            (i._rotate =
                void 0 !== r.rotate
                ? r.rotate
                : void 0 !== r.min && void 0 !== r.max),
            (i._describeValueCallback = r.describeValue || null),
            i
            );
        }
        return (
            bt(n, [
            {
                key: "isInteger",
                value: function () {
                return this._integer;
                },
            },
            {
                key: "setInteger",
                value: function (e) {
                return (this._integer = e), this.revalidateValue();
                },
            },
            {
                key: "getStep",
                value: function () {
                return this._step;
                },
            },
            {
                key: "setStep",
                value: function (e) {
                return (this._step = e), this;
                },
            },
            {
                key: "stepValue",
                value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 100,
                    n = this.getValue(),
                    r = 0,
                    i = !1;
                for (
                    ("bigint" != typeof n && "bigint" != typeof e) ||
                    ((n = BigInt(n)), (e = BigInt(e)));
                    !i &&
                    r++ < t &&
                    (this._rotate || e > 0 || n != this._min) &&
                    (this._rotate || e < 0 || n != this._max);

                )
                    (n += e),
                    this._rotate && n > this._max && this._rotate
                        ? (n = this._min)
                        : this._rotate &&
                        n < this._min &&
                        this._rotate &&
                        (n = this._max + e),
                    (i = !0 === this.validateValue(n));
                return i ? n : null;
                },
            },
            {
                key: "stepUp",
                value: function () {
                var e = this.stepValue(this._step);
                return null !== e ? this.setValue(e) : this;
                },
            },
            {
                key: "stepDown",
                value: function () {
                var e = this.stepValue(-this._step);
                return null !== e ? this.setValue(e) : this;
                },
            },
            {
                key: "getMin",
                value: function () {
                return this._min;
                },
            },
            {
                key: "setMin",
                value: function (e) {
                return (this._min = e), this.revalidateValue();
                },
            },
            {
                key: "getMax",
                value: function () {
                return this._max;
                },
            },
            {
                key: "setMax",
                value: function (e) {
                return (this._max = e), this.revalidateValue();
                },
            },
            {
                key: "isRotate",
                value: function () {
                return this._rotate;
                },
            },
            {
                key: "setRotate",
                value: function (e) {
                return (
                    (this._rotate = e && null !== this._min && null !== this._max),
                    this
                );
                },
            },
            {
                key: "getValueDescription",
                value: function () {
                return this.isValid() && null !== this._describeValueCallback
                    ? this._describeValueCallback(this.getValue(), this)
                    : null;
                },
            },
            {
                key: "setNeedsValueDescriptionUpdate",
                value: function () {
                this.hasView() && this.getView().updateValue();
                },
            },
            {
                key: "validateValue",
                value: function (e) {
                var t = this.filterValue(e);
                return "bigint" == typeof t || (!isNaN(t) && isFinite(t))
                    ? null !== this._min && t < this._min
                    ? {
                        key: "numberTooSmall",
                        message:
                            "The value must be greater than or equal to ".concat(
                            this._min
                            ),
                        }
                    : null !== this._max && t >= this._max
                    ? {
                        key: "numberTooLarge",
                        message: "The value must be less than ".concat(this._max),
                        }
                    : At(wt(n.prototype), "validateValue", this).call(this, t)
                    : {
                        key: "numberNotNumeric",
                        message: "The value is not numeric",
                    };
                },
            },
            {
                key: "filterValue",
                value: function (e) {
                if (this._useBigInt && "bigint" == typeof e);
                else if (this._useBigInt && "bigint" != typeof e) {
                    var t = parseInt(e);
                    t >= Number.MIN_SAFE_INTEGER && t <= Number.MAX_SAFE_INTEGER
                    ? (e = t)
                    : isNaN(t) || (e = BigInt(e));
                } else e = this._integer ? parseInt(e) : parseFloat(e);
                return At(wt(n.prototype), "filterValue", this).call(this, e);
                },
            },
            {
                key: "randomizeValue",
                value: function (e) {
                var t = At(wt(n.prototype), "randomizeValue", this).call(this, e);
                return null !== t
                    ? t
                    : null !== this._min && null !== this._max
                    ? this._integer
                    ? e.nextInteger(this._min, Math.ceil(this._max) - 1)
                    : e.nextFloat(this._min, this._max)
                    : null;
                },
            },
            {
                key: "serializeValue",
                value: function () {
                var e = this.getValue();
                return "bigint" == typeof e ? e.toString() : e;
                },
            },
            {
                key: "viewValueDidChange",
                value: function (e, t) {
                this.setValue(t, e);
                },
            },
            ]),
            n
        );
        })(nu),
        Ou = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return yt(this, n), ((e = t.call(this))._$input = null), e;
        }
        return (
            bt(n, [
            {
                key: "updateValue",
                value: function () {
                return (
                    (this._$input.value = this.getModel().getValue().getString()),
                    this
                );
                },
            },
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("field-text"), e;
                },
            },
            {
                key: "renderField",
                value: function () {
                var e = this;
                this._$input = bn.createElement("input", {
                    className: "field-text__input",
                    id: this.getId(),
                    type: "text",
                    spellcheck: !1,
                    onInput: this.inputValueDidChange.bind(this),
                    onFocus: function (t) {
                    return e.focus();
                    },
                    onBlur: function (t) {
                    return e.blur();
                    },
                });
                var t = At(wt(n.prototype), "renderField", this).call(this);
                return (
                    t.classList.remove("field__field"),
                    t.classList.add("field-text__field"),
                    t.appendChild(this._$input),
                    t
                );
                },
            },
            {
                key: "inputValueDidChange",
                value: function (e) {
                this.getModel().viewValueDidChange(this, this._$input.value);
                },
            },
            ]),
            n
        );
        })(Kl),
        Ru = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r,
            i =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return (
            yt(this, n),
            ((r = t.call(this, e, i))._viewPrototype = Ou),
            (r._value = ql.wrap(i.value || null)),
            (r._minLength = null),
            (r._maxLength = null),
            (r._whitelistChars = null),
            (r._blacklistChars = null),
            (r._uniqueChars = !1),
            (r._caseSensitivity = null),
            r.setMinLength(void 0 !== i.minLength ? i.minLength : null, !1),
            r.setMaxLength(void 0 !== i.maxLength ? i.maxLength : null, !1),
            r.setWhitelistChars(i.whitelistChars || null, !1),
            r.setBlacklistChars(i.blacklistChars || null, !1),
            r.setUniqueChars(i.uniqueChars || !1, !1),
            r.setCaseSensitivity(!1 !== i.caseSensitivity, !1),
            r
            );
        }
        return (
            bt(n, [
            {
                key: "getMinLength",
                value: function () {
                return this._minLength;
                },
            },
            {
                key: "setMinLength",
                value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return this._minLength === e
                    ? this
                    : ((this._minLength = null !== e ? parseInt(e) : null),
                    t ? this.revalidateValue() : this);
                },
            },
            {
                key: "getMaxLength",
                value: function () {
                return this._maxLength;
                },
            },
            {
                key: "setMaxLength",
                value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return this._maxLength === e
                    ? this
                    : ((this._maxLength = null !== e ? parseInt(e) : null),
                    t ? this.revalidateValue() : this);
                },
            },
            {
                key: "getWhitelistChars",
                value: function () {
                return this._whitelistChars;
                },
            },
            {
                key: "setWhitelistChars",
                value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return (
                    (this._whitelistChars =
                    null !== e ? ql.wrap(e).getCodePoints() : null),
                    t ? this.revalidateValue() : this
                );
                },
            },
            {
                key: "getBlacklistChars",
                value: function () {
                return this._blacklistChars;
                },
            },
            {
                key: "setBlacklistChars",
                value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return (
                    (this._blacklistChars =
                    null !== e ? ql.wrap(e).getCodePoints() : null),
                    t ? this.revalidateValue() : this
                );
                },
            },
            {
                key: "isUniqueChars",
                value: function () {
                return this._uniqueChars;
                },
            },
            {
                key: "setUniqueChars",
                value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return this._uniqueChars === e
                    ? this
                    : ((this._uniqueChars = e), t ? this.revalidateValue() : this);
                },
            },
            {
                key: "isCaseSensitive",
                value: function () {
                return this._caseSensitivity;
                },
            },
            {
                key: "setCaseSensitivity",
                value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                return this._caseSensitivity === e
                    ? this
                    : ((this._caseSensitivity = e),
                    t ? this.revalidateValue() : this);
                },
            },
            {
                key: "validateValue",
                value: function (e) {
                if ("function" != typeof e.toString)
                    return {
                    key: "textInvalidString",
                    message: "The value can't be casted to a string",
                    };
                var t = this.filterValue(e);
                if (null !== this._minLength && t.getLength() < this._minLength)
                    return {
                    key: "textLengthTooShort",
                    message:
                        "The value must be at least ".concat(this._minLength, " ") +
                        "".concat(
                        1 === this._minLength ? "character" : "characters",
                        " long"
                        ),
                    };
                if (null !== this._maxLength && t.getLength() > this._maxLength)
                    return {
                    key: "textLengthTooLong",
                    message:
                        "The value must not exceed ".concat(this._maxLength, " ") +
                        "".concat(
                        1 === this._maxLength ? "character" : "characters",
                        " in length"
                        ),
                    };
                if (this._uniqueChars && !al.isUnique(t.getCodePoints()))
                    return {
                    key: "textCharactersNotUnique",
                    message: "The value must not contain duplicate characters",
                    };
                if (
                    null !== this._whitelistChars ||
                    null !== this._blacklistChars
                ) {
                    for (
                    var r,
                        i = this._whitelistChars,
                        a = this._blacklistChars,
                        o = [],
                        s = 0;
                    s < t.getLength();
                    s++
                    )
                    (r = t.getCodePointAt(s)),
                        ((null !== i && -1 === i.indexOf(r)) ||
                        (null !== a && -1 !== a.indexOf(r))) &&
                        o.push(t.getCharAt(s));
                    if (o.length > 0)
                    return (
                        (o = al.unique(o)),
                        {
                        key: "textForbiddenCharacter",
                        message:
                            "The value contains forbidden characters: " +
                            "'".concat(o.join(""), "'"),
                        }
                    );
                }
                return At(wt(n.prototype), "validateValue", this).call(this, t);
                },
            },
            {
                key: "filterValue",
                value: function (e) {
                return (
                    (e = ql.wrap(e)),
                    !1 === this._caseSensitivity && (e = e.toLowerCase()),
                    ql.wrap(At(wt(n.prototype), "filterValue", this).call(this, e))
                );
                },
            },
            {
                key: "randomizeValue",
                value: function (e) {
                var t = At(wt(n.prototype), "randomizeValue", this).call(this, e);
                if (null !== t) return t;
                if (this.isValid()) {
                    if (this.isUniqueChars()) {
                    var r = this.getValue().getCodePoints();
                    return ql.wrap(al.shuffle(r, e));
                    }
                    if (null !== this.getWhitelistChars()) {
                    for (
                        var i = this.getValue().getLength(), a = [], o = 0;
                        o < i;
                        o++
                    )
                        a.push(e.nextChoice(this.getWhitelistChars()));
                    return ql.wrap(a);
                    }
                }
                return null;
                },
            },
            {
                key: "serializeValue",
                value: function () {
                return this.getValue().getString();
                },
            },
            {
                key: "extractValue",
                value: function (e) {
                if ("string" != typeof e)
                    throw new Error(
                    "Value of field '".concat(
                        this.getName(),
                        "' is expected to be a string."
                    )
                    );
                return ql.wrap(e);
                },
            },
            {
                key: "viewValueDidChange",
                value: function (e, t) {
                this.setValue(t, e);
                },
            },
            ]),
            n
        );
        })(nu),
        zu = null,
        Nu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            yt(this, n), (e = t.call(this));
            var r = { boolean: ou, bytes: lu, enum: cu, number: Bu, text: Ru };
            for (var i in r) e.register(i, r[i]);
            return e;
        }
        return (
            bt(
            n,
            [
                {
                key: "create",
                value: function (e) {
                    if (!e.name)
                    throw new Error(
                        "Field specification requires a 'name' field."
                    );
                    if (!e.type)
                    throw new Error(
                        "Field specification requires a 'type' field."
                    );
                    if (!this.exists(e.type))
                    throw new Error("Unknown Field type '".concat(e.type, "'."));
                    return At(wt(n.prototype), "create", this).call(
                    this,
                    e.type,
                    e.name,
                    e
                    );
                },
                },
            ],
            [
                {
                key: "getInstance",
                value: function () {
                    return null === zu && (zu = new n()), zu;
                },
                },
            ]
            ),
            n
        );
        })(An),
        Fu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e,
            r =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            i =
                arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            return (
            yt(this, n),
            ((e = t.call(this))._viewPrototype = Xl),
            (e._delegate = null),
            (e._fieldFactory = i),
            (e._fields = []),
            e.addFields(r),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "getFields",
                value: function () {
                return this._fields.slice();
                },
            },
            {
                key: "getInvalidFields",
                value: function () {
                return this._fields.filter(function (e) {
                    return !e.isValid();
                });
                },
            },
            {
                key: "getVisibleFields",
                value: function () {
                return this._fields.filter(function (e) {
                    return e.isVisible();
                });
                },
            },
            {
                key: "addFields",
                value: function (e) {
                return e.forEach(this.addField.bind(this)), this;
                },
            },
            {
                key: "getField",
                value: function (e) {
                return (
                    this._fields.find(function (t) {
                    return t.getName() === e;
                    }) || null
                );
                },
            },
            {
                key: "addField",
                value: function (e) {
                var t = e;
                if (!(e instanceof nu)) {
                    var n = e;
                    void 0 === n.priority &&
                    (n.priority = this._calculateDefaultPriority()),
                    (t = this.getFieldFactory().create(n));
                }
                if (this.getField(t.getName()))
                    throw new Error(
                    "Name '".concat(
                        t.getName(),
                        "' is already assigned to a field."
                    )
                    );
                return (
                    this._fields.push(t),
                    t.setDelegate(this),
                    this._sortFields(),
                    t.isVisible() &&
                    this.hasView() &&
                    this.getView().addSubview(t.getView()),
                    this
                );
                },
            },
            {
                key: "getFieldValue",
                value: function (e) {
                var t = this.getField(e);
                if (null === t)
                    throw new Error(
                    "There is no field assigned to the name '".concat(e, "'.")
                    );
                return t.getValue();
                },
            },
            {
                key: "setFieldValue",
                value: function (e, t) {
                var n = this.getField(e);
                if (null === n)
                    throw new Error(
                    "There is no field assigned to the name '".concat(e, "'.")
                    );
                return n.setValue(t), this;
                },
            },
            {
                key: "getFieldValues",
                value: function () {
                var e = {};
                return (
                    this.getVisibleFields().forEach(function (t) {
                    e[t.getName()] = t.getValue();
                    }),
                    e
                );
                },
            },
            {
                key: "setFieldValues",
                value: function (e) {
                for (var t in e) this.setFieldValue(t, e[t]);
                return this;
                },
            },
            {
                key: "getFieldFactory",
                value: function () {
                return (
                    null === this._fieldFactory &&
                    (this._fieldFactory = Nu.getInstance()),
                    this._fieldFactory
                );
                },
            },
            {
                key: "setFieldFactory",
                value: function (e) {
                return (this._fieldFactory = e), this;
                },
            },
            {
                key: "isValid",
                value: function () {
                return 0 === this.getInvalidFields().length;
                },
            },
            {
                key: "isRandomizable",
                value: function () {
                return (
                    void 0 !==
                    this._fields.find(function (e) {
                    return e.isRandomizable();
                    })
                );
                },
            },
            {
                key: "randomize",
                value: function () {
                return (
                    this._fields
                    .filter(function (e) {
                        return e.isVisible() && e.isRandomizable();
                    })
                    .forEach(function (e) {
                        return e.randomize();
                    }),
                    this
                );
                },
            },
            {
                key: "getDelegate",
                value: function () {
                return this._delegate;
                },
            },
            {
                key: "setDelegate",
                value: function (e) {
                return (this._delegate = e), this;
                },
            },
            {
                key: "serializeValues",
                value: function () {
                var e = {};
                return (
                    this.getVisibleFields().forEach(function (t) {
                    e[t.getName()] = t.serializeValue();
                    }),
                    e
                );
                },
            },
            {
                key: "extract",
                value: function (e) {
                return this.setFieldValues(this.extractValues(e));
                },
            },
            {
                key: "extractValues",
                value: function (e) {
                if ("object" !== gt(e))
                    throw new Error(
                    "Serialized form values is expected to be an object mapping field names to their respective serialized values. " +
                        "Received value type '".concat(gt(e), "'.")
                    );
                var t = {};
                for (var n in e) {
                    if ("string" != typeof n)
                    throw new Error(
                        "Field name is expected to be a string. " +
                        "Received type '".concat(gt(n), "'.")
                    );
                    var r = this.getField(n);
                    if (null === r)
                    throw new Error(
                        "There is no field assigned to the name '".concat(n, "'.")
                    );
                    t[n] = r.extractValue(e[n]);
                }
                return t;
                },
            },
            {
                key: "_calculateDefaultPriority",
                value: function () {
                if (0 === this._fields.length) return 0;
                for (
                    var e = this._fields[0].getPriority(), t = 1;
                    t < this._fields.length;
                    t++
                )
                    e = Math.min(e, this._fields[t].getPriority());
                return e - 1;
                },
            },
            {
                key: "_sortFields",
                value: function () {
                this._fields.sort(function (e, t) {
                    return t.getPriority() - e.getPriority();
                });
                },
            },
            {
                key: "didCreateView",
                value: function (e) {
                var t = this;
                this._fields.forEach(function (e) {
                    return t.fieldNeedsLayout(e);
                });
                },
            },
            {
                key: "fieldPriorityDidChange",
                value: function (e, t) {
                this._sortFields();
                },
            },
            {
                key: "fieldNeedsLayout",
                value: function (e) {
                this.hasView() &&
                    (e.getView().removeFromSuperview(),
                    e.isVisible() && this.getView().addSubview(e.getView()));
                },
            },
            {
                key: "fieldValueDidChange",
                value: function (e, t) {
                this._delegate &&
                    this._delegate.formValueDidChange &&
                    this.getDelegate().formValueDidChange(this, e, t);
                },
            },
            ]),
            n
        );
        })(tu),
        Du = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._pipe = null),
            (e._viewPrototype = Jl),
            (e._settingsForm = new Fu()),
            e._settingsForm.setDelegate(Ct(e)),
            (e._title = null),
            (e._hidden = !1),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                throw new Error(
                    "Brick static method 'getMeta' has not been overridden."
                );
                },
            },
            ]),
            bt(
            n,
            [
                {
                key: "getPipe",
                value: function () {
                    return this._pipe;
                },
                },
                {
                key: "hasPipe",
                value: function () {
                    return null !== this._pipe;
                },
                },
                {
                key: "setPipe",
                value: function (e) {
                    return (this._pipe = e), this;
                },
                },
                {
                key: "getMeta",
                value: function () {
                    return this.constructor.getMeta();
                },
                },
                {
                key: "getName",
                value: function () {
                    return this.getMeta().name;
                },
                },
                {
                key: "getTitle",
                value: function () {
                    return null === this._title
                    ? this.getMeta().title
                    : this._title;
                },
                },
                {
                key: "setTitle",
                value: function (e) {
                    return (
                    (this._title = e && e !== this.getMeta().title ? e : null),
                    this
                    );
                },
                },
                {
                key: "isHidden",
                value: function () {
                    return this._hidden;
                },
                },
                {
                key: "setHidden",
                value: function () {
                    var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                    return (
                    this._hidden !== e &&
                        ((this._hidden = e),
                        this.hasPipe() &&
                        this.getPipe().brickVisibilityDidChange(this, e)),
                    this
                    );
                },
                },
                {
                key: "getSettingsForm",
                value: function () {
                    return this._settingsForm;
                },
                },
                {
                key: "getSettings",
                value: function () {
                    return this._settingsForm.getFields();
                },
                },
                {
                key: "addSettings",
                value: function (e) {
                    return this._settingsForm.addFields(e), this;
                },
                },
                {
                key: "getSetting",
                value: function (e) {
                    return this._settingsForm.getField(e);
                },
                },
                {
                key: "addSetting",
                value: function (e) {
                    return this._settingsForm.addField(e), this;
                },
                },
                {
                key: "getSettingValue",
                value: function (e) {
                    return this._settingsForm.getFieldValue(e);
                },
                },
                {
                key: "setSettingValue",
                value: function (e, t) {
                    return this._settingsForm.setFieldValue(e, t), this;
                },
                },
                {
                key: "getSettingValues",
                value: function () {
                    return this._settingsForm.getFieldValues();
                },
                },
                {
                key: "setSettingValues",
                value: function (e) {
                    return this._settingsForm.setFieldValues(e), this;
                },
                },
                {
                key: "isValid",
                value: function () {
                    return this._settingsForm.isValid();
                },
                },
                {
                key: "isSettingValid",
                value: function () {
                    for (
                    var e = this, t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                    )
                    n[r] = arguments[r];
                    return (
                    void 0 ===
                    n.find(function (t) {
                        return !e.getSetting(t).isValid();
                    })
                    );
                },
                },
                {
                key: "isRandomizable",
                value: function () {
                    return this._settingsForm.isRandomizable();
                },
                },
                {
                key: "randomize",
                value: function () {
                    return this._settingsForm.randomize(), this;
                },
                },
                {
                key: "formValueDidChange",
                value: function (e, t, n) {
                    e === this._settingsForm &&
                    (this.settingValueDidChange(t, n),
                    this.hasPipe() && this.getPipe().brickSettingDidChange(this));
                },
                },
                { key: "settingValueDidChange", value: function (e, t) {} },
                {
                key: "didCreateView",
                value: function (e) {
                    e.addSubview(this._settingsForm.getView());
                },
                },
                {
                key: "viewMenuItemDidClick",
                value: function (e, t) {
                    switch (
                    (eu.trigger("brickMenuItemClick", {
                        brick: this,
                        menuItem: t,
                    }),
                    t)
                    ) {
                    case "remove":
                        this.getPipe().removeBrick(this);
                        break;
                    case "hide":
                        this.setHidden(!0);
                        break;
                    case "duplicate":
                        this.isValid() && this.getPipe().duplicateBrick(this);
                        break;
                    case "randomize":
                        this.randomize();
                    }
                },
                },
                {
                key: "viewReplaceButtonDidClick",
                value: function (e) {
                    this.hasPipe() &&
                    (eu.trigger("brickReplaceButtonClick", { brick: this }),
                    this.getPipe().brickReplaceButtonDidClick(this));
                },
                },
                {
                key: "serialize",
                value: function () {
                    var e = {};
                    (e.name = this.getName()),
                    null !== this._title && (e.title = this._title),
                    this.isHidden() && (e.hidden = !0);
                    var t = this._settingsForm.serializeValues();
                    return Object.keys(t).length > 0 && (e.settings = t), e;
                },
                },
                {
                key: "copy",
                value: function () {
                    if (!this.isValid())
                    throw new Error("Invalid bricks can't be copied.");
                    var e = new this.constructor();
                    return (
                    e.setTitle(this.getTitle()),
                    e.setHidden(this.isHidden()),
                    e.setSettingValues(this.getSettingValues()),
                    e
                    );
                },
                },
            ],
            [
                {
                key: "extract",
                value: function (e, t) {
                    if ("string" != typeof e.name)
                    throw new Error(
                        "Brick property 'name' is expected to be of type 'string'"
                    );
                    var n = e.name;
                    if (!t.exists(n))
                    throw new Error(
                        "Brick property 'name' refers to an unknown brick '".concat(
                        n,
                        "'"
                        )
                    );
                    var r = t.create(n);
                    if (void 0 !== e.title) {
                    if ("string" != typeof e.title)
                        throw new Error(
                        "Optional brick property 'title' is expected to be of type 'string'"
                        );
                    r.setTitle(e.title);
                    }
                    if (void 0 !== e.hidden) {
                    if ("boolean" != typeof e.hidden)
                        throw new Error(
                        "Optional brick property 'hidden' is expected to be of type 'boolean'"
                        );
                    r.setHidden(e.hidden);
                    }
                    if (void 0 !== e.reverse) {
                    if ("function" != typeof r.setReverse)
                        throw new Error(
                        "Optional brick property 'reverse' can only be set on encoder bricks"
                        );
                    if ("boolean" != typeof e.reverse)
                        throw new Error(
                        "Optional brick property 'reverse' is expected to be of type 'boolean'"
                        );
                    r.setReverse(e.reverse);
                    }
                    return (
                    void 0 !== e.settings &&
                        r.getSettingsForm().extract(e.settings),
                    r
                    );
                },
                },
            ]
            ),
            n
        );
        })(tu),
        ju = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._$encodeAction = null),
            (e._$decodeAction = null),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("encoder"), e;
                },
            },
            {
                key: "renderHeader",
                value: function () {
                (this._$encodeAction = bn.createElement(
                    "a",
                    {
                    className: "brick__action brick__action--active",
                    href: "#",
                    onClick: this.actionDidClick.bind(this, "encode"),
                    draggable: !1,
                    },
                    "Encode"
                )),
                    (this._$decodeAction = bn.createElement(
                    "a",
                    {
                        className: "brick__action",
                        href: "#",
                        onClick: this.actionDidClick.bind(this, "decode"),
                        draggable: !1,
                    },
                    "Decode"
                    ));
                var e = bn.createElement("ul", { className: "brick__actions" }, [
                    bn.createElement(
                        "li",
                        { className: "brick__action-item" },
                        this._$encodeAction
                    ),
                    bn.createElement(
                        "li",
                        { className: "brick__action-item" },
                        this._$decodeAction
                    ),
                    ]),
                    t = At(wt(n.prototype), "renderHeader", this).call(this);
                return t.insertBefore(e, t.firstChild), t;
                },
            },
            {
                key: "renderContent",
                value: function () {
                return null;
                },
            },
            {
                key: "actionDidClick",
                value: function (e, t) {
                t.preventDefault();
                var n = "decode" === e;
                this.getModel().isReverse() !== n &&
                    this.getModel().viewDidReverse(this);
                },
            },
            {
                key: "update",
                value: function () {
                var e = this.getModel().isReverse();
                e
                    ? (this._$encodeAction.classList.remove(
                        "brick__action--active"
                    ),
                    this._$decodeAction &&
                        this._$decodeAction.classList.add("brick__action--active"))
                    : (this._$encodeAction.classList.add("brick__action--active"),
                    this._$decodeAction &&
                        this._$decodeAction.classList.remove(
                        "brick__action--active"
                        ));
                var t = this.getModel().getLastError(),
                    n = this.getModel().getLastTranslationMeta();
                if (null !== n) {
                    var r = n.isEncode ? "forward" : "backward",
                    i = "".concat(n.isEncode !== e ? "Encoded" : "Decoded", " ");
                    return (
                    null !== n.charCount
                        ? (i +=
                            "".concat(n.charCount, " ") +
                            "".concat(1 === n.charCount ? "char" : "chars"))
                        : (i +=
                            "".concat(n.byteCount, " ") +
                            "".concat(1 === n.byteCount ? "byte" : "bytes")),
                    this.updateStatus(r, i)
                    );
                }
                return null !== t ? this.updateStatus("error", t.message) : this;
                },
            },
            ]),
            n
        );
        })(Jl),
        $u = (function () {
        function e() {
            yt(this, e);
        }
        return (
            bt(e, null, [
            {
                key: "mod",
                value: function (e, t) {
                var n = e % (t = t < 0 ? -t : t);
                return n < 0 ? n + t : n;
                },
            },
            {
                key: "div",
                value: function (e, t) {
                return Math.floor(e / t);
                },
            },
            {
                key: "isCoprime",
                value: function (t, n) {
                return 1 === e.gcd(t, n);
                },
            },
            {
                key: "gcd",
                value: function (e, t) {
                for (; 0 !== t; ) {
                    var n = e % t;
                    (e = t), (t = n);
                }
                return e;
                },
            },
            {
                key: "xgcd",
                value: function (t, n) {
                if (0 === n) return [1, 0, t];
                var r = Mt(e.xgcd(n, t % n), 3),
                    i = r[0],
                    a = r[1],
                    o = r[2];
                return [a, i - a * e.div(t, n), o];
                },
            },
            {
                key: "time",
                value: function () {
                return "undefined" != typeof window &&
                    void 0 !== window.performance
                    ? window.performance.now()
                    : "undefined" != typeof process
                    ? process.hrtime()[1] / 1e6
                    : parseFloat(new Date().getTime());
                },
            },
            ]),
            e
        );
        })(),
        qu = (function (e) {
        kt(a, e);
        var t,
            n,
            r,
            i = Et(a);
        function a() {
            var e;
            return (
            yt(this, a),
            ((e = i.call(this))._viewPrototype = ju),
            (e._reverse = !1),
            (e._encodeOnly = !1),
            (e._lastError = null),
            (e._lastTranslationMeta = null),
            e
            );
        }
        return (
            bt(a, [
            {
                key: "encode",
                value:
                ((r = vt(
                    regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return e.abrupt("return", this.translate(t, !0));
                            case 1:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return r.apply(this, arguments);
                }),
            },
            {
                key: "decode",
                value:
                ((n = vt(
                    regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return e.abrupt("return", this.translate(t, !1));
                            case 1:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return n.apply(this, arguments);
                }),
            },
            {
                key: "translate",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t, n) {
                    var r, i;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                ((e.prev = 0),
                                (r = $u.time()),
                                n !== this._reverse || !this.isEncodeOnly())
                                ) {
                                e.next = 4;
                                break;
                                }
                                throw new Rl(
                                "Decoding is not defined in brick '".concat(
                                    this.getMeta().title,
                                    "'"
                                )
                                );
                            case 4:
                                if (
                                !(
                                    (i = this.getSettingsForm().getInvalidFields())
                                    .length > 0
                                )
                                ) {
                                e.next = 7;
                                break;
                                }
                                throw new Rl(
                                "Can't ".concat(
                                    n ? "encode" : "decode",
                                    " with invalid settings: "
                                ) +
                                    i
                                    .map(function (e) {
                                        return (
                                        e.getLabel() +
                                        " (" +
                                        (e.getMessage() || "none") +
                                        ")"
                                        );
                                    })
                                    .join(", ")
                                );
                            case 7:
                                if (((t = ql.wrap(t)), n === this._reverse)) {
                                e.next = 26;
                                break;
                                }
                                return (
                                (e.t0 = ql), (e.next = 12), this.willEncode(t)
                                );
                            case 12:
                                return (
                                (e.t1 = e.sent),
                                (t = e.t0.wrap.call(e.t0, e.t1)),
                                (e.t2 = ql),
                                (e.next = 17),
                                this.performEncode(t)
                                );
                            case 17:
                                return (
                                (e.t3 = e.sent),
                                (t = e.t2.wrap.call(e.t2, e.t3)),
                                (e.t4 = ql),
                                (e.next = 22),
                                this.didEncode(t)
                                );
                            case 22:
                                (e.t5 = e.sent),
                                (t = e.t4.wrap.call(e.t4, e.t5)),
                                (e.next = 41);
                                break;
                            case 26:
                                return (
                                (e.t6 = ql), (e.next = 29), this.willDecode(t)
                                );
                            case 29:
                                return (
                                (e.t7 = e.sent),
                                (t = e.t6.wrap.call(e.t6, e.t7)),
                                (e.t8 = ql),
                                (e.next = 34),
                                this.performDecode(t)
                                );
                            case 34:
                                return (
                                (e.t9 = e.sent),
                                (t = e.t8.wrap.call(e.t8, e.t9)),
                                (e.t10 = ql),
                                (e.next = 39),
                                this.didDecode(t)
                                );
                            case 39:
                                (e.t11 = e.sent),
                                (t = e.t10.wrap.call(e.t10, e.t11));
                            case 41:
                                return (
                                (this._lastError = null),
                                (this._lastTranslationMeta = {
                                    isEncode: n,
                                    duration: $u.time() - r,
                                    byteCount: t.needsByteEncoding()
                                    ? null
                                    : t.getSize(),
                                    charCount: t.needsTextEncoding()
                                    ? null
                                    : t.getLength(),
                                }),
                                this.updateView(),
                                e.abrupt("return", t)
                                );
                            case 47:
                                throw (
                                ((e.prev = 47),
                                (e.t12 = e.catch(0)),
                                (this._lastError = e.t12),
                                (this._lastTranslationMeta = null),
                                this.updateView(),
                                e.t12)
                                );
                            case 53:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 47]]
                    );
                    })
                )),
                function (e, n) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "isReverse",
                value: function () {
                return this._reverse;
                },
            },
            {
                key: "setReverse",
                value: function (e) {
                return (
                    this._reverse !== e &&
                    ((this._reverse = e),
                    this.updateView(),
                    this.hasPipe() && this.getPipe().encoderDidReverse(this, e)),
                    this
                );
                },
            },
            {
                key: "isEncodeOnly",
                value: function () {
                return this._encodeOnly;
                },
            },
            {
                key: "setEncodeOnly",
                value: function (e) {
                return (this._encodeOnly = e), this;
                },
            },
            {
                key: "getLastError",
                value: function () {
                return this._lastError;
                },
            },
            {
                key: "getLastTranslationMeta",
                value: function () {
                return this._lastTranslationMeta;
                },
            },
            {
                key: "serialize",
                value: function () {
                var e = At(wt(a.prototype), "serialize", this).call(this);
                return this.isReverse() && (e.reverse = !0), e;
                },
            },
            {
                key: "copy",
                value: function () {
                var e = At(wt(a.prototype), "copy", this).call(this);
                return e.setReverse(this.isReverse()), e;
                },
            },
            {
                key: "willEncode",
                value: function (e) {
                return this.willTranslate(e, !0);
                },
            },
            {
                key: "performEncode",
                value: function (e) {
                return this.performTranslate(e, !0);
                },
            },
            {
                key: "didEncode",
                value: function (e) {
                return this.didTranslate(e, !0);
                },
            },
            {
                key: "willDecode",
                value: function (e) {
                return this.willTranslate(e, !1);
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                return this.performTranslate(e, !1);
                },
            },
            {
                key: "didDecode",
                value: function (e) {
                return this.didTranslate(e, !1);
                },
            },
            {
                key: "willTranslate",
                value: function (e, t) {
                return e;
                },
            },
            {
                key: "performTranslate",
                value: function (e, t) {
                return e;
                },
            },
            {
                key: "didTranslate",
                value: function (e, t) {
                return e;
                },
            },
            {
                key: "viewDidReverse",
                value: function (e) {
                this.setReverse(!this.isReverse()),
                    eu.trigger("encoderReverse", {
                    encoder: this,
                    reverse: this.isReverse(),
                    });
                },
            },
            ]),
            a
        );
        })(Du),
        Uu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._mode = 0),
            e.registerSeparatorSetting(),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "setCharacterToBlockMode",
                value: function () {
                return (this._mode = 0), this;
                },
            },
            {
                key: "setBlockToCharacterMode",
                value: function () {
                return (this._mode = 1), this;
                },
            },
            {
                key: "registerSeparatorSetting",
                value: function () {
                return this.addSetting({
                    name: "separator",
                    type: "text",
                    value: " ",
                    minLength: 1,
                    randomizable: !1,
                    priority: -10,
                });
                },
            },
            {
                key: "getSeparator",
                value: function () {
                return this.getSettingValue("separator");
                },
            },
            {
                key: "performEncode",
                value: function (e) {
                var t = this;
                switch (this._mode) {
                    case 0:
                    var n = e
                        .getCodePoints()
                        .map(function (n, r) {
                        return t.performCharEncodeToBlock(n, r, e);
                        })
                        .filter(function (e) {
                        return null !== e;
                        })
                        .map(ql.wrap);
                    return ql.join(n, this.getSeparator());
                    case 1:
                    return e
                        .split(this.getSeparator())
                        .map(function (n, r, i) {
                        return t.performBlockEncodeToChar(n, r, i, e);
                        })
                        .filter(function (e) {
                        return null !== e;
                        });
                }
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                var t = this;
                switch (this._mode) {
                    case 0:
                    return e
                        .split(this.getSeparator())
                        .map(function (n, r, i) {
                        return t.performBlockDecodeToChar(n, r, i, e);
                        })
                        .filter(function (e) {
                        return null !== e;
                        });
                    case 1:
                    var n = e
                        .getCodePoints()
                        .map(function (n, r) {
                        return t.performCharDecodeToBlock(n, r, e);
                        })
                        .filter(function (e) {
                        return null !== e;
                        })
                        .map(ql.wrap);
                    return ql.join(n, this.getSeparator());
                }
                },
            },
            { key: "performCharEncodeToBlock", value: function (e, t, n) {} },
            { key: "performBlockEncodeToChar", value: function (e, t, n, r) {} },
            { key: "performCharDecodeToBlock", value: function (e, t, n) {} },
            { key: "performBlockDecodeToChar", value: function (e, t, n, r) {} },
            ]),
            n
        );
        })(qu),
        Wu = {
        name: "a1z26",
        title: "A1Z26",
        category: "Ciphers",
        type: "encoder",
        },
        Gu = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "alphabet",
                type: "text",
                value: "abcdefghijklmnopqrstuvwxyz",
                uniqueChars: !0,
                minLength: 2,
                },
                {
                name: "caseSensitivity",
                type: "boolean",
                value: !1,
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Wu;
                },
            },
            ]),
            bt(n, [
            {
                key: "willEncode",
                value: function (e) {
                return this.getSettingValue("caseSensitivity")
                    ? e
                    : e.toLowerCase();
                },
            },
            {
                key: "performCharEncodeToBlock",
                value: function (e, t, n) {
                var r = this.getSettingValue("caseSensitivity"),
                    i = this.getSettingValue("alphabet");
                r || (i = i.toLowerCase());
                var a = i.indexOfCodePoint(e);
                return -1 === a ? null : (a += 1).toString();
                },
            },
            {
                key: "performBlockDecodeToChar",
                value: function (e, t, n, r) {
                var i = this.getSettingValue("caseSensitivity"),
                    a = this.getSettingValue("alphabet");
                i || (a = a.toLowerCase());
                var o = parseInt(e);
                return isNaN(o) || o < 1 || o > a.getLength()
                    ? null
                    : a.getCodePointAt(o - 1);
                },
            },
            ]),
            n
        );
        })(Uu),
        Hu = {
        name: "polybius-square",
        title: "Polybius square",
        category: "Polybius square ciphers",
        type: "encoder",
        },
        Ku = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "alphabet",
                type: "text",
                value: "abcdefghiklmnopqrstuvwxyz",
                uniqueChars: !0,
                minLength: 2,
                validateValue: e.validateAlphabetValue.bind(Ct(e)),
                caseSensitivity: !1,
                },
                {
                name: "rows",
                type: "text",
                value: "12345",
                uniqueChars: !0,
                minLength: 2,
                width: 6,
                randomizable: !1,
                caseSensitivity: !1,
                },
                {
                name: "columns",
                type: "text",
                value: "12345",
                uniqueChars: !0,
                minLength: 2,
                width: 6,
                randomizable: !1,
                caseSensitivity: !1,
                },
                {
                name: "separator",
                type: "text",
                value: "",
                randomizable: !1,
                caseSensitivity: !1,
                validateValue: e.validateSeparatorValue.bind(Ct(e)),
                },
                {
                name: "caseSensitivity",
                type: "boolean",
                width: 6,
                value: !1,
                randomizable: !1,
                },
                {
                name: "includeForeignChars",
                type: "boolean",
                label: "Foreign Chars",
                width: 6,
                value: !1,
                randomizable: !1,
                trueLabel: "Include",
                falseLabel: "Ignore",
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Hu;
                },
            },
            ]),
            bt(n, [
            {
                key: "willTranslate",
                value: function (e, t) {
                if (
                    (this.getSettingValue("caseSensitivity") ||
                    (e = e.toLowerCase()),
                    t)
                ) {
                    var n = this.getSettingValue("alphabet").getCodePoints();
                    -1 !== n.indexOf(105) &&
                    -1 === n.indexOf(106) &&
                    (e = e.getString().replace(/j/g, "i"));
                }
                return e;
                },
            },
            {
                key: "performEncode",
                value: function (e) {
                for (
                    var t,
                    n,
                    r,
                    i = this.getSettingValue("alphabet").getCodePoints(),
                    a = this.getSettingValue("separator").getCodePoints(),
                    o = this.getSettingValue("includeForeignChars"),
                    s = this.getSettingValue("rows").getCodePoints(),
                    l = this.getSettingValue("columns").getCodePoints(),
                    u = l.length,
                    c = e.getCodePoints(),
                    h = a.length,
                    d = c.length,
                    f = new Array(d * (h + 2)),
                    g = 0,
                    p = !1,
                    v = 0;
                    v < d;
                    v++
                ) {
                    if (
                    ((t = c[v]),
                    (n = i.indexOf(t)),
                    g > 0 && (-1 !== n || (o && !p)))
                    )
                    for (r = 0; r < h; r++) f[g++] = a[r];
                    (p = !1),
                    -1 !== n
                        ? ((f[g++] = s[Math.floor(n / u)]), (f[g++] = l[n % u]))
                        : o && ((f[g++] = t), (p = !0));
                }
                return f.slice(0, g);
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                for (
                    var t,
                    n,
                    r,
                    i = this.getSettingValue("alphabet").getCodePoints(),
                    a = this.getSettingValue("separator").getCodePoints(),
                    o = this.getSettingValue("includeForeignChars"),
                    s = this.getSettingValue("rows").getCodePoints(),
                    l = this.getSettingValue("columns").getCodePoints(),
                    u = al.replaceSlice(e.getCodePoints(), a),
                    c = i.length,
                    h = l.length,
                    d = u.length,
                    f = new Array(d),
                    g = 0,
                    p = 0;
                    g < d;

                ) {
                    for (t = null; null === t && g < d; )
                    -1 !== (r = s.indexOf(u[g])) ? (t = r) : o && (f[p++] = u[g]),
                        g++;
                    for (n = null; null === n && g < d; )
                    -1 !== (r = s.indexOf(u[g])) ? (n = r) : o && (f[p++] = u[g]),
                        g++;
                    if (null !== t && null !== n) {
                    if ((r = t * h + n) >= c)
                        throw new Rl(
                        "Polybius square cell at coordinates "
                            .concat(t, ",")
                            .concat(n, " are not ") + "defined by the alphabet."
                        );
                    f[p++] = i[r];
                    } else if (null !== t || null !== n)
                    throw new Rl(
                        "Reached unexpected end of content. The last set of Polybius square coordinates is incomplete."
                    );
                }
                return f.slice(0, p);
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "caseSensitivity":
                    this.getSetting("alphabet").setCaseSensitivity(t),
                        this.getSetting("rows").setCaseSensitivity(t),
                        this.getSetting("columns").setCaseSensitivity(t),
                        this.getSetting("separator").setCaseSensitivity(t);
                    break;
                    case "columns":
                    case "rows":
                    this.getSetting("alphabet").revalidateValue();
                }
                },
            },
            {
                key: "validateAlphabetValue",
                value: function (e, t) {
                var n = e.getLength(),
                    r = this.getSettingValue("columns").getLength(),
                    i = this.getSettingValue("rows").getLength();
                return n > i * r
                    ? {
                        key: "polybiusSquareAlphabetTooLong",
                        message:
                        "The alphabet size ".concat(
                            n,
                            " is too big for the given "
                        ) +
                        ""
                            .concat(i, "×")
                            .concat(
                            r,
                            " Polybius square defined by the settings "
                            ) +
                        "'columns' and 'rows'.",
                    }
                    : !(n <= (i - 1) * r) || {
                        key: "polybiusSquareAlphabetTooShort",
                        message:
                        "The alphabet size ".concat(
                            n,
                            " is too short for the given "
                        ) +
                        ""
                            .concat(i, "×")
                            .concat(
                            r,
                            " Polybius square defined by the settings "
                            ) +
                        "'columns' and 'rows'.",
                    };
                },
            },
            {
                key: "validateSeparatorValue",
                value: function (e, t) {
                var n = this.getSettingValue("rows").getCodePoints();
                return (
                    n.concat(this.getSettingValue("columns").getCodePoints()),
                    !(
                    void 0 !==
                    e.getCodePoints().find(function (e) {
                        return -1 !== n.indexOf(e);
                    })
                    ) || {
                    key: "polybiusSquareSeparatorInvalid",
                    message:
                        "The separator shall not contain characters from the Polybius square rows or columns",
                    }
                );
                },
            },
            ]),
            n
        );
        })(qu),
        Xu = {
        name: "adfgx-cipher",
        title: "ADFGX cipher",
        category: "Polybius square ciphers",
        type: "encoder",
        },
        Zu = "adfgx",
        Yu = [
        {
            name: "adfgx",
            label: "ADFGX",
            squarePositions: "adfgx",
            alphabet: "zyxwvutsrqponmlkihgfedcba",
        },
        {
            name: "adfgvx",
            label: "ADFGVX",
            squarePositions: "adfgvx",
            alphabet: "9876543210zyxwvutsrqponmlkjihgfedcba",
        },
        ],
        Ju = "abcdefghiklmnopqrstuvwxyz",
        Qu = (function (e) {
        kt(r, e);
        var t,
            n = Et(r);
        function r() {
            var e;
            yt(this, r),
            (e = n.call(this)).addSettings([
                {
                name: "variant",
                type: "enum",
                value: Zu,
                elements: Yu.map(function (e) {
                    return e.name;
                }),
                labels: Yu.map(function (e) {
                    return e.label;
                }),
                randomizable: !1,
                },
                {
                name: "alphabet",
                type: "text",
                value: Ju,
                uniqueChars: !0,
                blacklistChars: " ",
                minLength: 0,
                maxLength: 25,
                caseSensitivity: !1,
                },
                {
                name: "key",
                type: "text",
                value: "cargo",
                minLength: 2,
                maxLength: 24,
                caseSensitivity: !1,
                },
            ]);
            var t = e.constructor.getVariant(Zu);
            return (
            (e._polybiusSquare = new Ku()),
            e._polybiusSquare.setSettingValues({
                alphabet: Ju,
                rows: t.squarePositions,
                columns: t.squarePositions,
                separator: "",
                caseSensitivity: !1,
                includeForeignChars: !1,
            }),
            e
            );
        }
        return (
            bt(r, null, [
            {
                key: "getMeta",
                value: function () {
                return Xu;
                },
            },
            ]),
            bt(
            r,
            [
                {
                key: "performEncode",
                value:
                    ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                        var n, r, i, a, o, s, l, u, c, h, d, f;
                        return regeneratorRuntime.wrap(
                        function (e) {
                            for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                return (
                                    (n = t.getString()),
                                    "adfgx" === this.getSettingValue("variant") &&
                                    (n = n.replace(/j/gi, "i")),
                                    (r = this.getSettingValue("key")),
                                    (i = r.getLength()),
                                    (a = this.mapElementsToSortedPosition(
                                    r.getChars()
                                    )),
                                    (e.next = 8),
                                    this._polybiusSquare.encode(n)
                                );
                                case 8:
                                for (
                                    o = e.sent,
                                    s = o.getLength(),
                                    l = new Array(s + i),
                                    f = 0,
                                    u = 0;
                                    u < i;
                                    u++
                                )
                                    for (c = a[u], h = 0; h * i + c < s; h++)
                                    (d = h * i + c),
                                        (l[f++] = o.getCodePointAt(d));
                                return e.abrupt(
                                    "return",
                                    al.joinSlices(al.chunk(l.slice(0, f), 5), [32])
                                );
                                case 14:
                                case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                        );
                    })
                    )),
                    function (e) {
                    return t.apply(this, arguments);
                    }),
                },
                {
                key: "performDecode",
                value: function (e) {
                    var t,
                    n,
                    r,
                    i,
                    a = this.getSettingValue("variant"),
                    o = this.constructor.getVariant(a),
                    s = ql.wrap(o.squarePositions).getCodePoints(),
                    l = e.getCodePoints().filter(function (e) {
                        return -1 !== s.indexOf(e);
                    }),
                    u = l.length,
                    c = this.getSettingValue("key"),
                    h = c.getLength(),
                    d = this.mapElementsToSortedPosition(c.getChars()),
                    f = u % h || h,
                    g = Math.ceil(u / h),
                    p = new Array(u),
                    v = 0;
                    for (t = 0; t < h; t++)
                    for (i = (n = d[t]) >= f ? g - 1 : g, r = 0; r < i; r++)
                        p[r * h + n] = l[v++];
                    return this._polybiusSquare.decode(p);
                },
                },
                {
                key: "mapElementsToSortedPosition",
                value: function (e) {
                    for (
                    var t,
                        n = e.length,
                        r = new Array(n),
                        i = e.slice(),
                        a = e.slice().sort(),
                        o = 0;
                    o < n;
                    o++
                    )
                    (t = i.indexOf(a[o])), (r[o] = t), delete i[t];
                    return r;
                },
                },
                {
                key: "settingValueDidChange",
                value: function (e, t) {
                    switch (e.getName()) {
                    case "variant":
                        var n = this.constructor.getVariant(t);
                        this._polybiusSquare.setSettingValues({
                        rows: n.squarePositions,
                        columns: n.squarePositions,
                        });
                        var r = this.getSetting("alphabet");
                        r.isValid() &&
                        this._polybiusSquare.setSettingValue(
                            "alphabet",
                            r.getValue().extend(n.alphabet)
                        ),
                        this.getSetting("alphabet").setMaxLength(
                            n.alphabet.length
                        ),
                        this.getSetting("key").setMaxLength(
                            n.alphabet.length - 1
                        );
                        break;
                    case "alphabet":
                        var i = this.constructor.getVariant(
                        this.getSettingValue("variant")
                        );
                        this._polybiusSquare.setSettingValue(
                        "alphabet",
                        t.extend(i.alphabet)
                        );
                    }
                },
                },
            ],
            [
                {
                key: "getVariant",
                value: function (e) {
                    return (
                    Yu.find(function (t) {
                        return t.name === e;
                    }) || null
                    );
                },
                },
            ]
            ),
            r
        );
        })(qu),
        ec = {
        name: "affine-cipher",
        title: "Affine cipher",
        category: "Ciphers",
        type: "encoder",
        },
        tc = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "a",
                type: "number",
                label: "Slope / a",
                value: 5,
                integer: !0,
                min: 1,
                validateValue: e.validateSlopeValue.bind(Ct(e)),
                randomizeValue: e.randomizeSlopeValue.bind(Ct(e)),
                width: 6,
                },
                {
                name: "b",
                type: "number",
                label: "Intercept / b",
                value: 8,
                integer: !0,
                min: 1,
                randomizeValue: e.randomizeInterceptValue.bind(Ct(e)),
                width: 6,
                },
                {
                name: "alphabet",
                type: "text",
                value: "abcdefghijklmnopqrstuvwxyz",
                uniqueChars: !0,
                minLength: 2,
                randomizable: !1,
                caseSensitivity: !1,
                },
                {
                name: "caseStrategy",
                type: "enum",
                value: "maintain",
                elements: ["maintain", "ignore", "strict"],
                labels: ["Maintain case", "Ignore case", "Strict (A ≠ a)"],
                width: 6,
                randomizable: !1,
                },
                {
                name: "includeForeignChars",
                type: "boolean",
                label: "Foreign Chars",
                value: !0,
                width: 6,
                trueLabel: "Include",
                falseLabel: "Ignore",
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return ec;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                var n,
                    r = this.getSettingValues(),
                    i = r.a,
                    a = r.b,
                    o = r.caseStrategy,
                    s = r.includeForeignChars,
                    l = this.getSettingValue("alphabet");
                "strict" !== o && (n = (l = l.toLowerCase()).toUpperCase());
                var u,
                    c,
                    h,
                    d,
                    f,
                    g,
                    p = l.getLength(),
                    v = e.getLength(),
                    y = new Array(v).fill(0),
                    m = 0;
                for (h = 0; h < v; h++)
                    (u = e.getCodePointAt(h)),
                    (c = !1),
                    -1 === (f = l.indexOfCodePoint(u)) &&
                        "strict" !== o &&
                        ((f = n.indexOfCodePoint(u)), (c = !0)),
                    -1 === f
                        ? s && (y[m++] = u)
                        : (t
                            ? (g = $u.mod(i * f + a, p))
                            : ((d = $u.xgcd(i, p)[0]),
                            (g = $u.mod(d * (f - a), p))),
                        (y[m++] =
                            "maintain" === o && c
                            ? n.getCodePointAt(g)
                            : l.getCodePointAt(g)));
                return y.slice(0, m);
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "alphabet":
                    this.getSetting("a").revalidateValue();
                    break;
                    case "caseStrategy":
                    this.getSetting("alphabet").setCaseSensitivity(
                        "strict" === t
                    );
                }
                },
            },
            {
                key: "validateSlopeValue",
                value: function (e) {
                var t = this.getSetting("alphabet");
                if (!t.isValid()) return !1;
                var n = t.getValue().getLength();
                return (
                    !!$u.isCoprime(e, n) || {
                    key: "affineCipherFunctionInvalid",
                    message:
                        "The value must be chosen such that it is coprime to the size " +
                        "of the alphabet (".concat(n, ")"),
                    }
                );
                },
            },
            {
                key: "randomizeSlopeValue",
                value: function (e, t) {
                var n = this.getSetting("alphabet");
                if (n.isValid()) {
                    var r = n.getValue(),
                    i = r.getLength(),
                    a = r
                        .getCodePoints()
                        .map(function (e, t) {
                        return t + 1;
                        })
                        .filter(function (e) {
                        return e > 1 && $u.isCoprime(e, i);
                        });
                    return a.length > 0 ? e.nextChoice(a) : 1;
                }
                return null;
                },
            },
            {
                key: "randomizeInterceptValue",
                value: function (e, t) {
                if (this.getSetting("alphabet").isValid()) {
                    var n = this.getSetting("alphabet").getValue().getLength();
                    return e.nextInteger(1, n - 1);
                }
                return null;
                },
            },
            ]),
            n
        );
        })(qu),
        nc = {
        name: "alphabetical-substitution",
        title: "Alphabetical substitution",
        category: "Ciphers",
        type: "encoder",
        },
        rc = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "plaintextAlphabet",
                type: "text",
                value: "abcdefghijklmnopqrstuvwxyz",
                uniqueChars: !0,
                minLength: 2,
                caseSensitivity: !1,
                randomizable: !1,
                },
                {
                name: "ciphertextAlphabet",
                type: "text",
                value: "zyxwvutsrqponmlkjihgfedcba",
                uniqueChars: !0,
                minLength: 0,
                caseSensitivity: !1,
                validateValue: e.validateCiphertextValue.bind(Ct(e)),
                randomizeValue: e.randomizeCiphertextValue.bind(Ct(e)),
                },
                {
                name: "caseStrategy",
                type: "enum",
                value: "maintain",
                elements: ["maintain", "ignore", "strict"],
                labels: ["Maintain case", "Ignore case", "Strict (A ≠ a)"],
                width: 6,
                randomizable: !1,
                },
                {
                name: "includeForeignChars",
                type: "boolean",
                label: "Foreign Chars",
                value: !0,
                trueLabel: "Include",
                falseLabel: "Ignore",
                width: 6,
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return nc;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                var n,
                    r,
                    i = this.getSettingValue("caseStrategy"),
                    a = this.getSettingValue("includeForeignChars"),
                    o = this.getSettingValue("plaintextAlphabet"),
                    s = this.getSettingValue("ciphertextAlphabet").extend(o);
                if (!t) {
                    var l = [o, s];
                    (s = l[0]), (o = l[1]);
                }
                "strict" !== i &&
                    ((o = o.toLowerCase()),
                    (s = s.toLowerCase()),
                    (n = o.toUpperCase()),
                    (r = s.toUpperCase()));
                for (
                    var u,
                    c,
                    h,
                    d = e.getCodePoints(),
                    f = new Array(d.length).fill(0),
                    g = 0,
                    p = 0;
                    p < d.length;
                    p++
                )
                    (u = d[p]),
                    (h = !1),
                    -1 === (c = o.indexOfCodePoint(u)) &&
                        "strict" !== i &&
                        ((c = n.indexOfCodePoint(u)), (h = !0)),
                    -1 !== c
                        ? (f[g++] =
                            "maintain" === i && h
                            ? r.getCodePointAt(c)
                            : s.getCodePointAt(c))
                        : a && (f[g++] = u);
                return f.slice(0, g);
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "plaintextAlphabet":
                    this.getSetting("ciphertextAlphabet").revalidateValue();
                    break;
                    case "caseStrategy":
                    this.getSetting("plaintextAlphabet").setCaseSensitivity(
                        "strict" === t
                    ),
                        this.getSetting("ciphertextAlphabet").setCaseSensitivity(
                        "strict" === t
                        );
                }
                },
            },
            {
                key: "validateCiphertextValue",
                value: function (e, t) {
                if (!this.isSettingValid("plaintextAlphabet")) return !1;
                var n = this.getSettingValue("plaintextAlphabet");
                return (
                    !(e.getLength() > n.getLength()) || {
                    key: "alphabetContainsUnusedCharacters",
                    message:
                        "The ciphertext alphabet is longer than the plaintext alphabet",
                    }
                );
                },
            },
            {
                key: "randomizeCiphertextValue",
                value: function (e, t) {
                if (!this.getSetting("plaintextAlphabet").isValid()) return null;
                var n = this.getSettingValue("plaintextAlphabet");
                return ql.wrap(al.shuffle(n.getCodePoints()));
                },
            },
            ]),
            n
        );
        })(qu),
        ic = {
        name: "ascii85",
        title: "Ascii85",
        category: "Encoding",
        type: "encoder",
        },
        ac = [
        {
            name: "original",
            label: "Original",
            alphabet: null,
            zeroTupleChar: "z",
        },
        {
            name: "Z85",
            label: "Z85 (ZeroMQ)",
            alphabet:
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#",
            zeroTupleChar: null,
        },
        ],
        oc = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSetting({
                name: "variant",
                type: "enum",
                label: "Variant",
                value: "original",
                elements: ac.map(function (e) {
                return e.name;
                }),
                labels: ac.map(function (e) {
                return e.label;
                }),
                randomizable: !1,
            }),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return ic;
                },
            },
            ]),
            bt(n, [
            {
                key: "performEncode",
                value: function (e) {
                for (
                    var t,
                    n,
                    r,
                    i = this,
                    a = e.getBytes(),
                    o = ac.find(function (e) {
                        return e.name === i.getSettingValue("variant");
                    }),
                    s = a.length,
                    l = "",
                    u = 0;
                    u < s;
                    u += 4
                )
                    if (
                    ((r =
                        ((a[u] << 24) +
                        ((a[u + 1] || 0) << 16) +
                        ((a[u + 2] || 0) << 8) +
                        (a[u + 3] || 0)) >>>
                        0),
                    null === o.zeroTupleChar || r > 0)
                    ) {
                    for (t = [], n = 0; n < 5; n++)
                        t.push(r % 85), (r = Math.floor(r / 85));
                    (t = t.reverse()),
                        s < u + 4 && t.splice(s - (u + 4), 4),
                        (l += t
                        .map(function (e) {
                            return null === o.alphabet
                            ? String.fromCharCode(e + 33)
                            : o.alphabet[e];
                        })
                        .join(""));
                    } else l += o.zeroTupleChar;
                return l;
                },
            },
            {
                key: "willDecode",
                value: function (e) {
                var t = e.getString().match(/<~(.+?)~>/);
                return null !== t ? t[1] : e;
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                for (
                    var t,
                    n,
                    r,
                    i = this,
                    a = Bl.removeWhitespaces(e.getString()),
                    o = ac.find(function (e) {
                        return e.name === i.getSettingValue("variant");
                    }),
                    s = a.length,
                    l = [],
                    u = 0;
                    u < s;

                )
                    a[u] === o.zeroTupleChar
                    ? (l.push(0, 0, 0, 0), u++)
                    : ((r = [
                        ((n =
                            52200625 *
                            (t = a
                                .substr(u, 5)
                                .split("")
                                .map(function (e, t) {
                                var n =
                                    null === o.alphabet
                                    ? e.charCodeAt(0) - 33
                                    : o.alphabet.indexOf(e);
                                if (n < 0 || n > 84)
                                    throw new Rl(
                                    "Invalid character '"
                                        .concat(e, "' at index ")
                                        .concat(t)
                                    );
                                return n;
                                }))[0] +
                            614125 * t[1] +
                            7225 * (u + 2 < s ? t[2] : 84) +
                            85 * (u + 3 < s ? t[3] : 84) +
                            (u + 4 < s ? t[4] : 84)) >>
                            24) &
                            255,
                        (n >> 16) & 255,
                        (n >> 8) & 255,
                        255 & n,
                        ]),
                        s < u + 5 && r.splice(s - (u + 5), 5),
                        l.push.apply(l, r),
                        (u += 5));
                return new Uint8Array(l);
                },
            },
            ]),
            n
        );
        })(qu),
        sc = {
        name: "bacon-cipher",
        title: "Bacon cipher",
        category: "Ciphers",
        type: "encoder",
        },
        lc = [
        {
            name: "original",
            label: "Original",
            alphabet: "abcdefghijklmnopqrstuvwxyz",
            codeAlphabet:
            "aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbaabbbabaabababbabbababbb",
        },
        {
            name: "unique",
            label: "Unique codes for each letter",
            alphabet: "abcdefghijklmnopqrstuvwxyz",
            codeAlphabet:
            "aaaaaaaaabaaabaaaabbaabaaaababaabbaaabbbabaaaabaabababaababbabbaaabbababbbaabbbbbaaaabaaabbaababaabbbabaabababbabbababbbbbaaabbaab",
        },
        ],
        uc = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "variant",
                type: "enum",
                label: "Variant",
                value: "original",
                elements: lc.map(function (e) {
                    return e.name;
                }),
                labels: lc.map(function (e) {
                    return e.label;
                }),
                randomizable: !1,
                },
                {
                name: "aMark",
                label: "Letter 1",
                type: "text",
                width: 6,
                value: "a",
                minLength: 1,
                maxLength: 1,
                randomizable: !1,
                validateValue: e.validateLetterSettingValue.bind(Ct(e)),
                },
                {
                name: "bMark",
                label: "Letter 2",
                type: "text",
                width: 6,
                value: "b",
                minLength: 1,
                maxLength: 1,
                randomizable: !1,
                validateValue: e.validateLetterSettingValue.bind(Ct(e)),
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return sc;
                },
            },
            ]),
            bt(n, [
            {
                key: "validateLetterSettingValue",
                value: function (e, t) {
                var n = this.getSetting(
                    "aMark" === t.getName() ? "bMark" : "aMark"
                );
                return n.isValid() && !e.isEqualTo(n.getValue());
                },
            },
            {
                key: "performEncode",
                value: function (e) {
                for (
                    var t,
                    n = this._getVariant(),
                    r = n.alphabet,
                    i = n.codes,
                    a = n.codeLength,
                    o = this.getSettingValue("aMark").getCharAt(0),
                    s = this.getSettingValue("bMark").getCharAt(0),
                    l = e.toLowerCase(),
                    u = "",
                    c = 0;
                    c < l.getLength();
                    c++
                )
                    -1 !== (t = r.indexOf(l.getCharAt(c))) && (u += i[t]);
                return (
                    ("a" === o && "b" === s) ||
                    (u = u
                        .split("")
                        .map(function (e) {
                        return "a" === e ? o : s;
                        })
                        .join("")),
                    al
                    .chunk(ql.wrap(u).getChars(), a)
                    .map(function (e) {
                        return e.join("");
                    })
                    .join(" ")
                );
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                var t,
                    n = this._getVariant(),
                    r = n.alphabet,
                    i = n.codes,
                    a = n.codeLength,
                    o = this.getSettingValue("aMark").getCodePointAt(0),
                    s = this.getSettingValue("bMark").getCodePointAt(0),
                    l = e.getCodePoints(),
                    u = "";
                for (t = 0; t < l.length; t++)
                    switch (l[t]) {
                    case o:
                        u += "a";
                        break;
                    case s:
                        u += "b";
                    }
                var c,
                    h = Bl.chunk(u, a),
                    d = "";
                for (t = 0; t < h.length; t++)
                    -1 !== (c = i.indexOf(h[t])) && (d += r[c]);
                return d;
                },
            },
            {
                key: "_getVariant",
                value: function () {
                var e = this.getSettingValue("variant"),
                    t = lc.find(function (t) {
                    return t.name === e;
                    }),
                    n = t.alphabet,
                    r = t.codeAlphabet,
                    i = r.length / n.length;
                return { alphabet: n, codes: Bl.chunk(r, i), codeLength: i };
                },
            },
            ]),
            n
        );
        })(qu),
        cc = {
        name: "base32",
        title: "Base32",
        category: "Encoding",
        type: "encoder",
        },
        hc = [
        {
            name: "base32",
            label: "Base32 (RFC 3548, RFC 4648)",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            padding: 61,
            decodeMap: { 48: 14, 49: 8 },
        },
        {
            name: "base32hex",
            label: "Base32hex (RFC 4648)",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            padding: 61,
        },
        {
            name: "z-base-32",
            label: "z-base-32",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            padding: null,
        },
        {
            name: "crockford-base32",
            label: "Crockford's Base32",
            alphabet: "0123456789ABCDEFGHJKMNPQRSTVWXYZ",
            padding: null,
            decodeContentFilter: "uppercase",
            decodeMap: { 79: 0, 73: 1, 76: 1 },
        },
        { name: "custom", label: "Custom" },
        ],
        dc = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "variant",
                type: "enum",
                value: hc[0].name,
                elements: hc.map(function (e) {
                    return e.name;
                }),
                labels: hc.map(function (e) {
                    return e.label;
                }),
                randomizable: !1,
                },
                {
                name: "alphabet",
                type: "text",
                value: hc[0].alphabet,
                uniqueChars: !0,
                minLength: 32,
                maxLength: 32,
                caseSensitivity: !0,
                visible: !1,
                },
                {
                name: "padding",
                type: "text",
                value: "=",
                blacklistChars: hc[0].alphabet,
                minLength: 0,
                maxLength: 1,
                randomizable: !1,
                visible: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return cc;
                },
            },
            ]),
            bt(n, [
            {
                key: "performEncode",
                value: function (e) {
                for (
                    var t,
                    n,
                    r = this.getVariantOptions(),
                    i = r.alphabet,
                    a = r.padding,
                    o = i.getCodePoints(),
                    s = e.getBytes(),
                    l = s.length,
                    u = 8 * Math.ceil(l / 5),
                    c = new Array(u),
                    h = 0,
                    d = 3,
                    f = 0,
                    g = 0;
                    g < l;
                    g++
                )
                    (n = f | ((t = s[g]) >> d)),
                    (c[h++] = o[31 & n]),
                    d > 5 && ((n = t >> (d -= 5)), (c[h++] = o[31 & n])),
                    (f = t << (d = 5 - d)),
                    (d = 8 - d);
                if ((3 !== d && (c[h++] = o[31 & f]), null !== a)) {
                    for (; h < u; ) c[h++] = a;
                    return c;
                }
                return c.slice(0, h);
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                var t = this.getVariantOptions(),
                    n = t.alphabet,
                    r = t.decodeMap,
                    i = t.padding;
                "uppercase" === t.decodeContentFilter && (e = e.toUpperCase());
                for (var a = 0; a < n.getLength(); a++)
                    r[n.getCodePointAt(a)] = a;
                for (
                    var o,
                    s,
                    l = e.getCodePoints(),
                    u = l.length,
                    c = 5 * Math.ceil(u / 8),
                    h = new Uint8Array(c),
                    d = 0,
                    f = 8,
                    g = 0,
                    p = 0;
                    p < u;
                    p++
                )
                    if ((o = l[p]) === i);
                    else {
                    if (void 0 === r[o])
                        throw new Rl("Unexpected code point at index ".concat(p));
                    (s = 255 & r[o]),
                        (f -= 5) > 0
                        ? (g |= s << f)
                        : f < 0
                        ? ((h[d++] = g | (s >> -f)), (g = (s << (f += 8)) & 255))
                        : ((h[d++] = g | s), (f = 8), (g = 0));
                    }
                return h.slice(0, d);
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "variant":
                    this.getSetting("alphabet").setVisible("custom" === t),
                        this.getSetting("padding").setVisible("custom" === t);
                    break;
                    case "alphabet":
                    this.getSetting("padding").setBlacklistChars(t);
                }
                },
            },
            {
                key: "getVariantOptions",
                value: function () {
                var e = this.getSettingValue("variant");
                if ("custom" === e) {
                    var t = this.getSettingValue("padding");
                    return {
                    alphabet: this.getSettingValue("alphabet"),
                    padding: 1 === t.getLength() ? t.getCodePointAt(0) : null,
                    decodeContentFilter: null,
                    decodeMap: {},
                    };
                }
                var n = hc.find(function (t) {
                    return t.name === e;
                });
                return (
                    (n.alphabet = ql.wrap(n.alphabet)),
                    (n.decodeMap = n.decodeMap || {}),
                    n
                );
                },
            },
            ]),
            n
        );
        })(qu),
        fc = {
        name: "base64",
        title: "Base64",
        category: "Encoding",
        type: "encoder",
        },
        gc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        pc = [
        {
            name: "base64",
            label: "Base64 (RFC 3548, RFC 4648)",
            description: null,
            alphabet: "".concat(gc, "+/"),
        },
        {
            name: "base64url",
            label: "Base64url (RFC 4648 §5)",
            description: "URL and Filename Safe Alphabet",
            alphabet: "".concat(gc, "-_"),
            paddingOptional: !0,
        },
        {
            name: "rfc2045",
            label: "Transfer encoding for MIME (RFC 2045)",
            description: null,
            alphabet: "".concat(gc, "+/"),
            foreignCharacters: !0,
            maxLineLength: 76,
        },
        {
            name: "rfc1421",
            label: "Original Base64 (RFC 1421)",
            description: "Privacy-Enhanced Mail (PEM)",
            alphabet: "".concat(gc, "+/"),
            maxLineLength: 64,
        },
        { name: "custom", label: "Custom" },
        ],
        vc = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "variant",
                type: "enum",
                value: pc[0].name,
                elements: pc.map(function (e) {
                    return e.name;
                }),
                labels: pc.map(function (e) {
                    return e.label;
                }),
                descriptions: pc.map(function (e) {
                    return e.description;
                }),
                randomizable: !1,
                },
                {
                name: "alphabet",
                type: "text",
                value: pc[0].alphabet,
                uniqueChars: !0,
                minLength: 64,
                maxLength: 64,
                caseSensitivity: !0,
                visible: !1,
                },
                {
                name: "padding",
                type: "text",
                value: "=",
                blacklistChars: pc[0].alphabet,
                minLength: 1,
                maxLength: 1,
                randomizable: !1,
                visible: !1,
                width: 6,
                },
                {
                name: "paddingOptional",
                type: "boolean",
                value: !1,
                randomizable: !1,
                visible: !1,
                width: 6,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return fc;
                },
            },
            ]),
            bt(n, [
            {
                key: "performEncode",
                value: function (e) {
                return Fl.base64StringFromBytes(
                    e.getBytes(),
                    this.getVariantOptions()
                );
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                return Fl.bytesFromBase64String(
                    e.getString(),
                    this.getVariantOptions()
                );
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "variant":
                    this.getSetting("alphabet").setVisible("custom" === t),
                        this.getSetting("padding").setVisible("custom" === t),
                        this.getSetting("paddingOptional").setVisible(
                        "custom" === t
                        );
                    break;
                    case "alphabet":
                    this.getSetting("padding").setBlacklistChars(t);
                }
                },
            },
            {
                key: "getVariantOptions",
                value: function () {
                var e = this.getSettingValue("variant");
                return "custom" === e
                    ? {
                        alphabet: this.getSettingValue("alphabet").getString(),
                        padding: this.getSettingValue("padding").getCharAt(0),
                        paddingOptional: this.getSettingValue("paddingOptional"),
                    }
                    : pc.find(function (t) {
                        return t.name === e;
                    });
                },
            },
            ]),
            n
        );
        })(qu),
        yc = {
        name: "baudot-code",
        title: "Baudot code",
        category: "Encoding",
        type: "encoder",
        },
        mc = [
        {
            name: "ita1",
            label: "Original Baudot - ITA 1",
            characterSet: [
            0,
            "A",
            "E",
            "\r",
            "Y",
            "U",
            "I",
            "O",
            "FS",
            "J",
            "G",
            "H",
            "B",
            "C",
            "F",
            "D",
            " ",
            "\n",
            "X",
            "Z",
            "S",
            "T",
            "W",
            "V",
            127,
            "K",
            "M",
            "L",
            "R",
            "Q",
            "N",
            "P",
            0,
            "1",
            "2",
            "\r",
            "3",
            "4",
            null,
            "5",
            " ",
            "6",
            "7",
            "+",
            "8",
            "9",
            null,
            "0",
            "LS",
            "\n",
            ",",
            ":",
            ".",
            null,
            "?",
            "'",
            127,
            "(",
            ")",
            "=",
            "-",
            "/",
            null,
            "%",
            ],
        },
        {
            name: "original-eu",
            label: "Original Baudot - Continental European",
            extends: "ita1",
            overrides: {
            3: "É",
            17: "T",
            35: "&",
            38: "º",
            43: "h",
            46: "f",
            49: ".",
            52: ";",
            53: "!",
            62: "№",
            },
        },
        {
            name: "original-uk",
            label: "Original Baudot - Domestic UK",
            extends: "ita1",
            overrides: {
            3: "/",
            18: "-",
            35: "⅟",
            38: "³",
            43: "¹",
            46: "⁵",
            49: ".",
            50: "⁹",
            52: "⁷",
            53: "²",
            62: "£",
            63: "+",
            },
        },
        {
            name: "ita2",
            label: "Baudot-Murray - ITA 2",
            characterSet: [
            0,
            "E",
            "\n",
            "A",
            " ",
            "S",
            "I",
            "U",
            "\r",
            "D",
            "R",
            "J",
            "N",
            "F",
            "C",
            "K",
            "T",
            "Z",
            "L",
            "W",
            "H",
            "Y",
            "P",
            "Q",
            "O",
            "B",
            "G",
            "FS",
            "M",
            "X",
            "V",
            15,
            0,
            "3",
            "\n",
            "-",
            " ",
            "'",
            "8",
            "7",
            "\r",
            5,
            "4",
            7,
            ",",
            "!",
            ":",
            "(",
            "5",
            "+",
            ")",
            "2",
            "£",
            "6",
            "0",
            "1",
            "9",
            "?",
            "&",
            14,
            ".",
            "/",
            "=",
            "LS",
            ],
        },
        {
            name: "us-tty",
            label: "Baudot-Murray - US-TTY",
            extends: "ita2",
            overrides: { 37: "'", 41: 5, 43: 7, 49: "+", 52: "£", 62: "=" },
        },
        {
            name: "murray-code",
            label: "Baudot-Murray - Murray Code",
            extends: "ita2",
            overrides: {
            0: " ",
            2: null,
            4: 15,
            8: "\n",
            31: "*",
            32: " ",
            34: null,
            35: null,
            36: "LS",
            40: "\n",
            41: "²",
            43: "⁷",
            44: "-",
            45: "⅟",
            46: "(",
            47: "⁹",
            49: ".",
            50: "/",
            52: "⁵",
            58: "³",
            60: ",",
            61: "£",
            62: ")",
            63: "*",
            },
        },
        ],
        bc = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._variantCharacterSet = []),
            e.addSetting({
                name: "variant",
                type: "enum",
                value: "ita2",
                elements: mc.map(function (e) {
                return e.name;
                }),
                labels: mc.map(function (e) {
                return e.label;
                }),
                randomizable: !1,
            }),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return yc;
                },
            },
            ]),
            bt(n, [
            {
                key: "performEncode",
                value: function (e) {
                for (
                    var t,
                    n,
                    r = this.getSettingValue("variant"),
                    i = this.getVariantCharacterSet(r),
                    a = i.indexOf("FS") % 32,
                    o = i.indexOf("LS") % 32,
                    s = e.getCodePoints(),
                    l = s.length,
                    u = [],
                    c = !1,
                    h = 0;
                    h < l;
                    h++
                )
                    (n = s[h]),
                    -1 === (t = i.indexOf(n)) &&
                        n >= 97 &&
                        n <= 122 &&
                        (t = i.indexOf(n - 32)),
                    t >= 0 && t < 32
                        ? (c && (u.push(o), (c = !1)), u.push(t))
                        : t >= 32 && (c || (u.push(a), (c = !0)), u.push(t - 32));
                return al.resizeBitSizedArray(u, 5, 8);
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                for (
                    var t,
                    n,
                    r = this.getSettingValue("variant"),
                    i = this.getVariantCharacterSet(r),
                    a = i.indexOf("FS") % 32,
                    o = i.indexOf("LS") % 32,
                    s = al.resizeBitSizedArray(e.getBytes(), 8, 5, !0),
                    l = new Array(s.length),
                    u = !1,
                    c = 0,
                    h = 0;
                    h < s.length;
                    h++
                )
                    (t = s[h]),
                    u || t !== a
                        ? u && t === o
                        ? (u = !1)
                        : null !== (n = i[t + (u ? 32 : 0)]) && (l[c++] = n)
                        : (u = !0);
                return l.slice(0, c);
                },
            },
            {
                key: "getVariantCharacterSet",
                value: function (e) {
                if (void 0 !== this._variantCharacterSet[e])
                    return this._variantCharacterSet[e];
                var t = mc.find(function (t) {
                    return t.name === e;
                });
                if (void 0 === t) return null;
                var n = (t.characterSet || []).slice();
                if (t.extends) {
                    var r = this.getVariantCharacterSet(t.extends);
                    null !== r && (n = r.slice());
                }
                if (t.overrides) for (var i in t.overrides) n[i] = t.overrides[i];
                for (var a = 0; a < n.length; a++) {
                    var o = n[a];
                    "FS" !== o &&
                    "LS" !== o &&
                    null !== o &&
                    (n[a] =
                        "string" == typeof o ? jl.codePointsFromString(o)[0] : o);
                }
                return (this._variantCharacterSet[e] = n), n;
                },
            },
            ]),
            n
        );
        })(qu),
        kc = {
        name: "bifid-cipher",
        title: "Bifid cipher",
        category: "Polybius square ciphers",
        type: "encoder",
        },
        wc = "abcdefghiklmnopqrstuvwxyz",
        _c = (function (e) {
        kt(i, e);
        var t,
            n,
            r = Et(i);
        function i() {
            var e;
            return (
            yt(this, i),
            (e = r.call(this)).addSetting({
                name: "key",
                type: "text",
                value: "",
                uniqueChars: !0,
                minLength: 0,
                caseSensitivity: !1,
            }),
            (e._polybiusSquare = new Ku()),
            e._polybiusSquare.setSettingValues({
                alphabet: wc,
                rows: "12345",
                columns: "12345",
                separator: "",
                caseSensitivity: !1,
                includeForeignChars: !1,
            }),
            e
            );
        }
        return (
            bt(i, null, [
            {
                key: "getMeta",
                value: function () {
                return kc;
                },
            },
            ]),
            bt(i, [
            {
                key: "performEncode",
                value:
                ((n = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                (e.next = 2),
                                this._polybiusSquare.encode(
                                    t.getString().replace(/j/gi, "i")
                                )
                                );
                            case 2:
                                for (
                                n = e.sent,
                                    r = n.getLength(),
                                    i = new Array(r),
                                    a = 0;
                                a < r / 2;
                                a++
                                )
                                (i[a] = n.getCodePointAt(2 * a)),
                                    (i[r / 2 + a] = n.getCodePointAt(2 * a + 1));
                                return e.abrupt(
                                "return",
                                this._polybiusSquare.decode(i)
                                );
                            case 7:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return n.apply(this, arguments);
                }),
            },
            {
                key: "performDecode",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), this._polybiusSquare.encode(t);
                            case 2:
                                for (
                                n = e.sent,
                                    r = n.getLength(),
                                    i = new Array(r),
                                    a = 0;
                                a < r / 2;
                                a++
                                )
                                (i[2 * a] = n.getCodePointAt(a)),
                                    (i[2 * a + 1] = n.getCodePointAt(r / 2 + a));
                                return e.abrupt(
                                "return",
                                this._polybiusSquare.decode(i)
                                );
                            case 7:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "key":
                    this._polybiusSquare.setSettingValue(
                        "alphabet",
                        t.extend(wc)
                    );
                }
                },
            },
            ]),
            i
        );
        })(qu),
        Sc = {
        name: "bitwise-operation",
        title: "Bitwise operation",
        category: "Transform",
        type: "encoder",
        },
        xc = {
        NOT: "NOT",
        AND: "NAND",
        OR: "NOR",
        XOR: "NXOR",
        NAND: "AND",
        NOR: "OR",
        NXOR: "XOR",
        },
        Ic = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "operation",
                type: "enum",
                value: "NOT",
                elements: ["NOT", "AND", "OR", "XOR", "NAND", "NOR", "NXOR"],
                labels: [
                    "NOT ~a",
                    "AND (a & b)",
                    "OR (a | b)",
                    "XOR (a ^ b)",
                    "NAND ~(a & b)",
                    "NOR ~(a | b)",
                    "NXOR ~(a ^ b)",
                ],
                randomizable: !1,
                style: "radio",
                },
                {
                name: "operand",
                label: "Operand B (Repeating)",
                type: "bytes",
                value: new Uint8Array([15]),
                minSize: 1,
                visible: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Sc;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                var n = this,
                    r = e.getBytes(),
                    i = this.getSettingValue("operand"),
                    a = this.getSettingValue("operation");
                return (
                    t || (a = xc[a]),
                    r.map(function (e, t) {
                    return n.performByteOperation(e, a, i[t % i.length]);
                    })
                );
                },
            },
            {
                key: "performByteOperation",
                value: function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
                switch (t) {
                    case "NOT":
                    return ~e;
                    case "AND":
                    return e & n;
                    case "OR":
                    return e | n;
                    case "XOR":
                    return e ^ n;
                    case "NAND":
                    return ~(e & n);
                    case "NOR":
                    return ~(e | n);
                    case "NXOR":
                    return ~(e ^ n);
                    default:
                    return e;
                }
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                "operation" === e.getName() &&
                    this.getSetting("operand").setVisible("NOT" !== t);
                },
            },
            ]),
            n
        );
        })(qu),
        Cc = s.Promise,
        Vc = a(function (e) {
        var t = function (e, t) {
            (this.stopped = e), (this.result = t);
        };
        (e.exports = function (e, n, r, i, a) {
            var o,
            s,
            l,
            u,
            c,
            h,
            d,
            f = ze(n, r, i ? 2 : 1);
            if (a) o = e;
            else {
            if ("function" != typeof (s = fo(e)))
                throw TypeError("Target is not iterable");
            if (vo(s)) {
                for (l = 0, u = fe(e.length); u > l; l++)
                if (
                    (c = i ? f(T((d = e[l]))[0], d[1]) : f(e[l])) &&
                    c instanceof t
                )
                    return c;
                return new t(!1);
            }
            o = s.call(e);
            }
            for (h = o.next; !(d = h.call(o)).done; )
            if (
                "object" == typeof (c = ol(o, f, d.value, i)) &&
                c &&
                c instanceof t
            )
                return c;
            return new t(!1);
        }).stop = function (e) {
            return new t(!0, e);
        };
        }),
        Ec = /(iphone|ipod|ipad).*applewebkit/i.test(Rt),
        Ac = s.location,
        Mc = s.setImmediate,
        Tc = s.clearImmediate,
        Lc = s.process,
        Pc = s.MessageChannel,
        Bc = s.Dispatch,
        Oc = 0,
        Rc = {},
        zc = "onreadystatechange",
        Nc = function (e) {
        if (Rc.hasOwnProperty(e)) {
            var t = Rc[e];
            delete Rc[e], t();
        }
        },
        Fc = function (e) {
        return function () {
            Nc(e);
        };
        },
        Dc = function (e) {
        Nc(e.data);
        },
        jc = function (e) {
        s.postMessage(e + "", Ac.protocol + "//" + Ac.host);
        };
    (Mc && Tc) ||
        ((Mc = function (e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
            (Rc[++Oc] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t);
            }),
            Mu(Oc),
            Oc
        );
        }),
        (Tc = function (e) {
        delete Rc[e];
        }),
        "process" == p(Lc)
        ? (Mu = function (e) {
            Lc.nextTick(Fc(e));
            })
        : Bc && Bc.now
        ? (Mu = function (e) {
            Bc.now(Fc(e));
            })
        : Pc && !Ec
        ? ((Lu = (Tu = new Pc()).port2),
            (Tu.port1.onmessage = Dc),
            (Mu = ze(Lu.postMessage, Lu, 1)))
        : !s.addEventListener ||
            "function" != typeof postMessage ||
            s.importScripts ||
            l(jc) ||
            "file:" === Ac.protocol
        ? (Mu =
            zc in V("script")
                ? function (e) {
                    cr.appendChild(V("script")).onreadystatechange = function () {
                    cr.removeChild(this), Nc(e);
                    };
                }
                : function (e) {
                    setTimeout(Fc(e), 0);
                })
        : ((Mu = jc), s.addEventListener("message", Dc, !1)));
    var $c,
        qc,
        Uc,
        Wc,
        Gc,
        Hc,
        Kc,
        Xc,
        Zc = { set: Mc, clear: Tc },
        Yc = M.f,
        Jc = Zc.set,
        Qc = s.MutationObserver || s.WebKitMutationObserver,
        eh = s.process,
        th = s.Promise,
        nh = "process" == p(eh),
        rh = Yc(s, "queueMicrotask"),
        ih = rh && rh.value;
    ih ||
        (($c = function () {
        var e, t;
        for (nh && (e = eh.domain) && e.exit(); qc; ) {
            (t = qc.fn), (qc = qc.next);
            try {
            t();
            } catch (e) {
            throw (qc ? Wc() : (Uc = void 0), e);
            }
        }
        (Uc = void 0), e && e.enter();
        }),
        nh
        ? (Wc = function () {
            eh.nextTick($c);
            })
        : Qc && !Ec
        ? ((Gc = !0),
            (Hc = document.createTextNode("")),
            new Qc($c).observe(Hc, { characterData: !0 }),
            (Wc = function () {
            Hc.data = Gc = !Gc;
            }))
        : th && th.resolve
        ? ((Kc = th.resolve(void 0)),
            (Xc = Kc.then),
            (Wc = function () {
            Xc.call(Kc, $c);
            }))
        : (Wc = function () {
            Jc.call(s, $c);
            }));
    var ah,
        oh,
        sh,
        lh,
        uh =
        ih ||
        function (e) {
            var t = { fn: e, next: void 0 };
            Uc && (Uc.next = t), qc || ((qc = t), Wc()), (Uc = t);
        },
        ch = function (e) {
        var t, n;
        (this.promise = new e(function (e, r) {
            if (void 0 !== t || void 0 !== n)
            throw TypeError("Bad Promise constructor");
            (t = e), (n = r);
        })),
            (this.resolve = Re(t)),
            (this.reject = Re(n));
        },
        hh = {
        f: function (e) {
            return new ch(e);
        },
        },
        dh = function (e, t) {
        if ((T(e), w(t) && t.constructor === e)) return t;
        var n = hh.f(e);
        return (0, n.resolve)(t), n.promise;
        },
        fh = function (e) {
        try {
            return { error: !1, value: e() };
        } catch (e) {
            return { error: !0, value: e };
        }
        },
        gh = Zc.set,
        ph = We("species"),
        vh = "Promise",
        yh = ie.get,
        mh = ie.set,
        bh = ie.getterFor(vh),
        kh = Cc,
        wh = s.TypeError,
        _h = s.document,
        Sh = s.process,
        xh = le("fetch"),
        Ih = hh.f,
        Ch = Ih,
        Vh = "process" == p(Sh),
        Eh = !!(_h && _h.createEvent && s.dispatchEvent),
        Ah = "unhandledrejection",
        Mh = Pe(vh, function () {
        if (!($(kh) !== String(kh))) {
            if (66 === Dt) return !0;
            if (!Vh && "function" != typeof PromiseRejectionEvent) return !0;
        }
        if (Dt >= 51 && /native code/.test(kh)) return !1;
        var e = kh.resolve(1),
            t = function (e) {
            e(
                function () {},
                function () {}
            );
            };
        return (
            ((e.constructor = {})[ph] = t), !(e.then(function () {}) instanceof t)
        );
        }),
        Th =
        Mh ||
        !Qi(function (e) {
            kh.all(e).catch(function () {});
        }),
        Lh = function (e) {
        var t;
        return !(!w(e) || "function" != typeof (t = e.then)) && t;
        },
        Ph = function (e, t, n) {
        if (!t.notified) {
            t.notified = !0;
            var r = t.reactions;
            uh(function () {
            for (var i = t.value, a = 1 == t.state, o = 0; r.length > o; ) {
                var s,
                l,
                u,
                c = r[o++],
                h = a ? c.ok : c.fail,
                d = c.resolve,
                f = c.reject,
                g = c.domain;
                try {
                h
                    ? (a || (2 === t.rejection && zh(e, t), (t.rejection = 1)),
                    !0 === h
                        ? (s = i)
                        : (g && g.enter(), (s = h(i)), g && (g.exit(), (u = !0))),
                    s === c.promise
                        ? f(wh("Promise-chain cycle"))
                        : (l = Lh(s))
                        ? l.call(s, d, f)
                        : d(s))
                    : f(i);
                } catch (e) {
                g && !u && g.exit(), f(e);
                }
            }
            (t.reactions = []), (t.notified = !1), n && !t.rejection && Oh(e, t);
            });
        }
        },
        Bh = function (e, t, n) {
        var r, i;
        Eh
            ? (((r = _h.createEvent("Event")).promise = t),
            (r.reason = n),
            r.initEvent(e, !1, !0),
            s.dispatchEvent(r))
            : (r = { promise: t, reason: n }),
            (i = s["on" + e])
            ? i(r)
            : e === Ah &&
                (function (e, t) {
                var n = s.console;
                n &&
                    n.error &&
                    (1 === arguments.length ? n.error(e) : n.error(e, t));
                })("Unhandled promise rejection", n);
        },
        Oh = function (e, t) {
        gh.call(s, function () {
            var n,
            r = t.value;
            if (
            Rh(t) &&
            ((n = fh(function () {
                Vh ? Sh.emit("unhandledRejection", r, e) : Bh(Ah, e, r);
            })),
            (t.rejection = Vh || Rh(t) ? 2 : 1),
            n.error)
            )
            throw n.value;
        });
        },
        Rh = function (e) {
        return 1 !== e.rejection && !e.parent;
        },
        zh = function (e, t) {
        gh.call(s, function () {
            Vh
            ? Sh.emit("rejectionHandled", e)
            : Bh("rejectionhandled", e, t.value);
        });
        },
        Nh = function (e, t, n, r) {
        return function (i) {
            e(t, n, i, r);
        };
        },
        Fh = function (e, t, n, r) {
        t.done ||
            ((t.done = !0),
            r && (t = r),
            (t.value = n),
            (t.state = 2),
            Ph(e, t, !0));
        },
        Dh = function (e, t, n, r) {
        if (!t.done) {
            (t.done = !0), r && (t = r);
            try {
            if (e === n) throw wh("Promise can't be resolved itself");
            var i = Lh(n);
            i
                ? uh(function () {
                    var r = { done: !1 };
                    try {
                    i.call(n, Nh(Dh, e, r, t), Nh(Fh, e, r, t));
                    } catch (n) {
                    Fh(e, r, n, t);
                    }
                })
                : ((t.value = n), (t.state = 1), Ph(e, t, !1));
            } catch (n) {
            Fh(e, { done: !1 }, n, t);
            }
        }
        };
    Mh &&
        ((kh = function (e) {
        _a(this, kh, vh), Re(e), ah.call(this);
        var t = yh(this);
        try {
            e(Nh(Dh, this, t), Nh(Fh, this, t));
        } catch (e) {
            Fh(this, t, e);
        }
        }),
        ((ah = function (e) {
        mh(this, {
            type: vh,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0,
        });
        }).prototype = wa(kh.prototype, {
        then: function (e, t) {
            var n = bh(this),
            r = Ih(Jn(this, kh));
            return (
            (r.ok = "function" != typeof e || e),
            (r.fail = "function" == typeof t && t),
            (r.domain = Vh ? Sh.domain : void 0),
            (n.parent = !0),
            n.reactions.push(r),
            0 != n.state && Ph(this, n, !1),
            r.promise
            );
        },
        catch: function (e) {
            return this.then(void 0, e);
        },
        })),
        (oh = function () {
        var e = new ah(),
            t = yh(e);
        (this.promise = e),
            (this.resolve = Nh(Dh, e, t)),
            (this.reject = Nh(Fh, e, t));
        }),
        (hh.f = Ih =
        function (e) {
            return e === kh || e === sh ? new oh(e) : Ch(e);
        }),
        "function" == typeof Cc &&
        ((lh = Cc.prototype.then),
        ae(
            Cc.prototype,
            "then",
            function (e, t) {
            var n = this;
            return new kh(function (e, t) {
                lh.call(n, e, t);
            }).then(e, t);
            },
            { unsafe: !0 }
        ),
        "function" == typeof xh &&
            Oe(
            { global: !0, enumerable: !0, forced: !0 },
            {
                fetch: function (e) {
                return dh(kh, xh.apply(s, arguments));
                },
            }
            ))),
        Oe({ global: !0, wrap: !0, forced: Mh }, { Promise: kh }),
        Ir(kh, vh, !1),
        ko(vh),
        (sh = le(vh)),
        Oe(
        { target: vh, stat: !0, forced: Mh },
        {
            reject: function (e) {
            var t = Ih(this);
            return t.reject.call(void 0, e), t.promise;
            },
        }
        ),
        Oe(
        { target: vh, stat: !0, forced: Mh },
        {
            resolve: function (e) {
            return dh(this, e);
            },
        }
        ),
        Oe(
        { target: vh, stat: !0, forced: Th },
        {
            all: function (e) {
            var t = this,
                n = Ih(t),
                r = n.resolve,
                i = n.reject,
                a = fh(function () {
                var n = Re(t.resolve),
                    a = [],
                    o = 0,
                    s = 1;
                Vc(e, function (e) {
                    var l = o++,
                    u = !1;
                    a.push(void 0),
                    s++,
                    n.call(t, e).then(function (e) {
                        u || ((u = !0), (a[l] = e), --s || r(a));
                    }, i);
                }),
                    --s || r(a);
                });
            return a.error && i(a.value), n.promise;
            },
            race: function (e) {
            var t = this,
                n = Ih(t),
                r = n.reject,
                i = fh(function () {
                var i = Re(t.resolve);
                Vc(e, function (e) {
                    i.call(t, e).then(n.resolve, r);
                });
                });
            return i.error && r(i.value), n.promise;
            },
        }
        );
    var jh = function () {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e),
            i = 0;
        for (t = 0; t < n; t++)
            for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
            r[i] = a[o];
        return r;
        },
        $h = function (e, t, n) {
        (this.name = e),
            (this.version = t),
            (this.os = n),
            (this.type = "browser");
        },
        qh = function (e) {
        (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = process.platform);
        },
        Uh = function (e, t, n, r) {
        (this.name = e),
            (this.version = t),
            (this.os = n),
            (this.bot = r),
            (this.type = "bot-device");
        },
        Wh = function () {
        (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        Gh = function () {
        (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        Hh =
        /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        Kh = [
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
        [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
        ],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FBAV\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
        [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
        ],
        ],
        Xh = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/],
        ];
    function Zh(e) {
        return e
        ? Yh(e)
        : "undefined" == typeof document &&
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
        ? new Gh()
        : "undefined" != typeof navigator
        ? Yh(navigator.userAgent)
        : "undefined" != typeof process && process.version
        ? new qh(process.version.slice(1))
        : null;
    }
    function Yh(e) {
        var t = (function (e) {
        return (
            "" !== e &&
            Kh.reduce(function (t, n) {
            var r = n[0],
                i = n[1];
            if (t) return t;
            var a = i.exec(e);
            return !!a && [r, a];
            }, !1)
        );
        })(e);
        if (!t) return null;
        var n = t[0],
        r = t[1];
        if ("searchbot" === n) return new Wh();
        var i = r[1] && r[1].split(/[._]/).slice(0, 3);
        i
        ? i.length < 3 &&
            (i = jh(
            i,
            (function (e) {
                for (var t = [], n = 0; n < e; n++) t.push("0");
                return t;
            })(3 - i.length)
            ))
        : (i = []);
        var a = i.join("."),
        o = (function (e) {
            for (var t = 0, n = Xh.length; t < n; t++) {
            var r = Xh[t],
                i = r[0];
            if (r[1].exec(e)) return i;
            }
            return null;
        })(e),
        s = Hh.exec(e);
        return s && s[1] ? new Uh(n, a, o, s[1]) : new $h(n, a, o);
    }
    var Jh = null,
        Qh = (function () {
        function e() {
            yt(this, e);
        }
        return (
            bt(e, null, [
            {
                key: "identify",
                value: function () {
                return null === Jh && (Jh = Zh() || !1), Jh;
                },
            },
            {
                key: "match",
                value: function () {
                var t = this,
                    n = e.identify();
                if (!1 === n) return !1;
                for (
                    var r = /([a-zA-Z0-9-]+)(?:([<>=]+)([0-9.]+))?/,
                    i = arguments.length,
                    a = new Array(i),
                    o = 0;
                    o < i;
                    o++
                )
                    a[o] = arguments[o];
                return (
                    void 0 !==
                    a.find(function (e) {
                    var i = Mt(e.match(r), 4),
                        a = i[1],
                        o = i[2],
                        s = i[3];
                    return (
                        a === n.name &&
                        (void 0 === s || t.matchVersion(n.version, o, s))
                    );
                    })
                );
                },
            },
            {
                key: "matchVersion",
                value: function (e, t, n) {
                for (
                    var r = e.split("."),
                    i = n.split("."),
                    a = Math.min(r.length, i.length),
                    o = "=",
                    s = -1;
                    "=" === o && ++s < a;

                )
                    (r[s] = parseInt(r[s], 10)),
                    (i[s] = parseInt(i[s], 10)),
                    (o = r[s] !== i[s] ? (r[s] < i[s] ? "<" : ">") : "=");
                return (
                    "=" === o &&
                    (o =
                        r.length !== i.length
                        ? r.length < i.length
                            ? "<"
                            : ">"
                        : "="),
                    -1 !== t.indexOf(o)
                );
                },
            },
            {
                key: "isNode",
                value: function () {
                return this.match("node");
                },
            },
            {
                key: "isBrowser",
                value: function () {
                return "undefined" != typeof window;
                },
            },
            {
                key: "placeBrowserAttribute",
                value: function () {
                if (e.isBrowser() && !1 !== e.identify()) {
                    var t = e.identify(),
                    n = t.name,
                    r = t.version;
                    document.documentElement.dataset.browser = ""
                    .concat(n, "/")
                    .concat(r);
                }
                return this;
                },
            },
            ]),
            e
        );
        })(),
        ed = {
        name: "block-cipher",
        title: "Block Cipher",
        category: "Modern cryptography",
        type: "encoder",
        },
        td = [
        {
            name: "aes-128",
            label: "AES-128",
            blockSize: 16,
            keySize: 16,
            browserAlgorithm: "aes",
            nodeAlgorithm: "aes-128",
        },
        {
            name: "aes-192",
            label: "AES-192",
            blockSize: 16,
            keySize: 24,
            browserAlgorithm: !1,
            nodeAlgorithm: "aes-192",
        },
        {
            name: "aes-256",
            label: "AES-256",
            blockSize: 16,
            keySize: 32,
            browserAlgorithm: "aes",
            nodeAlgorithm: "aes-256",
        },
        ],
        nd = [
        {
            name: "ecb",
            label: "ECB (Electronic Code Book)",
            hasIV: !1,
            browserMode: !1,
            nodeMode: !0,
        },
        {
            name: "cbc",
            label: "CBC (Cipher Block Chaining)",
            hasIV: !0,
            browserMode: !0,
            nodeMode: !0,
        },
        {
            name: "ctr",
            label: "CTR (Counter)",
            hasIV: !0,
            browserMode: !0,
            nodeMode: !0,
        },
        ],
        rd = (function (e) {
        kt(a, e);
        var t,
            n,
            i = Et(a);
        function a() {
            var e;
            yt(this, a), (e = i.call(this));
            var t = a.getAlgorithms(),
            n = t[0],
            r = a.getModes(),
            o = a.isPaddingAvailable();
            return (
            e.addSettings([
                {
                name: "algorithm",
                type: "enum",
                value: n.name,
                elements: t.map(function (e) {
                    return e.name;
                }),
                labels: t.map(function (e) {
                    return e.label;
                }),
                randomizable: !1,
                width: o ? 8 : 12,
                },
                {
                name: "padding",
                type: "boolean",
                value: !1,
                randomizable: !1,
                width: o ? 4 : 12,
                visible: o,
                },
                {
                name: "mode",
                type: "enum",
                value: "cbc",
                elements: r.map(function (e) {
                    return e.name;
                }),
                labels: r.map(function (e) {
                    return e.label;
                }),
                randomizable: !1,
                },
                {
                name: "key",
                type: "bytes",
                value: new Uint8Array([
                    43, 126, 21, 22, 40, 174, 210, 166, 171, 247, 21, 136, 9, 207,
                    79, 60,
                ]),
                minSize: n.keySize,
                maxSize: n.keySize,
                },
                {
                name: "iv",
                label: "IV",
                type: "bytes",
                value: new Uint8Array([
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                ]),
                minSize: n.blockSize,
                maxSize: n.blockSize,
                },
            ]),
            e
            );
        }
        return (
            bt(a, null, [
            {
                key: "getMeta",
                value: function () {
                return ed;
                },
            },
            ]),
            bt(
            a,
            [
                {
                key: "settingValueDidChange",
                value: function (e, t) {
                    switch (e.getName()) {
                    case "algorithm":
                        var n = a.getAlgorithm(t).keySize;
                        this.getSetting("key").setMinSize(n).setMaxSize(n);
                        break;
                    case "mode":
                        var r = this.getSettingValue("algorithm"),
                        i = a.getAlgorithm(r).blockSize,
                        o = a.getMode(t).hasIV;
                        this.getSetting("iv")
                        .setVisible(o)
                        .setMinSize(i)
                        .setMaxSize(i);
                    }
                },
                },
                {
                key: "performTranslate",
                value:
                    ((n = vt(
                    regeneratorRuntime.mark(function e(t, n) {
                        var r, i, a, o, s, l, u;
                        return regeneratorRuntime.wrap(
                        function (e) {
                            for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                return (
                                    (r = t.getBytes()),
                                    (i = this.getSettingValues()),
                                    (a = i.algorithm),
                                    (o = i.mode),
                                    (s = i.key),
                                    (l = i.padding),
                                    (u = i.iv),
                                    (e.prev = 2),
                                    (e.next = 5),
                                    this.createCipher(a, o, s, u, l, n, r)
                                );
                                case 5:
                                return e.abrupt("return", e.sent);
                                case 8:
                                if (((e.prev = 8), (e.t0 = e.catch(2)), n)) {
                                    e.next = 14;
                                    break;
                                }
                                throw new Rl(
                                    "".concat(a, " decryption failed, ") +
                                    "this may be due to malformed content"
                                );
                                case 14:
                                throw new Rl("".concat(a, " encryption failed"));
                                case 15:
                                case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 8]]
                        );
                    })
                    )),
                    function (e, t) {
                    return n.apply(this, arguments);
                    }),
                },
                {
                key: "createCipher",
                value:
                    ((t = vt(
                    regeneratorRuntime.mark(function e(t, n, i, o, s, l, u) {
                        var c,
                        h,
                        d,
                        f,
                        g,
                        p,
                        v,
                        y,
                        m = this;
                        return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                ((c = a.getAlgorithm(t)),
                                a.getMode(n).hasIV || (o = new Uint8Array([])),
                                !Qh.isNode())
                                ) {
                                e.next = 10;
                                break;
                                }
                                return (
                                (h = c.nodeAlgorithm + "-" + n),
                                (o = global.Buffer.from(o)),
                                (u = global.Buffer.from(u)),
                                e.abrupt(
                                    "return",
                                    new Promise(function (e, t) {
                                    var n = l
                                        ? r.default.createCipheriv(h, i, o)
                                        : r.default.createDecipheriv(h, i, o);
                                    n.setAutoPadding(s);
                                    var a = Buffer.concat([
                                        n.update(u),
                                        n.final(),
                                    ]);
                                    e(new Uint8Array(a));
                                    })
                                )
                                );
                            case 10:
                                return (
                                (d = c.browserAlgorithm + "-" + n),
                                (f = window.crypto || window.msCrypto),
                                (g = f.subtle || f.webkitSubtle),
                                (e.next = 15),
                                g.importKey("raw", i, { name: d }, !1, [
                                    "encrypt",
                                    "decrypt",
                                ])
                                );
                            case 15:
                                return (
                                (p = e.sent),
                                (v = {
                                    name: d,
                                    iv: o,
                                    counter: o,
                                    length: c.blockSize,
                                }),
                                void 0 !==
                                    (y = l
                                    ? g.encrypt(v, p, u)
                                    : g.decrypt(v, p, u)).oncomplete &&
                                    (y = new Promise(function (e, t) {
                                    (y.oncomplete = e.bind(m, y.result)),
                                        (y.onerror = t);
                                    })),
                                e.abrupt(
                                    "return",
                                    y.then(function (e) {
                                    return new Uint8Array(e);
                                    })
                                )
                                );
                            case 20:
                            case "end":
                                return e.stop();
                            }
                        }, e);
                    })
                    )),
                    function (e, n, r, i, a, o, s) {
                    return t.apply(this, arguments);
                    }),
                },
            ],
            [
                {
                key: "isPaddingAvailable",
                value: function () {
                    return Qh.isNode();
                },
                },
                {
                key: "getAlgorithm",
                value: function (e) {
                    return td.find(function (t) {
                    return t.name === e;
                    });
                },
                },
                {
                key: "getAlgorithms",
                value: function () {
                    var e = Qh.isNode();
                    return td.filter(function (t) {
                    return (t.browserAlgorithm && !e) || (t.nodeAlgorithm && e);
                    });
                },
                },
                {
                key: "getMode",
                value: function (e) {
                    return nd.find(function (t) {
                    return t.name === e;
                    });
                },
                },
                {
                key: "getModes",
                value: function () {
                    var e = Qh.isNode();
                    return nd.filter(function (t) {
                    return (t.browserMode && !e) || (t.nodeMode && e);
                    });
                },
                },
            ]
            ),
            a
        );
        })(qu);
    Oe(
        { target: "Array", proto: !0, forced: as !== [].lastIndexOf },
        { lastIndexOf: as }
    );
    var id = {
        name: "bootstring",
        title: "Bootstring",
        category: "Encoding",
        type: "encoder",
        },
        ad = "Integer overflow: Input needs wider integers to process",
        od = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "basicRangeStart",
                label: "Basic Start",
                type: "number",
                value: 0,
                integer: !0,
                rotate: !1,
                min: 0,
                max: 125,
                width: 6,
                randomizable: !1,
                },
                {
                name: "basicRangeEnd",
                label: "Basic End",
                type: "number",
                value: 127,
                integer: !0,
                rotate: !1,
                min: 2,
                max: 1114111,
                width: 6,
                randomizable: !1,
                },
                {
                name: "digitMapping",
                type: "text",
                value: "abcdefghijklmnopqrstuvwxyz0123456789",
                uniqueChars: !0,
                minLength: 2,
                caseSensitivity: !1,
                validateValue: e.validateDigitMappingValue.bind(Ct(e)),
                randomizable: !1,
                },
                {
                name: "delimiter",
                type: "text",
                value: "-",
                width: 6,
                minLength: 1,
                maxLength: 1,
                caseSensitivity: !1,
                validateValue: e.validateDelimiterValue.bind(Ct(e)),
                randomizable: !1,
                },
                {
                name: "caseSensitivity",
                type: "boolean",
                value: !1,
                width: 6,
                randomizable: !1,
                },
                {
                name: "initialBias",
                type: "number",
                value: 72,
                integer: !0,
                width: 6,
                validateValue: e.validateInitialBiasValue.bind(Ct(e)),
                randomizable: !1,
                },
                {
                name: "initialN",
                type: "number",
                value: 128,
                integer: !0,
                min: 0,
                width: 6,
                randomizable: !1,
                },
                {
                name: "tmin",
                type: "number",
                value: 1,
                integer: !0,
                rotate: !1,
                min: 0,
                max: 26,
                width: 6,
                randomizable: !1,
                },
                {
                name: "tmax",
                type: "number",
                value: 26,
                integer: !0,
                rotate: !1,
                min: 0,
                max: 35,
                width: 6,
                randomizable: !1,
                },
                {
                name: "skew",
                type: "number",
                value: 38,
                integer: !0,
                min: 1,
                width: 6,
                randomizable: !1,
                },
                {
                name: "damp",
                type: "number",
                value: 700,
                integer: !0,
                min: 2,
                width: 6,
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return id;
                },
            },
            ]),
            bt(n, [
            {
                key: "performEncode",
                value: function (e) {
                var t = this.getSettingValues(),
                    n = t.initialBias,
                    r = t.initialN,
                    i = t.tmin,
                    a = t.tmax,
                    o = t.caseSensitivity,
                    s = this.getSettingValue("delimiter").getCodePointAt(0),
                    l = this.getSettingValue("digitMapping").getLength();
                o || (e = e.toLowerCase());
                for (
                    var u = e.getCodePoints(),
                    c = u.length,
                    h = r,
                    d = n,
                    f = 0,
                    g = [],
                    p = 0;
                    p < u.length;
                    p++
                )
                    if (this._isBasic(u[p])) g.push(u[p]);
                    else if (u[p] < h)
                    throw new Rl(
                        "Unexpected code point at index ".concat(
                        p,
                        ", consider changing initial n "
                        ) + "to include this code point"
                    );
                var v,
                    y,
                    m,
                    b,
                    k,
                    w = g.length,
                    _ = g.length;
                for (_ > 0 && g.push(s); w < c; ) {
                    v = Number.MAX_SAFE_INTEGER;
                    var S,
                    x = Pt(u);
                    try {
                    for (x.s(); !(S = x.n()).done; )
                        (k = S.value) >= h && k < v && !this._isBasic(k) && (v = k);
                    } catch (e) {
                    x.e(e);
                    } finally {
                    x.f();
                    }
                    if (v - h > $u.div(Number.MAX_SAFE_INTEGER - f, w + 1))
                    throw new Rl(ad);
                    (f += (v - h) * (w + 1)), (h = v);
                    var I,
                    C = Pt(u);
                    try {
                    for (C.s(); !(I = C.n()).done; ) {
                        if (
                        ((k = I.value) < h || this._isBasic(k)) &&
                        ++f > Number.MAX_SAFE_INTEGER
                        )
                        throw new Rl(ad);
                        if (k === h) {
                        for (
                            y = f, m = l;
                            !(y < (b = this._calcT(m, d, i, a)));
                            m += l
                        )
                            g.push(
                            this._basicCodePointFromDigit(
                                b + $u.mod(y - b, l - b)
                            )
                            ),
                            (y = $u.div(y - b, l - b));
                        g.push(this._basicCodePointFromDigit(y)),
                            (d = this._adaptBias(f, w + 1, w === _)),
                            (f = 0),
                            w++;
                        }
                    }
                    } catch (e) {
                    C.e(e);
                    } finally {
                    C.f();
                    }
                    f++, h++;
                }
                return g;
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                var t = this.getSettingValues(),
                    n = t.initialBias,
                    r = t.initialN,
                    i = t.tmin,
                    a = t.tmax,
                    o = t.caseSensitivity,
                    s = this.getSettingValue("delimiter").getCodePointAt(0),
                    l = this.getSettingValue("digitMapping").getLength();
                o || (e = e.toLowerCase());
                for (
                    var u = e.getCodePoints(),
                    c = u.length,
                    h = r,
                    d = n,
                    f = Math.max(u.lastIndexOf(s), 0),
                    g = [],
                    p = 0;
                    p < f;
                    p++
                ) {
                    if (!this._isBasic(u[p]))
                    throw new Rl(
                        "Found unexpected non-basic code point at ".concat(p)
                    );
                    g.push(u[p]);
                }
                for (var v, y, m, b, k, w = 0, _ = f > 0 ? f + 1 : 0; _ < c; ) {
                    for (v = w, y = 1, m = l; ; m += l) {
                    if (_ >= c) throw new Rl("The input ends unexpectedly");
                    if (-1 === (b = this._digitFromBasicCodePoint(u[_++])))
                        throw new Rl(
                        "Found unexpected non-basic code point at ".concat(_ - 1)
                        );
                    if (b > $u.div(Number.MAX_SAFE_INTEGER - w, y))
                        throw new Rl(ad);
                    if (((w += b * y), b < (k = this._calcT(m, d, i, a)))) break;
                    if (y > $u.div(Number.MAX_SAFE_INTEGER, l - k))
                        throw new Rl(ad);
                    y *= l - k;
                    }
                    if (
                    ((d = this._adaptBias(w - v, g.length + 1, 0 === v)),
                    $u.div(w, g.length + 1) > Number.MAX_SAFE_INTEGER - h)
                    )
                    throw new Rl(ad);
                    if (
                    ((h += $u.div(w, g.length + 1)),
                    (w = $u.mod(w, g.length + 1)),
                    this._isBasic(h))
                    )
                    throw new Rl("Unexpectedly unwrapped basic code point");
                    g.splice(w, 0, h), w++;
                }
                return g;
                },
            },
            {
                key: "_adaptBias",
                value: function (e, t, n) {
                var r = this.getSettingValues(),
                    i = r.digitMapping,
                    a = r.tmin,
                    o = r.tmax,
                    s = r.skew,
                    l = i.getLength();
                if (n) {
                    var u = this.getSettingValue("damp");
                    e = $u.div(e, u);
                } else e = $u.div(e, 2);
                e += $u.div(e, t);
                for (var c = 0; e > $u.div((l - a) * o, 2); )
                    (e = $u.div(e, l - a)), (c += l);
                return c + $u.div((l - a + 1) * e, e + s);
                },
            },
            {
                key: "_calcT",
                value: function (e, t, n, r) {
                return e <= t + n ? n : e >= t + r ? r : e - t;
                },
            },
            {
                key: "_isBasic",
                value: function (e) {
                var t = this.getSettingValues(),
                    n = t.basicRangeStart,
                    r = t.basicRangeEnd;
                return e >= n && e <= r;
                },
            },
            {
                key: "_digitFromBasicCodePoint",
                value: function (e) {
                return this.getSettingValue("digitMapping").indexOfCodePoint(e);
                },
            },
            {
                key: "_basicCodePointFromDigit",
                value: function (e) {
                return this.getSettingValue("digitMapping").getCodePointAt(e);
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "basicRangeStart":
                    this.getSetting("basicRangeEnd").setMin(e.getValue() + 2),
                        this.getSetting("digitMapping").revalidateValue(),
                        this.getSetting("delimiter").revalidateValue();
                    break;
                    case "basicRangeEnd":
                    this.getSetting("basicRangeStart").setMax(e.getValue() - 2),
                        this.getSetting("digitMapping").revalidateValue(),
                        this.getSetting("delimiter").revalidateValue();
                    break;
                    case "digitMapping":
                    var n = e.getValue().getLength();
                    this.getSetting("tmax").setMax(n - 1),
                        this.getSetting("delimiter").revalidateValue(),
                        this.getSetting("initialBias").revalidateValue();
                    break;
                    case "tmin":
                    this.getSetting("initialBias").revalidateValue();
                    break;
                    case "tmax":
                    this.getSetting("tmin").setMax(e.getValue());
                    break;
                    case "caseSensitivity":
                    this.getSetting("digitMapping").setCaseSensitivity(t),
                        this.getSetting("delimiter").setCaseSensitivity(t);
                }
                },
            },
            {
                key: "validateDigitMappingValue",
                value: function (e, t) {
                if (!this.isSettingValid("basicRangeStart", "basicRangeEnd"))
                    return !1;
                var n = this.getSettingValue("basicRangeStart"),
                    r = this.getSettingValue("basicRangeEnd"),
                    i = e.getCodePoints().findIndex(function (e) {
                    return e < n || e > r;
                    });
                return (
                    -1 === i || {
                    key: "bootstringDigitMappingInvalid",
                    message:
                        "Character at index ".concat(
                        i,
                        " needs to be part of the given "
                        ) + "basic code point range",
                    }
                );
                },
            },
            {
                key: "validateDelimiterValue",
                value: function (e, t) {
                if (
                    !this.isSettingValid(
                    "basicRangeStart",
                    "basicRangeEnd",
                    "digitMapping"
                    )
                )
                    return !1;
                var n = this.getSettingValues(),
                    r = n.basicRangeStart,
                    i = n.basicRangeEnd,
                    a = n.digitMapping,
                    o = e.getCodePointAt(0);
                return (
                    !(o < r || o > i || -1 !== a.indexOfCodePoint(o)) || {
                    key: "bootstringDelimiterInvalid",
                    message:
                        "The value must be part of the basic code point range while not having a digit mapped to it",
                    }
                );
                },
            },
            {
                key: "validateInitialBiasValue",
                value: function (e, t) {
                if (!this.isSettingValid("digitMapping", "tmin")) return !1;
                var n = this.getSettingValue("digitMapping").getLength(),
                    r = this.getSettingValue("tmin");
                return (
                    !($u.mod(e, n) > n - r) || {
                    key: "bootstringInitialBiasInvalid",
                    message:
                        "The value must be chosen such that initial_bias mod base <= base - tmin",
                    }
                );
                },
            },
            ]),
            n
        );
        })(qu),
        sd = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            return yt(this, n), t.apply(this, arguments);
        }
        return (
            bt(n, [
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("viewer"), e;
                },
            },
            {
                key: "renderHeader",
                value: function () {
                var e = bn.createElement("ul", { className: "brick__actions" }, [
                    bn.createElement("li", { className: "brick__action-item" }, [
                        bn.createElement(
                        "span",
                        { className: "brick__action brick__action--active" },
                        "View"
                        ),
                    ]),
                    ]),
                    t = At(wt(n.prototype), "renderHeader", this).call(this);
                return t.insertBefore(e, t.firstChild), t;
                },
            },
            ]),
            n
        );
        })(Jl),
        ld = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._text = ""),
            (e._disabled = !1),
            (e._$textarea = null),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "getText",
                value: function () {
                return this._text;
                },
            },
            {
                key: "setText",
                value: function (e) {
                return (
                    this._text !== e &&
                    ((this._text = e),
                    null !== this._$textarea &&
                        ((this._$textarea.value = e), this.layoutTextarea())),
                    this
                );
                },
            },
            {
                key: "isDisabled",
                value: function () {
                return this._disabled;
                },
            },
            {
                key: "setDisabled",
                value: function (e) {
                return (
                    (this._disabled = e),
                    null !== this._$textarea &&
                    (e
                        ? (this._$textarea.disabled = "disabled")
                        : this._$textarea.removeAttribute("disabled")),
                    this
                );
                },
            },
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("viewer-text"), e;
                },
            },
            {
                key: "renderContent",
                value: function () {
                var e = this;
                (this._$textarea = bn.createElement("textarea", {
                    className: "viewer-text__textarea",
                    ariaLabel: "Content",
                    spellcheck: !1,
                    value: this._text,
                    onInput: this.textareaValueDidChange.bind(this),
                    onFocus: function (t) {
                    return e.focus();
                    },
                    onBlur: function (t) {
                    return e.blur();
                    },
                })),
                    this.isDisabled() && (this._$textarea.disabled = "disabled");
                var t = At(wt(n.prototype), "renderContent", this).call(this);
                return t.appendChild(this._$textarea), t;
                },
            },
            {
                key: "textareaValueDidChange",
                value: function (e) {
                if (this.isDisabled()) return e.preventDefault(), !1;
                var t = this._$textarea.value;
                this._text !== t &&
                    ((this._text = t),
                    this.getModel().viewTextDidChange(this, this._text),
                    this.layoutTextarea());
                },
            },
            {
                key: "layout",
                value: function () {
                return (
                    this.layoutTextarea(),
                    At(wt(n.prototype), "layout", this).call(this)
                );
                },
            },
            {
                key: "layoutTextarea",
                value: function () {
                return (
                    (this._$textarea.style.height = ""),
                    (this._$textarea.style.height = "".concat(
                    this._$textarea.scrollHeight,
                    "px"
                    )),
                    this
                );
                },
            },
            {
                key: "update",
                value: function () {
                var e = this.getModel().getError();
                return null !== e
                    ? this.updateStatus(
                        "error",
                        "Binary content can't be interpreted as text. Try switching to the bytes view. " +
                        e.message
                    )
                    : this.updateStatus(null);
                },
            },
            ]),
            n
        );
        })(sd),
        ud = (function (e) {
        kt(s, e);
        var t,
            n,
            r,
            i,
            a,
            o = Et(s);
        function s() {
            var e;
            return (
            yt(this, s),
            ((e = o.call(this))._queuedContent = null),
            (e._error = null),
            e
            );
        }
        return (
            bt(s, [
            {
                key: "view",
                value:
                ((a = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                ((e.prev = 0),
                                !(
                                    (n = this.getSettingsForm().getInvalidFields())
                                    .length > 0
                                ))
                                ) {
                                e.next = 4;
                                break;
                                }
                                throw new Rl(
                                "Can't view content with invalid settings: " +
                                    n
                                    .map(function (e) {
                                        return e.getLabel();
                                    })
                                    .join(", ")
                                );
                            case 4:
                                if (this.hasView()) {
                                e.next = 7;
                                break;
                                }
                                return (
                                (this._queuedContent = t), e.abrupt("return")
                                );
                            case 7:
                                return (e.next = 9), this.willView(t);
                            case 9:
                                return (
                                (t = e.sent), (e.next = 12), this.performView(t)
                                );
                            case 12:
                                return (e.next = 14), this.didView(t);
                            case 14:
                                null !== this._error &&
                                ((this._error = null), this.updateView()),
                                (e.next = 22);
                                break;
                            case 17:
                                throw (
                                ((e.prev = 17),
                                (e.t0 = e.catch(0)),
                                (this._error = e.t0),
                                this.updateView(),
                                e.t0)
                                );
                            case 22:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 17]]
                    );
                    })
                )),
                function (e) {
                    return a.apply(this, arguments);
                }),
            },
            {
                key: "willView",
                value:
                ((i = vt(
                    regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                            return e.abrupt("return", t);
                            case 1:
                            case "end":
                            return e.stop();
                        }
                    }, e);
                    })
                )),
                function (e) {
                    return i.apply(this, arguments);
                }),
            },
            {
                key: "performView",
                value:
                ((r = vt(
                    regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                            case "end":
                            return e.stop();
                        }
                    }, e);
                    })
                )),
                function (e) {
                    return r.apply(this, arguments);
                }),
            },
            {
                key: "didView",
                value:
                ((n = vt(
                    regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                        switch ((e.prev = e.next)) {
                            case 0:
                            case "end":
                            return e.stop();
                        }
                    }, e);
                    })
                )),
                function (e) {
                    return n.apply(this, arguments);
                }),
            },
            {
                key: "dare",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n,
                        r = arguments;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                (n = r.length > 1 && void 0 !== r[1] && r[1]),
                                (e.prev = 1),
                                (e.next = 4),
                                t()
                                );
                            case 4:
                                null !== this._error &&
                                ((this._error = null), this.updateView()),
                                (e.next = 13);
                                break;
                            case 7:
                                if (
                                ((e.prev = 7),
                                (e.t0 = e.catch(1)),
                                (this._error = e.t0),
                                this.updateView(),
                                !n && e.t0 instanceof Rl)
                                ) {
                                e.next = 13;
                                break;
                                }
                                throw e.t0;
                            case 13:
                                return e.abrupt("return", this);
                            case 14:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 7]]
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "getError",
                value: function () {
                return this._error;
                },
            },
            {
                key: "didCreateView",
                value: function (e) {
                At(wt(s.prototype), "didCreateView", this).call(this, e),
                    null !== this._queuedContent &&
                    (this.view(this._queuedContent),
                    (this._queuedContent = null));
                },
            },
            {
                key: "contentDidChange",
                value: function (e) {
                this.hasPipe() && this.getPipe().viewerContentDidChange(this, e);
                },
            },
            ]),
            s
        );
        })(Du),
        cd = { name: "bytes", title: "Bytes", category: "View", type: "viewer" },
        hd = (function (e) {
        kt(r, e);
        var t,
            n = Et(r);
        function r() {
            var e;
            return (
            yt(this, r),
            ((e = n.call(this))._viewPrototype = ld),
            e.addSettings([
                {
                name: "format",
                type: "enum",
                width: 6,
                value: "hexadecimal",
                elements: ["hexadecimal", "binary"],
                labels: ["Hexadecimal", "Binary"],
                randomizable: !1,
                },
                {
                name: "groupBits",
                label: "Group by",
                type: "enum",
                width: 6,
                value: 8,
                elements: [null, 4, 5, 6, 8, 16, 24, 32],
                labels: [
                    "None",
                    "4 Bits",
                    "5 Bits",
                    "6 Bits",
                    "Byte",
                    "2 Bytes",
                    "3 Bytes",
                    "4 Bytes",
                ],
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(r, null, [
            {
                key: "getMeta",
                value: function () {
                return cd;
                },
            },
            ]),
            bt(r, [
            {
                key: "performView",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a, o, s;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                (n = t.getBytes()),
                                (r = this.getSettingValue("format")),
                                (e.t0 = r),
                                (e.next =
                                    "hexadecimal" === e.t0
                                    ? 5
                                    : "binary" === e.t0
                                    ? 8
                                    : 10);
                                break;
                            case 5:
                                return (
                                (i = Fl.hexStringFromBytes(n)),
                                (a = 4),
                                e.abrupt("break", 10)
                                );
                            case 8:
                                (i = Fl.binaryStringFromBytes(n)), (a = 1);
                            case 10:
                                null !== (o = this.getSettingValue("groupBits")) &&
                                ((s = o / a), (i = Bl.chunk(i, s).join(" "))),
                                this.getView().setText(i);
                            case 13:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "viewTextDidChange",
                value: function (e, t) {
                var n = this;
                this.dare(function () {
                    var e,
                    r = n.getSettingValue("format"),
                    i = t;
                    switch (((i = i.replace(/\s/g, "")), r)) {
                    case "hexadecimal":
                        e = Fl.bytesFromHexString(i);
                        break;
                    case "binary":
                        e = Fl.bytesFromBinaryString(i);
                    }
                    n.contentDidChange(ql.wrap(e));
                });
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                if ("groupBits" === e.getName()) {
                    var n = this.getSetting("format"),
                    r = ["binary"],
                    i = ["Binary"];
                    (null !== t && t % 4 != 0) ||
                    (r.push("hexadecimal"), i.push("Hexadecimal")),
                    -1 === r.indexOf(n.getValue()) && n.setValue(r[0]),
                    n.setElements(r, i);
                }
                },
            },
            ]),
            r
        );
        })(ud),
        dd = {
        name: "caesar-cipher",
        title: "Caesar cipher",
        category: "Ciphers",
        type: "encoder",
        },
        fd = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "shift",
                type: "number",
                label: "Shift",
                priority: 10,
                value: 7,
                integer: !0,
                useBigInt: !0,
                describeValue: e.describeShiftValue.bind(Ct(e)),
                randomizeValue: e.randomizeShiftValue.bind(Ct(e)),
                },
                {
                name: "alphabet",
                type: "text",
                value: "abcdefghijklmnopqrstuvwxyz",
                uniqueChars: !0,
                minLength: 2,
                caseSensitivity: !1,
                randomizable: !1,
                },
                {
                name: "caseStrategy",
                type: "enum",
                value: "maintain",
                elements: ["maintain", "ignore", "strict"],
                labels: ["Maintain case", "Ignore case", "Strict (A ≠ a)"],
                width: 6,
                randomizable: !1,
                },
                {
                name: "includeForeignChars",
                type: "boolean",
                label: "Foreign Chars",
                width: 6,
                value: !0,
                trueLabel: "Include",
                falseLabel: "Ignore",
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return dd;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                var n,
                    r = this.getSettingValues(),
                    i = r.shift,
                    a = r.caseStrategy,
                    o = r.includeForeignChars,
                    s = this.getSettingValue("alphabet");
                "strict" !== a && (n = (s = s.toLowerCase()).toUpperCase());
                for (
                    var l,
                    u,
                    c,
                    h,
                    d = s.getLength(),
                    f = e.getLength(),
                    g = new Array(f),
                    p = 0,
                    v = 0;
                    v < f;
                    v++
                )
                    (l = e.getCodePointAt(v)),
                    (h = !1),
                    -1 === (u = s.indexOfCodePoint(l)) &&
                        "strict" !== a &&
                        ((u = n.indexOfCodePoint(l)), (h = !0)),
                    -1 === u
                        ? o && (g[p++] = l)
                        : ((c =
                            "bigint" != typeof i
                            ? $u.mod(u + i * (t ? 1 : -1), d)
                            : Number(
                                $u.mod(
                                    BigInt(u) + i * BigInt(t ? 1 : -1),
                                    BigInt(d)
                                )
                                )),
                        (g[p++] =
                            "maintain" === a && h
                            ? n.getCodePointAt(c)
                            : s.getCodePointAt(c)));
                return g.slice(0, p);
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "caseStrategy":
                    this.getSetting("alphabet").setCaseSensitivity(
                        "strict" === t
                    );
                    break;
                    case "alphabet":
                    this.getSetting("shift").setNeedsValueDescriptionUpdate();
                }
                },
            },
            {
                key: "randomizeShiftValue",
                value: function (e, t) {
                var n = this.getSetting("alphabet");
                return n.isValid()
                    ? e.nextInteger(1, n.getValue().getLength() - 1)
                    : null;
                },
            },
            {
                key: "describeShiftValue",
                value: function (e, t) {
                if (!this.getSetting("alphabet").isValid()) return null;
                var n = this.getSettingValues(),
                    r = n.alphabet,
                    i = n.shift,
                    a = r.getCharAt(0),
                    o = $u.mod(
                    i,
                    "bigint" != typeof i ? r.getLength() : BigInt(r.getLength())
                    ),
                    s = r.getCharAt(o);
                return "".concat(a, "→").concat(s);
                },
            },
            ]),
            n
        );
        })(qu),
        gd = {
        name: "case-transform",
        title: "Case transform",
        category: "Transform",
        type: "encoder",
        },
        pd = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSetting({
                name: "case",
                type: "enum",
                value: "lower",
                elements: [
                "lower",
                "upper",
                "capitalize",
                "alternating",
                "inverse",
                ],
                labels: [
                "Lower case",
                "Upper case",
                "Capitalize",
                "Alternating case",
                "Inverse case",
                ],
                randomizable: !1,
                style: "radio",
            }),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return gd;
                },
            },
            ]),
            bt(n, [
            {
                key: "performEncode",
                value: function (e) {
                switch (this.getSettingValue("case")) {
                    case "lower":
                    return e.toLowerCase();
                    case "upper":
                    return e.toUpperCase();
                    case "capitalize":
                    return ql.wrap(
                        e
                        .getString()
                        .replace(
                            /[0-9A-Z_a-z](?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*/g,
                            function (e) {
                            return (
                                e.charAt(0).toUpperCase() +
                                e.substr(1).toLowerCase()
                            );
                            }
                        )
                    );
                    case "alternating":
                    return ql.wrap(
                        e
                        .getChars()
                        .map(function (e, t) {
                            return t % 2 == 0 ? e.toLowerCase() : e.toUpperCase();
                        })
                        .join("")
                    );
                    case "inverse":
                    return this._inverseCase(e);
                    default:
                    return e;
                }
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                switch (this.getSettingValue("case")) {
                    case "inverse":
                    return this._inverseCase(e);
                    default:
                    return e;
                }
                },
            },
            {
                key: "_inverseCase",
                value: function (e) {
                return ql.wrap(
                    e
                    .getChars()
                    .map(function (e) {
                        var t = e.toLowerCase();
                        return e !== t ? t : e.toUpperCase();
                    })
                    .join("")
                );
                },
            },
            ]),
            n
        );
        })(qu),
        vd = hs.left,
        yd = Ye("reduce"),
        md = tt("reduce", { 1: 0 });
    Oe(
        { target: "Array", proto: !0, forced: !yd || !md },
        {
        reduce: function (e) {
            return vd(
            this,
            e,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0
            );
        },
        }
    );
    var bd = vu.trim;
    Oe(
        {
        target: "String",
        proto: !0,
        forced: (function (e) {
            return l(function () {
            return !!hu[e]() || "​᠎" != "​᠎"[e]() || hu[e].name !== e;
            });
        })("trim"),
        },
        {
        trim: function () {
            return bd(this);
        },
        }
    );
    var kd = {
        name: "enigma",
        title: "Enigma machine",
        category: "Ciphers",
        type: "encoder",
        },
        wd = "abcdefghijklmnopqrstuvwxyz",
        _d = [
        {
            name: "I",
            label: "Enigma I",
            description: "German Army & Air Force",
            characterGroupSize: 5,
            plugboard: !0,
            entryRotor: "ETW-ABCDEF",
            reflectorRotors: ["UKW-A", "UKW-B", "UKW-C"],
            reflectorThumbwheel: !1,
            slots: [
            { rotors: ["I", "II", "III", "IV", "V"] },
            { rotors: ["I", "II", "III", "IV", "V"] },
            { rotors: ["I", "II", "III", "IV", "V"] },
            ],
        },
        {
            name: "N",
            label: 'Enigma I "Norenigma"',
            description: "Norwegian Police Security Service",
            characterGroupSize: 5,
            plugboard: !0,
            entryRotor: "ETW-ABCDEF",
            reflectorRotors: ["UKW-N"],
            reflectorThumbwheel: !1,
            slots: [
            { rotors: ["I-N", "II-N", "III-N", "IV-N", "V-N"] },
            { rotors: ["I-N", "II-N", "III-N", "IV-N", "V-N"] },
            { rotors: ["I-N", "II-N", "III-N", "IV-N", "V-N"] },
            ],
        },
        {
            name: "S",
            label: 'Enigma I "Sondermaschine"',
            description: "German Intelligence",
            characterGroupSize: 5,
            plugboard: !0,
            entryRotor: "ETW-ABCDEF",
            reflectorRotors: ["UKW-S"],
            reflectorThumbwheel: !1,
            slots: [
            { rotors: ["I-S", "II-S", "III-S"] },
            { rotors: ["I-S", "II-S", "III-S"] },
            { rotors: ["I-S", "II-S", "III-S"] },
            ],
        },
        {
            name: "M3",
            label: "Enigma M3",
            description: "German Army & Navy",
            characterGroupSize: 5,
            plugboard: !0,
            entryRotor: "ETW-ABCDEF",
            reflectorRotors: ["UKW-B", "UKW-C"],
            reflectorThumbwheel: !1,
            slots: [
            { rotors: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] },
            { rotors: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] },
            { rotors: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] },
            ],
        },
        {
            name: "M4",
            label: 'Enigma M4 "Shark"',
            description: "German Submarines",
            characterGroupSize: 4,
            plugboard: !0,
            entryRotor: "ETW-ABCDEF",
            reflectorRotors: ["UKW-B-thin", "UKW-C-thin"],
            reflectorThumbwheel: !1,
            slots: [
            { rotors: ["beta", "gamma"], rotating: !1 },
            { rotors: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] },
            { rotors: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] },
            { rotors: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"] },
            ],
        },
        {
            name: "D",
            label: "Enigma D / K",
            description: "Commercial Enigma",
            characterGroupSize: 5,
            plugboard: !1,
            entryRotor: "ETW-QWERTZ",
            reflectorRotors: ["UKW-COM"],
            reflectorThumbwheel: !0,
            slots: [
            { rotors: ["I-D", "II-D", "III-D"] },
            { rotors: ["I-D", "II-D", "III-D"] },
            { rotors: ["I-D", "II-D", "III-D"] },
            ],
        },
        {
            name: "T",
            label: 'Enigma T "Tirpitz"',
            description: "Japanese Army",
            characterGroupSize: 5,
            plugboard: !1,
            entryRotor: "ETW-T",
            reflectorRotors: ["UKW-T"],
            reflectorThumbwheel: !0,
            slots: [
            {
                rotors: [
                "I-T",
                "II-T",
                "III-T",
                "IV-T",
                "V-T",
                "VI-T",
                "VII-T",
                "VIII-T",
                ],
            },
            {
                rotors: [
                "I-T",
                "II-T",
                "III-T",
                "IV-T",
                "V-T",
                "VI-T",
                "VII-T",
                "VIII-T",
                ],
            },
            {
                rotors: [
                "I-T",
                "II-T",
                "III-T",
                "IV-T",
                "V-T",
                "VI-T",
                "VII-T",
                "VIII-T",
                ],
            },
            ],
        },
        {
            name: "KS",
            label: "Swiss-K",
            description: "Swiss Army & Air Force",
            characterGroupSize: 5,
            plugboard: !1,
            entryRotor: "ETW-QWERTZ",
            reflectorRotors: ["UKW-COM"],
            reflectorThumbwheel: !0,
            slots: [
            { rotors: ["I-KS", "II-KS", "III-KS"] },
            { rotors: ["I-KS", "II-KS", "III-KS"] },
            { rotors: ["I-KS", "II-KS", "III-KS"] },
            ],
        },
        {
            name: "KR",
            label: 'Railway Enigma "Rocket I"',
            description: "German Railway",
            characterGroupSize: 5,
            plugboard: !1,
            entryRotor: "ETW-QWERTZ",
            reflectorRotors: ["UKW-KR"],
            reflectorThumbwheel: !0,
            slots: [
            { rotors: ["I-KR", "II-KR", "III-KR"] },
            { rotors: ["I-KR", "II-KR", "III-KR"] },
            { rotors: ["I-KR", "II-KR", "III-KR"] },
            ],
        },
        {
            name: "Z",
            label: "Zählwerk Enigma A-865",
            description: null,
            characterGroupSize: 5,
            plugboard: !1,
            entryRotor: "ETW-QWERTZ",
            reflectorRotors: ["UKW-COM"],
            reflectorThumbwheel: !0,
            reflectorRotating: !0,
            turnoverMechanism: "cog",
            slots: [
            { rotors: ["I-Z", "II-Z", "III-Z"] },
            { rotors: ["I-Z", "II-Z", "III-Z"] },
            { rotors: ["I-Z", "II-Z", "III-Z"] },
            ],
        },
        {
            name: "G111",
            label: "Abwehr Enigma G-111",
            description: null,
            characterGroupSize: 5,
            plugboard: !1,
            entryRotor: "ETW-QWERTZ",
            reflectorRotors: ["UKW-COM"],
            reflectorThumbwheel: !0,
            reflectorRotating: !0,
            turnoverMechanism: "cog",
            slots: [
            { rotors: ["I-G111", "II-G111", "V-G111"] },
            { rotors: ["I-G111", "II-G111", "V-G111"] },
            { rotors: ["I-G111", "II-G111", "V-G111"] },
            ],
        },
        {
            name: "G312",
            label: "Abwehr Enigma G-312",
            description: "German Seret Service",
            characterGroupSize: 5,
            plugboard: !1,
            entryRotor: "ETW-QWERTZ",
            reflectorRotors: ["UKW-G312"],
            reflectorThumbwheel: !0,
            reflectorRotating: !0,
            turnoverMechanism: "cog",
            slots: [
            { rotors: ["I-G312", "II-G312", "III-G312"] },
            { rotors: ["I-G312", "II-G312", "III-G312"] },
            { rotors: ["I-G312", "II-G312", "III-G312"] },
            ],
        },
        {
            name: "G260",
            label: "Abwehr Enigma G-260",
            description: "German Seret Service in Argentina",
            characterGroupSize: 5,
            plugboard: !1,
            entryRotor: "ETW-QWERTZ",
            reflectorRotors: ["UKW-COM"],
            reflectorThumbwheel: !0,
            reflectorRotating: !0,
            turnoverMechanism: "cog",
            slots: [
            { rotors: ["I-G260", "II-G260", "III-G260"] },
            { rotors: ["I-G260", "II-G260", "III-G260"] },
            { rotors: ["I-G260", "II-G260", "III-G260"] },
            ],
        },
        ],
        Sd = ["name", "label", "wiring", "turnovers"],
        xd = [
        "ETW-ABCDEF",
        "Alphabet",
        "abcdefghijklmnopqrstuvwxyz",
        "",
        "ETW-QWERTZ",
        "Keyboard",
        "jwulcmnohpqzyxiradkegvbtsf",
        "",
        "I",
        "I",
        "ekmflgdqvzntowyhxuspaibrcj",
        "q",
        "II",
        "II",
        "ajdksiruxblhwtmcqgznpyfvoe",
        "e",
        "III",
        "III",
        "bdfhjlcprtxvznyeiwgakmusqo",
        "v",
        "IV",
        "IV",
        "esovpzjayquirhxlnftgkdcmwb",
        "j",
        "V",
        "V",
        "vzbrgityupsdnhlxawmjqofeck",
        "z",
        "VI",
        "VI",
        "jpgvoumfyqbenhzrdkasxlictw",
        "zm",
        "VII",
        "VII",
        "nzjhgrcxmyswboufaivlpekqdt",
        "zm",
        "VIII",
        "VIII",
        "fkqhtlxocbjspdzramewniuygv",
        "zm",
        "beta",
        "Beta",
        "leyjvcnixwpbqmdrtakzgfuhos",
        "",
        "gamma",
        "Gamma",
        "fsokanuerhmbtiycwlqpzxvgjd",
        "",
        "UKW-A",
        "UKW A",
        "ejmzalyxvbwfcrquontspikhgd",
        "",
        "UKW-B",
        "UKW B",
        "yruhqsldpxngokmiebfzcwvjat",
        "",
        "UKW-C",
        "UKW C",
        "fvpjiaoyedrzxwgctkuqsbnmhl",
        "",
        "UKW-B-thin",
        "UKW B thin",
        "enkqauywjicopblmdxzvfthrgs",
        "",
        "UKW-C-thin",
        "UKW C thin",
        "rdobjntkvehmlfcwzaxgyipsuq",
        "",
        "I-N",
        "I",
        "wtokasuyvrbxjhqcpzefmdinlg",
        "q",
        "II-N",
        "II",
        "gjlpubswemctqvhxaofzdrkyni",
        "e",
        "III-N",
        "III",
        "jwfmhnbpusdytixvzgrqlaoekc",
        "v",
        "IV-N",
        "IV",
        "esovpzjayquirhxlnftgkdcmwb",
        "j",
        "V-N",
        "V",
        "hejxqotzbvfdascilwpgynmurk",
        "z",
        "UKW-N",
        "UKW",
        "mowjypuxndsraibfvlkzgqchet",
        "",
        "I-S",
        "I",
        "veosirzujdqckgwypnxaflthmb",
        "q",
        "II-S",
        "II",
        "uemoatqlshpkcyfwjzbgvxindr",
        "e",
        "III-S",
        "III",
        "tzhxmbsipnurjfdkeqvcwglaoy",
        "v",
        "UKW-S",
        "UKW",
        "ciagsndrbytpzfulvhekoqxwjm",
        "",
        "I-D",
        "I",
        "lpgszmhaeoqkvxrfybutnicjdw",
        "y",
        "II-D",
        "II",
        "slvgbtfxjqohewirzyamkpcndu",
        "e",
        "III-D",
        "III",
        "cjgdpshkturawzxfmynqobvlie",
        "n",
        "UKW-COM",
        "UKW",
        "imetcgfraysqbzxwlhkdvupojn",
        "",
        "ETW-T",
        "ETW",
        "ilxrztkgjyamwvdufcpqeonshb",
        "",
        "I-T",
        "I",
        "kptyuelocvgrfqdanjmbswhzxi",
        "wzekq",
        "II-T",
        "II",
        "uphzlweqmtdjxcaksoigvbyfnr",
        "wzflr",
        "III-T",
        "III",
        "qudlyrfekonvzaxwhmgpjbsict",
        "wzekq",
        "IV-T",
        "IV",
        "ciwtbkxnrespflydagvhquojzm",
        "wzflr",
        "V-T",
        "V",
        "uaxgisnjbverdylfzwtpckohmq",
        "ycfkr",
        "VI-T",
        "VI",
        "xfuzgalvhcnysewqtdmrbkpioj",
        "xeimq",
        "VII-T",
        "VII",
        "bjvftxplnayozikwgdqeruchsm",
        "ycfkr",
        "VIII-T",
        "VIII",
        "ymtpnzhwkodajxeluqvgcbisfr",
        "xeimq",
        "UKW-T",
        "UKW",
        "gekpbtaumocniljdxzyfhwvqsr",
        "",
        "I-KS",
        "I",
        "pezuohxscvfmtbglrinqjwaydk",
        "y",
        "II-KS",
        "II",
        "zouesydkfwpciqxhmvblgnjrat",
        "e",
        "III-KS",
        "III",
        "ehrvxgaobqusimzflynwktpdjc",
        "n",
        "I-KR",
        "I",
        "jgdqoxuscamifrvtpnewkblzyh",
        "n",
        "II-KR",
        "II",
        "ntzpsfbokmwrcjdivlaeyuxhgq",
        "e",
        "III-KR",
        "III",
        "jviubhtcdyakeqzposgxnrmwfl",
        "y",
        "UKW-KR",
        "UKW",
        "qyhognecvpuztfdjaxwmkisrbl",
        "",
        "I-Z",
        "I",
        "lpgszmhaeoqkvxrfybutnicjdw",
        "suvwzabcefgiklopq",
        "II-Z",
        "II",
        "slvgbtfxjqohewirzyamkpcndu",
        "stvyzacdfghkmnq",
        "III-Z",
        "III",
        "cjgdpshkturawzxfmynqobvlie",
        "uwxaefhkmnr",
        "I-G111",
        "I",
        "wlrhbqundkjczsexotmagyfpvi",
        "suvwzabcefgiklopq",
        "II-G111",
        "II",
        "tfjqazwmhlcuixrdygoevbnskp",
        "stvyzacdfghkmnq",
        "V-G111",
        "V",
        "qtpixwvdfrmusljohcanezkybg",
        "swzfhmq",
        "I-G312",
        "I",
        "dmtwsilruyqnkfejcazbpgxohv",
        "suvwzabcefgiklopq",
        "II-G312",
        "II",
        "hqzgpjtmoblncifdyawveusrkx",
        "stvyzacdfghkmnq",
        "III-G312",
        "III",
        "uqntlszfmrehdpxkibvygjcwoa",
        "uwxaefhkmnr",
        "UKW-G312",
        "UKW",
        "rulqmzjsygocetkwdahnbxpvif",
        "",
        "I-G260",
        "I",
        "rcspblkqaumhwytifzvgojnexd",
        "suvwzabcefgiklopq",
        "II-G260",
        "II",
        "wcmibvpjxarosgndlzkeyhufqt",
        "stvyzacdfghkmnq",
        "III-G260",
        "III",
        "fvdhzelsqmaxokyiwpgcbujtnr",
        "uwxaefhkmnr",
        ],
        Id = null,
        Cd = null,
        Vd = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            yt(this, n), (e = t.call(this));
            var r = n.getModel("M3"),
            i = n.getRotors(r.slots[0].rotors),
            a = i.map(function (e) {
                return e.name;
            }),
            o = i.map(function (e) {
                return e.label;
            }),
            s = n.getRotors(r.reflectorRotors);
            e.addSetting({
            name: "model",
            type: "enum",
            value: r.name,
            elements: _d.map(function (e) {
                return e.name;
            }),
            labels: _d.map(function (e) {
                return e.label;
            }),
            descriptions: _d.map(function (e) {
                return e.description;
            }),
            randomizable: !1,
            }),
            e.addSetting({
                name: "reflector",
                type: "enum",
                value: s[0].name,
                elements: s.map(function (e) {
                return e.name;
                }),
                labels: s.map(function (e) {
                return e.label;
                }),
                width: 4,
            }),
            e.addSetting({
                name: "positionReflector",
                label: "Position",
                type: "number",
                value: 1,
                integer: !0,
                min: 1,
                max: 27,
                describeValue: e.describePositionValue.bind(Ct(e)),
                width: 4,
            }),
            e.addSetting({
                name: "ringReflector",
                label: "Ring",
                type: "number",
                value: 1,
                integer: !0,
                min: 1,
                max: 27,
                describeValue: e.describePositionValue.bind(Ct(e)),
                width: 4,
            });
            for (var l = 0; l < n.getMaxSlotCount(); l++)
            e.addSetting({
                name: "rotor".concat(l + 1),
                label: "Rotor ".concat(l + 1),
                type: "enum",
                value: a[0],
                elements: a,
                labels: o,
                randomizable: !1,
                width: 4,
            }),
                e.addSetting({
                name: "position".concat(l + 1),
                label: "Position",
                type: "number",
                value: 1,
                integer: !0,
                min: 1,
                max: 27,
                describeValue: e.describePositionValue.bind(Ct(e)),
                width: 4,
                }),
                e.addSetting({
                name: "ring".concat(l + 1),
                label: "Ring",
                type: "number",
                value: 1,
                integer: !0,
                min: 1,
                max: 27,
                describeValue: e.describePositionValue.bind(Ct(e)),
                width: 4,
                });
            return (
            e.addSetting({
                name: "plugboard",
                type: "text",
                value: "",
                caseSensitivity: !1,
                validateValue: e.validatePlugboardValue.bind(Ct(e)),
                filterValue: function (e) {
                return e.getString().trim().toLowerCase();
                },
                randomizeValue: e.randomizePlugboardValue.bind(Ct(e)),
            }),
            e.addSetting({
                name: "includeForeignChars",
                type: "boolean",
                label: "Foreign Chars",
                value: !1,
                trueLabel: "Include",
                falseLabel: "Ignore",
                randomizable: !1,
            }),
            e.applyModel(r.name),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return kd;
                },
            },
            ]),
            bt(
            n,
            [
                {
                key: "settingValueDidChange",
                value: function (e, t) {
                    At(wt(n.prototype), "settingValueDidChange", this).call(
                    this,
                    e,
                    t
                    ),
                    "model" === e.getName() && this.applyModel(t);
                },
                },
                {
                key: "applyModel",
                value: function (e) {
                    for (
                    var t = n.getModel(e), r = n.getMaxSlotCount(), i = 0;
                    i < r;
                    i++
                    ) {
                    var a = i < t.slots.length ? t.slots[i] : null,
                        o = null !== a,
                        s = this.getSetting("rotor".concat(i + 1)),
                        l = this.getSetting("ring".concat(i + 1)),
                        u = this.getSetting("position".concat(i + 1));
                    if ((s.setVisible(o), l.setVisible(o), u.setVisible(o), o)) {
                        var c = n.getRotors(a.rotors);
                        s.setElements(
                        c.map(function (e) {
                            return e.name;
                        }),
                        c.map(function (e) {
                            return e.label;
                        }),
                        null,
                        !1
                        ),
                        !0 !== s.validateValue(s.getValue()) &&
                            s.setValue(c[0].name);
                    }
                    }
                    var h = n.getRotors(t.reflectorRotors),
                    d = this.getSetting("reflector");
                    d.setElements(
                    h.map(function (e) {
                        return e.name;
                    }),
                    h.map(function (e) {
                        return e.label;
                    }),
                    null,
                    !1
                    ),
                    !0 !== d.validateValue(d.getValue()) && d.setValue(h[0].name),
                    d.setWidth(t.reflectorThumbwheel ? 4 : 12),
                    d.setVisible(t.reflectorThumbwheel || h.length > 1),
                    this.getSetting("positionReflector").setVisible(
                        t.reflectorThumbwheel
                    ),
                    this.getSetting("ringReflector").setVisible(
                        t.reflectorThumbwheel
                    ),
                    this.getSetting("plugboard").setVisible(t.plugboard);
                },
                },
                {
                key: "performTranslate",
                value: function (e, t) {
                    var r = this.getSettingValue("includeForeignChars"),
                    i = n.getModel(this.getSettingValue("model")),
                    a = 0,
                    o = i.slots,
                    s = o.length,
                    l = o.map(function (e) {
                        return !1 !== e.rotating;
                    }),
                    u = [],
                    c = [],
                    h = [],
                    d = new Array(s);
                    for (a = 0; a < s; a++) {
                    var f = this.getSettingValue("rotor".concat(a + 1));
                    u.push(n.getRotor(f)),
                        c.push(this.getSettingValue("position".concat(a + 1)) - 1),
                        h.push(this.getSettingValue("ring".concat(a + 1)) - 1);
                    }
                    var g,
                    p = n.getRotor(i.entryRotor),
                    v = !0 === i.reflectorRotating,
                    y = n.getRotor(this.getSettingValue("reflector")),
                    m = i.reflectorThumbwheel
                        ? this.getSettingValue("positionReflector")
                        : 0,
                    b = i.reflectorThumbwheel
                        ? this.getSettingValue("ringReflector")
                        : 0,
                    k = null;
                    if (i.plugboard) {
                    var w = this.getSettingValue("plugboard");
                    k = this.wiringFromPlugboardValue(w.toString());
                    }
                    var _ = n.rotorMapChar,
                    S = e.getCodePoints().map(function (e, t) {
                        var o = null;
                        if (e >= 65 && e <= 90) o = e - 65;
                        else {
                        if (!(e >= 97 && e <= 122)) return !!r && e;
                        o = e - 97;
                        }
                        if ((d.fill(!1), (g = !1), "cog" === i.turnoverMechanism)) {
                        var f = !0;
                        for (a = s; f && --a >= 0; )
                            l[a]
                            ? ((f = n.rotorAtTurnover(u[a], c[a])), (d[a] = !0))
                            : (f = !1);
                        g = v && f;
                        } else {
                        for (a = 0; a < s; a++)
                            l[a] &&
                            ((v && 0 === a) || l[a - 1]) &&
                            n.rotorAtTurnover(u[a], c[a]) &&
                            ((d[a] = !0), a > 0 ? (d[a - 1] = !0) : (g = !0));
                        d[s - 1] = l[s - 1];
                        }
                        for (a = 0; a < s; a++) d[a] && c[a]++;
                        for (
                        g && m++,
                            null !== k && (o = _(o, k, 0, 0, !1)),
                            o = _(o, p, 0, 0, !1),
                            a = u.length - 1;
                        a >= 0;
                        a--
                        )
                        o = _(o, u[a], c[a], h[a], !1);
                        for (o = _(o, y, m, b, !1), a = 0; a < u.length; a++)
                        o = _(o, u[a], c[a], h[a], !0);
                        return (
                        (o = _(o, p, 0, 0, !0)),
                        null !== k && (o = _(o, k, 0, 0, !0)),
                        o + 97
                        );
                    });
                    if (!r) {
                    var x = [];
                    S.forEach(function (e) {
                        !1 !== e &&
                        ((x.length + 1) % (i.characterGroupSize + 1) == 0 &&
                            x.push(32),
                        x.push(e));
                    }),
                        (S = x);
                    }
                    return S;
                },
                },
                {
                key: "describePositionValue",
                value: function (e, t) {
                    return wd[e - 1].toUpperCase();
                },
                },
                {
                key: "validatePlugboardValue",
                value: function (e, t) {
                    var n = e.getString();
                    return (
                    "" === n ||
                    (null === n.match(/^([a-z]{2}\s)*([a-z]{2})$/)
                        ? {
                            key: "enigmaPlugboardInvalidFormat",
                            message:
                            "Invalid plugboard format: pairs of letters to be swapped expected (e.g. 'ab cd ef')",
                        }
                        : !!al.isUnique(n.replace(/\s/g, "").split("")) || {
                            key: "enigmaPlugboardPairsNotUnique",
                            message:
                            "Pairs of letters to be swapped need to be unique",
                        })
                    );
                },
                },
                {
                key: "wiringFromPlugboardValue",
                value: function (e) {
                    var t = wd.split("");
                    return (
                    e.split(" ").forEach(function (e) {
                        (t[e.charCodeAt(0) - 97] = e[1]),
                        (t[e.charCodeAt(1) - 97] = e[0]);
                    }),
                    t.join("")
                    );
                },
                },
                {
                key: "isRandomizable",
                value: function () {
                    return !0;
                },
                },
                {
                key: "randomize",
                value: function () {
                    var e,
                    t,
                    r,
                    i = n.getModel(this.getSettingValue("model")),
                    a = i.reflectorRotors;
                    for (e = 0; e < i.slots.length; e++)
                    a = a.concat(i.slots[e].rotors);
                    for (
                    a = al.unique(a),
                        -1 !==
                        (t = (a = al.shuffle(a)).findIndex(function (e) {
                            return -1 !== i.reflectorRotors.indexOf(e);
                        })) &&
                        ((r = a.splice(t, 1)[0]),
                        this.setSettingValue("reflector", r)),
                        e = 0;
                    e < i.slots.length;
                    e++
                    )
                    -1 !==
                        (t = a.findIndex(function (t) {
                        return -1 !== i.slots[e].rotors.indexOf(t);
                        })) &&
                        ((r = a.splice(t, 1)[0]),
                        this.setSettingValue("rotor".concat(e + 1), r));
                    return At(wt(n.prototype), "randomize", this).call(this), this;
                },
                },
                {
                key: "randomizePlugboardValue",
                value: function (e, t) {
                    var n = al.shuffle(wd.split(""), e).join("").substr(0, 20);
                    return Bl.chunk(n, 2).join(" ");
                },
                },
            ],
            [
                {
                key: "rotorAtTurnover",
                value: function (e, t) {
                    if (void 0 === e.turnovers) return !1;
                    var n = String.fromCharCode(97 + $u.mod(t, 26));
                    return -1 !== e.turnovers.indexOf(n);
                },
                },
                {
                key: "rotorMapChar",
                value: function (e, t, n, r, i) {
                    var a = "string" == typeof t ? t : t.wiring;
                    return (
                    (n = $u.mod(n - r, 26)),
                    (e = $u.mod(e + n, 26)),
                    (e = i
                        ? a.indexOf(String.fromCharCode(97 + e))
                        : a.charCodeAt(e) - 97),
                    (e = $u.mod(e - n, 26))
                    );
                },
                },
                {
                key: "getModel",
                value: function (e) {
                    return (
                    null === Id &&
                        ((Id = {}),
                        _d.forEach(function (e) {
                        Id[e.name] = e;
                        })),
                    Id[e] || null
                    );
                },
                },
                {
                key: "getMaxSlotCount",
                value: function () {
                    return _d.reduce(function (e, t) {
                    return Math.max(e, t.slots.length);
                    }, 0);
                },
                },
                {
                key: "getRotor",
                value: function (e) {
                    var t, n, r;
                    if (null === Cd)
                    for (Cd = {}, t = 0; t < xd.length; t += Sd.length) {
                        for (r = {}, n = 0; n < Sd.length; n++)
                        r[Sd[n]] = xd[t + n];
                        Cd[r.name] = r;
                    }
                    return Cd[e] || null;
                },
                },
                {
                key: "getRotors",
                value: function (e) {
                    return e.map(function (e) {
                    return n.getRotor(e);
                    });
                },
                },
            ]
            ),
            n
        );
        })(qu);
    function Ed(e, t) {
        var n = Mt(e, 4),
        r = n[0],
        i = n[1],
        a = n[2],
        o = n[3];
        (r = Td(r, i, a, o, t[0], 7, 3614090360)),
        (o = Td(o, r, i, a, t[1], 12, 3905402710)),
        (a = Td(a, o, r, i, t[2], 17, 606105819)),
        (i = Td(i, a, o, r, t[3], 22, 3250441966)),
        (r = Td(r, i, a, o, t[4], 7, 4118548399)),
        (o = Td(o, r, i, a, t[5], 12, 1200080426)),
        (a = Td(a, o, r, i, t[6], 17, 2821735955)),
        (i = Td(i, a, o, r, t[7], 22, 4249261313)),
        (r = Td(r, i, a, o, t[8], 7, 1770035416)),
        (o = Td(o, r, i, a, t[9], 12, 2336552879)),
        (a = Td(a, o, r, i, t[10], 17, 4294925233)),
        (i = Td(i, a, o, r, t[11], 22, 2304563134)),
        (r = Td(r, i, a, o, t[12], 7, 1804603682)),
        (o = Td(o, r, i, a, t[13], 12, 4254626195)),
        (a = Td(a, o, r, i, t[14], 17, 2792965006)),
        (r = Ld(
            r,
            (i = Td(i, a, o, r, t[15], 22, 1236535329)),
            a,
            o,
            t[1],
            5,
            4129170786
        )),
        (o = Ld(o, r, i, a, t[6], 9, 3225465664)),
        (a = Ld(a, o, r, i, t[11], 14, 643717713)),
        (i = Ld(i, a, o, r, t[0], 20, 3921069994)),
        (r = Ld(r, i, a, o, t[5], 5, 3593408605)),
        (o = Ld(o, r, i, a, t[10], 9, 38016083)),
        (a = Ld(a, o, r, i, t[15], 14, 3634488961)),
        (i = Ld(i, a, o, r, t[4], 20, 3889429448)),
        (r = Ld(r, i, a, o, t[9], 5, 568446438)),
        (o = Ld(o, r, i, a, t[14], 9, 3275163606)),
        (a = Ld(a, o, r, i, t[3], 14, 4107603335)),
        (i = Ld(i, a, o, r, t[8], 20, 1163531501)),
        (r = Ld(r, i, a, o, t[13], 5, 2850285829)),
        (o = Ld(o, r, i, a, t[2], 9, 4243563512)),
        (a = Ld(a, o, r, i, t[7], 14, 1735328473)),
        (r = Pd(
            r,
            (i = Ld(i, a, o, r, t[12], 20, 2368359562)),
            a,
            o,
            t[5],
            4,
            4294588738
        )),
        (o = Pd(o, r, i, a, t[8], 11, 2272392833)),
        (a = Pd(a, o, r, i, t[11], 16, 1839030562)),
        (i = Pd(i, a, o, r, t[14], 23, 4259657740)),
        (r = Pd(r, i, a, o, t[1], 4, 2763975236)),
        (o = Pd(o, r, i, a, t[4], 11, 1272893353)),
        (a = Pd(a, o, r, i, t[7], 16, 4139469664)),
        (i = Pd(i, a, o, r, t[10], 23, 3200236656)),
        (r = Pd(r, i, a, o, t[13], 4, 681279174)),
        (o = Pd(o, r, i, a, t[0], 11, 3936430074)),
        (a = Pd(a, o, r, i, t[3], 16, 3572445317)),
        (i = Pd(i, a, o, r, t[6], 23, 76029189)),
        (r = Pd(r, i, a, o, t[9], 4, 3654602809)),
        (o = Pd(o, r, i, a, t[12], 11, 3873151461)),
        (a = Pd(a, o, r, i, t[15], 16, 530742520)),
        (r = Bd(
            r,
            (i = Pd(i, a, o, r, t[2], 23, 3299628645)),
            a,
            o,
            t[0],
            6,
            4096336452
        )),
        (o = Bd(o, r, i, a, t[7], 10, 1126891415)),
        (a = Bd(a, o, r, i, t[14], 15, 2878612391)),
        (i = Bd(i, a, o, r, t[5], 21, 4237533241)),
        (r = Bd(r, i, a, o, t[12], 6, 1700485571)),
        (o = Bd(o, r, i, a, t[3], 10, 2399980690)),
        (a = Bd(a, o, r, i, t[10], 15, 4293915773)),
        (i = Bd(i, a, o, r, t[1], 21, 2240044497)),
        (r = Bd(r, i, a, o, t[8], 6, 1873313359)),
        (o = Bd(o, r, i, a, t[15], 10, 4264355552)),
        (a = Bd(a, o, r, i, t[6], 15, 2734768916)),
        (i = Bd(i, a, o, r, t[13], 21, 1309151649)),
        (r = Bd(r, i, a, o, t[4], 6, 4149444226)),
        (o = Bd(o, r, i, a, t[11], 10, 3174756917)),
        (a = Bd(a, o, r, i, t[2], 15, 718787259)),
        (i = Bd(i, a, o, r, t[9], 21, 3951481745)),
        (e[0] = Ad(r, e[0])),
        (e[1] = Ad(i, e[1])),
        (e[2] = Ad(a, e[2])),
        (e[3] = Ad(o, e[3]));
    }
    function Ad(e, t) {
        return (e + t) & 4294967295;
    }
    function Md(e, t, n, r, i, a) {
        return (t = Ad(Ad(t, e), Ad(r, a))), Ad((t << i) | (t >>> (32 - i)), n);
    }
    function Td(e, t, n, r, i, a, o) {
        return Md((t & n) | (~t & r), e, t, i, a, o);
    }
    function Ld(e, t, n, r, i, a, o) {
        return Md((t & r) | (n & ~r), e, t, i, a, o);
    }
    function Pd(e, t, n, r, i, a, o) {
        return Md(t ^ n ^ r, e, t, i, a, o);
    }
    function Bd(e, t, n, r, i, a, o) {
        return Md(n ^ (t | ~r), e, t, i, a, o);
    }
    var Od = {
        name: "hash",
        title: "Hash function",
        category: "Modern cryptography",
        type: "encoder",
        },
        Rd = [
        { name: "md5", label: "MD5", blockSize: 64, available: !0 },
        {
            name: "sha1",
            label: "SHA-1",
            blockSize: 64,
            browserAlgorithm: "SHA-1",
            browserExceptions: ["ie=11", "edge"],
            nodeAlgorithm: "sha1",
        },
        {
            name: "sha256",
            label: "SHA-256",
            blockSize: 64,
            browserAlgorithm: "SHA-256",
            nodeAlgorithm: "sha256",
        },
        {
            name: "sha384",
            label: "SHA-384",
            blockSize: 128,
            browserAlgorithm: "SHA-384",
            nodeAlgorithm: "sha384",
        },
        {
            name: "sha512",
            label: "SHA-512",
            blockSize: 128,
            browserAlgorithm: "SHA-512",
            browserExceptions: ["ie=11"],
            nodeAlgorithm: "sha512",
        },
        ],
        zd = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            yt(this, n), (e = t.call(this)).setEncodeOnly(!0);
            var r = n.filterAvailableAlgorithms();
            return (
            e.addSetting({
                name: "algorithm",
                type: "enum",
                value: "sha256",
                elements: r.map(function (e) {
                return e.name;
                }),
                labels: r.map(function (e) {
                return e.label;
                }),
                randomizable: !1,
                style: "radio",
            }),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Od;
                },
            },
            ]),
            bt(
            n,
            [
                {
                key: "performEncode",
                value: function (e) {
                    var t = this.getSettingValue("algorithm");
                    return this.createDigest(t, e.getBytes());
                },
                },
                {
                key: "createDigest",
                value: function (e, t) {
                    var n = this,
                    i = Rd.find(function (t) {
                        return t.name === e;
                    });
                    switch (e) {
                    case "md5":
                        return new Promise(function (e) {
                        return e(
                            (function (e) {
                            var t,
                                n = (e = Array.from(e)).length;
                            for (e.push(128); e.length % 64 != 56; ) e.push(0);
                            for (var r = 0; r < 8; r++)
                                0 === r
                                ? e.push((31 & n) << 3)
                                : ((t = 8 * r - 3),
                                    e.push(t < 32 ? (n >> t) & 255 : 0));
                            for (
                                var i = e.length / 4, a = new Array(i), o = 0;
                                o < i;
                                o++
                            )
                                a[o] =
                                (e[4 * o + 3] << 24) +
                                (e[4 * o + 2] << 16) +
                                (e[4 * o + 1] << 8) +
                                e[4 * o];
                            for (
                                var s = [
                                    1732584193, 4023233417, 2562383102, 271733878,
                                ],
                                l = 0;
                                l < i;
                                l += 16
                            )
                                Ed(s, a.slice(l, l + 16));
                            for (
                                var u = new Array(16), c = 0, h = 0;
                                h < 16;
                                c++, h += 4
                            )
                                (u[h] = 255 & s[c]),
                                (u[h + 1] = (s[c] >> 8) & 255),
                                (u[h + 2] = (s[c] >> 16) & 255),
                                (u[h + 3] = (s[c] >> 24) & 255);
                            return new Uint8Array(u);
                            })(t)
                        );
                        });
                    }
                    if (Qh.isNode())
                    return new Promise(function (e, n) {
                        var a = r.default
                        .createHash(i.nodeAlgorithm)
                        .update(global.Buffer.from(t))
                        .digest();
                        e(new Uint8Array(a));
                    });
                    var a = window.crypto || window.msCrypto,
                    o = (a.subtle || a.webkitSubtle).digest(
                        i.browserAlgorithm,
                        t
                    );
                    return (
                    void 0 !== o.oncomplete &&
                        (o = new Promise(function (e, t) {
                        (o.oncomplete = e.bind(n, o.result)), (o.onerror = t);
                        })),
                    o.then(function (e) {
                        return new Uint8Array(e);
                    })
                    );
                },
                },
            ],
            [
                {
                key: "filterAvailableAlgorithms",
                value: function () {
                    var e = Qh.isNode();
                    return Rd.filter(function (t) {
                    return (
                        !0 === t.available ||
                        (e || void 0 === t.browserAlgorithm
                        ? !(!e || void 0 === t.nodeAlgorithm)
                        : void 0 === t.browserExceptions ||
                            !Qh.match.apply(Qh, t.browserExceptions))
                    );
                    });
                },
                },
                {
                key: "getAlgorithmBlockSize",
                value: function (e) {
                    var t = Rd.find(function (t) {
                    return t.name === e;
                    });
                    return void 0 !== t ? t.blockSize : null;
                },
                },
            ]
            ),
            n
        );
        })(qu),
        Nd = {
        name: "hmac",
        title: "HMAC",
        category: "Modern cryptography",
        type: "encoder",
        },
        Fd = (function (e) {
        kt(i, e);
        var t,
            n,
            r = Et(i);
        function i() {
            var e;
            yt(this, i),
            (e = r.call(this)).setEncodeOnly(!0),
            (e._hashEncoder = new zd());
            var t = e._hashEncoder.getSetting("algorithm");
            return (
            e.addSettings([
                {
                name: "key",
                type: "bytes",
                value: new Uint8Array([99, 114, 121, 112, 116, 105, 105]),
                },
                {
                name: "algorithm",
                type: "enum",
                value: t.getValue(),
                elements: t.getElements(),
                labels: t.getElementLabels(),
                randomizable: !1,
                style: "radio",
                },
            ]),
            e
            );
        }
        return (
            bt(i, null, [
            {
                key: "getMeta",
                value: function () {
                return Nd;
                },
            },
            ]),
            bt(i, [
            {
                key: "performEncode",
                value:
                ((n = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a, o, s, l, u, c;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                ((n = t.getBytes()),
                                (r = this.getSettingValue("algorithm")),
                                (i = zd.getAlgorithmBlockSize(r)),
                                !((a = this.getSettingValue("key")).length > i))
                                ) {
                                e.next = 8;
                                break;
                                }
                                return (e.next = 7), this.createDigest(r, a);
                            case 7:
                                a = e.sent;
                            case 8:
                                for (
                                (o = new Uint8Array(i)).set(a, 0),
                                    (s = new Uint8Array(i + n.length)).set(o, 0),
                                    s.set(n, i),
                                    l = 0;
                                l < i;
                                l++
                                )
                                (s[l] ^= 54), (o[l] ^= 92);
                                return (e.next = 16), this.createDigest(r, s);
                            case 16:
                                return (
                                (u = e.sent),
                                (c = new Uint8Array(i + u.length)).set(o, 0),
                                c.set(u, i),
                                e.abrupt("return", this.createDigest(r, c))
                                );
                            case 21:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return n.apply(this, arguments);
                }),
            },
            {
                key: "createDigest",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t, n) {
                    var r;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                null === this._hashEncoder &&
                                    (this._hashEncoder = new zd()),
                                this._hashEncoder.setSettingValue("algorithm", t),
                                (e.next = 4),
                                this._hashEncoder.encode(n)
                                );
                            case 4:
                                return (
                                (r = e.sent), e.abrupt("return", r.getBytes())
                                );
                            case 6:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e, n) {
                    return t.apply(this, arguments);
                }),
            },
            ]),
            i
        );
        })(qu);
    _o("Int8", function (e) {
        return function (t, n, r) {
        return e(this, t, n, r);
        };
    }),
        _o("Int16", function (e) {
        return function (t, n, r) {
            return e(this, t, n, r);
        };
        }),
        _o("Int32", function (e) {
        return function (t, n, r) {
            return e(this, t, n, r);
        };
        }),
        _o("Uint16", function (e) {
        return function (t, n, r) {
            return e(this, t, n, r);
        };
        });
    var Dd = {
        name: "integer",
        title: "Integer",
        category: "Encoding",
        type: "encoder",
        },
        jd = ["U8", "I8", "U16", "I16", "U32", "I32"],
        $d = [1, 1, 2, 2, 4, 4],
        qd = [
        "8-bit unsigned integer (U8)",
        "8-bit signed integer (I8)",
        "16-bit unsigned integer (U16)",
        "16-bit signed integer (I16)",
        "32-bit unsigned integer (U32)",
        "32-bit signed integer (I32)",
        ],
        Ud = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "format",
                type: "enum",
                value: "decimal",
                elements: ["binary", "octal", "decimal", "hexadecimal"],
                labels: ["Binary", "Octal", "Decimal", "Hexadecimal"],
                randomizable: !1,
                priority: 30,
                },
                {
                name: "type",
                type: "enum",
                value: "U8",
                elements: jd,
                labels: qd,
                randomizable: !1,
                style: "radio",
                priority: 20,
                },
                {
                name: "byteOrder",
                type: "enum",
                value: "big-endian",
                elements: ["little-endian", "big-endian"],
                labels: ["Little-endian", "Big-endian"],
                randomizable: !1,
                visible: !1,
                priority: 10,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Dd;
                },
            },
            ]),
            bt(n, [
            {
                key: "performEncode",
                value: function (e) {
                var t = this.getSettingValue("type"),
                    n = jd.indexOf(t),
                    r = $d[n],
                    i = "big-endian" === this.getSettingValue("byteOrder"),
                    a = e.getSize();
                a % r != 0 && (a += r - (a % r));
                var o = new Uint8Array(a);
                o.set(e.getBytes());
                for (
                    var s = this.createIntegerTypeArray(a / r, t), l = 0, u = 0;
                    u < o.length;

                )
                    i ? (l = (l << 8) | o[u]) : (l |= o[u] << ((u % r) * 8)),
                    ++u % r == 0 && ((s[u / r - 1] = l), (l = 0));
                var c = this.getSettingValue("format"),
                    h = [];
                for (u = 0; u < s.length; u++)
                    switch (c) {
                    case "binary":
                        h.push(s[u].toString(2));
                        break;
                    case "octal":
                        h.push(s[u].toString(8));
                        break;
                    case "decimal":
                        h.push(s[u].toString(10));
                        break;
                    default:
                        h.push(s[u].toString(16));
                    }
                return h.join(" ");
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                var t,
                    n,
                    r,
                    i = this.getSettingValue("type"),
                    a = jd.indexOf(i),
                    o = $d[a],
                    s = "big-endian" === this.getSettingValue("byteOrder"),
                    l = this.getSettingValue("format"),
                    u = e.getString().split(/\s+/),
                    c = this.createIntegerTypeArray(u.length, i);
                for (t = 0; t < u.length; t++) {
                    switch (("" === (r = u[t]) && (r = "0"), l)) {
                    case "binary":
                        n = parseInt(r, 2);
                        break;
                    case "octal":
                        n = parseInt(r, 8);
                        break;
                    case "decimal":
                        n = parseInt(r, 10);
                        break;
                    default:
                        n = parseInt(r, 16);
                    }
                    if (isNaN(n))
                    throw new Rl(
                        "Invalid integer '".concat(r, "' at index ").concat(t)
                    );
                    c[t] = n;
                }
                var h,
                    d = new Uint8Array(c.length * o);
                for (t = 0; t < d.length; t++)
                    (n = c[parseInt(t / o)]),
                    (h = s ? o - (t % o) - 1 : t % o),
                    (d[t] = (n >> (8 * h)) & 255);
                return d;
                },
            },
            {
                key: "createIntegerTypeArray",
                value: function (e, t) {
                switch (t) {
                    case "I8":
                    return new Int8Array(e);
                    case "U8":
                    return new Uint8Array(e);
                    case "I16":
                    return new Int16Array(e);
                    case "U16":
                    return new Uint16Array(e);
                    case "I32":
                    return new Int32Array(e);
                    default:
                    return new Uint32Array(e);
                }
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "type":
                    var n = jd.indexOf(this.getSettingValue("type"));
                    this.getSetting("byteOrder").setVisible($d[n] > 1);
                }
                },
            },
            ]),
            n
        );
        })(qu);
    Oe({ target: "String", proto: !0 }, { repeat: ll });
    var Wd = {
        name: "morse-code",
        title: "Morse code",
        category: "Alphabets",
        type: "encoder",
        },
        Gd = "abcdefghijklmnopqrstuvwxyz0123456789.,?'!/()&:;=+-_\"$@",
        Hd = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--..",
        "-----",
        ".----",
        "..---",
        "...--",
        "....-",
        ".....",
        "-....",
        "--...",
        "---..",
        "----.",
        ".-.-.-",
        "--..--",
        "..--..",
        ".----.",
        "-.-.--",
        "-..-.",
        "-.--.",
        "-.--.-",
        ".-...",
        "---...",
        "-.-.-.",
        "-...-",
        ".-.-.",
        "-....-",
        "..--.-",
        ".-..-.",
        "..._.._",
        ".--.-.",
        ],
        Kd = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "variant",
                type: "enum",
                value: "english",
                elements: ["english"],
                labels: ["English"],
                randomizable: !1,
                },
                {
                name: "representation",
                type: "enum",
                value: "code",
                elements: ["code", "timing"],
                labels: ["Code", "Timing"],
                randomizable: !1,
                },
                {
                name: "shortMark",
                label: "Short",
                type: "text",
                width: 4,
                value: ".",
                minLength: 1,
                randomizable: !1,
                validateValue: e.validateCodeMarkSettingValue.bind(Ct(e)),
                },
                {
                name: "longerMark",
                label: "Long",
                type: "text",
                width: 4,
                value: "-",
                minLength: 1,
                randomizable: !1,
                validateValue: e.validateCodeMarkSettingValue.bind(Ct(e)),
                },
                {
                name: "spaceMark",
                label: "Space",
                type: "text",
                width: 4,
                value: "/",
                minLength: 1,
                randomizable: !1,
                validateValue: e.validateCodeMarkSettingValue.bind(Ct(e)),
                },
                {
                name: "signalOnMark",
                label: "Signal On",
                type: "text",
                width: 6,
                visible: !1,
                value: "=",
                minLength: 1,
                randomizable: !1,
                validateValue: e.validateTimingMarkSettingValue.bind(Ct(e)),
                },
                {
                name: "signalOffMark",
                label: "Signal Off",
                type: "text",
                width: 6,
                visible: !1,
                value: ".",
                minLength: 1,
                randomizable: !1,
                validateValue: e.validateTimingMarkSettingValue.bind(Ct(e)),
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Wd;
                },
            },
            ]),
            bt(
            n,
            [
                {
                key: "performEncode",
                value: function (e) {
                    var t = this.getSettingValue("representation"),
                    r = ".",
                    i = "-",
                    a = "/";
                    "code" === t &&
                    ((r = this.getSettingValue("shortMark").getString()),
                    (i = this.getSettingValue("longerMark").getString()),
                    (a = this.getSettingValue("spaceMark").getString()));
                    var o = e
                    .toLowerCase()
                    .getChars()
                    .map(function (e) {
                        var t = n.encodeCharacter(e, r, i, a);
                        if (null === t)
                        throw new Rl(
                            "Char '".concat(e, "' is not defined in morse code")
                        );
                        return t;
                    })
                    .join(" ");
                    if ("timing" === t) {
                    var s = this.getSettingValue("signalOnMark").getString(),
                        l = this.getSettingValue("signalOffMark").getString();
                    o = o
                        .split("")
                        .map(function (e) {
                        switch (e) {
                            case ".":
                            return s;
                            case "-":
                            return s.repeat(3);
                            default:
                            return l;
                        }
                        })
                        .join(l);
                    }
                    return o;
                },
                },
                {
                key: "performDecode",
                value: function (e) {
                    var t = this.getSettingValue("representation"),
                    r = e.getString(),
                    i = ".",
                    a = "-",
                    o = "/";
                    if (
                    ("code" === t &&
                        ((i = this.getSettingValue("shortMark").getString()),
                        (a = this.getSettingValue("longerMark").getString()),
                        (o = this.getSettingValue("spaceMark").getString())),
                    "timing" === t)
                    ) {
                    var s = [
                        this.getSettingValue("signalOnMark").getString(),
                        this.getSettingValue("signalOffMark").getString(),
                    ];
                    r = (r = n.translateMarks(r, s, ["=", "."]))
                        .replace(/===/g, "-")
                        .replace(/\.{7}/g, " / ")
                        .replace(/\.{3}/g, " ")
                        .replace(/\./g, "")
                        .replace(/=/g, ".");
                    }
                    return (r = r
                    .split(" ")
                    .map(function (e) {
                        if ("" === e) return null;
                        var t = n.decodeCode(e, i, a, o);
                        if (null === t)
                        throw new Rl(
                            "Code '".concat(e, "' is not defined in morse code")
                        );
                        return t;
                    })
                    .filter(function (e) {
                        return null !== e;
                    })
                    .join(""));
                },
                },
                {
                key: "validateCodeMarkSettingValue",
                value: function (e, t) {
                    var n = this,
                    r = t.filterValue(e);
                    return null !== r.match(/\s/)
                    ? {
                        key: "morseCodeMarkWhitespaceNotAllowed",
                        message:
                            "Whitespaces are not allowed inside morse code marks",
                        }
                    : void 0 ===
                        ["shortMark", "longerMark", "spaceMark"]
                            .filter(function (e) {
                            return e !== t.getName();
                            })
                            .find(function (e) {
                            return r.isEqualTo(n.getSettingValue(e));
                            }) || {
                        key: "morseCodeMarkNotUnique",
                        message:
                            "Morse code marks need to be different from each other",
                        };
                },
                },
                {
                key: "validateTimingMarkSettingValue",
                value: function (e, t) {
                    var n = this,
                    r = t.filterValue(e);
                    return (
                    void 0 ===
                        ["signalOnMark", "signalOffMark"]
                        .filter(function (e) {
                            return e !== t.getName();
                        })
                        .find(function (e) {
                            return 0 === r.indexOf(n.getSettingValue(e));
                        }) || {
                        key: "morseCodeMarkNotUnique",
                        message:
                        "Timing marks need to be different from each other",
                    }
                    );
                },
                },
                {
                key: "settingValueDidChange",
                value: function (e, t) {
                    var n = this;
                    switch (e.getName()) {
                    case "shortMark":
                    case "longerMark":
                    case "spaceMark":
                        ["shortMark", "longerMark", "spaceMark"]
                        .filter(function (t) {
                            return t !== e.getName();
                        })
                        .forEach(function (e) {
                            return n.getSetting(e).revalidateValue();
                        });
                        break;
                    case "signalOnMark":
                    case "signalOffMark":
                        ["signalOnMark", "signalOffMark"]
                        .filter(function (t) {
                            return t !== e.getName();
                        })
                        .forEach(function (e) {
                            return n.getSetting(e).revalidateValue();
                        });
                        break;
                    case "representation":
                        this.getSetting("shortMark").setVisible("code" === t),
                        this.getSetting("longerMark").setVisible("code" === t),
                        this.getSetting("spaceMark").setVisible("code" === t),
                        this.getSetting("signalOnMark").setVisible(
                            "timing" === t
                        ),
                        this.getSetting("signalOffMark").setVisible(
                            "timing" === t
                        );
                    }
                },
                },
            ],
            [
                {
                key: "encodeCharacter",
                value: function (e, t, r, i) {
                    if (Bl.isWhitespace(e)) return i;
                    var a = Gd.indexOf(e);
                    if (-1 === a) return null;
                    var o = Hd[a];
                    return n.translateMarks(o, [".", "-"], [t, r]);
                },
                },
                {
                key: "decodeCode",
                value: function (e, t, r, i) {
                    if (e === i) return " ";
                    var a = n.translateMarks(e, [t, r], [".", "-"]),
                    o = Hd.indexOf(a);
                    return -1 !== o ? Gd[o] : null;
                },
                },
                {
                key: "translateMarks",
                value: function (e, t, n) {
                    for (var r, i, a, o = "", s = -1; ++s < e.length; )
                    for (a = !1, r = -1; !a && ++r < t.length; )
                        (i = t[r]),
                        (a = e.substr(s, i.length) === i) &&
                            ((o += n[r]), (s += i.length - 1));
                    return o;
                },
                },
            ]
            ),
            n
        );
        })(qu),
        Xd = {
        name: "nihilist-cipher",
        title: "Nihilist cipher",
        category: "Polybius square ciphers",
        type: "encoder",
        },
        Zd = "abcdefghiklmnopqrstuvwxyz",
        Yd = (function (e) {
        kt(i, e);
        var t,
            n,
            r = Et(i);
        function i() {
            var e;
            return (
            yt(this, i),
            (e = r.call(this)).addSettings([
                {
                name: "alphabet",
                type: "text",
                value: Zd,
                uniqueChars: !0,
                minLength: 0,
                maxLength: 25,
                caseSensitivity: !1,
                },
                {
                name: "key",
                type: "text",
                value: "cryptii",
                whitelistChars: Zd,
                minLength: 2,
                caseSensitivity: !1,
                },
                {
                name: "separator",
                type: "text",
                value: " ",
                randomizable: !1,
                blacklistChars: "0123456789",
                minLength: 1,
                caseSensitivity: !1,
                },
            ]),
            (e._polybiusSquare = new Ku()),
            e._polybiusSquare.setSettingValues({
                alphabet: Zd,
                rows: "12345",
                columns: "12345",
                separator: "",
                caseSensitivity: !1,
                includeForeignChars: !1,
            }),
            e
            );
        }
        return (
            bt(i, null, [
            {
                key: "getMeta",
                value: function () {
                return Xd;
                },
            },
            ]),
            bt(i, [
            {
                key: "performEncode",
                value:
                ((n = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a, o, s, l, u, c, h, d;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                (n = this.getSettingValue("key")),
                                (r = this.getSettingValue("separator")),
                                (e.next = 4),
                                this._polybiusSquare.encode(
                                    t.getString().replace(/j/gi, "i")
                                )
                                );
                            case 4:
                                return (
                                (i = e.sent),
                                (e.next = 7),
                                this._polybiusSquare.encode(n)
                                );
                            case 7:
                                for (
                                a = e.sent,
                                    o = i.getLength() / 2,
                                    s = n.getLength(),
                                    l = new Array(o),
                                    d = 0;
                                d < o;
                                d++
                                )
                                (u = parseInt(
                                    i.getCharAt(2 * d) + i.getCharAt(2 * d + 1)
                                )),
                                    (c = 2 * $u.mod(d, s)),
                                    (h = parseInt(
                                    a.getCharAt(c) + a.getCharAt(c + 1)
                                    )),
                                    (l[d] = u + h);
                                return e.abrupt("return", ql.join(l, r));
                            case 13:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return n.apply(this, arguments);
                }),
            },
            {
                key: "performDecode",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a, o, s, l, u, c, h, d, f;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                (n = this.getSettingValue("key")),
                                (r = this.getSettingValue("separator")),
                                (i = t.getString().split(r)),
                                (a = i.length),
                                (o = n.getLength()),
                                (e.next = 7),
                                this._polybiusSquare.encode(n)
                                );
                            case 7:
                                (s = e.sent), (d = ""), (f = 0);
                            case 10:
                                if (!(f < a)) {
                                e.next = 23;
                                break;
                                }
                                if (((l = parseInt(i[f])), !isNaN(l))) {
                                e.next = 14;
                                break;
                                }
                                throw new Rl(
                                "Block at index ".concat(
                                    f + 1,
                                    " is not a number."
                                )
                                );
                            case 14:
                                if (
                                ((c = 2 * $u.mod(f, o)),
                                (h = parseInt(
                                    s.getCharAt(c) + s.getCharAt(c + 1)
                                )),
                                (u = l - h).toString().match(/^[1-5]{2}$/))
                                ) {
                                e.next = 19;
                                break;
                                }
                                throw new Rl(
                                "Block at index ".concat(
                                    f + 1,
                                    " results in invalid "
                                ) +
                                    "Polybius square coordinates '".concat(u, "'.")
                                );
                            case 19:
                                d += u.toString();
                            case 20:
                                f++, (e.next = 10);
                                break;
                            case 23:
                                return e.abrupt(
                                "return",
                                this._polybiusSquare.decode(d)
                                );
                            case 24:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "alphabet":
                    var n = t.extend(Zd);
                    this._polybiusSquare.setSettingValue("alphabet", n),
                        this.getSetting("key").setWhitelistChars(n);
                }
                },
            },
            ]),
            i
        );
        })(qu),
        Jd = Math.floor,
        Qd = function (e) {
        return !w(e) && isFinite(e) && Jd(e) === e;
        };
    Oe({ target: "Number", stat: !0 }, { isInteger: Qd });
    var ef = Math.abs;
    Oe(
        { target: "Number", stat: !0 },
        {
        isSafeInteger: function (e) {
            return Qd(e) && ef(e) <= 9007199254740991;
        },
        }
    );
    var tf = {
        name: "numeral-system",
        title: "Numeral system",
        category: "Transform",
        type: "encoder",
        },
        nf = ["binary", "octal", "decimal", "hexadecimal", "roman-numerals"],
        rf = [
        "Binary (2)",
        "Octal (8)",
        "Decimal (10)",
        "Hexadecimal (16)",
        "Roman numerals",
        ],
        af = [/([01]+)/g, /([0-7]+)/g, /(\d+)/g, /([0-9a-f]+)/gi, /([IVXLCDM]+)/gi],
        of = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
        ],
        sf = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        lf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "from",
                label: "Read",
                type: "enum",
                value: "decimal",
                elements: nf,
                labels: rf,
                randomizable: !1,
                style: "radio",
                },
                {
                name: "to",
                label: "Convert to",
                type: "enum",
                value: "hexadecimal",
                elements: nf,
                labels: rf,
                randomizable: !1,
                style: "radio",
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return tf;
                },
            },
            ]),
            bt(
            n,
            [
                {
                key: "performTranslate",
                value: function (e, t) {
                    var r = e.toString(),
                    i = this.getSettingValue(t ? "from" : "to"),
                    a = this.getSettingValue(t ? "to" : "from"),
                    o = af[nf.indexOf(i)];
                    return r.replace(o, function (e, t, o) {
                    if (
                        !(
                        (0 === o || Bl.isWhitespace(r, o - 1)) &&
                        (r.length === o + t.length ||
                            Bl.isWhitespace(r, o + t.length))
                        )
                    )
                        return t;
                    var s = n.decodeNumber(i, t);
                    return (null !== s ? n.encodeNumber(a, s) : null) || t;
                    });
                },
                },
            ],
            [
                {
                key: "decodeNumber",
                value: function (e, t) {
                    if ("undefined" != typeof BigInt)
                    switch (e) {
                        case "binary":
                        return BigInt("0b".concat(t));
                        case "octal":
                        return BigInt("0o".concat(t));
                        case "decimal":
                        return BigInt(t);
                        case "hexadecimal":
                        return BigInt("0x".concat(t));
                    }
                    var r = null;
                    switch (e) {
                    case "binary":
                        r = parseInt(t, 2);
                        break;
                    case "octal":
                        r = parseInt(t, 8);
                        break;
                    case "decimal":
                        r = parseInt(t, 10);
                        break;
                    case "hexadecimal":
                        r = parseInt(t, 16);
                        break;
                    case "roman-numerals":
                        r = n.romanNumeralsToDecimal(t);
                    }
                    if (null === r || isNaN(r)) return null;
                    if (!n.isSafeInteger(r))
                    throw new Rl(
                        "Can't read '".concat(
                        t,
                        "' because the current environment does not "
                        ) + "support arbitrarily large integers."
                    );
                    return r;
                },
                },
                {
                key: "encodeNumber",
                value: function (e, t) {
                    switch (e) {
                    case "binary":
                        return t.toString(2);
                    case "octal":
                        return t.toString(8);
                    case "decimal":
                        return t.toString(10);
                    case "hexadecimal":
                        return t.toString(16);
                    case "roman-numerals":
                        return n.decimalToRomanNumerals(t);
                    default:
                        return null;
                    }
                },
                },
                {
                key: "isSafeInteger",
                value: function (e) {
                    if (void 0 === Number.isSafeInteger) {
                    var t = Number.MAX_SAFE_INTEGER || 9007199254740991;
                    return Number.isInteger(e) && Math.abs(e) <= t;
                    }
                    return Number.isSafeInteger(e);
                },
                },
                {
                key: "decimalToRomanNumerals",
                value: function (e) {
                    if (e <= 0 || e >= 4e3) return null;
                    for (var t, n = Number(e), r = ""; n > 0; )
                    (t = sf.findIndex(function (e) {
                        return n >= e;
                    })),
                        (r += of[t]),
                        (n -= sf[t]);
                    return r;
                },
                },
                {
                key: "romanNumeralsToDecimal",
                value: function (e) {
                    e = e.toString().toUpperCase();
                    for (var t, n = 0, r = 0, i = !1, a = 0; !i && n < e.length; )
                    -1 !==
                        (t = of.findIndex(function (t) {
                        return e.substr(n, t.length) === t;
                        })) && t >= a
                        ? ((r += sf[t]), (n += of[t].length), (a = t))
                        : (i = !0);
                    return i ? null : r;
                },
                },
            ]
            ),
            n
        );
        })(qu),
        uf = 16,
        cf = 13,
        hf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._tape = []),
            (e._rows = 8),
            (e._$canvas = null),
            (e._$tapes = null),
            (e._$marks = null),
            (e._$holes = null),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "setTape",
                value: function (e, t) {
                return (this._tape = e), (this._rows = t), this.setNeedsUpdate();
                },
            },
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("viewer-paper-tape"), e;
                },
            },
            {
                key: "renderContent",
                value: function () {
                (this._$tapes = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                )),
                    this._$tapes.classList.add("viewer-punched-tape__tape"),
                    (this._$marks = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                    )),
                    this._$marks.classList.add("viewer-punched-tape__mark"),
                    (this._$holes = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                    )),
                    this._$holes.classList.add("viewer-punched-tape__hole"),
                    (this._$canvas = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                    )),
                    this._$canvas.classList.add("viewer-punched-tape__canvas"),
                    this._$canvas.appendChild(this._$tapes),
                    this._$canvas.appendChild(this._$marks),
                    this._$canvas.appendChild(this._$holes),
                    this.setNeedsUpdate();
                var e = At(wt(n.prototype), "renderContent", this).call(this);
                return e.appendChild(this._$canvas), e;
                },
            },
            {
                key: "layout",
                value: function () {
                return (
                    this.setNeedsUpdate(),
                    At(wt(n.prototype), "layout", this).call(this)
                );
                },
            },
            {
                key: "update",
                value: function () {
                var e = this._tape,
                    t = this._tape.length,
                    n = this._rows,
                    r = Math.floor((n - 1) / 2);
                n++;
                var i,
                    a,
                    o,
                    s,
                    l,
                    u = 1.5,
                    c = this._$canvas.getBoundingClientRect().width - 32,
                    h = Math.floor((c - 22) / cf) + 1,
                    d = (c - (h - 1) * cf) / 2,
                    f = Math.ceil(t / h),
                    g = cf * (n - 1) + 22,
                    p = g + 16,
                    v = f * (g + uf) + uf,
                    m = [],
                    b = [];
                for (s = 0; s < t; s++) {
                    for (
                    i = e[s],
                        a = uf + d + (s % h) * cf,
                        o = 27 + Math.floor(s / h) * p,
                        l = 0;
                    l < n;
                    l++
                    )
                    l === r
                        ? (b.push("M ".concat(a - u, " ").concat(o + l * cf)),
                        b.push(
                            "a ".concat(u, ",").concat(u, " 0 1,0 ").concat(3, ",0")
                        ),
                        b.push(
                            "a "
                            .concat(u, ",")
                            .concat(u, " 0 1,0 ")
                            .concat(-3, ",0")
                        ))
                        : (0 != (1 & i) &&
                            (b.push("M ".concat(a - 3, " ").concat(o + l * cf)),
                            b.push(
                            "a "
                                .concat(3, ",")
                                .concat(3, " 0 1,0 ")
                                .concat(6, ",0")
                            ),
                            b.push(
                            "a "
                                .concat(3, ",")
                                .concat(3, " 0 1,0 ")
                                .concat(-6, ",0")
                            )),
                        (i >>= 1));
                    s % n == 0 &&
                    n >= 5 &&
                    (m.push("M ".concat(a - u, ",").concat(o - 11 + g + 8)),
                    m.push(
                        "a ".concat(u, ",").concat(u, " 0 1,0 ").concat(3, ",0")
                    ),
                    m.push(
                        "a ".concat(u, ",").concat(u, " 0 1,0 ").concat(-3, ",0")
                    ));
                }
                var k,
                    w,
                    _ = [];
                for (y = 0; y < f; y++)
                    uf,
                    (k = uf + y * p),
                    (w = y < f - 1 || t % h == 0 ? c : (t % h) * cf + 2 * d),
                    _.push("M ".concat(16, ",").concat(k + 3)),
                    _.push(
                        "a "
                        .concat(3, ",")
                        .concat(3, " 0 0 1 ")
                        .concat(3, ",")
                        .concat(-3)
                    ),
                    _.push("L ".concat(16 + w - 3, ",").concat(k)),
                    _.push(
                        "a "
                        .concat(3, ",")
                        .concat(3, " 0 0 1 ")
                        .concat(3, ",")
                        .concat(3)
                    ),
                    _.push("L ".concat(16 + w, ",").concat(k + g - 3)),
                    _.push(
                        "a "
                        .concat(3, ",")
                        .concat(3, " 0 0 1 ")
                        .concat(-3, ",")
                        .concat(3)
                    ),
                    _.push("L ".concat(19, ",").concat(k + g)),
                    _.push(
                        "a "
                        .concat(3, ",")
                        .concat(3, " 0 0 1 ")
                        .concat(-3, ",")
                        .concat(-3)
                    ),
                    _.push("Z");
                (this._$canvas.style.height = "".concat(v, "px")),
                    this._$tapes.setAttribute("d", _.join(" ")),
                    this._$marks.setAttribute("d", m.join(" ")),
                    this._$holes.setAttribute("d", b.join(" "));
                },
            },
            ]),
            n
        );
        })(sd),
        df = {
        name: "punched-tape",
        title: "Punched tape",
        category: "View",
        type: "viewer",
        },
        ff = (function (e) {
        kt(r, e);
        var t,
            n = Et(r);
        function r() {
            var e;
            return (
            yt(this, r),
            ((e = n.call(this))._viewPrototype = hf),
            e.addSetting({
                name: "rows",
                type: "number",
                value: 8,
                min: 3,
                max: 25,
                randomizable: !1,
            }),
            e
            );
        }
        return (
            bt(r, null, [
            {
                key: "getMeta",
                value: function () {
                return df;
                },
            },
            ]),
            bt(r, [
            {
                key: "performView",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                (n = this.getSettingValue("rows")),
                                (r = t.getBytes()),
                                (i = al.resizeBitSizedArray(r, 8, n, !0)),
                                this.getView().setTape(i, n);
                            case 4:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            ]),
            r
        );
        })(ud),
        gf = {
        name: "punycode",
        title: "Punycode",
        category: "Encoding",
        type: "encoder",
        },
        pf = {
        basicRangeStart: 0,
        basicRangeEnd: 127,
        digitMapping: "abcdefghijklmnopqrstuvwxyz0123456789",
        delimiter: "-",
        caseSensitivity: !1,
        initialBias: 72,
        initialN: 128,
        tmin: 1,
        tmax: 26,
        skew: 38,
        damp: 700,
        },
        vf = "xn--",
        yf = (function (e) {
        kt(i, e);
        var t,
            n,
            r = Et(i);
        function i() {
            var e;
            return (
            yt(this, i),
            ((e = r.call(this))._bootstringEncoder = new od()),
            e._bootstringEncoder.setSettingValues(pf),
            e
            );
        }
        return (
            bt(i, null, [
            {
                key: "getMeta",
                value: function () {
                return gf;
                },
            },
            ]),
            bt(i, [
            {
                key: "performEncode",
                value:
                ((n = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                (t = t.toLowerCase()),
                                (n = t.split(".")),
                                (r = new Array(n.length)),
                                (i = 0);
                            case 4:
                                if (!(i < n.length)) {
                                e.next = 16;
                                break;
                                }
                                if (
                                -1 !==
                                this._nonBasicCodePointIndex(n[i].getCodePoints())
                                ) {
                                e.next = 9;
                                break;
                                }
                                (r[i] = n[i]), (e.next = 13);
                                break;
                            case 9:
                                return (
                                (e.next = 11),
                                this._bootstringEncoder.encode(n[i])
                                );
                            case 11:
                                (a = e.sent), (r[i] = vf + a.getString());
                            case 13:
                                i++, (e.next = 4);
                                break;
                            case 16:
                                return e.abrupt("return", ql.join(r, "."));
                            case 17:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return n.apply(this, arguments);
                }),
            },
            {
                key: "performDecode",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a, o;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                if (
                                -1 ===
                                (n = this._nonBasicCodePointIndex(
                                    t.getCodePoints()
                                ))
                                ) {
                                e.next = 3;
                                break;
                                }
                                throw new Rl(
                                "Invalid Punycode character at index ".concat(n)
                                );
                            case 3:
                                (r = t.split(".")),
                                (i = new Array(r.length)),
                                (a = 0);
                            case 6:
                                if (!(a < r.length)) {
                                e.next = 18;
                                break;
                                }
                                if (0 === r[a].indexOf(vf)) {
                                e.next = 11;
                                break;
                                }
                                (i[a] = r[a]), (e.next = 15);
                                break;
                            case 11:
                                return (
                                (o = r[a].substr(vf.length)),
                                (e.next = 14),
                                this._bootstringEncoder.decode(o)
                                );
                            case 14:
                                i[a] = e.sent;
                            case 15:
                                a++, (e.next = 6);
                                break;
                            case 18:
                                return e.abrupt("return", ql.join(i, "."));
                            case 19:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "_nonBasicCodePointIndex",
                value: function (e) {
                return e.findIndex(function (e) {
                    return e >= 128;
                });
                },
            },
            ]),
            i
        );
        })(qu),
        mf = {
        name: "rail-fence-cipher",
        title: "Rail fence cipher",
        category: "Ciphers",
        type: "encoder",
        },
        bf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "key",
                type: "number",
                value: 2,
                integer: !0,
                min: 2,
                max: 99,
                randomizeValue: function (e) {
                    return e.nextInteger(2, 8);
                },
                },
                {
                name: "offset",
                type: "number",
                value: 0,
                integer: !0,
                min: 0,
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return mf;
                },
            },
            ]),
            bt(n, [
            {
                key: "performEncode",
                value: function (e) {
                var t,
                    n = this.getSettingValues(),
                    r = n.key,
                    i = n.offset,
                    a = e.getLength(),
                    o = 2 * r - 2,
                    s = new Array(r).fill("");
                for (t = 0; t < a; t++)
                    s[r - 1 - Math.abs(o / 2 - ((t + i) % o))] += e.getCharAt(t);
                return s.join("");
                },
            },
            {
                key: "performDecode",
                value: function (e) {
                var t,
                    n,
                    r = this.getSettingValues(),
                    i = r.key,
                    a = r.offset,
                    o = e.getLength(),
                    s = 2 * i - 2,
                    l = new Array(o),
                    u = -1;
                for (n = 0; n < i; n++)
                    for (t = 0; t < o; t++)
                    ((n + t + a) % s != 0 && (n - t - a) % s != 0) ||
                        (l[t] = e.getCodePointAt(++u));
                return l;
                },
            },
            ]),
            n
        );
        })(qu),
        kf = {
        name: "rc4",
        title: "RC4",
        category: "Modern cryptography",
        type: "encoder",
        },
        wf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "key",
                type: "bytes",
                value: new Uint8Array([99, 114, 121, 112, 116, 105, 105]),
                minSize: 1,
                maxSize: 32,
                randomizeSize: 8,
                },
                {
                name: "drop",
                type: "number",
                label: "Drop bytes",
                value: 0,
                integer: !0,
                min: 0,
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return kf;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                for (
                    var n = this.getSettingValue("key"),
                    r = this.getSettingValue("drop"),
                    i = n.length,
                    a = e.getBytes(),
                    o = a.length,
                    s = new Uint8Array(o),
                    l = new Uint8Array(256),
                    u = 0;
                    u < 256;
                    u++
                )
                    l[u] = u;
                for (var c = 0, h = 0; h < 256; h++) {
                    var d = [l[(c = (c + l[h] + n[h % i]) % 256)], l[h]];
                    (l[h] = d[0]), (l[c] = d[1]);
                }
                var f,
                    g = 0;
                c = 0;
                for (var p = 0; p < r + o; p++) {
                    var v = [l[(c = (c + l[(g = (g + 1) % 256)]) % 256)], l[g]];
                    (l[g] = v[0]),
                    (l[c] = v[1]),
                    (f = l[(l[g] + l[c]) % 256]),
                    p >= r && (s[p - r] = a[p - r] ^ f);
                }
                return s;
                },
            },
            ]),
            n
        );
        })(qu),
        _f = {
        name: "replace",
        title: "Replace",
        category: "Transform",
        type: "encoder",
        },
        Sf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                { name: "find", type: "text", value: "", randomizable: !1 },
                { name: "replace", type: "text", value: "", randomizable: !1 },
                {
                name: "caseSensitivity",
                type: "boolean",
                value: !1,
                randomizable: !1,
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return _f;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                var n = this.getSettingValue("caseSensitivity"),
                    r = this.getSettingValues(),
                    i = r.find,
                    a = r.replace;
                if (!t) {
                    var o = [a, i];
                    (i = o[0]), (a = o[1]);
                }
                var s = e;
                n || ((s = s.toLowerCase()), (i = i.toLowerCase())),
                    (s = s.getCodePoints()),
                    (e = e.getCodePoints()),
                    (i = i.getCodePoints()),
                    (a = a.getCodePoints());
                for (
                    var l = 0, u = -1, c = [];
                    -1 !== (u = al.indexOfSlice(s, i, u + 1));

                )
                    (c = (c = c.concat(e.slice(l, u))).concat(a)),
                    (l = u + i.length);
                return c.concat(e.slice(l));
                },
            },
            ]),
            n
        );
        })(qu),
        xf = {
        name: "reverse",
        title: "Reverse",
        category: "Transform",
        type: "encoder",
        },
        If = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSetting({
                name: "type",
                label: "By",
                type: "enum",
                value: "character",
                elements: ["byte", "character", "line"],
                labels: ["Byte", "Character", "Line"],
                randomizable: !1,
                style: "radio",
            }),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return xf;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                switch (this.getSettingValue("type")) {
                    case "byte":
                    return e.getBytes().reverse();
                    case "character":
                    return ql.join(e.getChars().reverse(), "");
                    case "line":
                    return ql.join(e.split(/\r?\n/).reverse(), "\n");
                }
                },
            },
            ]),
            n
        );
        })(qu),
        Cf = {
        name: "rot13",
        title: "ROT13",
        category: "Ciphers",
        type: "encoder",
        },
        Vf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSetting({
                name: "variant",
                type: "enum",
                value: "rot13",
                elements: ["rot5", "rot13", "rot18", "rot47"],
                labels: [
                "ROT5 (0-9)",
                "ROT13 (A-Z, a-z)",
                "ROT18 (0-9, A-Z, a-z)",
                "ROT47 (!-~)",
                ],
                randomizable: !1,
                style: "radio",
            }),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Cf;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                var n = this,
                    r = this.getSettingValue("variant");
                return e.getCodePoints().map(function (e) {
                    return (
                    ("rot5" !== r && "rot18" !== r) ||
                        (e = n._rotateCodePoint(e, 48, 57)),
                    ("rot13" !== r && "rot18" !== r) ||
                        ((e = n._rotateCodePoint(e, 97, 122)),
                        (e = n._rotateCodePoint(e, 65, 90))),
                    "rot47" === r && (e = n._rotateCodePoint(e, 33, 126)),
                    e
                    );
                });
                },
            },
            {
                key: "_rotateCodePoint",
                value: function (e, t, n) {
                if (e >= t && e <= n) {
                    var r = n - t + 1;
                    (e += r / 2) > n && (e -= r);
                }
                return e;
                },
            },
            ]),
            n
        );
        })(qu),
        Ef = {
        name: "spelling-alphabet",
        title: "Spelling alphabet",
        category: "Alphabets",
        type: "encoder",
        },
        Af = [
        {
            name: "nato",
            label: "NATO/ICAO phonetic alphabet",
            characters: "abcdefghijklmnopqrstuvwxxyz0123456789.",
            words: [
            "Alfa",
            "Bravo",
            "Charlie",
            "Delta",
            "Echo",
            "Foxtrot",
            "Golf",
            "Hotel",
            "India",
            "Juliett",
            "Kilo",
            "Lima",
            "Mike",
            "November",
            "Oscar",
            "Papa",
            "Quebec",
            "Romeo",
            "Sierra",
            "Tango",
            "Uniform",
            "Victor",
            "Whiskey",
            "X-ray",
            "Xray",
            "Yankee",
            "Zulu",
            "Zero",
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Stop",
            ],
            spaceWord: "(space)",
        },
        {
            name: "dutch",
            label: "Dutch spelling alphabet",
            characters: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "ij",
            "ij",
            "i",
            "j",
            "j",
            "k",
            "l",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "q",
            "r",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            ],
            words: [
            "Anton",
            "Bernhard",
            "Cornelis",
            "Dirk",
            "Eduard",
            "Ferdinand",
            "Gerard",
            "Hendrik",
            "IJmuiden",
            "IJsbrand",
            "Izaak",
            "Johan",
            "Jacob",
            "Karel",
            "Lodewijk",
            "Leo",
            "Maria",
            "Nico",
            "Otto",
            "Pieter",
            "Quirinius",
            "Quinten",
            "Richard",
            "Rudolf",
            "Simon",
            "Theodoor",
            "Utrecht",
            "Victor",
            "Willem",
            "Xantippe",
            "Ypsilon",
            "Zacharias",
            "Nul",
            "Een",
            "Twee",
            "Drie",
            "Vier",
            "Vijf",
            "Zes",
            "Zeven",
            "Acht",
            "Negen",
            ],
            spaceWord: "(spatiebalk)",
        },
        {
            name: "german",
            label: "German spelling alphabet",
            characters: "abcdefghijkklmnopqrsstuvwxxyzzäööüüßß0123456789",
            words: [
            "Anton",
            "Berta",
            "Cäsar",
            "Dora",
            "Emil",
            "Friedrich",
            "Gustav",
            "Heinrich",
            "Ida",
            "Julius",
            "Kaufmann",
            "Konrad",
            "Ludwig",
            "Martha",
            "Nordpol",
            "Otto",
            "Paula",
            "Quelle",
            "Richard",
            "Samuel",
            "Siegfried",
            "Theodor",
            "Ulrich",
            "Viktor",
            "Wilhelm",
            "Xanthippe",
            "Xaver",
            "Ypsilon",
            "Zacharias",
            "Zürich",
            "Ärger",
            "Ökonom",
            "Österreich",
            "Übermut",
            "Übel",
            "Eszett",
            "Scharfes S",
            "Null",
            "Eins",
            "Zwei",
            "Drei",
            "Vier",
            "Fünf",
            "Sechs",
            "Sieben",
            "Acht",
            "Neun",
            ],
            spaceWord: "(Leertaste)",
        },
        {
            name: "swedish",
            label: "Swedish Armed Forces' radio alphabet",
            characters: "abcdefghijklmnopqrstuvwxyzåäö0123456789",
            words: [
            "Adam",
            "Bertil",
            "Caesar",
            "David",
            "Erik",
            "Filip",
            "Gustav",
            "Helge",
            "Ivar",
            "Johan",
            "Kalle",
            "Ludvig",
            "Martin",
            "Niklas",
            "Olof",
            "Petter",
            "Qvintus",
            "Rudolf",
            "Sigurd",
            "Tore",
            "Urban",
            "Viktor",
            "Wilhelm",
            "Xerxes",
            "Yngve",
            "Zäta",
            "Åke",
            "Ärlig",
            "Östen",
            "Nolla",
            "Ett",
            "Tvåa",
            "Trea",
            "Fyra",
            "Femma",
            "Sexa",
            "Sju",
            "Åtta",
            "Nia",
            ],
            spaceWord: "(mellanslag)",
        },
        {
            name: "russian",
            label: "Russian spelling alphabet (official, excludes Ё)",
            characters: "абвгдежзийклмнопрстуфхцчшщъыьэюя0123456789.",
            words: [
            "Анна",
            "Борис",
            "Василий",
            "Григорий",
            "Дмитрий",
            "Елена",
            "Женя",
            "Зинаида",
            "Иван",
            "Иван краткий",
            "Константин",
            "Леонид",
            "Михаил",
            "Николай",
            "Ольга",
            "Павел",
            "Роман",
            "Семён",
            "Татьяна",
            "Ульяна",
            "Фёдор",
            "Харитон",
            "Цапля",
            "Человек",
            "Шура",
            "Щука",
            "Твёрдый знак",
            "Еры",
            "Мягкий знак",
            "Эхо",
            "Юрий",
            "Яков",
            "Ноль",
            "Один",
            "Два",
            "Три",
            "Четыре",
            "Пять",
            "Шесть",
            "Семь",
            "Восемь",
            "Девять",
            "Точка",
            ],
            spaceWord: "(пробел)",
        },
        {
            name: "russian-unofficial",
            label: "Russian spelling alphabet (unofficial, includes Ё)",
            characters: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789.",
            words: [
            "Антон",
            "Борис",
            "Василий",
            "Галина",
            "Дмитрий",
            "Елена",
            "Ёлка",
            "Жук",
            "Зоя",
            "Иван",
            "Йот",
            "Киловатт",
            "Леонид",
            "Мария",
            "Николай",
            "Ольга",
            "Павел",
            "Радио",
            "Сергей",
            "Тамара",
            "Ульяна",
            "Фёдор",
            "Харитон",
            "Центр",
            "Человек",
            "Шура",
            "Щука",
            "Твёрдый знак",
            "Игрек",
            "Мягкий знак",
            "Эмма",
            "Юрий",
            "Яков",
            "Ноль",
            "Один",
            "Два",
            "Три",
            "Четыре",
            "Пять",
            "Шесть",
            "Семь",
            "Восемь",
            "Девять",
            "Точка",
            ],
            spaceWord: "(пробел)",
        },
        ],
        Mf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._characterMap = {}),
            (e._wordMap = {}),
            e.addSetting({
                name: "alphabet",
                type: "enum",
                elements: Af.map(function (e) {
                return e.name;
                }),
                labels: Af.map(function (e) {
                return e.label;
                }),
                randomizable: !1,
                style: "radio",
            }),
            e.buildTranslationMap(),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Ef;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                for (
                    var n = Bl.normalizeWhitespaces(e.getString()),
                    r = t ? this._characterMap : this._wordMap,
                    i = Object.keys(r).sort(function (e, t) {
                        return t.length - e.length;
                    }),
                    a = 0,
                    o = [];
                    a < n.length;

                ) {
                    var s = i.find(function (e) {
                    return (
                        n.substr(a, e.length).toLowerCase() === e.toLowerCase()
                    );
                    });
                    if (void 0 !== s) o.push(r[s]), (a += s.length);
                    else {
                    var l = n.substr(a, 1);
                    (t || " " !== l) && o.push(l), a++;
                    }
                }
                return o.join(t ? " " : "");
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "alphabet":
                    this.buildTranslationMap();
                }
                },
            },
            {
                key: "buildTranslationMap",
                value: function () {
                var e = this.getSettingValue("alphabet"),
                    t = Af.find(function (t) {
                    return t.name === e;
                    });
                if (void 0 === t)
                    throw new Error(
                    "Alphabet with name '".concat(e, "' is not defined")
                    );
                var n =
                    "string" == typeof t.characters
                        ? t.characters.split("")
                        : t.characters,
                    r = t.words,
                    i = {};
                n.forEach(function (e, t) {
                    void 0 === i[e] && (i[e] = r[t]);
                });
                var a = {};
                r.forEach(function (e, t) {
                    (e = e.toLowerCase()), void 0 === a[e] && (a[e] = n[t]);
                });
                var o = t.spaceWord || "(space)";
                return (
                    (i[" "] = o),
                    (a[o] = " "),
                    (this._characterMap = i),
                    (this._wordMap = a),
                    this
                );
                },
            },
            ]),
            n
        );
        })(qu),
        Tf = {
        name: "tap-code",
        title: "Tap code",
        category: "Polybius square ciphers",
        type: "encoder",
        },
        Lf = (function (e) {
        kt(r, e);
        var t,
            n = Et(r);
        function r() {
            var e;
            return (
            yt(this, r),
            (e = n.call(this)).addSettings([
                {
                name: "tapMark",
                label: "Tap",
                type: "text",
                width: 4,
                value: ".",
                minLength: 1,
                randomizable: !1,
                },
                {
                name: "groupMark",
                label: "Group",
                type: "text",
                width: 4,
                value: " ",
                minLength: 1,
                randomizable: !1,
                },
                {
                name: "letterMark",
                label: "Letter",
                type: "text",
                width: 4,
                value: "  ",
                minLength: 1,
                randomizable: !1,
                },
            ]),
            (e._polybiusSquare = new Ku()),
            e._polybiusSquare.setSettingValues({
                alphabet: "abcdefghijlmnopqrstuvwxyz",
                rows: "12345",
                columns: "12345",
                separator: "",
                caseSensitivity: !1,
                includeForeignChars: !1,
            }),
            e
            );
        }
        return (
            bt(r, null, [
            {
                key: "getMeta",
                value: function () {
                return Tf;
                },
            },
            ]),
            bt(r, [
            {
                key: "performEncode",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a, o, s, l, u, c;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                (n = this.getSettingValue("tapMark").getString()),
                                (r =
                                    this.getSettingValue("groupMark").getString()),
                                (i =
                                    this.getSettingValue("letterMark").getString()),
                                (e.next = 5),
                                this._polybiusSquare.encode(
                                    t.getString().replace(/k/gi, "c")
                                )
                                );
                            case 5:
                                for (
                                a = e.sent, o = a.getLength() / 2, u = "", c = 0;
                                c < o;
                                c++
                                )
                                (s = parseInt(a.getCharAt(2 * c))),
                                    (l = parseInt(a.getCharAt(2 * c + 1))),
                                    (u +=
                                    (c > 0 ? i : "") +
                                    n.repeat(s) +
                                    r +
                                    n.repeat(l));
                                return e.abrupt("return", u);
                            case 10:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "performDecode",
                value: function (e) {
                for (
                    var t = this.getSettingValue("tapMark").getCodePoints(),
                    n = t.length,
                    r = e.getCodePoints(),
                    i = "",
                    a = 0,
                    o = -1,
                    s = 0;
                    -1 !== (o = al.indexOfSlice(r, t, o + 1));

                )
                    0 === a || o === a + n ? s++ : ((i += s.toString()), (s = 1)),
                    (a = o);
                return (i += s.toString()), this._polybiusSquare.decode(i);
                },
            },
            ]),
            r
        );
        })(qu),
        Pf = { name: "text", title: "Text", category: "View", type: "viewer" },
        Bf = (function (e) {
        kt(r, e);
        var t,
            n = Et(r);
        function r() {
            var e;
            return yt(this, r), ((e = n.call(this))._viewPrototype = ld), e;
        }
        return (
            bt(r, null, [
            {
                key: "getMeta",
                value: function () {
                return Pf;
                },
            },
            ]),
            bt(r, [
            {
                key: "performView",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                this.getView().setText(t.getString());
                            case 1:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "viewTextDidChange",
                value: function (e, t) {
                var n = this;
                this.dare(function () {
                    n.contentDidChange(ql.wrap(t));
                });
                },
            },
            ]),
            r
        );
        })(ud),
        Of = {
        name: "trifid-cipher",
        title: "Trifid cipher",
        category: "Polybius square ciphers",
        type: "encoder",
        },
        Rf = "abcdefghijklmnopqrstuvwxyz+",
        zf = (function (e) {
        kt(i, e);
        var t,
            n,
            r = Et(i);
        function i() {
            var e;
            return (
            yt(this, i),
            (e = r.call(this)).addSettings([
                {
                name: "key",
                type: "text",
                value: "",
                uniqueChars: !0,
                minLength: 0,
                maxLength: 27,
                caseSensitivity: !1,
                },
                { name: "groupSize", type: "number", value: 5, min: 2 },
            ]),
            e
            );
        }
        return (
            bt(i, null, [
            {
                key: "getMeta",
                value: function () {
                return Of;
                },
            },
            ]),
            bt(i, [
            {
                key: "performEncode",
                value:
                ((n = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a, o, s, l, u, c, h, d, f, g, p;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                for (
                                n = this.getSettingValues(),
                                    r = n.key,
                                    i = n.groupSize,
                                    a = ql.wrap(r).extend(Rf).getCodePoints(),
                                    o = t
                                    .toLowerCase()
                                    .getCodePoints()
                                    .map(function (e) {
                                        return a.indexOf(e);
                                    })
                                    .filter(function (e) {
                                        return -1 !== e;
                                    }),
                                    s = o.length,
                                    l = new Array(3 * s),
                                    u = 0;
                                u < s;
                                u++
                                )
                                for (
                                    d = Math.floor(u / i),
                                    f = u - d * i,
                                    g = Math.min(i, s - d * i),
                                    h = this.cartesianCoordinatesFromIndex(o[u]),
                                    c = 0;
                                    c < 3;
                                    c++
                                )
                                    l[f + d * i * 3 + g * c] = h[c];
                                for (p = new Array(s), u = 0; u < s; u++)
                                (h = l.slice(3 * u, 3 * (u + 1))),
                                    (f = this.indexFromCartesianCoordinates(h)),
                                    (p[u] = a[f]);
                                return e.abrupt("return", p);
                            case 9:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return n.apply(this, arguments);
                }),
            },
            {
                key: "performDecode",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i, a, o, s, l, u, c, h, d, f, g, p;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                for (
                                n = this.getSettingValues(),
                                    r = n.key,
                                    i = n.groupSize,
                                    a = ql.wrap(r).extend(Rf).getCodePoints(),
                                    o = t
                                    .toLowerCase()
                                    .getCodePoints()
                                    .map(function (e) {
                                        return a.indexOf(e);
                                    })
                                    .filter(function (e) {
                                        return -1 !== e;
                                    }),
                                    s = o.length,
                                    l = new Array(3 * s),
                                    u = 0;
                                u < s;
                                u++
                                )
                                for (
                                    h = this.cartesianCoordinatesFromIndex(o[u]),
                                    c = 0;
                                    c < 3;
                                    c++
                                )
                                    l[3 * u + c] = h[c];
                                for (d = new Array(s), u = 0; u < s; u++) {
                                for (
                                    f = Math.floor(u / i),
                                    g = u - f * i,
                                    p = Math.min(i, s - f * i),
                                    c = 0;
                                    c < 3;
                                    c++
                                )
                                    h[c] = l[g + f * i * 3 + p * c];
                                (g = this.indexFromCartesianCoordinates(h)),
                                    (d[u] = a[g]);
                                }
                                return e.abrupt("return", d);
                            case 9:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            {
                key: "cartesianCoordinatesFromIndex",
                value: function (e) {
                var t = Math.floor(e / 9),
                    n = Math.floor((e - 9 * t) / 3);
                return [t + 1, n + 1, e - 9 * t - 3 * n + 1];
                },
            },
            {
                key: "indexFromCartesianCoordinates",
                value: function (e) {
                var t = Mt(e, 3);
                return 9 * (t[0] - 1) + 3 * (t[1] - 1) + (t[2] - 1);
                },
            },
            ]),
            i
        );
        })(qu),
        Nf = {
        name: "unicode-code-points",
        title: "Unicode code points",
        category: "Encoding",
        type: "encoder",
        },
        Ff = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).setCharacterToBlockMode(),
            e.addSetting({
                name: "format",
                type: "enum",
                value: "unicode",
                elements: [
                "unicode",
                "decimal",
                "hexadecimal",
                "binary",
                "octal",
                "ncr-decimal",
                "ncr-hexadecimal",
                ],
                labels: [
                "Unicode notation",
                "Decimal",
                "Hexadecimal",
                "Binary",
                "Octal",
                "NCR (Decimal)",
                "NCR (Hexadecimal)",
                ],
                randomizable: !1,
                style: "radio",
            }),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return Nf;
                },
            },
            ]),
            bt(n, [
            {
                key: "performCharEncodeToBlock",
                value: function (e, t, n) {
                switch (this.getSettingValue("format")) {
                    case "unicode":
                    return "U+" + e.toString(16).toUpperCase();
                    case "decimal":
                    return e.toString(10);
                    case "hexadecimal":
                    return e.toString(16);
                    case "binary":
                    return e.toString(2);
                    case "octal":
                    return e.toString(8);
                    case "ncr-decimal":
                    return "&#".concat(e.toString(10), ";");
                    case "ncr-hexadecimal":
                    return "&#x".concat(e.toString(16), ";");
                }
                },
            },
            {
                key: "performBlockDecodeToChar",
                value: function (e, t, n, r) {
                var i,
                    a = 0;
                switch (this.getSettingValue("format")) {
                    case "unicode":
                    null !== (i = e.match(/^U\+([0-9A-F]+)$/i)) &&
                        (a = parseInt(i[1], 16));
                    break;
                    case "decimal":
                    a = parseInt(e, 10);
                    break;
                    case "hexadecimal":
                    a = parseInt(e, 16);
                    break;
                    case "binary":
                    a = parseInt(e, 2);
                    break;
                    case "octal":
                    a = parseInt(e, 8);
                    break;
                    case "ncr-decimal":
                    case "ncr-hexadecimal":
                    null !== (i = e.match(/^&#x([0-9A-F]+);$/i))
                        ? (a = parseInt(i[1], 16))
                        : null !== (i = e.match(/^&#([0-9]+);$/)) &&
                        (a = parseInt(i[1], 10));
                }
                if (!jl.validateCodePoint(a))
                    throw new Rl("Invalid code point at index ".concat(t));
                return a;
                },
            },
            ]),
            n
        );
        })(Uu),
        Df = {
        name: "url-encoding",
        title: "URL encoding",
        category: "Encoding",
        type: "encoder",
        },
        jf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.~",
        $f = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            return yt(this, n), t.apply(this, arguments);
        }
        return (
            bt(
            n,
            [
                {
                key: "performEncode",
                value: function (e) {
                    try {
                    for (
                        var t, n = e.getChars(), r = "", i = 0;
                        i < n.length;
                        i++
                    )
                        (t = n[i]),
                        (r +=
                            -1 === jf.indexOf(t)
                            ? this.encodeBytes(e.getCharBytesAt(i))
                            : t);
                    return r;
                    } catch (t) {
                    if (t instanceof Dl) return this.encodeBytes(e.getBytes());
                    throw t;
                    }
                },
                },
                {
                key: "encodeBytes",
                value: function (e) {
                    for (var t = "", n = 0; n < e.length; n++)
                    t += "%" + ("0" + e[n].toString(16)).slice(-2);
                    return t;
                },
                },
                {
                key: "performDecode",
                value: function (e) {
                    for (var t, n, r = e.getString(), i = [], a = 0; a < r.length; )
                    if ("%" === (t = r[a])) {
                        if (null === (n = r.substr(a + 1, 2)).match(/[0-9a-f]{2}/i))
                        throw new Rl(
                            "Invalid percent-encoded byte '%"
                            .concat(n, "' at index ")
                            .concat(a)
                        );
                        i.push(parseInt(n, 16)), (a += 3);
                    } else if ("+" === t) i.push(32), a++;
                    else {
                        if (-1 === jf.indexOf(t))
                        throw new Rl(
                            "Invalid character '".concat(t, "' at index ").concat(a)
                        );
                        i.push(t.charCodeAt(0)), a++;
                    }
                    return new Uint8Array(i);
                },
                },
            ],
            [
                {
                key: "getMeta",
                value: function () {
                    return Df;
                },
                },
            ]
            ),
            n
        );
        })(qu),
        qf = {
        name: "vigenere-cipher",
        title: "Vigenère cipher",
        category: "Ciphers",
        type: "encoder",
        },
        Uf = "abcdefghijklmnopqrstuvwxyz",
        Wf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)).addSettings([
                {
                name: "variant",
                type: "enum",
                value: "standard",
                elements: [
                    "standard",
                    "beaufort-cipher",
                    "variant-beaufort-cipher",
                    "trithemius-cipher",
                ],
                labels: [
                    "Standard Vigenère cipher",
                    "Beaufort cipher",
                    "Variant Beaufort cipher",
                    "Trithemius cipher",
                ],
                randomizable: !1,
                },
                {
                name: "key",
                type: "text",
                value: "cryptii",
                whitelistChars: Uf,
                minLength: 2,
                caseSensitivity: !1,
                },
                {
                name: "keyMode",
                type: "enum",
                value: "repeat",
                elements: ["repeat", "autokey"],
                labels: ["Repeat", "Autokey"],
                randomizable: !1,
                },
                {
                name: "alphabet",
                type: "text",
                value: Uf,
                uniqueChars: !0,
                minLength: 2,
                caseSensitivity: !1,
                randomizable: !1,
                },
                {
                name: "caseStrategy",
                type: "enum",
                value: "maintain",
                elements: ["maintain", "ignore", "strict"],
                labels: ["Maintain case", "Ignore case", "Strict (A ≠ a)"],
                width: 6,
                randomizable: !1,
                },
                {
                name: "includeForeignChars",
                type: "boolean",
                label: "Foreign Chars",
                width: 6,
                value: !0,
                randomizable: !1,
                trueLabel: "Include",
                falseLabel: "Ignore",
                },
            ]),
            e
            );
        }
        return (
            bt(n, null, [
            {
                key: "getMeta",
                value: function () {
                return qf;
                },
            },
            ]),
            bt(n, [
            {
                key: "performTranslate",
                value: function (e, t) {
                var n,
                    r = this.getSettingValues(),
                    i = r.variant,
                    a = r.caseStrategy,
                    o = r.includeForeignChars,
                    s = this.getSettingValue("alphabet");
                "strict" !== a && (n = (s = s.toLowerCase()).toUpperCase());
                var l = this.getSettingValues(),
                    u = l.key,
                    c = l.keyMode;
                "trithemius-cipher" === i && ((u = s), (c = "repeat"));
                for (
                    var h,
                    d,
                    f,
                    g,
                    p,
                    v = e.getLength(),
                    y = new Array(v),
                    m = 0,
                    b = 0,
                    k = 0;
                    k < v;
                    k++
                )
                    if (
                    ((d = e.getCodePointAt(k)),
                    (f = !1),
                    -1 === (h = s.indexOfCodePoint(d)) &&
                        "strict" !== a &&
                        ((h = n.indexOfCodePoint(d)), (f = !0)),
                    -1 !== h)
                    ) {
                    switch (
                        ((g = u.getCodePointAt($u.mod(b, u.getLength()))),
                        (p = s.indexOfCodePoint(g)),
                        i)
                    ) {
                        case "beaufort-cipher":
                        h = p - h;
                        break;
                        case "variant-beaufort-cipher":
                        h = t ? h - p : h + p;
                        break;
                        default:
                        h = t ? h + p : h - p;
                    }
                    (h = $u.mod(h, s.getLength())),
                        (y[m++] =
                        "maintain" === a && f
                            ? n.getCodePointAt(h)
                            : s.getCodePointAt(h)),
                        "autokey" === c &&
                        ((g = t ? d : s.getCodePointAt(h)),
                        (u = ql.join([u, ql.wrap([g]).toLowerCase()], ""))),
                        b++;
                    } else o && (y[m++] = d);
                return y.slice(0, m);
                },
            },
            {
                key: "settingValueDidChange",
                value: function (e, t) {
                switch (e.getName()) {
                    case "variant":
                    this.getSetting("key").setVisible("trithemius-cipher" !== t),
                        this.getSetting("keyMode").setVisible(
                        "trithemius-cipher" !== t
                        );
                    break;
                    case "alphabet":
                    this.getSetting("key").setWhitelistChars(t);
                    break;
                    case "caseStrategy":
                    this.getSetting("alphabet").setCaseSensitivity(
                        "strict" === t
                    ),
                        this.getSetting("key").setCaseSensitivity("strict" === t);
                }
                },
            },
            ]),
            n
        );
        })(qu),
        Gf = null,
        Hf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            (e = t.call(this)),
            [
                Bf,
                hd,
                ff,
                Sf,
                If,
                pd,
                lf,
                Ic,
                Kd,
                Mf,
                Vd,
                fd,
                tc,
                Vf,
                Gu,
                Wf,
                uc,
                rc,
                bf,
                Ku,
                Qu,
                _c,
                Yd,
                Lf,
                zf,
                dc,
                vc,
                oc,
                bc,
                Ff,
                $f,
                yf,
                od,
                Ud,
                rd,
                wf,
                zd,
                Fd,
            ].forEach(e.register.bind(Ct(e))),
            e
            );
        }
        return (
            bt(
            n,
            [
                {
                key: "register",
                value: function (e) {
                    var t = e.getMeta().name;
                    return At(wt(n.prototype), "register", this).call(this, t, e);
                },
                },
                {
                key: "getMeta",
                value: function (e) {
                    return this.getInvokable(e).getMeta();
                },
                },
                {
                key: "getLibrary",
                value: function () {
                    var e = this;
                    return this.getIdentifiers().map(function (t) {
                    return e.getMeta(t);
                    });
                },
                },
            ],
            [
                {
                key: "getInstance",
                value: function () {
                    return null === Gf && (Gf = new n()), Gf;
                },
                },
            ]
            ),
            n
        );
        })(An),
        Kf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r;
            return (
            yt(this, n),
            ((r = t.call(this))._title = e),
            (r._$trigger = null),
            (r._visible = !1),
            (r._value = null),
            (r._finishCallback = null),
            (r._cancelCallback = null),
            (r._keyUpHandler = r.keyDidPress.bind(Ct(r))),
            (r._$outer = null),
            (r._$dialog = null),
            r
            );
        }
        return (
            bt(n, [
            {
                key: "isVisible",
                value: function () {
                return this._visible;
                },
            },
            {
                key: "setVisible",
                value: function () {
                var e = this,
                    t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                    n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                if (this._visible !== t) {
                    this._visible = t;
                    var r = this.getElement();
                    t &&
                    (document.body.appendChild(r),
                    (this._$trigger = document.activeElement));
                    var i = this._$dialog.getBoundingClientRect().height;
                    t
                    ? (this._$dialog.style.height = "0px")
                    : ((this._$dialog.style.height = "".concat(i, "px")),
                        (this._$outer.style.height = "".concat(i, "px"))),
                    r.getBoundingClientRect(),
                    r.addEventListener(
                        "transitionend",
                        function () {
                        setTimeout(e.visibilityDidChange.bind(e, t, n), 100);
                        },
                        { once: !0 }
                    ),
                    t
                        ? (document.body.classList.add("modal-visible"),
                        r.classList.add("modal--visible"),
                        (this._$dialog.style.height = "".concat(i, "px")),
                        this._keyUpHandler &&
                            document.addEventListener("keyup", this._keyUpHandler))
                        : (document.body.classList.remove("modal-visible"),
                        r.classList.remove("modal--visible"),
                        (this._$dialog.style.height = "0px"),
                        this._keyUpHandler &&
                            document.removeEventListener(
                            "keyup",
                            this._keyUpHandler
                            ));
                }
                return this;
                },
            },
            {
                key: "visibilityDidChange",
                value: function (e, t) {
                var n = this;
                e
                    ? (this._$dialog.removeAttribute("style"),
                    this.getElement().focus())
                    : (setTimeout(function () {
                        n._$dialog.removeAttribute("style"),
                        n._$outer.removeAttribute("style");
                        var e = n.getElement();
                        null !== e.parentNode && e.parentNode.removeChild(e);
                    }, 100),
                    !1 === t && null !== this._finishCallback
                        ? this._finishCallback(this._value)
                        : !0 === t &&
                        null !== this._cancelCallback &&
                        this._cancelCallback(),
                    this._$trigger &&
                        (this._$trigger.focus(), (this._$trigger = null)),
                    (this._finishCallback = null),
                    (this._cancelCallback = null));
                },
            },
            {
                key: "getValue",
                value: function () {
                return this._value;
                },
            },
            {
                key: "setValue",
                value: function (e) {
                return (
                    this._value !== e &&
                    ((this._value = e), this.valueDidChange(e)),
                    this
                );
                },
            },
            { key: "valueDidChange", value: function (e) {} },
            {
                key: "prompt",
                value: function () {
                var e = this,
                    t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : void 0;
                return (
                    void 0 !== t && this.setValue(t),
                    new Promise(function (t, n) {
                    (e._finishCallback = t), (e._cancelCallback = n), e.open();
                    })
                );
                },
            },
            {
                key: "open",
                value: function () {
                return this.setVisible(!0);
                },
            },
            {
                key: "cancel",
                value: function () {
                return this.setVisible(!1, !0);
                },
            },
            {
                key: "finish",
                value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : void 0;
                return void 0 !== e && this.setValue(e), this.setVisible(!1, !1);
                },
            },
            {
                key: "render",
                value: function () {
                var e = this;
                return (
                    (this._$dialog = this.renderDialog()),
                    (this._$outer = bn.createElement(
                    "div",
                    { className: "modal__outer" },
                    [this._$dialog]
                    )),
                    bn.createElement(
                    "div",
                    { className: "modal", role: "dialog", tabIndex: -1 },
                    [
                        bn.createElement("div", { className: "modal__backdrop" }),
                        bn.createElement(
                        "div",
                        {
                            className: "modal__scrollable",
                            role: "document",
                            onClick: function (t) {
                            t.target === t.currentTarget &&
                                (t.preventDefault(), e.cancel());
                            },
                        },
                        [this._$outer]
                        ),
                    ]
                    )
                );
                },
            },
            {
                key: "renderDialog",
                value: function () {
                return bn.createElement("div", { className: "modal__dialog" }, [
                    this.renderHeader(),
                    this.renderContent(),
                ]);
                },
            },
            {
                key: "renderHeader",
                value: function () {
                var e = this,
                    t = bn.createElement("button", {
                    className: "modal__btn-close",
                    onClick: function (t) {
                        t.preventDefault(), e.cancel();
                    },
                    });
                return (
                    (t.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15 2.41L13.59 1 8 6.59 2.41 1 1 2.41 6.59 8 1 13.59 2.41 15 8 9.41 13.59 15 15 13.59 9.41 8z"/></svg>'),
                    bn.createElement("header", { className: "modal__header" }, [
                    bn.createElement(
                        "span",
                        { className: "modal__title" },
                        this._title
                    ),
                    t,
                    ])
                );
                },
            },
            { key: "renderContent", value: function () {} },
            {
                key: "keyDidPress",
                value: function (e) {
                27 === e.keyCode && (e.preventDefault(), this.cancel());
                },
            },
            ]),
            n
        );
        })(bn),
        Xf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n(e) {
            var r;
            return (
            yt(this, n),
            ((r = t.call(this, "Library"))._library = e),
            (r._filteredLibrary = e),
            (r._categories = {}),
            r
            );
        }
        return (
            bt(n, [
            {
                key: "clearFilter",
                value: function () {
                return (
                    (this._filteredLibrary = this._library), this.refresh(), this
                );
                },
            },
            {
                key: "applyFilter",
                value: function (e) {
                return (
                    (this._filteredLibrary = this._library.filter(e)),
                    this.refresh(),
                    this
                );
                },
            },
            {
                key: "render",
                value: function () {
                var e = At(wt(n.prototype), "render", this).call(this);
                return e.classList.add("modal-library"), e;
                },
            },
            {
                key: "renderContent",
                value: function () {
                return bn.createElement("div", { className: "modal__content" }, [
                    this.renderBricks(),
                ]);
                },
            },
            {
                key: "renderBricks",
                value: function () {
                var e = this,
                    t = [],
                    n = [];
                return (
                    this._filteredLibrary.forEach(function (e) {
                    var r = t.indexOf(e.category);
                    -1 === r ? (t.push(e.category), n.push([e])) : n[r].push(e);
                    }),
                    bn.createElement(
                    "ul",
                    { className: "modal-library__categories" },
                    t.map(function (t, r) {
                        return bn.createElement(
                        "li",
                        { className: "modal-library__category" },
                        [
                            bn.createElement(
                            "span",
                            { className: "modal-library__category-title" },
                            t
                            ),
                            bn.createElement(
                            "ul",
                            { className: "modal-library__bricks" },
                            n[r].map(e.renderBrick.bind(e))
                            ),
                        ]
                        );
                    })
                    )
                );
                },
            },
            {
                key: "renderBrick",
                value: function (e) {
                var t = this;
                return bn.createElement("li", {}, [
                    bn.createElement(
                    "button",
                    {
                        className:
                        "modal-library__brick modal-library__brick--" + e.type,
                        onClick: function (n) {
                        n.preventDefault(), t.finish(e.name);
                        },
                    },
                    [
                        bn.createElement(
                        "span",
                        { className: "modal-library__brick-title" },
                        e.title
                        ),
                    ]
                    ),
                ]);
                },
            },
            ]),
            n
        );
        })(Kf),
        Zf = "pipe__scroll-handle--disabled",
        Yf = "application/vnd.cryptii.brick+json",
        Jf = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e;
            return (
            yt(this, n),
            ((e = t.call(this))._$scrollable = null),
            (e._$content = null),
            (e._draggingBrickView = null),
            (e._draggingTargetIndex = null),
            (e._$pipeParts = []),
            (e._pipePartPositions = []),
            (e._pipePartIndex = []),
            (e._scrollMax = 0),
            (e._scrollPosition = 0),
            (e._scrollHandleIndex = null),
            (e._scrollHandleStartPosition = null),
            (e._scrollHandleStartTime = null),
            e
            );
        }
        return (
            bt(n, [
            {
                key: "render",
                value: function () {
                (this._$content = bn.createElement("div", {
                    className: "pipe__content",
                })),
                    (this._$scrollHandleLeft = bn.createElement("div", {
                    className:
                        "pipe__scroll-handle pipe__scroll-handle--left pipe__scroll-handle--disabled",
                    onMouseEnter: this.scrollHandleDidStart.bind(this, 0),
                    onDragEnter: this.scrollHandleDidStart.bind(this, 0),
                    onMouseLeave: this.scrollHandleDidStop.bind(this),
                    onDragLeave: this.scrollHandleDidStop.bind(this),
                    })),
                    (this._$scrollHandleRight = bn.createElement("div", {
                    className: "pipe__scroll-handle pipe__scroll-handle--right",
                    onMouseEnter: this.scrollHandleDidStart.bind(this, 1),
                    onDragEnter: this.scrollHandleDidStart.bind(this, 1),
                    onMouseLeave: this.scrollHandleDidStop.bind(this),
                    onDragLeave: this.scrollHandleDidStop.bind(this),
                    }));
                var e = document.querySelector(".pipe");
                return (
                    null === e &&
                    (e = bn.createElement("div")).classList.add("pipe"),
                    (e.ondrop = this.dragDidDrop.bind(this)),
                    (e.ondragenter = this.dragDidEnterPipe.bind(this)),
                    (e.ondragover = this.dragDidOverPipe.bind(this)),
                    (this._$scrollable = e.querySelector(".pipe__scrollable")),
                    null === this._$scrollable &&
                    (this._$scrollable = bn.createElement("div", {
                        className: "pipe__scrollable",
                    })),
                    this._$scrollable.appendChild(this._$content),
                    this._$scrollable.appendChild(this._$scrollHandleLeft),
                    this._$scrollable.appendChild(this._$scrollHandleRight),
                    e.appendChild(this._$scrollable),
                    e.addEventListener("wheel", this.mouseDidWheel.bind(this)),
                    e
                );
                },
            },
            {
                key: "appendSubviewElement",
                value: function (e) {
                return e instanceof Jl
                    ? (this.update(), this)
                    : At(wt(n.prototype), "appendSubviewElement", this).call(
                        this,
                        e
                    );
                },
            },
            {
                key: "removeSubviewElement",
                value: function (e) {
                return (
                    At(wt(n.prototype), "removeSubviewElement", this).call(this, e),
                    e instanceof Jl && this.update(),
                    this
                );
                },
            },
            {
                key: "update",
                value: function () {
                var e = this.getModel().getBricks(),
                    t = e.map(function (e) {
                    return e.getView();
                    });
                this.getElement();
                var n,
                    r = this._$content;
                t.forEach(function (e) {
                    var t = e.getElement();
                    t.parentNode && t.parentNode.removeChild(t);
                }),
                    (r.innerHTML = ""),
                    (this._$pipeParts = []),
                    (this._pipePartIndex = []);
                for (var i = [], a = 0; a < e.length; a++)
                    if (e[a].isHidden()) {
                    if (
                        (i.push(e[a]), a + 1 === e.length || !e[a + 1].isHidden())
                    ) {
                        var o = a - i.length + 1;
                        (n = this._createPipePart(o)),
                        this._$pipeParts.push(n),
                        this._pipePartIndex.push(o),
                        r.appendChild(n),
                        r.appendChild(this._createCollapsedPart(i)),
                        (i = []);
                    }
                    } else
                    (n = this._createPipePart(a)),
                        this._$pipeParts.push(n),
                        this._pipePartIndex.push(a),
                        r.appendChild(n),
                        r.appendChild(this._createBrickPart(t[a]));
                return (
                    (n = this._createPipePart(t.length)),
                    this._$pipeParts.push(n),
                    this._pipePartIndex.push(t.length),
                    r.appendChild(n),
                    this.layout(),
                    this
                );
                },
            },
            {
                key: "_createPipePart",
                value: function (e) {
                var t = this;
                return bn.createElement(
                    "button",
                    {
                    className: "pipe__part-pipe",
                    onClick: function (n) {
                        t.getModel().viewAddButtonDidClick(t, e),
                        n.preventDefault();
                    },
                    },
                    [
                    bn.createElement(
                        "div",
                        { className: "pipe__btn-add" },
                        "Add encoder or viewer"
                    ),
                    bn.createElement("div", { className: "pipe__drop-handle" }),
                    ]
                );
                },
            },
            {
                key: "_createBrickPart",
                value: function (e) {
                var t = e.getModel() instanceof qu ? "encoder" : "viewer";
                return bn.createElement(
                    "div",
                    {
                    className: "pipe__part-brick pipe__part-brick--".concat(t),
                    draggable: !0,
                    onMouseDown: this.brickDragWillStart.bind(this, e),
                    onDragStart: this.brickDragDidStart.bind(this, e),
                    onDragEnd: this.brickDragDidEnd.bind(this, e),
                    },
                    e.getElement()
                );
                },
            },
            {
                key: "_createCollapsedPart",
                value: function (e) {
                var t = this;
                return bn.createElement(
                    "button",
                    {
                    className: "pipe__part-collapsed",
                    onClick: function (n) {
                        t.getModel().viewHiddenBrickGroupDidClick(t, e),
                        n.preventDefault();
                    },
                    },
                    e.map(function () {
                    return bn.createElement("div", {
                        className: "pipe__part-collapsed-fold",
                    });
                    })
                );
                },
            },
            {
                key: "isBrickDragEvent",
                value: function (e) {
                var t = e.dataTransfer.types;
                return void 0 !== t.contains
                    ? t.contains(Yf)
                    : -1 !== t.indexOf(Yf);
                },
            },
            {
                key: "isFieldMouseEvent",
                value: function (e) {
                var t = e.target.nodeName.toLowerCase();
                return -1 !== ["textarea", "input"].indexOf(t);
                },
            },
            {
                key: "brickDragWillStart",
                value: function (e, t) {
                if (this.isFieldMouseEvent(t) || !e.getModel().isValid()) {
                    var n = e.getElement().parentNode;
                    n &&
                    ((n.draggable = !1),
                    setTimeout(function () {
                        n.draggable = !0;
                    }, 500));
                }
                },
            },
            {
                key: "brickDragDidStart",
                value: function (e, t) {
                if (!this.isFieldMouseEvent(t) && e.getModel().isValid()) {
                    this._draggingBrickView = e;
                    var n = JSON.stringify(e.getModel().serialize());
                    t.dataTransfer.setData(Yf, n),
                    t.dataTransfer.setData("application/json", n),
                    (t.dataTransfer.effectAllowed = "copyMove");
                }
                },
            },
            {
                key: "brickDragDidEnd",
                value: function (e, t) {
                (this._draggingBrickView = null),
                    this.setDraggingPipePartIndex(null);
                },
            },
            {
                key: "dragDidEnterPipe",
                value: function (e) {
                this.isBrickDragEvent(e) && e.preventDefault();
                },
            },
            {
                key: "dragDidOverPipe",
                value: function (e) {
                if (this.isBrickDragEvent(e)) {
                    e.preventDefault();
                    var t = e.pageX + this._scrollPosition,
                    n = e.pageY,
                    r = null,
                    i = 0;
                    this._pipePartPositions.forEach(function (e, a) {
                    var o = Math.sqrt(
                        Math.pow(t - e.x, 2) + Math.pow(n - e.y, 2)
                    );
                    (null === r || o < r) && ((r = o), (i = a));
                    }),
                    this.setDraggingPipePartIndex(i);
                }
                },
            },
            {
                key: "dragDidDrop",
                value: function (e) {
                if (this.isBrickDragEvent(e)) {
                    e.preventDefault();
                    var t = "copy" === e.dataTransfer.effectAllowed,
                    n = this._pipePartIndex[this._draggingTargetIndex];
                    if (
                    (this.setDraggingPipePartIndex(null),
                    null !== this._draggingBrickView)
                    ) {
                    var r = this._draggingBrickView.getModel();
                    this.getModel().viewBrickDidDrop(this, n, r, t);
                    } else {
                    var i = JSON.parse(e.dataTransfer.getData(Yf));
                    this.getModel().viewBrickDidDrop(this, n, i, t);
                    }
                }
                },
            },
            {
                key: "setDraggingPipePartIndex",
                value: function (e) {
                this._draggingTargetIndex !== e &&
                    (null !== this._draggingTargetIndex &&
                    this._$pipeParts[this._draggingTargetIndex].classList.remove(
                        "pipe__part-pipe--dragging"
                    ),
                    (this._draggingTargetIndex = e),
                    null !== e
                    ? (this._$pipeParts[this._draggingTargetIndex].classList.add(
                        "pipe__part-pipe--dragging"
                        ),
                        this.getElement().classList.add("pipe--dragging"))
                    : this.getElement().classList.remove("pipe--dragging"));
                },
            },
            {
                key: "mouseDidWheel",
                value: function (e) {
                var t = e.deltaX,
                    n = e.deltaY;
                Math.abs(t) <= Math.abs(n) ||
                    (e.preventDefault(), this.scrollTo(this._scrollPosition + t));
                },
            },
            {
                key: "scrollHandleDidStart",
                value: function (e) {
                (this._scrollHandleIndex = e),
                    (this._scrollHandleStartPosition = this._scrollPosition),
                    (this._scrollHandleStartTime = new Date().getTime()),
                    window.requestAnimationFrame(
                    this.scrollHandleDidScroll.bind(this)
                    );
                },
            },
            {
                key: "scrollHandleDidScroll",
                value: function () {
                if (null !== this._scrollHandleIndex) {
                    var e = 0 === this._scrollHandleIndex ? -1 : 1,
                    t =
                        (new Date().getTime() - this._scrollHandleStartTime) / 1e3,
                    n = e * Math.pow(t, 2) * 1e3;
                    this.scrollTo(this._scrollHandleStartPosition + n),
                    window.requestAnimationFrame(
                        this.scrollHandleDidScroll.bind(this)
                    );
                }
                },
            },
            {
                key: "scrollHandleDidStop",
                value: function () {
                (this._scrollHandleIndex = null),
                    (this._scrollHandleStartPosition = null),
                    (this._scrollHandleStartTime = null);
                },
            },
            {
                key: "layout",
                value: function () {
                var e = this;
                At(wt(n.prototype), "layout", this).call(this),
                    (this._scrollMax =
                    this._$content.offsetWidth - this._$scrollable.offsetWidth),
                    this.scrollTo(this._scrollPosition),
                    0 === this._scrollPosition
                    ? this._$scrollHandleLeft.classList.add(Zf)
                    : this._$scrollHandleLeft.classList.remove(Zf),
                    this._scrollPosition === this._scrollMax
                    ? this._$scrollHandleRight.classList.add(Zf)
                    : this._$scrollHandleRight.classList.remove(Zf);
                var t = window.scrollY;
                this._pipePartPositions = this._$pipeParts.map(function (n) {
                    var r = n.getBoundingClientRect();
                    return {
                    x: r.left + 0.5 * r.width + e._scrollPosition,
                    y: r.top + 0.5 * r.height + t,
                    };
                });
                },
            },
            {
                key: "scrollTo",
                value: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                return (
                    (e = parseInt(e)),
                    (e = Math.max(Math.min(e, this._scrollMax), 0)),
                    this._scrollPosition !== e &&
                    (0 === e
                        ? (this._$scrollHandleLeft.classList.add(Zf),
                        this.scrollHandleDidStop())
                        : 0 === this._scrollPosition &&
                        this._$scrollHandleLeft.classList.remove(Zf),
                    e === this._scrollMax
                        ? (this._$scrollHandleRight.classList.add(Zf),
                        this.scrollHandleDidStop())
                        : this._scrollPosition === this._scrollMax &&
                        this._$scrollHandleRight.classList.remove(Zf),
                    (this._$content.style.transform =
                        e > 0 ? "translate(".concat(-e, "px, 0)") : ""),
                    (this._scrollPosition = e)),
                    this
                );
                },
            },
            ]),
            n
        );
        })(bn),
        Qf = (function (e) {
        kt(s, e);
        var t,
            n,
            r,
            i,
            a,
            o = Et(s);
        function s() {
            var e;
            return (
            yt(this, s),
            ((e = o.call(this))._viewPrototype = Jf),
            (e._brickFactory = null),
            (e._service = null),
            (e._id = null),
            (e._url = null),
            (e._title = null),
            (e._description = null),
            (e._bricks = []),
            (e._brickState = []),
            (e._bucketContent = [ql.empty()]),
            (e._bucketListeners = [[]]),
            (e._selectedBucket = 0),
            (e._libraryModalView = null),
            e
            );
        }
        return (
            bt(
            s,
            [
                {
                key: "getId",
                value: function () {
                    return this._id;
                },
                },
                {
                key: "setId",
                value: function (e) {
                    return (this._id = e), this;
                },
                },
                {
                key: "getUrl",
                value: function () {
                    return this._url;
                },
                },
                {
                key: "setUrl",
                value: function (e) {
                    return (this._url = e), this;
                },
                },
                {
                key: "getTitle",
                value: function () {
                    return this._title;
                },
                },
                {
                key: "setTitle",
                value: function (e) {
                    return (this._title = e), this;
                },
                },
                {
                key: "getDescription",
                value: function () {
                    return this._description;
                },
                },
                {
                key: "setDescription",
                value: function (e) {
                    return (this._description = e), this;
                },
                },
                {
                key: "getBrickFactory",
                value: function () {
                    return this._brickFactory;
                },
                },
                {
                key: "setBrickFactory",
                value: function (e) {
                    return (this._brickFactory = e), this;
                },
                },
                {
                key: "getService",
                value: function () {
                    return this._service;
                },
                },
                {
                key: "setService",
                value: function (e) {
                    return (this._service = e), this;
                },
                },
                {
                key: "getLibraryModalView",
                value: function () {
                    if (null === this._libraryModalView) {
                    var e = this.getBrickFactory().getLibrary();
                    this._libraryModalView = new Xf(e);
                    }
                    return this._libraryModalView;
                },
                },
                {
                key: "getLength",
                value: function () {
                    return this._bricks.length;
                },
                },
                {
                key: "getBricks",
                value: function () {
                    return this._bricks.slice();
                },
                },
                {
                key: "getBrick",
                value: function (e) {
                    if (e < 0 || e > this._bricks.length)
                    throw new Error("Brick index is out of bounds.");
                    return this._bricks[e];
                },
                },
                {
                key: "containsBrick",
                value: function (e) {
                    return -1 !== this._bricks.indexOf(e);
                },
                },
                {
                key: "addBrick",
                value: function (e) {
                    return this.spliceBricks(-1, 0, [e]), this;
                },
                },
                {
                key: "addBricks",
                value: function (e) {
                    return this.spliceBricks(-1, 0, e), this;
                },
                },
                {
                key: "duplicateBrick",
                value: function (e) {
                    var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    if (!this.containsBrick(e))
                    throw new Error("Brick is not part of the pipe.");
                    return (
                    null === t && (t = this._bricks.indexOf(e)),
                    this.spliceBricks(t, 0, [e.copy()]),
                    this
                    );
                },
                },
                {
                key: "moveBrick",
                value: function (e, t) {
                    var n = this._bricks.indexOf(e);
                    if (-1 === n) throw new Error("Brick is not part of the pipe.");
                    return (
                    t > n && t--,
                    this.spliceBricks(n, 1),
                    this.spliceBricks(t, 0, [e]),
                    this
                    );
                },
                },
                {
                key: "removeBrick",
                value: function (e) {
                    var t = e;
                    if (e instanceof Du && -1 === (t = this._bricks.indexOf(e)))
                    throw new Error(
                        "Brick is not part of the pipe and thus can't be removed."
                    );
                    return this.spliceBricks(t, 1), this;
                },
                },
                {
                key: "removeBricks",
                value: function (e) {
                    var t = this;
                    return (
                    e
                        .map(function (e) {
                        var n = e;
                        if (e instanceof Du && -1 === (n = t._bricks.indexOf(e)))
                            throw new Error(
                            "Brick is not part of the pipe and thus can't be removed."
                            );
                        return n;
                        })
                        .sort(function (e, t) {
                        return t - e;
                        })
                        .forEach(function (e) {
                        return t.spliceBricks(e, 1);
                        }),
                    this
                    );
                },
                },
                {
                key: "replaceBrick",
                value: function (e, t) {
                    var n = this._bricks.indexOf(e);
                    if (-1 === n)
                    throw new Error(
                        "Can't replace a brick not being part of the pipe."
                    );
                    return this.spliceBricks(n, 1, [t]), this;
                },
                },
                {
                key: "spliceBricks",
                value: function (e, t) {
                    var n = this,
                    r =
                        arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [];
                    (e = e >= 0 ? e : Math.max(this._bricks.length + e + 1, 0)),
                    this._bucketListeners.map(function (e) {
                        return (
                        e.forEach(function (e) {
                            return e.reject("Pipe bricks have been changed.");
                        }),
                        []
                        );
                    }),
                    (r = r.map(function (e) {
                        return e instanceof Du
                        ? e
                        : Du.extract(e, n.getBrickFactory());
                    }));
                    var i = this._bricks.splice.apply(
                    this._bricks,
                    [e, t].concat(r)
                    );
                    this._brickState.splice.apply(
                    this._brickState,
                    [e, t].concat(
                        r.map(function () {
                        return { settingsVersion: 1, busy: !1 };
                        })
                    )
                    );
                    var a = 0,
                    o = 0;
                    if (
                    (r.forEach(function (e) {
                        e.setPipe(n),
                        n.hasView() && n.getView().addSubview(e.getView()),
                        e instanceof qu && a++,
                        eu.trigger("pipeAddBrick", { pipe: n, brick: e });
                    }),
                    i.forEach(function (e) {
                        n.hasView() && n.getView().removeSubview(e.getView()),
                        e.setPipe(null),
                        e instanceof qu && o++,
                        eu.trigger("pipeRemoveBrick", { pipe: n, brick: e });
                    }),
                    a > 0 || o > 0)
                    ) {
                    var s = this._bricks.reduce(function (t, n, r) {
                        return t + (n instanceof qu && r <= e ? 1 : 0);
                    }, 0);
                    0 === s && (s = 1);
                    var l = new Array(a).fill().map(function () {
                        return ql.empty();
                        }),
                        u = this._bucketContent.splice.apply(
                        this._bucketContent,
                        [s, o].concat(l)
                        );
                    if (
                        (this._bucketListeners.splice.apply(
                        this._bucketListeners,
                        [s, o].concat(
                            l.map(function (e) {
                            return [];
                            })
                        )
                        ),
                        this._selectedBucket <= s - 1)
                    )
                        this._propagateContent(s - 1, !0);
                    else if (this._selectedBucket === s && 1 === o && 1 === a)
                        (this._bucketContent[this._selectedBucket] = u[0]),
                        this._propagateContent(this._selectedBucket, !1);
                    else if (this._selectedBucket <= s - 1 + o)
                        (this._selectedBucket = s - 1),
                        this._propagateContent(this._selectedBucket, !0);
                    else {
                        var c = a - o;
                        (this._selectedBucket += c),
                        this._propagateContent(s + a, !1);
                    }
                    } else
                    r.forEach(function (e) {
                        return n._triggerViewerView(e);
                    });
                    return this.hasView() && this.getView().layout(), i;
                },
                },
                {
                key: "getBucketLength",
                value: function () {
                    return this._bucketContent.length;
                },
                },
                {
                key: "getContent",
                value: function () {
                    var e = this,
                    t =
                        arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    n =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                    if (t >= this._bucketContent.length)
                    throw new Error(
                        "Bucket index ".concat(t, " is out of bounds.")
                    );
                    return n && this.isBusy()
                    ? new Promise(function (n, r) {
                        e._bucketListeners[t].push({ resolve: n, reject: r });
                        })
                    : this._bucketContent[t];
                },
                },
                {
                key: "setContent",
                value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n =
                        arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                    return (
                    (e = ql.wrap(e)),
                    this.getContent(t, !1).isEqualTo(e) ||
                        ((this._bucketContent[t] = e),
                        (null === n || n instanceof ud) &&
                        (this._selectedBucket = t),
                        this._propagateContent(t, n)),
                    this
                    );
                },
                },
                {
                key: "_propagateContent",
                value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    n = this.getBricksAttachedToBucket(e),
                    r = n.lowerEncoder,
                    i = n.upperEncoder,
                    a = n.viewers;
                    return (
                    a
                        .filter(function (e) {
                        return e !== t;
                        })
                        .forEach(this._triggerViewerView.bind(this)),
                    null !== r &&
                        !0 !== t &&
                        r !== t &&
                        this._triggerEncoderTranslation(r, !1),
                    null !== i &&
                        !1 !== t &&
                        i !== t &&
                        this._triggerEncoderTranslation(i, !0),
                    this
                    );
                },
                },
                {
                key: "_triggerViewerView",
                value:
                    ((a = vt(
                    regeneratorRuntime.mark(function e(t) {
                        var n, r, i, a, o, s;
                        return regeneratorRuntime.wrap(
                        function (e) {
                            for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                if (!this._getBrickState(t, "busy")) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return", this);
                                case 2:
                                return (
                                    this._setBrickState(t, "busy", !0),
                                    (n = this.getBucketIndexForBrick(t)),
                                    (r = this.getContent(n, !1)),
                                    (i = this._getBrickState(t, "settingsVersion")),
                                    (e.prev = 6),
                                    (e.next = 9),
                                    t.view(r)
                                );
                                case 9:
                                e.next = 14;
                                break;
                                case 11:
                                (e.prev = 11), (e.t0 = e.catch(6)), (a = e.t0);
                                case 14:
                                if (this.containsBrick(t)) {
                                    e.next = 16;
                                    break;
                                }
                                return e.abrupt("return");
                                case 16:
                                if (
                                    (this._setBrickState(t, "busy", !1),
                                    (o = this._getBrickState(t, "settingsVersion")),
                                    (s = this.getBucketIndexForBrick(t)),
                                    (this.getContent(s, !1).isEqualTo(r) &&
                                    i === o) ||
                                    this._triggerViewerView(t),
                                    this.brickDidFinish(t, a),
                                    !a || a instanceof Rl)
                                ) {
                                    e.next = 23;
                                    break;
                                }
                                throw a;
                                case 23:
                                case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[6, 11]]
                        );
                    })
                    )),
                    function (e) {
                    return a.apply(this, arguments);
                    }),
                },
                {
                key: "_triggerEncoderTranslation",
                value:
                    ((i = vt(
                    regeneratorRuntime.mark(function e(t, n) {
                        var r, i, a, o, s, l, u, c, h, d;
                        return regeneratorRuntime.wrap(
                        function (e) {
                            for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                if (!this._getBrickState(t, "busy")) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return", this);
                                case 2:
                                return (
                                    this._setBrickState(t, "busy", !0),
                                    (r = this.getBucketIndexForBrick(t)),
                                    (i = this.getContent(r + (n ? 0 : 1), !1)),
                                    (a = this._getBrickState(t, "settingsVersion")),
                                    (e.prev = 6),
                                    (e.next = 9),
                                    t.translate(i, n)
                                );
                                case 9:
                                (o = e.sent), (e.next = 15);
                                break;
                                case 12:
                                (e.prev = 12), (e.t0 = e.catch(6)), (s = e.t0);
                                case 15:
                                if (this.containsBrick(t)) {
                                    e.next = 17;
                                    break;
                                }
                                return e.abrupt("return");
                                case 17:
                                if (
                                    (this._setBrickState(t, "busy", !1),
                                    (l = this._getBrickState(t, "settingsVersion")),
                                    (u = this.getBucketIndexForBrick(t)),
                                    (c = u + (n ? 0 : 1)),
                                    (h = this.getContent(c, !1)),
                                    (d = u + (n ? 1 : 0)),
                                    !(
                                    (n && this._selectedBucket >= d) ||
                                    (!n && this._selectedBucket <= d)
                                    ))
                                ) {
                                    e.next = 26;
                                    break;
                                }
                                return (
                                    this._triggerEncoderTranslation(t, !n),
                                    e.abrupt("return")
                                );
                                case 26:
                                if (
                                    (s || this.setContent(o, d, t),
                                    (h.isEqualTo(i) && a === l) ||
                                    this._triggerEncoderTranslation(t, n),
                                    this.brickDidFinish(t, s),
                                    !s || s instanceof Rl)
                                ) {
                                    e.next = 31;
                                    break;
                                }
                                throw s;
                                case 31:
                                case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[6, 12]]
                        );
                    })
                    )),
                    function (e, t) {
                    return i.apply(this, arguments);
                    }),
                },
                {
                key: "_getBrickState",
                value: function (e, t) {
                    var n = this._bricks.indexOf(e);
                    if (-1 === n)
                    throw new Error(
                        "Brick is not part of the pipe and thus has no state."
                    );
                    return this._brickState[n][t];
                },
                },
                {
                key: "_setBrickState",
                value: function (e, t, n) {
                    var r = this._bricks.indexOf(e);
                    if (-1 === r)
                    throw new Error(
                        "Brick is not part of the pipe and thus has no state."
                    );
                    return (this._brickState[r][t] = n), this;
                },
                },
                {
                key: "isBusy",
                value: function () {
                    var e = this;
                    return this._bricks.reduce(function (t, n) {
                    return t || e._getBrickState(n, "busy");
                    }, !1);
                },
                },
                {
                key: "getBucketIndexForBrick",
                value: function (e) {
                    for (
                    var t = !1, n = 0, r = -1;
                    !t && ++r < this._bricks.length;

                    )
                    this._bricks[r] === e
                        ? (t = !0)
                        : this._bricks[r] instanceof qu && n++;
                    if (!t)
                    throw new Error(
                        "Can't find bucket for brick. Brick is not part of Pipe."
                    );
                    return n;
                },
                },
                {
                key: "getBricksAttachedToBucket",
                value: function (e) {
                    for (
                    var t, n = null, r = null, i = [], a = 0, o = -1;
                    ++o < this._bricks.length && a <= e;

                    )
                    (t = this._bricks[o]) instanceof qu
                        ? (a === e - 1 ? (n = t) : a === e && (r = t), a++)
                        : a === e && i.push(t);
                    return { lowerEncoder: n, upperEncoder: r, viewers: i };
                },
                },
                {
                key: "viewerContentDidChange",
                value: function (e, t) {
                    if (this.containsBrick(e)) {
                    var n = this.getBucketIndexForBrick(e);
                    this.setContent(t, n, e);
                    }
                },
                },
                {
                key: "brickVisibilityDidChange",
                value: function (e, t) {
                    this.updateView();
                },
                },
                {
                key: "brickSettingDidChange",
                value: function (e) {
                    if (this.containsBrick(e))
                    if (
                        (this._setBrickState(
                        e,
                        "settingsVersion",
                        this._getBrickState(e, "settingsVersion") + 1
                        ),
                        e instanceof qu)
                    ) {
                        var t = this.getBucketIndexForBrick(e),
                        n = this._selectedBucket <= t;
                        this._triggerEncoderTranslation(e, n);
                    } else this._triggerViewerView(e);
                },
                },
                {
                key: "encoderDidReverse",
                value: function (e, t) {
                    if (
                    3 === this._bricks.length &&
                    "viewer" === this._bricks[0].getMeta().type &&
                    "encoder" === this._bricks[1].getMeta().type &&
                    "viewer" === this._bricks[2].getMeta().type
                    ) {
                    var n = this.getContent(1, !1),
                        r = this.spliceBricks(0, 3);
                    r.reverse(),
                        this.setContent(n, 0),
                        this.spliceBricks(0, 0, r);
                    } else this.brickSettingDidChange(e);
                },
                },
                {
                key: "brickDidFinish",
                value: function (e, t) {
                    var n = this;
                    this.isBusy() ||
                    this._bucketListeners.map(function (e, r) {
                        return (
                        e.forEach(function (e) {
                            return null !== t
                            ? e.resolve(n.getContent(r, !1))
                            : e.reject(t);
                        }),
                        []
                        );
                    });
                },
                },
                {
                key: "brickReplaceButtonDidClick",
                value:
                    ((r = vt(
                    regeneratorRuntime.mark(function e(t) {
                        var n, r, i;
                        return regeneratorRuntime.wrap(
                        function (e) {
                            for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                if (
                                    ((n = this.getLibraryModalView()).applyFilter(
                                    function (e) {
                                        return e.type === t.getMeta().type;
                                    }
                                    ),
                                    !n.isVisible())
                                ) {
                                    e.next = 4;
                                    break;
                                }
                                return e.abrupt("return");
                                case 4:
                                return (
                                    (r = t.getMeta().name),
                                    (e.prev = 5),
                                    (e.next = 8),
                                    n.prompt(r)
                                );
                                case 8:
                                (r = e.sent), (e.next = 14);
                                break;
                                case 11:
                                return (
                                    (e.prev = 11),
                                    (e.t0 = e.catch(5)),
                                    e.abrupt("return")
                                );
                                case 14:
                                r !== t.getMeta().name &&
                                    ((i = this.getBrickFactory().create(r)),
                                    t instanceof qu &&
                                    i instanceof qu &&
                                    i.setReverse(t.isReverse()),
                                    this.replaceBrick(t, i));
                                case 15:
                                case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[5, 11]]
                        );
                    })
                    )),
                    function (e) {
                    return r.apply(this, arguments);
                    }),
                },
                {
                key: "viewAddButtonDidClick",
                value:
                    ((n = vt(
                    regeneratorRuntime.mark(function e(t, n) {
                        var r, i, a;
                        return regeneratorRuntime.wrap(
                        function (e) {
                            for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                return (
                                    eu.trigger("pipeAddButtonClick", {
                                    pipe: this,
                                    index: n,
                                    }),
                                    (r = this.getLibraryModalView()).clearFilter(),
                                    (e.prev = 3),
                                    (e.next = 6),
                                    r.prompt()
                                );
                                case 6:
                                (i = e.sent), (e.next = 12);
                                break;
                                case 9:
                                return (
                                    (e.prev = 9),
                                    (e.t0 = e.catch(3)),
                                    e.abrupt("return")
                                );
                                case 12:
                                (a = this.getBrickFactory().create(i)),
                                    this.spliceBricks(n, 0, [a]);
                                case 14:
                                case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 9]]
                        );
                    })
                    )),
                    function (e, t) {
                    return n.apply(this, arguments);
                    }),
                },
                {
                key: "viewBrickDidDrop",
                value: function (e, t, n) {
                    var r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                    n instanceof Du
                    ? r
                        ? this.duplicateBrick(n, t)
                        : this.moveBrick(n, t)
                    : this.spliceBricks(t, 0, [n]),
                    eu.trigger("pipeBrickDrop", {
                        pipe: this,
                        index: t,
                        brick: n,
                        copy: r,
                    });
                },
                },
                {
                key: "viewHiddenBrickGroupDidClick",
                value: function (e, t) {
                    t.forEach(function (e) {
                    return e.setHidden(!1);
                    }),
                    eu.trigger("pipeHiddenBrickGroupClick", {
                        pipe: this,
                        bricks: t,
                    });
                },
                },
                {
                key: "didCreateView",
                value: function (e) {
                    this._bricks.forEach(function (t) {
                    return e.addSubview(t.getView());
                    });
                },
                },
                {
                key: "store",
                value:
                    ((t = vt(
                    regeneratorRuntime.mark(function e() {
                        var t;
                        return regeneratorRuntime.wrap(
                        function (e) {
                            for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                return (
                                    (e.next = 2), this.getService().storePipe(this)
                                );
                                case 2:
                                return (t = e.sent), e.abrupt("return", t.url);
                                case 4:
                                case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                        );
                    })
                    )),
                    function () {
                    return t.apply(this, arguments);
                    }),
                },
                {
                key: "serialize",
                value: function () {
                    var e = {};
                    null !== this._id && (e.id = this._id),
                    null !== this._url && (e.url = this._url),
                    null !== this._title && (e.title = this._title),
                    null !== this._description &&
                        (e.description = this._description),
                    (e.items = this._bricks.map(function (e) {
                        return e.serialize();
                    }));
                    var t = this._selectedBucket,
                    n = this._bucketContent[t];
                    if (!n.isEmpty() || t > 0) {
                    (e.content = {}),
                        n.needsTextEncoding()
                        ? ((e.content.data = Fl.base64StringFromBytes(
                            n.getBytes()
                            )),
                            (e.content.encoding = "base64"))
                        : (e.content.data = n.getString());
                    var r = this.getBricksAttachedToBucket(t).lowerEncoder;
                    null !== r && (e.content.index = this._bricks.indexOf(r) + 1);
                    }
                    return e;
                },
                },
            ],
            [
                {
                key: "extract",
                value: function (e, t) {
                    if (!Array.isArray(e.items) || 0 === e.items.length)
                    throw new Error(
                        "Pipe property 'items' is expected to be of type 'array' and must not be empty"
                    );
                    var n = new s();
                    if (
                    (n.setBrickFactory(t),
                    n.addBricks(e.items),
                    void 0 !== e.id && null !== e.id)
                    ) {
                    if ("number" != typeof e.id)
                        throw new Error(
                        "Optional pipe property 'id' is expected to be of type 'number'"
                        );
                    n.setId(e.id);
                    }
                    if (void 0 !== e.url && null !== e.url) {
                    if ("string" != typeof e.url)
                        throw new Error(
                        "Optional pipe property 'url' is expected to be of type 'string'"
                        );
                    n.setUrl(e.url);
                    }
                    if (void 0 !== e.title && null !== e.title) {
                    if ("string" != typeof e.title)
                        throw new Error(
                        "Optional pipe property 'title' is expected to be of type 'string'"
                        );
                    n.setTitle(e.title);
                    }
                    if (void 0 !== e.description && null !== e.description) {
                    if ("string" != typeof e.description)
                        throw new Error(
                        "Optional pipe property 'description' is expected to be of type 'string'"
                        );
                    n.setDescription(e.description);
                    }
                    var r = "",
                    i = 0;
                    if (void 0 !== e.content && null !== e.content) {
                    if ("object" !== gt(e.content))
                        throw new Error(
                        "Optional pipe property 'content' is expected to be of type 'object'"
                        );
                    if (
                        void 0 === e.content.data ||
                        "string" != typeof e.content.data
                    )
                        throw new Error(
                        "Pipe property 'content.data' is expected to be of type 'string'"
                        );
                    if (
                        void 0 !== e.content.encoding &&
                        "string" != typeof e.content.encoding
                    )
                        throw new Error(
                        "Optional pipe property 'content.encoding' is expected to be of type 'string'"
                        );
                    if (
                        void 0 !== e.content.index &&
                        "number" != typeof e.content.index
                    )
                        throw new Error(
                        "Optional pipe property 'content.index' is expected to be of type 'number'"
                        );
                    var a = e.content.encoding || "text";
                    switch (a) {
                        case "text":
                        r = e.content.data;
                        break;
                        case "base64":
                        r = Fl.bytesFromBase64String(e.content.data);
                        break;
                        default:
                        throw new Error(
                            "Optional pipe property 'content.encoding' is set to an unsupported " +
                            "encoding '".concat(
                                a,
                                "'; Supported values: text, base64"
                            )
                        );
                    }
                    var o = e.content.index || 0;
                    if (o === n.getLength()) i = n.getBucketLength() - 1;
                    else {
                        if (!(o >= 0 && o < n.getLength()))
                        throw new Error(
                            "Optional pipe property 'content.index' is expected to be a number " +
                            "ranging from 0 to ".concat(n.getBucketLength() - 1)
                        );
                        i = n.getBucketIndexForBrick(n.getBrick(o));
                    }
                    }
                    return n.setContent(r, i), n;
                },
                },
            ]
            ),
            s
        );
        })(tu),
        eg = (function () {
        function e(t) {
            yt(this, e), (this._rootEndpoint = "".concat(t, "/").concat("v1"));
        }
        var t, n;
        return (
            bt(e, [
            {
                key: "createSession",
                value:
                ((n = vt(
                    regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (
                                (e.next = 2),
                                window.fetch(
                                    "".concat(this._rootEndpoint, "/session")
                                )
                                );
                            case 2:
                                if ((t = e.sent).ok) {
                                e.next = 5;
                                break;
                                }
                                throw new Error("Unable to create a session");
                            case 5:
                                return e.abrupt("return", t.json());
                            case 6:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function () {
                    return n.apply(this, arguments);
                }),
            },
            {
                key: "storePipe",
                value:
                ((t = vt(
                    regeneratorRuntime.mark(function e(t) {
                    var n, r, i;
                    return regeneratorRuntime.wrap(
                        function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                            case 0:
                                return (e.next = 2), this.createSession();
                            case 2:
                                return (
                                (n = e.sent),
                                (e.next = 5),
                                window.fetch(
                                    "".concat(this._rootEndpoint, "/pipes"),
                                    {
                                    method: "POST",
                                    headers: {
                                        "Content-type":
                                        "application/json; charset=utf-8",
                                        Authorization: "Bearer ".concat(n.token),
                                    },
                                    body: JSON.stringify(t.serialize()),
                                    }
                                )
                                );
                            case 5:
                                if ((r = e.sent).ok) {
                                e.next = 8;
                                break;
                                }
                                throw new Error("Unable to store this pipe");
                            case 8:
                                return (e.next = 10), r.json();
                            case 10:
                                if (void 0 === (i = e.sent).error) {
                                e.next = 13;
                                break;
                                }
                                throw new Error(
                                "Unable to store this pipe: " + i.error.message
                                );
                            case 13:
                                return e.abrupt("return", i);
                            case 14:
                            case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                    );
                    })
                )),
                function (e) {
                    return t.apply(this, arguments);
                }),
            },
            ]),
            e
        );
        })(),
        tg = {
        version: "4.0.8+master.b029d8c",
        scope: "/",
        serviceEndpoint: "https://cryptii.com/api",
        serviceWorkerUrl: null,
        },
        ng = null,
        rg = (function (e) {
        kt(n, e);
        var t = Et(n);
        function n() {
            var e,
            r =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (
            yt(this, n),
            ((e = t.call(this))._viewPrototype = kn),
            (e._pipe = null),
            (e._config = Object.assign(tg, r)),
            (e._service = new eg(e._config.serviceEndpoint)),
            (ng = Ct(e)),
            e
            );
        }
        return (
            bt(
            n,
            [
                {
                key: "run",
                value: function () {
                    var e = this,
                    t =
                        arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    Qh.placeBrowserAttribute(),
                    null !== t
                        ? (this._pipe = Qf.extract(t, Hf.getInstance()))
                        : ((this._pipe = new Qf()),
                        this._pipe.setBrickFactory(Hf.getInstance())),
                    this._pipe.setService(this._service);
                    var n = this.getView();
                    return (
                    n.layout(),
                    setTimeout(n.layout.bind(n), 100),
                    "undefined" != typeof navigator &&
                        "serviceWorker" in navigator &&
                        (this._config.serviceWorkerUrl
                        ? navigator.serviceWorker.register(
                            this._config.serviceWorkerUrl,
                            { scope: this._config.scope }
                            )
                        : navigator.serviceWorker
                            .getRegistrations()
                            .then(function (e) {
                                return e.forEach(function (e) {
                                return e.unregister();
                                });
                            })),
                    Qh.isBrowser() &&
                        document.addEventListener("keydown", function (t) {
                        t.ctrlKey &&
                            "i" === t.key &&
                            (t.preventDefault(), alert(e.debug()));
                        }),
                    this
                    );
                },
                },
                {
                key: "debug",
                value: function () {
                    return JSON.stringify({
                    version: this._config.version,
                    env: Qh.identify(),
                    pipe: this.getPipe().serialize(),
                    });
                },
                },
                {
                key: "getPipe",
                value: function () {
                    return this._pipe;
                },
                },
                {
                key: "didCreateView",
                value: function (e) {
                    e.addSubview(this._pipe.getView());
                },
                },
            ],
            [
                {
                key: "getInstance",
                value: function () {
                    return ng;
                },
                },
            ]
            ),
            n
        );
        })(tu);
    if (
        Qh.isBrowser() &&
        null !== document.querySelector("script[data-cryptii-init]")
    ) {
        var ig = function () {
        var e = document.querySelector("script[data-cryptii-pipe]"),
            t = null !== e ? JSON.parse(e.innerHTML) : null,
            n = document.querySelector("script[data-cryptii-config]"),
            r = null !== n ? JSON.parse(n.innerHTML) : {};
        new rg(r).run(t);
        };
        "loading" !== document.readyState
        ? ig()
        : window.addEventListener("DOMContentLoaded", ig);
    }
    (e.App = rg),
        (e.ArrayUtil = al),
        (e.Brick = Du),
        (e.BrickFactory = Hf),
        (e.ByteEncoder = Fl),
        (e.ByteEncodingError = zl),
        (e.Chain = ql),
        (e.Encoder = qu),
        (e.EnvUtil = Qh),
        (e.EventManager = eu),
        (e.Factory = An),
        (e.Field = nu),
        (e.FieldFactory = Nu),
        (e.Form = Fu),
        (e.GenericError = Ol),
        (e.InvalidInputError = Rl),
        (e.LibraryModalView = Xf),
        (e.MathUtil = $u),
        (e.ModalView = Kf),
        (e.Pipe = Qf),
        (e.Random = il),
        (e.StringUtil = Bl),
        (e.TextEncoder = jl),
        (e.TextEncodingError = Dl),
        (e.View = bn),
        (e.Viewable = tu),
        (e.Viewer = ud),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
    //# sourceMappingURL=cryptii.js.map
