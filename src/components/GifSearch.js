import React, { Component } from 'react';

class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }
        handleSubmit = (e) => {
            e.preventDefault()
            this.props.fetchGIFS(this.state.query)
          }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default GifSearch;