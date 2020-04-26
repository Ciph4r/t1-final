const loginPage = ()=>{
    clearApp()
    const app = document.querySelector('.app')
    const createDiv = document.createElement('div')
    createDiv.setAttribute('class' , 'sign-up-box container')
    const createDiv2 = document.createElement('div')
    createDiv2.setAttribute('id' , 'login-row')
    createDiv2.setAttribute('class' , 'row justify-content-center align-items-center')
    const createDiv3 = document.createElement('div')
    createDiv3.setAttribute('id' , 'login-column')
    createDiv3.setAttribute('class' , 'col-md-6')
    app.appendChild(createDiv)
    createDiv.appendChild(createDiv2)
    createDiv2.appendChild(createDiv3)
    const createh1 = document.createElement('h3')
    createh1.setAttribute('class' , 'text-center text-info')
    createh1.innerText = 'Login'
    createDiv3.appendChild(createh1)
    const createDiv4 = document.createElement('div')
    createDiv4.setAttribute('class' , 'form-group')
    createDiv3.appendChild(createDiv4)


    const createlabel = document.createElement('label')
    const createInput = document.createElement('input')
    createlabel.setAttribute('class' , 'text-info')
    createlabel.innerText = 'Username:'
    createInput.setAttribute('class' , 'form-control username-input')
 
    createDiv4.appendChild(createlabel)
    createDiv4.appendChild(createInput)


    const createDiv5 = document.createElement('div')
    createDiv5.setAttribute('class' , 'form-group')
    createDiv3.appendChild(createDiv5)

    const createlabel2 = document.createElement('label')
    const createInput2 = document.createElement('input')
    createlabel2.setAttribute('class' , 'text-info')
    createlabel2.innerText = 'Password:'

    createInput2.setAttribute('class' , 'form-control password-input')
    createDiv5.appendChild(createlabel2)
    createDiv5.appendChild(createInput2)

    const createDiv6 = document.createElement('div')
    createDiv6.setAttribute('class' , 'form-group')
    createDiv3.appendChild(createDiv6)
    const createButton = document.createElement('input')
    createButton.setAttribute('type' , 'submit')
    createButton.setAttribute('class' , 'btn btn-info btn-md submit')
    createButton.setAttribute('value' , 'submit')
    createDiv6.appendChild(createButton)
    

    
    // const app = document.querySelector('.app')
    // const createDiv = document.createElement('div')
    // createDiv.setAttribute('class' , 'sign-up-box ')
    // const createinput = document.createElement('input')
    // createinput.setAttribute('class' , 'username-input')


    // const createinput2 = document.createElement('input')
    // createinput2.setAttribute('class' , 'password-input')
    // createinput2.value = 'PASSWORD MUST BE 6 CHARACTERS OR MORE'
    // const createButton = document.createElement('button')
    // createButton.setAttribute('class', 'submit')
    // createButton.innerText = 'Log In'
    // const createh1 = document.createElement('h1')
    // const createh2 = document.createElement('h1')
    // createh1.innerText = 'Email'
    // createh2.innerText = 'Password'
    // app.appendChild(createDiv)
    // createDiv.appendChild(createh1)
    // createDiv.appendChild(createinput)
    // createDiv.appendChild(createh2)
    // createDiv.appendChild(createinput2)
    // createDiv.appendChild(createButton)

    const login = () =>{
        const userMatch =data.users.find(user => user.userName === createInput.value[0].toUpperCase()+createInput.value.slice(1).toLowerCase())
        if (userMatch){

            if(userMatch.passWord === createInput2.value){
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