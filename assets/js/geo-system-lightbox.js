const lightbox = document.querySelector(".image-lightbox");
const lightboxImage = lightbox.querySelector(".image-lightbox-content");
const lightboxClose = lightbox.querySelector(".image-lightbox-close");

document.querySelectorAll(".image-demo-stack a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const thumbnail = link.querySelector("img");
    lightboxImage.src = link.href;
    lightboxImage.alt = thumbnail.alt;
    lightbox.showModal();
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

lightbox.addEventListener("close", () => {
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
});
