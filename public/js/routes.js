import Login from "./views/pages/Login.js";
import Register from "./views/pages/Register.js";
import Main from "./views/pages/Main.js";
import AddCocktail from "./views/pages/AddCocktail.js";
import Cocktail from "./views/pages/Coctail.js";

export const routes = [
    {
        path: '/login',
        page: Login,
        auth: false
    },
    {
        path: '/register',
        page: Register,
        auth: false
    },
    {
        path: '/',
        page: Main,
        auth: false
    },
    {
        path: '/add',
        page: AddCocktail,
        auth: true
    },
    {
        path: '/cocktail/:id',
        page: Cocktail,
        auth: false
    }
];

export default routes;