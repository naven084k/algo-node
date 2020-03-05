var x = require('./Node.js');

let nthNode = process.argv[2];
let head = x.prepareLinkedList();
let size = x.getSize(head);

if(nthNode > size)
   throw 'not valid input to enter';
   
x.printLinkedList(head);

