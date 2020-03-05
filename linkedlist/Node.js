module.exports.Node = class Node {

    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports.getLinkedList = function() {
    let node = new Node(10);
    console.log(node);
}