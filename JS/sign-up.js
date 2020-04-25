
const signUpPage = ()=>{
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
    createButton.innerText = 'SIGN UP'
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

    const signUp = () =>{
        if (createinput.value.includes('@') && createinput.value.toLowerCase().includes('.com')){
            if(createinput2.value.length > 6){
        data.users.push(createUser(createinput.value[0].toUpperCase()+createinput.value.slice(1).toLowerCase() , createinput2.value))
        console.log('good')
        console.log(data.users)
        clearSignUp()
        createh2.innerText = 'THANK YOU FOR SIGNING UP, PLEASE LOGIN TO CONTINUE'
        app.appendChild(createDiv)
        createDiv.appendChild(createh2)
         }else{
            alert("Input a valid password format");
         }
        }else {
            alert("Input a valid E-MAIL");
        }
    }
    createButton.addEventListener('click',signUp )
}



const signUpTar = document.querySelector('.sign').addEventListener('click' , signUpPage)


