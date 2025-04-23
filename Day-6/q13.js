let input = "A man, a plan, a canal: Panama";

function palindrome(input) {

    let str = '';
    let N = input.length;
    for (let i = 0; i < N; i++) {
        let val = input[i].toLowerCase();
        if (val.charCodeAt() >= 97 && val.charCodeAt() <= 122){
            str += val;
        }
    }

    let left = 0;
    let right = str.length - 1;

    while(left <= right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

let ans1 = palindrome(input);
console.log(ans1);