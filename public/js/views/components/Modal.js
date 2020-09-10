export let Modal = {
    render: async (content) => {
        let view = `
        <div class="modal-overlay closed" id="modal-overlay"></div>
            <div class="modal closed" id="modal" aria-hidden="true" aria-labelledby="modalTitle" aria-describedby="modalDescription" role="dialog">
                <button class="close-button" id="close-button">Close</button>
                <div class="modal-content" role="document">${content}</div>            
            </div>
        </div>`

        return view
    },
    after_render: async () => {
        const modal = document.getElementById("modal");
        const modalOverlay = document.getElementById("modal-overlay");
        const closeButton = document.getElementById("close-button");
        const openButton = document.getElementById("open-button");

        closeButton.addEventListener("click", function() {
            modal.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
        });

        openButton.addEventListener("click", function() {
            modal.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
        });
    }
}

export default Modal;
