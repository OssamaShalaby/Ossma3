$(function() {
    'use srtict'

    // Trigger Nice Scroll Plugin

    $("body").niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: "10px",
        cursorborder: "1px solid #f7600e"
    });

    // Change Header Height

    $(".header").height($(window).height());

    // Scroll to Features

    $(".header .arrow i").on("click", function() {

        $("html, body").animate({

            scrollTop: $(".features").offset().top

        }, 1000)
    });

    $(".hire").on("click", function() {

        $("html, body").animate({

            scrollTop: $(".our-team").offset().top

        }, 1000)
    });

    $(".to-our-work").on("click", function() {

        $("html, body").animate({

            scrollTop: $(".our-work").offset().top

        }, 1000)
    })

    $(".show-more").on("click", function() {

        $(".hidden").fadeIn(1000);

        $(this).text("Show Less");

    })

    // Check Testimonials

    var leftArrow = $(".testim .fa-chevron-left"),
        rightArrow = $(".testim .fa-chevron-right");

    function checkClients() {

        $(".client:first").hasClass("active") ? leftArrow.fadeOut(500) : leftArrow.fadeIn(500);

        $(".client:last").hasClass("active") ? rightArrow.fadeOut(500) : rightArrow.fadeIn(500);

    };

    checkClients();

    $(".testim i").on("click", function() {

        if ($(this).hasClass("fa-chevron-right")) {

            $(".testim .active").fadeOut(100, function() {

                $(this).removeClass("active").next(".client").addClass("active").fadeIn();

                checkClients();
            });

        } else {

            $(".testim .active").fadeOut(100, function() {

                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();

                checkClients();
            });
        }
    });
});