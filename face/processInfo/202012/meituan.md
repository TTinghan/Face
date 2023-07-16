### 美团 到餐-前端开发

### 一面
```
聊。。。
```
1. 说说es6有哪些新特性
2. var,let,const什么区别
3. 手写一个Array.prototype.myReduce

```
function reduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];

  for (let i = initialValue !== undefined ? 0 : 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}


```
4. 了解git的flow么
Git Flow 是一种 Git 工作流程或分支模型
Master 分支：这个分支上的代码始终反映出了生产环境（Production）的最新代码。
Develop 分支：此分支包含了最新开发过程中的代码。

- Feature 分支：开发新功能都从 develop 分支上拉出新的分支，开发完成后合并回 develop 分支，删除此 feature 分支。

- Release 分支：当你需要产出新的产品版本时，从 develop 分支上拉出一个新的 release 分支。可以在这个分支上完成所有的测试，所有的 bug fix 都直接在 release 分支上操作。测试完毕之后，首先要合并到 master 分支，然后打上标签来记录这个版本，再合并回 develop 分支，最后删除这个 release 分支。

- Hotfix 分支：当生产环境中出现紧急问题时，需要从 master 分支上拉出新的 hotfix 分支来进行修复，修复后直接合并到 master 和 develop 分支，然后删除这个 hotfix 分支。

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
