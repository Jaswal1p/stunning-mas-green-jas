const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        movieId: {
            type: Number,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true,
        },
        overview: {
            type: String,
            required: true,
        },
        poster: {
            type: String,
        },
        
        
    }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;