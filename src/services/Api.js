import axios from 'axios';

const ApiKey = '249f222afb1002186f4d88b2b5418b55';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchTrending = () => {
    return axios.get(`trending/movie/day?api_key=${ApiKey}`)
};

const fetchMovieData = (movieId) => {
    return axios.get(`movie/${movieId}?api_key=${ApiKey}&language=en-US`)
}

const fetchQuery = (query) => {
    return axios.get(`search/movie?api_key=${ApiKey}&query=${query}&page=1`)
        
}

const fetchCast = (movieId) => {
    return axios.get(`/movie/${movieId}/credits?api_key=${ApiKey}&language=en-US`)
};

const fetchReviews = (movieId) => {
    return axios.get(`movie/${movieId}/reviews?api_key=${ApiKey}&language=en-US&page=1`)
};


// eslint-disable-next-line
export default { fetchTrending, fetchCast, fetchReviews, fetchMovieData, fetchQuery }