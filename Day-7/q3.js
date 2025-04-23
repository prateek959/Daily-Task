let s = "ADOBECODEBANC";
let t = "ABC";

function substring(s, t) {

    let obj = {};
    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]] === undefined) {
            obj[t[i]] = 1;
        } else {
            obj[t[i]]++;
        }
    }

    let count = t.length;
    let left = 0;
    let right = 0;
    let N = s.length;
    let index = -1;
    let ans = Infinity;

    while (right < N) {

        obj[s[right]]--;
        if (obj[s[right]] >= 0) {
            count--;
        }
        while (!count && left <= right) {

            if (ans > right - left + 1) {
                ans = right - left + 1;
                index = left;
            }

            obj[s[left]]++;
            if (obj[s[left]] > 0) {
                count++;
            }
            left++;
        }
        right++;
    }

    let str = '';

    for (let i = index; i < index + ans; i++) {
        str += s[i];
    }

    return str;
}

let ans1 = substring(s, t);
// console.log(ans1);

function sub(s, t) {
    let obj = {};
    for (let i = 0; i < t.length; t++) {
        if (obj[t[i]] === undefined) {
            obj[t[i]] = 1;
        } else {
            obj[t[i]]++;
        }
    }
    let count = t.length;
    let ans = '';

    for (let i = 0; i < N - 1; i++) {
        for (let j = i; j < N; j++) {
            let str = '';
            for (let k = i; k <= j; k++) {
                str += s[k];
            }
        }
    }

}