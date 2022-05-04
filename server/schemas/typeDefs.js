const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type Auth {
        token: ID!
        user: User
    }
    type Movie {
        _id: ID
        movieId: Int
        title: String
        overview: String
        poster: String
                
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
        movieId: Int
        title: String
        overview: String
        poster: String
        
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveMovie(input: MovieInput!): User
        removeMovie(movieId: ID!): User
    }
`;

module.exports = typeDefs;