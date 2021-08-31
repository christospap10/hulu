const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

// when you click on the login button, the modal will appear
loginBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
//when you click on the close button, the modal will disappear
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
//when you click outside the modal, the modal will disappear
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
