# 钉钉
面试官自我介绍
我自我介绍
说一个你觉得你做的最好的项目，我说的form-data
说一下你们的故障平台是干嘛的
说一下图表类的大数量是怎么处理性能的？
说一下pepline这边你了解多少？
form-data是怎样实现组件联动的？
说一下性能优化你都做了什么
说一下vue用的几版本，vue的双向数据绑定是怎样实现的？
vue3相对于vue2都做了哪些优化
上代码题：
实现一个stack([1,2,3,4])
返回数组中每个元素到当前元素位置的累积
预期输出[1,3,6,10]

function stack(list) {
    let result = [];
    let l = [];
    for(let i = 0; i < list.length; i ++) {
        l.push(list[i]);
        result.push(l.reduce((a, b) => a + b))
    }
    return result;
}