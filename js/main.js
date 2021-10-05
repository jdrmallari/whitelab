import * as views from './views.js'
import {Model} from './model.js'
import {splitHash} from './util.js'

// register event listeners e.g. userLogin, postAdded etc.
window.addEventListener("modelUpdated", redraw);

function redraw() {
    const hash = splitHash(window.location.hash);

    switch (hash.path) {
        /*case 'posts': 
            if(hash.id) {
                // create view
                // post view, if no errors
            }
        break;*/
        default:
            const posts = Model.getPosts();

            if (posts !== null) {
                views.gridPostsView("target", posts);
            } else {
                console.log("There are no posts!");
            }
        break; 
    }
}

window.onhashchange = redraw;

window.onload = function() {
    Model.load();
};