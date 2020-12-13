Function.prototype.bind = function(asThis){
    if(asThis == null || typeof asThis === 'undefined'){
        asThis = window;
    }
    let fn = this;
    return function(...args){
        return fn.apply(asThis, args)
    }
}

Function.prototype.call = function(asThis, ...args){
    if(asThis === null || typeof asThis === 'undefined') {
        asThis = window;
    }
    let fnSymbol = Symbol();
    asThis[fnSymbol] = this;
    let fn = asThis[fnSymbol](...args);
    delete asThis[fnSymbol];
    return fn;
}

Function.prototype.apply = function(asThis, args){
    if(asThis === null || typeof asThis === 'undefined') {
        asThis = window;
    }
    let fnSymbol = Symbol();
    asThis[fnSymbol] = this;
    let fn = asThis[fnSymbol](...args);
    delete asThis[fnSymbol];
    return fn;
}

function myInstanceof(left, right){
    if(left === null || typeof left !== 'object'){
        return false
    }
    let proto = Object.getPrototypeOf(left);
    while(proto){
        if(proto === right.prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

function curry(fn){
    const g = (...allArgs)=>{
        allArgs.length > fn.length ? fn(...allArgs) : (...restArgs)=>{g(...allArgs, ...restArgs)}
    }
    return g;
}
function flat(arr){
    let result = [];
    for(let ele of arr){
        if(Array.isArray(ele)){
            result = result.concat(flat(ele))
        }else {
            result = result.concat(ele)
        }
    }
    return result;
}

function flatten(arr){
    return [].concat(
        ...arr.map(ele => Array.isArray(ele) ? flatten(ele) : ele)
    )
}

function debounce(fn, wait){
    let timer;
    return (args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args)
        }, wait);
    }
}

function throttle(fn, wait){
    let timer;
    return (args)=>{
        if(timer){
            return;
        }
        timer = setTimeout(()=>{
            fn(...args);
            timer = null;
        }, wait);
    }
}

function composeFn(...fn){
  return function(initValue){
      return fn.reverse().reduce(function(arrArgs, itemFn){
          return itemFn(arrArgs);
      }, initValue);
  }
}

// 手写async/await

function myAsync(){
    gr(function *(){
        // TODO
    })
}

function gr(fn){
    const gen = fn();
    return new Promise((resolve, reject)=>{
        function step(fn){
            let next;
            try{
                next = fn();
            }catch(err){
                reject(err)
            }
            if(next.done){
                resolve(next.value);
            }
            next.value.then(()=>{
                step(gen.next)
            }).catch( err => reject(err))
        }
        step(gen.next);
    })
}

function binarySearch(target, arr, start = 0, end = arr.length - 1){
   if(start > end) return -1;
   if(target === arr[mid]) {
       return mid;
   }else if(target > arr[mid]) {
       return binarySearch(target, arr, start, mid - 1);
   }else {
       return binarySearch(target, arr, mid + 1, end)
   }
}

function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length -1;
    if(start > end) return -1;
    while(start < end) {
        if(target === arr[mid]){
            return mid;
        }else if(target > arr[mid]){
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
}

function longestPalindrome(s){
    let result = ''// 记录最长的
    for(let i in s){
        let lastIndex = s.lastIndexOf(s[i])
        while(lastIndex >= i){
            const splitStr = s.slice(i, lastIndex + 1);
            if(isPalindrome(splitStr)){
                if(result.length < splitStr.length){
                    result = splitStr;
                }else {
                    break;
                }
            }else {
                lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i])// 继续向后找
            }
        }
    }
    return result;
}

function isPalindrome(s){
    return s.toString().split('').reverse().join('') === s.toString;
}

function reverseList(head){
   let pre = null;
   let cur = head;
   while(cur !== null){
       let nextTemp = cur.next;
       cur.next = pre;
       pre = cur;
       cur = nextTemp;
   }
   return pre;
}

function deletNode(head, val){
    if(head.val == val){
        return head.next;
    }
    head.next = deletNode(head.next, val);
    return head;
}

/**
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

function hasCircle(head){
    let map = new Map();
    while(head){
        if(map.get(head) === true){
            return true
        }else {
            map.set(head, true)
        }
        head = head.next;
    }
    return false;
}

/**
 * 判断是不是对称二叉树
 * 返回布尔值
 */
function isSymmetric(root){
    function isMirror(r1, r2){
        if(!r1 && !r2) return true;
        if(!r1 || !r2) return false;
        return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
    }
    isMirror(root, root);
}
/**
 * 返回一个 镜像树
 * @param {*} root 
 */
function mirrorTree(root){
    if(!root){
        return root;
    }
    mirrorTree(root.left);
    mirrorTree(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
}
// 计算表达式中左右括号匹配的对数，以及落单的左括号个数，右括号个数
// 例：
// 输入："1*2+(3+3)())))(((("
// 输出：2 4 3（三个结果空格隔开）
function itemTimes(s){
    let left = [];
    let right = [];
    let compose = 0;
    for(let i = 0; i < s.length; i++){
       switch(s[i]){
           case '(':
            left.push(s[i]);
            break;
           case ')':
           if(left.length === 0){
               right.push(s[i])
           }else {
               left.pop();
               compose ++;
           }
       }
    }
    return `${compose} ${left.length} ${right.length}`
}

