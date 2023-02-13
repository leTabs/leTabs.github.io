const mainPageContent = document.querySelector('body')
mainPageContent.style.opacity = '0'
let i = 0
let oc = 0
function apear(){
    i += 0.01
    mainPageContent.style.opacity = i
    console.log('pipp')
    if(i>1){
        clearInterval(iID)
    }
}
const iID = setInterval(apear,5)
const pythonTable = document.querySelector('.table')
const pythonProgram01 = document.querySelector('.pythonP01');

pythonProgram01.addEventListener('click', ()=>{window.location = 'projectPlaceholder.html'});