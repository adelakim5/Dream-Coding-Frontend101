/*console.log('my' + 'cats')
console.log('1' + 2)
console.log(`string literals: 1 + 2 = ${1+2}`)

console.log(1 + 1)
console.log(1 - 1)
console.log(1 / 1)
console.log(1 * 1)
console.log(5 % 2)
console.log(2 ** 3)

let counter = 2
const preIncrement = ++counter
// counter = counter+1
// preIncrement = counter
const postIncrement = counter++
// postIncrement = counter
// counter = counter+1

const value1 = true
const value2 = 4 < 2

console.log(`or: ${value1 || value2 || check()}`)
console.log(`and: ${value1 && value2 && check()}`)

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('🙋🏻‍♀️')
    }
    return true
}

console.log(!value1)


const stringFive = '5'
const numberFive = 5

console.log(stringFive == numberFive)
console.log(stringFive != numberFive)

console.log(stringFive === numberFive)
console.log(stringFive !== numberFive)


const kim1 = {
    name: 'kim'
}
const kim2 = {
    name: 'kim'
}
const kim3 = kim1
console.log(kim1 == kim2)
console.log(kim1 === kim2)
console.log(kim1 === kim3)
console.log('---')
console.log(0 == false)
console.log(0 === false)
console.log('' == false)
console.log('' === false)
console.log(null == undefined)
console.log(null === undefined)
console.log("---")
const name = 'kim'
if (name === 'kim') {
    console.log("What's up kim!")
} else if (name === 'yang') {
    console.log("Hi yang")
} else {
    console.log('unknown')
}
console.log("---")
console.log(name === 'kim' ? 'yes' : 'no')
console.log("---")
const browser = 'IE'
switch (browser) {
    case 'IE':
        console.log('go away!')
        break
    case 'Chrome':
        console.log('love you!')
        break
    case 'Firefox':
        console.log('love you!')
        break
    default:
        console.log('same all!')
        break
}

let i = 3
while (i > 0) {
    console.log(`while: ${i}`)
    i--
}

do {
    console.log(`do while: ${i}`)
    i--
} while (i > 0)

console.log("---")

for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}

for (let i = 3; i > 0; i = i - 2) {
    console.log(`inline variable for: ${i}`)
}
*/
// console.log("---")

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`i: ${i}, j: ${j}`)
//     }
// }

// for (let i = 0; i < 11; i++) {
//     if (i % 2 !== 0) continue
//     console.log(i)
// }

for (let i = 0; i < 11; i++) {
    if (i > 8) break
    console.log(i)
}