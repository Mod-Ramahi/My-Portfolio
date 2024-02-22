// const navBar = document.getElementById('navBar')
const navigate = document.getElementById('sideNavigator')
const mySkills = document.getElementById('mySkills')
const otherSkills = document.querySelectorAll('.pro-skills')
const myProjects = document.getElementById('myProjects')

window.onscroll = function () {
    var currentScrollY = window.scrollY;
    var skillsPosition = mySkills.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var projectsPosition = myProjects.getBoundingClientRect().top;
    if (currentScrollY > 120) {
        navigate.classList.add('show-bar')
    } else {
        navigate.classList.remove('show-bar')
    }
    if (skillsPosition - 150 < windowHeight * 0.85) {
        mySkills.classList.add('display-skills')
        setTimeout(function () {
            otherSkills.forEach((element) => {
                element.classList.add('show-pro-skills')
            })
        }, 2500)
    } else {
        mySkills.classList.remove('display-skills')
        otherSkills.forEach((element) => {
            element.classList.remove('show-pro-skills')
        })
    }
    if (projectsPosition - 200 < windowHeight * 0.85) {
        myProjects.classList.add('show-projects')
    } else {
        myProjects.classList.remove('show-projects')
    }
}

window.onscroll()

let currentImage = true

function ChangeImage() {
    const image1 = document.querySelectorAll('.p-i-1')
    const image2 = document.querySelectorAll('.p-i-2')

    if (currentImage) {
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
    currentImage = !currentImage
}

setInterval(ChangeImage, 4000)

document.addEventListener('click', function (event) {
    const targetBtn = event.target.closest('.details-btn')
    const closeBtn = event.target.closest('.close-btn')
    //nav options
    const about = event.target.closest('#aboutNav');
    const aboutView = document.getElementById('about-view')
    const skills = event.target.closest('#skillsNav')
    const projectNav = event.target.closest('#projectsNav')
    const experienceNav = event.target.closest('#experienceNav')
    const contactNav = event.target.closest('#contactNav')
    const myExperience = document.getElementById('myExp')
    const myContact = document.getElementById('myContact')
    if (about) {
        aboutView.scrollIntoView({ behavior: 'smooth', block: 'start' })
        console.log('about')
    }
    if (skills) {
        mySkills.scrollIntoView({ behavior: 'smooth', block: 'start' })
        console.log('skills')
    }
    if(projectNav) {
        myProjects.scrollIntoView({behavior: 'smooth', block:'start'});
    }
    if (experienceNav) {
        myExperience.scrollIntoView({behavior:'smooth', block:'start'})
    }
    if (contactNav){
        myContact.scrollIntoView({behavior:'smooth', block:'start'})
    }
    if (targetBtn) {
        console.log('ok button')
        detailsId = targetBtn.dataset.detailsId;
        moreDetails = document.getElementById(detailsId)
        if (moreDetails) {
            moreDetails.style.zIndex = 1
            moreDetails.style.opacity = 1
        }
    }
    if (closeBtn) {
        const closeTarget = closeBtn.closest('.more-details-box')
        if (closeTarget) {
            closeTarget.style.opacity = 0
            closeTarget.style.zIndex = -1
        }
    }
})

