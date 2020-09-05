import {router} from "../Router.js";

const auth = firebase.auth();

export function signIn(email, password, error_block) {
    localStorage.setItem('user', email);
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            router.navigate("/");
        })
        .catch(error => {
            error_block.innerHTML = error.message;
            console.log(error);
        })
}

export function signUp(email, password, error_block) {
    localStorage.setItem('user', email);
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            router.navigate("/");
        })
        .catch(error => {
            error_block.innerHTML = error;
        });

}

export  function  logout() {
    localStorage.removeItem('user');
    firebase.auth().signOut().then(() => {
        router.navigate("/");
    });
}

