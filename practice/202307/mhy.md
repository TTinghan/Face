# 说说浏览器缓存，如果命中强缓存返回的状态码是多少
浏览器在第一次请求资源时会将一些资源存储在本地的缓存中
然后在后续的请求中，如果该资源未过期，浏览器可以从本地获取资源
而无需重新下载，使用浏览器可以提高性能的主要原因是：
1. 减少了网络请求（下载资源避免不了网络传输，而网络传输输出的时间和延迟是无法避免的，这样浏览器可以避免下载重复同一资源）
2. 减少了服务器的负载（浏览器直接从本地获取资源时，服务器无需再次处理该请求，从而减轻负担）
3. 减少页面加载时间（无需重新下载资源，浏览器加载时间更快）

如何通过浏览器提高性能呢？
1. 设置资源的缓存的过期时间（服务器可以通过设置缓存过期时间来控制浏览器缓存的使用，资源过期，浏览器会重新从服务器下载资源）
2. 使用版本号和哈希值更新资源（需要更新新资源时，服务器可以通过更改版本号或哈希值来强制浏览器重新下载资源）
3. 缓存控制头（Expires/Cache-control/Last-Modify/ETag）
4. 优化资源大小（可以加快资源下载时间，从而提高页面加载速度）（图片压缩/删除不必要的注释和空格等方式）
5. 使用cdn，将资源放置在全球的节点上，加快请求的速度

```
补充：当 HTML 解析器找到一个<script>标签时，它会暂停 HTML 文档的解析，并且必须加载、解析和执行 JavaScript 代码完毕.

preload/prefecth: 主线程可以在解析构建DOM的过程中找到它们时一一请求，但为了加快速度，“预加载扫描器”是并发运行的。如果 HTML 文档中有类似的东西<img>，<link>预加载扫描器会查看 HTML 解析器生成的令牌，并向浏览器进程中的网络线程发送请求.
```
# 静态资源能判断CDN缓存么？
# http缓存响应头
# ssg
# webpack打包流程，原理
# webpack工作流程
# babel原理
# Flex: 1 代表什么意思
# Object.prototype.toString.call()
当我们使用 Object.prototype.toString.call(someObject) 时，我们实际上是在调用 Object.prototype.toString 函数，并将 this 值设置为 someObject。换句话说，我们是在询问：“如果我将 someObject 视为 Object 对象，并调用其 toString 方法，它会返回什么？”

JavaScript 中的所有对象都有一个内部属性 [[Class]]，它是 ECMAScript 规范定义的，但我们不能直接访问它。当我们调用 Object.prototype.toString 方法时，它会返回一个字符串，格式是 "[object " + [[Class]] + "]"。因此，这个方法能返回很多不同的值，比如 "[object Array]"、"[object Function]"、"[object RegExp]"、"[object Date]" 

对于[object 自定义类型]自定义的类型要使用Symbol.toStringTag
```
class MyClass {
  get [Symbol.toStringTag]() {
    return 'MyClass';
  }
}

const myInstance = new MyClass();
console.log(Object.prototype.toString.call(myInstance)); // "[object MyClass]"

```


一个 cookie 最大不能超过 4KB
Cookie 选项:
path=/，默认为当前路径，使 cookie 仅在该路径下可见。
domain=site.com，默认 cookie 仅在当前域下可见。如果显式地设置了域，可以使 cookie 在子域下也可见。
expires 或 max-age 设定了 cookie 过期时间。如果没有设置，则当浏览器关闭时 cookie 就会失效。
secure 使 cookie 仅在 HTTPS 下有效。
samesite，如果请求来自外部网站，禁止浏览器发送 cookie。这有助于防止 XSRF 攻击。