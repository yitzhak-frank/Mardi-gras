class MediaVideosClass {
    constructor(_parent, _url){
        this.parent = _parent;
        this.url    = _url;

        this.render();
    }
    render(){
        $(this.parent).append(
            `<iframe src="" data-src="https://www.youtube.com/embed/${this.url}" src="" frameborder="0" allow="accelerometer;
             autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    }
}

export default MediaVideosClass;