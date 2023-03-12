const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // trigger when half of the container is in view
};

const container = document.querySelector('.fade-container');
const elementsToFadeIn = container.querySelectorAll('.fade-item');

const myObserver = new IntersectionObserver((entries, myObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let delayTime = 1000;
      elementsToFadeIn.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = 1;
        }, delayTime);
        delayTime += 1000;
      });
      myObserver.unobserve(entry.target);
    }
  });
}, options);

myObserver.observe(container);
