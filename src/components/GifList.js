import React, { Component } from 'react';

function GifList(props) {
        return (
            <ul>
                {props.gifList.map(gif => <li key={gif.url}><img src={gif.url}/></li>)}
            </ul>
        );
}

export default GifList;