import axios from 'axios';
import { Component } from 'react';

// API 
const ApiKey = '249f222afb1002186f4d88b2b5418b55'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

class Cast extends Component {
    state = {
        actors: []
    }

    async componentDidMount() {
   
        const response = await axios.get(`/movie/${this.props.movieId}/credits?api_key=${ApiKey}&language=en-US`)        
        
        this.setState({ actors: response.data.cast })
        console.log(this.state.actors)
    }

    render() {
        const casts = this.state.actors
        return (
            <article>
                <h3>Cast</h3>
                <ul>{casts.map(cast => (
                    <li key={cast.id}>
                        <p>Name: {cast.name}</p>
                        <img src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={cast.name}></img>
                        <p>Character: {cast.character}</p>
                </li> ))}</ul>
        </article>)
    }    
}

export default Cast


//     const Cast = (props) => {
//     const actors = axios.get(`/movie/${props.movieId}/credits?api_key=${ApiKey}&language=en-US`)
//     console.log('actors:', actors.data)
//     console.log('Cast')
//     console.log(props.movieId)
//     return (<h1>Cast</h1>)
// }