import { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

// API 
const ApiKey = '249f222afb1002186f4d88b2b5418b55'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// search/company?api_key=${ApiKey}&query=asdf&page=1


class MoviesPage extends Component {
    state = {
        query: '',
        movies: []
    }

    onSearchChange = event => {
        this.setState({ query: event.currentTarget.value})
    }

    handleSubmit = event => {
        event.preventDefault();        

        axios.get(`search/company?api_key=${ApiKey}&query=${this.state.query}&page=1`)
            .then(response => this.setState({ movies: response.data.results }))
    }    

    render() {
        const { movies } = this.state
        // console.log(movies)
        console.log(this.props.match.url)

        return (<>
            <form onSubmit={this.handleSubmit}>
                <input
                onChange={this.onSearchChange}
                />
                <button type='submit'>Search</button>
            </form>
            {movies.length > 0 && (movies.map(movie => (
                <li key={movie.id}> <Link to={`${this.props.match.url}/${movie.id}`}>{movie.name}</Link> </li>
            ))) }
            </>
        )
    }
}

export default MoviesPage;