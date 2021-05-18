import React from 'react'
import {useFrame,  useThree } from '@react-three/fiber'
import {
    CubeCamera,
    WebGLCubeRenderTarget,
    RGBFormat,
    LinearMipmapLinearFilter,
} from 'three'
import Label from './Label';

function SliverSphere(props) {
    const { scene, gl } = useThree();
    const{position, size, label} = props
    // The cubeRenderTarget is used to generate a texture for the reflective sphere.
    // It must be updated on each frame in order to track camera movement and other changes.
    const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
        format: RGBFormat,
        generateMipmaps: true,
        minFilter: LinearMipmapLinearFilter,
    });
    const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
    cubeCamera.position.set(0, 100, 0);
    scene.add(cubeCamera);
    // Update the cubeCamera with current renderer and scene.
    useFrame(() => cubeCamera.update(gl, scene));

    
    return (
        <>
        <Label position={[position[0], position[1], position[2]+size]} text={label}/>
        <mesh visible position={position} rotation={[0, 0, 0]} castShadow>
            <sphereGeometry attach="geometry" args={[size, 32, 32]} />
            <meshBasicMaterial
                attach="material"
                envMap={cubeCamera.renderTarget.texture}
                color="white"
                roughness={0.1}
                metalness={1}
            />
        </mesh>
        </>
    );
}

export default SliverSphere
