const preDomain = window.location.origin + '/accountancy/';
const startApp = () => {
    settleSlideShow();
    numbers();
    securitySlideshow();
    testimonials();
    services();
    ajaxPagination();
    burger();
    tabs();
}

const closeApp = () => {
    closeSlideshow();
    closeTestimonials();
    closeNumberScroll();
    closeSecuritySlideshow();
    closeServiceScrolling();
    closeBurger();
    closeTabs();
}
