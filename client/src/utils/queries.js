import gql from 'graphql-tag';

export const GET_USER = gql`
    {
        me {
            _id
            username
            email
            movieCount
            savedmovies {
                _id
                externalMovieId
                rating
                voteCount
                title
                overview
                releaseDate
                poster
                trailer
            }
            users {
                _id
                username
                email
                
            }
        }
    }
`;