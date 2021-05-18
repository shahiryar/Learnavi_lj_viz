import React, { useRef } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
extend({ OrbitControls })
function CameraControls() {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <orbitControls autoRotate={true} ref={controls} args={[camera, domElement]} />;
};

export default CameraControls