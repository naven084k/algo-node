 class Node {

    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports.prepareLinkedList = function(arr) {
    let node,temp;

    for(let i = 0; i< arr.length; i++){
        if(!node){
            node = new Node(arr[i]);
            temp = node;
        } else {
            temp.next = new Node(arr[i]);
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

module.exports.getnthNode = function(head,n) {
    let temp;
    let cnt = 1;
    while(head != null && cnt <= n){
        cnt++;
        head = head.next;

        if(cnt == n){
            console.log('printing the output node'+head.value);
            temp = head;
        }
    }

   return temp;
}