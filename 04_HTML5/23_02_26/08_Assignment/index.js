function validateName() {
    let name = document.getElementById("name").value;
    let error = document.getElementById("nameError");

    if (name.trim() === "") {
        error.innerHTML = "Name cannot be empty";
        error.style.color = "red";
        return false;
    } else {
        error.innerHTML = "Valid Name";
        error.style.color = "green";
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");

    if (!email.includes("@")) {
        error.innerHTML = "Email must contain @";
        error.style.color = "red";
        return false;
    } else {
        error.innerHTML = "Valid Email";
        error.style.color = "green";
        return true;
    }
}

function validateAge() {
    let age = document.getElementById("age").value;
    let error = document.getElementById("ageError");

    if (age > 18) {
        error.innerHTML = "Age validated";
        error.style.color = "green";
        return true;
    } else {
        error.innerHTML = "Age must be greater than 18";
        error.style.color = "red";
        return false;
    }
}

function submitForm() {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isAgeValid = validateAge();

    if (isNameValid && isEmailValid && isAgeValid) {

        let name = document.getElementById("name").value;
        let emasil = document.getElementById("email").value;
        let age = document.getElementById("age").value;

        sessionStorage.setItem("username", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("age", age);

        document.getElementById("successMessage").innerHTML =
            "<h3 style='color:green'>Registration Successful</h3>";

    } else {
        document.getElementById("successMessage").innerHTML =
            "<h3 style='color:red'>Fix errors before submitting</h3>";
    }
}