// promise.all
function myPromiseAll(promises){
 return new Promise((resolve, reject) => {
  if(!Array.isArray(promises)) {
    reject(new TypeError('arguements is must be array'))
  }
  let promisesLen = promises.length;
  let resolvedValue = new Array(promisesLen);
  let resolvedCounter = 0;
  for(let i = 0; i < promisesLen; i++) {
    Promise.resolve(promises[i]).then(function(value) {
      resolvedCounter++;
      resolvedValue[i] = value;
      if(resolvedCounter === promisesLen) {
        resolve(resolvedValue);
      }
    }, function(reason) {
      reject(reason);
    })
  }
 })
}
// 实例
myPromiseAll([
  Promise.resolve('2222'),
  // Promise.reject('333'),
  Promise.resolve('4444'),
]).then((res) => {
  console.log('res: ', res);
})
// eventBus
class EventBus{
  constructor() {
    this.events = {}
  }
  on(event, fn) {
    if(!this.events[event]) {
      this.events[event] = [];
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
      fnList.splice(index, 1);
    }
  }
}

const myEventBus = new EventBus();
const hander = (data) => {
  console.log('data: ', data);
}
myEventBus.on('currentBus', hander);
myEventBus.emit('currentBus', 1212);
myEventBus.off('currentBus', hander);
// 最长公共前缀

// dfs
function dfsTraversal(root) {
  const result = [];
  const dfs = (node) => {
    if(!node) {
      return []
    }
    result.push(node.value);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return result;
}

// dfs变形树的数据结构
const rootData = {
  name: 'A',
  children: [{
    name: 'B',
    children: [{
      name: 'C',
      children: [] // 可以添加更多子节点
    }]
  }]
};
// STEP1: 实现上述树状结构的渲染,类似
`<div>
<div>A</div>
<div class="children">
  <div>B</div>
  <div class="children">
    <div>C</div>
  </div>
</div>
</div>`
// 渲染树的函数
function renderTree(node, parentElement, path = []) {
  const element = document.createElement('div');
  element.textContent = node.name;
  // 添加点击事件监听器
  element.addEventListener('click', () => {
    const nodePath = path.concat(node.name).join('/');
    console.log(nodePath);
  });

  if (node.children && node.children.length > 0) {
    const childrenContainer = document.createElement('div');
    childrenContainer.classList.add('children');
    
    node.children.forEach(child => {
      renderTree(child, childrenContainer, path.concat(node.name));
    });

    element.appendChild(childrenContainer);
  }

  parentElement.appendChild(element);
}

// 在页面上渲染树
const rootElement = document.getElementById('root');
renderTree(rootData, rootElement);
