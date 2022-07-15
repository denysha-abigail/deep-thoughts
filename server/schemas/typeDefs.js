// before we can create any resolvers, we need to first create the type definition

// import the gql tagged template function
// tagged templates are an advanced use of template literals
const { gql } = require('apollo-server-express');

// create our typeDefs
// all of our type definitions will go here into the typeDefs tagged template function
// with graphql, we access our API through two passages: queries and mutations; to define a query, you use the type Query {} data type, which is built into GraphQL; from there, you can define your different types of queries by naming them, just as you would name a function in javascript
// here, we created a query named helloWorld and explicitly specified that the type of data to be returned by this query will be a string 
// all type definitions need to specify what type of data is expected in return, no matter what
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

// export the typeDefs
module.exports = typeDefs;