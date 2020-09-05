import {linkHelper} from "../../services/LinkHelper.js";

let Header = {
    render: async () => {

        let view = `        
            <div class="header-item">
                <a href="/" class="header-title" id="home-button">Cocktail Database</a>
            </div>
        
            <div class="header-item">
                <nav class="menu">
                    <ul class="list-menu">
                        <li class="menu-item">
                            <a href="/login" class="menu-link" id="sign-in-button">Sign In</a>
                        </li>
                        <li class="menu-item menu-item-border">
                            <a href="/register" class="menu-link" id="sign-up-button">Sign Up</a>
                        </li>
                    </ul>
                </nav>
            </div>`

        return view
    },
    after_render: async () => {
        document.getElementById("sign-in-button").addEventListener("click", linkHelper);
        document.getElementById("sign-up-button").addEventListener("click", linkHelper);
        document.getElementById("home-button").addEventListener("click", linkHelper);
    }
}

export default Header;