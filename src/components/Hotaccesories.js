import React from "react";
import "../style/hotaccesories.css";
import Hotcard from "./Hotcard.js"
const Hotaccesories = ({music,musiccover,smartDevice,smartDeviceCover,home,homecover}) => {
  return (
    <div className="accesories">
      <div className="first-item">
        <img src={musiccover || smartDeviceCover||homecover} alt="cover" />
      </div>
      <div className="second-item">
        { music && music.map((item, index) => {
          return(
            <div className="Hotcard">
            <img src={item.image} alt={index} product />
            <p>{item.name}</p>
            <span>{item.price}</span>
          </div> 
           
          )
          })}
        {smartDevice && smartDevice.map((item, index) => {
          return (
             <Hotcard key={item.image} name={item.name} price={item.price}  image={item.image}index={index}/>
            // <div className="Hotcard">
            //   <img src={item.image} alt={index} product />
            //   <p>{item.name}</p>
            //   <span>{item.price}</span>
            // </div>
          );
        })}
        {home && home.map((item, index) => {
          return (
             <Hotcard key={item.image} name={item.name} price={item.price}  image={item.image}index={index}/>
            // <div className="Hotcard">
            //   <img src={item.image} alt={index} product />
            //   <p>{item.name}</p>
            //   <span>{item.price}</span>
            // </div>
          );
        })}
         {/* {props.lifestyle.map((item, index) => {
          return (
            //  <Hotcard key={item.image} name={item.name} price={item.price}  image={item.image}index={index}/>
            <div className="Hotcard">
              <img src={item.image} alt={index} product />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          );
        })} */}
         {/* {props.mobileAccesories.map((item, index) => {
          return (
            //  <Hotcard key={item.image} name={item.name} price={item.price}  image={item.image}index={index}/>
            <div className="Hotcard">
              <img src={item.image} alt={index} product />
              <p>{item.name}</p>
              <span>{item.price}</span>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Hotaccesories;
