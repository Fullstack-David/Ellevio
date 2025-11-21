document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle')
  const closeMenuToggle = document.querySelector('.close-menu-toggle') // Vår nya knapp
  const mainNav = document.getElementById('main-nav')

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active')
    menuToggle.setAttribute('aria-expanded', mainNav.classList.contains('active'))
  })

  // Lägg till eventlyssnare för den nya stängningsknappen
  closeMenuToggle.addEventListener('click', () => {
    mainNav.classList.remove('active')
    menuToggle.setAttribute('aria-expanded', 'false') // Återställ hamburgarens aria-expanded
  })

  // Om du vill att menyn stängs när man klickar på en länk
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active')
      menuToggle.setAttribute('aria-expanded', 'false')
    })
  })
})


