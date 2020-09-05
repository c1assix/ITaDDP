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
            </div>            

            <div class="form-bottom">
                <button type="submit" class="form-input-button" id="sign-in-button">Sign in</button>
            </div>            
        </form>

        <div class="form flex-column">
            <div class="form-main">
                <span class="form-input-label">Don't have an account? Sign up</span>
            </div>            
            <a class="form-input-button">Sign Up</a>            
        </div>
    </div>`

        return view
    },
    after_render: async () => {                     
    }
}

export default Login;