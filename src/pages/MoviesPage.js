import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from '../services/Api';

class MoviesPage extends Component {
    state = {
        query: '',
        movies: []
    }

    componentDidMount() {
        // console.log('mount', this.props)
        const { search, pathname } = this.props.location;

        if (search && pathname) {
      this.setState({
        query: search,
      });
    }
    }

componentDidUpdate(prevProps, prevState) {   
        // console.log('update', this.props.location.search)
        if (prevState.query !== this.state.query) {
      this.handleSubmit();}
    }
    
    onSearchChange = event => {
        const { history } = this.props;               
        
        history.push({
        search: `${event.currentTarget.value}`,
        });

        this.setState({ query: event.currentTarget.value })
    }

    handleSubmit = event => {
        // event.preventDefault();    

        api.fetchQuery(this.state.query).then(response => this.setState({ movies: response.data.results }))
    }    

    render() {
        const { movies } = this.state        

        return (<>
            <form onSubmit={this.handleSubmit} className='queryForm'>
                <input
                    onChange={this.onSearchChange}
                    className='queryForm--input'
                />
                <button type='submit' className='queryForm--button'>Search</button>
            </form>
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

export default withRouter(MoviesPage);