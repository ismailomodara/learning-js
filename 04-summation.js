const numberOfCarryOperations = (first, second) => {

    let firstNum = first.toString().split('');
    let secondNum = second.toString().split('');

    const diff = firstNum.length - secondNum.length;
    const absDiff = Math.abs(diff);

    if(diff < 0) {
        firstNum = Array(absDiff).fill('0').concat(...firstNum)
    } else {
        secondNum = Array(absDiff).fill('0').concat(...secondNum)
    }

    const numerator = firstNum.map(i => Number(i))
    const denominator = secondNum.map(i => Number(i))


    let total_carry = 0;
    let temp_carry = 0;

    for (let i = numerator.length - 1; i >= 0; i--) {
        let sum = (numerator[i] + temp_carry) + denominator[i]
        temp_carry = sum >= 10 ? (sum - 10 === 0 ? 1 : sum - 10) : 0

        if(sum >= 10) {
            total_carry += 1
        }
    }

    console.log(total_carry)
}

numberOfCarryOperations(1, 99999)
