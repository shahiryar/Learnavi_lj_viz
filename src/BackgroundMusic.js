import React, { Component, useState } from "react"
import { FaVolumeUp, FaVolumeMute, FaRandom } from "react-icons/fa"
import './BackgroundMusic.css'

function playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
}

function pauseAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.pause()
}

const randomTrack = () => {
    const list =  ["Two_moons.mp3",
    "Brass Orchid - Bobby Richards.mp3",
    "Glacier - Patrick Patrikios.mp3",
    "Large Smile Mood - Nico Staf.mp3",
    "Lights - Patrick Patrikios.mp3",
    "Yah Yah - josh pan.mp3"
]
    return list[Math.floor(Math.random() * list.length)];
};

function BackgroundMusic() {

    const [playing, setPlaying] = useState(false)
    const [track, setTrack] = useState("Two_moons.mp3")
    return (<>  <div id="neon-btn"
        onClick={(event) => {
            if (playing) {
                pauseAudio();
                setPlaying(false);
            } else {
                playAudio();
                setPlaying(true);
            }
        }}
        style={{
            cursor: "pointer"
        }}
    >{playing ?
        <FaVolumeMute className={"btnM"} size={50} color={"white"} /> :
        <FaVolumeUp className={"btnP pulse"} size={"3.2rem"} color={"white"} />}
    </div>
        <audio onPause={(event) => { setPlaying(false) }} className="audio-element">
            <source src={track}></source>
        </audio>
        
    </>
    )
}

export default BackgroundMusic