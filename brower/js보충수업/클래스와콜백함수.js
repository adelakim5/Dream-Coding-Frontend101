class Counter {
    constructor(runEvery5Times) {
        this.counter = 0;
        this.callback = runEvery5Times
    }

    increase() {
        this.counter++
        console.log(this.counter)
        if(this.counter % 5 === 0) {
            this.callback && this.callback(this.counter)
            // if(this.callback){
                //  this.callback()
            // }
        }
    }
}

function print(num){
    console.log(`yo ${num}`)
}

function alertCount(num) {
    alert(`alert! ${num}`)
}
const coolCounter = new Counter(print)
const coolCounter = new Counter(alertCount)
// 서로 다른 기능을 수행하는 obj들을 만들 수 있음 

coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()