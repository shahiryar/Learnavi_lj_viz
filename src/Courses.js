import React, { useRef , useMemo, useCallback} from 'react'
import { Canvas } from '@react-three/fiber'
import CameraControls from './CameraControls'
import Skybox from './Skybox'
import createSpheres from './createSpheres'
import topicsPath from './topicsPath'
import getTopicPositions from './getTopicsPositions'
import * as THREE from 'three'

const courses = [{
    index: 0,
    label: "Introduction to AI",
    trendScore: 0.9
},
{
    index: 1,
    label: "Maths for ML",
    trendScore: 0.7
},
{
    index: 2,
    label: "Data Engineering",
    trendScore: 0.3
},
{
    index: 3,
    label: "ML Theory",
    trendScore: 1
},
{
    index: 4,
    label: "ANN",
    trendScore: 0.7
},
{
    index: 5,
    label: "CNN",
    trendScore: 0.7
},
{
    index: 6,
    label: "Applications of ML",
    trendScore: 0.9
},
]
const positions = getTopicPositions(courses.length)
function Path() {
    const verts = []
    positions.forEach((pt) => {
        verts.push(new THREE.Vector3(pt[0], pt[1], pt[2]))
    })
    const ref = useRef()
    const points = useMemo(() => verts, [])
    const onUpdate = useCallback(self => self.setFromPoints(points), [points])
    return (
        <>
            <line position={[0, 0, 0]} ref={ref}>
                <bufferGeometry attach="geometry" onUpdate={onUpdate} />
                <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} linecap={'round'} linejoin={'round'} />
            </line>
        </>
    )
}

export default function Courses() {
    return (<>
        <Canvas id="mainCanvas" style={{ backgroundColor: "black", cursor: "move" }}>
            <directionalLight args={[0xffffff, 1.0]} position={[20, 100, 10]} />
            <ambientLight intensity={0.5} />
            <CameraControls />
            {topicsPath(courses)}
            <Path />
            <Skybox />
        </Canvas>
    </>
    )
}
