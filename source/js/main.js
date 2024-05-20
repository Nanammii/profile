const routes = {
  'home': 'index.html',
  'map': 'map.html',
  'time': 'time.html',
  'profile': 'profile.html'
}

// Select active link
document.addEventListener('DOMContentLoaded', () => {
  const location = window.location.href;
  const navLinks = document.querySelectorAll('.navigation__link')
  navLinks.forEach(link => {
    if (link.href === location) {
      link.classList.add('navigation__link--active');
    }
  })
})

const handleCloseField = (element) => {
  element.classList.add('d-none')
}



