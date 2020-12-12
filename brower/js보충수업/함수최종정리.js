function add(a, b) {
    return a + b
}

function print(name, age){
    console.log(`${name}, ${age}`)
}

const sum = add(3, 4)
console.log(sum)

const doSomething = add
const result = doSomething(3, 4)

print("kim", 8)

function surprise(operator) {
    const result = operator(2, 3) // add(2, 3)과 동일
    // 실행한 값을 result에 할당
    console.log(result)
}

function divide(a, b) {
    return a/b
}

surprise(divide)