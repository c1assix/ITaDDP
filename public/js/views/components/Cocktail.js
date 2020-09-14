import rating from "./Rating.js";

let gradient = (ingredient, id) => {
    var svgns = 'http://www.w3.org/2000/svg';
    let gradient = document.createElementNS(svgns, 'linearGradient');
    gradient.id = 'Gradient-'+id;
    gradient.setAttribute('x1', '0');
    gradient.setAttribute('x2', '0');
    gradient.setAttribute('y1', '0');
    gradient.setAttribute('y2', '1');

    let amounts = ingredient.map((item) => {
        return item.amount;
    });
    let capacity = amounts.reduce((a, b) => a + b, 0) / 100;
    let step = 10 / capacity;
    let offset = 0;
    ingredient.forEach((element) => {
        let stop = document.createElementNS(svgns, 'stop');
        stop.setAttribute('offset', Math.floor(offset) + "%");
        stop.setAttribute('stop-color', element["color"]);
        gradient.appendChild(stop);
        offset += step * (element.amount/10);
    })
    return gradient.outerHTML;
}

export let glass = (ingredient, id) => {
    let view = `
        <svg id="Слой_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>        
            <radialGradient id="SVGID_1_${id}" cx="257.1947" cy="377.8283" r="107.6014" gradientTransform="matrix(1 0 0 0.155 0 426.6601)" gradientUnits="userSpaceOnUse">
            <stop  offset="0" style="stop-color:#808080"/>
            <stop  offset="1" style="stop-color:#808080;stop-opacity:0"/>
        </radialGradient>
        <ellipse fill="url(#SVGID_1_${id})" cx="257.19" cy="485.21" rx="121.92" ry="18.97"/>
        <g>
            <linearGradient id="SVGID_2_${id}" gradientUnits="userSpaceOnUse" x1="165.9281" y1="74.0991" x2="252.8607" y2="74.0991">
                <stop  offset="0" style="stop-color:#DEE2E3"/>
                <stop  offset="0.0511" style="stop-color:#EBEDEE"/>
                <stop  offset="0.1309" style="stop-color:#F6F7F8"/>
                <stop  offset="0.2434" style="stop-color:#FDFDFD"/>
                <stop  offset="0.5556" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <path fill="url(#SVGID_2_${id})" d="M254.14,63.75h-93.15c0,0,1.9,7.84,5.02,20.71h88.14V63.75z"/>
            <linearGradient id="SVGID_3_${id}" gradientUnits="userSpaceOnUse" x1="254.561" y1="74.0991" x2="341.0914" y2="74.0991">
                <stop  offset="0.4444" style="stop-color:#FFFFFF"/>
                <stop  offset="0.7566" style="stop-color:#FDFDFD"/>
                <stop  offset="0.8691" style="stop-color:#F6F7F8"/>
                <stop  offset="0.9489" style="stop-color:#EBEDEE"/>
                <stop  offset="1" style="stop-color:#DEE2E3"/>
            </linearGradient>
            <path fill="url(#SVGID_3_${id})" d="M346.96,63.75h-93.15v20.71h88.14C345.06,71.59,346.96,63.75,346.96,63.75z"/>
            <linearGradient id="SVGID_4_${id}" gradientUnits="userSpaceOnUse" x1="254.392" y1="487.9527" x2="254.392" y2="468.9968">
                <stop  offset="0.0185" style="stop-color:#303030"/>
                <stop  offset="0.4048" style="stop-color:#808080"/>
                <stop  offset="1" style="stop-color:#B9C0C2"/>
            </linearGradient>
            <ellipse fill="url(#SVGID_4_${id})" cx="254.39" cy="477.76" rx="64.53" ry="9.61"/>
            
                <radialGradient id="SVGID_5_${id}" cx="47.1771" cy="452.75" r="82.2796" gradientTransform="matrix(0.7946 0 0 0.0892 217.0367 434.1)" gradientUnits="userSpaceOnUse">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="0.1893" style="stop-color:#F4F5F6"/>
                <stop  offset="0.5164" style="stop-color:#D8DBDD"/>
                <stop  offset="0.6587" style="stop-color:#CACED0"/>
                <stop  offset="0.751" style="stop-color:#B8BBBC"/>
                <stop  offset="0.9385" style="stop-color:#898989"/>
                <stop  offset="0.9709" style="stop-color:#808080"/>
            </radialGradient>
            <path fill="url(#SVGID_5_${id})" d="M319.18,475.84c0,3.82-28.95,6.92-64.66,6.92c-35.71,0-64.66-3.1-64.66-6.92
                c0-3.82,28.95-9.63,64.66-9.63C290.23,466.21,319.18,472.02,319.18,475.84z"/>
            <linearGradient id="SVGID_6_${id}" gradientUnits="userSpaceOnUse" x1="233.8859" y1="461.0966" x2="240.2894" y2="474.2957">
                <stop  offset="0.1164" style="stop-color:#808080"/>
                <stop  offset="0.1315" style="stop-color:#888888"/>
                <stop  offset="0.2056" style="stop-color:#ADADAD"/>
                <stop  offset="0.2837" style="stop-color:#CBCBCB"/>
                <stop  offset="0.3657" style="stop-color:#E2E2E2"/>
                <stop  offset="0.4535" style="stop-color:#F2F2F2"/>
                <stop  offset="0.5509" style="stop-color:#FCFCFC"/>
                <stop  offset="0.6772" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <path fill="url(#SVGID_6_${id})" d="M251,454.05l-36.89,15.94c0,0-0.18,0.01-0.28,0.02c7.69,5.83,41.01,4.56,41.01,4.56v-4.56v-3.42
                v-12.54H251z"/>
            
                <linearGradient id="SVGID_7_${id}" gradientUnits="userSpaceOnUse" x1="2000.1979" y1="461.0966" x2="2006.6014" y2="474.2957" gradientTransform="matrix(-1 0 0 1 2276 0)">
                <stop  offset="0.1164" style="stop-color:#808080"/>
                <stop  offset="0.1315" style="stop-color:#888888"/>
                <stop  offset="0.2056" style="stop-color:#ADADAD"/>
                <stop  offset="0.2837" style="stop-color:#CBCBCB"/>
                <stop  offset="0.3657" style="stop-color:#E2E2E2"/>
                <stop  offset="0.4535" style="stop-color:#F2F2F2"/>
                <stop  offset="0.5509" style="stop-color:#FCFCFC"/>
                <stop  offset="0.6772" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <path fill="url(#SVGID_7_${id})" d="M258.69,454.05l36.89,15.94c0,0,0.18,0.01,0.28,0.02c-6.41,5.83-41.01,4.56-41.01,4.56v-4.56v-3.42
                v-12.54H258.69z"/>
            <linearGradient id="SVGID_8_${id}" gradientUnits="userSpaceOnUse" x1="254.844" y1="476.2837" x2="254.844" y2="453.626">
                <stop  offset="0" style="stop-color:#818181"/>
                <stop  offset="0.0103" style="stop-color:#898989;stop-opacity:0.987"/>
                <stop  offset="0.0577" style="stop-color:#A8A8A8;stop-opacity:0.9274"/>
                <stop  offset="0.1113" style="stop-color:#C4C4C4;stop-opacity:0.8597"/>
                <stop  offset="0.1719" style="stop-color:#DADADA;stop-opacity:0.7834"/>
                <stop  offset="0.2426" style="stop-color:#EBEBEB;stop-opacity:0.6943"/>
                <stop  offset="0.3302" style="stop-color:#F6F6F6;stop-opacity:0.584"/>
                <stop  offset="0.4529" style="stop-color:#FDFDFD;stop-opacity:0.4293"/>
                <stop  offset="0.7937" style="stop-color:#FFFFFF;stop-opacity:0"/>
            </linearGradient>
            <path fill="url(#SVGID_8_${id})" d="M295.57,469.99l-36.89-15.94h-3.84H251l-36.89,15.94c0,0-0.18,0.01-0.28,0.02
                c6.28,4.76,29.66,6.23,38.02,6.61c2,0.09,3.98,0.09,5.99,0c8.54-0.37,32.76-1.83,38.01-6.61
                C295.76,470,295.57,469.99,295.57,469.99z"/>
            <linearGradient id="SVGID_9_${id}" gradientUnits="userSpaceOnUse" x1="222.2452" y1="342.7154" x2="248.2716" y2="337.7545">
                <stop  offset="0.1164" style="stop-color:#808080"/>
                <stop  offset="0.1315" style="stop-color:#888888"/>
                <stop  offset="0.2056" style="stop-color:#ADADAD"/>
                <stop  offset="0.2837" style="stop-color:#CBCBCB"/>
                <stop  offset="0.3657" style="stop-color:#E2E2E2"/>
                <stop  offset="0.4535" style="stop-color:#F2F2F2"/>
                <stop  offset="0.5509" style="stop-color:#FCFCFC"/>
                <stop  offset="0.6772" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <polygon fill="url(#SVGID_9_${id})" points="248.42,455.39 201.1,227.96 254.32,297.29 254.32,455.39 		"/>
            <linearGradient id="SVGID_10_${id}" gradientUnits="userSpaceOnUse" x1="253.9735" y1="66.0541" x2="253.9735" y2="60.7771">
                <stop  offset="0" style="stop-color:#666666"/>
                <stop  offset="0.4153" style="stop-color:#ECECEC"/>
                <stop  offset="1" style="stop-color:#CFCFCF"/>
            </linearGradient>
            <path fill="url(#SVGID_10_${id})" d="M348.28,66.33H159.67c-1.62,0-2.94-1.32-2.94-2.94l0,0c0-1.62,1.32-2.94,2.94-2.94h188.61
                c1.62,0,2.94,1.32,2.94,2.94l0,0C351.22,65.01,349.9,66.33,348.28,66.33z"/>
            
                <linearGradient id="SVGID_11_${id}" gradientUnits="userSpaceOnUse" x1="1189.5211" y1="342.7154" x2="1215.5474" y2="337.7545" gradientTransform="matrix(-1 0 0 1 1475.583 0)">
                <stop  offset="0.1164" style="stop-color:#808080"/>
                <stop  offset="0.1315" style="stop-color:#888888"/>
                <stop  offset="0.2056" style="stop-color:#ADADAD"/>
                <stop  offset="0.2837" style="stop-color:#CBCBCB"/>
                <stop  offset="0.3657" style="stop-color:#E2E2E2"/>
                <stop  offset="0.4535" style="stop-color:#F2F2F2"/>
                <stop  offset="0.5509" style="stop-color:#FCFCFC"/>
                <stop  offset="0.6772" style="stop-color:#FFFFFF"/>
            </linearGradient>
            <polygon fill="url(#SVGID_11_${id})" points="259.89,455.39 307.21,227.96 253.99,297.29 253.99,455.39 		"/>
            ${gradient(ingredient, id)}
            <path fill="url(#Gradient-${id})" d="M166.19,84.45c11.33,46.72,38.77,159.84,50.09,205.62c13.76,55.65,34.81,51.86,37.88,51.86
                c1.69,0,24.12,3.79,37.88-51.86c11.32-45.78,38.76-158.9,50.09-205.62H166.19z"/>
            <linearGradient id="SVGID_13_${id}" gradientUnits="userSpaceOnUse" x1="314.4627" y1="68.1149" x2="281.6113" y2="277.5432">
                <stop  offset="0" style="stop-color:#FFFFFF;stop-opacity:0.9"/>
                <stop  offset="0.1413" style="stop-color:#FFFFFF;stop-opacity:0.8152"/>
                <stop  offset="1" style="stop-color:#FFFFFF;stop-opacity:0.3"/>
            </linearGradient>
            <polygon fill="url(#SVGID_13_${id})" points="329.62,66.33 279.64,280.32 299.87,66.33 		"/>		
        </g>
    </g>
    </svg>
    `
    return view;
}

