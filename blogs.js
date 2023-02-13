const mainPageContent = document.querySelector('body')
mainPageContent.style.opacity = '0'
let i = 0
let oc = 0
let iID = null
function apear(){
    mainPageContent.style.opacity = i
    i += 0.01
    console.log('pipp')
    if(i>1){
        clearInterval(iID)
        i =0
    }
}
function apearing(){ iID = setInterval(apear,5)}
apearing()

const blogs = document.querySelector('#b')
const blogSection = document.querySelector('.post')
const mReport = document.querySelector('#m')
const mReportSection = document.querySelector('.mReport')
const wReport = document.querySelector('#w')
const wReportSection = document.querySelector('.wReport')

function revealAllBlogs(){
    apearing()
    blogSection.style.display = "block"
    blogs.style.textDecoration = "underline"
    mReportSection.style.display = "none"
    mReport.style.textDecoration = "none"
    wReportSection.style.display = "none"
    wReport.style.textDecoration = "none"
}


function revealMonthlyReports(){
    apearing()
    blogSection.style.display = "none"
    blogs.style.textDecoration = "none"
    mReportSection.style.display = "block"
    mReport.style.textDecoration = "underline"
    wReportSection.style.display = "none"
    wReport.style.textDecoration = "none"
}

function revealWeeklyReports(){
    apearing()
    blogSection.style.display = "none"
    blogs.style.textDecoration = "none"
    mReportSection.style.display = "none"
    mReport.style.textDecoration = "none"
    wReportSection.style.display = "block"
    wReport.style.textDecoration = "underline"
}


blogs.addEventListener('click', ()=> revealAllBlogs())
mReport.addEventListener('click',()=>revealMonthlyReports())
wReport.addEventListener('click', ()=> revealWeeklyReports())