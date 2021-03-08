export const ar_videos = [
    'PcjLTrUDF3w',
    'cT5vnPybf3Y',
    '0f_PsxOZNFg',
    'hzj1Hwa_6A8',
    'jIOgkOTqtuw',
    '9Bv1mFl9SI4',
    'Svsk9WeqzPs',
    'TSUWrHjeNk0',
    'kMSM9GRMihM',
    'EkIZwXbSh-Y',
    'fn-al_XNHpQ',
    'AHIlKrdW9dg',
    'YsRkWIAZf0w',
    'Nr7aHAS9EHM'
];

export const ar_images = [];

export const pushImagesToAr = () => {
    let src;
    for(let i = 0; i <= 50; i++){
        src = '../../media_images/img';
        if(i < 9) src = src + '0';
        ar_images.push(src + (i + 1) + '.jpg');
    }
}