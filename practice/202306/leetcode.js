// startsWith 判断当前字符串是否以另外一个给定的子字符串开头 返回一个布尔值
// sort toSorted

// shift pop
// unshift push

// Math.max() 最大值
// Math.abs() 绝对值
// Math.ceil() 四舍五入 向上取整
// Math.floor() 四舍五入 向下取整
// Math.random() 0-1随机数

// 防止大数计算导致的溢出问题--》取模（mod）:取模操作使用%运算符，例如a % b表示a除以b后的[余数]
// 取模的操作是根据除数的符号来决定余数的符号
// const MOD = 1e9 + 7;
// someLargeNumber % MOD

// 取余（rem）:取余操作使用std::rem函数，例如std::rem(a, b)表示a除以b后的余数，结果的符号与a的符号相同
// 取余的操作是根据被除数的符号来决定余数的符号
// 1e9+7

// Array.from() 
// Array.from('foo')   -》["f", "o", "o"]
// Array.from([1, 2, 3], x => x + x))   -》[2, 4, 6]

// Array.fill(填充值，开始索引，结束索引) ，开始和结束是[)关系，且会改变原数组
// Array.prototype.splice(开始，删除几个，替换) 且会改变原数组
// Array.prototype.indexOf(查找对象，从第几个索引开始) 

// 位运算



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

//  动态规划-》n首不同的歌，一共听goal首，每首支少播放一次，一首歌只有在其他 k 首歌播放完之后才能再次播放
 var numMusicPlaylists = function(n, goal, k) {
    const mod = 1e9 + 7;
    let dp = Array.from({ length: goal + 1 }, () => Array(n + 1).fill(0)); // 创建二维数组
    dp[0][0] = 1;
    for (let i = 1; i <= goal; i++) { // i是已经播放了i首歌
        for (let j = 1; j <= n; j++) { // j是上一首播放的歌曲是什么
            dp[i][j] = dp[i - 1][j - 1] * (n - (j - 1)) % mod;
            if (j > k) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % mod;
            }
        }
    }
    return dp[goal][n];
};

// 数组创建链表的函数
function LinkNode(val, next = null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
function createLinkedList(arr) {
    // 永远创建一个虚拟头节点 预先指针
    let pre = new LinkNode(0);
    // 指向当前节点的指针
    let current = pre;

    for(let val of arr) {
        current.next = new LinkNode(val);
        current = current.next;
    }

    // 永远返回结果链表的头节点
    return pre.next;
}

// 组合函数compose
// 以flowRight为例子
var flowRight = function(...fns) {
    return function(initialValue) {
        return fns.reverse().reduce((acc, fn) => {
            return fn(acc); // 每个当前函数将累加器的结果作为参数
        }, initialValue)
    }
}
