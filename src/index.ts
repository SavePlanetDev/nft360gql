import { config } from "dotenv";
config();
import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import express from "express";
import cors from "cors";
import http from "http";
import { json } from "body-parser";

import schema from "./graphql";

const port = process.env.PORT! || 4000;
const app = express();
const httpServer = http.createServer(app);

const apolloServer = new ApolloServer<BaseContext>({
  schema,
  includeStacktraceInErrorResponses:
    process.env.NODE_ENV! == "prod" ? false : true,
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
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
})();

console.log(
  `${process.env.NODE_ENV} server ready at http://localhost:${port}/graphql`
);
