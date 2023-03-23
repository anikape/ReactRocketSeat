import React from 'react'
import './cards.css'


const Cards = (props) => {
  return (
    <div className="containerCards">
      <strong >{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}

export default Cards
