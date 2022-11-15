

export default function userHandler() {
    return {
        signUpUser: async (signUpDetails) => {
            // sign up user handler code
            console.log('signUpDetails', signUpDetails)
            return signUpDetails
        },
        loginUser: async (loginDetails) => {
            // login user handler code or db operation
            console.log('loginDetails', loginDetails)
            return loginDetails
        }
    }
}