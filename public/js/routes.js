import Login from "./views/pages/Login.js";
import Register from "./views/pages/Register.js";
import Main from "./views/pages/Main.js";
import AddCocktail from "./views/pages/AddCocktail.js";

export const routes = [
    {
        path: '/login',
        page: Login,
    },
    {
        path: '/register',
        page: Register,
    },
    {
        path: '/',
        page: Main,
    },
    {
        path: '/add',
        page: AddCocktail,
    }
];

export default routes;