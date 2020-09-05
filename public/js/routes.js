import Login from "./views/pages/Login.js";
import Register from "./views/pages/Register.js";
import Main from "./views/pages/Main.js";

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
    }
];

export default routes;