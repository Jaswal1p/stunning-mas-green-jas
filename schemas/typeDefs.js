const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Auth {
        token: ID!
        user: User
    }

    type Movie {
        _id: ID
        externalMovieId: Int
        rating: Float
        voteCount: Int
        title: String
        overview: String
        releaseDate: String
        poster: String
        trailer: String
        likedUsers: [User]
        dislikedUsers: [User]
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        friends: [User]
        likedMovies: [Movie]
    }

    