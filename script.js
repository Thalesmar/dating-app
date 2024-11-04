document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuNav = document.querySelector('.menu nav');

  menuToggle.addEventListener('click', function() {
      menuNav.classList.toggle('hidden');
  });
});
