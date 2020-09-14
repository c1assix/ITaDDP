import rating from "./Rating.js";

export let Loader = {
    render: () => {
        let view = `
                <div id="loader" class="loader">
                  <div class="loader_inner"></div>
                </div>`

        return view
    },
    delete: () => {
        document.getElementById("loader").style.display = "none";
    }
}

export default Loader;
