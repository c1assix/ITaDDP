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

export function addCocktail(name, description, owner, ingredients) {

    let ref = firebase.database().ref("cocktails/");
    ref.push({
        name: name,
        owner: owner,
        description: description,
        ingredients: ingredients,
        rating: 0
    });
    router.navigate("/");
}

export async function getCocktails(){
    const snapshot = await firebase.database().ref('/cocktails').once("value");
    if (snapshot.exists()){
        const date = snapshot.val();

        return Object.keys(date).map(cocktailId => {
            return {...date[cocktailId], id: cocktailId}
        });
    }
}

export function getCocktail(id, callback) {
    firebase.database().ref('/cocktails/' + id).on("value", async (snapshot) => {
        if (snapshot.exists()) {
            callback(snapshot.val());
        }
        else{
            const content = document.getElementById('page_container');
            content.innerHTML = await Error404.render();
            await Error404.after_render();
        }

    });
}

export async function writeComment(id, comment, email, rating) {
    let ref = firebase.database().ref("cocktails/" + id + "/comments");
    let refCock = firebase.database().ref("cocktails/" + id);
    console.log(comment);
    ref.push({
        text: comment,
        name: email,
        rating: parseInt(rating),
    });

    const snapshot = await ref.once("value");
    const comments = Object.values(snapshot.val());
    const ratings = comments.map((comment) => {
        return comment.rating
    });
    await refCock.update({rating: ratings.reduce((a, b) => a + b, 0) / comments.length});
}

export function getComments(id, callback) {
    firebase.database().ref('/cocktails/' + id + '/comments').on("value", (snapshot) => {
        if (snapshot.exists()) {
            const date = snapshot.val();

            callback(   Object.keys(date).map(cocktailId => {
                return {...date[cocktailId], id: cocktailId}
            })  );
        }
    });
}

