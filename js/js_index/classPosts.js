import {instegramIcons} from './html.js'

class PostsClass{
    constructor(_parent, _post){
        this.parent = _parent;
        this.post   = _post;

        this.render();
    }
    render(){
        $(this.parent).append(
            `<div class="post-container">
                <iframe class="post" src="https://www.instagram.com/p/${this.post}/embed" alt="post"></iframe>
                <div id="${this.post}"= class="post-cover">
                    <a href="https://www.instagram.com/p/${this.post}" target="_blank">
                        ${instegramIcons}
                    </a>
                </div>    
            </div>`);
    }
}

export default PostsClass;