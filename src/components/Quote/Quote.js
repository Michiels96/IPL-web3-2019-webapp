import React from 'react'

import './Quote.css'



function Quote(props) {
  return (
    <p>
      <q>{props.message}</q>
      <small><i>{props.author}</i></small>
    </p>
  )
}

export default Quote;
