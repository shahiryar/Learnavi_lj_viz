import React from 'react'
import {useFrame,  useThree } from '@react-three/fiber'
import {
    CubeCamera,
    WebGLCubeRenderTarget,
    RGBFormat,
    LinearMipmapLinearFilter,
} from 'three'
import * as THREE from 'three'

const labelContainerElem = document.getElementById('labels');

function LableSphere( color, x, name) {
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const {scene} = useThree()
    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    const elem = document.createElement('div');
    elem.textContent = name;
    labelContainerElem.appendChild(elem);

    return {cube, elem};
  }

export default LableSphere
