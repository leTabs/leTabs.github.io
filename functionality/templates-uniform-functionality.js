// elements 
// mob nav
const mobNavHome = document.querySelector('.mob-nav-home')
const mobNavOverview = document.querySelector('.mob-nav-overview')
const mobNavCommunication = document.querySelector('.mob-nav-communication')
const mobNavIcon = document.querySelector('.mob-nav-icon')
const mobNavContainer = document.querySelector('.mob-nav-container')
// other elements
const sectionGeneralDescription02 = document.querySelector('.section-general-desc')
const templateDisplay02 = document.querySelector('.template-display')
const sectionCommunication02 = document.querySelector('.section-communication')

// scroll into view functionality
mobNavOverview.addEventListener('click', ()=>{
    templateDisplay02.scrollIntoView()
    closeMobNavContainer()
})
mobNavHome.addEventListener('click', ()=>{
    sectionGeneralDescription02.scrollIntoView()
    closeMobNavContainer()
})
mobNavCommunication.addEventListener('click', ()=>{
    sectionCommunication02.scrollIntoView()
    closeMobNavContainer()
})

// mobile navigation functionality (on & off)

function closeMobNavContainer(){
    mobNavIcon.style.transform = 'rotate(0deg)'
    mobNavIcon.style.filter = 'invert(100%)'
    mobNavContainer.style.left = '-42.5vw'
    setTimeout(()=>{
        mobNavContainer.style.display = 'block'
    }, 250)
    mobNavSwitch = false
}

let mobNavSwitch = false

mobNavIcon.addEventListener('click', ()=>{
    if(!mobNavSwitch){
        mobNavIcon.style.transform = 'rotate(-90deg)'
        mobNavIcon.style.filter = 'invert(65%)'
        mobNavContainer.style.display = 'block'
        setTimeout(()=>{
            mobNavContainer.style.left = '42.5vw'
        }, 1)
        mobNavSwitch = true
    }else{
        closeMobNavContainer()
    }
})
