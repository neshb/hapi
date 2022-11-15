import { signUpSchema, loginSchema } from './types.js'



export default function (server, userHandler) {
    // we will get server and userHandler in this function
    server.route({
        method: 'POST',
        path: '/user/signup',
        options: {
            validate: {
                payload: signUpSchema,
            },
            handler: async (request, h) => {
                // get payload and check sign up details
                const signUpDetails = request.payload;
                // send payload to signUpUser handler for dp operation
                const response = await userHandler.signUpUser(signUpDetails);
    
                return h.response(response)
            },
            description: 'user',
            notes: 'sign up',
        }
    });

    // login user router
    server.route({
        method: 'POST',
        path: '/user/login',
        options: {
            validate : {
                payload: loginSchema,
            },
            handler: async (request, h) => {
                // get login payload
                const loginDetails = request.payload;

                const response = await userHandler.loginUser(loginDetails);

                return h.response(response)

            }
        }
    })
}