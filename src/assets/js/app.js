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

const videoBtn = document.querySelector('#about__video-btn')
const videoBtnIcon = document.querySelector('#about__btn-icon')
const videoOverlay = document.querySelector('#about__video-overlay')
const videoFile = document.querySelector('#about__video')

videoBtn.addEventListener('click', function () {
  function toggleOverlay(event) {
    if (event.type === 'mouseleave') {
      videoOverlay.classList.add('hidden')
    } else {
      videoOverlay.classList.remove('hidden')
    }
  }

  if (videoFile.paused) {
    videoFile.play()
    videoBtnIcon.src = 'assets/images/story/pause-white.svg'

    videoOverlay.onmouseleave = toggleOverlay
    videoOverlay.onmouseenter = toggleOverlay
  } else {
    videoFile.pause()
    videoBtnIcon.src = 'assets/images/story/play-white.svg'
    videoOverlay.onmouseleave = null
    videoOverlay.onmouseenter = null
  }
})
// End of Video
