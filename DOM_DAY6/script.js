let ulList = document.querySelector('ul')
console.log(ulList)
let inputTextbox = document.querySelector('input')
console.log(inputTextbox)
let button = document.querySelector('button')
console.log(button)

//<li>Pranali</li>

button.addEventListener('click', function () {
    let text = inputTextbox.value //pranali
    //console.log(text)
    let newLi = document.createElement('li') //<li></li>
    //console.log(newLi)
    newLi.textContent = text //<li>Pranali</li>
    ulList.appendChild(newLi)
    inputTextbox.value=""
})