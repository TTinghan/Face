```
// 打印什么？ 为什么？
console.log(1);
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(data => {
     console.log(3);
  });
});
new Promise((resolve) => {
  resolve()
  console.log(4)
}).then(() => {
  console.log(5);
  setTimeout(() => {
    console.log(6);
  });
}).then(() => console.log(7))
console.log(8);

```

```
var nickname = "LiLei";
function Person(name){
  this.nickname = name;
  this.sayHi = function() {
    console.log(this.nickname);
    setTimeout(function(){
      console.log(this.nickname);
    }, 0);
  }
}
var Male = {
  nickname: 'xiaofang',
  sayHi: () => {
    console.log(this.nickname);
  }
}
var person = new (Person.bind(Male, 'XiaoHong'));
person.sayHi();

```



```
打印什么？
var a= function () { 
    this.b =3; 
} 
var c = new a();
a.prototype.b = 9;
var b = 7;
a();

console.log(b); 
console.log(c.b);

```
```
变形-》打印什么？
var a= function () {} 
var c = new a();
a.prototype.b = 9;
var b = 7;
a();

console.log(b); 
console.log(c.b);

```

```
打印什么文字颜色为什么？

.classB{color: blue}
.classA{color: red}

<p class="classA classB">文字颜色</p>

```

```
// 打印什么？为什么，说下理由？
var count = 10;
function a(){
    return count + 10; // 在定义a的时候已经决定读取全局的count了,因为其内部没有
}

function b(){
    var count = 20;
    return a();
}
console.log(b()); 

```

```
// 一个构造函数返回的是一个对象（包括函数，数组等）
// 这个返回值将会被用作新对象的值，这将覆盖原型上的值
function MyConstructor() {
  this.value = 'from instance';
  return {
    value: 'from return'
  };
}
MyConstructor.prototype.value = 'from prototype';

var myObject = new MyConstructor();
console.log(myObject.value);

```
```
// 一个构造函数返回的是一个非对象类型（比如，数值，字符串，布尔值，null，undefined等）
// 这个返回值将会被忽略，新对象将从构造函数的prototype属性继承值
function MyConstructor() {
  this.value = 'from instance';
  return 'from return';
}
MyConstructor.prototype.value = 'from prototype';

var myObject = new MyConstructor();
console.log(myObject.value);

```

```
// 一个构造函数没有返回值，优先看函数有没有自带属性，有就读，没有就找原型
function MyConstructor() {
  this.value = 'from instance';
}
MyConstructor.prototype.value = 'from prototype';

var myObject = new MyConstructor();
console.log(myObject.value);

```

```
// 构造函数取值优先级： 
// 有return:只看return对象 
// 无return:自带属性上的值 > 原型上的值

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
console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

```

```
// 都打印什么?
let promise = new Promise((resolve, reject)=>{
    reject(1);
})

promise.then((val)=>{
console.log('then1-1', val)
}, (err)=>{
    console.log('err1-1', err);
})
.then((val)=>{
console.log('then2-2', val);
}, (err)=>{
    console.log('err2-2', err)
})

```
```
// 变形->都打印什么?
let promise = new Promise((resolve, reject)=>{
    reject(1);
})

promise.then((val)=>{
console.log('then1-1', val);
}, (err)=>{
    console.log('err1-1', err);
    // throw new Error(err);
    return Promise.reject(err);
})
.then((val)=>{
console.log('then2-2', val);
}, (err)=>{
    console.log('err2-2', err)
})

```

```
看代码会输出什么？打印几次？分别是什么？
var a = 20;
var test = {
  a: 40,
  init: () => {
    console.log(this.a);
    function go() {
      console.log(this.a);
    }
    go.prototype.a = 50;
    return go;
  }
};

var p = test.init();
p();
new p()
```
```
变形-》打印什么？为什么
var a = 20;
var test = {
  a: 40,
  init: function(){
    console.log(this.a);
    function go() {
      console.log(this.a);
    }
    go.prototype.a = 50;
    return go;
  }
};

var p = test.init();
p();
new p()
```

```
打印什么？为什么？
console.log('1');

setTimeout(function() {
    console.log('2');
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

```

```
闭包会打印什么？为什么？

(function() {
    var carName;
    Car = function(name) {
        carName = name;
    }
    Car.prototype.getName = function(){
        return carName;
    }
})()
  let car1 = new Car('奔驰');
  let car2 = new Car('宝马');
  console.log(car1.getName(),car2.getName());

```

```
打印什么？为什么？

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

new Promise((resolve, reject) => {
    console.log(1111111);
}).then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});

console.log('script end');

```
