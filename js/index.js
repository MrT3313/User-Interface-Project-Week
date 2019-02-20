// Select Menu Button
    const menuBUTTON = document.querySelector('.nav-contentRight')
        console.log(menuBUTTON)
    
// Select Menu Img
    const IMGs = document.querySelectorAll('img')
    const menuIMG = IMGs[0]
        console.log(menuIMG)

// Select Whole Nav
    const nav = document.querySelector('.container-NAV')
        console.log(nav)

// Select Expanded Menu
    const menu = document.querySelector('.menu')

// Add Event Listener -- CLOSED MENU
    menuBUTTON.addEventListener('click', () => {
        console.log('you clicked the menu button')
        // Change Menu Icon
        console.log(menuIMG)
        console.log(menuIMG.src)

        menu.classList.toggle('ON')
        if (menu.classList.contains('ON')) {
            console.log('true')
            menuIMG.src = "/img/nav-hamburger-close.png"
        } else {
            console.log('false')
            menuIMG.src = "/img/nav-hamburger.png"
        }
        
        
        event.stopPropagation()
        

        
        
    })

    nav.addEventListener('click', () => {
        console.log('you clicked the NAV')
        
        // menu.classList.toggle('ON') 
    })




