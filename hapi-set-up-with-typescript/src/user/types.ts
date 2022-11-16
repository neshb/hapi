import * as Joi from 'joi'


export const signUpSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

export interface SignUpUser {
    name : string;
    email : string;
    password: string;
}