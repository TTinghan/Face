## 1. React 原理
- React Fiber 架构解决了什么问题？为什么需要它
### 追问
- diff 是同步还是异步？
- React 18 并发特性是什么？
- 如何中断渲染？

## 2. TypeScript 深水区
- 请你实现一个类型：从对象中取出值类型为 string 的 key
期望你写出类似
`type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]`
### 追问
- extends 在 TS 中是啥？
- 分布式条件类型原理？

## 3. 状态管理
- 为什么选择 Jotai 而不是 Redux？
### 追问
- 原子化状态的优势是什么？
- 如何避免不必要渲染？

## 4. 工程化和架构
- Webpack / Vite 原理？
- Vite 为什么比 Webpack 快？
你必须讲到：
    ES Module
    按需加载
    dev vs build 区别

## 5. 微前端
- 如果让你设计一个微前端架构（SSR场景），你会怎么做？
### 追问
- 子应用如何共享状态？
- 如何避免 CSS 污染？
- 如何做路由隔离？


## 6. SSR 架构设计
- 在自定义 SSR 架构下，如何解决以下问题：
    - 数据预取（Data Fetching）
    - SEO
    - 首屏性能
加分回答：
hydration
streaming SSR（React 18）

## 7. 性能优化（Bitget核心）——高并发页面优化：
- 交易页面（实时价格变化）如何优化性能？
你应该覆盖：
    - WebSocket
    - 虚拟列表
    - 防抖节流
    - 状态分片

## 8. 浏览器原理
- 从输入 URL 到页面渲染发生了什么？
DNS
TCP / HTTPS
渲染流程（关键！）

## 9. 前端安全（XSS / CSRF）
- 什么是XSS攻击？如何防止 XSS？
标准答案必须包含：
转义
CSP
DOMPurify

### Web3 / 钱包安全：
- 如果你做一个钱包前端，如何防止私钥泄露？
面试官想听：
    不存本地明文
    硬件钱包 / 签名隔离
    iframe 沙箱

## 10. Serverless & 云
- Cloudflare Workers 和传统 Node 服务有什么区别？
必须讲：
    - 边缘计算（Edge）
    - 冷启动
    - 无服务器架构

## 11. 高并发设计
- 如何设计一个高可用 API（前端角度）？
你可以说：
    限流
    重试机制
    降级策略

## 12. 系统设计（SDK设计）!!!!!!
- 如何设计一个前端 SDK？
必须讲：
    可扩展性
    版本控制
    错误监控

## 13. 国际化系统
- 如何设计一个国际化（i18n）架构？
加分点：
    动态加载语言包
    多站点复用

## 14.AI（新趋势必问）!!!!!!
你如何用 AI 提升前端开发效率？
可以答：
    Copilot / ChatGPT
    自动生成组件
    自动测试

## 15.终极！ 如果让你设计 Bitget 的“合规墙系统前端架构”，你会怎么做？
回答：
1. 微前端拆分（不同地区）
2. SSR 提升首屏
3. i18n 国际化
4. SDK 抽象业务逻辑
5. 权限控制（合规核心）
6. 安全隔离（iframe / sandbox）





