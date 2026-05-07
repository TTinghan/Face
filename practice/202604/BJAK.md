您的任务：
使用 HTML5、CSS3 和 JavaScript 框架（例如 React、Angular、Vue.js 等）等现代 Web 技术开发面向用户的新功能。
与设计师协作，将 UI/UX 设计线框图转化为高质量代码。
优化应用程序，以实现最佳速度和可扩展性。
确保 UI/UX 设计的技术可行性，并实施响应式设计原则。
参与代码审查，确保代码质量并符合标准。
与后端工程师紧密合作，将前端组件与服务器端逻辑集成。
持续关注新兴技术和行业趋势，不断改进我们的前端开发实践。

任职要求：
计算机科学、工程或相关领域的学士学位（或同等工作经验）。
拥有前端软件工程师或类似职位的工作经验，并具备出色的过往项目作品集。
精通 HTML、CSS 和 JavaScript 等 Web 开发技术。至少熟悉一种现代 JavaScript 框架（React、Angular、Vue.js 等）。
了解 Web 性能优化技术和工具。
熟悉版本控制系统（例如 Git）和 CI/CD 流水线。
具备较强的解决问题能力和注重细节。
优秀的沟通和协作能力。
能够独立工作，也能在团队环境中高效协作。

加分项：

具备响应式设计和移动优先开发经验。
熟悉后端开发技术（Node.js、Python 等）。
了解 Web 安全最佳实践。
具备测试框架（Jest、Mocha、Jasmine 等）的使用经验。
曾为开源项目做出贡献或积极参与开发者社区。
-------------------------------------------------------
# 这道题核心考察的是 JavaScript 事件循环（Event Loop），也就是：
JS是单线程的，Event Loop是js处理异步的调度机制。执行栈清空后，引擎会优先清空microtask队列，再取macrotask的第一个任务执行，如此循环，直到队列清空。
Mictrotask: 
Promise.resolve().then(data => console.log(data)).finally(() => console.log('finally')).catch(err => console.log(err));

Mactrotask:
setTimeout(() => {},0);
setInterval(() => {},0);
I/O事件，UI rendering,MessageChannel



