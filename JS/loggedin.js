const loggedIn = () => {

const logged = () => {
    clearApp()
    bigbar()
    const app = document.querySelector('.app')
    const createDiv = document.createElement('div')
    createDiv.setAttribute('class' , 'settings')
    app.appendChild(createDiv)
    const createButton = document.createElement('button')
    const createButton2 = document.createElement('button')
    const createButton3 = document.createElement('button')
    createButton.innerText = 'Create New Guild'
    createButton2.innerText = 'Change Password'
    createButton3.innerText = 'In Dev'
    createButton.setAttribute('class', 'setting-button create-guild')
    createButton2.setAttribute('class', 'setting-button Change-pw')
    createButton3.setAttribute('class', 'setting-button')
    createDiv.appendChild(createButton)
    createDiv.appendChild(createButton2)
    createDiv.appendChild(createButton3)
    createButton.addEventListener('click', createguild)




const creatediv4 = document.createElement('div')
creatediv4.setAttribute('class' , 'container search-result')
app.appendChild(creatediv4)
const creatediv = document.createElement('div')
creatediv.setAttribute('class' , 'container table-body')
const creatediv2 = document.createElement('div')
creatediv2.setAttribute('class' , 'row')
const creatediv3 = document.createElement('div')
creatediv3.setAttribute('class' , 'col-md-9')
const createinput = document.createElement('input')
createinput.setAttribute('class' , 'form-control')
createinput.setAttribute('id' , 'system-search')
createinput.setAttribute('placeholder' , 'Search for')
const createtable = document.createElement('table')
createtable.setAttribute('class', 'table table-list-search')
creatediv4.appendChild(creatediv)
creatediv.appendChild(creatediv2)
creatediv2.appendChild(creatediv3)
creatediv3.appendChild(createinput)
creatediv3.appendChild(createtable)
    const createthead = document.createElement('thead')
createtable.appendChild(createthead)
const createtr = document.createElement('tr')
createthead.appendChild(createtr)
const createth = document.createElement('th')
const createth2 = document.createElement('th')

createth.innerText = 'PLAYER NAME'
createth2.innerText = 'GUILD APPLYING TO'

createtr.appendChild(createth)
createtr.appendChild(createth2)

const createtbody = document.createElement('tbody')
createtbody.setAttribute('class', 'table-data')
createtable.appendChild(createtbody)
const userInbox = data.users.find(x => x.userName === currentUser)
 const addApp = () => {
    const tarGuild = data.guild.filter(x => x.owner === currentUser).filter(x => x.guildName === event.target.innerText.toLowerCase())
    console.log(userInbox.inBox )
    tarGuild[0].addPlayer(event.target.className.split(' ')[0].split('@')[0])

    for (const inbox of userInbox.inBox){
        if (inbox.playerName === event.target.className.split(' ')[0] && inbox.guild === tarGuild[0].guildName){
            userInbox.inBox.splice(userInbox.inBox.indexOf(inbox),1)
        }
    }
    clearApp()
    bigbar()
    const createh2 = document.createElement('h1')
    createh2.innerText = 'Player has been Added'
    app.appendChild(createh2)
    updateData()
 }

for (const inbox of userInbox.inBox){
    const createtr2 = document.createElement('tr')
    const createtd = document.createElement('td')
    const createtd2 = document.createElement('td')
    const createtd3 = document.createElement('td')
    createtd.innerText = inbox.playerName.split('@')[0]
    createtd2.innerText = inbox.guild[0].toUpperCase()+ inbox.guild.slice(1).toLowerCase()
    createtd2.setAttribute('class' , `${inbox.playerName} linkstuff`)
    createtr2.appendChild(createtd)
    createtr2.appendChild(createtd2)
    createtr2.appendChild(createtd3)
    createtbody.appendChild(createtr2)
    createtd2.addEventListener('click',addApp)
   
}


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