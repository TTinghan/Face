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

// 输入list 输出res
const list = [
  {
    name: 'name',
    type: 'string',
    require: true,
  },
  {
    name: 'other.info',
    type: 'string',
    require: true,
  },
  {
    name: 'other.addr',
    type: 'string',
    require: true,
  }
];

const res = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    other: {
      type: 'object',
      properties: {
        info: {
          type: 'string',
        },
        addr: {
          type: 'string'
        }
      }
    }
  }
}

function convertListToSchema(list) {
  const res = {
    type: 'object',
    properties: {},
  };

  list.forEach(item => {
    const parts = item.name.split('.');
    let currentLevel = res.properties;

    parts.forEach((part, index) => {

      if (!currentLevel[part]) {
        currentLevel[part] = { type: 'object', properties: {} };
      }

      if (index === parts.length - 1) {
        currentLevel[part] = { type: item.type };
      }

      currentLevel = currentLevel[part].properties;
    });
  });

  return res;
}

function revertList(head) {
  let prev = null;
  let current = head;
  while(current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}

// 反转链表测试用例
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
// 测试用例
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
console.log('原始链表:');
let current = node1;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

const reversedHead = revertList(node1);

console.log('反转后的链表:');
let reversedCurrent = reversedHead;
while (reversedCurrent !== null) {
  console.log(reversedCurrent.value);
  reversedCurrent = reversedCurrent.next;
}

class EventBus {
  constructor() {
    this.events = {}
  }

  on(event, fn) {
    if(!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(fn);
  }

  emit(event, data) {
    const fnList = this.events[event];
    if(fnList.length > 0) {
      fnList.forEach((fn) => {
        fn(data);
      })
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

const handers = (data) => {
  console.log(data);
}
const newEvent = new EventBus();
newEvent.on('currentBus', handers);
newEvent.emit('currentBus', 888);
newEvent.off('currentBus', handers);
