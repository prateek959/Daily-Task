let input = ["2", "1", "+", "3", "*"];

function arithmetic(input) {
    let stk = [];
    let N = input.length;
    for (let i = 0; i < N; i++) {
        let v1 = 0;
        let v2 = 1;

        if (input[i] === '+') {
            while (stk.length > 0) {
                v1 += stk.pop();
            }
            stk.push(v1);
        } else if (input[i] === '*') {
            while (stk.length > 0) {
                v2 *= stk.pop();
            }
            stk.push(v2);
        } else if (input[i] === '-') {
            while (stk.length > 0) {
                v1 -= stk.pop();
            }
            stk.push(v1);
        }else if(input[i] === '/'){
            while(stk.length > 0){
                v2 /= input[i];
            }
            stk.push(v2);
        }else{
            stk.push(input[i]);
        }
    }

    return stk[stk.length - 1];
}

let ans1 = arithmetic(input);
console.log(ans1);
