// BEGIN
const getSameParity = (massive) => {
    if (massive.length == 0) {
        return [];
    }
    let chetn = [];
    let nechetn = [];
    for (let element of massive) {
        if (element % 2 == 0) {
            chetn.push(element);
        } else {
            nechetn.push(element);
        }
    }
    if (massive[0] % 2 == 0) {
        return chetn;
    } else {
        return nechetn;
    }
}
export default getSameParity;
// END