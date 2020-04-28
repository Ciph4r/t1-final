
const searchBar = (area)=>{
    const bar = document.createElement('input')
    const attach = document.querySelector(area)
    bar.setAttribute('class','search-bar form-control')
    attach.appendChild(bar)
}

const searchGuild = () => {
    const input = document.querySelector('.search-bar').value
    const search = data.guild.find(guild => guild.guildName ===input.toLowerCase())
    const app = document.querySelector('.app')
if (search){
    clearApp()
    bigbar()
    const tittle = create('h1',search.guildName)
    tittle.setAttribute('class','guildtittle')
    app.appendChild(tittle)

if (logIn && currentUser === search.owner){
    const adddplayer = () => {
        search.addPlayer(playerInput.value)
        clearTable()


for (const player of search.players) {
    console.log(player)
    const createtr2 = document.createElement('tr')
    const createtd = document.createElement('td')
    const createtd2 = document.createElement('td')
    createtd.setAttribute('class',player.playerName )
    createtd2.setAttribute('class',`${player.playerName} linkstuff` )
    createtd.innerText = player.playerName
    createtd2.innerText = player.totalDKP()
    createtr2.appendChild(createtd)
    createtr2.appendChild(createtd2)
    createtbody.appendChild(createtr2)
    createtd2.addEventListener('click' , showDkp)
}

        

    }
    const playerdiv = document.createElement('div')
    playerdiv.setAttribute('class' , 'addplayer')
    const playerInput = document.createElement('input')
    playerInput.setAttribute('placeholder' , 'Player Name')
    const addplayer = document.createElement('button')
    addplayer.setAttribute('class' , 'addplayer-button')
    addplayer.innerHTML = 'Add'
    playerInput.setAttribute('class','form-control playerInput')
    app.appendChild(playerdiv)
    playerdiv.appendChild(playerInput)
    playerdiv.appendChild(addplayer)
    addplayer.addEventListener('click' , adddplayer)
}else{
  const createh3 = document.createElement('h3')
  createh3.setAttribute('class' , 'logwarn')
  createh3.innerHTML = 'Log In to Add Player'
  app.appendChild(createh3)
}


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
createth2.innerText = 'TOTAL DKP'

createtr.appendChild(createth)
createtr.appendChild(createth2)

const createtbody = document.createElement('tbody')
createtbody.setAttribute('class', 'table-data')
createtable.appendChild(createtbody)

const refresh = () =>{
    showDkp()
}


const showDkp = () => {
    const targPLayer = search.players.find(player => player.playerName === event.target.className.split(' ')[0])
    const tarsec = document.querySelector('.addplayer')
    const tarh3 = document.querySelector('.logwarn')
    if(tarh3){tarh3.remove()}
    if(tarsec){tarsec.remove()}

    clearTable()
    if (logIn && currentUser === search.owner){
        const adddkps = () => {
            targPLayer.addDkp(eventInput.value,Number(dkpInput.value),timeInput.value)
            clearTable()
            for (const dkp of targPLayer.dkp){
                const createtr2 = document.createElement('tr')
                const createtd = document.createElement('td')
                const createtd2 = document.createElement('td')
                const createtd3 = document.createElement('td')
                createtd.innerText = dkp[0]
                createtd2.innerText = dkp[1]
                createtd3.innerText = dkp[2]
                createtr2.appendChild(createtd)
                createtr2.appendChild(createtd2)
                createtr2.appendChild(createtd3)
                createtbody.appendChild(createtr2)
               
            }
        }
        const dkpdiv = document.createElement('div')
        dkpdiv.setAttribute('class' , 'adddkp')
        const eventInput = document.createElement('input')
        const dkpInput = document.createElement('input')
        const timeInput = document.createElement('input')
        eventInput.setAttribute('placeholder' , 'Event')
        dkpInput.setAttribute('placeholder' , 'DKP')
        timeInput.setAttribute('placeholder' , 'Time')
        const addDkp = document.createElement('button')
        addDkp.setAttribute('class' , 'adddkp-button')
        addDkp.innerHTML = 'Add'
        eventInput.setAttribute('class','form-control eventInput')
        dkpInput.setAttribute('class','form-control dkpInput')
        timeInput.setAttribute('class','form-control timeInput')
        app.appendChild(dkpdiv)
        dkpdiv.appendChild(eventInput)
        dkpdiv.appendChild(dkpInput)
        dkpdiv.appendChild(timeInput)
        dkpdiv.appendChild(addDkp)
        addDkp.addEventListener('click' , adddkps)
    }else{
      const createh3 = document.createElement('h3')
      createh3.innerHTML = 'Log In to edit DKP'
      app.appendChild(createh3)
        
    }


    
    tittle.innerText = targPLayer.playerName
    creatediv4.setAttribute('class' , 'container search-result')
    app.appendChild(creatediv4)
    createth.innerText = 'EVENT'
    createth2.innerText = 'DKP'
    const createth3 = document.createElement('th')
    createth3.innerText = 'TIME'
    createtr.appendChild(createth3)
    for (const dkp of targPLayer.dkp){
        const createtr2 = document.createElement('tr')
        const createtd = document.createElement('td')
        const createtd2 = document.createElement('td')
        const createtd3 = document.createElement('td')
        createtd.innerText = dkp[0]
        createtd2.innerText = dkp[1]
        createtd3.innerText = dkp[2]
        createtr2.appendChild(createtd)
        createtr2.appendChild(createtd2)
        createtr2.appendChild(createtd3)
        createtbody.appendChild(createtr2)
       
    }
}





for (const player of search.players) {
    console.log(player)
    const createtr2 = document.createElement('tr')
    const createtd = document.createElement('td')
    const createtd2 = document.createElement('td')
    createtd.setAttribute('class',player.playerName )
    createtd2.setAttribute('class',`${player.playerName} linkstuff` )
    createtd.innerText = player.playerName
    createtd2.innerText = player.totalDKP()
    createtr2.appendChild(createtd)
    createtr2.appendChild(createtd2)
    createtbody.appendChild(createtr2)
    createtd2.addEventListener('click' , showDkp)

}

}else{
    clearApp()
    app.appendChild(create('h1' , 'NOT FOUND'))
    bigbar()
    }  
filter()
}

const searchPlayer = () => {

}


const dropDownMenu = (area) => {
    const attach = document.querySelector(area)
    const create1 = document.createElement('div')
    create1.setAttribute('class' ,"dropdown")
    const create2 = document.createElement('button')
    create2.setAttribute('class' ,"dropbtn")
    create2.innerText = 'Search Options'
    const create3 = document.createElement('div')
    create3.setAttribute('class' ,'dropdown-content')
    const create4= document.createElement('a')
    create4.setAttribute('class' , 'searchGuild')
    create4.innerText = 'Guild'
    const create5 = document.createElement('a')
    create4.setAttribute('class' , 'searchPlayers')
    create5.innerText = 'Player'
  

create4.addEventListener('click', searchGuild)


    create3.appendChild(create4)
    create3.appendChild(create5)
    create1.appendChild(create2)
    create1.appendChild(create3)
    attach.appendChild(create1)
}









