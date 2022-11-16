import * as Hapi from '@hapi/hapi';
import * as _ from 'ramda';

import { signUpSchema } from './types'


export default function(server: Hapi.Server, userHandler) {
    server.route({
        method: 'POST',
        path: '/user/signup',
        options: {
            auth: false,
            validate: {
                payload: signUpSchema,
            },
            description: 'user sign up router',
            notes: 'sign up',
            handler:async (request: Hapi.Request, h) => {
                const signUpDetails = request.payload;
                console.log('signUpDetails', signUpDetails)

                return h.response(signUpDetails)
            }
        }
    })
}