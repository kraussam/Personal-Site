const timeline = document.querySelector('.desc');
const events = document.querySelectorAll('.desc-item');

const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // The #show-timeline element is visible in the viewport
      // Show the timeline and events with a delay
      setTimeout(() => {
        timeline.style.opacity = 1;
        events.forEach((event, index) => {
          setTimeout(() => {
            event.style.opacity = 1;
          }, index * 1000);
        });
      }, 1000);

      // Stop observing the element
      timelineObserver.unobserve(entry.target);
    }
  });
});

// Observe the #show-timeline element
const showTimeline = document.getElementById('animation-fade');
timelineObserver.observe(showTimeline);