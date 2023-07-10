# feizhu
- 排序算法复杂度（快速排序非递归实现）

- ES6对象合并

- 深拷贝详细介绍

- JSON的parse有几个参数
两个参数JSON.parse(text,()=>{})

- JSON的stringfy有几个参数
三个参数JSON.stringfy(value, replacer, space)

- 水平居中和垂直居中，不定宽和定宽

- html5你理解哪些
新增标签<header><footer><main><nav><section><article><aside>
input新增tel data number rang email
canvas
audio\vidio
本地存储：localStrage,sessionStrage
web Workers:postMessage
增强css3的支持

- localStorage session存储、会话相关 强弱缓存

- css3新特性
:hover :focus
box-sizing: border-box
阴影
transform\translate\box-shadow
border-radius
flex布局
渐变linear-gradient
@font-face
@media媒体查询

- vue双向绑定原理
vue2.0版本
Vue.js的双向数据绑定就是用【数据劫持】结合【发布订阅模式】的方式，通过Object.defineProperty，劫持整个对象，然后进行深度遍历所有属性，给每个属性添加`getter`和`setter`，在数据变动时发布消息给订阅者，触发相应的监听回调。这样就实现了模型和视图的双向绑定，实现响应式。

vue3.0版本
Proxy劫持对象的各种操作，包括属性的读取、设置、删除等，并且对数组也有很好的支持。
当渲染组件时，触发Proxy对象的getter方法，此时把依赖（Watcher）收集起来。每个依赖都与一个数据属性和组件实例相关联；
当数据变化时，会触发Proxy对象的setter方法，此时就可以通知之前收集的依赖进行更新
```

const proxy = new Proxy(data, {
    // 拦截读取属性值
    get (target, prop) {
        return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
        return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
        return Reflect.deleteProperty(target, prop)
    }
})

proxy.name = 'tom'   ![]

```

- 手写防抖截流 及其应用场景
（搜索框输入/窗口大小调整）debounce: 要最后一次的请求, 只有事件停止触发一段时间后才真正去执行一次
（页面滚动/鼠标移动）throttle: 要第一次的请求, 限制函数的执行频率，例如每秒钟最多执行一次


- SPA首屏优化方式

减小入口文件积
静态资源本地缓存
UI框架按需加载
图片资源的压缩
组件重复打包
开启GZip压缩
使用SSR

- js 中现在比较成熟的有四种模块加载方案：
​
*   第一种是 CommonJS 方案，它通过 require 来引入模块，通过 module.exports 定义模块的输出接口。这种模块加载方案是服务器端的解决方案，它是以同步的方式来引入模块的，因为在服务端文件都存储在本地磁盘，所以读取非常快，所以以同步的方式加载没有问题。但如果是在浏览器端，由于模块的加载是使用网络请求，因此使用异步加载的方式更加合适。
*   第二种是 AMD 方案，这种方案采用异步加载的方式来加载模块，模块的加载不影响后面语句的执行，所有依赖这个模块的语句都定义在一个回调函数里，等到加载完成后再执行回调函数。require.js 实现了 AMD 规范。
*   第三种是 CMD 方案，这种方案和 AMD 方案都是为了解决异步模块加载的问题，sea.js 实现了 CMD 规范。它和 require.js 的区别在于模块定义时对依赖的处理不同和对依赖模块的执行时机的处理不同。
*   第四种方案是 ES6 提出的方案，使用 import 和 export 的形式来导入导出模块。

- AMD和CMD区别

1.  第一个方面是在模块定义时对依赖的处理不同。AMD 推崇依赖前置，在定义模块的时候就要声明其依赖的模块。而 CMD 推崇就近依赖，只有在用到某个模块的时候再去 require。
2.  第二个方面是对依赖模块的执行时机处理不同。首先 AMD 和 CMD 对于模块的加载方式都是异步加载，不过它们的区别在于 模块的执行时机，AMD 在依赖模块加载完成后就直接执行依赖模块，依赖模块的执行顺序和我们书写的顺序不一定一致。而 CMD 在依赖模块加载完成后并不执行，只是下载而已，等到所有的依赖模块都加载好后，进入回调函数逻辑，遇到 require 语句 的时候才执行对应的模块，这样模块的执行顺序就和我们书写的顺序保持一致了。


