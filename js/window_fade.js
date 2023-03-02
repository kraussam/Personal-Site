// Fade in on page load
window.onload = function() {
  document.body.classList.add('fade-in');
}

// Fade out and redirect on link click
document.querySelectorAll('a').forEach(link => {
  if (link.getAttribute('href').startsWith('/') || link.getAttribute('href').startsWith('../')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.style.transition = 'opacity 0.5s ease-in-out';
      document.body.classList.remove('fade-in');
      setTimeout(() => {
        document.body.style.opacity = 0;
        window.location.href = link.getAttribute('href');
      }, 500);
    });
  }
});

// Add fade-in class back when new page has finished loading
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    document.body.classList.add('fade-in');
  }
});
