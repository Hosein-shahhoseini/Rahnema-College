class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(value) {
      this.head = new Node(value, this.head);
    }
  
    insertLast(value) {
      const newNode = new Node(value);
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
  
    size() {
      let count = 0;
      let current = this.head;
      while (current) {
        count++;
        current = current.next;
      }
      return count;
    }
  
    at(index) {
      let counter = 0;
      let current = this.head;
      while (current) {
        if (counter === index) {
          return current;
        }
        counter++;
        current = current.next;
      }
      return null;
    }
  
    join(separator) {
      let result = '';
      let current = this.head;
      while (current) {
        result += current.value + separator;
        current = current.next;
      }
      return result.slice(0, -separator.length);
    }
  
    map(callback) {
      const newList = new LinkedList();
      let current = this.head;
      while (current) {
        newList.insertLast(callback(current.value));
        current = current.next;
      }
      return newList;
    }
  
    filter(callback) {
      const newList = new LinkedList();
      let current = this.head;
      while (current) {
        if (callback(current.value)) {
          newList.insertLast(current.value);
        }
        current = current.next;
      }
      return newList;
    }
  
    find(callback) {
      let current = this.head;
      while (current) {
        if (callback(current.value)) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }
  