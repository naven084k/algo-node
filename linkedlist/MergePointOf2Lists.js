var x = require('./Node.js');

let list1 = x.prepareLinkedList([1,2,3,4,5,6,7]);
var middle = x.getnthNode(list1,4);
let list2 = x.prepareLinkedList([9,8]);
x.getnthNode(list2, 2).next = middle;

x.printLinkedList(list2);

function findMergeNode(headA, headB) {

    let length1 = x.getSize(headA);
    let length2 = x.getSize(headB);

    let diff = length1 - length2;
    let temp;
    if(diff < 0){
        temp = headB;
    } else {
        temp = headA;
    }

    let y = Math.abs(diff);

    console.log('difference is '+y);;
    while(y > 0){
        y--;
        temp = temp.next;
    }

    if(diff < 0){
        headB = temp;
    } else {
        headA = temp;
    }

    while(headA != headB){
        headA = headA.next;
        headB = headB.next;
    }

    return headB;
}

console.log(findMergeNode(list1, list2).value);

