
const getNextNumInFibSeries = (prev, curr) => {
    return prev + curr;
}

var length = 10;


const getFibSeries = (length) => ({
    [Symbol.iterator]() {
        let prev = curr = i = 0;
        return {
            next() {
                if(i++ < length) {
                    let sum = getNextNumInFibSeries(prev, curr);
                    [prev, curr] = [curr, sum || 1];
                    return {value : prev, done : false};
                }
                else {
                    return {done : true};
                }
            }
        }
    }
});

console.log([...getFibSeries(6)]);