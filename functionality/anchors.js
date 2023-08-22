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


document.querySelector('.eyeProject01').addEventListener('click', ()=>{
    document.querySelector('.first-project').style.display = 'block'
})
document.querySelector('.close01').addEventListener('click', ()=>{
    document.querySelector('.first-project').style.display = 'none'
})

let imgIndex01 = 1
document.querySelector('.next-img').addEventListener('click', ()=>{
    document.querySelector(`.first-project-img0${imgIndex01}`).style.display = 'none'
    if(imgIndex01 < 8){
    imgIndex01++}
    document.querySelector(`.first-project-img0${imgIndex01}`).style.display = 'inline'

})
document.querySelector('.previous-img').addEventListener('click', ()=>{
    document.querySelector(`.first-project-img0${imgIndex01}`).style.display = 'none'
    if(imgIndex01 > 1){
    imgIndex01--}
    document.querySelector(`.first-project-img0${imgIndex01}`).style.display = 'inline'

})

// second

document.querySelector('.eyeProject02').addEventListener('click', ()=>{
    document.querySelector('.second-project').style.display = 'block'
})
document.querySelector('.close02').addEventListener('click', ()=>{
    document.querySelector('.second-project').style.display = 'none'
})

let imgIndex02 = 1
document.querySelector('.next-img02').addEventListener('click', ()=>{
    document.querySelector(`.second-project-img0${imgIndex02}`).style.display = 'none'
    if(imgIndex02 < 13){
    imgIndex02++}
    document.querySelector(`.second-project-img0${imgIndex02}`).style.display = 'inline'
})
document.querySelector('.previous-img02').addEventListener('click', ()=>{
    document.querySelector(`.second-project-img0${imgIndex02}`).style.display = 'none'
    if(imgIndex02 > 1){
    imgIndex02--}
    document.querySelector(`.second-project-img0${imgIndex02}`).style.display = 'inline'

})
