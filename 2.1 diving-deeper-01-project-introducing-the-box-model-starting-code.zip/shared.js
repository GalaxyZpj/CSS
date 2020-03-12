var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
ctaButton = document.querySelector('.main-nav__item-cta');

for (var i=0; i<selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}


function closeModal() {
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
}

toggleButton.addEventListener('click', function() {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
});

ctaButton.addEventListener('animationstart', function(event) {
    console.log('Animation started ', event);
});

ctaButton.addEventListener('animationend', function(event) {
    console.log('Animation ended ', event);
});

ctaButton.addEventListener('animationiteration', function(event) {
    console.log('Animation iteration ', event);
});
