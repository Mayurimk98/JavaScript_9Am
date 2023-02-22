
//element find

{/* <ul>
<li>Mayuri</li>
<li>Shilpa</li>
<li>Jaya</li>
<li>Sathish</li>
<li>Habib</li>
<li>Dinga</li>
</ul>
<input type="text">
<button>AddMe</button> */}

//Program 1
let ulList = document.querySelector('ul')
console.log(ulList)
let inputBox = document.querySelector('input')
console.log(inputBox)
let btn = document.querySelector('button')
console.log(btn)

btn.addEventListener('click', function () {
    let text = inputBox.value //dinga
    let newLi = document.createElement('li') //<li></li>
    newLi.textContent = text //<li>dinga</li>
    ulList.appendChild(newLi)
    inputBox.value=""
})


