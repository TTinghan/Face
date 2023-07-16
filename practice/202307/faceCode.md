### 1. new运算符的执行过程
### 2. 手写promise.all，注意请求要第一个请求回来再请求下一个,了解promise么？说下Promise.all与allSettled区别， Promise.all参数都可以是什么？（实现promise.all的pollify）
### 3. 链表反转的实现
function reverseList(head){
  let prev = null;
  let current = head;

  while(current){
    let nextTemp = current.next;
    current.next = prev;
    prev = nextTemp;
  }
  return prev;
}
### 4. 手写代码实现输出一个tree型的obj
手写代码实现输出一个tree型的obj:
```
 const treeArr = [
    {"id":0,"name":"根节点"},
    {"id":1,"name":"第一级1","pid":0},
    {"id":2,"name":"第一级2","pid":0},
    {"id":3,"name":"第二级1","pid":1},
    {"id":4,"name":"第三级1","pid":3},
    {"id":5,"name":"第三级2","pid":3},
];
// 要求输出形如树形结构的对象
const treeObj = {
    id: 0,
    name: '根节点',
    children: [{
        id: 1,
        name: '第一级1',
        children: [{
          id: 3,
          name: '第二级1',
          children: [{
            id: 4,
            name: '第三级1',
            children: [],
          }, {
            id: 5,
            name: '第三级2',
            children: [],
          }]
        }]
    }, {
        id: 2,
        name:'第一级2',
        children: [],
    }]
}

举一反三，如果展开的树再拍平呢？
```

### 5. 手写实现jsonp
### 6. js的继承 手写
### 7. 写一个斐波那契数列
### 8. 实现一个deepClone,先说下思路然后实现
### 9. 手写防抖截流，先说区别再写
### 10. 写一个两个数组合并 [1,3,5,7], [2,4,6,8] =>[1,2,3,4,5,6,7,8]; 要考虑[1,1,1,1],[1,1,1,1] 场景。

### 11. 将字符串改为驼峰式
```
'get-element-by-id'
'getElementById'

```
### 12. 实现一个随机生成hex颜色 可以能是三位#abc 可能是六位#abcdef

### 13. 将上面随机生成的三位或六位的hex转为rgb
### 14. 手写一个Array.prototype.reduce
### 15. 实现一个方法，输入object或者array和一个路径path可以返回一个value
```
var object = { a: [{ b: { c: 3 } }] }; // path: 'a[0].b.c'
var array = [{ a: { b: [1] } }]; // path: '[0].a.b[0]'
console.log(getValue(object, "a[0].b.c")); // 输出3
console.log(getValue(array, "[0].a.b[0]")); // 输出 1

function getValue() {}
```

### 16. 二叉树的深度优先
```
查找二叉树节点间最大差值，最大差值节点要具有父子或祖先后代关系：如下最大差值为7
         5
       /   \
     2       3
    / \     / \
   6   9   1   4

   输入 const node = {
      value: number;
      left: node;
      right: node;
   }

```

### 17. 算法是大数相加 ‘12312312312’ + ‘23’
### 18. 理解组合式函数compose，实现一个中间件
### 19. 实现 一个发布订阅模式（什么是发布订阅）
### 20. 手动实现一个Function.prototype.bind()