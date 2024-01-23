# css文件的下载会阻塞渲染，但是不会阻塞js的执行
# 双向数据绑定
# TS的Record类型是怎么实现的？
```
type MyRecord<K extends keyof any, T> = {
    [P in K]: T
}

type MyRecordType = MyRecord<'a' | 'b', number>;

const obj: MyRecordType = {
    'a': 1,
    'b': 2
}

```
# 如何使用TS获取函数的返回类型
```
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 示例使用
function exampleFunction(): number {
  return 42;
}

type ExampleReturnType = MyReturnType<typeof exampleFunction>;

// 在这个例子中，ExampleReturnType 将被推断为 number

- MyReturnType 是一个泛型类型，接受一个类型参数 T。
- 核心思想：使用条件类型 T extends (...args: any[]) => infer R 来检查是否 T 是一个函数类型，如果是，那么 infer R 将推断为函数的返回类型。
- 如果 T 不是函数类型，则返回 any 类型。
利用条件类型对函数类型进行解构，提取函数的返回类型。这样，我们就可以通过MyReturnType<typeof exampleFunction>获取 exampleFunction 函数的返回类型，而不需要显式地指定。

```
# 浏览器的性能优化
# 课程表
https://leetcode.cn/problems/course-schedule/description/

# 手写一个发布订阅

# 最长公共前缀
# 二叉树深度优先遍历、广度优先
# 反转链表