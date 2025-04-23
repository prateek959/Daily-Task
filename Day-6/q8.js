let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function sum(arr) {
    let N = arr.length;
    let ans = 0;

    for (let i = 0; i < N - 1; i++) {
        let sum = 0;
        for (let j = i; j < N; j++) {
            sum += arr[j];
            ans = Math.max(sum, ans);
        }
    }

    return ans;
}

let ans1 = sum(input);
console.log(ans1);