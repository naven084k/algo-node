var x = require('./Node.js');

let list1 = x.prepareLinkedList([1,2,3,4,5,6,7]);


function reverse(head) {

    if(head == null || head.next == null)
    return head;
    
        let p = null;
        let q = head;
        let r = q.next;
    
        while(q != null){
            q.next = p;
            p = q;
            q = r;
    
            if(r != null)
            r = r.next;
        }
    
        return p;
    
    }

    list1 = reverse(list1);
    x.printLinkedList(list1);