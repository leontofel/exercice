import jwt from 'jsonwebtoken';

export const useVerifyToken = (token: string) => {

    let isValid = false;
    jwt.verify(token, process.env.PRIVATEKEY || 'secret', function( err, decode) {
        if(err) isValid = true;
    });
    return isValid;
}