const myForm = document.querySelector('#my-form')
   const itemInput = document.querySelector('#item')  
   const userList = document.querySelector('#users')
   const body = document.querySelector('#body')
   const message = document.querySelector('.message')
   const button = document.querySelector('.button')

   button.addEventListener('click', onClick)

   function onClick(e) {
    e.preventDefault()

    if(itemInput.value === ''){
        message.classList.add('error')
        setTimeout(()=> message.remove(), 3000)
        message.innerHTML= 'Please enter an item'
    } else{
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${itemInput.value}`))
    

    userList.appendChild(li)

    //clear fields
    itemInput.value = ''
    }
   }

   console.log(itemInput.value)

   var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);