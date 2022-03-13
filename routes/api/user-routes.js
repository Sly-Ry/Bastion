const router = require('express').Router();

// Destructure methods
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controllers');

// GET all and POST single User at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// GET single, PUT and DELETE User at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;