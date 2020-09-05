import Utils from "./services/Utils.js";
import Error404 from "./views/pages/Error404.js";
import Header from "./views/components/Header.js";
import Footer from "./views/components/Footer.js";
import {routes} from "./routes.js";


class Router {
    constructor() {
        window.addEventListener('popstate', event => this._onPopState(event));
        if (!Router.instance) {
            Router.instance = this;
        }
        return Router.instance;
    }

    _onPopState(){
        router.loadPage(router.parseCurrentURL())
    }

    init() {
        if (Router._instance != null) {
            return Router._instance;
        }

        const path = window.location.pathname;
        window.history.replaceState({path}, path, path);
        router.navigate(window.location.pathname);
    }


    navigate(url) {
        history.pushState({}, "", url);
        let parseURL = this.parseCurrentURL()
        router.loadPage(parseURL)
    }

    async loadPage(url){
        const content = document.getElementById('main-root');
        const header = document.getElementById('header-root');
        const footer = document.getElementById('footer-root');

        header.innerHTML = await Header.render();
        await Header.after_render(url);

        footer.innerHTML = await Footer.render();
        await Footer.after_render();

        this.currentPage = Error404

        for (const { path, page} of routes) {
            if (path === url){
                this.currentPage = page;
            }
        }

        content.innerHTML = await router.currentPage.render();
        await this.currentPage.after_render();

    }

    parseCurrentURL(){
        let request = Utils.parseRequestURL()
        return (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    }
}

export const router = new Router();

