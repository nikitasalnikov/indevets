document.querySelector('.header__burger').addEventListener('click', function() {

    if (this.classList.contains('active')) {
        this.classList.remove('active');
        document.querySelector('.header__menu').classList.remove('active');
        document.querySelector('.container').classList.remove('active');
        document.querySelector('body').classList.remove('active');
        document.querySelector('.log__form').classList.remove('open');

    } else {
        this.classList.add('active');
        document.querySelector('.header__menu').classList.add('active');
        document.querySelector('.container').classList.add('active');
        document.querySelector('body').classList.add('active');

    }

});
document.querySelector('.nav__btn').addEventListener('click', function() {
    document.querySelector('.log__form').classList.add('open');
});
document.querySelector('.close__btn').addEventListener('click', function() {
    document.querySelector('.log__form').classList.remove('open');
});