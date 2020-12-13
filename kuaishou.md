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
- promise.all: 此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）,如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败 promise 的结果。
- promise.allSettled： 该方法返回一个在所有给定的promise已被决议或被拒绝后决议的promise，并带有一个对象数组，每个对象表示对应的promise结果。如果我们请求多个接口需要统计错误的次数，就可以用到此方法.

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
