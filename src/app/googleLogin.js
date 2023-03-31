import { GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from "./firebase.js"


const googleButton = document.querySelector('#googleLogin')

googleButton.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        /* console.log(credentials) */
        sendEmailVerification(auth.currentUser)
            const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
            modal.hide()
            alert('Bienvenido  '+ credentials.user.displayName)
            location.reload()
    } catch (error) {
    }


})