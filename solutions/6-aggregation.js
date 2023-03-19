// BEGIN
export const calculateSum = (massive) => {
    let suma = 0;

    for (let element of massive) {

        if (element % 3 == 0) {
            suma += element;
        }
    }
    
    return suma;
}
// END