- 预加载了解么,如何在A页面预加载B页面,如何配置webpack
这⾥可再加 webpackPrefetch或webpackPreload指令来提前请求时机

- 知道什么是lcp么，如何自己实现一个lcp
FCP（First Contentful Paint）：这是一个页面加载性能的度量标准，表示的是从页面开始加载到页面的任何部分首次被渲染（如文字，图像，SVG等）的时间。可以通过监听 PerformanceObserver 接口中的 paint 事件来获取这个指标。在实际计算中，FCP通常表示的是从白屏到页面开始有内容呈现的时间，这个指标越小表示页面的初始加载速度越快。

LCP（Largest Contentful Paint）：这个指标表示的是页面上最大的内容元素（如图像或文本块）渲染完成的时间。一般来说，LCP应在页面加载2.5秒内发生，如果超过4秒，那么用户体验可能会受到影响。LCP可以通过监听 PerformanceObserver 接口中的 largest-contentful-paint 事件来获取。
```
let fcpObserver = new PerformanceObserver((entryList, observer) => {
    let entries = entryList.getEntries();
    for (let entry of entries) {
        // 打印 FCP 时间
        console.log('FCP: ', entry.startTime);
    }
});
fcpObserver.observe({type: 'paint', buffered: true});

let lcpObserver = new PerformanceObserver((entryList, observer) => {
    let entries = entryList.getEntries();
    for (let entry of entries) {
        // 打印 LCP 时间
        console.log('LCP: ', entry.startTime);
    }
});
lcpObserver.observe({type: 'largest-contentful-paint', buffered: true});


```
- 把一个大的静态资源拆分成无数个小的，就会使资源获取速度改善么？

- es6 箭头函数有什么特点，是为了解决什么问题
- es6 Symble是用来做什么的？
- 讲一下schema-form实现
- 还做过什么比较突出的项目或者技术？
- 知道客户端和h5是如何通信的么？
- vue中v-if和v-show区别
- 说一下Promise.allSettle 是什么？