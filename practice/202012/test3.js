// 一些常见算法 参考：https://zhuanlan.zhihu.com/p/28130533

// 冒泡排序 
// bubbleSort([1,4,2,3,5,7,6,8,9])
//--> [1, 2, 3, 4, 5, 6, 7, 8, 9]
function bubbleSort(arr){
    let stop;
    let len = arr.length;
    for(let i = 0; i <len; i++){
        stop = len - i - 1;
        for(let j = 0;  j < stop; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// 选择排序
// selectionSort([1,4,3,2,5,7,6,8])
// [1, 2, 3, 4, 5, 6, 7, 8]
function selectionSort(arr){
    let len = arr.length;
    let min;// 最小值的索引
    for(let i = 0; i < len; i++){
        min = i;
        for(let j = i+1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j;// 保存遍历过程中更小的索引值
            }
        }
        if(i !== min){
            swap(arr, i, min);// 交换两个值得位置
        }
    }
    return arr;
}
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// 插入排序
// insertionSort([1,4,2,3,6,5,7,9,8])
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
function insertionSort(arr){
    let len = arr.length;
    let value;
    let j;
    for(let i = 0; i < len; i++){
        value = arr[i];
        for(j = i - 1; j > -1 && arr[j] > value; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = value;
    }
    return arr;
}

// 归并排序
// mergeSort([1,4,2,3,6,9,7,8])
// [1, 2, 3, 4, 6, 7, 8, 9]
function mergeSort(myArray) {
    if (myArray.length < 2) { // 只有一个数的时候退出递归 ->结束条件
        return myArray;
    }
    var middle = Math.floor(myArray.length / 2),
        left = myArray.slice(0, middle),
        right = myArray.slice(middle);
    return merge(mergeSort(left), mergeSort(right)); // 递归 不断拆分只到一个数组只有一个数
}

function merge(left, right) {
    var result = [],
        left_index = 0,
        right_index = 0;
    // 将两个数组合并
    // 合并的时候按从小到大的顺序
    while (left_index < left.length && right_index < right.length) {
        if (left[left_index] < right[right_index]) {
            result.push(left[left_index++]);
        } else {
            result.push(right[right_index++]);
        }
    }
    // 和其他数组拼接
    return result.concat(left.slice(left_index)).concat(right.slice(right_index));
}

// 快速排序
// quickSort([1,4,2,5,6,8,7])
// [1, 2, 4, 5, 6, 7, 8]
var quickSort = function(myArray) {　　
    // 当被分的数组只剩一个时，退出递归
    if (myArray.length <= 1) {
        return myArray;// 结束条件
    }
    var pivotIndex = Math.floor(myArray.length / 2);　　
    var pivot = myArray.splice(pivotIndex, 1)[0]; // 基准值
    var left = [];　　
    var right = [];　　
    // 小的放左边，大的放右边
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] < pivot) {　　
            left.push(myArray[i]);　
        } else {
            right.push(myArray[i]);　
        }　　
    }　　
    // 递归  把数组合并在一起
    return quickSort(left).concat([pivot], quickSort(right));
};

