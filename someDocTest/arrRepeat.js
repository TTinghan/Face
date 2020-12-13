// 前端数组去重
// arrUnique([1,1,1,1,2])
// [1, 2]

/** 第一种O(n)
 * ES6去重办法Set + splice删除
 */
function arrUnique(nums = []) {
    // {item} 生成值的对象集合
    let list= [...new Set(nums)];
    // 改变原数组 会返回删除项 start,deleteElement, items
    nums.splice(0, nums.length, ...list);
    return nums;
}

/**第二种O(n**2)
 * for 循环嵌套 + splice删除
 * @param nums
 */
function arrUnique(nums = []) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i] === arr[j]) {
                // 删除第二个出现的重复数据，且不插入
                nums.splice(j, 1);
                j--;
            }
        }
    }
    return nums;
}

/**
 * 第三种(O(n))
 * for循环 + indexOf
 * @param nums
 * @returns {*}
 */
function arrUnique(nums = []) {
    if(!Array.isArray(nums)) {
        console.error('error!');
        return;
    }
    let newArr = [];
    for(let i=0;i<nums.length;i++) {
        // 如果新的数组里面已经存在存过的值了就跳过 存在不同的值 再push进数组
        if(newArr.indexOf(nums[i]) === -1) {
            newArr.push(nums[i])
        }
    }
    return newArr;
}

/**
 * 第四种数组去重
 * for循环 + sort()
 * @param nums
 * @returns {T[]}
 */
function arrUnique(nums = []) {
    if(!Array.isArray(nums)) {
        console.error('error!');
        return;
    }
    nums = nums.sort();// 将数组排好正序
    let array = [].concat(nums[0]);
    // 从第二个开始 顺序与前一个进行比较，如果不相同就push
    for(let i=1; i<nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            array.push(nums[i])
        }
    }
    return array;
}

/**
 * 第五种
 * for循环 + includes
 * @param nums
 * @returns {*}
 */
function arrUnique(nums = []) {
    if(!Array.isArray(nums)) {
        console.error('error!');
        return;
    }
    let array = [];
    for(let i=0;i<nums.length; i++) {
        // 判断是否包含在新的数组里面，如果没有才push
        if(!array.includes(nums[i])) {
            array.push(nums[i]);
        }
    }
    return array;
}










