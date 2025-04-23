let str1 = "listen";
let str2 = "silent";

function anagram(str1, str2) {
    
    if(str1.length !== str2.length){
        return false
    }

    let N = str1.length;
    let obj1 = {};
    let obj2 = {};

    for(let i=0; i<N; i++){
        if(obj1[str1[i]] === undefined){
            obj1[str1[i]] = 1;
        }else{
            obj1[str1[i]]++;
        }

        if(obj2[str2[i]] === undefined){
            obj2[str2[i]] = 1;
        }else{
            obj2[str2[i]]++;
        }

    }

    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }

    return true;
}

let ans1 = anagram(str1, str2);
console.log(ans1);