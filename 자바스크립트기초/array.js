'use strict'

const arr1 = new Array()
const arr2 = [1, 2]

const fruits = ['🍑','🍏']
console.log(fruits)
console.log(fruits[0])
console.log(fruits[3])

for(let fruit of fruits){
    console.log(fruit)
}
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array)
})

fruits.push("🍉","🥑")
console.log(fruits)
fruits.pop()
console.log(fruits)

fruits.unshift("🍒")
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.push("🥑","🍒","🍓","🍌","🍍","🍇","🥝")
console.log(fruits)
fruits.splice(1, 1)
console.log(fruits)
fruits.splice(1, 1, "🥥")
console.log(fruits)

const fruits2 = ["🍅", "🍊"]
const newFruits = fruits.concat(fruits2)
console.log(newFruits)

console.log(fruits)
console.log(fruits.indexOf("🍏"))
console.log(fruits.includes("🍏"))


console.log("----------")

fruits.push("🍍")
console.log(fruits)
console.log(fruits.indexOf("🍍"))
console.log(fruits.lastIndexOf("🍍"))