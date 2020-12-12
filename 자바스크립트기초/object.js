const obj1 = {}
const obj2 = new Object()

function print(person){
  console.log(person.name)
  console.log(person.age)
}

const yangwon = {name: 'kim', age: 20}
print(yangwon)
yangwon.isStudent = true
console.log(yangwon.isStudent)

delete yangwon.isStudent
console.log(yangwon.isStudent)

console.log(yangwon.name); // . 을 사용하여 접근
console.log(yangwon['name'])
yangwon['isStudent'] = true
console.log(yangwon.isStudent)

function printVal(obj, key){
    // key값이 사용자로부터 입력되어지는 값이라 정확히 어떤 값이 들어올 지 모른다면 
    // console.log(obj.key)
    console.log(obj[key])
}

printVal(yangwon, 'name')

const person1 = {name: 'lee', age: 2}
const person2 = {name: 'park', age: 3}
const person3 = {name: 'choi', age: 4}
const person4 = new Person('jang', 4)

function Person(name, age){
    this.name = name
    this.age = age
}
console.log(person4)

console.log('name' in person1)
console.clear()

for(key in person1){
    console.log(key)
}

const array = [1, 2, 4, 5]
for(value of array){
    console.log(value)
}

const user = {name: 'yangwon', age: '20'}
const user2 = user
// user2.name = "coder"
console.log(user)

//  old way
const user3 = {}
for(key in user){
    user3[key] = user[key]
}
console.log(user3)

const user4 = {}
Object.assign(user4, user)
console.log(user4)

const fruit1 = {color: 'red'}
const fruit2 = {color: 'blue', size:'big'}
const mixed = Object.assign({}, fruit1, fruit2)
console.log(mixed.color)
console.log(mixed.size)