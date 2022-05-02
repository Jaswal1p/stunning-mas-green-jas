export const getSavedMovieIds = () => {
    const savedMovieIds = localStorage.getItem('saved_movie')
      ? JSON.parse(localStorage.getItem('saved_movie'))
      : [];
    return savedMovieIds;
  };

  export const savedMovieIds = (movieIdArr) => {
      if (movieIdArr.length){
          localStorage.setItem('saved_movie', JSON.stringify(movieIdArr));
      } else {
          localStorage.removeItem('saved_movies')      
      }
  };

  export const removeMovieId = (movieId) =>{
      const savedMovieIds= localStorage.getItem('saved_movie')
      ? JSON.parse(localStorage.getItem('saved_movie'))
      : null;

      if(!savedMovieIds){
          return false;
      }
      const updatedSavedMovieIds = savedMovieIds?.filter((savedMovieId)=> savedMovieId !==movieId);
      localStorage.setItem('saved_movies', JSON.stringify(updatedSavedMovieIds));
  }




