import React from 'react'
import {useFrame} from '@react-three/fiber'

function BrickSphere() {
    const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
        'PavingStones092_1K_Color.jpg',
        'PavingStones092_1K_Displacement.jpg',
        'PavingStones092_1K_Normal.jpg',
        'PavingStones092_1K_Roughness.jpg',
        'PavingStones092_1K_AmbientOcclusion.jpg',
    ])

    const mesh = useRef()

    useFrame(() => {
        //mesh.current.rotation.x += 0.1
        //mesh.current.position.z= mesh.current.position.y+=0.01
    })
    return (
        <>
            <mesh
                ref={mesh}
                position={[0, 0, 0]}>
                {/* Width and height segments for displacementMap */}
                <sphereBufferGeometry args={[1, 100, 100]} />
                <meshStandardMaterial
                    displacementScale={0.2}
                    map={colorMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    aoMap={aoMap}
                />
            </mesh>
        </>
    );
}

export default BrickSphere