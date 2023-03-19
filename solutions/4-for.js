// BEGIN
const addPrefix = (massive, prefix) => {
    let names = [];


    for (let element of massive) {

        let name = prefix + ' ' + element;

        names.push(name);
    }
    return names;
}


export default addPrefix;
// END