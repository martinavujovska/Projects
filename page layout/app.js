$(document).ready(function () {
    let shrinkHeader = 150;
    $(window).scroll(function () {
        let scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header').addClass('shrink');
        } else {
            $('.header').removeClass('shrink')
        }
    })
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
})
