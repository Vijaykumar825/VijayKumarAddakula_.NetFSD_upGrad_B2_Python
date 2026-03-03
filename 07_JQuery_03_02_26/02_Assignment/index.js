$("#submitBtn").click(function () {

      let name = $("#name").val().trim();
      let email = $("#email").val().trim();

      // Validation
      if (name === "" || email === "") {
        $("#responseMessage")
          .removeClass("success")
          .addClass("error")
          .text("Name and Email are required.");
        return;
      }

      // Success message
      $("#responseMessage")
        .removeClass("error")
        .addClass("success")
        .text("Thank you for your feedback!");

      // Clear form fields
      $("#feedbackForm")[0].reset();
    });