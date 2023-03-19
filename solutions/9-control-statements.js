// BEGIN
const getTotalAmount = (massive, valuta) => {
    let summa = 0;

    for (let element of massive) {
        let val = element.split(' ')[0]
        let num = Number(element.split(' ')[1])
        if (val == valuta) {
            summa += num;
        }
    }
    return summa;
}
export default getTotalAmount;
// END