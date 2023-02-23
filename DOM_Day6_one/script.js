
let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let AddMeBtn = document.querySelector('#Addmebtn')


//Step 1
AddMeBtn.addEventListener('click', function () {
    let text = inputBox.value
    let newLI = document.createElement('li') //<li></li>
    newLI.textContent = text //<li>userEnterText</li>
    ulList.appendChild(newLI)
})


