let array = [1, 2, 3, 4, 5];
let k = 2;

function rotate(arr, k) {
    let N = arr.length;
    let store = [];
    k = k % N;

    if(k == 0){
        return arr;
    }

    for (let i = 0; i < k; i++) {
        let last = arr.pop()
        store.push(last);
    }

    for(let i=0; i<store.length; i++){
        arr.unshift(store[i]);
    }

    return arr;
}

// let ans1 = rotate(array, k);
// console.log(ans1);

function normal(arr, k){
    let N = arr.length;

    k = k % N;

    if(k == 0){
        return arr;
    }

    for(let i=0; i<k; i++){
        let last = arr.pop();
        arr.unshift(last);
    }

    return arr;
}

// let ans2 = normal(array, k);
// console.log(ans2);