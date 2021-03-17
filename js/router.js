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
            new BallCanvas();
        }
    },
    {
        hash: 'canvas2',
        url: '/canvas2',
        menu: 'waveCanvas',
        pageName : 'Wave Canvas',
        component: function () {
            new WaveCanvas();
        }
    },
    {
        hash: 'canvas3',
        url: '/canvas3',
        menu: 'glowCanvas',
        pageName : 'Glow Canvas',
        component: function () {
            new GlowCanvas();
        }
    },
]

export class Router {
    constructor() {
        
        let div = document.createElement('div');
        div.setAttribute('id', 'root');
        document.body.appendChild(div);

        this.el = div;
        
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
			    this.page.innerHTML = `${hash} Not Found`;
				return;
			}
			root.innerHTML = '';
            component();
			
		} catch (err) {
			console.error(err);
		}
    }
}
