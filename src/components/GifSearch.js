import React from 'react';

export default class GifSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue:""
        }
    }

    handleInput= (e) =>{
        this.setState({searchValue: e.target.value});
        // console.log(this.state.searchValue)
    }
    render() {
        return (
            <div>
                <form onSubmit={e => {
                    // debugger
                    e.preventDefault()
                    this.props.submitHandler(e.target.search.value)
                    }
                }>
                    <p>Enter a search term:</p>
                    <input type="text" name="search" value={this.state.searchValue} onChange={e => this.handleInput(e)}></input>
                    <button type="submit">Find Gifs</button>
                </form>
            </div>
        )
    }
}