/**
'abc123455',
'boyxx213456',
'cba312456',
'cdwxa654321'

123455
213456
312456
654321
字符串排序
 */ 
 function handleAllArr(allArr){
    return allArr.map((ele)=>{
        return (str) => {
            let s = str.match(/\d+/g);// 匹配数字 ['2413']
            let newStr = s[0].split('').sort().join('');
            return parseInt(newStr);
        }
    })
 }
 /**
  * 字符串归一
  * "babcc"归一化后为"a1b2c2"
  */
 function strTimes(str){
    let obj = {};// 存储遍历第一次=>每个字符：字符数
    let arrKeys = Object.keys(obj).sort();// 对遍历后的对象的key排序
    let newObj = {};// key排序后的对象
    let lastStr = ''; // 为最后处理结果的str
    for(let i = 0; i < str.length; i++){
        let s = str.charAt(i);
        if(obj[s]) {
            obj[s]++
        }else {
            obj[s] = 1
        }
    }
    for(let i = 0; i < arrKeys.length; i++){
        newObj[arrKeys[i]] = obj[arrKeys[i]]
    }
    for(let key in newObj){
        lastStr += `${key}${newObj[key]}`
    }
    return lastStr
}

// 二分查找 使用递归 有序数组
// var arr = [0, 0, 1, 2, 3, 5, 4, 6, 7, 8]
// console.log(binarySearch(1, arr, 0, arr.length-1)); 
function binarySearch(target, arr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return -1
    }
    var mid = Math.floor((start + end) / 2);// 向下取整 不进位
    if (target === arr[mid]) {
      return mid; // 查找成功，结束查找
    } else if (target < arr[mid]) { // 目标值在左半部分, 右指针左移缩小范围
      return binarySearch(target, arr, start, mid - 1)
    } else { // 目标值在右半部分，左指针右移缩小范围
      return binarySearch(target, arr, mid + 1, end)
    }
}

// 二分查找 使用循环 有序数组
// var arr = [1, 4, 7, 8, 12, 34, 67, 88, 99, 100]
// console.log(binarySearch(arr, 7));
// 有序的二分查找，返回-1或存在的数组下标。
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end) {
      let mid = Math.floor((start + end)/2);
      if(target === arr[mid]) {
        return mid;
      } else if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    if (start > end) return -1;
};

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

// 将10 -> 9
// 100 -> 99
var monotoneIncreasingDigits = function(N) {
    if (N < 10) return N
    let NArr = N.toString().split('')
    for (let i = NArr.length - 2; i > -1; i--) {
      if (NArr[i] > NArr[i + 1]) {
        NArr[i]--
        for (let j = i + 1; j < NArr.length; j++) {
          NArr[j] = 9
        }
      }
    }
    return Number(NArr.join(''))
  };

  /**去重 字典最小
   * bacbc->abc
   * @param {*} s 
   */
  var removeDuplicateLetters = function(s) {
    let stack = [], i = -1
    while (++i < s.length) {
        const n = s[i]
        if (stack.includes(n) === false) {
            let j = stack.length
            while(j-- && stack[j] > n && s.includes(stack[j], i)) stack.pop()
            stack.push(n)
        }
    }
    return stack.join('')
};

// 第一是webpack优化，
// 第二是常见的兼容问题处理，
// 第三是短信安全优化这个需求我会让你讲清楚，
// 第四是微信授权体系，其实背后是oauth认证体系，这个可以了解一下背景。
// 第五是im这块，我觉得你得想清楚怎么讲。比如重试方案架构等等。
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return "";
    let prevs = strs[0]
    for(let i = 1; i < strs.length; i++) {
        let j = 0
        for(; j < prevs.length && j < strs[i].length; j++) {
            if(prevs.charAt(j) !== strs[i].charAt(j)) break
        }
        prevs = prevs.substring(0, j)
        if(prevs === "") return ""
    }
    return prevs
};