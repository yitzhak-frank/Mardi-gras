import {ar_images} from './ar_media.js';

let likesObj;

export const getLikesObj = () => (localStorage['likesObj']) ? likesObj = JSON.parse(localStorage['likesObj']) : likesObj = {};

const setLikesObj = () => localStorage.setItem('likesObj', JSON.stringify(likesObj));

//trigger by the event when user clicks on like
export const likesHandler = (_hide, _show) => {
    $(_hide).hide();
    $(_show).show();
    saveLikeToLocalStorage(_hide, _show);
}

const saveLikeToLocalStorage = (_key, _val) => {
    if(likesObj[_val]) delete likesObj[_val];
    likesObj[_key] = _val;
    setLikesObj();
}

export const getLikesFromLocalStorage = () => {
    let ar_hide = Object.keys(likesObj);
    let ar_show = Object.values(likesObj);
    
    ar_hide.map(item => $(item).hide());
    ar_show.map(item => $(item).show());
}

const lightBoxLikeIndex  = () => {
    let index = $('.light-box-img').attr('src');
    return ar_images.indexOf(index);
}

export const lightBoxLikeOnClick = (_like) => {
    let index = lightBoxLikeIndex(),
        like  = `#like-${index}`,
        liked = `#liked-${index}`;
    if(_like){
        if(likesObj[liked]) delete likesObj[liked];
        likesObj[like] = liked;
    } else {
        delete likesObj[like];
        likesObj[liked] = like;
    }
    setLikesObj();
    lightBoxLikeHandler();
}

export const lightBoxLikeHandler = () => {
    let i = lightBoxLikeIndex();

    if(!likesObj[`#like-${i}`]){
        $('.liked').hide();
        $('.like').show();
    } else {
        $('.like').hide();
        $('.liked').show();
    }
}