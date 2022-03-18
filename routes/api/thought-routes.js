const router = require('express').Router();

// Destructure methods
const {
    getAllThought,
    getThoughtById,
    addthought,
    removeThought,
    addReact,
    removeReact,
    alterThought,
} = require('../../controllers/thought-controllers');

// GET all Thoughts at /api/thoughts
router
    .route('/')
    .get(getAllThought);

// GET single Thoughts at /api/id
router
    .route('/:id')
    .get(getThoughtById)

// POST single Thought at /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addthought)

// DELETE a Thought or create reaction at /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(alterThought)
    .put(addReact)
    .delete(removeThought);

// DELETE a Reaction at /api/<userId>/<thoughtId>/<reactionId>
router
    .route('/:userId/:thoughtId/:id')
    .delete(removeReact);

module.exports = router;