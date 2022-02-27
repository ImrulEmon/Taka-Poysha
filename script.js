document.getElementById("login-submit").addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //console.log(userPassword);
    if (userEmail == "imrul-emon@mail.com" && userPassword == 'MoneyExchange') {
        window.location.href = 'banking.html';
        emailField = '';
        passwordField = '';
    }
    else {
        alert("Wrong Password");
    }
})
