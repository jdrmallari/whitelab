function applyTemplate(targetid, templateid, data) {
    let target = document.getElementById(targetid);

    let template = Handlebars.compile(
                        document.getElementById(templateid).textContent
    );

    Handlebars.registerHelper("prettifyDate", function(timestamp) {
        return new Date(timestamp).toLocaleDateString();
    });

    Handlebars.registerHelper('grouped_each', function(every, context, options) {
        var out = "", subcontext = [], i;
        if (context && context.length > 0) {
            for (i = 0; i < context.length; i++) {
                if (i > 0 && i % every === 0) {
                    out += options.fn(subcontext);
                    subcontext = [];
                }
                subcontext.push(context[i]);
            }
            out += options.fn(subcontext);
        }
        return out;
    });

    target.innerHTML = template(data);
}

export function gridPostsView(targetid, post) {
    return applyTemplate(targetid, 'post-grid-template', {"post": post});
}

export function singlePostView(targetid, post/*, user*/) {
    return applyTemplate(targetid, 'post-template', {post: post});//, user: user});
}