// main.js
// TODO 以 Module 的方式匯入，例如:
const Stack = require('./stack.js');

let stack = new Stack();

/*
stack.print();
stack.push(5);
stack.push(8);
stack.print();
*/

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？

// isEmpty test
stack.isEmpty(); // Stack is empty
stack.push(1);
console.log(stack.isEmpty()); // false
stack.pop();
stack.isEmpty(); // Stack is empty

// push test
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.print(); // 123456789

// size test
console.log(stack.size()); // 9
stack.pop();
console.log(stack.size()); // 8
stack.push(9);
console.log(stack.size()); // 9

// pop test
console.log(stack.pop()); // 9
stack.print(); // 12345678

// peek test
console.log(stack.peek()); // 8
stack.pop();
console.log(stack.peek()); // 7
stack.push(8);
console.log(stack.peek()); // 8

// clear test
stack.clear();
stack.print(); // stack is empty

// empty pop test
stack.pop(); // stack is empty
stack.pop(); // stack is empty
stack.push(1);
stack.print(); // 1
stack.pop();
stack.pop(); // Stack is empty

