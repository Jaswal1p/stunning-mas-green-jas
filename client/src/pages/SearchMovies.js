import React, { useState, useEffect } from 'react';

import Auth from '../utils/auth';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import { searchTMDB } from '../utils/API';

import { saveMovieIds, getSavedMovieIds } from '../utils/localStorage';

import { SAVE_MOVIE } from '../utils/mutations';

import { useMutation } from '@apollo/client';


const SearchMovies = () => {

    const [saveMovie, {error}] = useMutation(SAVE_MOVIE);

    // create state for holding returned TMDB api data
    const [searchedMovies, setSearchedMovies] = useState([]);

    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create stae to hold saved movieId values
    const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

    // now we setup useEffect hook to save `savedMovieIds` list to localStorage on component unmount
    // // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    useEffect(() => {
        return () => saveMovieIds(getSavedMovieIds)
    });

    
    // create method to search for movies and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
        return false;
        }

        try {
        const response = await searchTMDB(searchInput);

        if (!response.ok) {
            throw new Error('something went wrong!');
        }

        const { items } = await response.json();

        const movieData = items.map((movie) => ({
            movieId: movie.id,
            authors: movie.volumeInfo.authors || ['No author to display'],
            title: movie.volumeInfo.title,
            description: movie.volumeInfo.description,
            image: movie.volumeInfo.imageLinks?.thumbnail || '',
        }));

        setSearchedmovies(movieData);
        setSearchInput('');
        } catch (err) {
        console.error(err);
        }
  };

  
    












}