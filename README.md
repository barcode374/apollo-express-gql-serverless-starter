# Apollo Express GraphQL starter for deploying on AWS lambda
Apollo Express Server with graphQL, this is a starter for AWS lambda serverless.
It uses the apollo-server-express instead of the apollo-server-lambda and serverless-http to create the lambda serverless function for the express server, which contains '/graphgql' route and a '/playground' route.

# To start a new Project
* Clone Repo
* Run Yarn or NPM install
* Edit TypeDefs & resolvers in index.ts
* Run yarn start or npm start 

# To access the Playground 
  - (http://localhost:5000/dev/playground)

# To query GraphQL use
  - (http://localhost:5000/dev/graphql)
  
# Deploy using
  - configure your aws-cli
  - run 'serverless deploy' in your project
