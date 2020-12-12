// primitive var가 아닌 애들은 모두 object

let number = 2
let num = '2'
let number2 = number

number2 = 3

// object
const obj = {
    name: "kim",
    age: 20
}
// obj = {
//     name: 'yang',
//     age: 5
// }
// 이건 불가능

obj.name = "yang"
// 이건 가능 
// reference가 가리키고 있는 obj 안에있는 내용은 변경이 가능