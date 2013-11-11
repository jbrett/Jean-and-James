// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.



(function($) {

    if ($(window).width() < 1024) {
        $("body").data("smooth-scroling", 0)
    }
    var opts = {
        lines: 1,
        angle: 0.49,
        lineWidth: 0.09,
        colorStart: "#f25953",
        colorStop: "#f25953",
        strokeColor: "#f5f5f5",
        shadowColor: "#f5f5f5"
    };
    jQuery(".circ_numbers_holder.animationBegin").appear({
        once: true,
        forEachVisible: function(a, b) {
            jQuery(b).data("delay", a)
        },
        appear: function() {
            var a = 800,
                b = 1000,
                c = b * parseInt(jQuery(this).data("delay")) || 0;
            jQuery(this).children(".circ_counter").each(function(d, f) {
                jQuery(f).trans(d * a + c + "ms", "-delay");
                setTimeout(function() {
                    end_nu = parseInt(jQuery(f).children("canvas:first").attr("data-end-nu"));
                    jQuery(f).children("canvas:first").gauge(opts, end_nu);
                    jQuery(f).find(".counter_percent_sign:first").addClass("shown")
                }, d * a + c)
            });
            jQuery(this).removeClass("animationBegin")
        }
    });
    jQuery.fn.gauge = function(b, a) {
        this.each(function() {
            var d = jQuery(this),
                c = d.data();
            if (c.gauge) {
                c.gauge.stop();
                delete c.gauge
            }
            if (b !== false) {
                c.gauge = new Donut(this).setOptions(b);
                c.gauge.setTextField(document.getElementById(d.next(".circ_counter_text_holder").children(".circ_counter_text").attr("id")));
                c.gauge.maxValue = 100;
                c.gauge.animationSpeed = 30;
                c.gauge.set(a)
            }
        });
        return this
    };
    if ($(window).width() > 1030) {
        var win_w = jQuery(window).width();
        if (win_w > 767) {
            if (Modernizr.csstransitions) {
                function preloadImages(e, d) {
                    var c = [],
                        b = e.length,
                        a = 0;
                    if (jQuery(e).length) {
                        jQuery(e).each(function(h, g) {
                            var f = document.createElement("img");
                            f.onload = function() {
                                if (++a == b) {
                                    d()
                                }
                            };
                            f.src = jQuery(g).attr("src");
                            c.push(f)
                        })
                    } else {
                        d()
                    }
                }

                jQuery(function() {
                    preloadImages(jQuery(".container.animationStart img"), function() {
                        jQuery(".container.animationStart, .full_container_slider.animationStart").appear({
                            once: true,
                            forEachVisible: function(a, b) {
                                jQuery(b).data("delay", a)
                            },
                            appear: function() {
                                jQuery(this).removeClass("animationStart")
                            }
                        })
                    });
                    preloadImages(jQuery(".section_featured_texts.animationStart img"), function() {
                        jQuery(".section_featured_texts.animationStart").appear({
                            once: true,
                            forEachVisible: function(a, b) {
                                jQuery(b).data("delay", a)
                            },
                            appear: function() {
                                var a = 400,
                                    b = 600,
                                    c = b * parseInt(jQuery(this).data("delay")) || 0,
                                    d = (a * jQuery(this).data("delay") + 200);
                                jQuery(this).children().each(function(f, g) {
                                    if (f == 0) {
                                        jQuery(g).trans(d + "ms", "-delay")
                                    } else {
                                        jQuery(g).trans(f * a + c + "ms", "-delay")
                                    }
                                });
                                jQuery(this).removeClass("animationStart")
                            }
                        })
                    });
                    preloadImages(jQuery(".info_block.animationStart img"), function() {
                        jQuery(".info_block.animationStart").appear({
                            once: true,
                            forEachVisible: function(a, b) {
                                jQuery(b).data("delay", a)
                            },
                            appear: function() {
                                var a = 400,
                                    b = 1000,
                                    c = b * parseInt(jQuery(this).data("delay")) || 0;
                                jQuery(this).find(".info_item").each(function(d, f) {
                                    jQuery(f).trans(d * a + c + "ms", "-delay")
                                });
                                jQuery(this).removeClass("animationStart")
                            }
                        })
                    });
                    preloadImages(jQuery(".client_info_holder.animationStart img"), function() {
                        jQuery(".client_info_holder.animationStart").appear({
                            once: true,
                            forEachVisible: function(a, b) {
                                jQuery(b).data("delay", a)
                            },
                            appear: function() {
                                var a = 200,
                                    b = 400,
                                    c = b * parseInt(jQuery(this).data("delay")) || 0;
                                jQuery(this).children().each(function(d, f) {
                                    jQuery(f).trans(d * a + "ms", "-delay")
                                });
                                jQuery(this).removeClass("animationStart")
                            }
                        })
                    });
                    preloadImages(jQuery("#portfolio_items.animationStart img"), function() {
                        jQuery("#portfolio_items.animationStart").appear({
                            once: true,
                            forEachVisible: function(a, b) {
                                jQuery(b).data("delay", a)
                            },
                            appear: function() {
                                var a = 200,
                                    b = 400,
                                    c = b * parseInt(jQuery(this).data("delay")) || 0;
                                jQuery(this).find(".pic_info").each(function(d, f) {
                                    jQuery(f).trans(d * a + c + "ms", "-delay")
                                });
                                jQuery(this).removeClass("animationStart")
                            }
                        })
                    });
                    preloadImages(jQuery(".portfolio_page .columns .pic img"), function() {
                        jQuery(".portfolio_page .columns .pic.animationStart").appear({
                            once: true,
                            forEachVisible: function(a, b) {
                                jQuery(b).data("delay", a)
                            },
                            appear: function() {
                                var a = 400,
                                    b = 1000,
                                    c = b * parseInt(jQuery(this).data("delay")) || 0;
                                jQuery(this).removeClass("animationStart")
                            }
                        })
                    });
                    preloadImages(jQuery(".team_block_content.animationStart img"), function() {
                        jQuery(".team_block_content.animationStart").appear({
                            once: true,
                            forEachVisible: function(a, b) {
                                jQuery(b).data("delay", a)
                            },
                            appear: function() {
                                var a = 200,
                                    b = 400,
                                    c = b * parseInt(jQuery(this).data("delay")) || 0;
                                jQuery(this).children(".pic").each(function(d, f) {
                                    jQuery(f).trans(d * a + c + "ms", "-delay")
                                });
                                jQuery(this).removeClass("animationStart")
                            }
                        })
                    })
                })
            }
        } else {}
        jQuery(document).ready(function() {
            setTimeout(function() {
                jQuery(".container.startNow").removeClass("animationStart")
            }, 600);
            jQuery(".rev_slider_wrapper").parents(".animationStart:first").addClass("immediateShow")
        })
    }
    $(document).ready(function() {
        $("#accord > li > a").click(function(a) {
            a.preventDefault();
            if ($(this).attr("class") != "activeAcc") {
                $("#accord li ul").slideUp();
                $(this).next().slideToggle();
                $("#accord li a").removeClass("activeAcc");
                $(this).addClass("activeAcc")
            } else {}
        })
    });
    $("#smallnav").change(function() {
        window.location = $(this).find("option:selected").val()
    });
    $(".navForSmall a").click(function(a) {
        a.preventDefault();
        $(".portfolioCols li:not(:first-child)").slideToggle("slow")
    });


})(jQuery);