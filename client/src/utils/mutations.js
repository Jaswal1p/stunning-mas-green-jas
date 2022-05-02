import gql from 'graphql-tag';

export const ADD_USER =gql`
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