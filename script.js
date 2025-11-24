document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle')
  const closeMenuToggle = document.querySelector('.close-menu-toggle') // Vår nya knapp
  const mainNav = document.getElementById('main-nav')
  const backToTopButton = document.getElementById('back-to-top')

  // Initialisera temainställningar
  const themeToggle = document.getElementById('theme-toggle')
  const body = document.body
  const storageKey = 'preferredTheme'

  // Funktion för att tillämpa temat
  const setTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-mode')
      // uppdatera aria-label för tillgänglighet
      themeToggle.setAttribute('aria-label', 'Byt till ljust tema')
      localStorage.setItem(storageKey, 'dark')

    } else {
      body.classList.remove('dark-mode')
      // uppdatera aria-label för tillgänglighet
      themeToggle.setAttribute('aria-label', 'Byt till mörkt tema')
      localStorage.setItem(storageKey, 'light')
    }
  }

  // initialesera temat baserat på lagring
  const savedTheme = localStorage.getItem(storageKey);
  // använd systemetsinställning (prefers-color-scheme) som fallback
  const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);

  // Lägg till eventlyssnare för temaväxling
  if(themeToggle){
    themeToggle.addEventListener('click', () => {
      //konrollera det nuvarande temat baserat på klassen
      const isDarkMode = body.classList.contains('dark-mode')
      const newTheme = isDarkMode ? 'light' : 'dark'

      setTheme(newTheme)
    })
  }
    
  // Visa eller dölj "Tillbaka till toppen"-knappen baserat på scrollposition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });


  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Lägg till eventlyssnare för hamburgarmenyn
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


