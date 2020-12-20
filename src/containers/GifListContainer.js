import React, { PureComponent } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends PureComponent {

  constructor(){
    super()
    this.state={ 
      gifs: [], 
      search: "weird"
    }
  } 

  componentDidMount(){
    debugger
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=ma&limit=3`)
      .then(resp => resp.json())
      .then(data => {
        data.data.forEach(gif => this.setState( prevState => ({ gifs: [...prevState.gifs, gif] })
        ))
      })
  }

  searchHandler = (searchTerm) => {
    this.setState(
      { search: searchTerm }, 
      this.componentDidMount
      )
    this.setState({
      gifs: []
    })
   
  }

  render() {
    return (
      <div>
        < GifSearch searchHandler={this.searchHandler.bind(this)} /><br/>
        < GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;