# 首屏优化指标怎么计算：
fmp首屏指标：起点用：navigationStart, 终点：在主要接口响应并渲染完成之后上报sdk
测量页面的完整加载时间 : PerformanceTiming 接口中的 navigationStart - loadEventEnd 属性

# 浏览器的缓存（协商缓存和强缓存）

# vue的双向数据绑定原理
当属性变化会执行主题对象Observer的dep.notify方法
这个方法会遍历订阅者的Watcher列表向其发送消息
Watcher会执行run方法去更新视图

模版编译过程中的指令和数据绑定都会生成Watcher实例
实例中的watch属性也会生成Watcher实例

# vue的nextTik是如何实现的

# 说下keep-alive组件

# Event Loop
在浏览器环境中：
常见的 macro task 有 setTimeout、MessageChannel、postMessage、setImmediate；
常见的 micro task 有 MutationObsever 和 Promise.then


# vue组件是如何传值的？
- 父-》子
父组件在标签中使用属性绑定
子组件用props进行接收

- 子-》父
父组件中定一个函数@eventName="handleEventName"
handleEventName(message){
  this.message = message
}
子组件使用$emit('eventName', 'hello parent!');

- 子->父
父组件在标签中绑定一个值
<ApplyPermissionDialog
  :visible.sync="applyPermissionDialogVisible"
></ApplyPermissionDialog>
或者
<ApplyPermissionDialog
  v-model:visible="applyPermissionDialogVisible"
></ApplyPermissionDialog>
子组件更新值：
$emit('update:visible', false);

vue3区别：
emit不是this.$emit 而是setup中的content.emit

# requestAnimationFrame 是在什么时候用的？
动画流畅
# 像素区别和用法 px rem em vw vh
# vue2和vue3的区别
# vue更新的diff算法
