let input = [0, 1, 0, 2, 3, 0, 4];

function zero(input) {
    let arr = [];
    let N = input.length;

    for (let i = 0; i < N; i++) {
        if (input[i] !== 0) {
            arr.push(input[i]);
        }
    }

    return arr;
}

let ans1 = zero(input);
// console.log(ans1);

function remove(input) {
    let N = input.length;
    let i = 0;
    let j = 0;

     while(j < N){
        if(input[i] !== 0){
            i++;
            j++;
        }else if(input[i] === 0 && input[j] === 0){
          j++;
        }else{
            input[i] = input[j];
            input[j] = 0;
            i++;
            j++;
        }
     }

     return input;
}

let ans2 = remove(input);
console.log(ans2);