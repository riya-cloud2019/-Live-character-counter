const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");
const maxLength = 100;

textInput.addEventListener("input", () => {
    let length = textInput.value.length;
    counter.innerText = length + " / " + maxLength + " characters";

    if (length > 80 && length < maxLength) {
        counter.className = "warning";
    } else if (length === maxLength) {
        counter.className = "danger";
    } else {
        counter.className = "";
    }
});
