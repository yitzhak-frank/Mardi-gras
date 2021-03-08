class MediaPhotosClass {
    constructor(_parent, _img, _index){
        this.parent = _parent;
        this.img    = _img;
        this.index  = _index;

        this.render();
    }
    render(){
        $(`${this.parent}`).append(`
            <div class="img-box">
                <div class="media-img-cover" data-img="${this.index}">
                    <i id="like-${this.index}" class="i far fa-heart likes"></i>
                    <i id="liked-${this.index}" class="i fas fa-heart likes"></i>
                    <a href="${this.img}" target="_blank" download="">
                        <i class="i fas fa-download"></i>
                    </a>
                </div>
                <img class="madia-img" src="" data-src="${this.img}" data-like="${this.index}" alt="img${this.index}">
            </div>`
        );    
    }
}
export default MediaPhotosClass;