const login = (username , password) =>{
    const checkUser = data.users.find(user => user.userName === username)
   
       if (checkUser){
           if(checkUser.passWord === password){
           logIn = true
           currentUser = checkUser.userName
           }
       }
   }
   






const createGuild = (owner ,guildName) => {
    return {
        owner,
        guildName,
        players: [],
        addPlayer: function (playerName){
            this.players.push(
                {playerName,
                dkp: [],
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
                )
        }
    }
}



const createUser = (userName , passWord) =>{
    return {
        userName,
        passWord,
        changePassword: function (password){
            this.passWord = password
        }
    }

}
