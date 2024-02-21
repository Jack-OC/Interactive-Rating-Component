const rating_section = document.querySelector(".rating-section");
const thanks_section = document.querySelector(".thanks-section");
const submit_btn = document.querySelector(".submit-btn");
const rating_numbers = document.querySelectorAll('[type="radio"]');
const rating_selected = document.getElementById("rating-selected");


submit_btn.addEventListener("click", () => {
    thanks_section.classList.remove("hidden");
    rating_section.classList.add("hidden")
});

rating_numbers.forEach((number) => {
    number.addEventListener("click", () => {
        rating_selected.innerHTML = number.value;
    })
})