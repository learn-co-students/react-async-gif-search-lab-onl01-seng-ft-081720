import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }

    getResults = (yourQuery = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${yourQuery}&api_key=${process.env.REACT_APP_API_KEY}&rating=g`)
            .then(resp => resp.json())
            .then(data => {
                let gifArray = data.data.map(gif => gif)
                this.setState({
                    gifs: gifArray.slice(0,3)
                })
        })
    }

    render() {
        return (
        <div>
            <GifSearch getResults={this.getResults}/>
            <GifList gifs={this.state.gifs}/>
        </div>
        )
    }

}