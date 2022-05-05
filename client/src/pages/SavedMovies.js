import React from 'react';
import Auth from '../utils/auth';
import { Container, Card, Button, CardColumns} from 'react-bootstrap';
import {removeMovieId} from '../utils/localStorage';
import {GET_USER} from '../utils/queries';
import {useQuery, useMutation} from '@apollo/client';
import {REMOVE_MOVIE} from '../utils/mutations'

const SavedMovies = () => {
    // eslint-disable-next-line
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
            // eslint-disable-next-line
            const {data} = await removeMovie({
                variables: { movieId}
            });
        if (error){
            throw new Error('Something is wrong!');
        }
        removeMovieId(movieId);
        } catch (err) {
            console.error(err)
        }

    
    };
    if (loading) {
        return <h2>LOADING...</h2>;
    }

    return (
        <>
        <div className="container-fluid bg-dark text-light">
            <Container>
                <h1>Viewing saved movies!</h1>
            </Container>
            
        </div>
            <Container id="midPage">
                <h2>
                    {userData.savedMovies?.length 
                    ? `Viewing ${userData.savedMovies?.length} saved ${userData.savedMovies?.length === 1 ? 'movie' : 'movies'}:` :
                    'You have not saved any movies'}
            
                </h2>
                <CardColumns>
                    {userData.savedMovies?.map((movie)=>{
                        return(
                            <Card key={movie.movieId} border='dark'>
                            {movie.poster ? <Card.Img src={'https://image.tmdb.org/t/p/w500'+movie.poster} alt={`The cover for ${movie.title}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    
                                    <Card.Text>{movie.overview}</Card.Text>
                                    <Button className='btn-block btn-danger' onClick={() => handleDeleteMovie(movie._id)}>
                                    Delete this movie
                                    </Button>

                                </Card.Body>
                                </Card>
                        );
                    })}
                </CardColumns>
            </Container>
        </>
    );

};

export default SavedMovies;
