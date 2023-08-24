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
}

const displayNone = function(element){
    element.style.display = 'none'
    document.querySelector('main').style.filter = 'blur(0)'
    document.querySelector('nav').style.filter = 'blur(0)'
}

// 
let imgIndex01 = 1
const projectDisplay01 = document.querySelector('.eyeProject01');
const firstProject = document.querySelector('.first-project');
const closeButton01 = document.querySelector('.close01');
const nextImgButton = document.querySelector('.next-img');
const previousImgButton = document.querySelector('.previous-img');



projectDisplay01.addEventListener('click', ()=>{
    displayBlock(firstProject)
})
closeButton01.addEventListener('click', ()=>{
    displayNone(firstProject)
})


nextImgButton.addEventListener('click', ()=>{
    document.querySelector(`.first-project-img0${imgIndex01}`).style.display = 'none'
    if(imgIndex01 < 8){
    imgIndex01++}
    document.querySelector(`.first-project-img0${imgIndex01}`).style.display = 'inline'
})
previousImgButton.addEventListener('click', ()=>{
    document.querySelector(`.first-project-img0${imgIndex01}`).style.display = 'none'
    if(imgIndex01 > 1){
    imgIndex01--}
    document.querySelector(`.first-project-img0${imgIndex01}`).style.display = 'inline'
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
    document.querySelector(`.second-project-img0${imgIndex02}`).style.display = 'none'
    if(imgIndex02 < 13){
    imgIndex02++}
    document.querySelector(`.second-project-img0${imgIndex02}`).style.display = 'inline'
})
previousImgButton02.addEventListener('click', ()=>{
    document.querySelector(`.second-project-img0${imgIndex02}`).style.display = 'none'
    if(imgIndex02 > 1){
    imgIndex02--}
    document.querySelector(`.second-project-img0${imgIndex02}`).style.display = 'inline'
})
