import {router} from "./js/Router.js";

document.addEventListener("DOMContentLoaded", () => {
    const body = document.getElementById("body-rood");
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.setAttribute("data-theme", currentTheme);
    }

    router.init();
    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            localStorage.setItem('user', user.email)
        }else{
            localStorage.removeItem('user');
        }
    });
});