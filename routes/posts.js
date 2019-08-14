const express = require('express');
const router = express.Router();

/* GET post index /posts */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts')
});

/* GET post new /posts/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /posts/new')
});

/* POST post create /posts/ */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts')
});

/* GET post show /posts/:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id')
});

/* GET post edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit')
});

/* PUT post UPDATE /posts/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id')
});

/* DELETE post destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id')
});


module.exports = router;

// GET index        /posts
// GET new          /posts/new
// POST create      /posts
// GET show         /post/:id
// GET edit         /posts/:id/edit
// PUT update       /posts/:id
// DELETE destroy   /posts/:id