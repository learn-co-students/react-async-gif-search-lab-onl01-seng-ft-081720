import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  
    state = {
      gifs: []
    }
  

  fetchGifs = (yourQuery = "dolphins") => {
    // fetch(`https://api.giphy.com/v1/gifs/search?q=${yourQuery}&api_key=${process.env.API_KEY}&rating=g&limit=3`)
    fetch(`https://api.giphy.com/v1/gifs/search?q=${yourQuery}&api_key=IeoPObB9S1QgtnA2NeT0aDcHkA2NOh2T&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
     

  }
  
  componentDidMount() {
    this.fetchGifs()
  }

  render() {
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}