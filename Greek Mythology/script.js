const leftButtons = document.querySelectorAll(".left-btn");
leftButtons.forEach(button => {
    button.addEventListener("click", function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateImagePosition();
      }
    });
});


const rightButtons = document.querySelectorAll(".right-btn");
rightButtons.forEach(button => {
    button.addEventListener("click", function() {
      if (currentIndex < imageCount - 1) {
        currentIndex++;
        updateImagePosition();
      }
    });
});


const images = document.querySelector(".images");

let imageCount = images.children.length;
let currentIndex = 0;

function updateImagePosition() {
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  rightBtn.addEventListener("click", function () {
    if (currentIndex < imageCount - 1) {
      currentIndex++;
      updateImagePosition();
    }
  });
  
  leftBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateImagePosition();
    }
  });


