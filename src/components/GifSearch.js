import React, { Component } from 'react'

export default class GifSearch extends Component {
  state = {
    yourSearch: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.yourSearch)
  }
  // handleChange = (e) => {
  //   this.setState({
  //     yourSearch: e.target.value
  //   })
  // }

  render() {
    // debugger
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.yourSearch} onChange={ e => this.setState({yourSearch: e.target.value})} />
          {/* onChange could also be done by setting another method called handleChange then referenced by onChange={(e) => this.handleChange(e)} */}
          <button type="submit"> Search GIF's </button>
        </form>
      </div>
    )
  }
}