function student(...args) {
    this.name = args[0];
    this.rollNo = args[1];
}

function secA(name, rollNo) {
    this.classDiv = "A";
    student.apply(this, [name, rollNo])

}

function secB(name, rollNo) {
    this.classDiv = "B";
    student.apply(this, [name, rollNo])

}

function print() {
    console.log(`Name : ${this.obj.name}, RollNo: ${this.obj.rollNo}, ClassDiv: ${this.obj.classDiv}`);
}


this.obj = new secA("Shubham", 4);
print.call();

this.obj = new secB("Ram", 42);
print.call();