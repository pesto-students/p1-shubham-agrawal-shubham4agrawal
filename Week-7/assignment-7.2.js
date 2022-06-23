class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    insertNode(data) {
        if(this.head === null) {
            this.head = new Node(data);
        }
        else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
    }

    printNodes() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    size() {
        let size = 1;
        let current = this.head;
        while(current.next) {
            size++;
            current = current.next;
        }
        return size;
    }

    rotateNodesAt(pos) {
        if(pos < this.size() && pos > 0) {
            let current = this.head;
        let count = 1;
        let prev = null;
        let next = null;
        while(count <= pos) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = null;
        let newHead = current;
        while(current.next) {
            current = current.next;
        }
        current.next = this.head;
        this.head = newHead;
        }
        else if(pos === this.size()) {
            console.log("linked list will remain same");
        } 
        else {
            console.log("position to rotate linked list is invalid");
        }
    }
}


let list = new LinkedList();

list.insertNode(1);
list.insertNode(2);
list.insertNode(3);
list.insertNode(4);
list.insertNode(5);
list.insertNode(6);
list.insertNode(7);
console.log(list.size());
list.rotateNodesAt(7)

list.printNodes();

