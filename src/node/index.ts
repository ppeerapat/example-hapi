import { Server } from "@hapi/hapi";

import nodeController from "./controller";

export default {
  name: "node-controller",
  version: "1.0.0",
  register: async (server: Server) => {
    server.route(nodeController);
  },
};
