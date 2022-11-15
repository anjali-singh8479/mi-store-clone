import React from 'react'

import "../style/offers.css"
const Offers= (props)=> {
  return (
 <div className='offer-section'>
    {props.offer.map((item,index)=>(
        // <Offer key={item.image} index={index} src={item.image} link={item.url}/>
      <a href={item.url}><img src={item.image} alt="offer"/> {index+1} offer</a>
       
    ))}
 </div>
  )
}

export default Offers