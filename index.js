const ICON = document.querySelector('#icon');
const LOGO = document.querySelector('#logo');
const COLLAPSE = document.querySelector('#collapse');
const LIST_ITEM = document.querySelectorAll('#collapse li');

ICON.addEventListener('click', () => {
  COLLAPSE.classList.toggle('nav_collapse');
  ICON.classList.add('nav_collapse');
  LOGO.classList.add('nav_collapse');
});

LIST_ITEM.forEach((li) => {
  li.addEventListener('click', () => {
    COLLAPSE.classList.toggle('nav_collapse');
    ICON.classList.remove('nav_collapse');
    LOGO.classList.remove('nav_collapse');
  });
});
