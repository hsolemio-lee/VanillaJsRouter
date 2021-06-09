import {
	Postit
} from './postit.js';

export default class PostitCanvas {
	
	constructor() {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		
		this.postits = [];

		window.addEventListener('resize', this.resize.bind(this), false);
		
		this.addPostit.bind(this);
		this.render.bind(this);
	    
		window.requestAnimationFrame(this.animate.bind(this));

		this.resize();
		this.addPostit();
		
		return this;
	}

	resize() {
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		this.canvas.width = this.stageWidth * 2;
		this.canvas.height = this.stageHeight * 2;
		this.ctx.scale(2,2);
	}
		
    animate(t) {
		if(this.currentPostit && this.currentPostit.isFixX && this.currentPostit.isFixY) {
			return;
		}
		window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);

        this.currentPostit.draw(this.ctx);
    }

	addPostit() {
		this.currentPostit = new Postit(this.postits.length,this.stageWidth,this.stageHeight,4,6);
		this.postits.push(this.currentPostit);
	}

	render(el) {
		el.appendChild(this.canvas);
	}

}

