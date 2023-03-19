const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN
export const getTheNearestLocation = (locations, point) => {
    if (locations.length == 0) {
        return null;
    }

    let distance = 9999999;
    let resultCoordinate;
    let resultLocation = '';

    for (let element of locations) {
          let [name, coordinate] = element;
          
          let dist = getDistance(coordinate, point)
          if (dist <= distance) {
                distance = dist;
                resultCoordinate = coordinate;
                resultLocation = name;
          } 
    }
    return [resultLocation, resultCoordinate]
}
// END
