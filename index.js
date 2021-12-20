const ICON = document.querySelector('#icon');
const LOGO = document.querySelector('#logo');


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
