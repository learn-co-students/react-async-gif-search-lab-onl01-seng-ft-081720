import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state = {
        gifs: []
    }

    fetchGIFs = query => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(resp => resp.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url}) ) })
            })
    }

    render() {
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    componentDidMount() {
        this.fetchGIFs()
    }
}