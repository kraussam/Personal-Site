// Get the element to animate
const bounceEl = document.getElementById("bounce");

// Create a new IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // The element is visible in the viewport
      // Trigger the bounce animation
      const chars = bounceEl.textContent;
      const charArr = chars.split("");
      let newHtml = "";
      for (let i = charArr.length - 1; i >= 0; i--) {
        const char = charArr[i];
        newHtml = `<span class="bounce-text">${char}</span>` + newHtml;
      }
      bounceEl.innerHTML = newHtml;

      const bounceText = document.querySelectorAll(".bounce-text");
      bounceText.forEach((char, index) => {
        const delay = (index + 1) * 500;
        char.style.animationDelay = `${delay}ms`;
        char.style.animationDuration = `2s`;
        setTimeout(() => {
          char.classList.add("start-bounce");
        }, delay);
      });

      bounceText.forEach((char) => {
        char.addEventListener("animationend", () => {
          char.style.opacity = 1;
        });
      });

      // Stop observing the element
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0 // Requires no element to be visible
});

// Observe the element to trigger the animation
const bounceStart = document.getElementById("bounce");
observer.observe(bounceStart);
