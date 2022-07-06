class Stack {

    constructor() {
        this.items = [];
        this.size = 0;
        this.top = null;
    }

    push(data) {
        this.items[this.size] = data;
        this.size++;
        this.top = data;
    }

    pop() {
        if(this.size > 0) {
            let deletedItem = this.items.pop();
            this.size--;
            if(this.size === 0) {
                this.top = null;
            }
            else {
                this.top = this.items[this.size - 1];
            }
            return deletedItem;
        }
        else {
            return null;
        }
    }

}


const nextGreaterElement = (inputArr) => {
    const stackObj = new Stack;
    let resultArr = [];
    const arrLength = inputArr.length;
    if(arrLength === 0) {
        return [];
    }
    else {
        stackObj.push(0); //pushed the index 0
        let poppedIndex = undefined;
        let count = 0;
        let i = 1;
        for(i; i < arrLength; i++) {
            count = stackObj.size;
            while(count > 0) {
                if(inputArr[i] > inputArr[stackObj.top]) {
                    poppedIndex = stackObj.pop();
                    resultArr[poppedIndex] = inputArr[i];
                }
                count--;
            }
            stackObj.push(i);
        }
        resultArr[i-1] = -1;
        return resultArr;
    }
}

console.log(nextGreaterElement([1,6,3,2,5,7]));