// Inicializa el Swiper principal
const mainSwiper = new Swiper(".main-swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Modal y Swiper en el modal
const modal = document.getElementById("imageModal");
const closeBtn = document.querySelector(".modal-close");
const modalWrapper = modal.querySelector(".modal-swiper .swiper-wrapper");
let modalSwiper;

const productImages = document.querySelectorAll(".product-image");
const imageSources = Array.from(productImages).map((img) => img.src);

productImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    // Vaciar e insertar imágenes
    modalWrapper.innerHTML = "";
    imageSources.forEach((src) => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide");
      slide.innerHTML = `<img src="${src}" />`;
      modalWrapper.appendChild(slide);
    });

    modal.style.display = "flex";

    // Iniciar Swiper del modal
    modalSwiper = new Swiper(".modal-swiper", {
      initialSlide: index,
      loop: true,
      navigation: {
        nextEl: ".modal-swiper .swiper-button-next",
        prevEl: ".modal-swiper .swiper-button-prev",
      },
      pagination: {
        el: ".modal-swiper .swiper-pagination",
        clickable: true,
      },
    });
  });
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  if (modalSwiper) modalSwiper.destroy(true, true);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
    if (modalSwiper) modalSwiper.destroy(true, true);
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
