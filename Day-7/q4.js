let array = [1, 1, 1, 2, 2, 3];
let k = 2;


function frequency(arr, k) {
    let obj = {};
    let N = arr.length;

    for (let i = 0; i < N; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }

    let ans = [];
    for (let key in obj) {
        if (obj[key] >= k) {
            ans.push(+key);
        }
    }

    return ans;
};

let ans1 = frequency(array, k);
// console.log(ans1);

function freq(arr, k) {
    let i = 0;
    let j = 0;
    let count = 0;
    let N = arr.length;
    let ans = [];
    while (j < N) {
        if (arr[i] === arr[j]) {
            count++;
            j++;
        } else {
            if (count >= k) {
                ans.push(arr[i]);
            }
            count = 1;
            i = j;
        }
    }
return ans;
}

let ans2 = freq(array, k);
// console.log(ans2);