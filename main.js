window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //verificar se a sessão passou da linha
  //quais dados vai precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //informações dos dados e da lógica
  /* console.log(
    'O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetLine
  ) */

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  //A seção termina onde?
  const sectionEndAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine
  //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (window.innerWidth < 1024) {
    if (scrollY > 400) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }

    if (scrollY > 3926) {
      backToTopButton.classList.add('showOnFooter')
    } else {
      backToTopButton.classList.remove('showOnFooter')
    }
  } else if (window.innerWidth > 1024) {
    if (scrollY > 400) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }

    if (scrollY > 2422) {
      backToTopButton.classList.add('showOnFooter')
    } else {
      backToTopButton.classList.remove('showOnFooter')
    }
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
