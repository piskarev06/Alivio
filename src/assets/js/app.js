const iconMenu = document.querySelector('.header__icon')
const menuBody = document.querySelector('.header__menu')
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}
// End of Burger

const menuLinks = document.querySelectorAll('.nav__link[data-goto]')
if (menuLinks.length > 0) {
  menuLinks.forEach((el) => {
    el.addEventListener('click', onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('header').offsetHeight

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active')
        menuBody.classList.remove('_active')
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      })
      e.preventDefault()
    }
  }
}
// End of Scroll
