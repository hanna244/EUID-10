const button = document.querySelector('.button-goToTop');
const GO_TO_TOP_BUTTON_ACTIVE = 'is--active';
const headerHeight = 60;

const showButton = (el, className, height) => {
  if (window.scrollY >= height && !el.classList.contains(className)) {
    el.classList.add(className);
  }
};
const hideButton = (el, className, height) => {
  if (window.scrollY < height && el.classList.contains(className)) {
    el.classList.remove(className);
  }
};

const handleGoToTopButton = function (e) {
  showButton(this, GO_TO_TOP_BUTTON_ACTIVE, headerHeight);
  hideButton(this, GO_TO_TOP_BUTTON_ACTIVE, headerHeight);
};

window.addEventListener('scroll', handleGoToTopButton.bind(button));
