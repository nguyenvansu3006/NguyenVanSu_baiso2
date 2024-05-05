const images = document.querySelectorAll(".wrapper .image img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const close = document.querySelector(".close");
const galleryImg = document.querySelector(".gallery-inner img");
const gallery = document.querySelector(".gallery");

var currentIndex = 0;

function showGallery() {
    if (currentIndex == 0) {
        prev.classList.add('hide')
    } 
    else {
        prev.classList.remove('hide')
    }
    if (currentIndex == images.length - 1) {
        prev.classList.add('hide')
    }
    else {
        prev.classList.remove('hide')
    }
    gallery.classList.add("show");
    galleryImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  });
});

close.addEventListener("click", () => {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) gallery.classList.remove("show");
});
prev.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
});
next.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
});