import { Request, ResponseToolkit } from "@hapi/hapi";
import Schema, { nodeSchema } from "./schema";

import { transformNode } from "../service/transform";
import Joi from "joi";

const responseSchema = {
  "200": {
    description: "Success",
    schema: Joi.array().items(nodeSchema),
  },
};

export default {
  method: "POST",
  path: "/node/transform",
  options: {
    tags: ["api"],
    validate: {
      payload: Schema,
    },
    plugins: {
      "hapi-swagger": {
        responses: responseSchema,
      },
    },
  },
  handler: async (req: Request, h: ResponseToolkit) => {
    const requestBody: any = req.payload;
    const result = await transformNode(requestBody);
    return h.response(result);
  },
};
