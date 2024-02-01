const inputName = document.getElementById('input-name')
const inputEmail = document.getElementById('input-email')

const button = document.getElementById('tombol-kirim')

button.addEventListener('click', function() {
    let nama = inputName.value;
    let email = inputEmail.value

    if (!nama) {
        const nameError = document.getElementById('name-error')
        nameError.classList.add('error-message')

        nameError.innerText = "Please fill out this field"
    }

    if (!email) {
        const emailError = document.getElementById('email-error')
        nameError.classList.add('error-message')

        emailError.innerText = "Please fill out this field"
    }

    if (!responsive) {
        const messageError = document.getElementById('message-error')
        nameError.classList.add('error-message')

        messageError.innerText = "Please fill out this field"
    }
})

let currentIndex = 0;

const totalSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('#slides').clientWidth;
const slideContainer = document.getElementById('slides')

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlide();
}

function updateSlide() {
    slideContainer.style.transform = 'translateX(${-currentIndex} * slideWidth}px)'
}

setInterval(nextSlide, 2000)
