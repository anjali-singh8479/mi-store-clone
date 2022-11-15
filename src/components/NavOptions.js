import React, { useEffect, useState } from 'react'
import NavCard from "./NavCard.js";
import "../style/navoptions.css"

function NavOptions({miphones,redmiphones,tv,laptops,lifestyle,home,radio,accesories}) {
   const[miphonesToggle,setmiphonesToggle]=useState(false)
   const[redmiphonesToggle,setredmiphonesToggle]=useState(false)
   const[tvToggle,settvToggle]=useState(false)
   const[laptopsToggle,setlaptopsToggle]=useState(false)
   const[lifestyleToggle,setlifestyleToggle]=useState(false)
   const[homeToggle,sethomeToggle]=useState(false)
   const[radioToggle,setradioToggle]=useState(false)
   const[accesoriesToggle,setaccesoriesToggle]=useState(false)
    useEffect(()=>{
    if(window.location.pathname==="/miphones"){
        return setmiphonesToggle(true)
    }
    if(window.location.pathname==="/redmiphones"){
        return setredmiphonesToggle(true)
    }
    if(window.location.pathname==="/tv"){
        return settvToggle(true)
    }
    if(window.location.pathname==="/laphrefps"){
        return setlaptopsToggle(true)
    }
    if(window.location.pathname==="/lifestyle"){
        return setlifestyleToggle(true)
    }
    if(window.location.pathname==="/home"){
        return sethomeToggle(true)
    }
    if(window.location.pathname==="/audio"){
        return setradioToggle(true)
    }
    if(window.location.pathname==="/accessories"){
        return setaccesoriesToggle(true)
    }
   },[])
  return (
    <div className='navoptions'>
        {miphonesToggle ? miphones.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
        {redmiphonesToggle ? redmiphones.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
        {tvToggle ? tv.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
        {laptopsToggle ? laptops.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
        {lifestyleToggle ? lifestyle.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
        {homeToggle ? home.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
         {radioToggle ?radio.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
         {accesoriesToggle ?accesories.map((item)=>(
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )):null}
    </div>
  )
}

export default NavOptions