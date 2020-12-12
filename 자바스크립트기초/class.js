class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    speak() {
        console.log(`${this.name}: hello`)
    }
}

const kim = new Person('yangwon', 20)
console.log(kim.name, kim.age)
kim.speak()

class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    get age(){
        return this._age
    }
    set age(value){
        this._age = value
    }
}

const user1 = new User('Yangwon', 'Kim', -1)
console.log(user1.age)

class Experiment{
    publicField = 2
    #privateFiled = 0
}

const experiment = new Experiment()
console.log(experiment.publicField)
console.log(experiment.privateFiled)

class Article{
    static publisher= 'YANGWON KIM'
    constructor(articleNumber){
        this.articleNumber = articleNumber
    }

    static printPublisher(){
        console.log(Article.publisher)
    }
}

const article1 = new Article(1)
const article2 = new Article(2)
console.log(Article.publisher)

class Shape{
    constructor(width, height, color){
        this.width = width
        this.height = height
        this.color = color
    }
    draw(){
        console.log(`drawing ${this.color} color!`)
    }

    getArea(){
        return this.width * this.height
    }
}

class Rectangular extends Shape{
    // 이렇게만 정의해도 Shape 내 필드와 메소드 다 들어옴 
}
class Triangle extends Shape{
    draw(){
        // super.draw()
        console.log('🔺')
    }
    getArea(){
        return (this.width * this.height)/2
    }
}

const rectangular = new Rectangular(20, 20, 'blue')
rectangular.draw()
console.log(rectangular.getArea())
const triangle = new Triangle(20, 20, 'red')
triangle.draw()
console.log(triangle.getArea())

console.log(rectangular instanceof Rectangular);
console.log(triangle instanceof Rectangular);
console.log(rectangular instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);