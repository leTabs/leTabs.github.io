const mainPageContent = document.querySelector('body')
let mpc = mainPageContent.style.opacity = '0'
let i = 0
let oc = 0
let iID = null
function apear(){
    mainPageContent.style.opacity = i
    i += 0.01
    console.log('pipp')
    if(i>1){
        clearInterval(iID)
        i=0
    }
}
function apearing(){ iID = setInterval(apear,5)}
apearing()
delete mpc
delete apear()

const com = document.querySelector('.c');
const comDiv = document.querySelector('.comDiv')
const return2Main = document.querySelector('.return')
const main = document.querySelector('.main')

function displayConstacts() {
    i = 0
    comDiv.style.display = "block"
    main.style.display = "none"
    apearing()
    delete mpc
    delete apear()
}
function hideConstacts(){
    i = 0
    comDiv.style.display = "none"
    main.style.display = "block"
    apearing()
    delete mpc
    delete apear()
}
function buttonAchors(htmlFile){
    window.location.href = htmlFile
}

com.addEventListener('click', () => displayConstacts());
return2Main.addEventListener('click', ()=> hideConstacts())
// 
const pythonAnchor = document.querySelector('.pb')
pythonAnchor.addEventListener('click', ()=> buttonAchors('pythonPanel.html'));

const frontEndAnchror = document.querySelector('.feb')
frontEndAnchror.addEventListener('click',()=> buttonAchors('frontEndPanel.html'))

const sqlAnchor = document.querySelector('.sql')
sqlAnchor.addEventListener('click', ()=>buttonAchors('sqlPanel.html'))

const noSqlAnchor = document.querySelector('.nosql')
noSqlAnchor.addEventListener('click', ()=>buttonAchors('nosqlPanel.html'))

const netAnchor = document.querySelector('.networking')
netAnchor.addEventListener('click', ()=>buttonAchors('networkingPanel.html'))

const apisAnchor = document.querySelector('.apis')
apisAnchor.addEventListener('click', ()=>buttonAchors('apisPanel.html'))

const algolAnchor = document.querySelector('.algo')
algolAnchor.addEventListener('click', ()=>buttonAchors('algorithmsPanel.html'))

const multiAnchor = document.querySelector('.multi')
multiAnchor.addEventListener('click', ()=>buttonAchors('multiProjectsPanel.html'))