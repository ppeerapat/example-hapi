import Joi from "joi";

const nodeSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  level: Joi.number().required(),
  children: Joi.array(),
  parent_id: Joi.optional(),
});

export default Joi.object().pattern(
  Joi.number(),
  Joi.array().items(nodeSchema)
);
