const getSpiralMatrix = (matrixArray) => {
    let top = 0;
    let left = 0;
    let bottom = matrixArray.length - 1;
    let right = matrixArray[0].length -1;
    let totalElements = matrixArray.length * matrixArray[0].length;
    let count = 0;
    let result = [];

    if(bottom === 0 || right === 0) {
        return [];
    }

    while(count < totalElements) {

        let direction = 0;
        if(direction === 0) {
            for(let i = left; i <= right; i++) {
                result.push(matrixArray[top][i]);
                count++;
            }
            top++
            direction++;
        }

        if(direction === 1) {
            for(let i = top; i <= bottom; i++) {
                result.push(matrixArray[i][right]);
                count++;
            }
            right--;
            direction++;
        }

        if(direction === 2) {
            for(let i = right; i >= left; i--) {
                result.push(matrixArray[bottom][i]);
                count++;
            }
            bottom--;
            direction++;
        }

        // console.log(`top => ${top}`);
        // console.log(`bottom => ${bottom}`);
        // console.log(`left => ${left}`);
        // console.log(`right => ${right}`);
        // console.log(`result => ${result}`);

        // return

        if(direction === 3) {
            for(let i = bottom; i >= top; i--) {
                result.push(matrixArray[i][left]);
                count++;
            }
            left++;
        }

    }

    return result;

}


let arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
console.log(getSpiralMatrix(arr));