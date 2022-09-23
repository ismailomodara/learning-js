const findWord = (rules) => {
    let letters = [];
    const newRules = rules.reduce((acc, rule) => {
        letters.push(rule.charAt(0))
        letters.push(rule.charAt(2))

        if(acc[rule.charAt(0)]) {

        }
        return {
            ...acc,
            [rule.charAt(0)]: rule.charAt(2)
        }
    }, {})

    letters = [...new Set(letters)]

    console.log(newRules)
    letters.sort((j,i) => {

        if(!newRules[i]) {
            return 1
        }
        else if(!newRules[j]) {
            return 1
        }

        console.log(i, j, newRules[j])
        return j === newRules[i] ? 1 : -1
    })

    console.log(letters)

    console.log(letters.join(''))
}

//SWIFT
// findWord(["I>F", "W>I", "S>W", "F>T"])
// HUNGARY
findWord(["G>A", "H>U", "N>G", "A>R", "U>N", "R>Y"])
