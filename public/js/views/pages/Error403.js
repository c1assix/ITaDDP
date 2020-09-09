
let Error403 = {
    render: async () => {
        let view = `<h2>Error 403</h2>
                    <span>Forbidden</span>`

        return view
    },
    after_render: async () => {

    }
}

export default Error403;