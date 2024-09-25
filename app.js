function verifyEmail() {
    let emailElement = document.getElementById("email");
    let confirmElement = document.getElementById("confirm");
    let errorMessage = document.getElementById("error-message")

    let email = emailElement.value;
    let confirmEmail= confirmElement.value;

    if (email !== confirmEmail) {
        errorMessage.textContent = 'Email addresses do not match.';
    } else {
        errorMessage.textContent = 'Email addresses match!';
    }
}