document.getElementById("bounce-start").addEventListener("click", () => {
  const chars = document.getElementById("bounce").textContent;
  const charArr = chars.split("");
  let newHtml = "";
  for (let i = charArr.length - 1; i >= 0; i--) {
    const char = charArr[i];
    newHtml = `<span class="bounce-text">${char}</span>` + newHtml;
  }
  document.getElementById("bounce").innerHTML = newHtml;

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
});
