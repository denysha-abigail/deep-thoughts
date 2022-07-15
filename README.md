# deep-thoughts

<!-- the ultimate goal of our application is to make a social media app with the following features:

- A user can sign up and log in to the application.

- A user can post their thoughts and view other user's thoughts.

- A user can react, or reply, to a thought.

- A user can befriend other users -->


<!-- with REST APIs, we implement CRUD actions through the HTTP verbs GET, POST, PUT, and DELETE; with GraphQL, however, we split these four actions into the following two categories:

queries: queries are how we perform GET requests and ask for data from a GraphQL API.

mutations: mutations are how we perform POST, PUT, and DELETE requests to create or manipulate data through a GraphQL API -->

<!-- when we access our GraphQL API from a client, we make either a query request or mutation request:

type definitions: type definitions, or TypeDefs for short, involves literally defining every piece of data that the client can expect to work with through a query or mutation; every GraphQL API starts with defining this data, as this type of strict type definition will give the client more clarity as to what they are asking for and what they can expect in return; think of this as not only defining the API endpoint, but also defining the exact data and parameters that are tied to that endpoint.

resolvers: resolvers are simply the functions we connect to each query or mutation type definition that perform the CRUD actions that each query or mutation is expected to perform 

the two of these together form what's known as a schema -->