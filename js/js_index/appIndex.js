import {headingPosition, mobileCarouselImages, containerPosition, imagesContainerSize, createButtons} from './managerIndex.js'
import {createPosts, setPostsSliderWidth} from './postsSlider.js';
import {viewEventHandler} from './viewEventsHandler.js';
 
$(() => init());

const init = ()=> {
    headingPosition();
    mobileCarouselImages();
    containerPosition();
    imagesContainerSize();
    createButtons();
    setPostsSliderWidth();
    createPosts();
    viewEventHandler();
}

//weather script
! function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'weatherwidget-io-js');