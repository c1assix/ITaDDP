import {linkHelper} from "../../services/LinkHelper.js";
import {getCocktails} from "../../services/FirebaseServise.js";
import {CocktailCard} from "../components/Cocktail.js";
import {router} from "../../Router.js";
import Loader from "../components/Loader.js";

let Main = {
    render: async () => {
        let view = `
        <div class="search-block">
            <input id="live-search" type="search" class="search-input">
            <a href="/add" id="add-cocktail-button" class="add-cocktail-button">Add</a>
        </div>
        ${Loader.render()}
        <ul id="cocktail-table" class="table-wrap"></ul>`

        return view
    },
    after_render: async () => {
        document.getElementById("add-cocktail-button").addEventListener("click", linkHelper);
        let cocktails = await getCocktails();
        cocktails.sort((a, b) => a.rating < b.rating ? 1 : -1);
        let list = document.getElementById("cocktail-table");
        Loader.delete();
        if(cocktails){
            for (const element of cocktails) {
                let item = document.createElement('li');
                item.id = window.btoa(element.id);
                item.dataset.name =  element.name;
                let card = await CocktailCard.render(element);
                item.innerHTML = `${card}`;
                item.addEventListener('click', (event) =>{
                    event.preventDefault();
                    router.navigate(`/cocktail/${item.id}`);
                });
                list.appendChild(item);
            }
        }

        document.getElementById("live-search").addEventListener("keyup", (event)=>{
            let input, filter, ul, li, a, i, txtValue;
            input = document.getElementById('live-search');
            filter = input.value.toUpperCase();
            ul = document.getElementById("cocktail-table");
            li = ul.getElementsByTagName('li');

            for (i = 0; i < li.length; i++) {
                txtValue = li[i].dataset.name;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }

        })
    }
}

export default Main;