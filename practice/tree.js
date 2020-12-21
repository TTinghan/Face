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
    return isBalanced(root.left) && isBalanced(root.right);
};
function deep(root){ // 计算二叉树深度
    if(!root) return 0;
    let leftNode = deep(root.left) + 1;
    let rightNode = deep(root.right) + 1;
    return Math.max(leftNode, rightNode);
}

/**
 * 判断是不是对称二叉树
 * 返回布尔值
 */
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

/**
 * 返回一个 镜像树
 * @param {*} root 
 */
function mirrorTree(root){
    if(!root) {
        return root;// 如果是[],就返回[]
    }
    mirrorTree(root.left); // 递归所有左子树
    mirrorTree(root.right); // 递归所有右子树
    [root.left, root.right] = [root.right, root.left];// 左右交换
    return root; // 返回最后的树
}

// 二叉树路径
// 返回所有从根节点到叶子节点的路径
const binaryTreePaths = (root) => {
    const res = [];
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
    buildPath(root, '');
    return res;
};


// 二叉树层序遍历
// BFS广度优先遍历 返回每一层级的树节点
function levelOrder(root){
    if(!root) return [];
    let res = [];// 用于存放最后的节点集合
    let queueRoot = [root]; // 队列集合
    while(queueRoot.length){
        let nodeArr = [];// 当前层级的节点集合
        let len = queueRoot.length; 
        for(let i = 0; i < len; i++){
            const node = queueRoot.shift();// 出队列
            nodeArr.push(node.val);
            node.left && queueRoot.push(node.left);// 入队列
            node.rigth && queueRoot.push(node.rigth);
        }
        res.push(nodeArr); 
    }
    return res; // 返回最后的集合
}

/**
 * 深度优先遍历 + 递归
 */
function levelOrder(root) {
    if(!root) return [];// 先容错
    let res = [];// 存放最后层级节点的集合
    let level = 0; // 层级
    const DFS = (node, level) => {
        if(!node) return; // 没有节点就返回
        if(level >= res.length) res[level] = [];// 每一层存放节点的集合
        let nextLevel = level + 1; // 层级下沉
        node.left && DFS(node.left, nextLevel);// 递归左子树
        node.rigth && DFS(node.rigth, nextLevel);// 递归右子树
    }
    DFS(root, level);
    return res;
}