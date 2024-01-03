profileButton.addEventListener('click', () => {
  const popupElement = document.querySelector('.popup')

  // pega os valores do profile e do job
  let profileTitle = document.querySelector('.profile__title')
  let profileSubtitle = document.querySelector('.profile__subtitle')

  document.querySelector('#name').value = profileTitle.textContent
  document.querySelector('#job').value = profileSubtitle.textContent

  popupElement.classList.add('popup__opened')
})
