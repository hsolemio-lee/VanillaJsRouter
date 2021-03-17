import BallCanvas from './canvas/canvas1/ballCanvas.js';
import WaveCanvas from './canvas/canvas2/waveCanvas.js';
import GlowCanvas from './canvas/canvas3/glowCanvas.js';

export const routes = [
    {
        hash: 'canvas1',
        url: '/canvas1',
        menu: 'ballCanvas',
        pageName : 'Ball Canvas',
        component: function () {
            const root = document.getElementById('root');
            return new BallCanvas(root);
        }
    },
    {
        hash: 'canvas2',
        url: '/canvas2',
        menu: 'waveCanvas',
        pageName : 'Wave Canvas',
        component: function () {
            const root = document.getElementById('root');
            return new WaveCanvas(root);
        }
    },
    {
        hash: 'canvas3',
        url: '/canvas3',
        menu: 'glowCanvas',
        pageName : 'Glow Canvas',
        component: function () {
            const root = document.getElementById('root');
            return new GlowCanvas(root);
        }
    },
]

export class Router {
    constructor() {
        
        let div = document.createElement('div');
        div.setAttribute('id', 'root');
        document.body.appendChild(div);

        this.page = null;
        
        this.render.bind(this);

        this.render();
        window.addEventListener('hashchange', this.render);
        window.addEventListener('DOMContentLoaded', this.render);
    }

    async render() {
        try {
            const root = document.getElementById('root');
			const hash = location.hash.replace('#', '').split('?')[0];
            if (hash === '') {
                root.innerHTML = '';
                routes[0].component();
                return;        
            }
			const { url, menu, component, pageName} = routes.find(route => route.hash === hash);
			
			if (!url) {
				return;
			}
			root.innerHTML = '';
            this.page = null;
            this.page = component();
			
		} catch (err) {
			console.error(err);
		}
    }
}
