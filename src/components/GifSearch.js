import React, { Component } from 'react';

export default class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getResults(this.state.query)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                value={this.state.query} 
                onChange={e => this.setState({query: e.target.value})}
                ></input>
                <input type="submit"></input>
            </form>
            </div>
        )
    }
}