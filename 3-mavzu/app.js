const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');


window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loading.style.display = "none"
    }, 2000)
})

const currentYear = new Date().getFullYear()

const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`)
year.innerText = currentYear + 1

function updateCountDown() {
    const currentTime = new Date()

    const diff = newYear - currentTime
    // console.log(diff);
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;


    days.innerHTML = d
    hours.innerHTML = (h<10) ? "0"+h:h
    minutes.innerHTML = (m<10) ? "0"+m:m
    seconds.innerHTML = (s<10) ? "0"+s:s

    

}

setInterval(updateCountDown, 1000)












// setTimeout(AlertConsole,2000)
// let count = 0
// let h1 = document.querySelector("h1")
// function Clock(){
//     let date = new Date()
//     h1.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }
// setInterval(Clock,1000)


// console.log("Hello world1");
// function AlertConsole (){
//     console.log("Hello world2");
// }

// setInterval(() => {
//     let date = new Date()
//     // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
//     count += 1
//     h1.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//     // h1.innerHTML = count
// }, 1000)


// setTimeout(()=>{
//     console.log("Hello world2");
// },3000)

// console.log("Hello world3");