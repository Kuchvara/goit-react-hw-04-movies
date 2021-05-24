import { Component } from "react"

class SearchForm extends Component {
    state = {
        query: ''
    }

    handleSubmit = event => {
        event.preventDefault();    

        this.props.onSearch(this.state.query)
    }

    onQueryChange = event => {
        this.setState({query: event.currentTarget.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='queryForm'>
                <input
                    onChange={this.onQueryChange}
                    className='queryForm--input'
                />
                <button type='submit' className='queryForm--button'>Search</button>
            </form>
        )
    }
}

export default SearchForm;