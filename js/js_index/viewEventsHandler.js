import {setCrouselCss, changeImageSrc, headingPosition, mobileCarouselImages, containerPosition, imagesContainerSize} from './managerIndex.js';
import {sliderControlButtons, setPostsSliderWidth, postsSliderOnResize} from './postsSlider.js';

export const viewEventHandler = () => {

    $(window).on('resize', () => {
        mobileCarouselImages();
        containerPosition();
        imagesContainerSize();
        setPostsSliderWidth();
        postsSliderOnResize();
    });

    $(window).on('scroll', () => {
        setCrouselCss();
        headingPosition();
    });

    //change the image of the images in the main tag
    $('.change').click((e) => {
        let btn = e.target;
        let imgParent = btn.parentNode.parentNode.parentNode.id;

        changeImageSrc(imgParent, btn.id);
    });
}

export const sliderEvents = () => {
    
    //instagram post on mouse hover
    $(".post-cover").each(function(){
        $(this).hover(function(){
            $(this).css("opacity", "1");
        }, function(){
            $(this).css("opacity", "0");
        });
    });

    //next instagram posts in the slider
    $('#next').on('click', ()=> sliderControlButtons(1));
    //prev instagram posts in the slider
    $('#prev').on('click', ()=> sliderControlButtons(-1));
}