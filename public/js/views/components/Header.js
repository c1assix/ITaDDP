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
            <div class="header-item ">
                <a href="/" class="header-title" id="home-button">Cocktail Database</a>
            </div>            
            <div class="header-item user-block">
                <div class="header-item">
                    <div id="switch" class="switch-btn"></div>
                </div>
                <div >
                    ${!localStorage.getItem('user') ? non_authorized : authorized }
                </div>                
            </div>`

        return view
    },
    after_render: async () => {
        const switchBtn = document.getElementById("switch");
        const body = document.getElementById("body-rood");
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            switchBtn.classList.add("switch-on");
        }
        switchBtn.addEventListener("click", (event)=>{
            switchBtn.classList.toggle("switch-on");
            if (switchBtn.classList.contains("switch-on")){
                body.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
            }else{
                body.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
            }
        })

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