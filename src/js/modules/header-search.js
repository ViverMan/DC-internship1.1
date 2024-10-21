function headerSearch() {

    const headIcon = document.querySelector('.header__icon');
    const search = document.querySelector('.header-btn');

    search.onclick = function () {
        headIcon.classList.toggle('display-none');
    }
}

export default headerSearch;