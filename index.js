// Code your solution in this file!
const distanceFromHqInBlocks = distance => {return Math.abs(42-distance)};

const distanceFromHqInFeet = distance => {return Math.abs(42-distance)*264};

const distanceTravelledInFeet = (x, y) => {return Math.abs(x - y)* 264}

const calculatesFarePrice = (x, y) => {
    const distance = Math.abs(x - y)* 264
    switch(true){
        case distance <= 400:
            return 0;
        case distance <= 2000:
            return (distance - 400)*.02;
        case distance <= 2500:
            return 25;
        default:
            return 'cannot travel that far'
    }
}