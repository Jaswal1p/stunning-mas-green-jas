import React from 'react';
import Auth from '../utils/auth';
import {Jumbotron, Container, CardColumns, Card, Button} from 'react-bootstrap';
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
        <Jumbotron fluid className='text-ligt bg-dark'>
            <Container>
                <h1>Viewing daved movies!</h1>
            </Container>
            
            </Jumbotron>
            <Container>
                <h2>
                    {userData.SavedMovies?.length} 
                    ? 'Viewing ${userData.SavedMovies?.length} saved ${userData.SavedMovies?.length === 1 ? 'movie' : 'movies'};' :
                    'You have not saved any movies'
            
                </h2>
                <CardColumns>
                    {userData.SavedMovies?.map((movie)=>{
                        return(
                            <Card key={movie.movieId} border='dark'>
                            {movie.image ? <Card.Img src={movie.image} alt={`The cover for ${movie.title}`} variant='top' /> : null}
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <p className='small'>Authors: {movie.authors}</p>
                                    <Card.Text>{movie.description}</Card.Text>
                                    <Button className='btn-block btn-danger' onClick={() => handleDeleteMovie(movie.movieId)}>
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
