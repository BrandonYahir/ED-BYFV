import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js" 
import { auth } from './firebase.js'

const signinAdminForm = document.querySelector('#signinAdminForm');

signinAdminForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('signin-admin-email').value;
    const password = document.getElementById('signin-admin-password').value;
    const rolUser = document.getElementById('rolUsuario').value;

    if(rolUser == 0){
        return alert('info', 'Opción inválida', '¡Escoja otra opción!', false, 3000)
    }

    try {
        const data = await signInWithEmailAndPassword(auth, email, password)
        document.getElementById('signin-admin-email').value = "";
        document.getElementById('signin-admin-password').value = "";
        const rolUser = document.getElementById('rolUsuario').value = 0;
        
        Swal.fire({
            icon: 'success',
            title: 'Sesión Iniciada',
            text: 'Hola Administrador!, es bueno verte de nuevo, confirme para continuar.',
            showDenyButton: false,
            showCancelButton: false,
            allowOutsideClick: false,
            confirmButtonText: `¡Continuar!`,
        }).then((result) => {
            if (result.isConfirmed) {
                if(rolUser == 1){
                    document.location.href = '/src/images/cato.jpg';
                } else if(rolUser==2){
                    document.location.href = 'adminFullStack.html'
                } else {
                    document.location.href = 'admin.html'
                }
            }
        })

    } catch (error) {

        if (error.code === 'auth/user-not-found') {
            alert('error', '¡El correo no existe!', 'Ingrese una cuenta existente o crea una nueva.', false, 3000);
            document.getElementById('signin-admin-email').value = "";
        document.getElementById('signin-admin-password').value = "";
        } else if (error.code === 'auth/wrong-password') {
            alert('warning', '¡Contraseña incorrecta!', 'La contraseña que ingreso no es correcta, intentelo nuevamente.', false, 3500);
            document.getElementById('signin-admin-password').value = "";
        } else if (error.code) {
            alert('error', '¡Opps!', 'Algo salió mal, intentalo nuevamente', false, 3000);
            document.getElementById('signin-admin-email').value = "";
        document.getElementById('signin-admin-password').value = "";
        }
    }
}) 
