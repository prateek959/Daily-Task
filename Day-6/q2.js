let Array = [2, 3, 2, 4, 2];
let Value = 2;

function frequency(arr, val) {
    let count = 0;
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        if (arr[i] === val) {
            count++;
        }
    }

    return count;
};

let ans1 = frequency(Array, Value);
console.log(ans1);


function freq(arr, val) {
    let obj = {};
    let N = arr.length;
    for (let i = 0; i < N; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }

    return obj[val];

}

let ans2 = freq(Array, Value);
console.log(ans2);