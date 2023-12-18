const burgerMenuIcon = document.querySelector('.burguer-menu');

const navMenu = document.querySelector('.nav-container ul');

const userMenu = document.querySelector('.nav-user-buttons');

burgerMenuIcon.addEventListener('click', () => {
  if (navMenu.style.display === 'none') {
    navMenu.style.display = 'flex';
    navMenu.style.backgroundColor = 'white';
    userMenu.style.display = 'flex';
    userMenu.style.backgroundColor = 'white';
  } else {
    navMenu.style.display = 'none';
    userMenu.style.display = 'none';
  }
});
