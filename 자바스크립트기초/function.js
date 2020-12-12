function changeName(obj) {
    obj.name = 'park'
}

const yang = {
    name: 'kim'
}
changeName(yang)
console.log(yang)

function showMsg(msg, from) {
    if (from === undefined) {
        from = 'unknown'
    }
    console.log(`${msg} by ${from}`)
}

showMsg('hi')

function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }

    for (const arg of args) {
        console.log(arg)
    }
}

printAll("yang", 'won', 'kim', 'cheerup!!')


let globalMessage = 'global'

function printMessage() {
    let message = 'hello'
    console.log(message)
    console.log(globalMessage)

    function printAnother() {
        console.log(message)
        let childMessage = 'what?'
    }
}
printMessage()

console.log("----")
const print = function () {
    console.log('print')
}
print()

const printAgain = print;
printAgain()
// const sumAgain = sum;
// console.log(sumAgain(1, 3))



function randomQuiz(answer, printYes, printNo) {
    // printYes, printNo 라는 각각의 함수를 전달
    if (answer === 'love you') {
        printYes();
    } else {
        printNo()
    }
}

const printYes = function () {
    console.log("yes")
}

const printNo = function print() {
    // named => 디버깅할때 함수 이름이 나오게 하기 위하여
    // 혹은 재귀를 돌리기 위해
    // print()
    console.log("no")
}

randomQuiz("wrong", printYes.printNo)
randomQuiz("love you", printYes, printNo)

const simplePrint = function () {
    console.log("simplePrint")
}

const simplePrint = () => console.log("simplePrint")