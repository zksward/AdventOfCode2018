const fs = require('fs')

const data = fs.readFileSync('input').toString().split('\n').map(n => parseInt(n))

const findRepeatedFrequency = (data) => {
    let frequencies = new Set()
    let frequency = 0;
    
    while (true) {
        for (const change of data) {
            frequency += change
            if (frequencies.has(frequency)) {
                return frequency
            }
            frequencies.add(frequency)
        }
    }
}

console.log(findRepeatedFrequency(data))