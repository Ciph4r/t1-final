const clearApp = () => {
    const select = document.querySelector('.app')
    while(select.hasChildNodes()) {
        select.firstChild.remove();
      }
    }


    const clearSignUp = () => {
        const select = document.querySelector('.sign-up-box')
        while(select.hasChildNodes()) {
            select.firstChild.remove();
          }
    }