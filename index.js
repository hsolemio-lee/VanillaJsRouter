import {Router} from './js/router.js';
import Header from './js/layout/header.js';
class App {
    constructor() {
        // header
        new Header();

        // main
        let div = document.createElement('div');
        div.setAttribute('id', 'root');
        document.body.appendChild(div);

        // router
        new Router();
    }
}


window.onload = () => {
    new App();
}
