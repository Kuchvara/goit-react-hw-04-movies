import { Component } from 'react';
// import { withRouter } from 'react-router';
import api from '../services/Api.js';

class Cast extends Component {
    state = {
        actors: []
    }

    async componentDidMount() {        
        const response = await api.fetchCast(this.props.movieId)
        
        this.setState({ actors: response.data.cast })        
    }

    render() {
        const actors = this.state.actors
        return (
            <article>                
                <ul className='castList'>{actors.map(actor => (
                    <li key={actor.id} className='castList--item'>
                        <p><b>Name: </b>{actor.name}</p>
                        {actor.profile_path ?
                            <img src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`} alt={actor.name}></img>
                            : <img src='https://movies-mitya.netlify.app/static/media/placeholder.74f5b4f5.png' alt='Not found'></img>                            
                        }                        
                        <p><b>Character: </b>{actor.character}</p>
                </li> ))}</ul>
        </article>)
    }    
}

export default Cast