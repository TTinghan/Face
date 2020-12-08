1. [十大经典排序js](https://juejin.cn/post/6844903444365443080)
2. [es6-10 新特性一览](https://juejin.cn/post/6844903811622912014)
3. [new一个类的时候，都发生了什么| 斐波那契数列|实现一个栈..手写和算法](https://juejin.cn/post/6844903575559077895)
4. [HTTP1.0、HTTP1.1 和 HTTP2.0 的区别](https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A)
5. [面试之前过一遍！！基础的css/js问题](https://juejin.cn/post/6844903776512393224?utm_source=gold_browser_extension%3Futm_source%3Dgold_browser_extension)
6. [var let const 区别--》es6全解](https://juejin.cn/post/6844903775329583112)
7. [手写bind、手写深拷贝、手写 EventHub（发布-订阅）、手写 Promise](https://zhuanlan.zhihu.com/p/160315811)
8. [手写Promise/Promise.all/Promise.race](https://zhuanlan.zhihu.com/p/196671665)
9. [setState是同步的还是异步的理解](https://github.com/sisterAn/blog/issues/26)
10. [虚拟dom && diff算法](https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484879&idx=1&sn=ee0d2e3e235fa911ce2878ae2ea2b676&scene=21#wechat_redirect)

```
react-redux 的原理，是怎么跟 react 关联起来的
react-redux 的核心组件只有两个:
Provider 和 connect=>
Provider 存放 Redux 里 store 的数据到 context 里=>通过 connect 从 context 拿数据=>通过 props 传递给 connect 所包裹的组件。

```
```
总结
- 如果是由React引发的事件处理（比如通过onClick引发的这类合成事件事件处理）或React的钩子函数（ComponentDidmount等），调用setState是异步的;
- 除此之外的setState调用会同步执行this.state 。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。

```

```
注意：
setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
```

```
new 一个实例化对象的过程，发生了什么 =>
 new运算符的执行过程
    新生成一个对象
    链接到原型: obj.__proto__ = Con.prototype
    绑定this: 将这个对象作为构造函数的 this
    返回新对象(如果构造函数有自己 retrun 时，则返回该值)

    function myNew(Con, ...args) {
        let obj = Object.create(Con.prototype)
        let result = Con.apply(obj, args)
        return typeof obj === 'object' ? result : obj
    }

```
```
webpack 原理

- 1. 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
- 2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
- 3. 确定入口：根据配置中的 entry 找出所有的入口文件；
- 4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
- 5. 完成模块编译：在经过第 4 步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
- 6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
- 7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
```
```
babel原理（es6 => es5解析过程） babel 的转译过程分为三个阶段：parsing、transforming、generating

1. ES6 代码输入
2. babylon 进行解析得到 AST
3. plugin 用 babel-traverse 对 AST 树进行遍历转译,得到新的 AST 树
4. 用 babel-generator 通过 AST 树生成 ES5 代码

```
```
我们遇到题目时要把题目和以前做过的题联想下，通过类似点，找出突破点。    
字符串问题====》正则         
链表、数组问题====》双指针         
数组问题====》利用数组下标来做====》有时需要额外数组         
多维数组问题====》降维来做。         
复杂问题、优化问题====》动态规划         
排列问题====》递归、回溯         
数论问题====》找规律、动态规划         
树的问题====》递归、深度遍历、广度遍历====》栈、队列         
次数问题====》哈希表存储（js中建议使用{}，而不要使用ES6中的Map）        
大小值问题====》栈、队列、哈希表做存储         
从前往后、从大到小比较复杂====》从后往前、从小到大思考。      
动态规划重点了解 位运算也了解一下 

必须掌握的算法 快排和归并排序、深度和广度遍历、二分查找、二叉树遍历（能手撕） 动态规划、回溯法。

```