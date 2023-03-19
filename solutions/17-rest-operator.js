// BEGIN
export const getMax = (massive) => {
    if (massive.length == 0) {
        return null;
    }

    let max = massive[0];
    for (let element of massive) {
        if (element >= max) {
            max = element;
        }
    }

    return max;
}
// END