import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(props) {
        super();
        this.state = {
            query: ""
        }
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.query)
    }
    
    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
              <input type="submit" />
            </form>
          </div>
        )
    }
}

export default GifSearch;
