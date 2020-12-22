import React from 'react'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

    constructor(){
        super()
        this.key = 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g'
        this.state = {
            gifs: []
        }
    }

    fetchDemShits = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(response => response.json())
        .then(data => data)
    }

    componentDidMount(){
        this.setState({
          data: this.fetchDemShits()
        });
    }

    render(){
        return(
            <ul>
                {console.log(this.fetchDemShits())}
                <GifList gifs={this.state.gifs}/>
            </ul>
        )
    }

}