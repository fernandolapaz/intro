// FORM
const form = document.querySelector('.signup__form')
const ty = document.querySelector('.signup__ty')
const inputs = document.querySelectorAll('.form__input')
const email = document.getElementById('email')
const pass = document.getElementById('pass')

// Email and Password checks
email.addEventListener('focusout', function () {
    if (this.value !== '' && !(/.+@.+\..+/.test(this.value))) {
        this.classList.add('invalid')
        this.nextElementSibling.innerText = 'Looks like this is not an email'
        this.nextElementSibling.classList.add('show')
    }
})

pass.addEventListener('focusout', function () {
    if (this.value.length !== 0 && !(/[A-Za-z\d]{8,}/.test(this.value))) {
        this.classList.add('invalid')
        this.nextElementSibling.innerText = 'Password must be at least 8 characters'
        this.nextElementSibling.classList.add('show')
    } else if (this.value.length !== 0 && !(/(?=.*[A-Za-z])/.test(this.value))) {
        this.classList.add('invalid')
        this.nextElementSibling.innerText = 'Password must have at least one letter'
        this.nextElementSibling.classList.add('show')
    } else if (this.value.length !== 0 && !(/(?=.*\d)/.test(this.value))) {
        this.classList.add('invalid')
        this.nextElementSibling.innerText = 'Password must have at least one number'
        this.nextElementSibling.classList.add('show')
    }
})

// Submit
form.addEventListener('submit', function (e) {
    e.preventDefault()

    let errors = 0

    for (let input of inputs) {
        if (input.value.trim() === '') {
            input.classList.add('invalid')
            input.nextElementSibling.innerText = `${input.name} cannot be empty`
            input.nextElementSibling.classList.add('show')
        }

        if (input.classList.contains('invalid')) {
            errors++
        }
    }

    // setTimeout just to simulate a small delay
    setTimeout(function () {
        if (errors === 0) {
            form.classList.add('hide')
            ty.classList.add('show')
        }
    }, 400)
})

// Clear
for (let input of inputs) {
    input.addEventListener('focus', function () {
        input.value = ''
        input.classList.remove('invalid')
        input.nextElementSibling.classList.remove('show')
    })
}

// FOOTER
const arrow = document.querySelector('.attr__btn')
const panel = document.querySelector('.attribution')

arrow.addEventListener('click', function () {
    panel.classList.toggle('show')

    if (panel.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'true')
        this.setAttribute('title', 'Hide attribution information')
    } else {
        this.setAttribute('aria-expanded', 'false')
        this.setAttribute('title', 'Show attribution information')
    }
})

// Click outside
document.addEventListener('click', function (e) {
    if (!arrow.contains(e.target)) {
        if (panel.classList.contains('show')) {
            panel.classList.remove('show')
            arrow.setAttribute('aria-expanded', 'false')
            arrow.setAttribute('title', 'Show attribution information')
        }
    }
})