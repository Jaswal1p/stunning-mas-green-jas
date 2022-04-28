const jwt = require('jsonwebtoken');

// setting up the token secret word and expiration interval
const secret = 'mysupersecret';
const expiration = '3h';

module.exports = {
    // these will be the authenticated routes
    authMiddleware: function ({req}) {
        // this will allow that token will be sent by either req.query of headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // ["Bearer", "<tokenvalue>"]
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            // return res.status(400).json({ message: 'You have no token!' });
            return req;
        }

        // verify token and get user data out of it
        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
            //// return res.status(400).json({ message: 'invalid token!' });
        }

        // send to next endpoint
        return req;
    },

    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },


};