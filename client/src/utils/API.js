// We are going to use the IMDB's database at themoviedb.org for API requests. one of the initial pathways is:

export const searchTMDB = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=28b32ebda91943340a40b6a75fb02095&query=${query}`);
};