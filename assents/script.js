const watch = document.getElementById('cont')
const btn_start = document.getElementById('start')
const btn_pause = document.getElementById('stop')
const btn_reset = document.getElementById('reset')

btn_start.addEventListener('click', start)
btn_pause.addEventListener('click', pause)
btn_reset.addEventListener('click', reset)

var sec = 0
var min = 0
var hou = 0

function start() {
    count()
    stopwatch = setInterval(count, 1000)
    btn_start.removeEventListener('click', start)
}

function pause() {
    clearInterval(stopwatch)
    setTimeout(() => {
        btn_start.addEventListener('click', start)
    }, 700);
}

function reset() {
    clearInterval(stopwatch)
    btn_start.addEventListener('click', start)
    watch.innerHTML = `00:00:00`
    sec = 0
    min = 0
    hou = 0
}

function add0(num) {
    if (num < 10) {
        return '0'+num
    } else {
        return num
    }
}

function count() {
    if (sec != 59) {
        sec++
        watch.innerHTML = `${add0(hou)}:${add0(min)}:${add0(sec)}`
    } else {
        min++
        sec = 0
        watch.innerHTML = `${add0(hou)}:${add0(min)}:${add0(sec)}`
    }
    if (min == 60) {
        hou++
        min = 0
        watch.innerHTML = `${add0(hou)}:${add0(min)}:${add0(sec)}`
    } 
}