import React, { Component } from 'react'

export default class GifListContainer extends React.Component{

        state ={
            someArray: []
        }
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                someArray: images.original.url
            })
        })
}
