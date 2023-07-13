1. vue3.0和vue2.0区别？
2. vue的双向数据绑定如何实现的？
3. 小程序里面高并发请求是如何做限制的？如果有100个请求，限制10个，那11-100是怎么处理的？
4. https是这么实现的安全信息，关于SSL相关?
5. 闭包：打印什么？
（funciton(){
  var carName;
  // A函数
  Car = function(name){
    carName = name
  }
  // B函数
  Car.propoty.getName = function(){
    return carName;
  }
}）()
let car1 = new Car('奔驰')；
let car2 = new Car('宝马')
6. A函数是闭包么?B函数是闭包么?
console.log(car1.getName(),car2.getName());
7. 二叉树的深度优先，广度优先，复杂度都是多少？

