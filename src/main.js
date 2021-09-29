const menuModal = document.querySelector('.menu-modal')
const hamburgerMenu = document.querySelector('.hamburger')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('is-active')
  menuModal.classList.toggle('active')

  changeHeaderWhenScroll()
})

const header = document.querySelector('header')
const headerHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  let hasNotActive = !menuModal.classList.contains('active')

  if (window.scrollY >= screen.height - 71 && hasNotActive) {
    header.classList.add('bg-dark')
  } else {
    header.classList.remove('bg-dark')
  }
}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
})
