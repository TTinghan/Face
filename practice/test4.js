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
    } else if (target < arr[mid]) {
      return binarySearch(target, arr, start, mid - 1)
    } else {
      return binarySearch(target, arr, mid + 1, end)
    }
}

// 二分查找 使用循环 有序数组
// var arr = [1, 4, 7, 8, 12, 34, 67, 88, 99, 100]
// console.log(binarySearch(arr, 7));
// 有序的二分查找，返回-1或存在的数组下标。
function binarySearch(arr, target) {
    let start = 0,
        end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (target === arr[mid]) {
            return mid; // 查找成功，结束查找
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        };
    };
};

// 计算二叉树最大深度
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let deep = 0;
    deep = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    return deep;
};

//   二叉树遍历深度比较
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true;
    if(Math.abs(deep(root.left) - deep(root.right)) > 1) { // 比较深度
        return false
    }
    return isBalanced(root.left) && isBalanced(root.left);
};
function deep(root){ // 计算二叉树深度
    if(!root) return 0;
    let leftNode = deep(root.left) + 1;
    let rightNode = deep(root.right) + 1;
    return Math.max(leftNode, rightNode);
}

// 对称二叉树
var isSymmetric = function(root) {
    function isMirror(r1,r2){
        //如果都为null 对称
        if(!r1 && !r2){
            return true
        }
        //只要其中一个为空，另一个不为，则不对称
        if(!r1 || !r2){
            return false
        }
        //判断根节点
        //判断r1的左树和r2的右
        //判断r2的左树和r1的右
        return r1.val == r2.val && isMirror(r1.left,r2.right) && isMirror(r1.right,r2.left)
    }
    return isMirror(root,root)
};

// 二叉树路径
// 返回所有从根节点到叶子节点的路径
const binaryTreePaths = (root) => {
    const res = [];
    buildPath(root, '');
    return res;
};
const buildPath = (root, pathStr) => {
    if (root == null) { // 遍历到null
        return;           // 结束当前递归分支
    }
    if (root.left == null && root.right == null) { // 遍历到叶子节点
        pathStr += root.val; // 路径末尾了，不用加箭头
        res.push(pathStr);   // 加入解集
        return;
    }
    pathStr += root.val + '->'; // 处理非叶子节点，要加箭头
    buildPath(root.left, pathStr); // 基于当前的pathStr，递归左子树
    buildPath(root.right, pathStr); // 基于当前的pathStr，递归右子树
};