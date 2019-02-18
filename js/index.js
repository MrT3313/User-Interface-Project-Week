// Select Menu Button
    const menuBUTTON = document.querySelector('.nav-contentRight')
    
// Select Whole Nav
    const nav = document.querySelector('.container-NAV')

// Select Expanded Menu
    const expandedMenu = document.querySelector('.nav-expandedMenu')

// -- LOGISTICS -- //
    // let counter = 0
    // console.log(counter)

// Add Event Listener -- CLOSED MENU
    menuBUTTON.addEventListener('click', () => {
        console.log('you clicked the menu button')
        nav.classList.toggle('showFULLmenu')
        event.stopPropagation()
        
    })

    nav.addEventListener('click', () => {
        // nav.style.height = 'auto'
        nav.classList.toggle('showFULLmenu')  
        
        
    })




