// BEGIN
const buildDefinitionList = (definitions) => {
    if (definitions.length == 0 || definitions[0].length == 0) {
        return '';
    }


    let stroka = '';
    for (let element of definitions) {
        stroka += `<dt>${element[0]}</dt><dd>${element[1]}</dd>`
    }
    stroka = '<dl>' + stroka + '</dl>'
 
    return stroka;
}

export default buildDefinitionList;
// END