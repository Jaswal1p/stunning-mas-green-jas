const { User, Movie } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = { 

    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id})
                    .select('-__v -password')
                    .populate('savedMovies')
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
                .populate('savedMovies')
                   
        },

        // get a movie by its id
        movie: async (parent, { movieId }) => {
            return Movie.findOne({ _id: movieId })
                .select('-__v')
                
        },
        
        // to get all movies 
        movies: async () => {
            return Movie.find()
                .select('-__v')
        },

        
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };

        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');

            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');

            }

            const token = signToken(user);
            return { token, user };
                
        },

        // addMovie: async (parent, { input }) => {
        //     const movie = await Movie.findOneAndUpdate(
        //         { externalMovieId: input.externalMovieId },
        //         input,
        //         { upsert: true, new: true }
        //     ).populate('likedUsers');

        //     return movie;
        // },

        // likeMovie: async (parent, { movieId }, context) => {
        //     if (context.user) {
        //         const updatedMovie = await Movie.findByIdAndUpdate(
        //             { _id: context.usemovieId },
        //             {
        //                 $addToSet: { likeUsers: context.user._id },
        //                 $pull: { dislikedUsers: context.user._id }
        //             }
        //         )
        //         const updatedUser = await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             {
        //                 $addToSet: { likedMovies: updatedMovie._id },
        //                 $pull: { dislikeMovies: updatedMovie._id},

        //             },
        //             { new: true }
        //         )
        //         .populate('dislikedMovies')
        //         .populate({
        //             path: 'likedMovies',
        //             populate: {
        //                 path: 'likedUsers'
        //             }

        //         });

        //         return updatedUser;

        //     }
        //     throw new AuthenticationError('You need to be logged in!')
        // },

        saveMovie: async (parent, { input }, context) => {

            if (context.user) {
                let movie = await Movie.findOne({movieId: input.movieId})
                if (!movie) {
                    movie = await Movie.create(input)
                }
                  const updatedUser = await User.findByIdAndUpdate(
                      { _id: context.user._id },
                      { $push: { savedMovies: movie._id } },
                      { new: true }
                  );
                  return updatedUser;
                  
            }
            // throw new AuthenticationError('You need to be logged in!')
          },

        // dislikeMovie: async (parent, { movieId }, context) => {
            
        //     if (context.user) {
        //         const updatedMovie = await Movie.findByIdAndUpdate(
        //             { _id: movieId },
        //             {
        //                 $addToSet: { dislikeUsers: context.user._id },
        //                 $pull: { likedUsers: context.user._id }
        //             }
        //         )
        //         const updatedUser = await User.findByIdAndUpdate(
        //             { _id: context.user._id },
        //             {
        //                 $addToSet: { dislikedMovies: updatedMovie._id },
        //                 $pull: { likeMovies: updatedMovie._id},

        //             },
        //             { new: true }
        //         )
        //         .populate('dislikedMovies')
        //         .populate({
        //             path: 'likedMovies',
        //             populate: {
        //                 path: 'likedUsers'
        //             }

        //         });

        //         return updatedUser;

        //     }
        //     throw new AuthenticationError('You need to be logged in!')
        // }

        removeMovie: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
  
                    { _id: context.user._id },
                    { $pull: { savedMovies: args.movieId } },
                    { new: true }
  
                );
                return updatedUser;
            }
            // throw new AuthenticationError('You need to be logged in!')
        }

        
    }
};

module.exports = resolvers;