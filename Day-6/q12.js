let text = "hello world";
let pattern = "world";

function sub(text, pattern) {

    let N = text.length;
    let left = 0;

    while (left < N) {
        let right = 0;
        let ans = true;
        let index = left;

        while (right < pattern.length) {
            if (text[index] !== pattern[right]) {
                ans = false;
                break;
            }
            index++;
            right++;
        }

        if (ans) {
            return left;
        }
        left++;
    }
};


let ans1 = sub(text, pattern);
console.log(ans1);

