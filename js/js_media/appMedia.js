import {insertImages, border, lazyLoadingImg, lazyLoadingVid} from './managerMedia.js';
import {getLikesObj, getLikesFromLocalStorage} from './likesHandlerMedia.js';
import {viewEventsHandler} from './viewEventsMedia.js';
import {pushImagesToAr} from './ar_media.js';

$(() => init());

const init = () => {
    pushImagesToAr();
    insertImages();
    viewEventsHandler();
    lazyLoadingImg();
    lazyLoadingVid();
    getLikesObj();
    getLikesFromLocalStorage();
    border('#photos');
    $('.videos-container').hide();
}