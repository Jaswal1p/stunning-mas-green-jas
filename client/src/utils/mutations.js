import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
                user {
                    _id
                    username
                    email
                    friendCount
                    friends {
                        _id
                        username
                        email
                        friendCount
                    }
                    likedMovies {
                        _id
                        externalMovieId
                        rating
                        voteCount
                        title
                        overview
                        releaseDate
                        poster
                        trailer
                        likedUsers {
                            _id
                            username
                            email
                            friendCount
                        }
                        dislikedUsers {
                            _id
                            username
                            email
                            friendCount
                        }
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
                    friendCount
                    friends {
                        _id
                        username
                        email
                        friendCount
                    }
                    likedMovies {
                        _id
                        externalMovieId
                        rating
                        voteCount
                        title
                        overview
                        releaseDate
                        poster
                        trailer
                        likedUsers {
                            _id
                            username
                            email
                            friendCount
                        }
                        dislikedUsers {
                            _id
                            username
                            email
                            friendCount
                        }
                    }
                }
        }
    }
`;

export const ADD_FRIEND = gql`
    mutation addFriend($friendId: ID!) {
        addFriend(friendId: $friendId) {
            token
                user{
                    _id
                    username
                    email
                    friendCount
                    friends {
                        _id
                        username
                        email
                        friendCount
                    }
                    likedMovies {
                        _id
                        externalMovieId
                        rating
                        voteCount
                        title
                        overview
                        releaseDate
                        poster
                        trailer
                        likedUsers {
                            _id
                            username
                            email
                            friendCount
                        }
                        dislikedUsers {
                            _id
                            username
                            email
                            friendCount
                        }
                    }
                }
        }
    }
`;

export const ADD_MOVIE = gql`
    mutation addMovie($input: MovieInput!) {
        addMovie(input: $input) {
            externalMovieId
            rating
            voteCount
            title
            overview
            releaseDate
            poster
            trailer
        }
    }
`;

export const LIKE_MOVIE = gql`
    mutation likeMovie($movieId: ID!) {
        likeMovie(movieId: $movieId) {
            _id
            username
            email
            friendCount
        }
    }
`;

export const DISLIKE_MOVIE = gql`
    mutation dislikeMovie($movieId: ID!) {
        dislikeMovie(movieId: $movieId) {
            _id
            username
            email
            friendCount
        }
    }
`;