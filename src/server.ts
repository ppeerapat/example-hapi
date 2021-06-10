import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import nodeController from "./node";

export let server: Server;

export const createServer = async (): Promise<Server> => {
  server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost",
  });

  server.register([nodeController]);
  return server;
};
