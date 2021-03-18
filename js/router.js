import BallCanvas from './canvas/canvas1/ballCanvas.js';
import WaveCanvas from './canvas/canvas2/waveCanvas.js';
import GlowCanvas from './canvas/canvas3/glowCanvas.js';

export const routes = [
    {
        hash: 'canvas1',
        url: '/canvas1',
        menu: 'ballCanvas',
        pageName : 'Ball Canvas',
        component: new BallCanvas()
    },
    {
        hash: 'canvas2',
        url: '/canvas2',
        menu: 'waveCanvas',
        pageName : 'Wave Canvas',
        component: new WaveCanvas()
    },
    {
        hash: 'canvas3',
        url: '/canvas3',
        menu: 'glowCanvas',
        pageName : 'Glow Canvas',
        component: new GlowCanvas()
    },
]

export class Router {
    constructor() {
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
                routes[0].component.render(root);
                return;        
            }
			const { url, menu, component, pageName} = routes.find(route => route.hash === hash);
			
			if (!url) {
				return;
			}
			root.innerHTML = '';

            component.render(root);
			
		} catch (err) {
			console.error(err);
		}
    }
}

