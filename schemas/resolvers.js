const { User, Movie } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = { 

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id})
                    .select('-__v -password')
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

        // async function to get all users
        users: async () => {
            return User.find().select('-__v -password');
        },

        // get a user by username 
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('dislikedMovies')
                    .populate({
                        path: 'likedMovies',
                        populate: {
                            path: 'likedUsers'
                        }

                    });    
        },

        // get a movie by its id
        movie: async (parent, { movieId }) => {
            return Movie.findOne({ _id: movieId })
                .select('-__v')
                .populate('dislikedUsers')
                .populate('likedUsers');
        },
        
        // to get all movies 
        movies: async () => {
            return Movie.find()
                .select('-__v')
                .populate('dislikedUsers')
                .populate('likedUsers');
        },

        
    },

    Mutation: {
        addUser: async (parent, args) => {

        },

        login: async (parent, { email, password }) => {


        },

        addFriend: async (parent, { friendId }, context) => {
            

        },

        addMovie: async (parent, { input }) => {
            
        },

        likeMovie: async (parent, { movieId }, context) => {
            
        },

        dislikeMovie: async (parent, { movieId }, context) => {
            
        }

        
    },
}