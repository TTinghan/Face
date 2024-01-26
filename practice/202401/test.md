# css文件的下载会阻塞渲染，但是不会阻塞js的执行
# 双向数据绑定

# 说一下ts的范型
泛型是 TypeScript 中强大且灵活的特性，它允许你编写可重用的代码，同时保留类型信息
# TS的Record类型是怎么实现的？
```
type MyRecord<K extends keyof any, T> = {
    [P in K]: T
}

type MyRecordType = MyRecord<'a' | 'b', number>;

const obj: MyRecordType = {
    'a': 1,
    'b': 2
}

```
# 如何使用TS获取函数的返回类型
```
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 示例使用
function exampleFunction(): number {
  return 42;
}

type ExampleReturnType = MyReturnType<typeof exampleFunction>;

// 在这个例子中，ExampleReturnType 将被推断为 number

- MyReturnType 是一个泛型类型，接受一个类型参数 T。
- 核心思想：使用条件类型 T extends (...args: any[]) => infer R 来检查是否 T 是一个函数类型，如果是，那么 infer R 将推断为函数的返回类型。
- 如果 T 不是函数类型，则返回 any 类型。
利用条件类型对函数类型进行解构，提取函数的返回类型。这样，我们就可以通过MyReturnType<typeof exampleFunction>获取 exampleFunction 函数的返回类型，而不需要显式地指定。

```
# 浏览器的性能优化
# 课程表
https://leetcode.cn/problems/course-schedule/description/

# 手写一个发布订阅
class EventHub{
  constructor() {
    this.events = {}
  }

  on(event, fn) {
    if(!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(fn)
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
const hander = (data) => {
  console.log(data);
}
const eventBus = new EventHub();
eventBus.on('currentBus', hander);
eventBus.emit('currentBus', 777);
eventBus.off('currentBus', hander);

# 最长公共前缀
function longCommonPre(strs) {
  if(strs.length < 0)  
}

# 二叉树深度优先遍历、广度优先
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

function dfsTraversal(root) {
  if(!root) {
    return []
  }
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

function bfsTraversal(root) {
  if(!root) {
    return [];
  }
  const result = [];
  const queue = [root];
  while(queue.length > 0) {
    const node = queue.shift();
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
# 反转链表
function reverseList(head) {
  const prev = null;
  const current = head;
  while(current !== null) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return pre;
}