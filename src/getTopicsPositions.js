//takes a number (the number of topics) and returns an array of 3D coords arranged linearly
export default function getTopicPositions(num){
    const positions = [[0, 0, 4]]
    for(let i=0; i<num-1; i++){
        if(i%2==0){
            positions.push([3, positions[i][1]+0.5, positions[i][2]-1])
        }else{
            positions.push([-3, positions[i][1]+0.5, positions[i][2]-1])
        }
    }
    console.log(positions)
    return positions
}