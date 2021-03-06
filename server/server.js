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

//   start the Apollo server
await server.start();

// integrated Apollo server with the Express application as middleware
server.applyMiddleware({ app });

// log where we can go test our GQL API
console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the Apollo server
startServer();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

