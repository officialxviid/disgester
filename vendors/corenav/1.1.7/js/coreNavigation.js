/** 
 * Cornav (Core Navigation)
 * v1.1.7
 * https://github.com/adamnurdin01/corenav  
 */
!(function (n) {
    var e = {};
    function o(t) {
        if (e[t]) return e[t].exports;
        var a = (e[t] = { i: t, l: !1, exports: {} });
        return n[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
    }
    (o.m = n),
        (o.c = e),
        (o.d = function (n, e, t) {
            o.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
        }),
        (o.r = function (n) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
        }),
        (o.t = function (n, e) {
            if ((1 & e && (n = o(n)), 8 & e)) return n;
            if (4 & e && "object" == typeof n && n && n.__esModule) return n;
            var t = Object.create(null);
            if ((o.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: n }), 2 & e && "string" != typeof n))
                for (var a in n)
                    o.d(
                        t,
                        a,
                        function (e) {
                            return n[e];
                        }.bind(null, a)
                    );
            return t;
        }),
        (o.n = function (n) {
            var e =
                n && n.__esModule
                    ? function () {
                        return n.default;
                    }
                    : function () {
                        return n;
                    };
            return o.d(e, "a", e), e;
        }),
        (o.o = function (n, e) {
            return Object.prototype.hasOwnProperty.call(n, e);
        }),
        (o.p = ""),
        o((o.s = 4));
})([
    function (n, e, o) {
        "use strict";
        var t = o(1),
            a = o(10),
            r = /^\s+|\s+$/g,
            i = /^[-+]0x[0-9a-f]+$/i,
            s = /^0b[01]+$/i,
            c = /^0o[0-7]+$/i,
            l = parseInt;
        n.exports = function (n) {
            if ("number" == typeof n) return n;
            if (a(n)) return NaN;
            if (t(n)) {
                var e = "function" == typeof n.valueOf ? n.valueOf() : n;
                n = t(e) ? e + "" : e;
            }
            if ("string" != typeof n) return 0 === n ? n : +n;
            n = n.replace(r, "");
            var o = s.test(n);
            return o || c.test(n) ? l(n.slice(2), o ? 2 : 8) : i.test(n) ? NaN : +n;
        };
    },
    function (n, e, o) {
        "use strict";
        var t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                }
                : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                };
        n.exports = function (n) {
            var e = void 0 === n ? "undefined" : t(n);
            return null != n && ("object" == e || "function" == e);
        };
    },
    function (n, e, o) {
        "use strict";
        var t = o(3).Symbol;
        n.exports = t;
    },
    function (n, e, o) {
        "use strict";
        var t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                }
                : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                },
            a = o(12),
            r = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
            i = a || r || Function("return this")();
        n.exports = i;
    },
    function (n, e, o) {
        "use strict";
        var t = d(o(5)),
            a = d(o(19)),
            r = d(o(20)),
            i = d(o(21)),
            s = d(o(22)),
            c = d(o(23)),
            l = d(o(24));
        function d(n) {
            return n && n.__esModule ? n : { default: n };
        }
        !(function (n) {
            n.fn.coreNavigation = function (e) {
                var o = n.extend(
                    {
                        layout: "default",
                        menu: ".menu",
                        menuFullWidth: !1,
                        header: ".nav-header",
                        menuPosition: "left",
                        container: !0,
                        toggleMenu: ".toggle-bar",
                        toggleHoverSidebar: !1,
                        responsideSlide: !1,
                        dropdownEvent: "hover",
                        mode: "default",
                        animated: !1,
                        animatedIn: "bounceIn",
                        animatedOut: "bounceOut",
                        onInit: null,
                        onResize: null,
                        onOpenDropdown: null,
                        onCloseDropdown: null,
                        onOpenMegaMenu: null,
                        onCloseMegaMenu: null,
                        onStartSticky: null,
                        onEndSticky: null,
                        scrollspyActiveOn: null,
                    },
                    e
                );
                switch ((t.default.init(this, o), o.layout)) {
                    case "brand-center":
                        a.default.init(this, o);
                        break;
                    case "fullscreen":
                        r.default.init(this, o);
                        break;
                    case "sidebar":
                        i.default.init(this, o);
                        break;
                    case "sidebar-toggle":
                        s.default.init(this, o);
                        break;
                    case "section":
                        c.default.init(this, o);
                        break;
                    case "side-icon":
                        l.default.init(this, o);
                }
            };
        })(jQuery);
    },
    function (n, e, o) {
        "use strict";
        var t = r(o(6)),
            a = r(o(17));
        function r(n) {
            return n && n.__esModule ? n : { default: n };
        }
        var i = {
            init: function (n, e) {
                var o = this;
                if (
                    (n.addClass("core-nav"),
                        $(".core-nav").removeAttr("hidden"),
                        $(".core-content").length || $("body").wrapInner('<div class="core-content"></div>'),
                        $(e.menu).addClass("core-nav-list"),
                        $(e.toggleMenu).addClass("core-nav-toggle"),
                        $(e.menu).wrap('<div class="wrap-core-nav-list"></div>'),
                        $(".wrap-core-nav-list, .nav-header").addClass(e.menuPosition),
                        "default" == e.layout)
                )
                    switch (e.menuPosition) {
                        case "bottom":
                            e.container
                                ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container'></div>"), $(e.header).wrapInner("<div class='nav-container'></div>"))
                                : ($(".wrap-core-nav-list").wrapInner("<div class='full-container'></div>"), $(e.header).wrapInner("<div class='full-container'></div>"));
                            break;
                        case "bottom center":
                            e.container
                                ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container center'></div>"), $(e.header).wrapInner("<div class='nav-container center'></div>"))
                                : ($(".wrap-core-nav-list").wrapInner("<div class='full-container center'></div>"), $(e.header).wrapInner("<div class='full-container center'></div>"));
                            break;
                        case "bottom right":
                            e.container
                                ? ($(".wrap-core-nav-list").wrapInner("<div class='nav-container right'></div>"), $(e.header).wrapInner("<div class='nav-container'></div>"))
                                : ($(".wrap-core-nav-list").wrapInner("<div class='full-container right'></div>"), $(e.header).wrapInner("<div class='full-container'></div>"));
                            break;
                        default:
                            e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>");
                    }
                e.responsideSlide && $(".core-content").addClass("core-responsive-slide"),
                    o.attributesIcon(e),
                    o.toggleMenu(n),
                    o.megaMenu(e, ".core-nav-list .megamenu"),
                    o.dropddownMenu(e, ".core-nav-list .dropdown"),
                    $(".dropdown-overlay").on("click", function (n) {
                        n.preventDefault(),
                            $(".core-nav .dropdown").removeClass("open"),
                            $(".core-nav .megamenu").removeClass("open"),
                            $(".dropdown-overlay").removeClass("open-dropdown"),
                            $(".core-nav").removeClass("open-dropdown"),
                            $(".core-nav").removeClass("open-responsive"),
                            $(".core-responsive-slide").removeClass("open"),
                            $.isFunction(e.onCloseDropdown) && e.onCloseDropdown(),
                            $.isFunction(e.onCloseMegaMenu) && e.onCloseMegaMenu();
                    }),
                    $(window).on("resize", function () {
                        $(".core-nav .dropdown").removeClass("open"), $(".core-nav .megamenu").removeClass("open");
                    }),
                    this.setMode(e),
                    this.scrollSpy(e),
                    o.contentHeader(e),
                    $.isFunction(e.onInit) && e.onInit(),
                    $(window).on(
                        "resize",
                        (0, a.default)(function () {
                            o.contentHeader(e), o.attributesIcon(e), $.isFunction(e.onResize) && e.onResize();
                        }, 1e3)
                    );
            },
            setMode: function (n) {
                switch (n.mode) {
                    case "fixed":
                        $(".core-nav").addClass("nav-core-fixed");
                        break;
                    case "sticky":
                        $(".core-nav").addClass("nav-core-sticky"), $('<div class="stand-sticky"></div>').insertBefore(".core-nav"), $(".stand-sticky").css("height", $(".core-nav").height()), $(".stand-sticky").css("display", "none");
                        var e = $(".nav-core-sticky").offset().top;
                        $(window).on("resize", function () {
                            $(".stand-sticky").css("height", $(".core-nav").height());
                        }),
                            $(window).on("scroll", function () {
                                $(window).scrollTop() > e
                                    ? ($(".nav-core-sticky").hasClass("on-scroll") || ($.isFunction(n.onStartSticky) && n.onStartSticky()), $(".nav-core-sticky").addClass("on-scroll"), $(".stand-sticky").css("display", "block"))
                                    : ($(".nav-core-sticky").hasClass("on-scroll") && $.isFunction(n.onEndSticky) && n.onEndSticky(), $(".nav-core-sticky").removeClass("on-scroll"), $(".stand-sticky").css("display", "none"));
                            });
                }
            },
            topSearch: function (n) {
                var e = $(".wrap-search-top"),
                    o = e.html();
                e.length && (e.remove(), $(".core-nav").prepend('<div class="wrap-search-top">' + o + "</div>")),
                    n.container ? $(".wrap-search-top").wrapInner("<div class='nav-container'></div>") : $(".wrap-search-top").wrapInner("<div class='full-container'></div>"),
                    $(".toggle-search-top").on("click", function (n) {
                        n.preventDefault(), $(".wrap-search-top").slideToggle();
                    }),
                    $(window).on("resize", function () {
                        (0, t.default)(function () {
                            $(".toggle-search-top").on("click", function (n) {
                                n.preventDefault(), $(".wrap-search-top").slideToggle();
                            });
                        })();
                    });
            },
            contentHeader: function (n) {
                var e = $(".content-header").html(),
                    o = $(window).width();
                if ($(".content-header").length && "default" == n.layout)
                    switch (n.menuPosition) {
                        case "bottom":
                            o > 992
                                ? n.container
                                    ? ($(".nav-header .nav-container").prepend("<div class='content-header'>" + e + "</div>"), $(".core-nav > .content-header").remove())
                                    : ($(".nav-header .full-container").prepend("<div class='content-header'>" + e + "</div>"), $(".core-nav > .content-header").remove())
                                : ($(".content-header").remove(), $(".core-nav").prepend("<div class='content-header'>" + e + "</div>"));
                    }
            },
            fullScreenSearch: function () {
                $(".wrap-search-fullscreen").wrapInner("<div class='nav-container'></div>"),
                    $(".toggle-search-fullscreen").on("click", function (n) {
                        n.preventDefault(), $(".wrap-search-fullscreen").addClass("open");
                    }),
                    $(window).on("resize", function () {
                        (0, t.default)(function () {
                            $(".toggle-search-fullscreen").on("click", function (n) {
                                n.preventDefault(), $(".wrap-search-fullscreen").addClass("open");
                            });
                        })();
                    }),
                    $(".close-search").on("click", function (n) {
                        n.preventDefault(), $(".wrap-search-fullscreen").removeClass("open");
                    });
            },
            toggleMenu: function (n) {
                $(".core-nav-toggle").on("click", function (e) {
                    e.preventDefault(),
                        n.toggleClass("open-responsive"),
                        $(".core-responsive-slide").length && $(".core-responsive-slide").toggleClass("open"),
                        $(".open-responsive").length
                            ? ($(".dropdown-overlay").addClass("open-dropdown"), $(".core-nav").addClass("open-dropdown"), $(".core-nav .attributes .megamenu").removeClass("open"), $(".core-nav .attributes .dropdown").removeClass("open"))
                            : ($(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown")),
                        $(".wrap-search-top").slideUp();
                });
            },
            megaMenu: function (n, e) {
                $(".dropdown-overlay").length || $(".core-nav").after('<div class="dropdown-overlay"></div>'),
                    $(e).each(function () {
                        var e = $(this),
                            o = $(this).find("a").eq(0),
                            t = $(this).data("width");
                        t && ($(this).css("position", "relative"), "full" === t ? $(this).find(".megamenu-content").eq(0).css("width", "100vw") : $(this).find(".megamenu-content").eq(0).css("width", t)),
                            e.removeClass("open"),
                            o.on("click", function (o) {
                                o.preventDefault(),
                                    $(window).width() < 920 &&
                                    (e.hasClass("open")
                                        ? (n.animated
                                            ? i.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedOut, !1, function () {
                                                setTimeout(function () {
                                                    e.removeClass("open");
                                                }, 500);
                                            })
                                            : e.removeClass("open"),
                                            $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu())
                                        : ($(".megamenu").removeClass("open"),
                                            n.animated ? (e.addClass("open"), i.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open"),
                                            $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu())),
                                    i.overlayDropdown();
                            });
                        var a = function () {
                            if ("full" === t) {
                                var n = $(window).width() - (e.find("a").eq(0).offset().left + e.find("a").eq(0).eq(0).innerWidth());
                                e.find(".megamenu-content")
                                    .eq(0)
                                    .css("right", n > 0 ? -1 * n : n);
                            } else e.find(".megamenu-content").eq(0).css("right", 0);
                        };
                        switch (n.dropdownEvent) {
                            case "hover":
                                o.on("mouseenter", function (o) {
                                    $(window).width() > 920 && (n.animated ? (e.addClass("open"), i.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open")),
                                        a(),
                                        i.overlayDropdown(),
                                        $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu();
                                }),
                                    e.stop().on("mouseleave", function () {
                                        $(window).width() > 920 &&
                                            (n.animated
                                                ? i.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedOut, !1, function () {
                                                    setTimeout(function () {
                                                        e.removeClass("open");
                                                    }, 500);
                                                })
                                                : e.removeClass("open")),
                                            a(),
                                            i.overlayDropdown(),
                                            $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu();
                                    });
                                break;
                            case "accordion":
                            case "click":
                                o.on("click", function (o) {
                                    o.preventDefault(),
                                        $(window).width() > 920 &&
                                        (e.hasClass("open")
                                            ? (n.animated
                                                ? i.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedOut, !1, function () {
                                                    setTimeout(function () {
                                                        e.removeClass("open");
                                                    }, 500);
                                                })
                                                : e.removeClass("open"),
                                                $.isFunction(n.onCloseMegaMenu) && n.onCloseMegaMenu())
                                            : (e.closest("li").closest("ul").find(".open").removeClass("open"),
                                                n.animated ? (e.addClass("open"), i.animateCss(e.find(".megamenu-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open"),
                                                $.isFunction(n.onOpenMegaMenu) && n.onOpenMegaMenu())),
                                        a(),
                                        i.overlayDropdown();
                                });
                        }
                    });
            },
            dropddownMenu: function (n, e) {
                $(".dropdown-overlay").length || $(".core-nav").after('<div class="dropdown-overlay"></div>'),
                    $(e).each(function () {
                        var e = $(this),
                            o = $(this).find("a").eq(0);
                        switch (
                        (e.removeClass("open"),
                            o.on("click", function (o) {
                                o.preventDefault(),
                                    $(window).width() < 920 &&
                                    (e.hasClass("open")
                                        ? (n.animated
                                            ? i.animateCss(e.find(".dropdown-content").eq(0), n, n.animatedOut, !1, function () {
                                                setTimeout(function () {
                                                    e.removeClass("open");
                                                }, 500);
                                            })
                                            : e.removeClass("open"),
                                            $.isFunction(n.onCloseDropdown) && n.onCloseDropdown())
                                        : (n.animated ? (e.addClass("open"), i.animateCss(e.find(".dropdown-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown())),
                                    i.overlayDropdown();
                            }),
                            n.dropdownEvent)
                        ) {
                            case "hover":
                                o.on("mouseenter", function (o) {
                                    $(window).width() > 920 &&
                                        (n.animated ? (e.addClass("open"), i.animateCss(e.find(".dropdown-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open"), $.isFunction(n.onOpenDropdown) && n.onOpenDropdown()),
                                        i.overlayDropdown();
                                }),
                                    e.stop().on("mouseleave", function () {
                                        $(window).width() > 920 &&
                                            (n.animated
                                                ? i.animateCss(e.find(".dropdown-content").eq(0), n, n.animatedOut, !1, function () {
                                                    setTimeout(function () {
                                                        e.removeClass("open");
                                                    }, 500);
                                                })
                                                : e.removeClass("open"),
                                                $.isFunction(n.onCloseDropdown) && n.onCloseDropdown()),
                                            i.overlayDropdown();
                                    });
                                break;
                            case "click":
                                o.on("click", function (o) {
                                    o.preventDefault(),
                                        $(window).width() > 920 &&
                                        (e.hasClass("open")
                                            ? (n.animated
                                                ? i.animateCss(e.find(".dropdown-content").eq(0), n, n.animatedOut, !1, function () {
                                                    setTimeout(function () {
                                                        e.removeClass("open");
                                                    }, 500);
                                                })
                                                : e.removeClass("open"),
                                                $.isFunction(n.onCloseDropdown) && n.onCloseDropdown())
                                            : (e.closest("li").closest("ul").find(".open").removeClass("open"),
                                                n.animated ? (e.addClass("open"), i.animateCss(e.find(".dropdown-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open"),
                                                $.isFunction(n.onOpenDropdown) && n.onOpenDropdown())),
                                        i.overlayDropdown();
                                });
                                break;
                            case "accordion":
                                $(".wrap-core-nav-list").addClass("dropdown-accordion"),
                                    o.on("click", function (o) {
                                        o.preventDefault(),
                                            $(window).width() > 920 &&
                                            (e.hasClass("open")
                                                ? (n.animated
                                                    ? i.animateCss(e.find(".dropdown-content").eq(0), n, n.animatedOut, !1, function () {
                                                        setTimeout(function () {
                                                            e.removeClass("open");
                                                        }, 500);
                                                    })
                                                    : e.removeClass("open"),
                                                    $.isFunction(n.onCloseDropdown) && n.onCloseDropdown())
                                                : (e.closest("li").closest("ul").find(".open").removeClass("open"),
                                                    n.animated ? (e.addClass("open"), i.animateCss(e.find(".dropdown-content").eq(0), n, n.animatedIn, !0)) : e.addClass("open"),
                                                    $.isFunction(n.onOpenDropdown) && n.onOpenDropdown())),
                                            i.overlayDropdown();
                                    });
                        }
                    });
            },
            overlayDropdown: function () {
                var n = $(".dropdown").hasClass("open"),
                    e = $(".megamenu").hasClass("open");
                n || e ? ($(".dropdown-overlay").addClass("open-dropdown"), $(".core-nav").addClass("open-dropdown")) : ($(".dropdown-overlay").removeClass("open-dropdown"), $(".core-nav").removeClass("open-dropdown"));
            },
            attributesIcon: function (n) {
                var e = $(window).width(),
                    o = $(".core-nav .attributes"),
                    t = o.length,
                    a = o.html();
                if (t) {
                    switch (n.menuPosition) {
                        case "bottom center":
                        case "bottom right":
                        case "bottom":
                            n.container
                                ? e > 992 && ($(".core-nav .nav-container").prepend('<ul class="attributes">' + a + "</ul>"), $(".nav-header .attributes").remove())
                                : e > 992 && ($(".core-nav .full-container").prepend('<ul class="attributes">' + a + "</ul>"), $(".nav-header .attributes").remove());
                            break;
                        default:
                            n.container, e > 992 && ($(".core-nav .wrap-core-nav-list").prepend('<ul class="attributes">' + a + "</ul>"), $(".nav-header .attributes").remove());
                    }
                    "sidebar" == n.layout && e > 992 && $(".core-nav").prepend('<ul class="attributes">' + a + "</ul>"),
                        e < 992 &&
                        ($(".nav-header").prepend('<ul class="attributes">' + a + "</ul>"),
                            $(".wrap-core-nav-list .attributes").remove(),
                            $(".core-nav .attributes")
                                .find(".dropdown")
                                .each(function () {
                                    var n = $(this).width(),
                                        e = -1 * $(".dropdown-content", this).width();
                                    $(".dropdown-content", this).css("marginLeft", e + n);
                                }),
                            $(".core-nav .attributes")
                                .find(".megamenu")
                                .each(function () {
                                    var n = $(this).width(),
                                        e = -1 * $(".megamenu-content", this).width();
                                    $(".megamenu-content", this).css("marginLeft", e + n);
                                })),
                        o.remove(),
                        this.megaMenu(n, ".attributes .megamenu"),
                        this.dropddownMenu(n, ".attributes .dropdown"),
                        $(".toggle-side-menu").on("click", function (n) {
                            n.preventDefault(), $(".core-content").toggleClass("open-side-menu");
                        }),
                        $(window).on("resize", function () {
                            $(".core-content").removeClass("open-side-menu");
                        }),
                        this.topSearch(n),
                        this.fullScreenSearch();
                }
            },
            scrollSpy: function (n) {
                $(".scrollspy").each(function () {
                    var e = this,
                        o = $("a", this).attr("href");
                    $(o).length &&
                        $(window).on("scroll", function () {
                            var t = void 0;
                            (t = "section" == n.layout && $(window).width() > 920 ? $(o).offset().top : $(o).offset().top - parseInt($(o).css("padding-top"))),
                                $(window).scrollTop() > t - 1 || $(window).scrollTop() > t + 1 ? ($(".scrollspy").removeClass("active"), $(e).addClass("active")) : $(e).removeClass("active");
                        }),
                        $("a", this).on("click", function (e) {
                            e.preventDefault();
                            var t = $("html, body"),
                                a = void 0;
                            (a = "section" == n.layout && $(window).width() > 920 ? $(o).offset().top + 1 : $(o).offset().top - parseInt($(o).css("padding-top")) / 2), t.stop().animate({ scrollTop: a }, 500);
                        });
                });
            },
            animateCss: function (n, e, o, t, a) {
                n.removeClass("animated"), t ? n.removeClass(e.animatedOut) : n.removeClass(e.animatedIn), n.addClass("animated " + o), "function" == typeof a && a();
            },
        };
        n.exports = i;
    },
    function (n, e, o) {
        "use strict";
        var t = o(7);
        n.exports = function (n) {
            return t(2, n);
        };
    },
    function (n, e, o) {
        "use strict";
        var t = o(8);
        n.exports = function (n, e) {
            var o;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return (
                (n = t(n)),
                function () {
                    return --n > 0 && (o = e.apply(this, arguments)), n <= 1 && (e = void 0), o;
                }
            );
        };
    },
    function (n, e, o) {
        "use strict";
        var t = o(9);
        n.exports = function (n) {
            var e = t(n),
                o = e % 1;
            return e == e ? (o ? e - o : e) : 0;
        };
    },
    function (n, e, o) {
        "use strict";
        var t = o(0);
        n.exports = function (n) {
            return n ? ((n = t(n)) === 1 / 0 || n === -1 / 0 ? 17976931348623157e292 * (n < 0 ? -1 : 1) : n == n ? n : 0) : 0 === n ? n : 0;
        };
    },
    function (n, e, o) {
        "use strict";
        var t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                }
                : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                },
            a = o(11),
            r = o(16);
        n.exports = function (n) {
            return "symbol" == (void 0 === n ? "undefined" : t(n)) || (r(n) && "[object Symbol]" == a(n));
        };
    },
    function (n, e, o) {
        "use strict";
        var t = o(2),
            a = o(14),
            r = o(15),
            i = t ? t.toStringTag : void 0;
        n.exports = function (n) {
            return null == n ? (void 0 === n ? "[object Undefined]" : "[object Null]") : i && i in Object(n) ? a(n) : r(n);
        };
    },
    function (n, e, o) {
        "use strict";
        (function (e) {
            var o =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (n) {
                        return typeof n;
                    }
                    : function (n) {
                        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                    },
                t = "object" == (void 0 === e ? "undefined" : o(e)) && e && e.Object === Object && e;
            n.exports = t;
        }.call(this, o(13)));
    },
    function (n, e, o) {
        "use strict";
        var t,
            a =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (n) {
                        return typeof n;
                    }
                    : function (n) {
                        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                    };
        t = (function () {
            return this;
        })();
        try {
            t = t || new Function("return this")();
        } catch (n) {
            "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (t = window);
        }
        n.exports = t;
    },
    function (n, e, o) {
        "use strict";
        var t = o(2),
            a = Object.prototype,
            r = a.hasOwnProperty,
            i = a.toString,
            s = t ? t.toStringTag : void 0;
        n.exports = function (n) {
            var e = r.call(n, s),
                o = n[s];
            try {
                n[s] = void 0;
                var t = !0;
            } catch (n) { }
            var a = i.call(n);
            return t && (e ? (n[s] = o) : delete n[s]), a;
        };
    },
    function (n, e, o) {
        "use strict";
        var t = Object.prototype.toString;
        n.exports = function (n) {
            return t.call(n);
        };
    },
    function (n, e, o) {
        "use strict";
        var t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                }
                : function (n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                };
        n.exports = function (n) {
            return null != n && "object" == (void 0 === n ? "undefined" : t(n));
        };
    },
    function (n, e, o) {
        "use strict";
        var t = o(1),
            a = o(18),
            r = o(0),
            i = Math.max,
            s = Math.min;
        n.exports = function (n, e, o) {
            var c,
                l,
                d,
                u,
                p,
                v,
                f = 0,
                m = !1,
                w = !1,
                $ = !0;
            if ("function" != typeof n) throw new TypeError("Expected a function");
            function h(e) {
                var o = c,
                    t = l;
                return (c = l = void 0), (f = e), (u = n.apply(t, o));
            }
            function y(n) {
                return (f = n), (p = setTimeout(C, e)), m ? h(n) : u;
            }
            function g(n) {
                var o = n - v;
                return void 0 === v || o >= e || o < 0 || (w && n - f >= d);
            }
            function C() {
                var n = a();
                if (g(n)) return b(n);
                p = setTimeout(
                    C,
                    (function (n) {
                        var o = e - (n - v);
                        return w ? s(o, d - (n - f)) : o;
                    })(n)
                );
            }
            function b(n) {
                return (p = void 0), $ && c ? h(n) : ((c = l = void 0), u);
            }
            function S() {
                var n = a(),
                    o = g(n);
                if (((c = arguments), (l = this), (v = n), o)) {
                    if (void 0 === p) return y(v);
                    if (w) return clearTimeout(p), (p = setTimeout(C, e)), h(v);
                }
                return void 0 === p && (p = setTimeout(C, e)), u;
            }
            return (
                (e = r(e) || 0),
                t(o) && ((m = !!o.leading), (d = (w = "maxWait" in o) ? i(r(o.maxWait) || 0, e) : d), ($ = "trailing" in o ? !!o.trailing : $)),
                (S.cancel = function () {
                    void 0 !== p && clearTimeout(p), (f = 0), (c = v = l = p = void 0);
                }),
                (S.flush = function () {
                    return void 0 === p ? u : b(a());
                }),
                S
            );
        };
    },
    function (n, e, o) {
        "use strict";
        var t = o(3);
        n.exports = function () {
            return t.Date.now();
        };
    },
    function (n, e, o) {
        "use strict";
        var t = {
            init: function (n, e) {
                e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>"), $(".core-nav-list").addClass("split-list"), this.devidedMenu(e);
            },
            devidedMenu: function (n) {
                var e = $(".split-list");
                e.each(function () {
                    for (var n = new Array(), e = $(".split-list > li"), o = Math.floor(e.length / 2), t = e.length - 2 * o, a = 0; a < 2; a++) n[a] = a < t ? o + 1 : o;
                    for (a = 0; a < 2; a++) {
                        $(".wrap-core-nav-list").append($("<ul></ul>").addClass("core-nav-list"));
                        for (var r = 0; r < n[a]; r++) {
                            for (var i = 0, s = 0; s < a; s++) i += n[s];
                            $(".wrap-core-nav-list")
                                .find(".core-nav-list")
                                .last()
                                .append(e[r + i]);
                        }
                    }
                }),
                    e.remove(),
                    $(".core-nav-list").addClass("menu"),
                    $(".core-nav-list").eq(0).addClass("left"),
                    $(".core-nav-list").eq(0).wrap('<div class="col-menu left"></div>'),
                    $(".core-nav-list").eq(1).addClass("right"),
                    $(".core-nav-list").eq(1).wrap('<div class="col-menu right"></div>'),
                    $(".core-nav").addClass("brand-center");
            },
        };
        n.exports = t;
    },
    function (n, e, o) {
        "use strict";
        var t = {
            init: function (n, e) {
                e.container ? n.wrapInner("<div class='nav-container'></div>") : n.wrapInner("<div class='full-container'></div>"),
                    $(".core-nav").addClass("fullscreen"),
                    $(".wrap-core-nav-list .menu").wrap("<div class='nav-container'></div>");
                var o = $(".core-nav-toggle").html();
                $(".wrap-core-nav-list > .nav-container").prepend('<button class="toggle-bar core-nav-toggle">' + o + "</button>"),
                    $(".core-nav-toggle").on("click", function (e) {
                        e.preventDefault(), n.toggleClass("open-fullscreen"), $(".core-responsive-slide").length && $(".core-responsive-slide").toggleClass("open");
                    });
            },
        };
        n.exports = t;
    },
    function (n, e, o) {
        "use strict";
        var t = {
            init: function (n, e) {
                $(".core-content").addClass("core-sidebar"), n.addClass("nav-sidebar");
            },
        };
        n.exports = t;
    },
    function (n, e, o) {
        "use strict";
        var t = {
            init: function (n, e) {
                var o = this;
                $(".core-content").addClass("core-sidebar-toggle"),
                    n.addClass("sidebar-toggle"),
                    this.layout(e),
                    $(window).on("resize", function () {
                        o.layout(e);
                    }),
                    e.menuFullWidth && $(".wrap-core-nav-list").addClass("full-width");
            },
            layout: function (n) {
                var e = $(window).width(),
                    o = $(".core-nav-toggle"),
                    t = o.height() / 2;
                if (e > 920) {
                    if ((o.css("margin-top", "-" + t + "px"), n.menuFullWidth)) {
                        var a = $(".core-nav-list > li").length,
                            r = (e - $(".sidebar-toggle").width()) / a;
                        $(".core-nav-list > li").css("width", r - 0.5 + "px");
                    }
                } else o.css("margin-top", ""), $(".core-nav-list > li").css("width", "");
            },
        };
        n.exports = t;
    },
    function (n, e, o) {
        "use strict";
        var t = {
            init: function (n, e) {
                var o = this;
                $(".core-content").addClass("core-nav-section"),
                    this.setPosition(),
                    $(window).on("resize", function () {
                        o.setPosition();
                    });
            },
            setPosition: function () {
                var n = $(".core-nav-list"),
                    e = n.outerHeight() / 2;
                $(window).width() > 920 ? (n.css("margin-top", -1 * e), n.css("top", 0.5 * $(window).height())) : (n.css("margin-top", 0), n.css("top", 0));
            },
        };
        n.exports = t;
    },
    function (n, e, o) {
        "use strict";
        var t = {
            init: function (n, e) {
                $(".core-content").addClass("core-side-icon"),
                    n.addClass("nav-side-icon"),
                    e.toggleHoverSidebar &&
                    ($(".core-nav")
                        .stop()
                        .on("mouseenter", function () {
                            $(".core-content").addClass("open-side-icon");
                        }),
                        $(".core-nav")
                            .stop()
                            .on("mouseleave", function () {
                                $(".core-content").removeClass("open-side-icon");
                            }));
            },
        };
        n.exports = t;
    },
]);
