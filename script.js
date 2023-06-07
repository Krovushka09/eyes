document.querySelector(".form__name-input--mail").addEventListener('keyup', checkValid);
document.querySelector(".form__name-input--phone").addEventListener('keyup', checkValid);

function checkValid(e) {
    const className = e.target.className.split(" ")[1];
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^\+?([0-9]{1})\)?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
    const validRegex = className === "form__name-input--mail" ? emailRegex : phoneRegex;
    const input = document.querySelector(`.${className}`);
    console.log(input.value);
    if (input.value.match(validRegex)) {
        input.style.borderColor = "green"
        return true;
    } else if (input.value === "") {
        input.style.removeProperty('border-color');
    } else {
        input.style.borderColor = "red"
        return false;
  }
}

document.querySelector(".question__form-textarea").addEventListener('keyup', countLetters);

function countLetters(e) {
    document.querySelector(".question__form-textarea-span").innerHTML = `${e.target.value.length}/180`
}