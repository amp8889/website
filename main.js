$(document).ready(function () {
    // Function to add the 'active' class for fade-in effect
    function fadeInOnScroll() {
        $('.fade-in').each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('active');
            }
        });
    }

    // Initial check on page load
    fadeInOnScroll();

    // Check on scroll
    $(window).scroll(function () {
        fadeInOnScroll();
    });
});
