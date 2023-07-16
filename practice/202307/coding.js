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
