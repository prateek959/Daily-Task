let str = "programming";

function duplicate(str){
    let obj = {};
    let ans = '';
    let N = str.length;

    for(let i=0; i<N; i++){
        if(obj[str[i]] === undefined){
            obj[str[i]] = 1;
            ans += str[i];
        }else{
            obj[str[i]]++;
        }
    }

    return ans;
}

let ans1 = duplicate(str);
console.log(ans1)