import React from 'react'
import   "../componet/Card.css"
function Card(props) {
  return (
    <div className='main-contain'>
      <h4>{props.title}</h4>
      <img src={props.src} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod ad suscipit necessitatibus  quas ullam velit nisi quasi, et doloribus, laborum laudantium sequi.</p>
    </div>
  )
}

export default Card
