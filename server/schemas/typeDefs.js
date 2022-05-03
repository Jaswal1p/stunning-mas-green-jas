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
        title: String
        overview: String
        releaseDate: String
        poster: String
        trailer: String
        
    }
    type User {
        _id: ID
        username: String
        email: String
        movieCount: Int
        savedMovies: [Movie]
        
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        movies(username: String!): [Movie]
        movie(movieId: ID!): Movie
    }
    input MovieInput {
        externalMovieId: Int
        rating: Float
        title: String
        overview: String
        releaseDate: String
        poster: String
        trailer: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveMovie(movieId: ID!): User
        removeMovie(movieId: ID!): User
    }
`;

module.exports = typeDefs;