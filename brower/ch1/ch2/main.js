// 한번 할당한 이후로 다른 것으로 변환할 이유가 없으니까 
// let이 아니라 const로 지정
const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')

addEventListener('load', () => {
    // window가 전부 load가 되면 그 때 target의 크기를 읽어오게끔
    const targetRect = target.getBoundingClientRect()
    console.log(targetRect)
    const targetHalfWidth = targetRect.width / 2
    const targetHalfHeight = targetRect.height / 2
    // 마우스 커서의 움직임대로 따라가게 해야 함
    // 윈도우 위에서 마우스가 움직이면 
    document.addEventListener('mousemove', (event) => {
        // 이벤트가 발생하면 이벤트 오브젝트가 전달되니까 
        // console.log(`${event.clientX} ${event.clientY}`)
        // 브라우저 창 위에있는 x, y좌표를 받아오고 싶으니까 
        const x = event.clientX
        const y = event.clientY

        vertical.style.transform = `translateX(${x}px)`
        horizontal.style.transform = `translateY(${y}px)`
        // vertical.style.left = `${x}px`
        // horizontal.style.top = `${y}px`
        // style 지정할때는 px를 반드시 불여야 함

        target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`
        // target.style.left = `${x}px`
        // target.style.top = `${y}px`

        tag.style.transform = `translate(${x}px, ${y}px)`
        // tag.style.left = `${x}px`
        // tag.style.top = `${y}px`
        tag.innerHTML = `${x}px, ${y}px`
    })
})