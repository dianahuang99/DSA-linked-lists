/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newTail = new Node(val);

    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead; //why don't i need this
    } else {
      let currentHead = this.head;
      newHead.next = currentHead;
      this.head = newHead;
    }

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    let lastItem = this.tail;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      while (current.next.next) {
        current = current.next;
      }
      this.tail = current;
    }
    current.next = null;

    this.length -= 1;
    return lastItem.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head;
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    }
    this.head = firstNode.next;

    this.length -= 1;
    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let current = this.head;
    let count = 0;

    while (idx > count) {
      current = current.next;
      count += 1;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    let current = this.head;
    let count = 0;

    while (idx > count) {
      current = current.next;
      count += 1;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length + 1 || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let current = this.head;
      let count = 0;

      while (idx - 1 > count) {
        current = current.next;
        count += 1;
      }
      this.length += 1;
      let newNode = new Node(val);
      let prevVal = current.next;
      current.next = newNode;
      newNode.next = prevVal;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) {
      this.shift();
    } else if (idx === this.length - 1) {
      this.pop();
    } else {
      let current = this.head;
      let count = 0;

      while (idx - 1 > count) {
        //would this be idx-1 or idx? both work
        current = current.next;
        count += 1;
      }

      current.next = current.next.next;

      this.length -= 1;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let total = 0;

    if (!this.head) {
      return 0;
    }

    while (current) {
      total += current.val;
      current = current.next;
    }

    const avg = total / this.length;
    return avg;
  }
}

module.exports = LinkedList;
