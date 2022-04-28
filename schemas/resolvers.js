const { User, Movie } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = { 

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id})
                    .select('-_v -password')
                    .populate('dislikedMovies')
                    .populate({
                        path: 'likedMovies',
                        populate: {
                            path: 'likedUsers'
                        }
                    });
                return userData;

            }

            throw new AuthenticationError('Not logged in');

        },

        
    }
}