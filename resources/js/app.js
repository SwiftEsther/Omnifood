$(document).ready(function() {
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{offset: '60px'});
    
    $('.js-wp-1').waypoint(function(direction) {
       $('.js-wp-1').addClass('animated fadeIn') 
    },{offset: '50%'});
    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp') 
     },{offset: '50%'});
     $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn') 
     },{offset: '50%'});
     $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse') 
     },{offset: '50%'});

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    $('.mobile-nav-icon').click(function() {
        $('.main-nav').slideToggle(200);
        if($('.mobile-nav-icon i').hasClass('ion-navicon-round')){
            $('.mobile-nav-icon i').addClass('ion-close-round');
            $('.mobile-nav-icon i').removeClass('ion-navicon-round');
        } else {
            $('.mobile-nav-icon i').removeClass('ion-close-round');
            $('.mobile-nav-icon i').addClass('ion-navicon-round');
        }
    });

    var map = new GMaps({
        div: '.map',
        lat: 6.5513242,
        lng: 3.3380552,
        zoom: 12
    });

    map.addMarker({
        lat: 6.5513242,
        lng: 3.2380552,
        title: 'Lagos',
        infoWindow: {
            content: '<p>Esther currently lives in Lagos</p>'
        }
      });
});