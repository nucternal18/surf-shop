const Post = require('../models/post');
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'dus5nxe5w',
  api_key: '984932482597317',
  api_secret: process.env.CLOUDINARY_SECRET
});

module.exports = {
  //POST
  async postIndex(req, res, next) {
    let posts = await Post.find({});
    res.render('posts/index', { posts });
  },

  //POST new
  postNew(req, res, next) {
    res.render('posts/new');
  },

  //Post Create
    async postCreate(req, res, next) {
        req.body.post.images = [];
        for (const file of req.files) {
            let image = await cloudinary.v2.uploader.upload(file.path)
            req.body.post.images.push({
                url: image.secure_url,
                public_id: image.public_id
            })
        };
    // use rq.body to create a new post
    let post = await Post.create(req.body.post);
    res.redirect(`/posts/${post.id}`);
  },

  //Posts Show
  async postShow(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render('posts/show', { post });
  },

  //Post edit
  async postEdit(req, res, next) {
    let post = await Post.findById(req.params.id);
    res.render('posts/edit', { post });
  },

  //Post update
  async postUpdate(req, res, next) {
        let post = await Post.findByIdAndUpdate(req.params.id, req.body.post, { new: true });
    res.redirect(`/posts/${post.id}`);
  },

  //Post Delete
    async postDelete(req, res, next) {
        await Post.findByIdAndRemove(req.params.id);
        res.redirect('/posts')
  }
};