同步任务（主线程）
微任务（Microtask） → Promise.then / catch
宏任务（Macrotask） → setTimeout
# 题目
console.log(1);
Promise.resolve().then(()=>{console.log(2)})
setTimeout(()=>{console.log(3)}, 0); 
console.log(4);
# 什么是闭包，实现带缓存的 AI 请求函数
闭包就是函数嵌套函数，内层函数可以访问外层函数的变量，但是外层函数的变量已经执行完毕后不会被GC回收。
// cache对外不可见，但fetch持有它的引用
function createCacheFetcher() {
    const cache = new Map();
    return async function fetchWithCache(prompt) {
        if(cache.has(prompt)) return cache.get(prompt);
        const res = await callLLMAPI(prompt);
        cache.set(prompt, res);
        return res;
    };
}
# 手写防抖和截流，并说明使用场景
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
            fn.apple(this, args);
        }
    }
}
// 避免UI频繁渲染
const throttleSearch = throttle(scroll, 500);
# Promise.all/allSettled/race/any的区别
// Promise.all：全部成功才resolve，任意reject立即reject,返回一个数组，数组元素是每个Promise的resolve值。
全部成功进入then,有一个失败进入catch(要么全成，要么全挂)
// Promise.allSettled：全部结束才resolve，返回一个数组，包含每个的状态和值的原因，数组元素是每个Promise的状态对象。
不会中断，一定等所有promise结束，返回每个promise的状态（全都要结果）
// Promise.race：第一个完成（不论resolve还是reject）就结束，适合超时控制场景。
// Promise.any：第一个成功就resolve，全部失败才reject。
# TypeScript
1. 【interface】:可以被extends继承，也可以被implements实现,支持声明合并（同名interface自动merge）,定义对象结构时优先用。
2. 【type】:支持联合类型A|B、交叉类型A&B。
any:任意类型，可以赋值给任何类型，也可以从任何类型赋值。关闭类型检查，逃逸仓，尽量避免使用。
3. 【unknown】:未知类型，只能赋值给any类型，不能从any类型赋值。用于在运行时进行类型断言检查。属于安全类型的any,必须收窄（typeof/intanceof）后才能使用。API的返回值应使用unknown接收再校验。
4. 【never】:永不存在的类型，只能赋值给any类型，不能从any类型赋值。用于表示函数抛出错误或 never 循环。不可能存在的类型。用于穷举的switch,或者标记用不返回的函数（如抛出错误的工具函数）
# 解释Generics泛型 <T>
1. Generics泛型是Typescript的一种类型，用于在定义函数、类、接口等时，指定参数的类型，而不是具体的实现。
泛型让函数、类或接口在定义时不指定具体类型，调用时再传入，实现类型复用。
例如：
async function apiRequest<T>(url: string):Promise<T> {
    const res = await fetch(url);
    if(!res.ok) throw new Error('API error');
    return res.json() as T;
}
// 调用时可以传入任意类型的参数，返回值也是该类型的。
interface QuoteResult {
    id: number; 
    name: string; 
    age: number;
}
const quote = await apiRequest<QuoteResult>('/api/quotes/car');
console.log(quote);
2. 高级用法： T extends keyof U 约束泛型，只能是U的属性名。
Partial<T>、Pick<T,K>、Omit<T,K>等工具类型都是基于泛型实现的。
-----------------------------------------------
# React框架知识
1. useLayoutEffect 是同步的，useEffect 是异步的
useEffect / useLayoutEffect 👉 对应生命周期（mount / update / unmount）
2. useLayoutEffect：DOM 更新后，浏览器绘制前
3. useEffect：浏览器绘制后
4. useEffect(() => {
  console.log("run");
},[]);
依赖是空数组代表什么含义？（第二个参数叫 依赖数组（dependency array））
表示这个 effect 只在“组件首次挂载（mount）时执行一次”，React 会“对比依赖是否变化”来决定要不要重新执行 effect。
5. useEffect(() => {
  console.log("run");
});不写依赖数组，怎么执行？
- 每次 render 都执行
6. 有依赖数组
useEffect(() => {
  console.log("count changed");
}, [count]);
- 依赖数组是 [count]，表示这个 effect 只会在 count 变化时执行。
7. useRef 本质上是 React 在 Fiber 上挂的一个稳定对象，用来在多次 render 之间保持可变数据，它不参与渲染，也不属于生命周期。
8. useMemo 用于缓存计算结果，避免重复执行昂贵逻辑。
# 总结
useState：管理组件状态
useEffect：处理副作用（请求 / 订阅 / 定时器）
useLayoutEffect：同步副作用（DOM测量/布局）
useRef：保存引用 & 跨 render 持久变量
useMemo：缓存计算结果
useCallback：缓存函数引用
# 状态管理
客户端全局管理状态：用Jotai(原子化)
服务器状态管理：React Query(自动refecth刷新)
# Next.js SSR/CSR 适用场景
SSR：内容依赖请求（用户身份、实时报价）。getServerSideProps每次请求服务端渲染，SEO友好。｜｜首屏加载快，适合内容丰富的页面。
CSR：纯交互页面（AI聊天助手、用户仪表盘），SEO不重要时，减少服务器负担。｜｜交互快，适合内容简单的页面。
-----------------------------------------------
# 性能优化
1. 如何优化一个加载很慢的页面？
【网络层：】
- 启用HTTP/2多路复用，合并API请求（GraphQL批量查询）
- CDN+Edge Caching:静态资源+ISR页面推到离用户最近的节点
- API响应开启Brotli压缩（比gzip快15-20%）
【JS包体积：】
- next/dynamic 懒加载非首屏组件
- Tree shaking 确保只import需要的lodash函数（用lodash-es）
- 用@next/bundle-analyzer可视化分析大包
【渲染性能：】
- 报价卡片列表用react-virtual(虚拟滚动)，只渲染可是区域内的保险卡片。
- 图片用next/image 自动webP+lazy load+srcset
- 关键CSS内联，非关键CSS defer
## 总结：衡量指标用LightHouse/Chrome DevTools测LCP(目标<2.5s)、INP(<200ms)、CLS(<0.1s)。部署后介入Vercel Analytics 或者Web Vitals API采集真实用户数据

2. 核心页面指标有哪些？都是如何测量和改善的？
- LCP(Largest Contentful Paint): 最大内容绘制。目标<2.5s。优化预加载首屏图片<link rel='peload'>,服务端渲染关键内容，减少TTFB。
- INP(Interaction to Next Paint): 用户交互到下一个绘制的延迟。目标<200ms。优化长任务用scheduler.yield()切片，减少主线程阻塞。
- CLS(Cumulative Layout Shift): 累计布局偏移。目标<0.1s。优化给图片、广告位、骨架屏设置固定宽高，避免内容插入导致布局跳动。
## 测量工具：本地使用Chrome DevTools Performance面板+LightHouse;线上使用web-vitals npm包采集并上报到GA4或自建监控。

3. 如何处理并发AI/API请求的缓存与性能策略？
React Query的缓存策略：
- staleTime: 数据在多久内视为新鲜，不再触发后台refetch。报价数据可设5分钟
- gcTime(原cacheTime):unmount后缓存数据在内存中保留多久。
- queryKey设计：['quotes',vehicleType,plateNo]精确缓存，参数变化自动失效。









