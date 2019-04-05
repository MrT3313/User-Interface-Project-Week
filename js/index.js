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
        menu.classList.toggle('ON')

        if (menu.classList.contains('ON')) {
            console.log('true')
            menuIMG.src = "/img/nav-hamburger-close.png"
            
            window.addEventListener('wheel', preventDefaultFunction)
        } else {
            console.log('false')
            menuIMG.src = "/img/nav-hamburger.png"

            window.removeEventListener('wheel', preventDefaultFunction)
        }
        
        event.stopPropagation()
    })

    function preventDefaultFunction(event) {
        event.preventDefault();
    }




