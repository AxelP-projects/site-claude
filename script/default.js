const btnScrollToTop = document.querySelector("#back-to-top-btn");

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
    document.querySelector("#back-to-top-btn").style.opacity = window.scrollY > 20 ? '0.8' : '0';
});

function backToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
}