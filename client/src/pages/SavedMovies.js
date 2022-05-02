import React from 'react';
import Auth from '../utils/auth';
import {Jumbotron, Container, CradColumns, Card, Button} from 'react-bootstrap';
import {removeMovieId} from '../utils/localStorage';
import {GET_USER} from '../utils/queries';
import {useQuery, useMutation} from '@apollo/client';
import {REMOVE_MOVIE} from '../utils/mutations'

const SavedMovies = () => {
    const [ removeMovie, { error}] = useMutation(REMOVE_MOVIE);
    const {loading, data} = useQuery(GET_USER);
    console.log(loading, data)
    const userData = data?.me || {};
    console.log(userData)
    
    const handleDeleteMovie = async (movieId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }

        try {
            const {data} = await removeMovie({
                variables: { movieId}
            });
        if (err){
            throw new Error('Something is wrong!');
        }
        removeMovieId(movieId);
        } catch (err) {
            console.error(err)
        }

    
    }

}
