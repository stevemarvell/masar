const burger = document.getElementById('burger') as HTMLAnchorElement | null;
const menu = document.getElementById('mobileMenu') as HTMLElement | null;

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');

    // ARIA state
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', (!expanded).toString());
  });
}
