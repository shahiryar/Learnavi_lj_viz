import logo from './logo.svg';
import './App.css';
import React from "react";
import * as THREE from "three";
import { Vector3 } from 'three';

class App extends React.Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    //var geometry = new THREE.BoxGeometry(1, 1, 1);
    //var material = new THREE.MeshStandardMaterial({ color: 0x7e31eb });
    //create a red line
    const material = new THREE.LineBasicMaterial({ color: 0xff00ff })

    //defining the geometry of the line
    const points = []
    points.push(new Vector3(0.2, 0.2, 0.2))
    points.push(new Vector3(0, 0, 0))
    points.push(new Vector3(-0.2  , -0.2, -0.2))

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line)
    

    const desGeometry = new THREE.TextGeometry( 'Hello three.js!', {
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelOffset: 0,
      bevelSegments: 5
    } );



    //var cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);
    const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(light);
    camera.position.z = 2;
    var animate = function () {
      requestAnimationFrame(animate);
      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;
      //cube.rotation.z += 0.01;
      line.rotation.x +=0.01;
      //line.rotation.z+= 0.01;



      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}


export default App;

/**
 * import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
class App extends React.Component {
  render() {
    return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
      </Canvas>
    )
  }
}

export default App;
 *
 *
 * * */



