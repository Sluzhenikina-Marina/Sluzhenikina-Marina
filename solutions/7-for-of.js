// BEGIN
const calculateAverage = (massive) => {
    if (massive.length == 0) {
        return null;
    }


    let suma = 0;

    for (let element of massive) {
        suma += element;
    }
    return suma / massive.length;
}


export default calculateAverage;
// END