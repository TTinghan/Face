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
 