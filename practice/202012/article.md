0. [React灵魂23问](https://zhuanlan.zhihu.com/p/304213203)
   [详解React的生命周期](https://juejin.cn/post/6844903655372488712)
1. [Webpack灵魂13问](https://zhuanlan.zhihu.com/p/44438844)
   [webpack配置，优化](https://zhuanlan.zhihu.com/p/99959392)
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
17. [通俗易懂的理解react-redux](https://www.zhihu.com/question/41312576/answer/90782136)
    [react/redux/react-redux](https://juejin.cn/post/6844903624565325832)
18. [面试之前过一遍！！基础的css/js问题](https://juejin.cn/post/6844903776512393224?utm_source=gold_browser_extension%3Futm_source%3Dgold_browser_extension)
19. [尾递归，尾调用](https://zhuanlan.zhihu.com/p/130885188)
20. [app开发-hybird](https://blog.csdn.net/zx48822821/article/details/79974552)

#### 浏览器相关

19. [深入理解浏览器的缓存机制](https://www.jianshu.com/p/54cc04190252)
20. [浅聊HTTP缓存(HTTP Cache)](https://juejin.im/post/5bf3c28ee51d4514df5b7625?utm_source=gold_browser_extension)
21. [如何计算数据结构的时间复杂度](https://www.jianshu.com/p/f4cca5ce055a)
22. [计算时间&空间复杂度](https://blog.csdn.net/zolalad/article/details/11848739)
23. [COOKIE和SESSION有什么区别？](https://www.zhihu.com/question/19786827)
24. [V8垃圾回收机制](https://zhuanlan.zhihu.com/p/259579683)
25. [http0-3](https://www.zhihu.com/question/302412059/answer/533223530)
```
其中， HTTPS 是在 HTTP 的协议上加了一层加密协商，这层加密协商在提高安全性的同时带来了完全新增的  TLS RTT，这对延迟是必然的增加。HTTP/2 的链接复用虽然可以将多个资源放到一个链接里，实现多路复用，却仍有 TCP 层面的排头阻塞（Head-of-line blocking）问题。

```
### 为什么是三次握手，四次挥手？
因为三次握手才能保证双方具有接收和发送的能力
三次握手：
才可以阻止历史重复连接的初始化（主要原因）才可以同步双方的初始序列号 才可以避免资源浪费

四次挥手：四次挥手即终止TCP连接
服务端通常需要等待完成数据的发送和处理，所以服务端的 ACK 和FIN 一般都会分开发送，从而比三次握手导致多了一次

### 链表和数组的区别：
```
1. 内存的组织方式不同；
2. 添加，删除，插入的时间复杂度不同O(1) / O(n);
3. 链表支持动态扩容

链表（线性表）：线性的顺序存储数据,数据直接按照前驱后继的线性组织形式排列 链表的插入删除操作 O(1)
树结构：在树的结构中，数据节点以层的方式排列，节点与节点之间是一种层次关系。
图：在图的结构中数据之间可以有任意关系，这就使得图的数据结构相对复杂。
```
### Event Loop描述
```
浏览器中： 同步代码->异步的微任务->异步的宏任务

先执行同步的代码按照执行顺序加入执行栈中
遇到异步事件先将其挂起，待异步事件执行完将结果放在事件队列，但不会立刻执行其回调
当前执行栈中的所有任务都执行完毕， 主线程处于闲置状态时，主线程会去查找事件队列是否有任务
有，把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复轮循。

node中：

外部输入数据(connections)-->轮询阶段(poll)-->检查阶段(check)-->关闭事件回调阶段(close callback)-->
定时器检测阶段(timer)-->I/O事件回调阶段(I/O callbacks)-->闲置阶段(idle, prepare)-->轮询阶段...

这些阶段大致的功能如下：
timers: 这个阶段执行定时器队列中的回调如 setTimeout() 和 setInterval()。
I/O callbacks: 这个阶段执行几乎所有的回调。但是不包括close事件，定时器和setImmediate()的回调。
idle, prepare: 这个阶段仅在内部使用，可以不必理会。
poll: 等待新的I/O事件，node在一些特殊情况下会阻塞在这里。
check: setImmediate()的回调会在这个阶段执行。
close callbacks: 例如socket.on('close', ...)这种close事件的回调。

```
### hook解决了class的什么问题
```
1. 代码复用：组件之间复用状态逻辑提供了便利，Hook 使你在无需修改组件结构的情况下复用状态逻辑。
2. 代码管理：解决复杂组件难以理解的问题，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。
3. 解决了class和this工作方式的学习成本问题，Hook无需学习复杂的函数式或响应式编程技术。
```

### react-router原理
```
当我们的路由发生变化时，Router中所监听的history函数将会触发，返回新的location对象，这时将会触发Router的setState，然后对应所有绑定Router的Route都将会重新渲染判断是否命中路由来进行重新渲染。

```
### react fiber（什么是fiber？）
```
旧版 React 通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止。
而Fiber实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。

Fiber Reconciler 在执行过程中，会分为 2 个阶段：
1. 阶段一，生成 Fiber 树（链表），得出需要更新的节点信息存放在effectList中。这一步是一个渐进的过程，可以被打断。
阶段一可被打断的特性，让优先级更高的任务先执行，从框架层面大大降低了页面掉帧的概率。
2. 阶段二，将需要更新的节点一次过批量更新，这个过程不能被打断。

注意Fiber Reconciler每执行一段时间，都会将控制权交回给浏览器，可以分段执行，这时候需要一个调度器（Scheduler）来进行任务分配
```

### react-redux 的原理，是怎么跟 react 关联起来的
```
为什么需要redux: react的state数据总是单向从顶层向下分发的。

react-redux 最重要的两个方法就是Provider和connect。
Provider把redux的相关store、reducer注册到App里面，实现store的全局访问。
connect这个高阶函数连接容器组件和UI组件，通过mapStateToProps从Redux状态树中提取需要的部分作为props传递给当前的组件。
mapDispatchToProps将需要绑定的响应事件（action）作为props传递到组件上。
-----------------------------------------------------
Redux将React组件分为容器型组件和展示型组件
容器型组件--> 一般通过connect函数生成，它订阅了全局状态的变化，通过mapStateToProps函数，可以对全局状态进行过滤
【mapStateToProps 函数指定如何把当前 Redux store state 映射到展示组件的 props 中】
【mapDispatchToProps 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。】

展示型组件--> 不直接从global state获取数据，其数据来源于父组件

把所有的reducers绑在一起用combineReducers。

```

### redux如何做异步处理？怎么才能 Reducer 在异步操作结束后自动执行？中间件（Middleware ）的实现？
```
在 Redux 中同步的表现就是：Action 发出以后，Reducer 立即算出 State。
那么异步的表现就是：Action 发出以后，过一段时间再执行 Reducer。

-- 如何做的异步操作： 用 Redux 处理异步，可以自己写中间件来处理，当然大多数人会选择一些现成的支持异步处理的中间件。比如 redux-thunk 或 redux-promise 。
-- 中间件：所以中间件简单来说，就是对 store.dispatch 方法进行一些改造的函数。
--------------------------------------------------
Redux 提供了一个 applyMiddleware 方法来应用中间件：
这个方法主要就是把所有的中间件组成一个数组，依次执行。也就是说，任何被发送到 store 的 action 现在都会经过thunk，promise，logger 这几个中间件了。

```

### redux-thunk(redux的中间件middleware 处理异步Action)
```
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);// 触发一个action，同时传入dispatch和getState
    }
    return next(action);// 执行下一个中间件
  };
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;

```
### setState是同步的还是异步的？
```
合成事件中是异步(onCLick,onChange)
钩子函数中的是异步(componentDidmount)
原生事件中是同步(addEventListener)
setTimeout中是同步

原因：React在调用事件处理函数之前就会调用这个batchedUpdates，这个函数会把isBatchingUpdates修改为true，这时更新的操作会被放到dirtyComponents 数组中，isBatchingUpdates 默认为 false 时，所有队列中更新执行batchUpdate。

- setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”.

```

### setState机制以及后续逻辑：
```
首先: React 是通过管理状态来实现对组件的管理，即使用 this.state 获取 state，通过 this.setState() 来更新 state，当使用 this.setState() 时，React 会调用 render 方法来重新渲染 UI。
其次: setState存在一个队列机制异步更新，当调用 setState 时，实际上是会执行 enqueueSetState 方法，并会对 partialState 及 _pendingStateQueue 队列进行合并操作，最终通过 enqueueUpdate 执行 state 更新。
而 performUpdateIfNecessary 获取 _pendingElement、 _pendingStateQueue、_pendingForceUpdate，并调用 reactiveComponent 和 updateComponent 来进行组件更新。
```
### react的父子组件的state变化如何影响子组件的？
```
具体是这样的：
setState之后，会把当前的component放到dirtyComponents = [], 在batchUpateTransaction的close阶段，遍历dirtyComponents，对状态发生改变的Component进行update，该Component执行render方法，可以得到renderedElement，然后renderedElement进行递归的update，这样子组件就会re-render，根据当前的props得到新的markup，这样整个虚拟DOM树就进行了更新

```

### react与hook区别 && 比较
[react与hook优缺点](https://zhuanlan.zhihu.com/p/88593858)
```
类（class）是数据和逻辑的封装。 也就是说，组件的状态和操作方法是封装在一起的。如果选择了类的写法，就应该把相关的数据和操作，都写在同一个 class 里面。

函数一般来说，只应该做一件事，就是返回组件的 HTML 代码。 如果你有多个操作，每个操作应该写成一个单独的函数。而且，数据的状态应该与操作方法分离。函数组件的主体只应该用来返回组件的 HTML 代码，所有的其他操作（副效应）都必须通过钩子引入。
```

### new 一个实例化对象的过程，发生了什么
```
 new运算符的执行过程
    新生成一个对象
    链接到原型: obj.__proto__ = Con.prototype
    绑定this: 将这个对象作为构造函数的 this
    返回新对象(如果构造函数有自己 retrun 时，则返回该值)

    function myNew(Con, ...args) {
        let obj = Object.create(Con.prototype)
        let result = Con.apply(obj, args);// 改变this指向
        return typeof obj === 'object' ? result : obj
    }

```
### commonJS 与 ES6 的三大区别？
```
1. commonJS的require是对值的拷贝，会缓存值，ES6模块输出的是值的引用,import模块是动态引用，并且不会缓存值。
2. commonJS的module.exports： 运行时加载因为这个模块是一个对象，ES6是编译时执行，export模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成；
3. CommonJS模块的require：同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。

对于循环引用都是如何处理的？：
commonJS: 执行模块中的代码并缓存执行的结果，当下次再次加载时不会重复执行，而是直接取缓存的结果。
ES6: 不会再去执行重复加载的模块，又由于 ES6 动态输出绑定的特性，能保证 ES6 在任何时候都能获取其它模块当前的最新值。

```

### webpack 工作流程(编译流程)
```
从配置文件和shell语句中读取参数并合并参数，得到一个最终的参数；
根据得到的参数初始化一个全局唯一的complier对象；
加载插件，调用插件的apply方法将实例化的complier对象传入插件；
根据entry找到所有的入口文件，为每一个entry实例化一个entryPlugin，为后续的递归解析做准备；
根据配置初始化resolver,resolver负责在系统文件全局搜索定制文件；
找到entry,针对每个module串行调用配置的loader去翻译文件内容，并递归地找到该文件的所有依赖文件进行处理，直到所有的文件都被处理完成；
用loader翻译完所有的文件后，得到每个module翻译后的内容及其他们的依赖关系；
将编译后的module组合成chunk,并输入到文件系统中。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

```

### 优化webpack配置：
```
* 优化打包速度，noParse属性
* happyPack开启多进程打包
* 优化代码压缩时间（webpack-parallel-ugfily-plugin）
* 抽离第三方模块，避免不必要的打包操作（DllPlugin DllReferencePlugin）
* 配置loader的cache缓存，避免构建时的重复编译
* 优化打包的体积（webpack-bundle-analyzer）

1.  优化打包速度
减小import导入文件的搜索范围，别名(alias)的配置
include exclude也可以减少webpack loader的搜索转换时间
import jq from 'jquery'时配置noParse属性,告诉webpack不必解析，jq这个库是否有依赖其他的包
2. 使用HappyPack开启多进程Loader转换
HappyPack的基本原理是将这部分任务分解到多个子进程中去并行处理，子进程处理完成后把结果发送到主进程中，从而减少总的构建时间
3. 优化代码的压缩时间
webpack-parallel-uglify-plugin 增强代码压缩
4. 抽离第三方模块
将不经常会变更的静态依赖文件elementUi、vue全家桶等等使用webpack内置的DllPlugin DllReferencePlugin进行抽离，避免不必要的打包
5. 配置缓存
构建都会把所有的文件都重复编译一遍，避免这样的操作在支持缓存的loader中配置cache项，不支持缓存的loader使用cache-loader
6. 优化打包文件体积
引入webpack-bundle-analyzer分析打包后的文件
7. Tree-shaking清除代码中无用的部分 通过在启动webpack时追加参数--optimize-minimize来实现
坑点1：目前在webpack4 我们设置mode为production的时候已经自动开启了tree-shaking。但是要想使其生效，生成的代码必须是ES6模块！！！不能使用其它类型的模块如CommonJS之流。
坑点2：使用Babel的话，因为Babel的预案（preset）默认会将任何模块类型都转译成CommonJS类型

解决办法: 在.babelrc文件或在webpack.config.js文件中设置modules： false就好了
// .babelrc
{
  "presets": [
    ["@babel/preset-env",
      {
        "modules": false
      }
    ]
  ]
}

```
### node怎么捕获异常？哪些异常能被捕获到，哪些异常不能被捕获到
```
node中的异常分为系统异常，js异常，throw抛出的异常，断言错误assert模块抛出的。

【可以捕获到的异常】：
同步API-> 所有的 JavaScript 错误和大部分同步API 都用 try / catch 机制处理

异步API->
1. 异步API回调函数的(err)=>{};
2. connection.on('error', (err) => { //EventEmitter 类型对象-> 绑定 error 事件
  console.error(err);// 处理 err
});
3. process.on('uncaughtException', (err) => {
    console.log(err);// 抛出的异常;
})

【不可以捕获到的】 异步回调中的try/catch的异常->因回调函数还没有执行，try / catch 代码已经执行完毕并退出，所以无法捕获错误

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
redux 与 flux作比较：二者的思想比较相近， 数据都是单向流动的
redux 与 Mobx 作比较：

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
url-loader => 对于image图片的转化, url-loader提供了一个limit参数，小于limit字节的文件会被转为DataURl，不小的会转为.jpg的url。

编译：
babel-loader => 将es6的语法转成es5
vue-loader => 
ts-loader

校验：
eslint-loader => 通过 ESLint 检查 JavaScript 代码

```

- plugin: 
```
html-webpack-plugin=>  生成一个默认的html文件。
mini-css-extract-plugin=>  把js中import导入的样式文件代码，打包成一个实际的css文件，结合html-webpack-plugin，在 dist/index.html 中以link插入css文件；默认将js中import的多个css文件，打包时合成一个。

define-plugin=> 定义环境变量
commons-chunk-plugin=> 提取公共代码
uglifyjs-webpack-plugin=> 通过UglifyES压缩ES6代码
（cssnano） + css-minimizer-webpack-plugin-->压缩css代码

```