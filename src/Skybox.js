import {useThree} from '@react-three/fiber'
import {
    CubeTextureLoader,
} from 'three'
function Skybox() {
    const { scene } = useThree()
    const loader = new CubeTextureLoader()
    const purpleCorona = loader.load([
        'corona_lf.png',
        'corona_rt.png',
        'corona_up.png',
        'corona_dn.png',
        'corona_ft.png',
        'corona_bk.png',
    ]);
    const redEclips = loader.load([
        'redeclipse_lf.png',
        'redeclipse_rt.png',
        'redeclipse_up.png',
        'redeclipse_dn.png',
        'redeclipse_ft.png',
        'redeclipse_bk.png',
    ]);
    
    const desertBright = loader.load([
        'posx.jpg',
        'negx.jpg',
        'posy.jpg',
        'negy.jpg',
        'posz.jpg',
        'negz.jpg',
    ]);

    scene.background = purpleCorona
    return (null)
}

export default Skybox