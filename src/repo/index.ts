import { Server } from "@hapi/hapi";
import repoController from "./controller";

export default {
  name: "repo-controller",
  version: "1.0.0",
  register: async (server: Server) => {
    server.route(repoController);
  },
};
