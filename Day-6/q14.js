let str = "implementation";

function vowel(str) {
    let N = str.length;
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }
    }

    return count;
}

let ans1 = vowel(str);
console.log(ans1);

