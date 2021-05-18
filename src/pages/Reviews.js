import { Component } from 'react'
import api from '../services/Api.js';

class Reviews extends Component {
    state = {
        reviews: []
    }

    async componentDidMount() {
        
        try {
            const response = await api.fetchReviews(this.props.movieId)                
            this.setState({ reviews: response.data.results })            
        } finally {}       
    }

    render() {
        const reviews = this.state.reviews        

        return (
            <article>                
                {reviews.length > 0 ? reviews.map(review => (<p key={review.id}>{review.content}</p>))
                    : <p>We do not have review for this movie</p>}
            </article>
        )
    }    
}

export default Reviews