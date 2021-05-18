import {useThree} from '@react-three/fiber'
import {
    CubeTextureLoader,
} from 'three'
function Skybox() {
    const { scene } = useThree()
    const loader = new CubeTextureLoader()
    const texture = loader.load([
        'corona_lf.png',
        'corona_rt.png',
        'corona_up.png',
        'corona_dn.png',
        'corona_ft.png',
        'corona_bk.png',
    ]);
    scene.background = texture
    return (null)
}

export default Skybox