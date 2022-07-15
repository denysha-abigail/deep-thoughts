// graphQL has built-in data types known as scalars; scalars work similarly to how we defined data in Mongoose using JavaScript's built-in types
// now that we have our query set up, we need to set up the resolver that will serve the response for the helloWorld query
// these methods get the same name of the query or mutation they are resolvers for; this way, when we use the query helloWorld, this helloWorld() method will execute and return the string "Hello world!"
const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
module.exports = resolvers;