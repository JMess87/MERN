const express = require('express');
// const path = require('path'); NOT NEEDED

// const routes = require('./routes'); NOT NEEDED

// Import the ApolloServer class (FROM MERN ACTIVITY 1)
const { ApolloServer } = require('apollo-server-express');

// Import the two parts of a GraphQL schema (FROM MERN ACTIVITY 1)
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Create a new instance of an Apollo server with the GraphQL schema (from MERN ACITIVITY 1)
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };



// if we're in production, serve client/build as static assets (NOT NEEDED)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(routes); (NOT NEEDED)

startApolloServer(typeDefs, resolvers);
