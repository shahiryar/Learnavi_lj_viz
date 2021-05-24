import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import {
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
  Vector3
} from 'three'

const labelContainerElem = document.getElementById('labels');

function LableSphere(props) {
  const { scene, gl, camera} = useThree();
  const { position, size, label} = props
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0);
  scene.add(cubeCamera);
  const elem = document.createElement('div')
  const cube = useRef()
  const tempV = new Vector3()
  useEffect(()=>{
    elem.textContent = label;
    labelContainerElem.appendChild(elem);
    console.log(`${elem} element added`)
  }, [])
  
  useFrame(() => {
    cubeCamera.update(gl, scene);
    const canvas = document.getElementById('mainCanvas')
    cube.current.updateWorldMatrix(true, false);
    cube.current.getWorldPosition(tempV);
    tempV.project(camera);
    const x = (tempV.x *  .5 + .5) * canvas.clientWidth;
    const y = (tempV.y * -.5 + .5) * canvas.clientHeight;

    //console.log("----->")

    //if X or Y is out of the width of the screen hide the elem
    if(x>= window.innerWidth-(window.innerWidth*0.02) || y>=window.innerHeight-(window.innerHeight*0.02)){
      elem.style.display = "none"
    }else{
      elem.style.display = "inline-block"
    }

    elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
    elem.needsUpdate = true

  });

  return(<>
    <mesh  ref={cube} visible position={position} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry   attach="geometry" args={[size, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture}
        color="white"
        roughness={0.1}
        metalness={1}
      />
    </mesh>
  </>);
}
LableSphere.defaultProps = {
  size: 1,
  label: "Label",
  position:[0,0,0],
}

export default LableSphere

