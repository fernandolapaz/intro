// FORM
const form = document.querySelector('.signup__form')
const ty = document.querySelector('.signup__ty')
const inputs = document.querySelectorAll('.form__input')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const pass = document.getElementById('pass')

function error(input) {
    input.classList.add('invalid')
    input.setAttribute('aria-invalid', 'true')
    input.focus()
}

function reset(input) {
    input.classList.remove('invalid')
    input.removeAttribute('aria-invalid')
    input.removeAttribute('aria-describedby')
}

// Checks
email.addEventListener('focusout', function () {
    if (this.value !== '' && !(/.+@.+\..+/.test(this.value))) {
        this.nextElementSibling.innerText = 'Looks like this is not an email'
        this.setAttribute('aria-describedby', 'message-email')
        error(email)
    } else {
        reset(email)
    }
})

pass.addEventListener('focusout', function () {
    if (this.value.length !== 0 && !(/[A-Za-z\d]{8,}/.test(this.value))) {
        this.nextElementSibling.innerText = 'Password must be at least 8 characters'
        this.setAttribute('aria-describedby', 'message-pass')
        error(pass)
    } else if (this.value.length !== 0 && !(/(?=.*[A-Za-z])/.test(this.value))) {
        this.nextElementSibling.innerText = 'Password must have at least one letter'
        this.setAttribute('aria-describedby', 'message-pass')
        error(pass)
    } else if (this.value.length !== 0 && !(/(?=.*\d)/.test(this.value))) {
        this.nextElementSibling.innerText = 'Password must have at least one number'
        this.setAttribute('aria-describedby', 'message-pass')
        error(pass)
    } else {
        reset(pass)
    }
})

fname.addEventListener('focusout', function () {
    reset(fname)
})

lname.addEventListener('focusout', function () {
    reset(lname)
})

// Submit
form.addEventListener('submit', function (e) {
    e.preventDefault()

    let errors = 0

    for (let input of inputs) {
        if (input.value.trim() === '') {
            input.nextElementSibling.innerText = `${input.name} cannot be empty`
            input.classList.add('invalid')
            input.setAttribute('aria-invalid', 'true')
        }

        if (input.hasAttribute('aria-invalid')) {
            errors++
        }
    }

    // Invalid
    if (errors > 0) {
        for (let input of inputs) {
            if (input.classList.contains('invalid')) {
                input.focus()
                break
            }
        }
    }

    // Valid
    setTimeout(function () {
        if (errors === 0) {
            form.classList.add('hide')
            ty.classList.add('show')
            ty.setAttribute('role', 'alert')
        }
    }, 250)
})

//Clear
for (let input of inputs) {
    input.addEventListener('focus', function () {
        input.classList.remove('invalid')
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