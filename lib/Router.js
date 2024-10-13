import { globalState } from "../index.js";

export default class Router {
    #currPath = '/';
    #viewTable = {};
    #routeNames = [];

    constructor(viewTable) {
        this.#viewTable = viewTable;
        this.#routeNames = this.#extractRoutesName();
    }

    /* public */
    up() {
        this.#onHashChange(); 
        addEventListener('hashchange', this.#onHashChange);
    }

    /* private */
    #onHashChange = () => {
        this.#currPath = location.hash.slice(1) || '/';
        if (this.#currPath.length > 1 && this.#currPath.endsWith('/')) {
            this.#currPath = this.#currPath.slice(0, -1);
        }
        this.#updateView();
    };

    #updateView = async () => {
        const paramIds = this.#currPath.split('/').filter(p => !this.#routeNames.includes(p) && p.length > 0);
        const matchingRoute = Object.keys(this.#viewTable).find(route => this.#isMatchRoute(route, this.#currPath));
        if (!globalState.isLoggedIn && location.hash != "#/" && !location.hash.startsWith(`#/auth/`)){
            location.hash = `#/auth/login`;
            return;
        }
        if (globalState.isLoggedIn && location.hash.startsWith(`#/auth/`)){
            location.hash = `#/`;
            return;
        }
        if (matchingRoute) {
            const view = this.#viewTable[matchingRoute];
            document.getElementById('app').innerHTML = await view(paramIds);
            document.title = this.#getTitleFromRoute(matchingRoute);
            location.hash = this.#currPath;
        } else {
            document.getElementById('app').innerHTML = await this.#viewTable['/404']();
            document.title = "404";
            location.hash = `/404`;
        }
        
        this.#setActiveLink();
       
    };

    #isMatchRoute = (route, currPath) => {
        const routeSegments = route.split('/');
        const pathSegments = currPath.split('/');

        if (routeSegments.length !== pathSegments.length) return false;

        for (let i = 0; i < routeSegments.length; i++) {
            if (routeSegments[i].startsWith(':') || routeSegments[i] === pathSegments[i]) {
                continue;
            }
            return false;
        }

        return true;
    };

    #getTitleFromRoute = (route) => {
        return route; 
    };

    #setActiveLink = () => {
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${this.#currPath}`);
        });
    }

    #extractRoutesName = () => {
        const uniqueNames = new Set();

        Object.keys(this.#viewTable).forEach(route => {
            route.split('/').forEach(segment => {
                if (segment && !segment.startsWith(':')) {
                    uniqueNames.add(segment);
                }
            });
        });

       return Array.from(uniqueNames);
    };
    
}
