/**   两颗星   */

// 手写lodash/curry 柯里化
function curry (func) {
    return function curriedFn (...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
        return function () {
            return curriedFn(...args.concat(Array.from(arguments))) // 这里面就是把每次的参数结合起来，再次调用curriedFn
        }
    }
    // 实参和形参个数相同，调用 func，返回结果
    return func(...args)
    }
}

/**
 * 简易代码 
 * 入参是fun
 * return fun
 */
function curry(func) {
    const g = (...allArgs)=>{
        allArgs.length >= func.length ? func(...allArgs) : (...restArgs)=>{ g(...allArgs, ...restArgs) }
    }
    return g;
}

// 手写lodash/flowRight(f,g) 是从右到左运行=> 函数组合f(g(x))
// 考点 reduce(fn) =>
// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
// reduce() 可以作为一个高阶函数，用于函数的 compose组合。
function flowRight (...fns) {
    return function (initValue) {
        return fns.reverse().reduce(function (arr, itemFn) { // 对reduce不熟的去看一下
            return itemFn(arr) // 每次都将参数放在每一个函数中执行一次
        }, initValue)
    }
}
// -->应用：取出数组最后一项并大写，flowRight使用方法
const arr = ['red', 'yellow', 'blue']
const toUpper = s => s.toUpperCase();
const reverse = arr => arr.reverse();
const first = arr => arr[0];

const composeFn = flowRight(toUpper, first, reverse);// 传入需要组合的fns 
composeFn(arr);// 执行这个composeFn

/**手写 EventHub（发布-订阅）
 * 核心思路是：
    使用一个对象作为缓存
    on 负责把方法发布到缓存的 EventName 对应的数组
    emit 负责遍历触发（订阅） EventName 下的方法数组
    off 找方法的索引，并删除
 */
class EventHub {
    cache = {}; // 作为缓存
    on(eventName, fn) {
      this.cache[eventName] = this.cache[eventName] || [];
      this.cache[eventName].push(fn);
    }
    emit(eventName) {
      this.cache[eventName].forEach((fn) => fn());
    }
    off(eventName, fn) {
      const index = indexOf(this.cache[eventName], fn); // 这里用 this.cache[eventName].indexOf(fn) 完全可以，封装成函数是为了向下兼容
      if (index === -1) return;
      this.cache[eventName].splice(index, 1);
    }
  }

  // 手写await/async
  // 原理Generator
function myAsync () {
    spawn(function *() {
        xxx
    })
}
function spawn (fn) {
    const gen = fn();
    return new Promise((resolve, reject) => {
        function step (fn) {
            let next
            try {
                next = fn();
            } catch(e) {
                reject(e)
            }
            if (next.done) {
                resolve(next.value);
            }
            next.value.then(() => {
                step(gen.next)
            }).catch(err => {
                reject(err)
            })
        }
        step(gen.next)
    })
}

// 写一个 es6 的继承过程

// 写一个大数相乘的解决方案。传两个字符串进来，返回一个字符串
function mult(a, b){
    var cn = a.length + b.length;
    var c = new Array(cn).fill(0);
    // 两两相乘，并放进不同的格子里，如果里面有东西，则相加
    for(var i = 0; i < a.length; i++){
      for(var j = 0; j < b.length; j++){
         c[i+j+1] += Number( a[i] ) * Number( b[j] )
      }
    }
   // 处理进位   
    for(var i = cn-1; i >= 0; i--){
      var carry = Math.trunc(c[i] / 10);
      if(carry){
        c[i-1] +=  carry
      }
      c[i] = c[i] % 10
    }
    while(c[0] === 0){
        c.shift()
    }
    //处理最前面的零
    return c.join('') || '0'
  }