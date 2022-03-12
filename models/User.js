const { Schema, model } = require('mongoose');
const dateFormat = {};

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Enter a username',
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: 'Enter an email address',
            unique: true,

        }
    }
)

