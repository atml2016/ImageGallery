const imageUrls = [
  "https://via.placeholder.com/600x400/ff7f7f",
  "https://via.placeholder.com/600x400/85e085",
  "https://via.placeholder.com/600x400/7f7fff",
  "https://via.placeholder.com/600x400/f1c40f",
  "https://via.placeholder.com/600x400/ff9ff3",
  "https://via.placeholder.com/600x400/6c5ce7",
];

const gallery = document.getElementById("gallery");
const Lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("close");

imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Thumbnail";
  img.addEventListener("click", () => {
    openLightbox(url);
  });
  gallery.appendChild(img);
});

function openLightbox(url) {
  lightboxImage.src = url;
  Lightbox.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  Lightbox.style.display = "none";
});

Lightbox.addEventListener("click", (event) => {
  if (event.target === Lightbox) {
    Lightbox.style.display = "none";
  }
});
