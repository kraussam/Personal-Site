const showTimelineBtn = document.getElementById('show-timeline');

showTimelineBtn.addEventListener('click', () => {
  // Add a delay of 1 second before starting the timeline animation
  setTimeout(() => {
    const timeline = document.querySelector('.timeline');
    const events = document.querySelectorAll('.event');

    // Show the timeline
    timeline.style.opacity = 1;

    // Loop through each event and show them with a delay
    events.forEach((event, index) => {
      setTimeout(() => {
        event.style.opacity = 1;
      }, index * 1000);
    });
  }, 1000);
});