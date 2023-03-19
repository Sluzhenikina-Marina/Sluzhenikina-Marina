// BEGIN
const bubbleSort = (massive) => { 
    for (let j = massive.length - 1; j > 0; j--) {

        for (let i = 0; i < j; i++) {

            if (massive[i] > massive[i + 1]) {
                let temp = massive[i];

                massive[i] = massive[i + 1];

                massive[i + 1] = temp;
            }
        }
    }

    return massive;
}


export default bubbleSort;
// END