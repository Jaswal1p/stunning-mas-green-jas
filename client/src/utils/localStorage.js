export const getSavedMovieIds = () => {
    const savedMovieIds = localStorage.getItem('saved_movie')
      ? JSON.parse(localStorage.getItem('saved_movie'))
      : [];
    return savedMovieIds;
  };

  export const savedMovieIds = (bookIdArr) => {
      if (bookIdArr.length){
          localStorage.setItem('saved_movie', JSON.stringify(movieIdArr));
      } else {
          localStorage.removeItem('saved_books')      
      }
  };

  
