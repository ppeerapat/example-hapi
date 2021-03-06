const HapiReactViews = require("hapi-react-views");

import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import hapiswagger from "hapi-swagger";
import NodeModule from "./node";
import RepoModule from "./repo";

export let server: Server;

const swaggerOptions: hapiswagger.RegisterOptions = {
  info: {
    title: "API Documentation",
  },
};

export const createServer = async (): Promise<Server> => {
  server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost",
  });

  await server.register([Vision, Inert]);

  await server.register([
    {
      plugin: hapiswagger,
      options: swaggerOptions,
    },
  ]);
  await server.register(Inert);

  server.views({
    engines: { tsx: HapiReactViews },
    relativeTo: __dirname,
    path: "pages",
  });
  await server.register([NodeModule, RepoModule]);

  return server;
};
