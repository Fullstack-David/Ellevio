// document.querySelector('.menu-toggle').addEventListener('click', function () {
//   document.querySelector('#main-nav').classList.toggle('is-open')

//   // Uppdaterar ARIA-attribut för tillgänglighet
//   const isExpanded = this.getAttribute('aria-expanded') === 'true' || false
//   this.setAttribute('aria-expanded', !isExpanded)
// })

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
