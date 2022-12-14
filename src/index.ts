import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import express from "express";
import cors from "cors";
import http from "http";
import { json } from "body-parser";

import schema from "./graphql";

const app = express();
const httpServer = http.createServer(app);

const apolloServer = new ApolloServer<BaseContext>({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await apolloServer.start();
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(apolloServer)
  );
})();

(async () => {
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
})();

console.log(`server ready at http://localhost:${4000}/graphql`);
