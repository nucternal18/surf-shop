const Post = require('../models/post');

module.exports = {
    //POST
    async getPosts(req, res, next) {
        let posts = await Post.find({});
        res.render('posts/index', { posts });
    },

    //POST new
    getNewPost(req, res, next) {
        res.render('posts/new');
    },

    //Post Create
    async createPost (req, res, next) {
        // use rq.body to create a new post
        let post = await Post.create(req.body);
        res.redirect(`/posts/${post.id}`);
    }
}