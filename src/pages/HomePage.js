import { Component } from "react";
import { Link } from "react-router-dom";
import api from '../services/Api';

class HomePage extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const response = await api.fetchTrending()      
    
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;    

    return (<ul className='movieList'>     
      {movies.length > 0 && (movies.map(movie => (
        <li key={movie.id} className='movieList--item'>
          <Link to={{
            pathname: `/movies/${movie.id}`,
            state: {
              from: this.props.location,
            }
          }}>
          <h4>{movie.title}</h4>
          <img src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}></img>
          </Link>
        </li>
      )))}
      </ul>
    )
  }
}

export default HomePage