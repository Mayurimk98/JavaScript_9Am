{/* <h1 id="std" class="tenth" name="studentList">Students</h1>
<ol>
    <li class="ten">Mayuri</li>
    <li  class="ten">Jaya</li>
    <li  class="ten">Sathish</li>
    <li  class="ten">Habib</li>
    <li  class="ten">Amit</li>
    <li>  </li>
</ol> */}

// let a1=document.querySelector('#std')
// console.log(a1)
// let a2=document.querySelector('.tenth')
// console.log(a2)
// let a3=document.querySelector('h1')
// console.log(a3)
// let a4=document.querySelector("h1[name='studentList']")
// console.log(a4)

//============================================

// console.log(document.getElementById('std'))

//=============================================
//multiple

let y1 = document.querySelectorAll('li')
console.log(y1) //nodeList  ==> static
console.log(y1.length)//5

// let u1=y1[0].parentNode.appendChild(document.createElement('li'))
// console.log(y1.length) //6

let y2=document.getElementsByTagName('li') //htmlCollection
console.log(y2.length)
// let u1=y2[0].parentNode.appendChild(document.createElement('li'))
// console.log(u1)
// console.log(y2.length)


//<h1 id="std" class="tenth one two" name="studentList">Students</h1>
// console.log(a1.className)
// console.log(a1.classList)

// a1.classList.remove('one')
// console.log(a1.classList)

// a1.classList.add('newClass')
// console.log(a1.classList)

// a1.classList.toggle('checkClass')
// console.log(a1.classList)

// a1.classList.toggle('checkClass')
// console.log(a1.classList)

// //getAttribute()
// console.log(a1.getAttribute('id'))
// console.log(a1.getAttribute('class'))

// //setAttribute()
// a1.setAttribute("para","newPara")
// console.log(a1)







