import React, { Component } from 'react';

export default class GifList extends Component {
    
    render() {
        return (
            <div>
                {this.props.gifs.map(gif => 
                    <ul>
                        <img src={gif.images.original.url} alt='gif' />
                    </ul>
                )}
            </div>
        )
    }
}