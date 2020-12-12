'use strict';
let glbalName = 'global' 
{
    let name = 'yang'
    console.log(name)
    name = 'hello'
    console.log(name)
    console.log(glbalName)
}

console.log(glbalName) 
{
    age = 4
    var age;
}
console.log(age)

const count = 17 
const size = 17.1
console.log(`value: ${count}, type:${typeof count}`)
console.log(`value: ${size}, type:${typeof size}`)

const infinity = 1/0
const negativeInfinity = -1/0
const nAn = 'not a number' / 2
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

const bigInt = 1234567890123456789012345678901234567890n
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)
Number.MAX_SAFE_INTEGER

const char = 'c'
const yang = 'yang'
const greeting = 'hello' + yang
console.log(`value: ${greeting}, type: ${typeof greeting}`)
const helloYang = `hi ${yang}`
console.log(`value: ${helloYang}, type: ${typeof helloYang}`)

const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1===symbol2)

const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1 === gSymbol2)
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1.description}`)


let text = 'hello'
console.log(`value: ${text}, type: ${typeof text}`)
text = 1
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`)
console.log(text.charAt(0))