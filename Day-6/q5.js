let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

function merge(arr1, arr2) {

    let arr = [];
    let l1 = arr1.length;
    let l2 = arr2.length;
    let i = 0;
    let j = 0;
    while (i < l1 && j < l2){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        }else{
            arr.push(arr2[j]);
            j++;
        }
    }

    while(i < l1){
        arr.push(arr1[i]);
        i++;
    }

    while(j < l2){
        arr.push(arr2[j]);
        j++;
    }
     
    return arr;
}

let ans = merge(arr1, arr2);
console.log(ans);