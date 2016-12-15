/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";



    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };

    // $('#search-input').focus(function () {
    //     $('.nav ul').addClass('hidden');
    //     var navWidth = $(document).outerWidth() - $('.nav').outerWidth() - $('.other').outerWidth();
    //     console.log($('.search-box').outerWidth() + " " + $('.search-box').width());
    //     console.log(parseInt($('.nav').outerWidth()));
    //     // navWidth += $('.nav ul').outerWidth();
    //     $('.search-other').width($(document).outerWidth() - $('.nav').outerWidth() - 2)
    //     $('.search-box').width(parseInt(navWidth - $('.search-box').outerWidth() + $('.search-box').width()));
    //     // $('.search-box').width(parseInt(navWidth - 40));
    //     $(this).width(navWidth - $(this).outerWidth() + $(this).width());
    // }).blur(function () {
    //     $('.nav ul').removeClass('hidden');
    //     $('.search-box').removeAttr('style');
    //     $('.search-other').removeAttr('style');
    //     $(this).removeAttr('style');
    // })

    $(window).on('scroll', function () {
        var header = $('.header-menu');
        var h = $(window).scrollTop() - $(window).height() + header.height();
        var flag = header.hasClass('shadow');
        if (h > 0 && !flag) {
            header.addClass('shadow')
        }else if (h < 0 && flag) {
            header.removeClass('shadow');
        }
    })
})(jQuery);
