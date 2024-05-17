// DOC, certifications elements (information section)
const contactCertifications = document.querySelector('.contact-certifications')
const certificationsContainer = document.querySelector('.certifications-container')
const certificationsCloseBtn = document.querySelector('.certifications-close-btn')
const certificateContainer = document.querySelector('.certificate-container')
const cpi01 = document.querySelector('.cpi-01')
const cpi02 = document.querySelector('.cpi-02')
const cpi03 = document.querySelector('.cpi-03')
const certificateImg = document.querySelector('.certificate-img')

// DOC cv elements
const cvOpener = document.querySelectorAll('.cv-opener')
const cvContainer = document.querySelector('.cv-container')



//[...]
// container opening functionality
function frameDisplayer(container){
    container.style.opacity = '0'
    container.style.display = 'block'
    setTimeout(()=>{
    container.style.opacity = '1'
    }, 1)
}
// container closing functionality
function frameCloser(container){
    container.style.top = '55%'
    container.style.opacity = '0'
    setTimeout(()=>{
        container.style.top = '50%'
        container.style.display = 'none'
    }, 250)
}
//[...]


// [...]
// cv frame define content
cvContainer.innerHTML = `
<h2> CVs</h2>
    <a href="functionality/resumes/CV-Lepesiotis-Gr.pdf">Greek CV</a>
    <a href="functionality/resumes/CV-Lepesiotis-En.pdf">English Cv</a>
    <button class="cv-close-btn">close</button>
`
// opening and closing the cv frame (event listeners)
for(let i = 0; i < cvOpener.length; i++){
    cvOpener[i].addEventListener('click', ()=>{
        frameDisplayer(cvContainer)
        document.querySelector('.cv-close-btn').addEventListener('click',()=>{frameCloser(cvContainer)})
    })
}
//[...]



//[...]
// contact certification event listeners (open frame)
contactCertifications.addEventListener('click', ()=>{
frameDisplayer(certificationsContainer)
})

// contact certification event listeners (close frame)
certificationsCloseBtn.addEventListener('click', ()=>{
    frameCloser(certificationsContainer)
    
    certificationSwitch = false
    setTimeout(()=>{
        certificateImg.style.opacity = '0'
        setTimeout(()=>{
            certificateImg.style.display = 'none'
        }, 250)
        setTimeout(()=>{
            certificateContainer.style.width = '0%'
            certificateContainer.style.height = '0vh'
            certificateContainer.style.marginTop = '0'
            setTimeout(()=>{
                certificateContainer.style.display = 'none';
                cpiSwitcher01 = false
                cpiSwitcher01 = false
                cpiSwitcher01 = false
                cpi01.src = 'images/icons/plus-solid.svg'
                cpi02.src = 'images/icons/plus-solid.svg'
                cpi03.src = 'images/icons/plus-solid.svg'
            }, 250)
        },1)
    }, 1)

})
//[...]

//[...]
// DOC listener (escape - close cv & certifications frames)
document.querySelector('html').addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        frameCloser(certificationsContainer)
        frameCloser(cvContainer)
}})
//[...]

//[...]
// certification functionality variables 
let certificationSwitch = false
let cpiSwitcher01 = false
let cpiSwitcher02 = false
let cpiSwitcher03 = false
const switcherArray = [cpiSwitcher01, cpiSwitcher02, cpiSwitcher03]

// certificate image frame opener
function imgFrameOpener(icon, iconValue, switcherIndex){
    certificateContainer.style.display = 'flex';
    cpi01.src = 'images/icons/plus-solid.svg'
    cpi02.src = 'images/icons/plus-solid.svg'
    cpi03.src = 'images/icons/plus-solid.svg'
    icon.src = `images/icons/${iconValue}`

    cpiSwitcher01 = false
    cpiSwitcher02 = false
    cpiSwitcher03 = false

    if(switcherIndex === 0){
        cpiSwitcher01 = true
        certificateImg.src = `images/certifications/cert-responsive.png`
    }
    else if(switcherIndex === 1){
        cpiSwitcher02 = true
        certificateImg.src = `images/certifications/cert-js.png`
    }
    else{
        cpiSwitcher03 = true
        certificateImg.src = `images/certifications/cert-python.png`
    }

    certificationSwitch = true
    setTimeout(()=>{
        certificateContainer.style.width = '90%'
        certificateContainer.style.height = '32vh'
        certificateContainer.style.marginTop = '2rem'
    }, 1)
    setTimeout(()=>{
        certificateImg.style.display = 'block'
    setTimeout(()=>{
        certificateImg.style.opacity = '1'
    },1)
    }, 250)


}

// certificate image frame closer
function imgFrameCloser(icon, iconValue, switcherIndex){
    icon.src = `images/icons/${iconValue}`
    if(switcherIndex === 0){
        cpiSwitcher01 = false
    }
    else if(switcherIndex === 1){cpiSwitcher02 = false}
    else{cpiSwitcher03 = false}

    certificationSwitch = false
    setTimeout(()=>{
        certificateImg.style.opacity = '0'
        setTimeout(()=>{
            certificateImg.style.display = 'none'
        }, 250)
        setTimeout(()=>{
            certificateContainer.style.width = '0%'
            certificateContainer.style.height = '0vh'
            certificateContainer.style.marginTop = '0'
            setTimeout(()=>{
                certificateContainer.style.display = 'none';
            }, 250)
        },1)
    }, 1)
}


// icon-buttons open/close event listeners
cpi01.addEventListener('click', ()=>{
    if(!cpiSwitcher01){
        imgFrameOpener(cpi01, 'minus-solid.svg', 0)

    }
    else{
        imgFrameCloser(cpi01, 'plus-solid.svg', 0)
    }
})
cpi02.addEventListener('click', ()=>{
    if(!cpiSwitcher02){
        imgFrameOpener(cpi02, 'minus-solid.svg', 1)
    }
    else{
        imgFrameCloser(cpi02, 'plus-solid.svg', 1)
    }   
})
cpi03.addEventListener('click', ()=>{
    if(!cpiSwitcher03){
        imgFrameOpener(cpi03, 'minus-solid.svg', 2)
    }
    else{
        imgFrameCloser(cpi03, 'plus-solid.svg', 2)
    }
})
//[...]


//[...]
// DOC mob nav element
const mobNavContainerImg = document.querySelector('.mob-nav-container-img')
mobNavContainerImg.addEventListener('click', ()=>{
    window.location = 'index.html'
})
