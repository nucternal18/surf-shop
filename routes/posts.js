const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const errorHandler  = require('../middleware/index');
const {
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
  postUpdate,
  postDelete
} = require('../controllers/posts');

/* GET posts index /posts */
router.get('/', errorHandler(postIndex));

/* GET posts new /posts/new */
router.get('/new', postNew);

/* POST posts create /posts */
router.post('/', upload.array('images', 4), errorHandler(postCreate));

/* GET posts show /posts/:id */
router.get('/:id', errorHandler(postShow));

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', errorHandler(postEdit));

/* PUT posts update /posts/:id */
router.put('/:id', upload.array('images', 4), errorHandler(postUpdate));

/* DELETE posts destroy /posts/:id */
router.delete('/:id', errorHandler(postDelete));

module.exports = router;
