// import React, { useEffect } from 'react';

// // import Auth from '../utils/auth';
// import { Jumbotron, Container, CardColumns, Col, Form, Button, Card } from 'react-bootstrap';

// import { getTrendingMovies } from '../utils/API';

//  import { trendingMovieIds, getTrendingMovieIds } from '../utils/localStorage';

// // import { SAVE_MOVIE } from '../utils/mutations';

// // import { useMutation } from '@apollo/client';
// // import SavedMovies from './SavedMovies';
// // import { responsePathAsArray } from 'graphql';


//     const display = async (event) => {

//         event.preventDefault();

//         if (!movie) {
//             return false;
//         }
//         try {
//             const response = await getTrendingMovies();
        
//         if (!response.ok) {
//             throw new Error('something went wrong in getting trending movies!');
//         }
        
//             const items = await response.json();
//             console.log(items)
//             const trenMovieData = items?.results.map((movie) => ({
//                 movieId: movie.id,
//                 title: movie.title,
//                 overview: movie.overview,
//                 poster: movie.poster_path || '',
//             }));
//             console.log(trenMovieData)
//             setTrendingMovies(trenMovieData);

//         } catch (err) {
//             console.error(err);
//         }
// };


// //  getTrendingMovies('week').then(res => {
// //     if (res.ok) {
// //         res.json().then(async ({ results }) => {
// //             const trenMovieData = await trenMovieData(results);
// //             trenMovieData.forEach(async movie => {

// //                 const result = await addMovie({ variables: { input: movie } })

// //                 if (addMovieError) {
// //                     throw new Error("Movie could not be added");
// //                 }

// //                 const { data: nwMovieData } = await result;
// //                 const { addMovie: nwMovie } = await nwMovieData;

// //                 dispatch({
// //                     movie: nwMovie
// //                 })
            
// //             }) 
// //         })
// //     } else {
// //         throw new Error ("trending movies could not be loaded")
// //     }
// // })


// <Container id="midPage">
//         <h2>
//           {trendingMovies?.length
//             ? `Viewing ${trendingMovies?.length} results:`
//             : 'Search for a movie to begin'}
//         </h2>
        
//         <CardColumns>
//            {trendingMovies?.map((movie) => {
//             return (
//               <Card className="movie-card" key={movie.movieId} border='dark'>
//                 {movie.poster ? (
//                   <Card.Img className="movie-image" src={'https://image.tmdb.org/t/p/w500'+movie.poster} alt={`The cover for ${movie.title}`} variant='top' />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{movie.title}</Card.Title>
//                   {/* <p className='small'>Authors: {movie.authors}</p> */}
//                   <Card.Text>{movie.overview}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={trendingMovieIds?.some((trendingMovieId) => trendingMovieId === movie.movieId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleTrendingMovie(movie.movieId)}>
//                       {trendingMovieIds?.some((trendingMovieId) => trendingMovieId === movie.movieId)
//                         ? 'This Movie has already been saved!'
//                         : 'Save this Movie!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>

//       </Container>