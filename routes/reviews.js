const express = require('express');
const router = express.Router({ mergeParams: true });
const errorHandler = require('../middleware');
const {
    reviewCreate,
    reviewUpdate,
    reviewDelete
} = require('../controllers/reviews');

/* POST review create /posts/:id/reviews/ */
router.post('/', errorHandler( reviewCreate ));

/* PUT review UPDATE /posts/:id/reviews/:review_id */
router.put('/:review_id', errorHandler(reviewUpdate));

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