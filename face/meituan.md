### 美团 到餐-前端开发

### 一面
```
聊。。。
```
1. 说说es6有哪些新特性
2. var,let,const什么区别
3. 手写一个Array.prototype.myReduce
4. 了解git的flow么
5. 看代码会输出什么？打印几次？分别是什么？ 三次-> 20,20,50
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
