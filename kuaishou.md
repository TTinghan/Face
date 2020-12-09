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
console.log(b()); // 打印什么

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
6. 了解promise么？说下Promise.all与allSettled区别， Promise.all参数都可以是什么？
7. 手写一个promise.all
8. 你觉得让你印象最深刻的问题是什么？你是怎么解决的？