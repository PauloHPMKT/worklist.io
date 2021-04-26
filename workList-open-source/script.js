let inputData = document.querySelector('#inputData')
let enterData = document.querySelector('#enterData')
let list = document.querySelector('#list')


enterData.onclick = () => {
    if (inputData.value === '') {
        alert('Type a work value!')
    } else {
        list.innerHTML += `<li>${inputData.value}</li>`
        cleanData()
    }
}

function cleanData() {
    inputData.value = ''
}

/*inputData.addEventListener('keyup', function(e) {
    let key = e.which || e.keyCode;
    if (key == 13) { // 13 codigo da tecla Enter
        list.innerHTML += `<li>${inputData.value}</li>`
        cleanData()
    } else if (inputData = '') {
        alert('none')
    }
});*/