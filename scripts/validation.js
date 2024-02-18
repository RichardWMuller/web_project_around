const profileInputField = document.querySelector(".popup__input-box-name");

profileInputField.addEventListener("change", enableValidation);

function addErrorMessage(element, spanElement) {
  const spanMessage = document.querySelector(
    spanElement.replace("element", element.name)
  );
  spanMessage.textContent = element.validationMessage;
}

function removeErrorMessage(spanElement) {
  const spanMessage = document.querySelector(spanElement);
  spanMessage.textContent = " ";
}

function addErrorClass(element, errorClass) {
  element.classList.add(errorClass);
}

function removeErrorClass(element, errorClass) {
  element.classList.remove(errorClass);
}

function enableValidation(elements) {
  const formElements = document.querySelector(elements.formSelector);
  const inputElements = formElements.querySelectorAll(elements.inputSelector);
  const inputs = Array.from(inputElements);

  console.log("inputs", inputs);
  const { spanSelector, errorClass } = elements;

  inputs.forEach((input) => {
    input.addEventListener("onkeydown", (event) => {
      const element = event.target;
      console.log("element", element.value);
      if (!element.validity.valid || element.value == "") {
        addErrorClass(element, errorClass);
        addErrorMessage(element, spanSelector);
      } else {
        removeErrorClass(element, errorClass);
        removeErrorMessage(spanSelector);
      }
    });
  });
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input-box",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__button-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error",
});
// const forminput = document.querySelector(".popup__form");
// const formInput = formElement.querySelector(".popup__input-box-name");
// const formError = formElement.querySelector(".popup__error");

// console.log("teste", formInput);
// // A mensagem de erro será o segundo parâmetro da função
// const showInputError = (element, errorMessage) => {
//   element.classList.add("form__input_type_error");
//   // Substitua o conteúdo da mensagem de erro pelo argumento errorMessage validado
//   formError.textContent = errorMessage;
//   formError.classList.add("form__input-error_active");
// };

// const hideInputError = (element) => {
//   element.classList.remove("form__input_type_error");
//   formError.classList.remove("form__input-error_active");
//   // Redefina o erro
//   formError.textContent = "";
// };

// const isValid = () => {
//   if (!formInput.validity.valid) {
//     // A própria mensagem de erro é o segundo parâmetro da função
//     showInputError(formInput, formInput.validationMessage);
//   } else {
//     hideInputError(formInput);
//   }
// };

// // Chame a função isValid() para cada entrada de caractere
// formInput.addEventListener("input", isValid);
// // O resto da programação permanece inalterada
