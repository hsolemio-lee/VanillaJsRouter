import {Router} from './js/router.js';
import Header from './js/layout/header.js';
class App {
    constructor() {
        new Header();
        new Router();
    }
}


window.onload = () => {
    new App();
}
