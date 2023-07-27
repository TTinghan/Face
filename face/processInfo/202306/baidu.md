# 一
实现一个indexOf的思路

手写：
广度优先遍历，输出节点




# 二
# 说一下浏览器的DOM事件委托，冒泡和捕获的流程
关键词：会调用路径上所有的处理程序
event.target: 引发事件的层级最深的元素（目标元素）
event.currentTarget: 处理事件的当前元素(具有处理程序的元素)

1. 当一个事件发生时，引发事件的元素被标记为目标元素，
2. 然后事件从文档的根节点开始向下移动到event.target,并在途径的路径上调用addEventListener(,,{capture: true})分配了的处理程序
3. 然后找到目标元素，调用子身上分配的处理程序
4. 然后事件从event.target先上冒泡到文档的根节点，调用on<event>、HTML特性(attribute)和没有第三个参数或者addEventListener(,,{capture: false})分配了的处理程序


ECMAScript定义新标准的的流程规范？
js遵从什么规范？

```
function funcA(callback){
  setTimeout(() => {
    callback(123);
  })
}

// 请实现
function promiseA(fun) {
  return function() {
    return new Promise((resolve, reject) => {
      return fun(resolve);
    })
  }
}

const primiseB = promiseA(funcA);

console.log(primiseB()); // 预期打印出 123

```
手写一个dom的深度优先广度优先
为什么递归不建议使用？
因为一直循环会形成一个闭包函数，会有垃圾没有被回收，占用内存空间，因为递归需要一直不停的执行，所以直到执行才能够知道哪个参数没有用

