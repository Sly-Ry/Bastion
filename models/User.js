const { Schema, model } = require('mongoose');
const validateEmail = require('../utils/validateEmail');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Username is required',
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: 'Email address is required',
            unique: true,
            validate: [validateEmail, 'Please enter a valid email'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Gets a total count of friends and thoughts on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
    
})

const User = model('User', UserSchema);

module.exports = User;
