
import { signInWithEmailAndPassword, sendPasswordResetEmail,  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from "./firebase.js";


const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        /* console.log(credentials) */
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()
        alert('Bienvenido  '+ credentials.user.email)
        location.reload()
        

    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            alert('Contraseña Incorrecta')
        } else if (error.code === 'auth/user-not-found'){
            alert('Usuario no encontrado') 
        } else if (error.code){
            alert('Algo salio mal, asegurese de ingresar el correo u/o contraseña correctamente')
        }
    }
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', function(){
    const email = document.querySelector('#resetEmail')
    sendPasswordResetEmail(auth, email.value)
    .then(() => {
      console.log('Correo de restablecer contraseña enviado')
      alert('Correo de restablecer contraseña enviado')
    })
    .catch((error) => {
      /* console.log('Algo salio mal') */
      alert('Algo salio mal, verifique que el correo que ingreso exista o este escrito correctamente')
    });
})
