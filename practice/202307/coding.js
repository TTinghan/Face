function myNew(func, ...args){
  let obj = {};
  obj.__propo__ = func.prototype;
  let result = func.apply(obj, ...args);
  return (result !== null && typeof result === 'object') ? result : obj
}

function PromiseAll(promises){
  return new Promise((resolve, reject)=>{
    if (!Array.isArray(promises)){
      return reject(new TypeError('arguements is must be array!'))
    }
    let promisesLen = promises.length;
    let resolvedValue = new Array(promisesLen);
    let resolvedCounter = 0;
    for(let i = 0; i < promisesLen; i++) {
      Promise.resolve(promises[i]).then(function(value){
        resolvedCounter++;
        resolvedValue[i] = value;
        if(resolvedCounter === promisesLen) {
          return resolve(resolvedValue);
        }
      }, function(reason){
        return reject(reason);
      })
    }
  })
}

// 全都会执行 不会中途reject出来
function PromiseAllSettled(promises) {
  return new Promise((resolve) => {
    let settledLen = promises.length;
    let settledResult = new Array(settledLen);
    let settledCounter = 0;

    promises.forEach((promise, index)=>{
        Promise.resolve(promise).then(function(value){
        settledResult[index] = { status: 'fulfilled', value: value };
        settledCounter++;
        if(settledCounter === settledLen) {
          return resolve(settledResult);
        }
      }, function(reason){
        settledResult[index] = { status: 'rejected', value: reason };
        settledCounter++;
        if(settledCounter === settledLen) {
          return resolve(settledResult);
        }
      })
    })
  })
}
// 链表反转
function reverseList(head) {
  let prev = null;
  let current = head;
  
  while(current) {
      let nextTemp = current.next;  // 存储下一个节点的引用
      current.next = prev;  // 反转当前节点
      prev = current;  // 更新prev指针为当前节点
      current = nextTemp;  // 更新current为下一个节点
  }

  return prev;  // 在反转结束后，prev将指向新的头节点
}

function buildTree(treeArr) {
  let treeObj = {};
  let idMap = {};

  for(let node of treeArr) {
    let { id, name } = node;
    idMap[id] = {id, name, children: []};
  }
  for(let node of treeArr) {
    let { id, pid } = node;
    let currentNode = idMap[id];
    if(pid === undefined || pid === null) {
      treeObj.id = currentNode.id;
      treeObj.name = currentNode.name;
      treeObj.children = currentNode.children;
    } else {
      let parentNode = idMap[pid];
      parentNode.children.push(currentNode);
    }
  }
  return treeObj;
}

// 反向拍平对象服务树
// 递归
function transform(treeObj) {
  let treeArr = [];
  function traverse(node, pid) {
    const { id, name, children} = node;
    treeArr.push(pid === undefined ? {id, name} : {id,name, pid})
    for(let child of children) {
      traverse(child, id);
    }
  }
  traverse(treeObj);
  return treeArr;
}
// 广度优先(BFS)
function transform(treeObj) {
  const treeArr = [];
  const queue = [{...treeObj, pid: undefined}]; // 用一个队列开始遍历，根节点的父节点 id 为 undefined

  while (queue.length > 0) {
      // 取出队列的第一个元素
      const node = queue.shift();
      const {id, name, pid, children} = node;
      // 在数组中添加当前节点，如果当前节点不是根节点，则添加父节点 id
      treeArr.push(pid !== undefined ? {id, name, pid} : {id, name});
      // 将当前节点的所有子节点添加到队列中，并设置它们的父节点 id 为当前节点的 id
      for (let child of children) {
          queue.push({...child, pid: id});
      }
  }

  return treeArr;
}

// 节点间最大差值
// 深度优先 dfs
const tree = {
  value: 5,
  left: {
    value: 2,
    left: { value: 6, left: null, right: null },
    right: { value: 9, left: null, right: null }
  },
  right: {
    value: 3,
    left: { value: 1, left: null, right: null },
    right: { value: 4, left: null, right: null }
  }
};
function maxAncestorDiff(root) {
  let maxDiff = 0;
  function dfs(node, minValue, maxValue) {
    if(node === null) {
      return;
    }
    maxDiff = Math.max(Math.abs((node.value - minValue)), Math.abs((node.value - maxValue)));
    minValue = Math.max(node.value, minValue);
    minValue = Math.max(node.value, maxValue);
    dfs(node.left, minValue, maxValue);
    dfs(node.right, minValue, maxValue);
  }
  dfs(node, node.value, node.value);
  return maxDiff;
}

// BFS queue队列 + shift
function maxAncestorDiff(root) {
  if (!root) {
    return 0;
  }
  let maxDiff = 0;
  let queue = [{node: root, max: root.value, min: root.value}]; // 保存节点和当前路径的最大和最小值

  while (queue.length) {
    let {node, max, min} = queue.shift();
    maxDiff = Math.max(maxDiff, Math.abs(node.value - min), Math.abs(node.value - max));
    max = Math.max(max, node.value);
    min = Math.min(min, node.value);
    if (node.left) {
      queue.push({node: node.left, max, min});
    }
    
    if (node.right) {
      queue.push({node: node.right, max, min});
    }
  }

  return maxDiff;
}
 //  二分查找
function binarySearch(target, arr) {
  let start = 0;
  let end = arr.length - 1;
  while(start < end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === target) {
      return mid;
    }else if(target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if(start > end) {
    return -1
  }
}

function binarySearch(target, arr, start = 0, end = arr.length -1) {
  if(start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if(target === arr[mid]) {
    return mid;
  } else if(target > arr[mid]) {
    return binarySearch(target, arr, mid + 1, end);
  } else {
    return binarySearch(target, arr, start, mid -1);
  }
}

function CloneDeep(obj) {
  if(obj === null) return null;
  if(typeof obj !== 'object') return obj;
  if(obj instanceof Date) return new Date();
  if(obj instanceof RegExp) return new RegExp();

  let newObj = Array.isArray(obj) ? [] : {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = CloneDeep(obj[key]);
    }
  }
}

// 两个数组合并
function mergeArray(arr1, arr2) {
  let arr = [];
  while(arr1.length && arr2.length) {
    if(arr1[0] > arr2[0]) {
      arr.push(arr2.shift());
    } else {
      arr.push(arr1.shift());
    }
  }
}

// 发布订阅
class EventHub{
  constructor() {
    this.events = {}; // 数据中心
  }
  on(event, fn){
    if(!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
  }

  emit(event, data) {
    let fnList = this.events[event];
    if(fnList && fnList.length > 0) {
      fnList.forEach((fn) => {
        fn(data);
      })
    }
  }

  off(event, fn) {
    let fnList = this.events[event];
    let index = fnList.indexOf(fn);
    if(index === -1) return;
    fnList.splice(index, 1);
  }
}
