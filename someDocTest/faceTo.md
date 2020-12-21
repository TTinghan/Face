<!-- https://zhuanlan.zhihu.com/p/102442557 -->
### 1、学习前端的途径和方法/收获的东西/遇到的困难
### 2、性能优化有丰富的经验：
### 3、熟练使用webPack、Git、代理:
### 4、react、node、es6:==>虚拟dom 、react和vue比较、es6:
### 5、sass less

### 6、前端的异步操作有哪些：
①回调函数
②async/await(相当于promise)
③setTimeout(宏任务)
④Promise.then(微任务)--》会走cache
⑤ajax--》then/catch

### 7、对宏任务微任务流程的理解？任务队列里面哪个优先：
同步代码--》微任务--》宏任务
①在当前的[微任务]没有执行完成时，是不会执行下一个[宏任务]的。
②也就是说new Promise在实例化的过程中所执行的代码都是同步进行的，而then中注册的回调才是异步执行的。
在同步代码执行完成后才回去检查是否有异步任务完成，并执行对应的回调，而微任务又会在宏任务之前执行。
①同步： 正常同步代码
    new Promise()中的代码
    await前面的代码(async)相当于new Promise
③宏任务：
    setTimeout
    setInterval
    setImmediate (Node独有)
    requestAnimationFrame (浏览器独有)
    I/O
    UI rendering (浏览器独有)
④微任务：
    Promise.then catch finally， 
    await后面的代码相当于Promise.then，
    MutationObserver（仅浏览器）
    process.nextTick (Node独有)
    Object.observe
    MutationObserver
 （注：这里只针对浏览器和NodeJS）
ps:事件轮询：https://zhuanlan.zhihu.com/p/55511602
### 8、深浅拷贝：
#### js基本数据类型分为：
基本类型按照只传递（Number、String、Boolean）+引用类型按照引用值传递（Object、Array）
引用类型中涉及到深浅拷贝的问题:
浅拷贝：引用赋值，浅拷贝的指向的是一个内存空间，修改任何一个值，都是修改同一个对象或数组
深拷贝：会拷贝出来一个新的对象，新旧值一模一样
### 9、手写防抖&节流，二者有何区别：
①防抖是要最后一次的请求
②节流是要第一次的请求

字节面试准备：
手撕代码：①中文汉字字符串 转为数字--》五百三十万六千零三--》约束：输入金额在一亿以内。要求：做一定的容错处理

###10.cookie的过程
客户端发送请求到服务端，
然后服务端返回的response headers中会有Set-Cookie这个字段，将信息写入 Cookie 中。
然后在下一次客户端请求接口时，会在request headers里带上这个Cookie字段，
这样服务器就可以拿到这些信息，达到了维持状态的目的



