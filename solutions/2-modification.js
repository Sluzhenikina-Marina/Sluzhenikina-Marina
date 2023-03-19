// BEGIN
export const swap = (massive) => {
    if (massive.length == 0) {
        return massive;
    } else if (massive.length == 1) {
        return massive;
    }
    let a = massive[0];
    massive[0] = massive[massive.length - 1];
    massive[massive.length - 1] = a;
    return massive;
};
// END