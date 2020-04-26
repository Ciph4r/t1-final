data.users.push(createUser('David@gmail.com' , 'sayian'))

data.guild.push(createGuild('David@gmail.com','1'))
data.guild.push(createGuild('David@gmail.com','death'))
data.guild.push(createGuild('David@gmail.com','angel'))
data.guild[0].addPlayer('dave')
data.guild[0].addPlayer('dave2')
data.guild[0].addPlayer('dave3')
data.guild[0].addPlayer('dave4')
data.guild[0].addPlayer('dave5')
data.guild[0].addPlayer('dave6')
data.guild[0].players[0].addDkp('killed dragon' , 100, 'today')


data.guild.push(createGuild('David2','dbz'))

data.guild[1].addPlayer('dave')
data.guild[0].players[0].addDkp('killed dragon' , 200, 'yesterday')



filter()






const bigbar = () =>{
    const app = document.querySelector('.app')
    const div = document.createElement('div')
    div.setAttribute('class','search-box container')
    app.appendChild(div)
searchBar('.search-box')
 dropDownMenu('.search-box')
}

bigbar()




console.log(data)













































