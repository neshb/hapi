
import { SignUpUser } from './types';

export default function userHandler() {
    return {
        signUpUser :async (signUpDetails : SignUpUser): Promise<any> => {
            console.log('signUpDetails handler', signUpDetails)

            return signUpDetails
        }
    }
}