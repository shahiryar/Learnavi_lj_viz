import SilverSphere from './SilverSphere'
import getCoord from './getCoord'

function createSpheres(courses){
    return courses.map((crs)=>{
        console.log(getCoord())
        return(<SilverSphere position={getCoord()} size={crs.trendScore} label={crs.label}/>)
    })
}

export default createSpheres