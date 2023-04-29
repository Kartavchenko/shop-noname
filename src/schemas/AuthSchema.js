import Joi from "joi";

export const schema = Joi.object({
    email: Joi.string()
        .email({tlds: {allow: false}}).required(),
    
    password: Joi.string()
        .min(6)
        .required(),
})
   