import React, { Component, useState, useRef } from "react"
import { FaInfo, FaInfoCircle } from "react-icons/fa"
import './Info.css'

function Info() {
    const [selected, setSelected] = useState(false)
    const infoRef = useRef()
    return (<>  <div id="neon-btn"
     style={{cursor: "pointer"}}
     onClick={
         (event)=>{
             if(selected){
                 setSelected(false)
                 infoRef.current.style.display = "none"
             }else{
                setSelected(true)
                infoRef.current.style.display = "inline"
             }
         }
     }
    >
        <FaInfoCircle className={!selected?"btnInfo":"btnInfo selected"} size={"3.2rem"} color={selected?"grey":"white"} />
    </div>
    <div style={{display: "none"}}className={"infoBox"} ref={infoRef}><p >👉 Pinch 🤏 or Scroll 🖱️ to Zoom in 🔎<br/><br/>
    👉 Click hold and move around the space 🌌<br/><br/>
     👉 Click 🖱️ on a Sphere 🔮 to explore 🧭 that topic/course<br/><br/>
     👉 Press the button 🔊 down here 👇 to enjoy music 🎵 while you explore! 💓
     </p></div>
    </>
    )
}

export default Info