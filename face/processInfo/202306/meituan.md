1. vue3.0和vue2.0区别？

2. vue的双向数据绑定如何实现的？

3. 小程序里面高并发请求是如何做限制的？如果有100个请求，限制10个，那11-100是怎么处理的？

4. https是这么实现的安全信息，关于SSL相关?

5. 页面点击了这个onclick之后会有js内存溢出么？ 考点：垃圾回收机制

function eventhandler() {
    var button = document.getElementById('.el-button');
    button.onclick = function(e){
        console.log(e.target.value);
    }
}

6. 闭包：打印什么？
```

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
// 宝马 宝马

```
7. A函数是闭包么?B函数是闭包么?

8. 二叉树的深度优先，广度优先，复杂度都是多少？


