// DOC, navigation elements
const navHome = document.querySelector('.nav-home')
const navOverview = document.querySelector('.nav-overview')
const navGallery = document.querySelector('.nav-gallery')
const navCommunication = document.querySelector('.nav-communication')
const navLeft = document.querySelector('.nav-left')

// DOC, sections elements
const sectionGeneralDescription = document.querySelector('.section-general-desc')
const templateDisplay = document.querySelector('.template-display')
const sectionTemplateAllImgs = document.querySelector('.template-all-imgs')
const sectionCommunication = document.querySelector('.section-communication')


// DOC, button - prev & next -  elements
const displayPrevBtn = document.querySelector('.display-prev-btn')
const displayNextBtn = document.querySelector('.display-next-btn')
const displayImg = document.querySelector('.display-img')

// DOC, image viewing elements
const expandHideBtnArray = document.querySelectorAll('.expand-hide-icon')
const imgFrameArray = document.querySelectorAll('.img-container')
const templateImgArray = document.querySelectorAll('.template-img')
const expandAllBtn = document.querySelector('.expand-all-btn')
const collapseAllBtn = document.querySelector('.collapse-all-btn')

// DOC, other elements
const displayText = document.querySelector('.display-text')


// EVENT LISTENERS, scroll into view, and home page destination
navOverview.addEventListener('click', ()=>{
    templateDisplay.scrollIntoView()
})
navHome.addEventListener('click', ()=>{
    sectionGeneralDescription.scrollIntoView()
})
navGallery.addEventListener('click', ()=>{
    sectionTemplateAllImgs.scrollIntoView()
})
navCommunication.addEventListener('click', ()=>{
    sectionCommunication.scrollIntoView()
})
navLeft.addEventListener('click', ()=>{
    window.location = 'index.html'
})
// [...]


// Gallery, image collapse and expantion
let imageDisplaySwitchArray = [false, false, false, false, false]

function imageOpener(iterator){
        imgFrameArray[iterator].style.height = '70vh'
        imgFrameArray[iterator].style.padding = '2rem 2rem'
        expandHideBtnArray[iterator].src = 'images/icons/minus-solid.svg'
        imageDisplaySwitchArray[iterator] = true
        setTimeout(()=>{
            templateImgArray[iterator].style.display = 'block'
        }, 250)
}

function imageCloser(iterator){
    templateImgArray[iterator].style.display = 'none'
    expandHideBtnArray[iterator].src = 'images/icons/plus-solid.svg'
    imageDisplaySwitchArray[iterator] = false
    setTimeout(()=>{
        imgFrameArray[iterator].style.height = '1vh'
        imgFrameArray[iterator].style.padding = '0rem 2rem'
    }, 250)
}

for(let i = 0; i < expandHideBtnArray.length; i++){
    expandHideBtnArray[i].addEventListener('click', ()=>{
        if(!imageDisplaySwitchArray[i]){
            imageOpener(i)
        }else{
            imageCloser(i)
        }
    })
}

expandAllBtn.addEventListener('click', ()=>{
    for(let i = 0; i < expandHideBtnArray.length; i++){
        imgFrameArray[i].style.height = '68vh'
        imgFrameArray[i].style.padding = '2rem 2rem'
        expandHideBtnArray[i].src = 'images/icons/minus-solid.svg'
        imageDisplaySwitchArray[i] = true
        
        setTimeout(()=>{
            templateImgArray[i].style.display = 'block'
        }, 250)
    }
})


collapseAllBtn.addEventListener('click', ()=>{
    for(let i = 0; i < expandHideBtnArray.length; i++){
        templateImgArray[i].style.display = 'none'
        expandHideBtnArray[i].src = 'images/icons/plus-solid.svg'
        imageDisplaySwitchArray[i] = false
        setTimeout(()=>{
            imgFrameArray[i].style.height = '1vh'
            imgFrameArray[i].style.padding = '0rem 2rem'
        }, 250)
    }
})
//[...]

// Overview, prev & next image functionality
let imgArrayIndex = 0

const displayImgsArray = [
    'bookstore01.png',
    'bookstore02.png',
    'bookstore03.png',
    'bookstore04.png',
    'phoneView.png',
    'phoneView02.png',
    'tabletView.png',
    'laptopView.png'
]
const displayTextArray = [
    `Home page. Introdusing the theme of the website to the user.`,
    `This section allows the user to discover more details about the business.`,
    `Here, the website propts the user to discover the business's products.`,
    `This section includes the business's information.`,
    `General mobile view design.`,
    `General mobile view design. No2`,
    `General tablet view design.`,
    `General laptop view design.`
]

displayImg.src = `images/project04/${displayImgsArray[imgArrayIndex]}`
displayText.textContent = `${displayTextArray[imgArrayIndex]}`

function prevImgHandler(){
    imgArrayIndex--
    if(imgArrayIndex < 0){
        imgArrayIndex = 0;
        return
    }
    displayImg.src = `images/project04/${displayImgsArray[imgArrayIndex]}`
    displayText.textContent = `${displayTextArray[imgArrayIndex]}`
}

function nextImgHandler(){
    imgArrayIndex++
    if(imgArrayIndex == displayImgsArray.length){
        imgArrayIndex = displayImgsArray.length-1; 
        return
    }
    displayImg.src = `images/project04/${displayImgsArray[imgArrayIndex]}`
    displayText.textContent = `${displayTextArray[imgArrayIndex]}`
}

displayPrevBtn.addEventListener('click', ()=>{
    prevImgHandler()
})

displayNextBtn.addEventListener('click', ()=>{
    nextImgHandler()
})
//[...]