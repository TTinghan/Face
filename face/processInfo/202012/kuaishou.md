## kuaishou 一面
1. 自我介绍。。。
2. 用过小程序什么框架 taro和原生的区别
3. 
```
上编程题:

.classB{color: blue}
.classA{color: red}

<p class="classA classB">文字颜色</p>
解释为什么？还了解什么其他选择器么？权重都是怎样的？

```

```
var count = 10;
function a(){
    return count + 10;
}

fcuntion b(){
    var count = 10;
    return a();
}
console.log(b()); // 打印什么？为什么，说下理由？

```

```
function Foo(){
    this.a = 1;
    // 去掉return结果会是什么 =>1/7/8/9
    return{
        a: 4,
        b: 5
    }
}
Foo.prototype.a = 6;
Foo.prototype.b = 7;
Foo.prototype.c = 8;
Foo.prototype.d = 9;

var o = new Foo();
console.log(o.a); // => 4
console.log(o.b);// => 5
console.log(o.c);// => undefined
console.log(o.d);// => undefined

```

```
let promise = new Promise((resolve, reject)=>{
    reject(1);
})

promise.then((val)=>{
console.log('then1-1', val)
}, (err)=>{
    console.log('err1-1', err);  // then1-1, 1
})
.then((val)=>{
console.log('then2-2', val); // then2-2, undefined
}, (err)=>{
    console.log('err2-2', err)
})

都打印什么?
```

4. 写一个斐波那契数列
5. 写一个两个数组合并 [1,3,5,7], [2,4,6,8] =>[1,2,3,4,5,6,7,8];
要考虑[1,1,1,1],[1,1,1,1] 场景。
```
function merge (arr1, arr2){
    // TODO
}
```
6. 将字符串改为驼峰式：
```
'get-element-by-id'
'getElementById'

```
7. 了解promise么？说下Promise.all与allSettled区别， Promise.all参数都可以是什么？

```
- promise.all: 它接收一个Promise对象的数组作为参数，并返回一个新的Promise对象。这个新的Promise只有当所有的输入Promise都成功地变为fulfilled状态时，才会变为fulfilled状态；只要有一个输入Promise变为rejected状态，新的Promise就会立刻变为第一个请求失败的rejected状态。如果其中有任何一个 Promise 失败，Promise.all 就会立刻抛出错误，并且其他 Promise 的结果也会被忽视。

- promise.allSettled： 总是等待所有的 Promise 都完成，不管其结果是 resolved 还是 rejected。它返回的结果中会包含每个 Promise 的状态和值（如果是 resolved）或者拒绝原因（如果是 rejected）。

```
8. 实现promise.all的pollify，上代码就完了。
9. 你觉得让你印象最深刻的问题是什么？你是怎么解决的？


## 二面

1. 自我介绍
2. 说说在做项目的过程中给自己印象深刻的两个问题，都是如何解决的？
3. 本专业应该不会涉及前端内容知识，说下你是如何学习前端的？
4. 写一个两个数组合并 [1,3,5,7], [0,2,4,6] =>[0,1,2,3,4,5,6];
并说说你实现的时间复杂度是多少？
```
function merge (arr1, arr2){
    let newArr = [];
    while(arr1.length && arr2.length){
        if(arr1[0] > arr2[0]){
            newArr.push(arr2.shift())
        }else {
            newArr.push(arr1.shift())
        }
    }
    while(arr2.length === 0){
        newArr.push(arr1.shift())
    }
    while(arr1.length === 0){
        newArr.push(arr2.shift())
    }
}
```
5. 说说对于数组和链表的区别
你觉得数组的底层是用什么实现的？是数组还是其他数据结构？
6. 假设你所处在一个非常复杂的web工程，由上百人开发，工程中有大量的html，js，css，图像，工程编译发布后是一个完整的网站（比如Facebook主站）。请问用哪种数据结构可以比较准确的描述工程下所有静态资源之间的依赖关系？--->用有向图~

### 三面
 1. git merge 与 git rebase的区别 https://zhuanlan.zhihu.com/p/129854679
```
git merge: 会保留所有commit的历史时间,每个分支上都会继续保留各自的代码记录, 主分支上只保留merge的历史记录。
git rebase: 这个命令会始终把你最新的修改放到最前头

```
 2. 跨域产生的原因？以及所用到跨域的解决办法？你所遇到的跨域场景和解决办法
 跨域产生的原因是因为Web浏览器的同源策略。这个策略定义了一种安全约束，它限制了来自不同源（协议、域名或端口）的文档或脚本如何相互作用。
 - 解决办法
 1. CORS（跨来源资源共享）: 服务器可以在响应头中添加Access-Control-Allow-Origin字段，指定哪些源可以访问其资源。
 2. JSONP（JSON with Padding）: JSONP可以绕过同源策略的限制，因为<script>标签的src属性不受同源策略限制。JSONP的基本思想是，网页通过添加一个<script>元素，向服务器请求JSON数据，这种做法不受同源政策限制。服务器将数据放在一个指定名字的JavaScript函数中返回。
 3. 使用代理服务器nginx: 如果前端服务器和后端服务器不在同一源，可以在前端服务器上设置一个代理，将所有API请求转发到后端服务器。
 4. 使用WebSockets: WebSockets协议不受同源策略的限制，所以可以用来进行跨域通信。
 5. Document.domain + Iframe: 这是一种古老的方法，主要用于主域相同而子域不同的情况。

 
 3. 怎么理解redux是单项数据流的？
 4. 上代码：
 ```
 实现一个随机生成hex颜色 可以能是三位#abc 可能是六位#abcdef

 ```
 5. 上代码：
 ```
 将上面随机生成的三位或六位的hex转为rgb

 ```
 6. 谈谈你是怎么学习前端的
 7. 反问
