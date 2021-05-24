import React, {useRef} from 'react'
import { Canvas} from '@react-three/fiber'
import CameraControls from './CameraControls'
import Skybox from './Skybox'
import createSpheres from './createSpheres'
import LableSphere from './LableSphere'

const topics =[{
    index: 0,
    label:"Machine Learning",
    trendScore:0.9
}, 
{
    index: 1,
    label:"Virtual Reality",
    trendScore:0.7
},
{
    index: 2,
    label:"Java",
    trendScore:0.3
},
{
    index: 3,
    label:"React Native",
    trendScore:1
},
{
    index: 4,
    label:"Socket Programming",
    trendScore:0.7
},
{
    index: 5,
    label:"Augmented Reality",
    trendScore:0.7
},
{
    index: 6,
    label:"Blockchain",
    trendScore:0.9
},
{
    index: 7,
    label:"Mobile Devlopment",
    trendScore:0.4
},
{
    index: 8,
    label:"Software Development",
    trendScore:0.3
}
]

export default function App() {

    return (
        <Canvas id="mainCanvas" style={{ backgroundColor: "black", cursor:"move" }}>
            <directionalLight args={[0xffffff, 1.0]}position={[20, 100, 10]}/>
            <ambientLight intensity={0.5} />
            <CameraControls />
            {createSpheres(topics)}
            <Skybox />
        </Canvas>
    )
}

//<p style={{ fontFamily: "Courier New", fontSize: 20, color:cyan }} >controls</p>