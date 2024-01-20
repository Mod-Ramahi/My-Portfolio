const navBar = document.getElementById('navBar')
const mySkills = document.getElementById('mySkills')
const otherSkills = document.querySelectorAll('.pro-skills')

window.onscroll = function(){
    var currentScrollY = window.scrollY;
    var skillsPosition = mySkills.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    // if(currentScrollY > 99){
    //     navBar.classList.add('show-bar')
    // } else {
    //     navBar.classList.remove('show-bar')
    // }
    if( skillsPosition -120 < windowHeight * 0.75){
        mySkills.classList.add('display-skills')
        setTimeout( function(){
            otherSkills.forEach((element) => {
                element.classList.add('show-pro-skills')
            })
        }, 2000)
    } else{
        mySkills.classList.remove('display-skills')
        otherSkills.forEach((element) => {
            element.classList.remove('show-pro-skills')
        })

    }
}

window.onscroll()

let currentImage = true

function ChangeImage () {
    const image1 = document.querySelectorAll('.p-i-1')
    const image2 = document.querySelectorAll('.p-i-2')

    if(currentImage){
        image1.forEach((img) => {
            // img.style.display = 'block';
            img.style.opacity = 1
        })
        image2.forEach((img) => {
            // img.style.display = 'none';
            img.style.opacity = 0
        })
    } else {
        image1.forEach((img) => {
            // img.style.display = 'none';
            img.style.opacity = 0
        })
        image2.forEach((img) => {
            // img.style.display = 'block';
            img.style.opacity = 1
        })
    }
    currentImage =!currentImage
}

setInterval( ChangeImage, 4000)

document.addEventListener('click', function (event) {
    const targetBtn = event.target.closest('.details-btn')
    const closeBtn = event.target.closest('.close-btn')

    if(targetBtn){
        console.log('ok button')
        detailsId = targetBtn.dataset.detailsId;
        moreDetails = document.getElementById(detailsId)
        if(moreDetails){
            moreDetails.style.zIndex = 1
            moreDetails.style.opacity = 1
        }
    }
    if(closeBtn){
        const closeTarget = closeBtn.closest('.more-details-box')
        if(closeTarget){
            closeTarget.style.opacity = 0
            closeTarget.style.zIndex= -1
        }
    }
})

