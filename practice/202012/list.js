// 链表系列

// 单向链表的反转  1 → 2 → 3 → Ø，把它改成 Ø ← 1 ← 2 ← 3
// 输入：1->2->3->NULL    
// 输出：3->2->1->NULL
function reverseList(head){
    let pre = null; // pre指向null
    let cur = head; // cur指向head(1)链表
    while(cur !== null){
        let nextTemp = cur.next;// nextTemp指向cur的下一个节点
        cur.next = pre;// 指向null
        pre = cur;
        cur = nextTemp;
    }
    return pre;
}
 
 /**
  * 删除链表某节点
  * @param {*} head 
  * @param {*} val 
  */
 function deletNode(head, val){
     if(head.val == val){
         return head.next;
     }
     head.next = deletNode(head.next, val);
     return head;
 }
 
 /**链表合并
  * 时间复杂度：O(N)O(N)，其中N为两个链表节点总数
    空间复杂度：O(1)O(1)
  * @param {*} l1 
  * @param {*} l2 
  */
 var mergeTwoLists = function(l1, l2) {
     if (l1 === null) return l2;
     if (l2 === null) return l1;
     if (l1.val < l2.val) {
       l1.next = mergeTwoLists(l1.next, l2);
       return l1;
     } else {
       l2.next = mergeTwoLists(l1, l2.next);
       return l2;
     }
 };
 
// 判断链表是否有环
function hasCircle(head){
    let map = new Map();
    while(head) {
        // 判断map中以这个结点为键名的值是否为 true
        if(map.get(head) === true){
            // 说明这个结点重复出现了两次，即这个链表有环
            return true;
        }else {
            // 遍历链表的过程中把整个结点当作键名放入到 map 中，并把它标记为 true 代表这个结点已经出现过
            map.set(head, true)
        }
        head = head.next;// 链表中每个结点
    }
    return false;
}

// 普通链表转为双向链表
function doubleLinkedList(head){
    let pre = null;
    let cur = head;
    while(cur) {
        cur.pre = pre;
        pre = cur;
        cur = cur.next;
    }
    return pre;
}