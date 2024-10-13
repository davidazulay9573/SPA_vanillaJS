import Router from "./lib/Router.js";

import homeView from "./view/pages/home.js";
import companiesView from "./view/pages/company/companies.js";
import companyView from "./view/pages/company/company.js";
import registerCompanyView from "./view/pages/company/register.js";
import registerView from "./view/pages/auth/register.js";
import loginView from "./view/pages/auth/login.js";
import registerProductView from "./view/pages/products/register.js";
import editProductView from "./view/pages/products/edit.js";
import productsView from "./view/pages/products/products.js";
import productView from "./view/pages/products/product.js";
import iotView from "./view/pages/iots/iot.js";
import iotsView from "./view/pages/iots/iots.js";
import registerIotView from "./view/pages/iots/register.js";
import editIotView from "./view/pages/iots/edit.js";
import updatesView from "./view/pages/updates/updates.js";
import notFoundView from "./view/components/notFound.js";
import authController from "./controller/auth.js";

export const globalState = {
    isLoggedIn: false,
    authToken: null,
};  

document.addEventListener('DOMContentLoaded', async () => {
    initializeGlobalState(); 
    initializeNav(); 

    const viewTable = {
        "/": async (params) => homeView(params),
        "/404": notFoundView,
        "/auth/register": registerView,
        "/auth/login": loginView,
        "/companies": async (params) => await companiesView(params),
        "/companies/register": registerCompanyView,
        "/companies/:id": async (params) => await companyView(params),
        "/companies/:id/products": async (params) => await productsView(params),
        "/companies/:id/products/register": registerProductView,
        "/companies/:id/products/:id": async (params) => await productView(params),
        "/companies/:id/products/:id/edit": editProductView,
        "/companies/:id/products/:id/iots": async (params) => await iotsView(params),
        "/companies/:id/products/:id/iots/register": registerIotView,
        "/companies/:id/products/:id/iots/:id": async (params) => await iotView(params),
        "/companies/:id/products/:id/iots/:id/edit": async (params) => await editIotView(params),
        "/companies/:id/products/:id/iots/:id/updates": async (params) => await updatesView(params),
        // "/products/:id/iots/:id/updates/:id": async (params) => await updatetView(params),
    };

    new Router(viewTable).up();
});


function initializeGlobalState() {
    const token = Cookies.get('auth'); 
    if (token) {
        globalState.isLoggedIn = true;
        console.log(token);
        
        globalState.authToken = JSON.parse(token);
    }
};

function initializeNav() {
    const loginLink = document.getElementById('login-link');
    const logoutLink = document.getElementById('logout-link');
    const registerLink = document.getElementById('register-link');
    const productsLink = document.getElementById('products-link');

    if (globalState.isLoggedIn) {
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        // productsLink.style.display = "";
        logoutLink.style.display = "";
        logoutLink.addEventListener('click', authController.logout);
    } else {
        loginLink.style.display = '';
        registerLink.style.display = '';
        // productsLink.style.display = "none";
        logoutLink.style.display = "none";
    }
};

