class Stack {

    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(data) {
        this.items[this.size] = data;
        this.size++;
    }

    pop() {
        let deletedItem = this.items.pop();
        this.size--;
        return deletedItem;
    }

}

const parenthesisChecker = (parenthesis) => {
    let parenthesisData = [];
    parenthesisData[')'] = '(';
    parenthesisData[']'] = '[';
    parenthesisData['}'] = '{';
   
    let stack = new Stack();
    for(let i = 0; i < parenthesis.length; i++) {
        if(parenthesis[i] === '(' || parenthesis[i] === '[' || parenthesis[i] === '{') {
            stack.push(parenthesis[i]);
        }
        else if (parenthesis[i] === ')' || parenthesis[i] === ']' || parenthesis[i] === '}') {
            let poppedEl = stack.pop();
            if(poppedEl !== parenthesisData[parenthesis[i]]) {
                return false;
            }
        }
    }
    
    if(stack.items.length === 0) {
        return true;
    }
    else {
        return false;
    }
}


// let parenthesisString = ['(',')','[','[','(',']',']',')'];
let parenthesisString = ['(',')','[','[','(',')',']',']'];


console.log(parenthesisChecker(parenthesisString));

