import {getCocktail} from "../../services/FirebaseServise.js";
import {DetailCocktailCard} from "../components/Cocktail.js";
import Utils from "../../services/Utils.js";
import Modal from "../components/Modal.js";
import CommentModal from "../components/CommentModal.js";
import {getComments} from "../../services/FirebaseServise.js";
import CommentCard from "../components/Comment.js";

let Cocktail = {
    render: async () => {
        let view = `
        <div class="cocktail-card-wrap">
            <article id="cocktail-card-block" class="cocktail-card"> </article>
            
            <div class="comment-block">
                <h2 class="comment-title">Comments</h2>
                <button class="add-comment" id="open-button"></button>
            </div>    
            <ul id="comment-ul"></ul>
        </div>`

        return view
    },
    after_render: async () => {
        const main =document.getElementById("main-root")
        if(localStorage.getItem('user')){
            main.innerHTML += await CommentModal.render();
            await CommentModal.after_render();
        }
        else{
            const content = `<p>This action requires authorization. Please log in or register.<p>`
            main.innerHTML += await Modal.render(content);
            await Modal.after_render();
        }

        let CocktailId = window.atob((Utils.parseRequestURL().id).toString())

        let cardBlock = document.getElementById("cocktail-card-block")
        getCocktail(CocktailId, async (cocktail) => {
            let card = await DetailCocktailCard.render(cocktail);
            cardBlock.innerHTML = card;
        })

        getComments(CocktailId, async (comments) => {
            let list = document.getElementById("comment-ul");
            list.innerHTML = ``;
            for (const element of comments) {
                console.log(element);
                let item = document.createElement('li');
                let comment = await CommentCard.render(element);
                item.innerHTML = `${comment}`;
                list.appendChild(item);
            }
        });
    },
    destroy() {
        let CocktailId = window.atob((Utils.parseRequestURL().id).toString())
        firebase.database().ref('/cocktails/' + CocktailId + '/comments').off("value");
    }
}

export default Cocktail;

