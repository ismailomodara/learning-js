const counts = (a, b) => {
    console.time()
    const aObj = a.reduce((acc, i) => {
        if(!acc[i]) {
            acc[i] = 0
        }
        acc[i] = acc[i] + 1;
        return acc
    }, {})

    let totalCounts = []
    let iteration = 0

    while (iteration < b.length) {

        let aCount = Object.keys(aObj).reduce((acc, key) => {
            if(Number(key) <= b[iteration]) {
                acc += aObj[key]
            }
            return acc
        }, 0)

        totalCounts.push(aCount)
        iteration++
    }

    console.timeEnd()
    return totalCounts
}

let testA = [];
let testB = [];

for (let i = 0; i <= 900000; i++) {
    testA.push(Math.floor(Math.random() * 10))
    testB.push(Math.floor(Math.random() * 14))
}

for (let i = 0; i <= 100000; i++) {
    testB.push(Math.floor(Math.random() * 14))
}


const test = counts(testA, testB);
console.log(test)
