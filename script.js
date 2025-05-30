document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        let valid = true;

        if (name.length < 5) {
            showError("nameError", "Name must be at least 5 characters long");
            valid = false;
        } else {
            clearError("nameError");
        }

        if (!email.includes("@")) {
            showError("emailError", "Enter a valid email");
            valid = false;
        } else {
            clearError("emailError");
        }

        if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
            showError("phoneError", "Enter a valid 10-digit phone number");
            valid = false;
        } else {
            clearError("phoneError");
        }

        if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
            showError("passwordError", "Password must be at least 8 characters and should not be 'password' or your name");
            valid = false;
        } else {
            clearError("passwordError");
        }

        if (confirmPassword !== password) {
            showError("confirmPasswordError", "Passwords do not match");
            valid = false;
            
        } else {
            clearError("confirmPasswordError");
        }

        if (valid) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });

    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearError(id) {
        document.getElementById(id).textContent = "";
    }
});