const printTable = (array , data2, th) => {
    const app = document.querySelector('.app')
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
    const creatediv4 = document.createElement('div')
    creatediv4.setAttribute('class' , 'form-group')
    app.appendChild(creatediv4)
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
    createth.innerText = th[0].toUpperCase()+th.slice(1)
    createtr.appendChild(createth)
    const createtbody = document.createElement('tbody')
    createtbody.setAttribute('class', 'table-data')
    createtable.appendChild(createtbody)
    for (const data of array){
        const createtr2 = document.createElement('tr')
        const createtd = document.createElement('td')
        createtd.setAttribute('class' , 'linkstuff')
        createtd.innerText = data[data2][0].toUpperCase() + data[data2].slice(1).toLowerCase()
        createtr2.appendChild(createtd)
        createtbody.appendChild(createtr2)
        createtd.addEventListener('click' , showPlayers)
    }   
}



const printTD = (array , data2 ,func) => {
    const targtd = document.querySelector('.table-data')
  

    for (const data of array){
        const createtr2 = document.createElement('tr')
        const createtd = document.createElement('td')
        createtd.setAttribute('class' , 'linkstuff')
        createtd.innerText = data[data2]
        createtr2.appendChild(createtd)
        targtd.appendChild(createtr2)
        createtd.addEventListener('click', func)
    }
}
