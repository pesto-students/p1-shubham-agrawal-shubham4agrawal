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

    reverseNodes() {
        let current = this.head;
        let next = null;
        let prev = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
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
list.reverseNodes();

list.printNodes();
console.log(list);

