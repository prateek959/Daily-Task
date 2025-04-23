let num = 8472;

function sum(num){

    let ans = 0;

    while(num > 0){
        ans += num % 10;
        num = Math.floor(num/10);
    }

    return ans;
}

let ans = sum(num);
console.log(ans);