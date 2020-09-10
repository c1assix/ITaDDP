import {linkHelper} from "../../services/LinkHelper.js";
import {logout} from "../../services/FirebaseServise.js";

let Header = {

    render: async () => {
        let authorized = `<span class="login-span">${localStorage.getItem('user')}</span>
                          <button class="menu-button" id="logout-button">Logout</button>`;
        let non_authorized =
            `</nav>
                 <ul class="list-menu">
                     <li class="menu-item">
                        <a href="/login" class="menu-link" id="sign-in-button">Sign In</a>
                     </li>
                     <li class="menu-item menu-item-border">
                        <a href="/register" class="menu-link" id="sign-up-button">Sign Up</a>
                     </li>
                 </ul>
             </nav>`;

        let view = `        
            <div class="header-item">
                <a href="/" class="header-title" id="home-button">Cocktail Database</a>
            </div>            
            
            <div class="header-item">
                ${!localStorage.getItem('user') ? non_authorized : authorized }
            </div>`

        return view
    },
    after_render: async () => {
        document.getElementById("home-button").addEventListener("click", linkHelper);
        if(!localStorage.getItem('user')) {
            document.getElementById("sign-in-button").addEventListener("click", linkHelper);
            document.getElementById("sign-up-button").addEventListener("click", linkHelper);
        }
        else{
            document.getElementById("logout-button").addEventListener("click", logout)
        }
    }
}

export default Header;