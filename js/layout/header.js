import {routes} from '../router.js';

export default class Header {
    constructor() {
        document.body.innerHTML = `<div class='header-wrapper'><ul class='menu-wrapper'></ul><div>`;
        const ul = document.getElementsByClassName('menu-wrapper');

        routes.forEach(route => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', `#${route.hash}`);
            a.innerText = route.pageName;
            li.appendChild(a);
            ul[0].appendChild(li);
        });
    }
}
