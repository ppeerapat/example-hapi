import { Request, ResponseToolkit } from "@hapi/hapi";
import Schema from "./schema";
import { getQuery } from "../service/get-query";
import Joi from "joi";

const responseSchema = {
  "200": {
    description: "html for displaying the result",
    schema: Joi.string(),
  },
};

export default {
  method: "GET",
  path: "/repo",
  options: {
    tags: ["api"],
    validate: {
      query: Schema,
    },
    plugins: {
      "hapi-swagger": {
        responses: responseSchema,
      },
    },
  },
  handler: async (req: Request, h: ResponseToolkit) => {
    const requestQuery: any = req.query;
    const result = await getQuery(requestQuery);
    return h.view("repo", result);
  },
};
