/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundcliptext-borderradius-boxsizing-canvas-contextmenu-emoji-flexbox-htmlimports-json-svg-setclasses !*/
! function (e, n, t) {
    function o(e, n) {
        return typeof e === n
    }

    function r() {
        var e, n, t, r, i, a, s;
        for (var l in w)
            if (w.hasOwnProperty(l)) {
                if (e = [], n = w[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (r = o(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = r : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = r), T.push((r ? "" : "no-") + s.join("-"))
            }
    }

    function i(e) {
        var n = _.className,
            t = Modernizr._config.classPrefix || "";
        if (S && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(o, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? _.className.baseVal = n : _.className = n)
    }

    function a() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function s(e, n) {
        if ("object" == typeof e)
            for (var t in e) b(e, t) && s(t, e[t]);
        else {
            e = e.toLowerCase();
            var o = e.split("."),
                r = Modernizr[o[0]];
            if (2 == o.length && (r = r[o[1]]), "undefined" != typeof r) return Modernizr;
            n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), i([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n)
        }
        return Modernizr
    }

    function l(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function c(e, n) {
        return function () {
            return e.apply(n, arguments)
        }
    }

    function f(e, n, t) {
        var r;
        for (var i in e)
            if (e[i] in n) return t === !1 ? e[i] : (r = n[e[i]], o(r, "function") ? c(r, t || n) : r);
        return !1
    }

    function d(n, t, o) {
        var r;
        if ("getComputedStyle" in e) {
            r = getComputedStyle.call(e, n, t);
            var i = e.console;
            if (null !== r) o && (r = r.getPropertyValue(o));
            else if (i) {
                var a = i.error ? "error" : "log";
                i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else r = !t && n.currentStyle && n.currentStyle[o];
        return r
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function (e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m() {
        var e = n.body;
        return e || (e = a(S ? "svg" : "body"), e.fake = !0), e
    }

    function g(e, t, o, r) {
        var i, s, l, u, c = "modernizr",
            f = a("div"),
            d = m();
        if (parseInt(o, 10))
            for (; o--;) l = a("div"), l.id = r ? r[o] : c + (o + 1), f.appendChild(l);
        return i = a("style"), i.type = "text/css", i.id = "s" + c, (d.fake ? d : f).appendChild(i), d.appendChild(f), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), f.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = _.style.overflow, _.style.overflow = "hidden", _.appendChild(d)), s = t(f, e), d.fake ? (d.parentNode.removeChild(d), _.style.overflow = u, _.offsetHeight) : f.parentNode.removeChild(f), !!s
    }

    function y(n, o) {
        var r = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; r--;)
                if (e.CSS.supports(p(n[r]), o)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; r--;) i.push("(" + p(n[r]) + ":" + o + ")");
            return i = i.join(" or "), g("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == d(e, null, "position")
            })
        }
        return t
    }

    function v(e, n, r, i) {
        function s() {
            f && (delete j.style, delete j.modElem)
        }
        if (i = o(i, "undefined") ? !1 : i, !o(r, "undefined")) {
            var c = y(e, r);
            if (!o(c, "undefined")) return c
        }
        for (var f, d, p, m, g, v = ["modernizr", "tspan", "samp"]; !j.style && v.length;) f = !0, j.modElem = a(v.shift()), j.style = j.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], g = j.style[m], l(m, "-") && (m = u(m)), j.style[m] !== t) {
                if (i || o(r, "undefined")) return s(), "pfx" == n ? m : !0;
                try {
                    j.style[m] = r
                } catch (h) {}
                if (j.style[m] != g) return s(), "pfx" == n ? m : !0
            } return s(), !1
    }

    function h(e, n, t, r, i) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + N.join(a + " ") + a).split(" ");
        return o(n, "string") || o(n, "undefined") ? v(s, n, r, i) : (s = (e + " " + E.join(a + " ") + a).split(" "), f(s, n, t))
    }

    function x(e, n, o) {
        return h(e, t, t, n, o)
    }
    var T = [],
        w = [],
        C = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e])
                }, 0)
            },
            addTest: function (e, n, t) {
                w.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function (e) {
                w.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = C, Modernizr = new Modernizr, Modernizr.addTest("json", "JSON" in e && "parse" in JSON && "stringify" in JSON), Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var _ = n.documentElement;
    Modernizr.addTest("contextmenu", "contextMenu" in _ && "HTMLMenuItemElement" in e);
    var S = "svg" === _.nodeName.toLowerCase();
    Modernizr.addTest("audio", function () {
        var e = a("audio"),
            n = !1;
        try {
            n = !!e.canPlayType, n && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), n.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (t) {}
        return n
    }), Modernizr.addTest("canvas", function () {
        var e = a("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }), Modernizr.addTest("canvastext", function () {
        return Modernizr.canvas === !1 ? !1 : "function" == typeof a("canvas").getContext("2d").fillText
    }), Modernizr.addTest("emoji", function () {
        if (!Modernizr.canvastext) return !1;
        var n = e.devicePixelRatio || 1,
            t = 12 * n,
            o = a("canvas"),
            r = o.getContext("2d");
        return r.fillStyle = "#f00", r.textBaseline = "top", r.font = "32px Arial", r.fillText("🐨", 0, 0), 0 !== r.getImageData(t, t, 1, 1).data[0]
    });
    var b;
    ! function () {
        var e = {}.hasOwnProperty;
        b = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
            return n in e && o(e.constructor.prototype[n], "undefined")
        } : function (n, t) {
            return e.call(n, t)
        }
    }(), C._l = {}, C.on = function (e, n) {
        this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, C._trigger = function (e, n) {
        if (this._l[e]) {
            var t = this._l[e];
            setTimeout(function () {
                var e, o;
                for (e = 0; e < t.length; e++)(o = t[e])(n)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function () {
        C.addTest = s
    }), s("htmlimports", "import" in a("link"));
    var P = "Moz O ms Webkit",
        N = C._config.usePrefixes ? P.split(" ") : [];
    C._cssomPrefixes = N;
    var E = C._config.usePrefixes ? P.toLowerCase().split(" ") : [];
    C._domPrefixes = E;
    var z = {
        elem: a("modernizr")
    };
    Modernizr._q.push(function () {
        delete z.elem
    });
    var j = {
        style: z.elem.style
    };
    Modernizr._q.unshift(function () {
        delete j.style
    }), C.testAllProps = h, C.testAllProps = x, Modernizr.addTest("backgroundcliptext", function () {
        return x("backgroundClip", "text")
    }), Modernizr.addTest("borderradius", x("borderRadius", "0px", !0)), Modernizr.addTest("boxsizing", x("boxSizing", "border-box", !0) && (n.documentMode === t || n.documentMode > 7)), Modernizr.addTest("flexbox", x("flexBasis", "1px", !0)), r(), i(T), delete C.addTest, delete C.addAsyncTest;
    for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
    e.Modernizr = Modernizr
}(window, document);