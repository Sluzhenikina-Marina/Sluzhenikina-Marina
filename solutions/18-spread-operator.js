// BEGIN
export const flatten = (massive) => {
    let flatMassive = [];
    for (let element of massive) {
        if (typeof(element) == 'object') {
            flatMassive.push(...element)
        } else {
            flatMassive.push(element)
        }
    }
    return flatMassive
}
// END