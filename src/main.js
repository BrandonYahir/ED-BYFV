import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
import { auth } from './app/firebase.js'
import { loginCheck } from './app/loginCheck.js'
import './app/signupForm.js'
import './app/logout.js'
import './app/signinForm.js'
import './app/googleLogin.js'



onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    /* if (user){
   loginCheck(user)
    } else {
        
    } */
})

