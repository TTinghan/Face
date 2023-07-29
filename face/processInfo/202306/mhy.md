聊项目
介绍下性能优化都做了什么
了解webpack的动态引入么 如何实现优化的
说下json-form的实现

dom的事件委托
冒泡的事件委托
冒泡和捕获的场景
vue中冒泡和捕获的场景
vue的所有生命周期，每个周期都做了什么事
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
- 都会引起重排和重绘
v-if：这是一种条件渲染，它会根据表达式的真假来插入或移除元素，因此，v-if 会引起重排和重绘。
v-show：不管条件表达式的真假，元素始终都会被渲染到 DOM，只是切换元素的 display CSS 属性从默认到none,当元素从 display: none 更改为其他值，它会被添加到布局中，需要重新计算元素的位置和尺寸，因此会触发重排。

js的EventLoop
说下vue的响应式原理
说下position所有的属性都是什么含义
说下sticky布局有一个属性会阻止他吸附是哪个
说下如何实现响应式布局
