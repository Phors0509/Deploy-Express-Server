import Joi from "joi";

const productCreateSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    date: Joi.date().required(),
});

export default productCreateSchema;