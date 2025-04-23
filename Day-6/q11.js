let arr = ["flower", "flow", "flight"];
function prefix(arr) {
    let ans = '';
    let N = arr.length;
    let str = ''
    for (let i = 0; i < arr[0].length; i++) {
        str += arr[0][i];
        for (let j = 0; j < N; j++) {
            if (!arr[j].includes(str)) {
                return ans;
            }
        }
        ans += arr[0][i];
    }

    return ans;
}

let ans1 = prefix(arr);
// console.log(ans1);