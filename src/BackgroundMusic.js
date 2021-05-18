import React, { Component, useState } from "react"
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"

function PlayAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
}

function pauseAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.pause()
}

function BackgroundMusic() {
    const [playing, setPlaying] = useState(false)
    return (
        <div>
            <button onClick={(event) => {
                if (playing) {
                    pauseAudio();
                    setPlaying(false);
                }else{
                    PlayAudio();
                    setPlaying(true);
                }
            }} style={{
                display: "inline", backgroundImage: "none", cursor: "pointer", textAlign: "center", textDecoration: "none", borderStyle: "none",
                backgroundColor: "rgba(255,255,255, 0.1)", borderRadius: "1rem", boxShadow: "0 1.5rem 2.5rem 0 rgba(4,12,33,0)", padding: 10
            }}>
                <div id="volumeButton"><FaVolumeUp size={25} color={"white"} id="playing"/></div>
                
            </button>
            <audio className="audio-element">
                <source src="Two_moons.mp3"></source>
            </audio>
        </div>
    )
}

export default BackgroundMusic