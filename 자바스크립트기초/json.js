// 1. object to JSON
// stringify(obj1)

let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`)
    }
    // 함수는 object에 있는 data가 아니기때문에 제외
    // js에만 있는 함수도 포함되지 않음 
    // Symbol()
}

json = JSON.stringify(rabbit, ["name"])
// 원하는 property만 전달할 수 있음
// json = JSON.stringify(rabbit, (key, value) => {
//     console.log(`key: ${key}, value: ${value}`)
//     return key === 'name' ? 'yang' : value
// }) 
// 좀 더 세밀하게 쓰고 싶으면 callback 함수 
console.log(json)

// 2. JSON to object
// parse(json)

console.clear()
json = JSON.stringify(rabbit)
const obj = JSON.parse(json)
// const obj = JSON.parse(json, (key, value) => {
//     console.log(`key: ${key}, value:${value}`)
//     return key === 'birthDate' ? new Date(value) : value
// })
console.log("obj:",obj)
rabbit.jump() // jump function이 있음
// obj.jump() // jump funtion이 없음 

console.log(rabbit.birthDate.getDate()) // <= Date() = object data니까 해당 api도 쓸수있음
console.log(obj.birthDate.getDate()) // error! obj.birthDate는 string이기 때문이다. 

