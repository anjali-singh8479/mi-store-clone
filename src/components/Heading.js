import React from 'react'
import "../style/heading.css"
function Heading(props) {
  return (
    <div  className='heading'>
        <div></div>
        <p>{props.head}</p>
        <div></div>
    </div>
  )
}

export default Heading