// Select Menu Button
    const menuBUTTON = document.querySelector('.nav-contentRight')
    
// Select Whole Nav
    const nav = document.querySelector('.container-NAV')

// Select Expanded Menu
    const menu = document.querySelector('.menu')

// -- LOGISTICS -- //
    // let counter = 0
    // console.log(counter)

// Add Event Listener -- CLOSED MENU
    menuBUTTON.addEventListener('click', () => {
        console.log('you clicked the menu button')

        menu.classList.toggle('ON')
        event.stopPropagation()
        

        
        
    })

    nav.addEventListener('click', () => {
        console.log('you clicked the NAV')
        
        menu.classList.toggle('ON') 
    })




