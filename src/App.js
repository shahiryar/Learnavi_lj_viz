import React, {useRef} from 'react'
import { Canvas} from '@react-three/fiber'
import BackgroundMusic from './BackgroundMusic'
import SliverSphere from './SilverSphere'
import CameraControls from './CameraControls'
import Skybox from './Skybox'
import Label from './Label'

import { useThree } from "react-three-fiber"
import * as THREE from 'three'
import LableSphere from './LableSphere'

const purple = "#722F5F"
const cyan = "#72D8C8"

const courses ={
    name:"",
    trendScore:0.1,
    
}
function createSpheres(){

}

export default function App() {

    return (<>
        <Canvas id="mainCanvas" style={{ backgroundColor: "black", cursor:"move" }}>
            <directionalLight args={[0xffffff, 1.0]}position={[20, 100, 10]}/>
            <ambientLight intensity={0.5} />
            <CameraControls />
            <LableSphere position={[-3, 0, 0]} size={0.4} label="Virtual Reality"/>
            <LableSphere position={[3, 0, 0]} size={0.5} label="Omer"/>
            <LableSphere position={[-1, -3, 0]} size={0.2} label="Java"/>
            <LableSphere position={[1, 3, 0]} size={0.6} label="Socket"/>
            <LableSphere position={[-3, 0, -3]} size={1} label="Networking"/>
            <LableSphere position={[-2, 1, 2]} size={0.5} label="AR"/>
            <LableSphere position={[1, -3, -3]} size={1.1} label="Machine Learning"/>
            <LableSphere position={[0, 3, -5]} size={0.3} label="React Native"/>            
            <Skybox />
        </Canvas>
        <div>
            <a href="https://learnavi.com/" style={{opacity:0.6 ,textDecoration: "none", position: "fixed", top: "1vw", left: "3vw", border: 20, zIndex: 1, display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                <img src="LearnaviLogo.svg" alt="Learnavi Logo" style={{ width: 42, height: 42, display: "inline", margin: "auto" }} />
                <h2 style={{ display: "inline", textAlign: "center", marginLeft: 15, color:"white", font:"caption", fontWeight:"bold", fontSize:"1.5rem"}}>Learnavi</h2>
            </a>
            <div id="prompt" style={{ visibility:"hidden", textAlign: "center", position: "fixed", top: "1vw", left: "25%", width: "50%", zIndex: 1, background: "rgba(149, 94, 239, 0.2)", borderRadius: 50, paddingInlineStart: 20, margin: "auto" }}>
                <p style={{ fontFamily: "Courier New", fontSize: 20, color: cyan }}>Prompt</p>
            </div>
            <div id="controls" style={{ textAlign: "center", position: "fixed", bottom:"4vw", right: "3vw  ", zIndex: 1, paddingInlineStart: 20, margin: "auto" }}>
                <BackgroundMusic />
            </div>
            <footer style={{width:"93vw", zIndex:1, position:"absolute", bottom:"0.5vw", left:"3vw", display:"flex", flexDirection:"row", alignItems:"start", justifyContent:"space-between", margin:"auto"}}>
                    <p style={{color:"white", opacity:0.5}}>Made with ♥ by Shahiryar @Learnavi</p>
                <div style={{alignSelf:"flex-end", marginTop:"1em", marginBottom:"1em"}}>
                    <a href="https://learnavi.com/legalnotice/privacypolicy" style={{marginLeft:"1.5rem", textDecoration:"none"}}><p style={{color:"white", display:"inline"}}>Help |</p></a>
                    <a href="https://learnavi.com/legalnotice/privacypolicy" style={{marginLeft:"1.5rem", textDecoration:"none"}}><p style={{color:"white", display:"inline"}}>Privacy Policy |</p></a>
                    <a href="https://learnavi.com/legalnotice/codeofconduct" style={{marginLeft:"1.5rem", textDecoration:"none"}}><p style={{color:"white", display:"inline"}}>Terms and Condition</p></a>
                </div>
            </footer>
        </div>
    </>
    )
}

//<p style={{ fontFamily: "Courier New", fontSize: 20, color:cyan }} >controls</p>