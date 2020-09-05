
let Register = {
    render: async () => {
        let view = `
        <div class="form-wrap">
            <h2 class="form-title">Sign up</h2>
            <form class="form" id="sign-up-form">
                <div class="form-main">
                    <div class="form-input-block">
                        <label class="form-input-label" for="form-email">Email address</label>
                        <input class="form-input" id="form-email" type="email" required>
                    </div> 
        
                    <div class="form-input-block">
                        <label class="form-input-label" for="form-password">Password</label>
                        <input class="form-input" id="form-password" type="password" required minlength="3">
                    </div> 
    
                    <div class="form-input-block">
                        <label class="form-input-label" for="form-confirm-password">Confirm Password</label>
                        <input class="form-input" id="form-confirm-password" type="password" required minlength="3">
                    </div>                                    
                </div>            
    
                <div class="form-bottom">
                    <button type="submit" class="form-input-button">Sign Up</button>
                </div>            
            </form>        
        </div>`

        return view
    },
    after_render: async () => {      
}

export default Register;