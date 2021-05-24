import { Component } from "react";
import { Link } from "react-router-dom";
import api from '../services/Api';
import SearchForm from '../Components/SearchForm';

class MoviesPage extends Component {
    state = {
        query: '',
        movies: []
    }

    componentDidMount() {      
        const { search, pathname } = this.props.location;

        if (search && pathname) {
         this.setState({
         query: search,
        })}
    }

    componentDidUpdate(prevProps, prevState) {         
    if (prevState.query !== this.state.query)
    {this.handleSubmit()}
    }
    
    onSearchChange = query => {
        const { history } = this.props;

        this.setState({ query: query })
        
        history.push({
        search: `${query}`,
        });        
    }

    handleSubmit = () => {
        api.fetchQuery(this.state.query).then(response => this.setState({ movies: response.data.results }))
    }    

    render() {
        const { movies } = this.state        

        return (<>
            <SearchForm onSearch={this.onSearchChange}/>            
            <ul className='movieList'>
            {movies.length > 0 && (movies.map(movie => (
                <li key={movie.id} >
                    <Link className='movieList--item'
                    to={{
                        pathname: `${this.props.match.url}/${movie.id}`,
                        state: {
                            from: this.props.location,
                        }
                    }}>
                        <h4>{movie.title}</h4>
                    </Link>
                </li>
            )))}
            </ul>
            </>
        )
    }
}

export default MoviesPage