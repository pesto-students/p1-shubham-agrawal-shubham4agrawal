const diffrenceExists = (arr, diffNum) => {
    for(let i = 0; i < arr.length -1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(Math.abs((arr[i] - arr[j])) === diffNum) {
                return 1;
            }
        }
    }
    return 0;
}

console.log(diffrenceExists( [5, 10, 3, 2, 50, 80] , 15));