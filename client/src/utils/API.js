// We are going to use the IMDB's database at themoviedb.org for API requests. one of the initial pathways is:

export const searchTMDB = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=28b32ebda91943340a40b6a75fb02095&query=${query}`);
};

// export const getTrendingMovies = (time_window) => {
//   return fetch(`https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=28b32ebda91943340a40b6a75fb02095`);
// };


// This is the route to get logged in user's info from local storage (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };

// This is an API route to createUser by signup  
export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

// This next two API route for a signedUp user to login
export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(userData),
    });
};

// save movie data for a logged in user
export const saveMovie = (movieData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(movieData),
    });
  };

  
// delete movie data for a logged in user
export const deleteMovie = (movieId, token) => {
    return fetch(`/api/users/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };