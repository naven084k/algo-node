 class Node {

    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports.prepareLinkedList = function() {
    let node,temp;

    for(let i = 0; i<10; i++){
        if(!node){
            node = new Node(i);
            temp = node;
        } else {
            temp.next = new Node(i);
            temp = temp.next;
        }
    }
    return node;
    
}

module.exports.printLinkedList = function(head) {
    let arr = [];
    while(head != null){
        arr.push(head.value+' ');
        head = head.next;
    }

    console.log(...arr)
}

module.exports.getSize = function(head) {
    let cnt = 0;
    while(head != null){
        cnt++;
        head = head.next;
    }

   return cnt;
}