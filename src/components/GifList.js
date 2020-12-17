import React from 'react';

export default class GifList extends React.Component {

    genList(){
       return this.props.data.map(i => <li key={i}><img src={i} alt="gif"></img></li>)
    }
    render() {
        return (
            <ul>{this.genList()}</ul>
        )
    }
}