jQuery.fn.trans = function() {
    var a = arguments[0],
        b = arguments[1] || "";
    if (a) {
        jQuery.each(this, function(c, d) {
            jQuery(["-webkit-", "-moz-", "-o-", "-ms-", ""]).each(function(e, f) {
                jQuery(d).css(f + "transition" + b, a)
            })
        })
    }
};




jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function(e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function(e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t + n;
        return -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n;
        return -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n;
        return r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function(e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function(e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function(e, t, n, r, i) {
        if (t == 0) return n;
        if (t == i) return n + r;
        if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n;
        return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function(e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, r, i) {
        if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n;
        return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        if (!o) o = i * .3;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function(e, t, n, r, i) {
        var s = 1.70158;
        var o = 0;
        var u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        if (!o) o = i * .3 * 1.5;
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u); if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n;
        return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function(e, t, n, r, i, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n;
        return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function(e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function(e, t, n, r, i) {
        if ((t /= i) < 1 / 2.75) {
            return r * 7.5625 * t * t + n
        } else if (t < 2 / 2.75) {
            return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n
        } else if (t < 2.5 / 2.75) {
            return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n
        } else {
            return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        }
    },
    easeInOutBounce: function(e, t, n, r, i) {
        if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n;
        return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
});
window.Modernizr = function(e, t, n) {
    function r(e) {
        g.cssText = e
    }

    function i(e, t) {
        return r(E.join(e + ";") + (t || ""))
    }

    function s(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!o(i, "-") && g[i] !== n) return t == "pfx" ? i : !0
        }
        return !1
    }

    function a(e, t, r) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
        }
        return !1
    }

    function f(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + " " + x.join(r + " ") + r).split(" ");
        return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + T.join(r + " ") + r).split(" "), a(i, t, n))
    }

    function l() {
        h.input = function(n) {
            for (var r = 0, i = n.length; r < i; r++) L[n[r]] = n[r] in y;
            return L.list && (L.list = !! t.createElement("datalist") && !! e.HTMLDataListElement), L
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(e) {
            for (var r = 0, i, s, o, u = e.length; r < u; r++) y.setAttribute("type", s = e[r]), i = y.type !== "text", i && (y.value = b, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && y.style.WebkitAppearance !== n ? (d.appendChild(y), o = t.defaultView, i = o.getComputedStyle && o.getComputedStyle(y, null).WebkitAppearance !== "textfield" && y.offsetHeight !== 0, d.removeChild(y)) : /^(search|tel)$/.test(s) || (/^(url|email)$/.test(s) ? i = y.checkValidity && y.checkValidity() === !1 : i = y.value != b)), k[e[r]] = !! i;
            return k
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var c = "2.6.2",
        h = {}, p = !0,
        d = t.documentElement,
        v = "modernizr",
        m = t.createElement(v),
        g = m.style,
        y = t.createElement("input"),
        b = ":)",
        w = {}.toString,
        E = " -webkit- -moz- -o- -ms- ".split(" "),
        S = "Webkit Moz O ms",
        x = S.split(" "),
        T = S.toLowerCase().split(" "),
        N = {
            svg: "http://www.w3.org/2000/svg"
        }, C = {}, k = {}, L = {}, A = [],
        O = A.slice,
        M, _ = function(e, n, r, i) {
            var s, o, u, a, f = t.createElement("div"),
                l = t.body,
                c = l || t.createElement("body");
            if (parseInt(r, 10))
                while (r--) u = t.createElement("div"), u.id = i ? i[r] : v + (r + 1), f.appendChild(u);
            return s = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), f.id = v, (l ? f : c).innerHTML += s, c.appendChild(f), l || (c.style.background = "", c.style.overflow = "hidden", a = d.style.overflow, d.style.overflow = "hidden", d.appendChild(c)), o = n(f, e), l ? f.parentNode.removeChild(f) : (c.parentNode.removeChild(c), d.style.overflow = a), !! o
        }, D = function(t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t).matches;
            var r;
            return _("@media " + t + " { #" + v + " { position: absolute; } }", function(t) {
                r = (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle)["position"] == "absolute"
            }), r
        }, P = function() {
            function e(e, i) {
                i = i || t.createElement(r[e] || "div"), e = "on" + e;
                var o = e in i;
                return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = s(i[e], "function"), s(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
            }
            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        H = {}.hasOwnProperty,
        B;
    !s(H, "undefined") && !s(H.call, "undefined") ? B = function(e, t) {
        return H.call(e, t)
    } : B = function(e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if (typeof t != "function") throw new TypeError;
        var n = O.call(arguments, 1),
            r = function() {
                if (this instanceof r) {
                    var i = function() {};
                    i.prototype = t.prototype;
                    var s = new i,
                        o = t.apply(s, n.concat(O.call(arguments)));
                    return Object(o) === o ? o : s
                }
                return t.apply(e, n.concat(O.call(arguments)))
            };
        return r
    }), C.flexbox = function() {
        return f("flexWrap")
    }, C.canvas = function() {
        var e = t.createElement("canvas");
        return !!e.getContext && !! e.getContext("2d")
    }, C.canvastext = function() {
        return !!h.canvas && !! s(t.createElement("canvas").getContext("2d").fillText, "function")
    }, C.webgl = function() {
        return !!e.WebGLRenderingContext
    }, C.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : _(["@media (", E.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = e.offsetTop === 9
        }), n
    }, C.geolocation = function() {
        return "geolocation" in navigator
    }, C.postmessage = function() {
        return !!e.postMessage
    }, C.websqldatabase = function() {
        return !!e.openDatabase
    }, C.indexedDB = function() {
        return !!f("indexedDB", e)
    }, C.hashchange = function() {
        return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, C.history = function() {
        return !!e.history && !! history.pushState
    }, C.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, C.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e
    }, C.rgba = function() {
        return r("background-color:rgba(150,255,150,.5)"), o(g.backgroundColor, "rgba")
    }, C.hsla = function() {
        return r("background-color:hsla(120,40%,100%,.5)"), o(g.backgroundColor, "rgba") || o(g.backgroundColor, "hsla")
    }, C.multiplebgs = function() {
        return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
    }, C.backgroundsize = function() {
        return f("backgroundSize")
    }, C.borderimage = function() {
        return f("borderImage")
    }, C.borderradius = function() {
        return f("borderRadius")
    }, C.boxshadow = function() {
        return f("boxShadow")
    }, C.textshadow = function() {
        return t.createElement("div").style.textShadow === ""
    }, C.opacity = function() {
        return i("opacity:.55"), /^0.55$/.test(g.opacity)
    }, C.cssanimations = function() {
        return f("animationName")
    }, C.csscolumns = function() {
        return f("columnCount")
    }, C.cssgradients = function() {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + E.join(n + e)).slice(0, -e.length)), o(g.backgroundImage, "gradient")
    }, C.cssreflections = function() {
        return f("boxReflect")
    }, C.csstransforms = function() {
        return !!f("transform")
    }, C.csstransforms3d = function() {
        var e = !! f("perspective");
        return e && "webkitPerspective" in d.style && _("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
            e = t.offsetLeft === 9 && t.offsetHeight === 3
        }), e
    }, C.csstransitions = function() {
        return f("transition")
    }, C.fontface = function() {
        var e;
        return _('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
            var i = t.getElementById("smodernizr"),
                s = i.sheet || i.styleSheet,
                o = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
            e = /src/i.test(o) && o.indexOf(r.split(" ")[0]) === 0
        }), e
    }, C.generatedcontent = function() {
        var e;
        return _(["#", v, "{font:0/0 a}#", v, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }), e
    }, C.video = function() {
        var e = t.createElement("video"),
            n = !1;
        try {
            if (n = !! e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (r) {}
        return n
    }, C.audio = function() {
        var e = t.createElement("audio"),
            n = !1;
        try {
            if (n = !! e.canPlayType) n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (r) {}
        return n
    }, C.localstorage = function() {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, C.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, C.webworkers = function() {
        return !!e.Worker
    }, C.applicationcache = function() {
        return !!e.applicationCache
    }, C.svg = function() {
        return !!t.createElementNS && !! t.createElementNS(N.svg, "svg").createSVGRect
    }, C.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
    }, C.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
    }, C.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
    };
    for (var j in C) B(C, j) && (M = j.toLowerCase(), h[M] = C[j](), A.push((h[M] ? "" : "no-") + M));
    return h.input || l(), h.addTest = function(e, t) {
        if (typeof e == "object")
            for (var r in e) B(e, r) && h.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (h[e] !== n) return h;
            t = typeof t == "function" ? t() : t, typeof p != "undefined" && p && (d.className += " " + (t ? "" : "no-") + e), h[e] = t
        }
        return h
    }, r(""), m = y = null,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = g.elements;
            return typeof e == "string" ? e.split(" ") : e
        }

        function i(e) {
            var t = v[e[p]];
            return t || (t = {}, d++, e[p] = d, v[d] = t), t
        }

        function s(e, n, r) {
            n || (n = t);
            if (m) return n.createElement(e);
            r || (r = i(n));
            var s;
            return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
        }

        function o(e, n) {
            e || (e = t);
            if (m) return e.createDocumentFragment();
            n = n || i(e);
            var s = n.frag.cloneNode(),
                o = 0,
                u = r(),
                a = u.length;
            for (; o < a; o++) s.createElement(u[o]);
            return s
        }

        function u(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return g.shivMethods ? s(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(g, t.frag)
        }

        function a(e) {
            e || (e = t);
            var r = i(e);
            return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !! n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
        }
        var f = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h, p = "_html5shiv",
            d = 0,
            v = {}, m;
        (function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden" in e, m = e.childNodes.length == 1 || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                }()
            } catch (n) {
                h = !0, m = !0
            }
        })();
        var g = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: m,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: s,
            createDocumentFragment: o
        };
        e.html5 = g, a(t)
    }(this, t), h._version = c, h._prefixes = E, h._domPrefixes = T, h._cssomPrefixes = x, h.mq = D, h.hasEvent = P, h.testProp = function(e) {
        return u([e])
    }, h.testAllProps = f, h.testStyles = _, h.prefixed = function(e, t, n) {
        return t ? f(e, t, n) : f(e, "pfx")
    }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + A.join(" ") : ""), h
}(this, this.document),
function(e, t, n) {
    function r(e) {
        return "[object Function]" == d.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }

    function s() {}

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function u() {
        var e = v.shift();
        m = 1, e ? e.t ? h(function() {
            ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), u()) : m = 0
    }

    function a(e, n, r, i, s, a, f) {
        function l(t) {
            if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                "img" != e && h(function() {
                    b.removeChild(c)
                }, 50);
                for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }
        var f = f || k.errorTimeout,
            c = t.createElement(e),
            d = 0,
            g = 0,
            w = {
                t: r,
                s: n,
                e: s,
                a: a,
                x: f
            };
        1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function() {
            l.call(this, g)
        }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
    }

    function f(e, t, n, r, s) {
        return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
    }

    function l() {
        var e = k;
        return e.loader = {
            load: f,
            i: 0
        }, e
    }
    var c = t.documentElement,
        h = e.setTimeout,
        p = t.getElementsByTagName("script")[0],
        d = {}.toString,
        v = [],
        m = 0,
        g = "MozAppearance" in c.style,
        y = g && !! t.createRange().compareNode,
        b = y ? c : p.parentNode,
        c = e.opera && "[object Opera]" == d.call(e.opera),
        c = !! t.attachEvent && !c,
        w = g ? "object" : c ? "script" : "img",
        E = c ? "script" : w,
        S = Array.isArray || function(e) {
            return "[object Array]" == d.call(e)
        }, x = [],
        T = {}, N = {
            timeout: function(e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        }, C, k;
    k = function(e) {
        function t(e) {
            var e = e.split("!"),
                t = x.length,
                n = e.pop(),
                r = e.length,
                n = {
                    url: n,
                    origUrl: n,
                    prefixes: e
                }, i, s, o;
            for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
            for (s = 0; s < t; s++) n = x[s](n);
            return n
        }

        function o(e, i, s, o, u) {
            var a = t(e),
                f = a.autoCallback;
            a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function() {
                l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
            })))
        }

        function u(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e)) n || (f = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    }), o(e, f, t, 0, u);
                    else if (Object(e) === e)
                        for (p in h = function() {
                            var t = 0,
                                n;
                            for (n in e) e.hasOwnProperty(n) && t++;
                            return t
                        }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function() {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        } : f[p] = function(e) {
                            return function() {
                                var t = [].slice.call(arguments);
                                e && e.apply(this, t), c()
                            }
                        }(l[p])), o(e[p], f, t, p, u))
                } else !n && c()
            }
            var u = !! e.test,
                a = e.load || e.both,
                f = e.callback || s,
                l = f,
                c = e.complete || s,
                h, p;
            n(u ? e.yep : e.nope, !! a), a && n(a)
        }
        var a, f, c = this.yepnope.loader;
        if (i(e)) o(e, 0, c, 0);
        else if (S(e))
            for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
        else Object(e) === e && u(e, c)
    }, k.addPrefix = function(e, t) {
        N[e] = t
    }, k.addFilter = function(e) {
        x.push(e)
    }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function() {
        t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
    }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function(e, n, r, i, a, f) {
        var l = t.createElement("script"),
            c, d, i = i || k.errorTimeout;
        l.src = e;
        for (d in r) l.setAttribute(d, r[d]);
        n = f ? u : n || s, l.onreadystatechange = l.onload = function() {
            !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
        }, h(function() {
            c || (c = 1, n(1))
        }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
    }, e.yepnope.injectCss = function(e, n, r, i, o, a) {
        var i = t.createElement("link"),
            f, n = a ? u : n || s;
        i.href = e, i.rel = "stylesheet", i.type = "text/css";
        for (f in r) i.setAttribute(f, r[f]);
        o || (p.parentNode.insertBefore(i, p), h(n, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
(function(e, t, n) {
    "use strict";
    var r = e.document,
        i = e.Modernizr,
        s = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, o = "Moz Webkit O Ms".split(" "),
        u = function(e) {
            var t = r.documentElement.style,
                n;
            if (typeof t[e] == "string") return e;
            e = s(e);
            for (var i = 0, u = o.length; i < u; i++) {
                n = o[i] + e;
                if (typeof t[n] == "string") return n
            }
        }, a = u("transform"),
        f = u("transitionProperty"),
        l = {
            csstransforms: function() {
                return !!a
            },
            csstransforms3d: function() {
                var e = !! u("perspective");
                if (e) {
                    var n = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        r = "@media (" + n.join("transform-3d),(") + "modernizr)",
                        i = t("<style>" + r + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                        s = t('<div id="modernizr" />').appendTo("html");
                    e = s.height() === 3, s.remove(), i.remove()
                }
                return e
            },
            csstransitions: function() {
                return !!f
            }
        }, c;
    if (i)
        for (c in l) i.hasOwnProperty(c) || i.addTest(c, l[c]);
    else {
        i = e.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var h = " ",
            p;
        for (c in l) p = l[c](), i[c] = p, h += " " + (p ? "" : "no-") + c;
        t("html").addClass(h)
    } if (i.csstransforms) {
        var d = i.csstransforms3d ? {
            translate: function(e) {
                return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) "
            },
            scale: function(e) {
                return "scale3d(" + e + ", " + e + ", 1) "
            }
        } : {
            translate: function(e) {
                return "translate(" + e[0] + "px, " + e[1] + "px) "
            },
            scale: function(e) {
                return "scale(" + e + ") "
            }
        }, v = function(e, n, r) {
                var i = t.data(e, "isoTransform") || {}, s = {}, o, u = {}, f;
                s[n] = r, t.extend(i, s);
                for (o in i) f = i[o], u[o] = d[o](f);
                var l = u.translate || "",
                    c = u.scale || "",
                    h = l + c;
                t.data(e, "isoTransform", i), e.style[a] = h
            };
        t.cssNumber.scale = !0, t.cssHooks.scale = {
            set: function(e, t) {
                v(e, "scale", t)
            },
            get: function(e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.scale ? r.scale : 1
            }
        }, t.fx.step.scale = function(e) {
            t.cssHooks.scale.set(e.elem, e.now + e.unit)
        }, t.cssNumber.translate = !0, t.cssHooks.translate = {
            set: function(e, t) {
                v(e, "translate", t)
            },
            get: function(e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.translate ? r.translate : [0, 0]
            }
        }
    }
    var m, g;
    i.csstransitions && (m = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[f], g = u("transitionDuration"));
    var y = t.event,
        b = t.event.handle ? "handle" : "dispatch",
        w;
    y.special.smartresize = {
        setup: function() {
            t(this).bind("resize", y.special.smartresize.handler)
        },
        teardown: function() {
            t(this).unbind("resize", y.special.smartresize.handler)
        },
        handler: function(e, t) {
            var n = this,
                r = arguments;
            e.type = "smartresize", w && clearTimeout(w), w = setTimeout(function() {
                y[b].apply(n, r)
            }, t === "execAsap" ? 0 : 100)
        }
    }, t.fn.smartresize = function(e) {
        return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
    }, t.Isotope = function(e, n, r) {
        this.element = t(n), this._create(e), this._init(r)
    };
    var E = ["width", "height"],
        S = t(e);
    t.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, t.Isotope.prototype = {
        _create: function(e) {
            this.options = t.extend({}, t.Isotope.settings, e), this.styleQueue = [], this.elemCount = 0;
            var n = this.element[0].style;
            this.originalStyle = {};
            var r = E.slice(0);
            for (var i in this.options.containerStyle) r.push(i);
            for (var s = 0, o = r.length; s < o; s++) i = r[s], this.originalStyle[i] = n[i] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var u = {
                "original-order": function(e, t) {
                    return t.elemCount++, t.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = t.extend(this.options.getSortData, u), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var a = this;
            setTimeout(function() {
                a.element.addClass(a.options.containerClass)
            }, 0), this.options.resizable && S.bind("smartresize.isotope", function() {
                a.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(e) {
            var t = this.options.itemSelector,
                n = t ? e.filter(t).add(e.find(t)) : e,
                r = {
                    position: "absolute"
                };
            return n = n.filter(function(e, t) {
                return t.nodeType === 1
            }), this.usingTransforms && (r.left = 0, r.top = 0), n.css(r).addClass(this.options.itemClass), this.updateSortData(n, !0), n
        },
        _init: function(e) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(e)
        },
        option: function(e) {
            if (t.isPlainObject(e)) {
                this.options = t.extend(!0, this.options, e);
                var n;
                for (var r in e) n = "_update" + s(r), this[n] && this[n]()
            }
        },
        _updateAnimationEngine: function() {
            var e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                t;
            switch (e) {
                case "css":
                case "none":
                    t = !1;
                    break;
                case "jquery":
                    t = !0;
                    break;
                default:
                    t = !i.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var e = this.usingTransforms = this.options.transformsEnabled && i.csstransforms && i.csstransitions && !this.isUsingJQueryAnimation;
            e || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = e ? this._translate : this._positionAbs
        },
        _filter: function(e) {
            var t = this.options.filter === "" ? "*" : this.options.filter;
            if (!t) return e;
            var n = this.options.hiddenClass,
                r = "." + n,
                i = e.filter(r),
                s = i;
            if (t !== "*") {
                s = i.filter(t);
                var o = e.not(r).not(t).addClass(n);
                this.styleQueue.push({
                    $el: o,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: s,
                style: this.options.visibleStyle
            }), s.removeClass(n), e.filter(t)
        },
        updateSortData: function(e, n) {
            var r = this,
                i = this.options.getSortData,
                s, o;
            e.each(function() {
                s = t(this), o = {};
                for (var e in i)!n && e === "original-order" ? o[e] = t.data(this, "isotope-sort-data")[e] : o[e] = i[e](s, r);
                t.data(this, "isotope-sort-data", o)
            })
        },
        _sort: function() {
            var e = this.options.sortBy,
                t = this._getSorter,
                n = this.options.sortAscending ? 1 : -1,
                r = function(r, i) {
                    var s = t(r, e),
                        o = t(i, e);
                    return s === o && e !== "original-order" && (s = t(r, "original-order"), o = t(i, "original-order")), (s > o ? 1 : s < o ? -1 : 0) * n
                };
            this.$filteredAtoms.sort(r)
        },
        _getSorter: function(e, n) {
            return t.data(e, "isotope-sort-data")[n]
        },
        _translate: function(e, t) {
            return {
                translate: [e, t]
            }
        },
        _positionAbs: function(e, t) {
            return {
                left: e,
                top: t
            }
        },
        _pushPosition: function(e, t, n) {
            t = Math.round(t + this.offset.left), n = Math.round(n + this.offset.top);
            var r = this.getPositionStyles(t, n);
            this.styleQueue.push({
                $el: e,
                style: r
            }), this.options.itemPositionDataEnabled && e.data("isotope-item-position", {
                x: t,
                y: n
            })
        },
        layout: function(e, t) {
            var n = this.options.layoutMode;
            this["_" + n + "Layout"](e);
            if (this.options.resizesContainer) {
                var r = this["_" + n + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: r
                })
            }
            this._processStyleQueue(e, t), this.isLaidOut = !0
        },
        _processStyleQueue: function(e, n) {
            var r = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                s = this.options.animationOptions,
                o = this.options.onLayout,
                u, a, f, l;
            a = function(e, t) {
                t.$el[r](t.style, s)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) a = function(e, t) {
                u = t.$el.hasClass("no-transition") ? "css" : r, t.$el[u](t.style, s)
            };
            else if (n || o || s.complete) {
                var c = !1,
                    h = [n, o, s.complete],
                    p = this;
                f = !0, l = function() {
                    if (c) return;
                    var t;
                    for (var n = 0, r = h.length; n < r; n++) t = h[n], typeof t == "function" && t.call(p.element, e, p);
                    c = !0
                };
                if (this.isUsingJQueryAnimation && r === "animate") s.complete = l, f = !1;
                else if (i.csstransitions) {
                    var d = 0,
                        v = this.styleQueue[0],
                        y = v && v.$el,
                        b;
                    while (!y || !y.length) {
                        b = this.styleQueue[d++];
                        if (!b) return;
                        y = b.$el
                    }
                    var w = parseFloat(getComputedStyle(y[0])[g]);
                    w > 0 && (a = function(e, t) {
                        t.$el[r](t.style, s).one(m, l)
                    }, f = !1)
                }
            }
            t.each(this.styleQueue, a), f && l(), this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(e) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, e)
        },
        addItems: function(e, t) {
            var n = this._getAtoms(e);
            this.$allAtoms = this.$allAtoms.add(n), t && t(n)
        },
        insert: function(e, t) {
            this.element.append(e);
            var n = this;
            this.addItems(e, function(e) {
                var r = n._filter(e);
                n._addHideAppended(r), n._sort(), n.reLayout(), n._revealAppended(r, t)
            })
        },
        appended: function(e, t) {
            var n = this;
            this.addItems(e, function(e) {
                n._addHideAppended(e), n.layout(e), n._revealAppended(e, t)
            })
        },
        _addHideAppended: function(e) {
            this.$filteredAtoms = this.$filteredAtoms.add(e), e.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(e, t) {
            var n = this;
            setTimeout(function() {
                e.removeClass("no-transition"), n.styleQueue.push({
                    $el: e,
                    style: n.options.visibleStyle
                }), n._isInserting = !1, n._processStyleQueue(e, t)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(e, t) {
            this.$allAtoms = this.$allAtoms.not(e), this.$filteredAtoms = this.$filteredAtoms.not(e);
            var n = this,
                r = function() {
                    e.remove(), t && t.call(n.element)
                };
            e.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(r)) : r()
        },
        shuffle: function(e) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(e)
        },
        destroy: function() {
            var e = this.usingTransforms,
                t = this.options;
            this.$allAtoms.removeClass(t.hiddenClass + " " + t.itemClass).each(function() {
                var t = this.style;
                t.position = "", t.top = "", t.left = "", t.opacity = "", e && (t[a] = "")
            });
            var n = this.element[0].style;
            for (var r in this.originalStyle) n[r] = this.originalStyle[r];
            this.element.unbind(".isotope").undelegate("." + t.hiddenClass, "click").removeClass(t.containerClass).removeData("isotope"), S.unbind(".isotope")
        },
        _getSegments: function(e) {
            var t = this.options.layoutMode,
                n = e ? "rowHeight" : "columnWidth",
                r = e ? "height" : "width",
                i = e ? "rows" : "cols",
                o = this.element[r](),
                u, a = this.options[t] && this.options[t][n] || this.$filteredAtoms["outer" + s(r)](!0) || o;
            u = Math.floor(o / a), u = Math.max(u, 1), this[t][i] = u, this[t][n] = a
        },
        _checkIfSegmentsChanged: function(e) {
            var t = this.options.layoutMode,
                n = e ? "rows" : "cols",
                r = this[t][n];
            return this._getSegments(e), this[t][n] !== r
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var e = this.masonry.cols;
            this.masonry.colYs = [];
            while (e--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(e) {
            var n = this,
                r = n.masonry;
            e.each(function() {
                var e = t(this),
                    i = Math.ceil(e.outerWidth(!0) / r.columnWidth);
                i = Math.min(i, r.cols);
                if (i === 1) n._masonryPlaceBrick(e, r.colYs);
                else {
                    var s = r.cols + 1 - i,
                        o = [],
                        u, a;
                    for (a = 0; a < s; a++) u = r.colYs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryPlaceBrick(e, o)
                }
            })
        },
        _masonryPlaceBrick: function(e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for (var i = 0, s = t.length; i < s; i++)
                if (t[i] === n) {
                    r = i;
                    break
                }
            var o = this.masonry.columnWidth * r,
                u = n;
            this._pushPosition(e, o, u);
            var a = n + e.outerHeight(!0),
                f = this.masonry.cols + 1 - s;
            for (i = 0; i < f; i++) this.masonry.colYs[r + i] = a
        },
        _masonryGetContainerSize: function() {
            var e = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: e
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(e) {
            var n = this,
                r = this.element.width(),
                i = this.fitRows;
            e.each(function() {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.x !== 0 && s + i.x > r && (i.x = 0, i.y = i.height), n._pushPosition(e, i.x, i.y), i.height = Math.max(i.y + o, i.height), i.x += s
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function(e) {
            var n = this,
                r = this.cellsByRow;
            e.each(function() {
                var e = t(this),
                    i = r.index % r.cols,
                    s = Math.floor(r.index / r.cols),
                    o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                    u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(e) {
            var n = this;
            e.each(function(e) {
                var r = t(this);
                n._pushPosition(r, 0, n.straightDown.y), n.straightDown.y += r.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var e = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (e--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(e) {
            var n = this,
                r = n.masonryHorizontal;
            e.each(function() {
                var e = t(this),
                    i = Math.ceil(e.outerHeight(!0) / r.rowHeight);
                i = Math.min(i, r.rows);
                if (i === 1) n._masonryHorizontalPlaceBrick(e, r.rowXs);
                else {
                    var s = r.rows + 1 - i,
                        o = [],
                        u, a;
                    for (a = 0; a < s; a++) u = r.rowXs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryHorizontalPlaceBrick(e, o)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for (var i = 0, s = t.length; i < s; i++)
                if (t[i] === n) {
                    r = i;
                    break
                }
            var o = n,
                u = this.masonryHorizontal.rowHeight * r;
            this._pushPosition(e, o, u);
            var a = n + e.outerWidth(!0),
                f = this.masonryHorizontal.rows + 1 - s;
            for (i = 0; i < f; i++) this.masonryHorizontal.rowXs[r + i] = a
        },
        _masonryHorizontalGetContainerSize: function() {
            var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: e
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(e) {
            var n = this,
                r = this.element.height(),
                i = this.fitColumns;
            e.each(function() {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.y !== 0 && o + i.y > r && (i.x = i.width, i.y = 0), n._pushPosition(e, i.x, i.y), i.width = Math.max(i.x + s, i.width), i.y += o
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function(e) {
            var n = this,
                r = this.cellsByColumn;
            e.each(function() {
                var e = t(this),
                    i = Math.floor(r.index / r.rows),
                    s = r.index % r.rows,
                    o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                    u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(e) {
            var n = this;
            e.each(function(e) {
                var r = t(this);
                n._pushPosition(r, n.straightAcross.x, 0), n.straightAcross.x += r.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    }, t.fn.imagesLoaded = function(e) {
        function n() {
            e.call(i, s)
        }

        function r(e) {
            var i = e.target;
            i.src !== u && t.inArray(i, a) === -1 && (a.push(i), --o <= 0 && (setTimeout(n), s.unbind(".imagesLoaded", r)))
        }
        var i = this,
            s = i.find("img").add(i.filter("img")),
            o = s.length,
            u = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            a = [];
        return o || n(), s.bind("load.imagesLoaded error.imagesLoaded", r).each(function() {
            var e = this.src;
            this.src = u, this.src = e
        }), i
    };
    var x = function(t) {
        e.console && e.console.error(t)
    };
    t.fn.isotope = function(e, n) {
        if (typeof e == "string") {
            var r = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var n = t.data(this, "isotope");
                if (!n) {
                    x("cannot call methods on isotope prior to initialization; attempted to call method '" + e + "'");
                    return
                }
                if (!t.isFunction(n[e]) || e.charAt(0) === "_") {
                    x("no such method '" + e + "' for isotope instance");
                    return
                }
                n[e].apply(n, r)
            })
        } else this.each(function() {
            var r = t.data(this, "isotope");
            r ? (r.option(e), r._init(n)) : t.data(this, "isotope", new t.Isotope(e, this, n))
        });
        return this
    }
})(window, jQuery);
(function(e) {
    e.fn.appear = function(t) {
        var r = {
            zero: 0,
            ten: 10,
            twenty: 20,
            thirty: 30,
            fourty: 40,
            fifty: 50,
            sixty: 60,
            seventy: 70,
            eighty: 80,
            ninety: 90,
            hundred: 100
        };
        var i = e.extend({
            data: undefined,
            once: false,
            percentage: 50,
            forEachVisible: function(e, t) {},
            appear: function() {},
            disappear: function() {},
            initialized: false
        }, t);
        return this.each(function(t, s) {
            var o = e(this),
                u = i.percentage;
            for (n in r) {
                if (o.hasClass(n)) {
                    u = r[n];
                    break
                }
            }
            e(window).load(function() {
                o.appeared = false;
                var n = e(window);
                var r = function() {
                    if (!o.is(":visible")) {
                        o.appeared = false;
                        return
                    }
                    var e = n.scrollLeft();
                    var r = n.scrollTop();
                    var s = e + n.width();
                    var a = r + n.height();
                    var f = o.offset();
                    var l = f.left;
                    var c = l + o.width();
                    var h = f.top;
                    var p = h + o.height();
                    var d = r > h && r < p ? r - h : 0;
                    var v = a < p && a > h ? p - a : 0;
                    var m = d + v;
                    var g = Math.round((o.height() - m) / o.height() * 100);
                    if (g >= u && p >= r && h <= a && c >= e && l <= s) {
                        if (!o.appeared) {
                            if (!i.initialized) i.forEachVisible(t, o);
                            o.trigger("appear", i.data)
                        }
                    } else {
                        if (o.appeared) o.trigger("disappear", i.data);
                        o.appeared = false
                    }
                };
                var s = function() {
                    o.appeared = true;
                    if (i.once) {
                        n.unbind("scroll", r);
                        n.unbind("resize", r);
                        var t = e.inArray(r, e.fn.appear.checks);
                        if (t >= 0) e.fn.appear.checks.splice(t, 1)
                    }
                    i.appear.apply(this, arguments)
                };
                var a = function() {
                    o.appeared = false;
                    i.disappear.apply(this, arguments)
                };
                if (i.once) o.one("appear", i.data, s);
                else {
                    o.bind("appear", i.data, s);
                    o.bind("disappear", i.data, a)
                }
                n.scroll(r);
                n.resize(r);
                e.fn.appear.checks.push(r);
                r()
            })
        })
    };
    e.extend(e.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var t = e.fn.appear.checks.length;
            if (t > 0)
                while (t--) e.fn.appear.checks[t]()
        },
        run: function() {
            if (e.fn.appear.timeout) clearTimeout(e.fn.appear.timeout);
            e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    });
    e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(t, n) {
        var r = e.fn[n];
        if (r) {
            e.fn[n] = function() {
                var t = r.apply(this, arguments);
                e.fn.appear.run();
                return t
            }
        }
    })
})(jQuery);
(function(e) {
    var t = {
        vertical: !1,
        rtl: !1,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: "normal",
        easing: "swing",
        auto: 0,
        wrap: null,
        initCallback: null,
        setupCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        animationStepCallback: null,
        buttonNextHTML: "<div></div>",
        buttonPrevHTML: "<div></div>",
        buttonNextEvent: "click",
        buttonPrevEvent: "click",
        buttonNextCallback: null,
        buttonPrevCallback: null,
        itemFallbackDimension: null
    }, n = !1;
    e(window).bind("load.jcarousel", function() {
        n = !0
    });
    e.jcarousel = function(r, i) {
        this.options = e.extend({}, t, i || {});
        this.autoStopped = this.locked = !1;
        this.buttonPrevState = this.buttonNextState = this.buttonPrev = this.buttonNext = this.list = this.clip = this.container = null;
        if (!i || i.rtl === void 0) this.options.rtl = (e(r).attr("dir") || e("html").attr("dir") || "").toLowerCase() == "rtl";
        this.wh = !this.options.vertical ? "width" : "height";
        this.lt = !this.options.vertical ? this.options.rtl ? "right" : "left" : "top";
        for (var s = "", o = r.className.split(" "), u = 0; u < o.length; u++)
            if (o[u].indexOf("jcarousel-skin") != -1) {
                e(r).removeClass(o[u]);
                s = o[u];
                break
            }
        r.nodeName.toUpperCase() == "UL" || r.nodeName.toUpperCase() == "OL" ? (this.list = e(r), this.clip = this.list.parents(".jcarousel-clip"), this.container = this.list.parents(".jcarousel-container")) : (this.container = e(r), this.list = this.container.find("ul,ol").eq(0), this.clip = this.container.find(".jcarousel-clip"));
        if (this.clip.size() === 0) this.clip = this.list.wrap("<div></div>").parent();
        if (this.container.size() === 0) this.container = this.clip.wrap("<div></div>").parent();
        s !== "" && this.container.parent()[0].className.indexOf("jcarousel-skin") == -1 && this.container.wrap('<div class=" ' + s + '"></div>');
        this.buttonPrev = e(".jcarousel-prev", this.container);
        if (this.buttonPrev.size() === 0 && this.options.buttonPrevHTML !== null) this.buttonPrev = e(this.options.buttonPrevHTML).appendTo(this.container);
        this.buttonPrev.addClass(this.className("jcarousel-prev"));
        this.buttonNext = e(".jcarousel-next", this.container);
        if (this.buttonNext.size() === 0 && this.options.buttonNextHTML !== null) this.buttonNext = e(this.options.buttonNextHTML).appendTo(this.container);
        this.buttonNext.addClass(this.className("jcarousel-next"));
        this.clip.addClass(this.className("jcarousel-clip")).css({
            position: "relative"
        });
        this.list.addClass(this.className("jcarousel-list")).css({
            overflow: "hidden",
            position: "relative",
            top: 0,
            margin: 0,
            padding: 0
        }).css(this.options.rtl ? "right" : "left", 0);
        this.container.addClass(this.className("jcarousel-container")).css({
            position: "relative"
        });
        !this.options.vertical && this.options.rtl && this.container.addClass("jcarousel-direction-rtl").attr("dir", "rtl");
        var a = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null,
            s = this.list.children("li"),
            f = this;
        if (s.size() > 0) {
            var l = 0,
                c = this.options.offset;
            s.each(function() {
                f.format(this, c++);
                l += f.dimension(this, a)
            });
            this.list.css(this.wh, l + 100 + "px");
            if (!i || i.size === void 0) this.options.size = s.size()
        }
        this.container.css("display", "block");
        this.buttonNext.css("display", "block");
        this.buttonPrev.css("display", "block");
        this.funcNext = function() {
            f.next()
        };
        this.funcPrev = function() {
            f.prev()
        };
        this.funcResize = function() {
            f.resizeTimer && clearTimeout(f.resizeTimer);
            f.resizeTimer = setTimeout(function() {
                f.reload()
            }, 100)
        };
        this.options.initCallback !== null && this.options.initCallback(this, "init");
        !n && e.browser.safari ? (this.buttons(!1, !1), e(window).bind("load.jcarousel", function() {
            f.setup()
        })) : this.setup()
    };
    var r = e.jcarousel;
    r.fn = r.prototype = {
        jcarousel: "0.2.8"
    };
    r.fn.extend = r.extend = e.extend;
    r.fn.extend({
        setup: function() {
            this.prevLast = this.prevFirst = this.last = this.first = null;
            this.animating = !1;
            this.tail = this.resizeTimer = this.timer = null;
            this.inTail = !1;
            if (!this.locked) {
                this.list.css(this.lt, this.pos(this.options.offset) + "px");
                var t = this.pos(this.options.start, !0);
                this.prevFirst = this.prevLast = null;
                this.animate(t, !1);
                e(window).unbind("resize.jcarousel", this.funcResize).bind("resize.jcarousel", this.funcResize);
                this.options.setupCallback !== null && this.options.setupCallback(this)
            }
        },
        reset: function() {
            this.list.empty();
            this.list.css(this.lt, "0px");
            this.list.css(this.wh, "10px");
            this.options.initCallback !== null && this.options.initCallback(this, "reset");
            this.setup()
        },
        reload: function() {
            this.tail !== null && this.inTail && this.list.css(this.lt, r.intval(this.list.css(this.lt)) + this.tail);
            this.tail = null;
            this.inTail = !1;
            this.options.reloadCallback !== null && this.options.reloadCallback(this);
            if (this.options.visible !== null) {
                var e = this,
                    t = Math.ceil(this.clipping() / this.options.visible),
                    n = 0,
                    i = 0;
                this.list.children("li").each(function(r) {
                    n += e.dimension(this, t);
                    r + 1 < e.first && (i = n)
                });
                this.list.css(this.wh, n + "px");
                this.list.css(this.lt, -i + "px")
            }
            this.scroll(this.first, !1)
        },
        lock: function() {
            this.locked = !0;
            this.buttons()
        },
        unlock: function() {
            this.locked = !1;
            this.buttons()
        },
        size: function(e) {
            if (e !== void 0) this.options.size = e, this.locked || this.buttons();
            return this.options.size
        },
        has: function(e, t) {
            if (t === void 0 || !t) t = e;
            if (this.options.size !== null && t > this.options.size) t = this.options.size;
            for (var n = e; n <= t; n++) {
                var r = this.get(n);
                if (!r.length || r.hasClass("jcarousel-item-placeholder")) return !1
            }
            return !0
        },
        get: function(t) {
            return e(">.jcarousel-item-" + t, this.list)
        },
        add: function(t, n) {
            var i = this.get(t),
                s = 0,
                o = e(n);
            if (i.length === 0)
                for (var u, a = r.intval(t), i = this.create(t);;) {
                    if (u = this.get(--a), a <= 0 || u.length) {
                        a <= 0 ? this.list.prepend(i) : u.after(i);
                        break
                    }
                } else s = this.dimension(i);
            o.get(0).nodeName.toUpperCase() == "LI" ? (i.replaceWith(o), i = o) : i.empty().append(n);
            this.format(i.removeClass(this.className("jcarousel-item-placeholder")), t);
            o = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
            s = this.dimension(i, o) - s;
            t > 0 && t < this.first && this.list.css(this.lt, r.intval(this.list.css(this.lt)) - s + "px");
            this.list.css(this.wh, r.intval(this.list.css(this.wh)) + s + "px");
            return i
        },
        remove: function(e) {
            var t = this.get(e);
            if (t.length && !(e >= this.first && e <= this.last)) {
                var n = this.dimension(t);
                e < this.first && this.list.css(this.lt, r.intval(this.list.css(this.lt)) + n + "px");
                t.remove();
                this.list.css(this.wh, r.intval(this.list.css(this.wh)) - n + "px")
            }
        },
        next: function() {
            this.tail !== null && !this.inTail ? this.scrollTail(!1) : this.scroll((this.options.wrap == "both" || this.options.wrap == "last") && this.options.size !== null && this.last == this.options.size ? 1 : this.first + this.options.scroll)
        },
        prev: function() {
            this.tail !== null && this.inTail ? this.scrollTail(!0) : this.scroll((this.options.wrap == "both" || this.options.wrap == "first") && this.options.size !== null && this.first == 1 ? this.options.size : this.first - this.options.scroll)
        },
        scrollTail: function(e) {
            if (!this.locked && !this.animating && this.tail) {
                this.pauseAuto();
                var t = r.intval(this.list.css(this.lt)),
                    t = !e ? t - this.tail : t + this.tail;
                this.inTail = !e;
                this.prevFirst = this.first;
                this.prevLast = this.last;
                this.animate(t)
            }
        },
        scroll: function(e, t) {
            !this.locked && !this.animating && (this.pauseAuto(), this.animate(this.pos(e), t))
        },
        pos: function(e, t) {
            var n = r.intval(this.list.css(this.lt));
            if (this.locked || this.animating) return n;
            this.options.wrap != "circular" && (e = e < 1 ? 1 : this.options.size && e > this.options.size ? this.options.size : e);
            for (var i = this.first > e, s = this.options.wrap != "circular" && this.first <= 1 ? 1 : this.first, o = i ? this.get(s) : this.get(this.last), u = i ? s : s - 1, a = null, l = 0, c = !1, h = 0; i ? --u >= e : ++u < e;) {
                a = this.get(u);
                c = !a.length;
                if (a.length === 0 && (a = this.create(u).addClass(this.className("jcarousel-item-placeholder")), o[i ? "before" : "after"](a), this.first !== null && this.options.wrap == "circular" && this.options.size !== null && (u <= 0 || u > this.options.size))) o = this.get(this.index(u)), o.length && (a = this.add(u, o.clone(!0)));
                o = a;
                h = this.dimension(a);
                c && (l += h);
                if (this.first !== null && (this.options.wrap == "circular" || u >= 1 && (this.options.size === null || u <= this.options.size))) n = i ? n + h : n - h
            }
            for (var s = this.clipping(), p = [], d = 0, v = 0, o = this.get(e - 1), u = e; ++d;) {
                a = this.get(u);
                c = !a.length;
                if (a.length === 0) {
                    a = this.create(u).addClass(this.className("jcarousel-item-placeholder"));
                    if (o.length === 0) this.list.prepend(a);
                    else o[i ? "before" : "after"](a); if (this.first !== null && this.options.wrap == "circular" && this.options.size !== null && (u <= 0 || u > this.options.size)) o = this.get(this.index(u)), o.length && (a = this.add(u, o.clone(!0)))
                }
                o = a;
                h = this.dimension(a);
                if (h === 0) throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");
                this.options.wrap != "circular" && this.options.size !== null && u > this.options.size ? p.push(a) : c && (l += h);
                v += h;
                if (v >= s) break;
                u++
            }
            for (a = 0; a < p.length; a++) p[a].remove();
            l > 0 && (this.list.css(this.wh, this.dimension(this.list) + l + "px"), i && (n -= l, this.list.css(this.lt, r.intval(this.list.css(this.lt)) - l + "px")));
            l = e + d - 1;
            if (this.options.wrap != "circular" && this.options.size && l > this.options.size) l = this.options.size;
            if (u > l) {
                d = 0;
                u = l;
                for (v = 0; ++d;) {
                    a = this.get(u--);
                    if (!a.length) break;
                    v += this.dimension(a);
                    if (v >= s) break
                }
            }
            u = l - d + 1;
            this.options.wrap != "circular" && u < 1 && (u = 1);
            if (this.inTail && i) n += this.tail, this.inTail = !1;
            this.tail = null;
            if (this.options.wrap != "circular" && l == this.options.size && l - d + 1 >= 1 && (i = r.intval(this.get(l).css(!this.options.vertical ? "marginRight" : "marginBottom")), v - i > s)) this.tail = v - s - i;
            if (t && e === this.options.size && this.tail) n -= this.tail, this.inTail = !0;
            for (; e-- > u;) n += this.dimension(this.get(e));
            this.prevFirst = this.first;
            this.prevLast = this.last;
            this.first = u;
            this.last = l;
            return n
        },
        animate: function(t, n) {
            if (!this.locked && !this.animating) {
                this.animating = !0;
                var r = this,
                    i = function() {
                        r.animating = !1;
                        t === 0 && r.list.css(r.lt, 0);
                        !r.autoStopped && (r.options.wrap == "circular" || r.options.wrap == "both" || r.options.wrap == "last" || r.options.size === null || r.last < r.options.size || r.last == r.options.size && r.tail !== null && !r.inTail) && r.startAuto();
                        r.buttons();
                        r.notify("onAfterAnimation");
                        if (r.options.wrap == "circular" && r.options.size !== null)
                            for (var e = r.prevFirst; e <= r.prevLast; e++) e !== null && !(e >= r.first && e <= r.last) && (e < 1 || e > r.options.size) && r.remove(e)
                    };
                this.notify("onBeforeAnimation");
                if (!this.options.animation || n === !1) this.list.css(this.lt, t + "px"), i();
                else {
                    var s = !this.options.vertical ? this.options.rtl ? {
                        right: t
                    } : {
                        left: t
                    } : {
                        top: t
                    }, i = {
                            duration: this.options.animation,
                            easing: this.options.easing,
                            complete: i
                        };
                    if (e.isFunction(this.options.animationStepCallback)) i.step = this.options.animationStepCallback;
                    this.list.animate(s, i)
                }
            }
        },
        startAuto: function(e) {
            if (e !== void 0) this.options.auto = e;
            if (this.options.auto === 0) return this.stopAuto();
            if (this.timer === null) {
                this.autoStopped = !1;
                var t = this;
                this.timer = window.setTimeout(function() {
                    t.next()
                }, this.options.auto * 1e3)
            }
        },
        stopAuto: function() {
            this.pauseAuto();
            this.autoStopped = !0
        },
        pauseAuto: function() {
            if (this.timer !== null) window.clearTimeout(this.timer), this.timer = null
        },
        buttons: function(e, t) {
            if (e == null && (e = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "first" || this.options.size === null || this.last < this.options.size), !this.locked && (!this.options.wrap || this.options.wrap == "first") && this.options.size !== null && this.last >= this.options.size)) e = this.tail !== null && !this.inTail;
            if (t == null && (t = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "last" || this.first > 1), !this.locked && (!this.options.wrap || this.options.wrap == "last") && this.options.size !== null && this.first == 1)) t = this.tail !== null && this.inTail;
            var n = this;
            this.buttonNext.size() > 0 ? (this.buttonNext.unbind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), e && this.buttonNext.bind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), this.buttonNext[e ? "removeClass" : "addClass"](this.className("jcarousel-next-disabled")).attr("disabled", e ? !1 : !0), this.options.buttonNextCallback !== null && this.buttonNext.data("jcarouselstate") != e && this.buttonNext.each(function() {
                n.options.buttonNextCallback(n, this, e)
            }).data("jcarouselstate", e)) : this.options.buttonNextCallback !== null && this.buttonNextState != e && this.options.buttonNextCallback(n, null, e);
            this.buttonPrev.size() > 0 ? (this.buttonPrev.unbind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), t && this.buttonPrev.bind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), this.buttonPrev[t ? "removeClass" : "addClass"](this.className("jcarousel-prev-disabled")).attr("disabled", t ? !1 : !0), this.options.buttonPrevCallback !== null && this.buttonPrev.data("jcarouselstate") != t && this.buttonPrev.each(function() {
                n.options.buttonPrevCallback(n, this, t)
            }).data("jcarouselstate", t)) : this.options.buttonPrevCallback !== null && this.buttonPrevState != t && this.options.buttonPrevCallback(n, null, t);
            this.buttonNextState = e;
            this.buttonPrevState = t
        },
        notify: function(e) {
            var t = this.prevFirst === null ? "init" : this.prevFirst < this.first ? "next" : "prev";
            this.callback("itemLoadCallback", e, t);
            this.prevFirst !== this.first && (this.callback("itemFirstInCallback", e, t, this.first), this.callback("itemFirstOutCallback", e, t, this.prevFirst));
            this.prevLast !== this.last && (this.callback("itemLastInCallback", e, t, this.last), this.callback("itemLastOutCallback", e, t, this.prevLast));
            this.callback("itemVisibleInCallback", e, t, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback("itemVisibleOutCallback", e, t, this.prevFirst, this.prevLast, this.first, this.last)
        },
        callback: function(t, n, r, i, s, o, u) {
            if (!(this.options[t] == null || typeof this.options[t] != "object" && n != "onAfterAnimation")) {
                var a = typeof this.options[t] == "object" ? this.options[t][n] : this.options[t];
                if (e.isFunction(a)) {
                    var f = this;
                    if (i === void 0) a(f, r, n);
                    else if (s === void 0) this.get(i).each(function() {
                        a(f, this, i, r, n)
                    });
                    else
                        for (var t = function(e) {
                            f.get(e).each(function() {
                                a(f, this, e, r, n)
                            })
                        }, l = i; l <= s; l++) l !== null && !(l >= o && l <= u) && t(l)
                }
            }
        },
        create: function(e) {
            return this.format("<li></li>", e)
        },
        format: function(t, n) {
            for (var t = e(t), r = t.get(0).className.split(" "), i = 0; i < r.length; i++) r[i].indexOf("jcarousel-") != -1 && t.removeClass(r[i]);
            t.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-" + n)).css({
                "float": this.options.rtl ? "right" : "left",
                "list-style": "none"
            }).attr("jcarouselindex", n);
            return t
        },
        className: function(e) {
            return e + " " + e + (!this.options.vertical ? "-horizontal" : "-vertical")
        },
        dimension: function(t, n) {
            var i = e(t);
            if (n == null) return !this.options.vertical ? i.outerWidth(!0) || r.intval(this.options.itemFallbackDimension) : i.outerHeight(!0) || r.intval(this.options.itemFallbackDimension);
            else {
                var s = !this.options.vertical ? n - r.intval(i.css("marginLeft")) - r.intval(i.css("marginRight")) : n - r.intval(i.css("marginTop")) - r.intval(i.css("marginBottom"));
                e(i).css(this.wh, s + "px");
                return this.dimension(i)
            }
        },
        clipping: function() {
            return !this.options.vertical ? this.clip[0].offsetWidth - r.intval(this.clip.css("borderLeftWidth")) - r.intval(this.clip.css("borderRightWidth")) : this.clip[0].offsetHeight - r.intval(this.clip.css("borderTopWidth")) - r.intval(this.clip.css("borderBottomWidth"))
        },
        index: function(e, t) {
            if (t == null) t = this.options.size;
            return Math.round(((e - 1) / t - Math.floor((e - 1) / t)) * t) + 1
        }
    });
    r.extend({
        defaults: function(n) {
            return e.extend(t, n || {})
        },
        intval: function(e) {
            e = parseInt(e, 10);
            return isNaN(e) ? 0 : e
        },
        windowLoaded: function() {
            n = !0
        }
    });
    e.fn.jcarousel = function(t) {
        if (typeof t == "string") {
            var n = e(this).data("jcarousel"),
                i = Array.prototype.slice.call(arguments, 1);
            return n[t].apply(n, i)
        } else return this.each(function() {
            var n = e(this).data("jcarousel");
            n ? (t && e.extend(n.options, t), n.reload()) : e(this).data("jcarousel", new r(this, t))
        })
    }
})(jQuery);
(function(e) {
    function t() {
        url = location.href;
        hashtag = url.indexOf("#prettyPhoto") !== -1 ? decodeURI(url.substring(url.indexOf("#prettyPhoto") + 1, url.length)) : false;
        return hashtag
    }

    function n() {
        if (typeof theRel == "undefined") return;
        location.hash = theRel + "/" + rel_index + "/"
    }

    function r() {
        if (location.href.indexOf("#prettyPhoto") !== -1) location.hash = "prettyPhoto"
    }

    function i(e, t) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var n = "[\\?&]" + e + "=([^&#]*)";
        var r = new RegExp(n);
        var i = r.exec(t);
        return i == null ? "" : i[1]
    }
    e.prettyPhoto = {
        version: "3.1.4"
    };
    e.fn.prettyPhoto = function(s) {
        function g() {
            e(".pp_loaderIcon").hide();
            projectedTop = scroll_pos["scrollTop"] + (d / 2 - a["containerHeight"] / 2);
            if (projectedTop < 0) projectedTop = 0;
            $ppt.fadeTo(settings.animation_speed, 1);
            $pp_pic_holder.find(".pp_content").animate({
                height: a["contentHeight"],
                width: a["contentWidth"]
            }, settings.animation_speed);
            $pp_pic_holder.animate({
                top: projectedTop,
                left: v / 2 - a["containerWidth"] / 2 < 0 ? 0 : v / 2 - a["containerWidth"] / 2,
                width: a["containerWidth"]
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);
                $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
                if (isSet && S(pp_images[set_position]) == "image") {
                    $pp_pic_holder.find(".pp_hoverContainer").show()
                } else {
                    $pp_pic_holder.find(".pp_hoverContainer").hide()
                } if (settings.allow_expand) {
                    if (a["resized"]) {
                        e("a.pp_expand,a.pp_contract").show()
                    } else {
                        e("a.pp_expand").hide()
                    }
                }
                if (settings.autoplay_slideshow && !m && !f) e.prettyPhoto.startSlideshow();
                settings.changepicturecallback();
                f = true
            });
            C();
            s.ajaxcallback()
        }

        function y(t) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
            $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                e(".pp_loaderIcon").show();
                t()
            })
        }

        function b(t) {
            t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
        }

        function w(e, t) {
            resized = false;
            E(e, t);
            imageWidth = e, imageHeight = t;
            if ((p > v || h > d) && doresize && settings.allow_resize && !u) {
                resized = true, fitting = false;
                while (!fitting) {
                    if (p > v) {
                        imageWidth = v - 200;
                        imageHeight = t / e * imageWidth
                    } else if (h > d) {
                        imageHeight = d - 200;
                        imageWidth = e / t * imageHeight
                    } else {
                        fitting = true
                    }
                    h = imageHeight, p = imageWidth
                }
                E(imageWidth, imageHeight);
                if (p > v || h > d) {
                    w(p, h)
                }
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(h),
                containerWidth: Math.floor(p) + settings.horizontal_padding * 2,
                contentHeight: Math.floor(l),
                contentWidth: Math.floor(c),
                resized: resized
            }
        }

        function E(t, n) {
            t = parseFloat(t);
            n = parseFloat(n);
            $pp_details = $pp_pic_holder.find(".pp_details");
            $pp_details.width(t);
            detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
            $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            });
            detailsHeight += $pp_details.height();
            detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight;
            if (e.browser.msie && e.browser.version == 7) detailsHeight += 8;
            $pp_details.remove();
            $pp_title = $pp_pic_holder.find(".ppt");
            $pp_title.width(t);
            titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
            $pp_title = $pp_title.clone().appendTo(e("body")).css({
                position: "absolute",
                top: -1e4
            });
            titleHeight += $pp_title.height();
            $pp_title.remove();
            l = n + detailsHeight;
            c = t;
            h = l + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
            p = t
        }

        function S(e) {
            if (e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i)) {
                return "youtube"
            } else if (e.match(/vimeo\.com/i)) {
                return "vimeo"
            } else if (e.match(/\b.mov\b/i)) {
                return "quicktime"
            } else if (e.match(/\b.swf\b/i)) {
                return "flash"
            } else if (e.match(/\biframe=true\b/i)) {
                return "iframe"
            } else if (e.match(/\bajax=true\b/i)) {
                return "ajax"
            } else if (e.match(/\bcustom=true\b/i)) {
                return "custom"
            } else if (e.substr(0, 1) == "#") {
                return "inline"
            } else {
                return "image"
            }
        }

        function x() {
            if (doresize && typeof $pp_pic_holder != "undefined") {
                scroll_pos = T();
                contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();
                projectedTop = d / 2 + scroll_pos["scrollTop"] - contentHeight / 2;
                if (projectedTop < 0) projectedTop = 0;
                if (contentHeight > d) return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: v / 2 + scroll_pos["scrollLeft"] - contentwidth / 2
                })
            }
        }

        function T() {
            if (self.pageYOffset) {
                return {
                    scrollTop: self.pageYOffset,
                    scrollLeft: self.pageXOffset
                }
            } else if (document.documentElement && document.documentElement.scrollTop) {
                return {
                    scrollTop: document.documentElement.scrollTop,
                    scrollLeft: document.documentElement.scrollLeft
                }
            } else if (document.body) {
                return {
                    scrollTop: document.body.scrollTop,
                    scrollLeft: document.body.scrollLeft
                }
            }
        }

        function N() {
            d = e(window).height(), v = e(window).width();
            if (typeof $pp_overlay != "undefined") $pp_overlay.height(e(document).height()).width(v)
        }

        function C() {
            if (isSet && settings.overlay_gallery && S(pp_images[set_position]) == "image" && settings.ie6_fallback && !(e.browser.msie && parseInt(e.browser.version) == 6)) {
                itemWidth = 52 + 5;
                navWidth = settings.theme == "facebook" || settings.theme == "pp_default" ? 50 : 30;
                itemsPerPage = Math.floor((a["containerWidth"] - 100 - navWidth) / itemWidth);
                itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length;
                totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
                if (totalPage == 0) {
                    navWidth = 0;
                    $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()
                } else {
                    $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()
                }
                galleryWidth = itemsPerPage * itemWidth;
                fullGalleryWidth = pp_images.length * itemWidth;
                $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");
                goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage;
                e.prettyPhoto.changeGalleryPage(goToPage);
                $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")
            } else {
                $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
            }
        }

        function k(t) {
            if (settings.social_tools) facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
            settings.markup = settings.markup.replace("{pp_social}", "");
            e("body").append(settings.markup);
            $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay");
            if (isSet && settings.overlay_gallery) {
                currentGalleryPage = 0;
                toInject = "";
                for (var n = 0; n < pp_images.length; n++) {
                    if (!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
                        classname = "default";
                        img_src = ""
                    } else {
                        classname = "";
                        img_src = pp_images[n]
                    }
                    toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>"
                }
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
                $pp_pic_holder.find("#pp_full_res").after(toInject);
                $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li");
                $pp_gallery.find(".pp_arrow_next").click(function() {
                    e.prettyPhoto.changeGalleryPage("next");
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_gallery.find(".pp_arrow_previous").click(function() {
                    e.prettyPhoto.changeGalleryPage("previous");
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                });
                itemWidth = 52 + 5;
                $pp_gallery_li.each(function(t) {
                    e(this).find("a").click(function() {
                        e.prettyPhoto.changePage(t);
                        e.prettyPhoto.stopSlideshow();
                        return false
                    })
                })
            }
            if (settings.slideshow) {
                $pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');
                $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                    e.prettyPhoto.startSlideshow();
                    return false
                })
            }
            $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
            $pp_overlay.css({
                opacity: 0,
                height: e(document).height(),
                width: e(window).width()
            }).bind("click", function() {
                if (!settings.modal) e.prettyPhoto.close()
            });
            e("a.pp_close").bind("click", function() {
                e.prettyPhoto.close();
                return false
            });
            if (settings.allow_expand) {
                e("a.pp_expand").bind("click", function(t) {
                    if (e(this).hasClass("pp_expand")) {
                        e(this).removeClass("pp_expand").addClass("pp_contract");
                        doresize = false
                    } else {
                        e(this).removeClass("pp_contract").addClass("pp_expand");
                        doresize = true
                    }
                    y(function() {
                        e.prettyPhoto.open()
                    });
                    return false
                })
            }
            $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                e.prettyPhoto.changePage("previous");
                e.prettyPhoto.stopSlideshow();
                return false
            });
            $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                e.prettyPhoto.changePage("next");
                e.prettyPhoto.stopSlideshow();
                return false
            });
            x()
        }
        s = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: false,
            opacity: .8,
            show_title: true,
            allow_resize: true,
            allow_expand: true,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: false,
            wmode: "opaque",
            autoplay: true,
            modal: false,
            deeplinking: true,
            overlay_gallery: true,
            overlay_gallery_max: 30,
            keyboard_shortcuts: true,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: true,
            markup: '<div class="pp_pic_holder">       <div class="ppt">ďż˝</div>       <div class="pp_top">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>       <div class="pp_content_container">        <div class="pp_left">        <div class="pp_right">         <div class="pp_content">          <div class="pp_loaderIcon"></div>          <div class="pp_fade">           <a href="#" class="pp_expand" title="Expand the image">Expand</a>           <div class="pp_hoverContainer">            <a class="pp_next" href="#">next</a>            <a class="pp_previous" href="#">previous</a>           </div>           <div id="pp_full_res"></div>           <div class="pp_details">            <div class="pp_nav">             <a href="#" class="pp_arrow_previous">Previous</a>             <p class="currentTextHolder">0/0</p>             <a href="#" class="pp_arrow_next">Next</a>            </div>            <p class="pp_description"></p>            <div class="pp_social">{pp_social}</div>            <a class="pp_close" href="#">Close</a>           </div>          </div>         </div>        </div>        </div>       </div>       <div class="pp_bottom">        <div class="pp_left"></div>        <div class="pp_middle"></div>        <div class="pp_right"></div>       </div>      </div>      <div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery">         <a href="#" class="pp_arrow_previous">Previous</a>         <div>          <ul>           {gallery}          </ul>         </div>         <a href="#" class="pp_arrow_next">Next</a>        </div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, s);
        var o = this,
            u = false,
            a, f, l, c, h, p, d = e(window).height(),
            v = e(window).width(),
            m;
        doresize = true, scroll_pos = T();
        e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            x();
            N()
        });
        if (s.keyboard_shortcuts) {
            e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
                if (typeof $pp_pic_holder != "undefined") {
                    if ($pp_pic_holder.is(":visible")) {
                        switch (t.keyCode) {
                            case 37:
                                e.prettyPhoto.changePage("previous");
                                t.preventDefault();
                                break;
                            case 39:
                                e.prettyPhoto.changePage("next");
                                t.preventDefault();
                                break;
                            case 27:
                                if (!settings.modal) e.prettyPhoto.close();
                                t.preventDefault();
                                break
                        }
                    }
                }
            })
        }
        e.prettyPhoto.initialize = function() {
            settings = s;
            if (settings.theme == "pp_default") settings.horizontal_padding = 16;
            if (settings.ie6_fallback && e.browser.msie && parseInt(e.browser.version) == 6) settings.theme = "light_square";
            theRel = e(this).attr(settings.hook);
            galleryRegExp = /\[(?:.*)\]/;
            isSet = galleryRegExp.exec(theRel) ? true : false;
            pp_images = isSet ? jQuery.map(o, function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("href")
            }) : e.makeArray(e(this).attr("href"));
            pp_titles = isSet ? jQuery.map(o, function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : ""
            }) : e.makeArray(e(this).find("img").attr("alt"));
            pp_descriptions = isSet ? jQuery.map(o, function(t, n) {
                if (e(t).attr(settings.hook).indexOf(theRel) != -1) return e(t).attr("title") ? e(t).attr("title") : ""
            }) : e.makeArray(e(this).attr("title"));
            if (pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
            set_position = jQuery.inArray(e(this).attr("href"), pp_images);
            rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this));
            k(this);
            if (settings.allow_resize) e(window).bind("scroll.prettyphoto", function() {
                x()
            });
            e.prettyPhoto.open();
            return false
        };
        e.prettyPhoto.open = function(t) {
            if (typeof settings == "undefined") {
                settings = s;
                if (e.browser.msie && e.browser.version == 6) settings.theme = "light_square";
                pp_images = e.makeArray(arguments[0]);
                pp_titles = arguments[1] ? e.makeArray(arguments[1]) : e.makeArray("");
                pp_descriptions = arguments[2] ? e.makeArray(arguments[2]) : e.makeArray("");
                isSet = pp_images.length > 1 ? true : false;
                set_position = arguments[3] ? arguments[3] : 0;
                k(t.target)
            }
            if (e.browser.msie && e.browser.version == 6) e("select").css("visibility", "hidden");
            if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
            b(e(pp_images).size());
            e(".pp_loaderIcon").show();
            if (settings.deeplinking) n();
            if (settings.social_tools) {
                facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
                $pp_pic_holder.find(".pp_social").html(facebook_like_link)
            }
            if ($ppt.is(":hidden")) $ppt.css("opacity", 0).show();
            $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity);
            $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size());
            if (typeof pp_descriptions[set_position] != "undefined" && pp_descriptions[set_position] != "") {
                $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))
            } else {
                $pp_pic_holder.find(".pp_description").hide()
            }
            movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString();
            movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString();
            u = false;
            if (movie_height.indexOf("%") != -1) {
                movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150);
                u = true
            }
            if (movie_width.indexOf("%") != -1) {
                movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150);
                u = true
            }
            $pp_pic_holder.fadeIn(function() {
                settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined" ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("ďż˝");
                imgPreloader = "";
                skipInjection = false;
                switch (S(pp_images[set_position])) {
                    case "image":
                        imgPreloader = new Image;
                        nextImage = new Image;
                        if (isSet && set_position < e(pp_images).size() - 1) nextImage.src = pp_images[set_position + 1];
                        prevImage = new Image;
                        if (isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];
                        $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
                        imgPreloader.onload = function() {
                            a = w(imgPreloader.width, imgPreloader.height);
                            g()
                        };
                        imgPreloader.onerror = function() {
                            alert("Image cannot be loaded. Make sure the path is correct and image exist.");
                            e.prettyPhoto.close()
                        };
                        imgPreloader.src = pp_images[set_position];
                        break;
                    case "youtube":
                        a = w(movie_width, movie_height);
                        movie_id = i("v", pp_images[set_position]);
                        if (movie_id == "") {
                            movie_id = pp_images[set_position].split("youtu.be/");
                            movie_id = movie_id[1];
                            if (movie_id.indexOf("?") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("?"));
                            if (movie_id.indexOf("&") > 0) movie_id = movie_id.substr(0, movie_id.indexOf("&"))
                        }
                        movie = "http://www.youtube.com/embed/" + movie_id;
                        i("rel", pp_images[set_position]) ? movie += "?rel=" + i("rel", pp_images[set_position]) : movie += "?rel=1";
                        if (settings.autoplay) movie += "&autoplay=1";
                        toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                        break;
                    case "vimeo":
                        a = w(movie_width, movie_height);
                        movie_id = pp_images[set_position];
                        var t = /http:\/\/(www\.)?vimeo.com\/(\d+)/;
                        var n = movie_id.match(t);
                        movie = "http://player.vimeo.com/video/" + n[2] + "?title=0&byline=0&portrait=0";
                        if (settings.autoplay) movie += "&autoplay=1;";
                        vimeo_width = a["width"] + "/embed/?moog_width=" + a["width"];
                        toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, a["height"]).replace(/{path}/g, movie);
                        break;
                    case "quicktime":
                        a = w(movie_width, movie_height);
                        a["height"] += 15;
                        a["contentHeight"] += 15;
                        a["containerHeight"] += 15;
                        toInject = settings.quicktime_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                        break;
                    case "flash":
                        a = w(movie_width, movie_height);
                        flash_vars = pp_images[set_position];
                        flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
                        filename = pp_images[set_position];
                        filename = filename.substring(0, filename.indexOf("?"));
                        toInject = settings.flash_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                        break;
                    case "iframe":
                        a = w(movie_width, movie_height);
                        frame_url = pp_images[set_position];
                        frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
                        toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{path}/g, frame_url);
                        break;
                    case "ajax":
                        doresize = false;
                        a = w(movie_width, movie_height);
                        doresize = true;
                        skipInjection = true;
                        e.get(pp_images[set_position], function(e) {
                            toInject = settings.inline_markup.replace(/{content}/g, e);
                            $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                            g()
                        });
                        break;
                    case "custom":
                        a = w(movie_width, movie_height);
                        toInject = settings.custom_markup;
                        break;
                    case "inline":
                        myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                            width: settings.default_width
                        }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();
                        doresize = false;
                        a = w(e(myClone).width(), e(myClone).height());
                        doresize = true;
                        e(myClone).remove();
                        toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html());
                        break
                }
                if (!imgPreloader && !skipInjection) {
                    $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                    g()
                }
            });
            return false
        };
        e.prettyPhoto.changePage = function(t) {
            currentGalleryPage = 0;
            if (t == "previous") {
                set_position--;
                if (set_position < 0) set_position = e(pp_images).size() - 1
            } else if (t == "next") {
                set_position++;
                if (set_position > e(pp_images).size() - 1) set_position = 0
            } else {
                set_position = t
            }
            rel_index = set_position;
            if (!doresize) doresize = true;
            if (settings.allow_expand) {
                e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")
            }
            y(function() {
                e.prettyPhoto.open()
            })
        };
        e.prettyPhoto.changeGalleryPage = function(e) {
            if (e == "next") {
                currentGalleryPage++;
                if (currentGalleryPage > totalPage) currentGalleryPage = 0
            } else if (e == "previous") {
                currentGalleryPage--;
                if (currentGalleryPage < 0) currentGalleryPage = totalPage
            } else {
                currentGalleryPage = e
            }
            slide_speed = e == "next" || e == "previous" ? settings.animation_speed : 0;
            slide_to = currentGalleryPage * itemsPerPage * itemWidth;
            $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        };
        e.prettyPhoto.startSlideshow = function() {
            if (typeof m == "undefined") {
                $pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                m = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)
            } else {
                e.prettyPhoto.changePage("next")
            }
        };
        e.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                e.prettyPhoto.startSlideshow();
                return false
            });
            clearInterval(m);
            m = undefined
        };
        e.prettyPhoto.close = function() {
            if ($pp_overlay.is(":animated")) return;
            e.prettyPhoto.stopSlideshow();
            $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden");
            e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                e(this).remove()
            });
            $pp_overlay.fadeOut(settings.animation_speed, function() {
                if (e.browser.msie && e.browser.version == 6) e("select").css("visibility", "visible");
                if (settings.hideflash) e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
                e(this).remove();
                e(window).unbind("scroll.prettyphoto");
                r();
                settings.callback();
                doresize = true;
                f = false;
                delete settings
            })
        };
        if (!pp_alreadyInitialized && t()) {
            pp_alreadyInitialized = true;
            hashIndex = t();
            hashRel = hashIndex;
            hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1);
            hashRel = hashRel.substring(0, hashRel.indexOf("/"));
            setTimeout(function() {
                e("a[" + s.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
            }, 50)
        }
        return this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
    };
})(jQuery);
var pp_alreadyInitialized = false;
(function(e) {
    e.flexslider = function(t, n) {
        var r = e(t),
            i = e.extend({}, e.flexslider.defaults, n),
            s = i.namespace,
            o = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            u = o ? "touchend" : "click",
            a = "vertical" === i.direction,
            f = i.reverse,
            l = 0 < i.itemWidth,
            c = "fade" === i.animation,
            h = "" !== i.asNavFor,
            p = {};
        e.data(t, "flexslider", r);
        p = {
            init: function() {
                r.animating = !1;
                r.currentSlide = i.startAt;
                r.animatingTo = r.currentSlide;
                r.atEnd = 0 === r.currentSlide || r.currentSlide === r.last;
                r.containerSelector = i.selector.substr(0, i.selector.search(" "));
                r.slides = e(i.selector, r);
                r.container = e(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = 0 < e(i.sync).length;
                "slide" === i.animation && (i.animation = "swing");
                r.prop = a ? "top" : "marginLeft";
                r.args = {};
                r.manualPause = !1;
                var t = r,
                    n;
                if (n = !i.video)
                    if (n = !c)
                        if (n = i.useCSS) e: {
                            n = document.createElement("div");
                            var s = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                                u;
                            for (u in s)
                                if (void 0 !== n.style[s[u]]) {
                                    r.pfx = s[u].replace("Perspective", "").toLowerCase();
                                    r.prop = "-" + r.pfx + "-transform";
                                    n = !0;
                                    break e
                                }
                            n = !1
                        }
                        t.transitions = n;
                "" !== i.controlsContainer && (r.controlsContainer = 0 < e(i.controlsContainer).length && e(i.controlsContainer));
                "" !== i.manualControls && (r.manualControls = 0 < e(i.manualControls).length && e(i.manualControls));
                i.randomize && (r.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), r.container.empty().append(r.slides));
                r.doMath();
                h && p.asNav.setup();
                r.setup("init");
                i.controlNav && p.controlNav.setup();
                i.directionNav && p.directionNav.setup();
                i.keyboard && (1 === e(r.containerSelector).length || i.multipleKeyboard) && e(document).bind("keyup", function(e) {
                    e = e.keyCode;
                    if (!r.animating && (39 === e || 37 === e)) e = 39 === e ? r.getTarget("next") : 37 === e ? r.getTarget("prev") : !1, r.flexAnimate(e, i.pauseOnAction)
                });
                i.mousewheel && r.bind("mousewheel", function(e, t) {
                    e.preventDefault();
                    var n = 0 > t ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(n, i.pauseOnAction)
                });
                i.pausePlay && p.pausePlay.setup();
                i.slideshow && (i.pauseOnHover && r.hover(function() {
                    !r.manualPlay && !r.manualPause && r.pause()
                }, function() {
                    !r.manualPause && !r.manualPlay && r.play()
                }), 0 < i.initDelay ? setTimeout(r.play, i.initDelay) : r.play());
                o && i.touch && p.touch();
                (!c || c && i.smoothHeight) && e(window).bind("resize focus", p.resize);
                setTimeout(function() {
                    i.start(r)
                }, 200)
            },
            asNav: {
                setup: function() {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(s + "active-slide").eq(r.currentItem).addClass(s + "active-slide");
                    r.slides.click(function(t) {
                        t.preventDefault();
                        var t = e(this),
                            n = t.index();
                        !e(i.asNavFor).data("flexslider").animating && !t.hasClass("active") && (r.direction = r.currentItem < n ? "next" : "prev", r.flexAnimate(n, i.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    r.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var t = 1,
                        n;
                    r.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + ("thumbnails" === i.controlNav ? "control-thumbs" : "control-paging") + '"></ol>');
                    if (1 < r.pagingCount)
                        for (var a = 0; a < r.pagingCount; a++) n = "thumbnails" === i.controlNav ? '<img src="' + r.slides.eq(a).attr("data-thumb") + '"/>' : "<a>" + t + "</a>", r.controlNavScaffold.append("<li>" + n + "</li>"), t++;
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    p.controlNav.set();
                    p.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", u, function(t) {
                        t.preventDefault();
                        var t = e(this),
                            n = r.controlNav.index(t);
                        t.hasClass(s + "active") || (r.direction = n > r.currentSlide ? "next" : "prev", r.flexAnimate(n, i.pauseOnAction))
                    });
                    o && r.controlNavScaffold.delegate("a", "click touchstart", function(e) {
                        e.preventDefault()
                    })
                },
                setupManual: function() {
                    r.controlNav = r.manualControls;
                    p.controlNav.active();
                    r.controlNav.live(u, function(t) {
                        t.preventDefault();
                        var t = e(this),
                            n = r.controlNav.index(t);
                        t.hasClass(s + "active") || (n > r.currentSlide ? r.direction = "next" : r.direction = "prev", r.flexAnimate(n, i.pauseOnAction))
                    });
                    o && r.controlNav.live("click touchstart", function(e) {
                        e.preventDefault()
                    })
                },
                set: function() {
                    r.controlNav = e("." + s + "control-nav li " + ("thumbnails" === i.controlNav ? "img" : "a"), r.controlsContainer ? r.controlsContainer : r)
                },
                active: function() {
                    r.controlNav.removeClass(s + "active").eq(r.animatingTo).addClass(s + "active")
                },
                update: function(t, n) {
                    1 < r.pagingCount && "add" === t ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : 1 === r.pagingCount ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
                    p.controlNav.set();
                    1 < r.pagingCount && r.pagingCount !== r.controlNav.length ? r.update(n, t) : p.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = e('<ul class="' + s + 'direction-nav"><li><a class="' + s + 'prev" href="#">' + i.prevText + '</a></li><li><a class="' + s + 'next" href="#">' + i.nextText + "</a></li></ul>");
                    r.controlsContainer ? (e(r.controlsContainer).append(t), r.directionNav = e("." + s + "direction-nav li a", r.controlsContainer)) : (r.append(t), r.directionNav = e("." + s + "direction-nav li a", r));
                    p.directionNav.update();
                    r.directionNav.bind(u, function(t) {
                        t.preventDefault();
                        t = e(this).hasClass(s + "next") ? r.getTarget("next") : r.getTarget("prev");
                        r.flexAnimate(t, i.pauseOnAction)
                    });
                    o && r.directionNav.bind("click touchstart", function(e) {
                        e.preventDefault()
                    })
                },
                update: function() {
                    var e = s + "disabled";
                    1 === r.pagingCount ? r.directionNav.addClass(e) : i.animationLoop ? r.directionNav.removeClass(e) : 0 === r.animatingTo ? r.directionNav.removeClass(e).filter("." + s + "prev").addClass(e) : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + s + "next").addClass(e) : r.directionNav.removeClass(e)
                }
            },
            pausePlay: {
                setup: function() {
                    var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
                    r.controlsContainer ? (r.controlsContainer.append(t), r.pausePlay = e("." + s + "pauseplay a", r.controlsContainer)) : (r.append(t), r.pausePlay = e("." + s + "pauseplay a", r));
                    p.pausePlay.update(i.slideshow ? s + "pause" : s + "play");
                    r.pausePlay.bind(u, function(t) {
                        t.preventDefault();
                        e(this).hasClass(s + "pause") ? (r.manualPause = !0, r.manualPlay = !1, r.pause()) : (r.manualPause = !1, r.manualPlay = !0, r.play())
                    });
                    o && r.pausePlay.bind("click touchstart", function(e) {
                        e.preventDefault()
                    })
                },
                update: function(e) {
                    "play" === e ? r.pausePlay.removeClass(s + "pause").addClass(s + "play").text(i.playText) : r.pausePlay.removeClass(s + "play").addClass(s + "pause").text(i.pauseText)
                }
            },
            touch: function() {
                function e(e) {
                    p = a ? s - e.touches[0].pageY : s - e.touches[0].pageX;
                    v = a ? Math.abs(p) < Math.abs(e.touches[0].pageX - o) : Math.abs(p) < Math.abs(e.touches[0].pageY - o);
                    if (!v || 500 < Number(new Date) - d) e.preventDefault(), !c && r.transitions && (i.animationLoop || (p /= 0 === r.currentSlide && 0 > p || r.currentSlide === r.last && 0 < p ? Math.abs(p) / h + 2 : 1), r.setProps(u + p, "setTouch"))
                }

                function n() {
                    t.removeEventListener("touchmove", e, !1);
                    if (r.animatingTo === r.currentSlide && !v && null !== p) {
                        var a = f ? -p : p,
                            l = 0 < a ? r.getTarget("next") : r.getTarget("prev");
                        r.canAdvance(l) && (550 > Number(new Date) - d && 50 < Math.abs(a) || Math.abs(a) > h / 2) ? r.flexAnimate(l, i.pauseOnAction) : c || r.flexAnimate(r.currentSlide, i.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", n, !1);
                    u = p = o = s = null
                }
                var s, o, u, h, p, d, v = !1;
                t.addEventListener("touchstart", function(c) {
                    r.animating ? c.preventDefault() : 1 === c.touches.length && (r.pause(), h = a ? r.h : r.w, d = Number(new Date), u = l && f && r.animatingTo === r.last ? 0 : l && f ? r.limit - (r.itemW + i.itemMargin) * r.move * r.animatingTo : l && r.currentSlide === r.last ? r.limit : l ? (r.itemW + i.itemMargin) * r.move * r.currentSlide : f ? (r.last - r.currentSlide + r.cloneOffset) * h : (r.currentSlide + r.cloneOffset) * h, s = a ? c.touches[0].pageY : c.touches[0].pageX, o = a ? c.touches[0].pageX : c.touches[0].pageY, t.addEventListener("touchmove", e, !1), t.addEventListener("touchend", n, !1))
                }, !1)
            },
            resize: function() {
                !r.animating && r.is(":visible") && (l || r.doMath(), c ? p.smoothHeight() : l ? (r.slides.width(r.computedW), r.update(r.pagingCount), r.setProps()) : a ? (r.viewport.height(r.h), r.setProps(r.h, "setTotal")) : (i.smoothHeight && p.smoothHeight(), r.newSlides.width(r.computedW), r.setProps(r.computedW, "setTotal")))
            },
            smoothHeight: function(e) {
                if (!a || c) {
                    var t = c ? r : r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function(t) {
                var n = e(i.sync).data("flexslider"),
                    s = r.animatingTo;
                switch (t) {
                    case "animate":
                        n.flexAnimate(s, i.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        !n.playing && !n.asNav && n.play();
                        break;
                    case "pause":
                        n.pause()
                }
            }
        };
        r.flexAnimate = function(t, n, u, v, g) {
            h && 1 === r.pagingCount && (r.direction = r.currentItem < t ? "next" : "prev");
            if (!r.animating && (r.canAdvance(t, g) || u) && r.is(":visible")) {
                if (h && v)
                    if (u = e(i.asNavFor).data("flexslider"), r.atEnd = 0 === t || t === r.count - 1, u.flexAnimate(t, !0, !1, !0, g), r.direction = r.currentItem < t ? "next" : "prev", u.direction = r.direction, Math.ceil((t + 1) / r.visible) - 1 !== r.currentSlide && 0 !== t) r.currentItem = t, r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / r.visible);
                    else return r.currentItem = t, r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
                r.animating = !0;
                r.animatingTo = t;
                i.before(r);
                n && r.pause();
                r.syncExists && !g && p.sync("animate");
                i.controlNav && p.controlNav.active();
                l || r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide");
                r.atEnd = 0 === t || t === r.last;
                i.directionNav && p.directionNav.update();
                t === r.last && (i.end(r), i.animationLoop || r.pause());
                if (c) o ? (r.slides.eq(r.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), r.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), r.animating = !1, r.currentSlide = r.animatingTo) : (r.slides.eq(r.currentSlide).fadeOut(i.animationSpeed, i.easing), r.slides.eq(t).fadeIn(i.animationSpeed, i.easing, r.wrapup));
                else {
                    var y = a ? r.slides.filter(":first").height() : r.computedW;
                    l ? (t = i.itemWidth > r.w ? 2 * i.itemMargin : i.itemMargin, t = (r.itemW + t) * r.move * r.animatingTo, t = t > r.limit && 1 !== r.visible ? r.limit : t) : t = 0 === r.currentSlide && t === r.count - 1 && i.animationLoop && "next" !== r.direction ? f ? (r.count + r.cloneOffset) * y : 0 : r.currentSlide === r.last && 0 === t && i.animationLoop && "prev" !== r.direction ? f ? 0 : (r.count + 1) * y : f ? (r.count - 1 - t + r.cloneOffset) * y : (t + r.cloneOffset) * y;
                    r.setProps(t, "", i.animationSpeed);
                    if (r.transitions) {
                        if (!i.animationLoop || !r.atEnd) r.animating = !1, r.currentSlide = r.animatingTo;
                        r.container.unbind("webkitTransitionEnd transitionend");
                        r.container.bind("webkitTransitionEnd transitionend", function() {
                            r.wrapup(y)
                        })
                    } else r.container.animate(r.args, i.animationSpeed, i.easing, function() {
                        r.wrapup(y)
                    })
                }
                i.smoothHeight && p.smoothHeight(i.animationSpeed)
            }
        };
        r.wrapup = function(e) {
            !c && !l && (0 === r.currentSlide && r.animatingTo === r.last && i.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && 0 === r.animatingTo && i.animationLoop && r.setProps(e, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            i.after(r)
        };
        r.animateSlides = function() {
            r.animating || r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function() {
            clearInterval(r.animatedSlides);
            r.playing = !1;
            i.pausePlay && p.pausePlay.update("play");
            r.syncExists && p.sync("pause")
        };
        r.play = function() {
            r.animatedSlides = setInterval(r.animateSlides, i.slideshowSpeed);
            r.playing = !0;
            i.pausePlay && p.pausePlay.update("pause");
            r.syncExists && p.sync("play")
        };
        r.canAdvance = function(e, t) {
            var n = h ? r.pagingCount - 1 : r.last;
            return t ? !0 : h && r.currentItem === r.count - 1 && 0 === e && "prev" === r.direction ? !0 : h && 0 === r.currentItem && e === r.pagingCount - 1 && "next" !== r.direction ? !1 : e === r.currentSlide && !h ? !1 : i.animationLoop ? !0 : r.atEnd && 0 === r.currentSlide && e === n && "next" !== r.direction ? !1 : r.atEnd && r.currentSlide === n && 0 === e && "next" === r.direction ? !1 : !0
        };
        r.getTarget = function(e) {
            r.direction = e;
            return "next" === e ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : 0 === r.currentSlide ? r.last : r.currentSlide - 1
        };
        r.setProps = function(e, t, n) {
            var s, o = e ? e : (r.itemW + i.itemMargin) * r.move * r.animatingTo;
            s = -1 * function() {
                if (l) return "setTouch" === t ? e : f && r.animatingTo === r.last ? 0 : f ? r.limit - (r.itemW + i.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : o;
                switch (t) {
                    case "setTotal":
                        return f ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                    case "setTouch":
                        return e;
                    case "jumpEnd":
                        return f ? e : r.count * e;
                    case "jumpStart":
                        return f ? r.count * e : e;
                    default:
                        return e
                }
            }() + "px";
            r.transitions && (s = a ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", r.container.css("-" + r.pfx + "-transition-duration", n));
            r.args[r.prop] = s;
            (r.transitions || void 0 === n) && r.container.css(r.args)
        };
        r.setup = function(t) {
            if (c) r.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (o ? r.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + i.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(r.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : r.slides.eq(r.currentSlide).fadeIn(i.animationSpeed, i.easing)), i.smoothHeight && p.smoothHeight();
            else {
                var n, u;
                "init" === t && (r.viewport = e('<div class="' + s + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(r).append(r.container), r.cloneCount = 0, r.cloneOffset = 0, f && (u = e.makeArray(r.slides).reverse(), r.slides = e(u), r.container.empty().append(r.slides)));
                i.animationLoop && !l && (r.cloneCount = 2, r.cloneOffset = 1, "init" !== t && r.container.find(".clone").remove(), r.container.append(r.slides.first().clone().addClass("clone")).prepend(r.slides.last().clone().addClass("clone")));
                r.newSlides = e(i.selector, r);
                n = f ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                a && !l ? (r.container.height(200 * (r.count + r.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    r.newSlides.css({
                        display: "block"
                    });
                    r.doMath();
                    r.viewport.height(r.h);
                    r.setProps(n * r.h, "init")
                }, "init" === t ? 100 : 0)) : (r.container.width(200 * (r.count + r.cloneCount) + "%"), r.setProps(n * r.computedW, "init"), setTimeout(function() {
                    r.doMath();
                    r.newSlides.css({
                        width: r.computedW,
                        "float": "left",
                        display: "block"
                    });
                    i.smoothHeight && p.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            l || r.slides.removeClass(s + "active-slide").eq(r.currentSlide).addClass(s + "active-slide")
        };
        r.doMath = function() {
            var e = r.slides.first(),
                t = i.itemMargin,
                n = i.minItems,
                s = i.maxItems;
            r.w = r.width();
            r.h = e.height();
            r.boxPadding = e.outerWidth() - e.width();
            l ? (r.itemT = i.itemWidth + t, r.minW = n ? n * r.itemT : r.w, r.maxW = s ? s * r.itemT : r.w, r.itemW = r.minW > r.w ? (r.w - t * n) / n : r.maxW < r.w ? (r.w - t * s) / s : i.itemWidth > r.w ? r.w : i.itemWidth, r.visible = Math.floor(r.w / (r.itemW + t)), r.move = 0 < i.move && i.move < r.visible ? i.move : r.visible, r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1), r.last = r.pagingCount - 1, r.limit = 1 === r.pagingCount ? 0 : i.itemWidth > r.w ? (r.itemW + 2 * t) * r.count - r.w - t : (r.itemW + t) * r.count - r.w - t) : (r.itemW = r.w, r.pagingCount = r.count, r.last = r.count - 1);
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function(e, t) {
            r.doMath();
            l || (e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && 0 !== e && (r.currentSlide -= 1), r.animatingTo = r.currentSlide);
            if (i.controlNav && !r.manualControls)
                if ("add" === t && !l || r.pagingCount > r.controlNav.length) p.controlNav.update("add");
                else if ("remove" === t && !l || r.pagingCount < r.controlNav.length) l && r.currentSlide > r.last && (r.currentSlide -= 1, r.animatingTo -= 1), p.controlNav.update("remove", r.last);
            i.directionNav && p.directionNav.update()
        };
        r.addSlide = function(t, n) {
            var s = e(t);
            r.count += 1;
            r.last = r.count - 1;
            a && f ? void 0 !== n ? r.slides.eq(r.count - n).after(s) : r.container.prepend(s) : void 0 !== n ? r.slides.eq(n).before(s) : r.container.append(s);
            r.update(n, "add");
            r.slides = e(i.selector + ":not(.clone)", r);
            r.setup();
            i.added(r)
        };
        r.removeSlide = function(t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? e(t, r.slides).remove() : a && f ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(n, "remove");
            r.slides = e(i.selector + ":not(.clone)", r);
            r.setup();
            i.removed(r)
        };
        p.init()
    };
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    };
    e.fn.flexslider = function(t) {
        void 0 === t && (t = {});
        if ("object" === typeof t) return this.each(function() {
            var n = e(this),
                r = n.find(t.selector ? t.selector : ".slides > li");
            1 === r.length ? (r.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
            case "play":
                n.play();
                break;
            case "pause":
                n.pause();
                break;
            case "next":
                n.flexAnimate(n.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                n.flexAnimate(n.getTarget("prev"), !0);
                break;
            default:
                "number" === typeof t && n.flexAnimate(t, !0)
        }
    }
})(jQuery);
(function() {
    var e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v = {}.hasOwnProperty,
        m = function(e, t) {
            function r() {
                this.constructor = e
            }
            for (var n in t) {
                if (v.call(t, n)) e[n] = t[n]
            }
            r.prototype = t.prototype;
            e.prototype = new r;
            e.__super__ = t.prototype;
            return e
        };
    (function() {
        var e, t, n, r, i, s, o;
        i = ["ms", "moz", "webkit", "o"];
        for (s = 0, o = i.length; s < o; s++) {
            r = i[s];
            if (window.requestAnimationFrame) {
                break
            }
            window.requestAnimationFrame = window[r + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"]
        }
        e = null;
        n = 0;
        t = {};
        if (!requestAnimationFrame) {
            window.requestAnimationFrame = function(e, t) {
                var n, r, i, s;
                n = (new Date).getTime();
                s = Math.max(0, 16 - (n - i));
                r = window.setTimeout(function() {
                    return e(n + s)
                }, s);
                i = n + s;
                return r
            };
            return window.cancelAnimationFrame = function(e) {
                return clearTimeout(e)
            }
        } else if (!window.cancelAnimationFrame) {
            e = window.requestAnimationFrame;
            window.requestAnimationFrame = function(r, i) {
                var s;
                s = ++n;
                e(function() {
                    if (!t[s]) {
                        return r()
                    }
                }, i);
                return s
            };
            return window.cancelAnimationFrame = function(e) {
                return t[e] = true
            }
        }
    })();
    String.prototype.hashCode = function() {
        var e, t, n, r, i;
        t = 0;
        if (this.length === 0) {
            return t
        }
        for (n = r = 0, i = this.length; 0 <= i ? r < i : r > i; n = 0 <= i ? ++r : --r) {
            e = this.charCodeAt(n);
            t = (t << 5) - t + e;
            t = t & t
        }
        return t
    };
    p = function(e) {
        var t, n;
        t = Math.floor(e / 3600);
        n = Math.floor((e - t * 3600) / 60);
        e -= t * 3600 + n * 60;
        e += "";
        n += "";
        while (n.length < 2) {
            n = "0" + n
        }
        while (e.length < 2) {
            e = "0" + e
        }
        t = t ? t + ":" : "";
        return t + n + ":" + e
    };
    c = function(e) {
        return l(e.toFixed(0))
    };
    d = function(e, t) {
        var n, r;
        for (n in t) {
            if (!v.call(t, n)) continue;
            r = t[n];
            e[n] = r
        }
        return e
    };
    h = function(e, t) {
        var n, r, i;
        r = {};
        for (n in e) {
            if (!v.call(e, n)) continue;
            i = e[n];
            r[n] = i
        }
        for (n in t) {
            if (!v.call(t, n)) continue;
            i = t[n];
            r[n] = i
        }
        return r
    };
    l = function(e) {
        var t, n, r, i;
        e += "";
        n = e.split(".");
        r = n[0];
        i = "";
        if (n.length > 1) {
            i = "." + n[1]
        }
        t = /(\d+)(\d{3})/;
        while (t.test(r)) {
            r = r.replace(t, "$1" + "," + "$2")
        }
        return r + i
    };
    f = function() {
        function e(e, t) {
            if (e == null) {
                e = true
            }
            this.clear = t != null ? t : true;
            if (e) {
                AnimationUpdater.add(this)
            }
        }
        e.prototype.animationSpeed = 32;
        e.prototype.update = function(e) {
            var t;
            if (e == null) {
                e = false
            }
            if (e || this.displayedValue !== this.value) {
                if (this.ctx && this.clear) {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
                t = this.value - this.displayedValue;
                if (Math.abs(t / this.animationSpeed) <= .001) {
                    this.displayedValue = this.value
                } else {
                    this.displayedValue = this.displayedValue + t / this.animationSpeed
                }
                this.render();
                return true
            }
            return false
        };
        return e
    }();
    i = function(e) {
        function t() {
            return t.__super__.constructor.apply(this, arguments)
        }
        m(t, e);
        t.prototype.setTextField = function(e) {
            return this.textField = e instanceof a ? e : new a(e)
        };
        t.prototype.setMinValue = function(e, t) {
            var n, r, i, s, o;
            this.minValue = e;
            if (t == null) {
                t = true
            }
            if (t) {
                this.displayedValue = this.minValue;
                s = this.gp || [];
                o = [];
                for (r = 0, i = s.length; r < i; r++) {
                    n = s[r];
                    o.push(n.displayedValue = this.minValue)
                }
                return o
            }
        };
        t.prototype.setOptions = function(e) {
            if (e == null) {
                e = null
            }
            this.options = h(this.options, e);
            if (this.textField) {
                this.textField.el.style.fontSize = e.fontSize + "px"
            }
            return this
        };
        return t
    }(f);
    a = function() {
        function e(e) {
            this.el = e
        }
        e.prototype.render = function(e) {
            return this.el.innerHTML = c(e.displayedValue)
        };
        return e
    }();
    e = function(e) {
        function t(e, t) {
            this.elem = e;
            this.text = t != null ? t : false;
            this.value = 1 * this.elem.innerHTML;
            if (this.text) {
                this.value = 0
            }
        }
        m(t, e);
        t.prototype.displayedValue = 0;
        t.prototype.value = 0;
        t.prototype.setVal = function(e) {
            return this.value = 1 * e
        };
        t.prototype.render = function() {
            var e;
            if (this.text) {
                e = p(this.displayedValue.toFixed(0))
            } else {
                e = l(c(this.displayedValue))
            }
            return this.elem.innerHTML = e
        };
        return t
    }(f);
    t = {
        create: function(t) {
            var n, r, i, s;
            r = [];
            for (i = 0, s = t.length; i < s; i++) {
                n = t[i];
                r.push(new e(n))
            }
            return r
        }
    };
    u = function(e) {
        function t(e) {
            this.gauge = e;
            this.ctx = this.gauge.ctx;
            this.canvas = this.gauge.canvas;
            t.__super__.constructor.call(this, false, false);
            this.setOptions()
        }
        m(t, e);
        t.prototype.displayedValue = 0;
        t.prototype.value = 0;
        t.prototype.options = {
            strokeWidth: .035,
            length: .1,
            color: "#000000"
        };
        t.prototype.setOptions = function(e) {
            if (e == null) {
                e = null
            }
            d(this.options, e);
            this.length = this.canvas.height * this.options.length;
            this.strokeWidth = this.canvas.height * this.options.strokeWidth;
            this.maxValue = this.gauge.maxValue;
            this.minValue = this.gauge.minValue;
            this.animationSpeed = this.gauge.animationSpeed;
            return this.options.angle = this.gauge.options.angle
        };
        t.prototype.render = function() {
            var e, t, n, r, i, s, o, u, a;
            e = this.gauge.getAngle.call(this, this.displayedValue);
            t = this.canvas.width / 2;
            n = this.canvas.height * .9;
            u = Math.round(t + this.length * Math.cos(e));
            a = Math.round(n + this.length * Math.sin(e));
            s = Math.round(t + this.strokeWidth * Math.cos(e - Math.PI / 2));
            o = Math.round(n + this.strokeWidth * Math.sin(e - Math.PI / 2));
            r = Math.round(t + this.strokeWidth * Math.cos(e + Math.PI / 2));
            i = Math.round(n + this.strokeWidth * Math.sin(e + Math.PI / 2));
            this.ctx.fillStyle = this.options.color;
            this.ctx.beginPath();
            this.ctx.arc(t, n, this.strokeWidth, 0, Math.PI * 2, true);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.moveTo(s, o);
            this.ctx.lineTo(u, a);
            this.ctx.lineTo(r, i);
            return this.ctx.fill()
        };
        return t
    }(f);
    n = function() {
        function e(e) {
            this.elem = e
        }
        e.prototype.updateValues = function(e) {
            this.value = e[0];
            this.maxValue = e[1];
            this.avgValue = e[2];
            return this.render()
        };
        e.prototype.render = function() {
            var e, t;
            if (this.textField) {
                this.textField.text(c(this.value))
            }
            if (this.maxValue === 0) {
                this.maxValue = this.avgValue * 2
            }
            t = this.value / this.maxValue * 100;
            e = this.avgValue / this.maxValue * 100;
            $(".bar-value", this.elem).css({
                width: t + "%"
            });
            return $(".typical-value", this.elem).css({
                width: e + "%"
            })
        };
        return e
    }();
    o = function(e) {
        function t(e) {
            this.canvas = e;
            t.__super__.constructor.call(this);
            if (typeof G_vmlCanvasManager !== "undefined") {
                this.canvas = window.G_vmlCanvasManager.initElement(this.canvas)
            }
            this.ctx = this.canvas.getContext("2d");
            this.gp = [new u(this)];
            this.setOptions();
            this.render()
        }
        m(t, e);
        t.prototype.elem = null;
        t.prototype.value = [20];
        t.prototype.maxValue = 80;
        t.prototype.minValue = 0;
        t.prototype.displayedAngle = 0;
        t.prototype.displayedValue = 0;
        t.prototype.lineWidth = 40;
        t.prototype.paddingBottom = .1;
        t.prototype.options = {
            colorStart: "#6fadcf",
            colorStop: void 0,
            strokeColor: "#e0e0e0",
            pointer: {
                length: .8,
                strokeWidth: .035
            },
            angle: .15,
            lineWidth: .44,
            fontSize: 40
        };
        t.prototype.setOptions = function(e) {
            var n, r, i, s;
            if (e == null) {
                e = null
            }
            t.__super__.setOptions.call(this, e);
            this.lineWidth = this.canvas.height * (1 - this.paddingBottom) * this.options.lineWidth;
            this.radius = this.canvas.height * (1 - this.paddingBottom) - this.lineWidth;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.render();
            s = this.gp;
            for (r = 0, i = s.length; r < i; r++) {
                n = s[r];
                n.setOptions(this.options.pointer);
                n.render()
            }
            return this
        };
        t.prototype.set = function(e) {
            var t, n, r, i, s, o;
            if (!(e instanceof Array)) {
                e = [e]
            }
            if (e.length > this.gp.length) {
                for (t = r = 0, o = e.length - this.gp.length; 0 <= o ? r < o : r > o; t = 0 <= o ? ++r : --r) {
                    this.gp.push(new u(this))
                }
            }
            t = 0;
            for (i = 0, s = e.length; i < s; i++) {
                n = e[i];
                if (n > this.maxValue) {
                    this.maxValue = this.value * 1.1
                }
                this.gp[t].value = n;
                this.gp[t++].setOptions({
                    maxValue: this.maxValue,
                    angle: this.options.angle
                })
            }
            this.value = e[e.length - 1];
            return AnimationUpdater.run()
        };
        t.prototype.getAngle = function(e) {
            return (1 + this.options.angle) * Math.PI + (e - this.minValue) / (this.maxValue - this.minValue) * (1 - this.options.angle * 2) * Math.PI
        };
        t.prototype.render = function() {
            var e, t, n, r, i, s, o, u, a;
            i = this.canvas.width / 2;
            r = this.canvas.height * (1 - this.paddingBottom);
            e = this.getAngle(this.displayedValue);
            if (this.textField) {
                this.textField.render(this)
            }
            this.ctx.lineCap = "butt";
            if (this.options.customFillStyle !== void 0) {
                t = this.options.customFillStyle(this)
            } else if (this.options.colorStop !== void 0) {
                t = this.ctx.createRadialGradient(i, r, 9, i, r, 70);
                t.addColorStop(0, this.options.colorStart);
                t.addColorStop(1, this.options.colorStop)
            } else {
                t = this.options.colorStart
            }
            this.ctx.strokeStyle = t;
            this.ctx.beginPath();
            this.ctx.arc(i, r, this.radius, (1 + this.options.angle) * Math.PI, e, false);
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.stroke();
            this.ctx.strokeStyle = this.options.strokeColor;
            this.ctx.beginPath();
            this.ctx.arc(i, r, this.radius, e, (2 - this.options.angle) * Math.PI, false);
            this.ctx.stroke();
            u = this.gp;
            a = [];
            for (s = 0, o = u.length; s < o; s++) {
                n = u[s];
                a.push(n.update(true))
            }
            return a
        };
        return t
    }(i);
    r = function(e) {
        function t(e) {
            this.canvas = e;
            t.__super__.constructor.call(this);
            if (typeof G_vmlCanvasManager !== "undefined") {
                this.canvas = window.G_vmlCanvasManager.initElement(this.canvas)
            }
            this.ctx = this.canvas.getContext("2d");
            this.setOptions();
            this.render()
        }
        m(t, e);
        t.prototype.lineWidth = 15;
        t.prototype.displayedValue = 0;
        t.prototype.value = 33;
        t.prototype.maxValue = 80;
        t.prototype.minValue = 0;
        t.prototype.options = {
            lineWidth: .1,
            colorStart: "#6f6ea0",
            colorStop: "#c0c0db",
            strokeColor: "#eeeeee",
            shadowColor: "#d5d5d5",
            angle: .35
        };
        t.prototype.getAngle = function(e) {
            return (1 - this.options.angle) * Math.PI + (e - this.minValue) / (this.maxValue - this.minValue) * (2 + this.options.angle - (1 - this.options.angle)) * Math.PI
        };
        t.prototype.setOptions = function(e) {
            if (e == null) {
                e = null
            }
            t.__super__.setOptions.call(this, e);
            this.lineWidth = this.canvas.height * this.options.lineWidth;
            this.radius = this.canvas.height / 2 - this.lineWidth / 2;
            return this
        };
        t.prototype.set = function(e) {
            this.value = e;
            if (this.value > this.maxValue) {
                this.maxValue = this.value * 1.1
            }
            return AnimationUpdater.run()
        };
        t.prototype.render = function() {
            var e, t, n, r, i, s;
            e = this.getAngle(this.displayedValue);
            s = this.canvas.width / 2;
            n = this.canvas.height / 2;
            if (this.textField) {
                this.textField.render(this)
            }
            t = this.ctx.createRadialGradient(s, n, 39, s, n, 70);
            t.addColorStop(0, this.options.colorStart);
            t.addColorStop(1, this.options.colorStop);
            r = this.radius - this.lineWidth / 2;
            i = this.radius + this.lineWidth / 2;
            this.ctx.strokeStyle = this.options.strokeColor;
            this.ctx.beginPath();
            this.ctx.arc(s, n, this.radius, (1 - this.options.angle) * Math.PI, (2 + this.options.angle) * Math.PI, false);
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.lineCap = "round";
            this.ctx.stroke();
            this.ctx.strokeStyle = t;
            this.ctx.beginPath();
            this.ctx.arc(s, n, this.radius, (1 - this.options.angle) * Math.PI, e, false);
            return this.ctx.stroke()
        };
        return t
    }(i);
    s = function(e) {
        function t() {
            return t.__super__.constructor.apply(this, arguments)
        }
        m(t, e);
        t.prototype.strokeGradient = function(e, t, n, r) {
            var i;
            i = this.ctx.createRadialGradient(e, t, n, e, t, r);
            i.addColorStop(0, this.options.shadowColor);
            i.addColorStop(.12, this.options._orgStrokeColor);
            i.addColorStop(.88, this.options._orgStrokeColor);
            i.addColorStop(1, this.options.shadowColor);
            return i
        };
        t.prototype.setOptions = function(e) {
            var n, r, i, s;
            if (e == null) {
                e = null
            }
            t.__super__.setOptions.call(this, e);
            s = this.canvas.width / 2;
            n = this.canvas.height / 2;
            r = this.radius - this.lineWidth / 2;
            i = this.radius + this.lineWidth / 2;
            this.options._orgStrokeColor = this.options.strokeColor;
            this.options.strokeColor = this.strokeGradient(s, n, r, i);
            return this
        };
        return t
    }(r);
    window.AnimationUpdater = {
        elements: [],
        animId: null,
        addAll: function(e) {
            var t, n, r, i;
            i = [];
            for (n = 0, r = e.length; n < r; n++) {
                t = e[n];
                i.push(AnimationUpdater.elements.push(t))
            }
            return i
        },
        add: function(e) {
            return AnimationUpdater.elements.push(e)
        },
        run: function() {
            var e, t, n, r, i;
            e = true;
            i = AnimationUpdater.elements;
            for (n = 0, r = i.length; n < r; n++) {
                t = i[n];
                if (t.update()) {
                    e = false
                }
            }
            if (!e) {
                return AnimationUpdater.animId = requestAnimationFrame(AnimationUpdater.run)
            } else {
                return cancelAnimationFrame(AnimationUpdater.animId)
            }
        }
    };
    window.Gauge = o;
    window.Donut = s;
    window.BaseDonut = r;
    window.TextRenderer = a
}).call(this);
(function(e) {
    function t(e) {
        if (e.attr("title") || typeof e.attr("original-title") != "string") {
            e.attr("original-title", e.attr("title") || "").removeAttr("title")
        }
    }

    function n(n, r) {
        this.$element = e(n);
        this.options = r;
        this.enabled = true;
        t(this.$element)
    }
    n.prototype = {
        show: function() {
            var t = this.getTitle();
            if (t && this.enabled) {
                var n = this.tip();
                n.find(".tipsy-inner")[this.options.html ? "html" : "text"](t);
                n[0].className = "tipsy";
                n.remove().css({
                    top: 0,
                    left: 0,
                    visibility: "hidden",
                    display: "block"
                }).appendTo(document.body);
                var r = e.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var i = n[0].offsetWidth,
                    s = n[0].offsetHeight;
                var o = typeof this.options.gravity == "function" ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
                var u;
                switch (o.charAt(0)) {
                    case "n":
                        u = {
                            top: r.top + r.height + this.options.offset,
                            left: r.left + r.width / 2 - i / 2
                        };
                        break;
                    case "s":
                        u = {
                            top: r.top - s - this.options.offset,
                            left: r.left + r.width / 2 - i / 2
                        };
                        break;
                    case "e":
                        u = {
                            top: r.top + r.height / 2 - s / 2,
                            left: r.left - i - this.options.offset
                        };
                        break;
                    case "w":
                        u = {
                            top: r.top + r.height / 2 - s / 2,
                            left: r.left + r.width + this.options.offset
                        };
                        break
                }
                if (o.length == 2) {
                    if (o.charAt(1) == "w") {
                        u.left = r.left + r.width / 2 - 15
                    } else {
                        u.left = r.left + r.width / 2 - i + 15
                    }
                }
                n.css(u).addClass("tipsy-" + o);
                if (this.options.fade) {
                    $tip_top = n.css("top");
                    $new_top = parseInt($tip_top) - 20 + "px";
                    n.css({
                        top: $new_top
                    });
                    n.stop().css({
                        opacity: 0,
                        display: "block",
                        visibility: "visible"
                    }).animate({
                        opacity: this.options.opacity,
                        top: $tip_top
                    }, 200, "easeOutSine")
                } else {
                    n.css({
                        visibility: "visible",
                        opacity: this.options.opacity
                    })
                }
            }
        },
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() {
                    e(this).remove()
                })
            } else {
                this.tip().remove()
            }
        },
        getTitle: function() {
            var e, n = this.$element,
                r = this.options;
            t(n);
            var e, r = this.options;
            if (typeof r.title == "string") {
                e = n.attr(r.title == "title" ? "original-title" : r.title)
            } else if (typeof r.title == "function") {
                e = r.title.call(n[0])
            }
            e = ("" + e).replace(/(^\s*|\s*$)/, "");
            return e || r.fallback
        },
        tip: function() {
            if (!this.$tip) {
                this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')
            }
            return this.$tip
        },
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null
            }
        },
        enable: function() {
            this.enabled = true
        },
        disable: function() {
            this.enabled = false
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        }
    };
    e.fn.tipsy = function(t) {
        function r(r) {
            var i = e.data(r, "tipsy");
            if (!i) {
                i = new n(r, e.fn.tipsy.elementOptions(r, t));
                e.data(r, "tipsy", i)
            }
            return i
        }

        function i() {
            var e = r(this);
            e.hoverState = "in";
            if (t.delayIn == 0) {
                e.show()
            } else {
                setTimeout(function() {
                    if (e.hoverState == "in") e.show()
                }, t.delayIn)
            }
        }

        function s() {
            var e = r(this);
            e.hoverState = "out";
            if (t.delayOut == 0) {
                e.hide()
            } else {
                setTimeout(function() {
                    if (e.hoverState == "out") e.hide()
                }, t.delayOut)
            }
        }
        if (t === true) {
            return this.data("tipsy")
        } else if (typeof t == "string") {
            return this.data("tipsy")[t]()
        }
        t = e.extend({}, e.fn.tipsy.defaults, t);
        if (!t.live) this.each(function() {
            r(this)
        });
        if (t.trigger != "manual") {
            var o = t.live ? "live" : "bind",
                u = t.trigger == "hover" ? "mouseenter" : "focus",
                a = t.trigger == "hover" ? "mouseleave" : "blur";
            this[o](u, i)[o](a, s)
        }
        return this
    };
    e.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: "",
        gravity: "n",
        html: false,
        live: false,
        offset: 0,
        opacity: .8,
        title: "title",
        trigger: "hover"
    };
    e.fn.tipsy.elementOptions = function(t, n) {
        return e.metadata ? e.extend({}, n, e(t).metadata()) : n
    };
    e.fn.tipsy.autoNS = function() {
        return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
    };
    e.fn.tipsy.autoWE = function() {
        return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
    }
})(jQuery);
(function(e) {
    e.fn.flipCounter = function(t) {
        function o() {
            var e = n.data("flipCounter");
            if (typeof e == "undefined") return false;
            return true
        }

        function u(e) {
            var t = n.data("flipCounter");
            var r = t[e];
            if (typeof r !== "undefined") {
                return r
            }
            return false
        }

        function a(e, t) {
            var r = n.data("flipCounter");
            r[e] = t;
            n.data("flipCounter", r)
        }

        function f() {
            if (n.children('[name="' + u("counterFieldName") + '"]').length < 1) {
                n.append('<input type="hidden" name="' + u("counterFieldName") + '" value="' + u("number") + '" />')
            }
            var t = h();
            var r = v().length;
            if (r > t) {
                for (i = 0; i < r - t; i++) {
                    var s = e('<span class="' + u("digitClass") + '" />');
                    n.prepend(s)
                }
            } else if (r < t) {
                for (i = 0; i < t - r; i++) {
                    n.children("." + u("digitClass")).first().remove()
                }
            }
            n.find("." + u("digitClass")).each(function() {
                if (0 == e(this).find("span").length) {
                    e(this).append("<span>0</span>")
                }
            })
        }

        function l() {
            f();
            var t = v();
            var n = c();
            var r = 0;
            e.each(n, function(n, i) {
                digit = t.toString().charAt(r);
                e(this).find("span").text(digit.replace(" ", "ďż˝").toString());
                r++
            });
            d()
        }

        function c() {
            return n.children("." + u("digitClass"))
        }

        function h() {
            return c().length
        }

        function p() {
            var e = parseFloat(n.children('[name="' + u("counterFieldName") + '"]').val());
            if (e == e == false) return false;
            return e
        }

        function d() {
            n.children('[name="' + u("counterFieldName") + '"]').val(u("number"))
        }

        function v() {
            var t = u("number");
            if (typeof t !== "number") {
                e.error("Attempting to render non-numeric value.");
                return "0"
            }
            var n = "";
            if (u("formatNumberOptions")) {
                if (e.formatNumber) {
                    n = e.formatNumber(t, u("formatNumberOptions"))
                } else {
                    e.error("The numberformatter jQuery plugin is not loaded. This plugin is required to use the formatNumberOptions setting.")
                }
            } else {
                if (t >= 0) {
                    var r = u("numIntegralDigits");
                    var i = r - t.toFixed().toString().length;
                    for (var s = 0; s < i; s++) {
                        n += "0"
                    }
                    n += t.toFixed(u("numFractionalDigits"))
                } else {
                    n = "-" + Math.abs(t.toFixed(u("numFractionalDigits")))
                }
            }
            return n
        }

        function m(e) {
            var t = "";
            var n = new Array;
            n["1"] = u("digitWidth") * 0;
            n["2"] = u("digitWidth") * -1;
            n["3"] = u("digitWidth") * -2;
            n["4"] = u("digitWidth") * -3;
            n["5"] = u("digitWidth") * -4;
            n["6"] = u("digitWidth") * -5;
            n["7"] = u("digitWidth") * -6;
            n["8"] = u("digitWidth") * -7;
            n["9"] = u("digitWidth") * -8;
            n["0"] = u("digitWidth") * -9;
            n["."] = u("digitWidth") * -10;
            n["-"] = u("digitWidth") * -11;
            n[","] = u("digitWidth") * -12;
            n[" "] = u("digitWidth") * -13;
            if (e in n) {}
            return ""
        }

        function g(t) {
            if (true == u("animating")) b();
            if (typeof t !== "undefined") {
                t = e.extend(n.data("flipCounter"), t);
                n.data("flipCounter", t)
            } else {
                t = n.data("flipCounter")
            } if (false == u("start_time")) {
                a("start_time", (new Date).getTime())
            }
            if (false == u("time")) {
                a("time", 0)
            }
            if (false == u("elapsed")) {
                a("elapsed", "0.0")
            }
            if (false == u("start_number")) {
                a("start_number", u("number"));
                if (false == u("start_number")) {
                    a("start_number", 0)
                }
            }
            y();
            var r = u("onAnimationStarted");
            if (typeof r == "function") r.call(n, n)
        }

        function y() {
            function c() {
                t += 10;
                r = Math.floor(t / 10) / 10;
                if (Math.round(r) == r) {
                    r += ".0"
                }
                a("elapsed", r);
                var u = (new Date).getTime() - e - t;
                var h = 0;
                if (typeof f == "function") {
                    h = f.apply(n, [false, t, i, s, o])
                } else {
                    h = S(false, t, i, s, o)
                }
                a("number", h);
                a("time", t);
                l();
                if (t < o) {
                    a("interval", window.setTimeout(c, 10 - u))
                } else {
                    b()
                }
            }
            var e = u("start_time");
            var t = u("time");
            var r = u("elapsed");
            var i = u("start_number");
            var s = u("end_number") - u("start_number");
            if (s == 0) return false;
            var o = u("duration");
            var f = u("easing");
            a("animating", true);
            window.setTimeout(c, 10)
        }

        function b() {
            clearTimeout(u("interval"));
            a("start_time", false);
            a("start_number", false);
            a("end_number", false);
            a("time", 0);
            a("animating", false);
            a("paused", false);
            var e = u("onAnimationStopped");
            if (typeof e == "function") {
                e.call(n, n)
            }
        }

        function w() {
            if (false == u("animating") || true == u("paused")) return false;
            clearTimeout(u("interval"));
            a("paused", true);
            var e = u("onAnimationPaused");
            if (typeof e == "function") e.call(n, n)
        }

        function E() {
            if (false == u("animating") || false == u("paused")) return false;
            a("paused", false);
            y();
            var e = u("onAnimationResumed");
            if (typeof e == "function") e.call(n, n)
        }

        function S(e, t, n, r, i) {
            return t / i * r + n
        }
        var n = false;
        var r = {
            number: 0,
            numIntegralDigits: 1,
            numFractionalDigits: 0,
            digitClass: "counter-digit",
            counterFieldName: "counter-value",
            easing: false,
            duration: 700,
            onAnimationStarted: false,
            onAnimationStopped: false,
            onAnimationPaused: false,
            onAnimationResumed: false,
            formatNumberOptions: false
        };
        var s = {
            init: function(t) {
                return this.each(function() {
                    n = e(this);
                    var i = e.extend(r, t);
                    var s = n.data("flipCounter");
                    t = e.extend(s, i);
                    n.data("flipCounter", t);
                    if (t.number === false || t.number == 0) {
                        p() !== false ? t.number = p() : t.number = 0;
                        a("number", t.number)
                    }
                    a("animating", false);
                    a("start_time", false);
                    n.bind("startAnimation", function(e, t) {
                        g(t)
                    });
                    n.bind("pauseAnimation", function(e) {
                        w()
                    });
                    n.bind("resumeAnimation", function(e) {
                        E()
                    });
                    n.bind("stopAnimation", function(e) {
                        b()
                    });
                    n.htmlClean();
                    l()
                })
            },
            renderCounter: function(t) {
                return this.each(function() {
                    n = e(this);
                    if (!o()) e(this).flipCounter();
                    a("number", t);
                    l()
                })
            },
            setNumber: function(t) {
                return this.each(function() {
                    n = e(this);
                    if (!o()) e(this).flipCounter();
                    a("number", t);
                    l()
                })
            },
            getNumber: function() {
                var t = false;
                this.each(t = function() {
                    n = e(this);
                    if (!o()) e(this).flipCounter();
                    t = u("number");
                    return t
                });
                return t
            },
            startAnimation: function(t) {
                return this.each(function() {
                    n = e(this);
                    if (!o()) e(this).flipCounter();
                    n.trigger("startAnimation", t)
                })
            },
            stopAnimation: function() {
                return this.each(function() {
                    n = e(this);
                    if (!o()) e(this).flipCounter();
                    n.trigger("stopAnimation")
                })
            },
            pauseAnimation: function() {
                return this.each(function() {
                    n = e(this);
                    if (!o()) e(this).flipCounter();
                    n.trigger("pauseAnimation")
                })
            },
            resumeAnimation: function() {
                return this.each(function() {
                    n = e(this);
                    if (!o()) e(this).flipCounter();
                    n.trigger("resumeAnimation")
                })
            }
        };
        if (s[t]) {
            return s[t].apply(this, Array.prototype.slice.call(arguments, 1))
        } else if (typeof t === "object" || !t) {
            return s.init.apply(this, arguments)
        } else {
            e.error("Method " + t + " does not exist on jQuery.flipCounter")
        }
    }
})(jQuery);
jQuery.fn.htmlClean = function() {
    this.contents().filter(function() {
        if (this.nodeType != 3) {
            jQuery(this).htmlClean();
            return false
        } else {
            return !/\S/.test(this.nodeValue)
        }
    }).remove()
}