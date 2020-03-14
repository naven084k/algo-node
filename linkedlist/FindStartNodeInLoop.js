var x = require('./Node.js');

let list1 = x.prepareLinkedList([1,2,3,4,5,6,7]);
let list2 = x.prepareLinkedList([8,9,10]);

let lastNodeList1 = x.getnthNode(list1, 7);
let lastNodeList2 = x.getnthNode(list2, 3);

lastNodeList1.next = list2;
lastNodeList2.next = lastNodeList1;


function findCircuilarNodeStartPoint(){
    
    let tortoise = list1;
    let hare = list1;

    while(hare != null && hare.next != null){
        tortoise = tortoise.next;
        hare = hare.next.next;

        if(tortoise == hare){
            console.log('found loop');
            break;
        }
    }

    console.log('===== investigating for first loop node ====');

    tortoise = list1;

    while(tortoise != hare){
        tortoise = tortoise.next;
        hare = hare.next;
    }

    console.log(tortoise.value+' is the statring node of the loop');
}



findCircuilarNodeStartPoint();
