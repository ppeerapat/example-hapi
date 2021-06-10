import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import NodeModule from "./node";
import RepoModule from "./repo";

export let server: Server;

export const createServer = async (): Promise<Server> => {
  server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost",
  });

  await server.register([NodeModule, RepoModule]);
  return server;
};
