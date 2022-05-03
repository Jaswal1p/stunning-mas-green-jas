import React, { useState, useEffect } from 'react';

import Auth from '../utils/auth';
import { Jumbotron, Container, Col, Form, Button, Card, } from 'react-bootstrap';

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

        setSearchedMovies(movieData);
        setSearchInput('');
        } catch (err) {
        console.error(err);
        }
    };

    // create function to handle saving a movie to the database

    const handleSaveMovie = async (movieId) => {
         const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);

         const token = Auth.loggedIn() ? Auth.getToken() : null;
     
         if (!token) {
             return false;
         }
     
         try {
             // eslint-disable-next-line
             const {data} = await saveMovie({
                 variables: {input: movieToSave}
             });
             console.log(savedMovieIds)
     
             if (error) {
                 throw new Error('Something went wrong!');
             }
     
             setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
         } catch (err) {
             console.error(err);
         }
    };
    

    return (
        <>
          {/* <div class="container-fluid bg-dark text-light"> */}
          <Jumbotron fluid className='text-light bg-dark'>
            <Container>

              <h1>Search for Movies!</h1>
              <Form onSubmit={handleFormSubmit}>
                    <Form.Row>

                        <Col xs={12} md={8}>
                                <Form.Control
                                name='searchInput'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                type='text'
                                size='lg'
                                placeholder='Search for a movie'
                                />
                        </Col>
                        <Col xs={12} md={4}>
                                <Button type='submit' variant='success' size='lg'>
                                Submit Search
                                </Button>
                        </Col>

                    </Form.Row>
              </Form>
            </Container>
            </Jumbotron>
          {/* </div>  */}

          <Container>
        <h2>
          {searchedMovies.length
            ? `Viewing ${searchedMovies.length} results:`
            : 'Search for a movie to begin'}
        </h2>
        <div>
          {searchedMovies.map((movie) => {
            return (
              <Card key={movie.movieId} border='dark'>
                {movie.image ? (
                  <Card.Img src={movie.image} alt={`The cover for ${movie.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p className='small'>Authors: {movie.authors}</p>
                  <Card.Text>{movie.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === movie.movieId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveMovie(movie.movieId)}>
                      {savedMovieIds?.some((savedMovieId) => savedMovieId === movie.movieId)
                        ? 'This Movie has already been saved!'
                        : 'Save this Movie!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </div>

      </Container>

        </>
    );

};

export default SearchMovies;