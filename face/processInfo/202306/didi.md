# 自我介绍
# 问json-form如何实现的，探讨了阿里那边的formily,问了如何实现的动态组件
# 问性能优化主要做了什么方面
# vue2的双向数据绑定是如何实现的
# nextTik是如何实现的？是微任务还是宏任务？
# 了解微任务宏任务么？
# vue2和vue3的差别
# vue的compotionApi了解么
# 编码
console.log('1'); // 同步

setTimeout(function() {
    console.log('2');
    new Promise(function(resolve) {
        console.log('4'); // 同步
        resolve();
    }).then(function() {
        console.log('5')
    })
})
new Promise(function(resolve) {
    console.log('7'); // 同步
    resolve();
}).then(function() {
    console.log('8') // 微
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



1
7
8
2
4
5
9
11
12


$nextTick 

getValue
var object = { a: [{ b: { c: 3 } }] }; // path: 'a[0].b.c'
var array = [{ a: { b: [1] } }]; // path: '[0].a.b[0]'
console.log(getValue(object, "a[0].b.c")); // 输出3
console.log(getValue(array, "[0].a.b[0]")); // 输出 1

'a.0.b.c' '0.a.b.c' obj['0'] arr['0']

obj={
  'a.b.c': '1212',
  a: {
    b: {
      c: '23232',
    }
}
}
function getValue(target, str) {
  let newStr = str.replace('//g', ''); // 换掉[0]//  obj['a.0.b.c']
  let list = str.split('.'); // [a,0,b,c]
  let value = '';
  if(Array.isArray(target)) {
    for(let i=0; i < list.length; i++) {
      let key =  
      getValue(target[key], )
    }
  }
}
  
