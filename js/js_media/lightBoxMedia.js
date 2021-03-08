import {lightBoxLikeHandler, getLikesFromLocalStorage} from './likesHandlerMedia.js';
import {checkDisplay} from './managerMedia.js';
import {ar_images} from './ar_media.js';

let zoomFlag = true;

//show light box when user clicks on an img
export const showLightBox = (_target, _img) => {
    if(_target == 'i') return;
            
    $('.dark').fadeIn(1000);
    $('.light-box-img').attr('src', ar_images[_img]);
    $('#download').attr('href', ar_images[_img]);
    centerLightBox();
    lightBoxLikeHandler();
}
//vertical align for light box
export const centerLightBox = () => {
    if(checkDisplay()) return;
    let screenHeight = $(window).height();
    let imgHeight    = $('.light-box').height();

    if(screenHeight > imgHeight) $('.light-box').css('margin-top', (screenHeight - imgHeight) / 2.6);
    else $('.light-box').css('margin-top', '25px');
}

export const lightBoxControlButtons = (_pointer) => {
    let current = ar_images.indexOf($('.light-box-img').attr('src'));

    if(current + _pointer < 0) current = ar_images.length;
    else if(current + _pointer >= ar_images.length) current = -1;
    
    $('.light-box-img').attr('src', ar_images[current + _pointer]);
    $('#download').attr('href', ar_images[current + _pointer]);
    centerLightBox();
    lightBoxLikeHandler();
}

export const closeLightBox = () => {
    $('.dark').fadeOut(1000);
    getLikesFromLocalStorage();
}

export const lightBoxImgZoom = (_img) => {
    if(zoomFlag) _img.css({'cursor': 'zoom-out', 'transform': 'scale(1.5)'});
    else         _img.css({'cursor': 'zoom-in',  'transform': ''});
    zoomFlag = !zoomFlag;
}