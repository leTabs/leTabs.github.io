// const homeViewCvBtn = document.querySelector('.home-view-cv-btn')
// nav elements
const navHome = document.querySelector('.nav-home')
const navMyWork = document.querySelector('.nav-my-work')
const navSkills = document.querySelector('.nav-skills')
const navCommunication = document.querySelector('.nav-communication')
const navLeft = document.querySelector('.nav-left')

const mobNavHome = document.querySelector('.mob-nav-home')
const mobNavMyWork = document.querySelector('.mob-nav-my-work')
const mobNavSkills = document.querySelector('.mob-nav-skills')
const mobNavCommunication = document.querySelector('.mob-nav-communication')
const mobNavIcon = document.querySelector('.mob-nav-icon')
const mobNavContainer = document.querySelector('.mob-nav-container')

// sections
const sectionHome = document.querySelector('.section-home')
const sectionMyWork = document.querySelector('.section-my-work')
const sectionSkills = document.querySelector('.section-skills')
const sectionCommunication = document.querySelector('.section-communication')

// other elements
const projectImgContainerArray = document.querySelectorAll('.project-img-container')
const currentSkillArray = document.querySelectorAll('.current-skill')
const homeViewCvBtn = document.querySelector('.home-view-cv-btn')

// scroll in to view functionalities
navHome.addEventListener('click', ()=>{
    sectionHome.scrollIntoView()
})
navMyWork.addEventListener('click', ()=>{
    sectionMyWork.scrollIntoView()
})
navSkills.addEventListener('click', ()=>{
    sectionSkills.scrollIntoView()
})
navCommunication.addEventListener('click', ()=>{
    sectionCommunication.scrollIntoView()
})

mobNavHome.addEventListener('click', ()=>{
    sectionHome.scrollIntoView()
    closeMobNavContainer()
})
mobNavMyWork.addEventListener('click', ()=>{
    sectionMyWork.scrollIntoView()
    closeMobNavContainer()
})
mobNavSkills.addEventListener('click', ()=>{
    sectionSkills.scrollIntoView()
    closeMobNavContainer()
})
mobNavCommunication.addEventListener('click', ()=>{
    sectionCommunication.scrollIntoView()
    closeMobNavContainer()
})

// reload window listener
navLeft.addEventListener('click', ()=>{
    location.reload()
})
// 
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

// [...] Animation function
function animationScrollTrigger(target, animation){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.55
    };
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animation);
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target)
}


// animation calls
for(let i = 0; i < projectImgContainerArray.length; i++){
    animationScrollTrigger(projectImgContainerArray[i], 'pro-img-container')
}
for(let i = 0; i < currentSkillArray.length; i++){
    animationScrollTrigger(currentSkillArray[i], 'current-skill-animation')
}
animationScrollTrigger(homeViewCvBtn, 'home-cv-animation')
