[金三银四面试题总结](https://juejin.cn/post/7202639428132274234#heading-125)

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
# 4. bind和apply
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
let bound = addToThis.bind(obj, 10, 20);
console.log(bound(30));  // 输出62
```