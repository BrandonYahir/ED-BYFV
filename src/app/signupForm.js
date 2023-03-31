import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from "./firebase.js"

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    
    /* console.log(email,password) */

    try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    /* console.log(userCredentials) */
    sendEmailVerification(auth.currentUser)
    const signupModal = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()
    location.reload()
    alert('Bienvenido  '+ credentials.user.email)

    
    } catch (error) {
        console.log(error)
        if (error.code === 'auth/email-already-in-use'){
            alert('El correo ya esta registrado')
        }
        else if (error.code === 'auth/invalid-email'){
            alert('Correo Invalido')
        } else if (error.code === 'auth/weak-password'){
            alert('Contraseña insegura')
        } else if (error.code){
            alert('Algo salio mal :c')
        }
    }
})