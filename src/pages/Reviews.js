import axios from 'axios'
import { Component } from 'react'

// API 
const ApiKey = '249f222afb1002186f4d88b2b5418b55'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

class Reviews extends Component {
    state = {
        review: ''
    }

    async componentDidMount() {
        
        try {
            const response = await axios.get(`movie/${this.props.movieId}/reviews?api_key=${ApiKey}&language=en-US&page=1`)
            this.setState({ review: response.data.results[0].content })            
        } finally {}       
    }

    render() {
        const review = this.state.review
        return (
            <article>
                <h3>Review</h3>
                {review ? <p>{review}</p> : <p>We do not have review for this movie</p>}                
            </article>)
    }    
}

export default Reviews