import gql from 'graphql-tag';

export const ADD_USER = gql`
      mutation addUser($username: String!, $email!: String!, $password: String!) {
            addUser(username: $username, email: $email, password: $password) {
                token
                    user {
                        _id
                        username
                        email
                        movieCount
                        savedMovies {
                            movieId
                            title
                            description
                            image
                            link
                        }
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
                        movieCount
                        savedMovies {
                            movieId
                            title
                            description
                            image
                            link
                        }
                    }
            }
      }
`;


export const SAVE_MOVIE = gql`
      mutation saveMovie($input: movieInput!) {
            saveMovie(input: $input) {
                token
                    user {
                        _id
                        username
                        email
                        savedMovies {
                            movieId
                            title
                            description
                            image
                            link
                        }
                    }
            }
      }
`;


export const REMOVE_MOVIE = gql`
      mutation removeMovie($input: movieInput!) {
            removeMovie(movieId: $movieId) {
                token
                    user {
                        _id
                        username
                        email
                        savedMovies {
                            movieId
                            title
                            description
                            image
                            link
                        }
                    }
            }
      }
`;



