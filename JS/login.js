const loginPage = ()=>{
    clearApp()
    const app = document.querySelector('.app')
    const createDiv = document.createElement('div')
    createDiv.setAttribute('class' , 'sign-up-box')
    const createinput = document.createElement('input')
    createinput.setAttribute('class' , 'username-input')
    const createinput2 = document.createElement('input')
    createinput2.setAttribute('class' , 'password-input')
    createinput2.value = 'PASSWORD MUST BE 6 CHARACTERS OR MORE'
    const createButton = document.createElement('button')
    createButton.setAttribute('class', 'submit')
    createButton.innerText = 'Log In'
    const createh1 = document.createElement('h1')
    const createh2 = document.createElement('h1')
    createh1.innerText = 'Email'
    createh2.innerText = 'Password'
    app.appendChild(createDiv)
    createDiv.appendChild(createh1)
    createDiv.appendChild(createinput)
    createDiv.appendChild(createh2)
    createDiv.appendChild(createinput2)
    createDiv.appendChild(createButton)

    const login = () =>{
        const userMatch =data.users.find(user => user.userName === createinput.value[0].toUpperCase()+createinput.value.slice(1).toLowerCase())
        if (userMatch){

            if(userMatch.passWord === createinput2.value){
        console.log('good')
        console.log(data.users)
        clearApp()
        logIn = true
        currentUser = userMatch.userName
        bigbar()
        loggedIn()        
         }else{
            alert("Invalid password");
         }
        }else {
            alert("User Not Found");
        }
    }
    createButton.addEventListener('click',login )
}



const loginTar = document.querySelector('.log').addEventListener('click' ,loginPage)