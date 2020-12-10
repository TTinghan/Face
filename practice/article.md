0. [React灵魂23问](https://zhuanlan.zhihu.com/p/304213203)
1. [Webpack灵魂13问](https://zhuanlan.zhihu.com/p/44438844)
2. [十大经典排序js](https://juejin.cn/post/6844903444365443080)
3. [es6-10 新特性一览](https://juejin.cn/post/6844903811622912014)
4. [new一个类的时候，都发生了什么| 斐波那契数列|实现一个栈..手写和算法](https://juejin.cn/post/6844903575559077895)
5. [HTTP1.0、HTTP1.1 和 HTTP2.0 的区别](https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A)
6. [var let const 区别--》es6全解](https://juejin.cn/post/6844903775329583112)
7. [手写bind、手写深拷贝、手写 EventHub（发布-订阅）、手写 Promise](https://zhuanlan.zhihu.com/p/160315811)
8. [手写Promise/Promise.all/Promise.race](https://zhuanlan.zhihu.com/p/196671665)
9. [setState是同步的还是异步的理解](https://github.com/sisterAn/blog/issues/26)
10. [虚拟dom && diff算法](https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247484879&idx=1&sn=ee0d2e3e235fa911ce2878ae2ea2b676&scene=21#wechat_redirect)
11. [函数组合，纯函数，函子等等](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch1.html)
12. [React Hooks 详解 【近 1W 字】+ 项目实战](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)
13. [从Mixin到HOC再到Hook](https://juejin.im/post/5cad39b3f265da03502b1c0a)
14. [Vuex、Flux、Redux、Redux-saga、Dva、MobX](https://zhuanlan.zhihu.com/p/53599723)
15. 
[怎么理解虚拟dom](https://www.zhihu.com/question/29504639)
[react的diff 从O(n^3)到 O(n) ，请问 O(n^3) 和O(n) 是怎么算出来？](https://www.zhihu.com/question/66851503)
[让虚拟DOM和DOM-diff不再成为你的绊脚石](https://juejin.im/post/5c8e5e4951882545c109ae9c?utm_source=gold_browser_extension)
16. [10 分钟理解 BFC 原理](https://zhuanlan.zhihu.com/p/25321647)
17. [面试之前过一遍！！基础的css/js问题](https://juejin.cn/post/6844903776512393224?utm_source=gold_browser_extension%3Futm_source%3Dgold_browser_extension)

#### 浏览器相关

18. [COOKIE和SESSION有什么区别？](https://www.zhihu.com/question/19786827)
19. [深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)
20. [浅聊HTTP缓存(HTTP Cache)](https://juejin.im/post/5bf3c28ee51d4514df5b7625?utm_source=gold_browser_extension)

```
链表和数组的区别：

1. 内存的组织方式不同；
2. 添加，删除，插入的时间复杂度不同O(1) / O(n);
3. 链表支持动态扩容

```

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
commonJS的require,exports
模块加载时执行，脚本代码在require的时候就会全部执行，如果发现”循环加载“，就只输出已经执行的部分，还未执行的不会加载。

ES6的import, export
动态引用，import导入的模块是一个指向被加载模块的引用

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
redux 和 同类框架的比较: 
redux与flux作比较：二者的思想比较相近， 数据都是单向流动的

flux->  view->action->dispatcher->store->view
  Flux 中 Store 是各自为战的，每个 Store 只对对应的 View 负责，每次更新都只通知对应的View
  一个应用可以拥有多个 Store，多个Store之间可能有依赖关系；
  Store 封装了数据还有处理数据的逻辑；
  存在Dispatcher 
  -----------------------------------
  数据源可以是多个
  state随便改
  用来修改的不一定是纯函数

redux-> reactComponents->store.dispatch(Action)-> store -><-(Reducers)
  各子 Reducer 都是由根 Reducer 统一管理的，每个子 Reducer 的变化都要经过根 Reducer 的整合
  整个redux只支持一个大的Store；
  Store 的 State 不能直接修改，每次只能返回一个新的 State。
  Redux 整了一个 createStore 函数来生成 Store。
  没有Dispatcher的概念，在Store中集成了一个dispatch方法，store.dispatch()是 View 发出 Action 的唯一方法。
  ----------------------------------
  单一数据源
  state是只读的，State 不能被自身修改，只能由特定的 action 引起变化
  用纯函数进行修改

```

```
redux如何做异步处理？怎么才能 Reducer 在异步操作结束后自动执行？中间件（Middleware ）的实现？

在 Redux 中同步的表现就是：Action 发出以后，Reducer 立即算出 State。
那么异步的表现就是：Action 发出以后，过一段时间再执行 Reducer。

-- 如何做的异步操作： 用 Redux 处理异步，可以自己写中间件来处理，当然大多数人会选择一些现成的支持异步处理的中间件。比如 redux-thunk 或 redux-promise 。
-- 中间件：所以中间件简单来说，就是对 store.dispatch 方法进行一些改造的函数。
--------------------------------------------------
Redux 提供了一个 applyMiddleware 方法来应用中间件：
这个方法主要就是把所有的中间件组成一个数组，依次执行。也就是说，任何被发送到 store 的 action 现在都会经过thunk，promise，logger 这几个中间件了。

```
```
react-redux怎样实现react与redux的数据关联的？

把 redux 的相关 store、reducer 通过 Provider 注册到 App 里面，这样子组件就可以拿到 store 了。
把所有的reducers绑在一起用combineReducers，简单来说，react-redux 就是多了个 connect 方法连接容器组件和UI组件，这里的“连接”就是一种映射： mapStateToProps 把容器组件的 state 映射到UI组件的 props mapDispatchToProps 把UI组件的事件映射到 dispatch 方法。
-----------------------------------------------------
-- Redux将React组件分为容器型组件和展示型组件
容器型组件--> 一般通过connect函数生成，它订阅了全局状态的变化，通过mapStateToProps函数，可以对全局状态进行过滤
【mapStateToProps 函数指定如何把当前 Redux store state 映射到展示组件的 props 中】
【mapDispatchToProps 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。】

展示型组件--> 不直接从global state获取数据，其数据来源于父组件

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

目前我需要复习的点：
归并排序、快速排序、链表、二叉树、react-redux、react-router、react的diff算法、Fibter
webpack构建+优化（webpack的loader和plugin的区别）
网络（http1.0-1.2、网络协议、http状态码所有、一个url渲染的过程）

- loader: webpack 只能理解 JavaScript 和 JSON 文件。loader 让 webpack 能够去处理其他类型的文件，并将它们转换为有效模块，以供应用程序使用，以及被添加到依赖图中。通过 loader 可以使 webpack 支持多种语言和预处理器语法编写的模块。

```
样式：
["style-loader","css-loader","sass-loader"] => style(css(sass()))
sass-loader => 将 Sass 编译成 CSS
css-loader => 将 CSS 转化成 CommonJS 模块
style-loader => 将 JS 字符串生成为 style 节点

文件：
raw-loader => 可以将文件以字符串的形式返回
file-loader => 解析项目中的url引入（不仅限于css）
url-loader => 对于image图片的转化, url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl。

编译：
babel-loader => 将es6的语法转成es5
vue-loader => 
ts-loader

校验：
eslint-loader

```

- plugin: 
```
html-webpack-plugin: 生成一个默认的html文件。
mini-css-extract-plugin: 把js中import导入的样式文件代码，打包成一个实际的css文件，结合html-webpack-plugin，在 dist/index.html 中以link插入css文件；默认将js中import的多个css文件，打包时合成一个。

```