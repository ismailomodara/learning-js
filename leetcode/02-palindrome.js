const isPalindrome = (head) => {
    return head === head.reverse()
}

const isPalindrome2 = (head) => {
    let iteration = 0;
    let mid = (head.length / 2 ) - 1
    let res = false;

    while (iteration <= mid) {
        res = head[iteration] === head[head.length - 1 - iteration];
        iteration++
    }
}

(() => {
    console.time()
    isPalindrome2([1, 2, 2, 1])
    console.timeEnd()
})()
