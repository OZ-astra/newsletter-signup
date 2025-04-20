/** @format */

const signupPage = document.getElementById("signup-form");
const emailField = document.getElementById("input-field");
const formSubmit = document.getElementById("submit");
const errorMessage = document.getElementById("email-error-message");
const successMessage = document.getElementById("success-message");
const dismissMessage = document.getElementById("dismiss-message");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

emailField.addEventListener("input", () => {
	setTimeout(() => {
		emailField.style.border = "1px solid green";
	}, 100);
});

formSubmit.addEventListener("click", (event) => {
	event.preventDefault();
	if (emailField.value === "") {
		emailField.style.borderColor = "rgb(255, 98, 87)";
		emailField.classList.add("empty-email");
	} else {
		if (!emailPattern.test(emailField.value)) {
			errorMessage.style.display = "block";
		} else {
			signupPage.style.display = "none";
			successMessage.style.display = "block";
			emailField.classList.add("new-placeholder");
		}
	}
});

dismissMessage.addEventListener("click", () => {
	successMessage.style.display = "none";
	signupPage.style.display = "block";
	emailField.value = "";
});
