let input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function trapping(input) {
    let N = input.length;
    let leftmax = new Array(N);
    leftmax[0] = input[0];
    for (let i = 1; i < N; i++) {
        leftmax[i] = Math.max(input[i], leftmax[i - 1]);
    }

    let rightmax = new Array(N);
    rightmax[N - 1] = input[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        rightmax[i] = Math.max(input[i], rightmax[i + 1]);
    }

    let ans = 0;

    for (let i = 1; i < N; i++) {
        let min = Math.min(leftmax[i], rightmax[i]);
        if (min > input[i]) {
            ans += min - input[i];
        }
    }
return ans;
};

// let ans1 = trapping(input);
// console.log(ans1);


function water(input) {
    let N = input.length;
    let max = -Infinity;
    let maxIndex;

    for (let i = 0; i < N; i++) {
        if (input[i] > max) {
            max = input[i];
            maxIndex = i;
        }
    }
    let val = -Infinity;
    let ans = 0;
    for (let i = 1; i < maxIndex; i++) {
        val = Math.max(input[i - 1], val);
        if (val > input[i]) {
            ans += val - input[i];
        }
    }

    val = -Infinity;
    for (let i = N - 2; i > maxIndex; i--) {
        val = Math.max(input[i + 1], val);
        if (val > input[i]) {
            ans += val - input[i];
        }
    }

    return ans;
}

let ans2 = water(input);
console.log(ans2);