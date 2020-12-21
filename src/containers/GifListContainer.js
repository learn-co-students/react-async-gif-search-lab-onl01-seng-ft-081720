import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }
    
  

  fetchGifs = (yourQuery = "horses") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${yourQuery}&api_key=${process.env.REACT_APP_API_KEY}&rating=g&limit=3`)
      .then(resp => resp.json())
      .then(data => {
        debugger
          let gifArray = data.data.map(gif => gif)
        this.setState({ gifs: gifArray.map( gif => ({ url: gif.images.original.url }) ) })
      })
      debugger
     

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