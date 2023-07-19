1. vue3.0和vue2.0区别？

2. vue的双向数据绑定如何实现的？

3. 小程序里面高并发请求是如何做限制的？如果有100个请求，限制10个，那11-100是怎么处理的？

4. https是这么实现的安全信息，关于SSL相关?
- 数据加密：HTTPS使用SSL（安全套接层）或TLS（传输层安全）协议来对传输的数据进行加密；
数据加密通过使用公钥和私钥来实现，只有服务器拥有私钥，因此只有服务器能够解密客户端发送的数据
- 身份验证：HTTPS通过使用数字证书来验证服务器的身份。
数字证书并包含了服务器的公钥。客户端会验证证书的有效性和合法性。
- 数据完整性：HTTPS使用消息摘要算法（如SHA）来确保数据在传输过程中的完整性。

HTTPS通过加密传输、身份验证和数据完整性保护等机制，提供了更高的安全性，使得数据在传输过程中更难以被窃听、篡改或伪造

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


