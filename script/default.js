const btnScrollToTop = document.querySelector("#back-to-top-btn");

// toggle 'scroll to top' based on scroll position
window.addEventListener('scroll', e => {
    document.querySelector("#back-to-top-btn").style.opacity = window.scrollY > 20 ? '0.8' : '0';
    document.querySelector("#scroll-down-grp").style.display = window.scrollY < 20 ? 'flex' : 'none';
});

function backToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
}

const html = document.body;
const hiddenButton = document.getElementById('hidden-button')

html.addEventListener('click', function(event) {
  if (!hiddenButton.contains(event.target)) {
    hiddenButton.checked = false
  }
});

const titles = document.getElementsByClassName('subtitle-group')
window.addEventListener('scroll', e => {
  for (let i = 0; i < titles.length; i++) {
    const currentElement = titles[i]
    const nextElement = titles.length > i ? titles[i + 1] : undefined


    // Get the offset position of the navbar
    const stickyUp = currentElement.parentElement.parentElement.offsetTop;
    const stickyDown = nextElement ? nextElement.parentElement.parentElement.offsetTop : currentElement.parentElement.parentElement.parentElement.offsetHeight + stickyUp;

    if (i === 0) {
      console.log(stickyUp)
    }

    if (nextElement && window.scrollY > (nextElement.parentElement.parentElement.offsetTop - nextElement.offsetHeight)) {
      currentElement.classList.add("sticky-absolute");
      currentElement.style.top = (nextElement.parentElement.parentElement.offsetTop - nextElement.offsetHeight) + "px"
    }

    if (nextElement && window.scrollY < (nextElement.parentElement.parentElement.offsetTop - (nextElement.offsetHeight))) {
      currentElement.classList.remove("sticky-absolute");
      currentElement.style.top = null
      currentElement.classList.add("sticky");
    }

    if (window.scrollY > stickyUp && window.scrollY < stickyDown) {
        currentElement.classList.add("sticky");
    } else {
      if (stickyUp > 0) {
        currentElement.classList.remove("sticky");
      }
    }
  }
});
