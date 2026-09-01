# 笔试
# H5
### px、em、rem区别和使用场景-》实际项目通常 rem/vw 做布局，字体用 px 固定（防止字体过小/过大）。
1. 单位值 rem--》1rem代表一个单位值默认情况下16px，和px类似 都是单位值
1rem多大 根据html的font-size：npx决定的 ，nrem代表几个npx。
场景：全页面自适应，历史项目中多见。

2. 单位em--》根据他父级的font-size决定的，
ps：父级（如：body）如果没设置大小 ，
       那么就会继承上一级（如：html）的font-size的大小
场景：相对单位，根据父级的字体-size变化而变化。

3. 单位vw vh：将屏幕分成100份 --》一份1vw宽度，1vh高度
场景：无需js动态计算场景，新项目中常见。

4. px：像素单位，px是固定单位，不依赖于字体大小。
场景：不需要完全撑满屏幕场景，固定宽度场景，如：logo、图片等。

### 1px 边框问题的原因是什么？你用过哪些解决方案？
原因：Retina 屏 DPR（设备像素比）为 2 或 3，CSS 1px 实际渲染为 2-3 个物理像素，视觉上偏粗。

方案① transform scaleY：伪元素画线，transform: scaleY(0.5)，最常用。（比例缩小一倍）
方案② @media (-webkit-min-device-pixel-ratio: 2) 配合 0.5px（iOS 支持，Android 不稳定）。
方案③ viewport initial-scale=0.5（会影响整页缩放，不推荐）。
方案④ box-shadow 模拟：box-shadow: 0 1px 0 0 #ccc，不占位。

推荐：伪元素 + scaleY，兼容性最好。

### iOS 底部安全区（Home Indicator）如何适配？
1. meta 标签设置 viewport-fit=cover，允许内容延伸到安全区外。
2. 底部固定元素加 padding-bottom: env(safe-area-inset-bottom)（也可用 constant() 兼容旧版）。
3. CSS 变量方式：--safe-bottom: env(safe-area-inset-bottom, 0px)，方便统一管理。

同理，顶部刘海屏用 safe-area-inset-top。注意不能只加 padding，要给容器本身也设高度兜底。

### H5 页面在 iOS 上输入框被键盘遮挡，如何解决？
iOS 键盘弹起时不会触发 resize，且 window.innerHeight 不变（与 Android 不同）。

常规方案：监听 focusin 事件，延时执行 el.scrollIntoView({ block: 'center' })。
进阶方案：监听 visualViewport.resize（现代 iOS 支持），根据 viewport 高度变化判断键盘状态，动态调整页面 padding-bottom。

还需注意：fixed 定位元素在 iOS 键盘弹起时会错位，可改为 absolute + 外层 overflow 滚动。
### Cookie, localStorage, sessionStorage区别和使用场景
1. Cookie：小字符串，存储在浏览器端，会随请求发送到服务器。
2. localStorage：本地存储，持久化存储，不会随请求发送到服务器。
3. sessionStorage：本地存储，会话级存储，关闭浏览器后清空。

场景：
1. Cookie：登录状态、购物车、用户信息等。
2. localStorage：用户偏好设置、主题选择等。
3. sessionStorage：临时数据，如表单填写、购物车等。

### 本地存储（localStorage）和会话存储（sessionStorage）的区别
1. 本地存储：持久化存储，不会随请求发送到服务器。
2. 会话存储：会话级存储，关闭浏览器后清空。

### 手写防抖和截流，并说明使用场景
// 防抖：在事件触发后，等待一段时间，只执行一次。
// 场景：搜索框输入内容后，等用户停止输入一段时间后再发起搜索请求
function debounce(fn, delay) {
    let timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this,args),delay)
    }
}
const debounceSearch = debounce(search, 500);

