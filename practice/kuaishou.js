function randomsHex(){
    let num = Math.random() * 0xffffff | 0;
    let str = num.toString(16);
    return str.length === 6 ? str : (Math.random() * 0xf | 0).toString(16) + str;
}

function randomsRgb(){
    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function hexToRgb(hex){
    let reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/;
    let newHex = hex.toLowerCase();
    if(newHex && reg.test(newHex)){
        if(newHex.length === 4){
            let newStr = '#';
            for(let i = 1; i < newHex.length; i++){
                newStr += newHex.slice(i, i+1).concat(newHex.slice(i, i+1));
            }
            newHex = newStr;
        }
        let newArr = [];
        for(let i = 1; i < newHex.length; i+=2){
            newArr.push(parseInt(`0x${newHex.slice(i, i+2)}`));
        }
        return `rgb(${newArr.join(',')})`;
    }else {
        return newHex;
    }
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

function deleteNode(head, val){
    if(head.val == val){
        return head.next;
    }
    head.next = deleteNode(head.next, val);
    return head;
}

function mergeList(l1, l2){
   if(l1 === null) return l2;
   if(l2 === null) return l1;
   if(l1.val < l2.val){
       l1.next = mergeList(l1.next, l2);
       return l1;
   }else{
       l2.next = mergeList(l1, l2.next);
       return l2;
   }
}

function hasCircle(head){
    let map = new Map();
    while(head){
        if(map.get(head) === true){
            return true;
        }else {
            map.set(head, true);
        }
        head = head.next;
    }
    return false;
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
function curry(fn){
    const g = (...allArgs) =>{
        allArgs.length >= fn.length ? fn(...allArgs) : (...restArgs)=>{g(...allArgs, ...restArgs)}
    }
    return g;
}

function composeFn(...fn){
    return function(initValue){
        return fn.reverse().reduce(function(arr, itemFn){
            itemFn(arr);
        }, initValue)
    }
}
 function binarySearch(target, arr, start = 0, end = arr.length - 1) {
     if(start > end) return -1;
     let mid = Math.floor((start + end) / 2);
     if(target === arr[mid]){
         return mid;
     }else if(target > arr[mid]){
         return binarySearch(target, arr, start, mid -1);
     }else {
         return binarySearch(target, arr, mid + 1, end);
     }
 }

 function binarySearch(target, arr) {
     let start = 0;
     let end = arr.length -1;
     if(start > end) return -1;
     let mid = Math.floor((start + end) / 2);
     while(start < end){
         if(target === mid) {
             return mid;
         }else if(target > arr[mid]){
             end = mid -1;
         }else {
             start = mid + 1;
         }
     }
 }

 function isSymmetric(root){
     function isMirror(r1, r2){
         if(!r1 && !r2) return true;
         if(!r1 || !r2) return false;
         return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
     }
     return isMirror(root, root);
 }

 function mirrorTree(root){
     if(!root) return root;
     mirrorTree(root.left);
     mirrorTree(root.right);
     [root.left, root.right] = [root.right, root.left];
     return root;
 }

 function levelOrder(root) {
     if(!root) return [];
     let res = [];
     let queueArr = [root];
     while(queueArr.length){
         let nodeArr = [];// 每层节点集合
         let len = queueArr.length;
         for(let i = 0; i < len; i++){
             let node = queueArr.shift();
             nodeArr.push(node.val);
             node.left && queueArr.push(node.left);
             node.right && queueArr.push(node.right);
         }
         return res.push(nodeArr);
     }
     return res;
 }
function levelOrder(root){
    if(!root) return [];
    let res = [];
    let level = 0;
    const DFS = (node, level) =>{
        if(!node) return;
        if(level >= res.length) res[level] = [];
        res[level].push(node.val);
        let nextLevel = level + 1;
        node.left && DFS(node.left, nextLevel);
        node.right && DFS(node.right, nextLevel);
    }
    DFS(root, level);
    return res;
}
