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

//  大数相加 ‘12312312312’ + ‘000000023’

var maxNumAdd = function(str1, str2) {
  if(!str1 && !str2) {
    throw new Error('没传参数！');
  }
  let result = []; // 相加结果数组
  let carry = 0; // 进位值
  let l1 = str1.split('').reverse(); // 倒过来 从个位开始
  let l2 = str2.split('').reverse(); // 倒过来 从个位开始
  if(l1.length === 0) {
    return Number(str2);
  }
  if (l2.length === 0) {
    return Number(str1);
  }
  // 在最小数组前补0
  while(l1.length < l2.length) {
    l1.push('0');
  }
  while(l1.length > l2.length) {
    l2.push('0');
  }
  for(let i = 0; i < l1.length; i++) {
    let num = Number(l1[i]) + Number(l2[i]) + carry;
    let curNum = num % 10;
    carry = Math.floor(num / 10);
    result.unshift(curNum); // 不断向数组前面插入
  }
  return result.join('');
}

// 无重复字符最长子串
var lengthOfLongestSubstring = function(s) {
  // 双指针
  let start = 0; // 记录最大字符串开始位置的指针
  let end = 0; // 记录最大字符串结束位置的指针
  let maxLen = 0; // 最大长度
  const chartSet = new Set(); // 缓存hash
  while(start < s.length && end < s.length) {
      if(!chartSet.has(s[end])) {
          chartSet.add(s[end]);
          end++;
          maxLen = Math.max(maxLen, end - start);
      } else {
          chartSet.delete(s[start]);
          start++;
      }
  }
  return maxLen;
};

// 执行最后一次
function debounce(func, wait) {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  }
}

// 执行第一次的
function throttle(func, wait) {
  let lock;
  return function() {
    let context = this;
    let args = arguments;
    if(!lock) {
      func.apply(context, args);
      lock = true; // 执行一次就锁住
      // 过一会再打开
      setTimeout(() => {
        lock = false;
      }, wait)
    }
  }
}

