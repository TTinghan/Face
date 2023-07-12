[金三银四面试题总结](https://juejin.cn/post/7202639428132274234#heading-125)
[js基础](www.javascript.info)
[node相关](https://github.com/samerbuna/efficient-node)
[Promise底层逻辑介绍](https://mattgreer.dev/articles/promises-in-wicked-detail/)

# 1. px、em、rem区别和使用场景
# 2. 什么是回流（重排）、重绘？区别？
回流（reflow）: render tree中的一部分（或者全部）因为元素的规模尺寸、布局、隐藏等改变时而需要重新构建；
- 修改元素的尺寸（宽度、高度）
- 修改元素的位置（top、left）
- 修改元素的内容（文字、图片）
- 修改元素的字体大小
- 改变浏览器窗口大小
重绘（repaint）:render tree中的一些元素需要更新属性，这些属性只影响外观、风格，不影响布局，例如颜色的改变。

重排一定会导致重绘
重排性能开销更大
# 3. position 跟 display、overflow、float 这些特性相互叠加后会怎么样
# 4. bind和apply、call
都是为了改变函数的this指向
用法区别在于：
apply() 方法调用一个具有给定 this 值的函数，并以一个数组（或类数组对象）的形式提供参数。

```
// 用法
console.log(addToThis.apply(obj, [10, 20, 30]));  // 输出62
```
bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。

```
// 用法
function addToThis(a, b) {
  return this.x + this.y;
}
let bound = addToThis.bind(obj, 10, 20);
console.log(bound(30));  // 输出62
```

# 5. vue的keep-alive组件使用方法和作用
<keep-alive> 组件是一个用于缓存组件的特殊组件。它的作用是将动态组件进行缓存，以避免重复渲染和销毁。
```
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```
1)缓存组件：当组件被切换时，<keep-alive> 组件会将之前渲染过的组件实例保存起来，而不是销毁它们。
2)activated 和 deactivated 钩子：被 <keep-alive> 缓存的组件在切换时会触发 activated 和 deactivated 钩子函数，可以在这两个钩子中执行特定的操作，比如刷新数据、发送请求等。
3)include 和 exclude 属性：<keep-alive> 组件提供了 include 和 exclude 属性，用于指定哪些组件需要被缓存或排除在缓存之外。
4)max 属性：<keep-alive> 组件还提供了 max 属性，用于限制缓存的组件数量。当缓存的组件数量超过指定的最大值时，最早的组件实例将被销毁。

# 6.什么是CDN及其工作原理

目的：CDN是内容分发网络的简称，为了将网站或者其他在线内容的副本放在离用户更近的地方，从而使用户更快的访问到这些内容。
CDN工作原理：
1 用户在浏览器中输入一个网站的URL，请求会被发送到CDN的网络。
2 CDN会选择最接近用户的服务器来提供服务。这个选择基于用户的地理位置、服务器的负载情况、网络条件等因素。
3 所选的服务器会检查请求的内容是否在其本地缓存中。如果是，它就直接返回内容给用户。如果不是，它会从原始服务器或其他CDN服务器获取内容，然后返回给用户。

