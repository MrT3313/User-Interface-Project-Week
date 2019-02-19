// // RESTART

// let buttons = document.querySelectorAll('.button')
//     console.log(buttons)

// let cards = document.querySelectorAll('.content')
//     console.log(cards)

// buttons.addEventListener('click', () => {
//     console.log('you clicked me')
// })

//*NEW BUTTON LINK*
class buttonLink {
    constructor (button) {
        // this is a SPECIFIC button being passed in
        this.button = button
            console.log(button)

        // get SPECIFIC button DATA ATTRIBUTE
        this.buttonData = button.dataset.number
            console.log(this.buttonData)
        
        button.addEventListener('click', () => {
            this.cards = document.querySelectorAll('.content').forEach( card => {
                // if (card.dataset.option === this.buttonData) {
                //     card.style.display = 'flex'
                // } else {
                    if (card.dataset.option !== this.buttonData) {
                        card.style.display = 'none'
                        
                    } else {
                        card.style.display = 'flex'
                        card.classList.remove('OFF')

                        console.log(card)
                    }
                // }
            })
        })

        // select all cards & dispolay none content


        // this.cards = Array.from(this.cards).map( card => new buttonContentLink(card))

        




    }
}


// // Select all BUTTONS


let servicesContentButtons = document.querySelectorAll('.button').forEach( button => new buttonLink(button))

// Select Buttons


// Add Event Listener On Buttons




// class buttonLink {
//     constructor (element) {
//         this.element = element
//             console.log(this.element)
//         // get custom data attribute
//         this.data = this.element.dataset.number
//             console.log(this.data)
        
//         // Using the custom data attribute get the associated paragraph
//         this.itemElement = document.querySelector(.paragraph[data-paragraph="${this.data}"])
//             console.log(this.itemElement)

//         // using this.itemElement make a NEW selectedButton_DISPLAY
//         this.selectedButton = new selectedButton_DISPLAY(this.itemElement)

//         // add event listener
//         element.addEventListener('click', () => {
//             console.log('you clicked me')
            
//         })

//     }
// }

// class selectedButton_DISPLAY {
//     constructor (element) {
//         // select ALL paragraphs
//             const paragraphs = document.querySelectorAll('.paragraph')
//         // select ALL imgs
//             const IMGs = document.querySelectorAll('.servicesIMG')

//         // remove 'ON'
//             paragraphs.forEach( paragraph => paragraph.classList.remove('ON'))
//             IMGs.forEach( servicesIMG => servicesIMG.classList.remove('ON'))

//         // add 'on' to appropriate data attribute
//             paragraphs.forEach( paragraph => {
//                 console.log(paragraph.dataset.paragraph)
//                 console.log(this.data)
//             })
//     }

// }

// 