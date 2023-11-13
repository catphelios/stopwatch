let sc = document.querySelector('#sc')
let mn = document.querySelector('#mn')
let hr = document.querySelector('#hr')

setInterval(() => {
    let ss = sec * 6
    let mm = min * 6
    let hh = hou * 30

    hr.style.transform = `rotateZ(${hh}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
});



