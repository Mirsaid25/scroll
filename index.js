let moon = document.querySelector('#moon')
let stars = document.querySelector('#stars')
let btn = document.querySelector('#btn')
let text = document.querySelector('#text')
let mountains_behind = document.querySelector('#mountains_behind')

window.onscroll = () => {
    
    let scrollY = window.scrollY

    moon.style.top = scrollY * 1.19 + "px"
    stars.style.marginLeft = scrollY / 2 + "px"
    btn.style.transform = `translateY(${scrollY/0.7}px)`
    text.style.transform = `translate(-${scrollY * 3.8}px, ${scrollY/1.3}px)`
    mountains_behind.style.transform = `translateY(${scrollY/1.8}px)`
}