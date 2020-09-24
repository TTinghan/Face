// 手写防抖&节流
// 防抖和节流的区别：
// 防抖: 将多次执行变为最后一次执行
// 节流: 将多次执行变为隔一段时间执行一次
function debounce(fun, wait) {
    let timer = null;
    clearTimeout(timer);
    return (...args)=>{
        timer = setTimeout(()=>{
            fun(...args);
        }, wait);
    };
}

function throttle(fun, wait) {
    let timer;
    return (...args)=>{
        if(timer) {
            return;
        }
        timer = setTimeout(()=>{
            fun(...args);
            timer = null;
        }, wait);
    };
}



























