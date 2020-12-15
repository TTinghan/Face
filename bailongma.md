#### 白龙马云科技

### 二面
1. new 一个实例化对象的过程，发生了什么
```
 new运算符的执行过程
    新生成一个对象
    链接到原型: obj.__proto__ = Con.prototype
    绑定this: 将这个对象作为构造函数的 this
    返回新对象(如果构造函数有自己 retrun 时，则返回该值)

    function myNew(Con, ...args) {
        let obj = Object.create(Con.prototype)
        let result = Con.apply(obj, args)
        return typeof obj === 'object' ? result : obj
    }
}

```
2. let在全局声明之后，会不会出现在window对象上 --》考点：不会，因为不存在变量提升
3. es6模块化编写的内容，怎样配置你想要导出的AMD模块化，或者其他的模块化语言
4. call,apply,bind三者区别 --》bind会返回一个function
5. 对于普通函数和箭头函数的this分别指向什么
    this分别都是在什么机制中生成的 --》普通函数是在调用的时候，箭头函数是在声明的时候
6. 对于react需要有哪些优化的点--》考虑什么时候进行组件的更新
7. 你们公司应用的webpack是几版本的？
  -  对于webpack的配置优化
  -  webpack的构建流程
  -  webpack有哪些loader
  -  webpack的plugin和loader区别
  -  webpack打包出来的静态资源都带有不同的hash值，有的是chunk.hash.js 有的是hash 他们的区别是什么？
8. 有了解过其他的构建工具吗？--》gulp
9. 对于http状态码304的理解--》涉及到的考点是浏览器的协商缓存机制
10. 认为react与hook相比较的优缺点
11. 对于commonJS和es6的区别--》考点：require和import的区别
```
require与import的区别
    require支持 动态导入，import不支持，正在提案 (babel 下可支持)
    require是 同步 导入，import属于 异步 导入
    require是 值拷贝，导出值变化不会影响导入值；import指向 内存地址，导入值会随导出值而变化

```
12. 同源策略：为什么会出现？出现原因， 解决办法
13. 如果让你写一个react你会怎么设计
14. 如何理解块级作用域
15. 一个变量在栈和堆中是如何分配的--》考点 引用类型和原始类型进行区分
```
基本类型：这些类型在内存中分别占有固定大小的空间，他们的值保存在栈空间，我们通过按值来访问的
引用类型：引用类型，值大小不固定，栈内存中存放【地址】指向堆内存中的【对象】。是按引用访问的。

```
16. 有部署过一个依赖包么？类似于npm的，说一下部署的流程
17. echars和antV觉得哪个好用？有什么区别
18. 有关注lodash最近出现的一个漏洞问题么？--》2019年7月 Lodash 被爆出一个高严重性安全漏洞——”原型污染“漏洞。
受影响的函数：将需要更新lodash.merge，lodash.mergeWith，lodash-cli和lodash-es软件包
在 Lodash 更新到 4.17.5 或更高版本之后，这个问题可以得到解决： https://www.infoq.cn/article/k7C-ZvXKOHh284ToEy9K/
19. 对于后端超大数据量的请求，没有做分页处理，前端应该怎么办？
20. App客户端和h5之间是如何通信的？
参考博客：https://www.jianshu.com/p/fb3f17d59500


### 三面
1. 描述下项目，你做过的，主要针对业务
2. 对于node在项目中角色的理解，为什么要用node
3. 前端页面发出ajax请求到服务端的流程
4. 对于未来的发展规划，有什么倾向的业务，toB toC
