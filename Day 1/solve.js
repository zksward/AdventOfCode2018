const fs = require('fs')

const data = fs.readFileSync('input').toString().split('\n').map(n => parseInt(n))

let result = data.reduce((sum, change) => sum + change, 0)

console.log(result)