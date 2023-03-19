// BEGIN (write your solution here)
export const getWeekends = (argument) => {
    switch (argument) {
        case 'long':
            return ['saturday', 'sunday'];
        case 'short':
            return ['sat', 'sun'];
        default:
            return ['saturday', 'sunday'];
    }
}
// END
