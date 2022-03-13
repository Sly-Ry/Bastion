const router = require('express').Router();

// Destructure methods
const {
    addthought,
    removeThought,
    addReact,
    removeReact
} = require('../../controllers/thought-controllers');

// POST single Thought at /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addthought)

// DELETE a Thought or create reaction at /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReact)
    .delete(removeThought);

// DELETE a Reaction at /api/<userId>/<thoughtId>/<reactionId>
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReact);

module.exports = router;