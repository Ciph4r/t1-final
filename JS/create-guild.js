const createGuildBar = () => {
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
createh1.innerText = 'Create Guild'
createDiv3.appendChild(createh1)
const createDiv4 = document.createElement('div')
createDiv4.setAttribute('class' , 'form-group')
createDiv3.appendChild(createDiv4)
const createlabel = document.createElement('label')
const createInput = document.createElement('input')
createlabel.setAttribute('class' , 'text-info')
createlabel.innerText = 'Guild Name:'
createInput.setAttribute('class' , 'form-control username-input')

createDiv4.appendChild(createlabel)
createDiv4.appendChild(createInput)

const createDiv6 = document.createElement('div')
createDiv6.setAttribute('class' , 'form-group')
createDiv3.appendChild(createDiv6)
const createButton = document.createElement('input')
createButton.setAttribute('type' , 'submit')
createButton.setAttribute('class' , 'btn btn-info btn-md submit')
createButton.setAttribute('value' , 'submit')
createDiv6.appendChild(createButton)

// const h3 = document.createElement('h3')
// h3.innerText = 'Guilds'
// app.appendChild(h3)
const dataMatch = data.guild.filter(x => x.owner === currentUser)
printTable(dataMatch , 'guildName' , 'Guilds')
}



const createguild = () => {
clearApp()
bigbar()
createGuildBar()

const createInput = document.querySelector('.username-input')
const createButton = document.querySelector('.submit')
const app = document.querySelector('.app')

const addGuild = () => {
    data.guild.push(createGuild(currentUser , createInput.value.toLowerCase()))
    const dataMatch = data.guild.filter(x => x.owner === currentUser)
    clearTable()
    printTD(dataMatch ,'guildName' , showPlayers)
    updateData()
    
}

createButton.addEventListener('click' ,addGuild )

}