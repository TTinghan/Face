- 全局引入依赖和_.set引入依赖是如何实现减少打包体积的，底层了解么？
- dynamic import: () => import('./lazy-module') 是如何实现的？
- 如果lazy-module里面有函数需要返回一个结果，这时export是如何导出这个结果的？
- 如果你设计一个组件库，你考虑实现不同版本的引入，会让打包体积不同？
- 如何实现的json-form组件，说一下实现细节？
# vue中的watch 和 get 区别
watch 是对某个特定的值做出反应，非常适合在数据变化时【执行异步操作】或者【较大开销操作】；
get 方法来计算一个值，并根据依赖关系缓存该值。当依赖项变化时，get 会重新计算这个值。

总结：watch 是在数据变化时执行特定的操作，而 get 则是用于计算和缓存一个值。

# vue的生命周期熟悉哪些？
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destroyed

# v-if和v-show区别
v-if：是真正的条件渲染，该元素及其所有的子节点会被完全销毁并从 DOM 中移除，它保证了在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-show：无论初始条件是什么，元素始终会被渲染，并始终保持在 DOM 中，css的display:none

总结：需要频繁切换元素的可见性，v-show，它不涉及到 DOM 的销毁与重建操作，性能上更高，如果元素可能永远不需要被渲染出来，那么 v-if 是更好的选择，因为它不会占用初始化渲染的性能。


# react Hook都用过哪些钩子？
useState--声明一个state
useEffect--副作用


- call和apply的区别？
- forEach是如何中断的？
JavaScript 的 forEach 方法不能被“中断”。forEach 函数会遍历整个数组，无论你做什么都无法跳出循环或者返回（除了抛出一个错误）
- js中0.1+0.2=0.3么？0.2+0.3=0.5么？ 为什么？
因为二进制浮点数
- 浏览器的冒泡捕获说一下，有哪些事件不会冒泡捕获？
- ts中的const和let

TypeScript 为 const 添加了额外的静态类型检查。在 TypeScript 中，如果你试图改变 const 变量的值，你会在编译时得到一个错误，而不仅仅是在运行时。

var 在编译阶段就被提升了，不管在哪里声明，都可以提升到作用域的顶部。
let 和 const 只会在声明它们的代码块内被提升
let的值可更改，const声明的是常量
let 和 const 都有块级作用域

- ts中的范型用过么？
type prople <T> {
  name:T
}