// Variables para los elementos
const loginModal = document.querySelector('.login-modal');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const toggleLoginButton = document.querySelector('nav button[onclick="toggleLogin()"]');

// Función para mostrar el modal de login
function toggleLogin() {
    loginModal.classList.remove('hidden');
}

// Evento de envío del formulario de login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulación de inicio de sesión exitoso (puedes cambiar esto con lógica real de autenticación)
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "user" && password === "password") {
        alert("Inicio de sesión exitoso");
        
        // Ocultar el modal de login
        loginModal.classList.add('hidden');
        
        // Cambiar el botón de "Iniciar Sesión" para indicar que el usuario está conectado
        toggleLoginButton.textContent = "Cerrar Sesión";
        toggleLoginButton.onclick = logout;
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});

// Función para cerrar sesión
function logout() {
    alert("Sesión cerrada");
    
    // Restablecer el botón de "Iniciar Sesión"
    toggleLoginButton.textContent = "Iniciar Sesión";
    toggleLoginButton.onclick = toggleLogin;

    // Limpiar campos y mensaje de error
    usernameInput.value = '';
    passwordInput.value = '';
    errorMessage.textContent = '';
}