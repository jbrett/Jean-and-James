require.config({
    baseUrl: '/js',
    paths: {
        'jquery': 'jquery.min',
        'foundation': 'foundation.min',
        'html5shiv': 'html5shiv',
        'cond': 'jquery.ba-cond.min',
        'bxslider': 'jquery.bxslider',
        'isotope': 'jquery.isotope',
        'knob': 'jquery.knob',
        'mixitup': 'jquery.mixitup',
        'prettyPhoto': 'jquery.prettyPhoto',
        'slitslider': 'jquery.slitslider',
        'revolution': 'jquery.themepunch.revolution.min',
        'modernizr': 'vendor/modernizr-2.6.2.min',
        'libs': 'libs',
        'plugins': 'plugins',
        'plugins2': 'plugins-two',
        'respond': 'respond.min',
        'smoothscroll': 'smoothscroll',
        'app': 'jean_and_james/app',
        'home': 'jean_and_james/view/home'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'foundation': {
            deps: ['jquery'],
            exports: 'foundation'
        },
        'html5shiv': {
            exports: 'html5'
        },
        'cond': {
            deps: ['jquery'],
            exports: 'jQuery.fn.cond'
        },
        'bxslider': {
            deps: ['jquery'],
            exports: 'jQuery.fn.bxSlider'
        },
        'isotope': {
            deps: ['jquery'],
            exports: 'jQuery.fn.isotope'
        },
        'knob': {
            deps: ['jquery'],
            exports: 'jQuery.fn.knob'
        },
        'mixitup': {
            deps: ['jquery'],
            exports: 'jQuery.fn.mixitup'
        },
        'prettyPhoto': {
            deps: ['jquery'],
            exports: 'jQuery.fn.prettyPhoto'
        },
        'slitslider': {
            deps: ['jquery'],
            exports: 'jQuery.fn.slitslider'
        },
        'revolution': {
            deps: ['jquery'],
            exports: 'jQuery.fn.revolution'
        },
        'libs': {
            deps: ['jquery']
        },
        'plugins': {
            deps: ['jquery']
        },
        'plugins2': {
            deps: ['jquery']
        },
        'home': {
            deps: ['jquery', 'prettyPhoto', 'foundation', 'smoothscroll', 'isotope', 'revolution']
        }
    }
});require(['app']);