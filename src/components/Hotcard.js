import React from 'react'

function Hotcard({image,index,name,price}) {
  return (
    <div className='Hotcard'>
        <img src={image} alt={"${index} product"}/>
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default Hotcard