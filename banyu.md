1.js数据格式
2.判断类型方法
3.es6新增内容
4.class
5.promise讲解，all和race的作用
6.url从输出到页面出结果
7.第一步查看缓存的顺序
8..tcp三次握手，为什么三次
9.继承6种方法
10.事件循环
11.宏任务微任务
12.什么是盒布局
13.垂直居中方法
14.bfc
15.css3动画
16.promise输出
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

17.bind new输出
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