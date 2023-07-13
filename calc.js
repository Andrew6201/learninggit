

function insertNow(){
    inputEl = document.getElementById("input-el")
    ansEl = document.getElementById("ans")
    let calc= (inputEl.value*1) / 1000
    ansEl.innerText = calc + "KM"
}
function delet(){
    inputEl.value = ''
}

function insertthen(){
    inputElM = document.getElementById("input")
    ansElM = document.getElementById("answer")
    let calcu= (inputElM.value*1000)
    ansElM.innerText = calcu + "M"
}
function deleted(){
    inputElM.value = ''
}