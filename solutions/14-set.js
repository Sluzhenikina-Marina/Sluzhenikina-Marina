// BEGIN
const countUniqChars = (stroka) => {
    let massive = stroka.split('');
    let uniqElements = new Set(massive);
    let uniqMassive = Array.from(uniqElements);
    let count = uniqMassive.length;

    return count;
}

export default countUniqChars;
// END