function createStack() 
{
    var items = [];
    return {
        push: function(val) {
            items.push(val);
            console.log(`push ${items}`);
        },
        pop : function(val) {
            items.pop(val);
            console.log(`pop ${items}`);
        }
    }
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
(stack.items);