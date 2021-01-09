import PostsClass from './classPosts.js';
import {sliderButtons} from './html.js';
import {ar_postsSrc} from './ar_indexArrays.js';
import {sliderEvents} from './viewEventsHandler.js';

let postsIndex = 0;

export const createPosts = () => {
    $('#slider').html(`
        <div class="cover-top"></div>
        <div class="cover-bottom"></div>
        ${sliderButtons}`
    );
    ar_postsSrc[postsIndex].map(item => new PostsClass('#slider', item));
    sliderStyle();
    sliderEvents();
}

const sliderStyle = () => {
    let screenWidth = $(window).width();

    if(postsIndex <= 0) $('#prev').hide();
    else if(postsIndex >= ar_postsSrc.length - 1) $('#next').hide();

    if(screenWidth >= 768){
        if(postsIndex <= 0 || postsIndex >= ar_postsSrc.length - 1) $('#slider').css('width', '4140');
        else $('#slider').css('width', '4180');
    } else {
        if(postsIndex <= 0) $('#slider').css('width', '3135');
        else if(postsIndex >= ar_postsSrc.length - 1) $('#slider').css('width', '3150');
        else $('#slider').css('width', '3180');
    }
}

export const sliderControlButtons = (_pointer) => {
    postsIndex += _pointer;
    if(_pointer > 0) $('#sliderContainer').scrollLeft(40);
    createPosts();
}

export const setPostsSliderWidth = () => {
    let screenWidth = $(window).width();
    $('.sliderContainer').css('width', `${screenWidth - 20}px`);
}

export const postsSliderOnResize = () => {
    let screenWidth = $(window).width();
    let sliderWidth = $('#slider').width();

    if (screenWidth <= 768 && sliderWidth > 4000) {
        if($('#prev').is(':visible')) $('#slider').css('width', '3170.5');
        else $('#slider').css('width', '3135.5');
    } else if (screenWidth >= 768 && sliderWidth < 4000){
        if($('#prev').is(':visible')) $('#slider').css('width', '4170');
        else $('#slider').css('width', '4140');
    }
}