const loggedIn = () => {

const logged = () => {
    clearApp()
    const app = document.querySelector('.app')
    const createDiv = document.createElement('div')
    createDiv.setAttribute('class' , 'settings')
    app.appendChild(createDiv)
    const createButton = document.createElement('button')
    const createButton2 = document.createElement('button')
    createButton.innerText = 'Change Password'
    createButton2.innerText = 'In Dev'
    createButton.setAttribute('class', 'setting-button')
    createButton2.setAttribute('class', 'setting-button')
    createDiv.appendChild(createButton)
    createDiv.appendChild(createButton2)


}

const logOut = () => {
    if (confirm("Do you want to Log Out") == true){
    const loginTar = document.querySelector('.log')
    const loginTar2 = document.querySelector('.sign')
    loginTar.removeEventListener('click' ,logged)
    loginTar.addEventListener('click', loginPage)
    loginTar.innerText = 'Login'
    loginTar2.innerText = 'sign-up'
    loginTar2.removeEventListener('click' ,logOut)
    loginTar2.addEventListener('click', signUpPage)
    clearApp()
    bigbar()
    logIn = false
    currentUser = ''
    }

}


const loginTar = document.querySelector('.log')
const loginTar2 = document.querySelector('.sign')
loginTar.removeEventListener('click' ,loginPage)
loginTar.addEventListener('click', logged)
loginTar.innerText = currentUser.split('@')[0]
loginTar2.innerText = 'Log Out'
loginTar2.removeEventListener('click' ,signUpPage)
loginTar2.addEventListener('click', logOut)


}