export let CocktailCard = {
    render: async (item) => {
        let view = `<a href="cocktail/${window.btoa(item.id)}" id="${window.btoa(item.id)}" class="cocktail-form">
                        <div class="cocktail-main">
                            <div class="cocktail-glass">${glass(item.ingredients, item.id)}</div>
                            <div class="flex-1">
                                <h3 class="cocktail-name">${item.name}</h3>
                                <p class="cocktail-description">${item.description}.</p>
                            </div>
                        </div>
        
                        <div>
                            <div class="rating">
                                ${rating(item.rating.toFixed(1), item.id)}
                                <span class="rating-digit">${item.rating.toFixed(1)}</span>
                            </div>
                        </div>
                    </a>`

        return view
    }
}



let IngredientBlock = (ingredients) => {
    let li = document.createElement('li');
    li.className = "cocktail-card-ingredient";
    for (const ingredient of ingredients) {
        li.innerHTML += `<div class="cocktail-card-ingredient-block">
                              <span class="ingredient-text">${ingredient.amount} ml of ${ingredient.name}</span>
                              <img class="ingredient-img" src="../img/${ingredient.name}.gif">
                          </div>`
    }
    return li.innerHTML
}

export let DetailCocktailCard = {
    render: async (item) => {
        let view = `
            
                <div class='cocktail-card-row'>
                    <div class="cocktail-card-first">
                        <h3 class="cocktail-card-name">${item.name}</h3>
                        <span class="cocktail-card-owner">created by ${item.owner}</span>
                        <div class="cocktail-glass">${glass(item.ingredients, item.id)}</div>
                        <div class="rating">
                            ${rating(item.rating.toFixed(1), item.id)}
                            <span class="rating-digit rating-digit-small">${item.rating.toFixed(1)}</span>
                        </div>
                    </div>
                    <div>
                        <h3 class="cocktail-card-name">Recipe</h3>
                        <ul>
                            ${IngredientBlock(item.ingredients)}
                        </ul>
                    </div>
                </div>
                <div>
                
    
                    <div>
                        <h3 class="cocktail-card-name">Description</h3>
                        <p class="cocktail-card-description">${item.description}</p>
                    </div>   
                </div>     
            `
        return view;
    }
}
