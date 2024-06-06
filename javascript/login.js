
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".container__login__botao");

    if (localStorage.getItem("loginError") === "true") {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        localStorage.removeItem("loginError"); 
    }

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();  

        const emailInput = document.querySelector("input[placeholder='Email']");
        const passwordInput = document.querySelector("input[placeholder='Senha']");
        
        const email = emailInput.value;
        const password = passwordInput.value;

        if (email === "abcef@gmail.com" && password === "1234") {
            window.location.href = 'indexlogado.html';
        } else {
            localStorage.setItem("loginError", "true");  
            location.reload(); 
        }
    });
});
