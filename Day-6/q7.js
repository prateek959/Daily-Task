let array = [1, 3, 5, 7, 9];
let target = 7;

function binary(arr, target) {
    let N = arr.length;
    let left = 0;
    let right = N - 1;
    while (left <= right) {
     let mid = left + Math.floor((right - left)/2);
     if(arr[mid] === target){
        return mid;
     }else if(arr[mid] > target){
        right = mid - 1;
     }else{
        left = mid + 1;
     }
    }

    return -1;
}

let ans1 = binary(array, target);
// console.log(ans1);

function index(arr, target, left, right){

    if(left > right){
        return -1;
    }
    
   let mid = left + Math.floor((right - left)/2);

   if(arr[mid] === target){
    return mid;
   }else if(arr[mid] > target){
   return index(arr, target, left, mid - 1);
   }else{
    return index(arr, target, mid + 1, right);
   }

};

let ans2 = index(array, target, 0, array.length);
// console.log(ans2);