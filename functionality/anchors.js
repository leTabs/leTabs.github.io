const fbImage= document.querySelector('.fbImg')
const inImage =document.querySelector('.inImg')
const gitImage = document.querySelector('.gitImg')

fbImage.addEventListener('click', ()=>{
    window.location ='https://www.facebook.com/lysimaxos.A/'
})
inImage.addEventListener('click', ()=>{
    window.location ='https://www.linkedin.com/in/lysimaxos-lepesiwths-956651271/'
})
gitImage.addEventListener('click', ()=>{
    window.location = 'https://github.com/leTabs'
})

const displayBlock = function(element){
    element.style.display = 'block'
    element.scrollTop = 0;
    document.querySelector('main').style.filter = 'blur(8px)'
    document.querySelector('nav').style.filter = 'blur(8px)'
    document.querySelector('.mobile-nav-inner-wrapper').style.display = 'none'
}

const displayNone = function(element){
    element.style.display = 'none'
    document.querySelector('main').style.filter = 'blur(0)'
    document.querySelector('nav').style.filter = 'blur(0)'
    document.querySelector('.mobile-nav-inner-wrapper').style.display = 'flex'
}

// 
let imgIndex01 = 1
const projectDisplay01 = document.querySelector('.eyeProject01');
const firstProject = document.querySelector('.first-project');
const closeButton01 = document.querySelector('.close01');
const nextImgButton = document.querySelector('.next-img');
const previousImgButton = document.querySelector('.previous-img');
const nextImgButtonMobile = document.querySelector('.mobile-next-img')
const previousImgButtonMobile = document.querySelector('.mobile-previous-img')
const nextImgButtonMobile02 = document.querySelector('.mobile-next-img02')
const previousImgButtonMobile02 = document.querySelector('.mobile-previous-img02')

projectDisplay01.addEventListener('click', ()=>{
    displayBlock(firstProject)
})
closeButton01.addEventListener('click', ()=>{
    displayNone(firstProject)
})

const nextImage = function(prefix, totalImages){
    document.querySelector(`.${prefix}-project-img0${imgIndex01}`).style.display = 'none'
    if(imgIndex01 < totalImages){
    imgIndex01++}
    document.querySelector(`.${prefix}-project-img0${imgIndex01}`).style.display = 'inline'
}
const previousImage = function(prefix){
    document.querySelector(`.${prefix}-project-img0${imgIndex01}`).style.display = 'none'
    if(imgIndex01 > 1){
    imgIndex01--}
    document.querySelector(`.${prefix}-project-img0${imgIndex01}`).style.display = 'inline'
}
nextImgButton.addEventListener('click', ()=>{
    nextImage('first', 8);
})
previousImgButton.addEventListener('click', ()=>{
    previousImage('first')
})

// second
let imgIndex02 = 1
const projectDisplay02 = document.querySelector('.eyeProject02');
const secondProject = document.querySelector('.second-project');
const closeButton02 = document.querySelector('.close02');
const nextImgButton02 = document.querySelector('.next-img02');
const previousImgButton02 = document.querySelector('.previous-img02');
//


projectDisplay02.addEventListener('click', ()=>{
    displayBlock(secondProject)
})
closeButton02.addEventListener('click', ()=>{
    displayNone(secondProject)
})


nextImgButton02.addEventListener('click', ()=>{
    nextImage('second', 13)
})
previousImgButton02.addEventListener('click', ()=>{
    previousImage('second')
})

// mobile version 
nextImgButtonMobile.addEventListener('click', ()=>{
    nextImage('first', 8)
})
previousImgButtonMobile.addEventListener('click', ()=>{
    previousImage('first')
})

nextImgButtonMobile02.addEventListener('click', ()=>{
    nextImage('second', 13)
})
previousImgButtonMobile02.addEventListener('click', ()=>{
    previousImage('second')
})


// 

document.querySelector('.talk-to-me').addEventListener('click', ()=>{
    document.querySelector('main').scrollTop = 2750;
})
