let profileButton = document.querySelector('.profile__btn-title')

profileButton.addEventListener('click', () => {
  let popupElement = document.querySelector('.popup')

  let profileTitle = document.querySelector('.profile__title')
  let profileSubtitle = document.querySelector('.profile__subtitle')

  document.querySelector('#name').value = profileTitle.textContent
  document.querySelector('#job').value = profileSubtitle.textContent

  popupElement.classList.add('popup__opened')
})

function handleModalClose() {
  let closePopup = document.querySelector('.popup__opened')
  closePopup = closePopup.classList.remove('popup__opened')
}

let modalCloseButton = document.querySelector('.popup__close-btn-icon')
modalCloseButton.addEventListener('click', handleModalClose)

let formElement = document.querySelector('.popup__form')

function handleProfileFormSubmit(event) {
  event.preventDefault()

  let nameInput = document.querySelector('#name')
  let jobInput = document.querySelector('#job')

  document.querySelector('.profile__title').textContent = nameInput.value
  document.querySelector('.profile__subtitle').textContent = jobInput.value

  handleModalClose()
}

formElement.addEventListener('submit', handleProfileFormSubmit)
