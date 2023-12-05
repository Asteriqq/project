/**Form**/

function toggleForm(){
    const floatingForm = document.getElementById('floatingForm')
    const blurBackground = document.querySelector('.blur-background')

    if (floatingForm.style.display === 'none'|| floatingForm.style.display === '') {
        floatingForm.style.display = 'block'
        blurBackground.style.display = 'block'
    } else {
        floatingForm.style.display = 'none'
        toggleFormButton.innerHTML = '<i class="fa-solid fa-circle-plus"></i>'
        blurBackground.style.display = 'none'
    }
}

const toggleFormButton = document.getElementById('toggleFormButton')

toggleFormButton.addEventListener('click', toggleForm)

/**Profile**/

function toggleProfile(){
    const floatingProfile = document.getElementById('floatingProfile')
    const blurBackground = document.querySelector('.blur-background')

    if (floatingProfile.style.display === 'none'|| floatingProfile.style.display === '') {
        floatingProfile.style.display = 'block'
        blurBackground.style.display = 'block'
    } else {
        floatingProfile.style.display = 'none'
        toggleProfileButton.innerHTML = '<i class="fa-regular fa-user"></i>'
        blurBackground.style.display = 'none'
    }
}

const toggleProfileButton = document.getElementById('toggleProfileButton')

toggleProfileButton.addEventListener('click', toggleProfile)

/** Close Button For Profile **/
const closeButton = document.getElementById('closeButton')
let blurBackground = document.querySelector('.blur-background')

if (closeButton){
    closeButton.addEventListener('click', () =>{
        floatingProfile.style.display = 'none'
        blurBackground.style.display = 'none'
    })
}

/** Close Button For Form **/
const closingButton = document.getElementById('closingButton')
let blurryBackground = document.querySelector('.blur-background')

if (closingButton){
    closingButton.addEventListener('click', () =>{
        floatingForm.style.display = 'none'
        blurryBackground.style.display = 'none'
    })
}

/**Adding Expenses **/

let button = document.getElementById('button')