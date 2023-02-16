console.log("hello world")

function onChange() {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=password-confirm]")
    const error = document.querySelector("span.error")

    if(password.value === confirm.value) {
        confirm.setCustomValidity('');
        error.textContent = "";
        console.log("passwords match!")

    } else {
        confirm.setCustomValidity("Passwords do not match.")
        error.textContent = "* Passwords do not match."
    }
}