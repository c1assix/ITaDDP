import {signIn} from "../../services/FirebaseServise.js";
import {linkHelper} from "../../services/LinkHelper.js";

let Login = {
    render: async () => {
        let view = `
        <div class="form-wrap">
        <h2 class="form-title">Sign in</h2>
        <form class="form" id="sign-in-form">
            <div class="form-main">
                <div class="form-input-block">
                    <label class="form-input-label" for="form-email">Email address</label>
                    <input class="form-input" id="form-email" type="email" required>
                </div> 
    
                <div class="form-input-block">
                    <label class="form-input-label" for="form-password">Password</label>
                    <input class="form-input" id="form-password" type="password" required minlength="3">
                </div> 
                
                <div class="error-block"><span id="sign-in-error"></span></div>
            </div>            

            <div class="form-bottom">
                <button type="submit" class="form-input-button">Sign in</button>
            </div>            
        </form>

        <div class="form flex-column">
            <div class="form-main">
                <span class="form-input-label">Don't have an account? Sign up</span>
            </div>            
            <a href="/register" class="form-input-button" id="no-account-button">Sign Up</a>            
        </div>
    </div>`

        return view
    },
    after_render: async () => {
        const form = document.getElementById("sign-in-form");
        const email = document.getElementById("form-email");
        const password = document.getElementById("form-password");
        const error_block = document.getElementById("sign-in-error");

        document.getElementById("no-account-button").addEventListener("click", linkHelper);
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            signIn(email.value, password.value, error_block);
        });
    }
}

export default Login;