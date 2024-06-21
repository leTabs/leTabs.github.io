// DOC, certifications elements (information section)
const contactCertifications = document.querySelector('.contact-certifications')
const certificationsContainer = document.querySelector('.certifications-container')

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
// [...]
// certification define content
certificationsContainer.innerHTML = `
    <h2>Earned Certifications</h2>
    <div class="cert-wrapper-outer">
        
        <div class="cert-wrapper-inner">
            <img src="images/certifications/cert-responsive.png" alt="">
            <p>Responsive Web Design</p>
        </div>

        <div class="cert-wrapper-inner">
            <img src="images/certifications/cert-js.png" alt="">
            <p>JavaScript Algorithms and Data Structures</p>
        </div>
        
        <div class="cert-wrapper-inner">
            <img src="images/certifications/cert-python.png" alt="">
            <p>Scientific Computing with Python</p>
        </div>

    </div> 
    <button class="certifications-close-btn">close</button>
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
document.querySelector('.certifications-close-btn').addEventListener('click',()=>{frameCloser(certificationsContainer)})
})

//[...]
// DOC listener (escape - close cv & certifications frames)
document.querySelector('html').addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
        frameCloser(cvContainer)
        frameCloser(certificationsContainer)
}})
//[...]

// DOC mob nav element
const mobNavContainerImg = document.querySelector('.mob-nav-container-img')
mobNavContainerImg.addEventListener('click', ()=>{
    window.location = 'index.html'
})
