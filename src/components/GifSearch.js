
import React, { Component } from 'react'

class GifSearch extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            searchValue: ''
        }
    }
    handleChangeText = (e) => {
        console.log(e.target.value)
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
       this.props.searchCallback(this.state.searchValue)
    } 
    
    render() {
        // console.log(this.props, "GIF SEARCH RENDER")
        // console.log(this.state.searchValue, "GIF SEARCH STATE")
        return (
            <form onSubmit={this.handleSubmit}>

            <input type="text" onChange={this.handleChangeText} value={this.state.searchValue}/>

            <input type="submit" value="Submit"/>

            </form>
        )
    }
}

export default GifSearch