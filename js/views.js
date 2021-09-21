export {listPostView};

function listPostView(targetid, posts) {

    let content = document.getElementbyId(content);

    let list = "<ul>"
    for (let i = 0; i < posts.length; i++) {
        list += "<li" + posts[i].name + "</li>";
    }

    list += "</ul>"

    content.innerHTML = list;
}