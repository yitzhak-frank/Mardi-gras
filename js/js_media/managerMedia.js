import MediaPhotosClass from './classMediaPhotos.js';
import MediaVideosClass from './classMediaVideos.js';
import {ar_images, ar_videos} from './ar_media.js';

let firstClickFlag = true;

export const border = (_btnId) => $(_btnId).css('border', '5px solid rgb(140, 191, 63)');

export const mediaType = (_disactive, _active) => {
    border(`#${_active}`);
    $(`#${_disactive}`).css('border','');
    $(`.${_disactive}-heading`).hide();
    $(`.${_active}-heading`).show();
    $(`.${_disactive}-container`).hide();
    $(`.${_active}-container`).show();
    $(window).scrollTop(0);

    if(_active == 'videos'){
        if(firstClickFlag){
            insertVideos();
            firstClickFlag = false;
        }
        lazyLoadingVid()
    } else {
        onColumnCountChange();
        lazyLoadingImg();
    }
}
export const insertImages = () => {
    let containerFlag = 1;
    $('.images-container').empty();
    
    ar_images.map((item, i)=> {
        if(containerFlag > columnsNumber()) containerFlag = 1;
        new MediaPhotosClass(`.images-container-${containerFlag}`, item, i); 
        containerFlag++;
    });
}
export const insertVideos = () => {
    $('.videos-container').empty();
    ar_videos.map((item) => new MediaVideosClass('.videos-container', item));
    iframeSize();
}
export const iframeSize = () => {
    if(!checkDisplay()) return;
    let iframeWidth = $('iframe').width();
    $('iframe').height(iframeWidth / 1.75);
}
//return the column number for images
const columnsNumber = ()=> {
    let screenWidth = $(window).width();
    
    if(screenWidth > 991) return 3;
    else if (screenWidth < 576) return 1;
    else return 2;
}
//insert images when screen width changes
export const onColumnCountChange = () => {
    if(checkDisplay()) return;
    $('.images-container').each(function(){
        if($(this).html() == '') insertImages();
        else if($(this).html() != '' && $(this).is(':hidden')) insertImages();
    });
}
const lazyLoading = (_type) => {
    let scrollPosition = $(window).scrollTop();
    let screenHeight   = $(window).height();

    $(_type).each(function () {
        if($(this).attr('src') != '') return;
        if($(this).offset().top <= (screenHeight * 2) + scrollPosition) $(this).attr('src', $(this).data('src'));
    });
}
export const lazyLoadingVid = () => lazyLoading('iframe[data-src]');

export const lazyLoadingImg = () => lazyLoading('img[data-src]');

export const checkDisplay = () => $('.photos-container').is(':hidden');