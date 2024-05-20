// یه رشته رو بهش می‌گیم تراز در صورتی که تعداد کاراکترهای L و R توش برابر باشن.
// یه رشته‌ی تراز به عنوان ورودی به ما داده شده، اون رو به بیشترین تعداد زیررشته‌ی پیوسته‌ی تراز بشکن.

// RLRRLLRLRL
// RL, RRLL, RL, RL

// RLRRRLLRLL
// RL, RRRLLRLL

/**
 * 
 * @param {string} in
 * @returns {string[]}
 */ 
function test(input) {
    // let input = args[0];
    let count = 0;
    let out = [];
    let cache = "";
    for (let i = 0; i < input.length; i++) {
        let val = input[i];
        cache += val;
        if (val === 'R') {
            count++;
        } else {
            count--;
        }
        if (count === 0) {
            out.push(cache);
            cache = ""
        }
    }
    return out
}

console.log(test("RLRRLLRLRL"));
console.log(test("RLRRRLLRLL"));
console.log(test(""));