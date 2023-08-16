const inputField = document.querySelector("#input-field");
const spanEl = document.querySelector("#span-el");
const subscribeBtn = document.querySelector("#subscribe-btn");
const successSctn = document.querySelector("#success-sctn");
const successBtn = document.querySelector("#success-btn");
const overLay = document.querySelector("#overlay");
const errorDiv = document.querySelector("#error-div");

// success section script
function toggle() {
  successSctn.classList.toggle("hidden");
  successSctn.classList.toggle("block");
  overLay.classList.toggle("hidden");
  overLay.classList.toggle("block");
}

subscribeBtn.addEventListener("click", () => {
  // validation
  if (inputField.value.includes("@")) {
    toggle();
    spanEl.innerHTML = `<span><b>
    ${inputField.value}</b>
    </span>`;
  } else {
    errorDiv.textContent = "Valid email required";
    inputField.style.color="hsl(4, 100%, 67%)"
    inputField.style.border="1px solid hsl(4, 100%, 67%)"
    // inputField.style.backgroundColor="hsla(4, 79%, 78%, 0.7)"
  }
});

successBtn.addEventListener("click", () => {
  toggle();
});
