import {headerContent, footerContent} from './headerFooterHtml.js';

$(() => {
    insertHtml();
    centerSocialIcons();
    responsiveNavBar();
    viewEvents();
});
    
const viewEvents = () => {
    $(window).on('scroll', backToTopBtn);
    $(window).on('resize', centerSocialIcons);
}

const insertHtml = () => {
    $('header').append(headerContent);
    $('footer').html(footerContent);
}
// center the icons compare to the screen width
const centerSocialIcons = () => {
    let screenWidth = $('body').innerWidth(),
        iconsWidth  = $('#social').innerWidth(),
        center      = (screenWidth - iconsWidth) / 2;

    $('#social').css('left', `${center}px`);
}
//set the position of back to top button
const backToTopBtn = () => {
    let scrollPosition = $(window).scrollTop(),
        screenHeight   = $(window).height(),
        pageHeight     = $(document).height(),
        screenWidth    = $('body').innerWidth(),
        footerHeight   = $('footer').height(),
        btnSize        = $('.fa-chevron-up').height();

    let check       = scrollPosition + screenHeight >= pageHeight - (footerHeight - btnSize),
        checkMobile = scrollPosition + screenHeight >= pageHeight - ((footerHeight  / 2) - btnSize);

    const checkPosition = ()=> (screenWidth > 480) ? check : checkMobile;
    const btnBottomPsition = ()=> (screenWidth > 480) ? footerHeight - (btnSize / 2) : ((footerHeight  / 2) - (btnSize / 2));

    if ($('.backToTop').css('position') == 'absolute' && checkPosition() && screenWidth > 482) return;

    if (scrollPosition > 200) $('.backToTop').show();   
    else if (scrollPosition < 200) $('.backToTop').hide();  

    if (scrollPosition < 1000) $('.fa-chevron-up').css('opacity', `${scrollPosition / 1500}`);    
    else if (checkPosition()) {      
        $('.backToTop').css({'position': 'absolute', 'bottom': `${btnBottomPsition()}px`});
        $('.fa-chevron-up').css('opacity', '1');
    } else {
        $('.backToTop').css({'position': 'fixed', 'bottom': '20px'});
        $('.fa-chevron-up').css('opacity', '0.7');
    }
}

const responsiveNavBar = () => {
    let rotate = -180;
    $('.hamburger-img-container').on('click', () => {
        $('#navbarNavAltMarkup').slideToggle(500);
        $('.hamburger-img-container').css('transform', `rotate(${rotate}deg)`);
        (rotate == -180) ? rotate = 0 : rotate = -180;
    });
}