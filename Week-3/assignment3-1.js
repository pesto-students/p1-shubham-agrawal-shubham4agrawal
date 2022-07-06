const add = function(...args) {
    args.sort();
    let cacheKey = args.join("");
    if (cacheKey in cache) {
  	    console.log("getting from cache...");
  	    return cache[cacheKey];
    }
    else {
  	    console.log("computing value...");
  	    const value = args.reduce((previousVal, currentVal) => previousVal + currentVal);
        cache[cacheKey] = value;
        return value;
    }
}


let cache = [];
let addFunctionRef = add;
console.log(addFunctionRef(2,4,6,3,3,56,4,3,34,6,5,4));
console.log(addFunctionRef(1,2,3,4,5,6));
console.log(addFunctionRef(1,2,3,4,5,6));
console.log(addFunctionRef(2,4,6,3,3,56,4,3,34,6,5,4));
console.log(addFunctionRef(2,4,6,3,3,56,4,3,34,6,5,4));
console.log(addFunctionRef(2,4,6,3,3,56,4,3,34,6,5,4,33));