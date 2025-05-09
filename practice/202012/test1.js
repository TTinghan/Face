/**   一颗星  就非常基础的题 */
// 手写一个flat a array like [1, [2, 3]] => [1, 2, 3]
function flat(arr) {
    let result = [];
    for(let ele of arr) {
        if(Array.isArray(ele)) {
            result = result.concat(flat(ele));
        }else {
            result = result.concat(ele); // 会返回一个新数组
        }
    }
    return result;
}

// 简单写法
function flatten(arr) {
    return [].concat(
      ...arr.map(ele => Array.isArray(ele) ? flatten(ele) : ele
    ))
}

// 防抖debounce
// 应用场景 ： 多次执行会变成最后一次
function debounce(fn, wait) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args)
        }, wait)
    }
}

// 节流 throttle
// 应用场景 ：多次执行只会执行第一次 有一个加锁 lock
function throttle(fn, wait) {
    let timer;
    return (...args)=>{
        if(timer) {
            return
        }
        timer = setTimeout(()=>{
            fn(...args)
            timer = null
        }, wait)
    }
}

// 斐波那契数列 f(n) = fb(n-1) + fb(n-2)  递归调用 时间复杂度为O(2^n)
function fb(n){
    if(n == 1 || n == 2) {
        return 1;
    }
    return fb(n-1) + fb(n-2);
}

// 尾递归
// ES6 中只要使用尾递归，就不会发生栈溢出（或者层层递归造成的超时），相对节省内存。
function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
    if( n <= 1 ) {return ac2};
    return Fibonacci2 (n - 1, ac2, ac1 + ac2);
  }

// 动态规划法 1,1,2,3,5,8,13.....
// 时间复杂度为O(n)
var fib = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    let [a, b] = [0, 1]
    for(let i = 1;i<n;i++){
        let t = a;
        [a, b] = [b, t + b];
    }
    return b
};


// 实现n的阶乘 n! = n * (n-1)! 递归调用
function mul(n){
    if(n == 1 || n == 0) {
        return 1;
    }
    return n * mul(n-1)
}


// 三大this指向改变方法用法
function sayHelloTo (to) {
  console.log(`${this.name} say hello to ${to}`)
}
var Jerry = {
name: 'Jerry'
}
var John = {
  name: 'John'
}
var Foo = {
  name: 'Foo'
}

sayHelloTo.call(Jerry, 'Tom'); // Jerry say hello to Tom
sayHelloTo.apply(John, ['Bar']); // John say hello to Bar
var say = sayHelloTo.bind(Foo); // Foo say hello to ABC
say('ABC');


function test(a, b){
  console.log(a);
  console.log(b);
  var b = 234;
  console.log(b);
  a = 123;
  console.log(a);
  function a(){};
  var a;
  b = 234;
  var b = function(){};
  console.log(a);
  console.log(b);
}
test(1);


// 手写instanceOf 
// object instanceof constructor 返回布尔值
// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。会返回一个布尔值
function myInstanceof(left, right) {
    if(left == null || typeof left !== 'object') {
        return false
    }
    let proto = Object.getPrototypeOf(left);
    while(proto) {
        if(proto === right.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto)
    }
    return false;
}

// 手写一个 fn.call(obj, 'a', 'b', ...)
Function.prototype.myCall = function(_asThis, ...args) {
  // 判断是否是undefined和null
  if (typeof _asThis === 'undefined' || _asThis === null) {
    _asThis = window
  }
  let fnSymbol = Symbol()
  _asThis[fnSymbol] = this; // 这里的 this 就是调用 call 的函数 func
  let fn = _asThis[fnSymbol] (...args); // 返回一个函数的执行
  delete _asThis[fnSymbol] 
  return fn
}

// 手写一个 fn.apply(obj, ['a', 'b', ...])
Function.prototype.myApply = function(_asThis, args) {
  // 判断是否是undefined和null
  if (typeof _asThis === 'undefined' || _asThis === null) {
    _asThis = window
  }
  let fnSymbol = Symbol()
  _asThis[fnSymbol] = this;  // 这里的 this 就是调用 apply 的函数 func
  let fn = _asThis[fnSymbol] (...args);// 返回一个函数的执行
  delete _asThis[fnSymbol];
  return fn
}

/**
 * 手写一个 fn.bind(obj) (初级版本)
 * return 一个fn
 * @param {*} _asThis 
 */
Function.prototype.myBind = function(_asThis) {
  // 判断是否是undefined和null
      if (typeof _asThis === "undefined" || _asThis === null) {
        _asThis = window;
      }
      let fn = this; // 这里的 this 就是调用 bind 的函数 func
      return function(...args) {
        return fn.apply(_asThis, args);
      }
  }


  /**(中级版本)
 *  function add (){
      return this.x + this.y;
    }
    var obj = {
      x: 1,
      y: 2
    }
    console.log(add.bind_2(obj), 12121)
 */
  Function.prototype.bind_2 = function(asThis) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);
    var fn = this;
    if (typeof fn !== "function") {
      throw new Error("cannot bind non_function");
    }
    return function () {
      var args2 = slice.call(arguments, 0);
      return fn.apply(asThis, args.concat(args2));
    };
  }

// 手写一个slice
Array.prototype.slice = function(start,end){
    var result = new Array();// 创建一个新数组
    start = start || 0;
    end = end || this.length; //this指向调用的对象，当用了call后，能够改变this的指向，也就是指向传进来的对象，这是关键
    for(var i = start; i < end; i++){
         result.push(this[i]);
    }
    return result;
}


