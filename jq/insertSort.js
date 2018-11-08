/**
 * 插入排序升序
 * @param arr 待排序数组
 * @param n   数组长度
 */
function insertSortAsc(arr,n) {
    //从数组的第二个元素开始遍历每个待排序元素
    for (let i=1;i<n;i++){
        //将当前的待排序元素与待排序元素之前的每个元素依次比大小
        for(let j=i;j>0&&arr[j]<arr[j-1];j--){
               //如果当前的待排序元素小于当前元素前一个元素则交换位置
               swap(arr,j,j-1);
        }
    }
}

/**
 * 插入排序降序
 * @param arr
 * @param n
 */
function insertSortDes(arr,n) {
    //从数组的第二个元素开始遍历每个待排序元素
    for (let i=1;i<n;i++){
        //将当前的待排序元素与待排序元素之前的每个元素依次比大小
        for(let j=i;j>0&&arr[j]>arr[j-1];j--){
            //如果当前的待排序元素大于当前元素前一个元素则交换位置
            swap(arr,j,j-1);
        }
    }
}

/**
 * 交换元素位置
 * @param arr待排序数组
 * @param index1 待排序元素的数组下标
 * @param index2 需要与待排序元素交换位置的元素的数组下标
 */
function swap(arr, index1, index2) {
    arr[index1]=arr.splice(index2,1,arr[index1])[0];
}

var insertSort=[0,5,2,11,8,4,9];
insertSortAsc(insertSort,insertSort.length);
console.log(insertSort);
insertSortDes(insertSort,insertSort.length);
console.log(insertSort);


