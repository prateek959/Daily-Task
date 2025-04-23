let array = [4, 5, 6, 7, 0, 1, 2];
let target = 0;


function rotate(arr, target) {

    let N = arr.length;
    let left = 0;
    let right = N - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
             if(arr[left] > target){
                left = mid + 1;
             }else{
                right = mid - 1;
             }
        }else{
            if(arr[left] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }

    return -1;

};

let ans1 = rotate(array, target);
console.log(ans1);