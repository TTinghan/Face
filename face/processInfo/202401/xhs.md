# hongmeng
## 二面


## 一面
1. 上来先coding
fucntion compiler(context, template) {

}
const context = {
  name: '衣服'，
  price: 19.8，
  unit: ‘元’
}

const template = '{{ name}}的价格是{{price + unit}}';
// 希望返回'衣服的价格是19.8元’
2. 问项目，对我写的kstable内容非常感兴趣，问了什么是高可用
问了你主要做了什么，哪个做的最好，为团队带来了价值
3. 问技术
ts的内置属性有哪些？

如何实现一个type A = {
  a: number;
  b: string
}
type B = 'a' | 'b'

4. 问技术栈
你觉得vue和react的哪些内容 在后面的vue3或者hook中得到了优化
keep-alive说一下
5. 问了性能优化都做了什么？
6. 问了你对Chrome浏览器的了解
7. 你对进程和线程的关系是怎么理解的？
例子：如果浏览器开了三个tab,其中一个tab crush了，另外两个可以正常使用么？
8. 反问：你有什么想问面试官的？