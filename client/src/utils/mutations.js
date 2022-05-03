import gql from 'graphql-tag';

export const ADD_USER = gql`
      mutation addUser($username: String!, $email: String!, $password: String!) {
            addUser(username: $username, email: $email, password: $password) {
                token
                    user {
                        _id
                        username
                        email
                    }
            }
      }
`;


export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                likedMovies {
                    _id
                    externalMovieId
                    title
                    overview
                    releaseDate
                    rating
                    voteCount
                    poster
                    trailer
                    likedUsers {
                        _id
                        username
                        email
                    }
                }
                dislikedMovies{
                    _id
                    externalMovieId
                    title
                    overview
                    releaseDate
                    rating
                    voteCount
                    poster
                    trailer
                    likedUsers {
                        _id
                        username
                        email
                    }
                }
            }
        }
    }
`;


// export const SAVE_MOVIE = gql`
//       mutation saveMovie($input: movieInput!) {
//             saveMovie(input: $input) {
//                 token
//                     user {
//                         _id
//                         username
//                         email
//                         savedMovies {                        
//                             movieId
//                             title
//                             overview
//                             poster
//                             link
//                         }
//                     }
//             }
//       }
// `;

export const SAVE_MOVIE = gql`
    mutation saveMovie($input: movieInput!) {
        saveMovie(input: $input) {
            _id
            username
            email
            savedMovies {
                movie_Id
                poster
                overview
                title
                link
            }
        }
    }

`;


export const REMOVE_MOVIE = gql`
      mutation removeMovie($input: movieInput!) {
            removeMovie(movieId: $movieId) {
                        _id
                        username
                        email
                        savedMovies {
                            movieId
                            title
                            overview
                            poster
                            link
                        }
                
            }
      }
`;



