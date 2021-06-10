import { Request } from "@hapi/hapi";
import Schema from "./schema";
import { transformNode } from "../service/transform";

export default {
  method: "POST",
  path: "/node",
  options: {
    validate: {
      payload: Schema,
    },
  },
  handler: async (req: Request) => {
    const requestBody: any = req.payload;
    const result = await transformNode(requestBody);
    return result;
  },
};
