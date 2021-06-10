import { Request, ResponseToolkit } from "@hapi/hapi";
import Schema from "./schema";
import { getQuery } from "../service/get-query";

export default {
  method: "GET",
  path: "/repo",
  options: {
    validate: {
      query: Schema,
    },
  },
  handler: async (req: Request, h: ResponseToolkit) => {
    const requestQuery: any = req.query;
    console.log(requestQuery);
    // const result = await getQuery();
    return "result";
  },
};
