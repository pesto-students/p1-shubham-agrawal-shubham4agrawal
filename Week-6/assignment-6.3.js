const sort = (arr) => {
    let num0 = 0;
    let num1 = 0;
    let num2 = 0;
    for(i of arr) {
        switch(i) {
            case 0:
                num0++;
                break;

            case 1:
                num1++;
                break;
                    
            case 2:
                num2++;
                break;  
                
            default :
                return false;
        }
    }

    let j = 0;

    for(let i = 0; i < num0; i++) {
        arr[i] = 0;
        j++;
    }
    for(let i = 0; i < num1; i++) {
        arr[j] = 1;
        j++;
    }
    for(let i = 0; i < num2; i++) {
        arr[j] = 2;
        j++;
    }
    
    return arr;
}

console.log(sort([0,0,2,1,2,1,0,1,1,2]));