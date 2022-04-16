function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment,log];
}

const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?



/*

output will be : Count is 0
because the count variable is decalred as let and let is scope variable. 
When the increament() is invoke variable count is incremented but in its own block scope. 
and the message variable will get the value of count from line no. 2 as they are in the same block scope

*/