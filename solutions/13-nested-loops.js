const _ = require("lodash"); 

// BEGIN
const getSameCount = (massive1, massive2) => {

    let peresechenie = _.intersection(massive1, massive2);
    let uniqElemenets = new Set(peresechenie);
    let uniqArray = Array.from(uniqElemenets);
    let countUniq = uniqArray.length;

    return countUniq;
}

export default getSameCount;
// END