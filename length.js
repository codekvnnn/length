class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Adds a new node to the end of the list
    append(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    length() {
        let current = this.head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Example usage:
let list = new SLL();
list.append(1);
list.append(2);
list.append(3);
console.log(list.length());  // Outputs: 3
