const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('heroSection__navbar__content')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})