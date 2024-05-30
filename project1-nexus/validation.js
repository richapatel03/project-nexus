const container = document.querySelector(".container");
const signup = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");
// const form = document.querySelector("form");
// const emailField = form.querySelector(".email-id");
// const emailInput = emailField.querySelector(".email");
// const passwordField = form.querySelector(".create-password");
// const passwordInput = passwordField.querySelector(".password");
// const CpasswordField = form.querySelector(".confirm-password");
// const CpasswordInput = CpasswordField.querySelector(".Cpassword");

signup.addEventListener("click", ()=>{
    container.classList.add("active");
});

login.addEventListener("click", ()=>{
    container.classList.remove("active");
});




        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validatePassword(password) {
            const minLength = 8;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumbers = /\d/.test(password);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

            return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
        }

        function validateLoginForm(event) {
            event.preventDefault(); // Prevent form submission

            const email = document.querySelector(".login .email").value;
            const password = document.querySelector(".login .password").value;

            const emailErrorSpan = document.querySelector('.login .email-error');
            const passwordErrorSpan = document.querySelector('.login .password-error');

            const emailIsValid = validateEmail(email);
            const passwordIsValid = validatePassword(password);

            if (!emailIsValid) {
                emailErrorSpan.style.display = 'flex';
            } else {
                emailErrorSpan.style.display = 'none';
            }

            if (!passwordIsValid) {
                passwordErrorSpan.style.display = 'flex';
            } else {
                passwordErrorSpan.style.display = 'none';
            }

            if (emailIsValid && passwordIsValid) {
                alert('Login Successfuly');
                window.location.reload();
            }
        }


        function validateSignupForm(event) {
            event.preventDefault(); // Prevent form submission

            const username = document.querySelector('.signup .uname').value.trim();
            const email = document.querySelector('.signup .email').value;
            const password = document.querySelector('.signup .password').value;
            const confirmPassword = document.querySelector('.signup .Cpassword').value;

            const usernameErrorSpan = document.querySelector('.signup .username-error');
            const emailErrorSpan = document.querySelector('.signup .email-error');
            const passwordErrorSpan = document.querySelector('.signup .password-error');
            const confirmPasswordErrorSpan = document.querySelector('.signup .Cpassword-error');

            let formIsValid = true;

            if (username === "") {
                usernameErrorSpan.style.display = 'flex';
                formIsValid = false;
            } else {
                usernameErrorSpan.style.display = 'none';
            }

            const emailIsValid = validateEmail(email);
            if (!emailIsValid) {
                emailErrorSpan.style.display = 'flex';
                formIsValid = false;
            } else {
                emailErrorSpan.style.display = 'none';
            }

            const passwordIsValid = validatePassword(password);
            if (!passwordIsValid) {
                passwordErrorSpan.style.display = 'flex';
                formIsValid = false;
            } else {
                passwordErrorSpan.style.display = 'none';
            }

            if (password !== confirmPassword) {
                confirmPasswordErrorSpan.style.display = 'flex';
                formIsValid = false;
            } else {
                confirmPasswordErrorSpan.style.display = 'none';
            }

            if (formIsValid) {
                alert('Signup Successfuly');
                window.location.reload();
            }
        }