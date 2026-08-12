const form = document.getElementById("job-application-form");
const successMessage = document.getElementById("success-message");
const submitButton = form.querySelector(".submit-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submitButton.disabled = true;
  submitButton.innerHTML = 'Submitting <span aria-hidden="true">...</span>';

  window.setTimeout(() => {
    successMessage.hidden = false;

    form.reset();

    submitButton.disabled = false;
    submitButton.innerHTML = 'Submit application <span aria-hidden="true">→</span>';

    successMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 700);
});