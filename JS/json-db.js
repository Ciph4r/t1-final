





const updateData = () => {
    localStorage.clear()
    localStorage.setItem('data', JSON.stringify(data))
    oldData = JSON.parse(localStorage.getItem('data'))
    data = {
        users:[],
        guild: []
    }
    for (const data1 of oldData.users){
        data.users.push({...createUser(),...data1})
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
                data.users.push({...createUser(),...data1})
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