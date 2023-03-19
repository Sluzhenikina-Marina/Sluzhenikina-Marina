// BEGIN
const makeCensored = (stroka, censure) => {
    let result = [];

    for (let element of stroka.split(' ')) {
        if (censure.indexOf(element) != -1) {
            result.push('$#%!');
        } else {
            result.push(element);
        }

    }
    result = result.join(' ');
    return result
}

export default makeCensored;
// END