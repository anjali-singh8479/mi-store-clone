import React from 'react'
import "../style/productreview.css"
function Productreview(props) {
  return (
   <div className='productreview'>
    {props.review.map((item,index)=>{
        return(
            <div className='review'>
                <img src={item.image} alt={' ${index} review'}/>
                <h5>{item.review}</h5>
                <span>{item.name}</span>
                <b>{item.price}</b>
            </div>
        )
    })}
   </div>
  )
}

export default Productreview