//截流：在事件触发后，每个interval只执行一次，等事件触发间隔一段时间后再执行下一次
// 场景：滚动事件，每滚动一次就执行一次，会导致性能问题
function throttle(fn, interval) {
    let lastTime = 0;
    return function(...args){
        const now = Date.now();
        if(now - lastTime > interval) {
            lastTime = now;
            fn.apply(this, args);
        }
    }
}

function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer  = setTimeout(() => fn,apply(this, args), delay);
    }
}
const debounceSearch = debounce(search, 500);

function throttle(fn, interval) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        // 只有超过间隔才执行
        if(now - lastTime > interval) {
            lastTime = now;
            fn.apply(this, args);
        }
    }
}
---------------------------------------------------

### 请说明 CSS 盒模型的两种类型，并写出如何用 CSS 切换它们。
标准盒模型 box-sizing: content-box，width 不含 padding/border；
IE 盒模型 box-sizing: border-box，width 含 padding+border。
实际开发中通常全局设置 * { box-sizing: border-box }。

### 实现一个垂直水平居中的 div，至少写出 3 种方案。
① Flex：父元素 display:flex; align-items:center; justify-content:center；
② Grid：display:grid; place-items:center；
③ 绝对定位：position:absolute; top:50%; left:50%; transform:translate(-50%,-50%)；
④ 绝对定位 + margin auto（已知宽高）。

### BFC 是什么？哪些属性可以触发 BFC？它能解决哪些常见问题？
BFC（块级格式化上下文）是独立渲染区域。
触发方式：overflow≠visible、float≠none、display:flex/grid/inline-block、position:absolute/fixed。
能解决：高度塌陷、margin 合并、浮动元素覆盖文字等问题。

### 请写出以下代码的输出结果并解释原因：
console.log(
    typeof null, 
    typeof undefined, 
    null == undefined, 
    null === undefined)

- 输出：
"object"
"undefined" 
true 
false。

- 原因：
typeof null 原因是历史遗留 bug；
== 做类型转换，null 和 undefined 被视为相等；
=== 严格比较类型，结果为 false。
### 实现一个 deepClone 函数，需处理循环引用。
使用 WeakMap 存储已克隆对象引用以处理循环引用。递归克隆时先查 WeakMap，已存在则直接返回。
需处理 Array、Date、RegExp、Map、Set 等特殊类型。也可用 structuredClone()（现代浏览器原生支持）。

### 实现 Promise.all，当任意一个 rejected 时立即返回错误。
遍历入参数组，对每个元素用 Promise.resolve() 包裹，维护计数器和结果数组。全部 resolve 时 resolve 结果数组；任何一个 reject 时立即 reject。注意保持结果顺序与入参一致。

### 手写防抖（debounce）和节流（throttle）函数。
防抖：每次触发清除上次定时器，延迟后执行。节流：记录上次执行时间，触发时若距上次超过间隔才执行，或用 flag + setTimeout 实现。防抖适合搜索输入，节流适合滚动/resize。

### Vue3 中 ref 和 reactive 的区别是什么？各自适用什么场景？
ref 适合基本类型，访问需 .value，可在模板自动解包；reactive 适合对象/数组，返回 Proxy 代理，直接访问属性。reactive 解构后会失去响应式，需用 toRefs。实际开发中 ref 更通用。

### React Hooks 中，useEffect 的依赖数组为空 []、不传、传具体值，三种情况各有何区别？
空数组 []：只在挂载时执行一次，相当于 componentDidMount；
不传：每次渲染后都执行；
传具体值：依赖变化时执行。清理函数在下次执行前和卸载时调用。

### 从输入 URL 到页面完全展示，浏览器经历了哪些过程？
① DNS 解析 → ② TCP 握手 → ③ HTTPS 协商 → ④ 发送 HTTP 请求 → ⑤ 服务器响应 
→ ⑥ 解析 HTML 构建 DOM → ⑦ 解析 CSS 构建 CSSOM → ⑧ 合并为渲染树 → ⑨ Layout 布局 
→ ⑩ Paint 绘制 → ⑪ Composite 合成。JS 会阻塞 HTML 解析。

