$("document").ready(function () {
    "use strict";
    
    
     $(".header").height($(window).height());

    $(window).resize(function () {
        $(".header").height($(window).height());
    });
    $(".header .header-info").each(function () {
        $(this).css('paddingTop', ($(window).height() - $(".navbar").height()) / 2 - 140);
    });
    
    // auto write
        var typed = new Typed('.writter', {
        strings: ["<p>Let's Start Our Journey</p>","<p>Learn More About Time management</p>", "<p>Know More About Kinds of culture</p>"],
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 1000,
        loop: true
    });
    
    // loading
    $(".loading").ready(
        function () {
            setTimeout(function () {
                $(".loading").fadeOut();

            }, 3000);
        });


});