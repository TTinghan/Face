// startsWith 判断当前字符串是否以另外一个给定的子字符串开头 返回一个布尔值
// sort toSorted
// shift pop
// Math.max()






/**
 * 二叉树相关 BFS(广度优先遍历)
1. 将起始节点放入队列中。
2. 当队列非空时，执行以下步骤：
  从队列中取出一个节点。
  访问该节点。
  将该节点的所有未访问过的相邻节点加入队列。
  标记该节点为已访问。
3. 重复步骤 2，直到队列为空。
 */
var widthOfBinaryTree = function(root) {
  if (root === null) {
         return 0;
     }
 
     let max_width = 0;
     let queue = [];
     queue.push([root, 0]);// 遍历根节点并记录位置0
 
     while (queue.length > 0) {
         let level_length = queue.length;
         let level_min_index = queue[0][1]; // 每层最左边的节点位置
 
         for (let i = 0; i < level_length; i++) {
             let [node, idx] = queue.shift(); // 取出最左边的节点及其位置
            //  (leftNode两倍和rightNode两倍+1)可以确保不会有两个节点的位置是相同的，并且同一层的节点位置连续
             if (node.left !== null) {
                 queue.push([node.left, 2 * idx]); // 左孩子的位置是父节点位置的两倍
             }
             if (node.right !== null) {
                 queue.push([node.right, 2 * idx + 1]); //右孩子的位置是父节点位置的两倍加1
             }
             if (i === level_length - 1) {
                // 每一层的宽度就是最右边的节点位置减去最左边的节点位置加1
                 max_width = Math.max(max_width, idx - level_min_index + 1);
             }
         }
     }
 
     return max_width;
 };
