const express = require('express');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in our schema data
// with the new ApolloServer() function, we provide the type definitions and resolvers so they know what our API looks like and how it resolves requests
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// in this file, we connect the Apollo server to our Express.js server; this will create a special /graphql endpoint for the Express.js server that will serve as the main endpoint for accessing the entire API --> to start your server, you run npm run watch, which is a script set up that uses the development dependency called nodemon (short for node monitor) that listens for any file changes and restarts the server, allowing us to avoid having to constantly stop and start the server
// by just using the nodemon command, it implicitly looks for whatever file is listed under main in package.json, so make sure it's set to server.js or whatever your main file is for the application; conversely, you can also change that watch script to be nodemon server.js to explicitly run the file

