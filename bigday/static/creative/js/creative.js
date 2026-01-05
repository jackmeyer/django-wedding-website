/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        window.history.pushState({}, document.title, $anchor.attr('href'));
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    // (specifically turns the links orange)
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Show navbar on scroll down
    var navbar = $('#mainNav');
    var navbarHeight = navbar.height();
    var lastScrollTop = 0;
    
    // Initially hide the navbar
    navbar.hide();
    
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        
        // If we've scrolled more than navbar height, show the navbar
        if (scrollTop > navbarHeight) {
            navbar.show();
        }
        
        // If scrolling up, show navbar
        if (scrollTop < lastScrollTop && scrollTop > 0) {
            navbar.show();
        }
        
        // If at top of page, hide navbar
        if (scrollTop === 0) {
            navbar.hide();
        }
        
        lastScrollTop = scrollTop;
    });

    // Offset for Main Navigation - this turns the nav bar white
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })


})(jQuery); // End of use strict
