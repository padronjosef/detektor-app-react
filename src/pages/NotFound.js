import React from 'react'

import './styles/NotFound.css'
import nfimg from '../images/error.svg'

function NotFound() {
  return (
    <div className="Main-notfound">
      <figure>
        <img className="Notfound-img" src={nfimg} alt="404 img"/>
      </figure>
      <div>
        <h1> Why are you like that? </h1>
        <p> You already broke my webpage <strong> :( </strong> </p>
      </div>
    </div>
  )
}

export default NotFound