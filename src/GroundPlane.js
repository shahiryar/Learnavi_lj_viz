import React from 'react'

function GroundPlane() {
    return (
        <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -100, 0]}>
            <planeBufferGeometry attach="geometry" args={[5000, 5000]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}
export default GroundPlane