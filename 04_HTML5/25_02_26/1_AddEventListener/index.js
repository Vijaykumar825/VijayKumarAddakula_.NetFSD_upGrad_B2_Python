const button = document.getElementById("submitBtn");
    const confirmationDiv = document.getElementById("confirmation");

    button.addEventListener("click", () => {
      confirmationDiv.textContent = "Thank you! Your feedback has been submitted successfully.";
      confirmationDiv.classList.add("message");
    });