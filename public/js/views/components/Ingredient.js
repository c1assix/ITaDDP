let Ingredient= {
    render: async  (id, name) =>{
        let li = document.createElement("li");
        li.dataset.ingredientId = id;
        li.classList.add("ingredient-select");
        li.innerHTML = `<label id="label-ingredient-${id}" for="ingredient-${id}" class="ingredient-select-title">${name}</label>
                        <input value="10" min="10" max="250" step="10" id="ingredient-${id}" class="ingredient-select-input" type="number">
                        <span class="ingredient-select-span">ml</span>
                        <button id="button-ingredient-${id}" type="reset" class="ingredient-select-button">✖</button>`
        return li;
    },
    delete: (li, select) =>{
        const id = li.dataset.ingredientId;
        const label = document.getElementById(`label-ingredient-${id}`);
        const option = document.createElement("option");
        option.dataset.ingredientId = id;
        option.innerHTML = `${label.textContent}`;
        select.appendChild(option);
        li.remove();
    }
}

export default Ingredient;