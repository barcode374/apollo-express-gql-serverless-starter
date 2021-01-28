# apollo-express-gql-serverless-starter
Apollo Express Server with graphQL, starter for AWS lambda serverless 
This uses the apollo-server-express instead of the apollo-server-lambda
I'm using serverless-http to create the lambda serverless function for the express server, which contains '/graphgql' route and '/playground' route

# To start a new Project
* Clone Repo
* Run Yarn or NPM install
* Edit TypeDefs & resolvers in index.ts
* Run yarn start or npm start 

# To access the Playground 
  - (http://localhost:5000/dev/playground)

# To query GraphQL use
  - (http://localhost:5000/dev/graphql)
