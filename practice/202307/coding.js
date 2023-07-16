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
