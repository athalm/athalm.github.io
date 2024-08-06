const scrollContainer = document.getElementById("scrollContainer");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let currentIndex = 0;

const scrollSlides = () => {
  currentIndex = (currentIndex + 1) % scrollContainer.children.length;
  scrollContainer.scrollTo({
    left: scrollContainer.children[currentIndex].offsetLeft,
    behavior: "smooth",
  });
};

let intervalId = setInterval(scrollSlides, 8000);

const scrollToSlide = (index) => {
  currentIndex = index;
  scrollContainer.scrollTo({
    left: scrollContainer.children[currentIndex].offsetLeft,
    behavior: "smooth",
  });
  clearInterval(intervalId);
  intervalId = setInterval(scrollSlides, 8000);
};

rightArrow.addEventListener("click", () => {
  scrollToSlide((currentIndex + 1) % scrollContainer.children.length);
});

leftArrow.addEventListener("click", () => {
  scrollToSlide(
    (currentIndex - 1 + scrollContainer.children.length) %
      scrollContainer.children.length
  );
});
