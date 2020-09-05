import {router} from "../Router.js";

export function linkHelper(event) {
    event.preventDefault();
    const url = event.target.getAttribute("href");
    router.navigate(url);
}