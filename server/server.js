const express = require('express');
const path = require('path');


// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

// import authMiddleware from auth.js in utils folder
const { authMiddleware } = require('./utils/auth');

// require Mongoose handling of connection from config/connection.js
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// async start server function 
const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    context: authMiddleware 
  });
