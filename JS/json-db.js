





const updateData = () => {
    localStorage.clear()
    localStorage.setItem('data', JSON.stringify(data))
    oldData = JSON.parse(localStorage.getItem('data'))
    data = {
        users:[],
        guild: []
    }
    for (const data1 of oldData.users){
        const newdata ={
            userName: data1.userName,
            passWord: data1.passWord,
            changePassword: function (password){
                this.passWord = password
            }    
        }
        data.users.push(newdata) 
    }
    for (const guild of oldData.guild){
        let players = createGuild(guild.owner, guild.guildName)
            for (const player of guild.players){
                const newplayer = {
                    playerName: player.playerName,
                        dkp:player.dkp,
                        addDkp: function (event , dkp , time){
                            this.dkp.push([event , dkp , time])
                        },
                        totalDKP: function (){
                            let total = 0
                            for (const dkp of this.dkp){
                                total += dkp[1]
                            }
                            return total
                        },
                        }
                players.players.push(newplayer)
            }
            data.guild.push(players)
    }
    
    }
    
    
    const firstLoadData = () =>{
        if (JSON.parse(localStorage.getItem('data'))){
            oldData = JSON.parse(localStorage.getItem('data'))
            data ={
                users:[],
                guild: []
            }
            for (const data1 of oldData.users){
                console.log(data1)
                const newdata ={
                    userName: data1.userName,
                    passWord: data1.passWord,
                    changePassword: function (password){
                        this.passWord = password
                    }    
                }
                data.users.push(newdata)
                
            
            }
            for (const guild of oldData.guild){
                let players = createGuild(guild.owner, guild.guildName)
                    for (const player of guild.players){
                        const newplayer = {
                            playerName: player.playerName,
                                dkp:player.dkp,
                                addDkp: function (event , dkp , time){
                                    this.dkp.push([event , dkp , time])
                                },
                                totalDKP: function (){
                                    let total = 0
                                    for (const dkp of this.dkp){
                                        total += dkp[1]
                                    }
                                    return total
                                },
                                }
                        players.players.push(newplayer)
                    }
                    data.guild.push(players)
            }
        }else {
            localStorage.setItem('data', JSON.stringify(data))
        }
    }
    
    
    firstLoadData()