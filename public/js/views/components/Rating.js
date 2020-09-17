let star = (amount, id, cocktail_id) => {
    let view = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">    
        <defs>
            <linearGradient id="star-${cocktail_id}-${id}">
                <stop offset="${amount}" stop-color="#F1A90D"/>
                <stop offset="${amount}" stop-color="#D0D0CF" stop-opacity="1" />
            </linearGradient>
        </defs>    
        <path style="fill: url(#star-${cocktail_id}-${id});" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>    
    </svg>`
    return view;
}

let rating = (amount, cocktail_id) => {
    let div = document.createElement('div');
    for (let i = 1; i <= 5; i++) {
        if(i <   amount){
            div.innerHTML += star(1, i, cocktail_id);
        }
        else{
            if((i - amount) < 1.0 ){
                div.innerHTML += star(1 - (i - amount), i, cocktail_id);
            }else{
                div.innerHTML += star(0, i, cocktail_id);
            }
        }
    }
    return div.innerHTML
}
export default rating