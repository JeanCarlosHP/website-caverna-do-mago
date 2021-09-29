const menuModal = document.querySelector('.menu-modal')
const itemsMenu = document.querySelector('.items-menu')
const hamburgerMenu = document.querySelector('.hamburger')

hamburgerMenu.addEventListener('click', () => {
  menuModal.classList.toggle('active')
  itemsMenu.classList.toggle('show')
  hamburgerMenu.classList.toggle('is-active')

  changeHeaderWhenScroll()
})

const linksItemsMenu = itemsMenu.querySelectorAll('a')
linksItemsMenu.forEach(link => {
  link.addEventListener('click', () => {
    menuModal.classList.remove('active')
    itemsMenu.classList.remove('show')
    hamburgerMenu.classList.remove('is-active')

    changeHeaderWhenScroll()
  })
})

const header = document.querySelector('header')
const headerHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  let hasNotActive = !menuModal.classList.contains('active')

  if (window.scrollY >= screen.height - 100 && hasNotActive) {
    header.classList.add('bg-dark')
  } else {
    header.classList.remove('bg-dark')
  }
}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
})

const btnShowProducts = document.querySelector('.btn-show-products')
const viewProducts = document.querySelector('.view-products')
const polygonSpan = document.querySelector('.polygon')

btnShowProducts.addEventListener('click', () => {
  viewProducts.classList.toggle('show')
  polygonSpan.classList.toggle('open')
})
