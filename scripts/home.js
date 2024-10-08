document.addEventListener("DOMContentLoaded", () => {
  const typingElements = document.querySelectorAll("#intro, #degree");

  function applyTypingEffect(element) {
    const text = element.textContent;
    console.log(`Applying typing effect to: ${text}`); // Debug log
    element.textContent = "";
    let index = 0;

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }

    type();
  }

  function onScroll() {
    const homeSection = document.querySelector(".about");
    const rect = homeSection.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      typingElements.forEach((element) => applyTypingEffect(element));
      window.removeEventListener("scroll", onScroll);
    }
  }

  onScroll();

  window.addEventListener("scroll", onScroll);
});
