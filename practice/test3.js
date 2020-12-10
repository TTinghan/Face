// 一些常见算法

/** 
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * acbbabc
 * @param {*} s 
 */
var longestPalindrome = function(s) {
    let result = '';
    for (let i in s) {
        var lastIndex = s.lastIndexOf(s[i]);// 最后出现的index
        while (lastIndex >= i) {
            const splitedString = s.slice(i, lastIndex + 1);// 截取子回文str
            if (isPalindrome(splitedString)) { // 判断这子段是不是回文
                if (result.length < splitedString.length) { // 找到那个长度最长的回文子序列
                    result = splitedString;
                } else {
                    break;
                }
            } else {
                lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i]);// 找到
            }
        }
    }
    return result;
};

/**
 * 是不是回文字符串 Palindrome
 * @param {*} s 
 */
function isPalindrome (s) {
    return s.toString() === s.toString().split('').reverse().join('');
}

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

// 数组nums中是否存在三个元素a,b,c 使得他们的和为N,找出所有满足条件的三元集合
// 如：nums=[-1, 0, 1, 2, 01, -4] -> [-1, 0, 1] [-1, -1, 2]

