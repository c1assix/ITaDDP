import rating from "./Rating.js";

export let CommentCard = {
    render: async (comment) => {
        let view = `
                <article class="comment-card">
                    <h3 class="comment-card-username">
                        ${comment.name}
                    </h3>
                    <p class="comment-card-text">${comment.text}</p>
                    <div class="rating comment-card-rating">
                        ${rating(comment.rating.toFixed(1), comment.id)}
                        <span class="rating-digit">${comment.rating.toFixed(1)}</span>                       
                    </div>
                </article>`

        return view
    },
    after_render: async () => {
    }
}

export default CommentCard;
