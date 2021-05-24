import { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Cast from './Cast';
import Reviews from './Reviews';
import api from '../services/Api';

class MovieDetailsPage extends Component {
    state = {
        movie: null        
    }    
    
    async componentDidMount() {
        const movieId = this.props.match.params.movieId
        const response = await api.fetchMovieData(movieId)        
        
        this.setState({movie: response.data})
    }

    handleBack = () => {
        const { location, history } = this.props;    
        
        // console.log('history', history)        

        history.push(location?.state?.from  || '/');
    };

    render() {
        const { movie } = this.state;        
        
        return (
            <>
                <button type='button' onClick={this.handleBack} className='NavLink'>Back</button>    
                {movie && (<div className='movieInfo'><div className='title-box'><h2>{movie.title} ({movie.release_date})</h2>
                    <img src={`https://www.themoviedb.org/t/p/w500${movie.backdrop_path}`} alt='not found'></img></div>
                    <div className='info-box'> <p><b>User score:</b> {movie.vote_average * 10}%</p>
                    <b>Overview:</b>
                    <p>{movie.overview}</p>
                    <b>Genres: </b>
                    {movie.genres.map(genre => (<p key={genre.id} className='genres-item'>{genre.name}</p>))}</div>
                    
                </div>)}         
                <b className='addInfo'>Aditional information:</b>
                <ul className='NavList'>
                    <li className='NavList--item'>
                        <NavLink 
                            to={{
                            pathname: `${this.props.match.url}/cast`,
                                state: {...this.props.location.state}
                            }}
                        className='NavLink' activeClassName='NavLink--active' >Cast</NavLink>
                    </li>
                    <li className='NavList--item'>
                        <NavLink
                            to={{
                            pathname: `${this.props.match.url}/reviews`,
                                state: {...this.props.location.state}
                            }}                            
                        className='NavLink' activeClassName='NavLink--active' >Reviews</NavLink>
                    </li>
                </ul>
                <Switch>
                <Route exact path={`${this.props.match.path}/cast`} render={props => <Cast {...props} movieId={movie.id}/>}/>
                <Route exact path={`${this.props.match.path}/reviews`} render={props => <Reviews {...props} movieId={movie.id}/>}/>                
                </Switch>
            </>
        )        
    }
}

export default MovieDetailsPage