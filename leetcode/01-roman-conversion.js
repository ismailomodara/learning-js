const convertRomToInt = (s) => {
    let romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let iteration = s.length - 1;
    let total = 0;

    while (iteration >= 0) {
        let previous_value = s[iteration + 1] ? romans[s[iteration + 1]] : null
        let current_value = romans[s[iteration]]


        if (previous_value === null) {
            total = total + current_value
        } else {
            total = previous_value > current_value ? total - current_value : total + current_value
        }
        iteration--;
    }

    return total
}

const test = convertRomToInt("DCXXI")
console.log(test)
