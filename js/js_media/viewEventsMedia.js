import {onColumnCountChange, iframeSize, mediaType, lazyLoadingImg, lazyLoadingVid, checkDisplay} from './managerMedia.js';
import {centerLightBox, lightBoxControlButtons, closeLightBox, lightBoxImgZoom, showLightBox} from './lightBoxMedia.js';
import {lightBoxLikeOnClick, likesHandler} from './likesHandlerMedia.js';

export const viewEventsHandler = () => {
    $(window).on('resize', () => {
        if(checkDisplay()){
            lazyLoadingVid();
            iframeSize();
        } else {
            onColumnCountChange();
            lazyLoadingImg();
            if($('.dark').is(':visible')) centerLightBox();
        }
    });
    $(window).on('scroll', ()=> ($('.photos-container').is(':hidden')) ? lazyLoadingVid() : lazyLoadingImg());

    //open light box
    $('.media-img-cover').each( function() {
        $(this).on('click', function (e){
            showLightBox($(e.target).attr('class')[0], $(this).data('img'));
        });
    });
    //zoom in and out on click
    $('.light-box-img').on('click', function() {
        lightBoxImgZoom($(this));
    });
    //like / dislike light box img
    $('.likes').on( 'click', function() {
        let hideId = $(this).attr('id');
        let showId;
        (hideId.includes('liked')) ? showId = $(`#${hideId}`).prev().attr('id') : showId = $(`#${hideId}`).next().attr('id');
        likesHandler(`#${hideId}` ,`#${showId}`);
    });
    //close light box when user clicks on the screen
    $('.dark').on('click', (e) => {
        if($(e.target).attr('class') == 'dark') closeLightBox();
    });
    //close light box when user clicks on x
    $('.fa-times').on('click', closeLightBox);

    //show next light box img
    $('#next').on('click', () => lightBoxControlButtons(1));
    //show prev light box img
    $('#prev').on('click', () => lightBoxControlButtons(-1));

    //save to local storage like light box img
    $('.like').on('click', () => lightBoxLikeOnClick(true));
    //save to local storage dislike light box img
    $('.liked').on('click', () => lightBoxLikeOnClick(false));

    //choose show videos
    $(`#videos`).on('click', () => mediaType('photos', 'videos'));
    //choose show photos
    $(`#photos`).on(`click`, () => mediaType('videos', 'photos'));
}