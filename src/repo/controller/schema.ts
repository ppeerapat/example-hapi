import Joi from "joi";

export default Joi.object({
  query: Joi.string().default("nodejs"),
  limit: Joi.number().default(10),
  page: Joi.number().default(0),
});
