
import express from "express";
import {ApolloServer,gql} from "apollo-server-express";
import graphiql from "graphql-playground-middleware-express";

import serverless from "serverless-http";

const typeDefs = gql`
type File{
    id:String
    filename:String
    mimetype:String
    encoding:String
}

type Query{
    hello:String!
}

type Mutation {
    singleUpload(file: Upload!): File!
}
`
const resolvers = {
    Query:{
        hello: (_:any,args:any,{req,res}:any) => {
            
            return 'o yes';
        }
    },
    Mutation:{
        singleUpload: async (_:any, {file}:any) =>{
            console.log(file);
            file.then((f:any) =>{
                let myFile = f.createReadStream();
                console.log(myFile);
            })
            
            return file;
        }
    }
}
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req,res}:any)=>{
  
    ({req,res})},
  
});

server.applyMiddleware({ app });
app.get("/playground", graphiql({ endpoint: "/graphql" }));
// app.use((req, res) => {
//   res.status(200);
//   res.send('Hello!');
//   res.end();
// });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// )


const handler = serverless(app);
export {handler}