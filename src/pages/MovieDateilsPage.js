import axios from "axios";
import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Cast from './Cast';
import Reviews from './Reviews';

// API 
const ApiKey = '249f222afb1002186f4d88b2b5418b55'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'


class MovieDetailsPage extends Component {
    state = {
        movie: null        
    }    
    
    async componentDidMount() {
        const movieId = this.props.match.params.movieId
        const response = await axios.get(`movie/${movieId}?api_key=${ApiKey}&language=en-US`)
        
        
        this.setState({movie: response.data})
    }

    render() {
        const { movie } = this.state;
        // console.log(movie)
        
        return (
            <>                
                {movie && (<><h2>{movie.title} ({movie.release_date})</h2>
                    <img src={`https://www.themoviedb.org/t/p/w500${movie.backdrop_path}`} alt='not found'></img>
                    <p>User score: {movie.vote_average * 10}%</p>
                    <b>Overview:</b>
                    <p>{movie.overview}</p>
                    <b>Genres:</b>
                    {movie.genres.map(genre => (<p key={genre.id}>{genre.name}</p>))}
                </>)}         
                <b>Aditional information:</b>
                <ul>
                    <li><NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink></li>
                    <li><NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink></li>
                </ul>                                    
                <Route path={`${this.props.match.path}/cast`} render={props => <Cast {...props} movieId={movie.id}/>}/>
                <Route path={`${this.props.match.path}/reviews`} render={props => <Reviews {...props} movieId={movie.id}/>}/>                
            </>
        )        
    }
}

export default MovieDetailsPage;

// {movie && <h2>{movie.title} ({movie.release_date})</h2>}
// {movie && <img src={`https://www.themoviedb.org/t/p/w500${movie.backdrop_path}`} alt='not found'></img>}
// {movie && <p>User score: {movie.vote_average * 10}%</p>}
// <b>Overview:</b>
// {movie && <p>{movie.overview}</p>}
// <b>Genres:</b>
// {movie && movie.genres.map(genre => (<p key={genre.id}>{genre.name}</p>))}