export const getSavedMovieIds = () => {
    const savedMovieIds = localStorage.getItem('saved_movie')
    ? JSON.parse(localStorage.getItem)('saved_movie'))
    : [];

}