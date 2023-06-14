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