var x = require('./Node.js');

let nthNode = process.argv[2];
let head = x.prepareLinkedList();
x.getSize(head);

if(nthNode > head)
   throw console.error('not valid input to enter');
   
x.printLinkedList(head);

