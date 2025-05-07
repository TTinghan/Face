# 简历相关
## react的hook和fiber解决了什么问题
- React Hook 是 React 16.8 中引入的一项功能，旨在解决类组件和函数组件中的一些痛点，使代码更加简洁、可复用和逻辑清晰。
直接在函数组件中使用状态（useState）、副作用（useEffect）等，通过 useEffect 将副作用逻辑集中在一个地方，增强代码可读性。
- React Fiber 是 React 16 中重写的协调引擎，目的是优化 UI 渲染的性能和响应性。
同步渲染导致的卡顿问题
## usecallback和usememo

requestanimationframe和settimeout区别
store更新了为什么组件重新渲染（redux用了什么设计思想）
实现数组扁平化
柯里化
括号匹配说做过了换了一道dp


# 基础知识 [https:// javascript.info](https://javascript.info/)
- 主要技术栈是什么
 vue
- 宏任务 微任务
- 讲讲事件循环机制
- promise的理解，特征和常用api
- promise的链式调用是如何支持的
- jquery的链式调用时如何实现的
- .then,.catch,.finally有什么区别
- .then和.catch在捕获异常上有什么区别
- 除了做异步请求中，除了使用promise，还能用什么
- async/await于promise的区别
- 实际代码执行上有什么差异
- js为什么会有任务调度机制
- js为什么是单线程
- Java支持单线程是怎么处理的


- 现在的最新的es版本是哪个版本
- 说一下你认为es更新的最有意思的部分 说了异步
- 说一下Promise
- fetch如果不返回promise怎么捕获错误
- 说一下数组的api
- 哪些会返回新数组哪些只修改原数组
- 手写：用reduce完成一个map
```
function mapUsingReduce(list, cbk) {
    return list.reduce((result, current, index, arr) => {
        result.push(cbk(current, index, arr));
        return result;
    }, []);
}
let list = [1, 2, 3, 4, 5];
let result = mapUsingReduce(list, (item) => item * 2);
console.log(result);

```
- 手写：用reduce完成一个filter
```
function filterUsingReduce(list, cbk){
    return list.reduce((result, current, index, arr) => {
        if(cbk(current, index, arr)){
            result.push(current);
        }
        return result;
    }, []); // 初始值为一个空数组
}
let list = [1, 2, 3, 4, 5];
let result = filterUsingReduce(list, item => item % 2 === 0);
console.log(result);

```




- 说一下vite和webpack
- vite打开页面为什么会有点慢，是因为什么
- 按需加载会出现什么问题导致打开页面速度慢
- http1.1和http2的区别
- http1.1限制了一个域名最多发几个请求
- 讲一下jwt，不是库方法，而是token的构成
- 数据库三范式
- 手写：列表转树
- 线程与进程
- 死锁
- flex布局和grid布局
- 盒子模型，想听更深层次的
- z-index怎么理解
- 如果子元素距离根元素距离不一样，z-index也不一样，怎么判断他们的优先级