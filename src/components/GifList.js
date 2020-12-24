
import React from 'react'

function GifList(props){
    console.log(props)
  const colors = {
    black: 'GifList-inverse',
    white: 'GifList-default'
  }
  
  return (
      <ul>
          <li>
              <img src={props.gifs[0]} style={{width: 300}}></img></li>
          <li>
              <img src={props.gifs[1]} style={{width: 300}}></img></li>
          <li>
              <img src={props.gifs[2]} style={{width: 300}}></img></li>
      </ul>
  )
}

export default GifList