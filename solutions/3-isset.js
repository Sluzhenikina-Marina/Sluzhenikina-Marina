// BEGIN
export const get = (massive, indexMassiva, def = null) => {
    
    if (indexMassiva >= 0 && indexMassiva < massive.length) {
        return massive[indexMassiva];
    } 
    else {
        return def;
    }
}
// END