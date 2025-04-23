function factorial(n) {

    if (n === 1 || n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

let ans = factorial(5);
// console.log(ans);

function fact(n) {

    if(n == 0){
        return 1;
    }

    let mul = 1;

    for (let i = 2; i <= n; i++) {
        mul *= i;
    }

    return mul;
}

let ans2 = fact(5);
// console.log(ans2);