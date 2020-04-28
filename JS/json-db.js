





const updateData = () => {
    localStorage.clear()
    localStorage.setItem('data', JSON.stringify(data.users))
    oldData = JSON.parse(localStorage.getItem('data'))
    data.users =[]
    for (const data1 of oldData){
        const newdata ={
            userName: data1.userName,
            passWord: data1.passWord,
            changePassword: function (password){
                this.passWord = password
            }    
        }
        data.users.push(newdata)   
    }
    
    }
    
    
    const firstLoadData = () =>{
        if (JSON.parse(localStorage.getItem('data'))){
            oldData = JSON.parse(localStorage.getItem('data'))
            data.users =[]
            for (const data1 of oldData){
                const newdata ={
                    userName: data1.userName,
                    passWord: data1.passWord,
                    changePassword: function (password){
                        this.passWord = password
                    }    
                }
                data.users.push(newdata)   
            }
        }else {
            localStorage.setItem('data', JSON.stringify(data.users))
        }
    }
    
    
    firstLoadData()