
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

const queueImpl = (inputArr) => {
    const stackObj1 = new Stack();
    const stackObj2 = new Stack();
    let poppedNum;
    let resultArr = [];
    for(let i = 0; i < inputArr.length; i++) {
        if(inputArr[i] === 1) {
            if(inputArr[i+1] === undefined) {
                return resultArr;
            }
            stackObj1.push(inputArr[++i]);
        }
        else if(inputArr[i] === 2) {
            if(stackObj2.size > 0) {
                poppedNum = stackObj2.pop();
                resultArr.push(poppedNum);
            }
            else if(stackObj1.size > 0) {
                let transferNum;
                while(stackObj1.size > 0) {
                    transferNum = stackObj1.pop();
                    stackObj2.push(transferNum);
                }
                poppedNum = stackObj2.pop();
                resultArr.push(poppedNum);
            }
            else {
                resultArr.push(-1);
            } 
        }
    }
    return resultArr;
}

console.log(queueImpl([1, 2, 1, 3, 2, 1, 4, 2]));