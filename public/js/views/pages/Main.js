import {linkHelper} from "../../services/LinkHelper.js";
import {getCocktails} from "../../services/FirebaseServise.js";
import {CocktailCard} from "../components/Cocktail.js";
import {router} from "../../Router.js";

let Main = {
    render: async () => {
        let view = `
        <div class="search-block">
            <input type="search" class="search-input">
            <a href="/add" id="add-cocktail-button" class="add-cocktail-button">Add</a>
        </div>
        <ul id="cocktail-table" class="table-wrap"></ul>`

        return view
    },
    after_render: async () => {
        document.getElementById("add-cocktail-button").addEventListener("click", linkHelper);
        let cocktails = await getCocktails();
        let list = document.getElementById("cocktail-table");
        if(cocktails){
            for (const element of cocktails) {
                let item = document.createElement('li');
                item.id = window.btoa(element.id);
                let card = await CocktailCard.render(element);
                item.innerHTML = `${card}`;
                item.addEventListener('click', (event) =>{
                    event.preventDefault();
                    router.navigate(`/cocktail/${item.id}`);
                });
                list.appendChild(item);
            }
        }
    }
}

export default Main;