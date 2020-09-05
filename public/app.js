import {router} from "./js/Router.js";

document.addEventListener("DOMContentLoaded", () => {
    router.init();

    firebase.auth().onAuthStateChanged(function(user) {
        if(user){
            localStorage.setItem('user', user.email)
        }else{
            localStorage.removeItem('user');
        }
    });
});