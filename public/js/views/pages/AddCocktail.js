import {getIngredients, addCocktail} from "../../services/FirebaseServise.js";
import Ingredient from "../components/Ingredient.js";
import {glass} from "../components/Cocktail.js";



let AddCocktail = {
    render: async () => {
        let view = `
        <form class="wrap-add-cocktail" id="add-cocktail-form">
            <div class="flex-1">
                <section class="cocktail-section">
                    <div class="cocktail-section-title-block">
                        <div class="cocktail-section-circle">1</div>
                        <h3 class="cocktail-section-title">The name of your cocktail</h3>
                    </div>
                    <input name="name" type="text" class="cocktail-section-input">
                </section>

                <section class="cocktail-section">
                    <div class="cocktail-section-title-block">
                        <div class="cocktail-section-circle">2</div>
                        <h3 class="cocktail-section-title">Select the ingredients</h3>
                    </div>
                    <select type="text" class="cocktail-section-input" id="select-ingredients">
                        <option disabled selected value> -- select an option -- </option>
                    </select>
                </section>

                <section class="cocktail-section">
                    <div class="cocktail-section-title-block">
                        <div class="cocktail-section-circle">3</div>
                        <h3 class="cocktail-section-title">Description of your cocktail</h3>
                    </div>
                    <textarea name="description" class="cocktail-section-input"></textarea>
                </section>

                <section class="cocktail-section">
                    <div class="cocktail-section-title-block">
                        <div class="cocktail-section-circle">4</div>
                        <h3 class="cocktail-section-title">Add the cocktail to database</h3>
                    </div>
                    <input type="submit" class="cocktail-section-button" value="Add">
                </section>
            </div>
            <div class="flex-1">
                <section class="add-cocktail-card">
                <h3 class="add-cocktail-card-title">Cocktail Name</h3>
                <div class="add-cocktail-card-main">
                    <ul class="ingredient-select-block" id="ingredients-ul"></ul>
                    <div id="cocktail-glass" class="cocktail-glass cocktail-glass-big">

                    </div>
                </div>
            </section>
            </div>
        </form>`

        return view
    },
    after_render: async () => {
        let ingredients = await getIngredients();

        const select = document.getElementById("select-ingredients");
        ingredients.forEach((element) => {
            let option = document.createElement("option");
            option.dataset.ingredientId = element.id;
            option.innerHTML = `${element.name}`;
            select.appendChild(option);
        })

        const ul = document.getElementById("ingredients-ul");
        ul.addEventListener("change",event => {
            if (event.target.validity.valid){
                document.getElementById("cocktail-glass")
                    .innerHTML = glass(getCurrentIngredients(ingredients), null);
            }
        })

        ul.addEventListener("click",event => {
            if (event.target.nodeName === "BUTTON"){
                Ingredient.delete(event.target.parentElement, select);
                document.getElementById("cocktail-glass")
                    .innerHTML = glass(getCurrentIngredients(ingredients), null);
            }
        })

        select.addEventListener('change', async event => {
            for (let opt of event.target.children) {
                if (opt.selected) {
                    select.remove(opt.index);
                    let li = await Ingredient.render(opt.dataset.ingredientId, opt.value);
                    ul.innerHTML += li;
                    select[0].selected = true;
                    document.getElementById("cocktail-glass")
                        .innerHTML = glass(getCurrentIngredients(ingredients), null);
                    break;
                }
            }
        }, false);

        const form = document.getElementById("add-cocktail-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            addCocktail(
                form.elements['name'].value,
                form.elements['description'].value,
                localStorage.getItem('user'),
                getCurrentIngredients(ingredients)
            );
        })
    }
}

function getCurrentIngredients(ingredients) {
    const elements = document.getElementById("ingredients-ul").querySelectorAll("li");
    let currentIng = [];
    for (let element of elements) {
        let id = element.dataset.ingredientId;
        let ing = ingredients[id];
        let amount = Number(document.getElementById(`ingredient-${id}`).value);
        ing.amount = amount;
        currentIng.push(ing);
    }
    return currentIng;
}

export default AddCocktail;