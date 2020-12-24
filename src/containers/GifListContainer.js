
import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            gifs: []
        }
    }

    fetchSearchResults = searchTerm => {
        console.log("fetching search results", searchTerm)
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            // debugger
            this.setState({
                gifs: [
                    json.data[0].images.original.url,
                    json.data[1].images.original.url,
                    json.data[2].images.original.url
                ]
            
            })
            console.log("state", this.state)
        })

    }
   

    componentDidMount() {
        fetch(`http://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            // debugger
            this.setState({
                gifs: [
                    json.data[0].images.original.url,
                    json.data[1].images.original.url,
                    json.data[2].images.original.url
                ]
            
            })
            console.log("state", this.state)
        })

        // debugger
    }

    render() {
        return (
            <div>

            < GifSearch searchCallback={this.fetchSearchResults} />
            < GifList gifs={this.state.gifs} />
            </div>
            
            ) 
    }
}

export default GifListContainer