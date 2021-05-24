import CourseSphere from './CourseSphere'
import getCoord from './getCoord'
import getTopicPositions from './getTopicsPositions';
import * as THREE from 'three'
import React from 'react'

function topicsPath(courses) {
    let count = -1;
    const positions = getTopicPositions(courses.length)

    return <>
        {
            courses.map((crs) => {
                console.log(getCoord())
                count++
                return (
                    <CourseSphere position={positions[count]} size={crs.trendScore} label={crs.label} />)
            })}
    </>
}

export default topicsPath