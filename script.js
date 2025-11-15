document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('#main-nav').classList.toggle('is-open')

  // Uppdaterar ARIA-attribut för tillgänglighet
  const isExpanded = this.getAttribute('aria-expanded') === 'true' || false
  this.setAttribute('aria-expanded', !isExpanded)
})
