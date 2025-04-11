const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod =require('zod')

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const schema =zod.object({
    email:zod.string().email(),
    pass:zod.string().min(6),
})

function signJwt(username, password) {
    // Your code here
    const res =schema.safeParse({
        email:username,
        pass:password,
    })
    if(!res.success){
        return null;
    }
    else{
        return jwt.sign({username,password},jwtPassword);
    }   
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here

    //we cant use if and else here bcz this function returns decoded payload if correct else respond with an error
    // if(jwt.verify(token,jwtPassword)){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    try{
        jwt.verify(token,jwtPassword);
        return true;
    }
    catch{
        return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here

    //jwt.decode(token) returns the decoded payload from a JWT token without verifying its signature.
    const decoded =jwt.decode(token);

    if(decoded){
        return true;
    }
    else{
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
