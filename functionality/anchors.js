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

let imgIndex = 1
document.querySelector('.next-img').addEventListener('click', ()=>{
    document.querySelector(`.first-project-img0${imgIndex}`).style.display = 'none'
    if(imgIndex < 8){
    imgIndex++}
    document.querySelector(`.first-project-img0${imgIndex}`).style.display = 'inline'

})
document.querySelector('.previous-img').addEventListener('click', ()=>{
    document.querySelector(`.first-project-img0${imgIndex}`).style.display = 'none'
    if(imgIndex > 1){
    imgIndex--}
    document.querySelector(`.first-project-img0${imgIndex}`).style.display = 'inline'

})
