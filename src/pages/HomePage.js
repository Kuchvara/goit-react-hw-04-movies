import axios from "axios";
import { Component } from "react";

// API 
const ApiKey = '249f222afb1002186f4d88b2b5418b55'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const TrendMovieUrl = `trending/movie/day?api_key=${ApiKey}`

class HomePage extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    const response = await axios.get(
      TrendMovieUrl,
    )      
    
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    console.log(movies)

    return (<>      
      <h1>homaPage</h1>
      {movies.length > 0 && (movies.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      )))}
      </>
    )
  }
}

export default HomePage;