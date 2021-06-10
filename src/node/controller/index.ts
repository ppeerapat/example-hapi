import { Request, ResponseToolkit } from "@hapi/hapi";
import NodeSchema from "./schema";
import { transformNode } from "../service/transform";

export default {
  method: "POST",
  path: "/node",
  options: {
    validate: {
      payload: NodeSchema,
    },
  },
  handler: async (req: Request, h: ResponseToolkit) => {
    const requestBody: any = req.payload;
    const result = await transformNode(requestBody);
    return result;
  },
};
