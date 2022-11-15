
import Carousel from "react-bootstrap/Carousel";
import "../style/banners.css"
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'

function Banners(props) {
  return (
    <Carousel fade >
        {props.end.map((item)=>{
            return(
            <Carousel.Item>
                <div className="banner" style={{backgroundImage:`Url(${item.image})`}}>
                    <p>{item.description}</p>
                    <p>{item.name}</p>
                    <span>source:{item.source}</span>
                    <br></br>
                    <a href="#">Read more</a>
                </div>
                
            </Carousel.Item>
            )
        })}

    </Carousel>
  )
}

export default Banners