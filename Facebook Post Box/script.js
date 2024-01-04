const container = document.querySelector(".container"),
privacy = container.querySelector(".post .privacy"),
arrowBack = container.querySelector(".audience .arrow-back"),
audienceOptions = container.querySelectorAll(".audience .list li"),
selectedAudienceText = container.querySelector(".post .privacy span");

privacy.addEventListener("click", () => {
container.classList.add("active");
});

arrowBack.addEventListener("click", () => {
container.classList.remove("active");
});

// Handle audience options selection
audienceOptions.forEach(option => {
option.addEventListener("click", () => {
// Remove the 'active' class from all options
audienceOptions.forEach(opt => opt.classList.remove("active"));

// Add the 'active' class to the clicked option
option.classList.add("active");

// Update the selected audience in the post section
const audienceText = option.querySelector(".details p").textContent;

// Display the paragraph heading directly
selectedAudienceText.textContent = audienceText;

// Close the audience selection section
container.classList.remove("active");
});
});