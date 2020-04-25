
const searchBar = (area , size ,height)=>{
    const bar = document.createElement('input')
    const attach = document.querySelector(area)
    bar.setAttribute('class','search-bar')
    bar.style.width = size
    bar.style.height = height
    attach.appendChild(bar)
}

const searchGuild = () => {
    const input = document.querySelector('.search-bar').value
    data.guild.find(guild => guild.guildName ===input)
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
    // const create6 = document.createElement('a')

create4.addEventListener('click', searchGuild)


    create3.appendChild(create4)
    create3.appendChild(create5)
    // create3.appendChild(create6)
    create1.appendChild(create2)
    create1.appendChild(create3)
    attach.appendChild(create1)
}









