const burgerMenuIcon = document.querySelector('.burguer-menu');
const navMenu = document.querySelector('.nav-container ul');
const userMenu = document.querySelector('.nav-user-buttons');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

burgerMenuIcon.addEventListener('click', () => {
  if (window.innerWidth <= 1024) {
    if (navMenu.style.display === 'none') {
      navMenu.style.display = 'flex';
      userMenu.style.display = 'flex';
      main.style.display = 'none';
      footer.style.display = 'none';
    } else {
      navMenu.style.display = 'none';
      userMenu.style.display = 'none';
      main.style.display = '';
      footer.style.display = '';
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    navMenu.style.display = '';
    userMenu.style.display = '';
    main.style.display = '';
    footer.style.display = '';
  }
});
