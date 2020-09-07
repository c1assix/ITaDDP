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

export async function getIngredients() {
    const snapshot = await firebase.database().ref('/ingredients').once("value");
    if (snapshot.exists()){
        const date = snapshot.val();

        return Object.keys(date).map(ingredientId => {
            return {...date[ingredientId], id: ingredientId}
        });
    }
}

export function addCocktail(name, description, ingredients) {

    let ref = firebase.database().ref("cocktails/");
    ref.push({
        name: name,
        description: description,
        ingredients: ingredients,
        rating: 0
    });
    router.navigate("/");
}

