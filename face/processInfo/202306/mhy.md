聊项目
# 介绍下性能优化都做了什么
# 了解webpack的动态引入么 如何实现优化的
# 说下json-form的实现

# dom的事件委托
# 冒泡和捕获的场景
# 冒泡的事件委托
# vue中冒泡和捕获的场景
# vue的所有生命周期，每个周期都做了什么事
# vue中如何禁止冒泡
使用修饰符 .stop 来阻止事件冒泡
```
<button @click.stop="handleClick">点击按钮</button>

```
# css的display:none和visibility:hidden
```
.parent {
  background-color: red;
  width: 200px;
  height: 500px;
/*   display: none; */ -》这样设置，子元素不展示
  visibility: hidden; -》这样设置，子元素展示
  .child {
    background-color: green;
    visibility: visible;
  }
}
```
设置了visibility:hidden的dom可以触发onclick么？
```
// 可以，但是不能通过鼠标触发
let parentElement = document.querySelector('.parent');
parentElement.click();

```
# vue的v-if和v-show哪个会触发重排重绘？
v-if：它涉及到 DOM 的添加和移除，它会根据表达式的真假来插入或移除元素，因此，v-if 会引起重排和重绘。
v-show：不管条件表达式的真假，是通过 CSS 的 display 属性来控制元素的显示和隐藏。元素始终在 DOM 中存在，只是切换元素的 display CSS 属性从默认到none,当条件从 false 变为 true 时，不会触发重排，只是改变了 display 属性。但是，v-show 在条件从 true 变为 false 时，仍然会触发重排。

# js的EventLoop


宏任务（Macro Task）： 通常来自浏览器环境的任务，例如 setTimeout、setInterval、requestAnimationFrame、I/O 操作等。
微任务（Micro Task）： 通常来自 JavaScript 引擎的任务，例如 Promise 的 then 方法、MutationObserver 等。
# 说下vue的响应式原理
# 说下position所有的属性都是什么含义
# 说下sticky布局有一个属性会阻止他吸附是哪个
父元素的 overflow 属性的值为 hidden、scroll、auto 或 overlay 时，可能会阻止 position: sticky;
# 说下如何实现响应式布局
