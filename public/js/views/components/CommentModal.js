import Modal from "./Modal.js";
import Utils from "../../services/Utils.js";
import {writeComment} from "../../services/FirebaseServise.js";

export let CommentModal = {
    render: async () => {
        let view = `
        <div class="cocktail-main">
        <form id="comment-form" class="comment-form">
            <h2 class="comment-form-title">Your review</h2>
            <span class="comment-form-text">You're rating the “Cocktail Name”</span>            
            <div class="comment-rating">                                
                <label aria-label="1 star" class="comment-rating-label" for="rating-1"> <i class="comment-rating-icon comment-rating-icon-star fa fa-star"></i></label>
                <input class="comment-rating-input" name="rating" id="rating-1" value="1" checked type="radio">
                <label aria-label="2 stars" class="comment-rating-label" for="rating-2"> <i class="comment-rating-icon comment-rating-icon-star fa fa-star"></i></label>
                <input class="comment-rating-input" name="rating" id="rating-2" value="2" type="radio">
                <label aria-label="3 stars" class="comment-rating-label" for="rating-3"><i class="comment-rating-icon comment-rating-icon-star fa fa-star"></i></label>
                <input class="comment-rating-input" name="rating" id="rating-3" value="3" type="radio">
                <label aria-label="4 stars" class="comment-rating-label" for="rating-4"><i class="comment-rating-icon comment-rating-icon-star fa fa-star"></i></label>
                <input class="comment-rating-input" name="rating" id="rating-4" value="4" type="radio">
                <label aria-label="5 stars" class="comment-rating-label" for="rating-5"><i class="comment-rating-icon comment-rating-icon-star fa fa-star"></i></label>
                <input class="comment-rating-input" name="rating" id="rating-5" value="5" type="radio">
            </div>            
            <textarea id="comment-text" class="comment-form-textarea" required minlength="10"></textarea>            
            <div class="comment-form-buttons">
                <button type="submit" class="comment-form-button">Add</button>
                <button class="comment-form-button" type="reset">Cancel</button>
            </div>
        </form>
    </div>`
    let modal = await Modal.render(view);
        return modal;
    },
    after_render: async () => {
        await Modal.after_render();
        const CocktailId = window.atob((Utils.parseRequestURL().id).toString())
        const modal = document.getElementById("modal");
        const modalOverlay = document.getElementById("modal-overlay");
        const form = document.getElementById("comment-form");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            modal.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");

            const comment = document.getElementById("comment-text").value;
            const email = localStorage.getItem('user');
            const rating = document.querySelector('input[name="rating"]:checked').value;
            await writeComment(CocktailId, comment, email, rating);
        });

        form.addEventListener("reset", async (e) => {
            modal.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
        });
    }
}

export default CommentModal;
