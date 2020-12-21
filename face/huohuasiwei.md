## 火花思维
### 一面
1. js的异步实现有哪些
2. 改变this指向有几种办法
3. promise的实例化实现一个3s之后执行成功的方法
    // 3s之后执行成功
     let futurePromise = new Promise((resolve, reject)=>{
          setTimeout((value)=>{
              resolve(value);
          }, 3000)
      })
      futurePromise.then(()=>{
          console.log('执行成功');
      },()=>{
          console.log('执行失败');
      })
4. 手动实现一个bind
// 实现一个bind
function bind(param) {
    
}
5. promise的常用api 手写一个promise的思路
6. 数组实现队列（先进先出）、栈（先进后出）
7. js的继承 手写
```
最优化: 圣杯模式
var inherit = (function(c,p){
	var F = function(){};
	return function(c,p){
		F.prototype = p.prototype;
		c.prototype = new F();
		c.uber = p.prototype;
		c.prototype.constructor = c;
	}
})();

```
8. 对于react虚拟dom的理解
9. 说一下react的diff算法
10. react和redux是怎样进行数据联系的 为什么数据变化能触发页面的重新渲染？
11. connect这个高阶组件的意义？是负责做什么的，怎样拿到redux数据的
```
redux解决的是这个问题 跨组件通信，多组件共享状态
Flux/Redux都是状态管理工具

Redux 的设计是以几个原则为优先的：要让状态的变化可追踪，可重复，可维护。为了达成这个目的，
才会有 reducer, action, action creator, middleware 这些概念

```
12. 用过哪些react的高阶组件
13. react父子组件的生命周期，以及更新操作是怎样实现的
14. react-hooks常用的api 以及对于useEffec的挂载卸载机制的了解
15. 对于解决跨域问题有哪些办法
16. webpack的构建用过哪些
17. 实现jsonp
```
function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}
jsonp('http://xxx', 'callback', function(value) {
  console.log(value)
})

```

