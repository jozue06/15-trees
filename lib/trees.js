'use strict';

//node construx
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// queue contrux and helper methods
class Queue {
  
  constructor() {
    this.length = 0;
  }

    
  enqueue(item) {
    this[this.length++] = item;
    return this.length;
  }
      
    
  dequeue() {
    this[this.length--];
    delete this[this.length];
    return this;
  }
    
}
//tree construx, methods
class Tree {

  constructor() {

    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;

    }
  }

}


module.exports = {
  Tree,
  Queue,
};