var x = require('./Node.js');

let nthNode = process.argv[2];
let head = x.prepareLinkedList([1,2,3,4,5,6,7,8,9,10]);
let size = x.getSize(head);

if(nthNode > size)
   throw 'not valid input to enter';
 
x.printLinkedList(head);

function findNthNodeFromLast(nthNode){
    let first = head, second = head;
    let i = 1;
    while(second != null && i < nthNode){
        second = second.next;
        i++;
    }
        
    while(second !=null && second.next != null){
        first = first.next;
        second = second.next;
    }
    return first;
}

console.log(findNthNodeFromLast(nthNode));
