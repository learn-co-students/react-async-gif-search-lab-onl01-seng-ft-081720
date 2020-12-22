import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifList: []
        }
    }

    fetchGIFS = (query = 'dolphins') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(resp => resp.json())
        .then((gifData) => { 
            this.setState({ gifList: gifData.data.map( gif => ({url: gif.images.original.url}) )})
        })
    }

    componentDidMount() {
        this.fetchGIFS()
    }
    render() {
        return (
            <div>
                <GifSearch fetchGIFS={this.fetchGIFS}/>
                <GifList gifList={this.state.gifList}/>
            </div>
        );
    }
}

export default GifListContainer;