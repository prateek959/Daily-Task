let input = [7, 2, 9, 4, 9, 5];

function second(input) {
    let max = -Infinity;
    let N = input.length;
    for (let i = 0; i < N; i++) {
        if (input[i] > max) {
            max = input[i];
        }
    }

    let ans = -Infinity;
    for (let i = 0; i < N; i++) {
        if (input[i] !== max && input[i] > ans) {
            ans = input[i];
        }
    }

    return ans;
}

let ans1 = second(input);
// console.log(ans1);


function secondlargest(input) {

    let N = input.length;
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < N; i++) {
        if (input[i] > first) {
            second = first;
            first = input[i];
        }

        if (input[i] !== first && input[i] > second) {
            second = input[i];
        }
    }

    return second;
}

let ans2 = secondlargest(input);
console.log(ans2);