### H5页面白屏如何排查
① 看控制台报错
② 网络请求是否失败
③ JS文件加载失败
④ 路由异常
⑤ 打包资源路径问题
⑥ CDN问题
⑦ 性能问题

### H5性能优化
资源层：
图片压缩
CDN
WebP
懒加载

代码层：
路由懒加载
Tree Shaking
防抖节流

渲染层：
减少回流重绘
transform代替top

网络层：
gzip
HTTP缓存

//数组去重
funtion unique(arr) {
    return [...new Set(arr)]
}

function deepClone(obj) {
    if(typeof obj !== "object" || obj == null) {
        return obj;
    }
    let result = Array.isArray(obj) ? [] : {};
    for(let key in obj) {
        result[key] = deepClone(obj[key])
    }
    return result
}
---------------------------------
# 面试

### 请介绍 Vue/React 的虚拟 DOM 和 diff 算法，为什么虚拟 DOM 不一定比直接操作 DOM 快？
虚拟 DOM 是 JS 对象树，diff 通过同层比较（key 优化）减少真实 DOM 操作。但虚拟 DOM 本身有创建和比较开销——当页面简单、更新频率低时，直接 DOM 操作可能更快。虚拟 DOM 的价值在于：跨平台、批量更新、与声明式写法解耦。

### Vue3 的响应式原理和 Vue2 有何不同？Proxy 相比 Object.defineProperty 的优势是什么？
Vue2 用 Object.defineProperty 劫持已有属性，无法检测新增/删除属性和数组索引变更，需 $set。Vue3 用 Proxy 代理整个对象，可拦截任何操作，支持新增属性、数组变化，性能更好，且支持 Map/Set 等集合类型。

### 说说微信小程序的双线程架构，它与 Web 有哪些根本性差异？
小程序分逻辑层（JS Worker）和渲染层（WebView）两个线程，通过 Native 桥通信，互不共享内存。与 Web 的差异：不能直接操作 DOM；通信有延迟；setData 数据量过大会卡顿；没有 window/document 全局对象；生命周期与 Web 组件不同。

### 前端性能优化你会从哪些维度入手？请结合项目经验说明。
加载层：代码分割（懒加载）、Tree Shaking、CDN、图片压缩/WebP/懒加载、HTTP2、缓存策略。渲染层：减少重排重绘、使用 transform 替代 top/left、虚拟列表、骨架屏。运行时：防抖节流、Web Worker、避免内存泄漏。监控：Lighthouse、Core Web Vitals（LCP、CLS、INP）。

### Webpack 和 Vite 的打包原理有何本质区别？开发环境下 Vite 为何更快？
Webpack 启动时全量打包所有依赖；Vite 开发时基于原生 ESM，浏览器按需请求模块，用 esbuild 预构建第三方依赖（Go 实现，比 JS 快10-100倍）。所以 Vite 冷启动几乎瞬间完成，HMR 也只需更新变化模块，与项目规模无关。

### 如何封装一个高复用性的业务组件？设计时需要考虑哪些因素？
① 单一职责，关注点分离；② props 设计合理，提供默认值和类型校验；③ 通过 slot/children 保持灵活性；④ 暴露事件/emit 而非内部状态；⑤ 支持 v-model/受控模式；⑥ 写好 TypeScript 类型和 JSDoc；⑦ 考虑无障碍（a11y）；⑧ 单元测试覆盖核心逻辑。

### 讲一个你主导或深度参与的复杂需求，遇到了什么技术难点，如何解决的？
性能优化

考察重点：问题拆解能力、技术选型思路、跨部门协作、结果量化。建议用 STAR 法则（情境-任务-行动-结果）组织回答，突出"我"的贡献，以数据佐证效果（性能提升 X%、工期缩短 X 天）。





