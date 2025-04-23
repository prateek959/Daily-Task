let n = 7;

function fibonacci(n) {

    if (n == 0 || n == 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

let ans1 = fibonacci(n);
console.log(ans1);