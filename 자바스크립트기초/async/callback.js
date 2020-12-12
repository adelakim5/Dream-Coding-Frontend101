'use strict';

// js is synchronous
// execute the code block by order after hoisting
// hoisting: var, function declaration 선언들이 자동적으로 제일 위로 올라가는 것
console.log('1')
// async: 언제 코드가 실행될지 예측 ㄴㄴ
setTimeout(() => { // 바로 실행되지 않음, 우리가 만든 함수를 setTimeOut에 전달
    console.log("2") // 나중에 다시 불러줘!! callback!!!
}, 1000) // 비동기 
// console.log('2')
console.log('3')

// callback은 비동기일때만 쓰나? 놉

// synchronous callback
function printImmediatly(print) {
    print()
} // hoisting되기 때문에 맨 위로 올라갔을 것 

printImmediatly(() => console.log('hello'))

// asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
} // hoisting되기 때문에 맨 위로 올라갔을 것 

printWithDelay(() => console.log("async callback world"), 1000) // 비동기 

// 콜백지옥 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id === 'yang' && password === '1234') ||
                (id === 'kim' && password === '4321')) {
                onSuccess(id)
            } else {
                onError(new Error('not found'))
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'yang') {
                onSuccess({
                    name: 'yang',
                    role: 'admin'
                })
            } else {
                onError(new Error('no access'))
            }
        }, 1000)
    }
}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(user,
            (userWithRole) => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            (error) => {
                console.log(error)
            })
    },
    error => {
        console.log(error)
    }
)