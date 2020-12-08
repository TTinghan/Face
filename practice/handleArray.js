// 算法中对于数组的操作

// 数组去重
function arrDuplication(arr) {
    let newArr = [...new Set(arr)];
    // arr.splice(0, arr.length, ...newArr); return arr;// 这样会改变原数组
    return newArr;
}

// includes 或indexOf===-1
function arrDuplication(arr) {
    if(Array.isArray(arr)) {
        throw new Error('not a Array')
    }
    let newArr = [];
    let arrLen = arr.length;
    for(let i = 0; i < arrLen; i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

// 对于两个数组合并的处理 [1,3,5],[2,4,6] => [1,2,3,4,5,6]
function merge(nums1, nums2) {
    let nums = [];
    //合并两个有序数组
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            nums.push(nums1.shift())
        } else {
            nums.push(nums2.shift());
        }
    }
    // 如果nums2都遍历完了 就将nums1的最后一个数字推进数组
    while (nums1.length > nums2.length){
        nums.push(nums1.shift())
    }
    // 如果nums1都遍历完了 就将nums2的最后一个数字推进数组
    while (nums1.length < nums2.length){
        nums.push(nums2.shift())
    }
    return nums;
}
 