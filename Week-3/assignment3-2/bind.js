const element = {
    num: 30,
    getNum : function() {return this.num;}
};

let unbindRef = element.getNum;

let bindRef = unbindRef.bind(element);

console.log(bindRef());