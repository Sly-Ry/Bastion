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
    .put(alterThought)
    .delete(removeThought);

// POST single Thought at /api/thoughts/<userId>
router
    .route('/:userId')
    .post(addthought)

router
    .route('/:thoughtId/reactions')
    .post(addReact)
// DELETE a Reaction at /api/<userId>/<thoughtId>/<reactionId>
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReact);

module.exports = router;