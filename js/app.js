const nextButton = document.querySelector('.slider-button__next');
const prevButton = document.querySelector('.slider-button__prev');
const sliderTrack = document.querySelector('.slider-track');
const sliderSlides = document.querySelectorAll('.slider-slide');
const sliderPagination = document.querySelector('.slider-pagination')
const slider = document.querySelector('.slider')

const sliderSlide = sliderSlides[0]

let sliderLength = sliderSlides.length
let moveWidth = sliderSlide.clientWidth
let activeSlide = 0




function moveSlide(){
    sliderTrack.style.transform = `translateX(-${moveWidth * activeSlide}px)`;
    generateBullet()
}

nextButton.addEventListener('click', function(){
    if(activeSlide === sliderLength - 1){
        activeSlide = 0
    }else{
        activeSlide++
    }
    moveSlide()
})

prevButton.addEventListener('click', function(){
    if(activeSlide === 0){
        activeSlide = sliderLength - 1
    }else{
        activeSlide--
    }
    moveSlide()
})



function generateBullet(){
    sliderPagination.innerHTML = ''
    for(let i = 0; i < sliderLength; i++){
        let button = document.createElement('button');
        button.setAttribute('class', activeSlide === i ? 'slider-bullet slider-bullet__active': 'slider-bullet');

        button.addEventListener('click', function(){
            activeSlide = i
            moveSlide()
        })

        sliderPagination.appendChild(button)
    }
}



generateBullet()



const next2Button = document.querySelector('.slider2-button__next');
const prev2Button = document.querySelector('.slider2-button__prev');
const slider2Track = document.querySelector('.slider2-track');
const slider2Slides = document.querySelectorAll('.slider2-slide');
const slider2Pagination = document.querySelector('.slider2-pagination')
const slider2 = document.querySelector('.slider2')

const slider2Slide = slider2Slides[0]

let slider2Length = slider2Slides.length
let move2Width = slider2Slide.clientWidth
let active2Slide = 0




function move2Slide(){
    slider2Track.style.transform = `translateX(-${move2Width * active2Slide}px)`;
    generate2Bullet()
}

next2Button.addEventListener('click', function(){
    if(active2Slide === slider2Length - 1){
        active2Slide = 0
    }else{
        active2Slide++
    }
    move2Slide()
})

prev2Button.addEventListener('click', function(){
    if(active2Slide === 0){
        active2Slide = slider2Length - 1
    }else{
        active2Slide--
    }
    move2Slide()
})



function generate2Bullet(){
    slider2Pagination.innerHTML = ''
    for(let i = 0; i < slider2Length; i++){
        let button = document.createElement('button');
        button.setAttribute('class', active2Slide === i ? 'slider2-bullet slider2-bullet__active': 'slider2-bullet');

        button.addEventListener('click', function(){
            active2Slide = i
            move2Slide()
        })

        slider2Pagination.appendChild(button)
    }
}



generate2Bullet()


const next3Button = document.querySelector('.slider3-button__next');
const prev3Button = document.querySelector('.slider3-button__prev');
const slider3Track = document.querySelector('.slider3-track');
const slider3Slides = document.querySelectorAll('.slider3-slide');
const slider3Pagination = document.querySelector('.slider3-pagination')
const slider3 = document.querySelector('.slider3')

const slider3Slide = slider3Slides[0]

let slider3Length = slider3Slides.length
let move3Width = slider3Slide.clientWidth
let active3Slide = 0




function move3Slide(){
    slider3Track.style.transform = `translateX(-${move3Width * active3Slide}px)`;
    generate3Bullet()
}

next3Button.addEventListener('click', function(){
    if(active3Slide === slider3Length - 1){
        active3Slide = 0
    }else{
        active3Slide++
    }
    move3Slide()
})

prev3Button.addEventListener('click', function(){
    if(active3Slide === 0){
        active3Slide = slider3Length - 1
    }else{
        active3Slide--
    }
    move3Slide()
})



function generate3Bullet(){
    slider3Pagination.innerHTML = ''
    for(let i = 0; i < slider3Length; i++){
        let button = document.createElement('button');
        button.setAttribute('class', active3Slide === i ? 'slider3-bullet slider3-bullet__active': 'slider3-bullet');

        button.addEventListener('click', function(){
            active3Slide = i
            move3Slide()
        })

        slider3Pagination.appendChild(button)
    }
}



generate3Bullet()

