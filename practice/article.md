1. [十大经典排序js](https://juejin.cn/post/6844903444365443080)
2. [es6-10 新特性一览](https://juejin.cn/post/6844903811622912014)
3. [new一个类的时候，都发生了什么| 斐波那契数列|实现一个栈..手写和算法](https://juejin.cn/post/6844903575559077895)
4. [HTTP1.0、HTTP1.1 和 HTTP2.0 的区别](https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A)
5. [面试之前过一遍！！基础的css/js问题](https://juejin.cn/post/6844903776512393224?utm_source=gold_browser_extension%3Futm_source%3Dgold_browser_extension)
6. [var let const 区别--》es6全解](https://juejin.cn/post/6844903775329583112)
7. [手写bind、手写深拷贝、手写 EventHub（发布-订阅）、手写 Promise](https://zhuanlan.zhihu.com/p/160315811)
8. [手写Promise/Promise.all/Promise.race](https://zhuanlan.zhihu.com/p/196671665)
9. [setState是同步的还是异步的理解](https://github.com/sisterAn/blog/issues/26)
```
总结
- 如果是由React引发的事件处理（比如通过onClick引发的这类合成事件事件处理）或React的钩子函数（ComponentDidmount等），调用setState是异步的;
- 除此之外的setState调用会同步执行this.state 。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。

```
```
注意：
setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
```
