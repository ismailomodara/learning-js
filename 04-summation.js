const numberOfCarryOperations = (first, second) => {

    let firstString = first.toString();
    let secondString = second.toString();

    const length = Math.max(firstString.length, secondString.length)

    firstString = firstString.padStart(length, '0')
    secondString = secondString.padStart(length, '0')

    const numerator = firstString.split('').map(i => Number(i))
    const denominator = secondString.split('').map(i => Number(i))

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
