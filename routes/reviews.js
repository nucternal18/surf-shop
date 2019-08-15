const express = require('express');
const router = express.Router({mergeParams: true});

/* GET review index /posts/:id/reviews */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews')
});

/* POST review create /posts/:id/reviews/ */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts/:id/reviews')
});

/* GET review edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/reviews/:review_id/edit')
});

/* PUT review UPDATE /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /posts/:id/reviews/:review_id')
});

/* DELETE review destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/:review_id')
});


module.exports = router;

// GET index        /posts/:id/reviews
// review create      /posts/:id/reviews
// GET edit         /posts/:id/reviews/:id/edit
// PUT update       /posts/:id/reviews/:id
// DELETE destroy   /posts/:id/reviews/:id