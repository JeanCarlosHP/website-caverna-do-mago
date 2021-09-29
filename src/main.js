const menuModal = document.querySelector('.menu-modal')
const hamburgerMenu = document.querySelector('.hamburger')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('is-active')
  menuModal.classList.toggle('active')
})
