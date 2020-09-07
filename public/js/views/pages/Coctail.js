import {getCocktail} from "../../services/FirebaseServise.js";
import {DetailCocktailCard} from "../components/Cocktail.js";
import Utils from "../../services/Utils.js";

let Cocktail = {
    render: async () => {
        let view = `
        <div class="cocktail-card-wrap">
            <article id="cocktail-card-block" class="cocktail-card"> </article>
            
            <div class="comment-block">
                <h2 class="comment-title">Comments</h2>
                <a class="add-comment" href="modal.html"></a>
            </div>    
            <ul></ul>
        </div>`

        return view
    },
    after_render: async () => {
        let request = Utils.parseRequestURL();
        let CocktailId = window.atob((request.id).toString())

        let cardBlock = document.getElementById("cocktail-card-block")
        getCocktail(CocktailId, async (cocktail) => {
            let card = await DetailCocktailCard.render(cocktail);
            cardBlock.innerHTML = card;
        })
    }
}

export default Cocktail;