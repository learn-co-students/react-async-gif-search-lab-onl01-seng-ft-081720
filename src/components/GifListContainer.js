import React from 'react';
import GiftList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends React.Component{
    state ={
        data:[]
    }

    callAPI=(input) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response =>response.json())
        .then(response =>{
            for(let i = 0; i < 3; i++) {
                this.setState({data:[...this.state.data,response.data[i].images.original.url]})
            }
        })
    }
    // componentDidMount() {
        
    // }

    submitHandler= (input) => {
        this.callAPI(input)
    }

    render() {
        return (
        <div>
            <div><GiftList data={this.state.data}/></div>
            <div><GifSearch submitHandler={this.submitHandler}/></div>
        </div>
        )
    }
    
}