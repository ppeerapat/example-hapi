import Joi from "joi";

export const nodeSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  level: Joi.number().required(),
  children: Joi.array(),
  parent_id: Joi.optional(),
})

  .description("Node object")
  .label("Node");

export default Joi.object({ 0: Joi.array().items(nodeSchema) })
  .description("Request body for node/transform api")
  .label("TransformingNode")
  .pattern(Joi.number(), Joi.array().items(nodeSchema));
