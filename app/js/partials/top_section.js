//hiding top section, making sticky header navigation and adding 'back-to-top' button
var topSection = ('.js-top-section');
var topBar = ('.js-top-bar');
var topInfo = ('.js-top-info');
var topHeader = ('.js-top-header');
var topButton = $('.js-top-button');
var topSearch = $('.js-top-search');

$(window).on('scroll', function(){
	$(topSection).toggleClass('top-section_shrinking', $(window).scrollTop() > 0);
	$(topInfo).toggleClass('top-section_hidden', $(window).scrollTop() > 0); 
	$(topHeader).toggleClass('top-header_sticky', $(window).scrollTop() > 0);        
    $(topButton).toggleClass('top-button_active', $(window).scrollTop() > 500);
    $(topButton).on('click', function(){
        $(window).scrollTop(0);
    });
});

//making burger menu for mobile
var headerMobile = ('.js-top-header_mobile');
var topNav = ('.js-top-nav');
var topBurger = ('.js-top-header__burger');
var topLink = ('.js-top-nav__link');

$(headerMobile).on('click', function(){
    $(topBurger).toggleClass('top-header-burger_cross');
    $(topNav).toggleClass('top-nav_mobile');
    $(topLink).toggleClass('top-nav__link_mobile');
});

//highliting active header menu and making smooth scroll to menu >> thanks to StackOverflow
$(document).on('scroll', onScroll);
    
    //smoothscroll
    $('.js-top-nav a[href^="#"]').on('click', function(e){
        e.preventDefault();
        $(document).off('scroll');
        
        $('.js-top-nav a').each(function () {
            $(this).removeClass('top-nav__link_active');
        })

        $(this).addClass('top-nav__link_active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on('scroll', onScroll);
        });
    });

    function onScroll(event){
    
        var scrollPos = $(document).scrollTop();
        
        $('#header-nav a').each(function(){
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos){
            $('#header-nav a').removeClass('top-nav__link_active');
            currLink.addClass('top-nav__link_active');
        }
        else{
            currLink.removeClass('top-nav__link_active');
        }
    });
}