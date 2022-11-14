import { signUpSchema } from './types.js'



export default function (server, userHandler) {
    // we will get server and userHandler in this function
    server.route({
        method: 'POST',
        path: '/user/signup',
        options: {
            validate: {
                // payload: signUpSchema,
            },
            handler: async (request, h) => {
                // get payload and check sign up details
                const signUpDetails = request.payload;
                // send payload to signUpUser handler for dp operation
                const response = await userHandler.signUpUser(signUpDetails);
    
                return h.response(signUpDetails)
            },
            description: 'user',
            notes: 'sign up',
        }
    })
}