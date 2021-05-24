import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {
  CubeCamera,
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipmapLinearFilter,
  Material,
} from 'three'

function populate3D() {
  const labelContainerElem = document.getElementById('labels')
  const canvas = document.getElementById("mainCanvas")
  if (canvas == null){
    console.log(`${canvas}`)
  }
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 1.1;
  const far = 20;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 7;

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();

  const scene = new THREE.Scene();
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const geometry = new THREE.SphereGeometry(0.5, 32, 32);

  function makeInstance(geometry, x, name) {
    //const { position, size, label } = props
    const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
        format: RGBFormat,
        generateMipmaps: true,
        minFilter: LinearMipmapLinearFilter,
    });
    const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
    cubeCamera.position.set(0, 100, 0);
    scene.add(cubeCamera);

    const material = new THREE.MeshBasicMaterial()
    material.envMap = cubeCamera.renderTarget.texture

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    sphere.position.x = x;
    console.log("elements to be added")
    const elem = document.createElement('div');
    elem.textContent = name;
    labelContainerElem.appendChild(elem);

    return {sphere, elem};
  }

  const spheres = [
    makeInstance(geometry,  0, 'Machine Learning'),
    makeInstance(geometry, -2, 'Blockchain Development'),
    makeInstance(geometry,  2, 'Web development'),
  ];

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  const tempV = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    spheres.forEach((sphereInfo, ndx) => {
      const {sphere, elem} = sphereInfo;

      // get the position of the center of the sphere
      sphere.updateWorldMatrix(true, false);
      sphere.getWorldPosition(tempV);

      // get the normalized screen coordinate of that position
      // x and y will be in the -1 to +1 range with x = -1 being
      // on the left and y = -1 being on the bottom
      tempV.project(camera);

      // ask the raycaster for all the objects that intersect
      // from the eye toward this object's position
      raycaster.setFromCamera(tempV, camera);
      const intersectedObjects = raycaster.intersectObjects(scene.children);
      // We're visible if the first intersection is this object.
      const show = intersectedObjects.length && sphere === intersectedObjects[0].object;

      if (!show || Math.abs(tempV.z) > 1) {
        // hide the label
        elem.style.display = 'none';
      } else {
        // unhide the label
        elem.style.display = '';

        // convert the normalized position to CSS coordinates
        const x = (tempV.x *  .5 + .5) * canvas.clientWidth;
        const y = (tempV.y * -.5 + .5) * canvas.clientHeight;

        // move the elem to that position
        elem.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
      }
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}




export default populate3D
