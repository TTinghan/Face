function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function(l1, l2) {
  let pre = new ListNode(0);
  let cur = pre;
  let carry = 0;

  while(l1 !== null || l2 !== null) {
      let x = l1 !== null ? l1.val : 0;
      let y = l2 !== null ? l2.val : 0;
      let sum = x + y + carry;
      carry = Math.floor(sum / 10);

      cur.next = new ListNode(sum % 10);
      cur = cur.next;

      if (l1 !== null) {
          l1 = l1.next;
      }
      if(l2 !== null) {
          l2 = l2.next;
      }
  }
  if (carry > 0) {
      cur.next = new ListNode(carry);
  }

  return pre.next;
};
// 数组转换为链表
function createLinkedList(arr) {
  let pre = new ListNode(0);
  let cur = pre;

  for(let val of arr) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }
  return pre.next;
}

// 将两个升序链表合并为一个新的 升序 链表并返回 (小-》大)
var mergeTwoLists = function(list1, list2) {
    let pre = new ListNode(0);
    let current = pre;
 
     while (list1 !== null && list2 !== null) {
         if (list1.val < list2.val) {
             current.next = list1;
             list1 = list1.next;
         } else {
             current.next = list2;
             list2 = list2.next;
         }
         current = current.next;
     }
 
     if (list1 !== null) {
         current.next = list1;
     } 
     if (list2 !== null) {
        current.next = list2;
      }
 
     return pre.next;
 };
