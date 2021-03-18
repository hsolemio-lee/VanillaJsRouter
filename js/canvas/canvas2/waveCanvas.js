import {
    WaveGroup
} from './wavegroup.js';

export default class WaveCanvas {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.waveGroup = new WaveGroup();        
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
        
        this.render.bind(this);
        return this;
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

          

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);
        window.requestAnimationFrame(this.animate.bind(this));

    }

    render(el) {
        el.appendChild(this.canvas);
    }
}
