data.users.push(createUser('David@gmail.com' , 'sayian'))

data.guild.push(createGuild('David@gmail.com','onepiece'))
data.guild[0].addPlayer('dave')
data.guild[0].players[0].addDkp('killed dragon' , 100, 'today')


data.guild.push(createGuild('David2','dbz'))
data.guild[1].addPlayer('dave')
data.guild[0].players[0].addDkp('killed dragon' , 100, 'today')



const bigbar = () =>{
    const app = document.querySelector('.app')
    const div = document.createElement('div')
    div.setAttribute('class','search-box')
    app.appendChild(div)
    searchBar('.search-box','700px' , '44px')
 dropDownMenu('.search-box')
}

bigbar()




console.log(data)







