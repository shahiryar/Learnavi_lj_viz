import React, { useRef, useState, useCallback } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import {
    CubeCamera,
    WebGLCubeRenderTarget,
    RGBFormat,
    LinearMipmapLinearFilter,
} from 'three'
import Label from './Label';
import { useHistory } from 'react-router-dom';

function SilverSphere(props) {
    const { scene, gl } = useThree();
    const { position, size, label } = props
    const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
        format: RGBFormat,
        generateMipmaps: true,
        minFilter: LinearMipmapLinearFilter,
    });
    const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
    cubeCamera.position.set(0, 100, 0);
    scene.add(cubeCamera);
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        //mesh.current.rotation.z +=(0.2*size)
        cubeCamera.update(gl, scene)});
    const history = useHistory()
    const clickCallback = ()=> history.push('courses')

    return (
        <>
            <Label position={[position[0], position[1], position[2] + size]} text={label} />
            <mesh ref={mesh}
                position={position}
                scale={hovered? 0.9: 1}
                onClick={(event) => {
                    setActive(!active);
                    window.location.assign('/courses')
                }}
                onPointerOver={(event) => {setHover(true);
                    }}
                onPointerOut={(event) => {setHover(false);
                    document.body.style.cursor = "default"}}
                >
                <sphereGeometry attach="geometry" args={[size, 20, 15]} />
                <meshBasicMaterial
                    attach="material"
                    envMap={cubeCamera.renderTarget.texture}
                    color="white"
                    metalness={0.1}
                />
            </mesh>
        </>
    );
}

export default SilverSphere
// setting default value to name prop
SilverSphere.defaultProps = {
    size: 1,
    label: "Label",
    position:[0,0,0],
}