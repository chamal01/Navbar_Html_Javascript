$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav').addClass('navbar-scrolled');
    } else {
        $('nav').removeClass('navbar-scrolled');
    }
});