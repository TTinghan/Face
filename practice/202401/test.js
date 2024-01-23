class EventHub{
  constructor() {
    this.events = {};
  }

  on(event, fn) {
    if(!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
  }

  emit(event, data) {
    const fnList = this.events[event];
    if(fnList && fnList.length > 0) {
      fnList.forEach(fn => {
        fn(data);
      });
    }
  }

  off(event, fn) {
    const fnList = this.events[event];
    const index = fnList.indexOf(fn);
    if(index === -1) {
      return;
    }
    fnList.splice(index, 1);
  }
}

const hander = (data) => {
  console.log(data);
}
const eventHub = new EventHub();
eventHub.on('currentHub', hander);
eventHub.emit('currentHub', '666');
eventHub.off('currentHub', hander);


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 如果输入数组为空，则返回空字符串
  if (strs.length === 0) {
      return "";
  }
  
  // 遍历第一个字符串的每个字符
  for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
      
      // 检查其他字符串在相同位置上的字符
      for (let j = 1; j < strs.length; j++) {
          if (i === strs[j].length || strs[j][i] !== char) {
              // 如果到达某个字符串的末尾或者发现不匹配的字符，则返回前缀
              return strs[0].substring(0, i);
          }
      }
  }
  
  // 如果没有发现不匹配的字符，则返回第一个字符串作为前缀
  return strs[0];
};

// 示例
const input = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(input)); // 输出: "fl"

// BFS 广度优先遍历
var bfsTraversal = function(root) {
  if(!root) {
    return []
  }
  const result = [];
  const queue = [root];
  while(queue.length > 0) {
    const node = queue.shift(); // 出队列一个
    result.push(node.value);
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  return result;
}

class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
// console.log(bfsTraversal(root));


// DFS 广度优先遍历（递归-》前序/中序/后序）
// 前序
var dfsTraversal = function(root) {
  const result = [];
  const dfs = (node) => {
    if(!node) {
      return [];
    }
    result.push(node.value); // 前序
    dfs(node.left);
    dfs(node.right);

    // dfs(node.left);
    // result.push(node.value); // 中序
    // dfs(node.right);

    // dfs(node.left);
    // dfs(node.right);
    // result.push(node.value); // 后序
  }
  dfs(root);
  return result;
}
console.log(dfsTraversal(root));


