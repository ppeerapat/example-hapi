import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";

export let server: Server;

export const createServer = async (): Promise<Server> => {
  server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost",
  });

  return server;
};
