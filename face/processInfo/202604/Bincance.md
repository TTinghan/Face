一面（主要是用React和Claude code） REACT AI部门
- 使用cursor和claude code去完成了什么事情？
- AI辅助开发能具体讲讲你的的workflow工作流么？
“我的AI工作流包括五个步骤：首先用自然语言描述需求，比如‘写一个Python函数检查日期格式’；Cursor生成代码后，我会审查逻辑是否正确，比如边界条件；然后手动调整，最后写单元测试。痛点：有时生成代码忽略上下文，比如重复定义变量，我会通过代码审查和测试发现并修正。”

- 有没有在使用过程中遇到过一些什么问题？你是怎么解决的？
- 说一下页面的性能优化
- 首屏加载问题，主要是针对什么指标来做的？这些指标都代表什么含义？
- service worker 在首屏里体现的是什么？
“service worker 可以缓存静态资源，提高首屏加载速度，减少对服务器的请求次数。”
“我们通过Service Worker缓存静态资源，采用Cache First策略，并在安装阶段预缓存关键文件。遇到的主要坑是缓存更新问题，通过版本号管理和activate事件清理旧缓存解决。”

- 浏览器的一个渲染流程是怎样？加载的链路是怎样的？
“浏览器渲染流程包括HTML解析、CSS解析、JS执行、DOM树构建、布局和绘制等阶段。加载链路则包括DNS查询、TCP连接、HTTP请求、响应解析等过程。”

- 优化性能加载的过程中，你还会关注到什么过程？除了LCP和FCP指标以外，还要关注其他什么指标来进行性能优化？
“除了LCP和FCP指标，还可以关注其他指标，如TTFB（首字节时间）、TTI（交互时间）、FCP（首次内容绘制）等。这些指标可以帮助我们了解页面加载性能，及时发现并解决性能问题。”
- 说一下Fiber解决了什么问题？
“Fiber解决了React 15的阻塞渲染问题，通过异步渲染和批量更新，提高了页面的响应性和性能。”
- 说一下React的diff算法
“React的diff算法包括：树状结构的diff（DOM树的对比）、属性的diff（组件的props对比）、子组件的diff（子组件的对比）。React会根据这些diff，只更新需要更新的DOM节点，而不是整个页面。”
- 说一下React的渲染流程浏览器都做了什么？
“React渲染流程包括：组件挂载、状态更新、props更新、组件重新渲染、DOM更新等。浏览器会根据组件的渲染结果，更新页面的DOM树，实现页面的动态交互。”

- 如果一个用户点击页面，没有反应，那么如何排查问题？说一下思路
`
用户点击
→ 浏览器事件系统
→ JS 执行（事件回调）
→ React 更新（状态/调度）
→ 渲染（Re-render / Diff）
→ 浏览器绘制（Layout / Paint）`
1. 事件层有没有触发？Chrome DevTools → Event Listeners 查看是否有点击事件触发。
2. JS 执行是否存在阻塞？Chrome DevTools → Performance 查看是否有JS执行记录。-》解决：Web Worker，useMemo / 分片计算，requestIdleCallback
3. React 层渲染调度问题：Chrome DevTools → React DevTools查看是否有组件更新。
4. 渲染层浏览器有没有卡住？Chrome DevTools → Performance 查看是否有渲染记录。解决：Chrome Performance 面板，FPS / Rendering
5. 浏览器绘制有没有触发？Chrome DevTools → Performance 查看是否有绘制记录。

“用户点击无响应的问题可以从事件、JavaScript执行、React渲染和浏览器渲染四个层面排查：
首先确认事件是否正确触发，其次检查是否存在主线程阻塞导致事件无法及时响应；然后从 React 层分析是否存在 state 未更新、闭包问题或组件未重新渲染；最后检查浏览器渲染阶段是否存在重排或大量 DOM 操作导致卡顿。同时如果涉及接口请求，还需要考虑网络延迟问题。实际排查中我会结合 Chrome Performance 和 React DevTools，定位是 JS 阻塞还是渲染问题”

- 说一下useState和useLayoutEffect的区别？
useEffect 在浏览器绘制后异步执行；useLayoutEffect 在浏览器绘制前同步执行；
- useRef和useLayoutEffect区别
useRef 是用来存值/访问DOM的，本身不涉及执行时机。useRef的变更React感知不到，如果用它存需要反映到UI的状态，页面就永远不会更新。
useLayoutEffect 是用来在绘制前同步执行副作用的，本身不涉及存值。
- useRef是如何解决闭包内旧值不变的问题的？
useRef 可以解决闭包内旧值不变的问题，因为它是一个可变的引用，不会被React的重新渲染机制所影响。
- Coding
写一下deepClone函数，实现深拷贝