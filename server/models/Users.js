const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    likedMovies: [{
      type: Schema.Types.ObjectId,
      ref: 'Movie',
      validate: (arr) => {
        return arr.filter(v => v === null).length === 0;
      }
    }],
    dislikedMovies: [{
      type: Schema.Types.ObjectId,
      ref: 'Movie',
      validate: (arr) => {
        return arr.filter(v => v === null).length === 0;
      }
    }], 

  },

  // Now this needs to be set to be used in the following virtual