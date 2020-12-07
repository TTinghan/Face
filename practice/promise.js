// 手写promise
// 主要缺陷：
// 第一没有兼容其他的库 ： resolvePromise
// 第二个缺陷：我们调用array方法的时候需要异步操作
// 常见的promise库：
// q.js按照promiseA+规范写的、 blueBird、jquery的deferred方法/gethub/then/promise

// promise A+规范：我们的这个异步可以是：macro task 或 micro task
// 宏任务：setTimeout、setTimeInterval
// 微任务：promise、 node中的process.nextTick
function promise(fn) {
    var self = this;// 避免this指向window
    self.status = 'pending';
    self.value = undefined;// 当前promise中resolved或reject的值
    self.onResolvedArray = [];// 成功的回调函数集合
    self.onRejectedArray = [];//失败的回调函数集合
    function resolve(val) {
       setTimeout(function(){
        if(self.status === 'pending') {
            self.status = 'resolved';
            self.value = val;
            // 将成功的回调函数执行一遍
            for(var i = 0;i<self.onResolvedArray.length; i++) {
                self.onResolvedArray[i](val);
            }
        }
       })
    }
    function reject(err) {
        setTimeout(function(){
            if(self.status === 'pending') {
                self.status = 'reject';
                self.value = err;
                 // 将失败的回调函数执行一遍
                for(var i = 0;i < onRejectedArray.length; i++){
                    self.onResolvedArray[i](err);
                }
            }
        })
    }
    fn(resolve, reject);
}

// 实现.then方法
promise.prototype.then = function(onResolved, onRejected){
    var self = this;
    var promise2; //返回一个新的promise对象
    // 兼容传进来的参数必须是一个函数
    onResolved = typeof onResolved === 'function' ? onResolved : function(val) {};
    onResolved = typeof onRejected === 'function' ? onRejected : function(err) {};
//    判断当前promise的三种状态,且都会返回一个新的promise对象
    if(self.status === 'resolved') {
        return promise2 = new promise(function(resolve, reject) {
           var x = onResolved(self.val);
        // 执行完之后 考虑当前返回的promise状态
        // --》 如果返回一个非promise对象 永远是resolved状态
        // --》 如果返回时promise对象 就返回promise对象的状态
           if(x instanceof promise) {
            //    x是什么状态resolve或reject，就返回什么状态
               x.then(resolve, reject);
           }else {
               resolve(x);// 返回的不是promise就一直保持resolve
           }
        })
    }
    if(self.status === 'reject') {
        return promise2 = new promise(function(resolve, reject) {
            var x = onRejected(self.val);
            //    执行完之后 考虑当前返回的promise状态
               if(x instanceof promise) {
                //    x是什么状态resolve或reject，就返回什么状态
                   x.then(resolve, reject);
               }else {
                  resolve(x);// 返回的不是promise就一直保持resolve
               }
        })
    }
    // 兼容其他库的promise
    function resolvePromise(promise2, x, resolve, reject) {
        if(promise2 === x) {
            throw new Error('返回有误')
        }
        // 如果return的promise不是第三方库的是我们自己的
        // promiseA+ 2.3.2
        if(x instanceof promise) {
               x.then(resolve, reject);
        }else {
              resolve(x);
        }
        // 第三方库的使用  // promiseA+ 2.3.3
        if(x !== null && typeof x === 'object' ||  typeof x === 'function') {
            if(typeof x.then === 'function') {
                // 操作
            }else {
                resolve(x);
            }
        }
        // 最后其他操作就是 resolve(x);
    }
    // 如果我们在用promise的时候存在在返回状态之前放在了setTimeout中就会一直pending
    if(self.status === 'pending') {
        return promise2 = new promise(function(resolve, reject) {
            self.onResolvedArray.push(function(val){
                var x = onResolved(self.val);
                if(x instanceof promise) {
                    x.then(resolve, reject);
                }else {
                    resolve(x);
                }
            })
            self.onRejectedArray.push(function(err) {
               var x = onRejected(self.val);
               if(x instanceof promise) {
                   x.then(resolve, reject);
               }else {
                  resolve(x);
               }
            })
        })
    }
}
// .catch方法的实现
promise.prototype.catch = function(onRejected){
    self.then(null, onRejected);
}

// 手写一个简易的promise
class Promise {
    constructor(fn) {
      this.status = 'Pending'
      setTimeout(() => {
        fn((data) => {
          this.resolve(data)
        }, (error) => {
          this.reject(error)
        })
      })
    }
    
    resolve(data) {
      if (this.status === 'Pending') {
        this.success(data)
        this.status = 'Fulfilled'
      }
    }
   
    reject(error) {
      if (this.status === 'Pending') {
        this.error(error)
        this.status = 'Rejected'
      }
    }
   
    then(success, error) {
      this.success = success
      this.error = error
    }

    catch(error){
        this.then(null, error);
    }
   }

// 手写一个promise.all
/**
 * 方法返回一个Promise实例
 * 此实例在 iterable 参数内所有的promise 都完成（resolved）时回调完成（resolve）；
 * 如果参数中 promise有一个失败（rejected），此实例回调失败（reject），失败的原因是第一个失败promise的结果。
 * @param {*} arrReqs 
 */
Promise2.all = function(arrReqs) {
    let list = []; // 存储最后都成功的参数list
    let len = 0; // 记录当前的请求是否都执行完了   let list = []
    let hasErr = false; // 加锁的机制
    return new Promise2((resolve, reject) => {
      for(let i = 0; i < arrReqs.length; i++) {
        arrReqs[i].then( data=> {
          list[i] = data
          len++
          len === arrReqs.length && resolve(list); // 全部执行完，return所有请求的结果
        }, error => {
          !hasErr && reject(error); // 失败的原因是第一个失败promise的结果
          hasErr = true
        })
      }
    })
  }

//   手写一个promise.race
/**
 * 方法返回一个Promise实例，
 * 一旦迭代器中的某个 promise 完成(resolved)或失败(rejected)，
 * 返回的 promise 就会 resolve 或 reject
 * @param {*} arrReqs 
 */
Promise2.race = function(arrReqs) {
    let hasValue = false
    let hasError = false
    return new Promise2((resolve, reject) => {
      for(let i = 0; i < arrReqs.length; i++) {
        arrReqs[i].then(data => {
          !hasValue && !hasError && resolve(data) 
          hasValue = true
        }, error => {
          !hasValue && !hasError &&reject(error)
          hasError = true
        })
      }
    })
  }
