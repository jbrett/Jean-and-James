define(function (require) {
    'use strict';
    
    var $ = require('jquery'),
        prettyPhoto = require('prettyPhoto'),
        foundation = require('foundation'),
        smoothscroll = require('smoothscroll'),
        isotope = require('isotope'),
        revolution = require('revolution');
        
    
    $(function(){     
        var $container = jQuery('#container');

        $container.isotope({
            itemSelector : '.element'
        });
        var $optionSets = jQuery('#options .option-set'),
            $optionLinks = $optionSets.find('a');

        $optionLinks.click(function(){
            var $this = jQuery(this);
            // don't proceed if already selected
            if ( $this.hasClass('selected') ) {
            return false;
            }
            var $optionSet = $this.parents('.option-set');
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');

            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            var options = {},
                key = $optionSet.attr('data-option-key'),
                value = $this.attr('data-option-value');
            // parse 'false' as false boolean
            value = value === 'false' ? false : value;
            options[ key ] = value;
            if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
            // changes in layout modes need extra logic
            changeLayoutMode( $this, options )
            } else {
            // otherwise, apply new options
            $container.isotope( options );
            }
            return false;
        });
    });
    
    function bindLoaded(e) {
            $('.tparrows').each(function() {
                var arrows=jQuery(this);

                var timer = setInterval(function() {

                    if (arrows.css('opacity') == 1 && !jQuery('.tp-simpleresponsive').hasClass("mouseisover"))
                        arrows.fadeOut(300);
                },3000);
            })

            jQuery('.tp-simpleresponsive, .tparrows').hover(function() {
                jQuery('.tp-simpleresponsive').addClass("mouseisover");
                jQuery('body').find('.tparrows').each(function() {
                    jQuery(this).fadeIn(300);
                });
            }, function() {
                if (!jQuery(this).hasClass("tparrows"))
                    jQuery('.tp-simpleresponsive').removeClass("mouseisover");
            });
    }
    
    function init(){
        if ($.fn.cssOriginal!=undefined)
                $.fn.css = $.fn.cssOriginal;

        var banner1 = $('.fullwidthbanner').revolution(
            {
                delay:9000,
                startwidth:980,
                startheight:780,

                onHoverStop:"on",                       // Stop Banner Timet at Hover on Slide on/off

                thumbWidth:100,                         // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                thumbHeight:50,
                thumbAmount:3,

                hideThumbs:0,
                navigationType:"bullet",                // bullet, thumb, none
                navigationArrows:"solo",                // nexttobullets, solo (old name verticalcentered), none

                navigationStyle:"round",                // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


                navigationHAlign:"center",              // Vertical Align top,center,bottom
                navigationVAlign:"bottom",                  // Horizontal Align left,center,right
                navigationHOffset:30,
                navigationVOffset:-40,

                soloArrowLeftHalign:"left",
                soloArrowLeftValign:"center",
                soloArrowLeftHOffset:20,
                soloArrowLeftVOffset:0,

                soloArrowRightHalign:"right",
                soloArrowRightValign:"center",
                soloArrowRightHOffset:20,
                soloArrowRightVOffset:0,

                touchenabled:"on",                      // Enable Swipe Function : on/off


                stopAtSlide:-1,                         // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
                stopAfterLoops:-1,                      // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

                hideCaptionAtLimit:0,                   // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
                hideAllCaptionAtLilmit:0,               // Hide all The Captions if Width of Browser is less then this value
                hideSliderAtLimit:0,                    // Hide the whole slider, and stop also functions if Width of Browser is less than this value


                fullWidth:"on",

                shadow:0                              //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

            });




            var banner2 = $('.fullwidthbanner-two').revolution(
                {
                    delay:9000,
                    startwidth:960,
                    startheight:838,

                    onHoverStop:"on",                       // Stop Banner Timet at Hover on Slide on/off

                    thumbWidth:100,                         // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                    thumbHeight:50,
                    thumbAmount:3,

                    hideThumbs:0,
                    navigationType:"bullet",                // bullet, thumb, none
                    navigationArrows:"solo",                // nexttobullets, solo (old name verticalcentered), none

                    navigationStyle:"round",                // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


                    navigationHAlign:"center",              // Vertical Align top,center,bottom
                    navigationVAlign:"bottom",                  // Horizontal Align left,center,right
                    navigationHOffset:30,
                    navigationVOffset:-40,

                    soloArrowLeftHalign:"left",
                    soloArrowLeftValign:"center",
                    soloArrowLeftHOffset:20,
                    soloArrowLeftVOffset:0,

                    soloArrowRightHalign:"right",
                    soloArrowRightValign:"center",
                    soloArrowRightHOffset:20,
                    soloArrowRightVOffset:0,

                    touchenabled:"on",                      // Enable Swipe Function : on/off


                    stopAtSlide:-1,                         // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
                    stopAfterLoops:-1,                      // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

                    hideCaptionAtLimit:0,                   // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
                    hideAllCaptionAtLilmit:0,               // Hide all The Captions if Width of Browser is less then this value
                    hideSliderAtLimit:0,                    // Hide the whole slider, and stop also functions if Width of Browser is less than this value


                    fullWidth:"on",

                    shadow:0                                //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

                });

            banner1.bind("revolution.slide.onloaded", bindLoaded);
            banner2.bind("revolution.slide.onloaded", bindLoaded);
    }
    
    return {
        init: init
    }
});