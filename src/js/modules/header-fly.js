function hedaderFly() {
    let lastScroll = 0;
    const deafult = 200;
    const header = document.querySelector('.header');

    // -- для кроссбраузерности или или --//
    const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
    const conainHide = () => header.classList.contains('hide');

    window.addEventListener('scroll', () => {

        if (scrollPosition() > lastScroll && !conainHide() && scrollPosition() > deafult) {
            //-- прокручиваем вниз --//
            // console.log('down');
            header.classList.add('hide');
        }
        else if (scrollPosition() < lastScroll && conainHide()) {
            //-- прокручиваем вверх --//
            // console.log('up');
            header.classList.remove('hide');
        }

        lastScroll = scrollPosition()
    })
}

export default hedaderFly;