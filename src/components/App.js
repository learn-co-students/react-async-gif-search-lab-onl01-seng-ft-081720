import React from 'react'
import { render } from 'react-dom'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

const App = () => {

  // render()
    return (
      <div>
          <NavBar color='black' title="Giphy Search" />
          <GifListContainer />
      </div>
    )
  

}

export default App


