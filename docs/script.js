// GALLERY
const gallery = document.querySelector(".product-gallery");
const prevBtn = document.querySelector(".carousel-button.prev");
const nextBtn = document.querySelector(".carousel-button.next");

let index = 0;

nextBtn.addEventListener("click", () => {
  if (index < gallery.children.length - 1) index++;
  gallery.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener("click", () => {
  if (index > 0) index--;
  gallery.style.transform = `translateX(-${index * 100}%)`;
});

// MODAL

const images = document.querySelectorAll(".product-image");
const modal = document.getElementById("imageModal");
const modalTrack = modal.querySelector(".modal-track");
const closeBtn = modal.querySelector(".modal-close");
const prevBtM = modal.querySelector(".modal-nav.prev");
const nextBtM = modal.querySelector(".modal-nav.next");

let currentIndex = 0;
let imageSources = [];

images.forEach((img) => {
  imageSources.push(img.src);
});

function openModal(index) {
  currentIndex = index;
  modalTrack.innerHTML = "";
  imageSources.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    modalTrack.appendChild(img);
    console.log("Agregada imagen al modal:", src); // DEBUG
  });
  modal.style.display = "block";
  updateSlidePosition();
}

function updateSlidePosition() {
  modalTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

prevBtM.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

nextBtM.addEventListener("click", () => {
  if (currentIndex < imageSources.length - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// TABS
function showTab(tabId, event) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => (tab.style.display = "none"));

  document.getElementById(tabId).style.display = "block";

  document
    .querySelectorAll(".tab")
    .forEach((button) => button.classList.remove("active"));

  // ✅ Esta línea es segura y consistente
  event.currentTarget.classList.add("active");
}
