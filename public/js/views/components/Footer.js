let Footer = {
    render: async () => {

        let view = `        
        <hr class="hr-footer">
        <div class="footer">
        <span class="copyright">© Cocktail Database, 2020</span>
        <nav class="menu">
            <ul class="list-menu">
                <li class="menu-item">
                    <a href="https://vk.com/levkupchinov"><div class="vk-logo"></div></a>
                </li>
            </ul>
        </nav>
        </div>`

        return view
    },
    after_render: async () => {
    }
}

export default Footer;