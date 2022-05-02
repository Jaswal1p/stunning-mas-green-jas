import React from 'react';

import Auth from '../utils/auth';

import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';


import { removeMovieId } from '../utils/localStorage';

import { GET_USER } from '../utils/queries';

import { useQuery, useMutation } from '@apollo/client';

import { REMOVE_MOVIE } from '../utils/mutations';



const SavedMovies = () {
    const [removeMovie, {error }] = useMutation(REMOVE_MOVIE);

    
}