// Función para hacer scroll suave a una sección específica de la página
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Función para mostrar y ocultar el modal de inicio de sesión
function toggleLogin() {
    document.getElementById('container').classList.toggle('hidden');
}

// Función para redirigir a la página de Instagram
function redirectInstagram() {
    window.location.href = "https://www.instagram.com";
}

// Lógica para manejar el inicio de sesión
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica las credenciales de inicio de sesión
    if (username === "user" && password === "password") {
        alert("Inicio de sesión exitoso");
        toggleLogin(); // Cierra el modal al iniciar sesión
    } else {
        document.getElementById("error-message").innerText = "Usuario o contraseña incorrectos";
    }
});

// Cambiar entre los formularios de registro e inicio de sesión
document.getElementById("register-link").addEventListener("click", function() {
    document.querySelector(".login-container").classList.add("hidden");
    document.querySelector(".register-container").classList.remove("hidden");
});

document.getElementById("login-link").addEventListener("click", function() {
    document.querySelector(".register-container").classList.add("hidden");
    document.querySelector(".login-container").classList.remove("hidden");
});