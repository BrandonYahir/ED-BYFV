const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

const verifiedIn = document.querySelectorAll('.verified-in')
const sesionErr = document.querySelectorAll('.sesion-error')
const validatedTrue =document.querySelectorAll('.validating')

export const loginCheck = user => {
    if (user) {
        loggedInLinks.forEach(link => link.style.display = 'block')
        loggedOutLinks.forEach(link => link.style.display = 'none')
        sesionErr.forEach(link => link.style.display = 'none')
        
    } else {
        loggedInLinks.forEach(link => link.style.display = 'none')
        loggedOutLinks.forEach(link => link.style.display = 'block')
        sesionErr.forEach(link => link.style.display = 'block')
        validatedTrue.forEach(link => link.style.display = 'none')
    }

    if (user) {
        var emailVerified = user.emailVerified;
        if (emailVerified === false){
            verifiedIn.forEach(link => link.style.display = 'none')
            validatedTrue.forEach(link => link.style.display = 'block')
            console.log('Email no verificado')
        } else  {
            verifiedIn.forEach(link => link.style.display = 'block')
            validatedTrue.forEach(link => link.style.display = 'none')
            console.log('Email verificado')
        }
    }
}

