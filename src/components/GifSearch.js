import React, { Component } from 'react';

class GifSearch extends Component {
constructor(){
  super()
  this.state={ searchTerms: "" }
}

handleChange = (e) => {
  this.setState({
    searchTerms: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.props.searchHandler(this.state.searchTerms)
}

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <input className='search' 
            value={this.state.searchTerms} 
            onChange={(e) => this.handleChange(e)}
          />
          <button type="submit"> Find GIFs </button>
        </div>
      </form>
    );
  }
}

export default GifSearch;