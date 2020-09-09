
let Error404 = {
    render: async () => {
        let view = `<h2>Error 404</h2>
                    <span>Not Found</span>`

        return view
    },
    after_render: async () => {

    }
}

export default Error404;