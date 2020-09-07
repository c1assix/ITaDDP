import {linkHelper} from "../../services/LinkHelper.js";

let Main = {
    render: async () => {
        let view = `
        <div class="search-block">
            <input type="search" class="search-input">
            <a href="/add" id="add-cocktail-button" class="add-cocktail-button">Add</a>
        </div>
        <ul class="table-wrap">
            <li>
                <a href="cocktail.html" class="cocktail-form">
                    <div class="cocktail-main">
                        <div class="cocktail-glass"></div>
                        <div>
                            <h3 class="cocktail-name">Cocktail Name</h3>
                            <p class="cocktail-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                lobortis enim arcu, vitae consequat
                                nunc vulputate nec. Integer porta sem.</p>
                        </div>
                    </div>
    
                    <div>
                        <div class="rating">
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <span class="rating-digit">5.0</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="cocktail.html" class="cocktail-form">
                    <div class="cocktail-main">
                        <div class="cocktail-glass"></div>
                        <div>
                            <h3 class="cocktail-name">Cocktail Name</h3>
                            <p class="cocktail-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                lobortis enim arcu, vitae consequat
                                nunc vulputate nec. Integer porta sem.</p>
                        </div>
                    </div>
    
                    <div>
                        <div class="rating">
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <span class="rating-digit">5.0</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="cocktail.html" class="cocktail-form">
                    <div class="cocktail-main">
                        <div class="cocktail-glass"></div>
                        <div>
                            <h3 class="cocktail-name">Cocktail Name</h3>
                            <p class="cocktail-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                lobortis enim arcu, vitae consequat
                                nunc vulputate nec. Integer porta sem.</p>
                        </div>
                    </div>
    
                    <div>
                        <div class="rating">
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <span class="rating-digit">5.0</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a href="cocktail.html"class="cocktail-form">
                    <div class="cocktail-main">
                        <div class="cocktail-glass"></div>
                        <div>
                            <h3 class="cocktail-name">Cocktail Name</h3>
                            <p class="cocktail-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                lobortis enim arcu, vitae consequat
                                nunc vulputate nec. Integer porta sem.</p>
                        </div>
                    </div>
    
                    <div>
                        <div class="rating">
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <i class="star"></i>
                            <span class="rating-digit">5.0</span>
                        </div>
                    </div>
                </a>
            </li>
    
        </ul>`

        return view
    },
    after_render: async () => {
        document.getElementById("add-cocktail-button").addEventListener("click", linkHelper);
    }
}

export default Main;