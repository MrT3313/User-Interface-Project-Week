// Select Menu Button
    const menuBUTTON = document.querySelector('.nav-contentRight')
    
// Select Whole Nav
    const nav = document.querySelector('.container-NAV')

// -- LOGISTICS -- //
    let counter = 0
    console.log(counter)

// Add Event Listener -- CLOSED MENU
    menuBUTTON.addEventListener('click', () => {
        console.log('you clicked the menu button')
        if (counter % 2 === 0) {
            nav.style.height = '100vh'
            nav.style.width = '100vw'
            nav.style.opacity = '.5'
            ++counter
        } 
    })

// Add Event Listener - OPEN MENU
    nav.addEventListener('click', () => {
        console.log('you have clicked the NAV')
        if (counter % 2 !== 0) {
            nav.style.height = 'auto'
            ++counter
        }
    })
