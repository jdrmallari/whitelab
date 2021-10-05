export {Model}

function timeComparator(a,b) {
    if (a.published_at > b.published_at) {
        return -1;
    } else if (a.published_at === b.published_at) {
        return 0;
    } else {
        return 1;
    };
}

const Model = {
    postsUrl: '/posts', 
    uploadUrl: '/upload',  
    commentsUrl: '/comments',
    
    //this will hold the post data stored in the model
    data: {
        posts: []
    },

    load: function(){
        fetch('./js/sample.json')
        .then((response)=> {
            return response.json();
       })
       .then((data)=> {
            console.log('the data is ', data);
            this.data.posts = data;

           // custom event to inform the application 
           // that the data has been updated, 
           this.updatePosts();
       })
    },

    // updatePosts - retrieve the latest list of posts from the server API
    // when the request is resolved, creates a "modelUpdated" event 
    updatePosts: function() {
        const event = new CustomEvent('modelUpdated');
        window.dispatchEvent(event);
    },

    // getPosts - return an array of post objects
    getPosts: function() {
        //before that you may need to sort the posts by their timestamp
        this.data.posts = this.data.posts.sort(timeComparator);
        return this.data.posts;
    },

    // getPost - return a single post given its id
    getPost: function(postid) {

        for(const post of this.data.posts) {
            if (post.id == postid) {
                return post;
            }
        }
        return null;
    },

    setPosts: function(posts) {
        this.data.posts = posts;
    },

    // getRecentPosts - return N most recent posts

    // getPopularPosts - return N most popular posts

    // addLike - add like to a target post

    // addComment - add comments to a target post
};
