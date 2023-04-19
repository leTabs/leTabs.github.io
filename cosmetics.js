const navBar = document.querySelector('.navBar')
const navAnchors = document.querySelectorAll('.nAnchors')
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 0){
        navBar.style.backgroundColor ="white";
        for(let i = 0; i < navAnchors.length; i++){
            navAnchors[i].style.color = "black"
        }
    }else{
        navBar.style.backgroundColor ="transparent"
        for(let i = 0; i < navAnchors.length; i++){
            navAnchors[i].style.color = "white"}
    }
})