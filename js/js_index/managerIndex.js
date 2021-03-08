import {ar_carouselImages, ar_mobileCarouselImages, ar_placesImagesSrc} from './ar_indexArrays.js';
import {locationIcon, controlButtons} from './html.js';

let imgIndex = 0;

//carousel text position
export const headingPosition = () => {
    let scrollPosition = $(window).scrollTop(),
        screenHeight   = $(window).height(),
        headingHeight  = $('#carousel-text').height();

    if(scrollPosition >= screenHeight - ((headingHeight * 2) + 150)) $('.carousel-text').css('height', `150px`);
    else $('.carousel-text').css('height', `${screenHeight - scrollPosition - (headingHeight / 2) - 95}px`);
}
//carousel images
export const mobileCarouselImages = () => {
    let screenWidth    = $('body').innerWidth(),
        carouselImages = $('.img-fluid');

    if (screenWidth < 600) ar_mobileCarouselImages.map((item, i) => carouselImages[i].src = item);
    else ar_carouselImages.map((item, i) => carouselImages[i].src = item);
}
//change crousel position and opacity on scroll
export const setCrouselCss = () => {
    let scrollPosition = $(window).scrollTop(),
        screenHeight   = $(window).height(),   
        rgba = (scrollPosition * screenHeight) / (screenHeight * screenHeight);

    $('.carousel-cover').css('background-color', `rgba(0, 0, 0, ${rgba}`);

    if (scrollPosition >= 400) {
        $('.carousel-scroll').css({'position': 'absolute', 'top': '400px'});
        $('.arrow').css({'visibility': 'hidden'});
    } else {
        $('.carousel-scroll').css({'position': 'fixed', 'top': '0'});
        $('.arrow').css({'visibility': 'visible'});
    }
}
//body container position
export const containerPosition = () => {
    let screenHeight = $(window).height();
    $('.bodyContainer').css({'top': `${screenHeight}px`});
}
//change the image of the cards in the main tag when user clicks on prev / next icons
export const changeImageSrc = (image, btn) => {
    if (btn == 'right') {
        imgIndex++;
        if (imgIndex >= ar_placesImagesSrc[image].length) imgIndex = 0;
    } else {
        imgIndex--;
        if (imgIndex < 0) imgIndex = ar_placesImagesSrc[image].length - 1;
    }
    $(`#${image} > a > img`).attr('src', ar_placesImagesSrc[image][imgIndex]);
}
//change the height of the images container compare to the width 
export const imagesContainerSize = () => {
    let screenWidth = $(window).width();

    if (screenWidth > 991) $('#linksImages').css('height', `${screenWidth / 2}px`);
    else if (screenWidth > 768) $('#linksImages').css('height', `${screenWidth * 1.1}px`);
    else if (screenWidth > 576) $('#linksImages').css('height', `${screenWidth * 3.7}px`);
    else $('#linksImages').css('height', `${screenWidth * 4.2}px`);
}
//create the next and prev buttons for the images on the main tag
export const createButtons = () => {
    $('.location').html(locationIcon);
    $('.change').html(controlButtons);
}